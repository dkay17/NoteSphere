module.exports = [
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/contract-builder-m9XW9MgR.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>check,
    "c",
    ()=>defineContract,
    "d",
    ()=>field,
    "g",
    ()=>unbound,
    "h",
    ()=>rel,
    "i",
    ()=>buildContractDefinition,
    "m",
    ()=>now,
    "o",
    ()=>composedExtensionPackRefs,
    "p",
    ()=>model,
    "r",
    ()=>buildBoundContract,
    "s",
    ()=>createComposedAuthoringHelpers,
    "t",
    ()=>autoincrement,
    "u",
    ()=>extensionModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/sql-data-type-LVBldu1a-Bq203xWX.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$entity$2d$handle$2d$lowering$2d$hook$2d$3KYrW$2d$BT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/entity-handle-lowering-hook-3KYrW-BT.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$generated$2d$id$2d$column$2d$aliases$2d$DPUii1fN$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/generated-id-column-aliases-DPUii1fN.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/sql-expression-CKgKznXS.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$CISwoRED$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-CISwoRED.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$qcQteqs2$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/validators-qcQteqs2.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/derived-checks-zjkmqsa_-D7VKKK_q.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__isStructuredError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-route] (ecmascript) <export i as isStructuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__assembleDataTypeSupport$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export a as assembleDataTypeSupport>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__assertNoCrossRegistryCollisions$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export s as assertNoCrossRegistryCollisions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__assertTypeAliasesValid$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export l as assertTypeAliasesValid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__assertTypeChoicesValid$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export u as assertTypeChoicesValid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__describeAdmittedForms$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/authoring-DnYn5EZT.mjs [app-route] (ecmascript) <export s as describeAdmittedForms>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__S__as__instantiateAuthoringTypeAlias$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export S as instantiateAuthoringTypeAlias>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__instantiateAuthoringTypeCall$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export C as instantiateAuthoringTypeCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__instantiateAuthoringTypeConstructor$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export w as instantiateAuthoringTypeConstructor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__D__as__isAuthoringEntityTypeDescriptor$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export D as isAuthoringEntityTypeDescriptor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__A__as__isAuthoringTypeAliasDescriptor$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export A as isAuthoringTypeAliasDescriptor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__isAuthoringTypeChoiceDescriptor$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export j as isAuthoringTypeChoiceDescriptor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__N__as__isAuthoringTypeConstructorDescriptor$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export N as isAuthoringTypeConstructorDescriptor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__P__as__isAuthoringTypeDescriptor$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export P as isAuthoringTypeDescriptor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__readWrittenValueAs$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/authoring-DnYn5EZT.mjs [app-route] (ecmascript) <export C as readWrittenValueAs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__B__as__resolveAuthoringTypeChoice$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export B as resolveAuthoringTypeChoice>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__J__as__typeChoiceArgumentsFromObject$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export J as typeChoiceArgumentsFromObject>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__X__as__typeConstructorLookup$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export X as typeConstructorLookup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__Q__as__validateAuthoringHelperArguments$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export Q as validateAuthoringHelperArguments>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$$__as__validateAuthoringTypeChoiceParams$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export $ as validateAuthoringTypeChoiceParams>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__et__as__validateAuthoringTypeParams$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export et as validateAuthoringTypeParams>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$types$2d$Boh5NGDz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__isColumnDefault$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/types-Boh5NGDz.mjs [app-route] (ecmascript) <export f as isColumnDefault>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__dataTypeId$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export u as dataTypeId>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$descriptor$2d$CPSGZunM$2d$DxrbRHX1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__numeralText$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/codec-descriptor-CPSGZunM-DxrbRHX1.mjs [app-route] (ecmascript) <export a as numeralText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export t as InternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__isInternalError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export r as isInternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$generator$2d$functions$2d$CXbQfvYu$2d$BIFU1Ryx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__assembleGeneratorFunctions$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/generator-functions-CXbQfvYu-BIFU1Ryx.mjs [app-route] (ecmascript) <export r as assembleGeneratorFunctions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$components$2d$BaV9iCkq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__createGeneratorHelpers$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/components-BaV9iCkq.mjs [app-route] (ecmascript) <export t as createGeneratorHelpers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$authoring$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/contract-authoring.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$ast$2d$CyvE6CR$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__UNBOUND_PSL_NAMESPACE_NAME$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/psl-ast-CyvE6CR-.mjs [app-route] (ecmascript) <export n as UNBOUND_PSL_NAMESPACE_NAME>");
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
//#region ../../../2-sql-family/2-authoring/contract-ts/dist/contract-builder.mjs
/** The written value a TypeScript argument stands for: a number, string or boolean as written in PSL, and a `sql` value as a `sql` literal of its text. */ function writtenValueOf(value) {
    if (typeof value === "number") return {
        kind: "number",
        text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$descriptor$2d$CPSGZunM$2d$DxrbRHX1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__numeralText$3e$__["numeralText"])(value)
    };
    if (typeof value === "string") return {
        kind: "string",
        text: value
    };
    if (typeof value === "boolean") return {
        kind: "boolean",
        value
    };
    const expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(value);
    return expression === void 0 ? void 0 : {
        kind: "tag",
        tag: "sql",
        text: expression.text
    };
}
function readValueArgument(label, value, dataType, dataTypes) {
    const refuse = (message)=>{
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.ARGUMENT_INVALID", `${label}: ${message}`, {
            meta: {
                dataType
            }
        });
    };
    const written = writtenValueOf(value);
    if (written === void 0) return refuse(`Expected ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__describeAdmittedForms$3e$__["describeAdmittedForms"])(dataTypes, dataType)}`);
    const read = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__readWrittenValueAs$3e$__["readWrittenValueAs"])(dataTypes, dataType, written);
    return read.ok ? read.value.value : refuse(read.failure.message);
}
/**
* The arguments of a type constructor or type choice call as the constructor receives them: each `value` argument read as a value of its data type, through the same read and cast as a PSL argument, so both give the same parameters. ADR 129, ADR 254.
*/ function readValueArguments(helperPath, descriptors, args, dataTypes) {
    return args.map((value, index)=>{
        const descriptor = descriptors?.[index];
        if (descriptor?.kind !== "value" || value === void 0) return value;
        return readValueArgument(descriptor.name === void 0 ? `Argument #${index + 1} of ${helperPath}` : `Argument "${descriptor.name}" of ${helperPath}`, value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__dataTypeId$3e$__["dataTypeId"])(descriptor.dataType), dataTypes);
    });
}
function createTypeHelpersFromNamespace(namespace, lookups, path = []) {
    const helpers = {};
    for (const [key, value] of Object.entries(namespace)){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$authoring$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertSafeAuthoringHelperKey"])(key, path);
        const currentPath = [
            ...path,
            key
        ];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__N__as__isAuthoringTypeConstructorDescriptor$3e$__["isAuthoringTypeConstructorDescriptor"])(value)) {
            const helperPath = currentPath.join(".");
            helpers[key] = (...written)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__Q__as__validateAuthoringHelperArguments$3e$__["validateAuthoringHelperArguments"])(helperPath, value.args, written);
                const args = readValueArguments(helperPath, value.args, written, lookups.dataTypes);
                const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__instantiateAuthoringTypeConstructor$3e$__["instantiateAuthoringTypeConstructor"])(value, args);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__et__as__validateAuthoringTypeParams$3e$__["validateAuthoringTypeParams"])(helperPath, value.output, output.typeParams, lookups.codecLookup.descriptorFor(output.codecId)?.paramsSchema);
                return {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$CISwoRED$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["t"],
                    codecId: output.codecId,
                    typeParams: output.typeParams ?? {}
                };
            };
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__isAuthoringTypeChoiceDescriptor$3e$__["isAuthoringTypeChoiceDescriptor"])(value)) {
            const helperPath = currentPath.join(".");
            const constructorNamed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__X__as__typeConstructorLookup$3e$__["typeConstructorLookup"])(namespace);
            helpers[key] = (...written)=>{
                const args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__J__as__typeChoiceArgumentsFromObject$3e$__["typeChoiceArgumentsFromObject"])(helperPath, value, written);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__Q__as__validateAuthoringHelperArguments$3e$__["validateAuthoringHelperArguments"])(helperPath, value.args, args);
                const chosen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__B__as__resolveAuthoringTypeChoice$3e$__["resolveAuthoringTypeChoice"])({
                    helperPath,
                    descriptor: value,
                    args: readValueArguments(helperPath, value.args, args, lookups.dataTypes),
                    constructorNamed
                });
                const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__instantiateAuthoringTypeConstructor$3e$__["instantiateAuthoringTypeConstructor"])(chosen.descriptor, chosen.args);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$$__as__validateAuthoringTypeChoiceParams$3e$__["validateAuthoringTypeChoiceParams"])(helperPath, value, chosen.descriptor, output.typeParams, lookups.codecLookup.descriptorFor(output.codecId)?.paramsSchema);
                return {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$CISwoRED$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["t"],
                    codecId: output.codecId,
                    typeParams: output.typeParams ?? {}
                };
            };
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__A__as__isAuthoringTypeAliasDescriptor$3e$__["isAuthoringTypeAliasDescriptor"])(value)) {
            const helperPath = currentPath.join(".");
            helpers[key] = (...args)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__Q__as__validateAuthoringHelperArguments$3e$__["validateAuthoringHelperArguments"])(helperPath, [], args);
                const { type, onCreate, onUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__S__as__instantiateAuthoringTypeAlias$3e$__["instantiateAuthoringTypeAlias"])(value);
                const generatorCalls = {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("onCreate", onCreate),
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("onUpdate", onUpdate)
                };
                return {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$CISwoRED$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["t"],
                    codecId: type.codecId,
                    typeParams: type.typeParams ?? {},
                    ...Object.keys(generatorCalls).length === 0 ? {} : {
                        generatorCalls
                    }
                };
            };
            continue;
        }
        helpers[key] = createTypeHelpersFromNamespace(value, lookups, currentPath);
    }
    return helpers;
}
function withGeneratorCall(state, phase, call) {
    if (state.generatorCalls?.[phase] !== void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.DEFAULT_INVALID", `.${phase}() is called on a field that already generates a value ${phase === "onCreate" ? "on create" : "on update"}. Set each phase once, and do not combine .${phase}() with a type alias or alias constant that sets it.`, {
        meta: {
            reason: "generator-phase-set-twice",
            phase
        }
    });
    return {
        ...state,
        generatorCalls: {
            ...state.generatorCalls,
            [phase]: call
        }
    };
}
function withColumnDefault(state, columnDefault) {
    if (state.default !== void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.DEFAULT_INVALID", ".default() is called on a field that already has a default. Set the default once, and do not combine .default() with an alias constant that sets one.", {
        meta: {
            reason: "default-set-twice"
        }
    });
    return {
        ...state,
        default: columnDefault
    };
}
function toColumnDefault(value) {
    const expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(value);
    if (expression !== void 0) return sqlExpressionDefault(expression);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$types$2d$Boh5NGDz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__isColumnDefault$3e$__["isColumnDefault"])(value)) return value;
    return {
        kind: "literal",
        value
    };
}
function sqlExpressionDefault(value) {
    const reserved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$qcQteqs2$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])(value.text);
    if (reserved !== void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.DEFAULT_INVALID", `Write .default(${reserved}()) instead of sql\`${reserved}()\`; ${reserved}() is a Prisma default function, not raw SQL.`, {
        meta: {
            reason: "reserved-function",
            expression: value.text
        }
    });
    const unsafe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$qcQteqs2$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(value.text);
    if (unsafe !== void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.DEFAULT_INVALID", unsafe, {
        meta: {
            reason: "unsafe-sql",
            expression: value.text
        }
    });
    return {
        kind: "function",
        expression: value.text
    };
}
var ScalarFieldBuilder = class ScalarFieldBuilder {
    state;
    constructor(state){
        this.state = state;
    }
    /**
	* Returns the physical column name when `.column(name)` was called, or
	* `undefined` when the field uses the default (logical field name) mapping.
	* Used by cross-space FK lowering to stamp the physical column name onto
	* `TargetFieldRef.columnName` so FK target columns are resolved correctly.
	*/ get physicalColumnName() {
        return this.state.columnName;
    }
    optional() {
        return new ScalarFieldBuilder((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])({
            ...this.state,
            nullable: true
        }));
    }
    column(name) {
        return new ScalarFieldBuilder((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])({
            ...this.state,
            columnName: name
        }));
    }
    many(options) {
        return new ScalarFieldBuilder((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])({
            ...this.state,
            many: {
                elementNullable: options?.elementsNullable === true
            }
        }));
    }
    default(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(new ScalarFieldBuilder(withColumnDefault(this.state, toColumnDefault(value))));
    }
    /** Generates the field's value in the client when a row is created without one, with a call from `gen`, such as `gen.uuid()`. */ onCreate(call) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(new ScalarFieldBuilder(withGeneratorCall(this.state, "onCreate", call)));
    }
    /** Generates the field's value in the client every time a row is updated, with a call from `gen`, such as `gen.now()`. */ onUpdate(call) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(new ScalarFieldBuilder(withGeneratorCall(this.state, "onUpdate", call)));
    }
    /**
	* @deprecated Write `.default(now())` or `.default(autoincrement())`, or `` .default(sql`...`) `` for any other SQL. Removed in 8.0.0.
	*/ defaultSql(expression) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(new ScalarFieldBuilder(withColumnDefault(this.state, {
            kind: "function",
            expression
        })));
    }
    id(options) {
        return new ScalarFieldBuilder((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])({
            ...this.state,
            id: options?.name ? {
                name: options.name
            } : {}
        }));
    }
    unique(options) {
        return new ScalarFieldBuilder((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])({
            ...this.state,
            unique: options?.name ? {
                name: options.name
            } : {}
        }));
    }
    sql(spec) {
        const idSpec = "id" in spec ? spec.id : void 0;
        const uniqueSpec = "unique" in spec ? spec.unique : void 0;
        if (idSpec && !this.state.id) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.ARGUMENT_INVALID", "field.sql({ id }) requires an existing inline .id(...) declaration.");
        if (uniqueSpec && !this.state.unique) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.ARGUMENT_INVALID", "field.sql({ unique }) requires an existing inline .unique(...) declaration.");
        return new ScalarFieldBuilder((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])({
            ...this.state,
            ...spec.column ? {
                columnName: spec.column
            } : {},
            ...idSpec ? {
                id: {
                    name: idSpec.name
                }
            } : {},
            ...uniqueSpec ? {
                unique: {
                    name: uniqueSpec.name
                }
            } : {}
        }));
    }
    build() {
        return this.state;
    }
};
var EnumScalarFieldBuilder = class EnumScalarFieldBuilder extends ScalarFieldBuilder {
    #handle;
    constructor(state, handle){
        super(state);
        this.#handle = handle;
    }
    default(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(new EnumScalarFieldBuilder(withColumnDefault(this.build(), {
            kind: "literal",
            value
        }), this.#handle));
    }
    defaultSql(_expression) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.DEFAULT_INVALID", "defaultSql is not available on an enum field; use .default(members.X) instead", {
            meta: {
                reason: "defaultSql-on-enum-field"
            }
        });
    }
};
function isTypeAliasColumnType(descriptor) {
    return "generatorCalls" in descriptor;
}
const columnField = (descriptor)=>{
    if (!isTypeAliasColumnType(descriptor)) return new ScalarFieldBuilder({
        kind: "scalar",
        descriptor,
        nullable: false,
        many: false
    });
    const { generatorCalls, ...columnType } = descriptor;
    return new ScalarFieldBuilder({
        kind: "scalar",
        descriptor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(columnType),
        nullable: false,
        many: false,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("generatorCalls", generatorCalls)
    });
};
const namedTypeField = (handle)=>new EnumScalarFieldBuilder((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])({
        kind: "scalar",
        enumHandle: handle,
        nullable: false,
        many: false
    }), handle);
var RelationBuilder = class RelationBuilder {
    state;
    constructor(state){
        this.state = state;
    }
    sql(spec) {
        if (this.state.kind !== "belongsTo") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.RELATION_INVALID", "relation.sql(...) is only supported for belongsTo relations.", {
            meta: {
                relationKind: this.state.kind
            }
        });
        return new RelationBuilder({
            ...this.state,
            sql: spec
        });
    }
    build() {
        return this.state;
    }
};
function normalizeFieldRefInput(input) {
    return (Array.isArray(input) ? input : [
        input
    ]).map((ref)=>ref.fieldName);
}
function normalizeTargetFieldRefInput(input) {
    const refs = Array.isArray(input) ? input : [
        input
    ];
    const [first] = refs;
    if (!first) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.FOREIGN_KEY_INVALID", "Expected at least one target ref", {
        meta: {
            reason: "empty-target-refs"
        }
    });
    if (refs.some((ref)=>ref.modelName !== first.modelName)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.FOREIGN_KEY_INVALID", "All target refs in a foreign key must point to the same model", {
        meta: {
            mismatch: "modelName",
            models: refs.map((ref)=>ref.modelName)
        }
    });
    if (refs.some((ref)=>ref.spaceId !== first.spaceId)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.FOREIGN_KEY_INVALID", `All target refs in a compound foreign key must share the same spaceId (found mismatch: "${first.spaceId ?? "<local>"}" vs "${refs.find((r)=>r.spaceId !== first.spaceId)?.spaceId ?? "<local>"}")`, {
        meta: {
            mismatch: "spaceId",
            first: first.spaceId,
            second: refs.find((r)=>r.spaceId !== first.spaceId)?.spaceId
        }
    });
    if (refs.some((ref)=>ref.namespaceId !== first.namespaceId)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.FOREIGN_KEY_INVALID", "All target refs in a compound foreign key must share the same namespaceId (found mismatch)", {
        meta: {
            mismatch: "namespaceId"
        }
    });
    if (refs.some((ref)=>ref.tableName !== first.tableName)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.FOREIGN_KEY_INVALID", "All target refs in a compound foreign key must share the same tableName (found mismatch)", {
        meta: {
            mismatch: "tableName"
        }
    });
    return {
        modelName: first.modelName,
        fieldNames: refs.map((ref)=>ref.columnName ?? ref.fieldName),
        source: refs.some((ref)=>ref.source === "string") ? "string" : "token",
        spaceId: first.spaceId,
        namespaceId: first.namespaceId,
        tableName: first.tableName
    };
}
function createConstraintsDsl() {
    function ref(modelName, fieldName) {
        return {
            kind: "targetFieldRef",
            source: "string",
            modelName,
            fieldName
        };
    }
    function id(fieldOrFields, options) {
        return {
            kind: "id",
            fields: normalizeFieldRefInput(fieldOrFields),
            ...options?.name ? {
                name: options.name
            } : {}
        };
    }
    function unique(fieldOrFields, options) {
        return {
            kind: "unique",
            fields: normalizeFieldRefInput(fieldOrFields),
            ...options?.name ? {
                name: options.name
            } : {}
        };
    }
    function index(fieldsOrOptions, options) {
        const isExpressionForm = !Array.isArray(fieldsOrOptions) && typeof fieldsOrOptions === "object" && "expression" in fieldsOrOptions;
        const opts = isExpressionForm ? fieldsOrOptions : options;
        const carried = {
            kind: "index",
            ...opts?.name !== void 0 ? {
                name: opts.name
            } : {},
            ...opts?.map !== void 0 ? {
                map: opts.map
            } : {},
            ...opts?.where !== void 0 ? {
                where: opts.where
            } : {},
            ...opts?.unique !== void 0 ? {
                unique: opts.unique
            } : {},
            ...opts?.type !== void 0 ? {
                type: opts.type
            } : {},
            ...opts?.options !== void 0 ? {
                options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(opts.options)
            } : {}
        };
        return isExpressionForm ? {
            ...carried,
            expression: fieldsOrOptions.expression
        } : {
            ...carried,
            fields: normalizeFieldRefInput(fieldsOrOptions)
        };
    }
    function foreignKey(fieldOrFields, target, options) {
        const normalizedTarget = normalizeTargetFieldRefInput(target);
        return {
            kind: "fk",
            fields: normalizeFieldRefInput(fieldOrFields),
            targetModel: normalizedTarget.modelName,
            targetFields: normalizedTarget.fieldNames,
            targetSource: normalizedTarget.source,
            ...normalizedTarget.spaceId !== void 0 ? {
                targetSpaceId: normalizedTarget.spaceId
            } : {},
            ...normalizedTarget.namespaceId !== void 0 ? {
                targetNamespaceId: normalizedTarget.namespaceId
            } : {},
            ...normalizedTarget.tableName !== void 0 ? {
                targetTableName: normalizedTarget.tableName
            } : {},
            ...options?.name ? {
                name: options.name
            } : {},
            ...options?.onDelete ? {
                onDelete: options.onDelete
            } : {},
            ...options?.onUpdate ? {
                onUpdate: options.onUpdate
            } : {},
            ...options?.constraint !== void 0 ? {
                constraint: options.constraint
            } : {},
            ...options?.index !== void 0 ? {
                index: options.index
            } : {}
        };
    }
    return {
        ref,
        id,
        unique,
        index,
        foreignKey
    };
}
/**
* Declares an authored CHECK constraint for a model's `.sql({ checks: [...] })`.
* Unlike `index()`, `check()` names no column tuple — the predicate is opaque
* SQL — so it needs no field-ref context and is a plain top-level function
* rather than a method on `constraints`.
*/ function check(input) {
    return {
        kind: "check",
        expression: input.expression,
        ...input.name !== void 0 ? {
            name: input.name
        } : {},
        ...input.map !== void 0 ? {
            map: input.map
        } : {}
    };
}
function createFieldRefs(fields) {
    const refs = {};
    for (const fieldName of Object.keys(fields))refs[fieldName] = {
        kind: "columnRef",
        fieldName
    };
    return refs;
}
function createModelTokenRefs(modelName, fields, crossSpaceCoordinate) {
    const refs = {};
    for (const [fieldName, fieldBuilder] of Object.entries(fields)){
        const physicalColumn = crossSpaceCoordinate !== void 0 ? fieldBuilder.physicalColumnName : void 0;
        refs[fieldName] = {
            kind: "targetFieldRef",
            source: "token",
            modelName,
            fieldName,
            ...crossSpaceCoordinate !== void 0 ? {
                spaceId: crossSpaceCoordinate.spaceId,
                ...crossSpaceCoordinate.namespaceId !== void 0 ? {
                    namespaceId: crossSpaceCoordinate.namespaceId
                } : {},
                ...crossSpaceCoordinate.tableName !== void 0 ? {
                    tableName: crossSpaceCoordinate.tableName
                } : {},
                ...physicalColumn !== void 0 ? {
                    columnName: physicalColumn
                } : {}
            } : {}
        };
    }
    return refs;
}
function buildStageSpec(stageInput, context) {
    if (typeof stageInput === "function") return stageInput(context);
    return stageInput;
}
function createAttributeConstraintsDsl() {
    const constraints = createConstraintsDsl();
    return {
        id: constraints.id,
        unique: constraints.unique
    };
}
function createSqlConstraintsDsl() {
    const constraints = createConstraintsDsl();
    return {
        index: constraints.index,
        foreignKey: constraints.foreignKey,
        ref: constraints.ref
    };
}
function createColumnRefs(fields) {
    return createFieldRefs(fields);
}
function findDuplicateRelationName(existingRelations, nextRelations) {
    return Object.keys(nextRelations).find((relationName)=>Object.hasOwn(existingRelations, relationName));
}
var ContractModelBuilder = class ContractModelBuilder {
    stageOne;
    attributesFactory;
    sqlFactory;
    spaceId;
    tableName;
    refs;
    constructor(stageOne, attributesFactory, sqlFactory, spaceId, tableName){
        this.stageOne = stageOne;
        this.attributesFactory = attributesFactory;
        this.sqlFactory = sqlFactory;
        this.spaceId = spaceId;
        this.tableName = tableName;
        const crossSpaceCoordinate = spaceId !== void 0 ? {
            spaceId,
            ...stageOne.namespace !== void 0 ? {
                namespaceId: stageOne.namespace
            } : {},
            ...tableName !== void 0 ? {
                tableName
            } : {}
        } : void 0;
        this.refs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(stageOne.modelName ? createModelTokenRefs(stageOne.modelName, stageOne.fields, crossSpaceCoordinate) : void 0);
    }
    ref(fieldName) {
        const modelName = this.stageOne.modelName;
        if (!modelName) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.MODEL_TOKEN_INVALID", "Model tokens require model(\"ModelName\", ...) before calling .ref(...)");
        return {
            kind: "targetFieldRef",
            source: "token",
            modelName,
            fieldName
        };
    }
    relations(relations) {
        const duplicateRelationName = findDuplicateRelationName(this.stageOne.relations, relations);
        if (duplicateRelationName) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.NAME_DUPLICATE", `Model "${this.stageOne.modelName ?? "<anonymous>"}" already defines relation "${duplicateRelationName}".`, {
            meta: {
                kind: "relation",
                name: duplicateRelationName,
                modelName: this.stageOne.modelName
            }
        });
        return new ContractModelBuilder({
            ...this.stageOne,
            relations: {
                ...this.stageOne.relations,
                ...relations
            }
        }, this.attributesFactory, this.sqlFactory, this.spaceId, this.tableName);
    }
    attributes(specOrFactory) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(new ContractModelBuilder(this.stageOne, specOrFactory, this.sqlFactory, this.spaceId, this.tableName));
    }
    sql(specOrFactory) {
        const nextTableName = typeof specOrFactory !== "function" ? specOrFactory.table : this.tableName;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(new ContractModelBuilder(this.stageOne, this.attributesFactory, specOrFactory, this.spaceId, nextTableName));
    }
    buildAttributesSpec() {
        if (!this.attributesFactory) return;
        return buildStageSpec(this.attributesFactory, {
            fields: createFieldRefs(this.stageOne.fields),
            constraints: createAttributeConstraintsDsl()
        });
    }
    buildSqlSpec() {
        if (!this.sqlFactory) return;
        return buildStageSpec(this.sqlFactory, {
            cols: createColumnRefs(this.stageOne.fields),
            constraints: createSqlConstraintsDsl()
        });
    }
};
function isLazyRelationModelName(value) {
    return typeof value === "object" && value !== null && "kind" in value && value.kind === "lazyRelationModelName" && "resolve" in value && typeof value.resolve === "function";
}
function resolveNamedModelTokenName(token) {
    const modelName = token.stageOne.modelName;
    if (!modelName) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.MODEL_TOKEN_INVALID", "Relation targets require named model tokens. Use model(\"ModelName\", ...) before passing a token to rel.*(...).");
    return modelName;
}
function normalizeRelationModelSource(target) {
    if (typeof target === "string") return {
        kind: "relationModelName",
        source: "string",
        modelName: target
    };
    if (typeof target === "function") return {
        kind: "lazyRelationModelName",
        source: "lazyToken",
        resolve: ()=>resolveNamedModelTokenName(target())
    };
    return {
        kind: "relationModelName",
        source: "token",
        modelName: resolveNamedModelTokenName(target)
    };
}
function model(modelNameOrInput, maybeInput) {
    const input = typeof modelNameOrInput === "string" ? maybeInput : modelNameOrInput;
    if (!input) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.ARGUMENT_INVALID", "model(\"ModelName\", ...) requires a model definition.");
    return new ContractModelBuilder({
        ...typeof modelNameOrInput === "string" ? {
            modelName: modelNameOrInput
        } : {},
        ...input.namespace !== void 0 ? {
            namespace: input.namespace
        } : {},
        fields: input.fields,
        relations: input.relations ?? {}
    });
}
/**
* Factory for building a standalone branded extension model handle.
*
* Use this instead of `new ContractModelBuilder(…)` when constructing handles
* for models that live in a foreign contract space (e.g. a Supabase extension
* model referenced by a user's contract). The `spaceId` brands the returned
* handle so `refs.<field>.spaceId` carries the foreign space identifier.
*
* @param name - The domain model name as declared in the foreign contract
*   (e.g. `'AuthUser'`, not a bare table alias like `'User'`).
* @param input.namespace - The namespace within the foreign space (e.g. `'auth'`).
* @param input.fields - Field definitions (use `field.column(…)`).
* @param input.table - The physical table name in the foreign schema.
* @param spaceId - The extension space identifier (e.g. `'supabase'`).
*/ function extensionModel(name, input, spaceId) {
    return new ContractModelBuilder({
        modelName: name,
        namespace: input.namespace,
        fields: input.fields,
        relations: {}
    }, void 0, void 0, spaceId, input.table);
}
function isCrossSpaceHandle(value) {
    if (typeof value !== "object" || value === null) return false;
    const rec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(value);
    return typeof rec["spaceId"] === "string" && typeof rec["stageOne"] === "object" && rec["stageOne"] !== null;
}
function belongsTo(toModel, options) {
    const resolvedModel = typeof toModel === "function" ? toModel() : toModel;
    const crossSpaceCoordinate = isCrossSpaceHandle(resolvedModel) ? {
        spaceId: resolvedModel.spaceId,
        ...resolvedModel.tableName !== void 0 ? {
            tableName: resolvedModel.tableName
        } : {},
        ...resolvedModel.stageOne.namespace !== void 0 ? {
            namespaceId: resolvedModel.stageOne.namespace
        } : {}
    } : void 0;
    return new RelationBuilder({
        kind: "belongsTo",
        toModel: normalizeRelationModelSource(toModel),
        from: options.from,
        to: options.to,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("optional", options.optional),
        ...crossSpaceCoordinate !== void 0 ? crossSpaceCoordinate : {}
    });
}
function hasMany(toModel, options) {
    return new RelationBuilder({
        kind: "hasMany",
        toModel: normalizeRelationModelSource(toModel),
        by: options.by
    });
}
function hasOne(toModel, options) {
    return new RelationBuilder({
        kind: "hasOne",
        toModel: normalizeRelationModelSource(toModel),
        by: options.by
    });
}
function manyToMany(toModel, options) {
    return new RelationBuilder({
        kind: "manyToMany",
        toModel: normalizeRelationModelSource(toModel),
        through: normalizeRelationModelSource(options.through),
        from: options.from,
        to: options.to
    });
}
const rel = {
    belongsTo,
    hasMany,
    hasOne,
    manyToMany
};
const field = {
    column: columnField,
    namedType: namedTypeField
};
function isContractInput(value) {
    if (typeof value !== "object" || value === null || !("target" in value) || !("family" in value)) return false;
    const target = value.target;
    const family = value.family;
    return typeof target === "object" && target !== null && "kind" in target && target.kind === "target" && typeof family === "object" && family !== null && "kind" in family && family.kind === "family";
}
function isRelationFieldArray(value) {
    return Array.isArray(value);
}
function normalizeRelationFieldNames(value) {
    if (isRelationFieldArray(value)) return value;
    return [
        value
    ];
}
function resolveRelationModelName(value) {
    if (isLazyRelationModelName(value)) return value.resolve();
    return value.modelName;
}
function applyNaming(name, strategy) {
    if (!strategy || strategy === "identity") return name;
    let result = "";
    for(let index = 0; index < name.length; index += 1){
        const char = name[index];
        if (!char) continue;
        const lower = char.toLowerCase();
        if (char !== lower && index > 0) {
            const prev = name[index - 1];
            const next = name[index + 1];
            const prevIsLower = !!prev && prev === prev.toLowerCase();
            const nextIsLower = !!next && next === next.toLowerCase();
            if (prevIsLower || nextIsLower) result += "_";
        }
        result += lower;
    }
    return result;
}
const GUIDE = "The upgrade guide \"Field presets are removed\" lists every rewrite.";
/** The explicit type constructor at the dotted `path`. */ const explicit = (path)=>({
        path: path.split("."),
        options: void 0
    });
/** The type choice at `path`, called with `options`. */ const choice = (path, options = {})=>({
        path: path.split("."),
        options
    });
/** The call to `type` as TypeScript writes it, with `precision` when given: one object of arguments for a type choice, and a positional argument for an explicit type. */ function typeCall({ path, options }, precision) {
    const name = `type.${path.join(".")}`;
    if (options === void 0) return `${name}(${precision ?? ""})`;
    const members = [
        ...Object.entries(options).map(([option, value])=>`${option}: '${value}'`),
        ...precision === void 0 ? [] : [
            `precision: ${precision}`
        ]
    ];
    return members.length === 0 ? `${name}()` : `${name}({ ${members.join(", ")} })`;
}
/** The row of a preset whose rewrite is the column of `type`, then `chain`. */ function writtenAs(type, codecId, chain = "") {
    return [
        {
            type,
            codecId,
            rewrite: `field.column(${typeCall(type)})${chain}`
        }
    ];
}
/** The `type.` prefix of a namespace, such as `sql.` for `['sql']`. */ const prefixOf = (namespace)=>namespace.map((name)=>`${name}.`).join("");
/** The rows of a preset whose rewrite `write` makes from each namespace's `type.` prefix, each named where that namespace has the generated id column alias `alias`. */ function idAlias(alias, write) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$generated$2d$id$2d$column$2d$aliases$2d$DPUii1fN$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"].map((namespace)=>({
            type: {
                path: [
                    ...namespace,
                    alias
                ],
                options: void 0
            },
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$generated$2d$id$2d$column$2d$aliases$2d$DPUii1fN$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"][alias].output.type.codecId,
            rewrite: write(prefixOf(namespace))
        }));
}
const column$1 = (prefix, type)=>`field.column(type.${prefix}${type})`;
const id = (columnText, generator)=>`${columnText}.id().onCreate(gen.${generator})`;
const aliasColumn = (alias)=>idAlias(alias, (prefix)=>column$1(prefix, `${alias}()`));
const aliasId = (alias, generator)=>idAlias(alias, (prefix)=>id(column$1(prefix, `${alias}()`), generator));
const withPhases = (type, codecId, precision)=>[
        {
            type,
            codecId,
            rewrite: `field.column(${typeCall(type, precision ? "p" : void 0)}), with .onCreate(gen.now()) and .onUpdate(gen.now()) for the phases the preset set${precision ? `, and without ${type.options === void 0 ? "p" : "precision: p"} when it set no precision` : ""}`
        }
    ];
const SQLITE_DATETIME = "sqlite/datetime@1";
const CREATED = ".onCreate(gen.now())";
const UPDATED = ".onCreate(gen.now()).onUpdate(gen.now())";
const TEMPORAL_DATE_TIME = choice("DateTime", {
    as: "temporal"
});
const STRING_DATE_TIME = choice("DateTime", {
    as: "string"
});
/** Each removed SQL preset and its rewrites. A date and time preset is written with the convenience call that gives the explicit type it stored, where one does (ADR 279). */ const PRESETS = {
    uuidString: aliasColumn("UuidString"),
    ulid: aliasColumn("Ulid"),
    nanoid: idAlias("Nanoid", (prefix)=>`${column$1(prefix, "Nanoid()")}, or ${column$1(prefix, "Char(n)")} for nanoid({ size: n })`),
    cuid2: aliasColumn("Cuid2"),
    ksuid: aliasColumn("Ksuid"),
    text: writtenAs(explicit("String"), "pg/text@1"),
    int: writtenAs(explicit("Int"), "pg/int4@1"),
    bigint: writtenAs(explicit("BigInt"), "pg/int8@1"),
    float: writtenAs(explicit("Float"), "pg/float8@1"),
    decimal: writtenAs(explicit("Decimal"), "pg/numeric@1"),
    boolean: writtenAs(explicit("Boolean"), "pg/bool@1"),
    json: writtenAs(explicit("Jsonb"), "pg/jsonb@1"),
    bytes: writtenAs(explicit("Bytes"), "pg/bytea@1"),
    dateTime: writtenAs(TEMPORAL_DATE_TIME, "pg/timestamptz-temporal@1"),
    uuidNative: writtenAs(explicit("Uuid"), "pg/uuid@1"),
    generated: idAlias("UuidString", (prefix)=>`${column$1(prefix, "Char(n)")}.onCreate(gen.fn()), such as ${column$1(prefix, "UuidString()")}.onCreate(gen.uuid()) for field.generated(uuidv4())`),
    "id.uuidv4String": aliasId("UuidString", "uuid()"),
    "id.uuidv7String": aliasId("UuidString", "uuid(7)"),
    "id.ulid": aliasId("Ulid", "ulid()"),
    "id.nanoid": idAlias("Nanoid", (prefix)=>`${id(column$1(prefix, "Nanoid()"), "nanoid()")}, or ${id(column$1(prefix, "Char(n)"), "nanoid(n)")} for id.nanoid({ size: n })`),
    "id.cuid2": aliasId("Cuid2", "cuid(2)"),
    "id.ksuid": aliasId("Ksuid", "ksuid()"),
    "id.uuidv4Native": writtenAs(explicit("Uuid"), "pg/uuid@1", ".id().onCreate(gen.uuid())"),
    "id.uuidv7Native": writtenAs(explicit("Uuid"), "pg/uuid@1", ".id().onCreate(gen.uuid(7))"),
    "temporal.createdAt": [
        ...writtenAs(TEMPORAL_DATE_TIME, "pg/timestamptz-temporal@1", CREATED),
        ...writtenAs(explicit("temporal.CreatedAt"), SQLITE_DATETIME)
    ],
    "temporal.updatedAt": [
        ...writtenAs(TEMPORAL_DATE_TIME, "pg/timestamptz-temporal@1", UPDATED),
        ...writtenAs(explicit("temporal.UpdatedAt"), SQLITE_DATETIME)
    ],
    "temporal.createdAtString": writtenAs(STRING_DATE_TIME, "pg/timestamptz-string@1", CREATED),
    "temporal.updatedAtString": writtenAs(STRING_DATE_TIME, "pg/timestamptz-string@1", UPDATED),
    "temporal.createdAtJsDate": writtenAs(explicit("TimestamptzJsDate"), "pg/timestamptz-date@1", CREATED),
    "temporal.updatedAtJsDate": writtenAs(explicit("TimestamptzJsDate"), "pg/timestamptz-date@1", UPDATED),
    "temporal.timestamp": withPhases(explicit("TimestampTemporal"), "pg/timestamp-temporal@1", true),
    "temporal.timestamptz": withPhases(TEMPORAL_DATE_TIME, "pg/timestamptz-temporal@1", true),
    "temporal.timestampString": withPhases(choice("DateTime", {
        as: "string",
        storage: "timestamp"
    }), "pg/timestamp-string@1", true),
    "temporal.timestamptzString": withPhases(STRING_DATE_TIME, "pg/timestamptz-string@1", true),
    "temporal.timestamptzJsDate": withPhases(explicit("TimestamptzJsDate"), "pg/timestamptz-date@1", true),
    "temporal.date": withPhases(choice("Date", {
        as: "temporal"
    }), "pg/date-temporal@1", false),
    "temporal.dateString": withPhases(choice("Date"), "pg/date-string@1", false),
    "temporal.time": withPhases(choice("Time", {
        as: "temporal"
    }), "pg/time-temporal@1", true),
    "temporal.timeString": withPhases(choice("Time"), "pg/time-string@1", true),
    "temporal.timetz": withPhases(choice("Time", {
        storage: "timetz"
    }), "pg/timetz@1", true),
    "temporal.datetime": withPhases(explicit("DateTime"), SQLITE_DATETIME, false)
};
/** The codec a column of `type` is stored with in `types`, a type choice resolved with its options as a column resolves it; `undefined` when `types` has no such type or the options choose none. */ function codecIdAt(types, path, options) {
    const [name, ...rest] = path;
    if (name === void 0 || !Object.hasOwn(types, name)) return void 0;
    const value = types[name];
    if (value === void 0) return void 0;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__P__as__isAuthoringTypeDescriptor$3e$__["isAuthoringTypeDescriptor"])(value)) return codecIdAt(value, rest, options);
    if (rest.length > 0) return void 0;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__j__as__isAuthoringTypeChoiceDescriptor$3e$__["isAuthoringTypeChoiceDescriptor"])(value)) {
        const args = value.args.map((argument)=>argument.name !== void 0 && options !== void 0 && Object.hasOwn(options, argument.name) ? options[argument.name] : void 0);
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__instantiateAuthoringTypeCall$3e$__["instantiateAuthoringTypeCall"])(types, name, args).codecId;
        } catch (error) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__isInternalError$3e$__["isInternalError"])(error) || !(error instanceof Error)) throw error;
            return;
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__A__as__isAuthoringTypeAliasDescriptor$3e$__["isAuthoringTypeAliasDescriptor"])(value) ? value.output.type.codecId : value.output.codecId;
}
function appliesTo(preset, types) {
    return codecIdAt(types, preset.type.path, preset.type.options) === preset.codecId;
}
function refuse(path, types) {
    const helper = `field.${path}`;
    const preset = (Object.hasOwn(PRESETS, path) ? PRESETS[path] : void 0)?.find((row)=>appliesTo(row, types));
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.FIELD_HELPER_UNKNOWN", preset !== void 0 ? `${helper} was a field preset, and Prisma 8 removed field presets. Write ${preset.rewrite}. ${GUIDE}` : `${helper} does not exist. Prisma 8 removed field presets: declare a column as field.column(type.X(...)), add .id(), .onCreate(gen.fn()) and .onUpdate(gen.fn()) for what a preset set, or use a type alias such as field.column(type.temporal.CreatedAt()). ${GUIDE}`, {
        meta: {
            helper
        }
    });
}
function membersOf(namespace) {
    return new Set(Object.keys(PRESETS).filter((path)=>path.startsWith(`${namespace}.`)).map((path)=>path.slice(namespace.length + 1)));
}
const NAMES = new Set(Object.keys(PRESETS).map((path)=>path.split(".")[0] ?? path));
/**
* The SQL `field` helpers, where a read of a removed field preset throws `CONTRACT.FIELD_HELPER_UNKNOWN`, so a JavaScript caller, or a contract emitted before it is type-checked, learns what to write instead. The rewrite is named where `types`, the stack's `type` namespace, has the type it writes and that type stores the preset's codec; elsewhere the message names the forms that replace presets. `field.id` and `field.temporal`, which held presets, answer the same way for the presets read from them. Every other read behaves as on `helpers`.
*/ function refusingRemovedFieldPresets(helpers, types) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$authoring$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["answerMissingPropertyReads"])(helpers, NAMES, (name)=>Object.hasOwn(PRESETS, name) ? refuse(name, types) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$authoring$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["answerMissingPropertyReads"])({}, membersOf(name), (member)=>refuse(`${name}.${member}`, types)));
}
function composeTypeNamespace(components) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$authoring$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["composePackAuthoringNamespace"])(components, "type");
}
function composeEntityNamespace(components) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$authoring$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["composePackAuthoringNamespace"])(components, "entityTypes");
}
/**
* Reserved top-level keys on the composed helpers surface — the
* built-in `model` / `rel` helpers, the `field` / `type` / `gen` namespace
* objects. Pack-contributed entity types are flattened to the same
* top-level shape (e.g. `helpers.enum({...})`), so a pack cannot
* contribute an entity type whose name collides with one of these
* reserved keys without silently overwriting at runtime. Detect the
* collision at compose time and fail loudly with a guidance message.
*/ const RESERVED_HELPER_KEYS = [
    "field",
    "model",
    "rel",
    "type",
    "gen"
];
function assertNoBuiltInEntityCollisions(namespace) {
    const collisions = Object.keys(namespace).filter((name)=>RESERVED_HELPER_KEYS.includes(name));
    if (collisions.length > 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.PACK_CONTRIBUTION_INVALID", `Pack-contributed entity type(s) ${collisions.map((c)=>`"${c}"`).join(", ")} collide with the reserved built-in helper key(s) on the composed helpers surface. Reserved keys: ${RESERVED_HELPER_KEYS.map((k)=>`"${k}"`).join(", ")}.`, {
        meta: {
            collisions,
            reservedKeys: RESERVED_HELPER_KEYS
        }
    });
}
function createComposedAuthoringHelpers(options) {
    const extensionValues = Object.values(options.extensions ?? {});
    const components = [
        options.family,
        options.target,
        ...extensionValues
    ];
    const typeNamespace = composeTypeNamespace(components);
    const entityNamespace = composeEntityNamespace(components);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__assertNoCrossRegistryCollisions$3e$__["assertNoCrossRegistryCollisions"])(typeNamespace, entityNamespace);
    assertNoBuiltInEntityCollisions(entityNamespace);
    for (const component of components)(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__assertTypeChoicesValid$3e$__["assertTypeChoicesValid"])(component.authoring?.type ?? {}, component.id ?? "<unknown>");
    const { support } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__assembleDataTypeSupport$3e$__["assembleDataTypeSupport"])(components, (codecId)=>options.codecLookup.descriptorFor(codecId)?.dataType);
    const helperLookups = {
        codecLookup: options.codecLookup,
        dataTypes: support
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$authoring$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEntityHelpersFromNamespace"])(entityNamespace, {
            ctx: {
                family: options.family.familyId,
                target: options.target.targetId,
                codecLookup: options.codecLookup,
                dataTypes: support
            }
        }),
        field: refusingRemovedFieldPresets(field, typeNamespace),
        model,
        rel,
        type: createTypeHelpersFromNamespace(typeNamespace, helperLookups),
        gen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$components$2d$BaV9iCkq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__createGeneratorHelpers$3e$__["createGeneratorHelpers"])([
            options.family,
            options.target,
            ...extensionValues
        ])
    });
}
/**
* The contract's `extensions`: each composed extension pack by id, in id order. A pack takes its known ref when one is given, and otherwise a ref built from the target.
*/ function composedExtensionPackRefs(target, extensionIds, knownPackRefs = []) {
    const ids = [
        ...new Set(extensionIds)
    ].sort();
    if (ids.length === 0) return void 0;
    const knownById = new Map(knownPackRefs.map((packRef)=>[
            packRef.id,
            packRef
        ]));
    return Object.fromEntries(ids.map((id)=>[
            id,
            knownById.get(id) ?? {
                kind: "extension",
                id,
                familyId: target.familyId,
                targetId: target.targetId,
                version: "0.0.1"
            }
        ]));
}
function hasNamedModelToken(models, modelName) {
    return models[modelName]?.stageOne.modelName === modelName;
}
function formatFieldSelection(fieldNames) {
    if (fieldNames.length === 1) return `'${fieldNames[0]}'`;
    return `[${fieldNames.map((fieldName)=>`'${fieldName}'`).join(", ")}]`;
}
function formatTokenFieldSelection(modelName, fieldNames) {
    if (fieldNames.length === 1) return `${modelName}.refs.${fieldNames[0]}`;
    return `[${fieldNames.map((fieldName)=>`${modelName}.refs.${fieldName}`).join(", ")}]`;
}
function formatConstraintsRefCall(modelName, fieldNames) {
    if (fieldNames.length === 1) return `constraints.ref('${modelName}', '${fieldNames[0]}')`;
    return `[${fieldNames.map((fieldName)=>`constraints.ref('${modelName}', '${fieldName}')`).join(", ")}]`;
}
function formatRelationModelDisplay(relationModel) {
    if (relationModel.kind === "lazyRelationModelName") return `() => ${relationModel.resolve()}`;
    return relationModel.source === "string" ? `'${relationModel.modelName}'` : relationModel.modelName;
}
function formatRelationCall(relation, targetModelDisplay) {
    if (relation.kind === "belongsTo") return `rel.belongsTo(${targetModelDisplay}, { from: ${formatFieldSelection(normalizeRelationFieldNames(relation.from))}, to: ${formatFieldSelection(normalizeRelationFieldNames(relation.to))} })`;
    if (relation.kind === "hasMany" || relation.kind === "hasOne") {
        const by = formatFieldSelection(normalizeRelationFieldNames(relation.by));
        return `rel.${relation.kind}(${targetModelDisplay}, { by: ${by} })`;
    }
    return `rel.manyToMany(${targetModelDisplay}, { through: ${formatRelationModelDisplay(relation.through)}, from: ${formatFieldSelection(normalizeRelationFieldNames(relation.from))}, to: ${formatFieldSelection(normalizeRelationFieldNames(relation.to))} })`;
}
function formatManyToManyCallWithThrough(relation, throughDisplay) {
    return `rel.manyToMany(${formatRelationModelDisplay(relation.toModel)}, { through: ${throughDisplay}, from: ${formatFieldSelection(normalizeRelationFieldNames(relation.from))}, to: ${formatFieldSelection(normalizeRelationFieldNames(relation.to))} })`;
}
const WARNING_BATCH_THRESHOLD = 5;
function flushWarnings(warnings) {
    if (warnings.length === 0) return;
    if (warnings.length <= WARNING_BATCH_THRESHOLD) {
        for (const message of warnings)process.emitWarning(message, {
            code: "PN_CONTRACT_TYPED_FALLBACK_AVAILABLE"
        });
        return;
    }
    process.emitWarning(`${warnings.length} contract references use string fallbacks where typed alternatives are available. Use named model tokens for autocomplete and type safety.
` + warnings.map((w)=>`  - ${w}`).join("\n"), {
        code: "PN_CONTRACT_TYPED_FALLBACK_AVAILABLE"
    });
}
function formatFallbackWarning(location, current, suggested) {
    return `Contract ${location} uses ${current}. Use ${suggested} when the named model token is available in the same contract to keep typed relation targets and model refs.`;
}
function emitTypedCrossModelFallbackWarnings(collection) {
    const warnings = [];
    const warnedKeys = /* @__PURE__ */ new Set();
    for (const spec of collection.modelSpecs.values()){
        for (const [relationName, relationBuilder] of Object.entries(spec.relations)){
            const relation = relationBuilder.build();
            if (relation.toModel.kind === "relationModelName" && relation.toModel.source === "string" && hasNamedModelToken(collection.models, relation.toModel.modelName)) {
                const warningKey = `${spec.modelName}.${relationName}.toModel`;
                if (!warnedKeys.has(warningKey)) {
                    warnedKeys.add(warningKey);
                    const current = formatRelationCall(relation, `'${relation.toModel.modelName}'`);
                    const suggested = formatRelationCall(relation, relation.toModel.modelName);
                    warnings.push(formatFallbackWarning(`relation "${spec.modelName}.${relationName}"`, current, suggested));
                }
            }
            if (relation.kind === "manyToMany" && relation.through.kind === "relationModelName" && relation.through.source === "string" && hasNamedModelToken(collection.models, relation.through.modelName)) {
                const warningKey = `${spec.modelName}.${relationName}.through`;
                if (!warnedKeys.has(warningKey)) {
                    warnedKeys.add(warningKey);
                    const current = formatManyToManyCallWithThrough(relation, `'${relation.through.modelName}'`);
                    const suggested = formatManyToManyCallWithThrough(relation, relation.through.modelName);
                    warnings.push(formatFallbackWarning(`relation "${spec.modelName}.${relationName}"`, current, suggested));
                }
            }
        }
        for (const [foreignKeyIndex, foreignKey] of (spec.sqlSpec?.foreignKeys ?? []).entries()){
            if (foreignKey.targetSource !== "string" || !hasNamedModelToken(collection.models, foreignKey.targetModel)) continue;
            const warningKey = `${spec.modelName}.sql.foreignKeys.${foreignKeyIndex}`;
            if (warnedKeys.has(warningKey)) continue;
            warnedKeys.add(warningKey);
            const current = formatConstraintsRefCall(foreignKey.targetModel, foreignKey.targetFields);
            const suggested = formatTokenFieldSelection(foreignKey.targetModel, foreignKey.targetFields);
            warnings.push(formatFallbackWarning(`model "${spec.modelName}"`, `${current} in .sql(...)`, suggested));
        }
    }
    flushWarnings(warnings);
}
/** A column stores no `typeParams` when it has none, as PSL writes it (see "Deterministic emission" in `docs/architecture docs/subsystems/1. Data Contract.md`). */ function withoutEmptyTypeParams(descriptor) {
    const { typeParams, ...rest } = descriptor;
    return typeParams === void 0 || Object.keys(typeParams).length > 0 ? descriptor : rest;
}
function resolveFieldDescriptor(modelName, fieldName, fieldState) {
    if ("descriptor" in fieldState && fieldState.descriptor) return withoutEmptyTypeParams(fieldState.descriptor);
    if ("enumHandle" in fieldState && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$authoring$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEnumTypeHandle"])(fieldState.enumHandle)) return {
        codecId: fieldState.enumHandle.codecId
    };
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.TYPE_UNKNOWN", `Field "${modelName}.${fieldName}" does not resolve to a storage descriptor`, {
        meta: {
            modelName,
            fieldName,
            reason: "unresolved-storage-descriptor"
        }
    });
}
function mapFieldNamesToColumnNames(modelName, fieldNames, fieldToColumn) {
    return fieldNames.map((fieldName)=>{
        const columnName = fieldToColumn[fieldName];
        if (!columnName) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.FIELD_UNKNOWN", `Unknown field "${modelName}.${fieldName}" in contract definition`, {
            meta: {
                modelName,
                fieldName
            }
        });
        return columnName;
    });
}
function assertRelationFieldArity(params) {
    if (params.leftFields.length === params.rightFields.length) return;
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.RELATION_INVALID", `Relation "${params.modelName}.${params.relationName}" maps ${params.leftFields.length} ${params.leftLabel} field(s) to ${params.rightFields.length} ${params.rightLabel} field(s).`, {
        meta: {
            modelName: params.modelName,
            relationName: params.relationName,
            reason: "field-count-mismatch"
        }
    });
}
function resolveInlineIdConstraint(spec) {
    const inlineIdFields = [];
    let idName;
    for (const [fieldName, fieldBuilder] of Object.entries(spec.fieldBuilders)){
        const fieldState = fieldBuilder.build();
        if (!fieldState.id) continue;
        inlineIdFields.push(fieldName);
        if (fieldState.id.name) idName = fieldState.id.name;
    }
    if (inlineIdFields.length === 0) return;
    if (inlineIdFields.length > 1) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.IDENTITY_INVALID", `Model "${spec.modelName}" marks multiple fields with .id(). Use .attributes(...) for compound identities.`, {
        meta: {
            modelName: spec.modelName,
            reason: "multiple-inline-ids",
            fields: inlineIdFields
        }
    });
    const [inlineIdField] = inlineIdFields;
    if (!inlineIdField) return;
    return {
        kind: "id",
        fields: [
            inlineIdField
        ],
        ...idName ? {
            name: idName
        } : {}
    };
}
function collectInlineUniqueConstraints(spec) {
    const constraints = [];
    for (const [fieldName, fieldBuilder] of Object.entries(spec.fieldBuilders)){
        const fieldState = fieldBuilder.build();
        if (!fieldState.unique) continue;
        constraints.push({
            kind: "unique",
            fields: [
                fieldName
            ],
            ...fieldState.unique.name ? {
                name: fieldState.unique.name
            } : {}
        });
    }
    return constraints;
}
function resolveModelIdConstraint(spec) {
    const inlineId = resolveInlineIdConstraint(spec);
    const attributeId = spec.attributesSpec?.id;
    if (inlineId && attributeId) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.IDENTITY_INVALID", `Model "${spec.modelName}" defines identity both inline and in .attributes(...). Pick one identity style.`, {
        meta: {
            modelName: spec.modelName,
            reason: "inline-and-attributes"
        }
    });
    const resolvedId = attributeId ?? inlineId;
    if (resolvedId && resolvedId.fields.length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.IDENTITY_INVALID", `Model "${spec.modelName}" defines an empty identity. Add at least one field.`, {
        meta: {
            modelName: spec.modelName,
            reason: "empty-identity"
        }
    });
    return resolvedId;
}
function resolveModelUniqueConstraints(spec) {
    const attributeUniques = spec.attributesSpec?.uniques ?? [];
    for (const unique of attributeUniques)if (unique.fields.length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.CONSTRAINT_INVALID", `Model "${spec.modelName}" defines an empty unique constraint. Add at least one field.`, {
        meta: {
            modelName: spec.modelName
        }
    });
    return [
        ...collectInlineUniqueConstraints(spec),
        ...attributeUniques
    ];
}
function resolveRelationForeignKeys(spec, allSpecs) {
    const foreignKeys = [];
    for (const [relationName, relationBuilder] of Object.entries(spec.relations)){
        const relation = relationBuilder.build();
        if (relation.kind !== "belongsTo" || !relation.sql?.fk) continue;
        const targetModelName = resolveRelationModelName(relation.toModel);
        if (relation.spaceId !== void 0) {
            const fields = normalizeRelationFieldNames(relation.from);
            const targetFields = normalizeRelationFieldNames(relation.to);
            assertRelationFieldArity({
                modelName: spec.modelName,
                relationName,
                leftLabel: "source",
                leftFields: fields,
                rightLabel: "target",
                rightFields: targetFields
            });
            foreignKeys.push({
                kind: "fk",
                fields,
                targetModel: targetModelName,
                targetFields,
                targetSpaceId: relation.spaceId,
                ...relation.namespaceId !== void 0 ? {
                    targetNamespaceId: relation.namespaceId
                } : {},
                ...relation.tableName !== void 0 ? {
                    targetTableName: relation.tableName
                } : {},
                ...relation.sql.fk.name ? {
                    name: relation.sql.fk.name
                } : {},
                ...relation.sql.fk.onDelete ? {
                    onDelete: relation.sql.fk.onDelete
                } : {},
                ...relation.sql.fk.onUpdate ? {
                    onUpdate: relation.sql.fk.onUpdate
                } : {},
                ...relation.sql.fk.constraint !== void 0 ? {
                    constraint: relation.sql.fk.constraint
                } : {},
                ...relation.sql.fk.index !== void 0 ? {
                    index: relation.sql.fk.index
                } : {}
            });
            continue;
        }
        if (!allSpecs.has(targetModelName)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.MODEL_UNKNOWN", `Relation "${spec.modelName}.${relationName}" references unknown model "${targetModelName}"`, {
            meta: {
                sourceModel: spec.modelName,
                relationName,
                targetModel: targetModelName
            }
        });
        const fields = normalizeRelationFieldNames(relation.from);
        const targetFields = normalizeRelationFieldNames(relation.to);
        assertRelationFieldArity({
            modelName: spec.modelName,
            relationName,
            leftLabel: "source",
            leftFields: fields,
            rightLabel: "target",
            rightFields: targetFields
        });
        foreignKeys.push({
            kind: "fk",
            fields,
            targetModel: targetModelName,
            targetFields,
            ...relation.sql.fk.name ? {
                name: relation.sql.fk.name
            } : {},
            ...relation.sql.fk.onDelete ? {
                onDelete: relation.sql.fk.onDelete
            } : {},
            ...relation.sql.fk.onUpdate ? {
                onUpdate: relation.sql.fk.onUpdate
            } : {},
            ...relation.sql.fk.constraint !== void 0 ? {
                constraint: relation.sql.fk.constraint
            } : {},
            ...relation.sql.fk.index !== void 0 ? {
                index: relation.sql.fk.index
            } : {}
        });
    }
    return foreignKeys;
}
function resolveRelationAnchorFields(spec) {
    const idFields = spec.idConstraint?.fields;
    if (idFields && idFields.length > 0) return idFields;
    if ("id" in spec.fieldToColumn) return [
        "id"
    ];
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.IDENTITY_INVALID", `Model "${spec.modelName}" needs an explicit id or an "id" field to anchor non-owning relations`, {
        meta: {
            modelName: spec.modelName,
            reason: "missing-anchor-id"
        }
    });
}
function belongsToNullable(relationName, declaredNullable, spec, fieldNames) {
    const { nullable, contradiction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$authoring$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveToOneRelationNullable"])({
        declaredNullable,
        localFieldNullability: fieldNames.map((fieldName)=>spec.fieldBuilders[fieldName]?.build().nullable === true),
        ownsReference: true
    });
    if (contradiction !== void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.RELATION_INVALID", (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(`Relation "${spec.modelName}.${relationName}"`, contradiction), {
        meta: {
            modelName: spec.modelName,
            relationName,
            reason: "to-one-nullability-mismatch"
        }
    });
    return nullable;
}
function lowerBelongsToRelation(relationName, relation, currentSpec, allSpecs, extensions) {
    const targetModelName = resolveRelationModelName(relation.toModel);
    const fromFields = normalizeRelationFieldNames(relation.from);
    const toFields = normalizeRelationFieldNames(relation.to);
    assertRelationFieldArity({
        modelName: currentSpec.modelName,
        relationName,
        leftLabel: "source",
        leftFields: fromFields,
        rightLabel: "target",
        rightFields: toFields
    });
    if (relation.spaceId !== void 0) {
        assertKnownExtensionPack(extensions, relation.spaceId, `Relation "${currentSpec.modelName}.${relationName}"`);
        const parentColumns = mapFieldNamesToColumnNames(currentSpec.modelName, fromFields, currentSpec.fieldToColumn);
        return {
            fieldName: relationName,
            toModel: targetModelName,
            toTable: relation.tableName,
            cardinality: "N:1",
            nullable: belongsToNullable(relationName, relation.optional, currentSpec, fromFields),
            spaceId: relation.spaceId,
            ...relation.namespaceId !== void 0 ? {
                namespaceId: relation.namespaceId
            } : {},
            on: {
                parentTable: currentSpec.tableName,
                parentColumns,
                childTable: relation.tableName,
                childColumns: toFields
            }
        };
    }
    const targetSpec = allSpecs.get(targetModelName);
    if (!targetSpec) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.MODEL_UNKNOWN", `Relation "${currentSpec.modelName}.${relationName}" references unknown model "${targetModelName}"`, {
        meta: {
            sourceModel: currentSpec.modelName,
            relationName,
            targetModel: targetModelName
        }
    });
    return {
        fieldName: relationName,
        toModel: targetModelName,
        toTable: targetSpec.tableName,
        cardinality: "N:1",
        nullable: belongsToNullable(relationName, relation.optional, currentSpec, fromFields),
        on: {
            parentTable: currentSpec.tableName,
            parentColumns: mapFieldNamesToColumnNames(currentSpec.modelName, fromFields, currentSpec.fieldToColumn),
            childTable: targetSpec.tableName,
            childColumns: mapFieldNamesToColumnNames(targetSpec.modelName, toFields, targetSpec.fieldToColumn)
        }
    };
}
function lowerHasOwnershipRelation(relationName, relation, currentSpec, allSpecs) {
    const targetModelName = resolveRelationModelName(relation.toModel);
    const targetSpec = allSpecs.get(targetModelName);
    if (!targetSpec) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.MODEL_UNKNOWN", `Relation "${currentSpec.modelName}.${relationName}" references unknown model "${targetModelName}"`, {
        meta: {
            sourceModel: currentSpec.modelName,
            relationName,
            targetModel: targetModelName
        }
    });
    const parentFields = resolveRelationAnchorFields(currentSpec);
    const childFields = normalizeRelationFieldNames(relation.by);
    assertRelationFieldArity({
        modelName: currentSpec.modelName,
        relationName,
        leftLabel: "anchor",
        leftFields: parentFields,
        rightLabel: "child",
        rightFields: childFields
    });
    return {
        fieldName: relationName,
        toModel: targetModelName,
        toTable: targetSpec.tableName,
        ...relation.kind === "hasMany" ? {
            cardinality: "1:N"
        } : {
            cardinality: "1:1",
            nullable: true
        },
        on: {
            parentTable: currentSpec.tableName,
            parentColumns: mapFieldNamesToColumnNames(currentSpec.modelName, parentFields, currentSpec.fieldToColumn),
            childTable: targetSpec.tableName,
            childColumns: mapFieldNamesToColumnNames(targetSpec.modelName, childFields, targetSpec.fieldToColumn)
        }
    };
}
function lowerManyToManyRelation(relationName, relation, currentSpec, allSpecs) {
    const targetModelName = resolveRelationModelName(relation.toModel);
    const targetSpec = allSpecs.get(targetModelName);
    if (!targetSpec) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.MODEL_UNKNOWN", `Relation "${currentSpec.modelName}.${relationName}" references unknown model "${targetModelName}"`, {
        meta: {
            sourceModel: currentSpec.modelName,
            relationName,
            targetModel: targetModelName
        }
    });
    const throughModelName = resolveRelationModelName(relation.through);
    const throughSpec = allSpecs.get(throughModelName);
    if (!throughSpec) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.MODEL_UNKNOWN", `Relation "${currentSpec.modelName}.${relationName}" references unknown through model "${throughModelName}"`, {
        meta: {
            sourceModel: currentSpec.modelName,
            relationName,
            targetModel: throughModelName
        }
    });
    const currentAnchorFields = resolveRelationAnchorFields(currentSpec);
    const targetAnchorFields = resolveRelationAnchorFields(targetSpec);
    const throughFromFields = normalizeRelationFieldNames(relation.from);
    const throughToFields = normalizeRelationFieldNames(relation.to);
    if (currentAnchorFields.length !== throughFromFields.length || targetAnchorFields.length !== throughToFields.length) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.RELATION_INVALID", `Relation "${currentSpec.modelName}.${relationName}" has mismatched many-to-many field counts.`, {
        meta: {
            modelName: currentSpec.modelName,
            relationName,
            reason: "many-to-many-field-count-mismatch"
        }
    });
    return {
        fieldName: relationName,
        toModel: targetModelName,
        toTable: targetSpec.tableName,
        cardinality: "N:M",
        through: {
            table: throughSpec.tableName,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("namespaceId", throughSpec.namespace),
            parentColumns: mapFieldNamesToColumnNames(throughSpec.modelName, throughFromFields, throughSpec.fieldToColumn),
            childColumns: mapFieldNamesToColumnNames(throughSpec.modelName, throughToFields, throughSpec.fieldToColumn)
        },
        on: {
            parentTable: currentSpec.tableName,
            parentColumns: mapFieldNamesToColumnNames(currentSpec.modelName, currentAnchorFields, currentSpec.fieldToColumn),
            childTable: throughSpec.tableName,
            childColumns: mapFieldNamesToColumnNames(throughSpec.modelName, throughFromFields, throughSpec.fieldToColumn)
        }
    };
}
function resolveRelationNode(relationName, relation, currentSpec, allSpecs, extensions) {
    if (relation.kind === "belongsTo") return lowerBelongsToRelation(relationName, relation, currentSpec, allSpecs, extensions);
    if (relation.kind === "hasMany" || relation.kind === "hasOne") return lowerHasOwnershipRelation(relationName, relation, currentSpec, allSpecs);
    return lowerManyToManyRelation(relationName, relation, currentSpec, allSpecs);
}
function lowerLocalForeignKeyNode(spec, targetSpec, foreignKey) {
    return {
        columns: mapFieldNamesToColumnNames(spec.modelName, foreignKey.fields, spec.fieldToColumn),
        references: {
            model: targetSpec.modelName,
            table: targetSpec.tableName,
            columns: mapFieldNamesToColumnNames(targetSpec.modelName, foreignKey.targetFields, targetSpec.fieldToColumn)
        },
        ...foreignKey.name ? {
            name: foreignKey.name
        } : {},
        ...foreignKey.onDelete ? {
            onDelete: foreignKey.onDelete
        } : {},
        ...foreignKey.onUpdate ? {
            onUpdate: foreignKey.onUpdate
        } : {},
        ...foreignKey.constraint !== void 0 ? {
            constraint: foreignKey.constraint
        } : {},
        ...foreignKey.index !== void 0 ? {
            index: foreignKey.index
        } : {}
    };
}
function lowerCrossSpaceForeignKeyNode(spec, foreignKey) {
    if (foreignKey.targetTableName === void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.FOREIGN_KEY_INVALID", `Foreign key on "${spec.modelName}" references model "${foreignKey.targetModel}" in contract space "${foreignKey.targetSpaceId}" but the target table name is unknown: the handle's .sql() stage is a factory function, so its table cannot be read statically. Declare the target model's .sql() stage with a static object carrying \`table\`.`, {
        meta: {
            sourceModel: spec.modelName,
            targetModel: foreignKey.targetModel,
            spaceId: foreignKey.targetSpaceId
        }
    });
    return {
        columns: mapFieldNamesToColumnNames(spec.modelName, foreignKey.fields, spec.fieldToColumn),
        references: {
            model: foreignKey.targetModel,
            table: foreignKey.targetTableName,
            columns: foreignKey.targetFields,
            ...foreignKey.targetNamespaceId !== void 0 ? {
                namespaceId: foreignKey.targetNamespaceId
            } : {},
            spaceId: foreignKey.targetSpaceId
        },
        ...foreignKey.name ? {
            name: foreignKey.name
        } : {},
        ...foreignKey.onDelete ? {
            onDelete: foreignKey.onDelete
        } : {},
        ...foreignKey.onUpdate ? {
            onUpdate: foreignKey.onUpdate
        } : {},
        ...foreignKey.constraint !== void 0 ? {
            constraint: foreignKey.constraint
        } : {},
        ...foreignKey.index !== void 0 ? {
            index: foreignKey.index
        } : {}
    };
}
function assertKnownExtensionPack(extensions, spaceId, context) {
    if (extensions !== void 0 && Object.hasOwn(extensions, spaceId)) return;
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.PACK_MISSING", `${context} references contract space "${spaceId}" but "${spaceId}" is not declared in extensions. Add the pack to extensions.`, {
        meta: {
            spaceId,
            context
        }
    });
}
function resolveForeignKeyNodes(spec, allSpecs, extensions) {
    const relationForeignKeys = resolveRelationForeignKeys(spec, allSpecs).map((foreignKey)=>{
        if (foreignKey.targetSpaceId !== void 0) {
            assertKnownExtensionPack(extensions, foreignKey.targetSpaceId, `Relation-derived foreign key on "${spec.modelName}"`);
            return lowerCrossSpaceForeignKeyNode(spec, {
                ...foreignKey,
                targetSpaceId: foreignKey.targetSpaceId
            });
        }
        const targetSpec = allSpecs.get(foreignKey.targetModel);
        if (!targetSpec) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.MODEL_UNKNOWN", `Foreign key on "${spec.modelName}" references unknown model "${foreignKey.targetModel}"`, {
            meta: {
                sourceModel: spec.modelName,
                targetModel: foreignKey.targetModel
            }
        });
        return lowerLocalForeignKeyNode(spec, targetSpec, foreignKey);
    });
    const sqlForeignKeys = (spec.sqlSpec?.foreignKeys ?? []).map((foreignKey)=>{
        if (foreignKey.targetSpaceId !== void 0) {
            assertKnownExtensionPack(extensions, foreignKey.targetSpaceId, `Foreign key on "${spec.modelName}"`);
            return lowerCrossSpaceForeignKeyNode(spec, {
                ...foreignKey,
                targetSpaceId: foreignKey.targetSpaceId
            });
        }
        const targetSpec = allSpecs.get(foreignKey.targetModel);
        if (!targetSpec) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.MODEL_UNKNOWN", `Foreign key on "${spec.modelName}" references unknown model "${foreignKey.targetModel}"`, {
            meta: {
                sourceModel: spec.modelName,
                targetModel: foreignKey.targetModel
            }
        });
        return lowerLocalForeignKeyNode(spec, targetSpec, foreignKey);
    });
    return [
        ...relationForeignKeys,
        ...sqlForeignKeys
    ];
}
/**
* Resolves a deferred index expression's field refs the way the field-tuple form
* resolves its columns, and pairs each with the codec the column stores through
* so a renderer can refuse a column it cannot express.
*/ function resolveDeferredColumns(spec, fieldNames, fieldCodecIds) {
    const columnNames = mapFieldNamesToColumnNames(spec.modelName, fieldNames, spec.fieldToColumn);
    return fieldNames.map((fieldName, position)=>{
        const name = columnNames[position];
        const codecId = fieldCodecIds[fieldName];
        if (name === void 0 || codecId === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`Deferred index expression on "${spec.modelName}" resolved no column for field "${fieldName}"`);
        return {
            name,
            codecId
        };
    });
}
/**
* The text of an index expression. A string has no `render`, and `'render' in` a string throws a
* `TypeError`, so the `sql` value is recognized first and anything else is refused last.
*/ function indexExpressionText(spec, expression, fieldCodecIds, owner) {
    const sqlExpression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(expression);
    if (sqlExpression !== void 0) return sqlExpression.text;
    if (typeof expression === "object" && expression !== null && "render" in expression) return renderedSqlText(expression.render(resolveDeferredColumns(spec, expression.fields.map((ref)=>ref.fieldName), fieldCodecIds)), `${owner} expression`);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"])(expression, `${owner} expression`).text;
}
function renderedSqlText(rendered, what) {
    try {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"](rendered).text;
    } catch (cause) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__isStructuredError$3e$__["isStructuredError"])(cause) || cause.code !== "CONTRACT.SQL_EXPRESSION_INVALID") throw cause;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.SQL_EXPRESSION_INVALID", `${what}: ${cause.message}`, {
            meta: {
                what,
                ...cause.meta
            },
            cause
        });
    }
}
function constraintOwner(kind, modelName, constraint) {
    const name = constraint.name ?? constraint.map;
    return name === void 0 ? `${kind} on "${modelName}"` : `${kind} "${name}"`;
}
/** The fields an index covers, in order: its own, or those of its deferred expression. */ function coveredFieldNames(index) {
    if (index.fields !== void 0) return index.fields;
    const { expression } = index;
    if (expression === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(expression) || typeof expression !== "object") return [];
    return expression.fields.map((ref)=>ref.fieldName);
}
/**
* The generators a field's `.onCreate(...)` and `.onUpdate(...)` calls resolve to for its column.
*/ function resolveGeneratorCalls(input) {
    const { modelName, fieldName, fieldState, descriptor, generatorFunctions } = input;
    const calls = fieldState.generatorCalls;
    if (calls === void 0) return void 0;
    const typeParams = descriptor.typeParams;
    const column = {
        codecId: descriptor.codecId,
        typeParams,
        length: input.columnLength(descriptor.codecId, typeParams)
    };
    const phases = {};
    for (const phase of [
        "onCreate",
        "onUpdate"
    ]){
        const call = calls[phase];
        if (call === void 0) continue;
        if (fieldState.many !== false) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.DEFAULT_INVALID", `Field "${modelName}.${fieldName}" is a list and cannot use .${phase}(${call.name}()). Lists have no per-element generated values; remove .${phase}(...).`, {
            meta: {
                modelName,
                fieldName,
                codecId: column.codecId,
                function: call.name,
                reason: "generator-on-list"
            }
        });
        const resolution = generatorFunctions.resolve(call, column);
        if (resolution.ok) {
            phases[phase] = resolution.generator;
            continue;
        }
        const meta = {
            modelName,
            fieldName,
            codecId: column.codecId,
            function: call.name
        };
        if (resolution.reason === "unknown-function") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.DEFAULT_INVALID", `Field "${modelName}.${fieldName}": no pack in the contract declares the generator function "${call.name}".`, {
            meta: {
                ...meta,
                reason: "generator-unknown"
            }
        });
        const applying = generatorFunctions.functionsFor(column.codecId).map(({ name })=>`${name}()`);
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.DEFAULT_INVALID", resolution.reason === "refused" ? `Field "${modelName}.${fieldName}": ${resolution.message}` : `Field "${modelName}.${fieldName}": ${call.name}() does not apply to codec "${column.codecId}". ${applying.length === 0 ? "No generator function applies to this codec." : `Functions that apply: ${applying.join(", ")}.`}`, {
            meta: {
                ...meta,
                reason: "generator-not-applicable"
            }
        });
    }
    return phases;
}
function resolveModelNode(spec, allSpecs, generatorFunctions, columnLength, extensions) {
    const fields = [];
    /** Filled by the field loop below, read by a deferred index expression. */ const fieldCodecIds = {};
    for (const [fieldName, fieldBuilder] of Object.entries(spec.fieldBuilders)){
        const fieldState = fieldBuilder.build();
        const descriptor = resolveFieldDescriptor(spec.modelName, fieldName, fieldState);
        const columnName = spec.fieldToColumn[fieldName];
        if (!columnName) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`Column name resolution failed for "${spec.modelName}.${fieldName}"`);
        fieldCodecIds[fieldName] = descriptor.codecId;
        const enumHandle = "enumHandle" in fieldState && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$authoring$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEnumTypeHandle"])(fieldState.enumHandle) ? fieldState.enumHandle : void 0;
        const executionDefaults = resolveGeneratorCalls({
            modelName: spec.modelName,
            fieldName,
            fieldState,
            descriptor,
            generatorFunctions,
            columnLength
        });
        fields.push({
            fieldName,
            columnName,
            descriptor,
            nullable: fieldState.nullable,
            many: fieldState.many !== false,
            ...fieldState.many !== false ? {
                elementNullable: fieldState.many.elementNullable
            } : {},
            ...fieldState.default ? {
                default: fieldState.default
            } : {},
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("executionDefaults", executionDefaults),
            ...enumHandle !== void 0 ? {
                enumTypeHandle: enumHandle
            } : {}
        });
    }
    const { idConstraint } = spec;
    const uniques = resolveModelUniqueConstraints(spec).map((unique)=>({
            columns: mapFieldNamesToColumnNames(spec.modelName, unique.fields, spec.fieldToColumn),
            ...unique.name ? {
                name: unique.name
            } : {}
        }));
    const indexes = (spec.sqlSpec?.indexes ?? []).map((index)=>{
        const options = typeof index.options === "function" ? index.options(resolveDeferredColumns(spec, coveredFieldNames(index), fieldCodecIds)) : index.options;
        const method = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])({
            type: index.type,
            options
        });
        const owner = constraintOwner("Index", spec.modelName, index);
        const carried = {
            where: index.where === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"])(index.where, `${owner} where`).text,
            unique: index.unique,
            name: index.name,
            map: index.map,
            ...method
        };
        return index.expression !== void 0 ? {
            ...carried,
            expression: indexExpressionText(spec, index.expression, fieldCodecIds, owner)
        } : {
            ...carried,
            columns: mapFieldNamesToColumnNames(spec.modelName, index.fields ?? [], spec.fieldToColumn)
        };
    });
    const checks = (spec.sqlSpec?.checks ?? []).map((authoredCheck)=>({
            expression: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"])(authoredCheck.expression, `${constraintOwner("Check", spec.modelName, authoredCheck)} expression`).text,
            name: authoredCheck.name,
            map: authoredCheck.map
        }));
    const foreignKeys = resolveForeignKeyNodes(spec, allSpecs, extensions);
    const relations = Object.entries(spec.relations).map(([relationName, relationBuilder])=>resolveRelationNode(relationName, relationBuilder.build(), spec, allSpecs, extensions));
    return {
        modelName: spec.modelName,
        tableName: spec.tableName,
        ...spec.namespace !== void 0 ? {
            namespaceId: spec.namespace
        } : {},
        fields,
        ...idConstraint ? {
            id: {
                columns: mapFieldNamesToColumnNames(spec.modelName, idConstraint.fields, spec.fieldToColumn),
                ...idConstraint.name ? {
                    name: idConstraint.name
                } : {}
            }
        } : {},
        ...uniques.length > 0 ? {
            uniques
        } : {},
        ...indexes.length > 0 ? {
            indexes
        } : {},
        ...checks.length > 0 ? {
            checks
        } : {},
        ...foreignKeys.length > 0 ? {
            foreignKeys
        } : {},
        ...relations.length > 0 ? {
            relations
        } : {},
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("control", spec.sqlSpec?.control)
    };
}
function columnLengthOf(definition) {
    const { codecLookup, dataTypeLookup } = definition;
    return (codecId, typeParams)=>{
        const dataTypeId = codecLookup.descriptorFor(codecId)?.dataType;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["d"])(dataTypeId === void 0 ? void 0 : dataTypeLookup.get(dataTypeId), typeParams);
    };
}
function collectRuntimeModelSpecs(definition) {
    const databaseTypes = {
        ...definition.databaseTypes
    };
    const models = {
        ...definition.models ?? {}
    };
    const modelSpecs = /* @__PURE__ */ new Map();
    const tableOwners = /* @__PURE__ */ new Map();
    for (const [modelName, modelDefinition] of Object.entries(models)){
        const tokenModelName = modelDefinition.stageOne.modelName;
        if (tokenModelName && tokenModelName !== modelName) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.MODEL_TOKEN_INVALID", `Model token "${tokenModelName}" must be assigned to models.${tokenModelName}. Received models.${modelName}.`, {
            meta: {
                tokenModelName,
                assignedKey: modelName
            }
        });
        const attributesSpec = modelDefinition.buildAttributesSpec();
        const sqlSpec = modelDefinition.buildSqlSpec();
        const tableName = sqlSpec?.table ?? applyNaming(modelName, definition.naming?.tables);
        const namespaceId = modelDefinition.stageOne.namespace ?? definition.target.defaultNamespaceId;
        const tableKey = JSON.stringify([
            namespaceId,
            tableName
        ]);
        const existingModel = tableOwners.get(tableKey);
        if (existingModel) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.NAME_DUPLICATE", `Models "${existingModel}" and "${modelName}" both map to table "${tableName}".`, {
            meta: {
                kind: "table",
                name: tableName,
                first: existingModel,
                second: modelName
            }
        });
        tableOwners.set(tableKey, modelName);
        const fieldToColumn = {};
        const columnOwners = /* @__PURE__ */ new Map();
        for (const [fieldName, fieldBuilder] of Object.entries(modelDefinition.stageOne.fields)){
            const columnName = fieldBuilder.build().columnName ?? applyNaming(fieldName, definition.naming?.columns);
            const existingField = columnOwners.get(columnName);
            if (existingField) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.NAME_DUPLICATE", `Model "${modelName}" maps both "${existingField}" and "${fieldName}" to column "${columnName}".`, {
                meta: {
                    kind: "column",
                    name: columnName,
                    first: existingField,
                    second: fieldName
                }
            });
            columnOwners.set(columnName, fieldName);
            fieldToColumn[fieldName] = columnName;
        }
        const fieldBuilders = modelDefinition.stageOne.fields;
        const idConstraint = resolveModelIdConstraint({
            modelName,
            fieldBuilders,
            attributesSpec
        });
        modelSpecs.set(modelName, {
            modelName,
            tableName,
            namespace: modelDefinition.stageOne.namespace,
            fieldBuilders,
            fieldToColumn,
            relations: modelDefinition.stageOne.relations,
            attributesSpec,
            sqlSpec,
            idConstraint
        });
    }
    return {
        databaseTypes,
        models,
        modelSpecs
    };
}
function lowerModels(collection, generatorFunctions, columnLength, extensions) {
    emitTypedCrossModelFallbackWarnings(collection);
    return Array.from(collection.modelSpecs.values()).map((spec)=>resolveModelNode(spec, collection.modelSpecs, generatorFunctions, columnLength, extensions));
}
/**
* Kind-agnostic walk over the author-declared `entities` handle list:
*
* 1. Index the bound packs' `entityTypes` contributions by discriminator so
*    each handle's `entityKind` maps to the pack that registered it; a
*    handle whose kind no composed pack registers is an error naming the
*    kind.
* 2. Resolve each handle's declared model refs (`handle.refs`, actual
*    model-handle objects) to storage table coordinates — identity against
*    the contract's `models` record first, then the handle's declared model
*    name against the build's model specs; never by re-deriving a table
*    name. A cross-space (extensionModel) handle resolves to its own
*    coordinate annotated with `spaceId`.
* 3. Call each owning pack's batch lowering hook once with all of its
*    claimed handles, and fold the returned rows into the namespace-scoped
*    attachments (namespace → kind → key), rejecting two different entities
*    in one slot. The result becomes `ContractDefinition.attachedEntities`.
*
* No entity kind is named anywhere in this walk.
*/ function lowerPackEntityHandles(definition, modelSpecs) {
    const entities = definition.entities;
    if (entities === void 0 || entities.length === 0) return void 0;
    const components = [
        definition.target,
        ...Object.values(definition.extensions ?? {})
    ];
    const owningComponent = /* @__PURE__ */ new Map();
    const walkEntityTypes = (namespace, component)=>{
        for (const value of Object.values(namespace))if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__D__as__isAuthoringEntityTypeDescriptor$3e$__["isAuthoringEntityTypeDescriptor"])(value)) owningComponent.set(value.discriminator, component);
        else walkEntityTypes(value, component);
    };
    for (const component of components){
        const entityTypes = component.authoring?.entityTypes;
        if (entityTypes !== void 0) walkEntityTypes(entityTypes, component);
    }
    const defaultNamespaceId = definition.target.defaultNamespaceId;
    const modelNamesByIdentity = /* @__PURE__ */ new Map();
    for (const [modelName, modelBuilder] of Object.entries(definition.models ?? {}))modelNamesByIdentity.set(modelBuilder, modelName);
    const coordinateOf = (modelName)=>{
        const spec = modelSpecs.get(modelName);
        if (spec === void 0) return void 0;
        return {
            kind: "resolved",
            namespaceId: spec.namespace ?? defaultNamespaceId,
            tableName: spec.tableName,
            modelName
        };
    };
    const declaredModelName = (value)=>{
        if (typeof value !== "object" || value === null || !("stageOne" in value)) return void 0;
        const stageOne = value.stageOne;
        if (typeof stageOne !== "object" || stageOne === null || !("modelName" in stageOne)) return;
        return typeof stageOne.modelName === "string" ? stageOne.modelName : void 0;
    };
    const resolveRef = (value)=>{
        const modelName = declaredModelName(value);
        if (isCrossSpaceHandle(value)) {
            const tableName = value.tableName;
            const namespaceId = value.stageOne.namespace;
            if (tableName !== void 0 && namespaceId !== void 0) return {
                kind: "cross-space",
                spaceId: value.spaceId,
                namespaceId,
                tableName,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("modelName", modelName)
            };
            return {
                kind: "unresolved",
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("modelName", modelName)
            };
        }
        const identityName = modelNamesByIdentity.get(value);
        return (identityName !== void 0 ? coordinateOf(identityName) : void 0) ?? (modelName !== void 0 ? coordinateOf(modelName) : void 0) ?? {
            kind: "unresolved",
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("modelName", modelName)
        };
    };
    const claimed = /* @__PURE__ */ new Map();
    for (const handle of entities){
        const component = owningComponent.get(handle.entityKind);
        if (component === void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.ENTITY_KIND_UNKNOWN", `defineContract: entities contains a handle with entityKind "${handle.entityKind}", which no composed pack registers. Compose a pack whose entityTypes contribution claims "${handle.entityKind}", or remove the handle.`, {
            meta: {
                entityKind: handle.entityKind
            }
        });
        const refs = {};
        for (const [refName, refValue] of Object.entries(handle.refs ?? {}))refs[refName] = resolveRef(refValue);
        const forComponent = claimed.get(component) ?? [];
        forComponent.push({
            handle,
            refs
        });
        claimed.set(component, forComponent);
    }
    const pack = {};
    for (const [component, handles] of claimed){
        const authoring = component.authoring;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$entity$2d$handle$2d$lowering$2d$hook$2d$3KYrW$2d$BT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(authoring)) {
            const kinds = [
                ...new Set(handles.map((entry)=>entry.handle.entityKind))
            ].sort();
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.PACK_CONTRIBUTION_INVALID", `defineContract: entityKind(s) ${kinds.map((kind)=>`"${kind}"`).join(", ")} are registered by a pack that does not implement entity-handle lowering (no lowerEntityHandles on its authoring contributions).`, {
                meta: {
                    entityKinds: kinds,
                    reason: "missing-lowerEntityHandles"
                }
            });
        }
        for (const row of authoring.lowerEntityHandles({
            handles,
            defaultNamespaceId
        })){
            const forNamespace = pack[row.namespaceId] ?? {};
            pack[row.namespaceId] = forNamespace;
            const forKind = forNamespace[row.entityKind] ?? {};
            forNamespace[row.entityKind] = forKind;
            const existing = forKind[row.key];
            if (existing !== void 0 && existing !== row.entity) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.NAME_DUPLICATE", `defineContract: two different "${row.entityKind}" entities named "${row.key}" in namespace "${row.namespaceId}" — pack-entity names must be unique per namespace.`, {
                meta: {
                    kind: row.entityKind,
                    name: row.key,
                    namespaceId: row.namespaceId
                }
            });
            forKind[row.key] = row.entity;
        }
    }
    return pack;
}
function buildContractDefinition(definition) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(definition, "buildContractDefinition");
    const collection = collectRuntimeModelSpecs(definition);
    const packs = [
        definition.family,
        definition.target,
        ...Object.values(definition.extensions ?? {})
    ];
    const generatorFunctions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$generator$2d$functions$2d$CXbQfvYu$2d$BIFU1Ryx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__assembleGeneratorFunctions$3e$__["assembleGeneratorFunctions"])(packs);
    const columnLength = columnLengthOf(definition);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__assertTypeAliasesValid$3e$__["assertTypeAliasesValid"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$authoring$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["composePackAuthoringNamespace"])(packs, "type"), {
        generatorFunctions,
        paramsSchemaOf: (codecId)=>definition.codecLookup.descriptorFor(codecId)?.paramsSchema,
        fieldLength: ({ codecId, typeParams })=>columnLength(codecId, typeParams)
    });
    const models = lowerModels(collection, generatorFunctions, columnLength, definition.extensions);
    const attachedEntities = lowerPackEntityHandles(definition, collection.modelSpecs);
    return {
        target: definition.target,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("defaultControlPolicy", definition.defaultControlPolicy),
        ...definition.extensions ? {
            extensions: definition.extensions
        } : {},
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("capabilities", definition.adapter?.capabilities),
        ...definition.storageHash ? {
            storageHash: definition.storageHash
        } : {},
        ...definition.foreignKeyDefaults ? {
            foreignKeyDefaults: definition.foreignKeyDefaults
        } : {},
        ...Object.keys(collection.databaseTypes).length > 0 ? {
            databaseTypes: collection.databaseTypes
        } : {},
        ...definition.namespaces ? {
            namespaces: definition.namespaces
        } : {},
        warnings: void 0,
        createNamespace: definition.createNamespace,
        ...definition.enums && Object.keys(definition.enums).length > 0 ? {
            enums: definition.enums
        } : {},
        ...attachedEntities && Object.keys(attachedEntities).length > 0 ? {
            attachedEntities
        } : {},
        models
    };
}
function validateTargetPackRef(family, target) {
    if (family.familyId !== "sql") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.PACK_FAMILY_MISMATCH", `defineContract only accepts SQL family packs. Received family "${family.familyId}".`, {
        meta: {
            packId: family.id,
            packFamilyId: family.familyId,
            contractFamilyId: "sql"
        }
    });
    if (target.familyId !== family.familyId) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.PACK_FAMILY_MISMATCH", `target pack "${target.id}" targets family "${target.familyId}" but contract family is "${family.familyId}".`, {
        meta: {
            packId: target.id,
            packFamilyId: target.familyId,
            contractFamilyId: family.familyId
        }
    });
}
function targetNameOf(target) {
    return target.displayName ?? target.targetId;
}
/**
* Per-target reserved namespace names enforced by `defineContract` for
* SQL family contracts. Two categories:
*
* 1. **IR sentinels** (`__unbound__`, `__unspecified__`) — reserved on
*    every SQL target. The double-underscore decoration marks them as
*    framework-reserved coordinates; user code must not declare them
*    explicitly.
* 2. **The PSL keyword `unbound`** — the name PSL writes for the
*    late-binding opt-in (`namespace unbound { … }`), so the TS surface
*    rejects it from `defineContract({ namespaces })` lists on every
*    target that accepts namespaces. A target whose `supportsNamespaces` is false rejects every
*    non-empty namespaces list outright; callers should declare
*    `namespaces: []` or omit the field.
*/ function validateNamespaceDeclarations(target, namespaces) {
    if (!namespaces) return;
    if (target.supportsNamespaces === false && namespaces.length > 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.NAMESPACE_UNSUPPORTED", `defineContract: ${targetNameOf(target)} contracts cannot declare namespaces. Received namespaces: [${namespaces.map((name)=>`"${name}"`).join(", ")}].`, {
        meta: {
            namespaces,
            targetId: target.targetId
        }
    });
    const seen = /* @__PURE__ */ new Set();
    for (const namespace of namespaces){
        if (namespace.length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.NAMESPACE_INVALID", "defineContract: namespace names cannot be empty.", {
            meta: {
                namespace,
                reason: "empty"
            }
        });
        if (namespace.trim().length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.NAMESPACE_INVALID", `defineContract: namespace name "${namespace}" cannot be whitespace-only.`, {
            meta: {
                namespace,
                reason: "whitespace-only"
            }
        });
        if (namespace === "__unbound__" || namespace === "__unspecified__") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.NAMESPACE_INVALID", `defineContract: namespace name "${namespace}" is a reserved IR sentinel and cannot appear in the declared namespaces list.`, {
            meta: {
                namespace,
                reason: "reserved-ir-sentinel"
            }
        });
        if (namespace === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$ast$2d$CyvE6CR$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__UNBOUND_PSL_NAMESPACE_NAME$3e$__["UNBOUND_PSL_NAMESPACE_NAME"]) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.NAMESPACE_INVALID", `defineContract: namespace name "${namespace}" is reserved by ${targetNameOf(target)} for the late-binding opt-in (use \`namespace ${namespace} { … }\` in PSL instead of declaring it as a regular schema).`, {
            meta: {
                namespace,
                reason: "reserved-psl-keyword",
                targetId: target.targetId
            }
        });
        if (seen.has(namespace)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.NAME_DUPLICATE", `defineContract: namespaces list contains duplicate entry "${namespace}".`, {
            meta: {
                kind: "namespace",
                name: namespace
            }
        });
        seen.add(namespace);
    }
}
/**
* Per-model `namespace` validation paired with
* {@link validateNamespaceDeclarations}. Mirrors the reserved-name
* rules so the per-model surface stays consistent with the contract-
* level surface:
*
* - `__unbound__` / `__unspecified__` — reserved IR sentinels on
*   every SQL target.
* - The PSL keyword `unbound` — reserved for the PSL late-binding
*   opt-in, which the TS builder has no surface for.
*
* Additionally enforces that each per-model `namespace` references an
* entry in the contract's declared `namespaces` list.
*
* A target whose `supportsNamespaces` is false rejects the per-model
* `namespace` field outright.
*/ function validatePerModelNamespaces(target, namespaces, models) {
    const declaredNamespaces = new Set(namespaces ?? []);
    for (const [modelKey, modelBuilder] of Object.entries(models)){
        const perModelNamespace = modelBuilder.stageOne.namespace;
        if (perModelNamespace === void 0) continue;
        if (target.supportsNamespaces === false) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.NAMESPACE_UNSUPPORTED", `defineContract: model "${modelKey}" sets \`namespace: "${perModelNamespace}"\` but the target is ${targetNameOf(target)}, which does not support namespaces (remove the per-model \`namespace\` field).`, {
            meta: {
                modelKey,
                namespace: perModelNamespace,
                targetId: target.targetId
            }
        });
        if (perModelNamespace === "__unbound__" || perModelNamespace === "__unspecified__") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.NAMESPACE_INVALID", `defineContract: model "${modelKey}" sets \`namespace: "${perModelNamespace}"\` but that name is a reserved IR sentinel and cannot appear in user code.`, {
            meta: {
                modelKey,
                namespace: perModelNamespace,
                reason: "reserved-ir-sentinel"
            }
        });
        if (perModelNamespace === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$ast$2d$CyvE6CR$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__UNBOUND_PSL_NAMESPACE_NAME$3e$__["UNBOUND_PSL_NAMESPACE_NAME"]) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.NAMESPACE_INVALID", `defineContract: model "${modelKey}" sets \`namespace: "${perModelNamespace}"\` but that name is reserved by ${targetNameOf(target)} for the late-binding opt-in (use \`namespace ${perModelNamespace} { … }\` in PSL instead — there is no equivalent surface in the TS builder today).`, {
            meta: {
                modelKey,
                namespace: perModelNamespace,
                reason: "reserved-psl-keyword",
                targetId: target.targetId
            }
        });
        if (!declaredNamespaces.has(perModelNamespace)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.NAMESPACE_UNKNOWN", `defineContract: model "${modelKey}" references namespace "${perModelNamespace}" but that name does not appear in the contract's declared \`namespaces\` list.${declaredNamespaces.size > 0 ? ` Declared namespaces: [${[
            ...declaredNamespaces
        ].map((name)=>`"${name}"`).join(", ")}].` : " The contract does not declare any namespaces; add `namespaces: [\"…\"]` to `defineContract` first."}`, {
            meta: {
                modelKey,
                namespace: perModelNamespace,
                declared: [
                    ...declaredNamespaces
                ]
            }
        });
    }
}
function validateExtensionPackRefs(target, extensions) {
    if (!extensions) return;
    for (const packRef of Object.values(extensions)){
        if (packRef.kind !== "extension") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.PACK_REF_INVALID", `defineContract only accepts extension pack refs in extensions. Received kind "${packRef.kind}".`, {
            meta: {
                packId: packRef.id,
                kind: packRef.kind
            }
        });
        if (packRef.familyId !== target.familyId) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.PACK_FAMILY_MISMATCH", `extension pack "${packRef.id}" targets family "${packRef.familyId}" but contract target family is "${target.familyId}".`, {
            meta: {
                packId: packRef.id,
                packFamilyId: packRef.familyId,
                contractFamilyId: target.familyId
            }
        });
        if (packRef.targetId && packRef.targetId !== target.targetId) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.PACK_TARGET_MISMATCH", `extension pack "${packRef.id}" targets "${packRef.targetId}" but contract target is "${target.targetId}".`, {
            meta: {
                packId: packRef.id,
                packTargetId: packRef.targetId,
                contractTargetId: target.targetId
            }
        });
    }
}
function buildContractFromDsl(definition) {
    validateTargetPackRef(definition.family, definition.target);
    validateExtensionPackRefs(definition.target, definition.extensions);
    validateNamespaceDeclarations(definition.target, definition.namespaces);
    validatePerModelNamespaces(definition.target, definition.namespaces, definition.models ?? {});
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(buildContractDefinition(definition), definition.codecLookup, definition.dataTypeLookup));
}
/** Implementation. */ function buildBoundContract(family, target, definition, factory) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(definition, "defineContract");
    const full = {
        ...definition,
        family,
        target
    };
    if (factory !== void 0) {
        const built = factory(createComposedAuthoringHelpers({
            family,
            target,
            extensions: definition.extensions,
            codecLookup: definition.codecLookup
        }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(built, "defineContract");
        const mergedEnums = {
            ...definition.enums ?? {},
            ...built.enums
        };
        const mergedEntities = [
            ...definition.entities ?? [],
            ...built.entities ?? []
        ];
        return buildContractFromDsl({
            ...full,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("databaseTypes", built.databaseTypes),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("models", built.models),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("enums", Object.keys(mergedEnums).length > 0 ? mergedEnums : void 0),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("entities", mergedEntities.length > 0 ? mergedEntities : void 0)
        });
    }
    return buildContractFromDsl(full);
}
function defineContract(definition, factory) {
    if (!isContractInput(definition)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("CONTRACT.ARGUMENT_INVALID", "defineContract expects a contract definition object. Define your contract with defineContract({ family, target, models, ... }).");
    if (factory !== void 0) return buildBoundContract(definition.family, definition.target, definition, factory);
    return buildBoundContract(definition.family, definition.target, definition);
}
/** The database's current time, the same default PSL writes as `@default(now())`. */ function now() {
    return {
        kind: "function",
        expression: "now()"
    };
}
/** A database-assigned sequence value, the same default PSL writes as `@default(autoincrement())`. */ function autoincrement() {
    return {
        kind: "function",
        expression: "autoincrement()"
    };
}
/** Names the unbound namespace in a TypeScript contract: storage the connection locates, such as an extension found through the Postgres `search_path`. Only the Postgres `extension()` builder accepts it today, as `extension(name, { namespace: unbound })`. */ const unbound = Symbol.for("prisma.namespace.unbound");
;
}),
];

//# sourceMappingURL=1676_%40prisma_orm-family-sql_dist_contract-builder-m9XW9MgR_mjs_02spbwv_qt4yx._.js.map