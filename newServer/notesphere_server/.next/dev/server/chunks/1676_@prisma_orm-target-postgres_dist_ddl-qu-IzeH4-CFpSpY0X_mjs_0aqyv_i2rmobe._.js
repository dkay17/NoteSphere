module.exports = [
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/ddl-qu-IzeH4-CFpSpY0X.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>extensionInSchemaAst,
    "B",
    ()=>schemaExistsAst,
    "C",
    ()=>disableRowLevelSecurity,
    "D",
    ()=>dropSchema,
    "E",
    ()=>dropPolicy,
    "F",
    ()=>noNullValuesAst,
    "G",
    ()=>tableIsEmptyAst,
    "H",
    ()=>sequenceNameAvailableAst,
    "I",
    ()=>relationKindAst,
    "J",
    ()=>unboundTableMovedAst,
    "K",
    ()=>tablePrimaryKeyAst,
    "L",
    ()=>rlsEnabledAst,
    "M",
    ()=>indexExistsAst,
    "N",
    ()=>nativeEnumTypeExistsAst,
    "O",
    ()=>dropType,
    "P",
    ()=>nativeEnumValueExistsAst,
    "R",
    ()=>rlsPolicyDefinitionAst,
    "S",
    ()=>createType,
    "T",
    ()=>dropIndex,
    "U",
    ()=>sequenceValuesFitAst,
    "V",
    ()=>schemaHoldsNoObjectsAst,
    "W",
    ()=>tableExistsAst,
    "_",
    ()=>constraintExistsAst,
    "a",
    ()=>alterPolicyRename,
    "b",
    ()=>createSchema,
    "c",
    ()=>alterTableSetSchema,
    "d",
    ()=>columnExistsAst,
    "f",
    ()=>columnNullabilityAst,
    "g",
    ()=>constraintDefinitionAst,
    "h",
    ()=>columnTypeOidAst,
    "i",
    ()=>alterIndexRename,
    "j",
    ()=>indexDefinitionAst,
    "k",
    ()=>extensionExistsAst,
    "l",
    ()=>columnDefaultAst,
    "m",
    ()=>columnTypeAst,
    "n",
    ()=>addConstraintAction,
    "o",
    ()=>alterSchemaRename,
    "p",
    ()=>columnOwnsSequenceAst,
    "q",
    ()=>toRegclass,
    "r",
    ()=>alterColumnTypeAction,
    "s",
    ()=>alterTable,
    "t",
    ()=>addColumnAction,
    "u",
    ()=>columnDefaultSequenceAst,
    "v",
    ()=>createIndex,
    "w",
    ()=>dropDefaultAction,
    "x",
    ()=>createTable,
    "y",
    ()=>createPolicy,
    "z",
    ()=>rlsPolicyExistsAst
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-ids-2htdtS66-CJPMZv1t.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-schema-BBWgs4fX-DWdYxNi8.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/nodes-G8VTh4PM-DNvIhHag.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__opaqueSql$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/opaque-sql-Dset3kln-CtsPDTXn.mjs [app-route] (ecmascript) <export f as opaqueSql>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/namespace-VUH2dgnS-By5y75h9.mjs [app-route] (ecmascript) <export r as UNBOUND_NAMESPACE_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/relational-core__contract-free.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
;
//#region ../../../3-targets/postgres/1-target/dist/ddl-qu-IzeH4.mjs
/**
* `to_regclass($1)` with the qualified table name bound as a text parameter.
* Thin vocabulary wrapper over the core `cfExpr.fn` helper — the target
* supplies only the template and the codec'd operand.
*/ function toRegclass(qualifiedName) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].fn({
        method: "to_regclass",
        template: "to_regclass({{self}})",
        self: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].param(qualifiedName, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        returns: {
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"],
            nullable: true
        }
    });
}
/**
* Typed builder for the migration planner's table-existence checks. Produces
* FROM-less `SELECT to_regclass($1) IS [NOT] NULL AS "result"` ASTs with the
* qualified table name bound as a text parameter — never inlined into the SQL.
*
* `schema` is a namespace coordinate: the framework `__unbound__` sentinel
* elides the qualifier (search_path decides at runtime); any other id
* qualifies as `"schema"."table"`.
*/ function tableExistsAst(schema, table) {
    const regclass = toRegclass((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v"])({
        id: schema,
        entries: {
            table: {}
        }
    }).qualifyTable(table));
    return {
        tableAbsent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", regclass.isNull()).build(),
        tablePresent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", regclass.isNotNull()).build()
    };
}
/**
* Typed builder for the migration planner's constraint-existence checks.
* Produces `SELECT [NOT ]EXISTS (SELECT 1 FROM pg_constraint c JOIN
* pg_namespace n ON n.oid = c.connamespace WHERE c.conname = $1 AND
* n.nspname = $2 [AND c.conrelid = to_regclass($3)]) AS "result"` with the
* constraint name, schema name, and qualified table name bound as text
* parameters.
*
* When `table` is omitted the check matches by name + schema across all
* tables. Pass `table` to scope the check to a single table (prevents false
* matches on identically-named constraints in different tables). `schema`
* is a namespace coordinate: the `__unbound__` sentinel compares `nspname`
* against `current_schema()` instead of a bound parameter.
*/ function constraintExistsAst(options) {
    const namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v"])({
        id: options.schema,
        entries: {
            table: {}
        }
    });
    const conditions = [
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "conname").eqParam(options.constraintName, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "nspname").eqExpr(namespace.schemaFilterExpression())
    ];
    if (options.table !== void 0) conditions.push(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "conrelid").eqExpr(toRegclass(namespace.qualifyTable(options.table))));
    const inner = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_constraint", "c")).join((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_namespace", "n"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "oid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "connamespace"))).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf(conditions));
    return {
        constraintPresent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner())).build(),
        constraintAbsent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].notExists(inner())).build()
    };
}
function checkNamespace(schema) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v"])({
        id: schema,
        entries: {
            table: {}
        }
    });
}
function informationSchemaColumns() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["d"]({
        schema: "information_schema",
        name: "columns"
    });
}
function infoSchemaColumnConditions(options) {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("table_schema").eqExpr(checkNamespace(options.schema).schemaFilterExpression()),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("table_name").eqParam(options.table, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("column_name").eqParam(options.column, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"])
    ];
}
function infoSchemaColumnQuery(conditions) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from(informationSchemaColumns()).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf(conditions));
}
/**
* Typed builder for column-existence checks over
* `information_schema.columns`, with schema, table, and column names bound
* as text parameters.
*/ function columnExistsAst(options) {
    const inner = ()=>infoSchemaColumnQuery(infoSchemaColumnConditions(options));
    return {
        columnPresent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner())).build(),
        columnAbsent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].notExists(inner())).build()
    };
}
/**
* Typed nullability check: EXISTS over `information_schema.columns` with
* `is_nullable` compared against the bound `'YES'` / `'NO'` marker.
*/ function columnNullabilityAst(options) {
    const conditions = [
        ...infoSchemaColumnConditions(options),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("is_nullable").eqParam(options.nullable ? "YES" : "NO", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"])
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(infoSchemaColumnQuery(conditions))).build();
}
/**
* Typed default-presence checks over `information_schema.columns`.
* `defaultPresent` / `defaultAbsent` assert the column row exists with a
* non-null / null `column_default`; `noDefault` is the NOT EXISTS variant
* (also true when the column row is missing entirely).
*/ function columnDefaultAst(options) {
    const withDefault = ()=>infoSchemaColumnQuery([
            ...infoSchemaColumnConditions(options),
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("column_default").isNotNull()
        ]);
    const withoutDefault = ()=>infoSchemaColumnQuery([
            ...infoSchemaColumnConditions(options),
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("column_default").isNull()
        ]);
    return {
        defaultPresent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(withDefault())).build(),
        defaultAbsent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(withoutDefault())).build(),
        noDefault: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].notExists(withDefault())).build()
    };
}
/**
* Typed check that a column takes its default from the sequence it owns: the column's default (`pg_attrdef`) depends on the sequence `pg_get_serial_sequence` finds for it. A `nextval(...)` default records that dependency on the sequence it reads, so a default that reads another sequence, an earlier default, or no default does not pass. It compares catalog identities, never the default's text.
*/ function columnDefaultSequenceAst(options) {
    const regclassOf = (catalog)=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].raw(`'${catalog}'::regclass`, {
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"],
            nullable: false
        });
    const defaultOnOwnedSequence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_attrdef", "d")).join((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_attribute", "a"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("a", "attrelid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("d", "adrelid")).and(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("a", "attnum").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("d", "adnum")))).join((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_depend", "dep"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("dep", "objid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("d", "oid"))).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf([
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("d", "adrelid").eqExpr(toRegclass(checkNamespace(options.schema).qualifyTable(options.table))),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("a", "attname").eqParam(options.column, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("dep", "classid").eqExpr(regclassOf("pg_attrdef")),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("dep", "refclassid").eqExpr(regclassOf("pg_class")),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("dep", "refobjid").eqExpr(ownedSequenceOf(options))
    ]));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(defaultOnOwnedSequence)).build();
}
/**
* The sequence the column owns, as a `regclass`, found in the catalog with `pg_get_serial_sequence`; `NULL` when it owns none. A SERIAL column and an identity column both own one, and it keeps its name when the table or column is renamed.
*/ function ownedSequenceOf(location) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].fn({
        method: "pg_get_serial_sequence",
        template: "pg_get_serial_sequence({{self}}, {{arg0}})::regclass",
        self: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].param(checkNamespace(location.schema).qualifyTable(location.table), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        args: [
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].param(location.column, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"])
        ],
        returns: {
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"],
            nullable: true
        }
    });
}
/**
* Typed check that a column's autoincrement default has a sequence to use: the column already owns one, whatever its name, or no relation has the name `sequence`, which the operation creates.
*/ function sequenceNameAvailableAst(options) {
    const qualifiedSequence = checkNamespace(options.schema).qualifyTable(options.sequence);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", ownedSequenceOf(options).isNotNull().or(toRegclass(qualifiedSequence).isNull())).build();
}
/**
* Typed column-type check: EXISTS over `pg_attribute` joined to `pg_class`
* and `pg_namespace`, comparing `format_type(a.atttypid, a.atttypmod)`
* against the bound expected display type and excluding dropped columns.
*/ function columnTypeAst(options) {
    const formatType = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].fn({
        method: "format_type",
        template: "format_type({{self}}, {{arg0}})",
        self: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("a", "atttypid"),
        args: [
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("a", "atttypmod")
        ],
        returns: {
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"],
            nullable: false
        }
    });
    const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_attribute", "a")).join((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_class", "c"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "oid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("a", "attrelid"))).join((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_namespace", "n"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "oid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "relnamespace"))).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf([
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "nspname").eqExpr(checkNamespace(options.schema).schemaFilterExpression()),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "relname").eqParam(options.table, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("a", "attname").eqParam(options.column, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        formatType.eqParam(options.expectedType, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("a", "attisdropped").not()
    ]));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner)).build();
}
/**
* Typed primary-key existence check over `pg_index` joined to `pg_class`
* and `pg_namespace`, with a LEFT JOIN on the index relation so an
* optional `constraintName` can scope the match to a named constraint.
*/ function tablePrimaryKeyAst(options) {
    const conditions = [
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "nspname").eqExpr(checkNamespace(options.schema).schemaFilterExpression()),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "relname").eqParam(options.table, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("i", "indisprimary")
    ];
    if (options.constraintName !== void 0) conditions.push(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c2", "relname").eqParam(options.constraintName, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]));
    const inner = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_index", "i")).join((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_class", "c"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "oid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("i", "indrelid"))).join((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_namespace", "n"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "oid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "relnamespace"))).leftJoin((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_class", "c2"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c2", "oid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("i", "indexrelid"))).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf(conditions));
    return {
        pkPresent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner())).build(),
        pkAbsent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].notExists(inner())).build()
    };
}
/**
* Typed emptiness check: NOT EXISTS over the user table itself with
* `LIMIT 1`. The table is addressed through the namespace's polymorphic
* `tableSource` (qualified for named schemas, bare for the unbound slot).
*/ function tableIsEmptyAst(schema, table) {
    const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from(checkNamespace(schema).tableSource(table)).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).limit(1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].notExists(inner)).build();
}
/**
* Typed no-NULL-values data check used by `SET NOT NULL` prechecks:
* NOT EXISTS over the user table where the column IS NULL.
*/ function noNullValuesAst(options) {
    const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from(checkNamespace(options.schema).tableSource(options.table)).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef(options.column).isNull());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].notExists(inner)).build();
}
/**
* Typed extension existence check over `pg_extension`, with the extension
* name bound as a text parameter.
*/ function extensionExistsAst(extensionName) {
    const inner = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_extension")).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("extname").eqParam(extensionName, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]));
    return {
        extensionPresent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner())).build(),
        extensionAbsent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].notExists(inner())).build()
    };
}
/**
* Typed check that an extension is installed in one schema: `pg_extension` joined to `pg_namespace`, with both names bound as text parameters.
*/ function extensionInSchemaAst(extensionName, schema) {
    const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_extension", "e")).join((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_namespace", "n"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "oid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("e", "extnamespace"))).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf([
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("e", "extname").eqParam(extensionName, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "nspname").eqParam(schema, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"])
    ]));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner)).build();
}
/**
* Typed RLS-policy existence check over `pg_policies`, with schema, table,
* and policy names bound as text parameters (never inlined). The `schema`
* coordinate is the resolved live-database schema name (e.g. `'public'`),
* compared against `pg_policies.schemaname` as a bound parameter.
*/ function rlsPolicyExistsAst(options) {
    const inner = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_policies")).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf([
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("schemaname").eqParam(options.schema, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("tablename").eqParam(options.table, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("policyname").eqParam(options.policyName, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"])
        ]));
    return {
        policyPresent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner())).build(),
        policyAbsent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].notExists(inner())).build()
    };
}
/**
* Typed row-level-security enabled check over `pg_class` joined to
* `pg_namespace`, comparing `pg_class.relrowsecurity` against the expected
* boolean. Schema and table names are bound as text parameters.
*/ function rlsEnabledAst(schema, table) {
    const inner = (enabled)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_class", "c")).join((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_namespace", "n"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "oid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "relnamespace"))).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf([
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "nspname").eqParam(schema, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "relname").eqParam(table, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
            enabled ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "relrowsecurity") : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "relrowsecurity").not()
        ]));
    return {
        rlsEnabled: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner(true))).build(),
        rlsDisabled: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner(false))).build()
    };
}
/**
* Typed index existence check riding the same `to_regclass` vocabulary as
* `tableExistsAst`, with the qualified index name bound as a text parameter.
*/ function indexExistsAst(schema, indexName) {
    const regclass = toRegclass(checkNamespace(schema).qualifyTable(indexName));
    return {
        indexPresent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", regclass.isNotNull()).build(),
        indexAbsent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", regclass.isNull()).build()
    };
}
/**
* Typed native-enum type existence check over `pg_type` joined to
* `pg_namespace`, restricted to enum types (`typtype = 'e'`). Schema and
* type name are bound as text parameters; `schema` is a namespace
* coordinate (the `__unbound__` sentinel compares against
* `current_schema()`), matching {@link tableExistsAst} et al.
*/ function nativeEnumTypeExistsAst(schema, typeName) {
    const inner = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_type", "t")).join((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_namespace", "n"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "oid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("t", "typnamespace"))).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf([
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "nspname").eqExpr(checkNamespace(schema).schemaFilterExpression()),
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("t", "typname").eqParam(typeName, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("t", "typtype").eqParam("e", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"])
        ]));
    return {
        typePresent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner())).build(),
        typeAbsent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].notExists(inner())).build()
    };
}
/**
* Typed native-enum member-value existence check over `pg_enum` joined to
* `pg_type` and `pg_namespace`. Schema, type name, and the candidate member
* value are bound as text parameters — used by `addNativeEnumValue`'s
* precheck (value absent) and postcheck (value present).
*/ function nativeEnumValueExistsAst(options) {
    const inner = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_enum", "e")).join((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_type", "t"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("t", "oid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("e", "enumtypid"))).join((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_namespace", "n"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "oid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("t", "typnamespace"))).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf([
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "nspname").eqExpr(checkNamespace(options.schema).schemaFilterExpression()),
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("t", "typname").eqParam(options.typeName, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("e", "enumlabel").eqParam(options.value, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"])
        ]));
    return {
        valuePresent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner())).build(),
        valueAbsent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].notExists(inner())).build()
    };
}
/**
* Whether the attribute numbers in `keys` (an `int2[]` or `int2vector` such as `pg_constraint.conkey` or `pg_index.indkey`) name, in order, exactly the columns `names` of the relation `relation`. Key `0`, an expression slot of an index, names no column.
*/ function keyColumnsAre(keys, relation, names) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].fn({
        method: "key_columns_are",
        template: "(SELECT coalesce(jsonb_agg(key_attribute.attname ORDER BY key_column.position), '[]'::jsonb) FROM unnest({{self}}::int2[]) WITH ORDINALITY AS key_column(attnum, position) JOIN pg_attribute key_attribute ON key_attribute.attrelid = {{arg0}} AND key_attribute.attnum = key_column.attnum) = ({{arg1}})::jsonb",
        self: keys,
        args: [
            relation,
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].param(JSON.stringify(names), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"])
        ],
        returns: {
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["n"],
            nullable: false
        }
    });
}
/**
* Typed check that the relation `name` exists and its `pg_class.relkind` is one of `kinds`, so a view, sequence or index of the same name does not pass as a table.
*/ function relationKindAst(options) {
    const relation = toRegclass(checkNamespace(options.schema).qualifyTable(options.name));
    const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_class", "c")).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf([
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "oid").eqExpr(relation),
        options.kinds.map((kind)=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "relkind").eqParam(kind, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"])).reduce((either, kind)=>either.or(kind))
    ]));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner)).build();
}
/**
* Typed check that the constraint `constraintName` on `table` is of kind `contype` (`p`, `u`, `f` or `c`), on the columns `columns` in order when given, and for a foreign key, references `foreignKey`'s table and columns in order with its delete and update actions. It reads only catalog values, never the text Postgres prints for a constraint.
*/ function constraintDefinitionAst(options) {
    const namespace = checkNamespace(options.schema);
    const conditions = [
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "conname").eqParam(options.constraintName, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "nspname").eqExpr(namespace.schemaFilterExpression()),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "conrelid").eqExpr(toRegclass(namespace.qualifyTable(options.table))),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "contype").eqParam(options.contype, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"])
    ];
    if (options.columns !== void 0) conditions.push(keyColumnsAre(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "conkey"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "conrelid"), options.columns));
    const foreignKey = options.foreignKey;
    if (foreignKey !== void 0) conditions.push(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "confrelid").eqExpr(toRegclass(checkNamespace(foreignKey.referencedSchema).qualifyTable(foreignKey.referencedTable))), keyColumnsAre(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "confkey"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "confrelid"), foreignKey.referencedColumns), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "confdeltype").eqParam(foreignKey.onDelete, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "confupdtype").eqParam(foreignKey.onUpdate, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]));
    const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_constraint", "c")).join((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_namespace", "n"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "oid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "connamespace"))).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf(conditions));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner)).build();
}
/**
* Typed check that `index` is an index on `table` with the given uniqueness and access method, on the columns `columns` in order, and with or without a predicate. For an index written as an element list (`expression`) it checks no elements: the list can be a real expression, which Postgres stores in `indexprs`, or plain columns with a sort order, operator class or collation, which it stores as columns, and comparing its text would need the form Postgres prints.
*/ function indexDefinitionAst(options) {
    const namespace = checkNamespace(options.schema);
    const indexColumn = (name)=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("i", name);
    const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_class", "c")).join((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_index", "i"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("i", "indexrelid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "oid"))).join((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_am", "m"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("m", "oid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "relam"))).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf([
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "oid").eqExpr(toRegclass(namespace.qualifyTable(options.index))),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "relkind").eqParam("i", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]).or(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("c", "relkind").eqParam("I", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"])),
        indexColumn("indrelid").eqExpr(toRegclass(namespace.qualifyTable(options.table))),
        options.unique ? indexColumn("indisunique") : indexColumn("indisunique").not(),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("m", "amname").eqParam(options.method, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        ..."columns" in options.elements ? [
            indexColumn("indexprs").isNull().and(keyColumnsAre(indexColumn("indkey"), indexColumn("indrelid"), options.elements.columns))
        ] : [],
        options.hasPredicate ? indexColumn("indpred").isNotNull() : indexColumn("indpred").isNull()
    ]));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner)).build();
}
/**
* Typed check that the RLS policy `policyName` on `table` exists with the command `command` (as `pg_policies.cmd` prints it, such as `ALL` or `SELECT`), the permissive flag, and exactly the roles `roles`, in any order. A role written as `current_user`, `current_role` or `session_user` stands for the role it names in the session that runs the check, as `CREATE POLICY` resolves it. It never compares the policy's expressions.
*/ function rlsPolicyDefinitionAst(options) {
    const rolesAre = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].fn({
        method: "roles_are",
        template: `(SELECT coalesce(jsonb_agg(role_name ORDER BY role_name), '[]'::jsonb) FROM (SELECT DISTINCT policy_role::text COLLATE "C" AS role_name FROM unnest({{self}}) AS policy_role) AS actual_roles) = (SELECT coalesce(jsonb_agg(role_name ORDER BY role_name), '[]'::jsonb) FROM (SELECT DISTINCT (CASE expected_role WHEN 'current_user' THEN current_user::text WHEN 'current_role' THEN current_role::text WHEN 'session_user' THEN session_user::text ELSE expected_role END) COLLATE "C" AS role_name FROM jsonb_array_elements_text(({{arg0}})::jsonb) AS expected_role) AS expected_roles)`,
        self: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("roles"),
        args: [
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].param(JSON.stringify(options.roles), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"])
        ],
        returns: {
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["n"],
            nullable: false
        }
    });
    const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_policies")).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf([
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("schemaname").eqParam(options.schema, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("tablename").eqParam(options.table, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("policyname").eqParam(options.policyName, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("cmd").eqParam(options.command, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("permissive").eqParam(options.permissive ? "PERMISSIVE" : "RESTRICTIVE", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        rolesAre
    ]));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner)).build();
}
/**
* Typed check that the column owns a sequence, whatever its name, of the type `sequenceType` (`smallint`, `integer` or `bigint`). With `orNone`, a column that owns no sequence passes too.
*/ function columnOwnsSequenceAst(options) {
    const ownedSequence = ownedSequenceOf(options);
    const sequenceType = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].fn({
        method: "to_regtype",
        template: "to_regtype({{self}})",
        self: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].param(options.sequenceType, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        returns: {
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"],
            nullable: true
        }
    });
    const sequenceOfType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_sequence", "s")).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf([
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("s", "seqrelid").eqExpr(ownedSequence),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("s", "seqtypid").eqExpr(sequenceType)
    ]));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", options.orNone ? ownedSequence.isNull().or(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(sequenceOfType)) : ownedSequence.isNotNull().and(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(sequenceOfType))).build();
}
/**
* Typed column-type check by the type's identity: compares the column's `pg_attribute.atttypid` with `to_regtype(type)`, or with that type's array type for a list. It checks a type that claims a kind, such as an enum, whatever schema it is in, and a type the stack's data types do not read. `to_regtype` drops a type modifier, so `varchar(20)` matches any `varchar`.
*/ function columnTypeOidAst(options) {
    const namespace = checkNamespace(options.schema);
    const expectedType = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].fn({
        method: "to_regtype",
        template: options.many ? "(SELECT \"t\".\"typarray\" FROM \"pg_catalog\".\"pg_type\" AS \"t\" WHERE \"t\".\"oid\" = to_regtype({{self}}))" : "to_regtype({{self}})",
        self: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].param(options.type, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        returns: {
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"],
            nullable: true
        }
    });
    const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_attribute", "a")).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf([
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("a", "attrelid").eqExpr(toRegclass(namespace.qualifyTable(options.table))),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("a", "attname").eqParam(options.column, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("a", "atttypid").eqExpr(expectedType),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("a", "attisdropped").not()
    ]));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner)).build();
}
/**
* Typed check that the sequence the column owns has handed out no value above `maxValue`, so narrowing it to a smaller integer type keeps every value it already gave. The sequence's position is read only when its current maximum is above `maxValue`, that is when the change narrows it, so widening needs no rights on the sequence. A sequence that has never been read, and a column that owns none, pass.
*/ function sequenceValuesFitAst(options) {
    const pastMax = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].fn({
        method: "sequence_past_max",
        template: "CASE WHEN {{self}} <= ({{arg0}})::bigint THEN false ELSE coalesce(pg_sequence_last_value(\"s\".\"seqrelid\"), 0) > ({{arg0}})::bigint END",
        self: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("s", "seqmax"),
        args: [
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].param(options.maxValue, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"])
        ],
        returns: {
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["n"],
            nullable: false
        }
    });
    const narrowedPastMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_sequence", "s")).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("s", "seqrelid").eqExpr(ownedSequenceOf(options)).and(pastMax));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].notExists(narrowedPastMax)).build();
}
/** Typed schema existence check over `pg_namespace`, with the schema name bound as a text parameter. */ function schemaExistsAst(schema) {
    const inner = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_namespace")).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].identifierRef("nspname").eqParam(schema, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]));
    return {
        schemaPresent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].exists(inner())).build(),
        schemaAbsent: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].notExists(inner())).build()
    };
}
function objectsInSchema(catalog, namespaceColumn, schema, only = []) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().from((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])(catalog, "o")).join((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfTable"])("pg_namespace", "n"), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "oid").eqExpr(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("o", namespaceColumn))).project("one", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].lit(1)).where(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf([
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("n", "nspname").eqParam(schema, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]),
        ...only
    ]));
}
/**
* Whether a schema holds no relations (tables, views, sequences, indexes), no types of its own and
* no functions, so `DROP SCHEMA` without `CASCADE` succeeds. A table's row type and an array type
* belong to another object and are not counted.
*/ function schemaHoldsNoObjectsAst(schema) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].allOf([
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].notExists(objectsInSchema("pg_class", "relnamespace", schema)),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].notExists(objectsInSchema("pg_type", "typnamespace", schema, [
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("o", "typrelid").eqLit(0),
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].columnRef("o", "typelem").eqLit(0)
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].notExists(objectsInSchema("pg_proc", "pronamespace", schema))
    ])).build();
}
/**
* After a table of the unbound namespace moves to `toSchema`: the search path finds no table of that
* name, or finds only the moved one, which it does when `toSchema` is on the search path.
*/ function unboundTableMovedAst(table, toSchema) {
    const found = toRegclass(checkNamespace(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__["UNBOUND_NAMESPACE_ID"]).qualifyTable(table));
    const moved = toRegclass(checkNamespace(toSchema).qualifyTable(table));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exprSelect"])().project("result", found.isNull().or(found.eqExpr(moved))).build();
}
/**
* Build a Postgres `CREATE TABLE` query node.
*
* Pass `constraints` for table-level composite primary keys, foreign keys, and
* unique constraints — use the {@link PrimaryKeyConstraint}, {@link ForeignKeyConstraint},
* and {@link UniqueConstraint} classes from `@internal/sql-relational-core/ast`.
*
* Precondition: identifiers (`table`, `schema`, column names/types) are
* emitted to SQL verbatim — they are not quoted or escaped, so callers must
* pass pre-trusted values (e.g. fixed control-plane identifiers). String-literal
* default values, by contrast, are single-quote-escaped (embedded `'` doubled)
* by the renderer. Identifier quoting for untrusted identifiers is added when
* the migration planner adopts this lowering path.
*/ function createTable(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["p"](options);
}
/**
* Build a Postgres `CREATE SCHEMA` query node. See {@link createTable} for the
* pre-trusted-identifier precondition.
*/ function createSchema(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["f"](options);
}
/**
* Build a Postgres `CREATE TYPE … AS ENUM (…)` DDL node. The type name (and
* optional schema) are quoted by the renderer; the enum member `values` are
* emitted as single-quote-escaped string literals. An absent `schema` renders
* the type name unqualified so the connection's `search_path` resolves it.
*/ function createType(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["m"](options);
}
/**
* Build a Postgres `DROP TYPE` DDL node. See {@link createType} for the
* identifier-quoting and unqualified-when-schemaless behaviour.
*/ function dropType(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["b"](options);
}
/**
* Build an `ADD COLUMN` action for use inside {@link alterTable}.
* The column is a structured `DdlColumn` so codec-encoded defaults flow
* through the adapter's `pgRenderDdlColumn` → `pgRenderDdlColumnDefault` path.
*/ function addColumnAction(column) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"](column);
}
/**
* Build a `DROP DEFAULT` action (`ALTER COLUMN "<name>" DROP DEFAULT`) for
* use inside {@link alterTable}. The renderer quotes the column name.
*/ function dropDefaultAction(columnName) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"](columnName);
}
/**
* Build an `ADD CONSTRAINT` action for use inside {@link alterTable}. The renderer writes the constraint as `CREATE TABLE` writes it.
*/ function addConstraintAction(constraint) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"](constraint);
}
/**
* Build an `ALTER COLUMN "<columnName>" TYPE <type> USING …` action for use inside {@link alterTable}. `type` is written verbatim; `using` is opaque SQL, and when it is absent or empty the conversion is `"<columnName>"::<type>`.
*/ function alterColumnTypeAction(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"]({
        columnName: options.columnName,
        type: options.type,
        using: options.using ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__opaqueSql$3e$__["opaqueSql"])(options.using) : void 0
    });
}
/**
* Build a Postgres `ALTER TABLE` query node carrying one or more actions.
* See {@link addColumnAction}, {@link dropDefaultAction}, {@link addConstraintAction} and {@link alterColumnTypeAction} for building actions.
*/ function alterTable(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"](options);
}
/**
* Build a Postgres `CREATE POLICY` DDL node.
*
* Identifiers (`schema`, `table`, `name`) are quoted by the renderer.
* `using` and `withCheck` are emitted verbatim as predicate SQL — callers
* must supply safe, pre-validated SQL expressions.
*/ function createPolicy(options) {
    const { using, withCheck, ...rest } = options;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["d"]({
        ...rest,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("using", using === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__opaqueSql$3e$__["opaqueSql"])(using)),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("withCheck", withCheck === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__opaqueSql$3e$__["opaqueSql"])(withCheck))
    });
}
/**
* Build a Postgres `DROP POLICY` DDL node.
* Identifiers (`schema`, `table`, `name`) are quoted by the renderer.
*/ function dropPolicy(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v"](options);
}
/**
* Build a Postgres `ALTER POLICY … RENAME TO` DDL node.
* Identifiers (`schema`, `table`, `name`, `newName`) are quoted by the renderer.
*/ function alterPolicyRename(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"](options);
}
/**
* Build a Postgres `CREATE [UNIQUE] INDEX` DDL node. Identifiers (`schema`,
* `table`, `name`, column elements, `type`, option keys) are quoted by the
* renderer; the `expression` element list and the `where` predicate are
* inserted verbatim (opaque SQL). An absent `schema` renders the object
* names unqualified (the unbound namespace).
*/ function createIndex(options) {
    const { elements, where, ...rest } = options;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"]({
        ...rest,
        elements: "columns" in elements ? {
            columns: elements.columns
        } : {
            expression: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__opaqueSql$3e$__["opaqueSql"])(elements.expression)
        },
        where: where === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__opaqueSql$3e$__["opaqueSql"])(where)
    });
}
/**
* Build a Postgres `DROP INDEX` DDL node. The index name (and optional
* schema) are quoted by the renderer.
*/ function dropIndex(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_"](options);
}
/**
* Build a Postgres `ALTER INDEX … RENAME TO` DDL node. Identifiers are
* quoted by the renderer.
*/ function alterIndexRename(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"](options);
}
/**
* Build a Postgres `ALTER TABLE … DISABLE ROW LEVEL SECURITY` DDL node.
* Identifiers (`schema`, `table`) are quoted by the renderer.
*/ function disableRowLevelSecurity(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["g"](options);
}
/**
* Build a Postgres `ALTER TABLE … SET SCHEMA` DDL node. Identifiers are quoted by the renderer; an
* absent `schema` leaves the table unqualified (the unbound namespace).
*/ function alterTableSetSchema(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"](options);
}
/** Build a Postgres `ALTER SCHEMA … RENAME TO` DDL node. Identifiers are quoted by the renderer. */ function alterSchemaRename(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"](options);
}
/** Build a Postgres `DROP SCHEMA` DDL node, without `CASCADE`. The name is quoted by the renderer. */ function dropSchema(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$nodes$2d$G8VTh4PM$2d$DNvIhHag$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["y"](options);
}
;
}),
];

//# sourceMappingURL=1676_%40prisma_orm-target-postgres_dist_ddl-qu-IzeH4-CFpSpY0X_mjs_0aqyv_i2rmobe._.js.map