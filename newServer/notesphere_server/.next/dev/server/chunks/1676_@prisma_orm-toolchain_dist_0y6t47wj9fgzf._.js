(()=>{"use strict";module.exports = [
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/constants-CM-w38DQ-Cz_EXbOc.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>EMPTY_CONTRACT_HASH
]);
//#region ../../../1-framework/3-tooling/migration/dist/constants-CM-w38DQ.mjs
/**
* Sentinel value representing the absence of a contract (empty/new project).
* This is a human-readable marker, not a real SHA-256 hash.
*/ const EMPTY_CONTRACT_HASH = "empty";
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/contract-snapshot-store-6gIBcUeb-DJK3OM0j.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>snapshotsImportPathFrom,
    "i",
    ()=>readContractSnapshotJsonTolerant,
    "n",
    ()=>createSnapshotContentVerifier,
    "o",
    ()=>writeContractSnapshot,
    "r",
    ()=>readContractSnapshotJson,
    "t",
    ()=>contractSnapshotDir
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/errors-DXha_4l--relAaiI4.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$hash$2d$BAZVWU4a$2d$BQovI7hF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/hash-BAZVWU4a-BQovI7hF.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__CONTRACT_SNAPSHOTS_DIRNAME$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/control-DzRwUDn-.mjs [app-route] (ecmascript) <export n as CONTRACT_SNAPSHOTS_DIRNAME>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__et__as__storageHashHex$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/control-DzRwUDn-.mjs [app-route] (ecmascript) <export et as storageHashHex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript) <export j as join>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__b__as__relative$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript) <export b as relative>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalize$2d$json$2d$ZPawceQR$2d$Dua1VNEB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalizeJson$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/canonicalize-json-ZPawceQR-Dua1VNEB.mjs [app-route] (ecmascript) <export t as canonicalizeJson>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
;
;
;
;
;
;
;
;
//#region ../../../1-framework/3-tooling/migration/dist/contract-snapshot-store-6gIBcUeb.mjs
const CONTRACT_JSON_FILE = "contract.json";
const CONTRACT_DTS_FILE = "contract.d.ts";
function hasErrnoCode(error, code) {
    return error instanceof Error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(error).code === code;
}
async function directoryExists(p) {
    try {
        return (await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["stat"])(p)).isDirectory();
    } catch (error) {
        if (hasErrnoCode(error, "ENOENT")) return false;
        throw error;
    }
}
function contractSnapshotDir(migrationsDir, storageHash) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(migrationsDir, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__CONTRACT_SNAPSHOTS_DIRNAME$3e$__["CONTRACT_SNAPSHOTS_DIRNAME"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__et__as__storageHashHex$3e$__["storageHashHex"])(storageHash));
}
function createSnapshotContentVerifier(hooks) {
    return {
        assertSnapshotContentMatches (contractJson, storageHash, jsonPath) {
            const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(contractJson ?? {});
            const computedHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$hash$2d$BAZVWU4a$2d$BQovI7hF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])({
                target: record.target,
                targetFamily: record.targetFamily,
                storage: record.storage,
                hooks
            });
            if (computedHash !== storageHash) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"])({
                storageHash,
                computedHash,
                jsonPath
            });
        }
    };
}
async function writeContractSnapshot(migrationsDir, storageHash, input) {
    const dir = contractSnapshotDir(migrationsDir, storageHash);
    const actualStorageHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(input.contractJson).storage?.storageHash;
    if (actualStorageHash !== storageHash) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(storageHash, typeof actualStorageHash === "string" ? actualStorageHash : String(actualStorageHash), dir);
    if (await directoryExists(dir)) return {
        written: false,
        dir
    };
    const tmpDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(migrationsDir, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__CONTRACT_SNAPSHOTS_DIRNAME$3e$__["CONTRACT_SNAPSHOTS_DIRNAME"]), `.tmp-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__et__as__storageHashHex$3e$__["storageHashHex"])(storageHash)}-${Date.now()}-${(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(4).toString("hex")}`);
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdir"])(tmpDir, {
        recursive: true
    });
    const jsonContent = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalize$2d$json$2d$ZPawceQR$2d$Dua1VNEB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalizeJson$3e$__["canonicalizeJson"])(input.contractJson)}\n`;
    const dtsContent = input.contractDts.endsWith("\n") ? input.contractDts : `${input.contractDts}\n`;
    try {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(tmpDir, CONTRACT_JSON_FILE), jsonContent);
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(tmpDir, CONTRACT_DTS_FILE), dtsContent);
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["rename"])(tmpDir, dir);
    } catch (error) {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["rm"])(tmpDir, {
            recursive: true,
            force: true
        });
        if (hasErrnoCode(error, "EEXIST") || hasErrnoCode(error, "ENOTEMPTY")) return {
            written: false,
            dir
        };
        throw error;
    }
    return {
        written: true,
        dir
    };
}
/**
* When `verifyContent` is supplied, the parsed snapshot's content is checked
* against the hash it was addressed by before being returned — the store is
* content-addressed, and a snapshot edited in place under an unchanged hash
* would otherwise flow into planning as if it were the recorded contract.
*/ async function readContractSnapshotJson(migrationsDir, storageHash, verifyContent) {
    const jsonPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(contractSnapshotDir(migrationsDir, storageHash), CONTRACT_JSON_FILE);
    let raw;
    try {
        raw = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(jsonPath, "utf-8");
    } catch (error) {
        if (hasErrnoCode(error, "ENOENT")) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])(storageHash, jsonPath);
        throw error;
    }
    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch (e) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["g"])(jsonPath, e instanceof Error ? e.message : String(e));
    }
    verifyContent?.assertSnapshotContentMatches(parsed, storageHash, jsonPath);
    return parsed;
}
/**
* Tolerant read: a missing store entry (ENOENT), an unparseable
* `contract.json`, the JSON literal `null`, or a `storageHash` that isn't a
* well-formed 64-hex value all resolve to `undefined` rather than
* throwing — parity with the catch-all tolerance of the pre-store
* `readEndContractJson` (`io.ts`), which never validated the hash it was
* keyed by either. Any other fs error (e.g. `EACCES` on a present-but-
* unreadable file) propagates rather than silently loading a contract-less
* package. When `verifyContent` is supplied, an entry whose content does not
* recompute to its address also resolves to `undefined` — tampered content
* must not flow onward, and the strict store reads report the same file
* loudly as `MIGRATION.CONTRACT_SNAPSHOT_CONTENT_MISMATCH`.
*/ async function readContractSnapshotJsonTolerant(migrationsDir, storageHash, verifyContent) {
    let jsonPath;
    try {
        jsonPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(contractSnapshotDir(migrationsDir, storageHash), CONTRACT_JSON_FILE);
    } catch  {
        return;
    }
    let raw;
    try {
        raw = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(jsonPath, "utf-8");
    } catch (error) {
        if (hasErrnoCode(error, "ENOENT")) return;
        throw error;
    }
    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch  {
        return;
    }
    if (parsed === null) return;
    try {
        verifyContent?.assertSnapshotContentMatches(parsed, storageHash, jsonPath);
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"].is(error) && error.code === "MIGRATION.CONTRACT_SNAPSHOT_CONTENT_MISMATCH") return;
        throw error;
    }
    return parsed;
}
function snapshotsImportPathFrom(packageDir, migrationsDir) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__b__as__relative$3e$__["relative"])(packageDir, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(migrationsDir, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__CONTRACT_SNAPSHOTS_DIRNAME$3e$__["CONTRACT_SNAPSHOTS_DIRNAME"])).split("\\").join("/");
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/domain-type-generation-BlYB8GiS-k0HNTf4f.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "C",
    ()=>renderValueSetType,
    "D",
    ()=>serializeNamespaceId,
    "E",
    ()=>serializeExecutionType,
    "O",
    ()=>serializeObjectKey,
    "S",
    ()=>renderValueSetOverride,
    "T",
    ()=>serializeCrossReference,
    "_",
    ()=>parameterizedOutputTypeFunctionsAlias,
    "a",
    ()=>generateCodecTypeIntersection,
    "b",
    ()=>renderTypeOverridesMap,
    "c",
    ()=>generateHashTypeAliases,
    "d",
    ()=>generateModelFieldsType,
    "f",
    ()=>generateModelRelationsType,
    "g",
    ()=>generateValueObjectsDescriptorType,
    "h",
    ()=>generateValueObjectTypeAliases,
    "i",
    ()=>fieldTypesMapExpression,
    "k",
    ()=>serializeValue,
    "l",
    ()=>generateImportLines,
    "m",
    ()=>generateRootsType,
    "n",
    ()=>deduplicateImports,
    "o",
    ()=>generateContractFieldDescriptor,
    "p",
    ()=>generateModelsType,
    "r",
    ()=>emitterError,
    "s",
    ()=>generateFieldTypeOverridesMap,
    "t",
    ()=>PARAMETERIZED_OUTPUT_TYPE_FUNCTIONS,
    "u",
    ()=>generateModelFieldEntry,
    "v",
    ()=>renderCodecTypeOverride,
    "w",
    ()=>resolveFieldTypeOverride,
    "x",
    ()=>renderValueLiteralType,
    "y",
    ()=>renderTypeOverride
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$type$2d$expression$2d$safety$2d$CgHTWypx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/type-expression-safety-CgHTWypx.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-route] (ecmascript) <export o as structuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$storage$2d$value$2d$objects$2d$Di8Cowdl$2d$QNqJXkk0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__valueObjectsWithCoordinates$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/storage-value-objects-Di8Cowdl-QNqJXkk0.mjs [app-route] (ecmascript) <export n as valueObjectsWithCoordinates>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$emission$2d$CeoAV9mj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__keepInternalSpecifiers$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/emission-CeoAV9mj.mjs [app-route] (ecmascript) <export t as keepInternalSpecifiers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$B7QKO3dq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__entityAt$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/ir-B7QKO3dq.mjs [app-route] (ecmascript) <export s as entityAt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$dist$2d$D1f6xr7F$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__renderImports$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/dist-D1f6xr7F.mjs [app-route] (ecmascript) <export r as renderImports>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$dist$2d$D1f6xr7F$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__tsStringLiteral$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/dist-D1f6xr7F.mjs [app-route] (ecmascript) <export s as tsStringLiteral>");
;
;
;
;
;
;
;
//#region ../../../1-framework/3-tooling/emitter/dist/domain-type-generation-BlYB8GiS.mjs
function emitterError(code, message, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])(code, message, options);
}
function serializeValue(value) {
    if (value === null) return "null";
    if (value === void 0) return "undefined";
    if (typeof value === "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$dist$2d$D1f6xr7F$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__tsStringLiteral$3e$__["tsStringLiteral"])(value);
    if (typeof value === "number" || typeof value === "boolean") return String(value);
    if (typeof value === "bigint") return `${value}n`;
    if (Array.isArray(value)) return `readonly [${value.map((v)=>serializeValue(v)).join(", ")}]`;
    if (typeof value === "object") return `{ ${Object.entries(value).sort(([left], [right])=>left < right ? -1 : left > right ? 1 : 0).map(([k, v])=>`readonly ${serializeObjectKey(k)}: ${serializeValue(v)}`).join("; ")} }`;
    return "unknown";
}
function serializeObjectKey(key) {
    if (/^[$A-Z_a-z][$\w]*$/.test(key)) return key;
    return serializeValue(key);
}
function serializeNamespaceId(value) {
    return `${serializeValue(value)} & NamespaceId`;
}
function serializeCrossReference(ref) {
    return `{ readonly namespace: ${serializeNamespaceId(String(ref.namespace))}; readonly model: ${serializeValue(ref.model)}${ref.space !== void 0 ? `; readonly space: ${serializeValue(ref.space)}` : ""} }`;
}
function generateRootsType(roots) {
    if (!roots || Object.keys(roots).length === 0) return "Record<string, never>";
    return `{ ${Object.entries(roots).map(([key, value])=>`readonly ${serializeObjectKey(key)}: ${serializeCrossReference(value)}`).join("; ")} }`;
}
function valueObjectFieldTypeText(type) {
    return `{ readonly kind: "valueObject"; readonly plane: "storage"; readonly namespaceId: ${serializeValue(type.namespaceId)}; readonly entityKind: "valueObject"; readonly entityName: ${serializeValue(type.entityName)} }`;
}
function contractFieldModifierSuffix(field) {
    return (field.many ? `; readonly many: { readonly elementNullable: ${field.many.elementNullable} }` : "") + (field.dict === true ? "; readonly dict: true" : "");
}
function generateModelFieldEntry(fieldName, field) {
    const mods = contractFieldModifierSuffix(field);
    const { nullable, type } = field;
    if (type.kind === "scalar") {
        const typeParamsSpec = type.typeParams && Object.keys(type.typeParams).length > 0 ? `; readonly typeParams: ${serializeValue(type.typeParams)}` : "";
        return `readonly ${serializeObjectKey(fieldName)}: { readonly nullable: ${nullable}; readonly type: { readonly kind: "scalar"; readonly codecId: ${serializeValue(type.codecId)}${typeParamsSpec} }${mods} }`;
    }
    if (type.kind === "valueObject") return `readonly ${serializeObjectKey(fieldName)}: { readonly nullable: ${nullable}; readonly type: ${valueObjectFieldTypeText(type)}${mods} }`;
    return `readonly ${serializeObjectKey(fieldName)}: { readonly nullable: ${nullable}; readonly type: ${serializeValue(type)}${mods} }`;
}
function objectTypeOpenWhenEmpty(entries) {
    return entries.length > 0 ? `{ ${entries.join("; ")} }` : "{}";
}
function generateModelFieldsType(fields) {
    const fieldEntries = [];
    for (const [fieldName, field] of Object.entries(fields))fieldEntries.push(generateModelFieldEntry(fieldName, field));
    return objectTypeOpenWhenEmpty(fieldEntries);
}
function generateModelRelationsType(relations) {
    const relationEntries = [];
    for (const [relName, rel] of Object.entries(relations)){
        if (typeof rel !== "object" || rel === null) continue;
        const relObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(rel);
        const toRef = relObj["to"];
        if (toRef !== null && typeof toRef === "object" && "space" in toRef && toRef.space !== void 0) {
            relationEntries.push(`readonly ${serializeObjectKey(relName)}: never`);
            continue;
        }
        const parts = [];
        if (toRef) parts.push(`readonly to: ${serializeCrossReference((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(toRef))}`);
        if (relObj["cardinality"]) parts.push(`readonly cardinality: ${serializeValue(relObj["cardinality"])}`);
        if (typeof relObj["nullable"] === "boolean") parts.push(`readonly nullable: ${relObj["nullable"]}`);
        const on = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(relObj["on"]);
        if (on && (!on.localFields || !on.targetFields)) throw emitterError("CONTRACT.RELATION_INVALID", `Relation "${relName}" has an "on" block but is missing localFields or targetFields`, {
            meta: {
                relation: relName
            }
        });
        if (on?.localFields && on.targetFields) {
            const localFields = on.localFields.map((f)=>serializeValue(f)).join(", ");
            const targetFields = on.targetFields.map((f)=>serializeValue(f)).join(", ");
            parts.push(`readonly on: { readonly localFields: readonly [${localFields}]; readonly targetFields: readonly [${targetFields}] }`);
        }
        if (relObj["cardinality"] === "N:M") {
            const { through } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(relObj);
            const table = serializeValue(through.table);
            const namespaceId = serializeValue(through.namespaceId);
            const parentColumns = through.parentColumns.map((c)=>serializeValue(c)).join(", ");
            const childColumns = through.childColumns.map((c)=>serializeValue(c)).join(", ");
            const targetColumns = through.targetColumns.map((c)=>serializeValue(c)).join(", ");
            parts.push(`readonly through: { readonly table: ${table}; readonly namespaceId: ${namespaceId}; readonly parentColumns: readonly [${parentColumns}]; readonly childColumns: readonly [${childColumns}]; readonly targetColumns: readonly [${targetColumns}] }`);
        }
        if (parts.length > 0) relationEntries.push(`readonly ${serializeObjectKey(relName)}: { ${parts.join("; ")} }`);
    }
    if (relationEntries.length === 0) return "Record<string, never>";
    return `{ ${relationEntries.join("; ")} }`;
}
function generateModelsType(models, generateModelStorage) {
    if (!models || Object.keys(models).length === 0) return "Record<string, never>";
    const modelTypes = [];
    for (const [modelName, model] of Object.entries(models).sort(([a], [b])=>a.localeCompare(b))){
        const fieldsType = generateModelFieldsType(model.fields);
        const relationsType = generateModelRelationsType(model.relations);
        const storageType = generateModelStorage(modelName, model);
        const modelParts = [
            `readonly fields: ${fieldsType}`,
            `readonly relations: ${relationsType}`,
            `readonly storage: ${storageType}`
        ];
        if (model.owner) modelParts.push(`readonly owner: ${serializeValue(model.owner)}`);
        if (model.discriminator) modelParts.push(`readonly discriminator: ${serializeValue(model.discriminator)}`);
        if (model.variants) {
            const variantEntries = Object.entries(model.variants).sort(([left], [right])=>left < right ? -1 : left > right ? 1 : 0).map(([value, ref])=>`readonly ${serializeObjectKey(value)}: ${serializeCrossReference(ref)}`);
            modelParts.push(`readonly variants: { ${variantEntries.join("; ")} }`);
        }
        if (model.base) modelParts.push(`readonly base: ${serializeCrossReference(model.base)}`);
        modelTypes.push(`readonly ${serializeObjectKey(modelName)}: { ${modelParts.join("; ")} }`);
    }
    return `{ ${modelTypes.join("; ")} }`;
}
function deduplicateImports(imports) {
    const seenKeys = /* @__PURE__ */ new Set();
    const result = [];
    for (const imp of imports){
        const key = `${imp.package}::${imp.named}`;
        if (!seenKeys.has(key)) {
            seenKeys.add(key);
            result.push(imp);
        }
    }
    return result;
}
function generateImportLines(imports, resolveImportSpecifier = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$emission$2d$CeoAV9mj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__keepInternalSpecifiers$3e$__["keepInternalSpecifiers"]) {
    const rendered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$dist$2d$D1f6xr7F$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__renderImports$3e$__["renderImports"])(imports.map((imp)=>({
            moduleSpecifier: resolveImportSpecifier(imp.package),
            symbol: imp.named,
            alias: imp.alias,
            typeOnly: true
        })));
    return rendered === "" ? [] : rendered.split("\n");
}
function generateCodecTypeIntersection(imports, named) {
    return imports.filter((imp)=>imp.named === named).map((imp)=>imp.alias).join(" & ") || "Record<string, never>";
}
function serializeExecutionType(execution) {
    const parts = [
        "readonly executionHash: ExecutionHash"
    ];
    for (const [key, value] of Object.entries(execution)){
        if (key === "executionHash") continue;
        parts.push(`readonly ${serializeObjectKey(key)}: ${serializeValue(value)}`);
    }
    return `{ ${parts.join("; ")} }`;
}
function generateHashTypeAliases(hashes) {
    const executionHashType = hashes.executionHash ? `ExecutionHashBase<${serializeValue(hashes.executionHash)}>` : "ExecutionHashBase<string>";
    return [
        `export type StorageHash = StorageHashBase<${serializeValue(hashes.storageHash)}>;`,
        `export type ExecutionHash = ${executionHashType};`,
        `export type ProfileHash = ProfileHashBase<${serializeValue(hashes.profileHash)}>;`
    ].join("\n");
}
/**
* Renders a value set (a field/column's permitted values, codec-encoded) into a TS literal union by
* routing **each** value through the codec's `renderValueLiteral` — the seam owned by the codec, not
* a generic serializer. `side`: `output` = read type, `input` = create/update type.
*
* Returns `undefined` — signalling the caller to fall back to the codec's full output type — when
* the lookup is absent, has no `renderValueLiteralFor`, the value set is empty, or **any** value
* isn't literal-expressible, which every value of a codec that declares `keepsWrittenForm` is. A
* caller that needs column and field types to agree shares this so both compute the union
* identically.
*/ function renderValueSetType(values, codecId, side, codecLookup) {
    if (values.length === 0) return void 0;
    const literals = [];
    for (const value of values){
        const lit = renderValueLiteralType(value, codecId, side, codecLookup);
        if (lit === void 0) return void 0;
        literals.push(lit);
    }
    return literals.join(" | ");
}
/** The TS literal type the codec renders for one stored value, or `undefined` when it renders none or what it renders is not a safe type expression. */ function renderValueLiteralType(value, codecId, side, codecLookup) {
    const lit = codecLookup?.renderValueLiteralFor?.(codecId, value, side);
    return lit === void 0 || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$type$2d$expression$2d$safety$2d$CgHTWypx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(lit) ? void 0 : lit;
}
/** The local alias for the union of the stack's parameterized output type functions. */ const PARAMETERIZED_OUTPUT_TYPE_FUNCTIONS = "ParameterizedOutputTypeFunctions";
/** The declaration of {@link PARAMETERIZED_OUTPUT_TYPE_FUNCTIONS} for the type functions the stack's components declare. */ function parameterizedOutputTypeFunctionsAlias(typeFunctions) {
    const aliases = [
        ...new Set(typeFunctions.map((typeFunction)=>typeFunction.alias))
    ];
    return `type ${PARAMETERIZED_OUTPUT_TYPE_FUNCTIONS} = ${aliases.length > 0 ? aliases.join(" | ") : "never"};`;
}
/** `FieldOutputTypes` (`side` `'output'`) or `FieldInputTypes` (`'input'`): the shared generic applied to the emitted contract's domain, with `FieldTypeOverrides`, and to its storage namespaces. */ function fieldTypesMapExpression(side) {
    return `FieldTypesFromDomain<ContractBase['domain']['namespaces'], CodecTypes, ${PARAMETERIZED_OUTPUT_TYPE_FUNCTIONS}, FieldTypeOverrides, ${serializeValue(side)}, ContractBase['storage']['namespaces']>`;
}
function generateContractFieldDescriptor(fieldName, field) {
    const modStr = contractFieldModifierSuffix(field);
    const { type } = field;
    if (type.kind === "scalar") {
        const typeParamsSpec = type.typeParams && Object.keys(type.typeParams).length > 0 ? `; readonly typeParams: ${serializeValue(type.typeParams)}` : "";
        return `readonly ${serializeObjectKey(fieldName)}: { readonly nullable: ${field.nullable}; readonly type: { readonly kind: "scalar"; readonly codecId: ${serializeValue(type.codecId)}${typeParamsSpec} }${modStr} }`;
    }
    if (type.kind === "valueObject") return `readonly ${serializeObjectKey(fieldName)}: { readonly nullable: ${field.nullable}; readonly type: ${valueObjectFieldTypeText(type)}${modStr} }`;
    return `readonly ${serializeObjectKey(fieldName)}: { readonly nullable: ${field.nullable}; readonly type: ${serializeValue(type)}${modStr} }`;
}
function generateValueObjectsDescriptorType(valueObjects) {
    if (!valueObjects || Object.keys(valueObjects).length === 0) return "Record<string, never>";
    const voEntries = [];
    for (const [voName, vo] of Object.entries(valueObjects)){
        const fieldEntries = [];
        for (const [fieldName, field] of Object.entries(vo.fields))fieldEntries.push(generateContractFieldDescriptor(fieldName, field));
        const fieldsType = fieldEntries.length > 0 ? `{ ${fieldEntries.join("; ")} }` : "Record<string, never>";
        voEntries.push(`readonly ${serializeObjectKey(voName)}: { readonly fields: ${fieldsType} }`);
    }
    return `{ ${voEntries.join("; ")} }`;
}
/**
* `<Name>Output` and `<Name>Input` for each value object, read from the shared generic's value object types at the storage namespace that holds it.
*/ function generateValueObjectTypeAliases(valueObjectNamespaces) {
    if (valueObjectNamespaces.length === 0) return "";
    const generic = (side)=>`ValueObjectTypesFromStorage<ContractBase['storage']['namespaces'], CodecTypes, ${PARAMETERIZED_OUTPUT_TYPE_FUNCTIONS}, FieldTypeOverrides, ${serializeValue(side)}>`;
    const aliases = [
        `type ValueObjectOutputTypes = ${generic("output")};`,
        `type ValueObjectInputTypes = ${generic("input")};`
    ];
    for (const [name, namespaceId] of valueObjectNamespaces){
        const path = `[${serializeValue(namespaceId)}][${serializeValue(name)}]`;
        aliases.push(`export type ${name}Output = ValueObjectOutputTypes${path};`);
        aliases.push(`export type ${name}Input = ValueObjectInputTypes${path};`);
    }
    return aliases.join("\n");
}
/**
* The type of a scalar field that its codec does not give, which the shared field type generic takes as an override: the literal union of the value set it holds, or the text its codec renders for its type parameters. `undefined` when the codec gives both sides, and for a value object or union field, which the generic types itself.
*/ function resolveFieldTypeOverride(field, codecLookup, resolvedValueSet) {
    const { type } = field;
    if (type.kind !== "scalar") return void 0;
    if (resolvedValueSet) {
        const override = renderValueSetOverride(resolvedValueSet.encodedValues, resolvedValueSet.codecId, codecLookup);
        if (override !== void 0) return override;
    }
    const typeParams = type.typeParams && Object.keys(type.typeParams).length > 0 ? type.typeParams : void 0;
    return renderCodecTypeOverride(type.codecId, typeParams, codecLookup);
}
/** The literal union of a value set on each side whose values all have literal types, or `undefined` when neither side has. */ function renderValueSetOverride(values, codecId, codecLookup) {
    const output = renderValueSetType(values, codecId, "output", codecLookup);
    const input = renderValueSetType(values, codecId, "input", codecLookup);
    const override = {
        ...output !== void 0 ? {
            output
        } : {},
        ...input !== void 0 ? {
            input
        } : {}
    };
    return Object.keys(override).length > 0 ? override : void 0;
}
/** The type text a codec renders for these type parameters, on the sides it renders one. */ function renderCodecTypeOverride(codecId, typeParams, codecLookup) {
    if (codecLookup === void 0 || typeParams === void 0) return void 0;
    const output = codecLookup.renderOutputTypeFor(codecId, typeParams);
    const input = codecLookup.renderInputTypeFor?.(codecId, typeParams);
    const override = {
        ...output && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$type$2d$expression$2d$safety$2d$CgHTWypx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(output) ? {
            output
        } : {},
        ...input && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$type$2d$expression$2d$safety$2d$CgHTWypx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(input) ? {
            input
        } : {}
    };
    return Object.keys(override).length > 0 ? override : void 0;
}
function renderTypeOverride(override) {
    return `{ ${[
        "output",
        "input"
    ].flatMap((side)=>{
        const type = override[side];
        return type === void 0 ? [] : [
            `readonly ${side}: ${type}`
        ];
    }).join("; ")} }`;
}
/** A nested map of type overrides, one level per path segment, ordered by name at every level, leaving out every branch with no entry. */ function renderTypeOverridesMap(entries) {
    const root = /* @__PURE__ */ new Map();
    for (const [path, type] of entries){
        if (type === void 0) continue;
        let node = root;
        for (const segment of path.slice(0, -1)){
            const child = node.get(segment);
            const next = child instanceof Map ? child : /* @__PURE__ */ new Map();
            node.set(segment, next);
            node = next;
        }
        const leaf = path.at(-1);
        if (leaf !== void 0) node.set(leaf, type);
    }
    return renderOverrideTree(root);
}
function renderOverrideTree(tree) {
    return `{ ${[
        ...tree
    ].sort(([a], [b])=>a.localeCompare(b)).map(([key, value])=>`readonly ${serializeObjectKey(key)}: ${value instanceof Map ? renderOverrideTree(value) : renderTypeOverride(value)}`).join("; ")} }`;
}
/**
* The values a model field's value set holds, with the field's codec. A reference to a domain enum is read from the contract's domain. Any other model field goes to the family's `resolveStorageValueSet`, which reads its storage.
*/ function resolveFieldValueSet(field, contract, resolveStorageValueSet) {
    if (field.valueSet?.plane === "domain") return resolveDomainValueSet(field, contract);
    return resolveStorageValueSet();
}
function resolveDomainValueSet(field, contract) {
    const ref = field.valueSet;
    if (ref === void 0 || field.type.kind !== "scalar" || ref.entityKind !== "enum") return;
    const domainEnum = contract.domain.namespaces[ref.namespaceId]?.enum?.[ref.entityName];
    if (domainEnum === void 0) return void 0;
    return {
        encodedValues: domainEnum.members.map((member)=>member.value),
        codecId: field.type.codecId
    };
}
/** The values of the storage value set a value object field names, with the field's codec. */ function resolveValueObjectFieldValueSet(field, storage) {
    if (field.valueSet === void 0 || field.type.kind !== "scalar") return void 0;
    const valueSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$B7QKO3dq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__entityAt$3e$__["entityAt"])(storage, field.valueSet);
    if (valueSet === void 0) return void 0;
    return {
        encodedValues: valueSet.values,
        codecId: field.type.codecId
    };
}
/** `FieldTypeOverrides`: per namespace, `models` (domain namespace) or `valueObjects` (storage namespace), owner and field, the type of each field its codec does not give. */ function generateFieldTypeOverridesMap(contract, codecLookup, resolveStorageValueSet) {
    const modelFields = Object.entries(contract.domain.namespaces).flatMap(([nsId, ns])=>Object.entries(ns.models).flatMap(([modelName, model])=>Object.entries(model.fields).map(([fieldName, field])=>[
                    [
                        nsId,
                        "models",
                        modelName,
                        fieldName
                    ],
                    resolveFieldTypeOverride(field, codecLookup, resolveFieldValueSet(field, contract, ()=>resolveStorageValueSet?.(modelName, fieldName, model)))
                ])));
    const valueObjectFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$storage$2d$value$2d$objects$2d$Di8Cowdl$2d$QNqJXkk0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__valueObjectsWithCoordinates$3e$__["valueObjectsWithCoordinates"])(contract.storage).flatMap(({ coordinate: { namespaceId: nsId, entityName: valueObjectName }, valueObject })=>Object.entries(valueObject.fields).map(([fieldName, field])=>[
                [
                    nsId,
                    "valueObjects",
                    valueObjectName,
                    fieldName
                ],
                resolveFieldTypeOverride(field, codecLookup, resolveValueObjectFieldValueSet(field, contract.storage))
            ]));
    return renderTypeOverridesMap([
        ...modelFields,
        ...valueObjectFields
    ]);
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/domain-type-generation-BlYB8GiS-k0HNTf4f.mjs [app-route] (ecmascript) <export D as serializeNamespaceId>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializeNamespaceId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$domain$2d$type$2d$generation$2d$BlYB8GiS$2d$k0HNTf4f$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["D"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$domain$2d$type$2d$generation$2d$BlYB8GiS$2d$k0HNTf4f$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/domain-type-generation-BlYB8GiS-k0HNTf4f.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/domain-type-generation-BlYB8GiS-k0HNTf4f.mjs [app-route] (ecmascript) <export O as serializeObjectKey>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializeObjectKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$domain$2d$type$2d$generation$2d$BlYB8GiS$2d$k0HNTf4f$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["O"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$domain$2d$type$2d$generation$2d$BlYB8GiS$2d$k0HNTf4f$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/domain-type-generation-BlYB8GiS-k0HNTf4f.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/domain-type-generation-BlYB8GiS-k0HNTf4f.mjs [app-route] (ecmascript) <export S as renderValueSetOverride>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderValueSetOverride",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$domain$2d$type$2d$generation$2d$BlYB8GiS$2d$k0HNTf4f$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["S"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$domain$2d$type$2d$generation$2d$BlYB8GiS$2d$k0HNTf4f$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/domain-type-generation-BlYB8GiS-k0HNTf4f.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/domain-type-generation-BlYB8GiS-k0HNTf4f.mjs [app-route] (ecmascript) <export b as renderTypeOverridesMap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderTypeOverridesMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$domain$2d$type$2d$generation$2d$BlYB8GiS$2d$k0HNTf4f$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["b"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$domain$2d$type$2d$generation$2d$BlYB8GiS$2d$k0HNTf4f$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/domain-type-generation-BlYB8GiS-k0HNTf4f.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/domain-type-generation-BlYB8GiS-k0HNTf4f.mjs [app-route] (ecmascript) <export g as generateValueObjectsDescriptorType>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateValueObjectsDescriptorType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$domain$2d$type$2d$generation$2d$BlYB8GiS$2d$k0HNTf4f$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["g"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$domain$2d$type$2d$generation$2d$BlYB8GiS$2d$k0HNTf4f$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/domain-type-generation-BlYB8GiS-k0HNTf4f.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/domain-type-generation-BlYB8GiS-k0HNTf4f.mjs [app-route] (ecmascript) <export k as serializeValue>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializeValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$domain$2d$type$2d$generation$2d$BlYB8GiS$2d$k0HNTf4f$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["k"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$domain$2d$type$2d$generation$2d$BlYB8GiS$2d$k0HNTf4f$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/domain-type-generation-BlYB8GiS-k0HNTf4f.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/domain-type-generation-BlYB8GiS-k0HNTf4f.mjs [app-route] (ecmascript) <export v as renderCodecTypeOverride>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderCodecTypeOverride",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$domain$2d$type$2d$generation$2d$BlYB8GiS$2d$k0HNTf4f$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$domain$2d$type$2d$generation$2d$BlYB8GiS$2d$k0HNTf4f$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/domain-type-generation-BlYB8GiS-k0HNTf4f.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/errors-DXha_4l--relAaiI4.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>errorRefNotResolvable,
    "C",
    ()=>errorInvalidSpaceId,
    "D",
    ()=>errorNoInvariantPath,
    "E",
    ()=>errorMissingFile,
    "M",
    ()=>errorUnknownInvariant,
    "O",
    ()=>errorOperationsNotArray,
    "S",
    ()=>errorInvalidSlug,
    "T",
    ()=>errorMigrationHashMismatch,
    "_",
    ()=>errorInvalidManifest,
    "a",
    ()=>errorContractSnapshotHashMismatch,
    "b",
    ()=>errorInvalidRefName,
    "c",
    ()=>errorDescribeMissingEndContract,
    "d",
    ()=>errorDuplicateInvariantInEdge,
    "f",
    ()=>errorDuplicateSpaceId,
    "g",
    ()=>errorInvalidJson,
    "h",
    ()=>errorInvalidInvariantId,
    "i",
    ()=>errorContractSnapshotContentMismatch,
    "j",
    ()=>errorSpaceHeadRefMissing,
    "k",
    ()=>errorProvidedInvariantsMismatch,
    "l",
    ()=>errorDescriptorHeadHashMismatch,
    "m",
    ()=>errorInvalidDestName,
    "n",
    ()=>errorBundleNotFoundForGraphNode,
    "o",
    ()=>errorContractSnapshotMissing,
    "p",
    ()=>errorHashNotInGraph,
    "r",
    ()=>errorContractDeserializationFailed,
    "s",
    ()=>errorDescribeInvalidMetadata,
    "t",
    ()=>MigrationToolsError,
    "u",
    ()=>errorDirectoryExists,
    "v",
    ()=>errorInvalidOperationEntry,
    "w",
    ()=>errorMigrationContractViewMissing,
    "x",
    ()=>errorInvalidRefValue,
    "y",
    ()=>errorInvalidRefFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$MllEQmML$2d$7F84gYuT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__CliStructuredError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/control-MllEQmML-7F84gYuT.mjs [app-route] (ecmascript) <export t as CliStructuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__isStructuredError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-route] (ecmascript) <export i as isStructuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__dirname$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript) <export d as dirname>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__b__as__relative$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript) <export b as relative>");
;
;
;
;
//#region ../../../1-framework/3-tooling/migration/dist/errors-DXha_4l-.mjs
/**
* Build the canonical "re-emit this package" remediation hint.
*
* Every on-disk migration package ships its own `migration.ts` author-time
* file. Running it regenerates `migration.json` and `ops.json` with the
* correct hash + metadata, so it is the right primitive whenever a single
* package's on-disk artifacts are missing, malformed, or otherwise corrupt.
* Pointing users at `migration plan` would emit a *new* package rather than
* heal the broken one.
*/ function reemitHint(dir, fallback) {
    const reemit = `Re-emit the package by running \`node "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__b__as__relative$3e$__["relative"])(process.cwd(), dir)}/migration.ts"\`, adding the \`--config <path>\` you gave this command, if any`;
    return fallback ? `${reemit}, ${fallback}` : `${reemit}.`;
}
/**
* Structured error for migration tooling operations.
*
* Follows the NAMESPACE.SUBCODE convention from ADR 027. All codes live under
* the MIGRATION namespace. These are tooling-time errors (file I/O, hash
* verification, migration history reconstruction), distinct from the runtime
* MIGRATION.* codes for apply-time failures (PRECHECK_FAILED, POSTCHECK_FAILED,
* etc.).
*
* Fields:
* - code:     Stable machine-readable code (MIGRATION.SUBCODE)
* - category: Always 'MIGRATION'
* - why:      Explains the cause in plain language
* - fix:      Actionable remediation step
* - meta:     Machine-readable structured data for agents
*/ var MigrationToolsError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$MllEQmML$2d$7F84gYuT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__CliStructuredError$3e$__["CliStructuredError"] {
    category;
    constructor(code, summary, options){
        super(code, summary, options);
        this.category = "MIGRATION";
    }
    static is(error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$MllEQmML$2d$7F84gYuT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__CliStructuredError$3e$__["CliStructuredError"].is(error) && "category" in error && error.category === "MIGRATION" && error.code.startsWith("MIGRATION.");
    }
};
function errorDirectoryExists(dir) {
    return new MigrationToolsError("MIGRATION.DIR_EXISTS", "Migration directory already exists", {
        why: `The directory "${dir}" already exists. Each migration must have a unique directory.`,
        fix: "Use --name to pick a different name, or delete the existing directory and re-run.",
        meta: {
            dir
        }
    });
}
function errorMissingFile(file, dir) {
    return new MigrationToolsError("MIGRATION.FILE_MISSING", `Missing ${file}`, {
        why: `Expected "${file}" in "${dir}" but the file does not exist.`,
        fix: reemitHint(dir, "or delete the directory if the migration is unwanted and the source TypeScript is gone."),
        meta: {
            file,
            dir
        }
    });
}
function errorInvalidJson(filePath, parseError) {
    return new MigrationToolsError("MIGRATION.INVALID_JSON", "Invalid JSON in migration file", {
        why: `Failed to parse "${filePath}": ${parseError}`,
        fix: reemitHint((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__dirname$3e$__["dirname"])(filePath), "or restore the directory from version control."),
        meta: {
            filePath,
            parseError
        }
    });
}
function errorInvalidManifest(filePath, reason) {
    return new MigrationToolsError("MIGRATION.INVALID_MANIFEST", "Invalid migration manifest", {
        why: `Migration manifest at "${filePath}" is invalid: ${reason}`,
        fix: reemitHint((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__dirname$3e$__["dirname"])(filePath), "or restore the directory from version control."),
        meta: {
            filePath,
            reason
        }
    });
}
function errorDescribeMissingEndContract() {
    return new MigrationToolsError("MIGRATION.DESCRIBE_INVALID", "Migration.describe(): provide endContractJson or override describe() — a migration needs a destination contract hash.", {
        why: "Migration.describe() was called on a migration that carries no endContractJson and does not override describe(), so no destination contract hash can be derived.",
        fix: "Set endContractJson on the migration, or override describe() to return the { from, to } metadata explicitly.",
        meta: {
            reason: "missing-end-contract"
        }
    });
}
function errorDescribeInvalidMetadata(summary) {
    return new MigrationToolsError("MIGRATION.DESCRIBE_INVALID", `describe() returned invalid metadata: ${summary}`, {
        why: `The migration's describe() returned metadata that failed schema validation: ${summary}.`,
        fix: "Ensure describe() returns { from: string | null, to: string } with valid contract hashes.",
        meta: {
            reason: "invalid-metadata",
            summary
        }
    });
}
function errorOperationsNotArray() {
    return new MigrationToolsError("MIGRATION.PLAN_NOT_ARRAY", "operations must be an array", {
        why: "The migration instance's `operations` getter returned a non-array value.",
        fix: "Ensure the `operations` getter returns an array of migration operations.",
        meta: {}
    });
}
function errorSpaceHeadRefMissing(spaceId) {
    return new MigrationToolsError("MIGRATION.CHECK_HEAD_REF_MISSING", `Contract space "${spaceId}" has no head ref; its contract cannot be resolved from the snapshot store without one.`, {
        why: `Contract space "${spaceId}" declares no refs/head.json, so there is no hash to resolve its contract against the snapshot store.`,
        fix: "Re-emit the contract-space migrations and head-ref artifacts (the extension's contract-space build), or restore refs/head.json from version control.",
        meta: {
            spaceId
        }
    });
}
function errorInvalidOperationEntry(index, reason) {
    return new MigrationToolsError("MIGRATION.INVALID_OPERATION_ENTRY", "Migration operation entry is malformed", {
        why: `Operation at index ${index} returned by the migration class failed schema validation: ${reason}.`,
        fix: "Update the migration class so each entry of `operations` carries `id` (string), `label` (string), and `operationClass` (one of 'additive' | 'widening' | 'destructive' | 'data').",
        meta: {
            index,
            reason
        }
    });
}
function errorInvalidSlug(slug) {
    return new MigrationToolsError("MIGRATION.INVALID_NAME", "Invalid migration name", {
        why: `The slug "${slug}" contains no valid characters after sanitization (only a-z, 0-9 are kept).`,
        fix: "Provide a name with at least one alphanumeric character, e.g. --name add_users.",
        meta: {
            slug
        }
    });
}
function errorInvalidDestName(destName) {
    return new MigrationToolsError("MIGRATION.INVALID_DEST_NAME", "Invalid copy destination name", {
        why: `The destination name "${destName}" must be a single path segment (no ".." or directory separators).`,
        fix: "Use a simple file name such as \"contract.json\" for each destination in the copy list.",
        meta: {
            destName
        }
    });
}
function errorInvalidSpaceId(spaceId) {
    return new MigrationToolsError("MIGRATION.INVALID_SPACE_ID", "Invalid contract space identifier", {
        why: `The space id "${spaceId}" does not match the required pattern /^[a-z][a-z0-9_-]{0,63}$/. Space ids are used as filesystem directory names under \`migrations/\`, so the pattern is conservative on purpose.`,
        fix: "Pick a lowercase identifier that begins with a letter and contains only lowercase letters, digits, hyphens, or underscores; max 64 characters total.",
        meta: {
            spaceId
        }
    });
}
function errorDescriptorHeadHashMismatch(args) {
    const { extensionId, recomputedHash, headRefHash } = args;
    return new MigrationToolsError("MIGRATION.DESCRIPTOR_HEAD_HASH_MISMATCH", "Extension descriptor's headRef.hash does not match its contractJson", {
        why: `Extension "${extensionId}" publishes a \`contractSpace\` whose \`headRef.hash\` (${headRefHash}) does not match the canonical hash recomputed from \`contractSpace.contractJson\` (${recomputedHash}). This means the extension descriptor was published with stale \`headRef.hash\` — typically because the contract was bumped without rerunning the extension's emit pipeline.`,
        fix: "Re-run the extension authoring pipeline so `contractJson.storage.storageHash` and `headRef.hash` agree, then republish the extension. If you are the extension author and you intentionally bumped `contractJson`, recompute and update `headRef.hash` (and refresh any on-disk migration metadata that derives from it).",
        meta: {
            extensionId,
            recomputedHash,
            headRefHash
        }
    });
}
function errorDuplicateSpaceId(spaceId) {
    return new MigrationToolsError("MIGRATION.DUPLICATE_SPACE_ID", "Duplicate contract space identifier", {
        why: `The space id "${spaceId}" appears more than once in the per-space planner input. Each space id must be unique across the inputs (the per-space planner emits one output entry per id).`,
        fix: "Deduplicate the inputs before passing them to `planAllSpaces` — typically by checking your `extensions` declaration for repeated entries.",
        meta: {
            spaceId
        }
    });
}
function errorInvalidRefFile(filePath, reason) {
    return new MigrationToolsError("MIGRATION.INVALID_REF_FILE", "Invalid ref file", {
        why: `Ref file at "${filePath}" is invalid: ${reason}`,
        fix: "Ensure the ref file contains valid JSON with { \"hash\": \"<64 hex chars>\", \"invariants\": [\"...\"] }.",
        meta: {
            path: filePath,
            reason
        }
    });
}
function errorInvalidRefName(refName) {
    return new MigrationToolsError("MIGRATION.INVALID_REF_NAME", "Invalid ref name", {
        why: `Ref name "${refName}" is invalid. Names must be lowercase alphanumeric with hyphens or forward slashes (no "." or ".." segments).`,
        fix: `Use a valid ref name (e.g., "staging", "envs/production").`,
        meta: {
            refName
        }
    });
}
function errorInvalidRefValue(value) {
    return new MigrationToolsError("MIGRATION.INVALID_REF_VALUE", "Invalid ref value", {
        why: `Ref value "${value}" is not a valid contract hash. Values must be a 64-character hex digest or "empty".`,
        fix: "Use a valid storage hash from `{bin} contract emit` output or an existing migration.",
        nextActions: [
            {
                kind: "run-command",
                label: "Emit the contract to obtain a valid storage hash",
                command: "{bin} contract emit"
            },
            {
                kind: "run-command",
                label: "List existing migrations to reuse one of their hashes",
                command: "{bin} migration list"
            }
        ],
        meta: {
            value
        }
    });
}
function errorInvalidInvariantId(invariantId) {
    return new MigrationToolsError("MIGRATION.INVALID_INVARIANT_ID", "Invalid invariantId", {
        why: `invariantId ${JSON.stringify(invariantId)} is invalid. Ids must be non-empty and contain no whitespace or control characters (including Unicode whitespace like NBSP); other content (kebab-case, camelCase, namespaced, Unicode letters) is allowed.`,
        fix: "Pick an invariantId without spaces, tabs, newlines, or control characters — e.g. \"backfill-user-phone\", \"users/backfill-phone\", or \"BackfillUserPhone\".",
        meta: {
            invariantId
        }
    });
}
function errorDuplicateInvariantInEdge(invariantId) {
    return new MigrationToolsError("MIGRATION.DUPLICATE_INVARIANT_IN_EDGE", "Duplicate invariantId on a single migration", {
        why: `invariantId "${invariantId}" is declared by more than one dataTransform on the same migration. The marker stores invariants as a set and the routing layer treats them as edge-level, so two ops cannot share a routing identity.`,
        fix: "Rename one of the conflicting dataTransform invariantIds, or drop invariantId on the op that does not need to be routing-visible.",
        meta: {
            invariantId
        }
    });
}
function errorProvidedInvariantsMismatch(filePath, stored, derived) {
    const storedSet = new Set(stored);
    const derivedSet = new Set(derived);
    const missing = [
        ...derivedSet
    ].filter((id)=>!storedSet.has(id));
    const extra = [
        ...storedSet
    ].filter((id)=>!derivedSet.has(id));
    return new MigrationToolsError("MIGRATION.PROVIDED_INVARIANTS_MISMATCH", "providedInvariants on migration.json disagrees with ops.json", {
        why: missing.length === 0 && extra.length === 0 ? `migration.json at "${filePath}" stores providedInvariants ${JSON.stringify(stored)}, but the canonical value derived from ops.json is ${JSON.stringify(derived)} — same ids, different order. Canonical providedInvariants is sorted ascending.` : `migration.json at "${filePath}" stores providedInvariants ${JSON.stringify(stored)}, but the value derived from ops.json is ${JSON.stringify(derived)}. The manifest copy was likely hand-edited without re-emitting.`,
        fix: reemitHint((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__dirname$3e$__["dirname"])(filePath), "or restore the directory from version control."),
        meta: {
            filePath,
            stored,
            derived,
            difference: {
                missing,
                extra
            }
        }
    });
}
function errorNoInvariantPath(args) {
    const { refName, required, missing, structuralPath, extensionSpace } = args;
    const refClause = refName ? `Ref "${refName}"` : "Target";
    const missingList = missing.map((id)=>JSON.stringify(id)).join(", ");
    const requiredList = required.map((id)=>JSON.stringify(id)).join(", ");
    return new MigrationToolsError("MIGRATION.NO_INVARIANT_PATH", extensionSpace === void 0 ? "No path covers the required invariants" : `No path covers the required invariants of extension space "${extensionSpace.spaceId}"`, {
        why: extensionSpace?.why ?? `${refClause} requires invariants the reachable path doesn't cover. required=[${requiredList}], missing=[${missingList}].`,
        fix: extensionSpace?.fix ?? "Add a migration on the path that runs `dataTransform({ invariantId: \"<id>\", … })` for each missing invariant, or retarget the ref to a hash whose path already provides them.",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("nextActions", extensionSpace?.nextActions),
        meta: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("spaceId", extensionSpace?.spaceId),
            required,
            missing,
            structuralPath,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("refName", refName)
        }
    });
}
function errorUnknownInvariant(args) {
    const { refName, unknown, declared } = args;
    return new MigrationToolsError("MIGRATION.UNKNOWN_INVARIANT", "Ref declares invariants no migration in the graph provides", {
        why: `${refName ? `Ref "${refName}" declares` : "Declares"} invariants no migration in the graph provides. unknown=[${unknown.map((id)=>JSON.stringify(id)).join(", ")}].`,
        fix: "Either the ref has a typo, or the declaring migration has not been authored/attested yet. Re-check the ref file and the migrations directory.",
        meta: {
            unknown,
            declared,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("refName", refName)
        }
    });
}
function errorMigrationHashMismatch(dir, storedHash, computedHash) {
    return new MigrationToolsError("MIGRATION.HASH_MISMATCH", "Migration package is corrupt", {
        why: `Stored migrationHash "${storedHash}" does not match the recomputed hash "${computedHash}" for "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__b__as__relative$3e$__["relative"])(process.cwd(), dir)}". The migration.json or ops.json has been edited or partially written since emit.`,
        fix: reemitHint(dir, "or restore the directory from version control."),
        meta: {
            dir,
            storedHash,
            computedHash
        }
    });
}
/**
* A ref name that resolves to nothing: no pointer file named `refName`
* exists, and the hash being resolved (the `contractAt` argument, used as a
* fallback when the pointer is absent) is not a node in the migration graph
* either. There is no contract to materialize.
*/ function errorRefNotResolvable(refName) {
    return new MigrationToolsError("MIGRATION.REF_NOT_RESOLVABLE", `Ref "${refName}" is not resolvable`, {
        why: `Ref "${refName}" has no pointer file, and the hash being resolved is not a node in the migration graph either — there is nothing to materialize a contract from.`,
        fix: `Create the ref with "{bin} migration ref set ${refName} <hash>" (or advance it via "{bin} db update --advance-ref ${refName}"), or pass a hash that is a node in the migration graph.`,
        nextActions: [
            {
                kind: "run-command",
                label: `Create the ref "${refName}"`,
                command: `{bin} migration ref set ${refName} <hash>`
            },
            {
                kind: "run-command",
                label: `Advance the ref "${refName}" as part of an update`,
                command: `{bin} db update --advance-ref ${refName}`
            },
            {
                kind: "user-choice",
                label: "Pass a hash that is already a node in the migration graph"
            }
        ],
        meta: {
            refName,
            identifier: refName
        }
    });
}
function errorBundleNotFoundForGraphNode(hash, explicitLabel) {
    return new MigrationToolsError("MIGRATION.BUNDLE_NOT_FOUND_FOR_GRAPH_NODE", explicitLabel ? `No migration bundle found for reference "${explicitLabel}" (resolved hash: ${hash})` : `No migration bundle found for graph node ${hash}`, {
        why: `The hash ${hash} is a graph node but no on-disk migration package has a destination (\`to\`) hash matching it.`,
        fix: "Provide a ref or hash that corresponds to an existing migration package, or run `{bin} migration list` to see available migrations.",
        meta: {
            hash,
            ...explicitLabel ? {
                explicitLabel
            } : {}
        }
    });
}
/**
* A contract at `filePath` that failed to load. When the family refused it for its contents, such as defaults its column types do not hold, the refusal's meta (`refusedDefaults`) is kept beside the file path.
*/ function errorContractDeserializationFailed(filePath, message, options) {
    return new MigrationToolsError("MIGRATION.CONTRACT_DESERIALIZATION_FAILED", "Contract failed to deserialize", {
        why: `Contract at "${filePath}" failed to deserialize: ${message}`,
        fix: reemitHint((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__dirname$3e$__["dirname"])(filePath), "or restore the directory from version control."),
        meta: {
            ...refusalMetaOf(options?.cause),
            filePath,
            message
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("cause", options?.cause)
    });
}
function refusalMetaOf(cause) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__isStructuredError$3e$__["isStructuredError"])(cause) && cause.code === "CONTRACT.VALIDATION_FAILED" ? cause.meta : void 0;
}
function errorHashNotInGraph(hash, graph) {
    const reachableHashes = [
        ...graph.nodes
    ].sort();
    const reachableList = reachableHashes.length > 0 ? reachableHashes.join(", ") : "(none)";
    return new MigrationToolsError("MIGRATION.HASH_NOT_IN_GRAPH", `Hash "${hash}" is not a node in the migration graph`, {
        why: `The migration graph contains nodes ${reachableList}; "${hash}" isn't one of them.`,
        fix: `Pass a hash that's the from-or-to of an on-disk migration bundle, use --from with a graph-node hash, or run "{bin} migration plan" to introduce it.`,
        nextActions: [
            {
                kind: "user-choice",
                label: "Pass a hash that is the from-or-to of an on-disk migration bundle, or use --from with a graph-node hash",
                reason: `Graph nodes: ${reachableList}.`
            },
            {
                kind: "run-command",
                label: `Introduce "${hash}" by planning a migration for it`,
                command: "{bin} migration plan"
            }
        ],
        meta: {
            hash,
            reachableHashes
        }
    });
}
function errorContractSnapshotMissing(storageHash, expectedPath) {
    return new MigrationToolsError("MIGRATION.CONTRACT_SNAPSHOT_MISSING", "Contract snapshot is missing", {
        why: `Expected a contract snapshot for ${storageHash} at "${expectedPath}" but the file does not exist.`,
        fix: "Re-emit the contract snapshot by re-running the command that authored the migration referencing this hash (`{bin} migration plan` for app-space migrations; the extension's contract-space build for extension spaces), or restore migrations/snapshots/ from version control.",
        nextActions: [
            {
                kind: "run-command",
                label: "Re-emit the snapshot for an app-space migration",
                command: "{bin} migration plan"
            },
            {
                kind: "user-choice",
                label: "For an extension space, re-run that extension's contract-space build instead"
            },
            {
                kind: "user-choice",
                label: "Restore migrations/snapshots/ from version control"
            }
        ],
        meta: {
            storageHash,
            expectedPath
        }
    });
}
function errorContractSnapshotHashMismatch(storageHash, actualHash, dir) {
    return new MigrationToolsError("MIGRATION.CONTRACT_SNAPSHOT_HASH_MISMATCH", "Contract snapshot hash mismatch", {
        why: `The contract JSON's inner storage.storageHash ("${actualHash}") does not match the requested storage hash ("${storageHash}") for snapshot directory "${dir}".`,
        fix: "Pass a contractJson whose storage.storageHash equals the storageHash argument passed to writeContractSnapshot — the two must agree by construction.",
        meta: {
            storageHash,
            actualHash,
            dir
        }
    });
}
function errorContractSnapshotContentMismatch(args) {
    const { storageHash, computedHash, jsonPath } = args;
    return new MigrationToolsError("MIGRATION.CONTRACT_SNAPSHOT_CONTENT_MISMATCH", "Contract snapshot content does not match its hash", {
        why: `The contract snapshot at "${jsonPath}" is addressed by storage hash ${storageHash}, but its content recomputes to ${computedHash}. The file has been edited (or corrupted) since it was written.`,
        fix: "Restore migrations/snapshots/ from version control, or re-run the command that authored the migration referencing this hash to regenerate the snapshot.",
        meta: {
            storageHash,
            computedHash,
            jsonPath
        }
    });
}
function errorMigrationContractViewMissing(className, accessor, jsonField) {
    return new MigrationToolsError("MIGRATION.CONTRACT_VIEW_MISSING", `${className}.${accessor} requires ${jsonField}`, {
        why: `${className}.${accessor} was read, but this instance has no ${jsonField} to build the view from.`,
        fix: `Set ${jsonField} to the migration's committed contract JSON, or avoid reading ${accessor} on a migration that overrides describe() and carries no contract.`,
        meta: {
            className,
            accessor,
            jsonField
        }
    });
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/hash-BAZVWU4a-BQovI7hF.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>recomputePublishedStorageHash,
    "r",
    ()=>verifyMigrationHash,
    "t",
    ()=>computeMigrationHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalize$2d$json$2d$ZPawceQR$2d$Dua1VNEB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalizeJson$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/canonicalize-json-ZPawceQR-Dua1VNEB.mjs [app-route] (ecmascript) <export t as canonicalizeJson>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$hashing$2d$CLRfNAxh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__computeStorageHash$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/hashing-CLRfNAxh.mjs [app-route] (ecmascript) <export o as computeStorageHash>");
;
;
;
;
;
//#region ../../../1-framework/3-tooling/migration/dist/hash-BAZVWU4a.mjs
/**
* Recompute the storage hash a contract's content publishes as its
* identity. The published `storage.storageHash` is the output of the emit
* pipeline's `computeStorageHash` call over a storage object that did not
* yet carry `storageHash`, so the field is stripped before recomputing.
* Shared by snapshot content verification and descriptor
* self-consistency — the one place this invariant lives.
*/ function recomputePublishedStorageHash(args) {
    const { storageHash: _published, ...storageWithoutHash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(args.storage ?? {});
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$hashing$2d$CLRfNAxh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__computeStorageHash$3e$__["computeStorageHash"])({
        target: typeof args.target === "string" ? args.target : "",
        targetFamily: typeof args.targetFamily === "string" ? args.targetFamily : "",
        storage: storageWithoutHash,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("shouldPreserveEmpty", args.hooks?.shouldPreserveEmpty),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("sortStorage", args.hooks?.sortStorage)
    });
}
function sha256Hex(input) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(input).digest("hex");
}
/**
* Content-addressed migration hash over (metadata envelope, ops). See
* ADR 199 — Storage-only migration identity for the rationale: the
* storage-hash bookends (`from`, `to`) inside the envelope anchor the
* contract identity by hash. The full contract IRs are not part of the
* manifest — they live in sibling `*-contract.json` files authored
* alongside the migration, never inlined here.
*
* The integrity check is purely structural, not semantic. The function
* canonicalizes its inputs via `sortKeys` (recursive) + `JSON.stringify`
* and hashes the result. Target-specific operation payloads (`step.sql`,
* Mongo's pipeline AST, …) are hashed verbatim — no per-target
* normalization is required, because what's being verified is "do the
* on-disk bytes still produce their recorded hash", not "do two
* semantically-equivalent migrations hash the same". The latter is an
* emit-drift concern (ADR 192 step 2).
*
* The symmetry across write and read holds because `JSON.parse(
* JSON.stringify(x))` round-trips JSON-safe values losslessly and
* `sortKeys` is idempotent and deterministic — write-time and read-time
* canonicalization produce the same canonical bytes regardless of
* source-side key ordering or whitespace.
*
* The `migrationHash` field on the metadata is stripped before hashing
* so the function can be used both at write time (when no hash exists
* yet) and at verify time (rehashing an already-attested record).
*/ function computeMigrationHash(metadata, ops) {
    const { migrationHash: _migrationHash, ...strippedMeta } = metadata;
    return sha256Hex((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalize$2d$json$2d$ZPawceQR$2d$Dua1VNEB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalizeJson$3e$__["canonicalizeJson"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalize$2d$json$2d$ZPawceQR$2d$Dua1VNEB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalizeJson$3e$__["canonicalizeJson"])(strippedMeta),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalize$2d$json$2d$ZPawceQR$2d$Dua1VNEB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalizeJson$3e$__["canonicalizeJson"])(ops)
    ].map(sha256Hex)));
}
/**
* Re-hash an in-memory migration package and compare against the stored
* `migrationHash`. See `computeMigrationHash` for the canonicalization rules.
*
* Returns `{ ok: true }` when the package is internally consistent, or
* `{ ok: false, reason: 'mismatch', storedHash, computedHash }` when it is
* not — typically a sign of FS corruption, partial writes, or a post-emit
* hand edit.
*/ function verifyMigrationHash(pkg) {
    const computed = computeMigrationHash(pkg.metadata, pkg.ops);
    if (pkg.metadata.migrationHash === computed) return {
        ok: true,
        storedHash: pkg.metadata.migrationHash,
        computedHash: computed
    };
    return {
        ok: false,
        reason: "mismatch",
        storedHash: pkg.metadata.migrationHash,
        computedHash: computed
    };
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/invariants-DrF9p5Gd-BF70vGl1.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>validateInvariantId,
    "t",
    ()=>deriveProvidedInvariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/errors-DXha_4l--relAaiI4.mjs [app-route] (ecmascript)");
;
//#region ../../../1-framework/3-tooling/migration/dist/invariants-DrF9p5Gd.mjs
/**
* Hygiene check for `invariantId`. Rejects empty values plus any
* whitespace or control character (including Unicode whitespace like
* NBSP and em space, which are visually identical to ASCII space and
* routinely sneak in via paste).
*/ function validateInvariantId(invariantId) {
    if (invariantId.length === 0) return false;
    return !/[\p{Cc}\p{White_Space}]/u.test(invariantId);
}
/**
* Walk a migration's operations and produce its `providedInvariants`
* aggregate: the sorted, deduplicated list of `invariantId`s declared
* by ops in the migration. Ops without an `invariantId` are skipped.
*
* Both `data`-class ops (data-transforms, e.g. backfills) and
* `additive`-class opaque DDL (e.g. cipherstash's vendored EQL bundle
* via `installEqlBundleOp`) may declare invariantIds: the
* `operationClass` axis classifies *policy gating* (which kinds of ops
* a `db init` / `db update` policy permits), while `invariantId`
* classifies *marker bookkeeping* (which named bundles of work a
* future regeneration knows to skip). The two concerns are
* intentionally orthogonal — an extension can ship additive
* non-IR-derivable DDL (the only way the planner can know the bundle
* is already applied is via the invariantId on the marker) without
* needing to mis-classify it as `data`-class.
*
* Throws `MIGRATION.INVALID_INVARIANT_ID` on a malformed id and
* `MIGRATION.DUPLICATE_INVARIANT_IN_EDGE` on duplicates.
*
* @see docs/architecture docs/adrs/ADR 212 - Contract spaces.md
*   — extension migrations carry `invariantId`s on additive ops; e.g.
*   cipherstash's `installEqlBundle` and structural `create-*` ops are
*   additive-class but carry `cipherstash:*` invariantIds.
*/ function deriveProvidedInvariants(ops) {
    const seen = /* @__PURE__ */ new Set();
    for (const op of ops){
        const invariantId = readInvariantId(op);
        if (invariantId === void 0) continue;
        if (!validateInvariantId(invariantId)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["h"])(invariantId);
        if (seen.has(invariantId)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["d"])(invariantId);
        seen.add(invariantId);
    }
    return [
        ...seen
    ].sort();
}
function readInvariantId(op) {
    if (!Object.hasOwn(op, "invariantId")) return void 0;
    const candidate = op.invariantId;
    return typeof candidate === "string" ? candidate : void 0;
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/io-BNxFm3eg-DYD82QeZ.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>materialiseMigrationPackage,
    "c",
    ()=>writeMigrationMetadata,
    "i",
    ()=>materialiseExtensionMigrationPackageIfMissing,
    "l",
    ()=>writeMigrationOps,
    "n",
    ()=>copyFilesWithRename,
    "o",
    ()=>readMigrationPackage,
    "r",
    ()=>formatMigrationDirName,
    "s",
    ()=>readMigrationsDir,
    "t",
    ()=>MANIFEST_FILE,
    "u",
    ()=>writeMigrationPackage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/errors-DXha_4l--relAaiI4.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$hash$2d$BAZVWU4a$2d$BQovI7hF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/hash-BAZVWU4a-BQovI7hF.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$contract$2d$snapshot$2d$store$2d$6gIBcUeb$2d$DJK3OM0j$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/contract-snapshot-store-6gIBcUeb-DJK3OM0j.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$invariants$2d$DrF9p5Gd$2d$BF70vGl1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/invariants-DrF9p5Gd-BF70vGl1.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$op$2d$schema$2d$3tXg0LTS$2d$DqpOKDEa$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/op-schema-3tXg0LTS-DqpOKDEa.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__basename$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript) <export c as basename>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__dirname$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript) <export d as dirname>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript) <export j as join>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__resolve$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript) <export r as resolve>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/keywords.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
//#region ../../../1-framework/3-tooling/migration/dist/io-BNxFm3eg.mjs
const MANIFEST_FILE = "migration.json";
const OPS_FILE = "ops.json";
const MAX_SLUG_LENGTH = 64;
function hasErrnoCode(error, code) {
    return error instanceof Error && error.code === code;
}
const MigrationMetadataSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    from: "string > 0 | null",
    to: "string",
    migrationHash: "string",
    providedInvariants: "string[]",
    createdAt: "string"
});
async function writeMigrationPackage(dir, metadata, ops) {
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdir"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__dirname$3e$__["dirname"])(dir), {
        recursive: true
    });
    try {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdir"])(dir);
    } catch (error) {
        if (hasErrnoCode(error, "EEXIST")) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])(dir);
        throw error;
    }
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(dir, MANIFEST_FILE), JSON.stringify(metadata, null, 2), {
        flag: "wx"
    });
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(dir, OPS_FILE), JSON.stringify(ops, null, 2), {
        flag: "wx"
    });
}
/**
* Materialise an in-memory {@link MigrationPackage} to a per-space
* directory on disk.
*
* Writes two files under `<targetDir>/<pkg.dirName>/`:
*
* - `migration.json` — the manifest (pretty-printed, matches
*   {@link writeMigrationPackage}'s output for byte-for-byte parity with
*   app-space migrations).
* - `ops.json` — the operation list (pretty-printed).
*
* Distinct verb from the lower-level {@link writeMigrationPackage}
* (which takes constituent `(metadata, ops)`): callers reading
* `materialise…` know they are persisting a struct-typed package.
*
* Overwrite-idempotent: the per-package directory is cleared before
* each emit, so re-running against the same `targetDir` produces
* byte-identical contents and never leaves stale files behind. The
* lower-level {@link writeMigrationPackage} stays strict because the
* CLI authoring path (`migration plan` / `migration new`) deliberately
* refuses to clobber an existing authored migration; this helper is
* the re-emit path that is supposed to converge on a single canonical
* on-disk shape.
*
* The per-space head contract resolves through
* `<projectMigrationsDir>/snapshots/<hex>/` (written by
* {@link import('./emit-contract-space-artifacts').emitContractSpaceArtifacts}),
* not inside the per-package directory. The runner reads only
* `migration.json` + `ops.json` from each package.
*/ async function materialiseMigrationPackage(targetDir, pkg) {
    const dir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(targetDir, pkg.dirName);
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["rm"])(dir, {
        recursive: true,
        force: true
    });
    await writeMigrationPackage(dir, pkg.metadata, pkg.ops);
}
/**
* Idempotent variant of {@link materialiseMigrationPackage}: writes the
* package only if `<targetDir>/<pkg.dirName>/` does not already exist on
* disk as a directory; returns `{ written: false }` when the package
* directory is present (no rewrite, no comparison — by-existence skip).
*
* Concretely:
*   - existing directory → skip silently, return `{ written: false }`.
*   - missing path → write three files via {@link materialiseMigrationPackage},
*     return `{ written: true }`.
*   - path exists but is not a directory (file/symlink) → treated as
*     missing; {@link materialiseMigrationPackage} will attempt creation
*     and fail with an appropriate OS error.
*   - any other I/O error from `stat` → propagated unchanged.
*
* Used by the CLI's `runContractSpaceExtensionMigrationsPass` to
* materialise extension migration packages into a project's
* `migrations/<spaceId>/` directory, and by extension-package tests
* that mirror the same idempotent-rematerialise property locally
* without taking a CLI dependency.
*/ async function materialiseExtensionMigrationPackageIfMissing(targetDir, pkg) {
    if (await directoryExists((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(targetDir, pkg.dirName))) return {
        written: false
    };
    await materialiseMigrationPackage(targetDir, pkg);
    return {
        written: true
    };
}
async function directoryExists(p) {
    try {
        return (await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["stat"])(p)).isDirectory();
    } catch (error) {
        if (hasErrnoCode(error, "ENOENT")) return false;
        throw error;
    }
}
/**
* Copy a list of files into `destDir`, optionally renaming each one.
*
* The destination directory is created (with `recursive: true`) if it
* does not already exist. Each source path is copied byte-for-byte into
* `destDir/<destName>`; missing sources throw `ENOENT`. The helper is
* intentionally generic: callers own the list of files and the naming
* convention for the copies.
*/ async function copyFilesWithRename(destDir, files) {
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdir"])(destDir, {
        recursive: true
    });
    for (const file of files){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__basename$3e$__["basename"])(file.destName) !== file.destName) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["m"])(file.destName);
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["copyFile"])(file.sourcePath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(destDir, file.destName));
    }
}
async function writeMigrationMetadata(dir, metadata) {
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(dir, MANIFEST_FILE), `${JSON.stringify(metadata, null, 2)}\n`);
}
async function writeMigrationOps(dir, ops) {
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(dir, OPS_FILE), `${JSON.stringify(ops, null, 2)}\n`);
}
async function readMigrationPackage(dir, options) {
    const absoluteDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__resolve$3e$__["resolve"])(dir);
    const manifestPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(absoluteDir, MANIFEST_FILE);
    const opsPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(absoluteDir, OPS_FILE);
    let manifestRaw;
    try {
        manifestRaw = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(manifestPath, "utf-8");
    } catch (error) {
        if (hasErrnoCode(error, "ENOENT")) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["E"])(MANIFEST_FILE, absoluteDir);
        throw error;
    }
    let opsRaw;
    try {
        opsRaw = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(opsPath, "utf-8");
    } catch (error) {
        if (hasErrnoCode(error, "ENOENT")) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["E"])(OPS_FILE, absoluteDir);
        throw error;
    }
    let metadata;
    try {
        metadata = JSON.parse(manifestRaw);
    } catch (e) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["g"])(manifestPath, e instanceof Error ? e.message : String(e));
    }
    let ops;
    try {
        ops = JSON.parse(opsRaw);
    } catch (e) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["g"])(opsPath, e instanceof Error ? e.message : String(e));
    }
    validateMetadata(metadata, manifestPath);
    validateOps(ops, opsPath);
    const derivedInvariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$invariants$2d$DrF9p5Gd$2d$BF70vGl1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(ops);
    if (!arraysEqual(metadata.providedInvariants, derivedInvariants)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["k"])(manifestPath, metadata.providedInvariants, derivedInvariants);
    const endContractJson = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$contract$2d$snapshot$2d$store$2d$6gIBcUeb$2d$DJK3OM0j$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"])(options.migrationsDir, metadata.to, options.verifySnapshotContent);
    const pkg = {
        dirName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__basename$3e$__["basename"])(absoluteDir),
        dirPath: absoluteDir,
        metadata,
        ops,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("endContractJson", endContractJson)
    };
    const verification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$hash$2d$BAZVWU4a$2d$BQovI7hF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])(pkg);
    if (!verification.ok) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["T"])(absoluteDir, verification.storedHash, verification.computedHash);
    return pkg;
}
/**
* Reads a migration package's manifest and ops without running hash or
* invariants verification. Returns `null` when the files cannot be read or
* parsed (i.e. when the package is genuinely unloadable).
*
* Used by {@link readMigrationsDir} to retain a package whose hash or
* invariants diverge from what is stored on disk — the raw content is still
* useful for display / querying; only integrity is in question.
*/ async function readMigrationPackageRaw(dir) {
    const absoluteDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__resolve$3e$__["resolve"])(dir);
    const manifestPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(absoluteDir, MANIFEST_FILE);
    const opsPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(absoluteDir, OPS_FILE);
    let manifestRaw;
    try {
        manifestRaw = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(manifestPath, "utf-8");
    } catch  {
        return null;
    }
    let opsRaw;
    try {
        opsRaw = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(opsPath, "utf-8");
    } catch  {
        return null;
    }
    let metadata;
    try {
        metadata = JSON.parse(manifestRaw);
    } catch  {
        return null;
    }
    let ops;
    try {
        ops = JSON.parse(opsRaw);
    } catch  {
        return null;
    }
    if (MigrationMetadataSchema(metadata) instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"].errors) return null;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$op$2d$schema$2d$3tXg0LTS$2d$DqpOKDEa$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(ops) instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"].errors) return null;
    return {
        dirName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__basename$3e$__["basename"])(absoluteDir),
        dirPath: absoluteDir,
        metadata,
        ops
    };
}
function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++)if (a[i] !== b[i]) return false;
    return true;
}
function validateMetadata(metadata, filePath) {
    const result = MigrationMetadataSchema(metadata);
    if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"].errors) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_"])(filePath, result.summary);
}
function validateOps(ops, filePath) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$op$2d$schema$2d$3tXg0LTS$2d$DqpOKDEa$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(ops);
    if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"].errors) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_"])(filePath, result.summary);
}
function packageLoadProblemDetailFromError(error) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"].is(error)) return error.why;
    if (error instanceof Error) return error.message;
    return String(error);
}
async function readMigrationsDir(migrationsRoot, options) {
    let entries;
    try {
        entries = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readdir"])(migrationsRoot);
    } catch (error) {
        if (hasErrnoCode(error, "ENOENT")) return {
            packages: [],
            problems: []
        };
        throw error;
    }
    const packages = [];
    const problems = [];
    for (const entry of entries.sort()){
        const entryPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(migrationsRoot, entry);
        if (!(await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["stat"])(entryPath)).isDirectory()) continue;
        const manifestPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(entryPath, MANIFEST_FILE);
        try {
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["stat"])(manifestPath);
        } catch  {
            continue;
        }
        let pkg;
        try {
            pkg = await readMigrationPackage(entryPath, options);
        } catch (error) {
            const dirName = entry;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"].is(error)) {
                if (error.code === "MIGRATION.HASH_MISMATCH") {
                    const meta = error.meta;
                    const rawPkg = await readMigrationPackageRaw(entryPath);
                    if (rawPkg !== null) packages.push(rawPkg);
                    problems.push({
                        kind: "hashMismatch",
                        dirName,
                        stored: typeof meta?.["storedHash"] === "string" ? meta["storedHash"] : "",
                        computed: typeof meta?.["computedHash"] === "string" ? meta["computedHash"] : ""
                    });
                    continue;
                }
                if (error.code === "MIGRATION.PROVIDED_INVARIANTS_MISMATCH") {
                    const rawPkg = await readMigrationPackageRaw(entryPath);
                    if (rawPkg !== null) packages.push(rawPkg);
                    problems.push({
                        kind: "providedInvariantsMismatch",
                        dirName
                    });
                    continue;
                }
            }
            problems.push({
                kind: "packageUnloadable",
                dirName,
                detail: packageLoadProblemDetailFromError(error)
            });
            continue;
        }
        packages.push(pkg);
    }
    return {
        packages,
        problems
    };
}
function formatMigrationDirName(timestamp, slug) {
    const sanitized = slug.toLowerCase().replace(/[^a-z0-9]/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "");
    if (sanitized.length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["S"])(slug);
    const truncated = sanitized.slice(0, MAX_SLUG_LENGTH);
    return `${timestamp.getUTCFullYear()}${String(timestamp.getUTCMonth() + 1).padStart(2, "0")}${String(timestamp.getUTCDate()).padStart(2, "0")}T${String(timestamp.getUTCHours()).padStart(2, "0")}${String(timestamp.getUTCMinutes()).padStart(2, "0")}_${truncated}`;
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/migration-graph-BoiiZAaU-DLht12k7.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>findPathWithInvariants,
    "i",
    ()=>findPathWithDecision,
    "n",
    ()=>detectOrphans,
    "o",
    ()=>reconstructGraph,
    "r",
    ()=>findPath,
    "t",
    ()=>detectCycles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$constants$2d$CM$2d$w38DQ$2d$Cz_EXbOc$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/constants-CM-w38DQ-Cz_EXbOc.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export t as InternalError>");
;
;
;
//#region ../../../1-framework/3-tooling/migration/dist/migration-graph-BoiiZAaU.mjs
/**
* FIFO queue with amortised O(1) push and shift.
*
* Uses a head-index cursor over a backing array rather than
* `Array.prototype.shift()`, which is O(n) on V8. Intended for BFS-shaped
* traversals where the queue is drained in a single pass — it does not
* reclaim memory for already-shifted items, so it is not suitable for
* long-lived queues with many push/shift cycles.
*/ var Queue = class {
    items;
    head = 0;
    constructor(initial = []){
        this.items = [
            ...initial
        ];
    }
    push(item) {
        this.items.push(item);
    }
    /**
	* Remove and return the next item. Caller must check `isEmpty` first —
	* shifting an empty queue throws.
	*/ shift() {
        if (this.head >= this.items.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"]("Queue.shift called on empty queue");
        return this.items[this.head++];
    }
    get isEmpty() {
        return this.head >= this.items.length;
    }
};
function* bfs(starts, neighbours, key = (state)=>state) {
    const visited = /* @__PURE__ */ new Set();
    const parentMap = /* @__PURE__ */ new Map();
    const queue = new Queue();
    for (const start of starts){
        const k = key(start);
        if (!visited.has(k)) {
            visited.add(k);
            queue.push({
                state: start,
                key: k
            });
        }
    }
    while(!queue.isEmpty){
        const { state: current, key: curKey } = queue.shift();
        const parentInfo = parentMap.get(curKey);
        yield {
            state: current,
            parent: parentInfo?.parent ?? null,
            incomingEdge: parentInfo?.edge ?? null
        };
        for (const { next, edge } of neighbours(current)){
            const k = key(next);
            if (!visited.has(k)) {
                visited.add(k);
                parentMap.set(k, {
                    parent: current,
                    edge
                });
                queue.push({
                    state: next,
                    key: k
                });
            }
        }
    }
}
/** Forward-edge neighbours: edge `e` from `n` visits `e.to` next. */ function forwardNeighbours(graph, node) {
    return (graph.forwardChain.get(node) ?? []).map((edge)=>({
            next: edge.to,
            edge
        }));
}
/**
* Forward-edge neighbours, sorted by the deterministic tie-break.
* Used by path-finding so the resulting shortest path is stable across runs.
*/ function sortedForwardNeighbours(graph, node) {
    return [
        ...graph.forwardChain.get(node) ?? []
    ].sort(compareTieBreak).map((edge)=>({
            next: edge.to,
            edge
        }));
}
/** Reverse-edge neighbours: edge `e` from `n` visits `e.from` next. */ function reverseNeighbours(graph, node) {
    return (graph.reverseChain.get(node) ?? []).map((edge)=>({
            next: edge.from,
            edge
        }));
}
function appendEdge(map, key, entry) {
    const bucket = map.get(key);
    if (bucket) bucket.push(entry);
    else map.set(key, [
        entry
    ]);
}
function reconstructGraph(packages) {
    const nodes = /* @__PURE__ */ new Set();
    const forwardChain = /* @__PURE__ */ new Map();
    const reverseChain = /* @__PURE__ */ new Map();
    const migrationByHash = /* @__PURE__ */ new Map();
    for (const pkg of packages){
        const from = pkg.metadata.from ?? "empty";
        const { to } = pkg.metadata;
        nodes.add(from);
        nodes.add(to);
        const migration = {
            from,
            to,
            migrationHash: pkg.metadata.migrationHash,
            dirName: pkg.dirName,
            createdAt: pkg.metadata.createdAt,
            invariants: pkg.metadata.providedInvariants
        };
        if (!migrationByHash.has(migration.migrationHash)) migrationByHash.set(migration.migrationHash, migration);
        appendEdge(forwardChain, from, migration);
        appendEdge(reverseChain, to, migration);
    }
    return {
        nodes,
        forwardChain,
        reverseChain,
        migrationByHash
    };
}
function compareTieBreak(a, b) {
    const ca = a.createdAt.localeCompare(b.createdAt);
    if (ca !== 0) return ca;
    const tc = a.to.localeCompare(b.to);
    if (tc !== 0) return tc;
    return a.migrationHash.localeCompare(b.migrationHash);
}
function sortedNeighbors(edges) {
    return [
        ...edges
    ].sort(compareTieBreak);
}
/**
* Find the shortest path from `fromHash` to `toHash` using BFS over the
* contract-hash graph. Returns the ordered list of edges, or null if no path
* exists. Returns an empty array when `fromHash === toHash` (no-op).
*
* Neighbor ordering is deterministic via the tie-break sort key:
* createdAt → to → migrationHash.
*/ function findPath(graph, fromHash, toHash) {
    if (fromHash === toHash) return [];
    const parents = /* @__PURE__ */ new Map();
    for (const step of bfs([
        fromHash
    ], (n)=>sortedForwardNeighbours(graph, n))){
        if (step.parent !== null && step.incomingEdge !== null) parents.set(step.state, {
            parent: step.parent,
            edge: step.incomingEdge
        });
        if (step.state === toHash) {
            const path = [];
            let cur = toHash;
            let p = parents.get(cur);
            while(p){
                path.push(p.edge);
                cur = p.parent;
                p = parents.get(cur);
            }
            path.reverse();
            return path;
        }
    }
    return null;
}
/**
* Find the shortest path from `fromHash` to `toHash` whose edges collectively
* cover every invariant in `required`. Returns `null` when no such path exists
* (either `fromHash`→`toHash` is structurally unreachable, or every reachable
* path leaves at least one required invariant uncovered). When `required` is
* empty, delegates to `findPath` so the result is byte-identical for that case.
*
* Algorithm: BFS over `(node, coveredSubset)` states with state-level dedup.
* The covered subset is a `Set<string>` of invariant ids; the state's dedup
* key is the JSON encoding of `[node, sortedCoveredIds]`, which distinguishes
* distinct `(node, covered)` tuples for any node name or invariant id.
*
* Neighbour ordering when `required ≠ ∅`: edges covering ≥1 still-needed
* invariant come first, with `createdAt → to → migrationHash` as the
* secondary key. The heuristic steers BFS toward the satisfying path;
* correctness (shortest, deterministic) does not depend on it.
*/ function findPathWithInvariants(graph, fromHash, toHash, required) {
    if (required.size === 0) return findPath(graph, fromHash, toHash);
    const stateKey = (s)=>JSON.stringify([
            s.node,
            [
                ...s.covered
            ].sort()
        ]);
    const neighbours = (s)=>{
        const outgoing = graph.forwardChain.get(s.node) ?? [];
        if (outgoing.length === 0) return [];
        return [
            ...outgoing
        ].map((edge)=>{
            let useful = false;
            let next = null;
            for (const inv of edge.invariants)if (required.has(inv) && !s.covered.has(inv)) {
                if (next === null) next = new Set(s.covered);
                next.add(inv);
                useful = true;
            }
            return {
                edge,
                useful,
                nextCovered: next ?? s.covered
            };
        }).sort((a, b)=>{
            if (a.useful !== b.useful) return a.useful ? -1 : 1;
            return compareTieBreak(a.edge, b.edge);
        }).map(({ edge, nextCovered })=>({
                next: {
                    node: edge.to,
                    covered: nextCovered
                },
                edge
            }));
    };
    const parents = /* @__PURE__ */ new Map();
    for (const step of bfs([
        {
            node: fromHash,
            covered: /* @__PURE__ */ new Set()
        }
    ], neighbours, stateKey)){
        const curKey = stateKey(step.state);
        if (step.parent !== null && step.incomingEdge !== null) parents.set(curKey, {
            parentKey: stateKey(step.parent),
            edge: step.incomingEdge
        });
        if (step.state.node === toHash && step.state.covered.size === required.size) {
            const path = [];
            let cur = curKey;
            while(cur !== void 0){
                const p = parents.get(cur);
                if (!p) break;
                path.push(p.edge);
                cur = p.parentKey;
            }
            path.reverse();
            return path;
        }
    }
    return null;
}
/**
* Reverse-BFS from `toHash` over `reverseChain` to collect every node from
* which `toHash` is reachable (inclusive of `toHash` itself).
*/ function collectNodesReachingTarget(graph, toHash) {
    const reached = /* @__PURE__ */ new Set();
    for (const step of bfs([
        toHash
    ], (n)=>reverseNeighbours(graph, n)))reached.add(step.state);
    return reached;
}
/**
* Find the shortest path from `fromHash` to `toHash` and return structured
* path-decision metadata for machine-readable output. When `required` is
* non-empty, the returned path is the shortest one whose edges collectively
* cover every required invariant.
*
* The discriminated return type tells the caller *why* a path could not be
* found, so the CLI can pick the right structured error without re-running
* a structural BFS.
*/ function findPathWithDecision(graph, fromHash, toHash, options = {}) {
    const { refName, required = /* @__PURE__ */ new Set() } = options;
    const requiredInvariants = [
        ...required
    ].sort();
    if (fromHash === toHash && required.size === 0) return {
        kind: "ok",
        decision: {
            selectedPath: [],
            fromHash,
            toHash,
            alternativeCount: 0,
            tieBreakReasons: [],
            requiredInvariants,
            satisfiedInvariants: [],
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("refName", refName)
        }
    };
    const path = findPathWithInvariants(graph, fromHash, toHash, required);
    if (!path) {
        if (required.size === 0) return {
            kind: "unreachable"
        };
        const structural = findPath(graph, fromHash, toHash);
        if (structural === null) return {
            kind: "unreachable"
        };
        const coveredByStructural = /* @__PURE__ */ new Set();
        for (const edge of structural)for (const inv of edge.invariants)if (required.has(inv)) coveredByStructural.add(inv);
        return {
            kind: "unsatisfiable",
            structuralPath: structural,
            missing: requiredInvariants.filter((id)=>!coveredByStructural.has(id))
        };
    }
    const satisfiedInvariants = computeSatisfiedInvariants(required, path);
    const reachesTarget = collectNodesReachingTarget(graph, toHash);
    const coveragePrefixes = requiredCoveragePrefixes(required, path);
    const tieBreakReasons = [];
    let alternativeCount = 0;
    for (const [i, edge] of path.entries()){
        const outgoing = graph.forwardChain.get(edge.from);
        if (!outgoing || outgoing.length <= 1) continue;
        const reachable = outgoing.filter((e)=>reachesTarget.has(e.to));
        if (reachable.length <= 1) continue;
        let comparisonPool = reachable;
        if (required.size > 0) {
            const prefixSet = coveragePrefixes[i];
            if (prefixSet === void 0) continue;
            comparisonPool = invariantViableAlternativesAtStep(required, prefixSet, reachable);
        }
        alternativeCount += reachable.length - 1;
        if (sortedNeighbors(reachable)[0]?.migrationHash !== edge.migrationHash) continue;
        if (!reachable.some((e)=>e.migrationHash !== edge.migrationHash)) continue;
        const sortedViable = sortedNeighbors(comparisonPool);
        if (sortedViable.length > 1 && sortedViable[0]?.migrationHash === edge.migrationHash && sortedViable.some((e)=>e.migrationHash !== edge.migrationHash)) tieBreakReasons.push(`at ${edge.from}: ${comparisonPool.length} candidates, selected by tie-break`);
    }
    return {
        kind: "ok",
        decision: {
            selectedPath: path,
            fromHash,
            toHash,
            alternativeCount,
            tieBreakReasons,
            requiredInvariants,
            satisfiedInvariants,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("refName", refName)
        }
    };
}
function computeSatisfiedInvariants(required, path) {
    if (required.size === 0) return [];
    const covered = /* @__PURE__ */ new Set();
    for (const edge of path)for (const inv of edge.invariants)if (required.has(inv)) covered.add(inv);
    return [
        ...covered
    ].sort();
}
/**
* For each edge on path, invariant coverage accumulated from earlier edges only —
* `(required ∩ ∪_{j<i} path[j].invariants)` represented as cumulative set along `required`,
* keyed as "full set of required ids satisfied before taking path[i]".
*/ function requiredCoveragePrefixes(required, path) {
    const prefixes = [];
    const acc = /* @__PURE__ */ new Set();
    for (const edge of path){
        prefixes.push(new Set(acc));
        for (const inv of edge.invariants)if (required.has(inv)) acc.add(inv);
    }
    return prefixes;
}
function invariantViableAlternativesAtStep(required, coverageBeforeTakingEdge, outgoing) {
    if (required.size === 0) return [
        ...outgoing
    ];
    return outgoing.filter((e)=>[
            ...required
        ].every((id)=>coverageBeforeTakingEdge.has(id) || e.invariants.includes(id)));
}
function detectCycles(graph) {
    const WHITE = 0;
    const GRAY = 1;
    const BLACK = 2;
    const color = /* @__PURE__ */ new Map();
    const parentMap = /* @__PURE__ */ new Map();
    const cycles = [];
    for (const node of graph.nodes)color.set(node, WHITE);
    const stack = [];
    function pushFrame(u) {
        color.set(u, GRAY);
        stack.push({
            node: u,
            outgoing: graph.forwardChain.get(u) ?? [],
            index: 0
        });
    }
    for (const root of graph.nodes){
        if (color.get(root) !== WHITE) continue;
        parentMap.set(root, null);
        pushFrame(root);
        while(stack.length > 0){
            const frame = stack[stack.length - 1];
            if (frame.index >= frame.outgoing.length) {
                color.set(frame.node, BLACK);
                stack.pop();
                continue;
            }
            const v = frame.outgoing[frame.index++].to;
            const vColor = color.get(v);
            if (vColor === GRAY) {
                const cycle = [
                    v
                ];
                let cur = frame.node;
                while(cur !== v){
                    cycle.push(cur);
                    cur = parentMap.get(cur) ?? v;
                }
                cycle.reverse();
                cycles.push(cycle);
            } else if (vColor === WHITE) {
                parentMap.set(v, frame.node);
                pushFrame(v);
            }
        }
    }
    return cycles;
}
function detectOrphans(graph) {
    if (graph.nodes.size === 0) return [];
    const reachable = /* @__PURE__ */ new Set();
    const startNodes = [];
    if (graph.forwardChain.has("empty")) startNodes.push(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$constants$2d$CM$2d$w38DQ$2d$Cz_EXbOc$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]);
    else {
        const allTargets = /* @__PURE__ */ new Set();
        for (const edges of graph.forwardChain.values())for (const edge of edges)allTargets.add(edge.to);
        for (const node of graph.nodes)if (!allTargets.has(node)) startNodes.push(node);
    }
    for (const step of bfs(startNodes, (n)=>forwardNeighbours(graph, n)))reachable.add(step.state);
    const orphans = [];
    for (const [from, migrations] of graph.forwardChain)if (!reachable.has(from)) orphans.push(...migrations);
    return orphans;
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/op-schema-3tXg0LTS-DqpOKDEa.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>MigrationOpsSchema,
    "t",
    ()=>MigrationOpSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/keywords.js [app-route] (ecmascript)");
;
//#region ../../../1-framework/3-tooling/migration/dist/op-schema-3tXg0LTS.mjs
/** What a check may say of the object it is about: an expectation, or the object's name alone. */ const CheckSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])({
    "expectation?": (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])({
        expects: "'absent' | 'present'",
        object: "string > 0"
    }),
    "object?": "string > 0"
});
const MigrationOpSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])({
    id: "string",
    label: "string",
    operationClass: "'additive' | 'widening' | 'destructive' | 'data'",
    "invariantId?": "string",
    "precheck?": CheckSchema.array(),
    "postcheck?": CheckSchema.array()
});
const MigrationOpsSchema = MigrationOpSchema.array();
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/spaces-CW5yVjgx.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>gatherDiskContractSpaceState,
    "i",
    ()=>emitContractSpaceArtifacts,
    "n",
    ()=>computeExtensionSpaceApplyPath,
    "o",
    ()=>planAllSpaces,
    "r",
    ()=>contractSpaceFromJson,
    "t",
    ()=>assertDescriptorSelfConsistency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/errors-DXha_4l--relAaiI4.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$hash$2d$BAZVWU4a$2d$BQovI7hF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/hash-BAZVWU4a-BQovI7hF.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$contract$2d$snapshot$2d$store$2d$6gIBcUeb$2d$DJK3OM0j$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/contract-snapshot-store-6gIBcUeb-DJK3OM0j.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$io$2d$BNxFm3eg$2d$DYD82QeZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/io-BNxFm3eg-DYD82QeZ.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$migration$2d$graph$2d$BoiiZAaU$2d$DLht12k7$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/migration-graph-BoiiZAaU-DLht12k7.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$verify$2d$contract$2d$spaces$2d$B12R3P5U$2d$CfBKlBjj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/verify-contract-spaces-B12R3P5U-CfBKlBjj.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__APP_SPACE_ID$3e$__$3c$export__APP_SPACE_ID__as__t$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/control-DzRwUDn-.mjs [app-route] (ecmascript) <export t as APP_SPACE_ID> <export APP_SPACE_ID as t>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export t as InternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript) <export j as join>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalize$2d$json$2d$ZPawceQR$2d$Dua1VNEB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalizeJson$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/canonicalize-json-ZPawceQR-Dua1VNEB.mjs [app-route] (ecmascript) <export t as canonicalizeJson>");
;
;
;
;
;
;
;
;
;
;
;
//#region ../../../1-framework/3-tooling/migration/dist/exports/spaces.mjs
/**
* Assert that an extension descriptor is self-consistent: the
* `headRef.hash` it publishes must match the canonical hash recomputed
* from its `contractSpace.contractJson`.
*
* Recomputes via {@link computeStorageHash} — the same canonical-JSON
* pipeline the descriptor's own emit pipeline produced the hash with —
* over `(target, targetFamily, storage)`. Mismatch indicates the
* extension author bumped `contractJson` without rerunning emit, leaving
* the descriptor's `headRef.hash` stale; the consumer-side helpers
* (drift detection, on-disk artefact emission, runner marker writes) all
* trust `headRef.hash` as the canonical identity, so a stale value would
* silently corrupt every downstream boundary.
*
* Synchronous, pure, no I/O. Throws
* `MIGRATION.DESCRIPTOR_HEAD_HASH_MISMATCH` on failure with both the
* recomputed and published hashes in `meta` so callers can surface a
* clear remediation hint without re-deriving them.
*/ function assertDescriptorSelfConsistency(inputs) {
    const recomputed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$hash$2d$BAZVWU4a$2d$BQovI7hF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])({
        target: inputs.target,
        targetFamily: inputs.targetFamily,
        storage: inputs.storage,
        hooks: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("shouldPreserveEmpty", inputs.shouldPreserveEmpty),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("sortStorage", inputs.sortStorage)
        }
    });
    if (recomputed !== inputs.headRefHash) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"])({
        extensionId: inputs.extensionId,
        recomputedHash: recomputed,
        headRefHash: inputs.headRefHash
    });
}
/**
* Compute the apply path for an extension contract space — the shortest
* sequence of on-disk migration packages that walks the live marker
* forward to the on-disk head ref hash, covering every required
* invariant.
*
* Reads only on-disk artifacts (`migrations/<spaceId>/refs/head.json`
* and the per-space migration packages). **Does not import any
* extension descriptor module** — `db init` / `db update` must remain
* runnable without the descriptor source on disk.
*
* Behaviour:
* - Returns `{ kind: 'ok', pathOps: [], … }` when the marker is already
*   at the recorded head and no required invariants are missing.
* - Returns `{ kind: 'unreachable' }` when the marker hash is not
*   structurally connected to the recorded head in the graph.
* - Returns `{ kind: 'unsatisfiable', missing, … }` when the marker is
*   reachable but no path covers the required invariants.
* - Returns `{ kind: 'contractSpaceHeadRefMissing' }` when the per-space
*   `refs/head.json` is absent — the precheck verifier should already
*   have rejected this case, but the helper is defensive so callers can
*   surface a coherent error rather than throw.
*/ async function computeExtensionSpaceApplyPath(inputs) {
    const { projectMigrationsDir, spaceId, currentMarkerHash, currentMarkerInvariants } = inputs;
    const contractSpaceHeadRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$verify$2d$contract$2d$spaces$2d$B12R3P5U$2d$CfBKlBjj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["s"])(projectMigrationsDir, spaceId);
    if (contractSpaceHeadRef === null) return {
        kind: "contractSpaceHeadRefMissing"
    };
    const { packages } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$io$2d$BNxFm3eg$2d$DYD82QeZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$verify$2d$contract$2d$spaces$2d$B12R3P5U$2d$CfBKlBjj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["c"])(projectMigrationsDir, spaceId), {
        migrationsDir: projectMigrationsDir
    });
    const graph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$migration$2d$graph$2d$BoiiZAaU$2d$DLht12k7$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])(packages);
    const fromHash = currentMarkerHash ?? "empty";
    const required = new Set(contractSpaceHeadRef.invariants.filter((id)=>!currentMarkerInvariants.includes(id)));
    const outcome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$migration$2d$graph$2d$BoiiZAaU$2d$DLht12k7$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"])(graph, fromHash, contractSpaceHeadRef.hash, {
        required
    });
    if (outcome.kind === "unreachable") return {
        kind: "unreachable",
        contractSpaceHeadRef
    };
    if (outcome.kind === "unsatisfiable") return {
        kind: "unsatisfiable",
        contractSpaceHeadRef,
        missing: outcome.missing,
        structuralPath: outcome.structuralPath.map(({ dirName, to })=>({
                dirName,
                to
            }))
    };
    const packagesByHash = new Map(packages.map((pkg)=>[
            pkg.metadata.migrationHash,
            pkg
        ]));
    const pathOps = [];
    const walkedMigrationDirs = [];
    const providedInvariantsSet = /* @__PURE__ */ new Set();
    for (const edge of outcome.decision.selectedPath){
        const pkg = packagesByHash.get(edge.migrationHash);
        if (!pkg) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`Migration package missing for edge ${edge.migrationHash} in space "${spaceId}"`);
        walkedMigrationDirs.push(pkg.dirName);
        for (const op of pkg.ops)pathOps.push(op);
        for (const invariant of pkg.metadata.providedInvariants)providedInvariantsSet.add(invariant);
    }
    return {
        kind: "ok",
        contractSpaceHeadRef,
        providedInvariants: [
            ...providedInvariantsSet
        ].sort(),
        pathOps,
        walkedMigrationDirs
    };
}
/**
* Materialise a typed {@link ContractSpace} from the JSON artefacts a
* contract-space extension package emits to disk.
*
* Extension descriptors wire `contract.json`, per-migration
* `migration.json` / `ops.json`, and `refs/head.json` to the framework's
* typed surfaces. TypeScript widens JSON imports to a structural record
* that does not preserve readonly modifiers or branded scalars (e.g.
* `StorageHashBase<'abc123...'>`), so authoring the descriptor inline
* forces every wiring site to cast through `unknown`. This helper
* encapsulates the single narrowing point: descriptor sources stay
* cast-free, and the (necessary) coercion is colocated with the
* documentation explaining why it is safe.
*
* Safety: the JSON files passed here are produced by the framework's own
* emit pipeline (`prisma contract emit` and `MigrationCLI.run`)
* and re-validated downstream by the runner / verifier. The descriptor
* is a pass-through wiring layer — no descriptor consumer treats the
* narrowed types as a stronger guarantee than "these came from the
* canonical emit pipeline".
*
* The helper does not introspect or schema-validate the inputs; runtime
* validation is the responsibility of `family.deserializeContract`
* (codec-aware, invoked at control-stack construction) and the
* per-migration `readMigrationPackage` reader used when loading
* from disk. JSON-imported packages flow through the descriptor without
* a disk read, so the equivalent runtime guarantee comes from the emit
* pipeline that produced the JSON in the first place.
*/ function contractSpaceFromJson(inputs) {
    const migrations = inputs.migrations.map((m)=>({
            dirName: m.dirName,
            metadata: m.metadata,
            ops: m.ops
        }));
    return {
        contractJson: inputs.contractJson,
        migrations,
        headRef: inputs.headRef
    };
}
/**
* Emit the per-space artifacts — the head contract snapshot (written into
* the migrations-root-wide `snapshots/` store, keyed by `headRef.hash`) and
* `refs/head.json` — under `<projectMigrationsDir>/<spaceId>/`.
*
* The head contract snapshot is write-if-absent (see
* {@link writeContractSnapshot}): a changed extension contract has a new
* hash, so it lands as a new store entry; an unchanged hash means identical
* canonical content already sits there. `refs/head.json` is
* rewritten whenever the head it holds differs; a file that already holds the
* same head, however it is formatted, is left alone.
*
* Path layout matches the convention in
* [`spaceMigrationDirectory`](./space-layout.ts). The space id is
* validated against `[a-z][a-z0-9_-]{0,63}` via
* {@link assertValidSpaceId} for filesystem-safety reasons; the helper
* accepts every space uniformly (including the app space, default
* `'app'`).
*
* The migrations directory and space subdirectory are created if they
* do not yet exist (`mkdir { recursive: true }`).
*
* Returns the snapshot directory and the head ref path when this call wrote them.
*/ async function emitContractSpaceArtifacts(projectMigrationsDir, spaceId, inputs) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$verify$2d$contract$2d$spaces$2d$B12R3P5U$2d$CfBKlBjj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["i"])(spaceId);
    const refsDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$verify$2d$contract$2d$spaces$2d$B12R3P5U$2d$CfBKlBjj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["l"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(projectMigrationsDir, spaceId));
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdir"])(refsDir, {
        recursive: true
    });
    const writtenPaths = [];
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$contract$2d$snapshot$2d$store$2d$6gIBcUeb$2d$DJK3OM0j$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])(projectMigrationsDir, inputs.headRef.hash, {
        contractJson: inputs.contract,
        contractDts: inputs.contractDts
    });
    if (snapshot.written) writtenPaths.push(snapshot.dir);
    const sortedInvariants = [
        ...inputs.headRef.invariants
    ].sort();
    const headJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalize$2d$json$2d$ZPawceQR$2d$Dua1VNEB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalizeJson$3e$__["canonicalizeJson"])({
        hash: inputs.headRef.hash,
        invariants: sortedInvariants
    });
    const headPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(refsDir, "head.json");
    if (await canonicalHeadOnDisk(headPath) !== headJson) {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])(headPath, `${headJson}\n`);
        writtenPaths.push(headPath);
    }
    return {
        writtenPaths
    };
}
async function canonicalHeadOnDisk(headPath) {
    try {
        const onDisk = JSON.parse(await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(headPath, "utf-8"));
        if (!Array.isArray(onDisk.invariants)) return void 0;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalize$2d$json$2d$ZPawceQR$2d$Dua1VNEB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalizeJson$3e$__["canonicalizeJson"])({
            hash: onDisk.hash,
            invariants: [
                ...onDisk.invariants
            ].sort()
        });
    } catch  {
        return;
    }
}
/**
* Read the on-disk state the per-space verifier needs:
*
* - The list of contract-space directories under
*   `<projectMigrationsDir>/` (via
*   {@link import('./verify-contract-spaces').listContractSpaceDirectories}).
* - The on-disk head ref `(hash, invariants)` for each declared extension space
*   (via {@link readContractSpaceHeadRef}; missing on-disk artefacts are simply
*   omitted — the verifier reports them as `declaredButUnmigrated`).
*
* Synchronous in spirit but async due to filesystem reads. Reads only
* the user's repo. **Does not import any extension descriptor module.**
*
* Composition convention: pure target-agnostic primitive in
* `1-framework`; the SQL family (and any future target family) wires
* it into its `dbInit` / `verify` flows alongside its own marker-row
* read before invoking `verifyContractSpaces`.
*/ async function gatherDiskContractSpaceState(args) {
    const { projectMigrationsDir, loadedSpaceIds } = args;
    const spaceDirsOnDisk = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$verify$2d$contract$2d$spaces$2d$B12R3P5U$2d$CfBKlBjj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["o"])(projectMigrationsDir);
    const headRefsBySpace = /* @__PURE__ */ new Map();
    for (const spaceId of loadedSpaceIds){
        if (spaceId === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__APP_SPACE_ID$3e$__$3c$export__APP_SPACE_ID__as__t$3e$__["t"]) continue;
        const head = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$verify$2d$contract$2d$spaces$2d$B12R3P5U$2d$CfBKlBjj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["s"])(projectMigrationsDir, spaceId);
        if (head !== null) headRefsBySpace.set(spaceId, head);
    }
    return {
        spaceDirsOnDisk,
        headRefsBySpace
    };
}
/**
* Iterate the per-space planner across a set of loaded contract spaces
* and return a deterministic shape regardless of declaration order.
*
* Behaviour:
*
* - The output is sorted alphabetically by `spaceId`. Two callers
*   passing the same set of inputs in different orders observe
*   byte-identical outputs.
* - The per-space planner (`planSpace`) is called exactly once per
*   input, in alphabetical-by-spaceId order. Its return value is
*   attached to the corresponding output entry verbatim.
* - Duplicate `spaceId`s in the input array throw
*   `MIGRATION.DUPLICATE_SPACE_ID` before any `planSpace` call runs,
*   keeping the planner pure when the input is malformed.
*
* The signature is generic over `TContract` and `TPackage` because the
* shape is framework-neutral (SQL family today, Mongo family
* eventually). Callers wire in whatever contract value and migration
* package shape their family already speaks.
*
* Synchronous: the underlying per-space planner (target's
* `MigrationPlanner.plan(...)`) is synchronous; callers that need to
* resolve async I/O (e.g. reading on-disk `contract.json` from disk)
* resolve it before calling `planAllSpaces` and pass the materialised
* inputs through.
*/ function planAllSpaces(inputs, planSpace) {
    const seen = /* @__PURE__ */ new Set();
    for (const input of inputs){
        if (seen.has(input.spaceId)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["f"])(input.spaceId);
        seen.add(input.spaceId);
    }
    return [
        ...inputs
    ].sort((a, b)=>{
        if (a.spaceId < b.spaceId) return -1;
        if (a.spaceId > b.spaceId) return 1;
        return 0;
    }).map((input)=>({
            spaceId: input.spaceId,
            migrationPackages: planSpace(input)
        }));
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/spaces-CW5yVjgx.mjs [app-route] (ecmascript) <export t as assertDescriptorSelfConsistency>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertDescriptorSelfConsistency",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$spaces$2d$CW5yVjgx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$spaces$2d$CW5yVjgx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/spaces-CW5yVjgx.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/type-expression-safety-CgHTWypx.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>isSafeTypeExpression
]);
//#region ../../../1-framework/3-tooling/emitter/dist/type-expression-safety.mjs
function isSafeTypeExpression(expr) {
    return !/import\s*\(|require\s*\(|declare\s|export\s|eval\s*\(/.test(expr);
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/verify-contract-spaces-B12R3P5U-CfBKlBjj.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>isValidSpaceId,
    "c",
    ()=>spaceMigrationDirectory,
    "i",
    ()=>assertValidSpaceId,
    "l",
    ()=>spaceRefsDirectory,
    "n",
    ()=>RESERVED_SPACE_SUBDIR_NAMES,
    "o",
    ()=>listContractSpaceDirectories,
    "r",
    ()=>SPACE_REFS_DIRNAME,
    "s",
    ()=>readContractSpaceHeadRef,
    "u",
    ()=>verifyContractSpaces
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/errors-DXha_4l--relAaiI4.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$io$2d$BNxFm3eg$2d$DYD82QeZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-toolchain/dist/io-BNxFm3eg-DYD82QeZ.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__APP_SPACE_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/control-DzRwUDn-.mjs [app-route] (ecmascript) <export t as APP_SPACE_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__CONTRACT_SNAPSHOTS_DIRNAME$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/control-DzRwUDn-.mjs [app-route] (ecmascript) <export n as CONTRACT_SNAPSHOTS_DIRNAME>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript) <export j as join>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
;
;
;
;
;
//#region ../../../1-framework/3-tooling/migration/dist/verify-contract-spaces-B12R3P5U.mjs
/**
* Pattern a contract-space identifier must match. The constraint is
* filesystem-friendly: lowercase letters / digits / hyphen / underscore,
* starts with a letter, max 64 characters.
*/ const SPACE_ID_PATTERN = /^[a-z][a-z0-9_-]{0,63}$/;
function isValidSpaceId(spaceId) {
    return SPACE_ID_PATTERN.test(spaceId);
}
function assertValidSpaceId(spaceId) {
    if (!isValidSpaceId(spaceId)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"])(spaceId);
}
/**
* Resolve the migrations subdirectory for a given contract space.
*
* Every contract space — including the app space (default `'app'`) —
* lands under `<projectMigrationsDir>/<spaceId>/`. The space id is
* validated against {@link SPACE_ID_PATTERN} because it becomes a
* filesystem directory name verbatim.
*
* `projectMigrationsDir` is the project's top-level `migrations/`
* directory; the helper does not assume anything about its absolute /
* relative shape and is symmetric with `pathe.join`.
*/ function spaceMigrationDirectory(projectMigrationsDir, spaceId) {
    assertValidSpaceId(spaceId);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(projectMigrationsDir, spaceId);
}
/**
* Per-space subdirectory name reserved for the ref store
* (`migrations/<space>/<SPACE_REFS_DIRNAME>/*.json`). Single source of
* truth: every helper that composes a per-space refs path imports this
* constant, and the enumerator uses it (via
* {@link RESERVED_SPACE_SUBDIR_NAMES}) to exclude reserved names from
* the contract-space candidate list.
*/ const SPACE_REFS_DIRNAME = "refs";
/**
* Names reserved under `migrations/` that must never be enumerated as a
* phantom contract space: `SPACE_REFS_DIRNAME` (e.g. a top-level
* `migrations/refs/` left in the wrong place) and
* `CONTRACT_SNAPSHOTS_DIRNAME` (the migrations-root-wide contract
* snapshot store, `migrations/snapshots/`).
*/ const RESERVED_SPACE_SUBDIR_NAMES = /* @__PURE__ */ new Set([
    SPACE_REFS_DIRNAME,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__CONTRACT_SNAPSHOTS_DIRNAME$3e$__["CONTRACT_SNAPSHOTS_DIRNAME"]
]);
/**
* Resolve the per-space refs directory for `spaceMigrationsDir`
* (typically the value returned by {@link spaceMigrationDirectory}).
* Composes the canonical {@link SPACE_REFS_DIRNAME} so callers do not
* hard-code the literal.
*/ function spaceRefsDirectory(spaceMigrationsDir) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(spaceMigrationsDir, SPACE_REFS_DIRNAME);
}
function hasErrnoCode$1(error, code) {
    return error instanceof Error && error.code === code;
}
/**
* Read the head ref (`hash` + `invariants`) for a contract space from
* `<projectMigrationsDir>/<spaceId>/refs/head.json`.
*
* Returns `null` when the file does not exist (first emit). Surfaces
* `MIGRATION.INVALID_JSON` / `MIGRATION.INVALID_REF_FILE` on a corrupt
* `refs/head.json` so callers can distinguish "no head ref on disk"
* (returns `null`) from "head ref present but unreadable" (throws).
*
* Validates the space id against `[a-z][a-z0-9_-]{0,63}` for the same
* filesystem-safety reasons as the rest of the per-space helpers. The
* helper is uniform across the app and extension spaces.
*/ async function readContractSpaceHeadRef(projectMigrationsDir, spaceId) {
    assertValidSpaceId(spaceId);
    const filePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(spaceRefsDirectory(spaceMigrationDirectory(projectMigrationsDir, spaceId)), "head.json");
    let raw;
    try {
        raw = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(filePath, "utf-8");
    } catch (error) {
        if (hasErrnoCode$1(error, "ENOENT")) return null;
        throw error;
    }
    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch (e) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["g"])(filePath, e instanceof Error ? e.message : String(e));
    }
    if (typeof parsed !== "object" || parsed === null) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["y"])(filePath, "expected an object");
    const obj = parsed;
    if (typeof obj.hash !== "string") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["y"])(filePath, "expected an object with a string `hash` field");
    if (!Array.isArray(obj.invariants) || obj.invariants.some((value)=>typeof value !== "string")) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$errors$2d$DXha_4l$2d2d$relAaiI4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["y"])(filePath, "expected an object with an `invariants` array of strings");
    return {
        hash: obj.hash,
        invariants: obj.invariants
    };
}
function hasErrnoCode(error, code) {
    return error instanceof Error && error.code === code;
}
/**
* List the per-space subdirectories under
* `<projectRoot>/migrations/`. Returns space-id directory names (sorted
* alphabetically) — i.e. any non-dot-prefixed, non-reserved
* ({@link RESERVED_SPACE_SUBDIR_NAMES}) subdirectory whose root does
* **not** contain a `migration.json` manifest. The manifest is the
* structural marker of a user-authored migration directory (see
* `readMigrationsDir` in `./io`); directory names themselves belong to
* the user and are not part of the contract. The reserved-name filter
* keeps `migrations/snapshots/` (the contract snapshot store) from ever
* being enumerated as a phantom contract space.
*
* Returns `[]` if the migrations directory does not exist (greenfield
* project).
*
* Reads only the user's repo. **No descriptor import.** The caller
* (verifier) feeds the result into {@link verifyContractSpaces} alongside
* the loaded-space set and the marker rows.
*/ async function listContractSpaceDirectories(projectMigrationsDir) {
    let entries;
    try {
        entries = (await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readdir"])(projectMigrationsDir, {
            withFileTypes: true
        })).map((d)=>({
                name: d.name,
                isDirectory: d.isDirectory()
            }));
    } catch (error) {
        if (hasErrnoCode(error, "ENOENT")) return [];
        throw error;
    }
    const namedCandidates = entries.filter((e)=>e.isDirectory).map((e)=>e.name).filter((name)=>!name.startsWith(".")).filter((name)=>!RESERVED_SPACE_SUBDIR_NAMES.has(name)).sort();
    return (await Promise.all(namedCandidates.map(async (name)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["stat"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])(projectMigrationsDir, name, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$toolchain$2f$dist$2f$io$2d$BNxFm3eg$2d$DYD82QeZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]));
            return {
                name,
                isMigrationDir: true
            };
        } catch (error) {
            if (hasErrnoCode(error, "ENOENT")) return {
                name,
                isMigrationDir: false
            };
            throw error;
        }
    }))).filter((c)=>!c.isMigrationDir).map((c)=>c.name);
}
/**
* Pure structural verifier for the per-space mechanism. Aggregates the
* three orphan / missing checks plus per-space hash and invariant
* comparison.
*
* Algorithm:
*
* - For every extension space declared in `loadedSpaces` (`'app'`
*   excluded — the per-space verifier is scoped to extension spaces;
*   the app is verified through the aggregate path):
*   - If no contract-space dir on disk → `declaredButUnmigrated`.
*   - Else if `markerRowsBySpace` lacks an entry → no violation here;
*     the live-DB compare done outside this helper is where the
*     absence shows up.
*   - Else compare marker hash / invariants vs. on-disk head hash /
*     invariants → `hashMismatch` / `invariantsMismatch` on drift.
* - For every contract-space dir on disk that is not in `loadedSpaces` →
*   `orphanSpaceDir`.
* - For every marker row whose `space` is not in `loadedSpaces` →
*   `orphanMarker`. The app-space marker is always loaded (`'app'` is
*   in `loadedSpaces` by definition).
*
* Output is deterministic: violations are sorted first by `kind`
* (`declaredButUnmigrated` → `orphanMarker` → `orphanSpaceDir` →
* `hashMismatch` → `invariantsMismatch`) then by `spaceId`. Two callers
* passing equivalent inputs see byte-identical violation lists.
*
* Synchronous, pure, no I/O. **Does not import the extension descriptor**
* (the inputs are pre-resolved by the caller); the verifier reads only
* the user repo, not `node_modules`.
*/ function verifyContractSpaces(inputs) {
    const violations = [];
    for (const spaceId of [
        ...inputs.loadedSpaces
    ].sort()){
        if (spaceId === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__APP_SPACE_ID$3e$__["APP_SPACE_ID"]) continue;
        if (!inputs.spaceDirsOnDisk.includes(spaceId)) {
            violations.push({
                kind: "declaredButUnmigrated",
                spaceId,
                remediation: `Extension '${spaceId}' is declared in extensions but has not been emitted; run \`{bin} db migrate\`.`
            });
            continue;
        }
        const head = inputs.headRefsBySpace.get(spaceId);
        const marker = inputs.markerRowsBySpace.get(spaceId);
        if (!head || !marker) continue;
        if (head.hash !== marker.hash) {
            violations.push({
                kind: "hashMismatch",
                spaceId,
                priorHeadHash: head.hash,
                markerHash: marker.hash,
                remediation: `Marker row for space '${spaceId}' is keyed at ${marker.hash}, but the on-disk ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])("migrations", spaceId, "contract.json")} resolves to ${head.hash}. Run \`{bin} db update\` to advance the database, or \`{bin} db migrate\` if the descriptor was bumped without re-emitting.`
            });
            continue;
        }
        const onDiskInvariants = [
            ...head.invariants
        ].sort();
        const markerInvariants = new Set(marker.invariants);
        const missing = onDiskInvariants.filter((id)=>!markerInvariants.has(id));
        if (missing.length > 0) violations.push({
            kind: "invariantsMismatch",
            spaceId,
            onDiskInvariants,
            markerInvariants: [
                ...marker.invariants
            ].sort(),
            remediation: `Marker row for space '${spaceId}' is missing invariants [${missing.map((s)=>JSON.stringify(s)).join(", ")}]. Run \`{bin} db update\` to apply the corresponding data-transform migrations.`
        });
    }
    for (const dir of [
        ...inputs.spaceDirsOnDisk
    ].sort())if (!inputs.loadedSpaces.has(dir)) violations.push({
        kind: "orphanSpaceDir",
        spaceId: dir,
        remediation: `Orphan contract-space directory \`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__join$3e$__["join"])("migrations", dir)}/\` for an extension not in extensions; remove the directory or re-add the extension.`
    });
    for (const space of [
        ...inputs.markerRowsBySpace.keys()
    ].sort())if (!inputs.loadedSpaces.has(space)) violations.push({
        kind: "orphanMarker",
        spaceId: space,
        remediation: `Orphan marker row for space '${space}' (no longer in extensions); remediation: manually delete the row from \`${inputs.markerLocation}\`.`
    });
    if (violations.length === 0) return {
        ok: true
    };
    const kindOrder = {
        declaredButUnmigrated: 0,
        orphanMarker: 1,
        orphanSpaceDir: 2,
        hashMismatch: 3,
        invariantsMismatch: 4
    };
    violations.sort((a, b)=>{
        const k = kindOrder[a.kind] - kindOrder[b.kind];
        if (k !== 0) return k;
        if (a.spaceId < b.spaceId) return -1;
        if (a.spaceId > b.spaceId) return 1;
        return 0;
    });
    return {
        ok: false,
        violations
    };
}
;
}),
];})()

//# sourceMappingURL=1676_%40prisma_orm-toolchain_dist_0y6t47wj9fgzf._.js.map