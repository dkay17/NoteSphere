module.exports = [
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/exports-WNaGWaJR-CVNygh-P.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "C",
    ()=>validateContractCodecMappings,
    "S",
    ()=>validateCodecRegistryCompleteness,
    "T",
    ()=>withTransactionMembers,
    "_",
    ()=>lints,
    "a",
    ()=>budgets,
    "b",
    ()=>startActivityOn,
    "c",
    ()=>createSqlExecutionStack,
    "d",
    ()=>delegatingRuntime,
    "f",
    ()=>deriveParamMetadata,
    "g",
    ()=>lazyActivitySource,
    "h",
    ()=>findActivitySource,
    "i",
    ()=>activitySource,
    "l",
    ()=>createToSql,
    "m",
    ()=>extractCodecIds,
    "n",
    ()=>PreparedStatementImpl,
    "o",
    ()=>createAstCodecRegistry,
    "p",
    ()=>encodeParamsWithMetadata,
    "r",
    ()=>SqlRuntimeBase,
    "s",
    ()=>createExecutionContext,
    "t",
    ()=>PreparedExecutionImpl,
    "u",
    ()=>delegatingActivitySource,
    "v",
    ()=>lowerSqlPlan,
    "w",
    ()=>withTransaction,
    "x",
    ()=>toRuntimeOptions,
    "y",
    ()=>planContentHashOn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$CHz1hF8M$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/dist-CHz1hF8M.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$util$2d$DixeJBri$2d$Cad7x5ec$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/util-DixeJBri-Cad7x5ec.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$middleware$2d$qY3R0WsS$2d$8GWtk_Bf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/middleware-qY3R0WsS-8GWtk_Bf.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$aggregate$2d$descriptor$2d$registry$2d$CkybswmO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/aggregate-descriptor-registry-CkybswmO.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$codec$2d$descriptor$2d$registry$2d$UiFDvDj4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/codec-descriptor-registry-UiFDvDj4.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/transaction-state-BfXhs7D7-DhmbySW9.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__isStructuredError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-route] (ecmascript) <export i as isStructuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-route] (ecmascript) <export o as structuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/assertions-Dw1lZz_Q.mjs [app-route] (ecmascript) <export n as invariant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$codec$2d$qqMjZrmn$2d$Cok8elAo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__materializeCodec$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/resolve-codec-qqMjZrmn-Cok8elAo.mjs [app-route] (ecmascript) <export i as materializeCodec>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$codec$2d$qqMjZrmn$2d$Cok8elAo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__resolveCodecDescriptorOrThrow$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/resolve-codec-qqMjZrmn-Cok8elAo.mjs [app-route] (ecmascript) <export a as resolveCodecDescriptorOrThrow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalize$2d$json$2d$ZPawceQR$2d$Dua1VNEB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalizeJson$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/canonicalize-json-ZPawceQR-Dua1VNEB.mjs [app-route] (ecmascript) <export t as canonicalizeJson>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__castAs$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export n as castAs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__assertNever$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export n as assertNever>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__isInternalError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export r as isInternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonical$2d$stringify$2d$DY4NaAJi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalStringify$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/canonical-stringify-DY4NaAJi.mjs [app-route] (ecmascript) <export t as canonicalStringify>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$framework$2d$components$2d$D6j4Y5K7$2d$RW9H184y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__checkContractComponentRequirements$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/framework-components-D6j4Y5K7-RW9H184y.mjs [app-route] (ecmascript) <export t as checkContractComponentRequirements>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$generator$2d$functions$2d$CXbQfvYu$2d$BIFU1Ryx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__mergeCapabilityMatrices$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/generator-functions-CXbQfvYu-BIFU1Ryx.mjs [app-route] (ecmascript) <export c as mergeCapabilityMatrices>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__AsyncIterableResult$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/runtime-DiBFiGVw.mjs [app-route] (ecmascript) <export t as AsyncIterableResult>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__RuntimeCore$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/runtime-DiBFiGVw.mjs [app-route] (ecmascript) <export i as RuntimeCore>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__applyMutationDefaults$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/runtime-DiBFiGVw.mjs [app-route] (ecmascript) <export a as applyMutationDefaults>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__assertMutationDefaultGeneratorsAvailable$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/runtime-DiBFiGVw.mjs [app-route] (ecmascript) <export s as assertMutationDefaultGeneratorsAvailable>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__checkAborted$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/runtime-DiBFiGVw.mjs [app-route] (ecmascript) <export c as checkAborted>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__checkMiddlewareCompatibility$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/runtime-DiBFiGVw.mjs [app-route] (ecmascript) <export l as checkMiddlewareCompatibility>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__collectMutationDefaultGenerators$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/runtime-DiBFiGVw.mjs [app-route] (ecmascript) <export u as collectMutationDefaultGenerators>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__createContextBeneath$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/runtime-DiBFiGVw.mjs [app-route] (ecmascript) <export d as createContextBeneath>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__executeStatement$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/runtime-DiBFiGVw.mjs [app-route] (ecmascript) <export h as executeStatement>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__g__as__raceAgainstAbort$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/runtime-DiBFiGVw.mjs [app-route] (ecmascript) <export g as raceAgainstAbort>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/runtime-error-BA9d7XjZ-BlT8t6LB.mjs [app-route] (ecmascript) <export n as runtimeError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v__as__startClientActivity$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/runtime-DiBFiGVw.mjs [app-route] (ecmascript) <export v as startClientActivity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__y__as__startTransactionActivity$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/runtime-DiBFiGVw.mjs [app-route] (ecmascript) <export y as startTransactionActivity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__b__as__streamStatement$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/runtime-DiBFiGVw.mjs [app-route] (ecmascript) <export b as streamStatement>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$execution$2d$DJDqCoRU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__createExecutionStack$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/execution-DJDqCoRU.mjs [app-route] (ecmascript) <export n as createExecutionStack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$hash$2d$content$2d$Bdl$2d$HSfq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__hashContent$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/hash-content-Bdl-HSfq.mjs [app-route] (ecmascript) <export t as hashContent>");
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
;
;
;
;
;
;
;
;
;
//#region ../../../2-sql-family/5-runtime/dist/exports-WNaGWaJR.mjs
/** The symbol-keyed member through which a runtime, connection, transaction, `withTransaction` context or activity handle starts activities; user-facing types do not show it. */ const activitySource = Symbol("activitySource");
function hasActivitySourceMember(target) {
    return activitySource in target;
}
/** The `activitySource` member of a queryable; `undefined` for a queryable that cannot start activities, such as a test stub. */ function findActivitySource(target) {
    return hasActivitySourceMember(target) ? target[activitySource] : void 0;
}
function activitySourceOf(target) {
    const source = findActivitySource(target);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(source !== void 0, "The queryable cannot start activities");
    return source;
}
/** An activity source that calls `source()` each time it is used, for an object whose source is created later, such as on the first query. */ function lazyActivitySource(source) {
    return {
        startActivity: async (activity)=>source().startActivity(activity),
        planContentHash: async (plan)=>source().planContentHash(plan)
    };
}
/** An activity source that starts activities on whatever queryable `target()` returns when called, for an object that sends its statements to a queryable it looks up each time. */ function delegatingActivitySource(target) {
    return lazyActivitySource(()=>activitySourceOf(target()));
}
/** Starts an activity on a queryable through its `activitySource` member. */ function startActivityOn(target, activity) {
    return activitySourceOf(target).startActivity(activity);
}
function planContentHashOn(target, plan) {
    return activitySourceOf(target).planContentHash(plan);
}
/**
* Build an {@link AstCodecResolver} bound to a descriptor registry and a per-call instance-context factory.
*
* The instance-context factory lets callers control `name` / `usedAt` for refs the AST supplies (e.g. AST-embedded migration ops where the materialisation site is the AST node, not a contract column). The contract-walk pre-population path constructs its own contexts and invokes the resolver with those refs to seed the cache.
*/ function createAstCodecResolver(descriptors, instanceContextFor) {
    const cache = /* @__PURE__ */ new Map();
    return {
        forCodecRef (ref) {
            const key = `${ref.codecId}:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalize$2d$json$2d$ZPawceQR$2d$Dua1VNEB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalizeJson$3e$__["canonicalizeJson"])(ref.typeParams)}`;
            const cached = cache.get(key);
            if (cached) return cached;
            const codec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$codec$2d$qqMjZrmn$2d$Cok8elAo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__materializeCodec$3e$__["materializeCodec"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$codec$2d$qqMjZrmn$2d$Cok8elAo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__resolveCodecDescriptorOrThrow$3e$__["resolveCodecDescriptorOrThrow"])((id)=>descriptors.descriptorFor(id), ref, "RUNTIME.CODEC_DESCRIPTOR_MISSING"), ref, instanceContextFor(ref));
            cache.set(key, codec);
            return codec;
        }
    };
}
/**
* Build a contract-free {@link ContractCodecRegistry} that resolves codecs
* purely from AST-supplied {@link import('@internal/framework-components/codec').CodecRef}s
* against a target's descriptor registry.
*
* Dispatch is driven entirely by `CodecRef`s embedded in AST nodes; no
* contract walk is needed. `forColumn` always returns `undefined` — this
* registry carries no column-to-codec mappings.
*/ function createAstCodecRegistry(descriptors) {
    const resolver = createAstCodecResolver(descriptors, (ref)=>({
            name: ref.codecId,
            usedAt: []
        }));
    return {
        forColumn: ()=>void 0,
        forCodecRef: (ref)=>resolver.forCodecRef(ref)
    };
}
const NO_METADATA = Object.freeze({
    codec: void 0,
    name: void 0
});
function deriveParamMetadata(ast) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$util$2d$DixeJBri$2d$Cad7x5ec$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(ast).map((ref)=>{
        return {
            codec: ref.codec,
            name: ref.name
        };
    });
}
function resolveParamCodec(metadata, contractCodecs) {
    if (metadata.codec && contractCodecs) return contractCodecs.forCodecRef(metadata.codec);
}
function paramLabel(metadata, paramIndex) {
    return metadata.name ?? `param[${paramIndex}]`;
}
function wrapEncodeFailure(error, metadata, paramIndex, codecId) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__isInternalError$3e$__["isInternalError"])(error)) throw error;
    const label = paramLabel(metadata, paramIndex);
    const wrapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.ENCODE_FAILED", `Failed to encode parameter ${label} with codec '${codecId}': ${error instanceof Error ? error.message : String(error)}`, {
        label,
        codec: codecId,
        paramIndex
    });
    wrapped.cause = error;
    throw wrapped;
}
async function encodeParamValue(value, metadata, paramIndex, ctx, contractCodecs) {
    if (value === null || value === void 0) return null;
    const codec = resolveParamCodec(metadata, contractCodecs);
    if (!codec) return value;
    if (metadata.codec?.many) {
        if (!Array.isArray(value)) wrapEncodeFailure(/* @__PURE__ */ new TypeError(`expected an array for many-typed parameter, got ${typeof value}`), metadata, paramIndex, codec.id);
        const encoded = [];
        for(let i = 0; i < value.length; i++){
            const elem = value[i];
            if (elem === null || elem === void 0) {
                encoded.push(null);
                continue;
            }
            try {
                encoded.push(await codec.toWire(elem, ctx));
            } catch (error) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__isStructuredError$3e$__["isStructuredError"])(error)) throw error;
                wrapEncodeFailure(error, metadata, paramIndex, codec.id);
            }
        }
        return encoded;
    }
    try {
        return await codec.toWire(value, ctx);
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__isStructuredError$3e$__["isStructuredError"])(error)) throw error;
        wrapEncodeFailure(error, metadata, paramIndex, codec.id);
    }
}
/**
* Encodes all parameters concurrently via `Promise.all`. Per parameter, sync-and async-authored codecs share the same path: `codec.encode → await → return`. Param-level failures are wrapped in `RUNTIME.ENCODE_FAILED`.
*
* When `ctx.signal` is provided:
*
* - **Already-aborted at entry** short-circuits with `RUNTIME.ABORTED` (`{ phase: 'encode' }`) before any `codec.encode` call is made — codecs can pin this with a per-call counter that stays at zero.
* - **Mid-flight abort** races the per-param `Promise.all` against `abortable(ctx.signal)`. The runtime returns `RUNTIME.ABORTED` promptly even if codec bodies ignore the signal; the in-flight bodies are abandoned and run to completion in the background (cooperative cancellation, see ADR 204).
* - Existing structured envelopes (any dotted-code error passing `isStructuredError`, e.g. `RUNTIME.ENCODE_FAILED`) that surface from a codec body before the runtime observes the abort pass through unchanged (no double wrap).
*/ async function encodeParams(plan, ctx, contractCodecs) {
    return encodeParamsWithMetadata(plan.params, deriveParamMetadata(plan.ast), ctx, contractCodecs);
}
async function encodeParamsWithMetadata(values, metadata, ctx, contractCodecs) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__checkAborted$3e$__["checkAborted"])(ctx, "encode");
    const signal = ctx.signal;
    if (values.length === 0) return values;
    const tasks = values.map((value, i)=>encodeParamValue(value, metadata[i] ?? NO_METADATA, i, ctx, contractCodecs));
    const settled = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__g__as__raceAgainstAbort$3e$__["raceAgainstAbort"])(Promise.all(tasks), signal, "encode");
    return Object.freeze(settled);
}
function extractCodecIds(contract) {
    const codecIds = /* @__PURE__ */ new Set();
    for (const ns of Object.values(contract.storage.namespaces))for (const table of Object.values(ns.entries.table ?? {}))for (const column of Object.values(table.columns)){
        const codecId = column.codecId;
        codecIds.add(codecId);
    }
    return codecIds;
}
function extractColumnCodecRefs(contract) {
    const refs = [];
    for (const [namespaceId, ns] of Object.entries(contract.storage.namespaces))for (const [tableName, table] of Object.entries(ns.entries.table ?? {}))for (const [columnName, column] of Object.entries(table.columns))refs.push({
        namespaceId,
        table: tableName,
        column: columnName,
        codecId: column.codecId
    });
    return refs;
}
function validateContractCodecMappings(registry, contract) {
    const invalidCodecs = extractColumnCodecRefs(contract).filter((ref)=>registry.descriptorFor(ref.codecId) === void 0);
    if (invalidCodecs.length > 0) {
        const details = {
            contractTarget: contract.target,
            invalidCodecs
        };
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.CODEC_MISSING", `Missing codec implementations for column codecIds: ${invalidCodecs.map((c)=>`${c.namespaceId}.${c.table}.${c.column} (${c.codecId})`).join(", ")}`, details);
    }
}
function validateCodecRegistryCompleteness(registry, contract) {
    validateContractCodecMappings(registry, contract);
}
/**
* Members that look up the runtime with `getRuntime()` when they are called. When the lookup throws, for example because the client is closed, the member reports the error through what it returns: a result rejects when it is read, and a promise rejects.
*/ function delegatingRuntime(getRuntime) {
    return {
        query (plan, options) {
            let runtime;
            try {
                runtime = getRuntime();
            } catch (error) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__AsyncIterableResult$3e$__["AsyncIterableResult"].rejected(error);
            }
            return runtime.query(plan, options);
        },
        async execute (plan, options) {
            return getRuntime().execute(plan, options);
        },
        async connection () {
            return getRuntime().connection();
        },
        async prepare (declaration, callback) {
            return getRuntime().prepare(declaration, callback);
        },
        [activitySource]: delegatingActivitySource(getRuntime)
    };
}
function toRuntimeOptions(options) {
    const copies = {
        verifyMarker: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("verifyMarker", options.verifyMarker),
        middleware: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("middleware", options.middleware),
        log: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("log", options.log),
        mode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("mode", options.mode)
    };
    return Object.values(copies).reduce((merged, copy)=>Object.assign(merged, copy), {});
}
/**
* Lowers a SQL query plan to an executable Plan by calling the adapter's lower method.
*
* Ad-hoc lowerings produce only `{kind: 'literal'}` slots; this helper
* unwraps them into the bare-value array `SqlExecutionPlan` exposes.
* Encountering a `{kind: 'bind'}` slot here means the caller passed an
* AST containing `PreparedParamRef` to the ad-hoc execute path — that's a
* caller error, surfaced as `RUNTIME.PREPARE_BIND_ON_ADHOC`.
*/ function lowerSqlPlan(adapter, contract, queryPlan) {
    const lowered = adapter.lower(queryPlan.ast, {
        contract,
        params: queryPlan.params
    });
    const params = lowered.params.map((slot)=>{
        if (slot.kind === "literal") return slot.value;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.PREPARE_BIND_ON_ADHOC", `The plan has a bind site for '${slot.name}'. A plan built inside prepare(...) runs only as a prepared statement.`, {
            name: slot.name
        });
    });
    return Object.freeze({
        sql: lowered.sql,
        params,
        ast: queryPlan.ast,
        meta: queryPlan.meta
    });
}
function hasAggregateWithoutGroupBy(ast) {
    if (ast.groupBy !== void 0) return false;
    return ast.projection.some((item)=>item.expr.kind === "aggregate");
}
function primaryTableFromAst(ast) {
    if (ast.from === void 0) return void 0;
    switch(ast.from.kind){
        case "table-source":
            return ast.from.name;
        case "derived-table-source":
            return ast.from.alias;
        case "function-source":
            return ast.from.fn;
        // v8 ignore next 4
        default:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__assertNever$3e$__["assertNever"])(ast.from, `Unsupported source kind: ${ast.from.kind}`);
    }
}
function estimateRowsFromAst(ast, tableRows, defaultTableRows, hasAggregateWithoutGroup) {
    if (hasAggregateWithoutGroup) return 1;
    const primaryTable = primaryTableFromAst(ast);
    const tableEstimate = (primaryTable !== void 0 ? tableRows[primaryTable] : void 0) ?? defaultTableRows;
    if (typeof ast.limit === "number") return Math.min(ast.limit, tableEstimate);
    return tableEstimate;
}
function emitBudgetViolation(error, shouldBlock, ctx) {
    if (shouldBlock) throw error;
    ctx.log.warn({
        code: error.code,
        message: error.message,
        details: error.details
    });
}
const observedRows = Symbol("budgets.observedRows");
function budgets(options) {
    const maxRows = options?.maxRows ?? 1e4;
    const defaultTableRows = options?.defaultTableRows ?? 1e4;
    const tableRows = options?.tableRows ?? {};
    const maxLatencyMs = options?.maxLatencyMs ?? 1e3;
    const rowSeverity = options?.severities?.rowCount ?? "error";
    const latencySeverity = options?.severities?.latency ?? "warn";
    return Object.freeze({
        name: "budgets",
        familyId: "sql",
        async beforeEncode (plan, ctx) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["K"])(plan.ast) && plan.ast.kind === "select") evaluateSelectAst(plan.ast, ctx);
        },
        async onRow (_row, _plan, ctx) {
            const observed = ctx.state(observedRows);
            const count = (typeof observed["count"] === "number" ? observed["count"] : 0) + 1;
            observed["count"] = count;
            if (count <= maxRows || observed["warned"] === true) return;
            const shouldBlock = rowSeverity === "error" || ctx.mode === "strict";
            if (!shouldBlock) observed["warned"] = true;
            emitBudgetViolation((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("BUDGET.ROWS_EXCEEDED", "Observed row count exceeds budget", {
                source: "observed",
                observedRows: count,
                maxRows
            }), shouldBlock, ctx);
        },
        async activityEnded (_activity, result, ctx) {
            if (result.kind === "statement") checkLatency(result.latencyMs, ctx);
        }
    });
    //TURBOPACK unreachable
    ;
    function checkLatency(latencyMs, ctx) {
        if (latencyMs > maxLatencyMs) {
            const shouldBlock = latencySeverity === "error" || ctx.mode === "strict";
            emitBudgetViolation((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("BUDGET.TIME_EXCEEDED", "Query latency exceeds budget", {
                latencyMs,
                maxLatencyMs
            }), shouldBlock, ctx);
        }
    }
    function evaluateSelectAst(ast, ctx) {
        const hasAggNoGroup = hasAggregateWithoutGroupBy(ast);
        const estimated = estimateRowsFromAst(ast, tableRows, defaultTableRows, hasAggNoGroup);
        const isUnbounded = ast.limit === void 0 && !hasAggNoGroup;
        const shouldBlock = rowSeverity === "error" || ctx.mode === "strict";
        if (isUnbounded) {
            emitBudgetViolation((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("BUDGET.ROWS_EXCEEDED", "Unbounded SELECT query exceeds budget", estimated >= maxRows ? {
                source: "ast",
                estimatedRows: estimated,
                maxRows
            } : {
                source: "ast",
                maxRows
            }), shouldBlock, ctx);
            return;
        }
        if (estimated > maxRows) emitBudgetViolation((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("BUDGET.ROWS_EXCEEDED", "Estimated row count exceeds budget", {
            source: "ast",
            estimatedRows: estimated,
            maxRows
        }), shouldBlock, ctx);
    }
}
const SELECT_STAR_REGEX = /select\s+\*/i;
const LIMIT_REGEX = /\blimit\b/i;
const MUTATION_PREFIX_REGEX = /^(insert|update|delete|create|alter|drop|truncate)\b/i;
const READ_ONLY_INTENTS = /* @__PURE__ */ new Set([
    "read",
    "report",
    "readonly"
]);
function evaluateRawGuardrails(plan, config) {
    const lints = [];
    const budgets = [];
    const normalized = normalizeWhitespace(plan.sql);
    const statementType = classifyStatement(normalized);
    if (statementType === "select") {
        if (SELECT_STAR_REGEX.test(normalized)) lints.push(createLint("LINT.SELECT_STAR", "error", "Raw SQL plan selects all columns via *", {
            sql: snippet(plan.sql)
        }));
        if (!LIMIT_REGEX.test(normalized)) {
            const severity = config?.budgets?.unboundedSelectSeverity ?? "error";
            lints.push(createLint("LINT.NO_LIMIT", "warn", "Raw SQL plan omits LIMIT clause", {
                sql: snippet(plan.sql)
            }));
            budgets.push(createBudget("BUDGET.ROWS_EXCEEDED", severity, "Raw SQL plan is unbounded and may exceed row budget", {
                sql: snippet(plan.sql),
                ...config?.budgets?.estimatedRows !== void 0 ? {
                    estimatedRows: config.budgets.estimatedRows
                } : {}
            }));
        }
    }
    if (isMutationStatement(statementType) && isReadOnlyIntent(plan.meta)) lints.push(createLint("LINT.READ_ONLY_MUTATION", "error", "Raw SQL plan mutates data despite read-only intent", {
        sql: snippet(plan.sql),
        intent: plan.meta.annotations?.["intent"]
    }));
    return {
        lints,
        budgets,
        statement: statementType
    };
}
function classifyStatement(sql) {
    const trimmed = sql.trim();
    const lower = trimmed.toLowerCase();
    if (lower.startsWith("with")) {
        if (lower.includes("select")) return "select";
    }
    if (lower.startsWith("select")) return "select";
    if (MUTATION_PREFIX_REGEX.test(trimmed)) return "mutation";
    return "other";
}
function isMutationStatement(statement) {
    return statement === "mutation";
}
function isReadOnlyIntent(meta) {
    const annotations = meta.annotations;
    const intent = typeof annotations?.intent === "string" ? annotations.intent.toLowerCase() : void 0;
    return intent !== void 0 && READ_ONLY_INTENTS.has(intent);
}
function normalizeWhitespace(value) {
    return value.replace(/\s+/g, " ").trim();
}
function snippet(sql) {
    return normalizeWhitespace(sql).slice(0, 200);
}
function createLint(code, severity, message, details) {
    return {
        code,
        severity,
        message,
        ...details ? {
            details
        } : {}
    };
}
function createBudget(code, severity, message, details) {
    return {
        code,
        severity,
        message,
        ...details ? {
            details
        } : {}
    };
}
function getFromSourceTableDetail(source) {
    switch(source.kind){
        case "table-source":
            return source.name;
        case "derived-table-source":
            return source.alias;
        case "function-source":
            return source.fn;
        // v8 ignore next 4
        default:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__assertNever$3e$__["assertNever"])(source, `Unsupported source kind: ${source.kind}`);
    }
}
function evaluateAstLints(ast) {
    const findings = [];
    switch(ast.kind){
        case "delete":
            if (ast.where === void 0) findings.push({
                code: "LINT.DELETE_WITHOUT_WHERE",
                severity: "error",
                message: "DELETE without WHERE clause blocks execution to prevent accidental full-table deletion",
                details: {
                    table: ast.table.name
                }
            });
            break;
        case "update":
            if (ast.where === void 0) findings.push({
                code: "LINT.UPDATE_WITHOUT_WHERE",
                severity: "error",
                message: "UPDATE without WHERE clause blocks execution to prevent accidental full-table update",
                details: {
                    table: ast.table.name
                }
            });
            break;
        case "select":
            if (ast.limit === void 0) {
                const table = ast.from !== void 0 ? getFromSourceTableDetail(ast.from) : void 0;
                findings.push({
                    code: "LINT.NO_LIMIT",
                    severity: "warn",
                    message: "Unbounded SELECT may return large result sets",
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("details", table !== void 0 ? {
                        table
                    } : void 0)
                });
            }
            if (ast.selectAllIntent !== void 0) {
                const table = ast.selectAllIntent.table;
                findings.push({
                    code: "LINT.SELECT_STAR",
                    severity: "warn",
                    message: "Query selects all columns via selectAll intent",
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("details", table !== void 0 ? {
                        table
                    } : void 0)
                });
            }
            break;
        case "insert":
            break;
        case "raw-query":
            break;
        // v8 ignore next 2
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__assertNever$3e$__["assertNever"])(ast, `Unsupported AST kind: ${ast.kind}`);
    }
    return findings;
}
function getConfiguredSeverity(code, options) {
    const severities = options?.severities;
    if (!severities) return void 0;
    switch(code){
        case "LINT.SELECT_STAR":
            return severities.selectStar;
        case "LINT.NO_LIMIT":
            return severities.noLimit;
        case "LINT.DELETE_WITHOUT_WHERE":
            return severities.deleteWithoutWhere;
        case "LINT.UPDATE_WITHOUT_WHERE":
            return severities.updateWithoutWhere;
        case "LINT.READ_ONLY_MUTATION":
            return severities.readOnlyMutation;
        default:
            return;
    }
}
/**
* AST-first lint middleware for SQL plans. When `plan.ast` is a SQL QueryAst, inspects
* the AST structurally. When `plan.ast` is missing, falls back to raw heuristic
* guardrails or skips linting depending on `fallbackWhenAstMissing`.
*
* Rules (AST-based):
* - DELETE without WHERE: blocks execution (configurable severity, default error)
* - UPDATE without WHERE: blocks execution (configurable severity, default error)
* - Unbounded SELECT: warn/error (severity from noLimit)
* - SELECT * intent: warn/error (severity from selectStar)
*
* Fallback: When ast is missing, `fallbackWhenAstMissing: 'raw'` uses heuristic
* SQL parsing; `'skip'` skips all lints. Default is `'raw'`.
*/ function lints(options) {
    const fallback = options?.fallbackWhenAstMissing ?? "raw";
    const beforeOperation = async (plan, ctx)=>{
        const findings = [];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["K"])(plan.ast)) {
            findings.push(...evaluateAstLints(plan.ast));
            if (plan.ast.kind === "raw-query") findings.push(...evaluateRawGuardrails(plan).lints);
        } else if (fallback !== "skip") findings.push(...evaluateRawGuardrails(plan).lints);
        for (const lint of findings){
            const effectiveSeverity = getConfiguredSeverity(lint.code, options) ?? lint.severity;
            if (effectiveSeverity === "error") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])(lint.code, lint.message, lint.details);
            if (effectiveSeverity === "warn") ctx.log.warn({
                code: lint.code,
                message: lint.message,
                details: lint.details
            });
        }
    };
    return Object.freeze({
        name: "lints",
        familyId: "sql",
        beforeEncode: beforeOperation
    });
}
var PreparedStatementImpl = class {
    sql;
    ast;
    meta;
    slots;
    decodeContext;
    paramMetadata;
    constructor(internals){
        this.sql = internals.sql;
        this.ast = internals.ast;
        this.meta = internals.meta;
        this.slots = internals.slots;
        this.decodeContext = internals.decodeContext;
        this.paramMetadata = internals.paramMetadata;
        Object.freeze(this);
    }
    query(target, params, options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(target, this, params, options);
    }
};
/**
* The statistics-reporting sibling of {@link PreparedStatementImpl}. A plan
* declaring an affected-row count prepares into one of these, which carries
* the same lowered statement and bind slots and is consumed by executing it.
*
* The two classes are separate so the consumption a plan did not declare is
* absent from the value, not merely from its type.
*/ var PreparedExecutionImpl = class {
    sql;
    ast;
    meta;
    slots;
    decodeContext;
    paramMetadata;
    constructor(internals){
        this.sql = internals.sql;
        this.ast = internals.ast;
        this.meta = internals.meta;
        this.slots = internals.slots;
        this.decodeContext = internals.decodeContext;
        this.paramMetadata = internals.paramMetadata;
        Object.freeze(this);
    }
    execute(target, params, options) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"])(target, this, params, options);
    }
};
function createSqlExecutionStack(options) {
    const stack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$execution$2d$DJDqCoRU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__createExecutionStack$3e$__["createExecutionStack"])({
        target: options.target,
        adapter: options.adapter,
        driver: options.driver,
        extensions: options.extensions
    });
    const { driver } = stack;
    return driver === void 0 ? stack : {
        ...stack,
        driver
    };
}
function assertExecutionStackContractRequirements(contract, stack) {
    const providedComponentIds = /* @__PURE__ */ new Set([
        stack.target.id,
        stack.adapter.id,
        ...stack.extensions.map((pack)=>pack.id)
    ]);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$framework$2d$components$2d$D6j4Y5K7$2d$RW9H184y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__checkContractComponentRequirements$3e$__["checkContractComponentRequirements"])({
        contract,
        expectedTargetFamily: "sql",
        expectedTargetId: stack.target.targetId,
        providedComponentIds
    });
    if (result.familyMismatch) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.CONTRACT_FAMILY_MISMATCH", `Contract target family '${result.familyMismatch.actual}' does not match runtime family '${result.familyMismatch.expected}'.`, {
        actual: result.familyMismatch.actual,
        expected: result.familyMismatch.expected
    });
    if (result.targetMismatch) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.CONTRACT_TARGET_MISMATCH", `Contract target '${result.targetMismatch.actual}' does not match runtime target descriptor '${result.targetMismatch.expected}'.`, {
        actual: result.targetMismatch.actual,
        expected: result.targetMismatch.expected
    });
    if (result.missingExtensionPackIds.length > 0) {
        const packIds = result.missingExtensionPackIds;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.MISSING_EXTENSION_PACK", `Contract requires extension pack(s) ${packIds.map((id)=>`'${id}'`).join(", ")}, but runtime descriptors do not provide matching component(s).`, {
            packIds
        });
    }
}
function validateTypeParams(typeParams, descriptor, context) {
    const result = descriptor.paramsSchema["~standard"].validate(typeParams);
    if (result instanceof Promise) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.TYPE_PARAMS_INVALID", `paramsSchema for codec '${descriptor.codecId}' returned a Promise; runtime validation requires a synchronous Standard Schema validator.`, {
        ...context,
        codecId: descriptor.codecId,
        typeParams
    });
    if (result.issues) {
        const messages = result.issues.map((issue)=>issue.message).join("; ");
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.TYPE_PARAMS_INVALID", `Invalid typeParams for column '${context.tableName}.${context.columnName}' (codecId: ${descriptor.codecId}): ${messages}`, {
            ...context,
            codecId: descriptor.codecId,
            typeParams
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(result.value);
}
/**
* Collect every {@link CodecDescriptor} contributed by the SQL stack and partition into "parameterized" vs "non-parameterized" via the descriptor's own {@link CodecDescriptorImpl.isParameterized} getter: a descriptor is parameterized when it has a `paramsSchema`.
*
* The unified descriptor list collapses the legacy split (a separate slot used to register parameterized codecs) — every codec id resolves through the same map (codec-registry-unification spec § Decision).
*/ function collectCodecDescriptors(contributors) {
    const all = [];
    const parameterized = /* @__PURE__ */ new Map();
    const seen = /* @__PURE__ */ new Set();
    for (const contributor of contributors)for (const descriptor of contributor.codecs()){
        if (seen.has(descriptor.codecId)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.DUPLICATE_CODEC", `Duplicate codec descriptor for codecId '${descriptor.codecId}'.`, {
            codecId: descriptor.codecId
        });
        seen.add(descriptor.codecId);
        all.push(descriptor);
        if (descriptor.isParameterized) parameterized.set(descriptor.codecId, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(descriptor));
    }
    return {
        all,
        parameterized
    };
}
/**
* Flatten every aggregate descriptor the SQL stack contributes. Shape validation, single-ownership of each `(operation, input)` pair, and trait-overlap resolution all happen inside {@link buildSqlAggregateDescriptorRegistry}, so contributions reach it unchecked and fail there — at composition, never mid-query.
*/ function collectAggregateDescriptorContributions(contributors) {
    return contributors.flatMap((contributor)=>contributor.types?.aggregateDescriptors ?? []);
}
function validateColumnTypeParams(storage, codecDescriptors) {
    for (const ns of Object.values(storage.namespaces))for (const [tableName, table] of Object.entries(ns.entries.table ?? {}))for (const [columnName, column] of Object.entries(table.columns))if (column.typeParams) {
        const descriptor = codecDescriptors.get(column.codecId);
        if (descriptor) validateTypeParams(column.typeParams, descriptor, {
            tableName,
            columnName
        });
    }
}
/**
* Build-time contract-integrity check: every `(table, column)` resolves to a {@link CodecRef} whose `codecId` is registered and whose `typeParams` presence matches the descriptor's `isParameterized` flag.
*
* Surfaces three classes of malformed contract that AST-bound codec resolution would otherwise mask silently:
*
* - column references a codecId no contributor registered → `RUNTIME.CODEC_DESCRIPTOR_MISSING`.
* - parameterized codec, no `typeParams` (legacy "tolerate refs without params" shape) → `RUNTIME.CODEC_PARAMETERIZATION_MISMATCH`.
* - non-parameterized codec, `typeParams` supplied → `RUNTIME.CODEC_PARAMETERIZATION_MISMATCH`.
*
* Runs unconditionally from `createExecutionContext` so contract bugs fail fast at construction time instead of silently skipping affected columns in the codec registry's pre-population walk.
*/ function assertColumnCodecIntegrity(storage, codecDescriptors) {
    for (const [namespaceId, ns] of Object.entries(storage.namespaces))for (const [tableName, table] of Object.entries(ns.entries.table ?? {}))for (const columnName of Object.keys(table.columns)){
        const ref = codecDescriptors.codecRefForColumn(namespaceId, tableName, columnName);
        if (!ref) continue;
        const descriptor = codecDescriptors.descriptorFor(ref.codecId);
        if (!descriptor) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.CODEC_DESCRIPTOR_MISSING", `Column '${tableName}.${columnName}' references codec '${ref.codecId}' but no contributor registered a codec descriptor for that codecId. Add the extension pack that owns the codec to the runtime stack.`, {
            table: tableName,
            column: columnName,
            codecId: ref.codecId
        });
        const paramsSchema = descriptor.paramsSchema;
        if (paramsSchema !== void 0 && ref.typeParams === void 0) {
            const probe = paramsSchema["~standard"].validate({});
            if (probe instanceof Promise) {
                probe.catch(()=>{});
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.TYPE_PARAMS_INVALID", `Column '${tableName}.${columnName}' uses parameterized codec '${ref.codecId}' whose paramsSchema returned a Promise; paramsSchema must be a synchronous Standard Schema validator. Return a value/issues result directly instead of a Promise.`, {
                    table: tableName,
                    column: columnName,
                    codecId: ref.codecId
                });
            }
            if ("issues" in probe && !!probe.issues) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.CODEC_PARAMETERIZATION_MISMATCH", `Column '${tableName}.${columnName}' uses parameterized codec '${ref.codecId}' but no typeParams are supplied. Provide typeParams on the column.`, {
                table: tableName,
                column: columnName,
                codecId: ref.codecId,
                expected: "parameterized",
                actual: "no typeParams"
            });
        }
        const refTypeParams = ref.typeParams;
        const refHasTypeParamKeys = refTypeParams !== void 0 && refTypeParams !== null && typeof refTypeParams === "object" && !Array.isArray(refTypeParams) && Object.keys(refTypeParams).length > 0;
        if (!descriptor.isParameterized && refHasTypeParamKeys) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.CODEC_PARAMETERIZATION_MISMATCH", `Column '${tableName}.${columnName}' supplies typeParams to non-parameterized codec '${ref.codecId}'. Remove the typeParams or switch to a parameterized codec id.`, {
            table: tableName,
            column: columnName,
            codecId: ref.codecId,
            expected: "non-parameterized",
            actual: "has typeParams"
        });
    }
}
/**
* Build a {@link ContractCodecRegistry} that resolves codecs exclusively through the `forCodecRef` content-keyed cache.
*
* One pre-population pass walks `storage.tables[].columns[]` to seed the resolver's per-ref instance context with the *aggregated* `usedAt` set for each canonical `(codecId, typeParams)` key. The same codec materialised through `forColumn` or `forCodecRef` is therefore one instance with one `SqlCodecInstanceContext` — stateful codecs reading `usedAt` see the full column set regardless of which surface the caller used.
*
* Per-key instance-name policy:
*
* - columns with `typeParams` use `<col:Table.column>` (the first column observed at that key; additional columns sharing the key extend `usedAt`).
* - non-parameterized codec ids use `<codec:codecId>`, aggregating every column on that codec id into one `usedAt` set.
* - ad-hoc refs the contract walk did not pre-populate (e.g. AST-supplied refs from deserialised migration ops) fall back to the canonical cache key `${codecId}:${canonicalizeJson(typeParams)}` — the only structurally honest identity for an ad-hoc ref, distinct per `(codecId, typeParams)`.
*
* Contract integrity is enforced upstream by {@link assertColumnCodecIntegrity}: every column must reference a registered `codecId` whose `descriptor.isParameterized` flag matches the presence of `typeParams` (via `codecRefForColumn`). The pre-population walk and `forColumn` therefore make no defensive checks — malformed columns fail fast at `createExecutionContext` construction with `RUNTIME.CODEC_DESCRIPTOR_MISSING` or `RUNTIME.CODEC_PARAMETERIZATION_MISMATCH` rather than being silently skipped here.
*
* `forColumn(ns, t, c)` is a thin delegate over `forCodecRef(codecRefForColumn(ns, t, c))`; encode/decode hot paths read the resolver directly via `forCodecRef`. The only `undefined` `forColumn` returns is the legitimate "no such column in the contract" case.
*/ function buildContractCodecRegistry(contract, codecDescriptors) {
    const refKeyOf = (ref)=>`${ref.codecId}:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalize$2d$json$2d$ZPawceQR$2d$Dua1VNEB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalizeJson$3e$__["canonicalizeJson"])(ref.typeParams)}`;
    const usedAtByKey = /* @__PURE__ */ new Map();
    const nameByKey = /* @__PURE__ */ new Map();
    for (const [namespaceId, ns] of Object.entries(contract.storage.namespaces))for (const [tableName, table] of Object.entries(ns.entries.table ?? {}))for (const columnName of Object.keys(table.columns)){
        const ref = codecDescriptors.codecRefForColumn(namespaceId, tableName, columnName);
        if (!ref) continue;
        const key = refKeyOf(ref);
        const site = {
            table: tableName,
            column: columnName
        };
        const existing = usedAtByKey.get(key);
        if (existing) existing.push(site);
        else {
            usedAtByKey.set(key, [
                site
            ]);
            const name = ref.typeParams !== void 0 ? `<col:${tableName}.${columnName}>` : `<codec:${ref.codecId}>`;
            nameByKey.set(key, name);
        }
    }
    const resolver = createAstCodecResolver(codecDescriptors, (ref)=>{
        const key = refKeyOf(ref);
        return {
            name: nameByKey.get(key) ?? key,
            usedAt: usedAtByKey.get(key) ?? []
        };
    });
    for (const [namespaceId, ns] of Object.entries(contract.storage.namespaces))for (const [tableName, table] of Object.entries(ns.entries.table ?? {}))for (const columnName of Object.keys(table.columns)){
        const ref = codecDescriptors.codecRefForColumn(namespaceId, tableName, columnName);
        if (!ref) continue;
        resolver.forCodecRef(ref);
    }
    return {
        forColumn (namespaceId, table, column) {
            const ref = codecDescriptors.codecRefForColumn(namespaceId, table, column);
            return ref ? resolver.forCodecRef(ref) : void 0;
        },
        forCodecRef (ref) {
            return resolver.forCodecRef(ref);
        }
    };
}
function createExecutionContext(options) {
    const { stack, driver } = options;
    assertExecutionStackContractRequirements(options.contract, stack);
    const capabilityContributors = [
        stack.target,
        stack.adapter,
        ...driver ? [
            driver
        ] : [],
        ...stack.extensions
    ];
    const mergedCapabilities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$generator$2d$functions$2d$CXbQfvYu$2d$BIFU1Ryx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__mergeCapabilityMatrices$3e$__["mergeCapabilityMatrices"])(options.contract.capabilities, capabilityContributors);
    const contract = {
        ...options.contract,
        capabilities: mergedCapabilities
    };
    const contributors = [
        stack.target,
        stack.adapter,
        ...stack.extensions
    ];
    const { all: allCodecDescriptors, parameterized: parameterizedCodecDescriptors } = collectCodecDescriptors(contributors);
    const queryOperationRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$CHz1hF8M$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])();
    for (const contributor of contributors){
        const ops = contributor.queryOperations?.() ?? {};
        for (const [name, op] of Object.entries(ops))queryOperationRegistry.register(name, op);
    }
    const codecDescriptors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$codec$2d$descriptor$2d$registry$2d$UiFDvDj4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(allCodecDescriptors, contract.storage);
    assertColumnCodecIntegrity(contract.storage, codecDescriptors);
    const aggregateDescriptors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$aggregate$2d$descriptor$2d$registry$2d$CkybswmO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(collectAggregateDescriptorContributions(contributors), codecDescriptors);
    const mutationDefaultGeneratorRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__collectMutationDefaultGenerators$3e$__["collectMutationDefaultGenerators"])(contributors);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__assertMutationDefaultGeneratorsAvailable$3e$__["assertMutationDefaultGeneratorsAvailable"])(contract.execution, mutationDefaultGeneratorRegistry);
    if (parameterizedCodecDescriptors.size > 0) validateColumnTypeParams(contract.storage, parameterizedCodecDescriptors);
    return {
        contract,
        contractCodecs: buildContractCodecRegistry(contract, codecDescriptors),
        codecDescriptors,
        aggregateDescriptors,
        queryOperations: queryOperationRegistry,
        rawCodecInferer: stack.adapter.rawCodecInferer,
        collectionMethods: contributors.flatMap((contributor)=>contributor.collectionMethods?.() ?? []),
        applyMutationDefaults: (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__applyMutationDefaults$3e$__["applyMutationDefaults"])(contract.execution, mutationDefaultGeneratorRegistry, options)
    };
}
const sqlNativeArrayListDecoder = async (wireValue, decodeElement)=>{
    if (!Array.isArray(wireValue)) throw new TypeError(`expected an array from the driver for many-typed column, got ${typeof wireValue}`);
    const decoded = [];
    for (const elem of wireValue)decoded.push(await decodeElement(elem));
    return decoded;
};
const WIRE_PREVIEW_LIMIT = 100;
const EMPTY_INCLUDE_ALIASES = /* @__PURE__ */ new Set();
function projectionListFromAst(ast) {
    if (ast.kind === "select") return ast.projection;
    return ast.returning;
}
function resolveProjectionCodec(item, contractCodecs) {
    if (item.codec && contractCodecs) return contractCodecs.forCodecRef(item.codec);
}
const EMPTY_MANY_ALIASES = /* @__PURE__ */ new Set();
function undecodedContext() {
    return {
        aliases: void 0,
        codecs: /* @__PURE__ */ new Map(),
        columnRefs: /* @__PURE__ */ new Map(),
        includeAliases: EMPTY_INCLUDE_ALIASES,
        manyAliases: EMPTY_MANY_ALIASES,
        aliasSource: "projection"
    };
}
/**
* Decode context for a raw statement: the columns come from the row spec its
* author declared at the terminator, and each carries the codec that decodes
* it. A statement that reports an affected-row count declares no columns, so
* its single stats row passes through undecoded.
*
* The spec is the only description of the result — the runtime never parses
* the SQL — so it is also what a mismatched result set is measured against.
*/ function rawQueryDecodeContext(ast, contractCodecs) {
    if (ast.result.kind === "affected-count") return undecodedContext();
    const aliases = [];
    const codecs = /* @__PURE__ */ new Map();
    for (const [name, column] of Object.entries(ast.result.columns)){
        aliases.push(name);
        if (contractCodecs) codecs.set(name, contractCodecs.forCodecRef({
            codecId: column.codecId
        }));
    }
    return {
        aliases,
        codecs,
        columnRefs: /* @__PURE__ */ new Map(),
        includeAliases: EMPTY_INCLUDE_ALIASES,
        manyAliases: EMPTY_MANY_ALIASES,
        aliasSource: "row-spec"
    };
}
function buildDecodeContext(ast, contractCodecs) {
    if (ast.kind === "raw-query") return rawQueryDecodeContext(ast, contractCodecs);
    const projection = projectionListFromAst(ast);
    if (!projection || projection.length === 0) return undecodedContext();
    const aliases = [];
    const codecs = /* @__PURE__ */ new Map();
    const columnRefs = /* @__PURE__ */ new Map();
    const includeAliases = /* @__PURE__ */ new Set();
    const manyAliases = /* @__PURE__ */ new Set();
    for (const item of projection){
        aliases.push(item.alias);
        const codec = resolveProjectionCodec(item, contractCodecs);
        if (codec) codecs.set(item.alias, codec);
        if (item.codec?.many) manyAliases.add(item.alias);
        if (item.expr.kind === "column-ref") columnRefs.set(item.alias, {
            table: item.expr.table,
            column: item.expr.column
        });
        else if (item.expr.kind === "subquery" || item.expr.kind === "json-array-agg") includeAliases.add(item.alias);
    }
    return {
        aliases,
        codecs,
        columnRefs,
        includeAliases,
        manyAliases,
        aliasSource: "projection"
    };
}
function previewWireValue(wireValue) {
    if (typeof wireValue === "string") return wireValue.length > WIRE_PREVIEW_LIMIT ? `${wireValue.substring(0, WIRE_PREVIEW_LIMIT)}...` : wireValue;
    return String(wireValue).substring(0, WIRE_PREVIEW_LIMIT);
}
function wrapDecodeFailure(error, alias, ref, codec, wireValue) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__isInternalError$3e$__["isInternalError"])(error)) throw error;
    const message = error instanceof Error ? error.message : String(error);
    const wrapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.DECODE_FAILED", `Failed to decode column ${ref ? `${ref.table}.${ref.column}` : alias} with codec '${codec.id}': ${message}`, {
        ...ref ? {
            table: ref.table,
            column: ref.column
        } : {
            alias
        },
        codec: codec.id,
        wirePreview: previewWireValue(wireValue)
    });
    wrapped.cause = error;
    throw wrapped;
}
function wrapIncludeAggregateFailure(error, alias, wireValue) {
    const wrapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.DECODE_FAILED", `Failed to parse JSON array for include alias '${alias}': ${error instanceof Error ? error.message : String(error)}`, {
        alias,
        wirePreview: previewWireValue(wireValue)
    });
    wrapped.cause = error;
    throw wrapped;
}
function decodeIncludeAggregate(alias, wireValue) {
    if (wireValue === null || wireValue === void 0) return [];
    try {
        if (typeof wireValue === "string") return JSON.parse(wireValue);
        if (typeof wireValue === "object") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(wireValue);
        return JSON.parse(String(wireValue));
    } catch (error) {
        wrapIncludeAggregateFailure(error, alias, wireValue);
    }
}
/**
* Decodes a single field. Single-armed: every cell takes the same path — `codec.decode → await → return plain value` — so sync- and async-authored codecs are indistinguishable to callers. JSON-Schema validation, when required, lives inside the resolved codec's `decode` body (e.g. `arktype-json` validates against its rehydrated schema and throws `RUNTIME.JSON_SCHEMA_VALIDATION_FAILED` from `decode` directly); there is
* no separate validator-registry pass.
*
* The row-level `rowCtx` is repackaged into a per-cell `SqlCodecCallContext` whose `column = { table, name }` is a structural projection of the per-cell `ColumnRef = { table, column }` resolved from the AST-backed `DecodeContext` (the same resolution `wrapDecodeFailure` uses for envelope construction — one resolution per cell, two consumers). Cells the runtime cannot resolve to a single underlying column (aggregate
* aliases, computed projections without a simple ref) get `column: undefined`, matching the spec contract that the runtime never silently defaults this field.
*
* For `many`-flagged aliases this function delegates frame traversal to the selected `ListDecoder`, passing `null` elements through unchanged and mapping the same element codec over every non-null element. SQL runtimes without a target-owned contribution select `sqlNativeArrayListDecoder` explicitly before row decoding. Element-level failures surface through the existing `RUNTIME.DECODE_FAILED` envelope with the column/codec context from the parent cell.
*/ async function decodeField(alias, wireValue, decodeCtx, rowCtx, listDecoder) {
    if (wireValue === null) return null;
    const codec = decodeCtx.codecs.get(alias);
    if (!codec) return wireValue;
    const ref = decodeCtx.columnRefs.get(alias);
    let cellCtx;
    if (ref) cellCtx = {
        ...rowCtx,
        column: {
            table: ref.table,
            name: ref.column
        }
    };
    else {
        const { column: _drop, ...rowCtxWithoutColumn } = rowCtx;
        cellCtx = rowCtxWithoutColumn;
    }
    const decodeElement = async (elem)=>{
        if (elem === null || elem === void 0) return null;
        try {
            return await codec.fromWire(elem, cellCtx);
        } catch (error) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__isStructuredError$3e$__["isStructuredError"])(error)) throw error;
            wrapDecodeFailure(error, alias, ref, codec, elem);
        }
    };
    if (decodeCtx.manyAliases.has(alias)) try {
        return await listDecoder(wireValue, decodeElement);
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__isStructuredError$3e$__["isStructuredError"])(error)) throw error;
        wrapDecodeFailure(error, alias, ref, codec, wireValue);
    }
    try {
        return await codec.fromWire(wireValue, cellCtx);
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__isStructuredError$3e$__["isStructuredError"])(error)) throw error;
        wrapDecodeFailure(error, alias, ref, codec, wireValue);
    }
}
/**
* Decodes a row by dispatching all per-cell codec calls concurrently via `Promise.all`. Each cell follows the single-armed `decodeField` path. Structured envelopes thrown by codec bodies (anything passing `isStructuredError`) and an `InternalError` pass through unchanged; all other failures are wrapped in `RUNTIME.DECODE_FAILED` with `{ table, column, codec }` (or `{ alias, codec }` when no column ref is resolvable) and the original error attached on `cause`.
*
* When `rowCtx.signal` is provided:
*
* - **Already-aborted at entry** short-circuits with `RUNTIME.ABORTED` (`{ phase: 'decode' }`) before any `codec.decode` call is made.
* - **Mid-flight aborts** race the per-cell `Promise.all` against the signal so the runtime returns promptly even when codec bodies ignore it. In-flight bodies that ignore the signal complete in the background (cooperative cancellation).
* - Existing structured envelopes (any dotted-code error passing `isStructuredError`, e.g. `RUNTIME.DECODE_FAILED`) from codec bodies pass through unchanged (no double wrap).
*/ async function decodeRow(row, decodeCtx, rowCtx, listDecoder) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__checkAborted$3e$__["checkAborted"])(rowCtx, "decode");
    const signal = rowCtx.signal;
    const aliases = decodeCtx.aliases ?? Object.keys(row);
    if (decodeCtx.aliases !== void 0) {
        for (const alias of decodeCtx.aliases)if (!Object.hasOwn(row, alias)) throw decodeCtx.aliasSource === "row-spec" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.RAW_ROW_COLUMN_MISSING", `Raw statement result has no column "${alias}", which its row spec declares`, {
            column: alias,
            declaredColumns: decodeCtx.aliases,
            resultColumns: Object.keys(row)
        }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.DECODE_FAILED", `Row missing projection alias "${alias}"`, {
            alias,
            expectedAliases: decodeCtx.aliases,
            presentKeys: Object.keys(row)
        });
    }
    const tasks = [];
    const includeIndices = [];
    for(let i = 0; i < aliases.length; i++){
        const alias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(aliases[i]);
        const wireValue = row[alias];
        if (decodeCtx.includeAliases.has(alias)) {
            includeIndices.push({
                index: i,
                alias,
                value: wireValue
            });
            tasks.push(Promise.resolve(void 0));
            continue;
        }
        tasks.push(decodeField(alias, wireValue, decodeCtx, rowCtx, listDecoder));
    }
    const settled = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__g__as__raceAgainstAbort$3e$__["raceAgainstAbort"])(Promise.all(tasks), signal, "decode");
    for (const entry of includeIndices)settled[entry.index] = decodeIncludeAggregate(entry.alias, entry.value);
    const decoded = {};
    for(let i = 0; i < aliases.length; i++){
        const alias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(aliases[i]);
        decoded[alias] = settled[i];
    }
    return decoded;
}
/**
* Computes a stable content hash for a lowered SQL execution plan.
*
* Internally builds an unambiguous canonical-stringified preimage from
* three components:
*
* 1. `meta.storageHash` — discriminates by schema. A migration changes the
*    storage hash, which invalidates cached entries automatically.
* 2. `exec.sql` — the raw lowered SQL text. Two queries with different
*    structure produce different keys. Note that we deliberately do **not**
*    use `computeSqlFingerprint` here: that helper strips literals to group
*    executions by statement shape (used by telemetry), which is the
*    opposite of what a content hash needs — we want per-execution
*    discrimination, not per-statement-shape grouping.
* 3. `exec.params` — the bound parameters. `canonicalStringify` produces a
*    deterministic serialization that is stable across object key
*    insertion order and that distinguishes types JSON would otherwise
*    conflate (e.g. `BigInt(1)` vs `1`).
*
* The components are wrapped in an object and canonicalized as a single
* unit (rather than concatenated with a delimiter) so component
* boundaries are unambiguous: any character appearing inside `sql` or
* `storageHash` cannot bleed across components and produce a collision
* with a different split of the same characters.
*
* The canonical string is then piped through `hashContent` to produce a
* bounded, opaque digest. See `@internal/utils/hash-content` for the
* rationale.
*
* @internal
*/ function computeSqlContentHash(exec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$hash$2d$content$2d$Bdl$2d$HSfq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__hashContent$3e$__["hashContent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonical$2d$stringify$2d$DY4NaAJi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalStringify$3e$__["canonicalStringify"])({
        storageHash: exec.meta.storageHash,
        sql: exec.sql,
        params: exec.params
    }));
}
const STRING_LITERAL_REGEX = /'(?:''|[^'])*'/g;
const NUMERIC_LITERAL_REGEX = /\b\d+(?:\.\d+)?\b/g;
const WHITESPACE_REGEX = /\s+/g;
/**
* Computes a literal-stripped, normalized fingerprint of a SQL statement.
*
* The function strips string and numeric literals, collapses whitespace, and
* lowercases the result before hashing — so two structurally equivalent
* statements (with different parameter values) produce the same fingerprint.
* Used by SQL telemetry to group queries.
*/ function computeSqlFingerprint(sql) {
    const normalized = sql.replace(STRING_LITERAL_REGEX, "?").replace(NUMERIC_LITERAL_REGEX, "?").replace(WHITESPACE_REGEX, " ").trim().toLowerCase();
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(normalized).digest("hex");
}
var InFlightOperations = class {
    #count = 0;
    #started = 0;
    #drainWaiters = [];
    /** Records one operation as in flight; the returned callback ends it and ignores later calls. */ begin() {
        this.#count += 1;
        this.#started += 1;
        let ended = false;
        return ()=>{
            if (ended) return;
            ended = true;
            this.#count -= 1;
            if (this.#count === 0) for (const wake of this.#drainWaiters.splice(0))wake();
        };
    }
    /** How many operations have begun so far; a change between two reads means work started in between. */ get started() {
        return this.#started;
    }
    /** How many operations are in flight. */ get count() {
        return this.#count;
    }
    get active() {
        return this.#count > 0;
    }
    drained() {
        if (this.#count === 0) return Promise.resolve();
        return new Promise((resolve)=>this.#drainWaiters.push(resolve));
    }
    /** Records `work` as in flight until it settles. */ async track(work) {
        const end = this.begin();
        try {
            return await work();
        } finally{
            end();
        }
    }
};
async function runBeforeCompileChain(middleware, initial, ctx) {
    let current = initial;
    for (const mw of middleware){
        if (!mw.beforeCompile) continue;
        const result = await mw.beforeCompile(current, ctx);
        if (result === void 0) continue;
        if (result.ast === current.ast) continue;
        ctx.log.debug?.({
            event: "middleware.rewrite",
            middleware: mw.name,
            lane: current.meta.lane
        });
        current = result;
    }
    return current;
}
/**
* Begins a transaction on a connection the transaction owns. The connection is released once the transaction has committed or rolled back, and destroyed after a failed rollback or a failed start other than a refusal before `BEGIN`. After a failed commit it stays held for the rollback that follows. A release that fails after the transaction settled is passed to `log.error`, and `commit()` or `rollback()` keeps its own outcome.
*/ async function beginOwnedTransaction(connection, begin, log) {
    let transaction;
    try {
        transaction = await begin();
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"])(connection)) await connection.release().catch(()=>void 0);
        else await connection.destroy(error).catch(()=>void 0);
        throw error;
    }
    let disposed = false;
    const dispose = async (destroyReason)=>{
        if (disposed) return;
        disposed = true;
        if (destroyReason !== void 0) {
            await connection.destroy(destroyReason.reason).catch(()=>void 0);
            return;
        }
        try {
            await connection.release();
        } catch (error) {
            try {
                log.error({
                    event: "runtime.connection.release.error",
                    error
                });
            } catch  {}
        }
    };
    return Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__castAs$3e$__["castAs"])(Object.create(transaction)), {
        async commit () {
            try {
                await transaction.commit();
            } catch (error) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])(transaction)?.committed === true) await dispose();
                throw error;
            }
            await dispose();
        },
        async rollback () {
            try {
                await transaction.rollback();
            } catch (error) {
                const settlement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])(transaction);
                const settled = settlement?.rolledBack === true || settlement?.committed === true;
                await dispose(settled ? void 0 : {
                    reason: error
                });
                throw error;
            }
            await dispose();
        }
    });
}
function normalizeSpec(spec) {
    if (typeof spec === "string") return {
        codec: {
            codecId: spec
        },
        nullable: false
    };
    return {
        codec: spec.typeParams !== void 0 ? {
            codecId: spec.codecId,
            typeParams: spec.typeParams
        } : {
            codecId: spec.codecId
        },
        nullable: spec.nullable === true
    };
}
var BindSiteExpression = class {
    returnType;
    #ast;
    constructor(ref, returnType){
        this.#ast = ref;
        this.returnType = returnType;
    }
    buildAst() {
        return this.#ast;
    }
};
function buildBindSiteParams(declaration) {
    const params = {};
    for (const [name, spec] of Object.entries(declaration)){
        const { codec, nullable } = normalizeSpec(spec);
        params[name] = new BindSiteExpression(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["j"].of(name, codec, nullable), {
            codecId: codec.codecId,
            nullable
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(Object.freeze(params));
}
/**
* Resolve a PreparedStatement's slot order to the unencoded values it
* will carry into encode. Literal slots come from the lowered AST;
* bind slots are looked up by name on `userParams`. Missing user params
* surface `RUNTIME.PREPARE_MISSING_PARAM` so the caller cannot silently
* bind `undefined`.
*/ function isRecord(value) {
    return typeof value === "object" && value !== null;
}
function resolvePreparedSlotValues(ps, userParams) {
    if (!isRecord(userParams)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.PREPARE_MISSING_PARAM", "Prepared statement parameters must be an object");
    return ps.slots.map((slot)=>{
        if (slot.kind === "literal") return slot.value;
        if (!Object.hasOwn(userParams, slot.name)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.PREPARE_MISSING_PARAM", `Prepared statement query is missing parameter '${slot.name}'`, {
            name: slot.name
        });
        return userParams[slot.name];
    });
}
async function encodePreparedParams(ps, userParams, ctx, contractCodecs) {
    return encodeParamsWithMetadata(resolvePreparedSlotValues(ps, userParams), ps.paramMetadata, ctx, contractCodecs);
}
var SqlFamilyAdapter = class {
    contract;
    markerReader;
    constructor(contract, adapterProfile){
        this.contract = contract;
        this.markerReader = adapterProfile;
    }
    validatePlan(plan, contract) {
        validateSqlPlan(plan, contract);
    }
};
/** Rejects a plan built for another target or contract: `PLAN.TARGET_MISMATCH` or `PLAN.HASH_MISMATCH`. */ function validateSqlPlan(plan, contract) {
    if (plan.meta.target !== contract.target) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("PLAN.TARGET_MISMATCH", "The plan was built for another target than the contract", {
        planTarget: plan.meta.target,
        contractTarget: contract.target
    });
    if (plan.meta.storageHash !== contract.storage.storageHash) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("PLAN.HASH_MISMATCH", "The plan was built for another contract", {
        planStorageHash: plan.meta.storageHash,
        contractStorageHash: contract.storage.storageHash
    });
}
function isExecutionPlan(plan) {
    return "sql" in plan;
}
function isBoundPreparedStatement(subject) {
    return "statement" in subject;
}
function isPreparedStatementInternals(statement) {
    return statement instanceof PreparedStatementImpl || statement instanceof PreparedExecutionImpl;
}
// v8 ignore next 2
const noopLogSink = ()=>{};
const noopLog = {
    info: noopLogSink,
    warn: noopLogSink,
    error: noopLogSink
};
const scheduleTimer = globalThis.setTimeout;
function runtimeClosedError() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("DRIVER.NOT_CONNECTED", "Runtime is closed", {
        why: "close() was called on this runtime, or on the client or connection that owns it. An await using scope calls close() when it ends.",
        fix: "Await every query, transaction and prepared statement before close(). The usual cause is a query returned without await from an await using scope."
    });
}
/**
* Abstract family-layer base for SQL runtimes. Subclass to build a target runtime
* (e.g. `PostgresRuntimeImpl`); app code should consume the `Runtime` interface returned
* by the target factories, never this class directly.
*/ var SqlRuntimeBase = class extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__RuntimeCore$3e$__["RuntimeCore"] {
    contract;
    adapter;
    driver;
    familyAdapter;
    contractCodecs;
    codecDescriptors;
    sqlCtx;
    verifyMarkerOption;
    verifyMarkerPromise;
    closePromise;
    ownsDriver;
    closeRefusal;
    #inFlight = new InFlightOperations();
    #openTransactionWork = new InFlightOperations();
    #transactionWorkOn = /* @__PURE__ */ new WeakMap();
    #openActivityHandles = 0;
    #refusing = false;
    #heldQueryables = /* @__PURE__ */ new WeakSet();
    #preparedStatementHandles = /* @__PURE__ */ new WeakMap();
    #holdFinishedChildren;
    #openTransactions = /* @__PURE__ */ new WeakMap();
    codecRegistryValidated;
    _telemetry;
    constructor(options){
        const { context, adapter, driver, verifyMarker, middleware, mode, log, closeRefusal, ownsDriver } = options;
        if (middleware) for (const mw of middleware)(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__checkMiddlewareCompatibility$3e$__["checkMiddlewareCompatibility"])(mw, "sql", context.contract.target);
        const sqlCtx = {
            contract: context.contract,
            mode: mode ?? "strict",
            now: ()=>Date.now(),
            log: log ?? noopLog,
            contentHash: (exec)=>computeSqlContentHash((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(exec)),
            scope: "runtime"
        };
        super({
            middleware: middleware ?? [],
            ctx: sqlCtx
        });
        this.#holdFinishedChildren = this.middleware.some((mw)=>mw.activityFinalized !== void 0);
        this.contract = context.contract;
        this.adapter = adapter;
        this.driver = driver;
        this.familyAdapter = new SqlFamilyAdapter(context.contract, adapter.profile);
        this.contractCodecs = context.contractCodecs;
        this.codecDescriptors = context.codecDescriptors;
        this.sqlCtx = sqlCtx;
        this.verifyMarkerOption = verifyMarker ?? "onFirstUse";
        this.closeRefusal = closeRefusal ?? "when-idle";
        this.codecRegistryValidated = false;
        this.verifyMarkerPromise = this.verifyMarkerOption === false ? Promise.resolve() : null;
        this.closePromise = null;
        this.ownsDriver = ownsDriver ?? true;
        this._telemetry = null;
    }
    /**
	* Lower a `SqlQueryPlan` (AST + meta) into a `SqlExecutionPlan`
	* with encoded parameters ready for the driver.
	*
	* Implementation note: SQL splits lower-then-encode across
	* {@link lowerToDraft} + {@link encodeDraftParams} so the selected
	* operation's middleware chain can run between them:
	* {@link prepareOperation} runs the statement's `beforeEncode` chain
	* between them (cipherstash bulk-encrypt, for example, mutates pre-encode
	* `ParamRef.value` slots). This protected hook composes the two back into
	* the cross-family `lower()` shape `RuntimeCore` expects. The production
	* operation methods use the matching split form before driver execution.
	*
	* `ctx: SqlCodecCallContext` is forwarded to `encodeParams` so
	* per-query cancellation reaches every codec body during parameter
	* encoding. SQL params do not populate `ctx.column` — encode-side
	* column metadata is the middleware's domain.
	*/ async lower(plan, ctx) {
        const draft = this.lowerToDraft(plan);
        return await this.encodeDraftParams(draft, ctx);
    }
    /**
	* AST → pre-encode draft for the selected `query()` or `execute()` operation.
	* The returned plan has `sql` rendered and `params` populated with the
	* user-domain values the lowering site collected from `ParamRef` nodes. No
	* codec encode has happened yet; consumers can mutate `params` via the
	* `SqlParamRefMutator` before {@link encodeDraftParams} runs.
	*/ lowerToDraft(plan) {
        return lowerSqlPlan(this.adapter, this.contract, plan);
    }
    /**
	* Encode a draft plan's params for the selected `query()` or `execute()`
	* operation through the per-column codecs and freeze the result into the
	* final `SqlExecutionPlan` the driver sees. Errors surface as
	* `RUNTIME.ENCODE_FAILED` envelopes from {@link encodeParams}.
	*/ async encodeDraftParams(draft, ctx) {
        return Object.freeze({
            ...draft,
            params: await encodeParams(draft, ctx, this.contractCodecs)
        });
    }
    /** Default query invocation required by the abstract `RuntimeCore` contract. */ // v8 ignore next 6
    runDriver(exec) {
        return this.driver.query({
            sql: exec.sql,
            params: exec.params
        });
    }
    runExecute(exec) {
        return this.driver.execute({
            sql: exec.sql,
            params: exec.params
        });
    }
    /**
	* Runs the registered middleware `beforeCompile` chain over the plan's draft (AST + meta). Returns the original plan unchanged when no middleware rewrote the AST; otherwise returns a new plan carrying the rewritten AST and meta. The lowering adapter and the encoder both walk the rewritten AST directly.
	*/ async compilePlan(plan, middlewareCtx) {
        const rewrittenDraft = await runBeforeCompileChain(this.middleware, {
            ast: plan.ast,
            meta: plan.meta
        }, middlewareCtx);
        return rewrittenDraft.ast === plan.ast ? plan : {
            ...plan,
            ast: rewrittenDraft.ast,
            meta: rewrittenDraft.meta
        };
    }
    query(plan, options) {
        return this.queryAgainstQueryable(plan, this.driver, options);
    }
    execute(plan, options) {
        return this.executeStatisticsAgainstQueryable(plan, this.driver, options);
    }
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"]](ps, params, options) {
        return this.runPreparedQueryAgainstQueryable((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(ps), params, this.driver, options);
    }
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]](ps, params, options) {
        return this.runPreparedExecuteAgainstQueryable((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(ps), params, this.driver, options);
    }
    #runtimeRoute;
    [activitySource] = {
        startActivity: (activity)=>{
            this.#runtimeRoute ??= this.queryableRoute(this.driver, "runtime", ()=>void 0, {
                transaction: (parent)=>this.beginOwnedTransactionBeneath(parent),
                runtimeWork: true
            });
            return this.startActivityOnRoute(this.#runtimeRoute, activity, void 0);
        },
        planContentHash: (plan)=>this.planContentHashFor(plan, "runtime", void 0)
    };
    /**
	* Starts a client activity whose statements and transaction run on `route`, beneath `parent` or, without one, beneath `route.parent()`.
	*/ startActivityOnRoute(route, activity, parent) {
        let endWork = noWork;
        let started;
        try {
            endWork = route.runtimeWork ? this.beginActivityWork(parent) : noWork;
            started = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v__as__startClientActivity$3e$__["startClientActivity"])(activity, {
                middleware: this.middleware,
                context: route.scope === "runtime" ? this.sqlCtx : {
                    ...this.sqlCtx,
                    scope: route.scope
                },
                parent: parent ?? route.parent(),
                holdFinishedChildren: this.#holdFinishedChildren
            });
        } catch (error) {
            endWork();
            return Promise.reject(error);
        }
        return started.then((run)=>this.activityHandle(run, route, endWork), (error)=>{
            endWork();
            throw error;
        });
    }
    /** The content hash of the statement `plan` would send on a queryable of `scope` beneath `parent`. */ async planContentHashFor(plan, scope, parent) {
        this.ensureCodecRegistryValidated();
        if (isBoundPreparedStatement(plan)) {
            const { statement, params } = plan;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(isPreparedStatementInternals(statement), "The prepared statement was not prepared by a SQL runtime");
            return computeSqlContentHash({
                sql: statement.sql,
                ast: statement.ast,
                meta: statement.meta,
                params: await encodePreparedParams(statement, params, {}, this.contractCodecs)
            });
        }
        if (isExecutionPlan(plan)) return computeSqlContentHash(Object.freeze({
            ...plan,
            params: await encodeParams(plan, {}, this.contractCodecs)
        }));
        const compiled = await this.compilePlan(plan, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__createContextBeneath$3e$__["createContextBeneath"])({
            ...this.sqlCtx,
            scope
        }, parent));
        return computeSqlContentHash(await this.encodeDraftParams(this.lowerToDraft(compiled), {}));
    }
    /** An activity route whose statements run on `queryable`. */ queryableRoute(queryable, scope, parent, options) {
        return {
            scope,
            parent,
            ...options,
            query: (plan, executeOptions)=>this.queryAgainstQueryable(plan, queryable, {
                    ...executeOptions,
                    scope
                }),
            execute: (plan, executeOptions)=>this.executeStatisticsAgainstQueryable(plan, queryable, {
                    ...executeOptions,
                    scope
                }),
            preparedQuery: (statement, params, executeOptions)=>this.runPreparedQueryAgainstQueryable(statement, params, queryable, {
                    ...executeOptions,
                    scope
                }),
            preparedExecute: (statement, params, executeOptions)=>this.runPreparedExecuteAgainstQueryable(statement, params, queryable, {
                    ...executeOptions,
                    scope
                })
        };
    }
    /** The activity route of a held connection that `owner` wraps: its statements run on `connection`, and its transactions begin there. */ connectionRoute(connection, owner) {
        const openTransaction = this.#openTransactions.get(connection);
        return this.queryableRoute(connection, "connection", ()=>openTransaction, {
            transaction: openTransaction === void 0 ? (parent)=>this.beginTransactionBeneathOn(connection, owner, parent) : void 0,
            runtimeWork: false
        });
    }
    beginTransactionBeneathOn(connection, owner, parent) {
        const openTransaction = this.#openTransactions.get(connection);
        if (openTransaction !== void 0) return Promise.reject(transactionAlreadyOpenError(parent, openTransaction));
        return this.beginTransactionOn(connection, owner, parent);
    }
    /** The `activitySource` member of a held connection that `owner()` wraps. */ connectionActivitySource(connection, owner) {
        return {
            startActivity: (activity)=>this.startActivityOnRoute(this.connectionRoute(connection, owner()), activity, void 0),
            planContentHash: (plan)=>this.planContentHashFor(plan, "connection", this.#openTransactions.get(connection))
        };
    }
    activityHandle(run, route, endWork) {
        const beneath = (options)=>({
                ...options,
                activityParent: run
            });
        const source = {
            startActivity: (activity)=>{
                try {
                    run.assertAcceptsChildren();
                } catch (error) {
                    return Promise.reject(error);
                }
                return this.startActivityOnRoute(route, activity, run);
            },
            planContentHash: (plan)=>this.planContentHashFor(plan, route.scope, run)
        };
        const handle = {
            [activitySource]: source,
            startActivity: source.startActivity,
            planContentHash: source.planContentHash,
            activity: run.activity,
            get intercepted () {
                return run.intercepted;
            },
            query (plan, options) {
                return rowsBeneath(run, ()=>route.query(plan, beneath(options)));
            },
            async execute (plan, options) {
                run.assertAcceptsChildren();
                return route.execute(plan, beneath(options));
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"]] (ps, params, options) {
                return rowsBeneath(run, ()=>route.preparedQuery((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(ps), params, beneath(options)));
            },
            async [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]] (ps, params, options) {
                run.assertAcceptsChildren();
                return route.preparedExecute((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(ps), params, beneath(options));
            },
            end (end) {
                let ending;
                try {
                    ending = run.end(end);
                } catch (error) {
                    endWork();
                    return Promise.reject(error);
                }
                return ending.then(endWork, (error)=>{
                    endWork();
                    throw error;
                });
            }
        };
        const beginTransaction = route.transaction;
        if (beginTransaction === void 0) return handle;
        return Object.assign(handle, {
            transaction: async ()=>{
                run.assertAcceptsChildren();
                return beginTransaction(run);
            }
        });
    }
    async beginOwnedTransactionBeneath(parent) {
        const { driverConnection, connection } = await this.openConnection({
            activityParent: parent
        });
        return this.ownTransaction(connection, ()=>this.beginTransactionOn(driverConnection, connection, parent));
    }
    /** Begins a transaction with `begin` on a connection the transaction owns; see `beginOwnedTransaction`. */ ownTransaction(connection, begin) {
        return beginOwnedTransaction(connection, begin, this.sqlCtx.log);
    }
    /**
	* Returns a raw driver connection. SQL issued on it runs below the middleware/codec/telemetry pipeline. It carries its own lifecycle (`release`/`destroy`/`beginTransaction`); the caller owns disposal. It follows the runtime's close rule for connections: see {@link Runtime.close}. Pass the `activityParent` of the activity it is acquired for, so it is admitted after `close()` while that activity is open.
	*/ async acquireRawConnection(options) {
        const endOperation = this.beginOperation(this.driver, options);
        let connection;
        try {
            connection = await this.driver.acquireConnection();
        } finally{
            endOperation();
        }
        const dispose = async (teardown)=>{
            try {
                await this.#inFlight.track(teardown);
            } finally{
                this.#transactionWorkOn.get(held)?.();
            }
        };
        const held = {
            query: (request)=>this.trackRows(connection.query(request)),
            execute: (request)=>this.#inFlight.track(()=>connection.execute(request)),
            beginTransaction: ()=>connection.beginTransaction(),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("explain", connection.explain?.bind(connection)),
            release: ()=>dispose(()=>connection.release()),
            destroy: (reason)=>dispose(()=>connection.destroy(reason))
        };
        return held;
    }
    async *trackRows(rows) {
        const iterator = rows[Symbol.asyncIterator]();
        try {
            let next = await this.#inFlight.track(()=>iterator.next());
            while(!next.done){
                yield next.value;
                next = await iterator.next();
            }
        } finally{
            await iterator.return?.();
        }
    }
    async setupDriverExecution(exec, queryable) {
        this.familyAdapter.validatePlan(exec, this.contract);
        this._telemetry = null;
        if (this.verifyMarkerPromise === null) {
            const markerQueryable = this.#heldQueryables.has(queryable) ? queryable : this.driver;
            this.verifyMarkerPromise = this.verifyMarker(markerQueryable).catch((error)=>{
                this.verifyMarkerPromise = null;
                throw error;
            });
        }
        await this.verifyMarkerPromise;
    }
    beginActivityWork(parent) {
        const endOperation = this.beginOperation(this.driver, {
            activityParent: parent
        });
        this.#openActivityHandles++;
        let ended = false;
        return ()=>{
            if (ended) return;
            ended = true;
            this.#openActivityHandles--;
            endOperation();
        };
    }
    warnWhenWaitingOnlyForUnendedWork(warned) {
        const openTransactions = this.#refusing ? this.#openTransactionWork.count : 0;
        if (warned.done || this.#openActivityHandles === 0 && openTransactions === 0) return;
        if (this.#inFlight.count !== this.#openActivityHandles) return;
        warned.done = true;
        this.sqlCtx.log.warn({
            event: "runtime.close.waiting-for-activities",
            openActivities: this.#openActivityHandles,
            openTransactions
        });
    }
    beginOperation(queryable, options) {
        const admittedParent = options?.activityParent?.acceptsChildren() === true;
        if (queryable === this.driver && this.#refusing && !admittedParent) throw runtimeClosedError();
        return this.#inFlight.begin();
    }
    parentOf(queryable, options) {
        const openTransaction = this.#openTransactions.get(queryable);
        const activityParent = options?.activityParent;
        if (activityParent === void 0) return openTransaction;
        if (openTransaction !== void 0 && !activityParent.ctx.inTransaction()) throw activityOutsideTransactionError(activityParent, openTransaction);
        return activityParent;
    }
    getListDecoder() {
        return sqlNativeArrayListDecoder;
    }
    async *streamDecodedRows(run, exec, createDecodeContext, driverCall, codecCtx, queryable, onDriverAnswered) {
        const rowDecodeContext = createDecodeContext();
        await this.setupDriverExecution(exec, queryable);
        const startedAt = Date.now();
        let telemetryOutcome = null;
        try {
            const iterator = run.runQuery(exec, driverCall)[Symbol.asyncIterator]();
            let answered = false;
            try {
                while(true){
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__checkAborted$3e$__["checkAborted"])(codecCtx, "stream");
                    const next = answered ? await iterator.next() : await iterator.next().finally(onDriverAnswered);
                    answered = true;
                    if (next.done) break;
                    yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(await decodeRow(next.value, rowDecodeContext, codecCtx, this.getListDecoder()));
                }
            } finally{
                await iterator.return?.();
            }
            telemetryOutcome = "success";
        } catch (error) {
            telemetryOutcome = "runtime-error";
            throw error;
        } finally{
            if (telemetryOutcome !== null) this.recordTelemetry(exec, telemetryOutcome, Date.now() - startedAt);
        }
    }
    createQueryContexts(options) {
        const signal = options?.signal;
        const scope = options?.scope ?? "runtime";
        return {
            codecCtx: signal === void 0 ? {} : {
                signal
            },
            contextFields: {
                ...this.sqlCtx,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("signal", signal),
                ...scope !== "runtime" ? {
                    scope
                } : {}
            }
        };
    }
    async prepareOperation(plan, codecCtx, run) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__checkAborted$3e$__["checkAborted"])(codecCtx, "stream");
        if (isExecutionPlan(plan)) {
            const mutator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$middleware$2d$qY3R0WsS$2d$8GWtk_Bf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(plan);
            await run.beforeEncode(plan, mutator);
            return Object.freeze({
                ...plan,
                params: await encodeParams({
                    ...plan,
                    params: mutator.currentParams()
                }, codecCtx, this.contractCodecs)
            });
        }
        const compiled = await this.compilePlan(plan, run.ctx);
        const draft = this.lowerToDraft(compiled);
        const mutator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$middleware$2d$qY3R0WsS$2d$8GWtk_Bf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(draft);
        await run.beforeEncode(draft, mutator);
        const draftWithMutations = Object.freeze({
            ...draft,
            params: mutator.currentParams()
        });
        return this.encodeDraftParams(draftWithMutations, codecCtx);
    }
    /** Query rows against a caller-supplied queryable through the shared preparation pipeline. */ queryAgainstQueryable(plan, queryable, options) {
        this.ensureCodecRegistryValidated();
        const self = this;
        const { codecCtx, contextFields } = this.createQueryContexts(options);
        const generator = async function*() {
            const endOperation = self.beginOperation(queryable, options);
            try {
                yield* (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__b__as__streamStatement$3e$__["streamStatement"])({
                    middleware: self.middleware,
                    plan,
                    context: contextFields,
                    parent: self.parentOf(queryable, options)
                }, async function*(run) {
                    const exec = await self.prepareOperation(plan, codecCtx, run);
                    yield* self.streamDecodedRows(run, exec, ()=>buildDecodeContext(exec.ast, self.contractCodecs), ()=>queryable.query({
                            sql: exec.sql,
                            params: exec.params
                        }), codecCtx, queryable, endOperation);
                });
            } finally{
                endOperation();
            }
        };
        return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__AsyncIterableResult$3e$__["AsyncIterableResult"](generator());
    }
    /** Execute statistics against a caller-supplied queryable through the shared preparation pipeline. */ async executeStatisticsAgainstQueryable(plan, queryable, options) {
        const endOperation = this.beginOperation(queryable, options);
        try {
            return await this.executeStatisticsInFlight(plan, queryable, options);
        } finally{
            endOperation();
        }
    }
    async executeStatisticsInFlight(plan, queryable, options) {
        this.ensureCodecRegistryValidated();
        const { codecCtx, contextFields } = this.createQueryContexts(options);
        return this.executeOn(queryable, options, plan, contextFields, async (run)=>{
            const exec = await this.prepareOperation(plan, codecCtx, run);
            return this.executeEncodedPlan(run, exec, queryable, codecCtx, ()=>queryable.execute({
                    sql: exec.sql,
                    params: exec.params
                }));
        });
    }
    executeOn(queryable, options, plan, context, body) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__executeStatement$3e$__["executeStatement"])({
            middleware: this.middleware,
            plan,
            context,
            parent: this.parentOf(queryable, options)
        }, body);
    }
    async executeEncodedPlan(run, exec, queryable, codecCtx, driverCall) {
        await this.setupDriverExecution(exec, queryable);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__checkAborted$3e$__["checkAborted"])(codecCtx, "stream");
        const startedAt = Date.now();
        let telemetryOutcome = "success";
        try {
            return await run.runExecute(exec, driverCall);
        } catch (error) {
            telemetryOutcome = "runtime-error";
            throw error;
        } finally{
            this.recordTelemetry(exec, telemetryOutcome, Date.now() - startedAt);
        }
    }
    async prepare(declaration, callback) {
        this.ensureCodecRegistryValidated();
        const userPlan = callback(buildBindSiteParams(declaration));
        const finalPlan = await this.compilePlan(userPlan, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__createContextBeneath$3e$__["createContextBeneath"])(this.sqlCtx, void 0));
        const orderedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$util$2d$DixeJBri$2d$Cad7x5ec$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(finalPlan.ast);
        const referencedNames = /* @__PURE__ */ new Set();
        for (const ref of orderedRefs)if (ref.kind === "prepared-param-ref") referencedNames.add(ref.name);
        const missing = Object.keys(declaration).filter((name)=>!referencedNames.has(name));
        if (missing.length > 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.PREPARE_UNUSED_PARAM", `Prepared statement declaration includes parameter${missing.length === 1 ? "" : "s"} not referenced by the callback's plan: ${missing.join(", ")}`, {
            unused: missing
        });
        const lowered = this.adapter.lower(finalPlan.ast, {
            contract: this.contract,
            params: orderedRefs.map((r)=>r.kind === "param-ref" ? r.value : void 0)
        });
        const decodeContext = buildDecodeContext(finalPlan.ast, this.contractCodecs);
        const paramMetadata = deriveParamMetadata(finalPlan.ast);
        const internals = Object.freeze({
            sql: lowered.sql,
            ast: finalPlan.ast,
            meta: finalPlan.meta,
            slots: lowered.params,
            decodeContext,
            paramMetadata
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(finalPlan.ast.kind === "raw-query" && finalPlan.ast.result.kind === "affected-count" ? new PreparedExecutionImpl(internals) : new PreparedStatementImpl(internals));
    }
    /** Query prepared rows against a caller-supplied queryable through the full pipeline. */ runPreparedQueryAgainstQueryable(ps, userParams, queryable, options) {
        this.ensureCodecRegistryValidated();
        const self = this;
        const { codecCtx, contextFields } = this.createQueryContexts(options);
        const generator = async function*() {
            const endOperation = self.beginOperation(queryable, options);
            try {
                yield* (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__b__as__streamStatement$3e$__["streamStatement"])({
                    middleware: self.middleware,
                    plan: ps,
                    context: contextFields,
                    parent: self.parentOf(queryable, options)
                }, (run)=>self.streamPreparedRows(run, ps, userParams, queryable, codecCtx, endOperation));
            } finally{
                endOperation();
            }
        };
        return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__AsyncIterableResult$3e$__["AsyncIterableResult"](generator());
    }
    async *streamPreparedRows(run, ps, userParams, queryable, codecCtx, onDriverAnswered) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__checkAborted$3e$__["checkAborted"])(codecCtx, "stream");
        const preEncodeValues = resolvePreparedSlotValues(ps, userParams);
        const preEncodeExec = {
            sql: ps.sql,
            params: preEncodeValues,
            ast: ps.ast,
            meta: ps.meta
        };
        const mutator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$middleware$2d$qY3R0WsS$2d$8GWtk_Bf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(preEncodeExec);
        await run.beforeEncode(preEncodeExec, mutator);
        const encodedParams = await encodeParamsWithMetadata(mutator.currentParams(), ps.paramMetadata, codecCtx, this.contractCodecs);
        const exec = {
            sql: ps.sql,
            params: encodedParams,
            ast: ps.ast,
            meta: ps.meta
        };
        const handles = this.#preparedStatementHandles;
        const request = {
            sql: exec.sql,
            params: exec.params,
            preparedStatementHandle: {
                get: ()=>handles.get(ps),
                set: (value)=>{
                    handles.set(ps, value);
                }
            }
        };
        yield* this.streamDecodedRows(run, exec, ()=>ps.decodeContext, ()=>queryable.query(request), codecCtx, queryable, onDriverAnswered);
    }
    /** Execute a prepared statement's statistics against a caller-supplied queryable through the full pipeline. */ async runPreparedExecuteAgainstQueryable(ps, userParams, queryable, options) {
        const endOperation = this.beginOperation(queryable, options);
        try {
            return await this.runPreparedExecuteInFlight(ps, userParams, queryable, options);
        } finally{
            endOperation();
        }
    }
    async runPreparedExecuteInFlight(ps, userParams, queryable, options) {
        this.ensureCodecRegistryValidated();
        const { codecCtx, contextFields } = this.createQueryContexts(options);
        return this.executeOn(queryable, options, ps, contextFields, (run)=>this.executePrepared(run, ps, userParams, queryable, codecCtx));
    }
    async executePrepared(run, ps, userParams, queryable, codecCtx) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__checkAborted$3e$__["checkAborted"])(codecCtx, "stream");
        const preEncodeValues = resolvePreparedSlotValues(ps, userParams);
        const preEncodeExec = {
            sql: ps.sql,
            params: preEncodeValues,
            ast: ps.ast,
            meta: ps.meta
        };
        const mutator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$middleware$2d$qY3R0WsS$2d$8GWtk_Bf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(preEncodeExec);
        await run.beforeEncode(preEncodeExec, mutator);
        const exec = {
            sql: ps.sql,
            params: await encodeParamsWithMetadata(mutator.currentParams(), ps.paramMetadata, codecCtx, this.contractCodecs),
            ast: ps.ast,
            meta: ps.meta
        };
        const handles = this.#preparedStatementHandles;
        const request = {
            sql: exec.sql,
            params: exec.params,
            preparedStatementHandle: {
                get: ()=>handles.get(ps),
                set: (value)=>{
                    handles.set(ps, value);
                }
            }
        };
        return this.executeEncodedPlan(run, exec, queryable, codecCtx, ()=>queryable.execute(request));
    }
    async connection() {
        return (await this.openConnection()).connection;
    }
    async openConnection(options) {
        const driverConn = await this.acquireRawConnection(options);
        this.#heldQueryables.add(driverConn);
        const self = this;
        const wrappedConnection = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"]]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(),
            transaction () {
                return self.beginTransactionOn(driverConn, wrappedConnection, void 0);
            },
            [activitySource]: self.connectionActivitySource(driverConn, ()=>wrappedConnection),
            release: ()=>driverConn.release(),
            destroy: (reason)=>driverConn.destroy(reason),
            query (plan, options) {
                return self.queryAgainstQueryable(plan, driverConn, {
                    ...options,
                    scope: "connection"
                });
            },
            execute (plan, options) {
                return self.executeStatisticsAgainstQueryable(plan, driverConn, {
                    ...options,
                    scope: "connection"
                });
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"]] (ps, params, options) {
                return self.runPreparedQueryAgainstQueryable((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(ps), params, driverConn, {
                    ...options,
                    scope: "connection"
                });
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]] (ps, params, options) {
                return self.runPreparedExecuteAgainstQueryable((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(ps), params, driverConn, {
                    ...options,
                    scope: "connection"
                });
            }
        };
        return {
            driverConnection: driverConn,
            connection: wrappedConnection
        };
    }
    /**
	* Begins a transaction on `connection`, which `owner` wraps, as a transaction activity. When the transaction's `activityStarted` hooks refuse the start, no `BEGIN` is sent, `owner` is recorded as clean, and `withTransaction` releases it; after any other start failure it destroys it. The transaction's `activityStarted` hooks run before `BEGIN`. Every statement sent on the transaction, or on `connection`, from the end of `BEGIN` until `commit()` or `rollback()` is called is the transaction's child, and is finalized when the transaction ends, with its outcome. `commit()` and `rollback()` resolve after every finalization hook has run. A subclass that holds its own connection begins its transactions here.
	*/ async beginTransactionOn(connection, owner, parent) {
        owner[__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"]].refusedBeforeBegin = false;
        const endTransactionWork = this.#openTransactionWork.begin();
        this.#transactionWorkOn.set(connection, endTransactionWork);
        let activity;
        try {
            activity = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__y__as__startTransactionActivity$3e$__["startTransactionActivity"])({
                middleware: this.middleware,
                context: {
                    ...this.sqlCtx,
                    scope: "transaction"
                },
                parent,
                holdFinishedChildren: this.#holdFinishedChildren
            });
        } catch (error) {
            endTransactionWork();
            owner[__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"]].refusedBeforeBegin = true;
            throw error;
        }
        let driverTx;
        try {
            driverTx = await connection.beginTransaction();
        } catch (error) {
            endTransactionWork();
            await activity.end({
                by: "rollback",
                outcome: "failed",
                commitAttempted: false
            });
            throw error;
        }
        if (this.#heldQueryables.has(connection)) this.#heldQueryables.add(driverTx);
        return this.wrapTransaction(driverTx, connection, activity, endTransactionWork);
    }
    wrapTransaction(driverTx, connection, activity, endTransactionWork) {
        this.#openTransactions.set(driverTx, activity);
        this.#openTransactions.set(connection, activity);
        const stopAcceptingChildren = ()=>{
            activity.stopAcceptingChildren();
            for (const queryable of [
                driverTx,
                connection
            ])if (this.#openTransactions.get(queryable) === activity) this.#openTransactions.delete(queryable);
        };
        let commitAttempted = false;
        const settlement = {
            committed: false,
            rolledBack: false,
            logDroppedError (error) {
                try {
                    activity.ctx.log.error({
                        event: "middleware.activityEnded.error",
                        error
                    });
                } catch  {}
            }
        };
        let commitEnding;
        const self = this;
        return {
            [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"]]: settlement,
            async commit () {
                commitAttempted = true;
                stopAcceptingChildren();
                try {
                    await self.#inFlight.track(()=>driverTx.commit());
                } catch (error) {
                    endTransactionWork();
                    await activity.end({
                        by: "commit",
                        outcome: "failed"
                    });
                    throw error;
                }
                settlement.committed = true;
                commitEnding = activity.end({
                    by: "commit",
                    outcome: "succeeded"
                });
                try {
                    await commitEnding;
                } finally{
                    endTransactionWork();
                }
            },
            async rollback () {
                stopAcceptingChildren();
                if (settlement.committed) {
                    await commitEnding?.catch(()=>void 0);
                    return;
                }
                if (settlement.rolledBack) return;
                try {
                    await self.#inFlight.track(()=>driverTx.rollback());
                } catch (error) {
                    endTransactionWork();
                    await activity.end({
                        by: "rollback",
                        outcome: "failed",
                        commitAttempted
                    });
                    throw error;
                }
                settlement.rolledBack = true;
                try {
                    await activity.end({
                        by: "rollback",
                        outcome: "succeeded",
                        commitAttempted
                    });
                } finally{
                    endTransactionWork();
                }
            },
            [activitySource]: {
                startActivity: (clientActivity)=>self.startActivityOnRoute(self.queryableRoute(driverTx, "transaction", ()=>activity, {
                        transaction: void 0,
                        runtimeWork: false
                    }), clientActivity, void 0),
                planContentHash: (plan)=>self.planContentHashFor(plan, "transaction", activity)
            },
            query (plan, options) {
                return self.queryAgainstQueryable(plan, driverTx, {
                    ...options,
                    scope: "transaction"
                });
            },
            execute (plan, options) {
                return self.executeStatisticsAgainstQueryable(plan, driverTx, {
                    ...options,
                    scope: "transaction"
                });
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"]] (ps, params, options) {
                return self.runPreparedQueryAgainstQueryable((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(ps), params, driverTx, {
                    ...options,
                    scope: "transaction"
                });
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]] (ps, params, options) {
                return self.runPreparedExecuteAgainstQueryable((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(ps), params, driverTx, {
                    ...options,
                    scope: "transaction"
                });
            }
        };
    }
    telemetry() {
        return this._telemetry;
    }
    close() {
        this.closePromise ??= this.closeDriverAfterWork();
        return this.closePromise;
    }
    async closeDriverAfterWork() {
        await this.refuseAfterWork();
        if (this.ownsDriver) await this.driver.close();
    }
    async refuseAfterWork() {
        const warned = {
            done: false
        };
        if (this.closeRefusal === "when-idle") await this.waitForIdleTurn(warned);
        this.#refusing = true;
        this.warnWhenWaitingOnlyForUnendedWork(warned);
        while(this.#inFlight.active || this.#openTransactionWork.active){
            await this.#inFlight.drained();
            this.warnWhenWaitingOnlyForUnendedWork(warned);
            await this.#openTransactionWork.drained();
        }
    }
    async waitForIdleTurn(warned) {
        for(;;){
            const startedBefore = this.#inFlight.started;
            await new Promise((resolve)=>scheduleTimer(resolve, 0));
            if (!this.#inFlight.active && this.#inFlight.started === startedBefore) return;
            this.warnWhenWaitingOnlyForUnendedWork(warned);
            await this.#inFlight.drained();
        }
    }
    ensureCodecRegistryValidated() {
        if (!this.codecRegistryValidated) {
            validateCodecRegistryCompleteness(this.codecDescriptors, this.contract);
            this.codecRegistryValidated = true;
        }
    }
    async verifyMarker(queryable) {
        const readResult = await this.familyAdapter.markerReader.readMarker(queryable);
        const expectedStorageHash = this.contract.storage.storageHash;
        const expectedProfileHash = this.contract.profileHash ?? null;
        const expected = {
            storageHash: expectedStorageHash,
            profileHash: expectedProfileHash
        };
        if (readResult.kind !== "present") {
            this.sqlCtx.log.warn({
                code: "CONTRACT.MARKER_MISSING",
                scope: "marker-verification",
                expected,
                actual: null,
                message: "Contract marker not found in database"
            });
            return;
        }
        const marker = readResult.record;
        const storageHashMatch = marker.storageHash === expectedStorageHash;
        const profileHashMatch = expectedProfileHash === null || marker.profileHash === expectedProfileHash;
        if (!storageHashMatch || !profileHashMatch) this.sqlCtx.log.warn({
            code: "CONTRACT.MARKER_MISMATCH",
            scope: "marker-verification",
            expected,
            actual: {
                storageHash: marker.storageHash,
                profileHash: marker.profileHash ?? null
            },
            message: "Contract marker hash does not match runtime contract"
        });
    }
    recordTelemetry(plan, outcome, durationMs) {
        const contract = this.contract;
        this._telemetry = Object.freeze({
            lane: plan.meta.lane,
            target: contract.target,
            fingerprint: computeSqlFingerprint(plan.sql),
            outcome,
            ...durationMs !== void 0 ? {
                durationMs
            } : {}
        });
    }
};
function activityOutsideTransactionError(parent, openTransaction) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.ACTIVITY_OUTSIDE_TRANSACTION", `Work was sent through a '${parent.activity.kind}' activity onto a connection whose open transaction the activity is not part of. Start the activity on the transaction instead.`, {
        kind: parent.activity.kind,
        id: parent.activity.id,
        transactionId: openTransaction.activity.id
    });
}
function transactionAlreadyOpenError(parent, openTransaction) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.TRANSACTION_ALREADY_OPEN", `A transaction is already open on this connection; a '${parent.activity.kind}' activity cannot begin another until it commits or rolls back.`, {
        kind: parent.activity.kind,
        id: parent.activity.id,
        transactionId: openTransaction.activity.id
    });
}
function noWork() {}
function rowsBeneath(run, rows) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__AsyncIterableResult$3e$__["AsyncIterableResult"](new RowsBeneath(run, rows));
}
/** The rows of a statement started beneath `run`, checked against `run` on the first `next()`. It forwards to the statement's own iterator rather than adding an async generator, so each row costs no extra turn. */ var RowsBeneath = class {
    #run;
    #rows;
    #inner;
    #done = false;
    constructor(run, rows){
        this.#run = run;
        this.#rows = rows;
    }
    next() {
        if (this.#done) return Promise.resolve({
            done: true,
            value: void 0
        });
        if (this.#inner === void 0) try {
            this.#run.assertAcceptsChildren();
            this.#inner = this.#rows()[Symbol.asyncIterator]();
        } catch (error) {
            this.#done = true;
            return Promise.reject(error);
        }
        return this.#inner.next();
    }
    return() {
        const inner = this.#inner;
        this.#done = true;
        return inner?.return === void 0 ? Promise.resolve({
            done: true,
            value: void 0
        }) : inner.return();
    }
    throw(error) {
        const inner = this.#inner;
        if (inner?.throw === void 0) {
            this.#done = true;
            return Promise.reject(error);
        }
        return inner.throw(error);
    }
    [Symbol.asyncIterator]() {
        return this;
    }
    async [Symbol.asyncDispose]() {
        await this.return();
    }
};
function transactionClosedError() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.TRANSACTION_CLOSED", "Cannot use a transaction operation after the transaction has ended. Consume query results and await execute calls inside the transaction callback.", {});
}
/**
* Adds a client's members to the context `withTransaction` passes. The context is the prototype, not spread, so live accessors such as `invalidated` keep reading the transaction's state; spreading would copy their value once.
*/ function withTransactionMembers(txCtx, members) {
    return Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__castAs$3e$__["castAs"])(Object.create(txCtx)), members);
}
async function withTransaction(runtime, fn) {
    const connection = await runtime.connection();
    let transaction;
    try {
        transaction = await connection.transaction();
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"])(connection)) await connection.release().catch(()=>void 0);
        else await connection.destroy(error).catch(()=>void 0);
        throw error;
    }
    let invalidated = false;
    async function* guardedStream(open) {
        if (invalidated) throw transactionClosedError();
        for await (const row of open()){
            yield row;
            if (invalidated) throw transactionClosedError();
        }
    }
    function guardedQueryable(target) {
        return {
            query (plan, options) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__AsyncIterableResult$3e$__["AsyncIterableResult"](guardedStream(()=>target.query(plan, options)));
            },
            async execute (plan, options) {
                if (invalidated) throw transactionClosedError();
                return target.execute(plan, options);
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"]] (ps, params, options) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DiBFiGVw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__AsyncIterableResult$3e$__["AsyncIterableResult"](guardedStream(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(target, ps, params, options)));
            },
            async [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]] (ps, params, options) {
                if (invalidated) throw transactionClosedError();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"])(target, ps, params, options);
            }
        };
    }
    function guardedSource(target) {
        return {
            async startActivity (activity) {
                if (invalidated) throw transactionClosedError();
                return guardedHandle(await startActivityOn(target, activity));
            },
            planContentHash (plan) {
                return planContentHashOn(target, plan);
            }
        };
    }
    function guardedHandle(handle) {
        const source = guardedSource(handle);
        return {
            ...source,
            ...guardedQueryable(handle),
            [activitySource]: source,
            activity: handle.activity,
            get intercepted () {
                return handle.intercepted;
            },
            end: (end)=>handle.end(end)
        };
    }
    const txContext = {
        ...guardedQueryable(transaction),
        get invalidated () {
            return invalidated;
        },
        [activitySource]: guardedSource(transaction)
    };
    let connectionDisposed = false;
    const destroyConnection = async (reason)=>{
        if (connectionDisposed) return;
        connectionDisposed = true;
        await connection.destroy(reason).catch(()=>void 0);
    };
    try {
        let result;
        try {
            result = await fn(txContext);
        } catch (error) {
            try {
                await transaction.rollback();
            } catch (rollbackError) {
                const settlement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])(transaction);
                if (settlement?.rolledBack === true) {
                    settlement.logDroppedError(rollbackError);
                    throw error;
                }
                await destroyConnection(rollbackError);
                const wrapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.TRANSACTION_ROLLBACK_FAILED", "Transaction rollback failed after callback error", {
                    rollbackError
                });
                wrapped.cause = error;
                throw wrapped;
            }
            throw error;
        } finally{
            invalidated = true;
        }
        try {
            await transaction.commit();
        } catch (commitError) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])(transaction)?.committed === true) throw commitError;
            try {
                await transaction.rollback();
            } catch (rollbackError) {
                const settlement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$transaction$2d$state$2d$BfXhs7D7$2d$DhmbySW9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])(transaction);
                if (settlement?.rolledBack === true) settlement.logDroppedError(rollbackError);
                else await destroyConnection(commitError);
            }
            const wrapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.TRANSACTION_COMMIT_FAILED", "Transaction commit failed", {
                commitError
            });
            wrapped.cause = commitError;
            throw wrapped;
        }
        return result;
    } finally{
        if (!connectionDisposed) await connection.release();
    }
}
function createToSql(stack, contract) {
    let adapter;
    return (plan)=>{
        validateSqlPlan(plan, contract);
        adapter ??= stack.adapter.create(stack);
        const { sql, params } = lowerSqlPlan(adapter, contract, plan);
        return {
            sql,
            params
        };
    };
}
;
}),
];

//# sourceMappingURL=1676_%40prisma_orm-family-sql_dist_exports-WNaGWaJR-CVNygh-P_mjs_0g7cq5e2irgz8._.js.map