const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const mysql = require('mysql2/promise');
const { Client } = require('pg');

const tables = [
  {
    source: 'Users',
    target: 'Users',
    columns: [
      'id',
      'name',
      'email',
      'password',
      'institution',
      'level',
      'role',
      'isPremium',
      'subscriptionExpiry',
      'bio',
      'isActive',
      'weeklyDownloads',
      'lastDownloadReset',
      'createdAt',
      'updatedAt',
    ],
    booleans: ['isPremium', 'isActive'],
  },
  {
    source: 'Notes',
    target: 'Notes',
    columns: [
      'id',
      'title',
      'course',
      'courseCode',
      'lecturer',
      'institution',
      'fileUrl',
      'fileName',
      'fileSize',
      'fileType',
      'uploaderId',
      'tags',
      'description',
      'summary',
      'downloads',
      'verified',
      'rating',
      'ratingCount',
      'createdAt',
      'updatedAt',
    ],
    booleans: ['verified'],
  },
  {
    source: 'DownloadLogs',
    target: 'DownloadLogs',
    columns: [
      'id',
      'userId',
      'noteId',
      'downloadDate',
      'ipAddress',
      'createdAt',
      'updatedAt',
    ],
    booleans: [],
  },
];

const getMysqlOptions = () => {
  if (process.env.MYSQL_DATABASE_URL) {
    return process.env.MYSQL_DATABASE_URL;
  }

  const host = process.env.MYSQL_HOST || process.env.DB_HOST;
  const user = process.env.MYSQL_USER || process.env.DB_USER;
  const password = process.env.MYSQL_PASSWORD || process.env.DB_PASSWORD;
  const database = process.env.MYSQL_DATABASE || process.env.DB_NAME;
  if (!host || !user || !database) {
    throw new Error(
      'Set MYSQL_DATABASE_URL or MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, and MYSQL_DATABASE to the legacy MySQL source.',
    );
  }

  return {
    host,
    user,
    password,
    database,
    port: Number(process.env.MYSQL_PORT || process.env.DB_PORT || 3306),
  };
};

const countRows = async (client, table) => {
  const result = await client.query(`SELECT COUNT(*)::int AS count FROM "public"."${table}"`);
  return result.rows[0].count;
};

const mapRow = (row, table) =>
  table.columns.map((column) => {
    const value = row[column];
    if (value === undefined) {
      throw new Error(`Source table ${table.source} is missing expected column "${column}"`);
    }
    if (value === null) {
      return null;
    }
    if (table.booleans.includes(column)) {
      return value === true || value === 1 || value === '1';
    }
    return value;
  });

const insertRows = async (client, table, rows) => {
  const chunkSize = 500;
  const quotedColumns = table.columns.map((column) => `"${column}"`).join(', ');

  for (let offset = 0; offset < rows.length; offset += chunkSize) {
    const chunk = rows.slice(offset, offset + chunkSize);
    const values = [];
    const placeholders = chunk.map((row, rowIndex) => {
      const rowPlaceholders = row.map((value, columnIndex) => {
        values.push(value);
        return `$${rowIndex * table.columns.length + columnIndex + 1}`;
      });
      return `(${rowPlaceholders.join(', ')})`;
    });

    await client.query(
      `INSERT INTO "public"."${table.target}" (${quotedColumns}) VALUES ${placeholders.join(', ')}`,
      values,
    );
  }
};

const run = async () => {
  const apply = process.argv.includes('--apply');
  const targetUrl = process.env.DIRECT_URL || process.env.DATABASE_URL;
  if (!targetUrl) {
    throw new Error('Set DIRECT_URL (preferred) or DATABASE_URL to the target PostgreSQL database.');
  }

  const source = await mysql.createConnection(getMysqlOptions());
  const target = new Client({ connectionString: targetUrl });
  let transactionStarted = false;

  try {
    await target.connect();
    const sourceRows = {};
    for (const table of tables) {
      const [rows] = await source.query(`SELECT * FROM \`${table.source}\``);
      sourceRows[table.target] = rows;
    }

    const targetCounts = {};
    for (const table of tables) {
      targetCounts[table.target] = await countRows(target, table.target);
    }

    console.log('Legacy MySQL row counts:', {
      Users: sourceRows.Users.length,
      Notes: sourceRows.Notes.length,
      DownloadLogs: sourceRows.DownloadLogs.length,
    });
    console.log('PostgreSQL destination row counts:', targetCounts);

    if (!apply) {
      console.log('Dry run only. Back up both databases, then run with --apply to import into empty PostgreSQL tables.');
      return;
    }

    if (Object.values(targetCounts).some((count) => count !== 0)) {
      throw new Error('Import aborted: destination tables must be empty. No destination rows were changed.');
    }

    await target.query('BEGIN');
    transactionStarted = true;
    await target.query(
      'LOCK TABLE "public"."Users", "public"."Notes", "public"."DownloadLogs" IN EXCLUSIVE MODE',
    );

    for (const table of tables) {
      await insertRows(target, table, sourceRows[table.target].map((row) => mapRow(row, table)));
    }

    for (const table of tables) {
      await target.query(
        `SELECT setval(pg_get_serial_sequence($1, 'id'), COALESCE(MAX("id"), 1), COUNT(*) > 0) FROM "public"."${table.target}"`,
        [`public."${table.target}"`],
      );
    }

    for (const table of tables) {
      const imported = await countRows(target, table.target);
      if (imported !== sourceRows[table.target].length) {
        throw new Error(
          `Verification failed for ${table.target}: expected ${sourceRows[table.target].length} rows, found ${imported}`,
        );
      }
    }

    await target.query('COMMIT');
    transactionStarted = false;
    console.log('Import completed. Source MySQL data was not modified.');
  } catch (error) {
    if (transactionStarted) {
      await target.query('ROLLBACK');
    }
    throw error;
  } finally {
    await source.end();
    await target.end();
  }
};

run().catch((error) => {
  console.error('MySQL-to-PostgreSQL import failed:', error.message);
  process.exitCode = 1;
});
