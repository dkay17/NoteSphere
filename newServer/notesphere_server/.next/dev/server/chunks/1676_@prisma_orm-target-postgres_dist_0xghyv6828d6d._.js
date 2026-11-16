(()=>{"use strict";module.exports = [
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/adapter-BgEU4rZ4-CnjkLewL.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>createPostgresAdapterWithCodecRegistry,
    "r",
    ()=>postgresRawCodecInferer,
    "t",
    ()=>createPostgresAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/data-types-B47LbZ3z-DRVqjvQZ.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$registry$2d$7LHPD8C1$2d$BALCyEB$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-registry-7LHPD8C1-BALCyEB-.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$renderer$2d$DrSed$2d$6w$2d$Bt8Hx2pU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/sql-renderer-DrSed-6w-Bt8Hx2pU.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$contributions$2d$DpTbtESH$2d$CxVtT7cT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/contract-contributions-DpTbtESH-CxVtT7cT.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__isDdlNode$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/opaque-sql-Dset3kln-CtsPDTXn.mjs [app-route] (ecmascript) <export d as isDdlNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__assembleDataTypes$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export o as assembleDataTypes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__APP_SPACE_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/control-DzRwUDn-.mjs [app-route] (ecmascript) <export t as APP_SPACE_ID>");
;
;
;
;
;
;
;
//#region ../../../3-targets/postgres/2-adapter/dist/adapter-BgEU4rZ4.mjs
var PostgresAdapterImpl = class {
    familyId = "sql";
    targetId = "postgres";
    profile;
    codecRegistry;
    dataTypeLookup;
    constructor(codecRegistry, dataTypeLookup, declaredDataTypes, profileId){
        this.codecRegistry = codecRegistry;
        this.dataTypeLookup = dataTypeLookup;
        const controlAdapter = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$contributions$2d$DpTbtESH$2d$CxVtT7cT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"](codecRegistry, dataTypeLookup, declaredDataTypes);
        this.profile = Object.freeze({
            id: profileId ?? "postgres/default@1",
            target: "postgres",
            capabilities: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$contributions$2d$DpTbtESH$2d$CxVtT7cT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"],
            readMarker: (queryable)=>controlAdapter.readMarkerDiscriminated({
                    familyId: "sql",
                    targetId: "postgres",
                    query: async (sql, params)=>{
                        const rows = [];
                        for await (const row of queryable.query({
                            sql,
                            ...params === void 0 ? {} : {
                                params
                            }
                        }))rows.push(row);
                        return {
                            rows
                        };
                    },
                    close: async ()=>{}
                }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__APP_SPACE_ID$3e$__["APP_SPACE_ID"])
        });
    }
    lower(ast, context) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__isDdlNode$3e$__["isDdlNode"])(ast)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$renderer$2d$DrSed$2d$6w$2d$Bt8Hx2pU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("RUNTIME.DDL_UNSUPPORTED", "lower() does not lower DDL on the runtime adapter — DDL lowering is a control-plane concern handled by the control adapter.", {
            meta: {
                surface: "runtime-adapter"
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$renderer$2d$DrSed$2d$6w$2d$Bt8Hx2pU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(ast, context.contract, this.codecRegistry, this.dataTypeLookup, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$contributions$2d$DpTbtESH$2d$CxVtT7cT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]);
    }
};
const INT4_MIN = -2147483648;
const INT4_MAX = 2147483647;
/**
* The codec a bare JS number is bound through.
*
* An integer picks the narrowest column type that holds it: `int4` while it
* fits the signed 32-bit range, `int8` (number-valued) up to the safe-integer
* limit. Past that limit a JS number is no longer an exact integer, so it
* binds as `float8` rather than pretending to a precision it does not have.
*/ function inferNumberCodecId(value) {
    if (!Number.isSafeInteger(value)) return "pg/float8@1";
    return value >= INT4_MIN && value <= INT4_MAX ? "pg/int4@1" : "pg/int8number@1";
}
/**
* Codec-id lookup for bare-literal interpolations used by `fns.raw` on a postgres client. Contributed as the descriptor's static `rawCodecInferer` slot.
*
* The ids are versioned because that is how the codec registry keys them: lowering resolves an interpolated value's codec by exact id through `descriptorFor`.
*/ const postgresRawCodecInferer = {
    inferCodec (value) {
        switch(typeof value){
            case "number":
                return inferNumberCodecId(value);
            case "bigint":
                return "pg/int8@1";
            case "string":
                return "pg/text@1";
            case "boolean":
                return "pg/bool@1";
            case "object":
                if (value instanceof Uint8Array) return "pg/bytea@1";
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$renderer$2d$DrSed$2d$6w$2d$Bt8Hx2pU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("RUNTIME.RAW_SQL_UNSUPPORTED_INTERPOLATION", "unsupported JS value type for raw-SQL interpolation: wrap this value in `param(...)` with an explicit codec", {
            meta: {
                valueType: typeof value
            }
        });
    }
};
function createPostgresAdapter(options) {
    const dataTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__assembleDataTypes$3e$__["assembleDataTypes"])([
        {
            id: "postgres",
            dataTypes: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["et"]
        },
        {
            id: "createPostgresAdapter",
            dataTypes: options?.dataTypes ?? []
        }
    ]);
    const codecRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$registry$2d$7LHPD8C1$2d$BALCyEB$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"])(options?.codecDescriptors, dataTypes.lookup);
    return Object.freeze(new PostgresAdapterImpl(codecRegistry, dataTypes.lookup, dataTypes.declared.map(({ type })=>type), options?.profileId));
}
function createPostgresAdapterWithCodecRegistry(codecRegistry, dataTypeLookup, declaredDataTypes) {
    return Object.freeze(new PostgresAdapterImpl(codecRegistry, dataTypeLookup, declaredDataTypes));
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/adapter__runtime.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>postgresRuntimeAdapterDescriptor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$registry$2d$Ctq7UGkA$2d$_DnAcgYm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/registry-Ctq7UGkA-_DnAcgYm.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$registry$2d$7LHPD8C1$2d$BALCyEB$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-registry-7LHPD8C1-BALCyEB-.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$date$2d$time$2d$now$2d$generators$2d$BMMGy0vy$2d$BEbt_79F$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/date-time-now-generators-BMMGy0vy-BEbt_79F.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$adapter$2d$BgEU4rZ4$2d$CnjkLewL$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/adapter-BgEU4rZ4-CnjkLewL.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$descriptor$2d$meta$2d$Bj9sQhJn$2d$CMP3p6iz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/descriptor-meta-Bj9sQhJn-CMP3p6iz.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__assembleDataTypes$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export o as assembleDataTypes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$runtime$2d$DkUiQi00$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__i__as__timestampNowRuntimeGenerator$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/runtime-DkUiQi00.mjs [app-route] (ecmascript) <locals> <export i as timestampNowRuntimeGenerator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ids$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/ids.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ids_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/ids__runtime.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
//#region ../../../3-targets/postgres/2-adapter/dist/runtime.mjs
function createPostgresMutationDefaultGenerators() {
    return [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ids$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["builtinGeneratorIds"].map((id)=>({
                id,
                generate: (params)=>{
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ids_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateId"])(params ? {
                        id,
                        params
                    } : {
                        id
                    });
                },
                stability: "field"
            })),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$runtime$2d$DkUiQi00$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__i__as__timestampNowRuntimeGenerator$3e$__["timestampNowRuntimeGenerator"])(),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$date$2d$time$2d$now$2d$generators$2d$BMMGy0vy$2d$BEbt_79F$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"].map(({ id, generate })=>({
                id,
                generate,
                stability: "query"
            }))
    ];
}
const postgresRuntimeAdapterDescriptor = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$descriptor$2d$meta$2d$Bj9sQhJn$2d$CMP3p6iz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"],
    codecs: ()=>Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$registry$2d$Ctq7UGkA$2d$_DnAcgYm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"].values()),
    mutationDefaultGenerators: createPostgresMutationDefaultGenerators,
    rawCodecInferer: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$adapter$2d$BgEU4rZ4$2d$CnjkLewL$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"],
    create (stack) {
        const components = [
            stack.target,
            stack.adapter,
            ...stack.extensions
        ];
        const dataTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__assembleDataTypes$3e$__["assembleDataTypes"])(components);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$adapter$2d$BgEU4rZ4$2d$CnjkLewL$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$registry$2d$7LHPD8C1$2d$BALCyEB$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(components, dataTypes.lookup), dataTypes.lookup, dataTypes.declared.map(({ type })=>type));
    }
};
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/aggregates-BNste-08.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>postgresAggregateDescriptors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-ids-2htdtS66-CJPMZv1t.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__SQL_FLOAT_CODEC_ID$3e$__$3c$export__SQL_FLOAT_CODEC_ID__as__U$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/ast-C3itulLi.mjs [app-route] (ecmascript) <export a as SQL_FLOAT_CODEC_ID> <export SQL_FLOAT_CODEC_ID as U>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__SQL_INT_CODEC_ID$3e$__$3c$export__SQL_INT_CODEC_ID__as__W$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/ast-C3itulLi.mjs [app-route] (ecmascript) <export o as SQL_INT_CODEC_ID> <export SQL_INT_CODEC_ID as W>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__SQL_VARCHAR_CODEC_ID$3e$__$3c$export__SQL_VARCHAR_CODEC_ID__as__q$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/ast-C3itulLi.mjs [app-route] (ecmascript) <export l as SQL_VARCHAR_CODEC_ID> <export SQL_VARCHAR_CODEC_ID as q>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__AggregateExpr$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export t as AggregateExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__CastExpr$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export a as CastExpr>");
;
;
//#region ../../../3-targets/postgres/1-target/dist/aggregates.mjs
/**
* An aggregate whose result is one of the input values, so it carries the input's codec — type parameters included, since a `numeric(10,3)` minimum is still a `numeric(10,3)`.
*/ const preservesInput = (operation, input)=>({
        operation,
        input,
        output: {
            kind: "self"
        },
        nullable: true
    });
/**
* An aggregate whose result is a new value. It names its result codec without type parameters: a sum leaves the input's width behind (a `numeric(10,3)` column sums to an unconstrained `numeric`), so carrying the input's parameters into the result would understate the range.
*/ const produces = (operation, input, codecId)=>({
        operation,
        input,
        output: {
            kind: "codec",
            codecId
        },
        nullable: true
    });
/** The same, for an operation that builds its own expression. */ const producesVia = (operation, input, codecId, lower)=>({
        ...produces(operation, input, codecId),
        lower
    });
/** The SQL aggregate a lossless variant computes with. `sumBigInt` is a `sum` read exactly, `countBigInt` a `count`, `avgDecimal` an `avg`: the variants differ in how the result is read, never in what the database computes. */ const computedWith = (fn)=>({ expr })=>new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__AggregateExpr$3e$__["AggregateExpr"](fn, expr);
/** `avg` over an integer column, rounded once. PostgreSQL computes the exact `numeric` mean and the cast turns that one value into the `double precision` the result codec reads; casting the input instead would round every value before it was accumulated. */ const avgCastToFloat8 = ({ expr })=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__CastExpr$3e$__["CastExpr"].as(new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__AggregateExpr$3e$__["AggregateExpr"]("avg", expr), "float8");
/** Integer codecs whose `sum` widens to `bigint` — every built-in integer bar the 64-bit ones, whose sum goes to `numeric` instead. */ const SUM_WIDENS_TO_INT8 = [
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["f"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["p"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["v"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__SQL_INT_CODEC_ID$3e$__$3c$export__SQL_INT_CODEC_ID__as__W$3e$__["W"]
];
/** The 64-bit integer codecs: PostgreSQL computes their `sum` as a `numeric`, a total free to leave the range an `int8` holds. */ const SUM_WIDENS_TO_NUMERIC = [
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["h"]
];
/** The integer codecs a `sum` reads back as a `number`: every fixed-width one, whatever its own application type. */ const FIXED_WIDTH_INTEGER_CODECS = [
    ...SUM_WIDENS_TO_INT8,
    ...SUM_WIDENS_TO_NUMERIC
];
/** Every built-in integer codec, the unbounded one included: `avg` over any of them is a `numeric` mean. */ const INTEGER_CODECS = [
    ...FIXED_WIDTH_INTEGER_CODECS,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["L"]
];
/** Codecs over `double precision`, whose `sum` and `avg` stay there. */ const DOUBLE_PRECISION_CODECS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["l"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["u"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__SQL_FLOAT_CODEC_ID$3e$__$3c$export__SQL_FLOAT_CODEC_ID__as__U$3e$__["U"]
];
/**
* Codecs whose `min`/`max` returns the input type and whose traits do not already say so: the temporal types, `inet`, `oid`, `money`, `text[]`, and native enums advertise `order` or `equality`, which `uuid`, `bit`, `bit varying`, `bool`, `bytea`, `json`, and `jsonb` also advertise while having no `min`/`max` at all. An exact overload per supported codec is therefore the only honest shape — a trait fallback over `order` would claim the unsupported ones too.
*/ const MIN_MAX_PRESERVING_CODECS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["s"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["N"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["g"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["d"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["C"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["x"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["w"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["j"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["D"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["E"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["k"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["A"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["P"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["o"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["M"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["O"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["F"]
];
/**
* `min`/`max` over the character types, where the trait rung does hold: every `textual` codec returns its input type — except the two `varchar` codecs, whose result PostgreSQL widens to `text`, and which therefore claim themselves exactly and shadow the fallback.
*/ const MIN_MAX_WIDENS_TO_TEXT = [
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["B"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__SQL_VARCHAR_CODEC_ID$3e$__$3c$export__SQL_VARCHAR_CODEC_ID__as__q$3e$__["q"]
];
const orderingDescriptors = (operation)=>[
        preservesInput(operation, {
            kind: "trait",
            trait: "numeric"
        }),
        preservesInput(operation, {
            kind: "trait",
            trait: "textual"
        }),
        ...MIN_MAX_WIDENS_TO_TEXT.map((codecId)=>produces(operation, {
                kind: "codec",
                codecId
            }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"])),
        ...MIN_MAX_PRESERVING_CODECS.map((codecId)=>preservesInput(operation, {
                kind: "codec",
                codecId
            }))
    ];
/**
* Every aggregate overload the PostgreSQL target contributes. The adapter lists these on `types.aggregateDescriptors`, from where emission derives result types and the runtime builds its resolution registry.
*/ const postgresAggregateDescriptors = [
    {
        operation: "count",
        input: {
            kind: "any"
        },
        output: {
            kind: "codec",
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["h"]
        },
        nullable: false,
        emptyResultWire: "0"
    },
    {
        operation: "countBigInt",
        input: {
            kind: "any"
        },
        output: {
            kind: "codec",
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"]
        },
        nullable: false,
        emptyResultWire: "0",
        lower: computedWith("count")
    },
    ...FIXED_WIDTH_INTEGER_CODECS.map((codecId)=>produces("sum", {
            kind: "codec",
            codecId
        }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["h"])),
    ...SUM_WIDENS_TO_INT8.map((codecId)=>producesVia("sumBigInt", {
            kind: "codec",
            codecId
        }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"], computedWith("sum"))),
    ...SUM_WIDENS_TO_NUMERIC.map((codecId)=>producesVia("sumBigInt", {
            kind: "codec",
            codecId
        }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["L"], computedWith("sum"))),
    producesVia("sumBigInt", {
        kind: "codec",
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["L"]
    }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["L"], computedWith("sum")),
    produces("sum", {
        kind: "codec",
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["c"]
    }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["c"]),
    ...DOUBLE_PRECISION_CODECS.map((codecId)=>produces("sum", {
            kind: "codec",
            codecId
        }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["l"])),
    produces("sum", {
        kind: "codec",
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["S"]
    }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["S"]),
    produces("sum", {
        kind: "codec",
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["L"]
    }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["L"]),
    produces("sum", {
        kind: "codec",
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["x"]
    }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["x"]),
    produces("sum", {
        kind: "codec",
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["g"]
    }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["g"]),
    produces("sum", {
        kind: "codec",
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_"]
    }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_"]),
    produces("sum", {
        kind: "codec",
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["P"]
    }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["g"]),
    produces("sum", {
        kind: "codec",
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["F"]
    }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["g"]),
    ...INTEGER_CODECS.map((codecId)=>producesVia("avg", {
            kind: "codec",
            codecId
        }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["l"], avgCastToFloat8)),
    ...[
        ...INTEGER_CODECS,
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["S"]
    ].map((codecId)=>producesVia("avgDecimal", {
            kind: "codec",
            codecId
        }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["S"], computedWith("avg"))),
    ...[
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["c"],
        ...DOUBLE_PRECISION_CODECS
    ].map((codecId)=>produces("avg", {
            kind: "codec",
            codecId
        }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["l"])),
    produces("avg", {
        kind: "codec",
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["S"]
    }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["S"]),
    produces("avg", {
        kind: "codec",
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["g"]
    }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["g"]),
    produces("avg", {
        kind: "codec",
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_"]
    }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_"]),
    produces("avg", {
        kind: "codec",
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["P"]
    }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["g"]),
    produces("avg", {
        kind: "codec",
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["F"]
    }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["g"]),
    ...orderingDescriptors("min"),
    ...orderingDescriptors("max")
];
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/authoring-BD4uEpBM-DIJiGq4e.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>postgresAuthoringTypes,
    "c",
    ()=>postgresScalarTypes,
    "i",
    ()=>postgresAuthoringPslBlockDescriptors,
    "n",
    ()=>postgresAuthoringEntityTypes,
    "o",
    ()=>postgresExplicitTypes,
    "r",
    ()=>postgresAuthoringModelAttributes,
    "s",
    ()=>postgresLowerEntityHandles,
    "t",
    ()=>POLICY_BLOCK_KEYWORDS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-ids-2htdtS66-CJPMZv1t.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/errors-DpdPXR_L-DailcY-X.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$native$2d$enum$2d$CdP3b_$2d$R$2d$DgG3pi5p$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-native-enum-CdP3b_-R-DgG3pi5p.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-schema-BBWgs4fX-DWdYxNi8.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$canonicalize$2d$RdxoUHao$2d$FTTkizfe$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/canonicalize-RdxoUHao-FTTkizfe.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$codec$2d$traits$2d$DeZiroEE$2d$BACV_wuh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-codec-traits-DeZiroEE-BACV_wuh.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/namespace-VUH2dgnS-By5y75h9.mjs [app-route] (ecmascript) <export r as UNBOUND_NAMESPACE_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__assertDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/assertions-Dw1lZz_Q.mjs [app-route] (ecmascript) <export t as assertDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/assertions-Dw1lZz_Q.mjs [app-route] (ecmascript) <export n as invariant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__assertWireNamePrefixLength$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/naming-DEpT6Zad-C9PFkWt6.mjs [app-route] (ecmascript) <export r as assertWireNamePrefixLength>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__m__as__normalizeSqlBody$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/naming-DEpT6Zad-C9PFkWt6.mjs [app-route] (ecmascript) <export m as normalizeSqlBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$generator$2d$functions$2d$Hy4pDDr9$2d$DkN0qbPW$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__sqlTargetTypeConstructors$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/generator-functions-Hy4pDDr9-DkN0qbPW.mjs [app-route] (ecmascript) <export c as sqlTargetTypeConstructors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__G__as__temporalTypeAliases$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export G as temporalTypeAliases>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$ast$2d$CyvE6CR$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__UNBOUND_PSL_NAMESPACE_NAME$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/psl-ast-CyvE6CR-.mjs [app-route] (ecmascript) <export n as UNBOUND_PSL_NAMESPACE_NAME>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/psl-parser.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$generated$2d$id$2d$column$2d$aliases$2d$DPUii1fN$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__generatedIdColumnAliases$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/generated-id-column-aliases-DPUii1fN.mjs [app-route] (ecmascript) <export n as generatedIdColumnAliases>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$index$2d$naming$2d$BOcJT1B3$2d$D$2d$49owHA$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__exactNameBodyWarning$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/index-naming-BOcJT1B3-D-49owHA.mjs [app-route] (ecmascript) <export t as exactNameBodyWarning>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SQL_EXPRESSION_DATA_TYPE_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/sql-expression-CKgKznXS.mjs [app-route] (ecmascript) <export t as SQL_EXPRESSION_DATA_TYPE_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__requireSqlExpression$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/sql-expression-CKgKznXS.mjs [app-route] (ecmascript) <export c as requireSqlExpression>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__sqlTextFromStored$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/sql-expression-CKgKznXS.mjs [app-route] (ecmascript) <export p as sqlTextFromStored>");
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
//#region ../../../3-targets/postgres/1-target/dist/authoring-BD4uEpBM.mjs
/** The data type of every size argument on Postgres, such as a length or a precision: a typmod is an `int4`. */ const PG_SIZE_TYPE = "pg/int4";
const length = {
    kind: "value",
    dataType: PG_SIZE_TYPE,
    name: "length",
    optional: true
};
const int2 = {
    kind: "typeConstructor",
    documentation: "A signed 16-bit integer stored as PostgreSQL int2 and represented as a JavaScript number.",
    output: {
        codecId: "pg/int2@1"
    }
};
const int8Number = {
    kind: "typeConstructor",
    documentation: "A signed 64-bit integer stored as PostgreSQL int8 and represented as a JavaScript number within its safe integer range.",
    output: {
        codecId: "pg/int8number@1"
    }
};
const numericString = {
    kind: "typeConstructor",
    documentation: "An exact decimal value stored as PostgreSQL numeric, with optional precision and scale, and represented as decimal text.",
    args: [
        {
            kind: "value",
            dataType: PG_SIZE_TYPE,
            name: "precision",
            optional: true
        },
        {
            kind: "value",
            dataType: PG_SIZE_TYPE,
            name: "scale",
            optional: true
        }
    ],
    output: {
        codecId: "pg/numeric@1",
        typeParams: {
            precision: {
                kind: "arg",
                index: 0
            },
            scale: {
                kind: "arg",
                index: 1
            }
        }
    }
};
const numericBigInt = {
    kind: "typeConstructor",
    documentation: "An arbitrary-precision integer stored as PostgreSQL numeric and represented as a JavaScript bigint.",
    output: {
        codecId: "pg/unboundedint@1"
    }
};
const float4 = {
    kind: "typeConstructor",
    documentation: "A single-precision floating-point number stored as PostgreSQL float4.",
    output: {
        codecId: "pg/float4@1"
    }
};
const varchar = {
    kind: "typeConstructor",
    documentation: "Variable-length text stored as PostgreSQL character varying, with an optional maximum character length.",
    args: [
        length
    ],
    output: {
        codecId: "sql/varchar@1",
        typeParams: {
            length: {
                kind: "arg",
                index: 0
            }
        }
    }
};
const varbit = {
    kind: "typeConstructor",
    documentation: "A variable-length bit string with an optional maximum length in bits.",
    args: [
        length
    ],
    output: {
        codecId: "pg/varbit@1",
        typeParams: {
            length: {
                kind: "arg",
                index: 0
            }
        }
    }
};
/**
* PostgreSQL's explicit types: each names one codec, and is what the contract stores. Each is named after the database type, plus the application value where the database type has more than one codec (ADR 257, ADR 316). `Json` keeps its name until the `Json` convenience type is decided.
*/ const postgresExplicitTypes = {
    Int2: {
        ...int2,
        inferred: true
    },
    Int4: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "A signed 32-bit integer stored as PostgreSQL int4 and represented as a JavaScript number.",
        output: {
            codecId: "pg/int4@1"
        }
    },
    Int8BigInt: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "A signed 64-bit integer stored as PostgreSQL int8 and represented as a JavaScript bigint.",
        output: {
            codecId: "pg/int8@1"
        }
    },
    Int8Number: int8Number,
    NumericString: {
        ...numericString,
        inferred: true
    },
    NumericBigInt: numericBigInt,
    Float4: {
        ...float4,
        inferred: true
    },
    Float8: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "A double-precision floating-point number stored as PostgreSQL float8.",
        output: {
            codecId: "pg/float8@1"
        }
    },
    Text: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "Variable-length text stored as PostgreSQL text.",
        output: {
            codecId: "pg/text@1"
        }
    },
    Varchar: {
        ...varchar,
        inferred: true
    },
    Char: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "Fixed-length, blank-padded text stored as PostgreSQL character, with an optional character length.",
        args: [
            length
        ],
        output: {
            codecId: "sql/char@1",
            typeParams: {
                length: {
                    kind: "arg",
                    index: 0
                }
            }
        }
    },
    Bool: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "A true or false value stored as PostgreSQL bool.",
        output: {
            codecId: "pg/bool@1"
        }
    },
    Bytea: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "Binary data stored as PostgreSQL bytea and represented as a Uint8Array.",
        output: {
            codecId: "pg/bytea@1"
        }
    },
    Json: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "A JSON value stored as PostgreSQL json.",
        output: {
            codecId: "pg/json@1"
        }
    },
    Jsonb: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "A JSON value stored in PostgreSQL binary jsonb format.",
        output: {
            codecId: "pg/jsonb@1"
        }
    },
    TimestampTemporal: {
        kind: "typeConstructor",
        documentation: "A date and time without a time zone, represented as Temporal.PlainDateTime.",
        args: [
            {
                kind: "value",
                dataType: PG_SIZE_TYPE,
                name: "precision",
                optional: true
            }
        ],
        output: {
            codecId: "pg/timestamp-temporal@1",
            typeParams: {
                precision: {
                    kind: "arg",
                    index: 0
                }
            }
        }
    },
    TimestamptzTemporal: {
        kind: "typeConstructor",
        documentation: "An instant represented as Temporal.Instant, with optional fractional-second precision.",
        args: [
            {
                kind: "value",
                dataType: PG_SIZE_TYPE,
                name: "precision",
                optional: true
            }
        ],
        output: {
            codecId: "pg/timestamptz-temporal@1",
            typeParams: {
                precision: {
                    kind: "arg",
                    index: 0
                }
            }
        }
    },
    TimeTemporal: {
        kind: "typeConstructor",
        documentation: "A time of day without a time zone, represented as Temporal.PlainTime.",
        args: [
            {
                kind: "value",
                dataType: PG_SIZE_TYPE,
                name: "precision",
                optional: true
            }
        ],
        output: {
            codecId: "pg/time-temporal@1",
            typeParams: {
                precision: {
                    kind: "arg",
                    index: 0
                }
            }
        }
    },
    Timetz: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "A time of day with a UTC offset stored as PostgreSQL timetz and represented as ISO 8601 text.",
        args: [
            {
                kind: "value",
                dataType: PG_SIZE_TYPE,
                name: "precision",
                optional: true
            }
        ],
        output: {
            codecId: "pg/timetz@1",
            typeParams: {
                precision: {
                    kind: "arg",
                    index: 0
                }
            }
        }
    },
    Uuid: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "A universally unique identifier stored as PostgreSQL uuid.",
        output: {
            codecId: "pg/uuid@1"
        }
    },
    Inet: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "An IPv4 or IPv6 address with an optional subnet mask.",
        output: {
            codecId: "pg/inet@1"
        }
    },
    DateTemporal: {
        kind: "typeConstructor",
        documentation: "A calendar date represented as Temporal.PlainDate.",
        output: {
            codecId: "pg/date-temporal@1"
        }
    },
    DateString: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "A PostgreSQL date represented as ISO 8601 text rather than Temporal.PlainDate.",
        output: {
            codecId: "pg/date-string@1"
        }
    },
    TimestampString: {
        kind: "typeConstructor",
        documentation: "A timestamp without a time zone represented as ISO 8601 text.",
        args: [
            {
                kind: "value",
                dataType: PG_SIZE_TYPE,
                name: "precision",
                optional: true
            }
        ],
        output: {
            codecId: "pg/timestamp-string@1",
            typeParams: {
                precision: {
                    kind: "arg",
                    index: 0
                }
            }
        }
    },
    TimestamptzJsDate: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "An instant stored as PostgreSQL timestamptz and represented as a JavaScript Date.",
        args: [
            {
                kind: "value",
                dataType: PG_SIZE_TYPE,
                name: "precision",
                optional: true
            }
        ],
        output: {
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["E"],
            typeParams: {
                precision: {
                    kind: "arg",
                    index: 0
                }
            }
        }
    },
    TimestampJsDate: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "A date and time stored as PostgreSQL timestamp and represented as a JavaScript Date, read and written as UTC.",
        args: [
            {
                kind: "value",
                dataType: PG_SIZE_TYPE,
                name: "precision",
                optional: true
            }
        ],
        output: {
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["k"],
            typeParams: {
                precision: {
                    kind: "arg",
                    index: 0
                }
            }
        }
    },
    TimestampInstant: {
        kind: "typeConstructor",
        documentation: "A date and time stored as PostgreSQL timestamp and represented as Temporal.Instant, read and written as UTC.",
        args: [
            {
                kind: "value",
                dataType: PG_SIZE_TYPE,
                name: "precision",
                optional: true
            }
        ],
        output: {
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["A"],
            typeParams: {
                precision: {
                    kind: "arg",
                    index: 0
                }
            }
        }
    },
    TimestamptzString: {
        kind: "typeConstructor",
        documentation: "A timestamp with time zone represented as ISO 8601 text, the instant in UTC.",
        args: [
            {
                kind: "value",
                dataType: PG_SIZE_TYPE,
                name: "precision",
                optional: true
            }
        ],
        output: {
            codecId: "pg/timestamptz-string@1",
            typeParams: {
                precision: {
                    kind: "arg",
                    index: 0
                }
            }
        }
    },
    TimeString: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "A time of day without a time zone represented as ISO 8601 text.",
        args: [
            {
                kind: "value",
                dataType: PG_SIZE_TYPE,
                name: "precision",
                optional: true
            }
        ],
        output: {
            codecId: "pg/time-string@1",
            typeParams: {
                precision: {
                    kind: "arg",
                    index: 0
                }
            }
        }
    },
    Bit: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "A fixed-length bit string with an optional length in bits.",
        args: [
            {
                kind: "value",
                dataType: PG_SIZE_TYPE,
                name: "length",
                optional: true
            }
        ],
        output: {
            codecId: "pg/bit@1",
            typeParams: {
                length: {
                    kind: "arg",
                    index: 0
                }
            }
        }
    },
    Varbit: {
        ...varbit,
        inferred: true
    },
    Xml: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "An XML document or content fragment stored as PostgreSQL xml.",
        output: {
            codecId: "pg/xml@1"
        }
    },
    Oid: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "An object identifier: an unsigned 32-bit integer stored as PostgreSQL oid and represented as a JavaScript number.",
        output: {
            codecId: "pg/oid@1"
        }
    },
    Money: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "A currency amount in cents stored as PostgreSQL money and represented as decimal text with two fraction digits, such as \"-1234.56\".",
        output: {
            codecId: "pg/money@1"
        }
    },
    IntervalParts: {
        kind: "typeConstructor",
        documentation: "A span of time stored as PostgreSQL interval and represented as { months, days, micros }, with optional fractional-second precision.",
        args: [
            {
                kind: "value",
                dataType: PG_SIZE_TYPE,
                name: "precision",
                optional: true
            }
        ],
        output: {
            codecId: "pg/interval@1",
            typeParams: {
                precision: {
                    kind: "arg",
                    index: 0
                }
            }
        }
    },
    IntervalString: {
        kind: "typeConstructor",
        inferred: true,
        documentation: "A span of time stored as PostgreSQL interval and represented as an ISO 8601 duration such as P1Y2M, with optional fractional-second precision.",
        args: [
            {
                kind: "value",
                dataType: PG_SIZE_TYPE,
                name: "precision",
                optional: true
            }
        ],
        output: {
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_"],
            typeParams: {
                precision: {
                    kind: "arg",
                    index: 0
                }
            }
        }
    }
};
/**
* The explicit types' former names, kept for one release line as deprecated aliases. Each gives the same codec as its replacement, and the PSL interpreter warns where one is written (ADR 257).
*/ const postgresDeprecatedScalarTypes = {
    SmallInt: {
        ...int2,
        deprecated: {
            replacement: "Int2"
        }
    },
    BigIntNumber: {
        ...int8Number,
        deprecated: {
            replacement: "Int8Number"
        }
    },
    Numeric: {
        ...numericString,
        deprecated: {
            replacement: "NumericString"
        }
    },
    UnboundedInt: {
        ...numericBigInt,
        deprecated: {
            replacement: "NumericBigInt"
        }
    },
    Real: {
        ...float4,
        deprecated: {
            replacement: "Float4"
        }
    },
    VarChar: {
        ...varchar,
        deprecated: {
            replacement: "Varchar"
        }
    },
    VarBit: {
        ...varbit,
        deprecated: {
            replacement: "Varbit"
        }
    }
};
const precision = {
    kind: "value",
    dataType: PG_SIZE_TYPE,
    name: "precision",
    optional: true
};
/**
* The convenience date and time types. Each is a type choice: its `as` and `storage` arguments choose the explicit type it becomes, and `precision` is passed on to that type. ADR 279.
*/ const postgresConvenienceDateTimeTypes = {
    DateTime: {
        kind: "typeChoice",
        documentation: "A moment in time. `as` is what the application reads: jsDate (a JavaScript Date), temporal (Temporal.Instant) or string. `storage` is timestamptz or timestamp, a timestamp read and written as UTC.",
        args: [
            {
                kind: "option",
                name: "as",
                values: [
                    "jsDate",
                    "temporal",
                    "string"
                ],
                default: "jsDate",
                optional: true
            },
            {
                kind: "option",
                name: "storage",
                values: [
                    "timestamptz",
                    "timestamp"
                ],
                default: "timestamptz",
                optional: true
            },
            precision
        ],
        choices: [
            {
                when: {
                    as: "jsDate",
                    storage: "timestamptz"
                },
                type: "TimestamptzJsDate",
                defaults: {
                    precision: 3
                }
            },
            {
                when: {
                    as: "temporal",
                    storage: "timestamptz"
                },
                type: "TimestamptzTemporal"
            },
            {
                when: {
                    as: "string",
                    storage: "timestamptz"
                },
                type: "TimestamptzString"
            },
            {
                when: {
                    as: "jsDate",
                    storage: "timestamp"
                },
                type: "TimestampJsDate",
                defaults: {
                    precision: 3
                }
            },
            {
                when: {
                    as: "temporal",
                    storage: "timestamp"
                },
                type: "TimestampInstant"
            },
            {
                when: {
                    as: "string",
                    storage: "timestamp"
                },
                type: "TimestampString"
            }
        ]
    },
    Date: {
        kind: "typeChoice",
        documentation: "A calendar date. `as` is what the application reads: string, such as \"2024-02-29\", or temporal (Temporal.PlainDate).",
        args: [
            {
                kind: "option",
                name: "as",
                values: [
                    "string",
                    "temporal"
                ],
                default: "string",
                optional: true
            },
            {
                kind: "option",
                name: "storage",
                values: [
                    "date"
                ],
                default: "date",
                optional: true
            }
        ],
        choices: [
            {
                when: {
                    as: "string",
                    storage: "date"
                },
                type: "DateString"
            },
            {
                when: {
                    as: "temporal",
                    storage: "date"
                },
                type: "DateTemporal"
            }
        ]
    },
    Time: {
        kind: "typeChoice",
        documentation: "A time of day. `as` is what the application reads: string, such as \"09:30:00\", or temporal (Temporal.PlainTime). `storage` is time, or timetz with as: string.",
        args: [
            {
                kind: "option",
                name: "as",
                values: [
                    "string",
                    "temporal"
                ],
                default: "string",
                optional: true
            },
            {
                kind: "option",
                name: "storage",
                values: [
                    "time",
                    "timetz"
                ],
                default: "time",
                optional: true
            },
            precision
        ],
        choices: [
            {
                when: {
                    as: "string",
                    storage: "time"
                },
                type: "TimeString"
            },
            {
                when: {
                    as: "temporal",
                    storage: "time"
                },
                type: "TimeTemporal"
            },
            {
                when: {
                    as: "string",
                    storage: "timetz"
                },
                type: "Timetz"
            }
        ]
    },
    Duration: {
        kind: "typeChoice",
        documentation: "A length of time. `as` is what the application reads: string, an ISO 8601 duration such as \"P1M\", or parts, the object { months, days, micros }.",
        args: [
            {
                kind: "option",
                name: "as",
                values: [
                    "string",
                    "parts"
                ],
                default: "string",
                optional: true
            },
            {
                kind: "option",
                name: "storage",
                values: [
                    "interval"
                ],
                default: "interval",
                optional: true
            },
            precision
        ],
        choices: [
            {
                when: {
                    as: "string",
                    storage: "interval"
                },
                type: "IntervalString"
            },
            {
                when: {
                    as: "parts",
                    storage: "interval"
                },
                type: "IntervalParts"
            }
        ]
    }
};
/**
* The convenience types of PostgreSQL's other scalars. Each is a type choice: `storage` chooses the database type and, for `BigInt`, `as` chooses the application value; `precision`, `scale` and `length` are passed on to the explicit type chosen. ADR 279, ADR 316.
*/ const postgresConvenienceScalarTypes = {
    Int: {
        kind: "typeChoice",
        documentation: "An integer read as a JavaScript number. `storage` is int4, a 32-bit integer, or int2, a 16-bit integer.",
        args: [
            {
                kind: "option",
                name: "storage",
                values: [
                    "int4",
                    "int2"
                ],
                default: "int4",
                optional: true
            }
        ],
        choices: [
            {
                when: {
                    storage: "int4"
                },
                type: "Int4"
            },
            {
                when: {
                    storage: "int2"
                },
                type: "Int2"
            }
        ]
    },
    BigInt: {
        kind: "typeChoice",
        documentation: "An integer that may exceed 32 bits. `as` is what the application reads: bigint, or number within the safe integer range. `storage` is int8, a 64-bit integer, or numeric, an integer of any size, with as: bigint.",
        args: [
            {
                kind: "option",
                name: "as",
                values: [
                    "bigint",
                    "number"
                ],
                default: "bigint",
                optional: true
            },
            {
                kind: "option",
                name: "storage",
                values: [
                    "int8",
                    "numeric"
                ],
                default: "int8",
                optional: true
            }
        ],
        choices: [
            {
                when: {
                    as: "bigint",
                    storage: "int8"
                },
                type: "Int8BigInt"
            },
            {
                when: {
                    as: "number",
                    storage: "int8"
                },
                type: "Int8Number"
            },
            {
                when: {
                    as: "bigint",
                    storage: "numeric"
                },
                type: "NumericBigInt"
            }
        ]
    },
    Float: {
        kind: "typeChoice",
        documentation: "A floating-point number. `storage` is float8, double precision, or float4, single precision.",
        args: [
            {
                kind: "option",
                name: "storage",
                values: [
                    "float8",
                    "float4"
                ],
                default: "float8",
                optional: true
            }
        ],
        choices: [
            {
                when: {
                    storage: "float8"
                },
                type: "Float8"
            },
            {
                when: {
                    storage: "float4"
                },
                type: "Float4"
            }
        ]
    },
    Decimal: {
        kind: "typeChoice",
        documentation: "An exact decimal number, read as decimal text such as \"12.50\". `storage` is numeric, with optional precision and scale.",
        args: [
            {
                kind: "option",
                name: "storage",
                values: [
                    "numeric"
                ],
                default: "numeric",
                optional: true
            },
            precision,
            {
                kind: "value",
                dataType: PG_SIZE_TYPE,
                name: "scale",
                optional: true
            }
        ],
        choices: [
            {
                when: {
                    storage: "numeric"
                },
                type: "NumericString"
            }
        ]
    },
    String: {
        kind: "typeChoice",
        documentation: "Text. `storage` is text, of any length, or varchar or char, which take an optional length.",
        args: [
            {
                kind: "option",
                name: "storage",
                values: [
                    "text",
                    "varchar",
                    "char"
                ],
                default: "text",
                optional: true
            },
            length
        ],
        choices: [
            {
                when: {
                    storage: "text"
                },
                type: "Text"
            },
            {
                when: {
                    storage: "varchar"
                },
                type: "Varchar"
            },
            {
                when: {
                    storage: "char"
                },
                type: "Char"
            }
        ]
    },
    Boolean: {
        kind: "typeChoice",
        documentation: "A true or false value. `storage` is bool.",
        args: [
            {
                kind: "option",
                name: "storage",
                values: [
                    "bool"
                ],
                default: "bool",
                optional: true
            }
        ],
        choices: [
            {
                when: {
                    storage: "bool"
                },
                type: "Bool"
            }
        ]
    },
    Bytes: {
        kind: "typeChoice",
        documentation: "Binary data, read as a Uint8Array. `storage` is bytea.",
        args: [
            {
                kind: "option",
                name: "storage",
                values: [
                    "bytea"
                ],
                default: "bytea",
                optional: true
            }
        ],
        choices: [
            {
                when: {
                    storage: "bytea"
                },
                type: "Bytea"
            }
        ]
    }
};
/**
* PostgreSQL's scalar types: the explicit types, the convenience types and the deprecated aliases. It is not the whole `type` namespace: the target contributes it together with `postgresAuthoringTypes`, which adds the namespaced `sql.*`, `temporal.*` and `pg.enum` and the generated-ID aliases such as `UuidString`.
*/ const postgresScalarTypes = {
    ...postgresExplicitTypes,
    ...postgresConvenienceDateTimeTypes,
    ...postgresConvenienceScalarTypes,
    ...postgresDeprecatedScalarTypes
};
const PSL_POLICY_INVALID_MAP = "PSL_POLICY_INVALID_MAP";
const PSL_FULL_TEXT_INDEX_TOO_MANY_GROUPS = "PSL_FULL_TEXT_INDEX_TOO_MANY_GROUPS";
const PSL_FULL_TEXT_INDEX_EMPTY_GROUP = "PSL_FULL_TEXT_INDEX_EMPTY_GROUP";
const PSL_FULL_TEXT_INDEX_DUPLICATE_FIELD = "PSL_FULL_TEXT_INDEX_DUPLICATE_FIELD";
const PSL_FULL_TEXT_INDEX_REQUIRES_NAME = "PSL_FULL_TEXT_INDEX_REQUIRES_NAME";
const PSL_FULL_TEXT_INDEX_NAME_XOR_MAP = "PSL_FULL_TEXT_INDEX_NAME_XOR_MAP";
const PSL_FULL_TEXT_INDEX_TEXT_FIELD = "PSL_FULL_TEXT_INDEX_TEXT_FIELD";
const PSL_NATIVE_ENUM_DUPLICATE_MEMBER_VALUE = "PSL_NATIVE_ENUM_DUPLICATE_MEMBER_VALUE";
const PSL_NATIVE_ENUM_MISSING_MEMBERS = "PSL_NATIVE_ENUM_MISSING_MEMBERS";
const PSL_ROLE_BLOCK_OUTSIDE_UNBOUND_NAMESPACE = "PSL_ROLE_BLOCK_OUTSIDE_UNBOUND_NAMESPACE";
/**
* `pg.enum(<ref>)` registers as an ordinary type constructor whose sole
* positional argument names a `native_enum` entity instead of carrying a
* literal value. The interpreter resolves the ref to the `native_enum`
* entity generically (driven by `entityRefArg`); the `pg/enum@1` codec
* descriptor's `columnFromEntity` hook (see `codecs.ts`) converts that
* entity into the column's `typeParams`. The column's type name comes from the
* `pg/enum` data type, which renders `typeParams.typeName`.
*/ const postgresAuthoringTypes = {
    .../* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$generator$2d$functions$2d$Hy4pDDr9$2d$DkN0qbPW$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__sqlTargetTypeConstructors$3e$__["sqlTargetTypeConstructors"])({
        sizeType: PG_SIZE_TYPE
    }),
    ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$generated$2d$id$2d$column$2d$aliases$2d$DPUii1fN$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__generatedIdColumnAliases$3e$__["generatedIdColumnAliases"],
    pg: {
        enum: {
            kind: "typeConstructor",
            inferred: true,
            entityRefArg: {
                index: 0,
                entityKind: "native_enum"
            },
            output: {
                codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["s"]
            }
        }
    },
    temporal: /* @__PURE__ */ postgresTemporalTypeAliases()
};
/**
* The created-at and updated-at aliases, on the type bare `DateTime` becomes: a `timestamptz(3)` column read as a JavaScript `Date` (ADR 279).
*/ /* @__NO_SIDE_EFFECTS__ */ function postgresTemporalTypeAliases() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__G__as__temporalTypeAliases$3e$__["temporalTypeAliases"])({
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["E"],
        typeParams: {
            precision: 3
        }
    }, "a JavaScript Date");
}
const policyTargetParam = {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["entityRef"])({
        kind: "model"
    }),
    documentation: "The model protected by this policy; it must declare @@rls."
};
const policyRolesParam = {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oneOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["entityRef"])({
        kind: "block",
        keyword: "role"
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])()))),
    documentation: "The database roles to which this policy applies."
};
function policyUsingParam(ctx) {
    return {
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["dataTypeValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SQL_EXPRESSION_DATA_TYPE_ID$3e$__["SQL_EXPRESSION_DATA_TYPE_ID"], ctx.dataTypes)),
        documentation: "A SQL predicate controlling which rows this policy permits."
    };
}
function policyWithCheckParam(ctx) {
    return {
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["dataTypeValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SQL_EXPRESSION_DATA_TYPE_ID$3e$__["SQL_EXPRESSION_DATA_TYPE_ID"], ctx.dataTypes)),
        documentation: "A SQL predicate checking rows being written by this policy."
    };
}
const policyPermissiveParam = {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bool"])()),
    documentation: "Whether the policy is permissive (combined with OR) rather than restrictive (combined with AND)."
};
function policyUsingOnlySpec(ctx) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["structBlock"])({
        parameters: {
            target: policyTargetParam,
            roles: policyRolesParam,
            using: policyUsingParam(ctx),
            permissive: policyPermissiveParam
        }
    });
}
function policyWithCheckOnlySpec(ctx) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["structBlock"])({
        parameters: {
            target: policyTargetParam,
            roles: policyRolesParam,
            withCheck: policyWithCheckParam(ctx),
            permissive: policyPermissiveParam
        }
    });
}
function policyBothPredicatesSpec(ctx) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["structBlock"])({
        parameters: {
            target: policyTargetParam,
            roles: policyRolesParam,
            using: policyUsingParam(ctx),
            withCheck: policyWithCheckParam(ctx),
            permissive: policyPermissiveParam
        }
    });
}
function roleSpec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["structBlock"])({
        parameters: {}
    });
}
function extensionSpec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["structBlock"])({
        parameters: {}
    });
}
function nativeEnumSpec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mapBlock"])({
        value: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])(),
            documentation: "The member value stored in the database enum type."
        }
    });
}
/**
* The block keyword that authors each row-level security operation. The keyword is the operation, so
* a policy block has no `operation` parameter. The reader looks a block's operation up here, and
* `contract infer` and `contract print` look up the keyword to write.
*/ const POLICY_BLOCK_KEYWORDS = {
    select: "policy_select",
    insert: "policy_insert",
    update: "policy_update",
    delete: "policy_delete",
    all: "policy_all"
};
function isRlsPolicyOperation(value) {
    return Object.hasOwn(POLICY_BLOCK_KEYWORDS, value);
}
/** The operation a `policy_<operation>` block keyword authors, or `undefined` for another keyword. */ function policyOperationOfKeyword(keyword) {
    return Object.keys(POLICY_BLOCK_KEYWORDS).filter(isRlsPolicyOperation).find((operation)=>POLICY_BLOCK_KEYWORDS[operation] === keyword);
}
/**
* Assembles a {@link PostgresRlsPolicy} from lowered inputs: normalizes the
* predicates, computes the content-hash wire name, and constructs the frozen
* entity. The single hash-assembly body shared by the PSL block lowering
* ({@link lowerRlsPolicyFromBlock}) and the TS entity-handle lowering
* ({@link postgresLowerEntityHandles}) so the two surfaces cannot drift.
*/ function buildRlsPolicyEntity(input) {
    const permissive = input.permissive ?? true;
    const wireHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$canonicalize$2d$RdxoUHao$2d$FTTkizfe$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("using", input.using !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__m__as__normalizeSqlBody$3e$__["normalizeSqlBody"])(input.using) : void 0),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("withCheck", input.withCheck !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__m__as__normalizeSqlBody$3e$__["normalizeSqlBody"])(input.withCheck) : void 0),
        roles: input.roles,
        operation: input.operation,
        permissive
    });
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"]({
        naming: {
            kind: "wire",
            prefix: input.prefix,
            hash: wireHash
        },
        tableName: input.tableName,
        namespaceId: input.namespaceId,
        operation: input.operation,
        roles: input.roles,
        using: input.using,
        withCheck: input.withCheck,
        permissive
    });
}
function lowerRlsPolicyFromBlock(block, ctx) {
    const prefix = block.name;
    const operation = policyOperationOfKeyword(block.keyword) ?? "select";
    const target = block.resolvedModelRefs?.["target"];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__assertDefined$3e$__["assertDefined"])(target, `lowerRlsPolicyFromBlock: policy "${block.name}" reached the factory without a projected \`target\` coordinate; the interpreter projects checked model references before invoking entity factories.`);
    const roles = block.values.roles === void 0 ? [] : block.values.roles.map((role)=>typeof role === "string" ? role : role.declaration.name).sort();
    const using = block.values.using === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__sqlTextFromStored$3e$__["sqlTextFromStored"])(block.values.using.value.value);
    const withCheck = block.values.withCheck === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__sqlTextFromStored$3e$__["sqlTextFromStored"])(block.values.withCheck.value.value);
    const permissive = block.values.permissive ?? true;
    const mapAttr = block.attributes["map"];
    if (mapAttr !== void 0) {
        const exactName = mapAttr.args["name"];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(typeof exactName === "string", "@@map on a policy block parses one string argument");
        ctx.warnings?.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$index$2d$naming$2d$BOcJT1B3$2d$D$2d$49owHA$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__exactNameBodyWarning$3e$__["exactNameBodyWarning"])("policy", exactName));
        return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"]({
            naming: {
                kind: "exact",
                name: exactName
            },
            tableName: target.tableName,
            namespaceId: target.namespaceId,
            operation,
            roles,
            using,
            withCheck,
            permissive
        });
    }
    return buildRlsPolicyEntity({
        prefix,
        tableName: target.tableName,
        namespaceId: target.namespaceId,
        operation,
        roles,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("using", using),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("withCheck", withCheck),
        permissive
    });
}
const policyEntityTypeOutput = {
    factory: lowerRlsPolicyFromBlock,
    pslPlacement: (entity)=>({
            namespaceId: entity.namespaceId
        })
};
function lowerNativeEnumFromBlock(block, ctx) {
    const sourceId = ctx.sourceId ?? "unknown";
    const diagnostics = ctx.diagnostics;
    const mapAttr = block.attributes["map"];
    let typeName = block.name;
    if (mapAttr !== void 0) {
        const mapped = mapAttr.args["name"];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(typeof mapped === "string", "@@map on a native_enum block parses one string argument");
        typeName = mapped;
    }
    let memberError = false;
    const seenValues = /* @__PURE__ */ new Set();
    const members = [];
    for (const [memberName, value] of Object.entries(block.values)){
        if (seenValues.has(value)) {
            diagnostics?.push({
                code: PSL_NATIVE_ENUM_DUPLICATE_MEMBER_VALUE,
                message: `native_enum "${block.name}": duplicate member value "${value}"`,
                sourceId,
                span: block.parameterSpans[memberName] ?? block.span
            });
            memberError = true;
            continue;
        }
        seenValues.add(value);
        members.push(value);
    }
    if (memberError) return void 0;
    if (members.length === 0) {
        diagnostics?.push({
            code: PSL_NATIVE_ENUM_MISSING_MEMBERS,
            message: `native_enum "${block.name}" must have at least one member`,
            sourceId,
            span: block.span
        });
        return;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$native$2d$enum$2d$CdP3b_$2d$R$2d$DgG3pi5p$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]({
        typeName,
        members
    });
}
/**
* `native_enum`'s entity-type factory output, checked separately from the assembled
* `postgresAuthoringEntityTypes` map below: `deriveValueSet` is SQL-family surface
* ({@link SqlValueSetDerivingEntityTypeOutput}), not part of the framework
* `AuthoringEntityTypeFactoryOutput` shape, so folding it directly into the map's single
* `satisfies AuthoringEntityTypeNamespace` check would trip an excess-property error. Checking it
* here against the intersection of both shapes keeps it structurally valid against each without
* widening the map's own check.
*/ const nativeEnumEntityTypeOutput = {
    factory: lowerNativeEnumFromBlock,
    deriveValueSet: (entity)=>({
            kind: "valueSet",
            values: [
                ...entity.members
            ]
        })
};
/**
* Lowers a `role <name> {}` block into a {@link PostgresRole}. Roles are
* cluster-scoped in Postgres, so the block must be declared inside
* `namespace unbound { … }` — any other lexical namespace (a named schema,
* or the default bucket top-level declarations resolve to) is a load-time
* diagnostic. The lowered entity carries the unbound coordinate.
*/ function lowerRoleFromBlock(block, ctx) {
    if (block.namespaceId !== __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__["UNBOUND_NAMESPACE_ID"]) {
        ctx.diagnostics?.push({
            code: PSL_ROLE_BLOCK_OUTSIDE_UNBOUND_NAMESPACE,
            message: `\`role\` block "${block.name}" must be declared inside \`namespace unbound { }\`, not in namespace "${block.namespaceId}"`,
            sourceId: ctx.sourceId ?? "unknown",
            span: block.span
        });
        return;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"]({
        name: block.name,
        namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__["UNBOUND_NAMESPACE_ID"]
    });
}
const postgresAuthoringEntityTypes = {
    role: {
        kind: "entity",
        discriminator: "role",
        validatorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"],
        output: {
            factory: lowerRoleFromBlock
        }
    },
    rls: {
        kind: "entity",
        discriminator: "rls",
        validatorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"],
        output: {
            factory: (input)=>new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"](input)
        }
    },
    policy: {
        kind: "entity",
        discriminator: "policy",
        validatorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"],
        output: policyEntityTypeOutput
    },
    native_enum: {
        kind: "entity",
        discriminator: "native_enum",
        validatorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"],
        output: nativeEnumEntityTypeOutput
    },
    extension: {
        kind: "entity",
        discriminator: "extension",
        validatorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"],
        output: {
            factory: (block)=>new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]({
                    name: block.name
                }),
            nameUniqueAcrossNamespaces: true
        }
    }
};
const policyRequiresRls = {
    parameter: "target",
    attribute: "rls"
};
const policyMapAttribute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["blockAttribute"])("map", {
    documentation: "Maps this row-level security policy to its PostgreSQL policy name.",
    positional: [
        {
            key: "name",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])(),
            documentation: "The nonempty PostgreSQL policy name."
        }
    ],
    refine: (parsed, ctx, attributeNode)=>parsed.name === "" ? [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "@@map policy name must be a non-empty string", PSL_POLICY_INVALID_MAP)
        ] : []
});
const policyBlockAttributes = {
    map: ()=>policyMapAttribute
};
const nativeEnumMapAttribute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["blockAttribute"])("map", {
    documentation: "Maps this native enum to its PostgreSQL type name.",
    positional: [
        {
            key: "name",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])(),
            documentation: "The PostgreSQL enum type name."
        }
    ]
});
const postgresAuthoringPslBlockDescriptors = {
    [POLICY_BLOCK_KEYWORDS.select]: {
        kind: "pslBlock",
        keyword: POLICY_BLOCK_KEYWORDS.select,
        documentation: "Defines a row-level security policy controlling which rows can be selected.",
        discriminator: "policy",
        name: {
            required: true
        },
        spec: policyUsingOnlySpec,
        requiresModelAttribute: policyRequiresRls,
        attributes: policyBlockAttributes
    },
    [POLICY_BLOCK_KEYWORDS.delete]: {
        kind: "pslBlock",
        keyword: POLICY_BLOCK_KEYWORDS.delete,
        documentation: "Defines a row-level security policy controlling which rows can be deleted.",
        discriminator: "policy",
        name: {
            required: true
        },
        spec: policyUsingOnlySpec,
        requiresModelAttribute: policyRequiresRls,
        attributes: policyBlockAttributes
    },
    [POLICY_BLOCK_KEYWORDS.insert]: {
        kind: "pslBlock",
        keyword: POLICY_BLOCK_KEYWORDS.insert,
        documentation: "Defines a row-level security policy checking rows being inserted.",
        discriminator: "policy",
        name: {
            required: true
        },
        spec: policyWithCheckOnlySpec,
        requiresModelAttribute: policyRequiresRls,
        attributes: policyBlockAttributes
    },
    [POLICY_BLOCK_KEYWORDS.update]: {
        kind: "pslBlock",
        keyword: POLICY_BLOCK_KEYWORDS.update,
        documentation: "Defines a row-level security policy controlling row visibility and checks for updates.",
        discriminator: "policy",
        name: {
            required: true
        },
        spec: policyBothPredicatesSpec,
        requiresModelAttribute: policyRequiresRls,
        attributes: policyBlockAttributes
    },
    [POLICY_BLOCK_KEYWORDS.all]: {
        kind: "pslBlock",
        keyword: POLICY_BLOCK_KEYWORDS.all,
        documentation: "Defines a row-level security policy applying to all operations.",
        discriminator: "policy",
        name: {
            required: true
        },
        spec: policyBothPredicatesSpec,
        requiresModelAttribute: policyRequiresRls,
        attributes: policyBlockAttributes
    },
    native_enum: {
        kind: "pslBlock",
        keyword: "native_enum",
        documentation: "Defines a PostgreSQL enum type with named string-valued members.",
        discriminator: "native_enum",
        name: {
            required: true
        },
        spec: nativeEnumSpec,
        nameIsStorageName: true,
        attributes: {
            map: ()=>nativeEnumMapAttribute
        }
    },
    /**
	* PSL block descriptor for `role` (e.g. `role anon {}`). Name-only, no
	* parameters and no body content. Declared inside `namespace unbound { }`
	* — see {@link lowerRoleFromBlock} for the placement check and the
	* coordinate the lowered entity carries.
	*/ role: {
        kind: "pslBlock",
        keyword: "role",
        documentation: "Declares an existing database role in namespace unbound for use in security policies.",
        discriminator: "role",
        name: {
            required: true
        },
        spec: roleSpec
    },
    extension: {
        kind: "pslBlock",
        keyword: "extension",
        documentation: "Declares a PostgreSQL extension the database must have installed, in the schema of the enclosing namespace. In `namespace unbound`, the extension is found through the connection's search path.",
        discriminator: "extension",
        name: {
            required: true
        },
        spec: extensionSpec
    }
};
const postgresRlsSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("rls", {
    documentation: "Enables PostgreSQL row-level security on this model’s table."
});
const postgresRlsSpecFactory = ()=>postgresRlsSpec;
const [firstLanguage, ...remainingLanguages] = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"];
const fullTextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldRef"])();
function postgresFullTextIndexSpec(ctx) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("fullTextIndex", {
        documentation: "Indexes text fields for full-text search. Each item of the list is a weight group, strongest first; a nested list puts several fields in one group. Pass the index from the table's `indexes` to `fullTextMatches` and `fullTextRank` to search the same document.",
        positional: [
            {
                key: "fields",
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oneOf"])(fullTextField, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oneOf"])(fullTextField, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])(fullTextField)), {
                    allowEmpty: false
                })),
                documentation: "The fields to index: one field, or a list of fields and lists of fields. Each top-level item is a weight group, from A down to D."
            }
        ],
        named: {
            language: {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oneOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])(firstLanguage), ...remainingLanguages.map((language)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])(language)))),
                documentation: "The text-search configuration. Defaults to `english`, and must match the language the query operations are given."
            },
            name: {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
                documentation: "The index name. Mutually exclusive with `map`."
            },
            map: {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
                documentation: "The database index name. Mutually exclusive with `name`."
            },
            where: {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["dataTypeValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SQL_EXPRESSION_DATA_TYPE_ID$3e$__["SQL_EXPRESSION_DATA_TYPE_ID"], ctx.dataTypes)),
                documentation: "The SQL predicate restricting rows included in a partial index."
            }
        },
        refine: (value, ctx, attributeNode)=>{
            const diagnostics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"])({
                weightGroups: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["f"])(value.fields, isFieldName)
            }).filter(isPslFullTextIndexProblem).map((problem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])("`@@fullTextIndex`", problem), FULL_TEXT_INDEX_PROBLEM_CODES[problem.kind]));
            if (value.name === void 0 && value.map === void 0) diagnostics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@@fullTextIndex` requires a `name` or `map` argument", PSL_FULL_TEXT_INDEX_REQUIRES_NAME));
            if (value.name !== void 0 && value.map !== void 0) diagnostics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@@fullTextIndex` takes at most one of `name` and `map`", PSL_FULL_TEXT_INDEX_NAME_XOR_MAP));
            return diagnostics;
        }
    });
}
function isFieldName(value) {
    return typeof value === "string";
}
function isPslFullTextIndexProblem(problem) {
    return problem.kind !== "unique" && problem.kind !== "no-fields";
}
const FULL_TEXT_INDEX_PROBLEM_CODES = {
    "too-many-groups": PSL_FULL_TEXT_INDEX_TOO_MANY_GROUPS,
    "empty-group": PSL_FULL_TEXT_INDEX_EMPTY_GROUP,
    "duplicate-field": PSL_FULL_TEXT_INDEX_DUPLICATE_FIELD,
    "not-text": PSL_FULL_TEXT_INDEX_TEXT_FIELD
};
const postgresFullTextIndexSpecFactory = (ctx)=>postgresFullTextIndexSpec(ctx);
/**
* `@@` model attributes contributed by the Postgres target pack.
*
* `@@rls` is argument-less: presence marks the model's table
* RLS-controlled. It lowers to a {@link PostgresRlsEnablement} marker in
* the namespace's `entries.rls`, keyed by the model's table name — the
* marker (never the policy set) is what drives
* `ENABLE`/`DISABLE ROW LEVEL SECURITY` planning.
*/ const postgresAuthoringModelAttributes = {
    rls: {
        kind: "modelAttribute",
        attribute: "rls",
        spec: postgresRlsSpecFactory,
        lower: (_parsed, ctx)=>({
                key: ctx.storageName,
                entity: new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"]({
                    tableName: ctx.storageName,
                    namespaceId: ctx.namespaceId
                })
            })
    },
    fullTextIndex: {
        kind: "modelAttribute",
        attribute: "fullTextIndex",
        spec: postgresFullTextIndexSpecFactory,
        repeatable: true,
        lower: (parsed, ctx)=>{
            const fieldGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["f"])(parsed.fields, isFieldName);
            const problems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"])({
                weightGroups: fieldGroups,
                codecs: {
                    codecIdOf: (fieldName)=>ctx.fieldStorageName(fieldName) === void 0 ? void 0 : ctx.fieldCodecId(fieldName),
                    traitsOf: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$codec$2d$traits$2d$DeZiroEE$2d$BACV_wuh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]
                }
            }).filter(isPslFullTextIndexProblem);
            for (const problem of problems)ctx.diagnostics?.push({
                code: FULL_TEXT_INDEX_PROBLEM_CODES[problem.kind],
                message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])("`@@fullTextIndex`", problem, (fieldName)=>`${ctx.modelName}.${fieldName}`),
                sourceId: ctx.sourceId ?? "unknown"
            });
            if (problems.length > 0) return void 0;
            const weightGroups = fieldGroups.map((group)=>group.map((fieldName)=>{
                    const columnName = ctx.fieldStorageName(fieldName);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__assertDefined$3e$__["assertDefined"])(columnName, `@@fullTextIndex field "${fieldName}" has no storage column`);
                    return columnName;
                }));
            return {
                index: {
                    columns: weightGroups.flat(),
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"],
                    options: {
                        weightGroups,
                        language: parsed.language ?? "english"
                    },
                    where: parsed.where === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__sqlTextFromStored$3e$__["sqlTextFromStored"])(parsed.where.value.value),
                    unique: void 0,
                    name: parsed.name,
                    map: parsed.map
                }
            };
        }
    }
};
function predicateText(predicate, what) {
    return predicate === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__requireSqlExpression$3e$__["requireSqlExpression"])(predicate, what).text;
}
/**
* Resolves an entity handle's `target` ref to a table coordinate of this
* contract, or throws the load-time diagnostic naming the handle: a
* cross-space target is rejected (you cannot CREATE POLICY on a table
* another space owns) and an unresolved target names the model.
*/ function requireLocalTarget(refs, subject) {
    const target = refs["target"];
    if (target !== void 0 && target.kind === "resolved") return {
        namespaceId: target.namespaceId,
        tableName: target.tableName
    };
    if (target !== void 0 && target.kind === "cross-space") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.POLICY_INVALID", `defineContract: ${subject} targets model "${target.modelName ?? target.tableName}", which lives in another contract space. Policies and rlsEnabled entries must target a model declared in this contract.`, {
        meta: {
            model: target.modelName ?? target.tableName,
            reason: "cross-space-target"
        }
    });
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.MODEL_UNKNOWN", `defineContract: ${subject} targets model "${target?.modelName ?? "<anonymous>"}", which is not in the contract's models. Add the model to \`models\`.`, {
        meta: {
            model: target?.modelName ?? "<anonymous>"
        }
    });
}
/**
* The SQL-family entity-handle batch lowering hook for the Postgres pack
* (`SqlEntityHandleLoweringContribution`). Receives every `entities` handle
* whose kind this pack registered — batch, so the cross-entity diagnostics
* (duplicate prefix, policy without rlsEnabled, duplicate role) can see
* sibling handles — and lowers them with the same keying and hash assembly
* as the PSL path: `policy` keyed by prefix (wire name via
* {@link buildRlsPolicyEntity}), `rls` keyed by table name, `role` keyed by
* name and filed under the default namespace (roles are declared
* contract-wide; PSL has no role block to set a precedent).
*/ function postgresLowerEntityHandles(input) {
    const enablements = /* @__PURE__ */ new Map();
    const roles = /* @__PURE__ */ new Map();
    const extensionNamespaces = /* @__PURE__ */ new Map();
    const policies = [];
    const coordinateKey = (coordinate)=>`${coordinate.namespaceId} ${coordinate.tableName}`;
    for (const { handle, refs } of input.handles)switch(handle.entityKind){
        case "rls":
            {
                const coordinate = requireLocalTarget(refs, "an rlsEnabled entry");
                const key = coordinateKey(coordinate);
                if (!enablements.has(key)) enablements.set(key, {
                    coordinate,
                    entity: new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"]({
                        tableName: coordinate.tableName,
                        namespaceId: coordinate.namespaceId
                    })
                });
                break;
            }
        case "role":
            {
                const roleHandle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(handle);
                if (roles.has(roleHandle.name)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.ROLE_INVALID", `defineContract: role "${roleHandle.name}" is declared more than once in the entities list.`, {
                    meta: {
                        role: roleHandle.name,
                        reason: "duplicate"
                    }
                });
                roles.set(roleHandle.name, new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"]({
                    name: roleHandle.name,
                    namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__["UNBOUND_NAMESPACE_ID"]
                }));
                break;
            }
        case "policy":
            {
                const policyHandle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(handle);
                policies.push({
                    handle: policyHandle,
                    refs
                });
                break;
            }
        case "extension":
            {
                const extensionHandle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(handle);
                const namespaceId = extensionHandle.namespace ?? input.defaultNamespaceId;
                const declaredIn = extensionNamespaces.get(extensionHandle.name);
                if (declaredIn === namespaceId) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.NAME_DUPLICATE", `defineContract: extension "${extensionHandle.name}" is declared more than once.`, {
                    meta: {
                        kind: "extension",
                        name: extensionHandle.name,
                        namespaceId
                    }
                });
                if (declaredIn !== void 0) {
                    const namespaces = [
                        declaredIn,
                        namespaceId
                    ].sort();
                    const namespaceNames = namespaces.map((id)=>id === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__["UNBOUND_NAMESPACE_ID"] ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$ast$2d$CyvE6CR$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__UNBOUND_PSL_NAMESPACE_NAME$3e$__["UNBOUND_PSL_NAMESPACE_NAME"] : id);
                    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.NAME_DUPLICATE", `defineContract: extension "${extensionHandle.name}" is declared in namespaces ${namespaceNames.sort().map((name)=>`"${name}"`).join(" and ")}; declare it in one namespace only.`, {
                        meta: {
                            kind: "extension",
                            name: extensionHandle.name,
                            namespaces
                        }
                    });
                }
                extensionNamespaces.set(extensionHandle.name, namespaceId);
                break;
            }
        default:
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.ENTITY_KIND_INVALID", `defineContract: the postgres pack does not lower "${handle.entityKind}" handles from the entities list.`, {
                meta: {
                    entityKind: handle.entityKind
                }
            });
    }
    const rows = [];
    const seenPrefixes = /* @__PURE__ */ new Set();
    for (const { handle: policy, refs } of policies){
        const prefix = policy.name;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__assertWireNamePrefixLength$3e$__["assertWireNamePrefixLength"])(prefix, "defineContract: policy prefix");
        const coordinate = requireLocalTarget(refs, `policy "${prefix}"`);
        if (!enablements.has(coordinateKey(coordinate))) {
            const target = refs["target"];
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.POLICY_INVALID", `defineContract: policy "${prefix}" targets model "${target?.modelName ?? coordinate.tableName}", whose table is not RLS-enabled. Add rlsEnabled(<model>) to the entities list.`, {
                meta: {
                    prefix,
                    model: target?.modelName ?? coordinate.tableName,
                    reason: "target-not-rls-enabled"
                }
            });
        }
        const prefixKey = `${coordinate.namespaceId} ${prefix}`;
        if (seenPrefixes.has(prefixKey)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.POLICY_INVALID", `defineContract: policy prefix "${prefix}" is declared more than once in namespace "${coordinate.namespaceId}". Policy prefixes must be unique per namespace.`, {
            meta: {
                prefix,
                namespaceId: coordinate.namespaceId,
                reason: "duplicate-prefix"
            }
        });
        seenPrefixes.add(prefixKey);
        const roleNames = [
            ...new Set(policy.roles.map((roleHandle)=>roleHandle.name))
        ].sort();
        rows.push({
            namespaceId: coordinate.namespaceId,
            entityKind: "policy",
            key: prefix,
            entity: buildRlsPolicyEntity({
                prefix,
                tableName: coordinate.tableName,
                namespaceId: coordinate.namespaceId,
                operation: policy.operation,
                roles: roleNames,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("using", predicateText(policy.using, `Policy "${prefix}" using`)),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("withCheck", predicateText(policy.withCheck, `Policy "${prefix}" withCheck`))
            })
        });
    }
    for (const { coordinate, entity } of enablements.values())rows.push({
        namespaceId: coordinate.namespaceId,
        entityKind: "rls",
        key: coordinate.tableName,
        entity
    });
    for (const [name, entity] of roles)rows.push({
        namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__["UNBOUND_NAMESPACE_ID"],
        entityKind: "role",
        key: name,
        entity
    });
    for (const [name, namespaceId] of extensionNamespaces)rows.push({
        namespaceId,
        entityKind: "extension",
        key: name,
        entity: new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]({
            name
        })
    });
    return rows;
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/canonicalize-RdxoUHao-FTTkizfe.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i",
    ()=>policyRoleList,
    "n",
    ()=>POLICY_OPERATION_PREDICATES,
    "r",
    ()=>computeContentHash,
    "t",
    ()=>POLICY_COMMAND_SQL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__m__as__normalizeSqlBody$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/naming-DEpT6Zad-C9PFkWt6.mjs [app-route] (ecmascript) <export m as normalizeSqlBody>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
;
//#region ../../../3-targets/postgres/1-target/dist/canonicalize-RdxoUHao.mjs
/**
* Which predicate each RLS operation admits, mirroring Postgres: SELECT and
* DELETE decide row visibility/eligibility with `USING` only; INSERT
* validates the new row with `WITH CHECK` only; UPDATE and ALL take either
* or both. Single-homed here so the PSL lowering and the TS handle
* constructors enforce the same matrix.
*/ const POLICY_OPERATION_PREDICATES = {
    select: {
        using: true,
        withCheck: false
    },
    insert: {
        using: false,
        withCheck: true
    },
    update: {
        using: true,
        withCheck: true
    },
    delete: {
        using: true,
        withCheck: false
    },
    all: {
        using: true,
        withCheck: true
    }
};
/** The command `CREATE POLICY … FOR <command>` names for each operation, which `pg_policies.cmd` prints back. */ const POLICY_COMMAND_SQL = {
    select: "SELECT",
    insert: "INSERT",
    update: "UPDATE",
    delete: "DELETE",
    all: "ALL"
};
/** The roles `CREATE POLICY … TO <roles>` names: the policy's roles, or `PUBLIC` when it has none. */ function policyRoleList(roles) {
    return roles.length === 0 ? [
        "PUBLIC"
    ] : roles;
}
/**
* Returns the first 8 lowercase hex characters of the SHA-256 digest over the
* canonical content tuple for an RLS policy:
*
*   [normalizeSqlBody(using), normalizeSqlBody(withCheck), sortedRoles, operation, permissive]
*
* Schema and table are excluded (they are orthogonal to policy equivalence).
* Uses `JSON.stringify` for a deterministic encoding.
*/ function computeContentHash(parts) {
    const using = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__m__as__normalizeSqlBody$3e$__["normalizeSqlBody"])(parts.using ?? "");
    const withCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__m__as__normalizeSqlBody$3e$__["normalizeSqlBody"])(parts.withCheck ?? "");
    const roles = [
        ...new Set(parts.roles)
    ].sort();
    const permissive = parts.permissive ? "permissive" : "restrictive";
    const tuple = JSON.stringify([
        using,
        withCheck,
        roles,
        parts.operation,
        permissive
    ]);
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(tuple).digest("hex").slice(0, 8);
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/canonicalize-RdxoUHao-FTTkizfe.mjs [app-route] (ecmascript) <export n as POLICY_OPERATION_PREDICATES>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POLICY_OPERATION_PREDICATES",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$canonicalize$2d$RdxoUHao$2d$FTTkizfe$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$canonicalize$2d$RdxoUHao$2d$FTTkizfe$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/canonicalize-RdxoUHao-FTTkizfe.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/check-expressions-DL9WtMO5-CUcbN2JG.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>postgresRenderCheckExpressions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/sql-utils-VXrIh8dJ-DVxo_Ygp.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/assertions-Dw1lZz_Q.mjs [app-route] (ecmascript) <export n as invariant>");
;
;
//#region ../../../3-targets/postgres/1-target/dist/check-expressions-DL9WtMO5.mjs
/**
* Renders the checks a Postgres column needs, as opaque predicate text.
*
* A domain enum has no type-level enforcement, so membership is a
* predicate: `IN` for a scalar, and `<@` containment for an array — an array
* column cannot use `IN` at all (`operator does not exist: text[] = text`).
* Array membership strips NULL elements first, leaving element nullability to
* the separate element-non-null check emitted for semantically strict lists.
*
* Both forms compare members in the column's own type: the `IN` list and
* the `<@` array literal are untyped, so Postgres reads each member as the
* column (or element) type. A cast to `text` would compare the type's text
* output instead, which for `inet` always carries the prefix length.
*/ function postgresRenderCheckExpressions(input) {
    const candidates = [];
    const column = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(input.columnName);
    const isMany = input.many !== false;
    const elementNullable = input.many !== false && input.many.elementNullable;
    if (input.memberValues !== void 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(input.memberValues.length > 0, `check for "${input.tableName}"."${input.columnName}": empty member set; both authoring surfaces reject a member-less enum before rendering`);
        for (const value of input.memberValues)(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(typeof value === "string" || Number.isFinite(value), `check for "${input.tableName}"."${input.columnName}": non-finite numeric member`);
        candidates.push({
            kind: "membership",
            columnName: input.columnName,
            expression: isMany ? `array_remove(${column}, NULL) <@ '${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(arrayLiteral(input.memberValues))}'` : `${column} IN (${input.memberValues.map(sqlLiteral).join(", ")})`
        });
    }
    if (isMany && !elementNullable) candidates.push({
        kind: "elementNotNull",
        columnName: input.columnName,
        expression: `array_position(${column}, NULL) IS NULL`
    });
    if (input.valueObject !== void 0) candidates.push({
        kind: "shape",
        columnName: input.columnName,
        expression: valueObjectCheck(column, input.valueObject)
    });
    return candidates;
}
/**
* One strict `jsonpath` predicate over the whole column value. Strict mode keeps a comparison from unwrapping an array, and `IS TRUE` makes a predicate that evaluates to unknown fail the check, as a CHECK would otherwise pass on NULL. Member values are read through `keyvalue()`, so an absent member is never an error.
*/ function valueObjectCheck(column, columnValueObject) {
    const field = {
        nullable: columnValueObject.nullable,
        many: columnValueObject.many,
        type: {
            kind: "valueObject",
            valueObject: columnValueObject.valueObject
        }
    };
    const predicate = fieldPredicate(field, "$");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(predicate !== void 0, "a column that holds a value object always has a predicate");
    const match = (path)=>`jsonb_path_match(${column}, '${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(`strict ${path}`)}') IS TRUE`;
    return field.nullable ? `${column} IS NULL OR ${match(`$.type() == "null" || (${predicate})`)}` : match(predicate);
}
/** What the value at `path` must satisfy, or `undefined` when any value is accepted. */ function fieldPredicate(field, path) {
    if (field.many === false) return valuePredicate(field.type, path);
    const element = valuePredicate(field.type, "@");
    const { elementNullable } = field.many;
    const invalidElement = element === void 0 ? elementNullable ? void 0 : "@.type() == \"null\"" : elementNullable ? `!(@.type() == "null" || (${element}))` : `!((${element}))`;
    const isArray = `${path}.type() == "array"`;
    return invalidElement === void 0 ? isArray : `${isArray} && !exists(${path}[*] ? (${invalidElement}))`;
}
/** A member of any JSON type accepts every value, JSON `null` included; a member of any other JSON type is of that type, so never JSON `null`. */ function valuePredicate(type, path) {
    switch(type.kind){
        case "valueObject":
            return objectPredicate(type.valueObject, path);
        case "anyObject":
            return `${path}.type() == "object"`;
        case "scalar":
            if (type.values !== void 0) return valueSetPredicate(type.values, path);
            return type.jsonType === "any" ? void 0 : `${path}.type() == "${type.jsonType}"`;
    }
}
function valueSetPredicate(values, path) {
    const alternatives = (jsonType, members)=>`${path}.type() == "${jsonType}" && (${members.map((value)=>`${path} == ${jsonPathLiteral(value)}`).join(" || ")})`;
    const strings = values.filter((value)=>typeof value === "string");
    const numbers = values.filter((value)=>typeof value === "number");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(values.length > 0, "a value set restricting a value object member has no values");
    if (numbers.length === 0) return alternatives("string", strings);
    if (strings.length === 0) return alternatives("number", numbers);
    return `(${alternatives("string", strings)}) || (${alternatives("number", numbers)})`;
}
function objectPredicate(valueObject, path) {
    const names = Object.keys(valueObject.fields).sort();
    const members = names.flatMap((name)=>{
        const field = valueObject.fields[name];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(field !== void 0, `value object member "${name}" is missing`);
        const isMember = `@.key == ${jsonPathLiteral(name)}`;
        const predicate = fieldPredicate(field, "@.value");
        if (!field.nullable) return [
            predicate === void 0 ? `exists(${path}.keyvalue() ? (${isMember}))` : `exists(${path}.keyvalue() ? (${isMember} && (${predicate})))`
        ];
        return predicate === void 0 ? [] : [
            `!exists(${path}.keyvalue() ? (${isMember} && !(@.value.type() == "null" || (${predicate}))))`
        ];
    });
    const otherKey = names.length === 0 ? `!exists(${path}.keyvalue())` : `!exists(${path}.keyvalue() ? (${names.map((name)=>`@.key != ${jsonPathLiteral(name)}`).join(" && ")}))`;
    return [
        `${path}.type() == "object"`,
        ...members,
        otherKey
    ].join(" && ");
}
function jsonPathLiteral(value) {
    return typeof value === "string" ? JSON.stringify(value) : String(value);
}
function sqlLiteral(value) {
    return typeof value === "string" ? `'${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(value)}'` : String(value);
}
function arrayLiteral(values) {
    return `{${values.map((value)=>typeof value === "string" ? `"${value.replace(/["\\]/g, "\\$&")}"` : String(value)).join(",")}}`;
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-descriptor-DBeD0UlS-BfvrE-KZ.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>postgresCodec,
    "i",
    ()=>isPostgresCodecDescriptor,
    "n",
    ()=>buildPostgresCodecDescriptorRegistry,
    "r",
    ()=>definePostgresCodecs,
    "t",
    ()=>PostgresCodecDescriptor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__CaseExpr$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export i as CaseExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__ColumnRef$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export o as ColumnRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__DerivedTableSource$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export l as DerivedTableSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__FunctionSource$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export h as FunctionSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__b__as__JsonArrayAggExpr$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export b as JsonArrayAggExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__LiteralExpr$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export C as LiteralExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__NativeJsonValueProjection$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/ast-C3itulLi.mjs [app-route] (ecmascript) <export r as NativeJsonValueProjection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__E__as__NullCheckExpr$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export E as NullCheckExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__k__as__OrderByItem$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export k as OrderByItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__M__as__ProjectionItem$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export M as ProjectionItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__F__as__SelectAst$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export F as SelectAst>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__I__as__SubqueryExpr$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export I as SubqueryExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$descriptor$2d$CPSGZunM$2d$DxrbRHX1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__CodecDescriptorImpl$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/codec-descriptor-CPSGZunM-DxrbRHX1.mjs [app-route] (ecmascript) <export t as CodecDescriptorImpl>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$codec$2d$qqMjZrmn$2d$Cok8elAo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__validateCodecTypeParams$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/resolve-codec-qqMjZrmn-Cok8elAo.mjs [app-route] (ecmascript) <export o as validateCodecTypeParams>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-route] (ecmascript) <export o as structuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$codec$2d$json$2d$type$2d$DUWyBtJk$2d$BVTavkH0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__isJsonType$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/codec-json-type-DUWyBtJk-BVTavkH0.mjs [app-route] (ecmascript) <export r as isJsonType>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export t as InternalError>");
;
;
;
;
;
;
//#region ../../../3-targets/postgres/1-target/dist/codec-descriptor-DBeD0UlS.mjs
const POSTGRES_CODEC_DESCRIPTOR_KIND = "postgres-codec";
const ARRAY_INPUT_ALIAS = "array_input";
const ARRAY_ELEMENT_ALIAS = "array_element";
const ARRAY_VALUE_COLUMN = "value";
const ARRAY_ORDINALITY_COLUMN = "ordinality";
var PostgresCodecDescriptor = class extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$descriptor$2d$CPSGZunM$2d$DxrbRHX1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__CodecDescriptorImpl$3e$__["CodecDescriptorImpl"] {
    descriptorKind = POSTGRES_CODEC_DESCRIPTOR_KIND;
    jsonArrayProjection(expression, params) {
        const boundArray = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__ColumnRef$3e$__["ColumnRef"].of(ARRAY_INPUT_ALIAS, ARRAY_VALUE_COLUMN);
        const element = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__ColumnRef$3e$__["ColumnRef"].of(ARRAY_ELEMENT_ALIAS, ARRAY_VALUE_COLUMN);
        const ordinality = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__ColumnRef$3e$__["ColumnRef"].of(ARRAY_ELEMENT_ALIAS, ARRAY_ORDINALITY_COLUMN);
        const projectedElement = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__CaseExpr$3e$__["CaseExpr"].of([
            {
                condition: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__E__as__NullCheckExpr$3e$__["NullCheckExpr"].isNull(element),
                value: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__LiteralExpr$3e$__["LiteralExpr"].of(null)
            }
        ], this.jsonProjection(element, params));
        const aggregate = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__b__as__JsonArrayAggExpr$3e$__["JsonArrayAggExpr"].of(new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__NativeJsonValueProjection$3e$__["NativeJsonValueProjection"](projectedElement), "emptyArray", [
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__k__as__OrderByItem$3e$__["OrderByItem"].asc(ordinality)
        ]);
        const aggregateQuery = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__F__as__SelectAst$3e$__["SelectAst"].from(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__FunctionSource$3e$__["FunctionSource"].of("unnest", [
            boundArray
        ], {
            alias: ARRAY_ELEMENT_ALIAS,
            columnAliases: [
                ARRAY_VALUE_COLUMN,
                ARRAY_ORDINALITY_COLUMN
            ]
        }).withOrdinality()).withProjection([
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__M__as__ProjectionItem$3e$__["ProjectionItem"].of(ARRAY_VALUE_COLUMN, aggregate)
        ]);
        const arrayResult = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__CaseExpr$3e$__["CaseExpr"].of([
            {
                condition: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__E__as__NullCheckExpr$3e$__["NullCheckExpr"].isNull(boundArray),
                value: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__LiteralExpr$3e$__["LiteralExpr"].of(null)
            }
        ], __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__I__as__SubqueryExpr$3e$__["SubqueryExpr"].of(aggregateQuery));
        const inputBinding = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__F__as__SelectAst$3e$__["SelectAst"].noFrom().withProjection([
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__M__as__ProjectionItem$3e$__["ProjectionItem"].of(ARRAY_VALUE_COLUMN, expression)
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__I__as__SubqueryExpr$3e$__["SubqueryExpr"].of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__F__as__SelectAst$3e$__["SelectAst"].from(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__DerivedTableSource$3e$__["DerivedTableSource"].as(ARRAY_INPUT_ALIAS, inputBinding)).withProjection([
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__M__as__ProjectionItem$3e$__["ProjectionItem"].of(ARRAY_VALUE_COLUMN, arrayResult)
        ]));
    }
    projectJson(expression, ref) {
        const params = this.validateParams(ref);
        return ref.many === true ? this.jsonArrayProjection(expression, params) : this.jsonProjection(expression, params);
    }
    validateParams(ref) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$codec$2d$qqMjZrmn$2d$Cok8elAo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__validateCodecTypeParams$3e$__["validateCodecTypeParams"])(this, ref));
    }
};
var PostgresCodecDescriptorAdapter = class extends PostgresCodecDescriptor {
    options;
    dataType;
    jsonType;
    codecId;
    traits;
    paramsSchema;
    renderOutputType;
    renderInputType;
    renderValueLiteral;
    factory;
    constructor(descriptor, options){
        super();
        this.options = options;
        this.dataType = options.dataType.id;
        this.jsonType = descriptor.jsonType;
        this.codecId = descriptor.codecId;
        this.traits = descriptor.traits;
        this.paramsSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(options.dataType.params);
        this.factory = (params)=>options.factory(this, options.dataType, params);
        const renderOutputType = descriptor.renderOutputType;
        if (renderOutputType !== void 0) this.renderOutputType = (params)=>renderOutputType.call(descriptor, params);
        const renderInputType = descriptor.renderInputType;
        if (renderInputType !== void 0) this.renderInputType = (params)=>renderInputType.call(descriptor, params);
        if (descriptor.renderValueLiteral !== void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`${descriptor.codecId} is a family codec template with its own renderValueLiteral. A family template renders no literal, because only the target knows the form its data type stores a value in; pass renderValueLiteral in the options instead.`);
        if (options.renderValueLiteral !== void 0) this.renderValueLiteral = options.renderValueLiteral;
        if (descriptor.enumRefusal !== void 0) this.enumRefusal = descriptor.enumRefusal;
    }
    jsonProjection(expression, params) {
        return this.options.jsonProjection(expression, params);
    }
    jsonArrayProjection(expression, params) {
        return this.options.jsonArrayProjection === void 0 ? super.jsonArrayProjection(expression, params) : this.options.jsonArrayProjection(expression, params);
    }
};
function postgresCodec(descriptor, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(new PostgresCodecDescriptorAdapter(descriptor, options));
}
function definePostgresCodecs(descriptors) {
    return descriptors;
}
function isPostgresCodecDescriptor(value) {
    return typeof value === "object" && value !== null && "descriptorKind" in value && value.descriptorKind === POSTGRES_CODEC_DESCRIPTOR_KIND && "codecId" in value && typeof value.codecId === "string" && "traits" in value && Array.isArray(value.traits) && "paramsSchema" in value && (value.paramsSchema === void 0 || isObjectLike(value.paramsSchema) && "~standard" in value.paramsSchema && isObjectLike(value.paramsSchema["~standard"]) && "validate" in value.paramsSchema["~standard"] && typeof value.paramsSchema["~standard"].validate === "function") && "isParameterized" in value && typeof value.isParameterized === "boolean" && "factory" in value && typeof value.factory === "function" && "projectJson" in value && typeof value.projectJson === "function" && (!("jsonType" in value) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$codec$2d$json$2d$type$2d$DUWyBtJk$2d$BVTavkH0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__isJsonType$3e$__["isJsonType"])(value.jsonType));
}
function isObjectLike(value) {
    return typeof value === "object" && value !== null || typeof value === "function";
}
var PostgresCodecDescriptorRegistryImpl = class {
    #descriptors;
    constructor(descriptors){
        this.#descriptors = descriptors;
        Object.freeze(this);
    }
    descriptorFor(codecId) {
        return this.#descriptors.get(codecId);
    }
    *values() {
        yield* this.#descriptors.values();
    }
};
function buildPostgresCodecDescriptorRegistry(descriptors) {
    const byId = /* @__PURE__ */ new Map();
    for (const descriptor of descriptors){
        if (!isPostgresCodecDescriptor(descriptor)) {
            const codecId = candidateCodecId(descriptor);
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("RUNTIME.CODEC_DESCRIPTOR_INVALID", `Codec descriptor '${codecId}' is not a valid PostgreSQL codec descriptor.`, {
                why: "PostgreSQL codec registries require the postgres-codec discriminant and complete target descriptor methods.",
                fix: "Extend PostgresCodecDescriptor or adapt a generic descriptor with postgresCodec().",
                meta: {
                    codecId
                }
            });
        }
        if (byId.has(descriptor.codecId)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("RUNTIME.DUPLICATE_CODEC", `Duplicate PostgreSQL codec descriptor id '${descriptor.codecId}'.`, {
            why: "Each codecId must resolve to exactly one PostgreSQL descriptor during registry composition.",
            fix: "Remove the duplicate target, adapter, or extension contribution.",
            meta: {
                codecId: descriptor.codecId,
                target: "postgres"
            }
        });
        byId.set(descriptor.codecId, descriptor);
    }
    return new PostgresCodecDescriptorRegistryImpl(byId);
}
function candidateCodecId(value) {
    return typeof value === "object" && value !== null && "codecId" in value && typeof value.codecId === "string" ? value.codecId : "<unknown>";
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-ids-2htdtS66-CJPMZv1t.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>PG_TIMESTAMP_INSTANT_CODEC_ID,
    "B",
    ()=>PG_VARCHAR_CODEC_ID,
    "C",
    ()=>PG_OID_CODEC_ID,
    "D",
    ()=>PG_TIMESTAMPTZ_STRING_CODEC_ID,
    "E",
    ()=>PG_TIMESTAMPTZ_DATE_CODEC_ID,
    "F",
    ()=>PG_TIME_TEMPORAL_CODEC_ID,
    "I",
    ()=>PG_TSQUERY_CODEC_ID,
    "L",
    ()=>PG_UNBOUNDED_INT_CODEC_ID,
    "M",
    ()=>PG_TIMESTAMP_TEMPORAL_CODEC_ID,
    "N",
    ()=>PG_TIMETZ_CODEC_ID,
    "O",
    ()=>PG_TIMESTAMPTZ_TEMPORAL_CODEC_ID,
    "P",
    ()=>PG_TIME_STRING_CODEC_ID,
    "R",
    ()=>PG_UUID_CODEC_ID,
    "S",
    ()=>PG_NUMERIC_CODEC_ID,
    "T",
    ()=>PG_TEXT_CODEC_ID,
    "V",
    ()=>PG_XML_CODEC_ID,
    "_",
    ()=>PG_INTERVAL_STRING_CODEC_ID,
    "a",
    ()=>PG_DATE_STRING_CODEC_ID,
    "b",
    ()=>PG_JSON_CODEC_ID,
    "c",
    ()=>PG_FLOAT4_CODEC_ID,
    "d",
    ()=>PG_INET_CODEC_ID,
    "f",
    ()=>PG_INT2_CODEC_ID,
    "g",
    ()=>PG_INTERVAL_CODEC_ID,
    "h",
    ()=>PG_INT8_NUMBER_CODEC_ID,
    "i",
    ()=>PG_CHAR_CODEC_ID,
    "j",
    ()=>PG_TIMESTAMP_STRING_CODEC_ID,
    "k",
    ()=>PG_TIMESTAMP_DATE_CODEC_ID,
    "l",
    ()=>PG_FLOAT8_CODEC_ID,
    "m",
    ()=>PG_INT8_CODEC_ID,
    "n",
    ()=>PG_BOOL_CODEC_ID,
    "o",
    ()=>PG_DATE_TEMPORAL_CODEC_ID,
    "p",
    ()=>PG_INT4_CODEC_ID,
    "r",
    ()=>PG_BYTEA_CODEC_ID,
    "s",
    ()=>PG_ENUM_CODEC_ID,
    "t",
    ()=>PG_BIT_CODEC_ID,
    "u",
    ()=>PG_FLOAT_CODEC_ID,
    "v",
    ()=>PG_INT_CODEC_ID,
    "w",
    ()=>PG_TEXT_ARRAY_CODEC_ID,
    "x",
    ()=>PG_MONEY_CODEC_ID,
    "y",
    ()=>PG_JSONB_CODEC_ID,
    "z",
    ()=>PG_VARBIT_CODEC_ID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__SQL_CHAR_CODEC_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/ast-C3itulLi.mjs [app-route] (ecmascript) <export i as SQL_CHAR_CODEC_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__SQL_FLOAT_CODEC_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/ast-C3itulLi.mjs [app-route] (ecmascript) <export a as SQL_FLOAT_CODEC_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__SQL_INT_CODEC_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/ast-C3itulLi.mjs [app-route] (ecmascript) <export o as SQL_INT_CODEC_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__SQL_RAW_CODEC_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/ast-C3itulLi.mjs [app-route] (ecmascript) <export s as SQL_RAW_CODEC_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__SQL_TEXT_CODEC_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/ast-C3itulLi.mjs [app-route] (ecmascript) <export c as SQL_TEXT_CODEC_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__SQL_VARCHAR_CODEC_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/ast-C3itulLi.mjs [app-route] (ecmascript) <export l as SQL_VARCHAR_CODEC_ID>");
;
//#region ../../../3-targets/postgres/1-target/dist/codec-ids-2htdtS66.mjs
const PG_TEXT_CODEC_ID = "pg/text@1";
const PG_TEXT_ARRAY_CODEC_ID = "pg/text-array@1";
const PG_ENUM_CODEC_ID = "pg/enum@1";
const PG_CHAR_CODEC_ID = "pg/char@1";
const PG_VARCHAR_CODEC_ID = "pg/varchar@1";
const PG_INT_CODEC_ID = "pg/int@1";
const PG_INT2_CODEC_ID = "pg/int2@1";
const PG_INT4_CODEC_ID = "pg/int4@1";
const PG_INT8_CODEC_ID = "pg/int8@1";
const PG_INT8_NUMBER_CODEC_ID = "pg/int8number@1";
const PG_FLOAT_CODEC_ID = "pg/float@1";
const PG_FLOAT4_CODEC_ID = "pg/float4@1";
const PG_FLOAT8_CODEC_ID = "pg/float8@1";
const PG_NUMERIC_CODEC_ID = "pg/numeric@1";
const PG_UNBOUNDED_INT_CODEC_ID = "pg/unboundedint@1";
const PG_BOOL_CODEC_ID = "pg/bool@1";
const PG_BIT_CODEC_ID = "pg/bit@1";
const PG_VARBIT_CODEC_ID = "pg/varbit@1";
const PG_DATE_TEMPORAL_CODEC_ID = "pg/date-temporal@1";
const PG_TIMESTAMP_TEMPORAL_CODEC_ID = "pg/timestamp-temporal@1";
const PG_TIMESTAMPTZ_TEMPORAL_CODEC_ID = "pg/timestamptz-temporal@1";
const PG_TIME_TEMPORAL_CODEC_ID = "pg/time-temporal@1";
const PG_DATE_STRING_CODEC_ID = "pg/date-string@1";
const PG_TIMESTAMP_STRING_CODEC_ID = "pg/timestamp-string@1";
const PG_TIMESTAMPTZ_STRING_CODEC_ID = "pg/timestamptz-string@1";
const PG_TIMESTAMPTZ_DATE_CODEC_ID = "pg/timestamptz-date@1";
const PG_TIMESTAMP_DATE_CODEC_ID = "pg/timestamp-date@1";
const PG_TIMESTAMP_INSTANT_CODEC_ID = "pg/timestamp-instant@1";
const PG_TIME_STRING_CODEC_ID = "pg/time-string@1";
const PG_TIMETZ_CODEC_ID = "pg/timetz@1";
const PG_INTERVAL_CODEC_ID = "pg/interval@1";
const PG_INTERVAL_STRING_CODEC_ID = "pg/interval-string@1";
const PG_JSON_CODEC_ID = "pg/json@1";
const PG_JSONB_CODEC_ID = "pg/jsonb@1";
const PG_BYTEA_CODEC_ID = "pg/bytea@1";
const PG_UUID_CODEC_ID = "pg/uuid@1";
const PG_INET_CODEC_ID = "pg/inet@1";
const PG_TSQUERY_CODEC_ID = "pg/tsquery@1";
const PG_XML_CODEC_ID = "pg/xml@1";
const PG_OID_CODEC_ID = "pg/oid@1";
const PG_MONEY_CODEC_ID = "pg/money@1";
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-ids-2htdtS66-CJPMZv1t.mjs [app-route] (ecmascript) <locals> <export s as PG_ENUM_CODEC_ID>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PG_ENUM_CODEC_ID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["s"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-ids-2htdtS66-CJPMZv1t.mjs [app-route] (ecmascript) <locals>");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-registry-7LHPD8C1-BALCyEB-.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i",
    ()=>createPostgresCodecRegistryWithBuiltins,
    "n",
    ()=>assemblePostgresCodecRegistryWithBuiltins,
    "r",
    ()=>createPostgresBuiltinCodecLookup,
    "t",
    ()=>assemblePostgresCodecRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$descriptor$2d$DBeD0UlS$2d$BfvrE$2d$KZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-descriptor-DBeD0UlS-BfvrE-KZ.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/data-types-B47LbZ3z-DRVqjvQZ.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$registry$2d$Ctq7UGkA$2d$_DnAcgYm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/registry-Ctq7UGkA-_DnAcgYm.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-route] (ecmascript) <export o as structuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__T__as__extractCodecLookup$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/control-DzRwUDn-.mjs [app-route] (ecmascript) <export T as extractCodecLookup>");
;
;
;
;
;
//#region ../../../3-targets/postgres/1-target/dist/codec-registry-7LHPD8C1.mjs
/**
* A registry of `descriptors`, refusing a codec whose data type `dataTypeLookup` does not have: the
* SQL renderer writes a parameter's cast from the data type its codec represents.
*/ function buildPostgresCodecRegistry(descriptors, dataTypeLookup) {
    const descriptorRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$descriptor$2d$DBeD0UlS$2d$BfvrE$2d$KZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(descriptors);
    const validatedDescriptors = Array.from(descriptorRegistry.values());
    for (const descriptor of validatedDescriptors)if (!dataTypeLookup.has(descriptor.dataType)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("CONTRACT.DATA_TYPE_UNREGISTERED", `Codec "${descriptor.codecId}" represents data type "${descriptor.dataType}", which no component registers.`, {
        why: "A parameter of this codec is written with a cast named by its data type.",
        fix: "Pass the data type beside the codec: in `dataTypes` of createPostgresAdapter, or in the `dataTypes` of the extension that contributes the codec.",
        meta: {
            codecId: descriptor.codecId,
            dataType: descriptor.dataType
        }
    });
    const registry = {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__T__as__extractCodecLookup$3e$__["extractCodecLookup"])([
            {
                id: "postgres-codecs",
                types: {
                    codecTypes: {
                        codecDescriptors: validatedDescriptors
                    }
                }
            }
        ]),
        descriptorFor: (codecId)=>descriptorRegistry.descriptorFor(codecId),
        values: ()=>descriptorRegistry.values()
    };
    return Object.freeze(registry);
}
function assemblePostgresCodecRegistry(components, dataTypeLookup) {
    return buildPostgresCodecRegistry(components.flatMap((component)=>component.types?.codecTypes?.codecDescriptors ?? []), dataTypeLookup);
}
function assemblePostgresCodecRegistryWithBuiltins(extensions, dataTypeLookup) {
    return buildPostgresCodecRegistry([
        ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$registry$2d$Ctq7UGkA$2d$_DnAcgYm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"].values(),
        ...extensions.flatMap((extension)=>extension.types?.codecTypes?.codecDescriptors ?? [])
    ], dataTypeLookup);
}
/** A registry of the built-in codecs and `codecDescriptors`, whose data types `dataTypeLookup` has. */ function createPostgresCodecRegistryWithBuiltins(codecDescriptors = [], dataTypeLookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])()) {
    return buildPostgresCodecRegistry([
        ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$registry$2d$Ctq7UGkA$2d$_DnAcgYm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"].values(),
        ...codecDescriptors
    ], dataTypeLookup);
}
/**
* Build a coherent PostgreSQL codec registry populated with built-in descriptors only.
*
* The returned registry supports both ordinary codec materialization and PostgreSQL target behavior. Stack-composed paths build the same combined registry from their complete ordered descriptor contributions.
*/ function createPostgresBuiltinCodecLookup() {
    return createPostgresCodecRegistryWithBuiltins();
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-registry-7LHPD8C1-BALCyEB-.mjs [app-route] (ecmascript) <export n as assemblePostgresCodecRegistryWithBuiltins>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assemblePostgresCodecRegistryWithBuiltins",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$registry$2d$7LHPD8C1$2d$BALCyEB$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$registry$2d$7LHPD8C1$2d$BALCyEB$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-registry-7LHPD8C1-BALCyEB-.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codecs-CV-_K-z0-DZc60ccR.mjs [app-route] (ecmascript) <export m as pgEnumDescriptor>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pgEnumDescriptor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["m"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codecs-CV-_K-z0-DZc60ccR.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/contract-contributions-DpTbtESH-CxVtT7cT.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>postgresAdapterCapabilities,
    "r",
    ()=>postgresAdapterContractContributions,
    "t",
    ()=>PostgresControlAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-ids-2htdtS66-CJPMZv1t.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$aggregates$2d$BNste$2d$08$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/aggregates-BNste-08.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/errors-DpdPXR_L-DailcY-X.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/sql-utils-VXrIh8dJ-DVxo_Ygp.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codecs-CV-_K-z0-DZc60ccR.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$registry$2d$Ctq7UGkA$2d$_DnAcgYm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/registry-Ctq7UGkA-_DnAcgYm.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/contract-free-DmNEp1_Y.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$canonicalize$2d$RdxoUHao$2d$FTTkizfe$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/canonicalize-RdxoUHao-FTTkizfe.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-table-schema-node-OQRI_GIM-DhOVxH8-.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$role$2d$schema$2d$node$2d$yFPLQ6U0$2d$ZCPXs$2d$lG$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-role-schema-node-yFPLQ6U0-ZCPXs-lG.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$default$2d$normalizer$2d$BqK6XxdC$2d$2OUb2ybG$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/default-normalizer-BqK6XxdC-2OUb2ybG.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$marker$2d$lock$2d$DFc1Tfv5$2d$BkBKBRE3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/marker-lock-DFc1Tfv5-BkBKBRE3.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$native$2d$type$2d$normalizer$2d$DEN9YgA5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/native-type-normalizer-DEN9YgA5.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$renderer$2d$DrSed$2d$6w$2d$Bt8Hx2pU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/sql-renderer-DrSed-6w-Bt8Hx2pU.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__N__as__RawExpr$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export N as RawExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__S__as__encodeListLiteralDefault$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/ast-C3itulLi.mjs [app-route] (ecmascript) <export S as encodeListLiteralDefault>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__encodeLiteralDefault$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/ast-C3itulLi.mjs [app-route] (ecmascript) <export C as encodeLiteralDefault>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__isDdlNode$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/opaque-sql-Dset3kln-CtsPDTXn.mjs [app-route] (ecmascript) <export d as isDdlNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__renderOpaqueSql$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/opaque-sql-Dset3kln-CtsPDTXn.mjs [app-route] (ecmascript) <export p as renderOpaqueSql>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$codec$2d$qqMjZrmn$2d$Cok8elAo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__codecForRef$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/resolve-codec-qqMjZrmn-Cok8elAo.mjs [app-route] (ecmascript) <export r as codecForRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export t as InternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/namespace-VUH2dgnS-By5y75h9.mjs [app-route] (ecmascript) <export r as UNBOUND_NAMESPACE_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__APP_SPACE_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/control-DzRwUDn-.mjs [app-route] (ecmascript) <export t as APP_SPACE_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__namingOfLiveName$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/naming-DEpT6Zad-C9PFkWt6.mjs [app-route] (ecmascript) <export f as namingOfLiveName>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__RelationalSchemaNodeKind$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-1ZKE0deC-Dou4ugcz.mjs [app-route] (ecmascript) <export n as RelationalSchemaNodeKind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$qcQteqs2$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__checkSqlDefaultText$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/validators-qcQteqs2.mjs [app-route] (ecmascript) <export n as checkSqlDefaultText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$control$2d$DcEzEBvW$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__f__as__contractColumns$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/control-DcEzEBvW.mjs [app-route] (ecmascript) <locals> <export f as contractColumns>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$control$2d$DcEzEBvW$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__J__as__readColumnDefault$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/control-DcEzEBvW.mjs [app-route] (ecmascript) <locals> <export J as readColumnDefault>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$referential$2d$action$2d$sql$2d$BLzCtTi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__REFERENTIAL_ACTION_SQL$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/referential-action-sql-BLzCtTi8.mjs [app-route] (ecmascript) <export t as REFERENTIAL_ACTION_SQL>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$execution$2d$Dv2tEKdY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__errorMarkerRowCorrupt$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/execution-Dv2tEKdY.mjs [app-route] (ecmascript) <export a as errorMarkerRowCorrupt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$execution$2d$Dv2tEKdY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__rethrowMarkerReadError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/execution-Dv2tEKdY.mjs [app-route] (ecmascript) <export l as rethrowMarkerReadError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$execution$2d$Dv2tEKdY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__withMarkerReadErrorHandling$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/execution-Dv2tEKdY.mjs [app-route] (ecmascript) <export u as withMarkerReadErrorHandling>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$control$2d$adapter$2d$BetaUm2y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__resolveIntrospectedColumnType$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/control-adapter-BetaUm2y.mjs [app-route] (ecmascript) <export t as resolveIntrospectedColumnType>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$verify$2d$BVk5bjdH$2d$DhKm6hB3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__parseContractMarkerRow$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/verify-BVk5bjdH-DhKm6hB3.mjs [app-route] (ecmascript) <export n as parseContractMarkerRow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__createAstCodecRegistry$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/exports-WNaGWaJR-CVNygh-P.mjs [app-route] (ecmascript) <export o as createAstCodecRegistry>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__deriveParamMetadata$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/exports-WNaGWaJR-CVNygh-P.mjs [app-route] (ecmascript) <export f as deriveParamMetadata>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__encodeParamsWithMetadata$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/exports-WNaGWaJR-CVNygh-P.mjs [app-route] (ecmascript) <export p as encodeParamsWithMetadata>");
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
;
;
;
;
;
;
;
;
;
//#region ../../../3-targets/postgres/2-adapter/dist/contract-contributions-DpTbtESH.mjs
const postgresAdapterCapabilities = Object.freeze({
    postgres: {
        orderBy: true,
        limit: true,
        lateral: true,
        jsonAgg: true,
        returning: true,
        distinctOn: true,
        forNoKeyUpdate: true,
        forKeyShare: true
    },
    sql: {
        enums: true,
        returning: true,
        defaultInInsert: true,
        lateral: true,
        scalarList: true,
        checkConstraint: true,
        insertOnConflictSkip: true,
        insertOnConflictWithoutTarget: true,
        insertOnConflictTarget: true,
        forUpdate: true,
        forShare: true,
        lockOf: true,
        lockNowait: true,
        lockSkipLocked: true
    }
});
function ledgerOriginFromStored(originCoreHash) {
    if (originCoreHash === null || originCoreHash === "" || originCoreHash === "empty") return null;
    return originCoreHash;
}
const CONTROL_CODECS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__createAstCodecRegistry$3e$__["createAstCodecRegistry"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$registry$2d$Ctq7UGkA$2d$_DnAcgYm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]);
async function encodeControlQueryParams(lowered, ast, codecs = CONTROL_CODECS) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__encodeParamsWithMetadata$3e$__["encodeParamsWithMetadata"])(lowered.params.map((slot)=>{
        if (slot.kind === "literal") return slot.value;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`control query lowered to a bind slot '${slot.name}', which is unsupported`);
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__deriveParamMetadata$3e$__["deriveParamMetadata"])(ast), {}, codecs);
}
const marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])({
    name: "marker",
    schema: "prisma_contract"
}, {
    space: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(),
    core_hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(),
    profile_hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(),
    contract_json: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])({
        nullable: true
    }),
    canonical_version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])({
        nullable: true
    }),
    updated_at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"])(),
    app_tag: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])({
        nullable: true
    }),
    meta: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])({
        nullable: true
    }),
    invariants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"])()
});
/**
* Writeable subset of the `prisma_contract.ledger` table. Omits the
* DB-generated `id` (bigserial) and `created_at` (default `now()`) so the
* insert path doesn't have to pass them.
*/ const ledger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])({
    name: "ledger",
    schema: "prisma_contract"
}, {
    space: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(),
    migration_name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(),
    migration_hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(),
    origin_core_hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])({
        nullable: true
    }),
    destination_core_hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(),
    operations: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])()
});
/**
* Content-addressed contract store: one row per distinct contract, keyed
* by its storage hash. The ledger's `origin_core_hash` /
* `destination_core_hash` resolve here by hash equality, so both
* endpoints of every edge are direct lookups and a contract revisited by
* a rollback cycle is stored exactly once (upsert DO NOTHING).
*/ const ledgerContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])({
    name: "contract",
    schema: "prisma_contract"
}, {
    core_hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(),
    contract_json: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])()
});
/**
* Read-side handle covering every column of `prisma_contract.ledger`,
* including the DB-generated `id` (for ORDER BY) and `created_at`.
*/ const ledgerReadShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])({
    name: "ledger",
    schema: "prisma_contract"
}, {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"])(),
    space: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(),
    migration_name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(),
    migration_hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(),
    origin_core_hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])({
        nullable: true
    }),
    destination_core_hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(),
    operations: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(),
    created_at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"])()
});
const infoSchemaTables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])({
    name: "tables",
    schema: "information_schema"
}, {
    table_schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(),
    table_name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])()
});
const NOW = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__N__as__RawExpr$3e$__["RawExpr"]({
    parts: [
        "now()"
    ],
    returns: {
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["D"],
        nullable: false
    }
});
function mergeInvariants(current, incoming) {
    return [
        .../* @__PURE__ */ new Set([
            ...current,
            ...incoming
        ])
    ].sort();
}
async function execute(lower, driver, query) {
    const lowered = lower(query);
    const encoded = await encodeControlQueryParams(lowered, query);
    return (await driver.query(lowered.sql, encoded)).rows;
}
const KIND_OF_TYPTYPE = {
    e: "enum",
    d: "domain",
    c: "composite",
    r: "range",
    m: "multirange"
};
function quotedIdentifier(name) {
    return `"${name.replaceAll("\"", "\"\"")}"`;
}
function withoutSchemaPrefix(text, schema) {
    for (const prefix of [
        `${schema}.`,
        `${quotedIdentifier(schema)}.`
    ])if (text.startsWith(prefix)) return text.slice(prefix.length);
    return text;
}
/**
* The column's element type as Postgres reports it. A base type outside `pg_catalog` loses the
* schema `format_type` prints when that schema is off the search path, so a type an extension
* installs in another schema, as Supabase installs `vector`, reads as it does in `public`.
*/ function reportedSqlType(element) {
    const kind = KIND_OF_TYPTYPE[element.typtype];
    return {
        text: kind === void 0 && element.schema !== "pg_catalog" ? withoutSchemaPrefix(element.text, element.schema) : element.text,
        kind,
        schema: element.schema,
        name: element.name
    };
}
const POSTGRES_MARKER_TABLE = "prisma_contract.marker";
const POSTGRES_LEDGER_TABLE = "prisma_contract.ledger";
/**
* Tables another migration tool, not Prisma 8, keeps in an application schema: Prisma 7's ledger. `introspect` leaves them out unless the contract declares a table of that name in the same namespace.
*/ const OTHER_TOOL_MIGRATION_TABLES = /* @__PURE__ */ new Set([
    "_prisma_migrations"
]);
function markerRowDecodeWhy(detail) {
    return `Invalid contract marker row: ${detail}`;
}
function decodeMarkerInteger(value) {
    if (!/^-?\d+$/.test(value)) throw new TypeError(`expected integer text, got ${JSON.stringify(value)}`);
    return Number(value);
}
function decodePostgresMarkerRow(row, space) {
    if (typeof row !== "object" || row === null) {
        const cause = /* @__PURE__ */ new TypeError(`expected object marker row, got ${typeof row}`);
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$execution$2d$Dv2tEKdY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__errorMarkerRowCorrupt$3e$__["errorMarkerRowCorrupt"])({
            why: markerRowDecodeWhy(cause.message),
            space,
            markerLocation: POSTGRES_MARKER_TABLE,
            cause
        });
    }
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(row);
    try {
        return {
            ...record,
            ...typeof record.canonical_version === "string" ? {
                canonical_version: decodeMarkerInteger(record.canonical_version)
            } : {},
            invariants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])(record.invariants)
        };
    } catch (error) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$execution$2d$Dv2tEKdY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__errorMarkerRowCorrupt$3e$__["errorMarkerRowCorrupt"])({
            why: markerRowDecodeWhy(error instanceof Error ? error.message : String(error)),
            space,
            markerLocation: POSTGRES_MARKER_TABLE,
            cause: error
        });
    }
}
/**
* Postgres control plane adapter for control-plane operations like introspection.
* Provides target-specific implementations for control-plane domain actions.
*/ var PostgresControlAdapter = class {
    codecRegistry;
    dataTypeLookup;
    declaredDataTypes;
    familyId = "sql";
    targetId = "postgres";
    markerLocation = POSTGRES_MARKER_TABLE;
    /** `declaredDataTypes` are the stack's data types in assembly order, which introspection resolves each column's reported type over. */ constructor(codecRegistry, dataTypeLookup, declaredDataTypes){
        this.codecRegistry = codecRegistry;
        this.dataTypeLookup = dataTypeLookup;
        this.declaredDataTypes = declaredDataTypes;
    }
    bootstrapControlTableQueries() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])();
    }
    bootstrapSignMarkerQueries() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$free$2d$DmNEp1_Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])();
    }
    /**
	* Lower a SQL query AST into a Postgres-flavored `{ sql, params }` payload.
	*
	* Delegates to the shared `renderLoweredSql` renderer so the control adapter
	* emits byte-identical SQL to `PostgresAdapterImpl.lower()` for the same AST
	* and contract. Used at migration plan/emit time (e.g. by `dataTransform`)
	* without instantiating the runtime adapter.
	*/ lower(ast, context) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__isDdlNode$3e$__["isDdlNode"])(ast)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$renderer$2d$DrSed$2d$6w$2d$Bt8Hx2pU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("RUNTIME.DDL_UNSUPPORTED", "lower() cannot lower DDL: DDL default literals require inline codec encoding, which is async. Use lowerToExecuteRequest().", {
            meta: {
                surface: "control-adapter"
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$renderer$2d$DrSed$2d$6w$2d$Bt8Hx2pU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(ast, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(context.contract), this.codecRegistry, this.dataTypeLookup, postgresAdapterCapabilities);
    }
    async renderColumnDefault(column, table) {
        if (column.default === void 0) return "";
        return pgRenderDdlColumnDefault(column.default, column.type, this.codecRegistry, column.codecRef, {
            table,
            column: column.name
        });
    }
    /**
	* Lower an AST all the way to a driver-ready statement. For DDL nodes,
	* literal column defaults are formatted as inline SQL with proper quoting and
	* a `::` cast to the column's type. For query ASTs, params are kept as `$N`
	* placeholders; wire values go in `params`. Does NOT call `this.lower()` —
	* independent implementation.
	*/ async lowerToExecuteRequest(ast, context) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__isDdlNode$3e$__["isDdlNode"])(ast)) return pgRenderDdlExecuteRequest((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(ast), this.codecRegistry);
        const lowered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$renderer$2d$DrSed$2d$6w$2d$Bt8Hx2pU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(ast, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(context?.contract), this.codecRegistry, this.dataTypeLookup, postgresAdapterCapabilities);
        const params = await encodeControlQueryParams(lowered, ast, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(this.codecRegistry));
        return {
            sql: lowered.sql,
            params
        };
    }
    /**
	* Reads the contract marker from `prisma_contract.marker`. Probes
	* `information_schema.tables` first so a fresh database (where the
	* `prisma_contract` schema doesn't yet exist) returns `null` instead of a
	* "relation does not exist" error — some Postgres wire-protocol clients
	* (e.g. PGlite's TCP proxy) don't fully recover from extended-protocol
	* parse errors, so we probe before reading.
	*/ async readMarker(driver, space) {
        const result = await this.readMarkerDiscriminated(driver, space);
        return result.kind === "present" ? result.record : null;
    }
    async readMarkerDiscriminated(driver, space) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$execution$2d$Dv2tEKdY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__withMarkerReadErrorHandling$3e$__["withMarkerReadErrorHandling"])(()=>this.readMarkerResult(driver, space), {
            space,
            markerLocation: POSTGRES_MARKER_TABLE
        });
    }
    /**
	* Reads every row from `prisma_contract.marker` and returns them keyed
	* by `space`. Mirrors the existence probe in {@link readMarker}: a
	* fresh database without the `prisma_contract` schema returns an empty
	* map rather than raising "relation does not exist".
	*/ async readAllMarkers(driver) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$execution$2d$Dv2tEKdY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__withMarkerReadErrorHandling$3e$__["withMarkerReadErrorHandling"])(()=>this.readAllMarkersResult(driver), {
            space: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__APP_SPACE_ID$3e$__["APP_SPACE_ID"],
            markerLocation: POSTGRES_MARKER_TABLE
        });
    }
    async readAllMarkersResult(driver) {
        const lower = (query)=>this.lower(query, {
                contract: void 0
            });
        if ((await execute(lower, driver, infoSchemaTables.select(infoSchemaTables.table_schema).where(infoSchemaTables.table_schema.eq("prisma_contract").and(infoSchemaTables.table_name.eq("marker"))).build())).length === 0) return /* @__PURE__ */ new Map();
        const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(await execute(lower, driver, marker.select(marker.space, marker.core_hash, marker.profile_hash, marker.contract_json, marker.canonical_version, marker.updated_at, marker.app_tag, marker.meta, marker.invariants).build()));
        const out = /* @__PURE__ */ new Map();
        for (const row of rows)try {
            const decodedRow = decodePostgresMarkerRow(row, row.space);
            out.set(row.space, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$verify$2d$BVk5bjdH$2d$DhKm6hB3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__parseContractMarkerRow$3e$__["parseContractMarkerRow"])(decodedRow));
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$execution$2d$Dv2tEKdY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__rethrowMarkerReadError$3e$__["rethrowMarkerReadError"])(error, {
                space: row.space,
                markerLocation: POSTGRES_MARKER_TABLE
            });
        }
        return out;
    }
    /**
	* Reads per-migration ledger rows from `prisma_contract.ledger` in apply
	* order. Probes `information_schema.tables` first so a fresh database
	* without the ledger table returns `[]` instead of raising "relation does
	* not exist".
	*/ async readLedger(driver, space) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$execution$2d$Dv2tEKdY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__withMarkerReadErrorHandling$3e$__["withMarkerReadErrorHandling"])(()=>this.readLedgerResult(driver, space), {
            space: space ?? "*",
            markerLocation: POSTGRES_LEDGER_TABLE
        });
    }
    async readLedgerResult(driver, space) {
        const lower = (query)=>this.lower(query, {
                contract: void 0
            });
        if ((await execute(lower, driver, infoSchemaTables.select(infoSchemaTables.table_schema).where(infoSchemaTables.table_schema.eq("prisma_contract").and(infoSchemaTables.table_name.eq("ledger"))).build())).length === 0) return [];
        const base = ledgerReadShape.select(ledgerReadShape.space, ledgerReadShape.migration_name, ledgerReadShape.migration_hash, ledgerReadShape.origin_core_hash, ledgerReadShape.destination_core_hash, ledgerReadShape.operations, ledgerReadShape.created_at);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(await execute(lower, driver, (space !== void 0 ? base.where(ledgerReadShape.space.eq(space)) : base).orderBy(ledgerReadShape.id).build())).map((row)=>{
            const appliedAt = row.created_at instanceof Date ? row.created_at : new Date(row.created_at);
            return {
                space: row.space,
                migrationName: row.migration_name,
                migrationHash: row.migration_hash,
                from: ledgerOriginFromStored(row.origin_core_hash),
                to: row.destination_core_hash,
                appliedAt,
                operationCount: Array.isArray(row.operations) ? row.operations.length : 0
            };
        });
    }
    /**
	* Stamps the initial marker row for `space` via the shared contract-free DML
	* builder, lowered through {@link lower} and executed on the driver. See the
	* `SqlControlAdapter.initMarker` contract.
	*/ async insertMarker(driver, space, destination) {
        await execute((query)=>this.lower(query, {
                contract: void 0
            }), driver, marker.insert({
            space,
            core_hash: destination.storageHash,
            profile_hash: destination.profileHash,
            contract_json: null,
            canonical_version: null,
            updated_at: NOW,
            app_tag: null,
            meta: {},
            invariants: destination.invariants ?? []
        }).build());
    }
    async initMarker(driver, space, destination) {
        await execute((query)=>this.lower(query, {
                contract: void 0
            }), driver, marker.upsert({
            space,
            core_hash: destination.storageHash,
            profile_hash: destination.profileHash,
            contract_json: null,
            canonical_version: null,
            updated_at: NOW,
            app_tag: null,
            meta: {},
            invariants: destination.invariants ?? []
        }).onConflict(marker.space).doUpdate((excluded)=>({
                core_hash: excluded.core_hash,
                profile_hash: excluded.profile_hash,
                contract_json: excluded.contract_json,
                canonical_version: excluded.canonical_version,
                updated_at: NOW,
                app_tag: excluded.app_tag,
                meta: excluded.meta,
                invariants: excluded.invariants
            })).build());
    }
    /**
	* Compare-and-swap advance of the marker row for `space`. See the
	* `SqlControlAdapter.updateMarker` contract.
	*/ async updateMarker(driver, space, expectedFrom, destination) {
        const currentInvariants = destination.invariants === void 0 ? [] : (await this.readMarker(driver, space))?.invariants ?? [];
        const mergedInvariants = destination.invariants === void 0 ? void 0 : mergeInvariants(currentInvariants, destination.invariants);
        return (await execute((q)=>this.lower(q, {
                contract: void 0
            }), driver, marker.update().set({
            core_hash: destination.storageHash,
            profile_hash: destination.profileHash,
            updated_at: NOW,
            ...mergedInvariants !== void 0 ? {
                invariants: mergedInvariants
            } : {}
        }).where(marker.space.eq(space).and(marker.core_hash.eq(expectedFrom))).returning(marker.space).build())).length > 0;
    }
    async withTransaction(driver, fn) {
        await driver.query("BEGIN");
        let result;
        try {
            result = await fn();
        } catch (error) {
            try {
                await driver.query("ROLLBACK");
            } catch (rollbackError) {
                if (error instanceof Error && error.cause === void 0) error.cause = rollbackError;
            }
            throw error;
        }
        await driver.query("COMMIT");
        return result;
    }
    async lockMarker(driver) {
        await driver.query(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$marker$2d$lock$2d$DFc1Tfv5$2d$BkBKBRE3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"], [
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$marker$2d$lock$2d$DFc1Tfv5$2d$BkBKBRE3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]
        ]);
    }
    /**
	* Appends a ledger entry for `space`. When the edge carries a destination contract snapshot, the content-addressed `prisma_contract.contract` store is populated first (keyed by the destination hash, DO NOTHING on revisit) so a reader never sees a ledger row whose stored destination contract is missing. See the `SqlControlAdapter.writeLedgerEntry` contract.
	*/ async writeLedgerEntry(driver, space, entry) {
        const lower = (query)=>this.lower(query, {
                contract: void 0
            });
        if (entry.destinationContractJson !== void 0) await execute(lower, driver, ledgerContract.upsert({
            core_hash: entry.to,
            contract_json: entry.destinationContractJson
        }).onConflict(ledgerContract.core_hash).doNothing().build());
        await execute(lower, driver, ledger.insert({
            space,
            migration_name: entry.migrationName,
            migration_hash: entry.migrationHash,
            origin_core_hash: entry.from,
            destination_core_hash: entry.to,
            operations: entry.operations
        }).build());
    }
    async readMarkerResult(driver, space) {
        const lower = (query)=>this.lower(query, {
                contract: void 0
            });
        if ((await execute(lower, driver, infoSchemaTables.select(infoSchemaTables.table_schema).where(infoSchemaTables.table_schema.eq("prisma_contract").and(infoSchemaTables.table_name.eq("marker"))).build())).length === 0) return {
            kind: "no-table"
        };
        const row = (await execute(lower, driver, marker.select(marker.core_hash, marker.profile_hash, marker.contract_json, marker.canonical_version, marker.updated_at, marker.app_tag, marker.meta, marker.invariants).where(marker.space.eq(space)).build()))[0];
        if (!row) return {
            kind: "absent"
        };
        try {
            return {
                kind: "present",
                record: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$verify$2d$BVk5bjdH$2d$DhKm6hB3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__parseContractMarkerRow$3e$__["parseContractMarkerRow"])(decodePostgresMarkerRow(row, space))
            };
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$execution$2d$Dv2tEKdY$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__rethrowMarkerReadError$3e$__["rethrowMarkerReadError"])(error, {
                space,
                markerLocation: POSTGRES_MARKER_TABLE
            });
        }
    }
    /**
	* Introspects a Postgres database schema and returns a raw SqlSchemaIR.
	*
	* This is a pure schema discovery operation that queries the Postgres catalog
	* and returns the schema structure without type mapping or contract enrichment.
	* Type mapping and enrichment are handled separately by enrichment helpers.
	*
	* When `contract` is provided and its storage declares more than one
	* namespace (or any explicit bound namespace), the adapter walks every
	* declared namespace and merges the per-schema introspection results
	* into a single `SqlSchemaIR`. `UNBOUND_NAMESPACE_ID` resolves to the
	* connection's `current_schema()` so late-bound tables follow the
	* runtime `search_path`. When no contract is passed, the adapter falls
	* back to introspecting the single `schema` argument (defaulting to
	* `'public'`).
	*
	* Uses batched queries to minimize database round trips (6 queries per
	* schema walked).
	*
	* @param driver - SqlControlDriverInstance<'postgres'> instance for executing queries
	* @param contract - Optional contract for contract-guided introspection (multi-namespace walk, filtering)
	* @param schema - Schema name to introspect when no contract is provided (defaults to 'public')
	* @returns Promise resolving to SqlSchemaIR representing the live database schema
	*/ async introspect(driver, contract, schema = "public") {
        return readWithDefaultOutputSettings(driver, async ()=>{
            const declaredTables = extractContractTableNames(contract);
            const declaredTablesBySchema = declaredTables.size > 0 ? await this.resolveNamespaceSchemas(driver, declaredTables) : /* @__PURE__ */ new Map([
                [
                    schema,
                    {
                        tables: /* @__PURE__ */ new Set(),
                        namespaceIds: []
                    }
                ]
            ]);
            const contractColumnsOf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$control$2d$DcEzEBvW$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__f__as__contractColumns$3e$__["contractColumns"])(contract);
            const namespaces = {};
            let pgVersion = "unknown";
            for (const [resolved, declaredHere] of declaredTablesBySchema){
                const { namespace, pgVersion: version } = await this.introspectSchema(driver, resolved, declaredHere.tables, (table, column)=>contractColumnsOf.columnOf(declaredHere.namespaceIds, table, column));
                namespaces[resolved] = namespace;
                pgVersion = version;
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$role$2d$schema$2d$node$2d$yFPLQ6U0$2d$ZCPXs$2d$lG$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]({
                namespaces,
                roles: await this.introspectRoles(driver),
                extensions: await this.introspectExtensions(driver),
                existingSchemas: await this.listExistingSchemas(driver),
                pgVersion
            });
        });
    }
    /**
	* Reads cluster-scoped database roles. Roles are not schema-qualified, so
	* this is queried once for the whole database rather than per namespace.
	*/ async introspectRoles(driver) {
        return (await driver.query(`SELECT rolname
       FROM pg_catalog.pg_roles
       WHERE rolname NOT LIKE 'pg_%'
         AND rolname != 'postgres'
       ORDER BY rolname`)).rows.map((row)=>new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$role$2d$schema$2d$node$2d$yFPLQ6U0$2d$ZCPXs$2d$lG$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"]({
                name: row.rolname,
                namespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__["UNBOUND_NAMESPACE_ID"]
            }));
    }
    /** Reads every installed extension with the schema that holds its objects and the connection's search path, which locates an extension the contract declares in the unbound namespace. */ async introspectExtensions(driver) {
        const result = await driver.query(`SELECT e.extname, n.nspname
       FROM pg_catalog.pg_extension e
       JOIN pg_catalog.pg_namespace n ON n.oid = e.extnamespace
       ORDER BY e.extname`);
        const searchPath = await this.readSearchPath(driver);
        return result.rows.map((row)=>new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]({
                name: row.extname,
                location: {
                    kind: "installed",
                    schemaName: row.nspname,
                    searchPath
                },
                control: void 0
            }));
    }
    /** The schemas the connection resolves unqualified names in, in order, including the implicit `pg_catalog`. */ async readSearchPath(driver) {
        return (await driver.query(`SELECT s.schema_name
       FROM pg_catalog.unnest(pg_catalog.current_schemas(true)) WITH ORDINALITY AS s(schema_name, position)
       ORDER BY s.position`)).rows.map((row)=>row.schema_name);
    }
    /**
	* Lists every non-system schema present in the connected database.
	* The introspection consumer (`verifyPostgresNamespacePresence`)
	* treats the result as the authoritative ground truth — declared
	* namespaces whose `ddlSchemaName` is missing from this list become
	* `missing_schema` issues, and the planner emits the matching
	* `CREATE SCHEMA` before table DDL.
	*/ async listExistingSchemas(driver) {
        return (await driver.query(`SELECT nspname
       FROM pg_catalog.pg_namespace
       WHERE nspname NOT IN ('pg_catalog', 'information_schema', 'pg_toast')
         AND nspname NOT LIKE 'pg_temp_%'
         AND nspname NOT LIKE 'pg_toast_temp_%'
       ORDER BY nspname`)).rows.map((row)=>row.nspname);
    }
    /**
	* Reads a column's reported default: a function or SQL NULL as itself, and a literal with the column's codec, when the contract declares the column. A literal of a column the contract does not declare keeps only its raw text. When the contract's default is an expression that writes a literal, the codec reads that literal too, for the diff to compare the two values.
	*/ async readReportedDefault(rawDefault, many, column) {
        const reported = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$default$2d$normalizer$2d$BqK6XxdC$2d$2OUb2ybG$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(rawDefault, many);
        if (reported.kind === "function") return {
            resolvedDefault: reported
        };
        if (reported.kind === "null") return {
            resolvedDefault: {
                kind: "literal",
                value: null
            }
        };
        const codec = column === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$codec$2d$qqMjZrmn$2d$Cok8elAo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__codecForRef$3e$__["codecForRef"])(this.codecRegistry, column.codecRef);
        if (codec === void 0) return {};
        const expression = column?.defaultExpression;
        const written = expression === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$default$2d$normalizer$2d$BqK6XxdC$2d$2OUb2ybG$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(expression, many);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$control$2d$DcEzEBvW$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__J__as__readColumnDefault$3e$__["readColumnDefault"])(codec, {
            literal: reported.literal,
            raw: rawDefault
        }, expression !== void 0 && written?.kind === "literal" ? {
            literal: written.literal,
            expression
        } : void 0);
    }
    async resolveNamespaceSchemas(driver, declaredTables) {
        const bySchema = /* @__PURE__ */ new Map();
        for (const [id, tableNames] of declaredTables){
            const resolved = id === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__["UNBOUND_NAMESPACE_ID"] ? await this.currentSchema(driver) : id;
            const declared = bySchema.get(resolved) ?? {
                tables: /* @__PURE__ */ new Set(),
                namespaceIds: []
            };
            for (const name of tableNames)declared.tables.add(name);
            declared.namespaceIds.push(id);
            bySchema.set(resolved, declared);
        }
        return bySchema;
    }
    async currentSchema(driver) {
        const { rows } = await driver.query("SELECT current_schema() AS current_schema");
        return rows[0]?.current_schema ?? "public";
    }
    /**
	* Introspects a single Postgres schema and returns the namespace node for
	* that schema (its tables, their policies, and its native enum type names),
	* alongside the cluster-scoped Postgres version. Used by `introspect` as
	* the per-namespace walk.
	*/ async introspectSchema(driver, schema, declaredTables, contractColumnOf) {
        const tablesResult = await driver.query(`SELECT table_name
         FROM information_schema.tables
         WHERE table_schema = $1
           AND table_type = 'BASE TABLE'
         ORDER BY table_name`, [
            schema
        ]);
        const columnsResult = await driver.query(`SELECT
           c.table_name,
           column_name,
           data_type,
           udt_name,
           is_nullable,
           character_maximum_length,
           numeric_precision,
           numeric_scale,
           column_default,
           format_type(a.atttypid, a.atttypmod) AS formatted_type,
           a.attidentity,
           format_type(COALESCE(et.oid, t.oid), a.atttypmod) AS reported_text,
           COALESCE(et.typtype, t.typtype) AS reported_typtype,
           tns.nspname AS reported_type_schema,
           COALESCE(et.typname, t.typname) AS reported_type_name
         FROM information_schema.columns c
         JOIN pg_catalog.pg_class cl
           ON cl.relname = c.table_name
         JOIN pg_catalog.pg_namespace ns
           ON ns.nspname = c.table_schema
           AND ns.oid = cl.relnamespace
         JOIN pg_catalog.pg_attribute a
           ON a.attrelid = cl.oid
           AND a.attname = c.column_name
           AND a.attnum > 0
           AND NOT a.attisdropped
         JOIN pg_catalog.pg_type t
           ON t.oid = a.atttypid
         LEFT JOIN pg_catalog.pg_type et
           ON et.typarray = t.oid
         JOIN pg_catalog.pg_namespace tns
           ON tns.oid = COALESCE(et.typnamespace, t.typnamespace)
         WHERE c.table_schema = $1
         ORDER BY c.table_name, c.ordinal_position`, [
            schema
        ]);
        const pkResult = await driver.query(`SELECT
           cl.relname AS table_name,
           con.conname AS constraint_name,
           a.attname AS column_name,
           k.ord AS ordinal_position
         FROM pg_catalog.pg_constraint con
         JOIN pg_catalog.pg_class cl ON cl.oid = con.conrelid
         JOIN pg_catalog.pg_namespace ns ON ns.oid = cl.relnamespace
         JOIN LATERAL unnest(con.conkey) WITH ORDINALITY AS k(attnum, ord) ON true
         JOIN pg_catalog.pg_attribute a
           ON a.attrelid = con.conrelid
           AND a.attnum = k.attnum
         WHERE ns.nspname = $1
           AND con.contype = 'p'
         ORDER BY cl.relname, k.ord`, [
            schema
        ]);
        const fkResult = await driver.query(`SELECT
           cl.relname AS table_name,
           con.conname AS constraint_name,
           a.attname AS column_name,
           k.ord AS ordinal_position,
           ref_ns.nspname AS referenced_table_schema,
           ref_cl.relname AS referenced_table_name,
           ref_att.attname AS referenced_column_name,
           CASE con.confdeltype
             WHEN 'a' THEN 'NO ACTION'
             WHEN 'r' THEN 'RESTRICT'
             WHEN 'c' THEN 'CASCADE'
             WHEN 'n' THEN 'SET NULL'
             WHEN 'd' THEN 'SET DEFAULT'
           END AS delete_rule,
           CASE con.confupdtype
             WHEN 'a' THEN 'NO ACTION'
             WHEN 'r' THEN 'RESTRICT'
             WHEN 'c' THEN 'CASCADE'
             WHEN 'n' THEN 'SET NULL'
             WHEN 'd' THEN 'SET DEFAULT'
           END AS update_rule
         FROM pg_catalog.pg_constraint con
         JOIN pg_catalog.pg_class cl ON cl.oid = con.conrelid
         JOIN pg_catalog.pg_namespace ns ON ns.oid = cl.relnamespace
         JOIN LATERAL unnest(con.conkey) WITH ORDINALITY AS k(attnum, ord) ON true
         JOIN pg_catalog.pg_attribute a
           ON a.attrelid = con.conrelid
           AND a.attnum = k.attnum
         JOIN pg_catalog.pg_class ref_cl
           ON ref_cl.oid = con.confrelid
         JOIN pg_catalog.pg_namespace ref_ns
           ON ref_ns.oid = ref_cl.relnamespace
         JOIN pg_catalog.pg_attribute ref_att
           ON ref_att.attrelid = con.confrelid
           AND ref_att.attnum = con.confkey[k.ord]
         WHERE ns.nspname = $1
           AND con.contype = 'f'
         ORDER BY cl.relname, con.conname, k.ord`, [
            schema
        ]);
        const uniqueResult = await driver.query(`SELECT
           cl.relname AS table_name,
           con.conname AS constraint_name,
           a.attname AS column_name,
           k.ord AS ordinal_position
         FROM pg_catalog.pg_constraint con
         JOIN pg_catalog.pg_class cl ON cl.oid = con.conrelid
         JOIN pg_catalog.pg_namespace ns ON ns.oid = cl.relnamespace
         JOIN LATERAL unnest(con.conkey) WITH ORDINALITY AS k(attnum, ord) ON true
         JOIN pg_catalog.pg_attribute a
           ON a.attrelid = con.conrelid
           AND a.attnum = k.attnum
         WHERE ns.nspname = $1
           AND con.contype = 'u'
         ORDER BY cl.relname, con.conname, k.ord`, [
            schema
        ]);
        const indexResult = await driver.query(`SELECT
           i.tablename,
           i.indexname,
           ix.indisunique,
           pg_get_expr(ix.indpred, ix.indrelid) AS where_predicate,
           a.attname,
           CASE WHEN 0 = ANY(ix.indkey::int[]) THEN pg_get_indexdef(ix.indexrelid, k.ord::int, true) END AS element_def,
           k.ord AS index_position,
           am.amname,
           ic.reloptions
         FROM pg_indexes i
         JOIN pg_class ic ON ic.relname = i.indexname
         JOIN pg_namespace ins ON ins.oid = ic.relnamespace AND ins.nspname = $1
         JOIN pg_index ix ON ix.indexrelid = ic.oid
         JOIN pg_am am ON am.oid = ic.relam
         JOIN pg_class t ON t.oid = ix.indrelid
         JOIN pg_namespace tn ON tn.oid = t.relnamespace AND tn.nspname = $1
         JOIN LATERAL unnest(ix.indkey::int[]) WITH ORDINALITY AS k(attnum, ord) ON true
         LEFT JOIN pg_attribute a ON a.attrelid = t.oid AND a.attnum = k.attnum AND a.attnum > 0
         WHERE i.schemaname = $1
           AND NOT EXISTS (
             SELECT 1
             FROM pg_catalog.pg_constraint con
             WHERE con.conindid = ic.oid
               AND con.contype IN ('p', 'u', 'x')
           )
         ORDER BY i.tablename, i.indexname, k.ord`, [
            schema
        ]);
        const checkResult = await driver.query(`SELECT
           cl.relname AS table_name,
           c.conname AS constraint_name,
           pg_get_expr(c.conbin, c.conrelid) AS check_expression
         FROM pg_catalog.pg_constraint c
         JOIN pg_catalog.pg_class cl ON cl.oid = c.conrelid
         JOIN pg_catalog.pg_namespace ns ON ns.oid = cl.relnamespace
         WHERE ns.nspname = $1
           AND c.contype = 'c'
           AND c.conislocal
           AND c.conrelid <> 0
         ORDER BY cl.relname, c.conname`, [
            schema
        ]);
        const columnsByTable = groupBy(columnsResult.rows, "table_name");
        const pksByTable = groupBy(pkResult.rows, "table_name");
        const fksByTable = groupBy(fkResult.rows, "table_name");
        const uniquesByTable = groupBy(uniqueResult.rows, "table_name");
        const indexesByTable = groupBy(indexResult.rows, "tablename");
        const checksByTable = groupBy(checkResult.rows, "table_name");
        const pkConstraintsByTable = /* @__PURE__ */ new Map();
        for (const row of pkResult.rows){
            let constraints = pkConstraintsByTable.get(row.table_name);
            if (!constraints) {
                constraints = /* @__PURE__ */ new Set();
                pkConstraintsByTable.set(row.table_name, constraints);
            }
            constraints.add(row.constraint_name);
        }
        const tableInputs = {};
        for (const tableRow of tablesResult.rows){
            const tableName = tableRow.table_name;
            const columns = {};
            for (const colRow of columnsByTable.get(tableName) ?? []){
                const reportedType = colRow.reported_text ? reportedSqlType({
                    text: colRow.reported_text,
                    typtype: colRow.reported_typtype,
                    schema: colRow.reported_type_schema,
                    name: colRow.reported_type_name
                }) : void 0;
                const { typeText, many } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$native$2d$type$2d$normalizer$2d$DEN9YgA5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])({
                    formattedType: colRow.formatted_type,
                    informationSchemaType: colRow.data_type,
                    udtName: colRow.udt_name,
                    characterMaximumLength: colRow.character_maximum_length,
                    numericPrecision: colRow.numeric_precision,
                    numericScale: colRow.numeric_scale,
                    ...reportedType?.kind === "enum" ? {
                        enumType: {
                            schema: colRow.reported_type_schema,
                            name: colRow.reported_type_name
                        }
                    } : {}
                });
                const rawDefault = colRow.column_default ?? void 0;
                const readDefault = colRow.attidentity === "a" || colRow.attidentity === "d" ? {
                    resolvedDefault: {
                        kind: "function",
                        expression: "autoincrement()"
                    }
                } : rawDefault !== void 0 ? await this.readReportedDefault(rawDefault, many === true, contractColumnOf(tableName, colRow.column_name)) : {};
                columns[colRow.column_name] = {
                    name: colRow.column_name,
                    typeText,
                    nullable: colRow.is_nullable === "YES",
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("default", rawDefault),
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("many", many),
                    ...readDefault,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("reportedType", reportedType),
                    ...reportedType === void 0 ? {} : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$control$2d$adapter$2d$BetaUm2y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__resolveIntrospectedColumnType$3e$__["resolveIntrospectedColumnType"])(reportedType, this.declaredDataTypes)
                };
            }
            const pkRows = [
                ...pksByTable.get(tableName) ?? []
            ];
            const primaryKeyColumns = pkRows.sort((a, b)=>a.ordinal_position - b.ordinal_position).map((row)=>row.column_name);
            const primaryKey = primaryKeyColumns.length > 0 ? {
                columns: primaryKeyColumns,
                ...pkRows[0]?.constraint_name ? {
                    name: pkRows[0].constraint_name
                } : {},
                dependsOn: postgresColumnDependsOn(schema, tableName, primaryKeyColumns)
            } : void 0;
            const foreignKeysMap = /* @__PURE__ */ new Map();
            for (const fkRow of fksByTable.get(tableName) ?? []){
                const existing = foreignKeysMap.get(fkRow.constraint_name);
                if (existing) {
                    existing.columns.push(fkRow.column_name);
                    existing.referencedColumns.push(fkRow.referenced_column_name);
                } else foreignKeysMap.set(fkRow.constraint_name, {
                    columns: [
                        fkRow.column_name
                    ],
                    referencedTable: fkRow.referenced_table_name,
                    referencedSchema: fkRow.referenced_table_schema,
                    referencedColumns: [
                        fkRow.referenced_column_name
                    ],
                    name: fkRow.constraint_name,
                    deleteRule: fkRow.delete_rule,
                    updateRule: fkRow.update_rule
                });
            }
            const foreignKeys = Array.from(foreignKeysMap.values()).map((fk)=>({
                    columns: freezeStringArray(fk.columns),
                    referencedTable: fk.referencedTable,
                    referencedSchema: fk.referencedSchema,
                    referencedColumns: freezeStringArray(fk.referencedColumns),
                    name: fk.name,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("onDelete", mapReferentialAction(fk.deleteRule)),
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("onUpdate", mapReferentialAction(fk.updateRule)),
                    dependsOn: [
                        postgresTableDependsOn(fk.referencedSchema, fk.referencedTable),
                        ...postgresColumnDependsOn(schema, tableName, fk.columns)
                    ]
                }));
            const pkConstraints = pkConstraintsByTable.get(tableName) ?? /* @__PURE__ */ new Set();
            const uniquesMap = /* @__PURE__ */ new Map();
            for (const uniqueRow of uniquesByTable.get(tableName) ?? []){
                if (pkConstraints.has(uniqueRow.constraint_name)) continue;
                const existing = uniquesMap.get(uniqueRow.constraint_name);
                if (existing) existing.columns.push(uniqueRow.column_name);
                else uniquesMap.set(uniqueRow.constraint_name, {
                    columns: [
                        uniqueRow.column_name
                    ],
                    name: uniqueRow.constraint_name
                });
            }
            const uniques = Array.from(uniquesMap.values()).map((uq)=>({
                    columns: freezeStringArray(uq.columns),
                    name: uq.name,
                    dependsOn: postgresColumnDependsOn(schema, tableName, uq.columns)
                }));
            const indexesMap = /* @__PURE__ */ new Map();
            for (const idxRow of indexesByTable.get(tableName) ?? []){
                const existing = indexesMap.get(idxRow.indexname);
                if (existing) existing.elements.push({
                    attname: idxRow.attname,
                    elementDef: idxRow.element_def
                });
                else {
                    const indexType = idxRow.amname ?? void 0;
                    const indexOptions = parsePgReloptions(idxRow.reloptions, idxRow.indexname);
                    indexesMap.set(idxRow.indexname, {
                        name: idxRow.indexname,
                        elements: [
                            {
                                attname: idxRow.attname,
                                elementDef: idxRow.element_def
                            }
                        ],
                        unique: idxRow.indisunique,
                        where: idxRow.where_predicate,
                        type: indexType,
                        options: indexOptions
                    });
                }
            }
            const indexes = Array.from(indexesMap.values()).map((idx)=>{
                const isExpression = idx.elements.some((el)=>el.attname === null);
                const columnNames = idx.elements.flatMap((el)=>el.attname !== null ? [
                        el.attname
                    ] : []);
                const base = {
                    naming: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__namingOfLiveName$3e$__["namingOfLiveName"])(idx.name),
                    where: idx.where ?? void 0,
                    unique: idx.unique,
                    partial: idx.where !== null,
                    type: idx.type,
                    options: idx.options,
                    annotations: void 0,
                    dependsOn: postgresColumnDependsOn(schema, tableName, isExpression ? Object.keys(columns) : columnNames)
                };
                return isExpression ? {
                    ...base,
                    expression: idx.elements.map((el)=>el.elementDef ?? "").join(", ")
                } : {
                    ...base,
                    columns: Object.freeze([
                        ...columnNames
                    ])
                };
            });
            const checksForTable = (checksByTable.get(tableName) ?? []).map((checkRow)=>({
                    naming: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__namingOfLiveName$3e$__["namingOfLiveName"])(checkRow.constraint_name),
                    expression: checkRow.check_expression,
                    dependsOn: postgresColumnDependsOn(schema, tableName, Object.keys(columns))
                }));
            tableInputs[tableName] = {
                name: tableName,
                columns,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("primaryKey", primaryKey),
                foreignKeys,
                uniques,
                indexes,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("checks", checksForTable.length > 0 ? checksForTable : void 0)
            };
        }
        const enums = (await driver.query(`SELECT t.typname, array_agg(e.enumlabel ORDER BY e.enumsortorder) AS enumvalues
         FROM pg_catalog.pg_type t
         JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace
         JOIN pg_catalog.pg_enum e ON e.enumtypid = t.oid
         WHERE t.typtype = 'e'
           AND n.nspname = $1
         GROUP BY t.typname
         ORDER BY t.typname`, [
            schema
        ])).rows.map((r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]({
                typeName: r.typname,
                namespaceId: schema,
                members: parsePgNameArray(r.enumvalues)
            }));
        const policiesResult = await driver.query(`SELECT schemaname, tablename, policyname, cmd, roles, qual, with_check, permissive
       FROM pg_catalog.pg_policies
       WHERE schemaname = $1
       ORDER BY tablename, policyname`, [
            schema
        ]);
        const policiesByTable = /* @__PURE__ */ new Map();
        for (const row of policiesResult.rows){
            const operation = mapPgCmd(row.cmd);
            const policyRoles = [
                ...new Set(parsePgNameArray(row.roles).map((r)=>r.toLowerCase()))
            ].sort();
            const permissive = row.permissive.toUpperCase() === "PERMISSIVE";
            const policy = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$role$2d$schema$2d$node$2d$yFPLQ6U0$2d$ZCPXs$2d$lG$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"]({
                naming: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__namingOfLiveName$3e$__["namingOfLiveName"])(row.policyname),
                tableName: row.tablename,
                namespaceId: row.schemaname,
                operation,
                roles: policyRoles,
                using: row.qual ?? void 0,
                withCheck: row.with_check ?? void 0,
                permissive,
                dependsOn: [
                    postgresTableDependsOn(row.schemaname, row.tablename),
                    ...policyRoles.map(postgresRoleDependsOn)
                ]
            });
            const list = policiesByTable.get(row.tablename) ?? [];
            list.push(policy);
            policiesByTable.set(row.tablename, list);
        }
        const rlsEnabledResult = await driver.query(`SELECT c.relname AS tablename, c.relrowsecurity AS rls_enabled
         FROM pg_catalog.pg_class c
         JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
         WHERE n.nspname = $1
           AND c.relkind IN ('r', 'p')
         ORDER BY c.relname`, [
            schema
        ]);
        const rlsEnabledByTable = new Map(rlsEnabledResult.rows.map((row)=>[
                row.tablename,
                row.rls_enabled
            ]));
        const tables = {};
        for (const [tableName, input] of Object.entries(tableInputs)){
            if (OTHER_TOOL_MIGRATION_TABLES.has(tableName) && !declaredTables.has(tableName)) continue;
            tables[tableName] = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"]({
                ...input,
                policies: policiesByTable.get(tableName) ?? [],
                rlsEnabled: rlsEnabledByTable.get(tableName) ?? false
            });
        }
        return {
            namespace: new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$role$2d$schema$2d$node$2d$yFPLQ6U0$2d$ZCPXs$2d$lG$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]({
                schemaName: schema,
                tables,
                nativeEnums: enums
            }),
            pgVersion: await this.getPostgresVersion(driver)
        };
    }
    /**
	* Gets the Postgres version from the database.
	*/ async getPostgresVersion(driver) {
        return ((await driver.query("SELECT version() AS version", [])).rows[0]?.version ?? "").match(/PostgreSQL (\d+\.\d+)/)?.[1] ?? "unknown";
    }
};
/**
* Normalises a `name[]` column value from Postgres catalog views such as
* `pg_policies.roles` and aggregate queries over `pg_enum.enumlabel`.
*
* Control-plane queries use the Postgres driver's raw-text parser policy for
* array OIDs, so this helper accepts raw Postgres array literals only. A native
* JS array at this boundary means the caller bypassed target-owned framing and
* is rejected rather than normalized as a second representation.
*
* The parser honors Postgres array-literal quoting: an element
* containing a comma, quote, backslash, brace, or significant whitespace is
* emitted double-quoted with `\"` / `\\` escapes, and unquoted elements are
* whitespace-trimmed — so a label like `in progress` or `say "hi"` parses to
* its true value instead of being split or kept escaped.
*/ function parsePgNameArray(value) {
    if (Array.isArray(value)) throw new TypeError(`expected raw text for a Postgres array, got ${typeof value}`);
    if (typeof value !== "string") return [];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])(value).map((entry)=>String(entry));
}
/**
* Maps `pg_policies.cmd` text values to the `RlsPolicyOperation` union.
* The `pg_policies` view renders the internal command code as an uppercase
* English keyword; this function lowercases to match the IR type.
*/ function mapPgCmd(cmd) {
    switch(cmd.toUpperCase()){
        case "SELECT":
            return "select";
        case "INSERT":
            return "insert";
        case "UPDATE":
            return "update";
        case "DELETE":
            return "delete";
        default:
            return "all";
    }
}
function isRecord(value) {
    return typeof value === "object" && value !== null;
}
function freezeStringArray(values) {
    return Object.freeze([
        ...values
    ]);
}
/**
* The table names a contract's storage declares, keyed by namespace id. Empty when no contract (or no storage / namespaces) is present, which makes `PostgresControlAdapter.introspect` fall back to the single-schema walk.
*/ function extractContractTableNames(contract) {
    if (!isRecord(contract)) return /* @__PURE__ */ new Map();
    const storage = contract["storage"];
    if (!isRecord(storage)) return /* @__PURE__ */ new Map();
    const namespaces = storage["namespaces"];
    if (!isRecord(namespaces)) return /* @__PURE__ */ new Map();
    return new Map(Object.entries(namespaces).map(([id, namespace])=>[
            id,
            declaredTableNames(namespace)
        ]));
}
function declaredTableNames(namespace) {
    if (!isRecord(namespace)) return [];
    const entries = namespace["entries"];
    if (!isRecord(entries)) return [];
    const tables = entries["table"];
    return isRecord(tables) ? Object.keys(tables) : [];
}
const PG_REFERENTIAL_ACTION_MAP = {
    "NO ACTION": "noAction",
    RESTRICT: "restrict",
    CASCADE: "cascade",
    "SET NULL": "setNull",
    "SET DEFAULT": "setDefault"
};
/**
* Maps a Postgres referential action rule to the canonical SqlReferentialAction.
* Returns undefined for 'NO ACTION' (the database default) to keep the IR sparse.
* Throws for unrecognized rules to prevent silent data loss.
*/ function isPgReferentialActionRule(rule) {
    return Object.hasOwn(PG_REFERENTIAL_ACTION_MAP, rule);
}
function mapReferentialAction(rule) {
    if (!isPgReferentialActionRule(rule)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$renderer$2d$DrSed$2d$6w$2d$Bt8Hx2pU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("CONTRACT.INTROSPECTION_UNSUPPORTED", `Unknown PostgreSQL referential action rule: "${rule}". Expected one of: NO ACTION, RESTRICT, CASCADE, SET NULL, SET DEFAULT.`, {
        meta: {
            rule
        }
    });
    const mapped = PG_REFERENTIAL_ACTION_MAP[rule];
    if (mapped === "noAction") return void 0;
    return mapped;
}
/**
* A FK/policy dependency chain, mirroring the shape the expected-side
* derivation stamps (`contractToPostgresDatabaseSchemaNode`): the database
* root's fixed sentinel id, then the namespace, then the table.
*/ function postgresTableDependsOn(namespaceId, tableName) {
    return [
        {
            nodeKind: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].database,
            id: "database"
        },
        {
            nodeKind: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].namespace,
            id: namespaceId
        },
        {
            nodeKind: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].table,
            id: tableName
        }
    ];
}
/** A policy's dependency chain onto one of the roles it grants to. */ function postgresRoleDependsOn(role) {
    return [
        {
            nodeKind: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].database,
            id: "database"
        },
        {
            nodeKind: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].role,
            id: role
        }
    ];
}
/**
* The chains from a table-child object (foreign key, index, unique, primary
* key) to each of the own columns it is built on — the introspection-side
* mirror of `contractToPostgresDatabaseSchemaNode`'s `columnDependsOn`. An
* object is dropped before the columns it covers.
*/ function postgresColumnDependsOn(namespaceId, tableName, columns) {
    return columns.map((column)=>[
            ...postgresTableDependsOn(namespaceId, tableName),
            {
                nodeKind: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__RelationalSchemaNodeKind$3e$__["RelationalSchemaNodeKind"].column,
                id: `column:${column}`
            }
        ]);
}
/**
* Groups an array of objects by a specified key.
* Returns a Map for O(1) lookup by group key.
*/ /**
* Parses a `pg_class.reloptions` array into a `Record<string, string>`.
*
* Postgres returns reloptions as a `text[]` whose entries are `key=value`
* strings; the value side is always a string regardless of the underlying
* scalar type. The verifier compares contract options to introspected
* options after coercing both sides to strings, so keeping the raw text
* here is correct.
*
* Returns `undefined` when the input is null/empty (no WITH clause).
*/ function parsePgReloptions(reloptions, indexName) {
    if (Array.isArray(reloptions)) throw new TypeError(`expected raw text for a Postgres array, got ${typeof reloptions}`);
    if (reloptions === null || reloptions === void 0) return;
    if (typeof reloptions !== "string") return;
    const entries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])(reloptions).map((entry)=>String(entry));
    if (entries.length === 0) return;
    const result = {};
    for (const entry of entries){
        const eq = entry.indexOf("=");
        if (eq === -1) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$renderer$2d$DrSed$2d$6w$2d$Bt8Hx2pU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("CONTRACT.INTROSPECTION_UNSUPPORTED", `Postgres introspection: malformed reloption entry "${entry}" on index "${indexName}" (expected "key=value")`, {
            meta: {
                entry,
                indexName
            }
        });
        const key = entry.slice(0, eq);
        result[key] = entry.slice(eq + 1);
    }
    return Object.keys(result).length > 0 ? result : void 0;
}
function groupBy(items, key) {
    const map = /* @__PURE__ */ new Map();
    for (const item of items){
        const groupKey = item[key];
        let group = map.get(groupKey);
        if (!group) {
            group = [];
            map.set(groupKey, group);
        }
        group.push(item);
    }
    return map;
}
const INTROSPECTION_OUTPUT_SETTINGS = {
    timeZone: "UTC",
    dateStyle: "ISO, MDY",
    intervalStyle: "postgres",
    byteaOutput: "hex"
};
async function readOutputSettings(driver) {
    const { rows } = await driver.query(`SELECT current_setting('TimeZone') AS "timeZone",
            current_setting('DateStyle') AS "dateStyle",
            current_setting('IntervalStyle') AS "intervalStyle",
            current_setting('bytea_output') AS "byteaOutput"`);
    return rows[0];
}
async function applyOutputSettings(driver, settings, local) {
    await driver.query(`SELECT set_config('TimeZone', $1, $5),
            set_config('DateStyle', $2, $5),
            set_config('IntervalStyle', $3, $5),
            set_config('bytea_output', $4, $5)`, [
        settings.timeZone,
        settings.dateStyle,
        settings.intervalStyle,
        settings.byteaOutput,
        local
    ]);
}
function sameOutputSettings(a, b) {
    return a?.timeZone === b.timeZone && a.dateStyle === b.dateStyle && a.intervalStyle === b.intervalStyle && a.byteaOutput === b.byteaOutput;
}
/**
* Runs `read` with the settings that shape printed values pinned to Postgres's defaults, then
* restores the caller's. Postgres prints a `timestamptz` default in the session time zone, and
* dates, intervals and bytea in the session styles, so pinning them gives the same text whatever
* the server, the role, or the caller set.
*
* The settings are first set locally. A local setting outlives its own statement only inside a
* transaction, so reading them back tells the two cases apart. Inside the caller's transaction they
* are set and restored locally, so the caller's session values return when it commits; outside
* one they are set and restored for the session. When `read` fails, its error is the one thrown;
* inside a transaction the failure aborts it, and the caller's rollback restores the settings.
*/ async function readWithDefaultOutputSettings(driver, read) {
    const callerSettings = await readOutputSettings(driver);
    if (callerSettings === void 0) return read();
    await applyOutputSettings(driver, INTROSPECTION_OUTPUT_SETTINGS, true);
    const local = sameOutputSettings(await readOutputSettings(driver), INTROSPECTION_OUTPUT_SETTINGS);
    if (!local) await applyOutputSettings(driver, INTROSPECTION_OUTPUT_SETTINGS, false);
    const restore = ()=>applyOutputSettings(driver, callerSettings, local);
    let result;
    try {
        result = await read();
    } catch (error) {
        await restore().catch(()=>void 0);
        throw error;
    }
    await restore();
    return result;
}
/** A value as DDL writes it, with a `Date` written as its ISO 8601 text, which an invalid `Date` has none of. */ function pgInlineLiteral(wire, typeText, where) {
    const dateAsText = (value)=>{
        if (!(value instanceof Date)) return value;
        if (Number.isNaN(value.getTime())) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$renderer$2d$DrSed$2d$6w$2d$Bt8Hx2pU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("CONTRACT.DEFAULT_INVALID", `Column "${where.table}"."${where.column}" has an invalid Date default`, {
            meta: {
                table: where.table,
                column: where.column,
                reason: "invalid-date-default"
            }
        });
        return value.toISOString();
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])(Array.isArray(wire) && typeText.endsWith("[]") ? wire.map(dateAsText) : dateAsText(wire), typeText);
}
const SERIAL_FAMILY_TYPES = /* @__PURE__ */ new Set([
    "serial",
    "serial4",
    "bigserial",
    "serial8",
    "smallserial",
    "serial2"
]);
async function pgRenderDdlColumnDefault(def, typeText, codecLookup, codecRef, where) {
    if (def.kind === "function") {
        if (def.expression.text === "autoincrement()") {
            if (!SERIAL_FAMILY_TYPES.has(typeText.toLowerCase())) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.DEFAULT_INVALID", `Column type "${typeText}" has an autoincrement() default but is not a SERIAL-family pseudo-type. Autoincrement columns must declare their type as SERIAL (or SERIAL4), BIGSERIAL (or SERIAL8), or SMALLSERIAL (or SERIAL2) — e.g. col(name, "SERIAL", { default: fn("autoincrement()") }).`, {
                meta: {
                    typeText
                }
            });
            return "";
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$qcQteqs2$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__checkSqlDefaultText$3e$__["checkSqlDefaultText"])(def.expression.text) !== void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.DEFAULT_INVALID", `Unsafe default expression in contract: "${def.expression.text}". Default expressions must not contain semicolons, SQL comment tokens, dollar-quoting, or subqueries.`, {
            meta: {
                expression: def.expression.text
            }
        });
        return `DEFAULT (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__renderOpaqueSql$3e$__["renderOpaqueSql"])(def.expression)})`;
    }
    return `DEFAULT ${pgInlineLiteral(await pgWrittenDefault(def.value, typeText, codecLookup, codecRef, where), typeText, where)}`;
}
/**
* The value DDL writes for a literal default, and for each element of a list default: a value the codec reads as SQL NULL as `null`, and anything else as the codec's wire value (`fromDataTypeValue`, then `toWire`). Without a codec, the value as written.
*/ async function pgWrittenDefault(value, typeText, codecLookup, codecRef, where) {
    if (value === null && typeText.endsWith("[]")) return null;
    if (Array.isArray(value) && typeText.endsWith("[]")) {
        const encoded = codecRef === void 0 ? void 0 : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__S__as__encodeListLiteralDefault$3e$__["encodeListLiteralDefault"])(codecLookup, codecRef, value, where);
        return value.map((element, index)=>pgWrittenValue(element, encoded?.[index]));
    }
    return pgWrittenValue(value, codecRef === void 0 ? void 0 : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__encodeLiteralDefault$3e$__["encodeLiteralDefault"])(codecLookup, codecRef, value, where));
}
function pgWrittenValue(value, encoded) {
    if (encoded === void 0) return value;
    return encoded.kind === "sql-null" ? null : encoded.wire;
}
async function pgRenderDdlColumn(column, codecLookup, table) {
    const parts = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(column.name),
        column.type
    ];
    if (column.default) {
        const clause = await pgRenderDdlColumnDefault(column.default, column.type, codecLookup, column.codecRef, {
            table,
            column: column.name
        });
        if (clause.length > 0) parts.push(clause);
    }
    if (column.notNull) parts.push("NOT NULL");
    if (column.primaryKey) parts.push("PRIMARY KEY");
    return parts.join(" ");
}
function pgRenderDdlConstraint(constraint) {
    if (constraint.kind === "primary-key") {
        const cols = constraint.columns.map(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"]).join(", ");
        if (constraint.name !== void 0) return `CONSTRAINT ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(constraint.name)} PRIMARY KEY (${cols})`;
        return `PRIMARY KEY (${cols})`;
    }
    if (constraint.kind === "foreign-key") {
        let sql = `FOREIGN KEY (${constraint.columns.map(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"]).join(", ")}) REFERENCES ${constraint.refTable.split(".").map(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"]).join(".")} (${constraint.refColumns.map(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"]).join(", ")})`;
        if (constraint.onDelete !== void 0) sql += ` ON DELETE ${__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$referential$2d$action$2d$sql$2d$BLzCtTi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__REFERENTIAL_ACTION_SQL$3e$__["REFERENTIAL_ACTION_SQL"][constraint.onDelete]}`;
        if (constraint.onUpdate !== void 0) sql += ` ON UPDATE ${__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$referential$2d$action$2d$sql$2d$BLzCtTi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__REFERENTIAL_ACTION_SQL$3e$__["REFERENTIAL_ACTION_SQL"][constraint.onUpdate]}`;
        if (constraint.name !== void 0) sql = `CONSTRAINT ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(constraint.name)} ${sql}`;
        return sql;
    }
    if (constraint.kind === "check-expression") return `CONSTRAINT ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(constraint.name)} CHECK (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__renderOpaqueSql$3e$__["renderOpaqueSql"])(constraint.expression)})`;
    const cols = constraint.columns.map(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"]).join(", ");
    if (constraint.name !== void 0) return `CONSTRAINT ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(constraint.name)} UNIQUE (${cols})`;
    return `UNIQUE (${cols})`;
}
async function pgRenderCreateTable(node, codecLookup) {
    const ifNotExists = node.ifNotExists ? "IF NOT EXISTS " : "";
    const tableRef = pgQualify(node.schema, node.table);
    const columnDefs = await Promise.all(node.columns.map((col)=>pgRenderDdlColumn(col, codecLookup, node.table)));
    const constraintDefs = node.constraints !== void 0 ? node.constraints.map(pgRenderDdlConstraint) : [];
    return {
        sql: `CREATE TABLE ${ifNotExists}${tableRef} (\n  ${[
            ...columnDefs,
            ...constraintDefs
        ].join(",\n  ")}\n)`,
        params: []
    };
}
function pgRenderCreateSchema(node) {
    return {
        sql: `CREATE SCHEMA ${node.ifNotExists ? "IF NOT EXISTS " : ""}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.schema)}`,
        params: []
    };
}
function pgRenderCreateType(node) {
    return {
        sql: `CREATE TYPE ${pgQualify(node.schema, node.name)} AS ENUM (${node.values.map((value)=>`'${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(value)}'`).join(", ")})`,
        params: []
    };
}
function pgRenderDropType(node) {
    return {
        sql: `DROP TYPE ${pgQualify(node.schema, node.name)}`,
        params: []
    };
}
async function pgRenderAlterTable(node, codecLookup) {
    const tableRef = pgQualify(node.schema, node.table);
    const actionVisitor = {
        async addColumn (action) {
            return `ADD COLUMN ${await pgRenderDdlColumn(action.column, codecLookup, node.table)}`;
        },
        dropDefault (action) {
            return Promise.resolve(`ALTER COLUMN ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(action.columnName)} DROP DEFAULT`);
        },
        addConstraint (action) {
            return Promise.resolve(`ADD ${pgRenderDdlConstraint(action.constraint)}`);
        },
        alterColumnType (action) {
            const column = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(action.columnName);
            const using = action.using === void 0 ? `${column}::${action.type}` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__renderOpaqueSql$3e$__["renderOpaqueSql"])(action.using);
            return Promise.resolve(`ALTER COLUMN ${column} TYPE ${action.type} USING ${using}`);
        }
    };
    return {
        sql: `ALTER TABLE ${tableRef} ${(await Promise.all(node.actions.map((action)=>action.accept(actionVisitor)))).join(", ")}`,
        params: []
    };
}
function pgRenderCreatePolicy(node) {
    const tableRef = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.schema)}.${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.table)}`;
    const permissiveness = node.permissive ? "PERMISSIVE" : "RESTRICTIVE";
    const command = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$canonicalize$2d$RdxoUHao$2d$FTTkizfe$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"][node.operation];
    const roles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$canonicalize$2d$RdxoUHao$2d$FTTkizfe$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"])(node.roles).join(", ");
    let sql = `CREATE POLICY ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.name)} ON ${tableRef} AS ${permissiveness} FOR ${command} TO ${roles}`;
    if (node.using !== void 0) sql += ` USING (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__renderOpaqueSql$3e$__["renderOpaqueSql"])(node.using)})`;
    if (node.withCheck !== void 0) sql += ` WITH CHECK (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__renderOpaqueSql$3e$__["renderOpaqueSql"])(node.withCheck)})`;
    return {
        sql,
        params: []
    };
}
function pgRenderDropPolicy(node) {
    const tableRef = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.schema)}.${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.table)}`;
    return {
        sql: `DROP POLICY ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.name)} ON ${tableRef}`,
        params: []
    };
}
function pgRenderAlterPolicyRename(node) {
    const tableRef = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.schema)}.${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.table)}`;
    return {
        sql: `ALTER POLICY ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.name)} ON ${tableRef} RENAME TO ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.newName)}`,
        params: []
    };
}
/**
* Renders one index reloption value: strings single-quote-escaped, finite
* numbers verbatim, booleans in the `on`/`off` catalog spelling (the
* canonical form the wire hash and the option equality commit to).
*/ function pgRenderIndexOptionValue(key, value) {
    if (typeof value === "string") return `'${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(value)}'`;
    if (typeof value === "number" && Number.isFinite(value)) return String(value);
    if (typeof value === "boolean") return value ? "on" : "off";
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.INDEX_INVALID", `Index option "${key}" must be a string, finite number, or boolean; got ${typeof value}`, {
        meta: {
            key,
            valueType: typeof value
        }
    });
}
/** Qualifies an object name; an absent schema renders it unqualified (unbound namespace). */ function pgQualify(schema, name) {
    return schema === void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(name) : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(schema)}.${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(name)}`;
}
function pgRenderCreateIndex(node) {
    const elementList = "columns" in node.elements ? node.elements.columns.map(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"]).join(", ") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__renderOpaqueSql$3e$__["renderOpaqueSql"])(node.elements.expression);
    const unique = node.unique ? "UNIQUE " : "";
    const using = node.type !== void 0 ? ` USING ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.type)}` : "";
    const withClause = node.options !== void 0 && Object.keys(node.options).length > 0 ? ` WITH (${Object.entries(node.options).map(([key, value])=>`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(key)} = ${pgRenderIndexOptionValue(key, value)}`).join(", ")})` : "";
    const whereClause = node.where !== void 0 ? ` WHERE (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__renderOpaqueSql$3e$__["renderOpaqueSql"])(node.where)})` : "";
    return {
        sql: `CREATE ${unique}INDEX ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.name)} ON ${pgQualify(node.schema, node.table)}${using} (${elementList})${withClause}${whereClause}`,
        params: []
    };
}
function pgRenderDropIndex(node) {
    return {
        sql: `DROP INDEX ${pgQualify(node.schema, node.name)}`,
        params: []
    };
}
function pgRenderAlterIndexRename(node) {
    return {
        sql: `ALTER INDEX ${pgQualify(node.schema, node.from)} RENAME TO ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.to)}`,
        params: []
    };
}
function pgRenderDisableRowLevelSecurity(node) {
    return {
        sql: `ALTER TABLE ${`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.schema)}.${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.table)}`} DISABLE ROW LEVEL SECURITY`,
        params: []
    };
}
function pgRenderAlterTableSetSchema(node) {
    return {
        sql: `ALTER TABLE ${pgQualify(node.schema, node.table)} SET SCHEMA ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.to)}`,
        params: []
    };
}
function pgRenderAlterSchemaRename(node) {
    return {
        sql: `ALTER SCHEMA ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.schema)} RENAME TO ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.to)}`,
        params: []
    };
}
function pgRenderDropSchema(node) {
    return {
        sql: `DROP SCHEMA ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.schema)}`,
        params: []
    };
}
async function pgRenderDdlExecuteRequest(ast, codecLookup) {
    return ast.accept({
        createTable: (node)=>pgRenderCreateTable(node, codecLookup),
        createSchema: (node)=>Promise.resolve(pgRenderCreateSchema(node)),
        createType: (node)=>Promise.resolve(pgRenderCreateType(node)),
        dropType: (node)=>Promise.resolve(pgRenderDropType(node)),
        alterTable: (node)=>pgRenderAlterTable(node, codecLookup),
        createPolicy: (node)=>Promise.resolve(pgRenderCreatePolicy(node)),
        dropPolicy: (node)=>Promise.resolve(pgRenderDropPolicy(node)),
        alterPolicyRename: (node)=>Promise.resolve(pgRenderAlterPolicyRename(node)),
        createIndex: (node)=>Promise.resolve(pgRenderCreateIndex(node)),
        dropIndex: (node)=>Promise.resolve(pgRenderDropIndex(node)),
        alterIndexRename: (node)=>Promise.resolve(pgRenderAlterIndexRename(node)),
        disableRowLevelSecurity: (node)=>Promise.resolve(pgRenderDisableRowLevelSecurity(node)),
        alterTableSetSchema: (node)=>Promise.resolve(pgRenderAlterTableSetSchema(node)),
        alterSchemaRename: (node)=>Promise.resolve(pgRenderAlterSchemaRename(node)),
        dropSchema: (node)=>Promise.resolve(pgRenderDropSchema(node))
    });
}
/**
* What this adapter adds to every contract it runs: its capabilities and the aggregate overloads it lists. `prisma contract emit` reads them through the adapter's descriptor, and the TypeScript `defineContract` passes them to the contract build.
*/ const postgresAdapterContractContributions = {
    capabilities: postgresAdapterCapabilities,
    types: {
        aggregateDescriptors: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$aggregates$2d$BNste$2d$08$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]
    }
};
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/contract-contributions-DpTbtESH-CxVtT7cT.mjs [app-route] (ecmascript) <export r as postgresAdapterContractContributions>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "postgresAdapterContractContributions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$contributions$2d$DpTbtESH$2d$CxVtT7cT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$contributions$2d$DpTbtESH$2d$CxVtT7cT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/contract-contributions-DpTbtESH-CxVtT7cT.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/contract-free-DmNEp1_Y.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>jsonb,
    "c",
    ()=>textArray,
    "i",
    ()=>int8,
    "l",
    ()=>timestamptz,
    "n",
    ()=>buildSignMarkerBootstrapQueries,
    "o",
    ()=>pgTable,
    "r",
    ()=>int4,
    "s",
    ()=>text,
    "t",
    ()=>buildControlTableBootstrapQueries,
    "u",
    ()=>timestamptzJsDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-ids-2htdtS66-CJPMZv1t.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-schema-BBWgs4fX-DWdYxNi8.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$ddl$2d$qu$2d$IzeH4$2d$CFpSpY0X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/ddl-qu-IzeH4-CFpSpY0X.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__APP_SPACE_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/control-DzRwUDn-.mjs [app-route] (ecmascript) <export t as APP_SPACE_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/relational-core__contract-free.mjs [app-route] (ecmascript)");
;
;
;
;
;
//#region ../../../3-targets/postgres/1-target/dist/contract-free.mjs
const desc = (codecId, opts)=>({
        codecId,
        nullable: opts?.nullable ?? false
    });
const text = (opts)=>desc(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"], opts);
const int4 = (opts)=>desc(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["p"], opts);
const int8 = (opts)=>desc(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"], opts);
const jsonb = (opts)=>desc(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["y"], opts);
const textArray = (opts)=>({
        ...desc(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"], opts),
        many: true
    });
const timestamptz = (opts)=>desc(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["D"], opts);
const timestamptzJsDate = (opts)=>desc(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["E"], opts);
/**
* Declare a PostgreSQL control-plane table with a typed column schema. Wraps
* the generic `table()` factory with a `PostgresTableSource` so the renderer
* qualifies the table name with the optional schema prefix.
*
* ```ts
* const marker = pgTable(
*   { name: 'marker', schema: 'prisma_contract' },
*   { space: text(), core_hash: text(), updated_at: timestamptz() },
* );
* ```
*/ function pgTable(source, columns) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["table"])(new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["d"](source), columns);
}
const markerColumns = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("space", "text", {
        notNull: true,
        primaryKey: true,
        default: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lit"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$DzRwUDn$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__APP_SPACE_ID$3e$__["APP_SPACE_ID"])
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("core_hash", "text", {
        notNull: true
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("profile_hash", "text", {
        notNull: true
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("contract_json", "jsonb"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("canonical_version", "int"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("updated_at", "timestamptz", {
        notNull: true,
        default: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fn"])("now()")
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("app_tag", "text"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("meta", "jsonb", {
        notNull: true,
        default: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lit"])("{}")
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("invariants", "text[]", {
        notNull: true,
        default: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lit"])("{}")
    })
];
const ledgerColumns = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("id", "bigserial", {
        primaryKey: true
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("created_at", "timestamptz", {
        notNull: true,
        default: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fn"])("now()")
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("space", "text", {
        notNull: true
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("migration_name", "text", {
        notNull: true
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("migration_hash", "text", {
        notNull: true
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("origin_core_hash", "text"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("origin_profile_hash", "text"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("destination_core_hash", "text", {
        notNull: true
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("destination_profile_hash", "text"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("operations", "jsonb", {
        notNull: true
    })
];
const contractColumns = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("core_hash", "text", {
        notNull: true,
        primaryKey: true
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("created_at", "timestamptz", {
        notNull: true,
        default: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fn"])("now()")
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["col"])("contract_json", "jsonb", {
        notNull: true
    })
];
const markerTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$ddl$2d$qu$2d$IzeH4$2d$CFpSpY0X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["x"])({
    schema: "prisma_contract",
    table: "marker",
    ifNotExists: true,
    columns: markerColumns
});
const ledgerTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$ddl$2d$qu$2d$IzeH4$2d$CFpSpY0X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["x"])({
    schema: "prisma_contract",
    table: "ledger",
    ifNotExists: true,
    columns: ledgerColumns
});
const contractTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$ddl$2d$qu$2d$IzeH4$2d$CFpSpY0X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["x"])({
    schema: "prisma_contract",
    table: "contract",
    ifNotExists: true,
    columns: contractColumns
});
const controlSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$ddl$2d$qu$2d$IzeH4$2d$CFpSpY0X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["b"])({
    schema: "prisma_contract",
    ifNotExists: true
});
function buildSignMarkerBootstrapQueries() {
    return [
        controlSchema,
        markerTable
    ];
}
function buildControlTableBootstrapQueries() {
    return [
        controlSchema,
        markerTable,
        ledgerTable,
        contractTable
    ];
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/data-type-entries-dmLDRSOf-BJADXpXD.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>postgresDataTypeEntries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/data-types-B47LbZ3z-DRVqjvQZ.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__createNumberClassifier$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/codec-yFwW7XRh.mjs [app-route] (ecmascript) <export a as createNumberClassifier>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$descriptor$2d$CPSGZunM$2d$DxrbRHX1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__numeralText$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/codec-descriptor-CPSGZunM-DxrbRHX1.mjs [app-route] (ecmascript) <export a as numeralText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__parseJsonText$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/codec-yFwW7XRh.mjs [app-route] (ecmascript) <export p as parseJsonText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__m__as__printJsonText$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/codec-yFwW7XRh.mjs [app-route] (ecmascript) <export m as printJsonText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__signedRange$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/codec-yFwW7XRh.mjs [app-route] (ecmascript) <export _ as signedRange>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-route] (ecmascript) <export o as structuredError>");
;
;
;
//#region ../../../3-targets/postgres/1-target/dist/data-type-entries-dmLDRSOf.mjs
/**
* PostgreSQL's own rule for a written number: a whole number takes the narrowest of `int2`, `int4`
* and `int8` that holds it, and anything else — a larger whole number, a number with a fraction, or
* one of the three words — is a `numeric`.
*/ const classifyPostgresNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__createNumberClassifier$3e$__["createNumberClassifier"])({
    integers: [
        {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["T"].id,
            form: "number",
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__signedRange$3e$__["signedRange"])(16)
        },
        {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["E"].id,
            form: "number",
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__signedRange$3e$__["signedRange"])(32)
        },
        {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["D"].id,
            form: "text",
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__signedRange$3e$__["signedRange"])(64)
        }
    ],
    largerWhole: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["F"].id,
        form: "text"
    },
    fraction: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["F"].id,
        form: "text"
    },
    words: {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["F"].id,
        form: "text"
    }
});
function readBoolean(text) {
    if (text === "true" || text === "false") return text === "true";
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("CONTRACT.CAST_REFUSED", `"${text}" is not a boolean.`, {
        why: "The only text a boolean reads is true or false.",
        fix: "Use true or false."
    });
}
/** A tag whose body is a date or time in ISO 8601 or the text PostgreSQL prints, read into the value its type stores. */ function dateTimeTag(tag, parse, documentation) {
    return {
        written: {
            kind: "tag",
            tag,
            parse
        },
        print: (value)=>String(value),
        documentation
    };
}
/** The text of a number-shaped stored value: a number written out, or text taken as it stands. */ function printNumber(value) {
    return typeof value === "number" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$descriptor$2d$CPSGZunM$2d$DxrbRHX1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__numeralText$3e$__["numeralText"])(value) : String(value);
}
function postgresDataTypeEntries() {
    return {
        [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].id]: {
            written: {
                kind: "plain",
                syntax: "string",
                parse: (text)=>text
            },
            print: (value)=>String(value),
            documentation: "Text."
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["f"].id]: {
            written: {
                kind: "plain",
                syntax: "boolean",
                parse: readBoolean
            },
            print: (value)=>String(value),
            documentation: "A boolean, written true or false."
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["F"].id]: {
            written: {
                kind: "plain",
                syntax: "number",
                types: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["T"].id,
                    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["E"].id,
                    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["D"].id,
                    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["F"].id
                ],
                classify: classifyPostgresNumber
            },
            print: printNumber,
            documentation: "A number, whose type comes from its own size and precision."
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["A"].id]: {
            written: {
                kind: "tag",
                tag: "json",
                parse: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__parseJsonText$3e$__["parseJsonText"]
            },
            print: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__m__as__printJsonText$3e$__["printJsonText"],
            documentation: "Reads the text as a JSON document and stores it as the default value."
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v"].id]: dateTimeTag("date", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["y"], "A date, as in date`2024-01-01`. Reads ISO 8601 and the text PostgreSQL prints, such as 0044-03-15 BC, infinity and -infinity."),
        [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["V"].id]: dateTimeTag("time", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["H"], "A time of day without a UTC offset, as in time`12:34:56`."),
        [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"].id]: dateTimeTag("timetz", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["J"], "A time of day with its UTC offset, as in timetz`12:34:56+02:00`."),
        [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["U"].id]: dateTimeTag("timestamp", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["W"], "A date and time of day without a UTC offset, as in timestamp`2024-01-01 12:34:56`. Reads ISO 8601 and the text PostgreSQL prints, including infinity and -infinity."),
        [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["G"].id]: dateTimeTag("timestamptz", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["K"], "An instant, as in timestamptz`2024-01-01T00:00:00Z`, stored in UTC. Reads ISO 8601 and the text PostgreSQL prints, including infinity and -infinity."),
        [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["O"].id]: dateTimeTag("interval", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["k"], "A duration, as in interval`P1Y2M3DT4H5M6S` or interval`1 year 2 mons`, stored as an ISO 8601 duration."),
        [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["p"].id]: {
            written: {
                kind: "tag",
                tag: "bytea",
                parse: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["m"]
            },
            print: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["h"])(String(value)),
            documentation: "Bytes, written as the hex text PostgreSQL prints, as in bytea`\\x68656c6c6f`."
        }
    };
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/data-types-B47LbZ3z-DRVqjvQZ.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$",
    ()=>pgXml,
    "A",
    ()=>pgJson,
    "B",
    ()=>pgTextArray,
    "C",
    ()=>pgFloat8,
    "D",
    ()=>pgInt8,
    "E",
    ()=>pgInt4,
    "F",
    ()=>pgNumeric,
    "G",
    ()=>pgTimestamptz,
    "H",
    ()=>pgTimeStoredText,
    "I",
    ()=>pgNumericParams,
    "J",
    ()=>pgTimetzStoredText,
    "K",
    ()=>pgTimestamptzStoredText,
    "L",
    ()=>pgOid,
    "M",
    ()=>pgJsonbEnumRefusal,
    "N",
    ()=>pgMoney,
    "O",
    ()=>pgInterval,
    "P",
    ()=>pgMoneyStoredText,
    "Q",
    ()=>pgVarchar,
    "R",
    ()=>pgPrecisionParams,
    "S",
    ()=>pgFloat4,
    "T",
    ()=>pgInt2,
    "U",
    ()=>pgTimestamp,
    "V",
    ()=>pgTime,
    "W",
    ()=>pgTimestampStoredText,
    "X",
    ()=>pgUuid,
    "Y",
    ()=>pgTsquery,
    "Z",
    ()=>pgVarbit,
    "_",
    ()=>pgCharacterLengthParams,
    "a",
    ()=>intervalFieldsOf,
    "b",
    ()=>pgEnum,
    "c",
    ()=>microsFromFraction,
    "d",
    ()=>pgBitLengthParams,
    "et",
    ()=>postgresDataTypes,
    "f",
    ()=>pgBool,
    "g",
    ()=>pgChar,
    "h",
    ()=>pgByteaHexText,
    "i",
    ()=>formatIsoDuration,
    "it",
    ()=>qualifiedEnumName,
    "j",
    ()=>pgJsonb,
    "k",
    ()=>pgIntervalStoredText,
    "l",
    ()=>moneyTextOfCents,
    "m",
    ()=>pgByteaFromHexText,
    "n",
    ()=>MICROS_PER_SECOND,
    "nt",
    ()=>postgresTextDataTypes,
    "o",
    ()=>isPgOid,
    "p",
    ()=>pgBytea,
    "q",
    ()=>pgTimetz,
    "r",
    ()=>createPostgresBuiltinDataTypeLookup,
    "rt",
    ()=>postgresYearText,
    "s",
    ()=>isoYearText,
    "t",
    ()=>BYTEA_TEXT,
    "tt",
    ()=>postgresIntervalFields,
    "u",
    ()=>pgBit,
    "v",
    ()=>pgDate,
    "w",
    ()=>pgInet,
    "x",
    ()=>pgEnumParams,
    "y",
    ()=>pgDateStoredText,
    "z",
    ()=>pgText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/errors-DpdPXR_L-DailcY-X.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/sql-utils-VXrIh8dJ-DVxo_Ygp.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__INT32_RANGE$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export n as INT32_RANGE>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__INT64_RANGE$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export r as INT64_RANGE>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__asFloat$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/codec-yFwW7XRh.mjs [app-route] (ecmascript) <export t as asFloat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__asNumeralText$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/codec-yFwW7XRh.mjs [app-route] (ecmascript) <export n as asNumeralText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__assembleDataTypes$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export o as assembleDataTypes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__castUnchanged$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/codec-yFwW7XRh.mjs [app-route] (ecmascript) <export r as castUnchanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__dateTimeStoredText$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/codec-yFwW7XRh.mjs [app-route] (ecmascript) <export o as dateTimeStoredText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__decimalTextEqualityKey$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/codec-yFwW7XRh.mjs [app-route] (ecmascript) <export c as decimalTextEqualityKey>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v__as__readJsonBoolean$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export v as readJsonBoolean>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__y__as__readJsonFloat$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export y as readJsonFloat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__b__as__readJsonInteger$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export b as readJsonInteger>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__x__as__readJsonIntegerText$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export x as readJsonIntegerText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__S__as__readJsonMatching$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export S as readJsonMatching>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__readJsonString$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export C as readJsonString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__refuseJsonValue$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export w as refuseJsonValue>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__refuseWrongShape$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/codec-yFwW7XRh.mjs [app-route] (ecmascript) <export h as refuseWrongShape>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v__as__storedNumeralText$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/codec-yFwW7XRh.mjs [app-route] (ecmascript) <export v as storedNumeralText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__isStructuredError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-route] (ecmascript) <export i as isStructuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-route] (ecmascript) <export o as structuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$text$2d$C3TTEtgd$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__counted$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/text-C3TTEtgd.mjs [app-route] (ecmascript) <export n as counted>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$text$2d$C3TTEtgd$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__withoutTrailing$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/text-C3TTEtgd.mjs [app-route] (ecmascript) <export i as withoutTrailing>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$duration$2d$BqxS5qWq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ISO_DURATION$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/duration-BqxS5qWq.mjs [app-route] (ecmascript) <export t as ISO_DURATION>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/sql-data-type-LVBldu1a-Bq203xWX.mjs [app-route] (ecmascript) <export f as sqlDataType>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$data$2d$type$2d$BfA5F0Qf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__sqlRawDataType$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/data-type-BfA5F0Qf.mjs [app-route] (ecmascript) <export r as sqlRawDataType>");
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
//#region ../../../3-targets/postgres/1-target/dist/data-types-B47LbZ3z.mjs
/**
* Whether text fits `length` characters, counted as PostgreSQL counts them: code points. A `character` value is padded with spaces, and spaces past its length are dropped, so they do not count.
*/ function fitsCharacterLength(text, length, blankPadded) {
    const significant = blankPadded ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$text$2d$C3TTEtgd$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__withoutTrailing$3e$__["withoutTrailing"])(text, " ") : text;
    return significant.length <= length || [
        ...significant
    ].length <= length;
}
/** The uuid input PostgreSQL reads: 32 hex digits in either case, a hyphen allowed after any group of four but the last, and the whole optionally in braces. */ const UUID_INPUT = /^(?:\{[0-9a-f]{4}(?:-?[0-9a-f]{4}){7}\}|[0-9a-f]{4}(?:-?[0-9a-f]{4}){7})$/i;
/**
* Text in any form PostgreSQL reads as a UUID (either case, a hyphen after any group of four digits, optionally in braces), written the way PostgreSQL writes it; `undefined` for text it does not read as one.
*/ function storedUuid(text) {
    if (!UUID_INPUT.test(text)) return void 0;
    const hex = text.replace(/[{}-]/g, "").toLowerCase();
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}
/** The largest finite float4. */ const FLOAT4_MAX = 34028234663852886e22;
/** Whether float4 holds a finite number: it neither overflows to an infinity nor rounds to 0, both of which PostgreSQL refuses. */ function fitsFloat4(value) {
    const single = Math.fround(value);
    return Number.isFinite(single) && (value === 0 || single !== 0);
}
const MICROS_PER_SECOND = 1000000n;
/**
* Converts a fractional-seconds digit string to microseconds, rounding rather
* than truncating past the sixth digit.
*
* PostgreSQL rounds: `INTERVAL '1.1234567 seconds'` is `1.123457`, and
* `'1.9999999 seconds'` carries into `2`. Truncating here made the parsed value
* disagree with the database for any input past microsecond resolution.
*
* Ties round toward positive infinity, matching `Math.round` on the sibling path
* that reads the driver's component object — so the two agree. PostgreSQL's own
* tie behaviour is unobservable, because it parses the literal into a double
* first and an exact half never survives that.
*/ const microsFromFraction = (fraction, negative)=>{
    if (fraction === "") return 0n;
    const kept = BigInt(fraction.slice(0, 6).padEnd(6, "0"));
    const rest = fraction.slice(6).replace(/0+$/, "");
    if (rest === "") return kept;
    const half = rest[0] === "5" && rest.length === 1;
    return rest > "5" || half && !negative ? kept + 1n : kept;
};
const MICROS_PER_DAY = 86400n * MICROS_PER_SECOND;
/** The key two stored intervals share exactly when PostgreSQL holds them equal: their total length in microseconds, a month counting as 30 days and a day as 24 hours. */ function intervalEqualityKey(json) {
    const { months, days, micros } = intervalFieldsOf(String(json));
    return ((BigInt(months) * 30n + BigInt(days)) * MICROS_PER_DAY + micros).toString();
}
const intervalFieldsOf = (text)=>{
    const match = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$duration$2d$BqxS5qWq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ISO_DURATION$3e$__["ISO_DURATION"].exec(text);
    if (match === null) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("RUNTIME.DECODE_FAILED", `pg/interval@1 value must be an ISO-8601 duration, got ${text}`, {
        meta: {
            codecId: "pg/interval@1",
            received: text
        }
    });
    const [, years, months, days, hours, minutes, seconds] = match;
    const wholeNumber = (part)=>part === void 0 ? 0 : Number(part.slice(0, -1));
    const secondsLiteral = seconds === void 0 ? "0" : seconds.slice(0, -1);
    const negative = secondsLiteral.startsWith("-");
    const [whole = "0", fraction = ""] = secondsLiteral.replace("-", "").split(".");
    const magnitude = BigInt(whole) * MICROS_PER_SECOND + microsFromFraction(fraction, negative);
    return {
        months: wholeNumber(years) * 12 + wholeNumber(months),
        days: wholeNumber(days),
        micros: BigInt(wholeNumber(hours)) * 3600n * MICROS_PER_SECOND + BigInt(wholeNumber(minutes)) * 60n * MICROS_PER_SECOND + (negative ? -magnitude : magnitude)
    };
};
const secondsText = (micros)=>{
    const sign = micros < 0n ? "-" : "";
    const magnitude = micros < 0n ? -micros : micros;
    const whole = magnitude / MICROS_PER_SECOND % 60n;
    const fraction = magnitude % MICROS_PER_SECOND;
    return `${sign}${whole}${fraction === 0n ? "" : `.${fraction.toString().padStart(6, "0").replace(/0+$/, "")}`}`;
};
/**
* Renders {@link PgInterval} the way PostgreSQL spells an interval under
* `IntervalStyle = 'iso_8601'`: zero components omitted, `T` present only when a
* time component is, each component carrying its own sign, and an all-zero
* interval written `PT0S`.
*/ const formatIsoDuration = ({ months, days, micros })=>{
    const years = Math.trunc(months / 12);
    const restMonths = months % 12;
    const sign = micros < 0n ? "-" : "";
    const magnitude = micros < 0n ? -micros : micros;
    const hours = magnitude / (3600n * MICROS_PER_SECOND);
    const minutes = magnitude / (60n * MICROS_PER_SECOND) % 60n;
    const hasSeconds = magnitude % (60n * MICROS_PER_SECOND) !== 0n;
    const parts = [
        years === 0 ? "" : `${years}Y`,
        restMonths === 0 ? "" : `${restMonths}M`,
        days === 0 ? "" : `${days}D`
    ];
    const time = [
        hours === 0n ? "" : `${sign}${hours}H`,
        minutes === 0n ? "" : `${sign}${minutes}M`,
        hasSeconds ? `${secondsText(micros)}S` : ""
    ].join("");
    const rendered = `P${parts.join("")}${time === "" ? "" : `T${time}`}`;
    return rendered === "P" ? "PT0S" : rendered;
};
/**
* An interval as PostgreSQL prints it under `IntervalStyle = 'postgres'`: `1 year 2 mons 3 days
* 04:05:06.5`, `-1 years -2 mons +3 days -04:00:00`, `00:00:00`.
*/ const POSTGRES_INTERVAL = /^(?:([+-]?\d+) years? ?)?(?:([+-]?\d+) mons? ?)?(?:([+-]?\d+) days? ?)?(?:([+-])?(\d+):(\d{2}):(\d{2})(?:\.(\d+))?)?$/;
function postgresIntervalFields(text) {
    const match = POSTGRES_INTERVAL.exec(text);
    if (match === null || text === "" || text.endsWith(" ")) return void 0;
    const [, years = "0", months = "0", days = "0", sign, hours = "0", minutes = "0", seconds = "0"] = match;
    const fraction = match[8] ?? "";
    const magnitude = (BigInt(hours) * 3600n + BigInt(minutes) * 60n + BigInt(seconds)) * MICROS_PER_SECOND + microsFromFraction(fraction, sign === "-");
    return {
        months: Number(years) * 12 + Number(months),
        days: Number(days),
        micros: sign === "-" ? -magnitude : magnitude
    };
}
function intervalRefused(message) {
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("CONTRACT.CAST_REFUSED", message, {
        why: "pg/interval stores one form for each interval (ADR 254), and reads ISO 8601 durations and the text PostgreSQL prints.",
        fix: "Write an ISO 8601 duration, as the message shows."
    });
}
/**
* The stored form of `pg/interval` (ADR 254), from an ISO 8601 duration or the text PostgreSQL
* prints under `IntervalStyle = 'postgres'`.
*/ function pgIntervalStoredText(text) {
    const fractionDigits = /\.(\d+)/.exec(text)?.[1]?.length ?? 0;
    if (fractionDigits > 6) intervalRefused(`"${text}" has ${fractionDigits} digits after the decimal point, but pg/interval holds microseconds, so at most 6. Round it, as in "PT1.123456S".`);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$duration$2d$BqxS5qWq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ISO_DURATION$3e$__["ISO_DURATION"].test(text)) return formatIsoDuration(intervalFieldsOf(text));
    const fields = postgresIntervalFields(text);
    if (fields === void 0) intervalRefused(`pg/interval cannot read "${text}". Write an ISO 8601 duration, as in "P1Y2M3DT4H5M6S".`);
    return formatIsoDuration(fields);
}
const BASE64_TEXT = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
/** Reads base64 with or without padding bits set; {@link spellPgByteaJson} writes the base64 `pg/bytea` stores. */ const readPgByteaJson = (owner, json)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__S__as__readJsonMatching$3e$__["readJsonMatching"])(owner, json, BASE64_TEXT, "a base64 string");
/** The base64 of the same bytes with padding bits zero, as `Buffer` writes it. */ const spellPgByteaJson = (json)=>typeof json === "string" ? Buffer.from(json, "base64").toString("base64") : json;
const BYTEA_TEXT = /^\\x(?:[0-9A-Fa-f]{2})*$/;
/** The base64 `pg/bytea` stores for the hex text PostgreSQL prints, `\x68656c6c6f`. The `bytea` tag reads its body with this. */ function pgByteaFromHexText(text) {
    if (!BYTEA_TEXT.test(text)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("CONTRACT.CAST_REFUSED", `"${text}" is not the hex text PostgreSQL prints for bytea, which is \\x followed by two hexadecimal digits for each byte, as in \\x68656c6c6f.`, {
        why: "The bytea tag reads bytes as the hex text PostgreSQL prints under bytea_output = hex.",
        fix: "Write the bytes in hex after \\x, as in bytea`\\x68656c6c6f`."
    });
    return Buffer.from(text.slice(2), "hex").toString("base64");
}
/** The hex text PostgreSQL prints for the base64 `pg/bytea` stores. */ function pgByteaHexText(base64) {
    return `\\x${Buffer.from(base64, "base64").toString("hex")}`;
}
/**
* PostgreSQL's year text (ADR 254, "Date and time types"). PostgreSQL reads and prints no signed year: a year after 9999 is written without its sign and leading zeros, `10000-01-01`, and a year at or before ISO year 0000 with a ` BC` suffix and PostgreSQL's year number, which has no year 0, so ISO year 0000 is `0001 BC` and -000043 is `0044 BC`. Every Postgres date and time codec and tag converts years through these two functions.
*/ const POSTGRES_YEAR = /^(\d{4,6})(-.*?)( BC)?$/;
const ISO_YEAR = /^([+-]\d{6,}|\d{4})(-.*)$/;
const BC_SUFFIX = " BC";
/** ISO 8601 text, with a four-digit or signed six-digit year, from text PostgreSQL prints. Text with no year, ISO text and `0000 BC`, which does not exist, stay as they are. */ function isoYearText(text) {
    const match = POSTGRES_YEAR.exec(text);
    if (match === null) return text;
    const [, digits = "", rest = "", bc] = match;
    const year = Number(digits);
    if (bc !== void 0) {
        if (year === 0) return text;
        return `${isoYear(1 - year)}${rest}`;
    }
    return digits.length > 4 ? `${isoYear(year)}${rest}` : text;
}
/** The text PostgreSQL reads for ISO 8601 text with a four-digit year or a signed year of six or more digits. Text with no year stays as it is. */ function postgresYearText(text) {
    const match = ISO_YEAR.exec(text);
    if (match === null) return text;
    const [, yearDigits = "", rest = ""] = match;
    const year = Number(yearDigits);
    if (year > 9999) return `${year}${rest}`;
    if (year >= 1) return `${String(year).padStart(4, "0")}${rest}`;
    return `${String(1 - year).padStart(4, "0")}${rest}${BC_SUFFIX}`;
}
function isoYear(year) {
    if (year >= 0 && year <= 9999) return String(year).padStart(4, "0");
    return `${year < 0 ? "-" : "+"}${String(Math.abs(year)).padStart(6, "0")}`;
}
const DIGIT = /^[0-9]$/;
const HEX_DIGIT = /^[0-9a-fA-F]$/;
const isDigit = (ch)=>ch !== void 0 && DIGIT.test(ch);
/**
* Text PostgreSQL reads as an `inet` value, written the way PostgreSQL prints it: an IPv4 address in
* four decimal octets, an IPv6 address in lower-case hex with its longest run of zero groups written
* `::`, and the prefix length only when it is shorter than the whole address. `undefined` for text
* PostgreSQL does not read as an `inet` value.
*/ function storedInet(text) {
    if (text.includes(":")) {
        const value = readIpv6(text);
        return value === void 0 ? void 0 : printIpv6(value);
    }
    const value = readIpv4(text);
    return value === void 0 ? void 0 : printIpv4(value);
}
/**
* PostgreSQL's `inet_net_pton_ipv4`: one to four decimal octets, each up to 255 and leading zeros
* allowed, then an optional `/` and prefix length up to 32. Without a prefix length all four octets
* are required; with one, the octets written must cover it.
*/ function readIpv4(text) {
    const octets = [];
    let index = 0;
    let ch = text[index++];
    while(isDigit(ch)){
        let octet = 0;
        do {
            octet = octet * 10 + Number(ch);
            if (octet > 255) return void 0;
            ch = text[index++];
        }while (isDigit(ch))
        if (octets.length === 4) return void 0;
        octets.push(octet);
        if (ch === void 0 || ch === "/") break;
        if (ch !== ".") return void 0;
        ch = text[index++];
    }
    let bits = -1;
    if (ch === "/" && isDigit(text[index]) && octets.length > 0) {
        ch = text[index++];
        bits = 0;
        do {
            bits = bits * 10 + Number(ch);
            ch = text[index++];
        }while (isDigit(ch))
        if (ch !== void 0 || bits > 32) return void 0;
    }
    if (ch !== void 0) return void 0;
    if (bits === -1) {
        if (octets.length !== 4) return void 0;
        bits = 32;
    }
    if (octets.length === 0 || Math.floor(bits / 8) > octets.length) return void 0;
    return {
        bytes: [
            ...octets,
            0,
            0,
            0,
            0
        ].slice(0, 4),
        bits
    };
}
/** PostgreSQL's `getbits`: a prefix length up to 128, with no leading zero. */ function readBits(text) {
    let bits = 0;
    let digits = 0;
    for (const ch of text){
        if (!isDigit(ch)) return void 0;
        if (digits++ !== 0 && bits === 0) return void 0;
        bits = bits * 10 + Number(ch);
        if (bits > 128) return void 0;
    }
    return digits === 0 ? void 0 : bits;
}
/**
* PostgreSQL's `getv4`, for the IPv4 tail of an IPv6 address: up to four decimal octets with no
* leading zeros, and an optional prefix length. Octets left out are zero.
*/ function readIpv4Tail(text) {
    const octets = [];
    let octet = 0;
    let digits = 0;
    for (const [index, ch] of [
        ...text
    ].entries()){
        if (isDigit(ch)) {
            if (digits++ !== 0 && octet === 0) return void 0;
            octet = octet * 10 + Number(ch);
            if (octet > 255) return void 0;
            continue;
        }
        if (ch !== "." && ch !== "/") return void 0;
        if (octets.length > 3) return void 0;
        octets.push(octet);
        if (ch === "/") {
            const bits = readBits(text.slice(index + 1));
            return bits === void 0 ? void 0 : {
                octets,
                bits
            };
        }
        octet = 0;
        digits = 0;
    }
    if (digits === 0 || octets.length > 3) return void 0;
    return {
        octets: [
            ...octets,
            octet
        ],
        bits: void 0
    };
}
/**
* PostgreSQL's `inet_cidr_pton_ipv6`: up to eight groups of one to four hex digits in either case,
* one `::` standing for a run of zero groups, an optional IPv4 tail, and an optional prefix length.
*/ function readIpv6(text) {
    const bytes = new Array(16).fill(0);
    let filled = 0;
    let compressedAt;
    let index = 0;
    if (text[0] === ":") {
        if (text[1] !== ":") return void 0;
        index = 1;
    }
    let tokenStart = index;
    let sawHexDigit = false;
    let group = 0;
    let groupDigits = 0;
    let bits = 128;
    while(index < text.length){
        const ch = text[index++] ?? "";
        if (HEX_DIGIT.test(ch)) {
            group = group << 4 | Number.parseInt(ch, 16);
            if (++groupDigits > 4) return void 0;
            sawHexDigit = true;
            continue;
        }
        if (ch === ":") {
            tokenStart = index;
            if (!sawHexDigit) {
                if (compressedAt !== void 0) return void 0;
                compressedAt = filled;
                continue;
            }
            if (index >= text.length || filled + 2 > 16) return void 0;
            bytes[filled++] = group >> 8;
            bytes[filled++] = group & 255;
            sawHexDigit = false;
            group = 0;
            groupDigits = 0;
            continue;
        }
        if (ch === "." && filled + 4 <= 16) {
            const tail = readIpv4Tail(text.slice(tokenStart));
            if (tail !== void 0) {
                tail.octets.forEach((octet, offset)=>{
                    bytes[filled + offset] = octet;
                });
                filled += 4;
                sawHexDigit = false;
                bits = tail.bits ?? bits;
                break;
            }
        }
        if (ch === "/") {
            const prefix = readBits(text.slice(index));
            if (prefix !== void 0) {
                bits = prefix;
                break;
            }
        }
        return;
    }
    if (sawHexDigit) {
        if (filled + 2 > 16) return void 0;
        bytes[filled++] = group >> 8;
        bytes[filled++] = group & 255;
    }
    if (compressedAt !== void 0) {
        if (filled === 16) return void 0;
        const shifted = bytes.slice(compressedAt, filled);
        bytes.fill(0, compressedAt, filled);
        bytes.splice(16 - shifted.length, shifted.length, ...shifted);
        filled = 16;
    }
    return filled === 16 ? {
        bytes,
        bits
    } : void 0;
}
function printIpv4({ bytes, bits }) {
    const address = bytes.join(".");
    return bits === 32 ? address : `${address}/${bits}`;
}
/**
* PostgreSQL's `inet_net_ntop_ipv6`: the first longest run of two or more zero groups is written
* `::`, and an address whose first five groups are zero followed by `ffff`, or whose first six are
* zero, ends in dotted IPv4.
*/ function printIpv6({ bytes, bits }) {
    const groups = Array.from({
        length: 8
    }, (_, i)=>(bytes[2 * i] ?? 0) << 8 | (bytes[2 * i + 1] ?? 0));
    const zeroRun = longestZeroRun(groups);
    let text = "";
    for(let i = 0; i < 8; i++){
        if (zeroRun !== void 0 && i >= zeroRun.start && i < zeroRun.start + zeroRun.length) {
            if (i === zeroRun.start) text += ":";
            continue;
        }
        if (i !== 0) text += ":";
        if (i === 6 && zeroRun?.start === 0 && (zeroRun.length === 6 || zeroRun.length === 5 && groups[5] === 65535)) {
            text += bytes.slice(12).join(".");
            break;
        }
        text += (groups[i] ?? 0).toString(16);
    }
    if (zeroRun !== void 0 && zeroRun.start + zeroRun.length === 8) text += ":";
    return bits === 128 ? text : `${text}/${bits}`;
}
function longestZeroRun(groups) {
    let best;
    let current;
    for (const [i, group] of groups.entries()){
        if (group === 0) {
            current = current === void 0 ? {
                start: i,
                length: 1
            } : {
                ...current,
                length: current.length + 1
            };
            continue;
        }
        if (current !== void 0 && (best === void 0 || current.length > best.length)) best = current;
        current = void 0;
    }
    if (current !== void 0 && (best === void 0 || current.length > best.length)) best = current;
    return best !== void 0 && best.length >= 2 ? best : void 0;
}
const written = (text)=>({
        text,
        written: true
    });
const catalog = (text)=>({
        text,
        catalog: true
    });
const writtenAndCatalog = (text)=>({
        text,
        written: true,
        catalog: true
    });
const claimsOnly = (text)=>({
        text
    });
const anyJson = (json)=>json;
const readString = (id)=>(json)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__readJsonString$3e$__["readJsonString"])(id, json);
/** A parameter a type declares as a whole number, or undefined when the column does not set it. */ function integerParam(params, name) {
    const value = params[name];
    return typeof value === "number" ? value : void 0;
}
/** A decimal numeral: an optional minus sign, digits, and an optional fraction. */ const DECIMAL_NUMERAL_TEXT = /^-?\d+(?:\.\d+)?$/;
/**
* Numeric text in the form PostgreSQL *prints*, which is narrower than the form it accepts.
*
* `numeric` reads `+123`, `.5`, `1.`, `1e5`, `0x1f`, `1_000`, `007`, `-0` and whitespace-padded input, but prints every one of them in a single normalised form — `123`, `0.5`, `1`, `100000`, `31`, `1000`, `7`, `0`. A value in any other form is one the database never returns: `1e5` reads back as `100000`.
*
* `NaN`, `Infinity` and `-Infinity` are genuine `numeric` values, which PostgreSQL emits into JSON as strings.
*/ const STORED_NUMERIC_TEXT = /^(?:(?!-0(?:\.0+)?$)-?(?:0|[1-9]\d*)(?:\.\d+)?|NaN|-?Infinity)$/;
/**
* Whether stored numeric text is a value `numeric(precision, scale)` stores without rounding: a whole number of units of 10^-scale, and at most `precision` digits once counted in those units. A negative scale rounds to tens, hundreds and so on, and a scale above the precision allows only values below 1. NaN fits; an infinity does not.
*/ function fitsNumeric(text, precision, scale) {
    if (text === "NaN") return true;
    if (text.endsWith("Infinity")) return false;
    const [whole = "", fraction = ""] = text.replace(/^-/, "").split(".");
    const significantFraction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$text$2d$C3TTEtgd$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__withoutTrailing$3e$__["withoutTrailing"])(fraction, "0");
    const digits = `${whole}${significantFraction}`.replace(/^0+/, "");
    if (digits === "") return true;
    const shift = scale - significantFraction.length;
    if (shift >= 0) return digits.length + shift <= precision;
    const units = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$text$2d$C3TTEtgd$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__withoutTrailing$3e$__["withoutTrailing"])(digits, "0");
    if (digits.length - units.length < -shift) return false;
    return digits.length + shift <= precision;
}
const readNumeric = (json, params)=>{
    if (typeof json !== "string" || !STORED_NUMERIC_TEXT.test(json)) {
        const printed = typeof json === "string" && DECIMAL_NUMERAL_TEXT.test(json) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v__as__storedNumeralText$3e$__["storedNumeralText"])(json) : void 0;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__refuseJsonValue$3e$__["refuseJsonValue"])("pg/numeric", printed === void 0 ? "a decimal string" : `"${printed}", as PostgreSQL writes this value`, json);
    }
    const precision = integerParam(params, "precision");
    if (precision === void 0) return json;
    const scale = integerParam(params, "scale") ?? 0;
    if (!fitsNumeric(json, precision, scale)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__refuseJsonValue$3e$__["refuseJsonValue"])("pg/numeric", `a decimal string that numeric(${precision}, ${scale}) stores without rounding`, json);
    return json;
};
/** A value of `numeric(precision, scale)` is written as PostgreSQL prints it: with exactly `scale` fraction digits, none for a scale of 0 or below. */ const spellNumeric = (json, params)=>{
    if (integerParam(params, "precision") === void 0 || typeof json !== "string" || json === "NaN") return json;
    const scale = integerParam(params, "scale") ?? 0;
    const [whole = "", fraction = ""] = json.split(".");
    return scale <= 0 ? whole : `${whole}.${fraction.slice(0, scale).padEnd(scale, "0")}`;
};
const readFloat4 = (json)=>{
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__y__as__readJsonFloat$3e$__["readJsonFloat"])("pg/float4", json);
    if (Number.isFinite(value) && !fitsFloat4(value)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__refuseJsonValue$3e$__["refuseJsonValue"])("pg/float4", `a number float4 holds, at most ${FLOAT4_MAX} in magnitude and not so small that it becomes 0, or the text NaN, Infinity or -Infinity`, json);
    return json;
};
/** A `character` value is spelled without the spaces that pad it to its length, as the application reads it. */ const spellCharacter = (json)=>typeof json === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$text$2d$C3TTEtgd$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__withoutTrailing$3e$__["withoutTrailing"])(json, " ") : json;
/** A `character` column holds its length in characters, and one with no length is `character(1)`; the spaces that pad a value to its length do not count. */ const readCharacter = (json, params)=>{
    const length = integerParam(params, "length") ?? 1;
    if (!fitsCharacterLength((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__readJsonString$3e$__["readJsonString"])("pg/char", json), length, true)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__refuseJsonValue$3e$__["refuseJsonValue"])("pg/char", `a string of at most ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$text$2d$C3TTEtgd$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__counted$3e$__["counted"])(length, "character")} before any trailing spaces`, json);
    return json;
};
/** A `character varying` column with a length holds at most that many characters. */ const readCharacterVarying = (json, params)=>{
    const length = integerParam(params, "length");
    const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__readJsonString$3e$__["readJsonString"])("pg/varchar", json);
    if (length !== void 0 && !fitsCharacterLength(text, length, false)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__refuseJsonValue$3e$__["refuseJsonValue"])("pg/varchar", `a string of at most ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$text$2d$C3TTEtgd$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__counted$3e$__["counted"])(length, "character")}`, json);
    return json;
};
const BIT_STRING = /^[01]*$/;
/** A `bit` column holds exactly its length in bits, and one with no length is `bit(1)`. */ const readBit = (json, params)=>{
    const length = integerParam(params, "length") ?? 1;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__S__as__readJsonMatching$3e$__["readJsonMatching"])("pg/bit", json, BIT_STRING, "a string of 0 and 1 digits").length !== length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__refuseJsonValue$3e$__["refuseJsonValue"])("pg/bit", `a string of exactly ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$text$2d$C3TTEtgd$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__counted$3e$__["counted"])(length, "bit")}`, json);
    return json;
};
/** A `bit varying` column with a length holds at most that many bits. */ const readBitVarying = (json, params)=>{
    const length = integerParam(params, "length");
    const bits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__S__as__readJsonMatching$3e$__["readJsonMatching"])("pg/varbit", json, BIT_STRING, "a string of 0 and 1 digits");
    if (length !== void 0 && bits.length > length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__refuseJsonValue$3e$__["refuseJsonValue"])("pg/varbit", `a string of at most ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$text$2d$C3TTEtgd$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__counted$3e$__["counted"])(length, "bit")}`, json);
    return json;
};
/** A `text[]` may hold NULL elements, which PostgreSQL writes as JSON `null`. */ const readTextArray = (json)=>{
    const expected = "an array of strings and nulls";
    if (!Array.isArray(json)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__refuseJsonValue$3e$__["refuseJsonValue"])("pg/text-array", expected, json);
    for (const entry of json)if (entry !== null && typeof entry !== "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__refuseJsonValue$3e$__["refuseJsonValue"])("pg/text-array", expected, entry);
    return json;
};
/** Reads a UUID in any spelling PostgreSQL reads; `spellUuid` gives it the one it stores. */ const readUuid = (json)=>typeof json === "string" && storedUuid(json) !== void 0 ? json : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__refuseJsonValue$3e$__["refuseJsonValue"])("pg/uuid", "a UUID in a spelling PostgreSQL reads: 32 hexadecimal digits in either case, with or without a hyphen after any group of four, optionally in braces", json);
/** A UUID is stored as PostgreSQL prints it: lower case, hyphenated 8-4-4-4-12. */ const spellUuid = (json)=>typeof json === "string" ? storedUuid(json) ?? json : json;
/** Reads an address in any spelling PostgreSQL reads; `spellInet` gives it the one it stores. */ const readInet = (json)=>typeof json === "string" && storedInet(json) !== void 0 ? json : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__refuseJsonValue$3e$__["refuseJsonValue"])("pg/inet", "an IP address or network in a spelling PostgreSQL reads, as in 10.0.0.1 or 2001:db8::/32", json);
/** An address is stored as PostgreSQL prints it. */ const spellInet = (json)=>typeof json === "string" ? storedInet(json) ?? json : json;
/** The fraction digits of a second the date, time and interval types hold when a column sets no precision: microseconds. */ const MICROSECOND_DIGITS = 6;
/**
* A value with more fraction digits of a second than the column's `precision`, or than microseconds when it sets none, which PostgreSQL would round, is refused rather than rounded. Trailing zeros of a fraction are not digits of the value.
*/ function refuseFinerThanPrecision(typeId, json, fraction, params) {
    const precision = integerParam(params, "precision") ?? MICROSECOND_DIGITS;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$text$2d$C3TTEtgd$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__withoutTrailing$3e$__["withoutTrailing"])(fraction ?? "", "0").length <= precision) return json;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__refuseJsonValue$3e$__["refuseJsonValue"])(typeId, `a value with at most ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$text$2d$C3TTEtgd$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__counted$3e$__["counted"])(precision, "fraction digit")} of a second, which precision ${precision} holds without rounding`, json);
}
/** What `storedText` writes for `text`, or why it cannot read it. */ function storedSpelling(storedText, text) {
    try {
        return {
            stored: storedText(text)
        };
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__isStructuredError$3e$__["isStructuredError"])(error) && error.code === "CONTRACT.CAST_REFUSED") return {
            reason: error.message
        };
        throw error;
    }
}
/**
* Reads a value of a date or time type (ADR 254, "Date and time types") in any spelling its tag reads, and refuses other text. A value with more fraction digits than the column's precision is refused rather than rounded. `spellStoredDateTime` gives the value its one stored spelling.
*/ const readStoredDateTime = (typeId, storedText, description, fraction)=>(json, params)=>{
        if (typeof json !== "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__refuseJsonValue$3e$__["refuseJsonValue"])(typeId, description, json);
        const spelling = storedSpelling(storedText, json);
        if ("reason" in spelling) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__refuseJsonValue$3e$__["refuseJsonValue"])(typeId, `${description}: ${spelling.reason}`, json);
        refuseFinerThanPrecision(typeId, json, fraction.exec(spelling.stored)?.[1], params);
        return json;
    };
/** The stored spelling of a date or time value: what `storedText` writes. */ const spellStoredDateTime = (storedText)=>(json)=>{
        if (typeof json !== "string") return json;
        const spelling = storedSpelling(storedText, json);
        return "stored" in spelling ? spelling.stored : json;
    };
const SECONDS_FRACTION = /:\d{2}\.(\d+)/;
const INTERVAL_SECONDS_FRACTION = /\d\.(\d+)S$/;
/** The precision and scale of `numeric`. PostgreSQL 15 and later take a negative scale and one above the precision. */ const pgNumericParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])({
    "precision?": "number.integer >= 1 & number.integer <= 1000",
    "scale?": "number.integer >= -1000 & number.integer <= 1000"
}).narrow((params, ctx)=>params.scale === void 0 || params.precision !== void 0 || ctx.reject({
        path: [
            "scale"
        ],
        message: "scale requires a precision"
    }));
/** The length of `char` and `varchar`. */ const pgCharacterLengthParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])({
    "length?": "number.integer >= 1 & number.integer <= 10485760"
});
/** The length of `bit` and `bit varying`. */ const pgBitLengthParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])({
    "length?": "number.integer >= 1 & number.integer <= 83886080"
});
/** The fractional-second precision of the time, timestamp and interval types. */ const pgPrecisionParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])({
    "precision?": "number.integer >= 0 & number.integer <= 6"
});
/** PostgreSQL stores microseconds whether a precision of 6 is declared or omitted, so an omitted precision is 6. */ const withDefaultPrecision = (params)=>params.precision === void 0 ? {
        ...params,
        precision: 6
    } : params;
/** PostgreSQL's catalog prints a precision only where one was declared. */ const precisionAsWritten = (params)=>params;
const pgEnumParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])({
    typeName: "string > 0"
});
/** A type with no parameters that is written and reported by its own name. */ const namedOnly = (id, name, read, casts = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])(id, {
        texts: [
            writtenAndCatalog(name)
        ],
        read,
        casts
    });
const withDefaultLength = (params)=>params.length === void 0 ? {
        ...params,
        length: 1
    } : params;
const pgText = namedOnly("pg/text", "text", readString("pg/text"));
const pgTextArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/text-array", {
    read: readTextArray
});
/** The enum's `typeName`: its name in `public` or with no schema, its schema-qualified name elsewhere. */ function qualifiedEnumName(reported) {
    const name = reported.name ?? "";
    return reported.schema === void 0 || reported.schema === "public" ? name : `${reported.schema}.${name}`;
}
const pgEnum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/enum", {
    params: pgEnumParams,
    read: readString("pg/enum"),
    claimsKind: "enum",
    render: ({ typeName })=>{
        const dot = typeName.indexOf(".");
        return dot === -1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(typeName) : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(typeName.slice(0, dot))}.${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(typeName.slice(dot + 1))}`;
    },
    fromReported: (reported)=>({
            typeName: qualifiedEnumName(reported)
        })
});
const pgInt2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/int2", {
    texts: [
        written("int2"),
        catalog("smallint")
    ],
    read: (json)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__b__as__readJsonInteger$3e$__["readJsonInteger"])("pg/int2", json, {
            min: -32768,
            max: 32767
        })
});
const pgBool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/bool", {
    texts: [
        written("bool"),
        catalog("boolean")
    ],
    read: (json)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v__as__readJsonBoolean$3e$__["readJsonBoolean"])("pg/bool", json)
});
const pgJson = namedOnly("pg/json", "json", anyJson);
const pgTsquery = namedOnly("pg/tsquery", "tsquery", readString("pg/tsquery"));
const pgInt4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/int4", {
    texts: [
        written("int4"),
        catalog("integer"),
        claimsOnly("int")
    ],
    read: (json)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__b__as__readJsonInteger$3e$__["readJsonInteger"])("pg/int4", json, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__INT32_RANGE$3e$__["INT32_RANGE"]),
    casts: {
        [pgInt2.id]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__castUnchanged$3e$__["castUnchanged"]
    }
});
const pgInt8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/int8", {
    texts: [
        written("int8"),
        catalog("bigint")
    ],
    read: (json)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__x__as__readJsonIntegerText$3e$__["readJsonIntegerText"])("pg/int8", json, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__INT64_RANGE$3e$__["INT64_RANGE"]);
        return json;
    },
    casts: {
        [pgInt2.id]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__asNumeralText$3e$__["asNumeralText"],
        [pgInt4.id]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__asNumeralText$3e$__["asNumeralText"]
    }
});
const pgNumeric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/numeric", {
    params: pgNumericParams,
    texts: [
        writtenAndCatalog("numeric"),
        written("numeric({precision})"),
        writtenAndCatalog("numeric({precision},{scale})"),
        claimsOnly("decimal"),
        claimsOnly("decimal({precision})"),
        claimsOnly("decimal({precision},{scale})")
    ],
    read: readNumeric,
    spell: spellNumeric,
    equalityKey: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__decimalTextEqualityKey$3e$__["decimalTextEqualityKey"],
    normalize: (params)=>params.precision !== void 0 && params.scale === void 0 ? {
            ...params,
            scale: 0
        } : params,
    casts: {
        [pgInt2.id]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__asNumeralText$3e$__["asNumeralText"],
        [pgInt4.id]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__asNumeralText$3e$__["asNumeralText"],
        [pgInt8.id]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__castUnchanged$3e$__["castUnchanged"]
    }
});
/** `float4` stores a single-precision float, so a magnitude past about 3.4e38, or one it would round to 0, does not fit. */ const asFloat4 = (value)=>{
    const converted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__asFloat$3e$__["asFloat"])(value);
    if (typeof converted !== "number" || fitsFloat4(converted)) return converted;
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("CONTRACT.CAST_REFUSED", `${converted} is out of range: float4 holds a nonzero magnitude from about 1.4e-45 to 3.4e38.`, {
        why: "float4 stores a single-precision float, which overflows past about 3.4e38 and rounds a magnitude below about 1.4e-45 to 0.",
        fix: "Use a number float4 holds, or a float8 or numeric column."
    });
};
const floatCastsOf = (cast)=>({
        [pgInt2.id]: cast,
        [pgInt4.id]: cast,
        [pgInt8.id]: cast,
        [pgNumeric.id]: cast
    });
const pgFloat4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/float4", {
    texts: [
        written("float4"),
        catalog("real")
    ],
    read: readFloat4,
    casts: floatCastsOf(asFloat4)
});
const pgFloat8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/float8", {
    texts: [
        written("float8"),
        catalog("double precision"),
        claimsOnly("float")
    ],
    read: (json)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__y__as__readJsonFloat$3e$__["readJsonFloat"])("pg/float8", json);
        return json;
    },
    casts: floatCastsOf(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__asFloat$3e$__["asFloat"])
});
const pgJsonb = namedOnly("pg/jsonb", "jsonb", anyJson, {
    [pgJson.id]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__castUnchanged$3e$__["castUnchanged"]
});
/** Why no enum can use a codec of `pg/jsonb`, which every such codec gives as its `enumRefusal`. */ const pgJsonbEnumRefusal = "A CHECK lists a string member as SQL text, which PostgreSQL reads as the JSON text of a document rather than as a string, and a number member as a number, which PostgreSQL cannot compare with jsonb, so no CHECK can compare a value with the members. No enum can use a jsonb codec; use a text enum instead.";
const fromText = {
    [pgText.id]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__castUnchanged$3e$__["castUnchanged"]
};
const pgChar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/char", {
    params: pgCharacterLengthParams,
    texts: [
        written("character"),
        writtenAndCatalog("character({length})"),
        claimsOnly("char"),
        claimsOnly("char({length})")
    ],
    read: readCharacter,
    spell: spellCharacter,
    normalize: withDefaultLength,
    casts: fromText
});
const pgVarchar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/varchar", {
    params: pgCharacterLengthParams,
    texts: [
        writtenAndCatalog("character varying"),
        writtenAndCatalog("character varying({length})"),
        claimsOnly("varchar"),
        claimsOnly("varchar({length})")
    ],
    read: readCharacterVarying,
    casts: fromText
});
/** Text in any form PostgreSQL reads as a UUID, written the way PostgreSQL writes it, so the contract holds the value the database reports. */ const asUuid = (value)=>{
    if (typeof value !== "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__refuseWrongShape$3e$__["refuseWrongShape"])(value, "text");
    const uuid = storedUuid(value);
    if (uuid !== void 0) return uuid;
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("CONTRACT.CAST_REFUSED", `${JSON.stringify(value)} is not a UUID: PostgreSQL reads 32 hexadecimal digits, with a hyphen after any group of four and optionally in braces.`, {
        why: "A uuid column takes only text PostgreSQL reads as a UUID.",
        fix: "Write a UUID such as a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11."
    });
};
const pgUuid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/uuid", {
    texts: [
        writtenAndCatalog("uuid")
    ],
    read: readUuid,
    spell: spellUuid,
    casts: {
        [pgText.id]: asUuid
    }
});
const pgBit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/bit", {
    params: pgBitLengthParams,
    texts: [
        written("bit"),
        writtenAndCatalog("bit({length})")
    ],
    read: readBit,
    normalize: withDefaultLength,
    casts: fromText
});
const pgVarbit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/varbit", {
    params: pgBitLengthParams,
    texts: [
        writtenAndCatalog("bit varying"),
        writtenAndCatalog("bit varying({length})"),
        claimsOnly("varbit"),
        claimsOnly("varbit({length})")
    ],
    read: readBitVarying,
    casts: fromText
});
const pgXml = namedOnly("pg/xml", "xml", readString("pg/xml"), fromText);
const OID_RANGE = {
    min: 0,
    max: 4294967295
};
/** Whether a number is one `oid` stores: a whole number from 0 to 4294967295. */ function isPgOid(value) {
    return Number.isInteger(value) && value >= OID_RANGE.min && value <= OID_RANGE.max;
}
/** An integer as `oid` stores it: an unsigned 32-bit number, refused outside that range. */ const asOid = (value)=>{
    if (typeof value !== "number" && typeof value !== "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__refuseWrongShape$3e$__["refuseWrongShape"])(value, "a number or digit text");
    const converted = Number(value);
    if (isPgOid(converted)) return converted;
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("CONTRACT.CAST_REFUSED", `${value} is out of range: oid holds a whole number from ${OID_RANGE.min} to ${OID_RANGE.max}.`, {
        why: "oid stores an unsigned 32-bit integer.",
        fix: `Use a whole number from ${OID_RANGE.min} to ${OID_RANGE.max}.`
    });
};
const pgOid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/oid", {
    texts: [
        writtenAndCatalog("oid")
    ],
    read: (json)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__b__as__readJsonInteger$3e$__["readJsonInteger"])("pg/oid", json, OID_RANGE),
    casts: {
        [pgInt2.id]: asOid,
        [pgInt4.id]: asOid,
        [pgInt8.id]: asOid
    }
});
/** `money` holds a signed 64-bit count of cents. */ const MONEY_CENTS_RANGE = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__INT64_RANGE$3e$__["INT64_RANGE"];
const MONEY_RANGE_TEXT = "from -92233720368547758.08 to 92233720368547758.07";
/** The cents a decimal numeral holds, or undefined when it has a third significant fraction digit or lies outside `money`'s range. */ function moneyCents(text) {
    if (!DECIMAL_NUMERAL_TEXT.test(text)) return void 0;
    const negative = text.startsWith("-");
    const [whole = "", fraction = ""] = text.replace(/^-/, "").split(".");
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$text$2d$C3TTEtgd$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__withoutTrailing$3e$__["withoutTrailing"])(fraction, "0").length > 2) return void 0;
    const magnitude = BigInt(`${whole}${fraction.slice(0, 2).padEnd(2, "0")}`);
    const cents = negative ? -magnitude : magnitude;
    return cents >= MONEY_CENTS_RANGE.min && cents <= MONEY_CENTS_RANGE.max ? cents : void 0;
}
/** Cents as `money`'s stored form: digit text with exactly two fraction digits. */ function moneyTextOfCents(cents) {
    const digits = (cents < 0n ? -cents : cents).toString().padStart(3, "0");
    return `${cents < 0n ? "-" : ""}${digits.slice(0, -2)}.${digits.slice(-2)}`;
}
/** A decimal numeral as `money`'s stored form, or undefined when `money` does not hold it exactly. */ function pgMoneyStoredText(text) {
    const cents = moneyCents(text);
    return cents === void 0 ? void 0 : moneyTextOfCents(cents);
}
const readMoney = (json)=>typeof json === "string" && moneyCents(json) !== void 0 ? json : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__refuseJsonValue$3e$__["refuseJsonValue"])("pg/money", `a decimal string with at most two fraction digits, ${MONEY_RANGE_TEXT}`, json);
const spellMoney = (json)=>typeof json === "string" ? pgMoneyStoredText(json) ?? json : json;
/** A number as `money` stores it, refused rather than rounded when it has a third fraction digit, and refused outside `money`'s range. */ const asMoney = (value)=>{
    const text = typeof value === "number" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__asNumeralText$3e$__["asNumeralText"])(value) : value;
    if (typeof text !== "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__refuseWrongShape$3e$__["refuseWrongShape"])(value, "a number or numeral text");
    const stored = pgMoneyStoredText(text);
    if (stored !== void 0) return stored;
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("CONTRACT.CAST_REFUSED", `${text} is not a money value: money holds a number with at most two fraction digits, ${MONEY_RANGE_TEXT}.`, {
        why: "money stores a whole number of cents, and PostgreSQL rounds a value with a third fraction digit.",
        fix: "Write the amount with at most two fraction digits."
    });
};
const pgMoney = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/money", {
    texts: [
        writtenAndCatalog("money")
    ],
    read: readMoney,
    spell: spellMoney,
    casts: {
        [pgInt2.id]: asMoney,
        [pgInt4.id]: asMoney,
        [pgInt8.id]: asMoney,
        [pgNumeric.id]: asMoney
    }
});
const INFINITIES = /* @__PURE__ */ new Set([
    "infinity",
    "-infinity"
]);
/**
* The stored form of a date or time type (ADR 254), from ISO 8601 or the text PostgreSQL prints.
* `infinity` and `-infinity` are values of the types that hold them.
*/ function postgresDateTime(options, holdsInfinity) {
    return (text)=>holdsInfinity && INFINITIES.has(text) ? text : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__dateTimeStoredText$3e$__["dateTimeStoredText"])(isoYearText(text), options, text);
}
/**
* Each range is what PostgreSQL and every codec of the type hold: PostgreSQL starts at 4714-11-24
* BC, and the `Temporal` and `Date` codecs end at +275760-09-13.
*/ const pgDateStoredText = postgresDateTime({
    shape: "date",
    ownerId: "pg/date",
    range: {
        earliest: "-004713-11-24",
        latest: "+275760-09-13"
    }
}, true);
const pgTimeStoredText = postgresDateTime({
    shape: "time",
    ownerId: "pg/time"
}, false);
const pgTimetzStoredText = postgresDateTime({
    shape: "timeWithOffset",
    ownerId: "pg/timetz",
    maxOffsetHours: 15
}, false);
const pgTimestampStoredText = postgresDateTime({
    shape: "dateTime",
    ownerId: "pg/timestamp",
    range: {
        earliest: "-004713-11-24T00:00:00",
        latest: "+275760-09-13T23:59:59.999999"
    }
}, true);
const pgTimestamptzStoredText = postgresDateTime({
    shape: "instant",
    ownerId: "pg/timestamptz",
    range: {
        earliest: "-004713-11-24T00:00:00Z",
        latest: "+275760-09-13T00:00:00Z"
    }
}, true);
/** A cast that takes text and gives the value `read` makes of it. */ const castFromText = (read)=>(value)=>typeof value === "string" ? read(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$yFwW7XRh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__refuseWrongShape$3e$__["refuseWrongShape"])(value, "text");
const pgTimetz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/timetz", {
    read: readStoredDateTime("pg/timetz", pgTimetzStoredText, "a time of day with its UTC offset, as in \"12:34:56+02:00\" or \"12:34:56Z\"", SECONDS_FRACTION),
    spell: spellStoredDateTime(pgTimetzStoredText),
    params: pgPrecisionParams,
    normalize: withDefaultPrecision,
    catalogParams: precisionAsWritten,
    texts: [
        written("timetz"),
        written("timetz({precision})"),
        catalog("time with time zone"),
        catalog("time({precision}) with time zone")
    ]
});
const pgInterval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/interval", {
    read: readStoredDateTime("pg/interval", pgIntervalStoredText, "an ISO 8601 duration, as in \"P1Y2M3DT4H5M6.5S\"", INTERVAL_SECONDS_FRACTION),
    spell: spellStoredDateTime(pgIntervalStoredText),
    equalityKey: intervalEqualityKey,
    params: pgPrecisionParams,
    normalize: withDefaultPrecision,
    catalogParams: precisionAsWritten,
    texts: [
        writtenAndCatalog("interval"),
        writtenAndCatalog("interval({precision})")
    ]
});
const pgBytea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/bytea", {
    read: (json)=>readPgByteaJson("pg/bytea", json),
    spell: spellPgByteaJson,
    texts: [
        writtenAndCatalog("bytea")
    ]
});
/** Text PostgreSQL reads as an IP address, written the way PostgreSQL writes it, so the contract holds the value the database reports. */ function pgInetStoredText(text) {
    const inet = storedInet(text);
    if (inet !== void 0) return inet;
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("CONTRACT.CAST_REFUSED", `${JSON.stringify(text)} is not an IP address: PostgreSQL reads an IPv4 address in decimal octets or an IPv6 address in hexadecimal groups, either optionally followed by / and a prefix length.`, {
        why: "An inet column takes only text PostgreSQL reads as an IP address.",
        fix: "Write an address such as 192.168.0.1 or 2001:db8::1/64."
    });
}
const pgInet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/inet", {
    read: readInet,
    spell: spellInet,
    texts: [
        writtenAndCatalog("inet")
    ],
    casts: {
        [pgText.id]: castFromText(pgInetStoredText)
    }
});
const pgDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/date", {
    read: readStoredDateTime("pg/date", pgDateStoredText, "a date, as in \"2024-01-01\", or infinity or -infinity", SECONDS_FRACTION),
    spell: spellStoredDateTime(pgDateStoredText),
    texts: [
        writtenAndCatalog("date")
    ]
});
const pgTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/time", {
    read: readStoredDateTime("pg/time", pgTimeStoredText, "a time of day, as in \"12:34:56\"", SECONDS_FRACTION),
    spell: spellStoredDateTime(pgTimeStoredText),
    params: pgPrecisionParams,
    normalize: withDefaultPrecision,
    catalogParams: precisionAsWritten,
    texts: [
        written("time"),
        written("time({precision})"),
        catalog("time without time zone"),
        catalog("time({precision}) without time zone")
    ]
});
const pgTimestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/timestamp", {
    read: readStoredDateTime("pg/timestamp", pgTimestampStoredText, "a date and time of day, as in \"2024-01-01T12:34:56\", or infinity or -infinity", SECONDS_FRACTION),
    spell: spellStoredDateTime(pgTimestampStoredText),
    params: pgPrecisionParams,
    normalize: withDefaultPrecision,
    catalogParams: precisionAsWritten,
    texts: [
        written("timestamp"),
        written("timestamp({precision})"),
        catalog("timestamp without time zone"),
        catalog("timestamp({precision}) without time zone")
    ]
});
const pgTimestamptz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__sqlDataType$3e$__["sqlDataType"])("pg/timestamptz", {
    read: readStoredDateTime("pg/timestamptz", pgTimestamptzStoredText, "an instant in UTC, as in \"2024-01-01T00:00:00Z\", or infinity or -infinity", SECONDS_FRACTION),
    spell: spellStoredDateTime(pgTimestamptzStoredText),
    params: pgPrecisionParams,
    normalize: withDefaultPrecision,
    catalogParams: precisionAsWritten,
    texts: [
        written("timestamptz"),
        written("timestamptz({precision})"),
        catalog("timestamp with time zone"),
        catalog("timestamp({precision}) with time zone")
    ]
});
/** Every data type this target registers. */ const postgresDataTypes = [
    pgText,
    pgTextArray,
    pgEnum,
    pgInt2,
    pgBool,
    pgJson,
    pgTsquery,
    pgInt4,
    pgInt8,
    pgNumeric,
    pgFloat4,
    pgFloat8,
    pgJsonb,
    pgChar,
    pgVarchar,
    pgUuid,
    pgInet,
    pgBit,
    pgVarbit,
    pgXml,
    pgOid,
    pgMoney,
    pgTimetz,
    pgInterval,
    pgBytea,
    pgDate,
    pgTime,
    pgTimestamp,
    pgTimestamptz,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$data$2d$type$2d$BfA5F0Qf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__sqlRawDataType$3e$__["sqlRawDataType"]
];
/** A lookup of the data types this target registers. */ function createPostgresBuiltinDataTypeLookup() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__assembleDataTypes$3e$__["assembleDataTypes"])([
        {
            id: "postgres",
            dataTypes: postgresDataTypes
        }
    ]).lookup;
}
/** Postgres's text data types: `text`, `character(n)` and `character varying(n)`. */ const postgresTextDataTypes = [
    pgText.id,
    pgChar.id,
    pgVarchar.id
];
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/date-time-now-generators-BMMGy0vy-BEbt_79F.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>postgresNowGenerators,
    "i",
    ()=>postgresNowGeneratorControlDescriptors,
    "n",
    ()=>TIMESTAMP_STRING_NOW_GENERATOR_ID,
    "o",
    ()=>postgresTargetDescriptorMetaRuntime,
    "r",
    ()=>TIMETZ_NOW_GENERATOR_ID,
    "t",
    ()=>TIMESTAMPTZ_STRING_NOW_GENERATOR_ID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/data-types-B47LbZ3z-DRVqjvQZ.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codecs-CV-_K-z0-DZc60ccR.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__instantNow$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export d as instantNow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__m__as__plainDateTimeNow$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export m as plainDateTimeNow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__plainDateNow$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export p as plainDateNow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__plainTimeNow$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export h as plainTimeNow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__dateTimeStringNow$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export l as dateTimeStringNow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__instantStringNow$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export f as instantStringNow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__g__as__timeStringNow$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export g as timeStringNow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__dateStringNow$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export c as dateStringNow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__DATE_STRING_NOW_GENERATOR_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export t as DATE_STRING_NOW_GENERATOR_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__INSTANT_NOW_GENERATOR_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export n as INSTANT_NOW_GENERATOR_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__PLAIN_DATE_NOW_GENERATOR_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export i as PLAIN_DATE_NOW_GENERATOR_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__PLAIN_DATE_TIME_NOW_GENERATOR_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export a as PLAIN_DATE_TIME_NOW_GENERATOR_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__PLAIN_TIME_NOW_GENERATOR_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export o as PLAIN_TIME_NOW_GENERATOR_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__TIME_STRING_NOW_GENERATOR_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export s as TIME_STRING_NOW_GENERATOR_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__fractionDigitsOf$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export u as fractionDigitsOf>");
;
;
;
;
//#region ../../../3-targets/postgres/1-target/dist/date-time-now-generators-BMMGy0vy.mjs
const postgresTargetDescriptorMetaRuntime = {
    kind: "target",
    familyId: "sql",
    targetId: "postgres",
    id: "postgres",
    version: "0.0.1",
    capabilities: {},
    dataTypes: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["et"],
    sessionSettings: {
        DateStyle: "ISO",
        lc_monetary: "C"
    }
};
const TIMESTAMP_STRING_NOW_GENERATOR_ID = "timestampStringNow";
const TIMESTAMPTZ_STRING_NOW_GENERATOR_ID = "timestamptzStringNow";
const TIMETZ_NOW_GENERATOR_ID = "timetzNow";
const UTC_OFFSET = "Z";
const MAX_TIME_PRECISION = 6;
function precisionOf(params) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__fractionDigitsOf$3e$__["fractionDigitsOf"])(params, MAX_TIME_PRECISION);
}
function instantNow(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__instantNow$3e$__["instantNow"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["W"])({
        generatorId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__INSTANT_NOW_GENERATOR_ID$3e$__["INSTANT_NOW_GENERATOR_ID"]
    }), precisionOf(params));
}
function plainDateTimeNow(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__m__as__plainDateTimeNow$3e$__["plainDateTimeNow"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["W"])({
        generatorId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__PLAIN_DATE_TIME_NOW_GENERATOR_ID$3e$__["PLAIN_DATE_TIME_NOW_GENERATOR_ID"]
    }), precisionOf(params));
}
function plainDateNow() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__plainDateNow$3e$__["plainDateNow"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["W"])({
        generatorId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__PLAIN_DATE_NOW_GENERATOR_ID$3e$__["PLAIN_DATE_NOW_GENERATOR_ID"]
    }));
}
function plainTimeNow(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__plainTimeNow$3e$__["plainTimeNow"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["W"])({
        generatorId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__PLAIN_TIME_NOW_GENERATOR_ID$3e$__["PLAIN_TIME_NOW_GENERATOR_ID"]
    }), precisionOf(params));
}
function timestampStringNow(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__dateTimeStringNow$3e$__["dateTimeStringNow"](precisionOf(params), "trimmed");
}
function timestamptzStringNow(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__instantStringNow$3e$__["instantStringNow"](precisionOf(params), "trimmed");
}
function timeStringNow(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__g__as__timeStringNow$3e$__["timeStringNow"](precisionOf(params), "trimmed");
}
function timetzNow(params) {
    return `${timeStringNow(params)}${UTC_OFFSET}`;
}
/**
* The Postgres "now" generators, one per date and time codec except `pg/timestamptz-date@1` and `pg/timestamp-date@1`, which use the SQL family's `timestampNow`. All read the clock through `Date.now()` and write UTC. The time and timestamp generators round down to their `precision` param, so the column stores the value as written. The string generators are named after the codec they serve and write the codec's stored form (ADR 254, "Date and time types") in UTC, with milliseconds and no trailing zeros in the fraction.
*/ const postgresNowGenerators = [
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__INSTANT_NOW_GENERATOR_ID$3e$__["INSTANT_NOW_GENERATOR_ID"],
        generate: instantNow
    },
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__PLAIN_DATE_TIME_NOW_GENERATOR_ID$3e$__["PLAIN_DATE_TIME_NOW_GENERATOR_ID"],
        generate: plainDateTimeNow
    },
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__PLAIN_DATE_NOW_GENERATOR_ID$3e$__["PLAIN_DATE_NOW_GENERATOR_ID"],
        generate: plainDateNow
    },
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__PLAIN_TIME_NOW_GENERATOR_ID$3e$__["PLAIN_TIME_NOW_GENERATOR_ID"],
        generate: plainTimeNow
    },
    {
        id: TIMESTAMP_STRING_NOW_GENERATOR_ID,
        generate: timestampStringNow
    },
    {
        id: TIMESTAMPTZ_STRING_NOW_GENERATOR_ID,
        generate: timestamptzStringNow
    },
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__DATE_STRING_NOW_GENERATOR_ID$3e$__["DATE_STRING_NOW_GENERATOR_ID"],
        generate: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__dateStringNow$3e$__["dateStringNow"]
    },
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__TIME_STRING_NOW_GENERATOR_ID$3e$__["TIME_STRING_NOW_GENERATOR_ID"],
        generate: timeStringNow
    },
    {
        id: TIMETZ_NOW_GENERATOR_ID,
        generate: timetzNow
    }
];
function postgresNowGeneratorControlDescriptors() {
    return postgresNowGenerators.map(({ id })=>({
            id
        }));
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/default-normalizer-BqK6XxdC-2OUb2ybG.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>readPostgresDefault,
    "t",
    ()=>postgresResolveDefault
]);
//#region ../../../3-targets/postgres/1-target/dist/default-normalizer-BqK6XxdC.mjs
const NEXTVAL_PATTERN = /^nextval\s*\(/i;
const NOW_FUNCTION_PATTERN = /^(now\s*\(\s*\)|CURRENT_TIMESTAMP)$/i;
const CLOCK_TIMESTAMP_PATTERN = /^clock_timestamp\s*\(\s*\)$/i;
const TIMESTAMP_CAST_SUFFIX = /::timestamp(?:tz|\s+(?:with|without)\s+time\s+zone)?$/i;
const TEXT_CAST_SUFFIX = /::text$/i;
const NOW_LITERAL_PATTERN = /^'now'$/i;
const UUID_PATTERN = /^gen_random_uuid\s*\(\s*\)$/i;
const UUID_OSSP_PATTERN = /^uuid_generate_v4\s*\(\s*\)$/i;
const NULL_PATTERN = /^NULL(?:::.+)?$/i;
const TRUE_PATTERN = /^true$/i;
const FALSE_PATTERN = /^false$/i;
/**
* A decimal numeral with an optional sign and an optional exponent. Postgres prints a `real` or
* `double precision` default in exponent notation once its magnitude is large or small enough:
* `'1e+20'::real`, `'1e-320'::double precision`.
*/ const NUMERAL = String.raw`[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?`;
const NUMERIC_PATTERN = new RegExp(`^${NUMERAL}$`);
/**
* A type modifier: `(3)`, `(65,30)`, or a numeric type's negative scale, `(5,-2)`, which PostgreSQL
* 15 and later accept.
*/ const TYPE_MODIFIER = String.raw`\(\d+(?:,\s*-?\d+)?\)`;
/**
* A cast target type: a builtin of one or more words, where any word may carry a modifier
* (`timestamp(3) without time zone`, `numeric(65,30)`), or a quoted identifier (`"AuditAction"`);
* either may be qualified by a possibly quoted schema (`audit."AuditAction"`, `"my schema".t`).
*/ const TYPE_NAME = String.raw`(?:(?:"(?:[^"]|"")+"|\w+)\.)?(?:"(?:[^"]|"")+"|\w+(?:${TYPE_MODIFIER})?(?:\s+\w+(?:${TYPE_MODIFIER})?)*)`;
const QUOTED_LITERAL_PATTERN = new RegExp(`^'((?:[^']|'')*)'(?:::(${TYPE_NAME}))?$`);
/** A string constant with backslash escapes, `E'...'`, which PostgreSQL prints when `standard_conforming_strings` is off. */ const ESCAPE_STRING_LITERAL_PATTERN = new RegExp(String.raw`^[Ee]'((?:[^'\\]|\\.|'')*)'(?:::(${TYPE_NAME}))?$`, "s");
const NUMBER_LITERAL_PATTERN = new RegExp(`^(${NUMERAL})(?:::(${TYPE_NAME}))?$`);
const PARENTHESISED_CAST_PATTERN = new RegExp(String.raw`^\((.+)\)::(${TYPE_NAME})$`, "s");
const INTEGER_PATTERN = /^-?\d+$/;
const INTEGER_TYPE_PATTERN = /^(?:smallint|integer|bigint|int2|int4|int8)$/i;
const NUMBER_TYPE_PATTERN = new RegExp(`^(?:smallint|integer|bigint|int2|int4|int8|real|double precision|float4|float8|numeric|decimal)(?:${TYPE_MODIFIER})?$`, "i");
/**
* Matches a Postgres array literal default of the form `'{...}'::elemtype[]`.
* The literal body is captured in group 1; the cast (including `[]`) is optional.
* Examples: `'{}'::text[]`, `'{1,2}'::integer[]`, `'{}'`
*/ const ARRAY_LITERAL_PATTERN = /^'(\{.*\})'(?:::.+\[\])?$/;
/**
* Matches the constructor spelling Postgres reports for a default written as
* `ARRAY[...]`: `ARRAY['a'::text, 'b'::text]`, `ARRAY[1, 2]`, `ARRAY[]::text[]`.
* The element list is captured in group 1; the outer cast is optional.
*/ const ARRAY_CONSTRUCTOR_PATTERN = new RegExp(String.raw`^ARRAY\[(.*?)\](?:::${TYPE_NAME}\[\])?$`, "is");
const OUTER_ARRAY_CAST_PATTERN = new RegExp(String.raw`^\((.+)\)::${TYPE_NAME}\[\]$`, "s");
/**
* Returns the canonical expression for a timestamp default function, or undefined
* if the expression is not a recognized timestamp default.
*
* Keeps now()/CURRENT_TIMESTAMP and clock_timestamp() distinct:
* - now(), CURRENT_TIMESTAMP, ('now'::text)::timestamp... → 'now()'
* - clock_timestamp(), clock_timestamp()::timestamptz → 'clock_timestamp()'
*
* These are semantically different in Postgres: now() returns the transaction
* start time (constant within a transaction), while clock_timestamp() returns
* the actual wall-clock time (can differ across rows in a single INSERT).
*/ function canonicalizeTimestampDefault(expr) {
    if (NOW_FUNCTION_PATTERN.test(expr)) return "now()";
    if (CLOCK_TIMESTAMP_PATTERN.test(expr)) return "clock_timestamp()";
    if (!TIMESTAMP_CAST_SUFFIX.test(expr)) return void 0;
    let inner = expr.replace(TIMESTAMP_CAST_SUFFIX, "").trim();
    if (inner.startsWith("(") && inner.endsWith(")")) inner = inner.slice(1, -1).trim();
    if (NOW_FUNCTION_PATTERN.test(inner)) return "now()";
    if (CLOCK_TIMESTAMP_PATTERN.test(inner)) return "clock_timestamp()";
    inner = inner.replace(TEXT_CAST_SUFFIX, "").trim();
    if (NOW_LITERAL_PATTERN.test(inner)) return "now()";
}
/**
* A numeral cast to a number type. A cast to an integer type rounds a fraction, so that numeral is
* not the value.
*/ function castNumber(numeral, castType) {
    if (castType === void 0) return {
        kind: "number",
        numeral
    };
    if (!NUMBER_TYPE_PATTERN.test(castType)) return void 0;
    if (INTEGER_TYPE_PATTERN.test(castType) && !INTEGER_PATTERN.test(numeral)) return void 0;
    return {
        kind: "number",
        numeral
    };
}
/**
* Reads a literal by its cast type: `'-1'::integer` and `(1)::bigint` are numbers, `'a'::text` is a
* string. A parenthesised cast is read only from number to number: `('now'::text)::date` is
* evaluated on insert. Anything else, such as an operator or a function call, is not a literal.
*/ function readLiteralToken(expression) {
    const escaped = ESCAPE_STRING_LITERAL_PATTERN.exec(expression);
    const quoted = escaped ?? QUOTED_LITERAL_PATTERN.exec(expression);
    if (quoted?.[1] !== void 0) {
        const text = escaped === null ? quoted[1].replace(/''/g, "'") : unescapeEscapeString(quoted[1]);
        const castType = quoted[2];
        return castType !== void 0 && NUMBER_TYPE_PATTERN.test(castType) && NUMERIC_PATTERN.test(text) ? castNumber(text, castType) : {
            kind: "string",
            text
        };
    }
    const number = NUMBER_LITERAL_PATTERN.exec(expression);
    if (number?.[1] !== void 0) return castNumber(number[1], number[2]);
    const parenthesised = PARENTHESISED_CAST_PATTERN.exec(expression);
    if (parenthesised?.[1] === void 0 || parenthesised[2] === void 0) return void 0;
    const inner = readLiteralToken(parenthesised[1].trim());
    return inner?.kind === "number" ? castNumber(inner.numeral, parenthesised[2]) : void 0;
}
/**
* Splits a Postgres array literal body (without the enclosing braces) into its
* element tokens, honouring quoting. A comma only separates elements when it is
* outside double quotes; inside a quoted element a doubled quote (`""`) or a
* backslash-escaped quote (`\"`) is a literal quote, and a backslash escapes the
* next character. Returns undefined if the body is malformed (e.g. an unbalanced
* quote), nests an array, which puts a brace outside quotes, or escapes a character outside
* quotes with a backslash, which Postgres never prints.
*/ function splitArrayElements(inner) {
    const tokens = [];
    let current = "";
    let inQuotes = false;
    let quoted = false;
    for(let i = 0; i < inner.length; i++){
        const char = inner[i];
        if (inQuotes) {
            if (char === "\\") {
                const next = inner[i + 1];
                if (next === void 0) return void 0;
                current += next;
                i++;
                continue;
            }
            if (char === "\"") {
                if (inner[i + 1] === "\"") {
                    current += "\"";
                    i++;
                    continue;
                }
                inQuotes = false;
                continue;
            }
            current += char;
            continue;
        }
        if (char === "\"") {
            inQuotes = true;
            quoted = true;
            continue;
        }
        if (char === "{" || char === "}" || char === "\\") return void 0;
        if (char === ",") {
            tokens.push({
                value: current,
                quoted
            });
            current = "";
            quoted = false;
            continue;
        }
        current += char;
    }
    if (inQuotes) return void 0;
    tokens.push({
        value: current,
        quoted
    });
    return tokens;
}
/**
* Splits an `ARRAY[...]` element list on the commas outside quotes and parentheses, so
* `numeric(65,30)` and `'a,b'` stay inside one element. A doubled quote inside an element is a
* literal quote, so it never closes one.
*/ function splitConstructorElements(body) {
    const elements = [];
    let current = "";
    let quote;
    let depth = 0;
    for (const char of body){
        if (quote !== void 0) {
            if (char === quote) quote = void 0;
        } else if (char === "'" || char === "\"") quote = char;
        else if (char === "(") depth++;
        else if (char === ")") depth--;
        else if (char === "," && depth === 0) {
            elements.push(current);
            current = "";
            continue;
        }
        current += char;
    }
    elements.push(current);
    return elements.map((element)=>element.trim());
}
function unwrapOuterArrayCasts(expression) {
    const match = OUTER_ARRAY_CAST_PATTERN.exec(expression);
    return match?.[1] === void 0 ? expression : unwrapOuterArrayCasts(match[1].trim());
}
const BACKSLASH_ESCAPES = {
    b: "\b",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "	"
};
/** The text of an `E'...'` string constant: a doubled quote is a quote, and a backslash escapes the next character, an octal byte or a hexadecimal byte. */ function unescapeEscapeString(body) {
    return body.replace(/''|\\([0-7]{1,3}|x[0-9A-Fa-f]{1,2}|.)/gs, (_match, escaped)=>{
        if (escaped === void 0) return "'";
        if (/^[0-7]/.test(escaped)) return String.fromCharCode(Number.parseInt(escaped, 8));
        if (escaped.startsWith("x") && escaped.length > 1) return String.fromCharCode(Number.parseInt(escaped.slice(1), 16));
        return BACKSLASH_ESCAPES[escaped] ?? escaped;
    });
}
function functionDefault(expression) {
    return {
        kind: "function",
        expression
    };
}
/**
* Reads a column's reported default. A list column (`many`) has a literal that is an array literal (`'{a,b}'::text[]`) or an `ARRAY[...]` constructor of literals. A `nextval(...)` default is `autoincrement()`, and the forms of `now()` and of `gen_random_uuid()` are named as the contract names them. Any other expression is a function default, kept as reported.
*/ function readPostgresDefault(rawDefault, many) {
    const trimmed = rawDefault.trim();
    if (NEXTVAL_PATTERN.test(trimmed)) return functionDefault("autoincrement()");
    if (NULL_PATTERN.test(trimmed)) return {
        kind: "null"
    };
    if (many) {
        const elements = listElementBodies(trimmed);
        return elements === void 0 ? functionDefault(trimmed) : {
            kind: "literal",
            literal: {
                kind: "list",
                elements
            }
        };
    }
    const timestampFunction = canonicalizeTimestampDefault(trimmed);
    if (timestampFunction !== void 0) return functionDefault(timestampFunction);
    if (UUID_PATTERN.test(trimmed) || UUID_OSSP_PATTERN.test(trimmed)) return functionDefault("gen_random_uuid()");
    const body = literalBody(trimmed);
    return body === void 0 ? functionDefault(trimmed) : {
        kind: "literal",
        literal: {
            kind: "value",
            body
        }
    };
}
/** The body of a scalar literal: `true`, `false`, a numeral, or the text of a quoted string. */ function literalBody(expression) {
    if (TRUE_PATTERN.test(expression)) return "true";
    if (FALSE_PATTERN.test(expression)) return "false";
    const token = readLiteralToken(expression);
    if (token === void 0) return void 0;
    return token.kind === "number" ? token.numeral : token.text;
}
/** The element bodies of a list literal, with `null` for SQL NULL, or `undefined` when the default is not a list of literals. */ function listElementBodies(expression) {
    const arrayLiteral = ARRAY_LITERAL_PATTERN.exec(expression)?.[1];
    if (arrayLiteral !== void 0) return arrayLiteralElements(arrayLiteral.replace(/''/g, "'"));
    const constructed = ARRAY_CONSTRUCTOR_PATTERN.exec(unwrapOuterArrayCasts(expression))?.[1];
    if (constructed === void 0) return void 0;
    if (constructed.trim() === "") return [];
    const elements = [];
    for (const element of splitConstructorElements(constructed)){
        if (NULL_PATTERN.test(element)) {
            elements.push(null);
            continue;
        }
        const body = literalBody(element);
        if (body === void 0) return void 0;
        elements.push(body);
    }
    return elements;
}
/** The elements of an array literal (`{...}`): a quoted element is its text, and an unquoted `NULL` is SQL NULL. */ function arrayLiteralElements(literal) {
    const inner = literal.slice(1, -1).trim();
    if (inner === "") return [];
    const tokens = splitArrayElements(inner);
    if (tokens === void 0) return void 0;
    const elements = [];
    for (const token of tokens){
        if (token.quoted) {
            elements.push(token.value);
            continue;
        }
        const element = token.value.trim();
        if (element === "") return void 0;
        elements.push(element.toUpperCase() === "NULL" ? null : element);
    }
    return elements;
}
/**
* Names a contract's expression default the way {@link readPostgresDefault} names the same function in the database, so `` sql`CURRENT_TIMESTAMP` `` and the database's `CURRENT_TIMESTAMP` compare equal, and a `nextval(...)` default is `autoincrement()`. A literal default, and an expression that writes a literal, pass through unchanged; introspection reads the latter's literal with the column's codec, and the diff compares the values.
*/ function postgresResolveDefault(def, column) {
    if (def.kind !== "function") return def;
    const read = readPostgresDefault(def.expression, column.many);
    return read.kind === "function" ? read : def;
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/descriptor-meta-Bj9sQhJn-CMP3p6iz.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>postgresAdapterDescriptorMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$registry$2d$Ctq7UGkA$2d$_DnAcgYm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/registry-Ctq7UGkA-_DnAcgYm.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$contributions$2d$DpTbtESH$2d$CxVtT7cT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/contract-contributions-DpTbtESH-CxVtT7cT.mjs [app-route] (ecmascript)");
;
;
//#region ../../../3-targets/postgres/2-adapter/dist/descriptor-meta-Bj9sQhJn.mjs
const postgresAdapterDescriptorMeta = {
    kind: "adapter",
    familyId: "sql",
    targetId: "postgres",
    id: "postgres",
    version: "0.0.1",
    capabilities: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$contributions$2d$DpTbtESH$2d$CxVtT7cT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].capabilities,
    types: {
        aggregateDescriptors: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$contributions$2d$DpTbtESH$2d$CxVtT7cT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].types.aggregateDescriptors,
        codecTypes: {
            codecDescriptors: Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$registry$2d$Ctq7UGkA$2d$_DnAcgYm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"].values()),
            import: {
                package: "@internal/target-postgres/codec-types",
                named: "CodecTypes",
                alias: "PgTypes"
            },
            typeImports: [
                {
                    package: "@internal/target-postgres/codec-types",
                    named: "JsonValue",
                    alias: "JsonValue"
                }
            ],
            parameterizedOutputTypes: {
                package: "@internal/target-postgres/codec-types",
                named: "ParameterizedOutputTypesForTypeParams",
                alias: "PgParameterizedOutputTypes"
            }
        }
    }
};
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/descriptor-meta-DWKp5Q1s-DplRJE9N.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>prisma7PostgresTypeMap,
    "t",
    ()=>postgresTargetDescriptorMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-ids-2htdtS66-CJPMZv1t.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/data-types-B47LbZ3z-DRVqjvQZ.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$namespace$2d$ids$2d$xtp_ZY86$2d$Cxc0dBbO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/namespace-ids-xtp_ZY86-Cxc0dBbO.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codecs-CV-_K-z0-DZc60ccR.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$registry$2d$Ctq7UGkA$2d$_DnAcgYm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/registry-Ctq7UGkA-_DnAcgYm.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-schema-BBWgs4fX-DWdYxNi8.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$authoring$2d$BD4uEpBM$2d$DIJiGq4e$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/authoring-BD4uEpBM-DIJiGq4e.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$check$2d$expressions$2d$DL9WtMO5$2d$CUcbN2JG$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/check-expressions-DL9WtMO5-CUcbN2JG.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$date$2d$time$2d$now$2d$generators$2d$BMMGy0vy$2d$BEbt_79F$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/date-time-now-generators-BMMGy0vy-BEbt_79F.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$type$2d$entries$2d$dmLDRSOf$2d$BJADXpXD$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/data-type-entries-dmLDRSOf-BJADXpXD.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$index$2d$types$2d$B5sQ5Vw0$2d$DfXKO9$2d$v$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/index-types-B5sQ5Vw0-DfXKO9-v.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__createDataTypeLookup$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export c as createDataTypeLookup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export t as InternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$generator$2d$functions$2d$Hy4pDDr9$2d$DkN0qbPW$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__idGeneratorFunctionBindings$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/generator-functions-Hy4pDDr9-DkN0qbPW.mjs [app-route] (ecmascript) <export t as idGeneratorFunctionBindings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$generator$2d$functions$2d$Hy4pDDr9$2d$DkN0qbPW$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__sqlIntegerArgumentGeneratorFunctions$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/generator-functions-Hy4pDDr9-DkN0qbPW.mjs [app-route] (ecmascript) <export s as sqlIntegerArgumentGeneratorFunctions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__TIMESTAMP_NOW_GENERATOR_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export r as TIMESTAMP_NOW_GENERATOR_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__authoringTypeConstructorArguments$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/authoring-DnYn5EZT.mjs [app-route] (ecmascript) <export i as authoringTypeConstructorArguments>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__DATE_STRING_NOW_GENERATOR_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export t as DATE_STRING_NOW_GENERATOR_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__INSTANT_NOW_GENERATOR_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export n as INSTANT_NOW_GENERATOR_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__PLAIN_DATE_NOW_GENERATOR_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export i as PLAIN_DATE_NOW_GENERATOR_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__PLAIN_DATE_TIME_NOW_GENERATOR_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export a as PLAIN_DATE_TIME_NOW_GENERATOR_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__PLAIN_TIME_NOW_GENERATOR_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export o as PLAIN_TIME_NOW_GENERATOR_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__TIME_STRING_NOW_GENERATOR_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/now-rRujKrwj.mjs [app-route] (ecmascript) <export s as TIME_STRING_NOW_GENERATOR_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$generator$2d$functions$2d$CXbQfvYu$2d$BIFU1Ryx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__singleGeneratorBinding$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/generator-functions-CXbQfvYu-BIFU1Ryx.mjs [app-route] (ecmascript) <export l as singleGeneratorBinding>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$psl$2d$build$2d$BA0Ndi1v$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__inferredTypeConstructors$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/psl-build-BA0Ndi1v.mjs [app-route] (ecmascript) <export i as inferredTypeConstructors>");
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
//#region ../../../3-targets/postgres/1-target/dist/descriptor-meta-DWKp5Q1s.mjs
/** The "now" generator for each codec that has one. The `now` generator function binds it. */ const postgresNowGeneratorIds = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["o"]]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__PLAIN_DATE_NOW_GENERATOR_ID$3e$__["PLAIN_DATE_NOW_GENERATOR_ID"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"]]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__DATE_STRING_NOW_GENERATOR_ID$3e$__["DATE_STRING_NOW_GENERATOR_ID"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["F"]]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__PLAIN_TIME_NOW_GENERATOR_ID$3e$__["PLAIN_TIME_NOW_GENERATOR_ID"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["P"]]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__TIME_STRING_NOW_GENERATOR_ID$3e$__["TIME_STRING_NOW_GENERATOR_ID"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["N"]]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$date$2d$time$2d$now$2d$generators$2d$BMMGy0vy$2d$BEbt_79F$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["M"]]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__PLAIN_DATE_TIME_NOW_GENERATOR_ID$3e$__["PLAIN_DATE_TIME_NOW_GENERATOR_ID"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["j"]]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$date$2d$time$2d$now$2d$generators$2d$BMMGy0vy$2d$BEbt_79F$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["O"]]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__INSTANT_NOW_GENERATOR_ID$3e$__["INSTANT_NOW_GENERATOR_ID"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["D"]]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$date$2d$time$2d$now$2d$generators$2d$BMMGy0vy$2d$BEbt_79F$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["E"]]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__TIMESTAMP_NOW_GENERATOR_ID$3e$__["TIMESTAMP_NOW_GENERATOR_ID"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["k"]]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__TIMESTAMP_NOW_GENERATOR_ID$3e$__["TIMESTAMP_NOW_GENERATOR_ID"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["A"]]: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$now$2d$rRujKrwj$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__INSTANT_NOW_GENERATOR_ID$3e$__["INSTANT_NOW_GENERATOR_ID"]
};
new Map(Object.entries(postgresNowGeneratorIds));
/** The codecs whose "now" generator takes the column's precision and rounds down to it, so PostgreSQL stores the value the client holds rather than rounding it up, which for a time can reach `24:00:00`. */ const postgresNowGeneratorTakesPrecision = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["F"]]: true,
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["P"]]: true,
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["N"]]: true,
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["j"]]: true,
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["D"]]: true,
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["E"]]: true,
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["k"]]: true,
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["M"]]: true,
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["O"]]: true,
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["A"]]: true
};
/** The `now` generator function bound to each Postgres date and time codec, with the column's precision on the codecs that take it. */ const postgresNowGeneratorFunction = {
    name: "now",
    bindings: Object.entries(postgresNowGeneratorIds).map(([codecId, generatorId])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$generator$2d$functions$2d$CXbQfvYu$2d$BIFU1Ryx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__singleGeneratorBinding$3e$__["singleGeneratorBinding"])({
            codecIds: [
                codecId
            ],
            generatorId,
            paramsFromField: (column)=>{
                const precision = column.typeParams?.["precision"];
                return Object.hasOwn(postgresNowGeneratorTakesPrecision, codecId) && typeof precision === "number" ? {
                    precision
                } : void 0;
            }
        }))
};
const postgresGeneratorFunctions = [
    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$generator$2d$functions$2d$Hy4pDDr9$2d$DkN0qbPW$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__sqlIntegerArgumentGeneratorFunctions$3e$__["sqlIntegerArgumentGeneratorFunctions"])({
        integer: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["E"].id
    }),
    postgresNowGeneratorFunction,
    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$generator$2d$functions$2d$Hy4pDDr9$2d$DkN0qbPW$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__idGeneratorFunctionBindings$3e$__["idGeneratorFunctionBindings"])({
        text: [
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["i"],
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["B"],
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]
        ],
        uuid: [
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["R"]
        ]
    })
];
/** The `now` generators Postgres binds. The SQL family registers the identifier generators. */ const postgresGeneratorDescriptors = [
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__TIMESTAMP_NOW_GENERATOR_ID$3e$__["TIMESTAMP_NOW_GENERATOR_ID"]
    },
    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$date$2d$time$2d$now$2d$generators$2d$BMMGy0vy$2d$BEbt_79F$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"])()
];
const of = (type, params = {})=>({
        dataType: type.id,
        params
    });
/**
* What Prisma 7.10.0 creates in Postgres for each Prisma 7 scalar and `@db.*` native type, as a data type and its parameters. Derived from the SQL recorded in `test/integration/test/fixtures/prisma7-source/reference/migration.sql`. A `@db.*` attribute's own arguments replace the parameters; without any, the column gets these, so `@db.Char` is the `character(1)` Postgres stores for Prisma 7's `CHAR`, and `@db.Bit` the `bit(1)` it stores for `BIT`.
*/ const prisma7PostgresTypes = {
    scalars: {
        String: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"]),
        Boolean: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["f"]),
        Int: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["E"]),
        BigInt: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["D"]),
        Float: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
        Decimal: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["F"], {
            precision: 65,
            scale: 30
        }),
        DateTime: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["U"], {
            precision: 3
        }),
        Json: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["j"]),
        Bytes: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["p"])
    },
    nativeTypes: {
        Text: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"]),
        VarChar: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Q"]),
        Char: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["g"], {
            length: 1
        }),
        Uuid: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["X"]),
        Inet: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["w"]),
        Boolean: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["f"]),
        Integer: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["E"]),
        SmallInt: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["T"]),
        BigInt: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["D"]),
        Real: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["S"]),
        DoublePrecision: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"]),
        Decimal: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["F"]),
        Timestamp: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["U"]),
        Timestamptz: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["G"]),
        Date: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v"]),
        Time: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["V"]),
        Timetz: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"]),
        Json: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["A"]),
        JsonB: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["j"]),
        ByteA: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["p"]),
        Bit: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"], {
            length: 1
        }),
        VarBit: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Z"]),
        Xml: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$"]),
        Oid: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["L"]),
        Money: of(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["N"])
    }
};
const marked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$psl$2d$build$2d$BA0Ndi1v$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__inferredTypeConstructors$3e$__["inferredTypeConstructors"])({
    authoringTypes: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$authoring$2d$BD4uEpBM$2d$DIJiGq4e$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"],
    codecLookup: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$registry$2d$Ctq7UGkA$2d$_DnAcgYm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"],
    dataTypeLookup: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__createDataTypeLookup$3e$__["createDataTypeLookup"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["et"])
});
/**
* The constructor marked `inferred` for the column's data type, with every parameter Prisma 7 gives the column as an argument. The reader builds a contract, so it keeps each parameter rather than the fewest arguments printed PSL writes.
*/ function mappingOf({ dataType, params }) {
    const markedConstructor = marked.get(dataType);
    const args = markedConstructor === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DnYn5EZT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__authoringTypeConstructorArguments$3e$__["authoringTypeConstructorArguments"])(markedConstructor.descriptor, {
        codecId: markedConstructor.descriptor.output.codecId,
        typeParams: params
    });
    if (markedConstructor === void 0 || args === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`No constructor marked inferred writes ${dataType} with these parameters.`);
    return {
        constructorPath: markedConstructor.path,
        args
    };
}
function mappingsOf(types) {
    return Object.fromEntries(Object.entries(types).map(([name, type])=>[
            name,
            mappingOf(type)
        ]));
}
/** {@link prisma7PostgresTypes} as the Prisma 7 reader takes it: each type's constructor call. */ const prisma7PostgresTypeMap = {
    scalars: mappingsOf(prisma7PostgresTypes.scalars),
    nativeTypes: mappingsOf(prisma7PostgresTypes.nativeTypes),
    extensionNativeTypes: {
        Citext: {
            constructorPath: [
                "citext",
                "Citext"
            ],
            args: [],
            extension: "citext"
        }
    }
};
/** The Prisma 7 `@db.*` names whose Prisma 8 constructor has another name, such as `Text` to `String`. */ const prisma7PostgresRenamedNativeTypes = Object.fromEntries(Object.entries({
    ...prisma7PostgresTypeMap.nativeTypes,
    ...prisma7PostgresTypeMap.extensionNativeTypes
}).flatMap(([name, { constructorPath }])=>{
    const constructorName = constructorPath.join(".");
    return constructorName === name ? [] : [
        [
            name,
            constructorName
        ]
    ];
}));
const postgresTargetDescriptorMeta = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$date$2d$time$2d$now$2d$generators$2d$BMMGy0vy$2d$BEbt_79F$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"],
    defaultNamespaceId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$namespace$2d$ids$2d$xtp_ZY86$2d$Cxc0dBbO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"],
    supportsNamespaces: true,
    displayName: "Postgres",
    indexTypes: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$index$2d$types$2d$B5sQ5Vw0$2d$DfXKO9$2d$v$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"],
    authoring: {
        type: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$authoring$2d$BD4uEpBM$2d$DIJiGq4e$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$authoring$2d$BD4uEpBM$2d$DIJiGq4e$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"]
        },
        dataTypes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$type$2d$entries$2d$dmLDRSOf$2d$BJADXpXD$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(),
        textDataTypes: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nt"],
        renamedTypeConstructors: prisma7PostgresRenamedNativeTypes,
        entityTypes: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$authoring$2d$BD4uEpBM$2d$DIJiGq4e$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"],
        pslBlockDescriptors: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$authoring$2d$BD4uEpBM$2d$DIJiGq4e$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"],
        modelAttributes: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$authoring$2d$BD4uEpBM$2d$DIJiGq4e$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"],
        createNamespace: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v"],
        qualifyColumnType: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["U"],
        renderCheckExpressions: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$check$2d$expressions$2d$DL9WtMO5$2d$CUcbN2JG$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"],
        lowerEntityHandles: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$authoring$2d$BD4uEpBM$2d$DIJiGq4e$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"]
    },
    generatorFunctions: postgresGeneratorFunctions,
    controlMutationDefaults: {
        defaultFunctionRegistry: /* @__PURE__ */ new Map(),
        generatorDescriptors: postgresGeneratorDescriptors
    },
    types: {
        queryOperationTypes: {
            import: {
                package: "@internal/target-postgres/operation-types",
                named: "QueryOperationTypes",
                alias: "PgTargetQueryOps"
            }
        }
    }
};
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/descriptor-meta-DWKp5Q1s-DplRJE9N.mjs [app-route] (ecmascript) <export t as default>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$descriptor$2d$meta$2d$DWKp5Q1s$2d$DplRJE9N$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$descriptor$2d$meta$2d$DWKp5Q1s$2d$DplRJE9N$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/descriptor-meta-DWKp5Q1s-DplRJE9N.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/errors-DpdPXR_L-DailcY-X.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>errorTemporalUnavailable,
    "c",
    ()=>errorTemporalWrongType,
    "i",
    ()=>errorTemporalNonIsoCalendar,
    "l",
    ()=>errorTimestampTextWrongType,
    "n",
    ()=>errorLcMonetaryNotC,
    "o",
    ()=>errorTemporalUnavailableForDefault,
    "r",
    ()=>errorPostgresMigrationStackMissing,
    "s",
    ()=>errorTemporalUnrepresentable,
    "t",
    ()=>errorDateStyleNotIso,
    "u",
    ()=>postgresError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-route] (ecmascript) <export o as structuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$MllEQmML$2d$7F84gYuT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__CliStructuredError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/control-MllEQmML-7F84gYuT.mjs [app-route] (ecmascript) <export t as CliStructuredError>");
;
;
//#region ../../../3-targets/postgres/1-target/dist/errors-DpdPXR_L.mjs
function postgresError(code, message, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])(code, message, options);
}
/**
* A `PostgresMigration` operation that needs the materialized control adapter
* — named by `operation` (e.g. `createTable`, `dropColumn`, `dataTransform`) —
* was invoked, but the migration was constructed without a `ControlStack`.
* Concrete authoring usage always goes through the migration CLI entrypoint,
* which assembles a stack from the loaded `prisma.config.ts`; reaching this
* error means a test fixture or ad-hoc consumer instantiated `PostgresMigration`
* with the no-arg form (legal for `operations` / `describe` introspection only).
*
* The `operation` argument is required so every throw site names the operation
* that actually failed; a new operation cannot inherit a misattributed message.
*
* Distinct from `MIGRATION.UNFILLED_PLACEHOLDER` (placeholder not filled)
* and `MIGRATION.DATA_TRANSFORM_CONTRACT_MISMATCH` (data-transform query
* plan against wrong contract) because the missing input is the stack
* itself, not the per-operation contract.
*
* Lives in `@internal/target-postgres/errors` rather than the shared
* framework migration errors module because the failure is target-specific:
* the contract it talks about (`PostgresMigration`, the Postgres control
* adapter, the Postgres-target stack) only exists in this package.
*/ function errorPostgresMigrationStackMissing(operation) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$control$2d$MllEQmML$2d$7F84gYuT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__CliStructuredError$3e$__["CliStructuredError"]("MIGRATION.POSTGRES_CONTROL_STACK_MISSING", `PostgresMigration.${operation} requires a control adapter`, {
        why: `PostgresMigration.${operation} was invoked on an instance constructed without a ControlStack, so the stored controlAdapter is undefined and the operation cannot lower its plan.`,
        fix: "Construct the migration via the migration CLI entrypoint (which assembles a ControlStack from the loaded prisma.config.ts), or pass a ControlStack containing a Postgres adapter to the migration constructor in test fixtures.",
        meta: {
            operation
        }
    });
}
const TEMPORAL_UNAVAILABLE_FIX = "Run on a runtime with Temporal available, install a Temporal polyfill before creating the client, or write the column as a convenience type at its default, which needs no Temporal: `DateTime` reads a JavaScript `Date`, and `Date`, `Time` and `Duration` read ISO 8601 strings.";
function errorTemporalUnavailable(codecId, operation) {
    return postgresError("RUNTIME.TEMPORAL_UNAVAILABLE", `Codec '${codecId}' cannot ${operation} a value because this runtime has no global Temporal implementation.`, {
        why: "Temporal-backed codecs read and write their values through the global Temporal API, which this runtime does not provide.",
        fix: TEMPORAL_UNAVAILABLE_FIX,
        meta: {
            codecId,
            operation
        }
    });
}
function errorTemporalUnavailableForDefault(generatorId) {
    return postgresError("RUNTIME.TEMPORAL_UNAVAILABLE", `Mutation default generator '${generatorId}' cannot produce a value because this runtime has no global Temporal implementation.`, {
        why: "The generator answers a Temporal-backed column, so the value it produces is a Temporal value, which this runtime cannot construct.",
        fix: TEMPORAL_UNAVAILABLE_FIX,
        meta: {
            generatorId
        }
    });
}
function errorTemporalUnrepresentable(options) {
    const { codecId, operation, stringType, value, detail } = options;
    return postgresError(operation === "decode" ? "RUNTIME.DECODE_FAILED" : "RUNTIME.ENCODE_FAILED", `Codec '${codecId}' cannot represent the value ${operation === "decode" ? "PostgreSQL returned" : "the application supplied"}: ${JSON.stringify(value)} — ${detail}. Use ${stringType} to carry this column as ISO 8601 text.`, {
        why: `${detail}. Temporal is the authoritative parser and range check for this codec, so a value it cannot express has no representation on this column.`,
        fix: `Author the column as ${stringType} to read and write it as ISO 8601 text, which holds every value the database accepts.`,
        meta: {
            codecId,
            operation,
            value,
            stringType
        },
        ...options.cause === void 0 ? {} : {
            cause: options.cause
        }
    });
}
function errorTemporalWrongType(codecId, temporalTag, stringType, received) {
    return postgresError("RUNTIME.ENCODE_FAILED", `Codec '${codecId}' encodes a ${temporalTag}, but received ${received}.`, {
        why: "The codec serializes through the Temporal value's own toString(). A different type reaches PostgreSQL in a spelling it does not accept, and the resulting error names the column rather than the codec.",
        fix: `Pass a ${temporalTag}, or author the column with its ${stringType} type to write ISO 8601 text.`,
        meta: {
            codecId,
            temporalTag,
            stringType,
            received
        }
    });
}
/** A date or time codec read text PostgreSQL printed under a DateStyle other than ISO, which no codec reads. */ function errorDateStyleNotIso(codecId, received) {
    return postgresError("RUNTIME.DATE_STYLE_NOT_ISO", `Codec '${codecId}' read ${JSON.stringify(received)}, which PostgreSQL prints only when the connection's DateStyle is not ISO: the driver could not ensure the DateStyle=ISO the PostgreSQL target requires. Prisma reads dates and times only in DateStyle ISO.`, {
        why: "PostgreSQL prints a date or timestamp in the DateStyle of the connection. The PostgreSQL driver ensures DateStyle=ISO on every connection it uses: it starts each connection it opens with it, and sets it on a connection the application supplies before first use. A statement that sets DateStyle on a connection undoes that, and so does a connection pooler between Prisma and PostgreSQL that drops the startup option or runs each statement on another server connection.",
        fix: "Do not change DateStyle on a connection Prisma uses. Behind a connection pooler, set DateStyle on the role or database (ALTER ROLE <role> SET DateStyle = 'ISO'), so every server connection holds it.",
        meta: {
            codecId,
            received: received.slice(0, 100)
        }
    });
}
/** A money codec read text PostgreSQL printed under an `lc_monetary` other than C, which no codec reads. */ function errorLcMonetaryNotC(codecId, received) {
    return postgresError("RUNTIME.LC_MONETARY_NOT_C", `Codec '${codecId}' read ${JSON.stringify(received)}, which PostgreSQL prints only when the connection's lc_monetary is not C: the driver could not ensure the lc_monetary=C the PostgreSQL target requires. Prisma reads money only as PostgreSQL prints it under lc_monetary C, as in $1,234.56 and -$1,234.56.`, {
        why: "PostgreSQL prints a money value in the lc_monetary locale of the connection, with that locale's currency symbol, separators and sign. The PostgreSQL driver ensures lc_monetary=C on every connection it uses: it starts each connection it opens with it, and sets it on a connection the application supplies before first use. A statement that sets lc_monetary on a connection undoes that, and so does a connection pooler between Prisma and PostgreSQL that drops the startup option or runs each statement on another server connection.",
        fix: "Do not change lc_monetary on a connection Prisma uses. Behind a connection pooler, set lc_monetary on the role or database (ALTER ROLE <role> SET lc_monetary = 'C'), so every server connection holds it.",
        meta: {
            codecId,
            received: received.slice(0, 100)
        }
    });
}
/** A string timestamp codec received something other than text, such as a `Date` from a contract emitted before its generator wrote text. */ function errorTimestampTextWrongType(codecId, received) {
    return postgresError("RUNTIME.ENCODE_FAILED", `Codec '${codecId}' writes ISO 8601 text, but received ${received}.`, {
        why: "The codec sends its value to PostgreSQL unchanged. A Date would be sent in the process's local time zone, and a timestamp column without a time zone would store the wrong wall-clock time.",
        fix: "Pass the timestamp as ISO 8601 text, such as \"2024-01-02T03:04:05.678\". If the value came from a generated default, emit the contract again: a contract emitted by an earlier version pairs this column with timestampNow, which generates a Date.",
        meta: {
            codecId,
            received
        }
    });
}
function errorTemporalNonIsoCalendar(codecId, calendarId) {
    return postgresError("RUNTIME.ENCODE_FAILED", `Codec '${codecId}' accepts only the iso8601 calendar, but the value carries '${calendarId}'.`, {
        why: "PostgreSQL stores no calendar alongside a date, so a non-ISO calendar would be discarded on write and the value would read back as a different date than the one authored.",
        fix: "Convert the value with .withCalendar(\"iso8601\") before writing if the ISO projection is what you mean to store.",
        meta: {
            codecId,
            calendarId
        }
    });
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>assertFullTextIndexes,
    "c",
    ()=>fullTextIndexOptions,
    "d",
    ()=>isFullTextSearchLanguage,
    "f",
    ()=>weightGroupsOf,
    "i",
    ()=>POSTGRES_TEXT_SEARCH_LANGUAGES,
    "l",
    ()=>fullTextIndexProblems,
    "n",
    ()=>FULL_TEXT_INDEX_TYPE,
    "o",
    ()=>describeFullTextIndexProblem,
    "r",
    ()=>FULL_TEXT_WEIGHTS,
    "s",
    ()=>fullTextIndexDefinitionOf,
    "t",
    ()=>DEFAULT_FULL_TEXT_SEARCH_LANGUAGE,
    "u",
    ()=>fullTextIndexType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/errors-DpdPXR_L-DailcY-X.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/keywords.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/assertions-Dw1lZz_Q.mjs [app-route] (ecmascript) <export n as invariant>");
;
;
;
//#region ../../../3-targets/postgres/1-target/dist/full-text-index-definition-MfjtL-x7.mjs
/** The weights Postgres's `setweight` takes, strongest first. Each weight group takes the next one. */ const FULL_TEXT_WEIGHTS = [
    "A",
    "B",
    "C",
    "D"
];
function weightGroupsOf(fields, isField) {
    if (isField(fields)) return [
        [
            fields
        ]
    ];
    return fields.map((item)=>isField(item) ? [
            item
        ] : item);
}
/**
* The text-search configurations a stock PostgreSQL server ships with. The language reaches SQL as
* an inline literal rather than a bound parameter, so only names on this list may be used.
*/ const POSTGRES_TEXT_SEARCH_LANGUAGES = [
    "simple",
    "arabic",
    "armenian",
    "basque",
    "catalan",
    "danish",
    "dutch",
    "english",
    "finnish",
    "french",
    "german",
    "greek",
    "hindi",
    "hungarian",
    "indonesian",
    "irish",
    "italian",
    "lithuanian",
    "nepali",
    "norwegian",
    "portuguese",
    "romanian",
    "russian",
    "serbian",
    "spanish",
    "swedish",
    "tamil",
    "turkish",
    "yiddish"
];
const DEFAULT_FULL_TEXT_SEARCH_LANGUAGE = "english";
const KNOWN_LANGUAGES = new Set(POSTGRES_TEXT_SEARCH_LANGUAGES);
function isFullTextSearchLanguage(language) {
    return KNOWN_LANGUAGES.has(language);
}
/** The index type a full-text index is registered under. */ const FULL_TEXT_INDEX_TYPE = "fullText";
/** The traits the codec of every column a full-text index covers must carry. */ const FULL_TEXT_COLUMN_TRAITS = [
    "textual"
];
/**
* The rules of a full-text index, stated once: one to four weight groups, none empty, each field
* once, text columns only, and not unique. Every site that checks a full-text index calls this.
*/ function fullTextIndexProblems(candidate) {
    const { weightGroups } = candidate;
    const problems = [];
    if (weightGroups.length === 0) problems.push({
        kind: "no-fields"
    });
    if (weightGroups.length > FULL_TEXT_WEIGHTS.length) problems.push({
        kind: "too-many-groups",
        groupCount: weightGroups.length
    });
    weightGroups.forEach((group, position)=>{
        if (group.length === 0) problems.push({
            kind: "empty-group",
            position
        });
    });
    const seen = /* @__PURE__ */ new Set();
    for (const field of weightGroups.flat()){
        if (seen.has(field)) problems.push({
            kind: "duplicate-field",
            field
        });
        seen.add(field);
    }
    const { codecs } = candidate;
    if (codecs !== void 0) for (const field of new Set(weightGroups.flat())){
        const codecId = codecs.codecIdOf(field);
        if (codecId === void 0 || !carriesFullTextTraits(codecs.traitsOf(codecId))) problems.push({
            kind: "not-text",
            field,
            codecId
        });
    }
    if (candidate.unique === true) problems.push({
        kind: "unique"
    });
    return problems;
}
function carriesFullTextTraits(traits) {
    return traits !== void 0 && FULL_TEXT_COLUMN_TRAITS.every((trait)=>traits.includes(trait));
}
function describeFullTextIndexProblem(subject, problem, fieldLabel = (field)=>field) {
    switch(problem.kind){
        case "no-fields":
            return `${subject} needs at least one field.`;
        case "too-many-groups":
            return `${subject} takes at most ${FULL_TEXT_WEIGHTS.length} weight groups, one for each of the weights ${FULL_TEXT_WEIGHTS.join(", ")}, but was given ${problem.groupCount}.`;
        case "empty-group":
            return `${subject} has an empty weight group at position ${problem.position + 1}.`;
        case "duplicate-field":
            return `${subject} names the field "${fieldLabel(problem.field)}" more than once.`;
        case "not-text":
            return `${subject} indexes text columns, but "${fieldLabel(problem.field)}" is ${problem.codecId === void 0 ? "not a stored scalar field" : `stored as \`${problem.codecId}\``}.`;
        case "unique":
            return `${subject} is unique, but Postgres builds no unique gin index.`;
    }
}
/** The options of a full-text index: its weight groups, as storage column names, and its language. */ const fullTextIndexOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    weightGroups: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])("string > 0").array().array().narrow((weightGroups, ctx)=>{
        const [problem] = fullTextIndexProblems({
            weightGroups
        });
        return problem === void 0 || ctx.reject({
            message: describeFullTextIndexProblem("a full-text index", problem)
        });
    }),
    language: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"].enumerated(...POSTGRES_TEXT_SEARCH_LANGUAGES)
});
/**
* The registration of the full-text index type. Its options are the index's definition, not
* storage parameters, and the target turns them into a `gin` index over the rendered search
* document.
*/ const fullTextIndexType = {
    options: fullTextIndexOptions,
    accessMethod: "gin",
    columnTraits: FULL_TEXT_COLUMN_TRAITS
};
/**
* The definition a full-text index carries, or `undefined` for an index of any other type. It
* reads an index {@link assertFullTextIndexes} has accepted, as every loaded contract's has been.
*/ function fullTextIndexDefinitionOf(index) {
    if (index.type !== "fullText") return void 0;
    const definition = fullTextIndexOptions(index.options ?? {});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(!(definition instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"].errors), "a full-text index is read only after its contract was checked");
    return definition;
}
/**
* Refuses a table's full-text index the contract cannot carry: invalid options, a broken rule of
* {@link fullTextIndexProblems}, `columns` that are not the fields of its weight groups, in order,
* or a foreign key that names it as its backing index. The text-columns rule is checked only when
* `traitsOf` is given.
*/ function assertFullTextIndexes(table, traitsOf) {
    const codecs = traitsOf === void 0 ? void 0 : {
        codecIdOf: (column)=>table.columns[column]?.codecId,
        traitsOf
    };
    for (const index of table.indexes)assertFullTextIndex(index, codecs);
    for (const foreignKey of table.foreignKeys){
        const backing = foreignKey.index;
        if (backing === void 0 || !("name" in backing)) continue;
        const index = table.indexes.find((candidate)=>candidate.name === backing.name);
        if (index?.type !== "fullText") continue;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.INDEX_INVALID", `The foreign key on columns (${foreignKey.source.columns.join(", ")}) is backed by full-text index "${index.name}".`, {
            why: "A full-text index is a gin index over a search document rendered from its weight groups, not over its columns, so it does not serve the foreign key's lookups.",
            fix: "Re-emit the contract from its source, where a relation cannot name a full-text index as its index.",
            meta: {
                index: index.name,
                columns: foreignKey.source.columns
            }
        });
    }
}
function assertFullTextIndex(index, codecs) {
    if (index.type !== "fullText") return;
    const definition = fullTextIndexOptions(index.options ?? {});
    if (definition instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"].errors) throw invalidFullTextIndex(index, `Full-text index "${index.name}" has invalid options: ${definition.summary}`, "The options of a full-text index are its definition: its weight groups and its language.");
    const [problem] = fullTextIndexProblems({
        weightGroups: definition.weightGroups,
        unique: index.unique,
        codecs
    });
    if (problem !== void 0) throw invalidFullTextIndex(index, describeFullTextIndexProblem(`Full-text index "${index.name}"`, problem), "A full-text index is a gin index over text columns, in one to four weight groups that name each column once.");
    const fields = definition.weightGroups.flat();
    const columns = index.columns ?? [];
    if (columns.length !== fields.length || columns.some((column, i)=>column !== fields[i])) throw invalidFullTextIndex(index, `Full-text index "${index.name}" covers the columns [${columns.join(", ")}], but its weight groups name [${fields.join(", ")}].`, "The columns of a full-text index are the fields of its weight groups, in order. Foreign-key backing and the printer read the columns; the search document is rendered from the groups, so the two must agree.");
}
function invalidFullTextIndex(index, message, why) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.INDEX_INVALID", message, {
        why,
        fix: "Re-emit the contract from its `@@fullTextIndex` or `fullTextIndex` source rather than editing the index by hand.",
        meta: {
            index: index.name,
            columns: index.columns,
            options: index.options
        }
    });
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript) <export f as weightGroupsOf>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "weightGroupsOf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["f"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript) <export l as fullTextIndexProblems>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullTextIndexProblems",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript) <export n as FULL_TEXT_INDEX_TYPE>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FULL_TEXT_INDEX_TYPE",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript) <export o as describeFullTextIndexProblem>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "describeFullTextIndexProblem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript) <export t as DEFAULT_FULL_TEXT_SEARCH_LANGUAGE>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_FULL_TEXT_SEARCH_LANGUAGE",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-parsers-DIfNR9AQ-tVmTju-Y.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>normalizationLiteral,
    "c",
    ()=>toTsquery,
    "i",
    ()=>languageLiteral,
    "l",
    ()=>websearchToTsquery,
    "n",
    ()=>fullTextDocument,
    "o",
    ()=>phrasetoTsquery,
    "r",
    ()=>headlineOptionsLiteral,
    "s",
    ()=>plaintoTsquery,
    "t",
    ()=>FullTextDocument
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-ids-2htdtS66-CJPMZv1t.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/errors-DpdPXR_L-DailcY-X.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__LiteralExpr$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export C as LiteralExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__buildOperation$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/expression-impl-DtbmFnnz-Dal0IYDE.mjs [app-route] (ecmascript) <export n as buildOperation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__toExpr$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/expression-impl-DtbmFnnz-Dal0IYDE.mjs [app-route] (ecmascript) <export s as toExpr>");
;
;
;
;
;
//#region ../../../3-targets/postgres/1-target/dist/full-text-parsers-DIfNR9AQ.mjs
/**
* A search document built from columns in weight groups, for `fullTextMatches` and `fullTextRank`
* to search without a full-text index. Postgres uses an index only for a query over the same
* document, so to search an index, pass the index from the table's `indexes` instead.
*/ var FullTextDocument = class FullTextDocument {
    weightGroups;
    constructor(weightGroups){
        this.weightGroups = weightGroups;
        Object.freeze(this);
    }
    static of(groups) {
        const weightGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["f"])(groups, (item)=>!Array.isArray(item));
        let position = 0;
        const [problem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"])({
            weightGroups: weightGroups.map((group)=>group.map(()=>String(position++)))
        });
        if (problem !== void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("RUNTIME.ARGUMENT_INVALID", (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])("fullTextDocument: the document", problem), {
            why: `Each weight group takes one of the weights Postgres has, ${__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].join(", ")}.`,
            fix: "Pass one to four weight groups, none of them empty.",
            meta: {
                helper: "fullTextDocument",
                argument: "groups",
                received: weightGroups.length
            }
        });
        return new FullTextDocument(weightGroups);
    }
};
/**
* The search document of columns in weight groups, strongest first: `fullTextDocument([[f.title,
* f.subtitle], [f.body]])`. Each group takes the next weight, `A` to `D`; a column named twice is
* not refused, because column expressions have no name to compare.
*/ function fullTextDocument(groups) {
    return FullTextDocument.of(groups);
}
/**
* Options for the Postgres full-text operations, and the checks each one goes through.
*
* Every option here reaches the SQL as an inline literal rather than a bound parameter, because
* Postgres accepts no parameter in these positions. Each is therefore validated before a statement
* exists; anything unrecognized throws `RUNTIME.ARGUMENT_INVALID`.
*
* The headline markers are the only free text among them, and `checkMarker` restricts their
* characters precisely so that the literal path never carries a quote or a backslash for
* `escapeLiteral` to have to reason about.
*/ function invalid(method, argument, received, why, fix) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("RUNTIME.ARGUMENT_INVALID", `${method}: ${why}`, {
        why: "The option is written into the SQL as an inline literal, not a bound parameter, so it is checked before the statement is built.",
        fix,
        meta: {
            helper: method,
            argument,
            received
        }
    });
}
function languageLiteral(method, language) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["d"])(language)) throw invalid(method, "language", language, `'${language}' is not a PostgreSQL text-search configuration Prisma recognizes.`, `Pass one of: ${__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"].join(", ")}.`);
    return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__LiteralExpr$3e$__["LiteralExpr"].of(language);
}
function normalizationLiteral(method, normalization) {
    if (!Number.isInteger(normalization) || normalization < 0 || normalization > 63) throw invalid(method, "normalization", normalization, `normalization must be an integer between 0 and 63, received ${normalization}.`, "Combine the flags documented for ts_rank, e.g. 32 to divide the rank by itself plus one.");
    return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__LiteralExpr$3e$__["LiteralExpr"].of(normalization);
}
function checkWordCount(method, argument, value) {
    if (!Number.isInteger(value) || value < 1) throw invalid(method, argument, value, `${argument} must be a positive integer, received ${value}.`, "Pass a whole number of words, one or more.");
}
/** Non-empty, and none of `"` `,` `=` `\` or whitespace. */ const MARKER = /^[^"=,\\\s]+$/;
function checkMarker(method, argument, value) {
    if (!MARKER.test(value)) throw invalid(method, argument, value, `${argument} must be non-empty and free of " , = \\ and whitespace, received ${JSON.stringify(value)}.`, "ts_headline parses its options as a quoted, comma-separated list of Key=Value pairs, and the whole list reaches SQL as one literal, so a marker carrying those characters cannot survive either step. Use markup such as <mark> or <b>.");
}
/**
* The fourth `ts_headline` argument: one text literal of `Key=Value` pairs. Returns `undefined` when
* nothing but the language was given, so the common call keeps rendering the three-argument form.
*/ function headlineOptionsLiteral(method, options) {
    const pairs = [];
    if (options.startSel !== void 0) {
        checkMarker(method, "startSel", options.startSel);
        pairs.push(`StartSel=${options.startSel}`);
    }
    if (options.stopSel !== void 0) {
        checkMarker(method, "stopSel", options.stopSel);
        pairs.push(`StopSel=${options.stopSel}`);
    }
    if (options.maxWords !== void 0) {
        checkWordCount(method, "maxWords", options.maxWords);
        pairs.push(`MaxWords=${options.maxWords}`);
    }
    if (options.minWords !== void 0) {
        checkWordCount(method, "minWords", options.minWords);
        if (options.maxWords !== void 0 && options.minWords >= options.maxWords) throw invalid(method, "minWords", options.minWords, `minWords (${options.minWords}) must be below maxWords (${options.maxWords}).`, "Postgres requires MinWords strictly below MaxWords. Lower minWords, or raise maxWords.");
        pairs.push(`MinWords=${options.minWords}`);
    }
    if (options.highlightAll !== void 0) {
        if (typeof options.highlightAll !== "boolean") throw invalid(method, "highlightAll", options.highlightAll, `highlightAll must be a boolean, received ${JSON.stringify(options.highlightAll)}.`, "Pass true to mark up the whole document, or false to extract fragments.");
        pairs.push(`HighlightAll=${options.highlightAll}`);
    }
    return pairs.length === 0 ? void 0 : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__LiteralExpr$3e$__["LiteralExpr"].of(pairs.join(", "));
}
const TEXT_REF = {
    codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]
};
function parser(method, fn) {
    return (text, options = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__buildOperation$3e$__["buildOperation"])({
            method,
            args: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__toExpr$3e$__["toExpr"])(text, TEXT_REF),
                languageLiteral(method, options.language ?? "english")
            ],
            returns: {
                codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["I"],
                nullable: false
            },
            lowering: {
                targetFamily: "sql",
                template: `${fn}({{arg0}}, {{self}})`
            }
        });
}
/** Postgres `websearch_to_tsquery`: search-box syntax with quotes, `or` and `-`. Never errors. */ const websearchToTsquery = parser("websearchToTsquery", "websearch_to_tsquery");
/**
* Postgres `to_tsquery`: operator syntax (`'zebra' & !'graze'`, `zeb:*`), each word normalized.
* Malformed input fails at execution, so pass only text the application wrote, never user input;
* `tsquery` interpolates user input safely.
*/ const toTsquery = parser("toTsquery", "to_tsquery");
/** Postgres `plainto_tsquery`: every word must match. */ const plaintoTsquery = parser("plaintoTsquery", "plainto_tsquery");
/** Postgres `phraseto_tsquery`: the words must match in order. */ const phrasetoTsquery = parser("phrasetoTsquery", "phraseto_tsquery");
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-search-document-Ceg9d2K0-DJ4MklAU.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>renderFullTextIndexDocument,
    "t",
    ()=>renderFullTextDocument
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/errors-DpdPXR_L-DailcY-X.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/sql-utils-VXrIh8dJ-DVxo_Ygp.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__assertDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/assertions-Dw1lZz_Q.mjs [app-route] (ecmascript) <export t as assertDefined>");
;
;
;
;
//#region ../../../3-targets/postgres/1-target/dist/full-text-search-document-Ceg9d2K0.mjs
/**
* The search document of a full-text index: the expression the index is built over and the one
* `fullTextMatches` and `fullTextRank` search. Postgres uses an expression index only when the
* query carries the same expression, so the index DDL, the schema node and the query operations
* all render it here, from weight groups their callers have already checked.
*
* One field alone is `to_tsvector(language, field)`. With more fields, each gets its own
* `to_tsvector`, wrapped in `coalesce(field, '')` since one null would make the whole document
* null, and they are joined with `||`. With more than one group, each field is weighted with its
* group's weight, `A` for the first. The document depends on the groups and the language only, so
* a column's nullability never changes it.
*/ function renderFullTextDocument(groups, writer) {
    const fieldCount = groups.reduce((count, group)=>count + group.length, 0);
    const weighted = groups.length > 1;
    const vectors = groups.flatMap((group, position)=>group.map((field)=>{
            const column = writer.column(field);
            const text = fieldCount > 1 ? `coalesce(${column}, '')` : column;
            const vector = `to_tsvector(${writer.language}, ${text})`;
            if (!weighted) return vector;
            const weight = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"][position];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__assertDefined$3e$__["assertDefined"])(weight, `a full-text document has no weight for group ${position + 1}`);
            return `setweight(${vector}, '${weight}')`;
        }));
    const [only] = vectors;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__assertDefined$3e$__["assertDefined"])(only, "a full-text document has at least one field");
    return vectors.length === 1 ? only : `(${vectors.join(" || ")})`;
}
/**
* The search document over storage columns, as the index DDL and the schema node carry it. A
* definition that breaks a rule of a full-text index is refused.
*/ function renderFullTextIndexDocument(definition) {
    const { weightGroups } = definition;
    const [problem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"])({
        weightGroups
    });
    if (problem !== void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.INDEX_INVALID", (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])("The full-text index definition", problem), {
        why: "Each field of a search document is weighted by the position of its group, so the document is rendered only from weight groups that follow the rules of a full-text index.",
        fix: "Pass one to four non-empty weight groups that name each column once.",
        meta: {
            weightGroups
        }
    });
    return renderFullTextDocument(weightGroups, {
        column: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"],
        language: `'${definition.language}'`
    });
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/index-types-B5sQ5Vw0-DfXKO9-v.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>postgresIndexTypes,
    "t",
    ()=>postgresAccessMethodOf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/keywords.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$index$2d$types$2d$pC_5vADQ$2d$BOOBi14R$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__accessMethodOf$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/index-types-pC_5vADQ-BOOBi14R.mjs [app-route] (ecmascript) <export t as accessMethodOf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$index$2d$types$2d$pC_5vADQ$2d$BOOBi14R$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__defineIndexTypes$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/index-types-pC_5vADQ-BOOBi14R.mjs [app-route] (ecmascript) <export r as defineIndexTypes>");
;
;
;
//#region ../../../3-targets/postgres/1-target/dist/index-types-B5sQ5Vw0.mjs
const postgresIndexTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$index$2d$types$2d$pC_5vADQ$2d$BOOBi14R$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__defineIndexTypes$3e$__["defineIndexTypes"])().add("btree", {
    options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])("object")
}).add("hash", {
    options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])("object")
}).add("gin", {
    options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])("object")
}).add("gist", {
    options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])("object")
}).add("spgist", {
    options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])("object")
}).add("brin", {
    options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])("object")
}).add(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"], __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"]);
/** The access method an index of this type is created with; a type Postgres does not register is its own. */ function postgresAccessMethodOf(typeLiteral) {
    const entry = postgresIndexTypes.entries.find((candidate)=>candidate.type === typeLiteral);
    return entry === void 0 ? typeLiteral : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$index$2d$types$2d$pC_5vADQ$2d$BOOBi14R$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__accessMethodOf$3e$__["accessMethodOf"])(entry);
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/marker-lock-DFc1Tfv5-BkBKBRE3.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>MARKER_LOCK_SQL,
    "t",
    ()=>MARKER_LOCK_KEY
]);
//#region ../../../3-targets/postgres/1-target/dist/marker-lock-DFc1Tfv5.mjs
/**
* The key of the advisory lock that the migration runner and `db sign` hold while they read and write markers. The marker table holds every space's marker, so there is one key for it, whatever the space or the contract's namespaces.
*/ const MARKER_LOCK_KEY = "prisma_8.contract.marker";
/** Takes the transaction-scoped advisory lock named by {@link MARKER_LOCK_KEY}. */ const MARKER_LOCK_SQL = "select pg_advisory_xact_lock(hashtext($1))";
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/namespace-ids-xtp_ZY86-Cxc0dBbO.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>DEFAULT_NAMESPACE_ID
]);
//#region ../../../3-targets/postgres/1-target/dist/namespace-ids-xtp_ZY86.mjs
/** Postgres's default schema; `postgresTargetDescriptorMeta.defaultNamespaceId` is this value. */ const DEFAULT_NAMESPACE_ID = "public";
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/native-type-normalizer-DEN9YgA5.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>introspectedTypeText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/data-types-B47LbZ3z-DRVqjvQZ.mjs [app-route] (ecmascript)");
;
//#region ../../../3-targets/postgres/1-target/dist/native-type-normalizer.mjs
/** The type introspection reports for a column, from its catalog type columns. */ function introspectedTypeText(column) {
    const reported = reportedTypeText(column);
    const many = reported.endsWith("[]") ? true : void 0;
    return {
        typeText: column.enumType !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["it"])(column.enumType) : many ? reported.slice(0, -2) : reported,
        many
    };
}
function reportedTypeText(column) {
    if (column.formattedType) return column.formattedType;
    if (column.informationSchemaType === "character varying" || column.informationSchemaType === "character") return column.characterMaximumLength ? `${column.informationSchemaType}(${column.characterMaximumLength})` : column.informationSchemaType;
    if (column.informationSchemaType === "numeric" || column.informationSchemaType === "decimal") {
        if (column.numericPrecision && column.numericScale !== null) return `${column.informationSchemaType}(${column.numericPrecision},${column.numericScale})`;
        return column.numericPrecision ? `${column.informationSchemaType}(${column.numericPrecision})` : column.informationSchemaType;
    }
    return column.udtName || column.informationSchemaType;
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/nodes-G8VTh4PM-DNvIhHag.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>PostgresDropIndex,
    "a",
    ()=>PostgresAlterIndexRename,
    "b",
    ()=>PostgresDropType,
    "c",
    ()=>PostgresAlterTable,
    "d",
    ()=>PostgresCreatePolicy,
    "f",
    ()=>PostgresCreateSchema,
    "g",
    ()=>PostgresDisableRowLevelSecurity,
    "h",
    ()=>PostgresDdlNode,
    "i",
    ()=>DropDefaultAction,
    "l",
    ()=>PostgresAlterTableSetSchema,
    "m",
    ()=>PostgresCreateType,
    "n",
    ()=>AddConstraintAction,
    "o",
    ()=>PostgresAlterPolicyRename,
    "p",
    ()=>PostgresCreateTable,
    "r",
    ()=>AlterColumnTypeAction,
    "s",
    ()=>PostgresAlterSchemaRename,
    "t",
    ()=>AddColumnAction,
    "u",
    ()=>PostgresCreateIndex,
    "v",
    ()=>PostgresDropPolicy,
    "y",
    ()=>PostgresDropSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__DdlNode$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/opaque-sql-Dset3kln-CtsPDTXn.mjs [app-route] (ecmascript) <export i as DdlNode>");
;
//#region ../../../3-targets/postgres/1-target/dist/nodes-G8VTh4PM.mjs
var AlterTableAction = class {
};
var AddColumnAction = class extends AlterTableAction {
    kind = "add-column";
    column;
    constructor(column){
        super();
        this.column = column;
        Object.freeze(this);
    }
    accept(visitor) {
        return visitor.addColumn(this);
    }
};
var DropDefaultAction = class extends AlterTableAction {
    kind = "drop-default";
    columnName;
    constructor(columnName){
        super();
        this.columnName = columnName;
        Object.freeze(this);
    }
    accept(visitor) {
        return visitor.dropDefault(this);
    }
};
var AddConstraintAction = class extends AlterTableAction {
    kind = "add-constraint";
    constraint;
    constructor(constraint){
        super();
        this.constraint = constraint;
        Object.freeze(this);
    }
    accept(visitor) {
        return visitor.addConstraint(this);
    }
};
/**
* `ALTER COLUMN "<columnName>" TYPE <type> USING <using>`. `type` is written as given. Without `using`, the conversion is `"<columnName>"::<type>`.
*/ var AlterColumnTypeAction = class extends AlterTableAction {
    kind = "alter-column-type";
    columnName;
    type;
    using;
    constructor(options){
        super();
        this.columnName = options.columnName;
        this.type = options.type;
        this.using = options.using;
        Object.freeze(this);
    }
    accept(visitor) {
        return visitor.alterColumnType(this);
    }
};
var PostgresDdlNode = class extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$opaque$2d$sql$2d$Dset3kln$2d$CtsPDTXn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__DdlNode$3e$__["DdlNode"] {
};
function freezeDdlColumns(columns) {
    return Object.freeze([
        ...columns
    ]);
}
function freezeConstraints(constraints) {
    return constraints ? Object.freeze([
        ...constraints
    ]) : void 0;
}
var PostgresCreateTable = class extends PostgresDdlNode {
    kind = "create-table";
    table;
    schema;
    ifNotExists;
    columns;
    constraints;
    constructor(options){
        super();
        this.table = options.table;
        this.schema = options.schema;
        this.ifNotExists = options.ifNotExists;
        this.columns = freezeDdlColumns(options.columns);
        this.constraints = freezeConstraints(options.constraints);
        this.freeze();
    }
    accept(visitor) {
        return visitor.createTable(this);
    }
};
var PostgresCreateSchema = class extends PostgresDdlNode {
    kind = "create-schema";
    schema;
    ifNotExists;
    constructor(options){
        super();
        this.schema = options.schema;
        this.ifNotExists = options.ifNotExists;
        this.freeze();
    }
    accept(visitor) {
        return visitor.createSchema(this);
    }
};
var PostgresCreateType = class extends PostgresDdlNode {
    kind = "create-type";
    schema;
    name;
    values;
    constructor(options){
        super();
        this.schema = options.schema;
        this.name = options.name;
        this.values = Object.freeze([
            ...options.values
        ]);
        this.freeze();
    }
    accept(visitor) {
        return visitor.createType(this);
    }
};
var PostgresDropType = class extends PostgresDdlNode {
    kind = "drop-type";
    schema;
    name;
    constructor(options){
        super();
        this.schema = options.schema;
        this.name = options.name;
        this.freeze();
    }
    accept(visitor) {
        return visitor.dropType(this);
    }
};
var PostgresAlterTable = class extends PostgresDdlNode {
    kind = "alter-table";
    table;
    schema;
    actions;
    constructor(options){
        super();
        this.table = options.table;
        this.schema = options.schema;
        this.actions = Object.freeze([
            ...options.actions
        ]);
        this.freeze();
    }
    accept(visitor) {
        return visitor.alterTable(this);
    }
};
var PostgresCreatePolicy = class extends PostgresDdlNode {
    kind = "create-policy";
    schema;
    table;
    name;
    permissive;
    operation;
    roles;
    using;
    withCheck;
    constructor(options){
        super();
        this.schema = options.schema;
        this.table = options.table;
        this.name = options.name;
        this.permissive = options.permissive;
        this.operation = options.operation;
        this.roles = Object.freeze([
            ...options.roles
        ]);
        this.using = options.using;
        this.withCheck = options.withCheck;
        this.freeze();
    }
    accept(visitor) {
        return visitor.createPolicy(this);
    }
};
var PostgresDropPolicy = class extends PostgresDdlNode {
    kind = "drop-policy";
    schema;
    table;
    name;
    constructor(options){
        super();
        this.schema = options.schema;
        this.table = options.table;
        this.name = options.name;
        this.freeze();
    }
    accept(visitor) {
        return visitor.dropPolicy(this);
    }
};
var PostgresAlterPolicyRename = class extends PostgresDdlNode {
    kind = "alter-policy-rename";
    schema;
    table;
    name;
    newName;
    constructor(options){
        super();
        this.schema = options.schema;
        this.table = options.table;
        this.name = options.name;
        this.newName = options.newName;
        this.freeze();
    }
    accept(visitor) {
        return visitor.alterPolicyRename(this);
    }
};
var PostgresCreateIndex = class extends PostgresDdlNode {
    kind = "create-index";
    /** Absent ⇔ unqualified (the unbound namespace — `search_path` decides). */ schema;
    table;
    name;
    unique;
    elements;
    type;
    options;
    /** Partial-index predicate (WHERE body, without the keyword). Never quoted or escaped. */ where;
    constructor(options){
        super();
        this.schema = options.schema;
        this.table = options.table;
        this.name = options.name;
        this.unique = options.unique;
        this.elements = "columns" in options.elements ? {
            columns: Object.freeze([
                ...options.elements.columns
            ])
        } : {
            expression: options.elements.expression
        };
        this.type = options.type;
        this.options = options.options;
        this.where = options.where;
        this.freeze();
    }
    accept(visitor) {
        return visitor.createIndex(this);
    }
};
var PostgresDropIndex = class extends PostgresDdlNode {
    kind = "drop-index";
    /** Absent ⇔ unqualified (the unbound namespace). */ schema;
    name;
    constructor(options){
        super();
        this.schema = options.schema;
        this.name = options.name;
        this.freeze();
    }
    accept(visitor) {
        return visitor.dropIndex(this);
    }
};
var PostgresAlterIndexRename = class extends PostgresDdlNode {
    kind = "alter-index-rename";
    /** Absent ⇔ unqualified (the unbound namespace). */ schema;
    from;
    to;
    constructor(options){
        super();
        this.schema = options.schema;
        this.from = options.from;
        this.to = options.to;
        this.freeze();
    }
    accept(visitor) {
        return visitor.alterIndexRename(this);
    }
};
var PostgresDisableRowLevelSecurity = class extends PostgresDdlNode {
    kind = "disable-row-level-security";
    schema;
    table;
    constructor(options){
        super();
        this.schema = options.schema;
        this.table = options.table;
        this.freeze();
    }
    accept(visitor) {
        return visitor.disableRowLevelSecurity(this);
    }
};
var PostgresAlterTableSetSchema = class extends PostgresDdlNode {
    kind = "alter-table-set-schema";
    /** Absent ⇔ unqualified (the unbound namespace). */ schema;
    table;
    to;
    constructor(options){
        super();
        this.schema = options.schema;
        this.table = options.table;
        this.to = options.to;
        this.freeze();
    }
    accept(visitor) {
        return visitor.alterTableSetSchema(this);
    }
};
var PostgresAlterSchemaRename = class extends PostgresDdlNode {
    kind = "alter-schema-rename";
    schema;
    to;
    constructor(options){
        super();
        this.schema = options.schema;
        this.to = options.to;
        this.freeze();
    }
    accept(visitor) {
        return visitor.alterSchemaRename(this);
    }
};
var PostgresDropSchema = class extends PostgresDdlNode {
    kind = "drop-schema";
    schema;
    constructor(options){
        super();
        this.schema = options.schema;
        this.freeze();
    }
    accept(visitor) {
        return visitor.dropSchema(this);
    }
};
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-codec-traits-DeZiroEE-BACV_wuh.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>postgresCodecTraitsOf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codecs-CV-_K-z0-DZc60ccR.mjs [app-route] (ecmascript)");
;
//#region ../../../3-targets/postgres/1-target/dist/postgres-codec-traits-DeZiroEE.mjs
const TRAITS_BY_CODEC_ID = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"].map((descriptor)=>[
        descriptor.codecId,
        descriptor.traits
    ]));
/** The traits of a Postgres codec, or `undefined` for a codec the target does not register. */ function postgresCodecTraitsOf(codecId) {
    return TRAITS_BY_CODEC_ID.get(codecId);
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-codec-traits-DeZiroEE-BACV_wuh.mjs [app-route] (ecmascript) <export t as postgresCodecTraitsOf>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "postgresCodecTraitsOf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$codec$2d$traits$2d$DeZiroEE$2d$BACV_wuh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$codec$2d$traits$2d$DeZiroEE$2d$BACV_wuh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-codec-traits-DeZiroEE-BACV_wuh.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-contract-view-yDfay91x-BBinYMBq.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>PostgresContractView,
    "t",
    ()=>PostgresContractSerializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-ids-2htdtS66-CJPMZv1t.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/errors-DpdPXR_L-DailcY-X.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/data-types-B47LbZ3z-DRVqjvQZ.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$registry$2d$7LHPD8C1$2d$BALCyEB$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-registry-7LHPD8C1-BALCyEB-.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-schema-BBWgs4fX-DWdYxNi8.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$codec$2d$traits$2d$DeZiroEE$2d$BACV_wuh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-codec-traits-DeZiroEE-BACV_wuh.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$authoring$2d$BD4uEpBM$2d$DIJiGq4e$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/authoring-BD4uEpBM-DIJiGq4e.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__D__as__requiredSchemaKeys$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export D as requiredSchemaKeys>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export t as InternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/namespace-VUH2dgnS-By5y75h9.mjs [app-route] (ecmascript) <export r as UNBOUND_NAMESPACE_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__D__as__isAuthoringEntityTypeDescriptor$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export D as isAuthoringEntityTypeDescriptor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$view$2d$CcD3axo0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__buildSqlSchemaQualifiedView$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/contract-view-CcD3axo0.mjs [app-route] (ecmascript) <export n as buildSqlSchemaQualifiedView>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalization$2d$path$2d$match$2d$D88xLEq6$2d$BFQC39ZG$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__createPreserveEmptyPredicate$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/canonicalization-path-match-D88xLEq6-BFQC39ZG.mjs [app-route] (ecmascript) <export r as createPreserveEmptyPredicate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$contract$2d$serializer$2d$sMY3prTx$2d$BfYfhVR_$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__SqlContractSerializerBase$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/sql-contract-serializer-sMY3prTx-BfYfhVR_.mjs [app-route] (ecmascript) <export n as SqlContractSerializerBase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$canonicalization$2d$hooks$2d$BeJHD713$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__sqlContractCanonicalizationHooks$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/canonicalization-hooks-BeJHD713.mjs [app-route] (ecmascript) <export t as sqlContractCanonicalizationHooks>");
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
//#region ../../../3-targets/postgres/1-target/dist/postgres-contract-view-yDfay91x.mjs
const POSTGRES_CODEC_LOOKUP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$registry$2d$7LHPD8C1$2d$BALCyEB$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])();
/** The context entity hydration runs in. Hydration reads stored contract JSON and never a written value, so its data types carry no authoring entries, which keeps the PSL readers out of the runtime. */ const POSTGRES_AUTHORING_CTX = {
    family: "sql",
    target: "postgres",
    codecLookup: POSTGRES_CODEC_LOOKUP,
    dataTypes: {
        entries: {},
        lookup: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])(),
        dataTypeOfCodec: (codecId)=>POSTGRES_CODEC_LOOKUP.descriptorFor(codecId)?.dataType,
        textDataTypes: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nt"]
    },
    enumInferenceCodecs: {
        text: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"],
        int: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["v"]
    }
};
function isAuthoringEntityTypeFactoryOutput(output) {
    return typeof output === "object" && output !== null && "factory" in output && typeof output.factory === "function";
}
/**
* Walks a pack's entity-type namespace tree and emits hydration factories
* keyed by the descriptor's `discriminator`. Used for `storage.types`
* (codec-triple hydration). Namespace entries hydration dispatches by
* entries key, not discriminator — handled by `hydrateNamespaceEntities`.
*/ function collectStorageTypesHydrators(namespace) {
    const registry = /* @__PURE__ */ new Map();
    const walk = (node)=>{
        for (const value of Object.values(node)){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__D__as__isAuthoringEntityTypeDescriptor$3e$__["isAuthoringEntityTypeDescriptor"])(value)) {
                if (isAuthoringEntityTypeFactoryOutput(value.output)) {
                    const { factory } = value.output;
                    registry.set(value.discriminator, (raw)=>factory(raw, POSTGRES_AUTHORING_CTX));
                }
                continue;
            }
            if (typeof value === "object" && value !== null) walk(value);
        }
    };
    walk(namespace);
    return registry;
}
/**
* The canonicalization walk drops a field whose value equals its type's
* default, which for a required field of an entity kind means the emitted
* contract fails that kind's own schema on the next read (a RESTRICTIVE
* policy's `permissive: false` is the live case). The set of fields that must
* survive is therefore the required keys of the registered entity kinds —
* read off the schemas rather than listed by hand, so a kind that gains a
* required field is covered the day it gains one.
*/ function requiredEntityFieldsSurviveDefaults(kinds) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalization$2d$path$2d$match$2d$D88xLEq6$2d$BFQC39ZG$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__createPreserveEmptyPredicate$3e$__["createPreserveEmptyPredicate"])(kinds.flatMap((kind)=>requiredKeysOf(kind.schema).map((key)=>[
                "storage",
                "namespaces",
                "*",
                "entries",
                kind.kind,
                "*",
                key
            ])));
}
function requiredKeysOf(schema) {
    const keys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__D__as__requiredSchemaKeys$3e$__["requiredSchemaKeys"])(schema);
    if (keys === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"]("entity-kind schema does not expose arktype object props; the required-field preserve set cannot be derived");
    return keys;
}
var PostgresContractSerializer = class extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$contract$2d$serializer$2d$sMY3prTx$2d$BfYfhVR_$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__SqlContractSerializerBase$3e$__["SqlContractSerializerBase"] {
    shouldPreserveEmpty;
    constructor(extraPackEntityKinds = []){
        const storageTypesHydrators = collectStorageTypesHydrators(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$authoring$2d$BD4uEpBM$2d$DIJiGq4e$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]);
        const entityKinds = [
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["g"],
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["b"],
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["y"],
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["h"],
            __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["p"],
            ...extraPackEntityKinds
        ];
        super(storageTypesHydrators, entityKinds);
        const preserveRequired = requiredEntityFieldsSurviveDefaults(entityKinds);
        this.shouldPreserveEmpty = (path)=>preserveRequired(path) || __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$canonicalization$2d$hooks$2d$BeJHD713$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__sqlContractCanonicalizationHooks$3e$__["sqlContractCanonicalizationHooks"].shouldPreserveEmpty(path);
    }
    hydrateSqlNamespaceEntry(nsId, raw) {
        const { id, entries } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(super.hydrateSqlNamespaceEntry(nsId, raw));
        const allSlotsEmpty = Object.values(entries).every((slot)=>slot === void 0 || Object.keys(slot).length === 0);
        if (id === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__["UNBOUND_NAMESPACE_ID"] && allSlotsEmpty) return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"].unbound;
        const valueSetSlot = entries["valueSet"];
        const hasValueSets = valueSetSlot !== void 0 && Object.keys(valueSetSlot).length > 0;
        const schema = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"]({
            id,
            entries: {
                ...entries,
                table: entries["table"] ?? {},
                ...hasValueSets ? {
                    valueSet: valueSetSlot
                } : {}
            }
        });
        for (const table of Object.values(schema.table))(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(table, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$codec$2d$traits$2d$DeZiroEE$2d$BACV_wuh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]);
        return schema;
    }
    hydrateSqlStorage(validated) {
        const hydrated = super.hydrateSqlStorage(validated);
        assertExtensionsInOneNamespace(hydrated.storage);
        return hydrated;
    }
    serializeContract(contract) {
        const { storage, ...rest } = contract;
        const namespacesJson = {};
        for (const [nsId, ns] of Object.entries(storage.namespaces)){
            const isUnboundSlot = ns.id === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__["UNBOUND_NAMESPACE_ID"];
            namespacesJson[nsId] = {
                id: ns.id,
                kind: isUnboundSlot ? "postgres-unbound-schema" : "postgres-schema",
                entries: this.serializeNamespaceEntries(ns.entries)
            };
        }
        const storageOut = {
            storageHash: String(storage.storageHash),
            namespaces: namespacesJson
        };
        if (storage.types !== void 0) {
            const typesOut = {};
            for (const [name, entry] of Object.entries(storage.types))typesOut[name] = this.serializeJsonObject(entry);
            storageOut["types"] = typesOut;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])({
            ...rest,
            storage: storageOut
        });
    }
};
function assertExtensionsInOneNamespace(storage) {
    const namespacesByExtension = /* @__PURE__ */ new Map();
    for (const namespace of Object.values(storage.namespaces)){
        if (!(namespace instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])) continue;
        for (const name of Object.keys(namespace.extension))namespacesByExtension.set(name, [
            ...namespacesByExtension.get(name) ?? [],
            namespace.id
        ]);
    }
    for (const [name, namespaceIds] of namespacesByExtension){
        if (namespaceIds.length < 2) continue;
        const namespaces = [
            ...namespaceIds
        ].sort();
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.NAME_DUPLICATE", `Extension "${name}" is declared in namespaces ${namespaces.map((id)=>`"${id}"`).join(" and ")}. An extension's name is unique in the database, so a contract declares it in one namespace only.`, {
            fix: "Re-emit the contract from its source, which refuses one extension declared in two namespaces.",
            meta: {
                kind: "extension",
                name,
                namespaces
            }
        });
    }
}
const PostgresContractView = {
    /** Wrap an already-deserialized Postgres contract in a schema-qualified view. */ from (contract) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$view$2d$CcD3axo0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__buildSqlSchemaQualifiedView$3e$__["buildSqlSchemaQualifiedView"])(contract);
    },
    /** Deserialize a Postgres contract JSON envelope and wrap it in a view. */ fromJson (json) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$view$2d$CcD3axo0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__buildSqlSchemaQualifiedView$3e$__["buildSqlSchemaQualifiedView"])(new PostgresContractSerializer().deserializeContract(json));
    }
};
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-contract-view-yDfay91x-BBinYMBq.mjs [app-route] (ecmascript) <export t as PostgresContractSerializer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostgresContractSerializer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$contract$2d$view$2d$yDfay91x$2d$BBinYMBq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$contract$2d$view$2d$yDfay91x$2d$BBinYMBq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-contract-view-yDfay91x-BBinYMBq.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-native-enum-CdP3b_-R-DgG3pi5p.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>PostgresNativeEnum
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/namespace-VUH2dgnS-By5y75h9.mjs [app-route] (ecmascript) <export i as freezeNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$node$2d$D8P0akYY$2d$RVytYXDZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SqlNode$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/sql-node-D8P0akYY-RVytYXDZ.mjs [app-route] (ecmascript) <export t as SqlNode>");
;
;
;
//#region ../../../3-targets/postgres/1-target/dist/postgres-native-enum-CdP3b_-R.mjs
function freezeMembers(members) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(Object.freeze([
        ...members
    ]));
}
/**
* Postgres contract-IR class for a native enum type (`CREATE TYPE … AS ENUM (…)`).
*
* This is an authored, serialized Contract-IR entity — it is registered as an entity
* kind, extends `SqlNode`, and is stored in `contract.json`. It is NOT a DiffableNode;
* the schema-diff tree will use `PostgresNativeEnumSchemaNode` when the managed phase
* builds it.
*
* A member is a value, not a name→value pair — matching `CREATE TYPE … AS ENUM
* ('a', 'b')`, which has no separate member name.
*
* Target-only concept — no SQL-family abstract. Extends `SqlNode` directly,
* frozen at construction via `freezeNode(this)`. The `kind: 'postgres-enum'`
* discriminant is enumerable so it survives JSON. Lives at
* `storage.namespaces[ns].entries.native_enum[HandleName]`; the entries key
* (`native_enum`) is the entity-kind descriptor's `kind`, decoupled from this
* node's own `kind` literal — the same shape as `table`/`StorageTable` and
* `valueSet`/`StorageValueSet`.
*/ var PostgresNativeEnum = class extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$node$2d$D8P0akYY$2d$RVytYXDZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SqlNode$3e$__["SqlNode"] {
    static is(node) {
        return typeof node === "object" && node !== null && "kind" in node && node.kind === "postgres-enum";
    }
    kind = "postgres-enum";
    typeName;
    members;
    constructor(input){
        super();
        this.typeName = input.typeName;
        this.members = freezeMembers(input.members);
        if (input.control !== void 0) this.control = input.control;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__["freezeNode"])(this);
    }
};
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-native-enum-CdP3b_-R-DgG3pi5p.mjs [app-route] (ecmascript) <export t as PostgresNativeEnum>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostgresNativeEnum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$native$2d$enum$2d$CdP3b_$2d$R$2d$DgG3pi5p$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$native$2d$enum$2d$CdP3b_$2d$R$2d$DgG3pi5p$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-native-enum-CdP3b_-R-DgG3pi5p.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-role-schema-node-yFPLQ6U0-ZCPXs-lG.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i",
    ()=>PostgresRoleSchemaNode,
    "n",
    ()=>PostgresNamespaceSchemaNode,
    "r",
    ()=>PostgresPolicySchemaNode,
    "t",
    ()=>PostgresDatabaseSchemaNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-table-schema-node-OQRI_GIM-DhOVxH8-.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/namespace-VUH2dgnS-By5y75h9.mjs [app-route] (ecmascript) <export i as freezeNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__nameOf$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/naming-DEpT6Zad-C9PFkWt6.mjs [app-route] (ecmascript) <export u as nameOf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__SqlSchemaIRNode$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-1ZKE0deC-Dou4ugcz.mjs [app-route] (ecmascript) <export l as SqlSchemaIRNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__assertNode$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-1ZKE0deC-Dou4ugcz.mjs [app-route] (ecmascript) <export f as assertNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__defineNonEnumerable$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-1ZKE0deC-Dou4ugcz.mjs [app-route] (ecmascript) <export p as defineNonEnumerable>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$array$2d$equal$2d$28xupwIB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__isArrayEqual$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/array-equal-28xupwIB.mjs [app-route] (ecmascript) <export t as isArrayEqual>");
;
;
;
;
;
;
//#region ../../../3-targets/postgres/1-target/dist/postgres-role-schema-node-yFPLQ6U0.mjs
/**
* The root of the Postgres schema-diff tree: one node per database.
*
* `id` is the fixed sentinel `'database'` — the root has no siblings and
* the value is never emitted into migration paths. `isEqualTo` is identity
* (roots always share the `'database'` id). `children()` yields the namespace
* nodes followed by the role nodes — both are root-level diff subjects. The
* differ pairs siblings by `(nodeKind, id)`, so a role and a namespace may
* share a name without colliding. Extensions are root children too: an
* extension's name is unique in the database.
*/ var PostgresDatabaseSchemaNode = class PostgresDatabaseSchemaNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__SqlSchemaIRNode$3e$__["SqlSchemaIRNode"] {
    nodeKind = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].database;
    namespaces;
    roles;
    extensions;
    existingSchemas;
    pgVersion;
    constructor(input){
        super();
        this.namespaces = Object.freeze({
            ...input.namespaces
        });
        this.roles = Object.freeze([
            ...input.roles
        ]);
        this.extensions = Object.freeze([
            ...input.extensions ?? []
        ]);
        this.existingSchemas = Object.freeze([
            ...input.existingSchemas
        ]);
        this.pgVersion = input.pgVersion;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get id() {
        return "database";
    }
    isEqualTo(other) {
        return this.id === other.id;
    }
    children() {
        return [
            ...Object.values(this.namespaces),
            ...this.roles,
            ...this.extensions
        ];
    }
    static is(node) {
        return node.nodeKind === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].database;
    }
    static assert(node) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__assertNode$3e$__["assertNode"])(node, "PostgresDatabaseSchemaNode", PostgresDatabaseSchemaNode.is);
    }
};
/**
* One-per-Postgres-schema diff-tree node. Groups the tables belonging to a
* single namespace. Per-schema consumers (the relational planner,
* toSchemaView) read this node's `tables` field structurally via
* `blindCast`/`SqlSchemaIRNode` — not through a static `SqlSchemaIR`
* assignment — because `nodeKind` carries this node's own literal
* (`postgres-namespace`), distinct from `SqlSchemaIR`'s own (`sql-schema`).
*
* `id` is the schema name; `isEqualTo` is identity on it; `children()` returns
* the table nodes plus `nativeEnums`.
*
* `nativeEnums` is the diff-tree representation of native enum types the
* differ pairs — the sole enum carrier, built directly by both sides: the
* expected (contract-projected) side and introspection alike hand in
* `PostgresNativeEnumSchemaNode`s.
*/ var PostgresNamespaceSchemaNode = class PostgresNamespaceSchemaNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__SqlSchemaIRNode$3e$__["SqlSchemaIRNode"] {
    nodeKind = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].namespace;
    schemaName;
    tables;
    nativeEnums;
    constructor(input){
        super();
        this.schemaName = input.schemaName;
        this.tables = Object.freeze({
            ...input.tables
        });
        this.nativeEnums = Object.freeze([
            ...input.nativeEnums ?? []
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get id() {
        return this.schemaName;
    }
    isEqualTo(other) {
        return this.id === other.id;
    }
    children() {
        return [
            ...Object.values(this.tables),
            ...this.nativeEnums
        ];
    }
    static is(node) {
        return node.nodeKind === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].namespace;
    }
    static assert(node) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__assertNode$3e$__["assertNode"])(node, "PostgresNamespaceSchemaNode", PostgresNamespaceSchemaNode.is);
    }
};
/**
* Schema-diff leaf node for a Postgres row-level security policy.
*
* This is a derived, transient node walked by the differ — it is NEVER serialized.
* Built by project-from-contract and project-from-database from their respective
* `PostgresRlsPolicy` contract entities / introspected rows.
*
* `id` is the full physical name. `isEqualTo` is mode-selected by the
* receiver's `prefix`: a wire-named receiver (`prefix` present) compares ids
* only — the wire name encodes a body hash, so name-equality is
* body-equality and predicate bodies are never byte-compared (Postgres
* reprints them). An exact receiver (`prefix` absent) compares content:
* `operation`/`permissive` strict, `roles` sorted, and `using ?? ''` /
* `withCheck ?? ''` verbatim byte-for-byte — reliable precisely when the
* body text was captured from a Postgres reprint (contract infer).
*/ var PostgresPolicySchemaNode = class PostgresPolicySchemaNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__SqlSchemaIRNode$3e$__["SqlSchemaIRNode"] {
    nodeKind = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].policy;
    name;
    tableName;
    namespaceId;
    operation;
    roles;
    permissive;
    constructor(input){
        super();
        this.name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__nameOf$3e$__["nameOf"])(input.naming);
        if (input.naming.kind === "wire") this.prefix = input.naming.prefix;
        this.tableName = input.tableName;
        this.namespaceId = input.namespaceId;
        this.operation = input.operation;
        this.roles = Object.freeze([
            ...input.roles
        ]);
        if (input.using !== void 0) this.using = input.using;
        if (input.withCheck !== void 0) this.withCheck = input.withCheck;
        this.permissive = input.permissive;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__defineNonEnumerable$3e$__["defineNonEnumerable"])(this, "dependsOn", input.dependsOn);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get id() {
        return this.name;
    }
    children() {
        return [];
    }
    isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        PostgresPolicySchemaNode.assert(node);
        if (this.prefix !== void 0) return this.id === node.id;
        return this.contentEquals(node);
    }
    /**
	* The single policy content-equality relation — the exact-mode
	* {@link isEqualTo} and the planner's rename content-pairing both call
	* this rather than growing a parallel relation: `operation` and
	* `permissive` strict, `roles` compared deduplicated-and-sorted (the same
	* set semantics as the wire-hash tuple, so the two never disagree),
	* `using`/`withCheck` VERBATIM byte-for-byte with absent ≡ empty —
	* deliberately NOT the normalized wire-hash bodies.
	*/ contentEquals(other) {
        return this.operation === other.operation && this.permissive === other.permissive && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$array$2d$equal$2d$28xupwIB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__isArrayEqual$3e$__["isArrayEqual"])([
            ...new Set(this.roles)
        ].sort(), [
            ...new Set(other.roles)
        ].sort()) && (this.using ?? "") === (other.using ?? "") && (this.withCheck ?? "") === (other.withCheck ?? "");
    }
    static is(node) {
        return node.nodeKind === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].policy;
    }
    static assert(node) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__assertNode$3e$__["assertNode"])(node, "PostgresPolicySchemaNode", PostgresPolicySchemaNode.is);
    }
};
/**
* Schema-diff leaf node for a Postgres database role.
*
* This is a derived, transient node walked by the differ — it is NEVER serialized.
* Built by project-from-contract and project-from-database from their respective
* `PostgresRole` contract entities / introspected rows.
*
* Roles are cluster-scoped, so `id` is the bare role name. The differ pairs
* siblings by `(nodeKind, id)`, so a role and a namespace may share a name
* (role `public`, schema `public`) without colliding. `isEqualTo` compares
* ids — name-equality is role-equality for cluster-scoped objects.
*/ var PostgresRoleSchemaNode = class PostgresRoleSchemaNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__SqlSchemaIRNode$3e$__["SqlSchemaIRNode"] {
    nodeKind = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].role;
    name;
    namespaceId;
    constructor(input){
        super();
        this.name = input.name;
        this.namespaceId = input.namespaceId;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get id() {
        return this.name;
    }
    children() {
        return [];
    }
    isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        PostgresRoleSchemaNode.assert(node);
        return this.id === node.id;
    }
    static is(node) {
        return node.nodeKind === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$table$2d$schema$2d$node$2d$OQRI_GIM$2d$DhOVxH8$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"].role;
    }
    static assert(node) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__assertNode$3e$__["assertNode"])(node, "PostgresRoleSchemaNode", PostgresRoleSchemaNode.is);
    }
};
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-schema-BBWgs4fX-DWdYxNi8.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>policyInputFromSerialized,
    "a",
    ()=>PostgresRlsEnablementSchema,
    "b",
    ()=>roleEntityKind,
    "c",
    ()=>PostgresRole,
    "d",
    ()=>PostgresTableSource,
    "f",
    ()=>PostgresUnboundSchema,
    "g",
    ()=>policyEntityKind,
    "h",
    ()=>nativeEnumEntityKind,
    "i",
    ()=>PostgresRlsEnablement,
    "l",
    ()=>PostgresRoleSchema,
    "m",
    ()=>isPostgresSchema,
    "n",
    ()=>PostgresExtensionSchema,
    "o",
    ()=>PostgresRlsPolicy,
    "p",
    ()=>extensionEntityKind,
    "r",
    ()=>PostgresNativeEnumSchema,
    "s",
    ()=>PostgresRlsPolicySchema,
    "t",
    ()=>PostgresExtension,
    "u",
    ()=>PostgresSchema,
    "v",
    ()=>postgresCreateNamespace,
    "y",
    ()=>rlsEnablementEntityKind
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-ids-2htdtS66-CJPMZv1t.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/sql-utils-VXrIh8dJ-DVxo_Ygp.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$native$2d$enum$2d$CdP3b_$2d$R$2d$DgG3pi5p$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-native-enum-CdP3b_-R-DgG3pi5p.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__L__as__TableSource$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export L as TableSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/keywords.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/namespace-VUH2dgnS-By5y75h9.mjs [app-route] (ecmascript) <export r as UNBOUND_NAMESPACE_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/namespace-VUH2dgnS-By5y75h9.mjs [app-route] (ecmascript) <export i as freezeNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$B7QKO3dq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__hydrateNamespaceEntities$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/ir-B7QKO3dq.mjs [app-route] (ecmascript) <export c as hydrateNamespaceEntities>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$CISwoRED$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__a__as__SqlNamespaceBase$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-CISwoRED.mjs [app-route] (ecmascript) <locals> <export a as SqlNamespaceBase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$node$2d$D8P0akYY$2d$RVytYXDZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SqlNode$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/sql-node-D8P0akYY-RVytYXDZ.mjs [app-route] (ecmascript) <export t as SqlNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/assertions-Dw1lZz_Q.mjs [app-route] (ecmascript) <export n as invariant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__nameOf$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/naming-DEpT6Zad-C9PFkWt6.mjs [app-route] (ecmascript) <export u as nameOf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__parseNaming$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/naming-DEpT6Zad-C9PFkWt6.mjs [app-route] (ecmascript) <export h as parseNaming>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$entity$2d$kinds$2d$CgEwK0hH$2d$D1NKoKE5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__composeSqlEntityKinds$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/entity-kinds-CgEwK0hH-D1NKoKE5.mjs [app-route] (ecmascript) <export f as composeSqlEntityKinds>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/relational-core__contract-free.mjs [app-route] (ecmascript)");
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
//#region ../../../3-targets/postgres/1-target/dist/postgres-schema-BBWgs4fX.mjs
/**
* A Postgres extension the database must have installed (`CREATE EXTENSION … WITH SCHEMA …`), filed under `entries.extension` of the namespace whose schema holds the extension's objects.
*/ var PostgresExtension = class extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$node$2d$D8P0akYY$2d$RVytYXDZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SqlNode$3e$__["SqlNode"] {
    static is(node) {
        return typeof node === "object" && node !== null && "kind" in node && node.kind === "extension";
    }
    kind = "extension";
    name;
    constructor(input){
        super();
        this.name = input.name;
        if (input.control !== void 0) this.control = input.control;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__["freezeNode"])(this);
    }
};
/**
* Postgres contract-IR marker for `@@rls` on a model: the table named here is
* RLS-controlled (`ENABLE ROW LEVEL SECURITY` is driven by this marker, never
* by the policy set).
*
* This is an authored, serialized Contract-IR entity — it is registered as an
* entity kind, extends `SqlNode`, and is stored in `contract.json` under
* `entries.rls[tableName]`. Target-only concept — no SQL-family abstract.
* Frozen at construction via `freezeNode(this)`. The `kind: 'rls'`
* discriminant is enumerable so it survives JSON serialization; the literal
* matches the entries key (one-string rule).
*/ var PostgresRlsEnablement = class extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$node$2d$D8P0akYY$2d$RVytYXDZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SqlNode$3e$__["SqlNode"] {
    kind = "rls";
    tableName;
    namespaceId;
    constructor(input){
        super();
        this.tableName = input.tableName;
        this.namespaceId = input.namespaceId;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__["freezeNode"])(this);
    }
};
/**
* Postgres contract-IR class for a row-level security policy (`CREATE POLICY … ON …`).
*
* This is an authored, serialized Contract-IR entity — it is registered as an entity
* kind, extends `SqlNode`, and is stored in `contract.json`. It is NOT a DiffableNode;
* the schema-diff tree uses `PostgresPolicySchemaNode` for that role.
*
* Target-only concept — no SQL-family abstract. Extends `SqlNode` directly.
* Frozen at construction via `freezeNode(this)`. The `kind: 'policy'`
* discriminant is enumerable (overrides SqlNode's non-enumerable `'sql'`) so it
* survives JSON serialization and enables dispatch. The literal matches the
* entries key (one-string rule: node.kind === entries key === entity kind).
*/ var PostgresRlsPolicy = class extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$node$2d$D8P0akYY$2d$RVytYXDZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SqlNode$3e$__["SqlNode"] {
    kind = "policy";
    name;
    tableName;
    namespaceId;
    operation;
    roles;
    permissive;
    constructor(input){
        super();
        this.name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__nameOf$3e$__["nameOf"])(input.naming);
        if (input.naming.kind === "wire") this.prefix = input.naming.prefix;
        this.tableName = input.tableName;
        this.namespaceId = input.namespaceId;
        this.operation = input.operation;
        this.roles = Object.freeze([
            ...input.roles
        ]);
        if (input.using !== void 0) this.using = input.using;
        if (input.withCheck !== void 0) this.withCheck = input.withCheck;
        this.permissive = input.permissive;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__["freezeNode"])(this);
    }
};
/**
* Postgres contract-IR class for a database role (`CREATE ROLE …`).
*
* This is an authored, serialized Contract-IR entity — it is registered as an entity
* kind, extends `SqlNode`, and is stored in `contract.json`. It is NOT a DiffableNode;
* the schema-diff tree uses `PostgresRoleSchemaNode` for that role.
*
* Roles are cluster-scoped, so their namespace coordinate is always
* `UNBOUND_NAMESPACE_ID`. Target-only concept — no SQL-family abstract.
* Extends `SqlNode` directly, frozen at construction via `freezeNode(this)`.
* The `kind: 'role'` discriminant is enumerable so it survives JSON.
* Matches the entries key (one-string rule).
*
* `control` always carries a value (never omitted): it defaults to
* {@link ROLE_DEFAULT_CONTROL_POLICY} in the constructor, so both a
* freshly-authored role and one hydrated from an older `contract.json`
* lacking the field resolve the same way — the control-policy resolver
* reads it directly off the entity instead of special-casing role issues.
*/ var PostgresRole = class extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$node$2d$D8P0akYY$2d$RVytYXDZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SqlNode$3e$__["SqlNode"] {
    kind = "role";
    name;
    namespaceId;
    control;
    constructor(input){
        super();
        this.name = input.name;
        this.namespaceId = input.namespaceId;
        this.control = input.control ?? "external";
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__["freezeNode"])(this);
    }
};
const PostgresRoleSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])({
    kind: "'role'",
    name: "string",
    namespaceId: "string",
    "control?": "'external'"
});
const PostgresRlsPolicySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])({
    kind: "'policy'",
    name: "string",
    "prefix?": "string",
    tableName: "string",
    namespaceId: "string",
    operation: "'select' | 'insert' | 'update' | 'delete' | 'all'",
    roles: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"].string.array().readonly(),
    "using?": "string",
    "withCheck?": "string",
    permissive: "boolean"
});
const PostgresRlsEnablementSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])({
    kind: "'rls'",
    tableName: "string",
    namespaceId: "string"
});
const PostgresNativeEnumSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])({
    kind: "'postgres-enum'",
    typeName: "string",
    members: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"].string.array().readonly(),
    "control?": "'managed' | 'tolerated' | 'external' | 'observed'"
});
const PostgresExtensionSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    kind: "'extension'",
    name: "string",
    "control?": "'managed' | 'tolerated' | 'external' | 'observed'"
});
var PostgresTableSource = class extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__L__as__TableSource$3e$__["TableSource"] {
    schema;
    constructor(options){
        super(options.name, options.alias);
        this.schema = options.schema;
        this.freeze();
    }
    rewrite(rewriter) {
        return rewriter.tableSource ? rewriter.tableSource(this) : this;
    }
};
/**
* Hydrates one stored policy into constructor input. The name and the prefix
* are separate fields in the file and can disagree there, so the pair is
* checked on the way in.
*/ function policyInputFromSerialized(flat) {
    return {
        naming: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DEpT6Zad$2d$C9PFkWt6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__parseNaming$3e$__["parseNaming"])(flat.name, flat.prefix),
        tableName: flat.tableName,
        namespaceId: flat.namespaceId,
        operation: flat.operation,
        roles: flat.roles,
        using: flat.using,
        withCheck: flat.withCheck,
        permissive: flat.permissive
    };
}
const policyEntityKind = {
    kind: "policy",
    schema: PostgresRlsPolicySchema,
    construct: (input)=>new PostgresRlsPolicy(policyInputFromSerialized(input))
};
const roleEntityKind = {
    kind: "role",
    schema: PostgresRoleSchema,
    construct: (input)=>new PostgresRole(input)
};
const rlsEnablementEntityKind = {
    kind: "rls",
    schema: PostgresRlsEnablementSchema,
    construct: (input)=>new PostgresRlsEnablement(input)
};
const nativeEnumEntityKind = {
    kind: "native_enum",
    schema: PostgresNativeEnumSchema,
    construct: (input)=>new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$native$2d$enum$2d$CdP3b_$2d$R$2d$DgG3pi5p$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"](input)
};
const extensionEntityKind = {
    kind: "extension",
    schema: PostgresExtensionSchema,
    construct: (input)=>new PostgresExtension(input)
};
/**
* Postgres target `Namespace` concretion — a Postgres schema (`CREATE
* SCHEMA …`). Each Postgres `SqlStorage` carries a
* `namespaces: Record<NamespaceId, PostgresSchema>` map populated by
* the Postgres PSL interpreter from `namespace { … }` AST buckets.
*
* `entries` holds entity-kind maps (`table`, `valueSet`). Qualifier
* emission is the rendering seam: DDL / SQL emission asks the namespace
* for its qualifier (`"<schema>"`) or for a qualified table name
* (`"<schema>"."<table>"`) and consumes the result polymorphically.
* The unbound singleton below overrides these methods to elide the
* prefix entirely — call sites stay polymorphic and never branch on
* `id === UNBOUND_NAMESPACE_ID`.
*/ var PostgresSchema = class extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$CISwoRED$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__a__as__SqlNamespaceBase$3e$__["SqlNamespaceBase"] {
    /**
	* Stable singleton reference for the late-bound slot. Materialised
	* lazily below the singleton subclass declaration so the static
	* initialiser sees the subclass before assigning. Consumers always
	* reach for `PostgresSchema.unbound` (or `PostgresUnboundSchema.instance`
	* — same identity).
	*/ static unbound;
    id;
    entries;
    constructor(input){
        super();
        this.id = input.id;
        const dispatched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$B7QKO3dq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__hydrateNamespaceEntities$3e$__["hydrateNamespaceEntities"])(input.entries, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$entity$2d$kinds$2d$CgEwK0hH$2d$D1NKoKE5$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__composeSqlEntityKinds$3e$__["composeSqlEntityKinds"])([
            policyEntityKind,
            roleEntityKind,
            rlsEnablementEntityKind,
            nativeEnumEntityKind,
            extensionEntityKind
        ]), "carry");
        const nativeEnumSlot = dispatched["native_enum"];
        if (nativeEnumSlot !== void 0) {
            const rekeyed = {};
            for (const [handle, entity] of Object.entries(nativeEnumSlot)){
                const physicalName = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$native$2d$enum$2d$CdP3b_$2d$R$2d$DgG3pi5p$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"].is(entity) ? entity.typeName : handle;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(!Object.hasOwn(rekeyed, physicalName), `PostgresSchema "${input.id}": two native_enum entities resolve to the same physical type name "${physicalName}". Give them distinct @@map type names.`);
                rekeyed[physicalName] = entity;
            }
            dispatched["native_enum"] = Object.freeze(rekeyed);
        }
        const valueSetRaw = dispatched["valueSet"];
        const entriesInput = {
            ...valueSetRaw !== void 0 && Object.keys(valueSetRaw).length === 0 ? {
                ...dispatched,
                valueSet: void 0
            } : dispatched
        };
        this.entries = Object.freeze((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(entriesInput));
        for (const table of Object.values(this.entries.table ?? {}))(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(table);
        Object.defineProperty(this, "kind", {
            value: "schema",
            writable: false,
            enumerable: false,
            configurable: true
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get table() {
        return this.entries.table ?? Object.freeze({});
    }
    get valueSet() {
        return this.entries.valueSet;
    }
    get policy() {
        return this.entries.policy ?? Object.freeze({});
    }
    get role() {
        return this.entries.role ?? Object.freeze({});
    }
    get rls() {
        return this.entries.rls ?? Object.freeze({});
    }
    get extension() {
        return this.entries.extension ?? Object.freeze({});
    }
    /**
	* The bare schema qualifier as it would appear in a rendered SQL
	* fragment (already quoted). The unbound-schema singleton overrides
	* this to return `''`.
	*/ qualifier() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(this.id);
    }
    /**
	* Qualify a table name with the schema prefix
	* (`"<schema>"."<table>"`). The unbound-schema singleton overrides
	* this to emit just `"<table>"` so the resolved DDL is unqualified
	* and `search_path` decides where the object lands at runtime.
	*/ qualifyTable(tableName) {
        return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(this.id)}.${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(tableName)}`;
    }
    /**
	* Render a SQL string-literal containing the qualified-name form
	* suitable for `to_regclass(...)` arguments (e.g. `'"public"."user"'`).
	* The unbound singleton overrides this to elide the schema prefix
	* (`'"user"'`) so `search_path` resolves the object at runtime.
	*/ regclassLiteral(name) {
        return `'${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(this.qualifyTable(name))}'`;
    }
    /**
	* Render a SQL expression that evaluates to this namespace's schema
	* name at runtime, ready to drop into a `WHERE table_schema = …` /
	* `WHERE n.nspname = …` clause. Named schemas emit a quoted SQL
	* literal (`'public'`); the unbound singleton overrides this to emit
	* `current_schema()` so catalog queries match whichever schema the
	* connection's `search_path` resolved at runtime.
	*/ schemaSqlExpression() {
        return `'${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(this.id)}'`;
    }
    /**
	* Typed-AST counterpart of {@link schemaSqlExpression}: the expression a
	* builder-built catalog check compares `n.nspname` / `table_schema`
	* against. Named schemas bind the schema name as a text parameter; the
	* unbound singleton overrides this to the opaque `current_schema()`
	* expression so the live connection's `search_path` decides at runtime.
	*/ schemaFilterExpression() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].param(this.id, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]);
    }
    /**
	* Typed-AST counterpart of {@link qualifyTable}: the FROM source a
	* builder-built check uses to address a user table in this namespace.
	* Named schemas qualify (`"schema"."table"`); the unbound singleton
	* overrides this to leave the table unqualified so `search_path`
	* resolves it at runtime.
	*/ tableSource(tableName, alias) {
        return new PostgresTableSource({
            name: tableName,
            schema: this.id,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("alias", alias)
        });
    }
    /**
	* The bare schema name a DDL planner should target when emitting
	* statements that need to identify this namespace in the live
	* database (e.g. `CREATE TABLE "<ddlSchemaName>"."<table>" …`,
	* catalog filters, planner conflict lookups). Named schemas resolve
	* to their own id. The `PostgresUnboundSchema` singleton inherits
	* this and returns `UNBOUND_NAMESPACE_ID` — callers that dispatch
	* through `qualifyTableName` route through the polymorphic
	* `PostgresUnboundSchema` overrides and produce unqualified
	* (search-path-resolved) output automatically.
	*/ ddlSchemaName(_storage) {
        return this.id;
    }
};
/**
* Singleton subclass for the reserved sentinel namespace id
* (`UNBOUND_NAMESPACE_ID`) — the late-bound Postgres slot whose binding
* the connection's `search_path` resolves at runtime. Overrides
* qualifier emission to elide the schema prefix; call sites that consume
* `qualifier()` / `qualifyTable()` get unqualified output without
* branching on the namespace id.
*
* This is the target-side materialization of "the framework provides
* affordances; targets implement specifics": the framework names the
* sentinel; Postgres decides what late-bound means here (the table
* name, naked — the schema is supplied by the live connection's
* `search_path`).
*
* `ddlSchemaName` is inherited from `PostgresSchema` and returns
* `UNBOUND_NAMESPACE_ID`. Downstream helpers such as `qualifyTableName`
* route through the polymorphic factory and produce unqualified output
* automatically.
*/ var PostgresUnboundSchema = class PostgresUnboundSchema extends PostgresSchema {
    static instance = new PostgresUnboundSchema();
    constructor(input){
        super(input ?? {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__["UNBOUND_NAMESPACE_ID"],
            entries: {
                table: {}
            }
        });
    }
    qualifier() {
        return "";
    }
    qualifyTable(tableName) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(tableName);
    }
    schemaSqlExpression() {
        return "current_schema()";
    }
    schemaFilterExpression() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$relational$2d$core_$5f$contract$2d$free$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cfExpr"].raw("current_schema()", {
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"],
            nullable: false
        });
    }
    tableSource(tableName, alias) {
        return new PostgresTableSource({
            name: tableName,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("alias", alias)
        });
    }
};
PostgresSchema.unbound = PostgresUnboundSchema.instance;
/**
* Narrow an arbitrary namespace (or `undefined`) to `PostgresSchema`
* so callers can dispatch to the polymorphic emission methods without
* branching at the call site. Uses the structural `kind` discriminator
* (`'schema'`) rather than `instanceof` so the check survives realm /
* bundle / hot-reload boundaries — matching the rest of the IR's
* narrowing convention. `PostgresUnboundSchema` passes through because
* it inherits the same `kind: 'schema'` from `PostgresSchema`.
*/ function isPostgresSchema(ns) {
    return typeof ns === "object" && ns !== null && Reflect.get(ns, "kind") === "schema";
}
/**
* Target-supplied `Namespace` factory the Postgres target plumbs
* through `defineContract({ createNamespace })` and the SQL PSL
* interpreter. Returns the unbound singleton for the framework
* sentinel and a fresh `PostgresSchema` for any other coordinate.
*
* The factory has no per-call state — every named id deterministically
* maps to a distinct schema instance — so callers can pass it through
* by reference and trust the resulting `SqlStorage.namespaces` map to
* be value-stable for a given input set. Native-enum column type names are
* schema-qualified earlier, at column construction, via the target's
* `authoring.qualifyColumnType` hook (`postgresQualifyColumnType`), so this
* factory just materialises the namespace from already-qualified entries.
*/ function postgresCreateNamespace(input) {
    const schemaInput = {
        id: input.id,
        entries: {
            ...input.entries,
            table: input.entries["table"] ?? {}
        }
    };
    if (input.id === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__["UNBOUND_NAMESPACE_ID"]) return new PostgresUnboundSchema(schemaInput);
    return new PostgresSchema(schemaInput);
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-schema-BBWgs4fX-DWdYxNi8.mjs [app-route] (ecmascript) <export v as postgresCreateNamespace>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "postgresCreateNamespace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-schema-BBWgs4fX-DWdYxNi8.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-table-schema-node-OQRI_GIM-DhOVxH8-.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>offSearchPathText,
    "c",
    ()=>postgresNodeEntityKind,
    "i",
    ()=>PostgresTableSchemaNode,
    "l",
    ()=>searchPathFix,
    "n",
    ()=>PostgresNativeEnumSchemaNode,
    "o",
    ()=>postgresDiffSubjectEntityKind,
    "r",
    ()=>PostgresSchemaNodeKind,
    "s",
    ()=>postgresDiffSubjectGranularity,
    "t",
    ()=>PostgresExtensionSchemaNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/namespace-VUH2dgnS-By5y75h9.mjs [app-route] (ecmascript) <export i as freezeNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/assertions-Dw1lZz_Q.mjs [app-route] (ecmascript) <export n as invariant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__PrimaryKey$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-1ZKE0deC-Dou4ugcz.mjs [app-route] (ecmascript) <export t as PrimaryKey>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__SqlCheckConstraintIR$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-1ZKE0deC-Dou4ugcz.mjs [app-route] (ecmascript) <export r as SqlCheckConstraintIR>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__SqlColumnIR$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-1ZKE0deC-Dou4ugcz.mjs [app-route] (ecmascript) <export a as SqlColumnIR>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__SqlForeignKeyIR$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-1ZKE0deC-Dou4ugcz.mjs [app-route] (ecmascript) <export o as SqlForeignKeyIR>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__SqlIndexIR$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-1ZKE0deC-Dou4ugcz.mjs [app-route] (ecmascript) <export s as SqlIndexIR>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__SqlSchemaIRNode$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-1ZKE0deC-Dou4ugcz.mjs [app-route] (ecmascript) <export l as SqlSchemaIRNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__SqlUniqueIR$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-1ZKE0deC-Dou4ugcz.mjs [app-route] (ecmascript) <export d as SqlUniqueIR>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__assertNode$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-1ZKE0deC-Dou4ugcz.mjs [app-route] (ecmascript) <export f as assertNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__m__as__relationalNodeEntityKind$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-1ZKE0deC-Dou4ugcz.mjs [app-route] (ecmascript) <export m as relationalNodeEntityKind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__relationalNodeGranularity$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-1ZKE0deC-Dou4ugcz.mjs [app-route] (ecmascript) <export h as relationalNodeGranularity>");
;
;
;
;
//#region ../../../3-targets/postgres/1-target/dist/postgres-table-schema-node-OQRI_GIM.mjs
/**
* The `nodeKind` discriminant for each Postgres schema-diff node. Each node
* carries a unique value; the static `is`/`assert` guards compare against these
* identifiers rather than spelling the string inline or using `instanceof`. The
* field is an enumerable own property carried on every node instance.
*/ const PostgresSchemaNodeKind = {
    database: "postgres-database",
    namespace: "postgres-namespace",
    table: "postgres-table",
    policy: "postgres-policy",
    role: "postgres-role",
    nativeEnum: "postgres-native-enum",
    extension: "postgres-extension"
};
/**
* The one real map from a Postgres-specific `nodeKind` to the
* framework-neutral {@link DiffSubjectGranularity} its diff issues carry —
* resolution is by `nodeKind` equality against this map, never a
* `nodeKind`-suffix string match and never anything stamped on the node.
*/ const POSTGRES_NODE_GRANULARITY = {
    [PostgresSchemaNodeKind.database]: "structural",
    [PostgresSchemaNodeKind.namespace]: "namespace",
    [PostgresSchemaNodeKind.table]: "entity",
    [PostgresSchemaNodeKind.policy]: "structural",
    [PostgresSchemaNodeKind.role]: "structural",
    [PostgresSchemaNodeKind.nativeEnum]: "entity",
    [PostgresSchemaNodeKind.extension]: "entity"
};
function isPostgresSchemaNodeKind(nodeKind) {
    return Object.hasOwn(POSTGRES_NODE_GRANULARITY, nodeKind);
}
/** Looks up the subject granularity for a Postgres-specific `nodeKind`. */ function postgresNodeGranularity(nodeKind) {
    return POSTGRES_NODE_GRANULARITY[nodeKind];
}
/**
* The subject granularity for any node kind that appears in a Postgres diff
* tree — the tree mixes Postgres-specific kinds (database/namespace/table/
* policy/role) with the relational leaf kinds (columns, constraints, indexes,
* …), so this dispatches to whichever family/target map owns the kind. Called
* on demand by consumers (the family verdict, the framework aggregate's
* unclaimed-elements sweep, via the {@link
* import('@internal/framework-components/control').SchemaSubjectClassifierCapable}
* capability) — never stamped onto the issue or the node.
*/ function postgresDiffSubjectGranularity(nodeKind) {
    return isPostgresSchemaNodeKind(nodeKind) ? postgresNodeGranularity(nodeKind) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__h__as__relationalNodeGranularity$3e$__["relationalNodeGranularity"])(nodeKind);
}
/**
* The map from a Postgres-specific `nodeKind` to its storage `entityKind` — the
* same vocabulary the contract storage's `entries` dictionary keys use. The
* whole-table and native-enum kinds each have an entity of their own;
* database/namespace/policy/role nodes map to nothing here (a namespace is
* addressed by id, not by an `entries` kind; policies and roles are
* structural, never a sibling space's unclaimed entity).
*
* The native enum keys under its PHYSICAL type name in `entries.native_enum`
* (ADR 221), so its diff node's `typeName` addresses the entity on the generic
* coordinate directly — no by-type-name walk needed. This lets the framework's
* unclaimed-elements sweep classify enum ownership the same coordinate way it
* classifies tables.
*/ const POSTGRES_NODE_ENTITY_KIND = {
    [PostgresSchemaNodeKind.table]: "table",
    [PostgresSchemaNodeKind.nativeEnum]: "native_enum",
    [PostgresSchemaNodeKind.extension]: "extension"
};
/** Looks up the storage entityKind for a Postgres-specific `nodeKind`. */ function postgresNodeEntityKind(nodeKind) {
    return POSTGRES_NODE_ENTITY_KIND[nodeKind];
}
/**
* The storage `entityKind` for any node kind that appears in a Postgres diff
* tree — sibling of {@link postgresDiffSubjectGranularity}, dispatching the
* same way to whichever family/target map owns the kind. Called on demand by
* the framework aggregate's unclaimed-elements sweep via the {@link
* import('@internal/framework-components/control').SchemaSubjectClassifierCapable}
* capability — never stamped onto the issue or the node.
*/ function postgresDiffSubjectEntityKind(nodeKind) {
    return isPostgresSchemaNodeKind(nodeKind) ? postgresNodeEntityKind(nodeKind) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__m__as__relationalNodeEntityKind$3e$__["relationalNodeEntityKind"])(nodeKind);
}
/**
* Schema-diff node for a Postgres extension. An extension's name is unique in the whole database, so the node sits on the database root and pairs by name alone; its location is compared, so an extension in another schema is one mismatch rather than a missing and an extra extension. An extension the contract leaves to the search path matches an installed one in any schema on the installed node's search path, and any contract-side node, since only a connection decides where it is. An extension a contract declares in a schema never matches one an earlier contract left to the search path, because it may be in any schema on it: the planner moves it with a checked `ALTER EXTENSION … SET SCHEMA`, which the runner skips when it is already there.
*/ var PostgresExtensionSchemaNode = class PostgresExtensionSchemaNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__SqlSchemaIRNode$3e$__["SqlSchemaIRNode"] {
    nodeKind = PostgresSchemaNodeKind.extension;
    name;
    location;
    constructor(input){
        super();
        this.name = input.name;
        this.location = input.location.kind === "installed" ? Object.freeze({
            ...input.location,
            searchPath: Object.freeze([
                ...input.location.searchPath
            ])
        }) : Object.freeze({
            ...input.location
        });
        if (input.control !== void 0) this.control = input.control;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get id() {
        return this.name;
    }
    children() {
        return [];
    }
    isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        PostgresExtensionSchemaNode.assert(node);
        if (this.name !== node.name) return false;
        if (this.location.kind === "searchPath") return node.location.kind !== "installed" || isOnSearchPath(node.location);
        if (node.location.kind === "searchPath") return false;
        return this.location.schemaName === node.location.schemaName;
    }
    explainMismatch(actual) {
        if (actual === void 0) return void 0;
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(actual);
        if (!PostgresExtensionSchemaNode.is(node)) return void 0;
        if (this.location.kind === "searchPath") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(node.location.kind === "installed", "an extension left to the search path differs only from an installed extension");
            return {
                text: `extension "${this.name}" ${offSearchPathText(node.location)}. ${searchPathFix(node.location)}`,
                cause: "differs"
            };
        }
        if (node.location.kind === "searchPath") return {
            text: `extension "${this.name}" was left to the search path, so it may be in any schema on it, and the contract declares it in schema "${this.location.schemaName}"`,
            cause: "differs"
        };
        return {
            text: `extension "${this.name}" is installed in schema "${node.location.schemaName}", and the contract declares it in schema "${this.location.schemaName}"`,
            cause: "differs"
        };
    }
    static is(node) {
        return node.nodeKind === PostgresSchemaNodeKind.extension;
    }
    static assert(node) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__assertNode$3e$__["assertNode"])(node, "PostgresExtensionSchemaNode", PostgresExtensionSchemaNode.is);
    }
};
function isOnSearchPath(location) {
    return location.searchPath.includes(location.schemaName);
}
/** Names the schema an extension is installed in and the search path that does not include it. */ function offSearchPathText(location) {
    return `is installed in schema "${location.schemaName}", which is not on the search path (${location.searchPath.join(", ")})`;
}
/** What fixes an extension installed in a schema off the search path. */ function searchPathFix(location) {
    return `Add schema "${location.schemaName}" to the connection's search_path, or reinstall the extension in a schema on it.`;
}
/**
* Schema-diff leaf node for a native Postgres enum type.
*
* This is a derived, transient node walked by the differ — it is NEVER
* serialized. Both sides derive it on the namespace node: the expected side
* from the contract's hydrated `entries.native_enum` entities, the actual
* side from the adapter's introspected `nativeEnums`.
*
* Enum types are schema-scoped, so identity is (namespace, type name): the
* namespace coordinate comes from tree position (the differ pairs enum nodes
* only inside an already-paired namespace) and `id` carries the type name,
* prefixed with the entries-kind vocabulary (`native_enum:<typeName>`) so it
* cannot collide with a sibling table of the same name — the same
* sibling-prefix convention relational column nodes use (`column:<name>`).
*
* `isEqualTo` compares members POSITIONALLY — `['a','b'] ≠ ['b','a']` —
* because Postgres enum sort order is semantic. `control` is contract
* metadata, not database state, and does not participate in equality.
*/ var PostgresNativeEnumSchemaNode = class PostgresNativeEnumSchemaNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__SqlSchemaIRNode$3e$__["SqlSchemaIRNode"] {
    nodeKind = PostgresSchemaNodeKind.nativeEnum;
    typeName;
    namespaceId;
    members;
    constructor(input){
        super();
        this.typeName = input.typeName;
        this.namespaceId = input.namespaceId;
        this.members = Object.freeze([
            ...input.members
        ]);
        if (input.control !== void 0) this.control = input.control;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get id() {
        return `native_enum:${this.typeName}`;
    }
    children() {
        return [];
    }
    isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        PostgresNativeEnumSchemaNode.assert(node);
        return this.typeName === node.typeName && this.members.length === node.members.length && this.members.every((member, index)=>member === node.members[index]);
    }
    static is(node) {
        return node.nodeKind === PostgresSchemaNodeKind.nativeEnum;
    }
    static assert(node) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__assertNode$3e$__["assertNode"])(node, "PostgresNativeEnumSchemaNode", PostgresNativeEnumSchemaNode.is);
    }
};
/**
* Postgres-specific table schema-diff node. Carries all `SqlTableIR` fields
* plus `policies`, and implements `DiffableNode` so the table instance is
* directly the diff-tree node — no separate wrapper needed.
*
* Extends `SqlSchemaIRNode` directly rather than `SqlTableIR` because
* `SqlTableIR` calls `freezeNode` in its own constructor, which prevents
* subclass field initialisation.
*
* `id` is the table name. `isEqualTo` compares id + `rlsEnabled` — the
* table's one own diffable attribute; all other structural drift is
* expressed by its children. `children()` returns every column, the primary
* key (when present), every foreign key, unique, index, and check constraint,
* plus the policy nodes — one flat list, so a drifted column and a drifted
* policy are both reported by the same walk. Order is deterministic (object
* key order for columns, array order for the rest) so two structurally equal
* tables always produce the same child list.
*/ var PostgresTableSchemaNode = class PostgresTableSchemaNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__SqlSchemaIRNode$3e$__["SqlSchemaIRNode"] {
    nodeKind = PostgresSchemaNodeKind.table;
    name;
    columns;
    foreignKeys;
    uniques;
    indexes;
    policies;
    rlsEnabled;
    constructor(input){
        super();
        this.name = input.name;
        this.rlsEnabled = input.rlsEnabled;
        this.columns = Object.freeze(Object.fromEntries(Object.entries(input.columns).map(([key, col])=>[
                key,
                col instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__SqlColumnIR$3e$__["SqlColumnIR"] ? col : new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__SqlColumnIR$3e$__["SqlColumnIR"](col)
            ])));
        this.foreignKeys = Object.freeze(input.foreignKeys.map((fk)=>fk instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__SqlForeignKeyIR$3e$__["SqlForeignKeyIR"] ? fk : new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__SqlForeignKeyIR$3e$__["SqlForeignKeyIR"](fk)));
        this.uniques = Object.freeze(input.uniques.map((u)=>u instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__SqlUniqueIR$3e$__["SqlUniqueIR"] ? u : new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__SqlUniqueIR$3e$__["SqlUniqueIR"](u)));
        this.indexes = Object.freeze(input.indexes.map((i)=>i instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__SqlIndexIR$3e$__["SqlIndexIR"] ? i : new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__SqlIndexIR$3e$__["SqlIndexIR"](i)));
        if (input.primaryKey !== void 0) this.primaryKey = input.primaryKey instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__PrimaryKey$3e$__["PrimaryKey"] ? input.primaryKey : new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__PrimaryKey$3e$__["PrimaryKey"](input.primaryKey);
        if (input.annotations !== void 0) this.annotations = input.annotations;
        if (input.checks !== void 0 && input.checks.length > 0) this.checks = Object.freeze(input.checks.map((c)=>c instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__SqlCheckConstraintIR$3e$__["SqlCheckConstraintIR"] ? c : new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__SqlCheckConstraintIR$3e$__["SqlCheckConstraintIR"](c)));
        this.policies = Object.freeze([
            ...input.policies ?? []
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get id() {
        return this.name;
    }
    /**
	* Equal iff the ids (names) match AND `rlsEnabled` matches — the table's
	* one own attribute in the diff; all other structural drift is expressed
	* by children. A paired `not-equal` therefore always means enablement
	* drift, which the planner maps to ENABLE/DISABLE ROW LEVEL SECURITY.
	*/ isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        PostgresTableSchemaNode.assert(node);
        return this.id === node.id && this.rlsEnabled === node.rlsEnabled;
    }
    children() {
        return [
            ...Object.values(this.columns),
            ...this.primaryKey ? [
                this.primaryKey
            ] : [],
            ...this.foreignKeys,
            ...this.uniques,
            ...this.indexes,
            ...this.checks ?? [],
            ...this.policies
        ];
    }
    static is(node) {
        return node.nodeKind === PostgresSchemaNodeKind.table;
    }
    static assert(node) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$1ZKE0deC$2d$Dou4ugcz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__assertNode$3e$__["assertNode"])(node, "PostgresTableSchemaNode", PostgresTableSchemaNode.is);
    }
};
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/registry-Ctq7UGkA-_DnAcgYm.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>postgresCodecRegistry,
    "t",
    ()=>postgresCodecDescriptorRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$descriptor$2d$DBeD0UlS$2d$BfvrE$2d$KZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-descriptor-DBeD0UlS-BfvrE-KZ.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codecs-CV-_K-z0-DZc60ccR.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$codec$2d$descriptor$2d$registry$2d$UiFDvDj4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__buildCodecDescriptorRegistry$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/codec-descriptor-registry-UiFDvDj4.mjs [app-route] (ecmascript) <export t as buildCodecDescriptorRegistry>");
;
;
;
//#region ../../../3-targets/postgres/1-target/dist/registry-Ctq7UGkA.mjs
/**
* Registry of every codec descriptor shipped by `@internal/target-postgres`.
*
* Public consumer surface for the postgres codec set: the postgres adapter and any other consumer that needs to enumerate or look up a postgres codec by id consumes this rather than the raw descriptor array. See ADR 208.
*/ const postgresCodecRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$codec$2d$descriptor$2d$registry$2d$UiFDvDj4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__buildCodecDescriptorRegistry$3e$__["buildCodecDescriptorRegistry"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"]);
const postgresCodecDescriptorRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$descriptor$2d$DBeD0UlS$2d$BfvrE$2d$KZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"]);
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/runtime-y_2Hxv0c.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "t",
    ()=>postgresRuntimeDriverDescriptor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/session-settings-cHekxETj-CKXTmPoK.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$CB2NpcCs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__SqlQueryError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/dist-CB2NpcCs.mjs [app-route] (ecmascript) <export n as SqlQueryError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$suppress$2d$idle$2d$connection$2d$errors$2d$DzApeUb3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__suppressIdleConnectionErrors$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/suppress-idle-connection-errors-DzApeUb3.mjs [app-route] (ecmascript) <export t as suppressIdleConnectionErrors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$2d$cursor$2f$esm$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pg-cursor/esm/index.mjs [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
//#region ../../../3-targets/postgres/3-driver/dist/runtime.mjs
function driverError(code, message, details) {
    const error = new Error(message);
    Object.defineProperty(error, "name", {
        value: "RuntimeError",
        configurable: true
    });
    return details === void 0 ? Object.assign(error, {
        code,
        category: "DRIVER",
        severity: "error"
    }) : Object.assign(error, {
        code,
        category: "DRIVER",
        severity: "error",
        details
    });
}
function callbackToPromise(fn) {
    return new Promise((resolve, reject)=>{
        fn((err, result)=>{
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}
let nextNamedPortalId = 1;
/** Streaming cursor for a server-side named prepared statement. */ var NamedCursor = class extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$2d$cursor$2f$esm$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] {
    name;
    constructor(opts){
        super(opts.text, [
            ...opts.values
        ], opts.config);
        this.name = opts.name;
        this.submit = this.submitNamed;
    }
    submitNamed(connection) {
        const self = this;
        const conn = connection;
        self.state = "submitted";
        self.connection = conn;
        self._portal = `np_${nextNamedPortalId++}`;
        if (!conn.parsedStatements[this.name]) {
            const parseMessage = {
                text: self.text,
                name: this.name,
                types: []
            };
            conn.parse(parseMessage, true);
        }
        const bindMessage = {
            portal: self._portal,
            statement: this.name,
            values: self.values ?? []
        };
        conn.bind(bindMessage, true);
        conn.describe({
            type: "P",
            name: self._portal
        }, true);
        conn.flush();
        if (self._conf.types) self._result._getTypeParser = self._conf.types.getTypeParser;
        conn.once("noData", self._ifNoData);
        conn.once("rowDescription", self._rowDescription);
    }
};
const DEFAULT_BATCH_SIZE = 100;
const DEFAULT_PREPARED_STATEMENTS = true;
function createHandleAllocator() {
    let next = 1;
    return {
        mint: ()=>`pn_${next++}`
    };
}
function buildConnectionOptions(options) {
    return {
        ...options.cursor?.disabled ? {
            cursorDisabled: true
        } : {
            cursorBatchSize: options.cursor?.batchSize ?? DEFAULT_BATCH_SIZE,
            cursorDisabled: false
        },
        preparedStatementsEnabled: options.preparedStatements ?? DEFAULT_PREPARED_STATEMENTS,
        handleAllocator: createHandleAllocator()
    };
}
/** Reads the normalized error that runExecute and runQuery throw; a raw pg error is never stale. */ function isStalePreparedStatementError(error) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$CB2NpcCs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__SqlQueryError$3e$__["SqlQueryError"].is(error)) return false;
    const code = error.sqlState;
    return code === "26000" || code === "0A000";
}
var AsyncMutex = class {
    #queue = Promise.resolve();
    async lock() {
        const previous = this.#queue;
        let releaseLock;
        this.#queue = new Promise((resolve)=>{
            releaseLock = resolve;
        });
        await previous;
        return ()=>{
            releaseLock?.();
            releaseLock = void 0;
        };
    }
};
const clientQueryLocks = /* @__PURE__ */ new WeakMap();
function acquireClientQueryLock(client) {
    let mutex = clientQueryLocks.get(client);
    if (mutex === void 0) {
        mutex = new AsyncMutex();
        clientQueryLocks.set(client, mutex);
    }
    return mutex.lock();
}
var PostgresQueryable = class {
    options;
    constructor(options){
        this.options = options;
    }
    async *query(request) {
        const preparedStatementHandle = request.preparedStatementHandle;
        if (preparedStatementHandle === void 0 || !this.options.preparedStatementsEnabled) {
            yield* this.runQuery(request);
            return;
        }
        const name = this.preparedStatementName(preparedStatementHandle);
        yield* this.withStaleHandleStreamRetry(preparedStatementHandle, name, (name)=>this.runQuery(request, name));
    }
    async execute(request) {
        const preparedStatementHandle = request.preparedStatementHandle;
        if (preparedStatementHandle === void 0 || !this.options.preparedStatementsEnabled) return await this.runExecute(request);
        const name = this.preparedStatementName(preparedStatementHandle);
        return await this.withStaleHandleRetry(preparedStatementHandle, name, (name)=>this.runExecute(request, name));
    }
    preparedStatementName(handle) {
        const existingName = handle.get();
        if (typeof existingName === "string") return existingName;
        const mintedName = this.options.handleAllocator.mint();
        handle.set(mintedName);
        return mintedName;
    }
    async withStaleHandleRetry(preparedStatementHandle, name, attempt) {
        try {
            return await attempt(name);
        } catch (error) {
            if (!isStalePreparedStatementError(error)) throw error;
            const retryName = this.options.handleAllocator.mint();
            preparedStatementHandle.set(retryName);
            try {
                return await attempt(retryName);
            } catch (retryError) {
                throw prepareFailedError(retryError, retryName);
            }
        }
    }
    async *withStaleHandleStreamRetry(preparedStatementHandle, name, attempt) {
        const stream = await this.withStaleHandleRetry(preparedStatementHandle, name, async (name)=>{
            const iterator = attempt(name)[Symbol.asyncIterator]();
            return {
                iterator,
                first: await iterator.next()
            };
        });
        if (stream.first.done) return;
        let streamCompleted = false;
        try {
            yield stream.first.value;
            while(true){
                const next = await stream.iterator.next();
                if (next.done) {
                    streamCompleted = true;
                    return;
                }
                yield next.value;
            }
        } finally{
            if (!streamCompleted) await stream.iterator.return?.();
        }
    }
    async runExecute(request, name) {
        const client = await this.acquireClient();
        try {
            const releaseLock = await acquireClientQueryLock(client);
            try {
                return {
                    affectedRows: (await client.query({
                        name,
                        text: request.sql,
                        values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(request.params ?? [])
                    })).rowCount ?? 0
                };
            } finally{
                releaseLock();
            }
        } catch (error) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"])(client, error);
        } finally{
            await this.releaseClient(client);
        }
    }
    inExplicitTransaction() {
        return false;
    }
    async *runQuery(request, name) {
        const client = await this.acquireClient();
        let rows;
        try {
            if (!this.options.cursorDisabled) {
                const releaseLock = await acquireClientQueryLock(client);
                try {
                    for await (const row of this.streamWithPortalProtection(client, request, this.options.cursorBatchSize, name))yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(row);
                    return;
                } catch (cursorError) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(client) || !(cursorError instanceof Error) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(cursorError)) throw cursorError;
                } finally{
                    releaseLock();
                }
            }
            rows = await this.executeBuffered(client, request.sql, request.params, name);
        } catch (error) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"])(client, error);
        } finally{
            await this.releaseClient(client);
        }
        for (const row of rows)yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(row);
    }
    async explain(request) {
        const text = `EXPLAIN (FORMAT JSON) ${request.sql}`;
        const client = await this.acquireClient();
        try {
            const releaseLock = await acquireClientQueryLock(client);
            try {
                return {
                    rows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])((await client.query(text, request.params === void 0 ? void 0 : [
                        ...request.params
                    ]).catch(rethrowClientError(client))).rows)
                };
            } finally{
                releaseLock();
            }
        } finally{
            await this.releaseClient(client);
        }
    }
    async *streamWithPortalProtection(client, request, cursorBatchSize, name) {
        if (this.inExplicitTransaction()) {
            yield* this.executeWithCursor(client, request.sql, request.params, cursorBatchSize, name);
            return;
        }
        await client.query("BEGIN");
        let streamFailed = false;
        try {
            yield* this.executeWithCursor(client, request.sql, request.params, cursorBatchSize, name);
        } catch (error) {
            streamFailed = true;
            throw error;
        } finally{
            await this.commitStreamSpan(client, streamFailed);
        }
    }
    async commitStreamSpan(client, streamFailed) {
        try {
            await client.query("COMMIT");
        } catch (commitError) {
            if (!streamFailed) throw commitError;
        }
    }
    async *executeWithCursor(client, sql, params, cursorBatchSize, name) {
        const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(params ?? []);
        const config = {
            types: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["f"]
        };
        const cursor = client.query(name === void 0 ? new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$2d$cursor$2f$esm$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](sql, values, config) : new NamedCursor({
            name,
            text: sql,
            values,
            config
        }));
        try {
            while(true){
                const rows = await readCursor(cursor, cursorBatchSize);
                if (rows.length === 0) break;
                for (const row of rows)yield row;
            }
        } finally{
            await closeCursor(cursor);
        }
    }
    async executeBuffered(client, sql, params, name) {
        const config = {
            name,
            text: sql,
            values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(params ?? []),
            types: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["f"]
        };
        const releaseLock = await acquireClientQueryLock(client);
        let result;
        try {
            result = await client.query(config);
        } finally{
            releaseLock();
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(result.rows);
    }
};
var PostgresConnectionImpl = class extends PostgresQueryable {
    #connection;
    #onRelease;
    #onDestroy;
    #txState;
    constructor(connection, options, onRelease, onDestroy, txState){
        super(options);
        this.#connection = connection;
        this.#onRelease = onRelease;
        this.#onDestroy = onDestroy;
        this.#txState = txState ?? {
            open: false,
            unfinishedOnServer: false
        };
    }
    acquireClient() {
        return Promise.resolve(this.#connection);
    }
    releaseClient(_client) {
        return Promise.resolve();
    }
    inExplicitTransaction() {
        return this.#txState.open;
    }
    async beginTransaction() {
        const releaseLock = await acquireClientQueryLock(this.#connection);
        try {
            await this.#connection.query("BEGIN").catch(rethrowClientError(this.#connection));
        } finally{
            releaseLock();
        }
        this.#txState.open = true;
        this.#txState.unfinishedOnServer = true;
        return new PostgresTransactionImpl(this.#connection, this.options, ()=>{
            this.#txState.open = false;
        }, ()=>{
            this.#txState.unfinishedOnServer = false;
        });
    }
    async release() {
        const conn = this.#connection;
        if ("release" in conn) conn.release();
        const onRelease = this.#onRelease;
        this.#onRelease = void 0;
        this.#onDestroy = void 0;
        onRelease?.();
    }
    async destroy(reason) {
        const onDestroy = this.#onDestroy;
        const onRelease = this.#onRelease;
        this.#onDestroy = void 0;
        this.#onRelease = void 0;
        const conn = this.#connection;
        if ("release" in conn) {
            const releaseArg = reason instanceof Error ? reason : /* @__PURE__ */ new Error("Connection destroyed");
            conn.release(releaseArg);
        }
        if (onDestroy) await onDestroy(reason);
        else onRelease?.();
    }
};
var PostgresTransactionImpl = class extends PostgresQueryable {
    #connection;
    #onSettled;
    #onEnded;
    constructor(connection, options, onSettled, onEnded){
        super(options);
        this.#connection = connection;
        this.#onSettled = onSettled;
        this.#onEnded = onEnded;
    }
    acquireClient() {
        return Promise.resolve(this.#connection);
    }
    releaseClient(_client) {
        return Promise.resolve();
    }
    inExplicitTransaction() {
        return true;
    }
    #settle() {
        const onSettled = this.#onSettled;
        this.#onSettled = void 0;
        onSettled?.();
    }
    async commit() {
        const releaseLock = await acquireClientQueryLock(this.#connection);
        try {
            await this.#connection.query("COMMIT").catch(rethrowClientError(this.#connection));
            this.#onEnded();
        } finally{
            releaseLock();
            this.#settle();
        }
    }
    async rollback() {
        const releaseLock = await acquireClientQueryLock(this.#connection);
        try {
            await this.#connection.query("ROLLBACK").catch(rethrowClientError(this.#connection));
            this.#onEnded();
        } finally{
            releaseLock();
            this.#settle();
        }
    }
};
var PostgresPoolDriverImpl = class extends PostgresQueryable {
    pool;
    #sessionSettings;
    #ownedByDriver;
    #closed = false;
    constructor(options){
        super(buildConnectionOptions(options));
        this.pool = options.connect.pool;
        this.#sessionSettings = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"](options.sessionSettings ?? {}, this.pool);
        this.#ownedByDriver = options.connect.ownedByDriver;
    }
    get state() {
        return this.#closed ? "closed" : "connected";
    }
    async connect(_binding) {}
    async acquireConnection() {
        const client = await this.acquireClient();
        return new PostgresConnectionImpl(client, this.options, ()=>this.#sessionSettings.forget(client));
    }
    async close() {
        if (this.#closed) return;
        this.#closed = true;
        if (this.#ownedByDriver) await this.pool.end();
    }
    async acquireClient() {
        let pooled;
        try {
            pooled = await this.pool.connect();
        } catch (error) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])(error);
        }
        const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["p"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$suppress$2d$idle$2d$connection$2d$errors$2d$DzApeUb3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__suppressIdleConnectionErrors$3e$__["suppressIdleConnectionErrors"])(pooled));
        try {
            await ensureSessionSettings(this.#sessionSettings, client);
        } catch (error) {
            const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"])(client, error);
            client.release(true);
            throw normalized;
        }
        return client;
    }
    async releaseClient(client) {
        client.release();
    }
};
var PostgresDirectDriverImpl = class extends PostgresQueryable {
    directClient;
    #sessionSettings;
    #ownedByDriver;
    #connectionMutex = new AsyncMutex();
    #closed = false;
    #connected = false;
    #connectPromise;
    #connectFailure;
    #txState = {
        open: false,
        unfinishedOnServer: false
    };
    constructor(options){
        super(buildConnectionOptions(options));
        this.directClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["p"])(options.connect.client);
        this.#ownedByDriver = options.connect.ownedByDriver;
        this.#sessionSettings = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"](options.sessionSettings ?? {}, this.directClient);
    }
    inExplicitTransaction() {
        return this.#txState.open;
    }
    get state() {
        return this.#closed || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(this.directClient) ? "closed" : "connected";
    }
    async connect(_binding) {}
    async acquireConnection() {
        const releaseLease = await this.#connectionMutex.lock();
        try {
            const client = await this.acquireClient();
            return new PostgresConnectionImpl(client, this.options, ()=>{
                this.#sessionSettings.forget(client);
                releaseLease();
            }, async ()=>{
                try {
                    await this.#closeWhileHoldingLease({
                        waitForStatement: false
                    });
                } finally{
                    releaseLease();
                }
            }, this.#txState);
        } catch (error) {
            releaseLease();
            throw error;
        }
    }
    async close() {
        const releaseLease = await this.#connectionMutex.lock();
        try {
            await this.#closeWhileHoldingLease({
                waitForStatement: true
            });
        } finally{
            releaseLease();
        }
    }
    async #closeWhileHoldingLease(options) {
        if (this.#closed) return;
        this.#closed = true;
        if (!this.#ownedByDriver) {
            if (!options.waitForStatement) this.#giveUpSuppliedClient();
            return;
        }
        if (this.#connectFailure !== void 0) {
            this.directClient.end().catch(()=>void 0);
            return;
        }
        const releaseQueryLock = options.waitForStatement ? await acquireClientQueryLock(this.directClient) : ()=>{};
        try {
            await this.directClient.end();
        } finally{
            releaseQueryLock();
        }
        this.#connected = false;
    }
    #giveUpSuppliedClient() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"])(this.directClient);
        if (this.#txState.unfinishedOnServer) this.#rollbackUnderQueryLock().catch(()=>void 0);
    }
    async #rollbackUnderQueryLock() {
        const releaseLock = await acquireClientQueryLock(this.directClient);
        try {
            await this.directClient.query("ROLLBACK");
        } finally{
            releaseLock();
        }
    }
    async acquireClient() {
        if (this.#connectFailure !== void 0) throw this.#connectFailure;
        if (this.#closed || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(this.directClient)) throw driverError("DRIVER.NOT_CONNECTED", "Postgres connection lost or closed. Create a new client to reconnect.");
        if (!this.#connected) await this.#connectDirectClient();
        await ensureSessionSettings(this.#sessionSettings, this.directClient).catch(rethrowClientError(this.directClient));
        return this.directClient;
    }
    async #connectDirectClient() {
        if (this.#connectPromise === void 0) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"])(this.directClient)) {
                this.#connected = true;
                return;
            }
            this.#connectPromise = this.#connectClient();
        }
        await this.#connectPromise;
    }
    async #connectClient() {
        try {
            await this.directClient.connect();
        } catch (error) {
            this.#connectFailure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])(error);
            this.#connectPromise = void 0;
            throw this.#connectFailure;
        }
        this.#connected = true;
    }
    async releaseClient(_client) {}
};
function createBoundDriverFromBinding(binding, cursorOpts, extraOpts) {
    const preparedStatements = extraOpts?.preparedStatements;
    const sessionSettings = extraOpts?.sessionSettings;
    switch(binding.kind){
        case "url":
            return new PostgresPoolDriverImpl({
                connect: {
                    pool: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$suppress$2d$idle$2d$connection$2d$errors$2d$DzApeUb3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__suppressIdleConnectionErrors$3e$__["suppressIdleConnectionErrors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"])({
                        connectionString: binding.url,
                        connectionTimeoutMillis: 2e4,
                        idleTimeoutMillis: 3e4
                    }, sessionSettings ?? {})),
                    ownedByDriver: true
                },
                cursor: cursorOpts,
                preparedStatements,
                sessionSettings
            });
        case "pgPool":
            return new PostgresPoolDriverImpl({
                connect: {
                    pool: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$suppress$2d$idle$2d$connection$2d$errors$2d$DzApeUb3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__suppressIdleConnectionErrors$3e$__["suppressIdleConnectionErrors"])(binding.pool),
                    ownedByDriver: binding.ownedByDriver
                },
                cursor: cursorOpts,
                preparedStatements,
                sessionSettings
            });
        case "pgClient":
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(binding.client)) throw driverError("DRIVER.NOT_CONNECTED", "This pg client lost its connection or was given up by an earlier driver. Create a new client to reconnect.");
            return new PostgresDirectDriverImpl({
                connect: {
                    client: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$suppress$2d$idle$2d$connection$2d$errors$2d$DzApeUb3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__suppressIdleConnectionErrors$3e$__["suppressIdleConnectionErrors"])(binding.client),
                    ownedByDriver: binding.ownedByDriver
                },
                cursor: cursorOpts,
                preparedStatements,
                sessionSettings
            });
    }
}
/** Ensures the session settings on a client the driver is about to use, holding the client's query lock while it does. */ async function ensureSessionSettings(guard, client) {
    if (!guard.needs(client)) return;
    const releaseLock = await acquireClientQueryLock(client);
    try {
        await guard.ensure(client);
    } finally{
        releaseLock();
    }
}
function readCursor(cursor, size) {
    return callbackToPromise((cb)=>{
        cursor.read(size, (err, rows)=>cb(err, rows));
    });
}
function closeCursor(cursor) {
    return callbackToPromise((cb)=>cursor.close(cb));
}
function rethrowClientError(client) {
    return (error)=>{
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"])(client, error);
    };
}
function prepareFailedError(retryError, handle) {
    const cause = retryError instanceof Error ? retryError : new Error(String(retryError));
    return Object.assign(driverError("DRIVER.PREPARE_FAILED", `Prepared statement failed again after re-preparing with a fresh handle: ${cause.message}`, {
        handle
    }), {
        cause
    });
}
const USE_BEFORE_CONNECT_MESSAGE = "Postgres driver not connected. Call connect(binding) before acquireConnection or execute.";
const CLOSED_MESSAGE = "Postgres driver is closed. Call connect(binding) to reconnect.";
const CONNECTION_LOST_MESSAGE = "Postgres connection lost or closed. Call connect(binding) to reconnect.";
const ALREADY_CONNECTED_MESSAGE = "Postgres driver already connected. Call close() before reconnecting with a new binding.";
function unboundQuery(notConnected) {
    return {
        [Symbol.asyncIterator] () {
            return {
                async next () {
                    throw notConnected();
                }
            };
        }
    };
}
const notConnectedMessages = {
    unbound: USE_BEFORE_CONNECT_MESSAGE,
    closed: CLOSED_MESSAGE,
    connectionLost: CONNECTION_LOST_MESSAGE
};
var PostgresUnboundDriverImpl = class {
    familyId = "sql";
    targetId = "postgres";
    #delegate = null;
    #disconnectedState = "unbound";
    #cursorOpts;
    #preparedStatements;
    #sessionSettings;
    constructor(options){
        this.#cursorOpts = options?.cursor;
        this.#preparedStatements = options?.preparedStatements;
        this.#sessionSettings = options?.sessionSettings;
    }
    get state() {
        if (this.#delegate !== null) return "connected";
        return this.#disconnectedState === "unbound" ? "unbound" : "closed";
    }
    #notConnectedError() {
        return driverError("DRIVER.NOT_CONNECTED", notConnectedMessages[this.#disconnectedState]);
    }
    #requireDelegate() {
        const delegate = this.#delegate;
        if (delegate === null) throw this.#notConnectedError();
        return delegate;
    }
    async connect(binding) {
        if (this.#delegate !== null) throw driverError("DRIVER.ALREADY_CONNECTED", ALREADY_CONNECTED_MESSAGE, {
            bindingKind: binding.kind
        });
        this.#delegate = createBoundDriverFromBinding(binding, this.#cursorOpts, {
            preparedStatements: this.#preparedStatements,
            sessionSettings: this.#sessionSettings
        });
        this.#disconnectedState = "unbound";
    }
    async acquireConnection() {
        const delegate = this.#requireDelegate();
        const connection = await delegate.acquireConnection();
        return this.#wrapConnection(connection, delegate);
    }
    /**
	* Wraps an acquired connection so that teardown paths which close the
	* underlying delegate (notably `destroy()` on a pgClient binding, where
	* the single socket means a destroyed connection invalidates the driver)
	* also reset our own `#delegate` reference. Without this, a failed
	* transaction rollback would leave the outer unbound wrapper reporting
	* `connected` while routing subsequent work to an already-ended delegate.
	*/ #wrapConnection(connection, delegate) {
        const syncDelegateState = ()=>{
            if (this.#delegate === delegate && delegate.state === "closed") {
                this.#delegate = null;
                this.#disconnectedState = "connectionLost";
            }
        };
        const wrapped = {
            beginTransaction: connection.beginTransaction.bind(connection),
            query: connection.query.bind(connection),
            execute: connection.execute.bind(connection),
            release: async ()=>{
                try {
                    await connection.release();
                } finally{
                    syncDelegateState();
                }
            },
            destroy: async (reason)=>{
                try {
                    await connection.destroy(reason);
                } finally{
                    syncDelegateState();
                }
            }
        };
        if (connection.explain) wrapped.explain = connection.explain.bind(connection);
        return wrapped;
    }
    async close() {
        const delegate = this.#delegate;
        this.#delegate = null;
        this.#disconnectedState = "closed";
        await delegate?.close();
    }
    query(request) {
        const delegate = this.#delegate;
        return delegate === null ? unboundQuery(()=>this.#notConnectedError()) : delegate.query(request);
    }
    async execute(request) {
        return this.#requireDelegate().execute(request);
    }
    async explain(request) {
        const delegate = this.#requireDelegate();
        const explain = delegate.explain;
        if (explain === void 0) throw driverError("DRIVER.NOT_CONNECTED", USE_BEFORE_CONNECT_MESSAGE);
        return explain.call(delegate, request);
    }
};
const postgresRuntimeDriverDescriptor = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["d"],
    create (options, sessionSettings) {
        return new PostgresUnboundDriverImpl({
            ...options,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("sessionSettings", sessionSettings)
        });
    }
};
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/runtime-y_2Hxv0c.mjs [app-route] (ecmascript) <locals> <export t as default>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$runtime$2d$y_2Hxv0c$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$runtime$2d$y_2Hxv0c$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/runtime-y_2Hxv0c.mjs [app-route] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$runtime$2d$y_2Hxv0c$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$runtime$2d$y_2Hxv0c$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/session-settings-cHekxETj-CKXTmPoK.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "a",
    ()=>hasLostConnection,
    "c",
    ()=>markClientAbandoned,
    "d",
    ()=>postgresDriverDescriptorMeta,
    "f",
    ()=>serverTextTypes,
    "i",
    ()=>createPgPool,
    "l",
    ()=>normalizePgClientError,
    "n",
    ()=>controlTextTypes,
    "o",
    ()=>hasStartedConnecting,
    "p",
    ()=>watchClientLoss,
    "r",
    ()=>createPgClient,
    "s",
    ()=>isPostgresError,
    "t",
    ()=>SessionSettingsGuard,
    "u",
    ()=>normalizePgConnectFailure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$CB2NpcCs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SqlConnectionError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/dist-CB2NpcCs.mjs [app-route] (ecmascript) <export t as SqlConnectionError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$CB2NpcCs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__SqlQueryError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/dist-CB2NpcCs.mjs [app-route] (ecmascript) <export n as SqlQueryError>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/newServer/notesphere_server/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$2d$connection$2d$string$2f$esm$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pg-connection-string/esm/index.mjs [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
//#region ../../../3-targets/postgres/3-driver/dist/session-settings-cHekxETj.mjs
const postgresDriverDescriptorMeta = {
    kind: "driver",
    familyId: "sql",
    targetId: "postgres",
    id: "postgres",
    version: "0.0.1",
    capabilities: {}
};
const watchedClients = /* @__PURE__ */ new WeakSet();
const lostClients = /* @__PURE__ */ new WeakSet();
/**
* Records when a pg client emits `error` or `end`. pg emits both before the failed query's
* promise rejects, so a caller handling that rejection already sees the loss.
*/ function watchClientLoss(client) {
    if (!watchedClients.has(client)) {
        watchedClients.add(client);
        const markLost = ()=>lostClients.add(client);
        client.on("error", markLost);
        client.on("end", markLost);
    }
    return client;
}
/**
* Whether a client can no longer run queries: it emitted `error` or `end` while watched, a driver
* gave up on it, or pg's own state says it was ended or broke before the driver saw it.
*/ function hasLostConnection(client) {
    return lostClients.has(client) || hasEndedOrBroken(client);
}
/** Records that a driver gave up on a client it does not own, so no driver uses it again. */ function markClientAbandoned(client) {
    lostClients.add(client);
}
/** Whether a pg `Client` has connected or begun connecting. */ function hasStartedConnecting(client) {
    return "_connected" in client && client._connected === true || "_connecting" in client && client._connecting === true;
}
/** Whether a pg client was ended (`end()` was called) or broke (`error` made it unqueryable). */ function hasEndedOrBroken(client) {
    return "_ending" in client && client._ending === true || "_queryable" in client && client._queryable === false;
}
const NODE_CONNECTION_CODES = /* @__PURE__ */ new Map([
    [
        "ECONNRESET",
        true
    ],
    [
        "ETIMEDOUT",
        true
    ],
    [
        "EPIPE",
        true
    ],
    [
        "EAI_AGAIN",
        true
    ],
    [
        "ECONNREFUSED",
        false
    ],
    [
        "ENOTFOUND",
        false
    ],
    [
        "EHOSTUNREACH",
        false
    ]
]);
const TRANSIENT_CLASS_08_SQLSTATES = /* @__PURE__ */ new Set([
    "08000",
    "08001",
    "08003",
    "08006"
]);
/**
* SQLSTATEs outside class 08 that mean the server ended the session, and whether a retry on a
* fresh connection can succeed. It cannot after 57P04, whose database is gone, nor after 25P03,
* which ends a session inside an open transaction.
*/ const SESSION_ENDED_SQLSTATES = /* @__PURE__ */ new Map([
    [
        "57P01",
        true
    ],
    [
        "57P02",
        true
    ],
    [
        "57P03",
        true
    ],
    [
        "57P04",
        false
    ],
    [
        "57P05",
        true
    ],
    [
        "25P03",
        false
    ]
]);
/** Whether a retry can succeed, for a SQLSTATE that means the connection failed; undefined for any other. */ function connectionSqlStateTransience(sqlState) {
    if (sqlState.startsWith("08")) return TRANSIENT_CLASS_08_SQLSTATES.has(sqlState);
    return SESSION_ENDED_SQLSTATES.get(sqlState);
}
/**
* PostgreSQL-specific error properties that indicate an error originated from pg library.
* These properties are not present on Node.js system errors.
* Excludes generic properties like 'detail', 'file', 'line', and 'position' that could appear on any error.
*/ const PG_ERROR_PROPERTIES = [
    "constraint",
    "table",
    "column",
    "hint",
    "internalPosition",
    "internalQuery",
    "where",
    "schema",
    "routine"
];
/**
* Type predicate to check if an error is a Postgres error from the pg library.
*
* Distinguishes pg library errors from Node.js system errors by checking for:
* - SQLSTATE codes (5-character alphanumeric codes like '23505', '42601')
* - pg-specific properties (constraint, table, column, hint, etc.) that Node.js errors don't have
*
* Node.js system errors (ECONNREFUSED, ETIMEDOUT, etc.) are excluded to prevent false positives.
*/ function isPostgresError(error) {
    if (!(error instanceof Error)) return false;
    const pgError = error;
    if (pgError.code && isPostgresSqlState(pgError.code)) return true;
    return PG_ERROR_PROPERTIES.some((prop)=>pgError[prop] !== void 0);
}
/**
* Checks if an error code is a Postgres SQLSTATE (5-character alphanumeric code).
* SQLSTATE codes are standardized SQL error codes (e.g., '23505' for unique violation).
*/ function isPostgresSqlState(code) {
    if (!code) return false;
    return /^[A-Z0-9]{5}$/.test(code);
}
/**
* Normalizes a Postgres error into a SQL-shared error type, from its code alone.
*
* - Connection SQLSTATEs (class `08`, and those that end the session) and Node socket codes → SqlConnectionError
* - Other SQLSTATEs → SqlQueryError
* - Errors already normalized, and errors without a recognized code → returned as-is
*
* pg raises some connection failures ("Connection terminated", "timeout expired") as plain
* errors with no code; {@link normalizePgConnectFailure} classifies those where the caller
* knows the connection failed.
*/ function normalizePgErrorByCode(error) {
    if (!(error instanceof Error)) return new Error(String(error));
    if (__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$CB2NpcCs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__SqlQueryError$3e$__["SqlQueryError"].is(error) || __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$CB2NpcCs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SqlConnectionError$3e$__["SqlConnectionError"].is(error)) return error;
    const pgError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(error);
    const code = pgError.code;
    if (code === void 0) return error;
    const transient = NODE_CONNECTION_CODES.get(code);
    if (transient !== void 0) return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$CB2NpcCs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SqlConnectionError$3e$__["SqlConnectionError"](error.message, {
        cause: error,
        transient
    });
    if (isPostgresSqlState(code)) {
        const connectionTransience = connectionSqlStateTransience(code);
        if (connectionTransience !== void 0) return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$CB2NpcCs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SqlConnectionError$3e$__["SqlConnectionError"](error.message, {
            cause: error,
            transient: connectionTransience,
            sqlState: code
        });
        return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$CB2NpcCs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__SqlQueryError$3e$__["SqlQueryError"](error.message, {
            cause: error,
            sqlState: code,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("constraint", pgError.constraint),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("table", pgError.table),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("column", pgError.column),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("detail", pgError.detail)
        });
    }
    return error;
}
/**
* Normalizes an error the caller knows is a connection failure: it came from a `connect()`
* call, or arrived after the client emitted `error` or `end`. Errors with a SQLSTATE keep
* their code-based classification; everything else becomes a SqlConnectionError.
*/ function normalizePgConnectFailure(error) {
    const normalized = normalizePgErrorByCode(error);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$CB2NpcCs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__SqlQueryError$3e$__["SqlQueryError"].is(normalized) || __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$CB2NpcCs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SqlConnectionError$3e$__["SqlConnectionError"].is(normalized)) return normalized;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$CB2NpcCs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__SqlConnectionError$3e$__["SqlConnectionError"](normalized.message, {
        cause: normalized
    });
}
/**
* Normalizes an error from a query on `client`. pg raises the failures of a dead connection
* ("Connection terminated", "not queryable") with no code, so once the client has emitted
* `error` or `end` its errors are connection errors.
*/ function normalizePgClientError(client, error) {
    return hasLostConnection(client) ? normalizePgConnectFailure(error) : normalizePgErrorByCode(error);
}
const PG_TYPES_ARRAY_OIDS = /* @__PURE__ */ new Set([
    651,
    791,
    199,
    1e3,
    1001,
    1005,
    1007,
    1008,
    1009,
    1014,
    1015,
    1016,
    1017,
    1021,
    1022,
    1028,
    1040,
    1041,
    1115,
    1182,
    1183,
    1185,
    1187,
    1231,
    1270,
    2951,
    3807,
    3907
]);
function pgTypeParser(oid, format) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$29$__["types"].getTypeParser)(oid, format);
}
function serverText(value) {
    return value;
}
const serverTextTypes = {
    getTypeParser: ()=>serverText
};
const controlTextTypes = {
    getTypeParser (oid, format) {
        return PG_TYPES_ARRAY_OIDS.has(oid) ? serverText : pgTypeParser(oid, format);
    }
};
/** The settings pg's `ConnectionParameters` reads from a parsed connection string, except `binary`, which a pg client also applies to every query when it is in the client's own settings. Any other query parameter is not a connection setting, and pg ignores it in a connection string. */ const CONNECTION_SETTINGS = [
    "user",
    "password",
    "host",
    "port",
    "database",
    "options",
    "ssl",
    "sslnegotiation",
    "client_encoding",
    "replication",
    "application_name",
    "fallback_application_name",
    "statement_timeout",
    "lock_timeout",
    "idle_in_transaction_session_timeout",
    "query_timeout"
];
function startupOptions(sessionSettings) {
    return Object.entries(sessionSettings).map(([name, value])=>`-c ${name}=${value.replace(/[\\ ]/g, "\\$&")}`).join(" ");
}
/**
* The pg settings of a connection that starts with `sessionSettings`: the connection settings `config` gives, its connection string read as pg reads it, and each session setting as a startup option after the options the connection string gives, or else after `PGOPTIONS`, which is where pg reads them from. A startup option sets the session's default, so `RESET ALL` keeps it.
*/ function pgConnectionConfig(config, sessionSettings) {
    const { connectionString, ...rest } = config;
    const merged = {
        ...rest
    };
    if (connectionString !== void 0) {
        const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$2d$connection$2d$string$2f$esm$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parse"])(connectionString);
        for (const setting of CONNECTION_SETTINGS){
            const value = Reflect.get(parsed, setting);
            if (value !== void 0) Object.assign(merged, {
                [setting]: value
            });
        }
    }
    const startup = startupOptions(sessionSettings);
    if (startup === "") return merged;
    const given = merged.options || process.env["PGOPTIONS"];
    merged.options = given ? `${given} ${startup}` : startup;
    return merged;
}
/** The pools and clients made by `createPgPool` and `createPgClient`, with the settings their sessions start with. */ const startupSettingsOf = /* @__PURE__ */ new WeakMap();
/** A pg client class whose every client starts its session with `sessionSettings`. It reads its connection string, and `PGOPTIONS`, when each client is made, as pg does. */ function clientClassStartingWith(sessionSettings) {
    return class SessionSettingsClient extends __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$29$__["Client"] {
        constructor(config){
            super(pgConnectionConfig({
                ...config
            }, sessionSettings));
        }
    };
}
/** A pg pool whose connections start their sessions with `sessionSettings`. */ function createPgPool(config, sessionSettings) {
    const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$29$__["Pool"]({
        ...config,
        Client: clientClassStartingWith(sessionSettings)
    });
    startupSettingsOf.set(pool, sessionSettings);
    return pool;
}
/** A pg client whose session starts with `sessionSettings`. */ function createPgClient(config, sessionSettings) {
    const client = new (clientClassStartingWith(sessionSettings))(config);
    startupSettingsOf.set(client, sessionSettings);
    return client;
}
function startsWith(poolOrClient, sessionSettings) {
    const atStartup = startupSettingsOf.get(poolOrClient);
    return atStartup !== void 0 && Object.entries(sessionSettings).every(([name, value])=>atStartup[name] === value);
}
/**
* Ensures the session settings a target declares on each pg client a driver uses from `poolOrClient`. A pool or client made by `createPgPool` or `createPgClient` with the settings needs nothing, because each session starts with them and `RESET ALL` keeps a startup setting. On any other, each client is set once, and again after it was handed out for exclusive use, whose holder may have changed or reset its session.
*/ var SessionSettingsGuard = class {
    #entries;
    #ensured = /* @__PURE__ */ new WeakSet();
    constructor(sessionSettings, poolOrClient){
        this.#entries = startsWith(poolOrClient, sessionSettings) ? [] : Object.entries(sessionSettings);
    }
    needs(client) {
        return this.#entries.length > 0 && !this.#ensured.has(client);
    }
    /** Sets the settings on a client that {@link SessionSettingsGuard.needs} them. */ async ensure(client) {
        const calls = this.#entries.map((_, index)=>`set_config($${index * 2 + 1}, $${index * 2 + 2}, false)`);
        await client.query(`SELECT ${calls.join(", ")}`, this.#entries.flat());
        this.#ensured.add(client);
    }
    /** Marks a client returned from exclusive use, so its settings are ensured again before the driver next uses it. */ forget(client) {
        this.#ensured.delete(client);
    }
};
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/session-settings-cHekxETj-CKXTmPoK.mjs [app-route] (ecmascript) <export i as createPgPool>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "createPgPool",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/session-settings-cHekxETj-CKXTmPoK.mjs [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/session-settings-cHekxETj-CKXTmPoK.mjs [app-route] (ecmascript) <export r as createPgClient>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "createPgClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/session-settings-cHekxETj-CKXTmPoK.mjs [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/sql-renderer-DrSed-6w-Bt8Hx2pU.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>renderLoweredSql,
    "t",
    ()=>adapterError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/sql-utils-VXrIh8dJ-DVxo_Ygp.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/data-types-B47LbZ3z-DRVqjvQZ.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__LiteralExpr$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/types-BkTuhW3Z-BJfTjcxS.mjs [app-route] (ecmascript) <export C as LiteralExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$util$2d$DixeJBri$2d$Cad7x5ec$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__collectOrderedParamRefs$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/util-DixeJBri-Cad7x5ec.mjs [app-route] (ecmascript) <export t as collectOrderedParamRefs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__T__as__lockOptionCapabilities$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/ast-C3itulLi.mjs [app-route] (ecmascript) <export T as lockOptionCapabilities>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__E__as__lockStrengthCapabilities$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/ast-C3itulLi.mjs [app-route] (ecmascript) <export E as lockStrengthCapabilities>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__O__as__missingCapability$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/ast-C3itulLi.mjs [app-route] (ecmascript) <export O as missingCapability>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__dataTypeParams$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/data-type-V6mcDhcG-DVQAPOQT.mjs [app-route] (ecmascript) <export d as dataTypeParams>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-route] (ecmascript) <export o as structuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export t as InternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__assertNever$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export n as assertNever>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__nameIsCatalogText$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/sql-data-type-LVBldu1a-Bq203xWX.mjs [app-route] (ecmascript) <export r as nameIsCatalogText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__sqlBaseName$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/sql-data-type-LVBldu1a-Bq203xWX.mjs [app-route] (ecmascript) <export l as sqlBaseName>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__sqlDataTypeOfCodec$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/sql-data-type-LVBldu1a-Bq203xWX.mjs [app-route] (ecmascript) <export p as sqlDataTypeOfCodec>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2d$DWEzdhIx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/is-plain-record-CUofyVQ7-DWEzdhIx.mjs [app-route] (ecmascript) <export t as isPlainRecord>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/runtime-error-BA9d7XjZ-BlT8t6LB.mjs [app-route] (ecmascript) <export n as runtimeError>");
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
//#region ../../../3-targets/postgres/2-adapter/dist/sql-renderer-DrSed-6w.mjs
function adapterError(code, message, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])(code, message, options);
}
/**
* Data types whose unknown-OID parameter inference is reliable in arbitrary expression positions. A parameter whose codec represents one of these is emitted as plain `$N`; everything else (including `pg/json`, `pg/jsonb`, extension types like `pgvector/vector`, and enums) is emitted as `$N::<base name>` so the planner picks an unambiguous overload.
*
* `pg/json` / `pg/jsonb` are intentionally excluded: their operator overloads make context inference unreliable in expression positions (e.g. `$1 -> 'key'` is ambiguous between the two).
*/ const POSTGRES_INFERRABLE_DATA_TYPES = /* @__PURE__ */ new Set([
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["T"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["E"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["D"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["S"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["F"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["f"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["g"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Q"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["U"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["G"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["V"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["O"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"].id,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Z"].id
]);
/**
* Data types whose parameter PostgreSQL first reads as another type, because their own input function depends on a session setting. `money` input reads the decimal point and thousands separator of `lc_monetary`, so `12.50` is 1250.00 under `de_DE`; converting `numeric` to `money` reads no separators.
*/ const POSTGRES_PARAMETER_READ_AS = /* @__PURE__ */ new Map([
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["N"].id,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__sqlBaseName$3e$__["sqlBaseName"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$data$2d$types$2d$B47LbZ3z$2d$DRVqjvQZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["F"], {})
    ]
]);
/**
* A parameter's cast names its data type's base name, which leaves out its parameters: an explicit
* cast to `varchar(n)` truncates and to `numeric(p,s)` rounds. A data type whose name is its catalog
* text has no base name, so its parameter is never cast, in any position, and the column's own input
* function reads the value.
*/ function renderTypedParam(index, codecId, types, many, typeParams, forceCast = false) {
    if (codecId === void 0) return `$${index}`;
    if (types.codecDescriptorRegistry.descriptorFor(codecId) === void 0) throw adapterError("RUNTIME.PARAM_REF_MISSING_CODEC", `Postgres lowering: ParamRef carries codecId "${codecId}" but the validated PostgreSQL codec registry has no entry for it. This usually indicates a missing extension pack in the runtime stack — register the pack that contributes this codec (e.g. \`extensions: [pgvectorRuntime]\`), or use the codec directly from \`@internal/target-postgres/codecs\` if it's a builtin.`, {
        meta: {
            codecId
        }
    });
    const dataType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__sqlDataTypeOfCodec$3e$__["sqlDataTypeOfCodec"])(codecId, {
        codecLookup: types.codecDescriptorRegistry,
        dataTypeLookup: types.dataTypeLookup
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__nameIsCatalogText$3e$__["nameIsCatalogText"])(dataType)) return `$${index}`;
    const arraySuffix = many ? "[]" : "";
    if (forceCast || !POSTGRES_INFERRABLE_DATA_TYPES.has(dataType.id) || many) {
        const baseName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$data$2d$type$2d$LVBldu1a$2d$Bq203xWX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__sqlBaseName$3e$__["sqlBaseName"])(dataType, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$data$2d$type$2d$V6mcDhcG$2d$DVQAPOQT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__dataTypeParams$3e$__["dataTypeParams"])(dataType, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2d$DWEzdhIx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(typeParams) ? typeParams : void 0));
        const readAs = POSTGRES_PARAMETER_READ_AS.get(dataType.id);
        return `$${index}${readAs === void 0 ? "" : `::${readAs}${arraySuffix}`}::${baseName}${arraySuffix}`;
    }
    return `$${index}`;
}
function unreachableKind(value) {
    const candidate = value;
    if (typeof candidate === "object" && candidate !== null && "kind" in candidate && typeof candidate.kind === "string") return candidate.kind;
    return "unknown";
}
/**
* Render a SQL query AST to a Postgres-flavored `{ sql, params }` payload.
*
* Shared between the runtime (`PostgresAdapterImpl.lower`) and control (`PostgresControlAdapter.lower`) entrypoints so emit-time and run-time paths produce byte-identical output for the same AST.
*/ function renderLoweredSql(ast, contract, codecDescriptorRegistry, dataTypeLookup, capabilities) {
    const orderedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$util$2d$DixeJBri$2d$Cad7x5ec$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__collectOrderedParamRefs$3e$__["collectOrderedParamRefs"])(ast);
    const indexMap = /* @__PURE__ */ new Map();
    const params = orderedRefs.map((ref, i)=>{
        indexMap.set(ref, i + 1);
        return ref.kind === "prepared-param-ref" ? {
            kind: "bind",
            name: ref.name
        } : {
            kind: "literal",
            value: ref.value
        };
    });
    const pim = {
        indexMap,
        types: {
            codecDescriptorRegistry,
            dataTypeLookup
        },
        capabilities
    };
    const node = ast;
    let sql;
    switch(node.kind){
        case "select":
            sql = renderSelect(node, contract, pim);
            break;
        case "insert":
            sql = renderInsert(node, contract, pim);
            break;
        case "update":
            sql = renderUpdate(node, contract, pim);
            break;
        case "delete":
            sql = renderDelete(node, contract, pim);
            break;
        case "raw-query":
            sql = renderParts(node.parts, contract, pim);
            break;
        // v8 ignore next 4
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__assertNever$3e$__["assertNever"])(node, `Unsupported AST node kind: ${unreachableKind(node)}`);
    }
    return Object.freeze({
        sql,
        params: Object.freeze(params)
    });
}
function renderLimitOffset(keyword, value, contract, pim) {
    if (value === void 0) return "";
    if (typeof value === "number") return `${keyword} ${value}`;
    return `${keyword} ${renderExpr(value, contract, pim)}`;
}
function renderSelect(ast, contract, pim) {
    return [
        `SELECT ${renderDistinctPrefix(ast.distinct, ast.distinctOn, contract, pim)}${renderProjection(ast.projection, contract, pim)}`,
        ast.from !== void 0 ? `FROM ${renderSource(ast.from, contract, pim)}` : "",
        ast.joins?.length ? ast.joins.map((join)=>renderJoin(join, contract, pim)).join(" ") : "",
        ast.where ? `WHERE ${renderWhere(ast.where, contract, pim)}` : "",
        ast.groupBy?.length ? `GROUP BY ${ast.groupBy.map((expr)=>renderExpr(expr, contract, pim)).join(", ")}` : "",
        ast.having ? `HAVING ${renderWhere(ast.having, contract, pim)}` : "",
        ast.orderBy?.length ? `ORDER BY ${renderOrderByItems(ast.orderBy, contract, pim)}` : "",
        renderLimitOffset("LIMIT", ast.limit, contract, pim),
        renderLimitOffset("OFFSET", ast.offset, contract, pim),
        (ast.locking ?? []).map((clause)=>renderLockingClause(clause, pim.capabilities)).join(" ")
    ].filter((part)=>part.length > 0).join(" ").trim();
}
function lockStrengthKeyword(strength) {
    switch(strength){
        case "forUpdate":
            return "FOR UPDATE";
        case "forNoKeyUpdate":
            return "FOR NO KEY UPDATE";
        case "forShare":
            return "FOR SHARE";
        case "forKeyShare":
            return "FOR KEY SHARE";
        default:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__assertNever$3e$__["assertNever"])(strength, `Unsupported lock strength: ${String(strength)}`);
    }
}
function lockWaitPolicyKeyword(waitPolicy) {
    switch(waitPolicy){
        case "nowait":
            return "NOWAIT";
        case "skipLocked":
            return "SKIP LOCKED";
        default:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__assertNever$3e$__["assertNever"])(waitPolicy, `Unsupported lock wait policy: ${String(waitPolicy)}`);
    }
}
function requireCapability(capabilities, requirement) {
    const capability = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__O__as__missingCapability$3e$__["missingCapability"])(capabilities, requirement);
    if (capability !== void 0) throw adapterError("RUNTIME.AST_UNSUPPORTED", `Postgres adapter does not report capability ${capability}, which this locking clause needs`, {
        meta: {
            target: "postgres",
            feature: "locking-clause",
            capability
        }
    });
}
function renderLockingClause(clause, capabilities) {
    requireCapability(capabilities, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__E__as__lockStrengthCapabilities$3e$__["lockStrengthCapabilities"][clause.strength]);
    const parts = [
        lockStrengthKeyword(clause.strength)
    ];
    if (clause.of !== void 0) {
        requireCapability(capabilities, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__T__as__lockOptionCapabilities$3e$__["lockOptionCapabilities"].of);
        parts.push(`OF ${clause.of.map((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(name)).join(", ")}`);
    }
    if (clause.waitPolicy !== void 0) {
        requireCapability(capabilities, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$C3itulLi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__T__as__lockOptionCapabilities$3e$__["lockOptionCapabilities"][clause.waitPolicy]);
        parts.push(lockWaitPolicyKeyword(clause.waitPolicy));
    }
    return parts.join(" ");
}
function renderProjection(projection, contract, pim) {
    return projection.map((item)=>{
        const alias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(item.alias);
        if (item.expr.kind === "literal") return `${renderLiteral(item.expr)} AS ${alias}`;
        if (item.expr.kind === "prepared-param-ref") return `${renderParamRef(item.expr, pim, true)} AS ${alias}`;
        return `${renderExpr(item.expr, contract, pim)} AS ${alias}`;
    }).join(", ");
}
function renderReturning(items, contract, pim) {
    return items.map((item)=>{
        if (item.expr.kind === "column-ref") {
            const rendered = renderColumn(item.expr);
            return item.expr.column === item.alias ? rendered : `${rendered} AS ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(item.alias)}`;
        }
        if (item.expr.kind === "literal") return `${renderLiteral(item.expr)} AS ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(item.alias)}`;
        return `${renderExpr(item.expr, contract, pim)} AS ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(item.alias)}`;
    }).join(", ");
}
function renderDistinctPrefix(distinct, distinctOn, contract, pim) {
    if (distinctOn && distinctOn.length > 0) return `DISTINCT ON (${distinctOn.map((expr)=>renderExpr(expr, contract, pim)).join(", ")}) `;
    if (distinct) return "DISTINCT ";
    return "";
}
function hasExplicitSchema(table) {
    return "schema" in table && typeof table.schema === "string";
}
function qualifyTableFromNamespaceCoordinate(table, contract) {
    if (hasExplicitSchema(table)) return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(table.schema)}.${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(table.name)}`;
    if (table.namespaceId === void 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(table.name);
    const namespace = contract.storage.namespaces[table.namespaceId];
    if (namespace === void 0) throw adapterError("RUNTIME.NAMESPACE_UNKNOWN", `Table "${table.name}" references namespace "${table.namespaceId}" which is not present as a Postgres schema on the contract`, {
        meta: {
            table: table.name,
            namespaceId: table.namespaceId,
            reason: "not-present"
        }
    });
    const qualifyTable = namespace.qualifyTable;
    if (qualifyTable === void 0) throw adapterError("RUNTIME.NAMESPACE_UNKNOWN", `Table "${table.name}" references namespace "${table.namespaceId}" which is not materialised as a Postgres schema on the contract`, {
        meta: {
            table: table.name,
            namespaceId: table.namespaceId,
            reason: "not-materialised"
        }
    });
    return qualifyTable.call(namespace, table.name);
}
function renderTableSource(source, contract) {
    const qualified = qualifyTableFromNamespaceCoordinate(source, contract);
    if (!source.alias) return qualified;
    return `${qualified} AS ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(source.alias)}`;
}
function renderSource(source, contract, pim) {
    const node = source;
    switch(node.kind){
        case "table-source":
            return renderTableSource(node, contract);
        case "derived-table-source":
            return `(${renderSelect(node.query, contract, pim)}) AS ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.alias)}`;
        case "function-source":
            {
                const args = node.args.map((arg)=>renderExpr(arg, contract, pim)).join(", ");
                return `${`${node.fn}(${args})`}${node.ordinality ? " WITH ORDINALITY" : ""}${node.alias === void 0 ? "" : ` AS ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.alias)}`}${node.columnAliases === void 0 ? "" : `(${node.columnAliases.map((column)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(column)).join(", ")})`}`;
            }
        // v8 ignore next 4
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__assertNever$3e$__["assertNever"])(node, `Unsupported source node kind: ${unreachableKind(node)}`);
    }
}
function assertScalarSubquery(query) {
    if (query.projection.length !== 1) throw adapterError("RUNTIME.AST_INVALID", "Subquery expressions must project exactly one column", {
        meta: {
            node: "subquery-expr"
        }
    });
}
function renderSubqueryExpr(expr, contract, pim) {
    assertScalarSubquery(expr.query);
    return `(${renderSelect(expr.query, contract, pim)})`;
}
function renderWhere(expr, contract, pim) {
    return renderExpr(expr, contract, pim);
}
function renderNullCheck(expr, contract, pim) {
    const rendered = renderExpr(expr.expr, contract, pim);
    const renderedExpr = isAtomicExpressionKind(expr.expr.kind) ? rendered : `(${rendered})`;
    return expr.isNull ? `${renderedExpr} IS NULL` : `${renderedExpr} IS NOT NULL`;
}
/**
* Atomic expression kinds whose rendered SQL is already self-delimited (a column reference, parameter, literal, function call, aggregate, etc.) and therefore does not need surrounding parentheses when used as the left operand of a postfix predicate like `IS NULL` or `IS NOT NULL`, or as either operand of a binary infix operator.
*
* Anything not in this set is treated as composite (binary, AND/OR/NOT, EXISTS, nested IS NULL, subqueries, operation templates) and gets wrapped to preserve grouping.
*/ function isAtomicExpressionKind(kind) {
    switch(kind){
        case "column-ref":
        case "identifier-ref":
        case "param-ref":
        case "prepared-param-ref":
        case "literal":
        case "aggregate":
        case "window-func":
        case "function-call":
        case "cast":
        case "case":
        case "json-object":
        case "json-array-agg":
        case "list":
            return true;
        case "subquery":
        case "operation":
        case "binary":
        case "and":
        case "or":
        case "exists":
        case "null-check":
        case "not":
        case "raw-expr":
            return false;
    }
}
function renderBinary(expr, contract, pim) {
    if (expr.right.kind === "list" && expr.right.values.length === 0) {
        if (expr.op === "in") return "FALSE";
        if (expr.op === "notIn") return "TRUE";
    }
    const leftExpr = expr.left;
    const left = renderExpr(leftExpr, contract, pim);
    const leftRendered = leftExpr.kind === "operation" || leftExpr.kind === "subquery" ? `(${left})` : left;
    const rightNode = expr.right;
    let right;
    switch(rightNode.kind){
        case "list":
            right = renderListLiteral(rightNode, contract, pim);
            break;
        case "literal":
            right = renderLiteral(rightNode);
            break;
        case "column-ref":
            right = renderColumn(rightNode);
            break;
        case "param-ref":
        case "prepared-param-ref":
            right = renderParamRef(rightNode, pim);
            break;
        default:
            right = renderExpr(rightNode, contract, pim);
            break;
    }
    return `${leftRendered} ${({
        eq: "=",
        neq: "!=",
        isNotDistinctFrom: "IS NOT DISTINCT FROM",
        isDistinctFrom: "IS DISTINCT FROM",
        gt: ">",
        lt: "<",
        gte: ">=",
        lte: "<=",
        like: "LIKE",
        in: "IN",
        notIn: "NOT IN"
    })[expr.op]} ${right}`;
}
function renderListLiteral(expr, contract, pim) {
    if (expr.values.length === 0) return "(NULL)";
    return `(${expr.values.map((v)=>{
        if (v.kind === "param-ref" || v.kind === "prepared-param-ref") return renderParamRef(v, pim);
        if (v.kind === "literal") return renderLiteral(v);
        return renderExpr(v, contract, pim);
    }).join(", ")})`;
}
function renderColumn(ref) {
    if (ref.table === "excluded") return `excluded.${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(ref.column)}`;
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(ref.table)}.${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(ref.column)}`;
}
function renderAggregateExpr(expr, contract, pim) {
    const fn = expr.fn.toUpperCase();
    if (!expr.expr) return `${fn}(*)`;
    return `${fn}(${renderExpr(expr.expr, contract, pim)})`;
}
function renderWindowFuncExpr(expr, contract, pim) {
    return `${expr.fn.toUpperCase()}(${expr.args.map((arg)=>renderExpr(arg, contract, pim)).join(", ")}) OVER (${[
        expr.partitionBy && expr.partitionBy.length > 0 ? `PARTITION BY ${expr.partitionBy.map((e)=>renderExpr(e, contract, pim)).join(", ")}` : "",
        expr.orderBy && expr.orderBy.length > 0 ? `ORDER BY ${renderOrderByItems(expr.orderBy, contract, pim)}` : ""
    ].filter((part)=>part.length > 0).join(" ")})`;
}
function renderFunctionCallExpr(expr, contract, pim) {
    const args = expr.args.map((arg)=>renderExpr(arg, contract, pim)).join(", ");
    return `${expr.fn}(${args})`;
}
function renderCastExpr(expr, contract, pim) {
    return `CAST(${renderExpr(expr.expr, contract, pim)} AS ${expr.targetType})`;
}
function renderCaseExpr(expr, contract, pim) {
    return `CASE ${expr.branches.map((branch)=>`WHEN ${renderExpr(branch.condition, contract, pim)} THEN ${renderExpr(branch.value, contract, pim)}`).join(" ")}${expr.elseExpr === void 0 ? "" : ` ELSE ${renderExpr(expr.elseExpr, contract, pim)}`} END`;
}
function renderJsonValueProjection(projection, contract, pim) {
    return projection.accept({
        codec: ({ value, codec })=>renderExpr(projectJsonThroughCodec(value, codec, pim), contract, pim),
        native: ({ value })=>renderExpr(value, contract, pim),
        document: ({ value })=>renderExpr(value, contract, pim)
    });
}
function projectJsonThroughCodec(value, codec, pim) {
    const descriptor = pim.types.codecDescriptorRegistry.descriptorFor(codec.codecId);
    if (descriptor === void 0) throw adapterError("RUNTIME.PARAM_REF_MISSING_CODEC", `Postgres lowering: a JSON projection carries codecId "${codec.codecId}" but the validated PostgreSQL codec registry has no entry for it. This usually indicates a missing extension pack in the runtime stack — register the pack that contributes this codec (e.g. \`extensions: [pgvectorRuntime]\`), or use the codec directly from \`@internal/target-postgres/codecs\` if it's a builtin.`, {
        meta: {
            codecId: codec.codecId
        }
    });
    return descriptor.projectJson(value, codec);
}
function renderJsonObjectExpr(expr, contract, pim) {
    return `json_build_object(${expr.entries.flatMap((entry)=>{
        return [
            `'${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(entry.key)}'`,
            renderJsonValueProjection(entry.value, contract, pim)
        ];
    }).join(", ")})`;
}
function renderOrderByItems(items, contract, pim) {
    return items.map((item)=>`${renderExpr(item.expr, contract, pim)}${ORDER_DIRECTION_SQL[item.dir]}${renderNullsPlacement(item)}`).join(", ");
}
const ORDER_DIRECTION_SQL = {
    asc: " ASC",
    desc: " DESC"
};
const ORDER_NULLS_SQL = {
    first: " NULLS FIRST",
    last: " NULLS LAST"
};
function renderNullsPlacement(item) {
    return item.nulls === void 0 ? "" : ORDER_NULLS_SQL[item.nulls];
}
function renderJsonArrayAggExpr(expr, contract, pim) {
    const aggregateOrderBy = expr.orderBy && expr.orderBy.length > 0 ? ` ORDER BY ${renderOrderByItems(expr.orderBy, contract, pim)}` : "";
    const aggregated = `json_agg(${renderJsonValueProjection(expr.expr, contract, pim)}${aggregateOrderBy})`;
    if (expr.onEmpty === "emptyArray") return `coalesce(${aggregated}, json_build_array())`;
    return aggregated;
}
function renderExpr(expr, contract, pim) {
    const node = expr;
    switch(node.kind){
        case "column-ref":
            return renderColumn(node);
        case "identifier-ref":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(node.name);
        case "operation":
            return renderOperation(node, contract, pim);
        case "subquery":
            return renderSubqueryExpr(node, contract, pim);
        case "aggregate":
            return renderAggregateExpr(node, contract, pim);
        case "window-func":
            return renderWindowFuncExpr(node, contract, pim);
        case "function-call":
            return renderFunctionCallExpr(node, contract, pim);
        case "cast":
            return renderCastExpr(node, contract, pim);
        case "case":
            return renderCaseExpr(node, contract, pim);
        case "json-object":
            return renderJsonObjectExpr(node, contract, pim);
        case "json-array-agg":
            return renderJsonArrayAggExpr(node, contract, pim);
        case "binary":
            return renderBinary(node, contract, pim);
        case "and":
            if (node.exprs.length === 0) return "TRUE";
            return `(${node.exprs.map((part)=>renderExpr(part, contract, pim)).join(" AND ")})`;
        case "or":
            if (node.exprs.length === 0) return "FALSE";
            return `(${node.exprs.map((part)=>renderExpr(part, contract, pim)).join(" OR ")})`;
        case "exists":
            return `${node.notExists ? "NOT " : ""}EXISTS (${renderSelect(node.subquery, contract, pim)})`;
        case "null-check":
            return renderNullCheck(node, contract, pim);
        case "not":
            return `NOT (${renderExpr(node.expr, contract, pim)})`;
        case "param-ref":
        case "prepared-param-ref":
            return renderParamRef(node, pim);
        case "literal":
            return renderLiteral(node);
        case "list":
            return renderListLiteral(node, contract, pim);
        case "raw-expr":
            return renderRawExpr(node, contract, pim);
        // v8 ignore next 4
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__assertNever$3e$__["assertNever"])(node, `Unsupported expression node kind: ${unreachableKind(node)}`);
    }
}
function renderParamRef(ref, pim, forceCast = false) {
    const index = pim.indexMap.get(ref);
    if (index === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"]("ParamRef not found in index map");
    if (ref.kind === "prepared-param-ref") return renderTypedParam(index, ref.codec.codecId, pim.types, ref.codec.many, ref.codec.typeParams, forceCast);
    if (ref.codec === void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.PARAM_REF_MISSING_CODEC", "Postgres renderer: ParamRef reached lowering without a bound CodecRef. Every column-bound ParamRef must carry a codec under the AST-bound codec contract. This usually indicates a builder path that constructed a ParamRef without threading the column codec.", {
        paramIndex: index,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("name", ref.name)
    });
    return renderTypedParam(index, ref.codec.codecId, pim.types, ref.codec.many, ref.codec.typeParams);
}
function renderLiteral(expr) {
    if (typeof expr.value === "string") return `'${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(expr.value)}'`;
    if (typeof expr.value === "number" || typeof expr.value === "boolean") return String(expr.value);
    if (typeof expr.value === "bigint") return String(expr.value);
    if (expr.value === null) return "NULL";
    if (expr.value === void 0) return "NULL";
    if (expr.value instanceof Date) return `'${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(expr.value.toISOString())}'`;
    if (Array.isArray(expr.value)) return `ARRAY[${expr.value.map((v)=>renderLiteral(new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$BkTuhW3Z$2d$BJfTjcxS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__C__as__LiteralExpr$3e$__["LiteralExpr"](v))).join(", ")}]`;
    const json = JSON.stringify(expr.value);
    if (json === void 0) return "NULL";
    return `'${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(json)}'`;
}
function renderOperation(expr, contract, pim) {
    const self = renderExpr(expr.self, contract, pim);
    const args = expr.args.map((arg)=>{
        return renderExpr(arg, contract, pim);
    });
    return expr.lowering.template.replace(/\{\{self\}\}|\{\{arg(\d+)\}\}/g, (token, argIndex)=>{
        if (token === "{{self}}") return self;
        const arg = args[Number(argIndex)];
        if (arg === void 0) throw adapterError("CONTRACT.PACK_CONTRIBUTION_INVALID", `Operation lowering template for "${expr.method}" referenced missing argument {{arg${argIndex}}}; template has ${args.length} arg(s)`, {
            meta: {
                method: expr.method
            }
        });
        return arg;
    });
}
function renderJoin(join, contract, pim) {
    return `${join.joinType.toUpperCase()} JOIN ${join.lateral ? "LATERAL " : ""}${renderSource(join.source, contract, pim)} ON ${renderJoinOn(join.on, contract, pim)}`;
}
function renderJoinOn(on, contract, pim) {
    if (on.kind === "eq-col-join-on") return `${renderColumn(on.left)} = ${renderColumn(on.right)}`;
    return renderWhere(on, contract, pim);
}
function getInsertColumnOrder(rows, contract, tableRef) {
    const tableName = tableRef.name;
    const orderedColumns = [];
    const seenColumns = /* @__PURE__ */ new Set();
    for (const row of rows)for (const column of Object.keys(row)){
        if (seenColumns.has(column)) continue;
        seenColumns.add(column);
        orderedColumns.push(column);
    }
    if (orderedColumns.length > 0) return orderedColumns;
    let table;
    if (tableRef.namespaceId !== void 0) {
        const ns = contract.storage.namespaces[tableRef.namespaceId];
        table = ns !== void 0 ? ns.entries.table?.[tableName] : void 0;
    }
    if (table === void 0) for (const ns of Object.values(contract.storage.namespaces)){
        const found = ns.entries.table?.[tableName];
        if (found !== void 0) {
            table = found;
            break;
        }
    }
    if (!table) throw adapterError("RUNTIME.AST_INVALID", `INSERT target table not found in contract storage: ${tableName}`, {
        meta: {
            node: "insert",
            table: tableName
        }
    });
    return Object.keys(table.columns);
}
function renderInsertValue(value, contract, pim) {
    if (!value || value.kind === "default-value") return "DEFAULT";
    switch(value.kind){
        case "param-ref":
        case "prepared-param-ref":
            return renderParamRef(value, pim);
        case "column-ref":
            return renderColumn(value);
        case "raw-expr":
            return renderExpr(value, contract, pim);
        // v8 ignore next 4
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__assertNever$3e$__["assertNever"])(value, `Unsupported value node in INSERT: ${unreachableKind(value)}`);
    }
}
function renderInsert(ast, contract, pim) {
    const table = renderTableSource(ast.table, contract);
    const rows = ast.rows;
    if (rows.length === 0) throw adapterError("RUNTIME.AST_INVALID", "INSERT requires at least one row", {
        meta: {
            node: "insert"
        }
    });
    const hasExplicitValues = rows.some((row)=>Object.keys(row).length > 0);
    return `${(()=>{
        if (!hasExplicitValues) {
            if (rows.length === 1) return `INSERT INTO ${table} DEFAULT VALUES`;
            const defaultColumns = getInsertColumnOrder(rows, contract, ast.table);
            if (defaultColumns.length === 0) return `INSERT INTO ${table} VALUES ${rows.map(()=>"()").join(", ")}`;
            const quotedColumns = defaultColumns.map((column)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(column));
            const defaultRow = `(${defaultColumns.map(()=>"DEFAULT").join(", ")})`;
            return `INSERT INTO ${table} (${quotedColumns.join(", ")}) VALUES ${rows.map(()=>defaultRow).join(", ")}`;
        }
        const columnOrder = getInsertColumnOrder(rows, contract, ast.table);
        const columns = columnOrder.map((column)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(column));
        const values = rows.map((row)=>{
            return `(${columnOrder.map((column)=>renderInsertValue(row[column], contract, pim)).join(", ")})`;
        }).join(", ");
        return `INSERT INTO ${table} (${columns.join(", ")}) VALUES ${values}`;
    })()}${ast.onConflict ? (()=>{
        const conflictColumns = ast.onConflict.columns.map((col)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(col.column));
        const target = conflictColumns.length === 0 ? "" : ` (${conflictColumns.join(", ")})`;
        const action = ast.onConflict.action;
        switch(action.kind){
            case "do-nothing":
                return ` ON CONFLICT${target} DO NOTHING`;
            case "do-update-set":
                {
                    if (conflictColumns.length === 0) throw adapterError("RUNTIME.AST_INVALID", "INSERT onConflict requires at least one conflict column", {
                        meta: {
                            node: "insert-on-conflict"
                        }
                    });
                    const updateEntries = Object.entries(action.set);
                    if (updateEntries.length === 0) throw adapterError("RUNTIME.AST_INVALID", "INSERT onConflict do-update-set requires at least one assignment", {
                        meta: {
                            node: "insert-on-conflict"
                        }
                    });
                    return ` ON CONFLICT${target} DO UPDATE SET ${updateEntries.map(([colName, value])=>{
                        return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(colName)} = ${renderExpr(value, contract, pim)}`;
                    }).join(", ")}`;
                }
            // v8 ignore next 4
            default:
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__assertNever$3e$__["assertNever"])(action, `Unsupported onConflict action: ${unreachableKind(action)}`);
        }
    })() : ""}${ast.returning?.length ? ` RETURNING ${renderReturning(ast.returning, contract, pim)}` : ""}`;
}
function renderUpdate(ast, contract, pim) {
    const table = renderTableSource(ast.table, contract);
    const setEntries = Object.entries(ast.set);
    if (setEntries.length === 0) throw adapterError("RUNTIME.AST_INVALID", "UPDATE requires at least one SET assignment", {
        meta: {
            node: "update"
        }
    });
    const setClauses = setEntries.map(([col, val])=>{
        return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$sql$2d$utils$2d$VXrIh8dJ$2d$DVxo_Ygp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(col)} = ${renderExpr(val, contract, pim)}`;
    });
    const whereClause = ast.where ? ` WHERE ${renderWhere(ast.where, contract, pim)}` : "";
    const returningClause = ast.returning?.length ? ` RETURNING ${renderReturning(ast.returning, contract, pim)}` : "";
    return `UPDATE ${table} SET ${setClauses.join(", ")}${whereClause}${returningClause}`;
}
function renderDelete(ast, contract, pim) {
    return `DELETE FROM ${renderTableSource(ast.table, contract)}${ast.where ? ` WHERE ${renderWhere(ast.where, contract, pim)}` : ""}${ast.returning?.length ? ` RETURNING ${renderReturning(ast.returning, contract, pim)}` : ""}`;
}
function renderParts(parts, contract, pim) {
    return parts.map((part)=>typeof part === "string" ? part : renderExpr(part, contract, pim)).join("");
}
function renderRawExpr(node, contract, pim) {
    return renderParts(node.parts, contract, pim);
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/sql-utils-VXrIh8dJ-DVxo_Ygp.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>quoteIdentifier,
    "i",
    ()=>qualifyName,
    "n",
    ()=>escapeLiteral,
    "o",
    ()=>quoteQualifiedName,
    "r",
    ()=>inlineLiteral,
    "s",
    ()=>validateEnumValueLength,
    "t",
    ()=>POSTGRES_QUOTING
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/errors-DpdPXR_L-DailcY-X.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$text$2d$C3TTEtgd$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__utf8ByteLength$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/text-C3TTEtgd.mjs [app-route] (ecmascript) <export r as utf8ByteLength>");
;
;
//#region ../../../3-targets/postgres/1-target/dist/sql-utils-VXrIh8dJ.mjs
/**
* Shared SQL utility functions for the Postgres target.
*
* These functions handle safe SQL identifier and literal escaping
* with security validations to prevent injection and encoding issues.
*
* They live in `target-postgres` because both the control adapter (used at
* emit time) and the runtime adapter (used at execute time) need the same
* escaping/validation behavior, and the target package is the natural shared
* home that both adapters can depend on without crossing planes.
*/ const MAX_IDENTIFIER_BYTES = 63;
const MAX_UTF8_BYTES_PER_UTF16_UNIT = 3;
/**
* Validates and quotes a PostgreSQL identifier (table, column, type, schema names).
*
* Security validations:
* - Rejects null bytes which could cause truncation or unexpected behavior
* - Rejects empty identifiers
* - Warns on identifiers exceeding PostgreSQL's 63-byte limit
*
* @throws `CONTRACT.IDENTIFIER_INVALID` structured error If the identifier contains null bytes or is empty
*/ function quoteIdentifier(identifier) {
    if (identifier.length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.IDENTIFIER_INVALID", "Identifier cannot be empty", {
        meta: {
            value: identifier,
            context: "identifier"
        }
    });
    if (identifier.includes("\0")) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.IDENTIFIER_INVALID", "Identifier cannot contain null bytes", {
        meta: {
            value: identifier.replace(/\0/g, "\\0"),
            context: "identifier"
        }
    });
    if (identifier.length * MAX_UTF8_BYTES_PER_UTF16_UNIT > MAX_IDENTIFIER_BYTES && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$text$2d$C3TTEtgd$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__utf8ByteLength$3e$__["utf8ByteLength"])(identifier) > MAX_IDENTIFIER_BYTES) console.warn(`Identifier "${identifier.slice(0, 20)}..." exceeds PostgreSQL's ${MAX_IDENTIFIER_BYTES}-byte limit and will be truncated`);
    return `"${identifier.replace(/"/g, "\"\"")}"`;
}
/**
* Escapes a string literal for safe use in SQL statements.
*
* Security validations:
* - Rejects null bytes which could cause truncation or unexpected behavior
*
* Note: This assumes PostgreSQL's `standard_conforming_strings` is ON (default since PG 9.1).
* Backslashes are treated as literal characters, not escape sequences.
*
* @throws `CONTRACT.IDENTIFIER_INVALID` structured error If the value contains null bytes
*/ function escapeLiteral(value) {
    if (value.includes("\0")) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.IDENTIFIER_INVALID", "Literal value cannot contain null bytes", {
        meta: {
            value: value.replace(/\0/g, "\\0"),
            context: "literal"
        }
    });
    return value.replace(/'/g, "''");
}
/**
* Builds a qualified name (schema.object) with proper quoting.
*/ function qualifyName(schemaName, objectName) {
    return `${quoteIdentifier(schemaName)}.${quoteIdentifier(objectName)}`;
}
/**
* Quotes a possibly dot-qualified name segment-by-segment:
* `order_status` -> `"order_status"`, `auth.aal_level` -> `"auth"."aal_level"`.
* A single-segment name round-trips to exactly {@link quoteIdentifier}; whole-
* string quoting (`"auth.aal_level"`) would be one wrong identifier.
*/ function quoteQualifiedName(name) {
    return name.split(".").map((segment)=>quoteIdentifier(segment)).join(".");
}
/**
* Validates that an enum value doesn't exceed PostgreSQL's label length limit.
*
* PostgreSQL enum labels have a maximum length of NAMEDATALEN-1 (63 bytes by default).
* Unlike identifiers, enum labels that exceed this limit cause an error rather than
* silent truncation.
*
* @param value - The enum value to validate
* @param enumTypeName - Name of the enum type (for error messages)
* @throws `CONTRACT.IDENTIFIER_INVALID` structured error If the value exceeds the maximum length
*/ function validateEnumValueLength(value, enumTypeName) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$text$2d$C3TTEtgd$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__utf8ByteLength$3e$__["utf8ByteLength"])(value) > MAX_IDENTIFIER_BYTES) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.IDENTIFIER_INVALID", `Enum value "${value.slice(0, 20)}..." for type "${enumTypeName}" exceeds PostgreSQL's ${MAX_IDENTIFIER_BYTES}-byte label limit`, {
        meta: {
            value,
            context: "enum-label"
        }
    });
}
/** The quotes this target's SQL knows, for the check of SQL a migration writes into a statement. */ const POSTGRES_QUOTING = [
    {
        open: "E'",
        close: "'",
        doubledCloseEscapes: true,
        backslashEscapes: true
    },
    {
        open: "'",
        close: "'",
        doubledCloseEscapes: true,
        backslashEscapes: false
    },
    {
        open: "\"",
        close: "\"",
        doubledCloseEscapes: true,
        backslashEscapes: false
    }
];
function isTextLikeTypeText(typeText) {
    return typeText === "text" || typeText === "varchar" || typeText.startsWith("varchar(") || typeText === "character varying" || typeText.startsWith("character varying(") || typeText === "char" || typeText.startsWith("char(") || typeText === "character" || typeText.startsWith("character(");
}
function literalNeedsCast(value, typeText) {
    if (typeof value === "number") return !Number.isFinite(value);
    if (typeof value === "string") return !isTextLikeTypeText(typeText);
    return typeof value === "object" && value !== null;
}
/** A value's literal without a cast: SQL NULL, a bare number or boolean, or quoted text. */ function literalText(value) {
    if (value === null) return "NULL";
    if (typeof value === "boolean") return value ? "true" : "false";
    if (typeof value === "number") return Number.isFinite(value) ? String(value) : `'${String(value)}'`;
    if (typeof value === "bigint") return String(value);
    if (typeof value === "string") return `'${escapeLiteral(value)}'`;
    if (value instanceof Uint8Array) return `'\\x${Array.from(value).map((b)=>b.toString(16).padStart(2, "0")).join("")}'`;
    if (typeof value === "object") return `'${escapeLiteral(JSON.stringify(value))}'`;
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("CONTRACT.PACK_CONTRIBUTION_INVALID", `pgRenderDdlExecuteRequest: unexpected wire type "${typeof value}"`, {
        meta: {
            wireType: typeof value
        }
    });
}
/**
* A value as DDL writes it for a column of `typeText`: `ARRAY[...]` of each element's literal, cast to the list type, for a list written to a list type, and otherwise the value's literal, cast to the column type where PostgreSQL would read it as another type. `value` is what the driver exchanges for the column, with a `Date` already written as text.
*/ function inlineLiteral(value, typeText) {
    if (Array.isArray(value) && typeText.endsWith("[]")) {
        if (value.length === 0) return "'{}'";
        return `ARRAY[${value.map(literalText).join(", ")}]::${typeText}`;
    }
    const text = literalText(value);
    return literalNeedsCast(value, typeText) ? `${text}::${typeText}` : text;
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/target__runtime.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>postgresRuntimeTargetDescriptor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-ids-2htdtS66-CJPMZv1t.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/errors-DpdPXR_L-DailcY-X.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codecs-CV-_K-z0-DZc60ccR.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$date$2d$time$2d$now$2d$generators$2d$BMMGy0vy$2d$BEbt_79F$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/date-time-now-generators-BMMGy0vy-BEbt_79F.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$search$2d$document$2d$Ceg9d2K0$2d$DJ4MklAU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-search-document-Ceg9d2K0-DJ4MklAU.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$contract$2d$view$2d$yDfay91x$2d$BBinYMBq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-contract-view-yDfay91x-BBinYMBq.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$parsers$2d$DIfNR9AQ$2d$tVmTju$2d$Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-parsers-DIfNR9AQ-tVmTju-Y.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/keywords.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__assertDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/assertions-Dw1lZz_Q.mjs [app-route] (ecmascript) <export t as assertDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__buildOperation$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/expression-impl-DtbmFnnz-Dal0IYDE.mjs [app-route] (ecmascript) <export n as buildOperation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__isExpression$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/expression-impl-DtbmFnnz-Dal0IYDE.mjs [app-route] (ecmascript) <export a as isExpression>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__toExpr$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/expression-impl-DtbmFnnz-Dal0IYDE.mjs [app-route] (ecmascript) <export s as toExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$index$2d$reference$2d$BQSrkRfT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__uniqueIndexNamesOfType$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/index-reference-BQSrkRfT.mjs [app-route] (ecmascript) <export n as uniqueIndexNamesOfType>");
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
//#region ../../../3-targets/postgres/1-target/dist/runtime.mjs
function indexFunction(tools, name) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(tools.fns[name]);
}
function fullTextMethod(indexName) {
    return (collection, ...args)=>collection.where((_model, tools)=>indexFunction(tools, "fullTextMatches")(tools.indexes[indexName], ...args)).orderBy((_model, tools)=>indexFunction(tools, "fullTextRank")(tools.indexes[indexName], ...args).desc());
}
/** The run-time half of `PostgresFullTextMethods`. */ const postgresFullTextMethods = {
    id: "postgres/fullText",
    methodsFor: (model)=>Object.fromEntries((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$index$2d$reference$2d$BQSrkRfT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__uniqueIndexNamesOfType$3e$__["uniqueIndexNamesOfType"])(model.table.indexes, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"]).map((name)=>[
                name,
                fullTextMethod(name)
            ]))
};
const TEXT_REF = {
    codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"]
};
const TSQUERY_REF = {
    codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["I"]
};
const languageOf = (options)=>options.language ?? "english";
function isIndexReference(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__isExpression$3e$__["isExpression"])(value) && "type" in value && "options" in value && "columns" in value;
}
function invalidDocument(method, argument, received, message, fix) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$errors$2d$DpdPXR_L$2d$DailcY$2d$X$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])("RUNTIME.ARGUMENT_INVALID", `${method}: ${message}`, {
        why: "Postgres uses a full-text index only for a query over the same search document, so the document comes from the index itself, from one column, or from `fullTextDocument`.",
        fix,
        meta: {
            helper: method,
            argument,
            received
        }
    });
}
/**
* The weight groups and the language a search document stands for. A full-text index states both;
* a column and a `fullTextDocument` take the language from the options.
*/ function documentGroups(method, document, options) {
    if (document instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$parsers$2d$DIfNR9AQ$2d$tVmTju$2d$Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]) return {
        weightGroups: document.weightGroups,
        language: languageOf(options)
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__isExpression$3e$__["isExpression"])(document)) return {
        weightGroups: [
            [
                document
            ]
        ],
        language: languageOf(options)
    };
    if (!isIndexReference(document)) throw invalidDocument(method, "document", Array.isArray(document) ? "array" : typeof document, "the document must be a full-text index from a table's `indexes`, a column, or a document from `fullTextDocument`.", "Pass the index, as `table.indexes.<name>`, or wrap the weight groups in `fullTextDocument(...)`.");
    if (document.type !== "fullText") throw invalidDocument(method, "document", document.type, `the index is of type "${String(document.type)}", not a full-text index.`, "Pass an index declared with `@@fullTextIndex` or `fullTextIndex`.");
    if (options.language !== void 0) throw invalidDocument(method, "options", options.language, "a full-text index states its language, so the `language` option is not taken with one.", "Leave `language` out; the index decides it.");
    const definition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"])(document.options ?? {});
    if (definition instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"].errors) throw invalidDocument(method, "document", document.options, `the full-text index has invalid options: ${definition.summary}`, "Pass the index as the table gives it.");
    const columns = document.columns;
    const columnOf = (name)=>{
        const column = typeof columns === "object" && columns !== null && Object.hasOwn(columns, name) ? Reflect.get(columns, name) : void 0;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__isExpression$3e$__["isExpression"])(column)) throw invalidDocument(method, "document", name, `the full-text index has no column "${name}", which its weight groups name.`, "Pass the index as the table gives it.");
        return column;
    };
    return {
        weightGroups: definition.weightGroups.map((group)=>group.map(columnOf)),
        language: definition.language
    };
}
/**
* The search document an operation searches. The first column is the operation's `self`; the
* others follow the `fixedArgs` the operation passes first, so the query, the language and any
* further option keep their positions.
*/ function searchDocument(method, document, options, fixedArgs) {
    const { weightGroups, language } = documentGroups(method, document, options);
    let position = 0;
    const template = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$search$2d$document$2d$Ceg9d2K0$2d$DJ4MklAU$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(weightGroups.map((group)=>group.map(()=>position++)), {
        column: (index)=>index === 0 ? "{{self}}" : `{{arg${fixedArgs + index - 1}}}`,
        language: "{{arg1}}"
    });
    const [self, ...rest] = weightGroups.flat().map((column)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__toExpr$3e$__["toExpr"])(column));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__assertDefined$3e$__["assertDefined"])(self, `${method}: a checked document has a first column`);
    return {
        self,
        rest,
        template,
        language: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$parsers$2d$DIfNR9AQ$2d$tVmTju$2d$Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"])(method, language)
    };
}
function postgresQueryOperations() {
    return {
        ilike: {
            self: {
                traits: [
                    "textual"
                ]
            },
            impl: (self, pattern)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__buildOperation$3e$__["buildOperation"])({
                    method: "ilike",
                    args: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__toExpr$3e$__["toExpr"])(self),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__toExpr$3e$__["toExpr"])(pattern, TEXT_REF)
                    ],
                    returns: {
                        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["n"],
                        nullable: false
                    },
                    lowering: {
                        targetFamily: "sql",
                        template: "{{self}} ILIKE {{arg0}}"
                    }
                })
        },
        fullTextMatches: {
            self: {
                traits: [
                    "textual"
                ]
            },
            impl: (document, query, options = {})=>{
                const searched = searchDocument("fullTextMatches", document, options, 2);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__buildOperation$3e$__["buildOperation"])({
                    method: "fullTextMatches",
                    args: [
                        searched.self,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__toExpr$3e$__["toExpr"])(query, TSQUERY_REF),
                        searched.language,
                        ...searched.rest
                    ],
                    returns: {
                        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["n"],
                        nullable: false
                    },
                    lowering: {
                        targetFamily: "sql",
                        template: `${searched.template} @@ {{arg0}}`
                    }
                });
            }
        },
        fullTextRank: {
            self: {
                traits: [
                    "textual"
                ]
            },
            impl: (document, query, options = {})=>{
                const fn = options.coverDensity === true ? "ts_rank_cd" : "ts_rank";
                const normalization = options.normalization === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$parsers$2d$DIfNR9AQ$2d$tVmTju$2d$Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])("fullTextRank", options.normalization);
                const searched = searchDocument("fullTextRank", document, options, normalization === void 0 ? 2 : 3);
                const fixed = normalization === void 0 ? [
                    searched.language
                ] : [
                    searched.language,
                    normalization
                ];
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__buildOperation$3e$__["buildOperation"])({
                    method: "fullTextRank",
                    args: [
                        searched.self,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__toExpr$3e$__["toExpr"])(query, TSQUERY_REF),
                        ...fixed,
                        ...searched.rest
                    ],
                    returns: {
                        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["c"],
                        nullable: false
                    },
                    lowering: {
                        targetFamily: "sql",
                        template: `${fn}(${searched.template}, {{arg0}}${normalization === void 0 ? "" : ", {{arg2}}"})`
                    }
                });
            }
        },
        fullTextHeadline: {
            self: {
                traits: [
                    "textual"
                ]
            },
            impl: (self, query, options = {})=>{
                const headlineOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$parsers$2d$DIfNR9AQ$2d$tVmTju$2d$Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])("fullTextHeadline", options);
                const base = "ts_headline({{arg1}}, {{self}}, {{arg0}}";
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__buildOperation$3e$__["buildOperation"])({
                    method: "fullTextHeadline",
                    args: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__toExpr$3e$__["toExpr"])(self),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$impl$2d$DtbmFnnz$2d$Dal0IYDE$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__toExpr$3e$__["toExpr"])(query, TSQUERY_REF),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$parsers$2d$DIfNR9AQ$2d$tVmTju$2d$Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"])("fullTextHeadline", languageOf(options)),
                        ...headlineOptions === void 0 ? [] : [
                            headlineOptions
                        ]
                    ],
                    returns: {
                        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["T"],
                        nullable: false
                    },
                    lowering: {
                        targetFamily: "sql",
                        template: `${base}${headlineOptions === void 0 ? "" : ", {{arg2}}"})`
                    }
                });
            }
        },
        websearchToTsquery: {
            impl: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$parsers$2d$DIfNR9AQ$2d$tVmTju$2d$Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"]
        },
        toTsquery: {
            impl: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$parsers$2d$DIfNR9AQ$2d$tVmTju$2d$Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"]
        },
        plaintoTsquery: {
            impl: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$parsers$2d$DIfNR9AQ$2d$tVmTju$2d$Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"]
        },
        phrasetoTsquery: {
            impl: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$parsers$2d$DIfNR9AQ$2d$tVmTju$2d$Y$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"]
        }
    };
}
/**
* Target-postgres deliberately does NOT import `SqlRuntimeTargetDescriptor` from `@internal/sql-runtime`. The target package is a control-plane residence and must not pull the SQL execution-plane package into its dependency closure. The runtime descriptor here is shaped to satisfy the framework's `RuntimeTargetDescriptor` plus the structural `SqlStaticContributions` (`codecs:` returning a descriptor list) that
* `@internal/sql-runtime` consumers narrow to at composition time.
*
* The target itself contributes no codecs — postgres-specific codecs ship from the postgres adapter and from extension packs (pgvector, arktype-json, etc.).
*/ const postgresRuntimeTargetDescriptor = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$date$2d$time$2d$now$2d$generators$2d$BMMGy0vy$2d$BEbt_79F$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["o"],
    codecs: ()=>[],
    listDecoder: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"],
    queryOperations: ()=>postgresQueryOperations(),
    collectionMethods: ()=>[
            postgresFullTextMethods
        ],
    create () {
        return {
            familyId: "sql",
            targetId: "postgres"
        };
    }
};
;
}),
];})()

//# sourceMappingURL=1676_%40prisma_orm-target-postgres_dist_0xghyv6828d6d._.js.map