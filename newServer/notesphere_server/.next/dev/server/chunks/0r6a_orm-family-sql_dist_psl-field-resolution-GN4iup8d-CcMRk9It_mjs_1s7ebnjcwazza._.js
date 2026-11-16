module.exports = [
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/psl-field-resolution-GN4iup8d-CcMRk9It.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>modelSpecContext,
    "a",
    ()=>describeUnsupportedSqlAttribute,
    "b",
    ()=>sqlAttributeSpecs,
    "c",
    ()=>instantiateFieldTypeConstructor,
    "d",
    ()=>interpretModelAttribute,
    "f",
    ()=>lowerEnumDefault,
    "g",
    ()=>modelCoordinateKey,
    "h",
    ()=>modelAttributeSpecsFrom,
    "i",
    ()=>defaultFunctionCall,
    "l",
    ()=>instantiatePslTypeConstructor,
    "m",
    ()=>lowerTypeGenerators,
    "n",
    ()=>collectResolvedFields,
    "o",
    ()=>fieldSpecContext,
    "p",
    ()=>lowerTypeDefault,
    "r",
    ()=>contractError,
    "s",
    ()=>getAuthoringEntity,
    "t",
    ()=>PSL_CHECK_ON_STI_VARIANT,
    "u",
    ()=>interpretFieldAttribute,
    "v",
    ()=>readDataTypeDefault,
    "y",
    ()=>resolveFieldTypeDescriptor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/sql-data-type-LVBldu1a-Bq203xWX.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/sql-expression-CKgKznXS.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$qcQteqs2$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/validators-qcQteqs2.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/derived-checks-zjkmqsa_-D7VKKK_q.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$psl$2d$attribute$2d$parsing$2d$DrRPFOVh$2d$U_SqMtcb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/psl-attribute-parsing-DrRPFOVh-U_SqMtcb.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-route] (ecmascript) <export o as structuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__admittedForms$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/authoring-DnYn5EZT.mjs [app-route] (ecmascript) <export t as admittedForms>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__castTypedValue$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/authoring-DnYn5EZT.mjs [app-route] (ecmascript) <export o as castTypedValue>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__describeExpected$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/authoring-DnYn5EZT.mjs [app-route] (ecmascript) <export l as describeExpected>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__describeRefusal$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/authoring-DnYn5EZT.mjs [app-route] (ecmascript) <export u as describeRefusal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__describeRefusedValueType$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/authoring-DnYn5EZT.mjs [app-route] (ecmascript) <export d as describeRefusedValueType>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__exactRewrite$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/authoring-DnYn5EZT.mjs [app-route] (ecmascript) <export _ as exactRewrite>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__S__as__instantiateAuthoringTypeAlias$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export S as instantiateAuthoringTypeAlias>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__instantiateAuthoringTypeConstructor$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export w as instantiateAuthoringTypeConstructor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__D__as__isAuthoringEntityTypeDescriptor$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export D as isAuthoringEntityTypeDescriptor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__S__as__readWrittenValue$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/authoring-DnYn5EZT.mjs [app-route] (ecmascript) <export S as readWrittenValue>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__T__as__tagForm$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/authoring-DnYn5EZT.mjs [app-route] (ecmascript) <export T as tagForm>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__Q__as__validateAuthoringHelperArguments$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export Q as validateAuthoringHelperArguments>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__et__as__validateAuthoringTypeParams$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export et as validateAuthoringTypeParams>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/assertions-Dw1lZz_Q.mjs [app-route] (ecmascript) <export n as invariant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$codec$2d$qqMjZrmn$2d$Cok8elAo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__codecForRef$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/resolve-codec-qqMjZrmn-Cok8elAo.mjs [app-route] (ecmascript) <export r as codecForRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__dataTypeParams$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export d as dataTypeParams>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$descriptor$2d$CPSGZunM$2d$DxrbRHX1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__readContractValue$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/codec-descriptor-CPSGZunM-DxrbRHX1.mjs [app-route] (ecmascript) <export o as readContractValue>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export t as InternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__isInternalError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export r as isInternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$expressions$2d$CMQzbnHk$2d$DUoL8DKO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__FunctionCallAst$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/expressions-CMQzbnHk-DUoL8DKO.mjs [app-route] (ecmascript) <export i as FunctionCallAst>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$result$2d$8OXF26MN$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__notOk$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/result-8OXF26MN.mjs [app-route] (ecmascript) <export n as notOk>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$result$2d$8OXF26MN$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__ok$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/result-8OXF26MN.mjs [app-route] (ecmascript) <export r as ok>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__describeTaggedLiteralFailure$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export _ as describeTaggedLiteralFailure>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/psl-parser.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__contributedTypeCodecId$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/type-constructor-calls-Bfg5ojed-DwjW6zNQ.mjs [app-route] (ecmascript) <export s as contributedTypeCodecId>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__diagnosticSource$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/type-constructor-calls-Bfg5ojed-DwjW6zNQ.mjs [app-route] (ecmascript) <export d as diagnosticSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__isContributedTypeChoice$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/type-constructor-calls-Bfg5ojed-DwjW6zNQ.mjs [app-route] (ecmascript) <export f as isContributedTypeChoice>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__g__as__nodePslSpan$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/type-constructor-calls-Bfg5ojed-DwjW6zNQ.mjs [app-route] (ecmascript) <export g as nodePslSpan>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__typeAttributeSpecContextOfField$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/type-constructor-calls-Bfg5ojed-DwjW6zNQ.mjs [app-route] (ecmascript) <export C as typeAttributeSpecContextOfField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__typeAttributeSubjectLabel$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/type-constructor-calls-Bfg5ojed-DwjW6zNQ.mjs [app-route] (ecmascript) <export w as typeAttributeSubjectLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser_$5f$interpret$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/psl-parser__interpret.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__isBareTypeConstructor$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/type-constructor-calls-Bfg5ojed-DwjW6zNQ.mjs [app-route] (ecmascript) <export t as isBareTypeConstructor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__mapPslHelperArgs$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/type-constructor-calls-Bfg5ojed-DwjW6zNQ.mjs [app-route] (ecmascript) <export h as mapPslHelperArgs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__reportTypeConstructorNotCalled$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/type-constructor-calls-Bfg5ojed-DwjW6zNQ.mjs [app-route] (ecmascript) <export n as reportTypeConstructorNotCalled>");
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
//#region ../../../2-sql-family/2-authoring/contract-psl/dist/psl-field-resolution-GN4iup8d.mjs
function contractError(code, message, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])(code, message, options);
}
/** A written value the column's type, under the column's parameters, or the column's codec refuses. */ const PSL_INVALID_DEFAULT_LITERAL = "PSL_INVALID_DEFAULT_LITERAL";
/** A written value whose data type the receiving type neither is nor casts from. */ const PSL_VALUE_TYPE_INCOMPATIBLE = "PSL_VALUE_TYPE_INCOMPATIBLE";
/** A single value written as the default of a column that holds a list. */ const PSL_DEFAULT_LIST_EXPECTED = "PSL_DEFAULT_LIST_EXPECTED";
function messageOf(error) {
    return error instanceof Error ? error.message : String(error);
}
function refused(refusal, suggestedTypes) {
    return {
        ok: false,
        refusal,
        suggestedTypes
    };
}
function readOneValue(dataTypes, written, elementIndex, suggestedTypes) {
    const read = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__S__as__readWrittenValue$3e$__["readWrittenValue"])(dataTypes, written);
    return read.ok ? {
        ok: true,
        typed: read.value
    } : refused({
        ...read.failure,
        elementIndex
    }, suggestedTypes);
}
/** The column's `typeParams` as the codec reference carries them, so `vector(3)` checks its length. */ function codecRefTypeParams(typeParams) {
    return typeParams === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(typeParams);
}
/**
* The column's codec descriptor, and `read`, which makes a value in its stored JSON form a value of the column's type under the column's parameters, and checks it with the column's codec, built with those parameters.
*/ function storedValueReader(input) {
    const descriptor = input.lookups.codecLookup.descriptorFor(input.column.codecId);
    const codec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$codec$2d$qqMjZrmn$2d$Cok8elAo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__codecForRef$3e$__["codecForRef"])(input.lookups.codecLookup, {
        codecId: input.column.codecId,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("typeParams", codecRefTypeParams(input.column.typeParams))
    });
    if (codec === void 0 || descriptor === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`Field "${input.fieldPath}": no codec descriptor is registered for "${input.column.codecId}", but the column was resolved from one.`);
    const suggestedTypes = [
        descriptor.dataType
    ];
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__dataTypeParams$3e$__["dataTypeParams"])(codec.dataType, input.column.typeParams);
    const read = (written, elementIndex)=>{
        let value;
        try {
            value = codec.dataType.valueFrom(written, params);
        } catch (error) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__isInternalError$3e$__["isInternalError"])(error)) throw error;
            return {
                ok: false,
                refusal: {
                    kind: "refused-by-column",
                    codecId: input.column.codecId,
                    message: messageOf(error),
                    elementIndex
                },
                suggestedTypes
            };
        }
        const stored = codec.dataType.toContract(value);
        try {
            codec.fromDataTypeValue(value);
        } catch (error) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__isInternalError$3e$__["isInternalError"])(error)) throw error;
            return {
                ok: false,
                refusal: {
                    kind: "refused-by-codec",
                    codecId: input.column.codecId,
                    message: messageOf(error),
                    elementIndex,
                    stored
                },
                suggestedTypes
            };
        }
        return {
            ok: true,
            value: stored
        };
    };
    return {
        descriptor,
        params,
        read
    };
}
/**
* Reads a value already in its stored JSON form, such as one member of a JSON document default, as a value of the column's type checked by the column's codec. Worded as {@link lowerDataTypeDefault} words the same refusals.
*/ function readStoredValue(input) {
    const reading = storedValueReader(input).read(input.value, void 0);
    return reading.ok ? reading : {
        ok: false,
        ...storedRefusalMessage(reading.refusal, `Field "${input.fieldPath}"`)
    };
}
/**
* Read one `@default(...)` value for a column, refusing in parts so each contract source words its
* own diagnostic. `isList` selects the check: a list column's elements are each read and cast
* against the element codec's data type, while a scalar column takes a written list only through
* its type's list cast — which is how `pgvector.Vector(3) @default([0.1, 0.2])` is read.
*/ function readDataTypeDefault(input) {
    const { descriptor, params, read: readStored } = storedValueReader({
        column: input.column,
        lookups: {
            codecLookup: input.codecLookup,
            dataTypeLookup: input.dataTypes.lookup
        },
        fieldPath: input.fieldPath
    });
    const columnType = descriptor.dataType;
    const suggestedTypes = [
        columnType
    ];
    const readOne = (written, elementIndex)=>{
        const read = readOneValue(input.dataTypes, written, elementIndex, suggestedTypes);
        if (!read.ok) return read;
        const cast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__castTypedValue$3e$__["castTypedValue"])(input.dataTypes, columnType, params, read.typed);
        if (!cast.ok) {
            const { failure } = cast;
            return failure.kind === "refused-by-type" ? refused({
                kind: "refused-by-column",
                codecId: input.column.codecId,
                message: failure.message,
                elementIndex
            }, suggestedTypes) : refused({
                ...failure,
                elementIndex
            }, suggestedTypes);
        }
        return readStored(cast.value.value, elementIndex);
    };
    if (input.written.kind !== "list") {
        if (input.isList) return refused({
            kind: "not-a-list",
            elementIndex: void 0
        }, suggestedTypes);
        return readOne(input.written, void 0);
    }
    if (input.isList) {
        const elements = [];
        let codecRefusal;
        for (const [elementIndex, written] of input.written.elements.entries()){
            if (written.kind === "list") return nestedList(elementIndex, suggestedTypes);
            const element = readOne(written, elementIndex);
            if (!element.ok && element.refusal.kind === "refused-by-codec") {
                codecRefusal ??= element.refusal;
                elements.push(element.refusal.stored);
                continue;
            }
            if (!element.ok) return codecRefusal === void 0 ? element : refused({
                kind: "refused-by-column",
                codecId: codecRefusal.codecId,
                message: codecRefusal.message,
                elementIndex: codecRefusal.elementIndex
            }, suggestedTypes);
            elements.push(element.value);
        }
        return codecRefusal === void 0 ? {
            ok: true,
            value: elements
        } : refused({
            ...codecRefusal,
            stored: elements
        }, suggestedTypes);
    }
    return readListIntoScalar({
        ...input,
        written: input.written,
        columnType,
        readStored
    });
}
function nestedList(elementIndex, suggestedTypes) {
    return refused({
        kind: "unreadable",
        message: "a list holds values, not other lists",
        elementIndex
    }, suggestedTypes);
}
/** A written list on a column that is not a list: the column's type takes it through its list cast. */ function readListIntoScalar(input) {
    const declaration = input.dataTypes.lookup.get(input.columnType);
    const listCast = declaration?.listCast;
    if (listCast === void 0) return refused({
        kind: "no-list-cast",
        receivingType: input.columnType,
        casts: Object.keys(declaration?.casts ?? {}),
        elementIndex: void 0
    }, [
        input.columnType
    ]);
    const elements = [];
    for (const [elementIndex, written] of input.written.elements.entries()){
        if (written.kind === "list") return nestedList(elementIndex, listCast.of);
        const read = readOneValue(input.dataTypes, written, elementIndex, listCast.of);
        if (!read.ok) return read;
        if (!listCast.of.includes(read.typed.type)) return refused({
            kind: "no-element-cast",
            receivingType: input.columnType,
            valueType: read.typed.type,
            elementTypes: listCast.of,
            elementIndex
        }, listCast.of);
        elements.push(read.typed.value);
    }
    try {
        return input.readStored(listCast.cast(elements), void 0);
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__isInternalError$3e$__["isInternalError"])(error)) throw error;
        return refused({
            kind: "unreadable",
            message: messageOf(error),
            elementIndex: void 0
        }, [
            input.columnType
        ]);
    }
}
/** Where a diagnostic is about, for a message: `Field "N.count" at element 2`. */ function location(subject, elementIndex) {
    return elementIndex === void 0 ? subject : `${subject} at element ${elementIndex + 1}`;
}
/**
* What may be written where every one of `types` is received, each form once: `a number`. A column
* whose type nothing writes still takes a `sql` literal, which `@default` stores as a SQL expression.
*/ function formsOf(dataTypes, types) {
    const forms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__admittedForms$3e$__["admittedForms"])(dataTypes, types);
    return forms.length === 0 ? [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__T__as__tagForm$3e$__["tagForm"])("sql")
    ] : forms;
}
/** The exact rewrite of the written value a `no-cast` refusal is about, before list elements are renumbered to the source list. */ function rewriteOf(refusal, written, dataTypes) {
    if (refusal.kind !== "no-cast") return void 0;
    const refused = refusal.elementIndex === void 0 || written.kind !== "list" ? written : written.elements[refusal.elementIndex];
    return refused === void 0 || refused.kind === "list" ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__exactRewrite$3e$__["exactRewrite"])(dataTypes, refusal, refused);
}
/**
* {@link readDataTypeDefault} worded as a PSL diagnostic's code, message and span: a cast-rule
* refusal at the written value, or the element of a written list it is about; a refusal only
* defaults have at the `@default` attribute.
*/ function lowerDataTypeDefault(input) {
    const read = readDataTypeDefault({
        ...input,
        fieldPath: input.subject
    });
    if (read.ok) return read;
    const refusal = atSourceElement(read.refusal, input.sourceElementIndexes);
    return {
        ok: false,
        ...refusalMessage(refusal, input.subject, input.dataTypes, guidanceFor(read, input.written, input.dataTypes)),
        span: refusalSpan(refusal, input.spans, input.subject)
    };
}
/** What a refusal of `written` tells the author to write instead. */ function guidanceFor(failure, written, dataTypes) {
    return {
        forms: formsOf(dataTypes, failure.suggestedTypes),
        rewrite: rewriteOf(failure.refusal, written, dataTypes)
    };
}
function atSourceElement(refusal, sourceElementIndexes) {
    if (refusal.elementIndex === void 0) return refusal;
    const elementIndex = sourceElementIndexes?.[refusal.elementIndex];
    return elementIndex === void 0 ? refusal : {
        ...refusal,
        elementIndex
    };
}
function codecRefusalMessage(refusal, subject) {
    return {
        code: PSL_INVALID_DEFAULT_LITERAL,
        message: `${location(subject, refusal.elementIndex)}: ${refusal.message}`
    };
}
function storedRefusalMessage(refusal, subject) {
    return codecRefusalMessage(refusal, subject);
}
/** A refusal worded as a PSL diagnostic's code and message; `guidance` says what to write instead. */ function refusalMessage(refusal, subject, dataTypes, guidance) {
    const where = location(subject, refusal.elementIndex);
    switch(refusal.kind){
        case "not-a-list":
            return {
                code: PSL_DEFAULT_LIST_EXPECTED,
                message: `${where}: this column holds a list, so its default is a list literal, as in [1, 2]`
            };
        case "refused-by-column":
        case "refused-by-codec":
            return codecRefusalMessage(refusal, subject);
        case "no-list-cast":
            return {
                code: PSL_VALUE_TYPE_INCOMPATIBLE,
                message: `${where}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__describeExpected$3e$__["describeExpected"])(guidance.forms)}; got a list`
            };
        case "no-element-cast":
            return {
                code: PSL_VALUE_TYPE_INCOMPATIBLE,
                message: `${where}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__describeRefusedValueType$3e$__["describeRefusedValueType"])(refusal, dataTypes, guidance)}`
            };
        default:
            {
                const { code, message } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__describeRefusal$3e$__["describeRefusal"])(refusal, dataTypes, guidance);
                return {
                    code,
                    message: `${where}: ${message}`
                };
            }
    }
}
function refusalSpan(refusal, spans, subject) {
    switch(refusal.kind){
        case "not-a-list":
        case "refused-by-column":
        case "refused-by-codec":
            return spans.attribute;
        default:
            return writtenValueSpan(spans, refusal.elementIndex, subject);
    }
}
function writtenValueSpan(spans, elementIndex, subject) {
    if (elementIndex === void 0) return spans.value;
    const span = spans.elements[elementIndex];
    if (span === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`${subject}: a refused @default list element ${elementIndex + 1} has no written span.`);
    return span;
}
function formatSupportedFunctionList(registry) {
    const signatures = Array.from(registry.entries()).sort(([a], [b])=>a.localeCompare(b)).flatMap(([functionName, entry])=>{
        const usageSignatures = entry.usageSignatures?.filter((signature)=>signature.length > 0);
        return usageSignatures && usageSignatures.length > 0 ? usageSignatures : [
            `${functionName}()`
        ];
    });
    return signatures.length > 0 ? signatures.join(", ") : "none";
}
/** The diagnostic message for a `dbgenerated(...)` call, which raw SQL tagged literals replaced. */ function removedDbgeneratedMessage(registry) {
    return `Default function "dbgenerated" was removed. Write the SQL as a tagged literal: @default(sql\`<expression>\`). Supported functions: ${formatSupportedFunctionList(registry)}.`;
}
function lowerDefaultFunctionWithRegistry(input) {
    const entry = input.registry.get(input.call.fn);
    if (entry) {
        const result = entry.lower({
            call: input.call,
            context: input.context
        });
        return result.ok ? result : {
            ...result,
            kind: "external"
        };
    }
    const supportedFunctionList = formatSupportedFunctionList(input.registry);
    return {
        ok: false,
        kind: "owned",
        diagnostic: {
            code: "PSL_UNKNOWN_DEFAULT_FUNCTION",
            message: `Default function "${input.call.fn}" is not supported in SQL PSL provider v1. Supported functions: ${supportedFunctionList}.`,
            ...input.source.at(input.call.span)
        }
    };
}
function buildModelAttributeCtx(input) {
    return {
        sources: input.sources,
        selfModel: input.selfModel,
        binder: input.binder,
        symbols: input.symbols
    };
}
function buildFieldAttributeCtx(input) {
    return {
        sources: input.sources,
        selfModel: input.selfModel,
        field: input.field,
        binder: input.binder,
        symbols: input.symbols
    };
}
function modelAttributeSpecsFrom(modelAttributesByName) {
    const result = Object.create(null);
    for (const [name, descriptor] of modelAttributesByName)result[name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(descriptor.spec);
    return result;
}
function interpretModelAttribute(input) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["interpretAttribute"])(input.node, input.spec, buildModelAttributeCtx({
        symbols: input.symbols,
        selfModel: input.model,
        sources: input.sources,
        binder: input.binder
    }));
    if (!result.ok) {
        input.diagnostics.push(...result.failure);
        return;
    }
    return result.value;
}
function interpretFieldAttribute(input) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["interpretAttribute"])(input.node, input.spec, buildFieldAttributeCtx({
        symbols: input.symbols,
        selfModel: input.model,
        field: input.field,
        sources: input.sources,
        binder: input.binder
    }));
    if (!result.ok) {
        input.diagnostics.push(...result.failure);
        return;
    }
    return result.value;
}
/** Interprets an attribute that reads only its type, such as `@default` on a field or a type alias, draining parse failures into `diagnostics`. */ function interpretTypeAttribute(input) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["interpretAttribute"])(input.node, input.spec, {
        sources: input.sources,
        symbols: input.symbols,
        binder: input.binder
    });
    if (!result.ok) {
        input.diagnostics.push(...result.failure);
        return;
    }
    return result.value;
}
function validateMappedName(value, ctx, attributeNode) {
    return value.name === "" ? [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "Mapped name must not be empty")
    ] : [];
}
const mapModelSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("map", {
    documentation: "Maps this model to a database table name.",
    positional: [
        {
            key: "name",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])(),
            documentation: "The nonempty database table name."
        }
    ],
    refine: validateMappedName
});
const mapFieldSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldAttribute"])("map", {
    documentation: "Maps this field to a database column name.",
    positional: [
        {
            key: "name",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])(),
            documentation: "The nonempty database column name."
        }
    ],
    refine: validateMappedName
});
function nullLiteral() {
    const nullIdentifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("null", {
        documentation: "A null list element or nullable scalar default."
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mapArg"])({
        kind: "null",
        label: "null",
        parse: (arg, ctx)=>{
            const result = nullIdentifier.parse(arg, ctx);
            return result.ok ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$result$2d$8OXF26MN$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__ok$3e$__["ok"])(null) : result;
        }
    }, (_null, arg, ctx)=>({
            kind: "null",
            span: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__g__as__nodePslSpan$3e$__["nodePslSpan"])(arg.syntax, ctx.sources)
        }));
}
/**
* A call to the registered default function `name`, with its signature built from the stack's data types when it needs them. Its binding diagnostics name it as a default function.
*/ function defaultFunctionCall(name, entry, dataTypes) {
    const signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(entry.signature);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["funcCall"])(name, typeof signature === "function" ? signature(dataTypes) : signature, {
        label: `Default function "${name}"`
    });
}
/** The data type of the column a field declares, when its type, or the named type it is declared with, is a constructor the stack knows. */ function receivingDataType(ctx) {
    const codecId = ctx.contributedType === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__contributedTypeCodecId$3e$__["contributedTypeCodecId"])(ctx.contributedType, ctx.dataTypes);
    return codecId === void 0 ? void 0 : ctx.dataTypes.dataTypeOfCodec(codecId);
}
/** Whether a value of `type` can be written for a column of `receiving`: it is that type, or the column's type casts from it. An unknown column takes every type. */ function receives(dataTypes, receiving, type) {
    if (receiving === void 0 || type === receiving) return true;
    const receivingType = dataTypes.lookup.get(receiving);
    if (receivingType === void 0) return true;
    return Object.hasOwn(receivingType.casts, type) || (receivingType.listCast?.of.some((of)=>of === type) ?? false);
}
function scalarDefaultArms(isList, receiving, dataTypes, defaultFunctionRegistry) {
    const tagArms = (admits)=>{
        const tagsByDocumentation = /* @__PURE__ */ new Map();
        for (const [key, entry] of Object.entries(dataTypes.entries)){
            if (entry.written.kind !== "tag" || !admits(key)) continue;
            const tags = tagsByDocumentation.get(entry.documentation);
            if (tags === void 0) tagsByDocumentation.set(entry.documentation, [
                entry.written.tag
            ]);
            else tags.push(entry.written.tag);
        }
        return [
            ...tagsByDocumentation
        ].map(([documentation, tags])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writtenScalar"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["taggedLiteral"])(tags, {
                documentation
            })));
    };
    const columnTags = ()=>tagArms((dataType)=>dataType === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"] || !isList && receives(dataTypes, receiving, dataType));
    const literal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oneOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writtenScalar"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writtenScalar"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numLiteral"])()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writtenScalar"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bool"])()), nullLiteral(), ...tagArms((dataType)=>dataType !== __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"] && receives(dataTypes, receiving, dataType)));
    const listArm = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writtenList"])(literal());
    const funcArms = [
        ...defaultFunctionRegistry.entries()
    ].map(([name, entry])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mapArg"])(defaultFunctionCall(name, entry, dataTypes), (call)=>({
                kind: "default-function",
                call
            })));
    return isList ? [
        listArm(),
        ...funcArms,
        ...columnTags()
    ] : [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writtenScalar"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writtenScalar"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numLiteral"])()),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writtenScalar"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bool"])()),
        nullLiteral(),
        ...funcArms,
        ...columnTags(),
        listArm()
    ];
}
/**
* The `@default` value arms, with a `dbgenerated(...)` call reported as removed before the arms
* are tried, so the author is told what replaced it instead of being shown the list of arms.
*/ function defaultValueArm(arms, registry, generatorFunctions, subject) {
    const value = arms.length === 1 && arms[0].kind === "list" ? arms[0] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oneOf"])(...arms);
    return {
        ...value,
        parse: (arg, ctx)=>{
            const callee = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$expressions$2d$CMQzbnHk$2d$DUoL8DKO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__FunctionCallAst$3e$__["FunctionCallAst"].cast(arg.syntax)?.path().join(".");
            if (callee === "dbgenerated") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$result$2d$8OXF26MN$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__notOk$3e$__["notOk"])([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, arg, removedDbgeneratedMessage(registry), "PSL_UNKNOWN_DEFAULT_FUNCTION")
            ]);
            if (callee !== void 0 && !registry.has(callee) && generatorFunctions.has(callee)) {
                const call = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nodeSourceText"])(arg, ctx);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$result$2d$8OXF26MN$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__notOk$3e$__["notOk"])([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, arg, `${subject}: ${call} is a value the client generates, and @default sets a database default only. Write @onCreate(${call}) instead.`, "PSL_GENERATOR_IN_DEFAULT")
                ]);
            }
            return value.parse(arg, ctx);
        }
    };
}
function noEnumMember() {
    return {
        kind: "rejecting",
        label: "enum member",
        message: "Enum declares no members",
        parse: (arg, ctx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$result$2d$8OXF26MN$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__notOk$3e$__["notOk"])([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, arg, "Enum declares no members")
            ])
    };
}
function enumMemberNames(ctx) {
    const resolution = ctx.typeResolution;
    if (resolution?.kind !== "block" || resolution.symbol.keyword !== "enum") return void 0;
    const block = resolution.symbol;
    const names = [];
    const seen = /* @__PURE__ */ new Set();
    for (const entry of block.entries){
        const key = entry.key()?.name();
        if (key === void 0 || seen.has(key)) continue;
        seen.add(key);
        names.push(key);
    }
    return names;
}
function enumDefaultArms(members, enumName, isList) {
    const [first, ...rest] = members;
    if (first === void 0) return [
        noEnumMember()
    ];
    const member = (name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mapArg"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])(name, {
            documentation: `The \`${name}\` member of enum \`${enumName}\`.`
        }), (parsed)=>({
                kind: "member",
                name: parsed
            }));
    if (isList) return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mapArg"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oneOf"])(member(first), ...rest.map(member), nullLiteral())), (elements)=>({
                kind: "member-list",
                elements
            }))
    ];
    return [
        member(first),
        ...rest.map(member)
    ];
}
/** The spec of `@default` on a field or a type alias, offering the values its type takes. */ function typeDefaultSpec(ctx) {
    const members = enumMemberNames(ctx);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["typeAttribute"])("default", {
        documentation: "Supplies a default value when this field is omitted from a mutation.",
        positional: [
            {
                key: "value",
                type: defaultValueArm(members === void 0 ? scalarDefaultArms(ctx.list, receivingDataType(ctx), ctx.dataTypes, ctx.defaultFunctionRegistry) : enumDefaultArms(members, ctx.typeName, ctx.list), ctx.defaultFunctionRegistry, ctx.generatorFunctions, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__typeAttributeSubjectLabel$3e$__["typeAttributeSubjectLabel"])(ctx.subject)),
                documentation: "A literal, enum member, or registered default function compatible with this field."
            }
        ]
    });
}
const idFieldSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldAttribute"])("id", {
    documentation: "Makes this field the primary key of the table.",
    named: {
        map: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The database primary-key constraint name."
        }
    }
});
const uniqueFieldSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldAttribute"])("unique", {
    documentation: "Requires values in this field to be unique.",
    named: {
        map: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The database unique-constraint name."
        }
    }
});
const idModelSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("id", {
    documentation: "Declares a compound primary key for this table.",
    positional: [
        {
            key: "fields",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldRef"])(), {
                allowEmpty: false,
                unique: true
            }),
            documentation: "The ordered, nonempty list of distinct primary-key fields."
        }
    ],
    named: {
        map: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The database primary-key constraint name."
        }
    }
});
const uniqueModelSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("unique", {
    documentation: "Requires the combination of these fields to be unique.",
    positional: [
        {
            key: "fields",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldRef"])(), {
                allowEmpty: false,
                unique: true
            }),
            documentation: "The ordered, nonempty list of distinct fields in the unique constraint."
        }
    ],
    named: {
        map: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The database unique-constraint name."
        }
    }
});
const PSL_INDEX_FIELDS_XOR_EXPRESSION = "PSL_INDEX_FIELDS_XOR_EXPRESSION";
const PSL_INDEX_EXPRESSION_REQUIRES_NAME = "PSL_INDEX_EXPRESSION_REQUIRES_NAME";
const PSL_INDEX_NAME_XOR_MAP = "PSL_INDEX_NAME_XOR_MAP";
function indexModelSpec(ctx) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("index", {
        documentation: "Declares a database index over fields or a SQL expression, optionally restricted by a predicate.",
        positional: [
            {
                key: "fields",
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldRef"])(), {
                    allowEmpty: false,
                    unique: true
                })),
                documentation: "The ordered list of distinct indexed fields. Mutually exclusive with `expression`."
            }
        ],
        named: {
            expression: {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["dataTypeValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"], ctx.dataTypes)),
                documentation: "The SQL index expression. Requires `name` or `map` and cannot be combined with a fields list."
            },
            where: {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["dataTypeValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"], ctx.dataTypes)),
                documentation: "The SQL predicate restricting rows included in a partial index."
            },
            unique: {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bool"])()),
                documentation: "Whether the index enforces uniqueness."
            },
            name: {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
                documentation: "The index name. Mutually exclusive with `map`."
            },
            map: {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
                documentation: "The database index name. Mutually exclusive with `name`."
            },
            type: {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
                documentation: "The target-specific index access method."
            },
            options: {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])())),
                documentation: "Target-specific index options. Requires an explicit `type`."
            }
        },
        refine: (value, ctx, attributeNode)=>{
            const diagnostics = [];
            if (value.fields === void 0 === (value.expression === void 0)) diagnostics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@@index` requires exactly one of a fields list or an `expression` argument", PSL_INDEX_FIELDS_XOR_EXPRESSION));
            if (value.expression !== void 0 && value.name === void 0 && value.map === void 0) diagnostics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@@index` with an `expression` argument requires a `name` or `map` argument (a default name cannot be derived from an expression)", PSL_INDEX_EXPRESSION_REQUIRES_NAME));
            if (value.name !== void 0 && value.map !== void 0) diagnostics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@@index` takes at most one of `name` and `map`", PSL_INDEX_NAME_XOR_MAP));
            if (value.options !== void 0 && value.type === void 0) diagnostics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@@index` options argument requires a type argument"));
            return diagnostics;
        }
    });
}
const PSL_CHECK_REQUIRES_NAME_OR_MAP = "PSL_CHECK_REQUIRES_NAME_OR_MAP";
const PSL_CHECK_NAME_XOR_MAP = "PSL_CHECK_NAME_XOR_MAP";
const PSL_CHECK_EXPRESSION_EMPTY = "PSL_CHECK_EXPRESSION_EMPTY";
/**
* A single-table-inheritance variant (`@@base` with no own `@@map`) shares
* its base model's storage table and has no table of its own to declare a
* check on — raised from {@link interpretPslDocumentToSqlContract}, not from
* this spec's own `refine`, because the rule needs the model's `@@base`
* declaration, which a single attribute's `refine` cannot see.
*/ const PSL_CHECK_ON_STI_VARIANT = "PSL_CHECK_ON_STI_VARIANT";
function checkModelSpec(ctx) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("check", {
        documentation: "Declares a named database CHECK constraint on this table.",
        named: {
            expression: {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["dataTypeValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"], ctx.dataTypes),
                documentation: "The nonempty SQL predicate checked for each row."
            },
            name: {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
                documentation: "The constraint name. Exactly one of `name` and `map` is required."
            },
            map: {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
                documentation: "The database constraint name. Exactly one of `name` and `map` is required."
            }
        },
        refine: (value, ctx, attributeNode)=>{
            const diagnostics = [];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["p"])(value.expression.value.value).trim().length === 0) diagnostics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@@check` expression must not be empty — an empty predicate is not a constraint", PSL_CHECK_EXPRESSION_EMPTY));
            if (value.name === void 0 && value.map === void 0) diagnostics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@@check` requires a `name` or `map` argument (a default name cannot be derived — a check has no column tuple to name itself after)", PSL_CHECK_REQUIRES_NAME_OR_MAP));
            if (value.name !== void 0 && value.map !== void 0) diagnostics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@@check` takes at most one of `name` and `map`", PSL_CHECK_NAME_XOR_MAP));
            return diagnostics;
        }
    });
}
const controlModelSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("control", {
    documentation: "Sets how schema management treats this model’s storage.",
    positional: [
        {
            key: "policy",
            documentation: "The storage control policy: `managed`, `tolerated`, `external`, or `observed`.",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oneOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("managed", {
                documentation: "Verifies the declared shape strictly and allows migrations to create, alter, or drop the storage object."
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("tolerated", {
                documentation: "Verifies declared columns while allowing extra columns. Migrations may create missing storage, but never alter or drop existing storage."
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("external", {
                documentation: "Verifies declared storage without creating, altering, or dropping it."
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("observed", {
                documentation: "Reports storage differences as warnings rather than verification failures and never emits migration operations."
            }))
        }
    ]
});
const discriminatorModelSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("discriminator", {
    documentation: "Selects the field that identifies inheritance variants of this model.",
    positional: [
        {
            key: "field",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldRef"])(),
            documentation: "The discriminator field on this model."
        }
    ]
});
function baseModelSpec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("base", {
        documentation: "Declares this model as a variant of a base model.",
        positional: [
            {
                key: "base",
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["entityRef"])({
                    kind: "model"
                }),
                documentation: "The base model to inherit from."
            },
            {
                key: "value",
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writtenScalar"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
                documentation: "The discriminator value identifying this variant, a value of the discriminator column's type."
            }
        ]
    });
}
function relationAttributeSpan(ctx) {
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$psl$2d$attribute$2d$parsing$2d$DrRPFOVh$2d$U_SqMtcb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["n"])(ctx.field.attributes, "relation")?.node;
    if (node !== void 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__g__as__nodePslSpan$3e$__["nodePslSpan"])(node.syntax, ctx.sources);
    return ctx.field.span;
}
function relationInvariants(parsed, ctx) {
    if (parsed.fields !== void 0 !== (parsed.references !== void 0)) return [
        {
            code: "PSL_INVALID_ATTRIBUTE_SYNTAX",
            message: `Relation field "${ctx.selfModel.name}.${ctx.field.name}" requires fields and references arguments`,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__diagnosticSource$3e$__["diagnosticSource"])(ctx.sources, ctx.field.node.syntax).at(relationAttributeSpan(ctx))
        }
    ];
    return [];
}
const referentialActionArgument = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oneOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("NoAction", {
        documentation: "Rejects a change that would violate the foreign key when the constraint is checked; checking may be deferred when supported and configured."
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("Restrict", {
        documentation: "Rejects deleting or updating a referenced row while referencing rows remain, without deferring the check."
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("Cascade", {
        documentation: "Propagates deletion or key updates of a referenced row to its referencing rows."
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("SetNull", {
        documentation: "Sets referencing foreign-key fields to null when the referenced row is deleted or its key changes. The fields must allow null."
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("SetDefault", {
        documentation: "Sets referencing foreign-key fields to their defaults when the referenced row is deleted or its key changes. The resulting values must satisfy the foreign key."
    }));
const relationFieldSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldAttribute"])("relation", {
    documentation: "Defines the relation name, foreign-key fields, and referential actions for this relation.",
    positional: [
        {
            key: "name",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The relation name used to pair both sides. May also be supplied by name."
        }
    ],
    named: {
        name: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The relation name used to pair both sides. Cannot also be supplied positionally."
        },
        fields: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldRef"])(), {
                allowEmpty: false,
                unique: true
            })),
            documentation: "The ordered local foreign-key fields. Must be supplied together with `references`."
        },
        references: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["referencedFieldRef"])(), {
                allowEmpty: false,
                unique: true
            })),
            documentation: "The corresponding fields on the referenced model. Must be supplied together with `fields`."
        },
        map: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The database foreign-key constraint name."
        },
        onDelete: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])(referentialActionArgument()),
            documentation: "The referential action when a referenced row is deleted."
        },
        onUpdate: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])(referentialActionArgument()),
            documentation: "The referential action when a referenced key is updated."
        },
        index: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oneOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bool"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])())),
            documentation: "Whether to create an index for the relation’s foreign-key fields (`false` for none), or the name of an index, unique constraint or primary key on this model to use instead. The name is the `name` or `map` it was given, or an index’s stored name, and its first columns must be the foreign-key fields in order."
        }
    },
    refine: relationInvariants
});
function modelSpecContext(input) {
    return {
        symbols: input.symbols,
        model: input.model,
        defaultFunctionRegistry: input.defaultFunctionRegistry,
        generatorFunctions: input.generatorFunctions,
        dataTypes: input.dataTypes
    };
}
function fieldSpecContext(input) {
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["typeReferenceNode"])(input.field);
    const typeResolution = node === void 0 ? void 0 : input.binder.symbolForNode(node);
    return {
        symbols: input.symbols,
        model: input.model,
        field: input.field,
        typeResolution,
        contributedType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["contributedTypeOf"])(typeResolution, input.binder, input.field.typeConstructor),
        defaultFunctionRegistry: input.defaultFunctionRegistry,
        generatorFunctions: input.generatorFunctions,
        dataTypes: input.dataTypes
    };
}
/** Every entry is a factory over the spec context, whether or not its spec reads it. ADR 249. */ const sqlAttributeSpecs = {
    model: {
        map: (_ctx)=>mapModelSpec,
        id: (_ctx)=>idModelSpec,
        unique: (_ctx)=>uniqueModelSpec,
        index: indexModelSpec,
        check: checkModelSpec,
        control: (_ctx)=>controlModelSpec,
        discriminator: (_ctx)=>discriminatorModelSpec,
        base: (_ctx)=>baseModelSpec()
    },
    field: {
        map: (_ctx)=>mapFieldSpec,
        id: (_ctx)=>idFieldSpec,
        unique: (_ctx)=>uniqueFieldSpec,
        relation: (_ctx)=>relationFieldSpec,
        default: (ctx)=>typeDefaultSpec((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__typeAttributeSpecContextOfField$3e$__["typeAttributeSpecContextOfField"])(ctx)),
        onCreate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generatorAttributeSpec"])("onCreate"),
        onUpdate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generatorAttributeSpec"])("onUpdate")
    }
};
/**
* The value-object column's default as the document it holds, and in the form the column stores. A
* column may store the document's JSON text, as `sqlite/json@1` does, so its codec reads the stored
* value into the document the composite type describes. A list literal on a list of value objects
* is read element by element; the column stores the list's document in its own form.
*/ function valueObjectDefaultDocument(input) {
    const codec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$codec$2d$qqMjZrmn$2d$Cok8elAo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__codecForRef$3e$__["codecForRef"])(input.codecLookup, {
        codecId: input.codecId
    });
    if (codec === void 0) return {
        document: input.stored,
        stored: input.stored
    };
    if (input.elementwise && Array.isArray(input.stored)) {
        const document = input.stored.map((element)=>readDocument(codec, element));
        return {
            document,
            stored: codec.dataType.toContract(codec.toDataTypeValue(document))
        };
    }
    return {
        document: readDocument(codec, input.stored),
        stored: input.stored
    };
}
/** The column's codec has already read `stored` while the default was lowered, so it reads again. */ function readDocument(codec, stored) {
    if (stored === null) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$descriptor$2d$CPSGZunM$2d$DxrbRHX1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__readContractValue$3e$__["readContractValue"])(codec, stored, void 0));
}
/** Each way the default does not match the composite type. */ function valueObjectDefaultMismatches(input) {
    const mismatches = [];
    const shape = (path, message)=>mismatches.push({
            code: PSL_VALUE_TYPE_INCOMPATIBLE,
            message: `Field "${path}": ${message}`
        });
    const checkObject = (value, valueObjectName, path)=>{
        const valueObject = input.types.nodes.get(valueObjectName);
        const declared = input.types.declaredMembers.get(valueObjectName);
        if (valueObject === void 0 || declared === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`Field "${path}" is typed by the value object "${valueObjectName}", which the contract does not declare.`);
        if (!isJsonObject(value)) {
            shape(path, `a value of "${valueObjectName}" is a JSON object, not ${jsonKind(value)}`);
            return;
        }
        for (const key of Object.keys(value))if (!declared.has(key)) shape(path, `"${key}" is not a member of "${valueObjectName}"`);
        for (const member of valueObject.fields)checkMember(value[member.fieldName], member, `${path}.${member.fieldName}`);
    };
    const checkMember = (value, member, path)=>{
        if (value === void 0) {
            if (!member.nullable) shape(path, "the member is required, and the default has no value for it");
            return;
        }
        if (value === null && member.nullable) return;
        if (member.many === true) {
            if (!Array.isArray(value)) {
                shape(path, `the member is a list, so its value is a JSON array, not ${jsonKind(value)}`);
                return;
            }
            for (const [index, element] of value.entries()){
                if (element === null && member.elementNullable) continue;
                checkOne(element, member, `${path}[${index}]`, "an element of the member is not null");
            }
            return;
        }
        checkOne(value, member, path, "the member is not optional, so its value is not null");
    };
    const checkOne = (value, member, path, notNull)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"])(member)) {
            if (value === null) shape(path, notNull);
            else checkObject(value, member.valueObjectName, path);
            return;
        }
        const reading = readStoredValue({
            value,
            column: member.descriptor,
            lookups: input.lookups,
            fieldPath: path
        });
        if (!reading.ok) {
            if (value === null) shape(path, notNull);
            else mismatches.push({
                code: reading.code,
                message: reading.message
            });
            return;
        }
        const enumMismatch = enumValueMismatch(value, member, path, input.lookups.codecLookup);
        if (enumMismatch !== void 0) mismatches.push(enumMismatch);
    };
    if (input.value === null) {
        if (input.nullable) return mismatches;
        shape(input.fieldPath, input.list ? "the default of a list of value objects is a JSON array, not null" : "the default of a value object is a JSON object, not null");
        return mismatches;
    }
    if (input.list) {
        if (!Array.isArray(input.value)) {
            shape(input.fieldPath, `the default of a list of value objects is a JSON array, not ${jsonKind(input.value)}`);
            return mismatches;
        }
        for (const [index, element] of input.value.entries()){
            if (element === null && input.elementNullable) continue;
            checkObject(element, input.valueObjectName, `${input.fieldPath}[${index}]`);
        }
        return mismatches;
    }
    if (!isJsonObject(input.value)) {
        shape(input.fieldPath, `the default of a value object is a JSON object, not ${jsonKind(input.value)}`);
        return mismatches;
    }
    checkObject(input.value, input.valueObjectName, input.fieldPath);
    return mismatches;
}
/**
* A member typed by an enum takes only the enum's values, in the form its codec stores them, as a model field of that enum takes only its members.
*/ function enumValueMismatch(value, member, path, codecLookup) {
    const handle = member.enumTypeHandle;
    if (handle === void 0) return void 0;
    const codec = codecLookup.get(handle.codecId);
    const stored = handle.values.map((enumValue)=>codec === void 0 ? enumValue : codec.dataType.toContract(codec.toDataTypeValue(enumValue)));
    if (stored.some((storedValue)=>storedValue === value)) return void 0;
    return {
        code: PSL_INVALID_DEFAULT_LITERAL,
        message: `Field "${path}": Expected one of: ${stored.map((storedValue)=>JSON.stringify(storedValue)).join(" | ")}`
    };
}
function isJsonObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
function jsonKind(value) {
    if (value === null) return "null";
    if (Array.isArray(value)) return "a JSON array";
    if (typeof value === "object") return "a JSON object";
    return `a JSON ${typeof value}`;
}
/**
* Checks the type parameters a constructor produced against its codec's parameter schema,
* reporting a failure at the argument the failing parameter came from. Returns whether they passed.
*/ function checkPslTypeParams(input) {
    const helperPath = input.call.path.join(".");
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__et__as__validateAuthoringTypeParams$3e$__["validateAuthoringTypeParams"])(helperPath, input.template, input.typeParams, input.codecLookup.descriptorFor(input.template.codecId)?.paramsSchema);
        return true;
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        input.diagnostics.push({
            code: "PSL_INVALID_ATTRIBUTE_ARGUMENT",
            message: `${input.subject} ${message}`,
            ...input.source.at((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser_$5f$interpret$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["argumentSpan"])(input.call, input.args, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser_$5f$interpret$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["argumentIndexOf"])(error)))
        });
        return false;
    }
}
/**
* Walks `authoringContributions.entityTypes` segment-by-segment and returns
* the entity type descriptor at the resolved path, or `undefined` if no
* descriptor is registered.
*
* Used by the PSL interpreter to dispatch declarative entity-shaped
* declarations (`enum`, future `namespace { … }`, …) through the
* pack entity-type mechanism — the descriptor's `factory` (or
* `template`) materialises the IR-class instance without the
* interpreter knowing target-specific construction.
*/ function getAuthoringEntity(contributions, path) {
    let current = contributions?.entityTypes;
    for (const segment of path){
        if (typeof current !== "object" || current === null || "kind" in current) return;
        current = current[segment];
    }
    return current !== void 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__D__as__isAuthoringEntityTypeDescriptor$3e$__["isAuthoringEntityTypeDescriptor"])(current) ? current : void 0;
}
function instantiatePslTypeConstructor(input) {
    const helperPath = input.call.path.join(".");
    const args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__mapPslHelperArgs$3e$__["mapPslHelperArgs"])({
        args: input.call.args,
        descriptors: input.descriptor.args ?? [],
        helperLabel: `constructor "${helperPath}"`,
        span: input.call.span,
        diagnostics: input.diagnostics,
        source: input.source,
        entityLabel: input.entityLabel,
        dataTypes: input.dataTypes
    });
    if (!args) return;
    let output;
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__Q__as__validateAuthoringHelperArguments$3e$__["validateAuthoringHelperArguments"])(helperPath, input.descriptor.args, args);
        output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__instantiateAuthoringTypeConstructor$3e$__["instantiateAuthoringTypeConstructor"])(input.descriptor, args);
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__isInternalError$3e$__["isInternalError"])(error)) throw error;
        const message = error instanceof Error ? error.message : String(error);
        input.diagnostics.push({
            code: "PSL_INVALID_ATTRIBUTE_ARGUMENT",
            message: `${input.entityLabel} constructor "${helperPath}" ${message}`,
            ...input.source.at(input.call.span)
        });
        return;
    }
    return checkPslTypeParams({
        call: input.call,
        subject: `${input.entityLabel} constructor "${helperPath}"`,
        args: input.descriptor.args,
        template: input.descriptor.output,
        typeParams: output.typeParams,
        codecLookup: input.codecLookup,
        diagnostics: input.diagnostics,
        source: input.source
    }) ? output : void 0;
}
/**
* Structural check for a codec descriptor exposing the authoring-time
* `columnFromEntity` hook a type constructor's `entityRefArg` resolves
* through (e.g. the `pg/enum@1` codec descriptor). No casts.
*/ function hasColumnFromEntityHook(descriptor) {
    return "columnFromEntity" in descriptor && typeof descriptor.columnFromEntity === "function";
}
/**
* Resolves a type-constructor call whose descriptor declares an
* `entityRefArg` (e.g. `pg.enum(AalLevel)`): extracts the call's sole
* positional-argument ref string, resolves it against the field's
* namespace's already-lowered extension entities (keyed by the declared
* `entityRefArg.entityKind`, then block name), and converts the resolved
* entity to column params via the `columnFromEntity` authoring hook on the
* codec descriptor registered for `descriptor.output.codecId`. The
* `typeParams.typeName` `columnFromEntity` returns is bare — schema
* qualification (e.g. `auth.aal_level`) is a target concern, applied later
* when the target builds the field's namespace. A `valueSet` ref is
* attached when the same namespace derived a value-set under the same block
* name (the generic `deriveValueSet` mechanism), scoped to the field's own
* namespace.
*/ function resolveEntityRefTypeConstructorCall(input) {
    const entityRefArg = input.descriptor.entityRefArg;
    if (entityRefArg === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"]("resolveEntityRefTypeConstructorCall called with a descriptor that does not declare an entityRefArg. This is an interpreter bug.");
    const helperPath = input.call.path.join(".");
    const positionalArgs = input.call.args.filter((arg)=>arg.kind === "positional");
    const argument = positionalArgs[entityRefArg.index];
    const ref = argument?.value;
    const node = argument?.expression?.syntax;
    const resolution = node === void 0 ? void 0 : input.binder?.symbolForNode(node);
    if (input.call.args.length !== 1 || positionalArgs.length !== 1 || ref === void 0 || input.binder !== void 0 && resolution === void 0) {
        input.diagnostics.push({
            code: "PSL_INVALID_ATTRIBUTE_ARGUMENT",
            message: `${input.entityLabel} type constructor "${helperPath}" expects exactly one positional argument naming the referenced entity`,
            ...input.source.at(input.call.span)
        });
        return NOT_RESOLVED;
    }
    let entityName = ref;
    let entityNamespaceId = input.namespaceId;
    const reportUnknownRef = ()=>{
        input.diagnostics.push({
            code: "PSL_UNKNOWN_ENTITY_REF",
            message: `${input.entityLabel} type constructor "${helperPath}(${ref})" does not resolve — no entity named "${ref}" was found in namespace "${entityNamespaceId ?? "(unspecified)"}"`,
            ...input.source.at(input.call.span)
        });
        return NOT_RESOLVED;
    };
    if (resolution !== void 0) {
        if (resolution.kind === "unresolved") return NOT_RESOLVED;
        if (resolution.kind !== "block") return reportUnknownRef();
        entityName = resolution.symbol.name;
        entityNamespaceId = resolution.namespace.id;
    }
    const entities = entityNamespaceId === void 0 ? void 0 : input.namespaceExtensionEntities?.get(entityNamespaceId);
    const entity = entities?.[entityRefArg.entityKind]?.[entityName];
    if (entity === void 0) return reportUnknownRef();
    const codecId = input.descriptor.output.codecId;
    const codecDescriptor = input.codecLookup.descriptorFor(codecId);
    if (codecDescriptor === void 0 || !hasColumnFromEntityHook(codecDescriptor)) throw contractError("CONTRACT.PACK_CONTRIBUTION_INVALID", `Type constructor "${helperPath}" registers codecId "${codecId}" with an entity-ref argument, but its codec descriptor has no "columnFromEntity" authoring hook. This is a contributor bug in the pack registering "${helperPath}", not a user-schema error.`, {
        meta: {
            helperPath,
            codecId
        }
    });
    const resolved = codecDescriptor.columnFromEntity(entity);
    if (resolved === void 0) return reportUnknownRef();
    const valueSet = entities?.["valueSet"]?.[entityName] !== void 0 && entityNamespaceId !== void 0 ? {
        plane: "storage",
        entityKind: "valueSet",
        namespaceId: entityNamespaceId,
        entityName
    } : void 0;
    return {
        ok: true,
        descriptor: {
            codecId,
            ...resolved.typeParams !== void 0 ? {
                typeParams: resolved.typeParams
            } : {},
            ...valueSet !== void 0 ? {
                valueSet
            } : {}
        }
    };
}
const NOT_RESOLVED = {
    ok: false
};
function instantiateFieldTypeConstructor(input) {
    if (input.descriptor.entityRefArg !== void 0) return resolveEntityRefTypeConstructorCall({
        call: input.call,
        descriptor: input.descriptor,
        namespaceId: input.namespaceId,
        namespaceExtensionEntities: input.namespaceExtensionEntities,
        binder: input.binder,
        codecLookup: input.codecLookup,
        diagnostics: input.diagnostics,
        source: input.source,
        entityLabel: input.entityLabel
    });
    const instantiated = instantiatePslTypeConstructor({
        call: input.call,
        descriptor: input.descriptor,
        codecLookup: input.codecLookup,
        diagnostics: input.diagnostics,
        source: input.source,
        entityLabel: input.entityLabel,
        dataTypes: input.dataTypes
    });
    return instantiated === void 0 ? NOT_RESOLVED : {
        ok: true,
        descriptor: instantiated
    };
}
function resolvedKindLabel(resolution) {
    switch(resolution.kind){
        case "compositeType":
            return "composite type";
        case "namedType":
            return "type alias";
        case "block":
            return resolution.symbol.keyword;
        case "crossSpace":
            return "type of another contract space";
        default:
            return resolution.kind;
    }
}
function resolveFieldTypeDescriptor(input) {
    const { field, resolution, entityLabel, diagnostics } = input;
    if (field.malformedType || resolution === void 0) return NOT_RESOLVED;
    const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__diagnosticSource$3e$__["diagnosticSource"])(input.sources, field.node.syntax);
    const unsupported = (message)=>{
        diagnostics.push({
            code: "PSL_UNSUPPORTED_FIELD_TYPE",
            message,
            ...source.at(field.span)
        });
        return NOT_RESOLVED;
    };
    const call = field.typeConstructor;
    switch(resolution.kind){
        case "unresolved":
        case "namespace":
        case "contributedNamespace":
        case "mixin":
            return NOT_RESOLVED;
        case "contributedType":
            {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__isContributedTypeChoice$3e$__["isContributedTypeChoice"])(resolution.symbol)) {
                    const instantiated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser_$5f$interpret$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["instantiatePslTypeChoice"])({
                        symbol: resolution.symbol,
                        call,
                        span: field.span,
                        codecLookup: input.codecLookup,
                        diagnostics,
                        source,
                        entityLabel,
                        dataTypes: input.dataTypes
                    });
                    return instantiated === void 0 ? NOT_RESOLVED : {
                        ok: true,
                        descriptor: instantiated
                    };
                }
                const { descriptor, path } = resolution.symbol;
                const written = path.join(".");
                if (descriptor.kind === "typeAlias") {
                    if (call !== void 0) {
                        diagnostics.push({
                            code: "PSL_INVALID_ATTRIBUTE_ARGUMENT",
                            message: `${written} is a type alias and takes no arguments.`,
                            ...source.at(call.span)
                        });
                        return NOT_RESOLVED;
                    }
                    return {
                        ok: true,
                        descriptor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__S__as__instantiateAuthoringTypeAlias$3e$__["instantiateAuthoringTypeAlias"])(descriptor).type
                    };
                }
                input.warnDeprecated(field, written, descriptor);
                if (call !== void 0) return instantiateFieldTypeConstructor({
                    ...input,
                    call,
                    descriptor,
                    source
                });
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__isBareTypeConstructor$3e$__["isBareTypeConstructor"])(descriptor)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__reportTypeConstructorNotCalled$3e$__["reportTypeConstructorNotCalled"])({
                        entityLabel,
                        path: written,
                        descriptor,
                        source,
                        span: field.span,
                        diagnostics
                    });
                    return NOT_RESOLVED;
                }
                return {
                    ok: true,
                    descriptor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__instantiateAuthoringTypeConstructor$3e$__["instantiateAuthoringTypeConstructor"])(descriptor, [])
                };
            }
        case "field":
        case "attribute":
        case "parameter":
        case "function":
        case "constant":
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`The type of ${entityLabel} resolved to a ${resolution.kind}; a type reference never names one. This is a binder bug.`);
    }
    if (call !== void 0) return unsupported(`${entityLabel} calls "${call.path.join(".")}", which is a ${resolvedKindLabel(resolution)}, not a type constructor. Remove the arguments.`);
    switch(resolution.kind){
        case "namedType":
            {
                const alias = input.typeAliases.get(resolution.symbol);
                return alias === void 0 ? NOT_RESOLVED : {
                    ok: true,
                    descriptor: alias.descriptor
                };
            }
        case "block":
            {
                if (resolution.symbol.keyword !== "enum") return unsupported(`${entityLabel} is typed by the ${resolution.symbol.keyword} "${resolution.symbol.name}", which is not a column type.`);
                const descriptor = input.enumTypeDescriptors.get(resolution.symbol);
                return descriptor === void 0 ? NOT_RESOLVED : {
                    ok: true,
                    descriptor
                };
            }
        case "model":
        case "compositeType":
            return unsupported(`${entityLabel} is typed by the ${resolvedKindLabel(resolution)} "${resolution.symbol.name}", which is not a column type.`);
        case "crossSpace":
            return unsupported(`${entityLabel} type "${field.typeName}" is a type of contract space "${field.typeContractSpaceId}"; only a relation field can name a type of another contract space.`);
    }
}
const PSL_INVALID_DEFAULT_SQL = "PSL_INVALID_DEFAULT_SQL";
const TAGGED_LITERAL_CANONICALIZATION_CODES = {
    nul: "PSL_TAGGED_LITERAL_NUL",
    "too-large": "PSL_TAGGED_LITERAL_TOO_LARGE"
};
/**
* Refuses a `null` element in the list default of a field whose list elements are not nullable,
* at the first `null`. Returns whether it refused.
*/ function rejectStrictListNullDefault(input) {
    if (input.owner.elementOptional) return false;
    const nullElement = input.elements.find(isParsedNullLiteral);
    if (nullElement === void 0) return false;
    input.diagnostics.push({
        code: "PSL_INVALID_DEFAULT_APPLICABILITY",
        message: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__typeAttributeSubjectLabel$3e$__["typeAttributeSubjectLabel"])(input.owner.specContext.subject)} has strict list elements and cannot use null in a literal list default. Make the element type nullable or remove null from the default.`,
        ...input.source.at(nullElement.span)
    });
    return true;
}
function isParsedNullLiteral(element) {
    return element.kind === "null";
}
function fieldAttributeOwner(input) {
    const { field, model } = input;
    return {
        attributes: field.attributes,
        optional: field.optional,
        list: field.list,
        elementOptional: field.elementOptional,
        specContext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__typeAttributeSpecContextOfField$3e$__["typeAttributeSpecContextOfField"])(fieldSpecContext({
            symbols: input.symbolTable,
            model,
            field,
            binder: input.binder,
            defaultFunctionRegistry: input.defaultFunctionRegistry,
            generatorFunctions: input.generatorFunctions,
            dataTypes: input.dataTypes
        })),
        loweringNames: {
            modelName: model.name,
            fieldName: field.name
        }
    };
}
function lowerDefaultForField(input) {
    return lowerTypeDefault({
        ...input,
        owner: fieldAttributeOwner(input)
    });
}
/** The default a field's or type alias's `@default(...)` lowers to for its column. */ function lowerTypeDefault(input) {
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$psl$2d$attribute$2d$parsing$2d$DrRPFOVh$2d$U_SqMtcb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["n"])(input.owner.attributes, "default")?.node;
    if (node === void 0) return {};
    const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__diagnosticSource$3e$__["diagnosticSource"])(input.sources, node.syntax);
    const subject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__typeAttributeSubjectLabel$3e$__["typeAttributeSubjectLabel"])(input.owner.specContext.subject);
    const interpreted = interpretTypeAttribute({
        symbols: input.symbolTable,
        node,
        spec: typeDefaultSpec(input.owner.specContext),
        sources: input.sources,
        binder: input.binder,
        diagnostics: input.diagnostics
    });
    if (interpreted === void 0) return {};
    const value = interpreted.value;
    const attributeSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__g__as__nodePslSpan$3e$__["nodePslSpan"])(node.syntax, input.sources);
    if (value.kind === "null") {
        if (!input.owner.optional) {
            input.diagnostics.push({
                code: "PSL_INVALID_DEFAULT_APPLICABILITY",
                message: `${subject} is non-nullable and cannot use null as its literal default. Make the field nullable or use a non-null default.`,
                ...source.at()
            });
            return {};
        }
        return {
            defaultValue: {
                kind: "literal",
                value: null,
                inStoredForm: true
            }
        };
    }
    if (value.kind === "list" && rejectStrictListNullDefault({
        ...input,
        elements: value.elements,
        source
    })) return {};
    const readsListElements = (written)=>input.isListColumn || input.owner.list && written.kind === "list";
    const readAsLiteral = (written, spans, sourceElementIndexes)=>{
        const lowered = lowerDataTypeDefault({
            written,
            spans,
            sourceElementIndexes,
            isList: readsListElements(written),
            column: {
                codecId: input.columnDescriptor.codecId,
                typeParams: input.columnTypeParams
            },
            codecLookup: input.codecLookup,
            dataTypes: input.dataTypes,
            subject
        });
        if (!lowered.ok) {
            input.diagnostics.push({
                code: lowered.code,
                message: lowered.message,
                ...source.at(lowered.span)
            });
            return {};
        }
        let restoredValue = lowered.value;
        if (value.kind === "list" && value.elements.some(isParsedNullLiteral) && Array.isArray(lowered.value)) {
            let index = 0;
            const nonNullValues = lowered.value;
            restoredValue = value.elements.map((element)=>element.kind === "null" ? null : nonNullValues[index++] ?? null);
        }
        if (input.valueObjectDefault !== void 0) {
            const { document, stored } = valueObjectDefaultDocument({
                stored: restoredValue,
                elementwise: readsListElements(written) && !input.isListColumn,
                codecId: input.columnDescriptor.codecId,
                codecLookup: input.codecLookup
            });
            const mismatches = valueObjectDefaultMismatches({
                fieldPath: input.owner.specContext.subject.name,
                value: document,
                list: input.owner.list,
                nullable: input.owner.optional,
                elementNullable: input.owner.elementOptional,
                ...input.valueObjectDefault,
                lookups: {
                    codecLookup: input.codecLookup,
                    dataTypeLookup: input.dataTypes.lookup
                }
            });
            for (const { code, message } of mismatches)input.diagnostics.push({
                code,
                message,
                ...source.at()
            });
            if (mismatches.length > 0) return {};
            return {
                defaultValue: {
                    kind: "literal",
                    value: stored,
                    inStoredForm: true
                }
            };
        }
        return {
            defaultValue: {
                kind: "literal",
                value: restoredValue,
                inStoredForm: true
            }
        };
    };
    const canonicalized = (scalar)=>{
        if (scalar.written !== void 0) return scalar.written;
        input.diagnostics.push({
            code: TAGGED_LITERAL_CANONICALIZATION_CODES[scalar.reason],
            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__describeTaggedLiteralFailure$3e$__["describeTaggedLiteralFailure"])(scalar.reason),
            ...source.at(scalar.span)
        });
    };
    const sqlExpressionDefault = (text, span)=>{
        const reserved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$qcQteqs2$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])(text);
        const refusal = reserved === void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$qcQteqs2$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(text) : `Write @default(${reserved}()) instead of sql\`${reserved}()\`; ${reserved}() is a Prisma default function, not raw SQL.`;
        if (refusal !== void 0) {
            input.diagnostics.push({
                code: PSL_INVALID_DEFAULT_SQL,
                message: refusal,
                ...source.at(span)
            });
            return {};
        }
        return {
            defaultValue: {
                kind: "function",
                expression: text
            }
        };
    };
    if (value.kind === "member" || value.kind === "member-list") return {};
    if (input.columnDescriptor.valueSet !== void 0) {
        const memberName = (element)=>element.kind === "scalar" && element.written?.kind === "string" ? element.written.text : void 0;
        if (value.kind === "scalar") {
            const member = memberName(value);
            if (member !== void 0) return {
                defaultValue: {
                    kind: "literal",
                    value: member
                }
            };
        }
        if (value.kind === "list") {
            const members = value.elements.map((element)=>element.kind === "null" ? null : memberName(element));
            if (members.every((member)=>member !== void 0)) return {
                defaultValue: {
                    kind: "literal",
                    value: members
                }
            };
        }
    }
    if (value.kind === "list") {
        const elements = [];
        const sourceElementIndexes = [];
        for (const [sourceIndex, element] of value.elements.entries()){
            if (element.kind === "null") continue;
            const written = canonicalized(element);
            if (written === void 0) return {};
            elements.push(written);
            sourceElementIndexes.push(sourceIndex);
        }
        return readAsLiteral({
            kind: "list",
            elements
        }, {
            attribute: attributeSpan,
            value: value.span,
            elements: value.elements.map((element)=>element.span)
        }, sourceElementIndexes);
    }
    if (value.kind === "scalar") {
        const written = canonicalized(value);
        if (written === void 0) return {};
        const spans = {
            attribute: attributeSpan,
            value: value.span,
            elements: []
        };
        if (written.kind !== "tag") return readAsLiteral(written, spans);
        const read = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__S__as__readWrittenValue$3e$__["readWrittenValue"])(input.dataTypes, written);
        if (read.ok && read.value.type === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]) return sqlExpressionDefault((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["p"])(read.value.value), value.span);
        return readAsLiteral(written, spans);
    }
    const { call } = value;
    const context = {
        sourceId: input.sources.sourceFileFor(node.syntax).filename,
        ...input.owner.loweringNames,
        columnCodecId: input.columnDescriptor.codecId
    };
    const lowered = lowerDefaultFunctionWithRegistry({
        call,
        registry: input.defaultFunctionRegistry,
        context,
        source
    });
    if (!lowered.ok) {
        if (lowered.kind === "owned") input.diagnostics.push(lowered.diagnostic);
        else input.diagnostics.pushExternal(lowered.diagnostic);
        return {};
    }
    return {
        defaultValue: lowered.value.defaultValue
    };
}
const GENERATOR_PHASES = [
    "onCreate",
    "onUpdate"
];
/** The generators a field's `@onCreate(fn())` and `@onUpdate(fn())` resolve to for its column, or `undefined` for a field with neither. */ function lowerGeneratorAttributesForField(input) {
    return lowerTypeGenerators({
        ...input,
        owner: fieldAttributeOwner(input)
    });
}
/** The generators the `@onCreate(fn())` and `@onUpdate(fn())` of a field or type alias resolve to for its column, or `undefined` when it has neither. */ function lowerTypeGenerators(input) {
    const { subject } = input.owner.specContext;
    const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__typeAttributeSubjectLabel$3e$__["typeAttributeSubjectLabel"])(subject);
    const phases = {};
    for (const phase of GENERATOR_PHASES){
        const [attribute, duplicate] = input.owner.attributes.filter(({ name })=>name === phase);
        if (attribute === void 0) continue;
        if (duplicate !== void 0) {
            input.diagnostics.push({
                code: "PSL_DUPLICATE_ATTRIBUTE",
                message: `\`@${phase}\` declared more than once on ${subject.kind} "${subject.name}".`,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__diagnosticSource$3e$__["diagnosticSource"])(input.sources, duplicate.node.syntax).at(duplicate.span)
            });
            continue;
        }
        const node = attribute.node;
        const interpreted = interpretTypeAttribute({
            symbols: input.symbolTable,
            node,
            spec: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["typeGeneratorAttributeSpec"])(phase, input.owner.specContext),
            sources: input.sources,
            binder: input.binder,
            diagnostics: input.diagnostics
        });
        if (interpreted === void 0) continue;
        const call = interpreted.value;
        const resolution = input.generatorFunctions.resolve({
            name: call.fn,
            args: call.args
        }, {
            codecId: input.columnDescriptor.codecId,
            typeParams: input.columnTypeParams,
            length: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])(input.dataTypes, input.columnDescriptor.codecId, input.columnTypeParams)
        });
        if (resolution.ok) {
            phases[phase] = resolution.generator;
            continue;
        }
        input.diagnostics.push({
            code: "PSL_GENERATOR_NOT_APPLICABLE",
            message: resolution.reason === "refused" ? `${label}: ${resolution.message}` : `${label}: ${call.fn}() does not apply to codec "${input.columnDescriptor.codecId}".`,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__diagnosticSource$3e$__["diagnosticSource"])(input.sources, node.syntax).at(call.span)
        });
    }
    return phases.onCreate === void 0 && phases.onUpdate === void 0 ? void 0 : phases;
}
/** The default a field's or type alias's `@default(...)` names among the members of its enum. */ function lowerEnumDefault(input) {
    const { owner, enumHandle, diagnostics } = input;
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$psl$2d$attribute$2d$parsing$2d$DrRPFOVh$2d$U_SqMtcb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["n"])(owner.attributes, "default")?.node;
    if (node === void 0) return {};
    if (enumHandle.enumMembers.length === 0) return {};
    const interpreted = interpretTypeAttribute({
        node,
        spec: typeDefaultSpec(owner.specContext),
        symbols: input.symbolTable,
        sources: input.sources,
        binder: input.binder,
        diagnostics
    });
    if (interpreted === void 0) return {};
    const member = interpreted.value;
    if (member.kind === "member-list") {
        if (rejectStrictListNullDefault({
            owner,
            elements: member.elements,
            source: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__diagnosticSource$3e$__["diagnosticSource"])(input.sources, node.syntax),
            diagnostics
        })) return {};
        return {
            defaultValue: {
                kind: "literal",
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(member.elements.map((entry)=>entry.kind === "null" ? null : enumHandle.enumMembers.find((candidate)=>candidate.name === entry.name)?.value))
            }
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(member.kind === "member", "the enum @default grammar admits only member identifiers");
    const match = enumHandle.enumMembers.find((m)=>m.name === member.name);
    if (!match) return {};
    return {
        defaultValue: {
            kind: "literal",
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(match.value)
        }
    };
}
const MODEL_COORDINATE_SEPARATOR = "\0";
function modelCoordinateKey(namespaceId, modelName) {
    return `${namespaceId}${MODEL_COORDINATE_SEPARATOR}${modelName}`;
}
const GENERATOR_ATTRIBUTE_NAMES = [
    "onCreate",
    "onUpdate"
];
const REMOVED_ATTRIBUTE_RULES = /* @__PURE__ */ new Map([
    [
        "updatedAt",
        {
            hint: "Use @onCreate(now()) @onUpdate(now()), or type the field temporal.UpdatedAt.",
            suppressWhen: (field)=>field.attributes.some((attribute)=>attribute.name === "onUpdate")
        }
    ]
]);
{
    const overlap = [
        ...REMOVED_ATTRIBUTE_RULES.keys()
    ].filter((name)=>Object.hasOwn(sqlAttributeSpecs.field, name));
    if (overlap.length > 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`Registered SQL field attributes and REMOVED_ATTRIBUTE_RULES must not overlap. Names in both: ${overlap.join(", ")}`);
}function describeUnsupportedSqlAttribute(sources) {
    return ({ attribute, level, owner, field })=>{
        if (owner.kind === "compositeType") return void 0;
        if (owner.kind === "mixin" && owner.keyword === "type") return void 0;
        if (level === "model") {
            const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__diagnosticSource$3e$__["diagnosticSource"])(sources, owner.node.syntax);
            return {
                code: "PSL_UNSUPPORTED_MODEL_ATTRIBUTE",
                message: `${owner.kind === "mixin" ? "Mixin" : "Model"} "${owner.name}" uses unsupported attribute "@@${attribute.name}"`,
                ...source.at(attribute.span)
            };
        }
        if (field === void 0 || attribute.name.startsWith("db.")) return void 0;
        const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__diagnosticSource$3e$__["diagnosticSource"])(sources, field.node.syntax);
        const baseMessage = `Field "${owner.name}.${field.name}" uses unsupported attribute "@${attribute.name}"`;
        const removedRule = REMOVED_ATTRIBUTE_RULES.get(attribute.name);
        return {
            code: "PSL_UNSUPPORTED_FIELD_ATTRIBUTE",
            message: removedRule && !removedRule.suppressWhen(field) ? `${baseMessage}. ${removedRule.hint}` : baseMessage,
            ...source.at(attribute.span)
        };
    };
}
function extractFieldConstraintNames(input) {
    const idAttribute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$psl$2d$attribute$2d$parsing$2d$DrRPFOVh$2d$U_SqMtcb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["n"])(input.field.attributes, "id");
    const uniqueAttribute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$psl$2d$attribute$2d$parsing$2d$DrRPFOVh$2d$U_SqMtcb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["n"])(input.field.attributes, "unique");
    const idNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$psl$2d$attribute$2d$parsing$2d$DrRPFOVh$2d$U_SqMtcb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["n"])(input.field.attributes, "id")?.node;
    const idName = idNode === void 0 ? void 0 : interpretFieldAttribute({
        node: idNode,
        symbols: input.symbolTable,
        spec: sqlAttributeSpecs.field.id(input.specContext),
        model: input.model,
        field: input.field,
        sources: input.sources,
        binder: input.binder,
        diagnostics: input.diagnostics
    })?.map;
    const uniqueNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$psl$2d$attribute$2d$parsing$2d$DrRPFOVh$2d$U_SqMtcb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["n"])(input.field.attributes, "unique")?.node;
    return {
        idAttribute,
        uniqueAttribute,
        idName,
        uniqueName: uniqueNode === void 0 ? void 0 : interpretFieldAttribute({
            node: uniqueNode,
            symbols: input.symbolTable,
            spec: sqlAttributeSpecs.field.unique(input.specContext),
            model: input.model,
            field: input.field,
            sources: input.sources,
            binder: input.binder,
            diagnostics: input.diagnostics
        })?.map
    };
}
function collectResolvedFields(input) {
    const { model, symbolTable, enumTypeDescriptors, typeAliases, valueObjectTypes, authoringContributions, binder, targetId, defaultFunctionRegistry, generatorFunctions, dataTypes, diagnostics, droppedFields, sources, scalarColumnDescriptors, enumHandles, capabilities, namespaceId, namespaceExtensionEntities, codecLookup, warnDeprecated } = input;
    const resolvedFields = [];
    const valueObjectStorageTypeName = authoringContributions?.valueObjectStorageType;
    for (const field of Object.values(model.fields)){
        const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$type$2d$constructor$2d$calls$2d$Bfg5ojed$2d$DwjW6zNQ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__diagnosticSource$3e$__["diagnosticSource"])(sources, field.node.syntax);
        const fieldTypeReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["typeReferenceNode"])(field);
        const fieldTypeResolution = fieldTypeReference === void 0 ? void 0 : binder.symbolForNode(fieldTypeReference);
        const isModelField = fieldTypeResolution?.kind === "model";
        if (field.list && isModelField) continue;
        const relationAttribute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$psl$2d$attribute$2d$parsing$2d$DrRPFOVh$2d$U_SqMtcb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["n"])(field.attributes, "relation");
        if (isModelField && relationAttribute) continue;
        if (field.typeContractSpaceId !== void 0 && relationAttribute) continue;
        if (isModelField) continue;
        const valueObjectName = fieldTypeResolution?.kind === "compositeType" ? fieldTypeResolution.symbol.name : void 0;
        const isValueObjectField = valueObjectName !== void 0;
        const isListField = field.list;
        const isListColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])({
            list: isListField,
            typedByValueObject: isValueObjectField
        });
        let descriptor;
        const resolveInput = {
            field,
            resolution: fieldTypeResolution,
            enumTypeDescriptors,
            typeAliases,
            diagnostics,
            sources,
            entityLabel: `Field "${model.name}.${field.name}"`,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("namespaceId", namespaceId),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("namespaceExtensionEntities", namespaceExtensionEntities),
            binder,
            codecLookup,
            dataTypes,
            warnDeprecated
        };
        if (isValueObjectField) {
            if (valueObjectStorageTypeName === void 0) {
                diagnostics.push({
                    code: "PSL_UNSUPPORTED_FIELD_TYPE",
                    message: `Field "${model.name}.${field.name}" is typed by the composite type "${field.typeName}", but the adapter of the stack declares no storage type for value objects, so the field has no column to be stored in.`,
                    ...source.at(field.span)
                });
                continue;
            }
            descriptor = scalarColumnDescriptors.get(valueObjectStorageTypeName);
            if (descriptor === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`The stack declares "${valueObjectStorageTypeName}" as its value-object storage type, but it is not one of the stack's scalar types; the control stack checks this when it is assembled.`);
        } else if (isListField) {
            if (capabilities["sql"]?.["scalarList"] !== true) {
                diagnostics.push({
                    code: "PSL_SCALAR_LIST_UNSUPPORTED_TARGET",
                    message: `Field "${model.name}.${field.name}" is a scalar list, but target "${targetId}" does not support scalar lists (the adapter does not report the "scalarList" capability). Remove the list or author it against a target that supports scalar lists.`,
                    ...source.at(field.span)
                });
                continue;
            }
            const resolved = resolveFieldTypeDescriptor(resolveInput);
            if (!resolved.ok) {
                droppedFields.add(field);
                continue;
            }
            descriptor = resolved.descriptor;
        } else {
            const resolved = resolveFieldTypeDescriptor(resolveInput);
            if (!resolved.ok) {
                droppedFields.add(field);
                continue;
            }
            descriptor = resolved.descriptor;
        }
        if (!descriptor) continue;
        const typeAlias = typeAliases.ofResolution(fieldTypeResolution);
        if (typeAlias !== void 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["refuseRepeatedTypeAliasAttributes"])({
            field,
            fieldPath: `${model.name}.${field.name}`,
            alias: typeAlias.alias,
            sources,
            diagnostics
        });
        const defaultAttribute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$psl$2d$attribute$2d$parsing$2d$DrRPFOVh$2d$U_SqMtcb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["n"])(field.attributes, "default");
        const enumHandle = fieldTypeResolution?.kind === "block" ? enumHandles.get(fieldTypeResolution.symbol) : typeAlias?.enumHandle;
        const fieldLowering = {
            modelName: model.name,
            fieldName: field.name,
            field,
            model,
            symbolTable,
            sources: input.sources,
            binder: input.binder,
            defaultFunctionRegistry,
            generatorFunctions,
            dataTypes,
            diagnostics
        };
        const ownDefault = defaultAttribute ? enumHandle ? lowerEnumDefault({
            ...fieldLowering,
            owner: fieldAttributeOwner(fieldLowering),
            enumHandle
        }) : lowerDefaultForField({
            ...fieldLowering,
            columnDescriptor: descriptor,
            columnTypeParams: descriptor.typeParams,
            isListColumn,
            valueObjectDefault: valueObjectName === void 0 ? void 0 : {
                valueObjectName,
                types: valueObjectTypes
            },
            codecLookup
        }) : {};
        if (isListField && typeAlias?.defaultValue !== void 0) {
            diagnostics.push({
                code: "PSL_DEFAULT_LIST_EXPECTED",
                message: `Field "${model.name}.${field.name}" is a list, but its type alias "${typeAlias.name}" sets @default for a single value. Remove "[]" or the @default of the alias.`,
                ...source.at(field.span)
            });
            continue;
        }
        const loweredDefault = {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("defaultValue", typeAlias?.defaultValue ?? ownDefault.defaultValue)
        };
        const generatedValues = mergeExecutionDefaults(lowerGeneratorAttributesForField({
            ...fieldLowering,
            columnDescriptor: descriptor,
            columnTypeParams: descriptor.typeParams
        }), typeAlias?.executionDefaults);
        if (isListField && loweredDefault.defaultValue?.kind === "function" && loweredDefault.defaultValue.expression === "autoincrement()") {
            diagnostics.push({
                code: "PSL_LIST_AUTOINCREMENT_UNSUPPORTED",
                message: `Field "${model.name}.${field.name}" is a list and cannot use autoincrement(); it is a Prisma marker for a sequence-backed scalar column, not SQL.`,
                ...source.at(defaultAttribute?.span ?? field.span)
            });
            continue;
        }
        const ownGeneratorAttribute = GENERATOR_ATTRIBUTE_NAMES.map((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$psl$2d$attribute$2d$parsing$2d$DrRPFOVh$2d$U_SqMtcb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["n"])(field.attributes, name)).find((attribute)=>attribute !== void 0);
        if (isListField && generatedValues !== void 0) {
            const fieldLabel = `Field "${model.name}.${field.name}"`;
            const perElement = "Lists have no per-element generated values;";
            const call = ownGeneratorAttribute?.args.find((arg)=>arg.kind === "positional")?.value.trim() ?? "";
            diagnostics.push({
                code: "PSL_LIST_EXECUTION_DEFAULT_UNSUPPORTED",
                message: ownGeneratorAttribute === void 0 ? `${fieldLabel} is a list, and its type alias "${typeAlias?.name}" generates a value. ${perElement} remove "[]" or type the field without the alias.` : `${fieldLabel} is a list and cannot use @${ownGeneratorAttribute.name}(${call}). ${perElement} remove @${ownGeneratorAttribute.name}(...).`,
                ...source.at(ownGeneratorAttribute?.span ?? field.span)
            });
            continue;
        }
        const mappedColumnName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$psl$2d$attribute$2d$parsing$2d$DrRPFOVh$2d$U_SqMtcb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["c"])(field, input.physicalNames);
        const specContext = fieldSpecContext({
            symbols: symbolTable,
            model,
            field,
            binder,
            defaultFunctionRegistry,
            generatorFunctions,
            dataTypes
        });
        const { idAttribute, uniqueAttribute, idName, uniqueName } = extractFieldConstraintNames({
            symbolTable: input.symbolTable,
            model,
            field,
            specContext,
            sources: input.sources,
            binder: input.binder,
            diagnostics
        });
        let isIdField = Boolean(idAttribute);
        if (idAttribute && isListField) {
            diagnostics.push({
                code: "PSL_LIST_ID_UNSUPPORTED",
                message: `Field "${model.name}.${field.name}" is a list and cannot be a primary key. Remove @id; a list cannot be an identity column.`,
                ...source.at(idAttribute.span)
            });
            continue;
        }
        if (idAttribute && field.optional) {
            diagnostics.push({
                code: "PSL_INVALID_ATTRIBUTE_ARGUMENT",
                message: `Field "${model.name}.${field.name}" @id cannot be optional; primary key columns must be NOT NULL`,
                ...source.at(idAttribute.span)
            });
            isIdField = false;
        }
        resolvedFields.push({
            field,
            columnName: mappedColumnName,
            descriptor,
            nullable: field.optional,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("defaultValue", loweredDefault.defaultValue),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("executionDefaults", generatedValues),
            isId: isIdField,
            isUnique: Boolean(uniqueAttribute),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("idName", idName),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("uniqueName", uniqueName),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("many", isListField ? true : void 0),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("elementNullable", field.elementOptional ? true : void 0),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("valueObjectTypeName", valueObjectName),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("enumTypeHandle", enumHandle)
        });
    }
    return resolvedFields;
}
function mergeExecutionDefaults(fromAttributes, fromTypeAlias) {
    if (fromAttributes === void 0 || fromTypeAlias === void 0) return fromTypeAlias ?? fromAttributes;
    return {
        ...fromAttributes,
        ...fromTypeAlias
    };
}
;
}),
];

//# sourceMappingURL=0r6a_orm-family-sql_dist_psl-field-resolution-GN4iup8d-CcMRk9It_mjs_1s7ebnjcwazza._.js.map