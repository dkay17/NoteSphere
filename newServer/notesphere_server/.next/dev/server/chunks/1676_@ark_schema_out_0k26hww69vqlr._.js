(()=>{"use strict";module.exports = [
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/config.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "configureSchema",
    ()=>configureSchema,
    "mergeConfigs",
    ()=>mergeConfigs,
    "mergeToJsonSchemaConfigs",
    ()=>mergeToJsonSchemaConfigs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/toJsonSchema.js [app-route] (ecmascript)");
;
;
;
// $ark.config could already be set if it were imported previously from the
// dedicated config entrypoint, in which case we don't want to reinitialize it
__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].config ??= {};
const configureSchema = (config)=>{
    const result = Object.assign(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].config, mergeConfigs(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].config, config));
    if (__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].resolvedConfig) __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].resolvedConfig = mergeConfigs(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].resolvedConfig, result);
    return result;
};
const mergeConfigs = (base, merged)=>{
    if (!merged) return base;
    const result = {
        ...base
    };
    let k;
    for(k in merged){
        const keywords = {
            ...base.keywords
        };
        if (k === "keywords") {
            for(const flatAlias in merged[k]){
                const v = merged.keywords[flatAlias];
                if (v === undefined) continue;
                keywords[flatAlias] = typeof v === "string" ? {
                    description: v
                } : v;
            }
            result.keywords = keywords;
        } else if (k === "toJsonSchema") {
            result[k] = mergeToJsonSchemaConfigs(base.toJsonSchema, merged.toJsonSchema);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNodeKind"])(k)) {
            result[k] = // not casting this makes TS compute a very inefficient
            // type that is not needed
            {
                ...base[k],
                ...merged[k]
            };
        } else result[k] = merged[k];
    }
    return result;
};
const jsonSchemaTargetToDialect = {
    "draft-2020-12": "https://json-schema.org/draft/2020-12/schema",
    "draft-07": "http://json-schema.org/draft-07/schema#"
};
const mergeToJsonSchemaConfigs = (baseConfig, mergedConfig)=>{
    if (!baseConfig) return resolveTargetToDialect(mergedConfig ?? {}, undefined);
    if (!mergedConfig) return baseConfig;
    const result = {
        ...baseConfig
    };
    let k;
    for(k in mergedConfig){
        if (k === "fallback") {
            result.fallback = mergeFallbacks(baseConfig.fallback, mergedConfig.fallback);
        } else result[k] = mergedConfig[k];
    }
    return resolveTargetToDialect(result, mergedConfig);
};
const resolveTargetToDialect = (opts, userOpts)=>{
    // If user explicitly provided a dialect, use it
    // Otherwise, if user provided a target, resolve it to dialect
    // If neither, use the default dialect from opts
    if (userOpts?.dialect !== undefined) return opts; // dialect was already merged
    if (userOpts?.target !== undefined) {
        return {
            ...opts,
            dialect: jsonSchemaTargetToDialect[userOpts.target]
        };
    }
    return opts;
};
const mergeFallbacks = (base, merged)=>{
    base = normalizeFallback(base);
    merged = normalizeFallback(merged);
    const result = {};
    let code;
    for(code in __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ToJsonSchema"].defaultConfig.fallback){
        result[code] = merged[code] ?? merged.default ?? base[code] ?? base.default ?? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ToJsonSchema"].defaultConfig.fallback[code];
    }
    return result;
};
const normalizeFallback = (fallback)=>typeof fallback === "function" ? {
        default: fallback
    } : fallback ?? {};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/constraint.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseConstraint",
    ()=>BaseConstraint,
    "InternalPrimitiveConstraint",
    ()=>InternalPrimitiveConstraint,
    "constraintKeyParser",
    ()=>constraintKeyParser,
    "flattenConstraints",
    ()=>flattenConstraints,
    "intersectConstraints",
    ()=>intersectConstraints,
    "throwInvalidOperandError",
    ()=>throwInvalidOperandError,
    "unflattenConstraints",
    ()=>unflattenConstraints,
    "writeInvalidOperandMessage",
    ()=>writeInvalidOperandMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/strings.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/node.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/intersections.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
class BaseConstraint extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseNode"] {
    constructor(attachments, $){
        super(attachments, $);
        // define as a getter to avoid it being enumerable/spreadable
        Object.defineProperty(this, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arkKind"], {
            value: "constraint",
            enumerable: false
        });
    }
    impliedSiblings;
    intersect(r) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectNodesRoot"])(this, r, this.$);
    }
}
class InternalPrimitiveConstraint extends BaseConstraint {
    traverseApply = (data, ctx)=>{
        if (!this.traverseAllows(data, ctx)) ctx.errorFromNodeContext(this.errorContext);
    };
    compile(js) {
        if (js.traversalKind === "Allows") js.return(this.compiledCondition);
        else {
            js.if(this.compiledNegation, ()=>js.line(`ctx.errorFromNodeContext(${this.compiledErrorContext})`));
        }
    }
    get errorContext() {
        return {
            code: this.kind,
            description: this.description,
            meta: this.meta,
            ...this.inner
        };
    }
    get compiledErrorContext() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compileObjectLiteral"])(this.errorContext);
    }
}
const constraintKeyParser = (kind)=>(schema, ctx)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(schema)) {
            if (schema.length === 0) {
                // Omit empty lists as input
                return;
            }
            const nodes = schema.map((schema)=>ctx.$.node(kind, schema));
            // predicate order must be preserved to ensure inputs are narrowed
            // and checked in the correct order
            if (kind === "predicate") return nodes;
            return nodes.sort((l, r)=>l.hash < r.hash ? -1 : 1);
        }
        const child = ctx.$.node(kind, schema);
        // If the constraint was reduced to a root node (like unknown for minLength: 0),
        // omit it from the schema since it's trivially satisfied
        if (child.isRoot()) return;
        return child.hasOpenIntersection() ? [
            child
        ] : child;
    };
const intersectConstraints = (s)=>{
    const head = s.r.shift();
    if (!head) {
        let result = s.l.length === 0 && s.kind === "structure" ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.unknown.internal : s.ctx.$.node(s.kind, Object.assign(s.baseInner, unflattenConstraints(s.l)), {
            prereduced: true
        });
        for (const root of s.roots){
            if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return result;
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectOrPipeNodes"])(root, result, s.ctx);
        }
        return result;
    }
    let matched = false;
    for(let i = 0; i < s.l.length; i++){
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectOrPipeNodes"])(s.l[i], head, s.ctx);
        if (result === null) continue;
        if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return result;
        if (result.isRoot()) {
            s.roots.push(result);
            s.l.splice(i);
            return intersectConstraints(s);
        }
        if (!matched) {
            s.l[i] = result;
            matched = true;
        } else {
            // a head can narrow two constraints, e.g. <= 1 meeting >= 1 and <= 2
            s.l.splice(i--, 1);
            if (!s.l.includes(result)) s.r.push(result);
        }
    }
    if (!matched) s.l.push(head);
    if (s.kind === "intersection") {
        if (head.impliedSiblings) for (const node of head.impliedSiblings)(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendUnique"])(s.r, node);
    }
    return intersectConstraints(s);
};
const flattenConstraints = (inner)=>{
    const result = Object.entries(inner).flatMap(([k, v])=>k in __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKeys"] ? v : []).sort((l, r)=>l.precedence < r.precedence ? -1 : l.precedence > r.precedence ? 1 : l.kind === "predicate" && r.kind === "predicate" ? 0 : l.hash < r.hash ? -1 : 1);
    return result;
};
const unflattenConstraints = (constraints)=>{
    const inner = {};
    for (const constraint of constraints){
        if (constraint.hasOpenIntersection()) {
            inner[constraint.kind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(inner[constraint.kind], constraint);
        } else {
            if (inner[constraint.kind]) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected intersection of closed refinements of kind ${constraint.kind}`);
            }
            inner[constraint.kind] = constraint;
        }
    }
    return inner;
};
const throwInvalidOperandError = (...args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeInvalidOperandMessage(...args));
const writeInvalidOperandMessage = (kind, expected, actual)=>{
    const actualDescription = actual.hasKind("morph") ? "a morph" : actual.isUnknown() ? "unknown" : actual.exclude(expected).defaultShortDescription;
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["capitalize"])(kind)} operand must be ${expected.description} (was ${actualDescription})`;
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/generic.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GenericRoot",
    ()=>GenericRoot,
    "LazyGenericBody",
    ()=>LazyGenericBody,
    "parseGeneric",
    ()=>parseGeneric,
    "writeUnsatisfiedParameterConstraintMessage",
    ()=>writeUnsatisfiedParameterConstraintMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/functions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
;
;
;
const parseGeneric = (paramDefs, bodyDef, $)=>new GenericRoot(paramDefs, bodyDef, $, $, null);
class LazyGenericBody extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callable"] {
}
class GenericRoot extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callable"] {
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arkKind"]] = "generic";
    paramDefs;
    bodyDef;
    $;
    arg$;
    baseInstantiation;
    hkt;
    description;
    constructor(paramDefs, bodyDef, $, arg$, hkt){
        super((...args)=>{
            const argNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(this.names, (i, name)=>{
                const arg = this.arg$.parse(args[i]);
                if (!arg.extends(this.constraints[i])) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeUnsatisfiedParameterConstraintMessage(name, this.constraints[i].expression, arg.expression));
                }
                return [
                    name,
                    arg
                ];
            });
            if (this.defIsLazy()) {
                const def = this.bodyDef(argNodes);
                return this.$.parse(def);
            }
            return this.$.parse(bodyDef, {
                args: argNodes
            });
        });
        this.paramDefs = paramDefs;
        this.bodyDef = bodyDef;
        this.$ = $;
        this.arg$ = arg$;
        this.hkt = hkt;
        this.description = hkt ? new hkt().description ?? `a generic type for ${hkt.constructor.name}` : "a generic type";
        this.baseInstantiation = this(...this.constraints);
    }
    defIsLazy() {
        return this.bodyDef instanceof LazyGenericBody;
    }
    cacheGetter(name, value) {
        Object.defineProperty(this, name, {
            value
        });
        return value;
    }
    get json() {
        return this.cacheGetter("json", {
            params: this.params.map((param)=>param[1].isUnknown() ? param[0] : [
                    param[0],
                    param[1].json
                ]),
            body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["snapshot"])(this.bodyDef)
        });
    }
    get params() {
        return this.cacheGetter("params", this.paramDefs.map((param)=>typeof param === "string" ? [
                param,
                __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.unknown
            ] : [
                param[0],
                this.$.parse(param[1])
            ]));
    }
    get names() {
        return this.cacheGetter("names", this.params.map((e)=>e[0]));
    }
    get constraints() {
        return this.cacheGetter("constraints", this.params.map((e)=>e[1]));
    }
    get internal() {
        return this;
    }
    get referencesById() {
        return this.baseInstantiation.internal.referencesById;
    }
    get references() {
        return this.baseInstantiation.internal.references;
    }
}
const writeUnsatisfiedParameterConstraintMessage = (name, constraint, arg)=>`${name} must be assignable to ${constraint} (was ${arg})`;
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/constraint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$generic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/generic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/intrinsic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$kinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/kinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$module$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/module.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/node.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/parse.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/predicate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$after$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/after.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$before$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/before.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$divisor$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/divisor.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$exactLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/exactLength.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$kinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/kinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$max$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/max.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$maxLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/maxLength.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/min.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$minLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/minLength.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$pattern$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/pattern.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/range.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$intersection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/intersection.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$morph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/morph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$proto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/proto.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/root.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$union$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/union.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$unit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/unit.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/scope.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/compile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/intersections.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/toJsonSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/traversal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/optional.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$prop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/prop.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$required$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/required.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$sequence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/sequence.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$structure$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/structure.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
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
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/intrinsic.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "intrinsic",
    ()=>intrinsic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/scope.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/shared.js [app-route] (ecmascript)");
;
;
;
const intrinsicBases = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["schemaScope"])({
    bigint: "bigint",
    // since we know this won't be reduced, it can be safely cast to a union
    boolean: [
        {
            unit: false
        },
        {
            unit: true
        }
    ],
    false: {
        unit: false
    },
    never: [],
    null: {
        unit: null
    },
    number: "number",
    object: "object",
    string: "string",
    symbol: "symbol",
    true: {
        unit: true
    },
    unknown: {},
    undefined: {
        unit: undefined
    },
    Array,
    Date
}, {
    prereducedAliases: true
}).export();
__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic = {
    ...intrinsicBases
};
const intrinsicRoots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["schemaScope"])({
    integer: {
        domain: "number",
        divisor: 1
    },
    lengthBoundable: [
        "string",
        Array
    ],
    key: [
        "string",
        "symbol"
    ],
    nonNegativeIntegerString: {
        domain: "string",
        pattern: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arrayIndexSource"]
    }
}, {
    prereducedAliases: true
}).export();
// needed to parse index signatures for JSON
Object.assign(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic, intrinsicRoots);
const intrinsicJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["schemaScope"])({
    jsonPrimitive: [
        "string",
        "number",
        {
            unit: true
        },
        {
            unit: false
        },
        {
            unit: null
        }
    ],
    jsonObject: {
        domain: "object",
        index: {
            signature: "string",
            value: "$jsonData"
        }
    },
    jsonData: [
        "$jsonPrimitive",
        "$jsonObject"
    ]
}, {
    prereducedAliases: true
}).export();
const intrinsic = {
    ...intrinsicBases,
    ...intrinsicRoots,
    ...intrinsicJson,
    emptyStructure: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["node"])("structure", {}, {
        prereduced: true
    })
};
__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic = {
    ...intrinsic
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/kinds.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nodeClassesByKind",
    ()=>nodeClassesByKind,
    "nodeImplementationsByKind",
    ()=>nodeImplementationsByKind
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$clone$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/clone.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/functions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/predicate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$divisor$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/divisor.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$kinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/kinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$pattern$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/pattern.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/alias.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$intersection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/intersection.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$morph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/morph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$proto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/proto.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$union$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/union.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$unit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/unit.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/toJsonSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/optional.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$required$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/required.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$sequence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/sequence.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$structure$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/structure.js [app-route] (ecmascript)");
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
const nodeImplementationsByKind = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$kinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boundImplementationsByKind"],
    alias: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Alias"].implementation,
    domain: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Domain"].implementation,
    unit: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$unit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Unit"].implementation,
    proto: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$proto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Proto"].implementation,
    union: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$union$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Union"].implementation,
    morph: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$morph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Morph"].implementation,
    intersection: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$intersection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Intersection"].implementation,
    divisor: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$divisor$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Divisor"].implementation,
    pattern: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$pattern$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Pattern"].implementation,
    predicate: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Predicate"].implementation,
    required: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$required$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Required"].implementation,
    optional: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Optional"].implementation,
    index: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Index"].implementation,
    sequence: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$sequence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Sequence"].implementation,
    structure: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$structure$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Structure"].implementation
};
__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].defaultConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAlphabetizedKeys"])(Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(nodeImplementationsByKind, (kind, implementation)=>[
        kind,
        implementation.defaults
    ]), {
    jitless: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["envHasCsp"])(),
    clone: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$clone$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepClone"],
    onUndeclaredKey: "ignore",
    exactOptionalPropertyTypes: true,
    numberAllowsNaN: false,
    dateAllowsInvalid: false,
    onFail: null,
    keywords: {},
    toJsonSchema: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ToJsonSchema"].defaultConfig
}));
__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].resolvedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfigs"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].defaultConfig, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].config);
const nodeClassesByKind = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$kinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boundClassesByKind"],
    alias: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Alias"].Node,
    domain: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Domain"].Node,
    unit: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$unit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Unit"].Node,
    proto: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$proto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Proto"].Node,
    union: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$union$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Union"].Node,
    morph: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$morph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Morph"].Node,
    intersection: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$intersection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Intersection"].Node,
    divisor: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$divisor$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Divisor"].Node,
    pattern: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$pattern$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Pattern"].Node,
    predicate: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$predicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Predicate"].Node,
    required: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$required$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Required"].Node,
    optional: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Optional"].Node,
    index: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Index"].Node,
    sequence: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$sequence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Sequence"].Node,
    structure: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$structure$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Structure"].Node
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/module.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RootModule",
    ()=>RootModule,
    "SchemaModule",
    ()=>SchemaModule,
    "bindModule",
    ()=>bindModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
;
;
class RootModule extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DynamicBase"] {
    // ensure `[arkKind]` is non-enumerable so it doesn't get spread on import/export
    get [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arkKind"]]() {
        return "module";
    }
}
const bindModule = (module, $)=>new RootModule((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(module, (alias, value)=>[
            alias,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(value, "module") ? bindModule(value, $) : $.bindReference(value)
        ]));
const SchemaModule = RootModule;
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/node.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseNode",
    ()=>BaseNode,
    "appendUniqueFlatRefs",
    ()=>appendUniqueFlatRefs,
    "appendUniqueNodes",
    ()=>appendUniqueNodes,
    "flatRef",
    ()=>flatRef,
    "flatRefsAreEqual",
    ()=>flatRefsAreEqual,
    "typePathToPropString",
    ()=>typePathToPropString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/functions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/path.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/traversal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
;
;
;
;
;
class BaseNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callable"] {
    attachments;
    $;
    onFail;
    includesTransform;
    includesContextualPredicate;
    isCyclic;
    allowsRequiresContext;
    rootApplyStrategy;
    contextFreeMorph;
    rootApply;
    referencesById;
    shallowReferences;
    flatRefs;
    flatMorphs;
    allows;
    get shallowMorphs() {
        return [];
    }
    constructor(attachments, $){
        super((data, pipedFromCtx, onFail = this.onFail)=>{
            if (pipedFromCtx) {
                this.traverseApply(data, pipedFromCtx);
                return pipedFromCtx.hasError() ? pipedFromCtx.errors : pipedFromCtx.data;
            }
            return this.rootApply(data, onFail);
        }, {
            attach: attachments
        });
        this.attachments = attachments;
        this.$ = $;
        this.onFail = this.meta.onFail ?? this.$.resolvedConfig.onFail;
        this.includesTransform = this.hasKind("morph") || this.hasKind("structure") && this.structuralMorph !== undefined || this.hasKind("sequence") && this.inner.defaultables !== undefined;
        // if a predicate accepts exactly one arg, we can safely skip passing context
        // technically, a predicate could be written like `(data, ...[ctx]) => ctx.mustBe("malicious")`
        // that would break here, but it feels like a pathological case and is better to let people optimize
        this.includesContextualPredicate = this.hasKind("predicate") && this.inner.predicate.length !== 1;
        this.isCyclic = this.kind === "alias";
        this.referencesById = {
            [this.id]: this
        };
        this.shallowReferences = this.hasKind("structure") ? [
            this,
            ...this.children
        ] : this.children.reduce((acc, child)=>appendUniqueNodes(acc, child.shallowReferences), [
            this
        ]);
        const isStructural = this.isStructural();
        this.flatRefs = [];
        this.flatMorphs = [];
        for(let i = 0; i < this.children.length; i++){
            this.includesTransform ||= this.children[i].includesTransform;
            this.includesContextualPredicate ||= this.children[i].includesContextualPredicate;
            this.isCyclic ||= this.children[i].isCyclic;
            if (!isStructural) {
                const childFlatRefs = this.children[i].flatRefs;
                for(let j = 0; j < childFlatRefs.length; j++){
                    const childRef = childFlatRefs[j];
                    if (!this.flatRefs.some((existing)=>flatRefsAreEqual(existing, childRef))) {
                        this.flatRefs.push(childRef);
                        for (const branch of childRef.node.branches){
                            if (branch.hasKind("morph") || branch.hasKind("intersection") && branch.structure?.structuralMorph !== undefined) {
                                this.flatMorphs.push({
                                    path: childRef.path,
                                    propString: childRef.propString,
                                    node: branch
                                });
                            }
                        }
                    }
                }
            }
            Object.assign(this.referencesById, this.children[i].referencesById);
        }
        this.flatRefs.sort((l, r)=>l.path.length > r.path.length ? 1 : l.path.length < r.path.length ? -1 : l.propString > r.propString ? 1 : l.propString < r.propString ? -1 : l.node.expression < r.node.expression ? -1 : 1);
        this.allowsRequiresContext = this.includesContextualPredicate || this.isCyclic;
        this.rootApplyStrategy = !this.allowsRequiresContext && this.flatMorphs.length === 0 ? this.shallowMorphs.length === 0 ? "allows" : this.shallowMorphs.every((morph)=>morph.length === 1 || morph.name === "$arkStructuralMorph") ? this.hasKind("union") ? // multiple morphs not yet supported for optimistic compilation
        this.branches.some((branch)=>branch.shallowMorphs.length > 1) ? "contextual" : "branchedOptimistic" : this.shallowMorphs.length > 1 ? "contextual" : "optimistic" : "contextual" : "contextual";
        this.rootApply = this.createRootApply();
        this.allows = this.allowsRequiresContext ? (data)=>this.traverseAllows(data, new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Traversal"](data, this.$.resolvedConfig)) : (data)=>this.traverseAllows(data);
    }
    createRootApply() {
        switch(this.rootApplyStrategy){
            case "allows":
                return (data, onFail)=>{
                    if (this.allows(data)) return data;
                    const ctx = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Traversal"](data, this.$.resolvedConfig);
                    this.traverseApply(data, ctx);
                    return ctx.finalize(onFail);
                };
            case "contextual":
                return (data, onFail)=>{
                    const ctx = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Traversal"](data, this.$.resolvedConfig);
                    this.traverseApply(data, ctx);
                    return ctx.finalize(onFail);
                };
            case "optimistic":
                this.contextFreeMorph = this.shallowMorphs[0];
                const clone = this.$.resolvedConfig.clone;
                return (data, onFail)=>{
                    if (this.allows(data)) {
                        return this.contextFreeMorph(clone && (typeof data === "object" && data !== null || typeof data === "function") ? clone(data) : data);
                    }
                    const ctx = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Traversal"](data, this.$.resolvedConfig);
                    this.traverseApply(data, ctx);
                    return ctx.finalize(onFail);
                };
            case "branchedOptimistic":
                return this.createBranchedOptimisticRootApply();
            default:
                this.rootApplyStrategy;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected rootApplyStrategy ${this.rootApplyStrategy}`);
        }
    }
    compiledMeta = compileMeta(this.metaJson);
    cacheGetter(name, value) {
        Object.defineProperty(this, name, {
            value
        });
        return value;
    }
    get description() {
        return this.cacheGetter("description", this.meta?.description ?? this.$.resolvedConfig[this.kind].description(this));
    }
    // we don't cache this currently since it can be updated once a scope finishes
    // resolving cyclic references, although it may be possible to ensure it is cached safely
    get references() {
        return Object.values(this.referencesById);
    }
    precedence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["precedenceOfKind"])(this.kind);
    precompilation;
    // defined as an arrow function since it is often detached, e.g. when passing to tRPC
    // otherwise, would run into issues with this binding
    assert = (data, pipedFromCtx)=>this(data, pipedFromCtx, (errors)=>errors.throw());
    traverse(data, pipedFromCtx) {
        return this(data, pipedFromCtx, null);
    }
    /** rawIn should be used internally instead */ get in() {
        // ensure the node has been finalized if in is being used externally
        return this.cacheGetter("in", this.rawIn.isRoot() ? this.$.finalize(this.rawIn) : this.rawIn);
    }
    get rawIn() {
        return this.cacheGetter("rawIn", this.getIo("in"));
    }
    /** rawOut should be used internally instead */ get out() {
        // ensure the node has been finalized if out is being used externally
        return this.cacheGetter("out", this.rawOut.isRoot() ? this.$.finalize(this.rawOut) : this.rawOut);
    }
    get rawOut() {
        return this.cacheGetter("rawOut", this.getIo("out"));
    }
    // Should be refactored to use transform
    // https://github.com/arktypeio/arktype/issues/1020
    getIo(ioKind) {
        if (!this.includesTransform) return this;
        const ioInner = {};
        for (const [k, v] of this.innerEntries){
            const keySchemaImplementation = this.impl.keys[k];
            if (keySchemaImplementation.reduceIo) keySchemaImplementation.reduceIo(ioKind, ioInner, v);
            else if (keySchemaImplementation.child) {
                const childValue = v;
                ioInner[k] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(childValue) ? childValue.map((child)=>ioKind === "in" ? child.rawIn : child.rawOut) : ioKind === "in" ? childValue.rawIn : childValue.rawOut;
            } else ioInner[k] = v;
        }
        return this.$.node(this.kind, ioInner);
    }
    toJSON() {
        return this.json;
    }
    toString() {
        return `Type<${this.expression}>`;
    }
    equals(r) {
        const rNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"])(r) ? r : this.$.parseDefinition(r);
        return this.innerHash === rNode.innerHash;
    }
    ifEquals(r) {
        return this.equals(r) ? this : undefined;
    }
    hasKind(kind) {
        return this.kind === kind;
    }
    assertHasKind(kind) {
        if (this.kind !== kind) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(`${this.kind} node was not of asserted kind ${kind}`);
        return this;
    }
    hasKindIn(...kinds) {
        return kinds.includes(this.kind);
    }
    assertHasKindIn(...kinds) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["includes"])(kinds, this.kind)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(`${this.kind} node was not one of asserted kinds ${kinds}`);
        return this;
    }
    isBasis() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["includes"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["basisKinds"], this.kind);
    }
    isConstraint() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["includes"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKinds"], this.kind);
    }
    isStructural() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["includes"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["structuralKinds"], this.kind);
    }
    isRefinement() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["includes"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refinementKinds"], this.kind);
    }
    isRoot() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["includes"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootKinds"], this.kind);
    }
    isUnknown() {
        return this.hasKind("intersection") && this.children.length === 0;
    }
    isNever() {
        return this.hasKind("union") && this.children.length === 0;
    }
    hasUnit(value) {
        return this.hasKind("unit") && this.allows(value);
    }
    hasOpenIntersection() {
        return this.impl.intersectionIsOpen;
    }
    get nestableExpression() {
        return this.expression;
    }
    select(selector) {
        const normalized = NodeSelector.normalize(selector);
        return this._select(normalized);
    }
    _select(selector) {
        let nodes = NodeSelector.applyBoundary[selector.boundary ?? "references"](this);
        if (selector.kind) nodes = nodes.filter((n)=>n.kind === selector.kind);
        if (selector.where) nodes = nodes.filter(selector.where);
        return NodeSelector.applyMethod[selector.method ?? "filter"](nodes, this, selector);
    }
    transform(mapper, opts) {
        return this._transform(mapper, this._createTransformContext(opts));
    }
    _createTransformContext(opts) {
        return {
            root: this,
            selected: undefined,
            seen: {},
            path: [],
            parseOptions: {
                prereduced: opts?.prereduced ?? false
            },
            undeclaredKeyHandling: undefined,
            ...opts
        };
    }
    _transform(mapper, ctx) {
        const $ = ctx.bindScope ?? this.$;
        if (ctx.seen[this.id]) // Cyclic handling needs to be made more robust
        // https://github.com/arktypeio/arktype/issues/944
        return this.$.lazilyResolve(ctx.seen[this.id]);
        if (ctx.shouldTransform?.(this, ctx) === false) return this;
        let transformedNode;
        ctx.seen[this.id] = ()=>transformedNode;
        if (this.hasKind("structure") && this.undeclared !== ctx.undeclaredKeyHandling) {
            ctx = {
                ...ctx,
                undeclaredKeyHandling: this.undeclared
            };
        }
        const innerWithTransformedChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(this.inner, (k, v)=>{
            if (!this.impl.keys[k].child) return [
                k,
                v
            ];
            const children = v;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(children)) {
                const transformed = children._transform(mapper, ctx);
                return transformed ? [
                    k,
                    transformed
                ] : [];
            }
            // if the value was previously explicitly set to an empty list,
            // (e.g. branches for `never`), ensure it is not pruned
            if (children.length === 0) return [
                k,
                v
            ];
            const transformed = children.flatMap((n)=>{
                const transformedChild = n._transform(mapper, ctx);
                return transformedChild ?? [];
            });
            return transformed.length ? [
                k,
                transformed
            ] : [];
        });
        delete ctx.seen[this.id];
        const innerWithMeta = Object.assign(innerWithTransformedChildren, {
            meta: this.meta
        });
        const transformedInner = ctx.selected && !ctx.selected.includes(this) ? innerWithMeta : mapper(this.kind, innerWithMeta, ctx);
        if (transformedInner === null) return null;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"])(transformedInner)) return transformedNode = transformedInner;
        const transformedKeys = Object.keys(transformedInner);
        const hasNoTypedKeys = transformedKeys.length === 0 || transformedKeys.length === 1 && transformedKeys[0] === "meta";
        if (hasNoTypedKeys && // if inner was previously an empty object (e.g. unknown) ensure it is not pruned
        !(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmptyObject"])(this.inner)) return null;
        if ((this.kind === "required" || this.kind === "optional" || this.kind === "index") && !("value" in transformedInner)) {
            return ctx.undeclaredKeyHandling ? {
                ...transformedInner,
                value: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.unknown
            } : null;
        }
        if (this.kind === "morph") {
            ;
            transformedInner.in ??= __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.unknown;
        }
        return transformedNode = $.node(this.kind, transformedInner, ctx.parseOptions);
    }
    configureReferences(meta, selector = "references") {
        const normalized = NodeSelector.normalize(selector);
        const mapper = typeof meta === "string" ? (kind, inner)=>({
                ...inner,
                meta: {
                    ...inner.meta,
                    description: meta
                }
            }) : typeof meta === "function" ? (kind, inner)=>({
                ...inner,
                meta: meta(inner.meta)
            }) : (kind, inner)=>({
                ...inner,
                meta: {
                    ...inner.meta,
                    ...meta
                }
            });
        if (normalized.boundary === "self") {
            return this.$.node(this.kind, mapper(this.kind, {
                ...this.inner,
                meta: this.meta
            }));
        }
        const rawSelected = this._select(normalized);
        const selected = rawSelected && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["liftArray"])(rawSelected);
        const shouldTransform = normalized.boundary === "child" ? (node, ctx)=>ctx.root.children.includes(node) : normalized.boundary === "shallow" ? (node)=>node.kind !== "structure" : ()=>true;
        return this.$.finalize(this.transform(mapper, {
            shouldTransform,
            selected
        }));
    }
}
const NodeSelector = {
    applyBoundary: {
        self: (node)=>[
                node
            ],
        child: (node)=>[
                ...node.children
            ],
        shallow: (node)=>[
                ...node.shallowReferences
            ],
        references: (node)=>[
                ...node.references
            ]
    },
    applyMethod: {
        filter: (nodes)=>nodes,
        assertFilter: (nodes, from, selector)=>{
            if (nodes.length === 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(writeSelectAssertionMessage(from, selector));
            return nodes;
        },
        find: (nodes)=>nodes[0],
        assertFind: (nodes, from, selector)=>{
            if (nodes.length === 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(writeSelectAssertionMessage(from, selector));
            return nodes[0];
        }
    },
    normalize: (selector)=>typeof selector === "function" ? {
            boundary: "references",
            method: "filter",
            where: selector
        } : typeof selector === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isKeyOf"])(selector, NodeSelector.applyBoundary) ? {
            method: "filter",
            boundary: selector
        } : {
            boundary: "references",
            method: "filter",
            kind: selector
        } : {
            boundary: "references",
            method: "filter",
            ...selector
        }
};
const writeSelectAssertionMessage = (from, selector)=>`${from} had no references matching ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(selector)}.`;
const typePathToPropString = (path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringifyPath"])(path, {
        stringifyNonKey: (node)=>node.expression
    });
const referenceMatcher = /"(\$ark\.[^"]+)"/g;
const compileMeta = (metaJson)=>JSON.stringify(metaJson).replace(referenceMatcher, "$1");
const flatRef = (path, node)=>({
        path,
        node,
        propString: typePathToPropString(path)
    });
const flatRefsAreEqual = (l, r)=>l.propString === r.propString && l.node.equals(r.node);
const appendUniqueFlatRefs = (existing, refs)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendUnique"])(existing, refs, {
        isEqual: flatRefsAreEqual
    });
const appendUniqueNodes = (existing, refs)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendUnique"])(existing, refs, {
        isEqual: (l, r)=>l.equals(r)
    });
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/parse.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNode",
    ()=>createNode,
    "nodesByRegisteredId",
    ()=>nodesByRegisteredId,
    "parseNode",
    ()=>parseNode,
    "registerNodeId",
    ()=>registerNodeId,
    "schemaKindOf",
    ()=>schemaKindOf,
    "withId",
    ()=>withId,
    "withMeta",
    ()=>withMeta,
    "writeInvalidSchemaMessage",
    ()=>writeInvalidSchemaMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$kinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/kinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
;
;
;
;
;
;
const schemaKindOf = (schema, allowedKinds)=>{
    const kind = discriminateRootKind(schema);
    if (allowedKinds && !allowedKinds.includes(kind)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(`Root of kind ${kind} should be one of ${allowedKinds}`);
    }
    return kind;
};
const discriminateRootKind = (schema)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(schema, "root")) return schema.kind;
    if (typeof schema === "string") {
        return schema[0] === "$" ? "alias" : schema in __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainDescriptions"] ? "domain" : "proto";
    }
    if (typeof schema === "function") return "proto";
    // throw at end of function
    if (typeof schema !== "object" || schema === null) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeInvalidSchemaMessage(schema));
    if ("morphs" in schema) return "morph";
    if ("branches" in schema || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(schema)) return "union";
    if ("unit" in schema) return "unit";
    if ("reference" in schema) return "alias";
    const schemaKeys = Object.keys(schema);
    if (schemaKeys.length === 0 || schemaKeys.some((k)=>k in __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKeys"])) return "intersection";
    if ("proto" in schema) return "proto";
    if ("domain" in schema) return "domain";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeInvalidSchemaMessage(schema));
};
const writeInvalidSchemaMessage = (schema)=>`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(schema)} is not a valid type schema`;
const nodeCountsByPrefix = {};
const serializeListableChild = (listableNode)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(listableNode) ? listableNode.map((node)=>node.collapsibleJson) : listableNode.collapsibleJson;
const nodesByRegisteredId = {};
__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].nodesByRegisteredId = nodesByRegisteredId;
const registerNodeId = (prefix)=>{
    nodeCountsByPrefix[prefix] ??= 0;
    return `${prefix}${++nodeCountsByPrefix[prefix]}`;
};
const parseNode = (ctx)=>{
    const impl = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$kinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nodeImplementationsByKind"][ctx.kind];
    const configuredSchema = impl.applyConfig?.(ctx.def, ctx.$.resolvedConfig) ?? ctx.def;
    const inner = {};
    const { meta: metaSchema, ...innerSchema } = configuredSchema;
    const meta = metaSchema === undefined ? {} : typeof metaSchema === "string" ? {
        description: metaSchema
    } : metaSchema;
    // ensure node entries are parsed in order of precedence, with non-children
    // parsed first
    const innerSchemaEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entriesOf"])(innerSchema).sort(([lKey], [rKey])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNodeKind"])(lKey) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNodeKind"])(rKey) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["precedenceOfKind"])(lKey) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["precedenceOfKind"])(rKey) : 1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNodeKind"])(rKey) ? -1 : lKey < rKey ? -1 : 1).filter(([k, v])=>{
        // move meta. prefixed props to meta, overwriting existing nested
        // props of the same name if they exist
        if (k.startsWith("meta.")) {
            const metaKey = k.slice(5);
            meta[metaKey] = v;
            return false;
        }
        return true;
    });
    for (const entry of innerSchemaEntries){
        const k = entry[0];
        const keyImpl = impl.keys[k];
        if (!keyImpl) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(`Key ${k} is not valid on ${ctx.kind} schema`);
        const v = keyImpl.parse ? keyImpl.parse(entry[1], ctx) : entry[1];
        if (v !== __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unset"] && (v !== undefined || keyImpl.preserveUndefined)) inner[k] = v;
    }
    if (impl.reduce && !ctx.prereduced) {
        const reduced = impl.reduce(inner, ctx.$);
        if (reduced) {
            if (reduced instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return reduced.throw();
            // we can't cache this reduction for now in case the reduction involved
            // impliedSiblings
            return withMeta(reduced, meta);
        }
    }
    const node = createNode({
        id: ctx.id,
        kind: ctx.kind,
        inner,
        meta,
        $: ctx.$
    });
    return node;
};
const createNode = ({ id, kind, inner, meta, $, ignoreCache })=>{
    const impl = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$kinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nodeImplementationsByKind"][kind];
    const innerEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["entriesOf"])(inner);
    const children = [];
    let innerJson = {};
    for (const [k, v] of innerEntries){
        const keyImpl = impl.keys[k];
        const serialize = keyImpl.serialize ?? (keyImpl.child ? serializeListableChild : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultValueSerializer"]);
        innerJson[k] = serialize(v);
        if (keyImpl.child === true) {
            const listableNode = v;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(listableNode)) children.push(...listableNode);
            else children.push(listableNode);
        } else if (typeof keyImpl.child === "function") children.push(...keyImpl.child(v));
    }
    if (impl.finalizeInnerJson) innerJson = impl.finalizeInnerJson(innerJson);
    let json = {
        ...innerJson
    };
    let metaJson = {};
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmptyObject"])(meta)) {
        metaJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(meta, (k, v)=>[
                k,
                k === "examples" ? v : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultValueSerializer"])(v)
            ]);
        json.meta = possiblyCollapse(metaJson, "description", true);
    }
    innerJson = possiblyCollapse(innerJson, impl.collapsibleKey, false);
    const innerHash = JSON.stringify({
        kind,
        ...innerJson
    });
    json = possiblyCollapse(json, impl.collapsibleKey, false);
    const collapsibleJson = possiblyCollapse(json, impl.collapsibleKey, true);
    const hash = JSON.stringify({
        kind,
        ...json
    });
    // we have to wait until after reduction to return a cached entry,
    // since reduction can add impliedSiblings
    if ($.nodesByHash[hash] && !ignoreCache) return $.nodesByHash[hash];
    const attachments = {
        id,
        kind,
        impl,
        inner,
        innerEntries,
        innerJson,
        innerHash,
        meta,
        metaJson,
        json,
        hash,
        collapsibleJson: collapsibleJson,
        children
    };
    if (kind !== "intersection") {
        for(const k in inner)if (k !== "in" && k !== "out") attachments[k] = inner[k];
    }
    const node = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$kinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nodeClassesByKind"][kind](attachments, $);
    return $.nodesByHash[hash] = node;
};
const withId = (node, id)=>{
    if (node.id === id) return node;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"])(nodesByRegisteredId[id])) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected attempt to overwrite node id ${id}`);
    // have to ignore cache to force creation of new potentially cyclic id
    return createNode({
        id,
        kind: node.kind,
        inner: node.inner,
        meta: node.meta,
        $: node.$,
        ignoreCache: true
    });
};
const withMeta = (node, meta, id)=>{
    if (id && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"])(nodesByRegisteredId[id])) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected attempt to overwrite node id ${id}`);
    return createNode({
        id: id ?? registerNodeId(meta.alias ?? node.kind),
        kind: node.kind,
        inner: node.inner,
        meta,
        $: node.$
    });
};
const possiblyCollapse = (json, toKey, allowPrimitive)=>{
    const collapsibleKeys = Object.keys(json);
    if (collapsibleKeys.length === 1 && collapsibleKeys[0] === toKey) {
        const collapsed = json[toKey];
        if (allowPrimitive) return collapsed;
        if (// if the collapsed value is still an object
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDomain"])(collapsed, "object") && // and the JSON did not include any implied keys
        (Object.keys(collapsed).length === 1 || Array.isArray(collapsed))) {
            // we can replace it with its collapsed value
            return collapsed;
        }
    }
    return json;
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/predicate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Predicate",
    ()=>Predicate,
    "PredicateNode",
    ()=>PredicateNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/constraint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
;
;
;
const describePredicate = (predicate)=>`valid according to ${predicate?.name || "an anonymous predicate"}`;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "predicate",
    hasAssociatedError: true,
    collapsibleKey: "predicate",
    keys: {
        predicate: {}
    },
    normalize: (schema)=>typeof schema === "function" ? {
            predicate: schema
        } : schema,
    defaults: {
        description: (node)=>describePredicate(node.predicate),
        // error contexts from ctx.reject have neither a description nor a predicate
        expected: (ctx)=>ctx.description ?? describePredicate(ctx.predicate)
    },
    intersectionIsOpen: true,
    intersections: {
        // as long as the narrows in l and r are individually safe to check
        // in the order they're specified, checking them in the order
        // resulting from this intersection should also be safe.
        predicate: ()=>null
    }
});
class PredicateNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseConstraint"] {
    serializedPredicate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registeredReference"])(this.predicate);
    compiledCondition = `${this.serializedPredicate}(data, ctx)`;
    compiledNegation = `!${this.compiledCondition}`;
    impliedBasis = null;
    expression = this.serializedPredicate;
    traverseAllows = this.predicate;
    errorContext = {
        code: "predicate",
        description: this.description,
        meta: this.meta
    };
    compiledErrorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compileObjectLiteral"])(this.errorContext);
    traverseApply = (data, ctx)=>{
        const errorCount = ctx.currentErrorCount;
        if (!this.predicate(data, ctx.external) && ctx.currentErrorCount === errorCount) ctx.errorFromNodeContext(this.errorContext);
    };
    compile(js) {
        if (js.traversalKind === "Allows") {
            js.return(this.compiledCondition);
            return;
        }
        js.initializeErrorCount();
        js.if(// only add the default error if the predicate didn't add one itself
        `${this.compiledNegation} && ctx.currentErrorCount === errorCount`, ()=>js.line(`ctx.errorFromNodeContext(${this.compiledErrorContext})`));
    }
    reduceJsonSchema(base, ctx) {
        return ctx.fallback.predicate({
            code: "predicate",
            base,
            predicate: this.predicate
        });
    }
}
const Predicate = {
    implementation,
    Node: PredicateNode
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/after.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "After",
    ()=>After,
    "AfterNode",
    ()=>AfterNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/range.js [app-route] (ecmascript)");
;
;
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "after",
    collapsibleKey: "rule",
    hasAssociatedError: true,
    keys: {
        rule: {
            parse: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDateLimit"],
            serialize: (schema)=>schema.toISOString()
        }
    },
    normalize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateSchemaNormalizer"])("after"),
    defaults: {
        description: (node)=>`${node.collapsibleLimitString} or later`,
        actual: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["describeCollapsibleDate"]
    },
    intersections: {
        after: (l, r)=>l.isStricterThan(r) ? l : r
    }
});
class AfterNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseRange"] {
    impliedBasis = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.Date.internal;
    collapsibleLimitString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["describeCollapsibleDate"])(this.rule);
    traverseAllows = (data)=>data >= this.rule;
    reduceJsonSchema(base, ctx) {
        return ctx.fallback.date({
            code: "date",
            base,
            after: this.rule
        });
    }
}
const After = {
    implementation,
    Node: AfterNode
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/before.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Before",
    ()=>Before,
    "BeforeNode",
    ()=>BeforeNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/range.js [app-route] (ecmascript)");
;
;
;
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "before",
    collapsibleKey: "rule",
    hasAssociatedError: true,
    keys: {
        rule: {
            parse: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDateLimit"],
            serialize: (schema)=>schema.toISOString()
        }
    },
    normalize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateSchemaNormalizer"])("before"),
    defaults: {
        description: (node)=>`${node.collapsibleLimitString} or earlier`,
        actual: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["describeCollapsibleDate"]
    },
    intersections: {
        before: (l, r)=>l.isStricterThan(r) ? l : r,
        after: (before, after, ctx)=>before.overlapsRange(after) ? before.overlapIsUnit(after) ? ctx.$.node("unit", {
                unit: before.rule
            }) : null : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"].init("range", before, after)
    }
});
class BeforeNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseRange"] {
    collapsibleLimitString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["describeCollapsibleDate"])(this.rule);
    traverseAllows = (data)=>data <= this.rule;
    impliedBasis = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.Date.internal;
    reduceJsonSchema(base, ctx) {
        return ctx.fallback.date({
            code: "date",
            base,
            before: this.rule
        });
    }
}
const Before = {
    implementation,
    Node: BeforeNode
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/divisor.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Divisor",
    ()=>Divisor,
    "DivisorNode",
    ()=>DivisorNode,
    "writeIndivisibleMessage",
    ()=>writeIndivisibleMessage,
    "writeNonIntegerDivisorMessage",
    ()=>writeNonIntegerDivisorMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/constraint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
;
;
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "divisor",
    collapsibleKey: "rule",
    keys: {
        rule: {
            parse: (divisor)=>Number.isInteger(divisor) ? divisor : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeNonIntegerDivisorMessage(divisor))
        }
    },
    normalize: (schema)=>typeof schema === "number" ? {
            rule: schema
        } : schema,
    hasAssociatedError: true,
    defaults: {
        description: (node)=>node.rule === 1 ? "an integer" : node.rule === 2 ? "even" : `a multiple of ${node.rule}`
    },
    intersections: {
        divisor: (l, r, ctx)=>ctx.$.node("divisor", {
                rule: Math.abs(l.rule * r.rule / greatestCommonDivisor(l.rule, r.rule))
            })
    },
    obviatesBasisDescription: true
});
class DivisorNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InternalPrimitiveConstraint"] {
    traverseAllows = (data)=>data % this.rule === 0;
    compiledCondition = `data % ${this.rule} === 0`;
    compiledNegation = `data % ${this.rule} !== 0`;
    impliedBasis = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.number.internal;
    expression = `% ${this.rule}`;
    reduceJsonSchema(schema) {
        schema.type = "integer";
        if (this.rule === 1) return schema;
        schema.multipleOf = this.rule;
        return schema;
    }
}
const Divisor = {
    implementation,
    Node: DivisorNode
};
const writeIndivisibleMessage = (t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeInvalidOperandMessage"])("divisor", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.number, t);
const writeNonIntegerDivisorMessage = (divisor)=>`divisor must be an integer (was ${divisor})`;
// https://en.wikipedia.org/wiki/Euclidean_algorithm
const greatestCommonDivisor = (l, r)=>{
    let previous;
    let greatestCommonDivisor = l;
    let current = r;
    while(current !== 0){
        previous = current;
        current = greatestCommonDivisor % current;
        greatestCommonDivisor = previous;
    }
    return greatestCommonDivisor;
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/exactLength.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExactLength",
    ()=>ExactLength,
    "ExactLengthNode",
    ()=>ExactLengthNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/constraint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/toJsonSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/range.js [app-route] (ecmascript)");
;
;
;
;
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "exactLength",
    collapsibleKey: "rule",
    keys: {
        rule: {
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLengthRuleParser"])("exactLength")
        }
    },
    normalize: (schema)=>typeof schema === "number" ? {
            rule: schema
        } : schema,
    hasAssociatedError: true,
    defaults: {
        description: (node)=>`exactly length ${node.rule}`,
        actual: (data)=>`${data.length}`
    },
    intersections: {
        exactLength: (l, r, ctx)=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"].init("unit", ctx.$.node("unit", {
                unit: l.rule
            }), ctx.$.node("unit", {
                unit: r.rule
            }), {
                path: [
                    "length"
                ]
            }),
        minLength: (exactLength, minLength)=>exactLength.rule >= minLength.rule ? exactLength : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"].init("range", exactLength, minLength),
        maxLength: (exactLength, maxLength)=>exactLength.rule <= maxLength.rule ? exactLength : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"].init("range", exactLength, maxLength)
    }
});
class ExactLengthNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InternalPrimitiveConstraint"] {
    traverseAllows = (data)=>data.length === this.rule;
    compiledCondition = `data.length === ${this.rule}`;
    compiledNegation = `data.length !== ${this.rule}`;
    impliedBasis = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.lengthBoundable.internal;
    expression = `== ${this.rule}`;
    reduceJsonSchema(schema) {
        switch(schema.type){
            case "string":
                schema.minLength = this.rule;
                schema.maxLength = this.rule;
                return schema;
            case "array":
                schema.minItems = this.rule;
                schema.maxItems = this.rule;
                return schema;
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ToJsonSchema"].throwInternalOperandError("exactLength", schema);
        }
    }
}
const ExactLength = {
    implementation,
    Node: ExactLengthNode
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/kinds.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "boundClassesByKind",
    ()=>boundClassesByKind,
    "boundImplementationsByKind",
    ()=>boundImplementationsByKind
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$after$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/after.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$before$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/before.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$exactLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/exactLength.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$max$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/max.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$maxLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/maxLength.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/min.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$minLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/minLength.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
const boundImplementationsByKind = {
    min: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Min"].implementation,
    max: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$max$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Max"].implementation,
    minLength: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$minLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MinLength"].implementation,
    maxLength: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$maxLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MaxLength"].implementation,
    exactLength: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$exactLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ExactLength"].implementation,
    after: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$after$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["After"].implementation,
    before: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$before$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Before"].implementation
};
const boundClassesByKind = {
    min: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Min"].Node,
    max: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$max$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Max"].Node,
    minLength: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$minLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MinLength"].Node,
    maxLength: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$maxLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MaxLength"].Node,
    exactLength: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$exactLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ExactLength"].Node,
    after: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$after$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["After"].Node,
    before: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$before$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Before"].Node
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/max.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Max",
    ()=>Max,
    "MaxNode",
    ()=>MaxNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/range.js [app-route] (ecmascript)");
;
;
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "max",
    collapsibleKey: "rule",
    hasAssociatedError: true,
    keys: {
        rule: {},
        exclusive: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseExclusiveKey"]
    },
    normalize: (schema)=>typeof schema === "number" ? {
            rule: schema
        } : schema,
    defaults: {
        description: (node)=>{
            if (node.rule === 0) return node.exclusive ? "negative" : "non-positive";
            return `${node.exclusive ? "less than" : "at most"} ${node.rule}`;
        }
    },
    intersections: {
        max: (l, r)=>l.isStricterThan(r) ? l : r,
        min: (max, min, ctx)=>max.overlapsRange(min) ? max.overlapIsUnit(min) ? ctx.$.node("unit", {
                unit: max.rule
            }) : null : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"].init("range", max, min)
    },
    obviatesBasisDescription: true
});
class MaxNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseRange"] {
    impliedBasis = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.number.internal;
    traverseAllows = this.exclusive ? (data)=>data < this.rule : (data)=>data <= this.rule;
    reduceJsonSchema(schema) {
        if (this.exclusive) schema.exclusiveMaximum = this.rule;
        else schema.maximum = this.rule;
        return schema;
    }
}
const Max = {
    implementation,
    Node: MaxNode
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/maxLength.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaxLength",
    ()=>MaxLength,
    "MaxLengthNode",
    ()=>MaxLengthNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/toJsonSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/range.js [app-route] (ecmascript)");
;
;
;
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "maxLength",
    collapsibleKey: "rule",
    hasAssociatedError: true,
    keys: {
        rule: {
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLengthRuleParser"])("maxLength")
        }
    },
    reduce: (inner, $)=>inner.rule === 0 ? $.node("exactLength", inner) : undefined,
    normalize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLengthSchemaNormalizer"])("maxLength"),
    defaults: {
        description: (node)=>`at most length ${node.rule}`,
        actual: (data)=>`${data.length}`
    },
    intersections: {
        maxLength: (l, r)=>l.isStricterThan(r) ? l : r,
        minLength: (max, min, ctx)=>max.overlapsRange(min) ? max.overlapIsUnit(min) ? ctx.$.node("exactLength", {
                rule: max.rule
            }) : null : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"].init("range", max, min)
    }
});
class MaxLengthNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseRange"] {
    impliedBasis = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.lengthBoundable.internal;
    traverseAllows = (data)=>data.length <= this.rule;
    reduceJsonSchema(schema) {
        switch(schema.type){
            case "string":
                schema.maxLength = this.rule;
                return schema;
            case "array":
                schema.maxItems = this.rule;
                return schema;
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ToJsonSchema"].throwInternalOperandError("maxLength", schema);
        }
    }
}
const MaxLength = {
    implementation,
    Node: MaxLengthNode
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/min.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Min",
    ()=>Min,
    "MinNode",
    ()=>MinNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/range.js [app-route] (ecmascript)");
;
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "min",
    collapsibleKey: "rule",
    hasAssociatedError: true,
    keys: {
        rule: {},
        exclusive: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseExclusiveKey"]
    },
    normalize: (schema)=>typeof schema === "number" ? {
            rule: schema
        } : schema,
    defaults: {
        description: (node)=>{
            if (node.rule === 0) return node.exclusive ? "positive" : "non-negative";
            return `${node.exclusive ? "more than" : "at least"} ${node.rule}`;
        }
    },
    intersections: {
        min: (l, r)=>l.isStricterThan(r) ? l : r
    },
    obviatesBasisDescription: true
});
class MinNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseRange"] {
    impliedBasis = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.number.internal;
    traverseAllows = this.exclusive ? (data)=>data > this.rule : (data)=>data >= this.rule;
    reduceJsonSchema(schema) {
        if (this.exclusive) schema.exclusiveMinimum = this.rule;
        else schema.minimum = this.rule;
        return schema;
    }
}
const Min = {
    implementation,
    Node: MinNode
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/minLength.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MinLength",
    ()=>MinLength,
    "MinLengthNode",
    ()=>MinLengthNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/toJsonSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/range.js [app-route] (ecmascript)");
;
;
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "minLength",
    collapsibleKey: "rule",
    hasAssociatedError: true,
    keys: {
        rule: {
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLengthRuleParser"])("minLength")
        }
    },
    reduce: (inner)=>inner.rule === 0 ? // a minimum length of zero is trivially satisfied
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.unknown : undefined,
    normalize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLengthSchemaNormalizer"])("minLength"),
    defaults: {
        description: (node)=>node.rule === 1 ? "non-empty" : `at least length ${node.rule}`,
        // avoid default message like "must be non-empty (was 0)"
        actual: (data)=>data.length === 0 ? "" : `${data.length}`
    },
    intersections: {
        minLength: (l, r)=>l.isStricterThan(r) ? l : r
    }
});
class MinLengthNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseRange"] {
    impliedBasis = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.lengthBoundable.internal;
    traverseAllows = (data)=>data.length >= this.rule;
    reduceJsonSchema(schema) {
        switch(schema.type){
            case "string":
                schema.minLength = this.rule;
                return schema;
            case "array":
                schema.minItems = this.rule;
                return schema;
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ToJsonSchema"].throwInternalOperandError("minLength", schema);
        }
    }
}
const MinLength = {
    implementation,
    Node: MinLengthNode
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/pattern.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pattern",
    ()=>Pattern,
    "PatternNode",
    ()=>PatternNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/constraint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
;
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "pattern",
    collapsibleKey: "rule",
    keys: {
        rule: {},
        flags: {}
    },
    normalize: (schema)=>typeof schema === "string" ? {
            rule: schema
        } : schema instanceof RegExp ? schema.flags ? {
            rule: schema.source,
            flags: schema.flags
        } : {
            rule: schema.source
        } : schema,
    obviatesBasisDescription: true,
    obviatesBasisExpression: true,
    hasAssociatedError: true,
    intersectionIsOpen: true,
    defaults: {
        description: (node)=>`matched by ${node.rule}`
    },
    intersections: {
        // for now, non-equal regex are naively intersected:
        // https://github.com/arktypeio/arktype/issues/853
        pattern: ()=>null
    }
});
class PatternNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InternalPrimitiveConstraint"] {
    instance = new RegExp(this.rule, this.flags);
    expression = `${this.instance}`;
    traverseAllows = this.instance.test.bind(this.instance);
    compiledCondition = `${this.expression}.test(data)`;
    compiledNegation = `!${this.compiledCondition}`;
    impliedBasis = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.string.internal;
    reduceJsonSchema(base, ctx) {
        if (base.pattern) {
            return ctx.fallback.patternIntersection({
                code: "patternIntersection",
                base: base,
                pattern: this.rule
            });
        }
        base.pattern = this.rule;
        return base;
    }
}
const Pattern = {
    implementation,
    Node: PatternNode
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/range.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseRange",
    ()=>BaseRange,
    "boundKindPairsByLower",
    ()=>boundKindPairsByLower,
    "compileComparator",
    ()=>compileComparator,
    "createDateSchemaNormalizer",
    ()=>createDateSchemaNormalizer,
    "createLengthRuleParser",
    ()=>createLengthRuleParser,
    "createLengthSchemaNormalizer",
    ()=>createLengthSchemaNormalizer,
    "dateLimitToString",
    ()=>dateLimitToString,
    "parseDateLimit",
    ()=>parseDateLimit,
    "parseExclusiveKey",
    ()=>parseExclusiveKey,
    "writeInvalidLengthBoundMessage",
    ()=>writeInvalidLengthBoundMessage,
    "writeUnboundableMessage",
    ()=>writeUnboundableMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/constraint.js [app-route] (ecmascript)");
;
;
class BaseRange extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InternalPrimitiveConstraint"] {
    boundOperandKind = operandKindsByBoundKind[this.kind];
    compiledActual = this.boundOperandKind === "value" ? `data` : this.boundOperandKind === "length" ? `data.length` : `data.valueOf()`;
    comparator = compileComparator(this.kind, this.exclusive);
    numericLimit = this.rule.valueOf();
    expression = `${this.comparator} ${this.rule}`;
    compiledCondition = `${this.compiledActual} ${this.comparator} ${this.numericLimit}`;
    compiledNegation = `${this.compiledActual} ${negatedComparators[this.comparator]} ${this.numericLimit}`;
    // we need to compute stringLimit before errorContext, which references it
    // transitively through description for date bounds
    stringLimit = this.boundOperandKind === "date" ? dateLimitToString(this.numericLimit) : `${this.numericLimit}`;
    limitKind = this.comparator["0"] === "<" ? "upper" : "lower";
    isStricterThan(r) {
        const thisLimitIsStricter = this.limitKind === "upper" ? this.numericLimit < r.numericLimit : this.numericLimit > r.numericLimit;
        return thisLimitIsStricter || this.numericLimit === r.numericLimit && this.exclusive === true && !r.exclusive;
    }
    overlapsRange(r) {
        if (this.isStricterThan(r)) return false;
        if (this.numericLimit === r.numericLimit && (this.exclusive || r.exclusive)) return false;
        return true;
    }
    overlapIsUnit(r) {
        return this.numericLimit === r.numericLimit && !this.exclusive && !r.exclusive;
    }
}
const negatedComparators = {
    "<": ">=",
    "<=": ">",
    ">": "<=",
    ">=": "<"
};
const boundKindPairsByLower = {
    min: "max",
    minLength: "maxLength",
    after: "before"
};
const parseExclusiveKey = {
    // omit key with value false since it is the default
    parse: (flag)=>flag || undefined
};
const createLengthSchemaNormalizer = (kind)=>(schema)=>{
        if (typeof schema === "number") return {
            rule: schema
        };
        const { exclusive, ...normalized } = schema;
        return exclusive ? {
            ...normalized,
            rule: kind === "minLength" ? normalized.rule + 1 : normalized.rule - 1
        } : normalized;
    };
const createDateSchemaNormalizer = (kind)=>(schema)=>{
        if (typeof schema === "number" || typeof schema === "string" || schema instanceof Date) return {
            rule: schema
        };
        const { exclusive, ...normalized } = schema;
        if (!exclusive) return normalized;
        const numericLimit = typeof normalized.rule === "number" ? normalized.rule : typeof normalized.rule === "string" ? new Date(normalized.rule).valueOf() : normalized.rule.valueOf();
        return exclusive ? {
            ...normalized,
            rule: kind === "after" ? numericLimit + 1 : numericLimit - 1
        } : normalized;
    };
const parseDateLimit = (limit)=>typeof limit === "string" || typeof limit === "number" ? new Date(limit) : limit;
const writeInvalidLengthBoundMessage = (kind, limit)=>`${kind} bound must be a positive integer (was ${limit})`;
const createLengthRuleParser = (kind)=>(limit)=>{
        if (!Number.isInteger(limit) || limit < 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeInvalidLengthBoundMessage(kind, limit));
        return limit;
    };
const operandKindsByBoundKind = {
    min: "value",
    max: "value",
    minLength: "length",
    maxLength: "length",
    after: "date",
    before: "date"
};
const compileComparator = (kind, exclusive)=>`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isKeyOf"])(kind, boundKindPairsByLower) ? ">" : "<"}${exclusive ? "" : "="}`;
const dateLimitToString = (limit)=>typeof limit === "string" ? limit : new Date(limit).toLocaleString();
const writeUnboundableMessage = (root)=>`Bounded expression ${root} must be exactly one of number, string, Array, or Date`;
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/alias.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alias",
    ()=>Alias,
    "AliasNode",
    ()=>AliasNode,
    "normalizeAliasSchema",
    ()=>normalizeAliasSchema,
    "writeShallowCycleErrorMessage",
    ()=>writeShallowCycleErrorMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/parse.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/intersections.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/root.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/utils.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
const normalizeAliasSchema = (schema)=>typeof schema === "string" ? {
        reference: schema
    } : schema;
const neverIfDisjoint = (result)=>result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"] ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.never.internal : result;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "alias",
    hasAssociatedError: false,
    collapsibleKey: "reference",
    keys: {
        reference: {
            serialize: (s)=>s.startsWith("$") ? s : `$ark.${s}`
        },
        resolve: {}
    },
    normalize: normalizeAliasSchema,
    defaults: {
        description: (node)=>node.reference
    },
    intersections: {
        alias: (l, r, ctx)=>ctx.$.lazilyResolve(()=>neverIfDisjoint((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectOrPipeNodes"])(l.resolution, r.resolution, ctx)), `${l.reference}${ctx.pipe ? "=>" : "&"}${r.reference}`),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defineRightwardIntersections"])("alias", (l, r, ctx)=>{
            if (r.isUnknown()) return l;
            if (r.isNever()) return r;
            if (r.isBasis() && !r.overlaps(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.object)) {
                // can be more robust as part of https://github.com/arktypeio/arktype/issues/1026
                return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"].init("assignability", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.object, r);
            }
            return ctx.$.lazilyResolve(()=>neverIfDisjoint((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectOrPipeNodes"])(l.resolution, r, ctx)), `${l.reference}${ctx.pipe ? "=>" : "&"}${r.id}`);
        })
    }
});
class AliasNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseRoot"] {
    expression = this.reference;
    structure = undefined;
    get resolution() {
        const result = this._resolve();
        return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nodesByRegisteredId"][this.id] = result;
    }
    _resolve() {
        if (this.resolve) return this.resolve();
        if (this.reference[0] === "$") return this.$.resolveRoot(this.reference.slice(1));
        const id = this.reference;
        let resolution = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nodesByRegisteredId"][id];
        const seen = [];
        while((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(resolution, "context")){
            if (seen.includes(resolution.id)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeShallowCycleErrorMessage(resolution.id, seen));
            }
            seen.push(resolution.id);
            resolution = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nodesByRegisteredId"][resolution.id];
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(resolution, "root")) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected resolution for reference ${this.reference}
Seen: [${seen.join("->")}] 
Resolution: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(resolution)}`);
        }
        return resolution;
    }
    get resolutionId() {
        if (this.reference.includes("&") || this.reference.includes("=>")) return this.resolution.id;
        if (this.reference[0] !== "$") return this.reference;
        const alias = this.reference.slice(1);
        const resolution = this.$.resolutions[alias];
        if (typeof resolution === "string") return resolution;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(resolution, "root")) return resolution.id;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected resolution for reference ${this.reference}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(resolution)}`);
    }
    get defaultShortDescription() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainDescriptions"].object;
    }
    innerToJsonSchema(ctx) {
        return this.resolution.toJsonSchemaRecurse(ctx);
    }
    traverseAllows = (data, ctx)=>{
        const seen = ctx.seen[this.reference];
        if (seen?.includes(data)) return true;
        ctx.seen[this.reference] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(seen, data);
        return this.resolution.traverseAllows(data, ctx);
    };
    traverseApply = (data, ctx)=>{
        const seen = ctx.seen[this.reference];
        if (seen?.includes(data)) return;
        ctx.seen[this.reference] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(seen, data);
        this.resolution.traverseApply(data, ctx);
    };
    compile(js) {
        const id = this.resolutionId;
        js.if(`ctx.seen.${id} && ctx.seen.${id}.includes(data)`, ()=>js.return(true));
        js.if(`!ctx.seen.${id}`, ()=>js.line(`ctx.seen.${id} = []`));
        js.line(`ctx.seen.${id}.push(data)`);
        js.return(js.invoke(id));
    }
}
const writeShallowCycleErrorMessage = (name, seen)=>`Alias '${name}' has a shallow resolution cycle: ${[
        ...seen,
        name
    ].join("->")}`;
const Alias = {
    implementation,
    Node: AliasNode
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/basis.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InternalBasis",
    ()=>InternalBasis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/root.js [app-route] (ecmascript)");
;
;
class InternalBasis extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseRoot"] {
    traverseApply = (data, ctx)=>{
        if (!this.traverseAllows(data, ctx)) ctx.errorFromNodeContext(this.errorContext);
    };
    get errorContext() {
        return {
            code: this.kind,
            description: this.description,
            meta: this.meta,
            ...this.inner
        };
    }
    get compiledErrorContext() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compileObjectLiteral"])(this.errorContext);
    }
    compile(js) {
        if (js.traversalKind === "Allows") js.return(this.compiledCondition);
        else {
            js.if(this.compiledNegation, ()=>js.line(`ctx.errorFromNodeContext(${this.compiledErrorContext})`));
        }
    }
}
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/domain.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Domain",
    ()=>Domain,
    "DomainNode",
    ()=>DomainNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$basis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/basis.js [app-route] (ecmascript)");
;
;
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "domain",
    hasAssociatedError: true,
    collapsibleKey: "domain",
    keys: {
        domain: {},
        numberAllowsNaN: {}
    },
    normalize: (schema)=>typeof schema === "string" ? {
            domain: schema
        } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasKey"])(schema, "numberAllowsNaN") && schema.domain !== "number" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(Domain.writeBadAllowNanMessage(schema.domain)) : schema,
    applyConfig: (schema, config)=>schema.numberAllowsNaN === undefined && schema.domain === "number" && config.numberAllowsNaN ? {
            ...schema,
            numberAllowsNaN: true
        } : schema,
    defaults: {
        description: (node)=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainDescriptions"][node.domain],
        actual: (data)=>Number.isNaN(data) ? "NaN" : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainDescriptions"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainOf"])(data)]
    },
    intersections: {
        domain: (l, r)=>// since l === r is handled by default, remaining cases are disjoint
            // outside those including options like numberAllowsNaN
            l.domain === "number" && r.domain === "number" ? l.numberAllowsNaN ? r : l : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"].init("domain", l, r)
    }
});
class DomainNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$basis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InternalBasis"] {
    requiresNaNCheck = this.domain === "number" && !this.numberAllowsNaN;
    traverseAllows = this.requiresNaNCheck ? (data)=>typeof data === "number" && !Number.isNaN(data) : (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainOf"])(data) === this.domain;
    compiledCondition = this.domain === "object" ? `((typeof data === "object" && data !== null) || typeof data === "function")` : `typeof data === "${this.domain}"${this.requiresNaNCheck ? " && !Number.isNaN(data)" : ""}`;
    compiledNegation = this.domain === "object" ? `((typeof data !== "object" || data === null) && typeof data !== "function")` : `typeof data !== "${this.domain}"${this.requiresNaNCheck ? " || Number.isNaN(data)" : ""}`;
    expression = this.numberAllowsNaN ? "number | NaN" : this.domain;
    get nestableExpression() {
        return this.numberAllowsNaN ? `(${this.expression})` : this.expression;
    }
    get defaultShortDescription() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainDescriptions"][this.domain];
    }
    innerToJsonSchema(ctx) {
        if (this.domain === "bigint" || this.domain === "symbol") {
            return ctx.fallback.domain({
                code: "domain",
                base: {},
                domain: this.domain
            });
        }
        return {
            type: this.domain
        };
    }
}
const Domain = {
    implementation,
    Node: DomainNode,
    writeBadAllowNanMessage: (actual)=>`numberAllowsNaN may only be specified with domain "number" (was ${actual})`
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/intersection.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Intersection",
    ()=>Intersection,
    "IntersectionNode",
    ()=>IntersectionNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/constraint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/intersections.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/root.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/utils.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "intersection",
    hasAssociatedError: true,
    normalize: (rawSchema)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"])(rawSchema)) return rawSchema;
        const { structure, ...schema } = rawSchema;
        const hasRootStructureKey = !!structure;
        const normalizedStructure = structure ?? {};
        const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(schema, (k, v)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isKeyOf"])(k, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["structureKeys"])) {
                if (hasRootStructureKey) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(`Flattened structure key ${k} cannot be specified alongside a root 'structure' key.`);
                }
                normalizedStructure[k] = v;
                return [];
            }
            return [
                k,
                v
            ];
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(normalizedStructure, "constraint") || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmptyObject"])(normalizedStructure)) normalized.structure = normalizedStructure;
        return normalized;
    },
    finalizeInnerJson: ({ structure, ...rest })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDomain"])(structure, "object") ? {
            ...structure,
            ...rest
        } : rest,
    keys: {
        domain: {
            child: true,
            parse: (schema, ctx)=>ctx.$.node("domain", schema)
        },
        proto: {
            child: true,
            parse: (schema, ctx)=>ctx.$.node("proto", schema)
        },
        structure: {
            child: true,
            parse: (schema, ctx)=>ctx.$.node("structure", schema),
            serialize: (node)=>{
                if (!node.sequence?.minLength) return node.collapsibleJson;
                const { sequence, ...structureJson } = node.collapsibleJson;
                const { minVariadicLength, ...sequenceJson } = sequence;
                const collapsibleSequenceJson = sequenceJson.variadic && Object.keys(sequenceJson).length === 1 ? sequenceJson.variadic : sequenceJson;
                return {
                    ...structureJson,
                    sequence: collapsibleSequenceJson
                };
            }
        },
        divisor: {
            child: true,
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKeyParser"])("divisor")
        },
        max: {
            child: true,
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKeyParser"])("max")
        },
        min: {
            child: true,
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKeyParser"])("min")
        },
        maxLength: {
            child: true,
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKeyParser"])("maxLength")
        },
        minLength: {
            child: true,
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKeyParser"])("minLength")
        },
        exactLength: {
            child: true,
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKeyParser"])("exactLength")
        },
        before: {
            child: true,
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKeyParser"])("before")
        },
        after: {
            child: true,
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKeyParser"])("after")
        },
        pattern: {
            child: true,
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKeyParser"])("pattern")
        },
        predicate: {
            child: true,
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKeyParser"])("predicate")
        }
    },
    // leverage reduction logic from intersection and identity to ensure initial
    // parse result is reduced
    reduce: (inner, $)=>// we cast union out of the result here since that only occurs when intersecting two sequences
        // that cannot occur when reducing a single intersection schema using unknown
        intersectIntersections({}, inner, {
            $,
            invert: false,
            pipe: false
        }),
    defaults: {
        description: (node)=>{
            if (node.children.length === 0) return "unknown";
            if (node.structure) return node.structure.description;
            const childDescriptions = [];
            if (node.basis && !node.prestructurals.some((r)=>r.impl.obviatesBasisDescription)) childDescriptions.push(node.basis.description);
            if (node.prestructurals.length) {
                const sortedRefinementDescriptions = node.prestructurals.slice()// override alphabetization to describe min before max
                .sort((l, r)=>l.kind === "min" && r.kind === "max" ? -1 : 0).map((r)=>r.description);
                childDescriptions.push(...sortedRefinementDescriptions);
            }
            if (node.inner.predicate) {
                childDescriptions.push(...node.inner.predicate.map((p)=>p.description));
            }
            return childDescriptions.join(" and ");
        },
        expected: (source)=>`  ◦ ${source.errors.map((e)=>e.expected).join("\n  ◦ ")}`,
        problem: (ctx)=>`(${ctx.actual}) must be...\n${ctx.expected}`
    },
    intersections: {
        intersection: (l, r, ctx)=>intersectIntersections(l.inner, r.inner, ctx),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defineRightwardIntersections"])("intersection", (l, r, ctx)=>{
            // if l is unknown, return r
            if (l.children.length === 0) return r;
            const { domain, proto, ...lInnerConstraints } = l.inner;
            const lBasis = proto ?? domain;
            const basis = lBasis ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectOrPipeNodes"])(lBasis, r, ctx) : r;
            return basis instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"] ? basis : l?.basis?.equals(basis) ? // if the basis doesn't change, return the original intesection
            l : l.$.node("intersection", {
                ...lInnerConstraints,
                [basis.kind]: basis
            }, {
                prereduced: true
            });
        })
    }
});
class IntersectionNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseRoot"] {
    basis = this.inner.domain ?? this.inner.proto ?? null;
    prestructurals = [];
    refinements = this.children.filter((node)=>{
        if (!node.isRefinement()) return false;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["includes"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prestructuralKinds"], node.kind)) // mutation is fine during initialization
        this.prestructurals.push(node);
        return true;
    });
    structure = this.inner.structure;
    expression = writeIntersectionExpression(this);
    get shallowMorphs() {
        return this.inner.structure?.structuralMorph ? [
            this.inner.structure.structuralMorph
        ] : [];
    }
    get defaultShortDescription() {
        return this.basis?.defaultShortDescription ?? "present";
    }
    innerToJsonSchema(ctx) {
        return this.children.reduce(// cast is required since TS doesn't know children have compatible schema prerequisites
        (schema, child)=>child.isBasis() ? child.toJsonSchemaRecurse(ctx) : child.reduceJsonSchema(schema, ctx), {});
    }
    traverseAllows = (data, ctx)=>this.children.every((child)=>child.traverseAllows(data, ctx));
    traverseApply = (data, ctx)=>{
        const errorCount = ctx.currentErrorCount;
        if (this.basis) {
            this.basis.traverseApply(data, ctx);
            if (ctx.currentErrorCount > errorCount) return;
        }
        if (this.prestructurals.length) {
            for(let i = 0; i < this.prestructurals.length - 1; i++){
                this.prestructurals[i].traverseApply(data, ctx);
                if (ctx.failFast && ctx.currentErrorCount > errorCount) return;
            }
            this.prestructurals[this.prestructurals.length - 1].traverseApply(data, ctx);
            if (ctx.currentErrorCount > errorCount) return;
        }
        if (this.structure) {
            this.structure.traverseApply(data, ctx);
            if (ctx.currentErrorCount > errorCount) return;
        }
        if (this.inner.predicate) {
            for(let i = 0; i < this.inner.predicate.length - 1; i++){
                this.inner.predicate[i].traverseApply(data, ctx);
                if (ctx.failFast && ctx.currentErrorCount > errorCount) return;
            }
            this.inner.predicate[this.inner.predicate.length - 1].traverseApply(data, ctx);
        }
    };
    compile(js) {
        if (js.traversalKind === "Allows") {
            for (const child of this.children)js.check(child);
            js.return(true);
            return;
        }
        js.initializeErrorCount();
        if (this.basis) {
            js.check(this.basis);
            // we only have to return conditionally if this is not the last check
            if (this.children.length > 1) js.returnIfFail();
        }
        if (this.prestructurals.length) {
            for(let i = 0; i < this.prestructurals.length - 1; i++){
                js.check(this.prestructurals[i]);
                js.returnIfFailFast();
            }
            js.check(this.prestructurals[this.prestructurals.length - 1]);
            if (this.structure || this.inner.predicate) js.returnIfFail();
        }
        if (this.structure) {
            js.check(this.structure);
            if (this.inner.predicate) js.returnIfFail();
        }
        if (this.inner.predicate) {
            for(let i = 0; i < this.inner.predicate.length - 1; i++){
                js.check(this.inner.predicate[i]);
                // since predicates can be chained, we have to fail immediately
                // if one fails
                js.returnIfFail();
            }
            js.check(this.inner.predicate[this.inner.predicate.length - 1]);
        }
    }
}
const Intersection = {
    implementation,
    Node: IntersectionNode
};
const writeIntersectionExpression = (node)=>{
    if (node.structure?.expression) return node.structure.expression;
    const basisExpression = node.basis && !node.prestructurals.some((n)=>n.impl.obviatesBasisExpression) ? node.basis.nestableExpression : "";
    const refinementsExpression = node.prestructurals.map((n)=>n.expression).join(" & ");
    const fullExpression = `${basisExpression}${basisExpression && refinementsExpression ? " " : ""}${refinementsExpression}`;
    if (fullExpression === "Array == 0") return "[]";
    return fullExpression || "unknown";
};
const intersectIntersections = (l, r, ctx)=>{
    const baseInner = {};
    const lBasis = l.proto ?? l.domain;
    const rBasis = r.proto ?? r.domain;
    const basisResult = lBasis ? rBasis ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectOrPipeNodes"])(lBasis, rBasis, ctx) : lBasis : rBasis;
    if (basisResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return basisResult;
    if (basisResult) baseInner[basisResult.kind] = basisResult;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectConstraints"])({
        kind: "intersection",
        baseInner,
        l: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flattenConstraints"])(l),
        r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flattenConstraints"])(r),
        roots: [],
        ctx
    });
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/morph.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Morph",
    ()=>Morph,
    "MorphNode",
    ()=>MorphNode,
    "writeMorphIntersectionMessage",
    ()=>writeMorphIntersectionMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/intersections.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/root.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/utils.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "morph",
    hasAssociatedError: false,
    keys: {
        in: {
            child: true,
            parse: (schema, ctx)=>ctx.$.parseSchema(schema)
        },
        morphs: {
            parse: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["liftArray"],
            serialize: (morphs)=>morphs.map((m)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(m, "root") ? m.json : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registeredReference"])(m))
        },
        declaredIn: {
            child: false,
            serialize: (node)=>node.json
        },
        declaredOut: {
            child: false,
            serialize: (node)=>node.json
        }
    },
    normalize: (schema)=>schema,
    defaults: {
        description: (node)=>`a morph from ${node.rawIn.description} to ${node.rawOut?.description ?? "unknown"}`
    },
    intersections: {
        morph: (l, r, ctx)=>{
            if (!l.hasEqualMorphs(r)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeMorphIntersectionMessage(l.expression, r.expression));
            }
            const inTersection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectOrPipeNodes"])(l.rawIn, r.rawIn, ctx);
            if (inTersection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return inTersection;
            const baseInner = {
                morphs: l.morphs
            };
            if (l.declaredIn || r.declaredIn) {
                const declaredIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectOrPipeNodes"])(l.rawIn, r.rawIn, ctx);
                // we can't treat this as a normal Disjoint since it's just declared
                // it should only happen if someone's essentially trying to create a broken type
                if (declaredIn instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return declaredIn.throw();
                else baseInner.declaredIn = declaredIn;
            }
            if (l.declaredOut || r.declaredOut) {
                const declaredOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectOrPipeNodes"])(l.rawOut, r.rawOut, ctx);
                if (declaredOut instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return declaredOut.throw();
                else baseInner.declaredOut = declaredOut;
            }
            // in case from is a union, we need to distribute the branches
            // to can be a union as any schema is allowed
            return inTersection.distribute((inBranch)=>ctx.$.node("morph", {
                    ...baseInner,
                    in: inBranch
                }), ctx.$.parseSchema);
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defineRightwardIntersections"])("morph", (l, r, ctx)=>{
            const inTersection = l.inner.in ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectOrPipeNodes"])(l.inner.in, r, ctx) : r;
            return inTersection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"] ? inTersection : inTersection.equals(l.inner.in) ? l : ctx.$.node("morph", {
                ...l.inner,
                in: inTersection
            });
        })
    }
});
class MorphNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseRoot"] {
    serializedMorphs = this.morphs.map(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registeredReference"]);
    compiledMorphs = `[${this.serializedMorphs}]`;
    lastMorph = this.inner.morphs[this.inner.morphs.length - 1];
    lastMorphIfNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(this.lastMorph, "root") ? this.lastMorph : undefined;
    introspectableIn = this.inner.in;
    introspectableOut = this.lastMorphIfNode ? Object.assign(this.referencesById, this.lastMorphIfNode.referencesById) && this.lastMorphIfNode.rawOut : undefined;
    get shallowMorphs() {
        // if the morph input is a union, it should not contain any other shallow morphs
        return Array.isArray(this.inner.in?.shallowMorphs) ? [
            ...this.inner.in.shallowMorphs,
            ...this.morphs
        ] : this.morphs;
    }
    get rawIn() {
        return this.declaredIn ?? this.inner.in?.rawIn ?? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.unknown.internal;
    }
    get rawOut() {
        return this.declaredOut ?? this.introspectableOut ?? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.unknown.internal;
    }
    declareIn(declaredIn) {
        return this.$.node("morph", {
            ...this.inner,
            declaredIn
        });
    }
    declareOut(declaredOut) {
        return this.$.node("morph", {
            ...this.inner,
            declaredOut
        });
    }
    expression = `(In: ${this.rawIn.expression}) => ${this.lastMorphIfNode ? "To" : "Out"}<${this.rawOut.expression}>`;
    get defaultShortDescription() {
        return this.rawIn.meta.description ?? this.rawIn.defaultShortDescription;
    }
    innerToJsonSchema(ctx) {
        return ctx.fallback.morph({
            code: "morph",
            base: this.rawIn.toJsonSchemaRecurse(ctx),
            out: this.introspectableOut?.toJsonSchemaRecurse(ctx) ?? null
        });
    }
    compile(js) {
        if (js.traversalKind === "Allows") {
            if (!this.introspectableIn) return;
            js.return(js.invoke(this.introspectableIn));
            return;
        }
        if (this.introspectableIn) js.line(js.invoke(this.introspectableIn));
        js.line(`ctx.queueMorphs(${this.compiledMorphs})`);
    }
    traverseAllows = (data, ctx)=>!this.introspectableIn || this.introspectableIn.traverseAllows(data, ctx);
    traverseApply = (data, ctx)=>{
        if (this.introspectableIn) this.introspectableIn.traverseApply(data, ctx);
        ctx.queueMorphs(this.morphs);
    };
    /** Check if the morphs of r are equal to those of this node */ hasEqualMorphs(r) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arrayEquals"])(this.morphs, r.morphs, {
            isEqual: (lMorph, rMorph)=>lMorph === rMorph || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(lMorph, "root") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(rMorph, "root") && lMorph.equals(rMorph)
        });
    }
}
const Morph = {
    implementation,
    Node: MorphNode
};
const writeMorphIntersectionMessage = (lDescription, rDescription)=>`The intersection of distinct morphs at a single path is indeterminate:
Left: ${lDescription}
Right: ${rDescription}`;
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/proto.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Proto",
    ()=>Proto,
    "ProtoNode",
    ()=>ProtoNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$basis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/basis.js [app-route] (ecmascript)");
;
;
;
;
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "proto",
    hasAssociatedError: true,
    collapsibleKey: "proto",
    keys: {
        proto: {
            serialize: (ctor)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBuiltinNameOfConstructor"])(ctor) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultValueSerializer"])(ctor)
        },
        dateAllowsInvalid: {}
    },
    normalize: (schema)=>{
        const normalized = typeof schema === "string" ? {
            proto: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["builtinConstructors"][schema]
        } : typeof schema === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"])(schema) ? schema : {
            proto: schema
        } : typeof schema.proto === "string" ? {
            ...schema,
            proto: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["builtinConstructors"][schema.proto]
        } : schema;
        if (typeof normalized.proto !== "function") (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(Proto.writeInvalidSchemaMessage(normalized.proto));
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasKey"])(normalized, "dateAllowsInvalid") && normalized.proto !== Date) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(Proto.writeBadInvalidDateMessage(normalized.proto));
        return normalized;
    },
    applyConfig: (schema, config)=>{
        if (schema.dateAllowsInvalid === undefined && schema.proto === Date && config.dateAllowsInvalid) return {
            ...schema,
            dateAllowsInvalid: true
        };
        return schema;
    },
    defaults: {
        description: (node)=>node.builtinName ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectKindDescriptions"][node.builtinName] : `an instance of ${node.proto.name}`,
        actual: (data)=>data instanceof Date && data.toString() === "Invalid Date" ? "an invalid Date" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectKindOrDomainOf"])(data)
    },
    intersections: {
        proto: (l, r)=>l.proto === Date && r.proto === Date ? // since l === r is handled by default,
            // exactly one of l or r must have allow invalid dates
            l.dateAllowsInvalid ? r : l : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constructorExtends"])(l.proto, r.proto) ? l : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constructorExtends"])(r.proto, l.proto) ? r : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"].init("proto", l, r),
        domain: (proto, domain)=>domain.domain === "object" ? proto : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"].init("domain", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.object.internal, domain)
    }
});
class ProtoNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$basis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InternalBasis"] {
    builtinName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBuiltinNameOfConstructor"])(this.proto);
    serializedConstructor = this.json.proto;
    requiresInvalidDateCheck = this.proto === Date && !this.dateAllowsInvalid;
    // Array.isArray is realm-safe; `instanceof Array` rejects arrays from other
    // windows/vm contexts (https://github.com/arktypeio/arktype/issues/1597).
    isArrayProto = this.proto === Array;
    traverseAllows = this.requiresInvalidDateCheck ? (data)=>data instanceof Date && data.toString() !== "Invalid Date" : this.isArrayProto ? (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(data) : (data)=>data instanceof this.proto;
    compiledCondition = this.isArrayProto ? `Array.isArray(data)` : `data instanceof ${this.serializedConstructor}${this.requiresInvalidDateCheck ? ` && data.toString() !== "Invalid Date"` : ""}`;
    compiledNegation = `!(${this.compiledCondition})`;
    innerToJsonSchema(ctx) {
        switch(this.builtinName){
            case "Array":
                return {
                    type: "array"
                };
            case "Date":
                return ctx.fallback.date?.({
                    code: "date",
                    base: {}
                }) ?? ctx.fallback.proto({
                    code: "proto",
                    base: {},
                    proto: this.proto
                });
            default:
                return ctx.fallback.proto({
                    code: "proto",
                    base: {},
                    proto: this.proto
                });
        }
    }
    expression = this.dateAllowsInvalid ? "Date | InvalidDate" : this.proto.name;
    get nestableExpression() {
        return this.dateAllowsInvalid ? `(${this.expression})` : this.expression;
    }
    domain = "object";
    get defaultShortDescription() {
        return this.description;
    }
}
const Proto = {
    implementation,
    Node: ProtoNode,
    writeBadInvalidDateMessage: (actual)=>`dateAllowsInvalid may only be specified with constructor Date (was ${actual.name})`,
    writeInvalidSchemaMessage: (actual)=>`instanceOf operand must be a function (was ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainOf"])(actual)})`
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/root.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseRoot",
    ()=>BaseRoot,
    "emptyBrandNameMessage",
    ()=>emptyBrandNameMessage,
    "exclusivizeRangeSchema",
    ()=>exclusivizeRangeSchema,
    "typeOrTermExtends",
    ()=>typeOrTermExtends,
    "writeInvalidJsonSchemaTargetMessage",
    ()=>writeInvalidJsonSchemaTargetMessage,
    "writeLiteralUnionEntriesMessage",
    ()=>writeLiteralUnionEntriesMessage,
    "writeNonStructuralOperandMessage",
    ()=>writeNonStructuralOperandMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/constraint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/node.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/intersections.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/toJsonSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/optional.js [app-route] (ecmascript)");
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
class BaseRoot extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseNode"] {
    constructor(attachments, $){
        super(attachments, $);
        // define as a getter to avoid it being enumerable/spreadable
        Object.defineProperty(this, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arkKind"], {
            value: "root",
            enumerable: false
        });
    }
    // doesn't seem possible to override this at a type-level (e.g. via declare)
    // without TS complaining about getters
    get rawIn() {
        return super.rawIn;
    }
    get rawOut() {
        return super.rawOut;
    }
    get internal() {
        return this;
    }
    get "~standard"() {
        return {
            vendor: "arktype",
            version: 1,
            validate: (input)=>{
                const out = this(input);
                if (out instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ArkErrors"]) return out;
                return {
                    value: out
                };
            },
            jsonSchema: {
                input: (opts)=>toStandardJsonSchema(this.rawIn, opts),
                output: (opts)=>toStandardJsonSchema(this.rawOut, opts)
            }
        };
    }
    as() {
        return this;
    }
    brand(name) {
        if (name === "") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(emptyBrandNameMessage);
        return this;
    }
    readonly() {
        return this;
    }
    branches = this.hasKind("union") ? this.inner.branches : [
        this
    ];
    distribute(mapBranch, reduceMapped) {
        const mappedBranches = this.branches.map(mapBranch);
        return reduceMapped?.(mappedBranches) ?? mappedBranches;
    }
    get shortDescription() {
        return this.meta.description ?? this.defaultShortDescription;
    }
    toJsonSchema(opts = {}) {
        const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeToJsonSchemaConfigs"])(this.$.resolvedConfig.toJsonSchema, opts);
        ctx.useRefs ||= this.isCyclic;
        if (ctx.useRefs) ctx.refs = new Map();
        // ensure $schema is the first key if present
        const schema = typeof ctx.dialect === "string" ? {
            $schema: ctx.dialect
        } : {};
        Object.assign(schema, this.toJsonSchemaRecurse(ctx));
        if (ctx.refs) {
            // only resolve referenced roots, since this.references also includes
            // discriminated union cases that may not be valid on their own
            const defs = {};
            // refs added while resolving a definition are visited by this loop
            for (const [id, ref] of ctx.refs)defs[id] = ref.toResolvedJsonSchema(ctx);
            // draft-2020-12 uses $defs, draft-07 uses definitions
            if (ctx.target === "draft-07") Object.assign(schema, {
                definitions: defs
            });
            else schema.$defs = defs;
        }
        return schema;
    }
    toJsonSchemaRecurse(ctx) {
        if (ctx.useRefs && !this.alwaysExpandJsonSchema) {
            // draft-2020-12 uses $defs, draft-07 uses definitions
            const defsKey = ctx.target === "draft-07" ? "definitions" : "$defs";
            ctx.refs?.set(this.id, this);
            return {
                $ref: `#/${defsKey}/${this.id}`
            };
        }
        return this.toResolvedJsonSchema(ctx);
    }
    get alwaysExpandJsonSchema() {
        return this.isBasis() || this.kind === "alias" || this.hasKind("union") && this.isBoolean;
    }
    toResolvedJsonSchema(ctx) {
        const result = this.innerToJsonSchema(ctx);
        for(const k in this.meta){
            const v = this.meta[k];
            // metaJson serializes non-primitives like [5] to references like
            // "$ark.array1", so prefer the original value when it is valid JSON
            // (jsonData's object domain also allows functions, so exclude them)
            const jsonValue = typeof v !== "function" && __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.jsonData.allows(v) ? v : k === "default" ? ctx.fallback.defaultValue({
                code: "defaultValue",
                base: result,
                value: v
            }) : this.metaJson[k];
            if (jsonValue !== undefined) result[k] = jsonValue;
        }
        return result;
    }
    intersect(r) {
        const rNode = this.$.parseDefinition(r);
        const result = this.rawIntersect(rNode);
        if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return result;
        return this.$.finalize(result);
    }
    rawIntersect(r) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectNodesRoot"])(this, r, this.$);
    }
    toNeverIfDisjoint() {
        return this;
    }
    and(r) {
        const result = this.intersect(r);
        return result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"] ? result.throw() : result;
    }
    rawAnd(r) {
        const result = this.rawIntersect(r);
        return result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"] ? result.throw() : result;
    }
    or(r) {
        const rNode = this.$.parseDefinition(r);
        return this.$.finalize(this.rawOr(rNode));
    }
    rawOr(r) {
        const branches = [
            ...this.branches,
            ...r.branches
        ];
        return this.$.node("union", branches);
    }
    map(flatMapEntry) {
        return this.$.schema(this.applyStructuralOperation("map", [
            flatMapEntry
        ]));
    }
    pick(...keys) {
        return this.$.schema(this.applyStructuralOperation("pick", keys));
    }
    omit(...keys) {
        return this.$.schema(this.applyStructuralOperation("omit", keys));
    }
    required() {
        return this.$.schema(this.applyStructuralOperation("required", []));
    }
    partial() {
        return this.$.schema(this.applyStructuralOperation("partial", []));
    }
    _keyof;
    keyof() {
        if (this._keyof) return this._keyof;
        const result = this.applyStructuralOperation("keyof", []).reduce((result, branch)=>result.intersect(branch).toNeverIfDisjoint(), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.unknown.internal);
        if (result.branches.length === 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeUnsatisfiableExpressionError"])(`keyof ${this.expression}`));
        }
        return this._keyof = this.$.finalize(result);
    }
    get props() {
        if (this.branches.length !== 1) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeLiteralUnionEntriesMessage(this.expression));
        return [
            ...this.applyStructuralOperation("props", [])[0]
        ];
    }
    merge(r) {
        const rNode = this.$.parseDefinition(r);
        return this.$.schema(rNode.distribute((branch)=>this.applyStructuralOperation("merge", [
                structureOf(branch) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeNonStructuralOperandMessage("merge", branch.expression))
            ])));
    }
    applyStructuralOperation(operation, args) {
        return this.distribute((branch)=>{
            if (branch.equals(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.object) && operation !== "merge" && operation !== "props") // ideally this wouldn't be a special case, but for now it
            // allows us to bypass `assertHasKeys` checks on base
            // instantiations of generics like Pick and Omit. Could
            // potentially be removed once constraints can reference each other:
            // https://github.com/arktypeio/arktype/issues/1053
            return branch;
            const structure = structureOf(branch);
            if (!structure) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeNonStructuralOperandMessage(operation, branch.expression));
            }
            if (operation === "keyof") return structure.keyof();
            if (operation === "get") return structure.get(...args);
            if (operation === "props") return structure.props;
            const structuralMethodName = operation === "required" ? "require" : operation === "partial" ? "optionalize" : operation;
            const transformed = structure[structuralMethodName](...args);
            // like the mapped types they're named for, `required` and `partial` are
            // homomorphic, preserving an array or tuple base
            const isHomomorphic = operation === "required" || operation === "partial";
            // they are also the only operations that can be a no-op (e.g. on an
            // array with no fixed elements), in which case the original branch is
            // preserved rather than reduced to a new object
            if (isHomomorphic && transformed.equals(structure)) return branch;
            return this.$.node("intersection", {
                ...isHomomorphic && transformed.sequence ? {
                    proto: Array
                } : {
                    domain: "object"
                },
                structure: transformed
            });
        });
    }
    get(...path) {
        if (path[0] === undefined) return this;
        return this.$.schema(this.applyStructuralOperation("get", path));
    }
    extract(r) {
        const rNode = this.$.parseDefinition(r);
        return this.$.schema(this.branches.filter((branch)=>branch.extends(rNode)));
    }
    exclude(r) {
        const rNode = this.$.parseDefinition(r);
        return this.$.schema(this.branches.filter((branch)=>!branch.extends(rNode)));
    }
    array() {
        return this.$.finalize(this.rawArray());
    }
    rawArray() {
        return this.$.parseSchema(this.isUnknown() ? {
            proto: Array
        } : {
            proto: Array,
            sequence: this
        }, {
            prereduced: true
        });
    }
    overlaps(r) {
        const intersection = this.intersect(r);
        return !(intersection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]);
    }
    extends(r) {
        if (this.isNever()) return true;
        const intersection = this.intersect(r);
        return !(intersection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) && this.equals(intersection);
    }
    ifExtends(r) {
        return this.extends(r) ? this : undefined;
    }
    subsumes(r) {
        const rNode = this.$.parseDefinition(r);
        return rNode.extends(this);
    }
    configure(meta, selector = "shallow") {
        return this.configureReferences(meta, selector);
    }
    describe(description, selector = "shallow") {
        return this.configure({
            description
        }, selector);
    }
    // these should ideally be implemented in arktype since they use its syntax
    // https://github.com/arktypeio/arktype/issues/1223
    optional() {
        return [
            this,
            "?"
        ];
    }
    // these should ideally be implemented in arktype since they use its syntax
    // https://github.com/arktypeio/arktype/issues/1223
    default(thunkableValue) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertDefaultValueAssignability"])(this, thunkableValue, null);
        return [
            this,
            "=",
            thunkableValue
        ];
    }
    from(input) {
        // ideally we might not validate here but for now we need to do determine
        // which morphs to apply
        return this.assert(input);
    }
    _pipe(...morphs) {
        const result = morphs.reduce((acc, morph)=>acc.rawPipeOnce(morph), this);
        return this.$.finalize(result);
    }
    tryPipe(...morphs) {
        const result = morphs.reduce((acc, morph)=>acc.rawPipeOnce((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(morph, "root") ? morph : (In, ctx)=>{
                try {
                    return morph(In, ctx);
                } catch (e) {
                    return ctx.error({
                        code: "predicate",
                        predicate: morph,
                        actual: `aborted due to error:\n    ${e}\n`
                    });
                }
            }), this);
        return this.$.finalize(result);
    }
    pipe = Object.assign(this._pipe.bind(this), {
        try: this.tryPipe.bind(this)
    });
    to(def) {
        return this.$.finalize(this.toNode(this.$.parseDefinition(def)));
    }
    toNode(root) {
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipeNodesRoot"])(this, root, this.$);
        if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return result.throw();
        return result;
    }
    rawPipeOnce(morph) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(morph, "root")) return this.toNode(morph);
        return this.distribute((branch)=>branch.hasKind("morph") ? this.$.node("morph", {
                in: branch.inner.in,
                morphs: [
                    ...branch.morphs,
                    morph
                ]
            }) : this.$.node("morph", {
                in: branch,
                morphs: [
                    morph
                ]
            }), this.$.parseSchema);
    }
    narrow(predicate) {
        return this.constrainOut("predicate", predicate);
    }
    constrain(kind, schema) {
        return this._constrain("root", kind, schema);
    }
    constrainIn(kind, schema) {
        return this._constrain("in", kind, schema);
    }
    constrainOut(kind, schema) {
        return this._constrain("out", kind, schema);
    }
    _constrain(io, kind, schema) {
        const constraint = this.$.node(kind, schema);
        if (constraint.isRoot()) {
            // if the node reduces to `unknown`, nothing to do (e.g. minLength: 0)
            return constraint.isUnknown() ? this : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected constraint node ${constraint}`);
        }
        const operand = io === "root" ? this : io === "in" ? this.rawIn : this.rawOut;
        if (operand.hasKind("morph") || constraint.impliedBasis && !operand.extends(constraint.impliedBasis)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInvalidOperandError"])(kind, constraint.impliedBasis, this);
        }
        const partialIntersection = this.$.node("intersection", {
            // important this is constraint.kind instead of kind in case
            // the node was reduced during parsing
            [constraint.kind]: constraint
        });
        const result = io === "out" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipeNodesRoot"])(this, partialIntersection, this.$) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectNodesRoot"])(this, partialIntersection, this.$);
        if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) result.throw();
        return this.$.finalize(result);
    }
    onUndeclaredKey(cfg) {
        const rule = typeof cfg === "string" ? cfg : cfg.rule;
        const deep = typeof cfg === "string" ? false : cfg.deep;
        return this.$.finalize(this.transform((kind, inner)=>kind === "structure" ? rule === "ignore" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["omit"])(inner, {
                undeclared: 1
            }) : {
                ...inner,
                undeclared: rule
            } : inner, deep ? undefined : {
            shouldTransform: (node)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["includes"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["structuralKinds"], node.kind)
        }));
    }
    hasEqualMorphs(r) {
        if (!this.includesTransform && !r.includesTransform) return true;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arrayEquals"])(this.shallowMorphs, r.shallowMorphs)) return false;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arrayEquals"])(this.flatMorphs, r.flatMorphs, {
            isEqual: (l, r)=>l.propString === r.propString && (l.node.hasKind("morph") && r.node.hasKind("morph") ? l.node.hasEqualMorphs(r.node) : l.node.hasKind("intersection") && r.node.hasKind("intersection") ? l.node.structure?.structuralMorphRef === r.node.structure?.structuralMorphRef : false)
        })) return false;
        return true;
    }
    onDeepUndeclaredKey(behavior) {
        return this.onUndeclaredKey({
            rule: behavior,
            deep: true
        });
    }
    filter(predicate) {
        return this.constrainIn("predicate", predicate);
    }
    divisibleBy(schema) {
        return this.constrain("divisor", schema);
    }
    matching(schema) {
        return this.constrain("pattern", schema);
    }
    atLeast(schema) {
        return this.constrain("min", schema);
    }
    atMost(schema) {
        return this.constrain("max", schema);
    }
    moreThan(schema) {
        return this.constrain("min", exclusivizeRangeSchema(schema));
    }
    lessThan(schema) {
        return this.constrain("max", exclusivizeRangeSchema(schema));
    }
    atLeastLength(schema) {
        return this.constrain("minLength", schema);
    }
    atMostLength(schema) {
        return this.constrain("maxLength", schema);
    }
    moreThanLength(schema) {
        return this.constrain("minLength", exclusivizeRangeSchema(schema));
    }
    lessThanLength(schema) {
        return this.constrain("maxLength", exclusivizeRangeSchema(schema));
    }
    exactlyLength(schema) {
        return this.constrain("exactLength", schema);
    }
    atOrAfter(schema) {
        return this.constrain("after", schema);
    }
    atOrBefore(schema) {
        return this.constrain("before", schema);
    }
    laterThan(schema) {
        return this.constrain("after", exclusivizeRangeSchema(schema));
    }
    earlierThan(schema) {
        return this.constrain("before", exclusivizeRangeSchema(schema));
    }
}
const emptyBrandNameMessage = `Expected a non-empty brand name after #`;
const supportedJsonSchemaTargets = [
    "draft-2020-12",
    "draft-07"
];
const writeInvalidJsonSchemaTargetMessage = (target)=>`JSONSchema target '${target}' is not supported (must be ${supportedJsonSchemaTargets.map((t)=>`"${t}"`).join(" or ")})`;
const validateStandardJsonSchemaTarget = (target)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["includes"])(supportedJsonSchemaTargets, target)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeInvalidJsonSchemaTargetMessage(target));
    return target;
};
const toStandardJsonSchema = (node, opts)=>{
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeToJsonSchemaConfigs"])(node.$.resolvedConfig.toJsonSchema, {
        target: validateStandardJsonSchemaTarget(opts.target),
        ...opts.libraryOptions
    });
    const fallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(ctx.fallback, (code, handler)=>[
            code,
            handler === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ToJsonSchema"].defaultConfig.fallback[code] ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ToJsonSchema"].standardFallback[code] : handler
        ]);
    return node.toJsonSchema({
        ...ctx,
        fallback
    });
};
const exclusivizeRangeSchema = (schema)=>typeof schema === "object" && !(schema instanceof Date) ? {
        ...schema,
        exclusive: true
    } : {
        rule: schema,
        exclusive: true
    };
const typeOrTermExtends = (t, base)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(base, "root") ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(t, "root") ? t.extends(base) : base.allows(t) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(t, "root") ? t.hasUnit(base) : base === t;
const structureOf = (branch)=>{
    if (branch.hasKind("morph")) return null;
    if (branch.hasKind("intersection")) {
        return branch.inner.structure ?? (branch.basis?.domain === "object" ? branch.$.bindReference(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.emptyStructure) : null);
    }
    if (branch.isBasis() && branch.domain === "object") return branch.$.bindReference(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.emptyStructure);
    return null;
};
const writeLiteralUnionEntriesMessage = (expression)=>`Props cannot be extracted from a union. Use .distribute to extract props from each branch instead. Received:
${expression}`;
const writeNonStructuralOperandMessage = (operation, operand)=>`${operation} operand must be an object (was ${operand})`;
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/union.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Union",
    ()=>Union,
    "UnionNode",
    ()=>UnionNode,
    "describeBranches",
    ()=>describeBranches,
    "intersectBranches",
    ()=>intersectBranches,
    "pruneDiscriminant",
    ()=>pruneDiscriminant,
    "reduceBranches",
    ()=>reduceBranches,
    "writeIndiscriminableMorphMessage",
    ()=>writeIndiscriminableMorphMessage,
    "writeOrderedIntersectionMessage",
    ()=>writeOrderedIntersectionMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/compile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/intersections.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/traversal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/root.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/utils.js [app-route] (ecmascript)");
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
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "union",
    hasAssociatedError: true,
    collapsibleKey: "branches",
    keys: {
        ordered: {},
        branches: {
            child: true,
            parse: (schema, ctx)=>{
                const branches = [];
                for (const branchSchema of schema){
                    const branchNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(branchSchema, "root") ? branchSchema.branches : ctx.$.parseSchema(branchSchema).branches;
                    for (const node of branchNodes){
                        if (node.hasKind("morph")) {
                            const matchingMorphIndex = branches.findIndex((matching)=>matching.hasKind("morph") && matching.hasEqualMorphs(node));
                            if (matchingMorphIndex === -1) branches.push(node);
                            else {
                                const matchingMorph = branches[matchingMorphIndex];
                                const mergedIn = matchingMorph.inner.in && node.inner.in ? matchingMorph.inner.in.rawOr(node.inner.in) : matchingMorph.rawIn.rawOr(node.rawIn);
                                branches[matchingMorphIndex] = ctx.$.node("morph", {
                                    ...matchingMorph.inner,
                                    in: mergedIn
                                });
                            }
                        } else branches.push(node);
                    }
                }
                if (!ctx.def.ordered) branches.sort((l, r)=>l.hash < r.hash ? -1 : 1);
                return branches;
            }
        }
    },
    normalize: (schema)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(schema) ? {
            branches: schema
        } : schema,
    reduce: (inner, $)=>{
        const reducedBranches = reduceBranches(inner);
        if (reducedBranches.length === 1) return reducedBranches[0];
        if (reducedBranches.length === inner.branches.length) return;
        return $.node("union", {
            ...inner,
            branches: reducedBranches
        }, {
            prereduced: true
        });
    },
    defaults: {
        description: (node)=>node.distribute((branch)=>branch.description, describeBranches),
        expected: (ctx)=>{
            const byPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["groupBy"])(ctx.errors, "propString");
            const pathDescriptions = Object.entries(byPath).map(([path, errors])=>{
                const branchesAtPath = [];
                for (const errorAtPath of errors)(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendUnique"])(branchesAtPath, errorAtPath.expected);
                const expected = describeBranches(branchesAtPath);
                // if there are multiple actual descriptions that differ,
                // just fall back to printable, which is the most specific
                const actual = errors.every((e)=>e.actual === errors[0].actual) ? errors[0].actual : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(errors[0].data);
                return `${path && `${path} `}must be ${expected}${actual && ` (was ${actual})`}`;
            });
            return describeBranches(pathDescriptions);
        },
        problem: (ctx)=>ctx.expected,
        message: (ctx)=>{
            if (ctx.problem[0] === "[") {
                // clarify paths like [1], [0][1], and ["key!"] that could be confusing
                return `value at ${ctx.problem}`;
            }
            return ctx.problem;
        }
    },
    intersections: {
        union: (l, r, ctx)=>{
            if (l.isNever !== r.isNever) {
                // if exactly one operand is never, we can use it to discriminate based on presence
                return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"].init("presence", l, r);
            }
            let resultBranches;
            if (l.ordered) {
                if (r.ordered) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeOrderedIntersectionMessage(l.expression, r.expression));
                }
                resultBranches = intersectBranches(r.branches, l.branches, ctx);
                if (resultBranches instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) resultBranches.invert();
            } else resultBranches = intersectBranches(l.branches, r.branches, ctx);
            if (resultBranches instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return resultBranches;
            return ctx.$.parseSchema(l.ordered || r.ordered ? {
                branches: resultBranches,
                ordered: true
            } : {
                branches: resultBranches
            });
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defineRightwardIntersections"])("union", (l, r, ctx)=>{
            const branches = intersectBranches(l.branches, [
                r
            ], ctx);
            if (branches instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return branches;
            if (branches.length === 1) return branches[0];
            return ctx.$.parseSchema(l.ordered ? {
                branches,
                ordered: true
            } : {
                branches
            });
        })
    }
});
class UnionNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseRoot"] {
    isBoolean = this.branches.length === 2 && this.branches[0].hasUnit(false) && this.branches[1].hasUnit(true);
    get branchGroups() {
        const branchGroups = [];
        let firstBooleanIndex = -1;
        for (const branch of this.branches){
            if (branch.hasKind("unit") && branch.domain === "boolean") {
                if (firstBooleanIndex === -1) {
                    firstBooleanIndex = branchGroups.length;
                    branchGroups.push(branch);
                } else branchGroups[firstBooleanIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.boolean;
                continue;
            }
            branchGroups.push(branch);
        }
        return branchGroups;
    }
    unitBranches = this.branches.filter((n)=>n.rawIn.hasKind("unit"));
    discriminant = this.discriminate();
    discriminantJson = this.discriminant ? discriminantToJson(this.discriminant) : null;
    expression = this.distribute((n)=>n.nestableExpression, expressBranches);
    createBranchedOptimisticRootApply() {
        return (data, onFail)=>{
            const optimisticResult = this.traverseOptimistic(data);
            if (optimisticResult !== __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unset"]) return optimisticResult;
            const ctx = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Traversal"](data, this.$.resolvedConfig);
            this.traverseApply(data, ctx);
            return ctx.finalize(onFail);
        };
    }
    get shallowMorphs() {
        return this.branches.reduce((morphs, branch)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendUnique"])(morphs, branch.shallowMorphs), []);
    }
    get defaultShortDescription() {
        return this.distribute((branch)=>branch.defaultShortDescription, describeBranches);
    }
    innerToJsonSchema(ctx) {
        // special case to simplify { const: true } | { const: false }
        // to the canonical JSON Schema representation { type: "boolean" }
        if (this.branchGroups.length === 1 && this.branchGroups[0].equals(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.boolean)) return {
            type: "boolean"
        };
        const jsonSchemaBranches = this.branchGroups.map((group)=>group.toJsonSchemaRecurse(ctx));
        if (jsonSchemaBranches.every((branch)=>// iff all branches are pure unit values with no metadata,
            // we can simplify the representation to an enum
            Object.keys(branch).length === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasKey"])(branch, "const"))) {
            return {
                enum: jsonSchemaBranches.map((branch)=>branch.const)
            };
        }
        return {
            anyOf: jsonSchemaBranches
        };
    }
    traverseAllows = (data, ctx)=>this.branches.some((b)=>b.traverseAllows(data, ctx));
    traverseApply = (data, ctx)=>{
        const errors = [];
        for(let i = 0; i < this.branches.length; i++){
            ctx.pushBranch();
            this.branches[i].traverseApply(data, ctx);
            if (!ctx.hasError()) {
                if (this.branches[i].includesTransform) return ctx.queuedMorphs.push(...ctx.popBranch().queuedMorphs);
                return ctx.popBranch();
            }
            errors.push(ctx.popBranch().error);
        }
        ctx.errorFromNodeContext({
            code: "union",
            errors,
            meta: this.meta
        });
    };
    traverseOptimistic = (data)=>{
        for(let i = 0; i < this.branches.length; i++){
            const branch = this.branches[i];
            if (branch.traverseAllows(data)) {
                if (branch.contextFreeMorph) return branch.contextFreeMorph(data);
                // if we're calling this function and the matching branch didn't have
                // a context-free morph, it shouldn't have morphs at all
                return data;
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unset"];
    };
    compile(js) {
        if (!this.discriminant || this.unitBranches.length === this.branches.length && this.branches.length === 2) return this.compileIndiscriminable(js);
        // we need to access the path as optional so we don't throw if it isn't present
        let condition = this.discriminant.optionallyChainedPropString;
        if (this.discriminant.kind === "domain") condition = `typeof ${condition} === "object" ? ${condition} === null ? "null" : "object" : typeof ${condition} === "function" ? "object" : typeof ${condition}`;
        const cases = this.discriminant.cases;
        const caseKeys = Object.keys(cases);
        const { optimistic } = js;
        // only the first layer can be optimistic
        js.optimistic = false;
        js.block(`switch(${condition})`, ()=>{
            for(const k in cases){
                const v = cases[k];
                const caseCondition = k === "default" ? k : `case ${k}`;
                let caseResult;
                if (v === true) caseResult = optimistic ? "data" : "true";
                else if (optimistic) {
                    if (v.rootApplyStrategy === "branchedOptimistic") caseResult = js.invoke(v, {
                        kind: "Optimistic"
                    });
                    else if (v.contextFreeMorph) caseResult = `${js.invoke(v)} ? ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registeredReference"])(v.contextFreeMorph)}(data) : "${__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unset"]}"`;
                    else caseResult = `${js.invoke(v)} ? data : "${__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unset"]}"`;
                } else caseResult = js.invoke(v);
                js.line(`${caseCondition}: return ${caseResult}`);
            }
            return js;
        });
        if (js.traversalKind === "Allows") {
            js.return(optimistic ? `"${__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unset"]}"` : false);
            return;
        }
        const expected = describeBranches(this.discriminant.kind === "domain" ? caseKeys.map((k)=>{
            const jsTypeOf = k.slice(1, -1);
            return jsTypeOf === "function" ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainDescriptions"].object : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainDescriptions"][jsTypeOf];
        }) : caseKeys);
        const serializedPathSegments = this.discriminant.path.map((k)=>typeof k === "symbol" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registeredReference"])(k) : JSON.stringify(k));
        const serializedExpected = JSON.stringify(expected);
        const serializedActual = this.discriminant.kind === "domain" ? `${serializedTypeOfDescriptions}[${condition}]` : `${serializedPrintable}(${condition})`;
        js.line(`ctx.errorFromNodeContext({
	code: "predicate",
	expected: ${serializedExpected},
	actual: ${serializedActual},
	relativePath: [${serializedPathSegments}],
	meta: ${this.compiledMeta}
})`);
    }
    compileIndiscriminable(js) {
        if (js.traversalKind === "Apply") {
            js.const("errors", "[]");
            for (const branch of this.branches){
                js.line("ctx.pushBranch()").line(js.invoke(branch)).if("!ctx.hasError()", ()=>js.return(branch.includesTransform ? "ctx.queuedMorphs.push(...ctx.popBranch().queuedMorphs)" : "ctx.popBranch()")).line("errors.push(ctx.popBranch().error)");
            }
            js.line(`ctx.errorFromNodeContext({ code: "union", errors, meta: ${this.compiledMeta} })`);
        } else {
            const { optimistic } = js;
            // only the first layer can be optimistic
            js.optimistic = false;
            for (const branch of this.branches){
                js.if(`${js.invoke(branch)}`, ()=>js.return(optimistic ? branch.contextFreeMorph ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registeredReference"])(branch.contextFreeMorph)}(data)` : "data" : true));
            }
            js.return(optimistic ? `"${__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unset"]}"` : false);
        }
    }
    get nestableExpression() {
        // avoid adding unnecessary parentheses around boolean since it's
        // already collapsed to a single keyword
        return this.isBoolean ? "boolean" : `(${this.expression})`;
    }
    discriminate() {
        if (this.branches.length < 2) return null;
        if (this.unitBranches.length === this.branches.length) {
            const cases = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(this.unitBranches, (i, n)=>[
                    `${n.rawIn.serializedValue}`,
                    n.hasKind("morph") ? n : true
                ]);
            return {
                kind: "unit",
                path: [],
                optionallyChainedPropString: "data",
                cases
            };
        }
        const candidates = [];
        for(let lIndex = 0; lIndex < this.branches.length - 1; lIndex++){
            const l = this.branches[lIndex];
            for(let rIndex = lIndex + 1; rIndex < this.branches.length; rIndex++){
                const r = this.branches[rIndex];
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectNodesRoot"])(l.rawIn, r.rawIn, l.$);
                if (!(result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"])) continue;
                for (const entry of result){
                    if (!entry.kind || entry.optional) continue;
                    let lSerialized;
                    let rSerialized;
                    if (entry.kind === "domain") {
                        const lValue = entry.l;
                        const rValue = entry.r;
                        lSerialized = `"${typeof lValue === "string" ? lValue : lValue.domain}"`;
                        rSerialized = `"${typeof rValue === "string" ? rValue : rValue.domain}"`;
                    } else if (entry.kind === "unit") {
                        lSerialized = entry.l.serializedValue;
                        rSerialized = entry.r.serializedValue;
                    } else continue;
                    const matching = candidates.find((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arrayEquals"])(d.path, entry.path) && d.kind === entry.kind);
                    if (!matching) {
                        candidates.push({
                            kind: entry.kind,
                            cases: {
                                [lSerialized]: {
                                    branchIndices: [
                                        lIndex
                                    ],
                                    condition: entry.l
                                },
                                [rSerialized]: {
                                    branchIndices: [
                                        rIndex
                                    ],
                                    condition: entry.r
                                }
                            },
                            path: entry.path
                        });
                    } else {
                        if (matching.cases[lSerialized]) {
                            matching.cases[lSerialized].branchIndices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendUnique"])(matching.cases[lSerialized].branchIndices, lIndex);
                        } else {
                            matching.cases[lSerialized] ??= {
                                branchIndices: [
                                    lIndex
                                ],
                                condition: entry.l
                            };
                        }
                        if (matching.cases[rSerialized]) {
                            matching.cases[rSerialized].branchIndices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendUnique"])(matching.cases[rSerialized].branchIndices, rIndex);
                        } else {
                            matching.cases[rSerialized] ??= {
                                branchIndices: [
                                    rIndex
                                ],
                                condition: entry.r
                            };
                        }
                    }
                }
            }
        }
        const viableCandidates = this.ordered ? viableOrderedCandidates(candidates, this.branches) : candidates;
        if (!viableCandidates.length) return null;
        const ctx = createCaseResolutionContext(viableCandidates, this);
        const cases = {};
        for(const k in ctx.best.cases){
            const resolution = resolveCase(ctx, k);
            if (resolution === null) {
                cases[k] = true;
                continue;
            }
            // if all the branches ended up back in pruned, we'd loop if we continued
            // so just bail out- nothing left to discriminate
            if (resolution.length === this.branches.length) return null;
            if (this.ordered) {
                // ensure the original order of the pruned branches is preserved
                resolution.sort((l, r)=>l.originalIndex - r.originalIndex);
            }
            const branches = resolution.map((entry)=>entry.branch);
            const caseNode = branches.length === 1 ? branches[0] : this.$.node("union", this.ordered ? {
                branches,
                ordered: true
            } : branches);
            Object.assign(this.referencesById, caseNode.referencesById);
            cases[k] = caseNode;
        }
        if (ctx.defaultEntries.length) {
            // we don't have to worry about order here as it is always preserved
            // within defaultEntries
            const branches = ctx.defaultEntries.map((entry)=>entry.branch);
            cases.default = this.$.node("union", this.ordered ? {
                branches,
                ordered: true
            } : branches, {
                prereduced: true
            });
            Object.assign(this.referencesById, cases.default.referencesById);
        }
        return Object.assign(ctx.location, {
            cases
        });
    }
}
const createCaseResolutionContext = (viableCandidates, node)=>{
    const ordered = viableCandidates.sort((l, r)=>l.path.length === r.path.length ? Object.keys(r.cases).length - Object.keys(l.cases).length : l.path.length - r.path.length);
    const best = ordered[0];
    const location = {
        kind: best.kind,
        path: best.path,
        optionallyChainedPropString: optionallyChainPropString(best.path)
    };
    const defaultEntries = node.branches.map((branch, originalIndex)=>({
            originalIndex,
            branch
        }));
    return {
        best,
        location,
        defaultEntries,
        node
    };
};
const resolveCase = (ctx, key)=>{
    const caseCtx = ctx.best.cases[key];
    const discriminantNode = discriminantCaseToNode(caseCtx.condition, ctx.location.path, ctx.node.$);
    let resolvedEntries = [];
    const nextDefaults = [];
    for(let i = 0; i < ctx.defaultEntries.length; i++){
        const entry = ctx.defaultEntries[i];
        if (caseCtx.branchIndices.includes(entry.originalIndex)) {
            const pruned = pruneDiscriminant(ctx.node.branches[entry.originalIndex], ctx.location);
            if (pruned === null) {
                // if any branch of the union has no constraints (i.e. is
                // unknown), the others won't affect the resolution type, but could still
                // remove additional cases from defaultEntries
                resolvedEntries = null;
            } else {
                resolvedEntries?.push({
                    originalIndex: entry.originalIndex,
                    branch: pruned
                });
            }
        } else if (// we shouldn't need a special case for alias to avoid the below
        // once alias resolution issues are improved:
        // https://github.com/arktypeio/arktype/issues/1026
        entry.branch.hasKind("alias") && discriminantNode.hasKind("domain") && discriminantNode.domain === "object") resolvedEntries?.push(entry);
        else {
            if (entry.branch.rawIn.overlaps(discriminantNode)) {
                // include cases where an object not including the
                // discriminant path might have that value present as an undeclared key
                const overlapping = pruneDiscriminant(entry.branch, ctx.location);
                resolvedEntries?.push({
                    originalIndex: entry.originalIndex,
                    branch: overlapping
                });
            }
            nextDefaults.push(entry);
        }
    }
    ctx.defaultEntries = nextDefaults;
    return resolvedEntries;
};
const viableOrderedCandidates = (candidates, originalBranches)=>{
    const viableCandidates = candidates.filter((candidate)=>{
        const caseGroups = Object.values(candidate.cases).map((caseCtx)=>caseCtx.branchIndices);
        // compare each group against all subsequent groups.
        for(let i = 0; i < caseGroups.length - 1; i++){
            const currentGroup = caseGroups[i];
            for(let j = i + 1; j < caseGroups.length; j++){
                const nextGroup = caseGroups[j];
                // for each group pair, check for branches whose order was reversed
                for (const currentIndex of currentGroup){
                    for (const nextIndex of nextGroup){
                        if (currentIndex > nextIndex) {
                            if (originalBranches[currentIndex].overlaps(originalBranches[nextIndex])) {
                                // if the order was not preserved and the branches overlap,
                                // this is not a viable discriminant as it cannot guarantee the same behavior
                                return false;
                            }
                        }
                    }
                }
            }
        }
        // branch groups preserved order for non-disjoint pairs and is viable
        return true;
    });
    return viableCandidates;
};
const discriminantCaseToNode = (caseDiscriminant, path, $)=>{
    let node = caseDiscriminant === "undefined" ? $.node("unit", {
        unit: undefined
    }) : caseDiscriminant === "null" ? $.node("unit", {
        unit: null
    }) : caseDiscriminant === "boolean" ? $.units([
        true,
        false
    ]) : caseDiscriminant.hasKind("domain") && caseDiscriminant.domain === "number" ? // a typeof check doesn't exclude NaN
    $.node("domain", {
        domain: "number",
        numberAllowsNaN: true
    }) : caseDiscriminant;
    for(let i = path.length - 1; i >= 0; i--){
        const key = path[i];
        node = $.node("intersection", typeof key === "number" ? {
            proto: "Array",
            // create unknown for preceding elements (could be optimized with safe imports)
            sequence: [
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["range"])(key).map((_)=>({})),
                node
            ]
        } : {
            domain: "object",
            required: [
                {
                    key,
                    value: node
                }
            ]
        });
    }
    return node;
};
const optionallyChainPropString = (path)=>path.reduce((acc, k)=>acc + (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compileLiteralPropAccess"])(k, true), "data");
const serializedTypeOfDescriptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registeredReference"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsTypeOfDescriptions"]);
const serializedPrintable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registeredReference"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"]);
const Union = {
    implementation,
    Node: UnionNode
};
const discriminantToJson = (discriminant)=>({
        kind: discriminant.kind,
        path: discriminant.path.map((k)=>typeof k === "string" ? k : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compileSerializedValue"])(k)),
        cases: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(discriminant.cases, (k, node)=>[
                k,
                node === true ? node : node.hasKind("union") && node.discriminantJson ? node.discriminantJson : node.json
            ])
    });
const describeExpressionOptions = {
    delimiter: " | ",
    finalDelimiter: " | "
};
const expressBranches = (expressions)=>describeBranches(expressions, describeExpressionOptions);
const describeBranches = (descriptions, opts)=>{
    const delimiter = opts?.delimiter ?? ", ";
    const finalDelimiter = opts?.finalDelimiter ?? " or ";
    if (descriptions.length === 0) return "never";
    if (descriptions.length === 1) return descriptions[0];
    if (descriptions.length === 2 && descriptions[0] === "false" && descriptions[1] === "true" || descriptions[0] === "true" && descriptions[1] === "false") return "boolean";
    // keep track of seen descriptions to avoid duplication
    const seen = {};
    const unique = descriptions.filter((s)=>seen[s] ? false : seen[s] = true);
    const last = unique.pop();
    return `${unique.join(delimiter)}${unique.length ? finalDelimiter : ""}${last}`;
};
const intersectBranches = (l, r, ctx)=>{
    // If the corresponding r branch is identified as a subtype of an l branch, the
    // value at rIndex is set to null so we can avoid including previous/future
    // intersections in the reduced result.
    const batchesByR = r.map(()=>[]);
    for(let lIndex = 0; lIndex < l.length; lIndex++){
        let candidatesByR = {};
        for(let rIndex = 0; rIndex < r.length; rIndex++){
            if (batchesByR[rIndex] === null) {
                continue;
            }
            if (l[lIndex].equals(r[rIndex])) {
                // Combination of subtype and supertype cases
                batchesByR[rIndex] = null;
                candidatesByR = {};
                break;
            }
            const branchIntersection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectOrPipeNodes"])(l[lIndex], r[rIndex], ctx);
            if (branchIntersection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) {
                continue;
            }
            if (branchIntersection.equals(l[lIndex])) {
                // If the current l branch is a subtype of r, intersections
                // with previous and remaining branches of r won't lead to
                // distinct intersections.
                batchesByR[rIndex].push(l[lIndex]);
                candidatesByR = {};
                break;
            }
            if (branchIntersection.equals(r[rIndex])) {
                // If the current r branch is a subtype of l, set its batch to
                // null, removing any previous intersections and preventing any
                // of its remaining intersections from being computed.
                batchesByR[rIndex] = null;
            } else {
                // If neither l nor r is a subtype of the other, add their
                // intersection as a candidate (could still be removed if it is
                // determined l or r is a subtype of a remaining branch).
                candidatesByR[rIndex] = branchIntersection;
            }
        }
        for(const rIndex in candidatesByR){
            // batchesByR at rIndex should never be null if it is in candidatesByR
            batchesByR[rIndex][lIndex] = candidatesByR[rIndex];
        }
    }
    // Compile the reduced intersection result, including:
    // 		1. Remaining candidates resulting from distinct intersections or strict subtypes of r
    // 		2. Original r branches corresponding to indices with a null batch (subtypes of l)
    const resultBranches = batchesByR.flatMap(// ensure unions returned from branchable intersections like sequence are flattened
    (batch, i)=>batch?.flatMap((branch)=>branch.branches) ?? r[i]);
    return resultBranches.length === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"].init("union", l, r) : resultBranches;
};
const reduceBranches = ({ branches, ordered })=>{
    if (branches.length < 2) return branches;
    const uniquenessByIndex = branches.map(()=>true);
    for(let i = 0; i < branches.length; i++){
        for(let j = i + 1; j < branches.length && uniquenessByIndex[i] && uniquenessByIndex[j]; j++){
            if (branches[i].equals(branches[j])) {
                // if the two branches are equal, only "j" is marked as
                // redundant so at least one copy could still be included in
                // the final set of branches.
                uniquenessByIndex[j] = false;
                continue;
            }
            const intersection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectNodesRoot"])(branches[i].rawIn, branches[j].rawIn, branches[0].$);
            if (intersection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) continue;
            if (!ordered) assertDeterminateOverlap(branches[i], branches[j]);
            if (intersection.equals(branches[i].rawIn)) {
                // preserve ordered branches that are a subtype of a subsequent branch
                uniquenessByIndex[i] = !!ordered;
            } else if (intersection.equals(branches[j].rawIn)) uniquenessByIndex[j] = false;
        }
    }
    return branches.filter((_, i)=>uniquenessByIndex[i]);
};
const assertDeterminateOverlap = (l, r)=>{
    if (!l.includesTransform && !r.includesTransform) return;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arrayEquals"])(l.shallowMorphs, r.shallowMorphs)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeIndiscriminableMorphMessage(l.expression, r.expression));
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arrayEquals"])(l.flatMorphs, r.flatMorphs, {
        isEqual: (l, r)=>l.propString === r.propString && (l.node.hasKind("morph") && r.node.hasKind("morph") ? l.node.hasEqualMorphs(r.node) : l.node.hasKind("intersection") && r.node.hasKind("intersection") ? l.node.structure?.structuralMorphRef === r.node.structure?.structuralMorphRef : false)
    })) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeIndiscriminableMorphMessage(l.expression, r.expression));
    }
};
const pruneDiscriminant = (discriminantBranch, discriminantCtx)=>discriminantBranch.transform((nodeKind, inner)=>{
        if (nodeKind === "domain" || nodeKind === "unit") return null;
        return inner;
    }, {
        shouldTransform: (node, ctx)=>{
            // safe to cast here as index nodes are never discriminants
            const propString = optionallyChainPropString(ctx.path);
            if (!discriminantCtx.optionallyChainedPropString.startsWith(propString)) return false;
            if (node.hasKind("domain") && node.domain === "object") // if we've already checked a path at least as long as the current one,
            // we don't need to revalidate that we're in an object
            return true;
            if ((node.hasKind("domain") || discriminantCtx.kind === "unit") && propString === discriminantCtx.optionallyChainedPropString) {
                // if the discriminant has already checked the domain at the current path
                // (or a unit literal, implying a domain), we don't need to recheck it,
                // unless it is a number domain excluding NaN, which typeof doesn't
                return discriminantCtx.kind === "unit" || !(node.hasKind("domain") && node.requiresNaNCheck);
            }
            // we don't need to recurse into index nodes as they will never
            // have a required path therefore can't be used to discriminate
            return node.children.length !== 0 && node.kind !== "index";
        }
    });
const writeIndiscriminableMorphMessage = (lDescription, rDescription)=>`An unordered union of a type including a morph and a type with overlapping input is indeterminate:
Left: ${lDescription}
Right: ${rDescription}`;
const writeOrderedIntersectionMessage = (lDescription, rDescription)=>`The intersection of two ordered unions is indeterminate:
Left: ${lDescription}
Right: ${rDescription}`;
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/unit.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Unit",
    ()=>Unit,
    "UnitNode",
    ()=>UnitNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$basis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/basis.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/utils.js [app-route] (ecmascript)");
;
;
;
;
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "unit",
    hasAssociatedError: true,
    keys: {
        unit: {
            preserveUndefined: true,
            serialize: (schema)=>schema instanceof Date ? schema.toISOString() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultValueSerializer"])(schema)
        }
    },
    normalize: (schema)=>schema,
    defaults: {
        description: (node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(node.unit),
        problem: ({ expected, actual })=>`${expected === actual ? `must be reference equal to ${expected} (serialized to the same value)` : `must be ${expected} (was ${actual})`}`
    },
    intersections: {
        unit: (l, r)=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"].init("unit", l, r),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defineRightwardIntersections"])("unit", (l, r)=>{
            if (r.allows(l.unit)) return l;
            // will always be a disjoint at this point, but we try to use
            // a domain Disjoint if possible since it's better for discrimination
            const rBasis = r.hasKind("intersection") ? r.basis : r;
            if (rBasis) {
                const rDomain = rBasis.hasKind("domain") ? rBasis : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.object;
                if (l.domain !== rDomain.domain) {
                    const lDomainDisjointValue = l.domain === "undefined" || l.domain === "null" || l.domain === "boolean" ? l.domain : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic[l.domain];
                    return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"].init("domain", lDomainDisjointValue, rDomain);
                }
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"].init("assignability", l, r.hasKind("intersection") ? r.children.find((rConstraint)=>!rConstraint.allows(l.unit)) : r);
        })
    }
});
class UnitNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$basis$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InternalBasis"] {
    compiledValue = this.json.unit;
    serializedValue = typeof this.unit === "string" || this.unit instanceof Date ? JSON.stringify(this.compiledValue) : `${this.compiledValue}`;
    compiledCondition = compileEqualityCheck(this.unit, this.serializedValue);
    compiledNegation = compileEqualityCheck(this.unit, this.serializedValue, "negated");
    expression = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(this.unit);
    domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainOf"])(this.unit);
    get defaultShortDescription() {
        return this.domain === "object" ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainDescriptions"].object : this.description;
    }
    innerToJsonSchema(ctx) {
        return(// this is the more standard JSON schema representation, especially for Open API
        this.unit === null ? {
            type: "null"
        } : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.jsonPrimitive.allows(this.unit) ? {
            const: this.unit
        } : ctx.fallback.unit({
            code: "unit",
            base: {},
            unit: this.unit
        }));
    }
    traverseAllows = this.unit instanceof Date ? (data)=>data instanceof Date && data.toISOString() === this.compiledValue : Number.isNaN(this.unit) ? (data)=>Number.isNaN(data) : (data)=>data === this.unit;
}
const Unit = {
    implementation,
    Node: UnitNode
};
const compileEqualityCheck = (unit, serializedValue, negated)=>{
    if (unit instanceof Date) {
        const condition = `data instanceof Date && data.toISOString() === ${serializedValue}`;
        return negated ? `!(${condition})` : condition;
    }
    if (Number.isNaN(unit)) return `${negated ? "!" : ""}Number.isNaN(data)`;
    return `data ${negated ? "!" : "="}== ${serializedValue}`;
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defineRightwardIntersections",
    ()=>defineRightwardIntersections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
;
;
const defineRightwardIntersections = (kind, implementation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["schemaKindsRightOf"])(kind), (i, kind)=>[
            kind,
            implementation
        ]);
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/scope.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseScope",
    ()=>BaseScope,
    "SchemaScope",
    ()=>SchemaScope,
    "defineSchema",
    ()=>defineSchema,
    "genericNode",
    ()=>genericNode,
    "node",
    ()=>node,
    "parseAsSchema",
    ()=>parseAsSchema,
    "rootSchema",
    ()=>rootSchema,
    "rootSchemaScope",
    ()=>rootSchemaScope,
    "schemaScope",
    ()=>schemaScope,
    "writeDuplicateAliasError",
    ()=>writeDuplicateAliasError,
    "writeMissingSubmoduleAccessMessage",
    ()=>writeMissingSubmoduleAccessMessage,
    "writeNonSubmoduleDotMessage",
    ()=>writeNonSubmoduleDotMessage,
    "writeUnresolvableMessage",
    ()=>writeUnresolvableMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/functions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$generic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/generic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$kinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/kinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$module$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/module.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/parse.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/alias.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/compile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/traversal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
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
const schemaBranchesOf = (schema)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(schema) ? schema : "branches" in schema && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(schema.branches) ? schema.branches : undefined;
const throwMismatchedNodeRootError = (expected, actual)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(`Node of kind ${actual} is not valid as a ${expected} definition`);
const writeDuplicateAliasError = (alias)=>`#${alias} duplicates public alias ${alias}`;
// Fallback counter for anonymous scopes; scopes are identified by instance
// identity rather than names to support HMR and multi-bundle environments.
let anonymousScopeCount = 0;
__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].ambient ??= {};
let rawUnknownUnion;
const rootScopeFnName = "function $";
const precompile = (references)=>bindPrecompilation(references, precompileReferences(references));
const bindPrecompilation = (references, precompiler, owningScope)=>{
    const precompilation = precompiler.write(rootScopeFnName, 4);
    const compiledTraversals = precompiler.compile()();
    for (const node of references){
        if (node.precompilation && (!owningScope || node.$ !== owningScope)) {
            continue;
        }
        node.traverseAllows = compiledTraversals[`${node.id}Allows`].bind(compiledTraversals);
        if (node.isRoot() && !node.allowsRequiresContext) {
            // if the reference doesn't require context, we can assign over
            // it directly to avoid having to initialize it
            node.allows = node.traverseAllows;
        }
        node.traverseApply = compiledTraversals[`${node.id}Apply`].bind(compiledTraversals);
        if (compiledTraversals[`${node.id}Optimistic`]) {
            ;
            node.traverseOptimistic = compiledTraversals[`${node.id}Optimistic`].bind(compiledTraversals);
        }
        node.precompilation = precompilation;
    }
};
const precompileReferences = (references)=>new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompiledFunction"]().return(references.reduce((js, node)=>{
        const allowsCompiler = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NodeCompiler"]({
            kind: "Allows"
        }).indent();
        node.compile(allowsCompiler);
        const allowsJs = allowsCompiler.write(`${node.id}Allows`);
        const applyCompiler = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NodeCompiler"]({
            kind: "Apply"
        }).indent();
        node.compile(applyCompiler);
        const applyJs = applyCompiler.write(`${node.id}Apply`);
        const result = `${js}${allowsJs},\n${applyJs},\n`;
        if (!node.hasKind("union")) return result;
        const optimisticCompiler = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NodeCompiler"]({
            kind: "Allows",
            optimistic: true
        }).indent();
        node.compile(optimisticCompiler);
        const optimisticJs = optimisticCompiler.write(`${node.id}Optimistic`);
        return `${result}${optimisticJs},\n`;
    }, "{\n") + "}");
class BaseScope {
    config;
    resolvedConfig;
    name;
    get [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arkKind"]]() {
        return "scope";
    }
    referencesById = {};
    references = [];
    resolutions = {};
    exportedNames = [];
    aliases = {};
    resolved = false;
    nodesByHash = {};
    intrinsic;
    constructor(/** The set of names defined at the root-level of the scope mapped to their
     * corresponding definitions.**/ def, config){
        this.config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfigs"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].config, config);
        this.resolvedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfigs"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].resolvedConfig, config);
        this.name = this.resolvedConfig.name ?? `anonymousScope${anonymousScopeCount++}`;
        const aliasEntries = Object.entries(def).map((entry)=>this.preparseOwnAliasEntry(...entry));
        for (const [k, v] of aliasEntries){
            let name = k;
            if (k[0] === "#") {
                name = k.slice(1);
                if (name in this.aliases) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeDuplicateAliasError(name));
                this.aliases[name] = v;
            } else {
                if (name in this.aliases) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeDuplicateAliasError(k));
                this.aliases[name] = v;
                this.exportedNames.push(name);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(v, "module") && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(v, "generic") && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isThunk"])(v)) {
                const preparsed = this.preparseOwnDefinitionFormat(v, {
                    alias: name
                });
                this.resolutions[name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(preparsed, "root") ? this.bindReference(preparsed) : this.createParseContext(preparsed).id;
            }
        }
        // reduce union of all possible values reduces to unknown
        rawUnknownUnion ??= this.node("union", {
            branches: [
                "string",
                "number",
                "object",
                "bigint",
                "symbol",
                {
                    unit: true
                },
                {
                    unit: false
                },
                {
                    unit: undefined
                },
                {
                    unit: null
                }
            ]
        }, {
            prereduced: true
        });
        this.nodesByHash[rawUnknownUnion.hash] = this.node("intersection", {}, {
            prereduced: true
        });
        this.intrinsic = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic, (k, v)=>// don't include cyclic aliases from JSON scope
            k.startsWith("json") ? [] : [
                k,
                this.bindReference(v)
            ]) : {};
    }
    cacheGetter(name, value) {
        Object.defineProperty(this, name, {
            value
        });
        return value;
    }
    get internal() {
        return this;
    }
    // json is populated when the scope is exported, so ensure it is populated
    // before allowing external access
    _json;
    get json() {
        if (!this._json) this.export();
        return this._json;
    }
    defineSchema(def) {
        return def;
    }
    generic = (...params)=>{
        const $ = this;
        return (def, possibleHkt)=>new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$generic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericRoot"](params, possibleHkt ? new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$generic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LazyGenericBody"](def) : def, $, $, possibleHkt ?? null);
    };
    units = (values, opts)=>{
        const uniqueValues = [];
        for (const value of values)if (!uniqueValues.includes(value)) uniqueValues.push(value);
        const branches = uniqueValues.map((unit)=>this.node("unit", {
                unit
            }, opts));
        return this.node("union", branches, {
            ...opts,
            prereduced: true
        });
    };
    lazyResolutions = [];
    lazilyResolve(resolve, syntheticAlias) {
        const node = this.node("alias", {
            reference: syntheticAlias ?? "synthetic",
            resolve
        }, {
            prereduced: true
        });
        if (!this.resolved) this.lazyResolutions.push(node);
        return node;
    }
    schema = (schema, opts)=>this.finalize(this.parseSchema(schema, opts));
    parseSchema = (schema, opts)=>this.node((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["schemaKindOf"])(schema), schema, opts);
    preparseNode(kinds, schema, opts) {
        let kind = typeof kinds === "string" ? kinds : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["schemaKindOf"])(schema, kinds);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"])(schema) && schema.kind === kind) return schema;
        if (kind === "alias" && !opts?.prereduced) {
            const { reference } = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$alias$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Alias"].implementation.normalize(schema, this);
            if (reference.startsWith("$")) {
                const resolution = this.resolveRoot(reference.slice(1));
                schema = resolution;
                kind = resolution.kind;
            }
        } else if (kind === "union" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDomain"])(schema, "object")) {
            const branches = schemaBranchesOf(schema);
            if (branches?.length === 1) {
                schema = branches[0];
                kind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["schemaKindOf"])(schema);
            }
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"])(schema) && schema.kind === kind) return schema;
        const impl = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$kinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nodeImplementationsByKind"][kind];
        const normalizedSchema = impl.normalize?.(schema, this) ?? schema;
        // check again after normalization in case a node is a valid collapsed
        // schema for the kind (e.g. sequence can collapse to element accepting a Node')
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"])(normalizedSchema)) {
            return normalizedSchema.kind === kind ? normalizedSchema : throwMismatchedNodeRootError(kind, normalizedSchema.kind);
        }
        return {
            ...opts,
            $: this,
            kind,
            def: normalizedSchema,
            prefix: opts.alias ?? kind
        };
    }
    bindReference(reference) {
        let bound;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"])(reference)) {
            bound = reference.$ === this ? reference : new reference.constructor(reference.attachments, this);
        } else {
            bound = reference.$ === this ? reference : new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$generic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericRoot"](reference.params, reference.bodyDef, reference.$, this, reference.hkt);
        }
        if (!this.resolved) {
            // we're still parsing the scope itself, so defer compilation but
            // add the node as a reference
            Object.assign(this.referencesById, bound.referencesById);
        }
        return bound;
    }
    resolveRoot(name) {
        return this.maybeResolveRoot(name) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeUnresolvableMessage(name));
    }
    maybeResolveRoot(name) {
        const result = this.maybeResolve(name);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(result, "generic")) return;
        return result;
    }
    /** If name is a valid reference to a submodule alias, return its resolution  */ maybeResolveSubalias(name) {
        return maybeResolveSubalias(this.aliases, name) ?? maybeResolveSubalias(this.ambient, name);
    }
    get ambient() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].ambient;
    }
    maybeResolve(name) {
        const cached = this.resolutions[name];
        if (cached) {
            if (typeof cached !== "string") return this.bindReference(cached);
            const v = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nodesByRegisteredId"][cached];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(v, "root")) return this.resolutions[name] = v;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(v, "context")) {
                if (v.phase === "resolving") {
                    return this.node("alias", {
                        reference: `$${name}`
                    }, {
                        prereduced: true
                    });
                }
                if (v.phase === "resolved") {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected resolved context for was uncached by its scope: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(v)}`);
                }
                v.phase = "resolving";
                const node = this.bindReference(this.parseOwnDefinitionFormat(v.def, v));
                v.phase = "resolved";
                __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nodesByRegisteredId"][node.id] = node;
                __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nodesByRegisteredId"][v.id] = node;
                return this.resolutions[name] = node;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected nodesById entry for ${cached}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(v)}`);
        }
        let def = this.aliases[name] ?? this.ambient?.[name];
        if (!def) return this.maybeResolveSubalias(name);
        def = this.normalizeRootScopeValue(def);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(def, "generic")) return this.resolutions[name] = this.bindReference(def);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(def, "module")) {
            if (!def.root) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeMissingSubmoduleAccessMessage(name));
            return this.resolutions[name] = this.bindReference(def.root);
        }
        return this.resolutions[name] = this.parse(def, {
            alias: name
        });
    }
    createParseContext(input) {
        const id = input.id ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerNodeId"])(input.prefix);
        return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nodesByRegisteredId"][id] = Object.assign(input, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arkKind"]]: "context",
            $: this,
            id,
            phase: "unresolved"
        });
    }
    traversal(root) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Traversal"](root, this.resolvedConfig);
    }
    import(...names) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$module$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RootModule"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(this.export(...names), (alias, value)=>[
                `#${alias}`,
                value
            ]));
    }
    precompilation;
    _exportedResolutions;
    _exports;
    export(...names) {
        if (!this._exports) {
            this._exports = {};
            for (const name of this.exportedNames){
                const def = this.aliases[name];
                this._exports[name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(def, "module") ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$module$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bindModule"])(def, this) : bootstrapAliasReferences(this.maybeResolve(name));
            }
            // force node.resolution getter evaluation
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            for (const node of this.lazyResolutions)node.resolution;
            this._exportedResolutions = resolutionsOfModule(this, this._exports);
            this._json = resolutionsToJson(this._exportedResolutions);
            Object.assign(this.resolutions, this._exportedResolutions);
            this.references = Object.values(this.referencesById);
            if (!this.resolvedConfig.jitless) {
                const precompiler = precompileReferences(this.references);
                this.precompilation = precompiler.write(rootScopeFnName, 4);
                bindPrecompilation(this.references, precompiler, this);
            }
            this.resolved = true;
        }
        const namesToExport = names.length ? names : this.exportedNames;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$module$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RootModule"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(namesToExport, (_, name)=>[
                name,
                this._exports[name]
            ]));
    }
    resolve(name) {
        return this.export()[name];
    }
    node = (kinds, nodeSchema, opts = {})=>{
        const ctxOrNode = this.preparseNode(kinds, nodeSchema, opts);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"])(ctxOrNode)) return this.bindReference(ctxOrNode);
        const hasPreassignedId = ctxOrNode.id !== undefined;
        const ctx = this.createParseContext(ctxOrNode);
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseNode"])(ctx);
        const bound = this.bindReference(node);
        if (!hasPreassignedId) releaseUnusedContextId(ctx.id, bound);
        else __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nodesByRegisteredId"][ctx.id] = bound;
        return bound;
    };
    parse = (def, opts = {})=>this.finalize(this.parseDefinition(def, opts));
    parseDefinition(def, opts = {}) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(def, "root")) return this.bindReference(def);
        const ctxInputOrNode = this.preparseOwnDefinitionFormat(def, opts);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(ctxInputOrNode, "root")) return this.bindReference(ctxInputOrNode);
        const hasPreassignedId = ctxInputOrNode.id !== undefined;
        const ctx = this.createParseContext(ctxInputOrNode);
        let node = this.bindReference(this.parseOwnDefinitionFormat(def, ctx));
        // if the node is recursive e.g. { box: "this" }, we need to make sure it
        // has the original id from context so that its references compile correctly
        if (node.isCyclic) node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withId"])(node, ctx.id);
        if (!hasPreassignedId) releaseUnusedContextId(ctx.id, node);
        else __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nodesByRegisteredId"][ctx.id] = node;
        return node;
    }
    finalize(node) {
        // a node referencing a `this` whose enclosing type is still being parsed,
        // e.g. Record<string, this>, can't be resolved yet. the enclosing parse
        // finalizes it once the context has been replaced with the resolved node.
        if (node.isCyclic && hasUnresolvedContextAlias(node)) return node;
        bootstrapAliasReferences(node);
        if (!node.precompilation && !this.resolvedConfig.jitless) precompile(node.references);
        return node;
    }
}
class SchemaScope extends BaseScope {
    parseOwnDefinitionFormat(def, ctx) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseNode"])(ctx);
    }
    preparseOwnDefinitionFormat(schema, opts) {
        return this.preparseNode((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["schemaKindOf"])(schema), schema, opts);
    }
    preparseOwnAliasEntry(k, v) {
        return [
            k,
            v
        ];
    }
    normalizeRootScopeValue(v) {
        return v;
    }
}
// each parse context gets a new id, because a nested definition can refer to
// it (e.g. with "this"). if the result node does not use that id (e.g. the
// node came from a cache), no node can refer to the id. remove it, so that the
// global registry does not grow each time an equivalent type is parsed.
const releaseUnusedContextId = (id, node)=>{
    if (node.id === id) __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nodesByRegisteredId"][id] = node;
    else delete __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nodesByRegisteredId"][id];
};
// scope aliases are `$name` references, so can be skipped without a lookup
const hasUnresolvedContextAlias = (node)=>node.references.some((ref)=>ref.hasKind("alias") && ref.reference[0] !== "$" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nodesByRegisteredId"][ref.reference], "context"));
const bootstrapAliasReferences = (resolution)=>{
    const aliases = resolution.references.filter((node)=>node.hasKind("alias"));
    for (const aliasNode of aliases){
        addReferences(aliasNode.referencesById, aliasNode.resolution.referencesById);
        for (const ref of resolution.references){
            if (aliasNode.id in ref.referencesById) addReferences(ref.referencesById, aliasNode.referencesById);
        }
    }
    return resolution;
};
const addReferences = (base, references)=>{
    for(const id in references)base[id] ??= references[id];
};
const resolutionsToJson = (resolutions)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(resolutions, (k, v)=>[
            k,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(v, "root") || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(v, "generic") ? v.json : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(v, "module") ? resolutionsToJson(v) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected resolution ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(v)}`)
        ]);
const maybeResolveSubalias = (base, name)=>{
    const dotIndex = name.indexOf(".");
    if (dotIndex === -1) return;
    const dotPrefix = name.slice(0, dotIndex);
    const prefixSchema = base[dotPrefix];
    // if the name includes ".", but the prefix is not an alias, it
    // might be something like a decimal literal, so just fall through to return
    if (prefixSchema === undefined) return;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(prefixSchema, "module")) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeNonSubmoduleDotMessage(dotPrefix));
    const subalias = name.slice(dotIndex + 1);
    const resolution = prefixSchema[subalias];
    if (resolution === undefined) return maybeResolveSubalias(prefixSchema, subalias);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(resolution, "root") || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(resolution, "generic")) return resolution;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(resolution, "module")) {
        return resolution.root ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeMissingSubmoduleAccessMessage(name));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected resolution for alias '${name}': ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(resolution)}`);
};
const schemaScope = (aliases, config)=>new SchemaScope(aliases, config);
const rootSchemaScope = new SchemaScope({});
const parseAsSchema = (def, opts)=>{
    try {
        return rootSchema(def, opts);
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ParseError"]) return e;
        throw e;
    }
};
const resolutionsOfModule = ($, typeSet)=>{
    const result = {};
    for(const k in typeSet){
        const v = typeSet[k];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(v, "module")) {
            const innerResolutions = resolutionsOfModule($, v);
            const prefixedResolutions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(innerResolutions, (innerK, innerV)=>[
                    `${k}.${innerK}`,
                    innerV
                ]);
            Object.assign(result, prefixedResolutions);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(v, "root") || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(v, "generic")) result[k] = v;
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected scope resolution ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(v)}`);
    }
    return result;
};
const writeUnresolvableMessage = (token)=>`'${token}' is unresolvable`;
const writeNonSubmoduleDotMessage = (name)=>`'${name}' must reference a module to be accessed using dot syntax`;
const writeMissingSubmoduleAccessMessage = (name)=>`Reference to submodule '${name}' must specify an alias`;
// ensure the scope is resolved so JIT will be applied to future types
rootSchemaScope.export();
const rootSchema = rootSchemaScope.schema;
const node = rootSchemaScope.node;
const defineSchema = rootSchemaScope.defineSchema;
const genericNode = rootSchemaScope.generic;
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/compile.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompiledFunction",
    ()=>CompiledFunction,
    "NodeCompiler",
    ()=>NodeCompiler,
    "compileLiteralPropAccess",
    ()=>compileLiteralPropAccess,
    "compileSerializedValue",
    ()=>compileSerializedValue,
    "indexPropAccess",
    ()=>indexPropAccess,
    "serializeLiteralKey",
    ()=>serializeLiteralKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/functions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$primitive$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/primitive.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
;
;
class CompiledFunction extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CastableBase"] {
    argNames;
    body = "";
    constructor(...args){
        super();
        this.argNames = args;
        for (const arg of args){
            if (arg in this) {
                throw new Error(`Arg name '${arg}' would overwrite an existing property on FunctionBody`);
            }
            ;
            this[arg] = arg;
        }
    }
    indentation = 0;
    indent() {
        this.indentation += 4;
        return this;
    }
    dedent() {
        this.indentation -= 4;
        return this;
    }
    prop(key, optional = false) {
        return compileLiteralPropAccess(key, optional);
    }
    index(key, optional = false) {
        return indexPropAccess(`${key}`, optional);
    }
    line(statement) {
        ;
        this.body += `${" ".repeat(this.indentation)}${statement}\n`;
        return this;
    }
    const(identifier, expression) {
        this.line(`const ${identifier} = ${expression}`);
        return this;
    }
    let(identifier, expression) {
        return this.line(`let ${identifier} = ${expression}`);
    }
    set(identifier, expression) {
        return this.line(`${identifier} = ${expression}`);
    }
    if(condition, then) {
        return this.block(`if (${condition})`, then);
    }
    elseIf(condition, then) {
        return this.block(`else if (${condition})`, then);
    }
    else(then) {
        return this.block("else", then);
    }
    /** Current index is "i" */ for(until, body, initialValue = 0) {
        return this.block(`for (let i = ${initialValue}; ${until}; i++)`, body);
    }
    /** Current key is "k" */ forIn(object, body) {
        return this.block(`for (const k in ${object})`, body);
    }
    block(prefix, contents, suffix = "") {
        this.line(`${prefix} {`);
        this.indent();
        contents(this);
        this.dedent();
        return this.line(`}${suffix}`);
    }
    return(expression = "") {
        return this.line(`return ${expression}`);
    }
    write(name = "anonymous", indent = 0) {
        return `${name}(${this.argNames.join(", ")}) { ${indent ? this.body.split("\n").map((l)=>" ".repeat(indent) + `${l}`).join("\n") : this.body} }`;
    }
    compile() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DynamicFunction"](...this.argNames, this.body);
    }
}
const compileSerializedValue = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDomain"])(value, "object") || typeof value === "symbol" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registeredReference"])(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$primitive$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serializePrimitive"])(value);
const compileLiteralPropAccess = (key, optional = false)=>{
    if (typeof key === "string" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDotAccessible"])(key)) return `${optional ? "?" : ""}.${key}`;
    return indexPropAccess(serializeLiteralKey(key), optional);
};
const serializeLiteralKey = (key)=>typeof key === "symbol" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registeredReference"])(key) : JSON.stringify(key);
const indexPropAccess = (key, optional = false)=>`${optional ? "?." : ""}[${key}]`;
class NodeCompiler extends CompiledFunction {
    traversalKind;
    optimistic;
    constructor(ctx){
        super("data", "ctx");
        this.traversalKind = ctx.kind;
        this.optimistic = ctx.optimistic === true;
    }
    invoke(node, opts) {
        const arg = opts?.arg ?? this.data;
        const requiresContext = typeof node === "string" ? true : this.requiresContextFor(node);
        const id = typeof node === "string" ? node : node.id;
        if (requiresContext) return `${this.referenceToId(id, opts)}(${arg}, ${this.ctx})`;
        return `${this.referenceToId(id, opts)}(${arg})`;
    }
    referenceToId(id, opts) {
        const invokedKind = opts?.kind ?? this.traversalKind;
        const base = `this.${id}${invokedKind}`;
        return opts?.bind ? `${base}.bind(${opts?.bind})` : base;
    }
    requiresContextFor(node) {
        return this.traversalKind === "Apply" || node.allowsRequiresContext;
    }
    initializeErrorCount() {
        return this.const("errorCount", "ctx.currentErrorCount");
    }
    returnIfFail() {
        return this.if("ctx.currentErrorCount > errorCount", ()=>this.return());
    }
    returnIfFailFast() {
        return this.if("ctx.failFast && ctx.currentErrorCount > errorCount", ()=>this.return());
    }
    traverseKey(keyExpression, accessExpression, node) {
        const requiresContext = this.requiresContextFor(node);
        if (requiresContext) this.line(`${this.ctx}.path.push(${keyExpression})`);
        this.check(node, {
            arg: accessExpression
        });
        if (requiresContext) this.line(`${this.ctx}.path.pop()`);
        return this;
    }
    check(node, opts) {
        return this.traversalKind === "Allows" ? this.if(`!${this.invoke(node, opts)}`, ()=>this.return(false)) : this.line(this.invoke(node, opts));
    }
}
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Disjoint",
    ()=>Disjoint,
    "writeUnsatisfiableExpressionError",
    ()=>writeUnsatisfiableExpressionError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/path.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
;
;
;
class Disjoint extends Array {
    static init(kind, l, r, ctx) {
        return new Disjoint({
            kind,
            l,
            r,
            path: ctx?.path ?? [],
            optional: ctx?.optional ?? false
        });
    }
    add(kind, l, r, ctx) {
        this.push({
            kind,
            l,
            r,
            path: ctx?.path ?? [],
            optional: ctx?.optional ?? false
        });
        return this;
    }
    get summary() {
        return this.describeReasons();
    }
    describeReasons() {
        if (this.length === 1) {
            const { path, l, r } = this[0];
            const pathString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringifyPath"])(path);
            return writeUnsatisfiableExpressionError(`Intersection${pathString && ` at ${pathString}`} of ${describeReasons(l, r)}`);
        }
        return `The following intersections result in unsatisfiable types:\n• ${this.map(({ path, l, r })=>`${path}: ${describeReasons(l, r)}`).join("\n• ")}`;
    }
    throw() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(this.describeReasons());
    }
    invert() {
        const result = this.map((entry)=>({
                ...entry,
                l: entry.r,
                r: entry.l
            }));
        // Workaround for Static Hermes, which doesn't preserve the Array subclass here
        // https://github.com/arktypeio/arktype/issues/1027
        if (!(result instanceof Disjoint)) return new Disjoint(...result);
        return result;
    }
    withPrefixKey(key, kind) {
        const result = this.map((entry)=>({
                ...entry,
                path: [
                    key,
                    ...entry.path
                ],
                optional: entry.optional || kind === "optional"
            }));
        // same Hermes workaround as invert
        // https://github.com/arktypeio/arktype/issues/1645
        if (!(result instanceof Disjoint)) return new Disjoint(...result);
        return result;
    }
    toNeverIfDisjoint() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.never;
    }
}
const describeReasons = (l, r)=>`${describeReason(l)} and ${describeReason(r)}`;
const describeReason = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"])(value) ? value.expression : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(value) ? value.map(describeReason).join(" | ") || "never" : String(value);
const writeUnsatisfiableExpressionError = (expression)=>`${expression} results in an unsatisfiable type`;
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/errors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArkError",
    ()=>ArkError,
    "ArkErrors",
    ()=>ArkErrors,
    "TraversalError",
    ()=>TraversalError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/path.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
;
;
class ArkError extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CastableBase"] {
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arkKind"]] = "error";
    path;
    data;
    nodeConfig;
    input;
    ctx;
    // TS gets confused by <code>, so internally we just use the base type for input
    constructor({ prefixPath, relativePath, ...input }, ctx){
        super();
        this.input = input;
        this.ctx = ctx;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defineProperties"])(this, input);
        const data = ctx.data;
        if (input.code === "union") {
            input.errors = input.errors.flatMap((innerError)=>{
                // flatten union errors to avoid repeating context like "foo must be foo must be"...
                const flat = innerError.hasCode("union") ? innerError.errors : [
                    innerError
                ];
                if (!prefixPath && !relativePath) return flat;
                return flat.map((e)=>e.transform((e)=>({
                            ...e,
                            path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["conflatenateAll"])(prefixPath, e.path, relativePath)
                        })));
            });
        }
        this.nodeConfig = ctx.config[this.code];
        const basePath = [
            ...input.path ?? ctx.path
        ];
        if (relativePath) basePath.push(...relativePath);
        if (prefixPath) basePath.unshift(...prefixPath);
        this.path = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReadonlyPath"](...basePath);
        this.data = "data" in input ? input.data : data;
    }
    transform(f) {
        return new ArkError(f({
            data: this.data,
            path: this.path,
            ...this.input
        }), this.ctx);
    }
    hasCode(code) {
        return this.code === code;
    }
    get propString() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringifyPath"])(this.path);
    }
    get expected() {
        if (this.input.expected) return this.input.expected;
        const config = this.meta?.expected ?? this.nodeConfig.expected;
        return typeof config === "function" ? config(this.input) : config;
    }
    get actual() {
        if (this.input.actual) return this.input.actual;
        const config = this.meta?.actual ?? this.nodeConfig.actual;
        return typeof config === "function" ? config(this.data) : config;
    }
    get problem() {
        if (this.input.problem) return this.input.problem;
        const config = this.meta?.problem ?? this.nodeConfig.problem;
        return typeof config === "function" ? config(this) : config;
    }
    get message() {
        if (this.input.message) return this.input.message;
        const config = this.meta?.message ?? this.nodeConfig.message;
        return typeof config === "function" ? config(this) : config;
    }
    get flat() {
        return this.hasCode("intersection") ? [
            ...this.errors
        ] : [
            this
        ];
    }
    toJSON() {
        return {
            data: this.data,
            path: this.path,
            ...this.input,
            expected: this.expected,
            actual: this.actual,
            problem: this.problem,
            message: this.message
        };
    }
    toString() {
        return this.message;
    }
    throw() {
        throw this;
    }
}
class ArkErrors extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReadonlyArray"] {
    [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arkKind"]] = "errors";
    /**
     * Inherited array methods (`map`, `filter`, `slice`, …) return a plain
     * `Array`, not another `ArkErrors`, so callbacks that return primitives
     * (e.g. `issues.map(i => i.message)`) cannot populate a new `ArkErrors` instance.
     */ static get [Symbol.species]() {
        return Array;
    }
    ctx;
    constructor(ctx){
        super();
        this.ctx = ctx;
    }
    /**
     * Errors by a pathString representing their location.
     */ byPath = Object.create(null);
    /**
     * {@link byPath} flattened so that each value is an array of ArkError instances at that path.
     *
     * ✅ Since "intersection" errors will be flattened to their constituent `.errors`,
     * they will never be directly present in this representation.
     */ get flatByPath() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(this.byPath, (k, v)=>[
                k,
                v.flat
            ]);
    }
    /**
     * {@link byPath} flattened so that each value is an array of problem strings at that path.
     */ get flatProblemsByPath() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(this.byPath, (k, v)=>[
                k,
                v.flat.map((e)=>e.problem)
            ]);
    }
    /**
     * All pathStrings at which errors are present mapped to the errors occuring
     * at that path or any nested path within it.
     */ byAncestorPath = Object.create(null);
    count = 0;
    mutable = this;
    /**
     * Throw a TraversalError based on these errors.
     */ throw() {
        throw this.toTraversalError();
    }
    /**
     * Converts ArkErrors to TraversalError, a subclass of `Error` suitable for throwing with nice
     * formatting.
     */ toTraversalError() {
        return new TraversalError(this);
    }
    /**
     * Append an ArkError to this array, ignoring duplicates.
     */ add(error) {
        const existing = this.byPath[error.propString];
        if (existing) {
            // only add if it's not already in the errors collection
            if (error === existing) return;
            // If the existing error is an error for a value constrained to "never",
            // then we don't want to intersect the error messages.
            if (existing.hasCode("union") && existing.errors.length === 0) return;
            // If the new error is an error for a value constrained to "never",
            // then we want to override any existing errors.
            const errorIntersection = error.hasCode("union") && error.errors.length === 0 ? error : new ArkError({
                code: "intersection",
                errors: existing.hasCode("intersection") ? [
                    ...existing.errors,
                    error
                ] : [
                    existing,
                    error
                ]
            }, this.ctx);
            const existingIndex = this.indexOf(existing);
            this.mutable[existingIndex === -1 ? this.length : existingIndex] = errorIntersection;
            this.byPath[error.propString] = errorIntersection;
            // add the original error here rather than the intersection
            // since the intersection is reflected by the array of errors at
            // this path
            this.addAncestorPaths(error);
        } else {
            this.byPath[error.propString] = error;
            this.addAncestorPaths(error);
            this.mutable.push(error);
        }
        this.count++;
    }
    transform(f) {
        const result = new ArkErrors(this.ctx);
        for (const e of this)result.add(f(e));
        return result;
    }
    /**
     * Add all errors from an ArkErrors instance, ignoring duplicates and
     * prefixing their paths with that of the current Traversal.
     */ merge(errors) {
        for (const e of errors){
            this.add(new ArkError({
                ...e,
                path: [
                    ...this.ctx.path,
                    ...e.path
                ]
            }, this.ctx));
        }
    }
    /**
     * @internal
     */ affectsPath(path) {
        if (this.length === 0) return false;
        return(// this would occur if there is an existing error at a prefix of path
        // e.g. the path is ["foo", "bar"] and there is an error at ["foo"]
        path.stringifyAncestors().some((s)=>s in this.byPath) || // this would occur if there is an existing error at a suffix of path
        // e.g. the path is ["foo"] and there is an error at ["foo", "bar"]
        path.stringify() in this.byAncestorPath);
    }
    /**
     * A human-readable summary of all errors.
     */ get summary() {
        return this.toString();
    }
    /**
     * Alias of {@link summary} for consistency with `Error`.
     */ get message() {
        return this.summary;
    }
    /**
     * Alias of this ArkErrors instance for StandardSchema compatibility.
     */ get issues() {
        return this;
    }
    toJSON() {
        return [
            ...this.map((e)=>e.toJSON())
        ];
    }
    toString() {
        return this.join("\n");
    }
    addAncestorPaths(error) {
        for (const propString of error.path.stringifyAncestors()){
            this.byAncestorPath[propString] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(this.byAncestorPath[propString], error);
        }
    }
}
class TraversalError extends Error {
    name = "TraversalError";
    constructor(errors){
        if (errors.length === 1) super(errors.summary);
        else super("\n" + errors.map((error)=>`  • ${indent(error)}`).join("\n"));
        Object.defineProperty(this, "arkErrors", {
            value: errors,
            enumerable: false
        });
    }
}
const indent = (error)=>error.toString().split("\n").join("\n  ");
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertNodeKind",
    ()=>assertNodeKind,
    "basisKinds",
    ()=>basisKinds,
    "compileObjectLiteral",
    ()=>compileObjectLiteral,
    "constraintKeys",
    ()=>constraintKeys,
    "constraintKinds",
    ()=>constraintKinds,
    "defaultValueSerializer",
    ()=>defaultValueSerializer,
    "implementNode",
    ()=>implementNode,
    "isNodeKind",
    ()=>isNodeKind,
    "morphChildKinds",
    ()=>morphChildKinds,
    "nodeKinds",
    ()=>nodeKinds,
    "precedenceByKind",
    ()=>precedenceByKind,
    "precedenceOfKind",
    ()=>precedenceOfKind,
    "prestructuralKinds",
    ()=>prestructuralKinds,
    "refinementKinds",
    ()=>refinementKinds,
    "rootKinds",
    ()=>rootKinds,
    "schemaKindsRightOf",
    ()=>schemaKindsRightOf,
    "structuralKinds",
    ()=>structuralKinds,
    "structureKeys",
    ()=>structureKeys,
    "unionChildKinds",
    ()=>unionChildKinds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/compile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
;
;
;
const basisKinds = [
    "unit",
    "proto",
    "domain"
];
const structuralKinds = [
    "required",
    "optional",
    "index",
    "sequence"
];
const prestructuralKinds = [
    "pattern",
    "divisor",
    "exactLength",
    "max",
    "min",
    "maxLength",
    "minLength",
    "before",
    "after"
];
const refinementKinds = [
    ...prestructuralKinds,
    "structure",
    "predicate"
];
const constraintKinds = [
    ...refinementKinds,
    ...structuralKinds
];
const rootKinds = [
    "alias",
    "union",
    "morph",
    "unit",
    "intersection",
    "proto",
    "domain"
];
const nodeKinds = [
    ...rootKinds,
    ...constraintKinds
];
const constraintKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(constraintKinds, (i, kind)=>[
        kind,
        1
    ]);
const structureKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])([
    ...structuralKinds,
    "undeclared"
], (i, k)=>[
        k,
        1
    ]);
const precedenceByKind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(nodeKinds, (i, kind)=>[
        kind,
        i
    ]);
const isNodeKind = (value)=>typeof value === "string" && value in precedenceByKind;
function assertNodeKind(value, kind) {
    const valueIsNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"])(value);
    if (!valueIsNode || value.kind !== kind) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(`Expected node of kind ${kind} (was ${valueIsNode ? `${value.kind} node` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(value)})`);
    }
}
const precedenceOfKind = (kind)=>precedenceByKind[kind];
const schemaKindsRightOf = (kind)=>rootKinds.slice(precedenceOfKind(kind) + 1);
const unionChildKinds = [
    ...schemaKindsRightOf("union"),
    "alias"
];
const morphChildKinds = [
    ...schemaKindsRightOf("morph"),
    "alias"
];
const defaultValueSerializer = (v)=>{
    if (typeof v === "string" || typeof v === "boolean" || v === null) return v;
    if (typeof v === "number") {
        if (Number.isNaN(v)) return "NaN";
        if (v === Number.POSITIVE_INFINITY) return "Infinity";
        if (v === Number.NEGATIVE_INFINITY) return "-Infinity";
        return v;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compileSerializedValue"])(v);
};
const compileObjectLiteral = (ctx)=>{
    let result = "{ ";
    for (const [k, v] of Object.entries(ctx))result += `${k}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compileSerializedValue"])(v)}, `;
    return result + " }";
};
const implementNode = (_)=>{
    const implementation = _;
    if (implementation.hasAssociatedError) {
        implementation.defaults.expected ??= (ctx)=>"description" in ctx ? ctx.description : implementation.defaults.description(ctx);
        implementation.defaults.actual ??= (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(data);
        implementation.defaults.problem ??= (ctx)=>`must be ${ctx.expected}${ctx.actual ? ` (was ${ctx.actual})` : ""}`;
        implementation.defaults.message ??= (ctx)=>{
            if (ctx.path.length === 0) return ctx.problem;
            const problemWithLocation = `${ctx.propString} ${ctx.problem}`;
            if (problemWithLocation[0] === "[") {
                // clarify paths like [1], [0][1], and ["key!"] that could be confusing
                return `value at ${problemWithLocation}`;
            }
            return problemWithLocation;
        };
    }
    return implementation;
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/intersections.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "intersectNodesRoot",
    ()=>intersectNodesRoot,
    "intersectOrPipeNodes",
    ()=>intersectOrPipeNodes,
    "pipeNodesRoot",
    ()=>pipeNodesRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
;
;
;
const intersectionCache = {};
const intersectNodesRoot = (l, r, $)=>intersectOrPipeNodes(l, r, {
        $,
        invert: false,
        pipe: false
    });
const pipeNodesRoot = (l, r, $)=>intersectOrPipeNodes(l, r, {
        $,
        invert: false,
        pipe: true
    });
const intersectOrPipeNodes = (l, r, ctx)=>{
    const operator = ctx.pipe ? "|>" : "&";
    const lrCacheKey = `${l.hash}${operator}${r.hash}`;
    if (intersectionCache[lrCacheKey] !== undefined) return intersectionCache[lrCacheKey];
    if (!ctx.pipe) {
        // we can only use this for the commutative & operator
        const rlCacheKey = `${r.hash}${operator}${l.hash}`;
        if (intersectionCache[rlCacheKey] !== undefined) {
            // if the cached result was a Disjoint and the operands originally
            // appeared in the opposite order, we need to invert it to match
            const rlResult = intersectionCache[rlCacheKey];
            const lrResult = rlResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"] ? rlResult.invert() : rlResult;
            // add the lr result to the cache directly to bypass this check in the future
            intersectionCache[lrCacheKey] = lrResult;
            return lrResult;
        }
    }
    const isPureIntersection = !ctx.pipe || !l.includesTransform && !r.includesTransform;
    if (isPureIntersection && l.equals(r)) return l;
    let result = isPureIntersection ? _intersectNodes(l, r, ctx) : l.hasKindIn(...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootKinds"]) ? // if l is a RootNode, r will be as well
    _pipeNodes(l, r, ctx) : _intersectNodes(l, r, ctx);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"])(result)) {
        // if the result equals one of the operands, preserve its metadata by
        // returning the original reference
        if (l.equals(result)) result = l;
        else if (r.equals(result)) result = r;
    }
    intersectionCache[lrCacheKey] = result;
    return result;
};
const _intersectNodes = (l, r, ctx)=>{
    const leftmostKind = l.precedence < r.precedence ? l.kind : r.kind;
    const implementation = l.impl.intersections[r.kind] ?? r.impl.intersections[l.kind];
    if (implementation === undefined) {
        // should be two ConstraintNodes that have no relation
        // this could also happen if a user directly intersects a Type and a ConstraintNode,
        // but that is not allowed by the external function signature
        return null;
    } else if (leftmostKind === l.kind) return implementation(l, r, ctx);
    else {
        let result = implementation(r, l, {
            ...ctx,
            invert: !ctx.invert
        });
        if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) result = result.invert();
        return result;
    }
};
const _pipeNodes = (l, r, ctx)=>l.includesTransform || r.includesTransform ? ctx.invert ? pipeMorphed(r, l, ctx) : pipeMorphed(l, r, ctx) : _intersectNodes(l, r, ctx);
const pipeMorphed = (from, to, ctx)=>from.distribute((fromBranch)=>_pipeMorphed(fromBranch, to, ctx), (results)=>{
        const viableBranches = results.filter(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"]);
        if (viableBranches.length === 0) return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"].init("union", from.branches, to.branches);
        // if the input type has changed, create a new node without preserving metadata
        if (viableBranches.length < from.branches.length || !from.branches.every((branch, i)=>branch.rawIn.equals(viableBranches[i].rawIn))) return ctx.$.parseSchema(viableBranches);
        // otherwise, the input has not changed so preserve metadata
        let meta;
        if (viableBranches.length === 1) {
            const onlyBranch = viableBranches[0];
            if (!meta) return onlyBranch;
            return ctx.$.node("morph", {
                ...onlyBranch.inner,
                in: onlyBranch.rawIn.configure(meta, "self")
            });
        }
        const schema = {
            branches: viableBranches
        };
        if (meta) schema.meta = meta;
        return ctx.$.parseSchema(schema);
    });
const _pipeMorphed = (from, to, ctx)=>{
    const fromIsMorph = from.hasKind("morph");
    if (fromIsMorph) {
        const morphs = [
            ...from.morphs
        ];
        if (from.lastMorphIfNode) {
            // still piped from context, so allows appending additional morphs
            const outIntersection = intersectOrPipeNodes(from.lastMorphIfNode, to, ctx);
            if (outIntersection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return outIntersection;
            morphs[morphs.length - 1] = outIntersection;
        } else morphs.push(to);
        return ctx.$.node("morph", {
            morphs,
            in: from.inner.in
        });
    }
    if (to.hasKind("morph")) {
        const inTersection = intersectOrPipeNodes(from, to.rawIn, ctx);
        if (inTersection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return inTersection;
        return ctx.$.node("morph", {
            morphs: [
                to
            ],
            in: inTersection
        });
    }
    return ctx.$.node("morph", {
        morphs: [
            to
        ],
        in: from
    });
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$ark",
    ()=>$ark,
    "reference",
    ()=>reference,
    "registeredReference",
    ()=>registeredReference,
    "registryName",
    ()=>registryName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/registry.js [app-route] (ecmascript)");
;
let _registryName = "$ark";
let suffix = 2;
while(_registryName in globalThis)_registryName = `$ark${suffix++}`;
const registryName = _registryName;
globalThis[registryName] = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registry"];
const $ark = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registry"];
const reference = (name)=>`${registryName}.${name}`;
const registeredReference = (value)=>reference((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["register"])(value));
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/toJsonSchema.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToJsonSchema",
    ()=>ToJsonSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
;
class ToJsonSchemaError extends Error {
    name = "ToJsonSchemaError";
    code;
    context;
    constructor(code, context){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(context, {
            quoteKeys: false,
            indent: 4
        }));
        this.code = code;
        this.context = context;
    }
    hasCode(code) {
        return this.code === code;
    }
}
const defaultConfig = {
    target: "draft-2020-12",
    dialect: "https://json-schema.org/draft/2020-12/schema",
    useRefs: false,
    fallback: {
        arrayObject: (ctx)=>ToJsonSchema.throw("arrayObject", ctx),
        arrayPostfix: (ctx)=>ToJsonSchema.throw("arrayPostfix", ctx),
        defaultValue: (ctx)=>ToJsonSchema.throw("defaultValue", ctx),
        domain: (ctx)=>ToJsonSchema.throw("domain", ctx),
        morph: (ctx)=>ToJsonSchema.throw("morph", ctx),
        patternIntersection: (ctx)=>ToJsonSchema.throw("patternIntersection", ctx),
        predicate: (ctx)=>ToJsonSchema.throw("predicate", ctx),
        proto: (ctx)=>ToJsonSchema.throw("proto", ctx),
        symbolKey: (ctx)=>ToJsonSchema.throw("symbolKey", ctx),
        unit: (ctx)=>ToJsonSchema.throw("unit", ctx),
        date: (ctx)=>ToJsonSchema.throw("date", ctx)
    }
};
// Standard JSON Schema converters only throw for unsupported options, so
// these keep the part of a type JSON Schema can represent, or {} if none
const standardFallback = {
    arrayObject: (ctx)=>ctx.base,
    // draft-07 tuples keep their prefix in items
    arrayPostfix: ({ base: { items, additionalItems, ...base } })=>Array.isArray(items) ? {
            ...base,
            items
        } : base,
    defaultValue: ()=>undefined,
    domain: (ctx)=>ctx.base,
    morph: (ctx)=>ctx.base,
    patternIntersection: (ctx)=>ctx.base,
    predicate: (ctx)=>ctx.base,
    proto: (ctx)=>ctx.base,
    symbolKey: (ctx)=>ctx.base,
    unit: (ctx)=>ctx.base,
    date: (ctx)=>ctx.base
};
const ToJsonSchema = {
    Error: ToJsonSchemaError,
    throw: (...args)=>{
        throw new ToJsonSchema.Error(...args);
    },
    throwInternalOperandError: (kind, schema)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected JSON Schema input for ${kind}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(schema)}`),
    defaultConfig,
    standardFallback
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/traversal.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Traversal",
    ()=>Traversal,
    "traverseKey",
    ()=>traverseKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/path.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
;
;
;
class Traversal {
    /**
     * #### the path being validated or morphed
     *
     * ✅ array indices represented as numbers
     * ⚠️ mutated during traversal - use `path.slice(0)` to snapshot
     * 🔗 use {@link propString} for a stringified version
     */ path = [];
    /**
     * #### {@link ArkErrors} that will be part of this traversal's finalized result
     *
     * ✅ will always be an empty array for a valid traversal
     */ errors = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ArkErrors"](this);
    /**
     * #### the original value being traversed
     */ root;
    /**
     * #### configuration for this traversal
     *
     * ✅ options can affect traversal results and error messages
     * ✅ defaults < global config < scope config
     * ✅ does not include options configured on individual types
     */ config;
    queuedMorphs = [];
    branches = [];
    seen = {};
    constructor(root, config){
        this.root = root;
        this.config = config;
    }
    /**
     * #### the data being validated or morphed
     *
     * ✅ extracted from {@link root} at {@link path}
     */ get data() {
        let result = this.root;
        for (const segment of this.path)result = result?.[segment];
        return result;
    }
    /**
     * #### a string representing {@link path}
     *
     * @propString
     */ get propString() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringifyPath"])(this.path);
    }
    /**
     * #### add an {@link ArkError} and return `false`
     *
     * ✅ useful for predicates like `.narrow`
     */ reject(input) {
        this.error(input);
        return false;
    }
    /**
     * #### add an {@link ArkError} from a description and return `false`
     *
     * ✅ useful for predicates like `.narrow`
     * 🔗 equivalent to {@link reject}({ expected })
     */ mustBe(expected) {
        this.error(expected);
        return false;
    }
    error(input) {
        const errCtx = typeof input === "object" ? input.code ? input : {
            ...input,
            code: "predicate"
        } : {
            code: "predicate",
            expected: input
        };
        return this.errorFromContext(errCtx);
    }
    /**
     * #### whether {@link currentBranch} (or the traversal root, outside a union) has one or more errors
     */ hasError() {
        return this.currentErrorCount !== 0;
    }
    get currentBranch() {
        return this.branches[this.branches.length - 1];
    }
    queueMorphs(morphs) {
        const input = {
            path: new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReadonlyPath"](...this.path),
            morphs
        };
        if (this.currentBranch) this.currentBranch.queuedMorphs.push(input);
        else this.queuedMorphs.push(input);
    }
    finalize(onFail) {
        if (this.queuedMorphs.length) {
            if (typeof this.root === "object" && this.root !== null && this.config.clone) this.root = this.config.clone(this.root);
            this.applyQueuedMorphs();
        }
        if (this.hasError()) return onFail ? onFail(this.errors) : this.errors;
        return this.root;
    }
    get currentErrorCount() {
        return this.currentBranch ? this.currentBranch.error ? 1 : 0 : this.errors.count;
    }
    get failFast() {
        return this.branches.length !== 0;
    }
    pushBranch() {
        this.branches.push({
            error: undefined,
            queuedMorphs: []
        });
    }
    popBranch() {
        return this.branches.pop();
    }
    /**
     * @internal
     * Convenience for casting from InternalTraversal to Traversal
     * for cases where the extra methods on the external type are expected, e.g.
     * a morph or predicate.
     */ get external() {
        return this;
    }
    errorFromNodeContext(input) {
        return this.errorFromContext(input);
    }
    errorFromContext(errCtx) {
        const error = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ArkError"](errCtx, this);
        if (this.currentBranch) this.currentBranch.error = error;
        else this.errors.add(error);
        return error;
    }
    applyQueuedMorphs() {
        // invoking morphs that are Nodes will reuse this context, potentially
        // adding additional morphs, so we have to continue looping until
        // queuedMorphs is empty rather than iterating over the list once
        while(this.queuedMorphs.length){
            const queuedMorphs = this.queuedMorphs;
            this.queuedMorphs = [];
            for (const { path, morphs } of queuedMorphs){
                // even if we already have an error, apply morphs that are not at a path
                // with errors to capture potential validation errors
                if (this.errors.affectsPath(path)) continue;
                this.applyMorphsAtPath(path, morphs);
            }
        }
    }
    applyMorphsAtPath(path, morphs) {
        const key = path[path.length - 1];
        let parent;
        if (key !== undefined) {
            // find the object on which the key to be morphed exists
            parent = this.root;
            for(let pathIndex = 0; pathIndex < path.length - 1; pathIndex++)parent = parent[path[pathIndex]];
        }
        for (const morph of morphs){
            // ensure morphs are applied relative to the correct path
            // in case previous operations modified this.path
            this.path = [
                ...path
            ];
            const morphIsNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"])(morph);
            const result = morph(parent === undefined ? this.root : parent[key], this);
            if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ArkError"]) {
                // if an ArkError was returned, ensure it has been added to errors
                this.errors.add(result);
                break;
            }
            if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ArkErrors"]) {
                // if the morph was a direct reference to another node,
                // errors will have been added directly via this piped context
                if (!morphIsNode) {
                    // otherwise, we have to ensure each error has been added
                    this.errors.merge(result);
                }
                // skip any remaining morphs at the current path
                this.queuedMorphs = [];
                break;
            }
            // if the morph was successful, assign the result to the
            // corresponding property, or to root if path is empty
            if (parent === undefined) this.root = result;
            else parent[key] = result;
            // if the current morph queued additional morphs,
            // applying them before subsequent morphs
            this.applyQueuedMorphs();
        }
    }
}
const traverseKey = (key, fn, // ctx will be undefined if this node isn't context-dependent
ctx)=>{
    if (!ctx) return fn();
    ctx.path.push(key);
    const result = fn();
    ctx.path.pop();
    return result;
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arkKind",
    ()=>arkKind,
    "hasArkKind",
    ()=>hasArkKind,
    "isNode",
    ()=>isNode,
    "makeRootAndArrayPropertiesMutable",
    ()=>makeRootAndArrayPropertiesMutable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
;
const makeRootAndArrayPropertiesMutable = (o)=>// this cast should not be required, but it seems TS is referencing
    // the wrong parameters here?
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(o, (k, v)=>[
            k,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(v) ? [
                ...v
            ] : v
        ]);
const arkKind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["noSuggest"])("arkKind");
const hasArkKind = (value, kind)=>value?.[arkKind] === kind;
const isNode = (value)=>hasArkKind(value, "root") || hasArkKind(value, "constraint");
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Index",
    ()=>Index,
    "IndexNode",
    ()=>IndexNode,
    "writeEnumerableIndexBranches",
    ()=>writeEnumerableIndexBranches,
    "writeInvalidPropertyKeyMessage",
    ()=>writeInvalidPropertyKeyMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/constraint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/node.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/intersections.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/traversal.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "index",
    hasAssociatedError: false,
    intersectionIsOpen: true,
    keys: {
        signature: {
            child: true,
            parse: (schema, ctx)=>{
                const key = ctx.$.parseSchema(schema);
                if (!key.extends(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.key)) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeInvalidPropertyKeyMessage(key.expression));
                }
                const enumerableBranches = key.branches.filter((b)=>b.hasKind("unit"));
                if (enumerableBranches.length) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeEnumerableIndexBranches(enumerableBranches.map((b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(b.unit))));
                }
                return key;
            }
        },
        value: {
            child: true,
            parse: (schema, ctx)=>ctx.$.parseSchema(schema)
        }
    },
    normalize: (schema)=>schema,
    defaults: {
        description: (node)=>`[${node.signature.expression}]: ${node.value.description}`
    },
    intersections: {
        index: (l, r, ctx)=>{
            if (l.signature.equals(r.signature)) {
                const valueIntersection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectOrPipeNodes"])(l.value, r.value, ctx);
                const value = valueIntersection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"] ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.never.internal : valueIntersection;
                return ctx.$.node("index", {
                    signature: l.signature,
                    value
                });
            }
            // if r constrains all of l's keys to a subtype of l's value, r is a subtype of l
            if (l.signature.extends(r.signature) && l.value.subsumes(r.value)) return r;
            // if l constrains all of r's keys to a subtype of r's value, l is a subtype of r
            if (r.signature.extends(l.signature) && r.value.subsumes(l.value)) return l;
            // other relationships between index signatures can't be generally reduced
            return null;
        }
    }
});
class IndexNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseConstraint"] {
    impliedBasis = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.object.internal;
    expression = `[${this.signature.expression}]: ${this.value.expression}`;
    flatRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(this.value.flatRefs.map((ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatRef"])([
            this.signature,
            ...ref.path
        ], ref.node)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatRef"])([
        this.signature
    ], this.value));
    traverseAllows = (data, ctx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringAndSymbolicEntriesOf"])(data).every((entry)=>{
            if (this.signature.traverseAllows(entry[0], ctx)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseKey"])(entry[0], ()=>this.value.traverseAllows(entry[1], ctx), ctx);
            }
            return true;
        });
    traverseApply = (data, ctx)=>{
        for (const entry of (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringAndSymbolicEntriesOf"])(data)){
            if (this.signature.traverseAllows(entry[0], ctx)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseKey"])(entry[0], ()=>this.value.traverseApply(entry[1], ctx), ctx);
            }
        }
    };
    _transform(mapper, ctx) {
        ctx.path.push(this.signature);
        const result = super._transform(mapper, ctx);
        ctx.path.pop();
        return result;
    }
    compile() {
    // this is currently handled by StructureNode
    }
}
const Index = {
    implementation,
    Node: IndexNode
};
const writeEnumerableIndexBranches = (keys)=>`Index keys ${keys.join(", ")} should be specified as named props.`;
const writeInvalidPropertyKeyMessage = (indexSchema)=>`Indexed key definition '${indexSchema}' must be a string or symbol`;
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/optional.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Optional",
    ()=>Optional,
    "OptionalNode",
    ()=>OptionalNode,
    "assertDefaultValueAssignability",
    ()=>assertDefaultValueAssignability,
    "computeDefaultValueMorph",
    ()=>computeDefaultValueMorph,
    "writeNonPrimitiveNonFunctionDefaultValueMessage",
    ()=>writeNonPrimitiveNonFunctionDefaultValueMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/functions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/intrinsic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/compile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/traversal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$prop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/prop.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "optional",
    hasAssociatedError: false,
    intersectionIsOpen: true,
    keys: {
        key: {},
        value: {
            child: true,
            parse: (schema, ctx)=>ctx.$.parseSchema(schema)
        },
        default: {
            preserveUndefined: true
        }
    },
    normalize: (schema)=>schema,
    reduce: (inner, $)=>{
        if ($.resolvedConfig.exactOptionalPropertyTypes === false) {
            if (!inner.value.allows(undefined)) {
                return $.node("optional", {
                    ...inner,
                    value: inner.value.or(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].undefined)
                }, {
                    prereduced: true
                });
            }
        }
    },
    defaults: {
        description: (node)=>`${node.compiledKey}?: ${node.value.description}`
    },
    intersections: {
        optional: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$prop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectProps"]
    }
});
class OptionalNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$prop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseProp"] {
    constructor(...args){
        super(...args);
        if ("default" in this.inner) assertDefaultValueAssignability(this.value, this.inner.default, this.key);
    }
    get rawIn() {
        const baseIn = super.rawIn;
        if (!this.hasDefault()) return baseIn;
        return this.$.node("optional", (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["omit"])(baseIn.inner, {
            default: true
        }), {
            prereduced: true
        });
    }
    get outProp() {
        if (!this.hasDefault()) return this;
        const { default: defaultValue, ...requiredInner } = this.inner;
        return this.cacheGetter("outProp", this.$.node("required", requiredInner, {
            prereduced: true
        }));
    }
    expression = this.hasDefault() ? `${this.compiledKey}: ${this.value.expression} = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(this.inner.default)}` : `${this.compiledKey}?: ${this.value.expression}`;
    defaultValueMorph = getDefaultableMorph(this);
    defaultValueMorphRef = this.defaultValueMorph && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registeredReference"])(this.defaultValueMorph);
}
const Optional = {
    implementation,
    Node: OptionalNode
};
const defaultableMorphCache = {};
const getDefaultableMorph = (node)=>{
    if (!node.hasDefault()) return;
    const cacheKey = `{${node.compiledKey}: ${node.value.id} = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultValueSerializer"])(node.default)}}`;
    return defaultableMorphCache[cacheKey] ??= computeDefaultValueMorph(node.key, node.value, node.default);
};
const computeDefaultValueMorph = (key, value, defaultInput)=>{
    if (typeof defaultInput === "function") {
        // if the value has a morph, pipe context through it
        return value.includesTransform ? (data, ctx)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseKey"])(key, ()=>value(data[key] = defaultInput(), ctx), ctx);
            return data;
        } : (data)=>{
            data[key] = defaultInput();
            return data;
        };
    }
    // non-functional defaults can be safely cached as long as the morph is
    // guaranteed to be pure and the output is primitive
    const precomputedMorphedDefault = value.includesTransform ? value.assert(defaultInput) : defaultInput;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDomain"])(precomputedMorphedDefault, "object") ? // the type signature only allows this if the value was morphed
    (data, ctx)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseKey"])(key, ()=>value(data[key] = defaultInput, ctx), ctx);
        return data;
    } : (data)=>{
        data[key] = precomputedMorphedDefault;
        return data;
    };
};
const assertDefaultValueAssignability = (node, value, key)=>{
    const wrapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isThunk"])(value);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDomain"])(value, "object") && !wrapped) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeNonPrimitiveNonFunctionDefaultValueMessage(key));
    // if the node has a default value, finalize it and apply JIT optimizations
    // if applicable to ensure behavior + error logging is externally consistent
    // (using .in here insead of .rawIn triggers finalization)
    const out = node.in(wrapped ? value() : value);
    if (out instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ArkErrors"]) {
        if (key === null) {
            // e.g. "Default must be assignable to number (was string)"
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(`Default ${out.summary}`);
        }
        const atPath = out.transform((e)=>e.transform((input)=>({
                    ...input,
                    prefixPath: [
                        key
                    ]
                })));
        // e.g. "Default for bar must be assignable to number (was string)"
        // e.g. "Default for value at [0] must be assignable to number (was string)"
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(`Default for ${atPath.summary}`);
    }
    return value;
};
const writeNonPrimitiveNonFunctionDefaultValueMessage = (key)=>{
    const keyDescription = key === null ? "" : typeof key === "number" ? `for value at [${key}] ` : `for ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compileSerializedValue"])(key)} `;
    return `Non-primitive default ${keyDescription}must be specified as a function like () => ({my: 'object'})`;
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/prop.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseProp",
    ()=>BaseProp,
    "intersectProps",
    ()=>intersectProps,
    "writeDefaultIntersectionMessage",
    ()=>writeDefaultIntersectionMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/constraint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/node.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/compile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/intersections.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/traversal.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const intersectProps = (l, r, ctx)=>{
    if (l.key !== r.key) return null;
    const key = l.key;
    let value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectOrPipeNodes"])(l.value, r.value, ctx);
    const kind = l.required || r.required ? "required" : "optional";
    if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) {
        if (kind === "optional") value = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.never.internal;
        else {
            // if either operand was optional, the Disjoint has to be treated as optional
            return value.withPrefixKey(l.key, l.required && r.required ? "required" : "optional");
        }
    }
    if (kind === "required") {
        return ctx.$.node("required", {
            key,
            value
        });
    }
    const defaultIntersection = l.hasDefault() ? r.hasDefault() ? l.default === r.default ? l.default : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeDefaultIntersectionMessage(l.default, r.default)) : l.default : r.hasDefault() ? r.default : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unset"];
    return ctx.$.node("optional", {
        key,
        value,
        // unset is stripped during parsing
        default: defaultIntersection
    });
};
class BaseProp extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseConstraint"] {
    required = this.kind === "required";
    optional = this.kind === "optional";
    impliedBasis = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.object.internal;
    serializedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compileSerializedValue"])(this.key);
    compiledKey = typeof this.key === "string" ? this.key : this.serializedKey;
    flatRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(this.value.flatRefs.map((ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatRef"])([
            this.key,
            ...ref.path
        ], ref.node)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatRef"])([
        this.key
    ], this.value));
    _transform(mapper, ctx) {
        ctx.path.push(this.key);
        const result = super._transform(mapper, ctx);
        ctx.path.pop();
        return result;
    }
    hasDefault() {
        return "default" in this.inner;
    }
    traverseAllows = (data, ctx)=>{
        if (this.key in data) {
            // ctx will be undefined if this node isn't context-dependent
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseKey"])(this.key, ()=>this.value.traverseAllows(data[this.key], ctx), ctx);
        }
        return this.optional;
    };
    traverseApply = (data, ctx)=>{
        if (this.key in data) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseKey"])(this.key, ()=>this.value.traverseApply(data[this.key], ctx), ctx);
        } else if (this.hasKind("required")) ctx.errorFromNodeContext(this.errorContext);
    };
    compile(js) {
        js.if(`${this.serializedKey} in data`, ()=>js.traverseKey(this.serializedKey, `data${js.prop(this.key)}`, this.value));
        if (this.hasKind("required")) {
            js.else(()=>js.traversalKind === "Apply" ? js.line(`ctx.errorFromNodeContext(${this.compiledErrorContext})`) : js.return(false));
        }
        if (js.traversalKind === "Allows") js.return(true);
    }
}
const writeDefaultIntersectionMessage = (lValue, rValue)=>`Invalid intersection of default values ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(lValue)} & ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(rValue)}`;
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/required.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Required",
    ()=>Required,
    "RequiredNode",
    ()=>RequiredNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$prop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/prop.js [app-route] (ecmascript)");
;
;
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "required",
    hasAssociatedError: true,
    intersectionIsOpen: true,
    keys: {
        key: {},
        value: {
            child: true,
            parse: (schema, ctx)=>ctx.$.parseSchema(schema)
        }
    },
    normalize: (schema)=>schema,
    defaults: {
        description: (node)=>`${node.compiledKey}: ${node.value.description}`,
        expected: (ctx)=>ctx.missingValueDescription,
        actual: ()=>"missing"
    },
    intersections: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$prop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectProps"],
        optional: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$prop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectProps"]
    }
});
class RequiredNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$prop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseProp"] {
    expression = `${this.compiledKey}: ${this.value.expression}`;
    errorContext = Object.freeze({
        code: "required",
        missingValueDescription: this.value.defaultShortDescription,
        relativePath: [
            this.key
        ],
        meta: this.meta
    });
    compiledErrorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compileObjectLiteral"])(this.errorContext);
}
const Required = {
    implementation,
    Node: RequiredNode
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/sequence.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sequence",
    ()=>Sequence,
    "SequenceNode",
    ()=>SequenceNode,
    "postfixAfterOptionalOrDefaultableMessage",
    ()=>postfixAfterOptionalOrDefaultableMessage,
    "postfixWithoutVariadicMessage",
    ()=>postfixWithoutVariadicMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/constraint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/node.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/intersections.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/traversal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/optional.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$prop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/prop.js [app-route] (ecmascript)");
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
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "sequence",
    hasAssociatedError: false,
    collapsibleKey: "variadic",
    keys: {
        prefix: {
            child: true,
            parse: (schema, ctx)=>{
                // empty affixes are omitted. an empty array should therefore
                // be specified as `{ proto: Array, length: 0 }`
                if (schema.length === 0) return undefined;
                return schema.map((element)=>ctx.$.parseSchema(element));
            },
            reduceIo: (ioKind, inner, prefix)=>{
                // before defaultables, which reduce first and are required on output
                inner.prefix = [
                    ...prefix.map((node)=>ioKind === "in" ? node.rawIn : node.rawOut),
                    ...inner.prefix ?? []
                ];
            }
        },
        optionals: {
            child: true,
            parse: (schema, ctx)=>{
                if (schema.length === 0) return undefined;
                return schema.map((element)=>ctx.$.parseSchema(element));
            },
            reduceIo: (ioKind, inner, optionals)=>{
                // after defaultables, which reduce first and are optional on input
                inner.optionals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(inner.optionals, optionals.map((node)=>ioKind === "in" ? node.rawIn : node.rawOut));
            }
        },
        defaultables: {
            child: (defaultables)=>defaultables.map((element)=>element[0]),
            parse: (defaultables, ctx)=>{
                if (defaultables.length === 0) return undefined;
                return defaultables.map((element)=>{
                    const node = ctx.$.parseSchema(element[0]);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertDefaultValueAssignability"])(node, element[1], null);
                    return [
                        node,
                        element[1]
                    ];
                });
            },
            serialize: (defaults)=>defaults.map((element)=>[
                        element[0].collapsibleJson,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultValueSerializer"])(element[1])
                    ]),
            reduceIo: (ioKind, inner, defaultables)=>{
                if (ioKind === "in") {
                    inner.optionals = defaultables.map((d)=>d[0].rawIn);
                    return;
                }
                inner.prefix = defaultables.map((d)=>d[0].rawOut);
                return;
            }
        },
        variadic: {
            child: true,
            parse: (schema, ctx)=>ctx.$.parseSchema(schema, ctx)
        },
        minVariadicLength: {
            // minVariadicLength is reflected in the id of this node,
            // but not its IntersectionNode parent since it is superceded by the minLength
            // node it implies
            parse: (min)=>min === 0 ? undefined : min
        },
        postfix: {
            child: true,
            parse: (schema, ctx)=>{
                if (schema.length === 0) return undefined;
                return schema.map((element)=>ctx.$.parseSchema(element));
            }
        }
    },
    normalize: (schema)=>{
        if (typeof schema === "string") return {
            variadic: schema
        };
        if ("variadic" in schema || "prefix" in schema || "defaultables" in schema || "optionals" in schema || "postfix" in schema || "minVariadicLength" in schema) {
            if (schema.postfix?.length) {
                if (!schema.variadic) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(postfixWithoutVariadicMessage);
                if (schema.optionals?.length || schema.defaultables?.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(postfixAfterOptionalOrDefaultableMessage);
            }
            if (schema.minVariadicLength && !schema.variadic) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])("minVariadicLength may not be specified without a variadic element");
            }
            return schema;
        }
        return {
            variadic: schema
        };
    },
    reduce: (raw, $)=>{
        let minVariadicLength = raw.minVariadicLength ?? 0;
        const prefix = raw.prefix?.slice() ?? [];
        const defaultables = raw.defaultables?.slice() ?? [];
        const optionals = raw.optionals?.slice() ?? [];
        const postfix = raw.postfix?.slice() ?? [];
        if (raw.variadic) {
            // optional elements equivalent to the variadic parameter are redundant
            while(optionals[optionals.length - 1]?.equals(raw.variadic))optionals.pop();
            if (optionals.length === 0 && defaultables.length === 0) {
                // If there are no optional, normalize prefix
                // elements adjacent and equivalent to variadic:
                // 		{ variadic: number, prefix: [string, number] }
                // reduces to:
                // 		{ variadic: number, prefix: [string], minVariadicLength: 1 }
                while(prefix[prefix.length - 1]?.equals(raw.variadic)){
                    prefix.pop();
                    minVariadicLength++;
                }
            }
            // Normalize postfix elements adjacent and equivalent to variadic:
            // 		{ variadic: number, postfix: [number, number, 5] }
            // reduces to:
            // 		{ variadic: number, postfix: [5], minVariadicLength: 2 }
            while(postfix[0]?.equals(raw.variadic)){
                postfix.shift();
                minVariadicLength++;
            }
        } else if (optionals.length === 0 && defaultables.length === 0) {
            // if there's no variadic, optional or defaultable elements,
            // postfix can just be appended to prefix
            prefix.push(...postfix.splice(0));
        }
        if (// if any variadic adjacent elements were moved to minVariadicLength
        minVariadicLength !== raw.minVariadicLength || raw.prefix && raw.prefix.length !== prefix.length) {
            // reparse the reduced def
            return $.node("sequence", {
                ...raw,
                // empty lists will be omitted during parsing
                prefix,
                defaultables,
                optionals,
                postfix,
                minVariadicLength
            }, {
                prereduced: true
            });
        }
    },
    defaults: {
        description: (node)=>{
            if (node.isVariadicOnly) return `${node.variadic.nestableExpression}[]`;
            const innerDescription = node.tuple.map((element)=>element.kind === "defaultables" ? `${element.node.nestableExpression} = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(element.default)}` : element.kind === "optionals" ? `${element.node.nestableExpression}?` : element.kind === "variadic" ? `...${element.node.nestableExpression}[]` : element.node.expression).join(", ");
            return `[${innerDescription}]`;
        }
    },
    intersections: {
        sequence: (l, r, ctx)=>{
            const rootState = _intersectSequences({
                l: l.tuple,
                r: r.tuple,
                disjoint: new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"](),
                result: [],
                fixedVariants: [],
                ctx
            });
            const viableBranches = rootState.disjoint.length === 0 ? [
                rootState,
                ...rootState.fixedVariants
            ] : rootState.fixedVariants;
            return viableBranches.length === 0 ? rootState.disjoint : viableBranches.length === 1 ? ctx.$.node("sequence", sequenceTupleToInner(viableBranches[0].result)) : ctx.$.node("union", viableBranches.map((state)=>({
                    proto: Array,
                    sequence: sequenceTupleToInner(state.result)
                })));
        }
    }
});
class SequenceNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseConstraint"] {
    impliedBasis = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.Array.internal;
    tuple = sequenceInnerToTuple(this.inner);
    prefixLength = this.prefix?.length ?? 0;
    defaultablesLength = this.defaultables?.length ?? 0;
    optionalsLength = this.optionals?.length ?? 0;
    postfixLength = this.postfix?.length ?? 0;
    defaultablesAndOptionals = [];
    prevariadic = this.tuple.filter((el)=>{
        if (el.kind === "defaultables" || el.kind === "optionals") {
            // populate defaultablesAndOptionals while filtering prevariadic
            this.defaultablesAndOptionals.push(el.node);
            return true;
        }
        return el.kind === "prefix";
    });
    variadicOrPostfix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["conflatenate"])(this.variadic && [
        this.variadic
    ], this.postfix);
    // have to wait until prevariadic and variadicOrPostfix are set to calculate
    flatRefs = this.addFlatRefs();
    addFlatRefs() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendUniqueFlatRefs"])(this.flatRefs, this.prevariadic.flatMap((element, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(element.node.flatRefs.map((ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatRef"])([
                    `${i}`,
                    ...ref.path
                ], ref.node)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatRef"])([
                `${i}`
            ], element.node))));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendUniqueFlatRefs"])(this.flatRefs, this.variadicOrPostfix.flatMap((element)=>// a postfix index can't be directly represented as a type
            // key, so we just use the same matcher for variadic
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(element.flatRefs.map((ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatRef"])([
                    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.nonNegativeIntegerString.internal,
                    ...ref.path
                ], ref.node)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatRef"])([
                __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.nonNegativeIntegerString.internal
            ], element))));
        return this.flatRefs;
    }
    isVariadicOnly = this.prevariadic.length + this.postfixLength === 0;
    minVariadicLength = this.inner.minVariadicLength ?? 0;
    minLength = this.prefixLength + this.minVariadicLength + this.postfixLength;
    minLengthNode = this.minLength === 0 ? null : this.$.node("minLength", this.minLength);
    maxLength = this.variadic ? null : this.tuple.length;
    maxLengthNode = this.maxLength === null ? null : this.$.node("maxLength", this.maxLength);
    impliedSiblings = this.minLengthNode ? this.maxLengthNode ? [
        this.minLengthNode,
        this.maxLengthNode
    ] : [
        this.minLengthNode
    ] : this.maxLengthNode ? [
        this.maxLengthNode
    ] : [];
    defaultValueMorphs = getDefaultableMorphs(this);
    defaultValueMorphsReference = this.defaultValueMorphs.length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registeredReference"])(this.defaultValueMorphs) : undefined;
    optionalize() {
        const { prefix, defaultables, ...inner } = this.inner;
        // without a prefix, every element is already optional. bailing here
        // preserves defaultables, which would otherwise have to be flattened
        // into optionals to maintain their position relative to the prefix.
        if (!prefix) return this;
        return this.$.node("sequence", {
            ...inner,
            optionals: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["conflatenate"])(prefix, this.defaultablesAndOptionals)
        });
    }
    require() {
        const { defaultables, optionals, ...inner } = this.inner;
        return this.$.node("sequence", {
            ...inner,
            prefix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["conflatenate"])(this.prefix, this.defaultablesAndOptionals)
        });
    }
    elementAtIndex(data, index) {
        if (index < this.prevariadic.length) return this.tuple[index];
        const firstPostfixIndex = data.length - this.postfixLength;
        if (index >= firstPostfixIndex) return {
            kind: "postfix",
            node: this.postfix[index - firstPostfixIndex]
        };
        return {
            kind: "variadic",
            node: this.variadic ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected attempt to access index ${index} on ${this}`)
        };
    }
    // minLength/maxLength should be checked by Intersection before either traversal
    traverseAllows = (data, ctx)=>{
        for(let i = 0; i < data.length; i++){
            if (!this.elementAtIndex(data, i).node.traverseAllows(data[i], ctx)) return false;
        }
        return true;
    };
    traverseApply = (data, ctx)=>{
        const errorCount = ctx.currentErrorCount;
        let i = 0;
        for(; i < data.length; i++){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseKey"])(i, ()=>this.elementAtIndex(data, i).node.traverseApply(data[i], ctx), ctx);
            // bail out of subsequent elements in fail-fast mode (e.g. inside a
            // union branch) so we don't traverse an element whose basis has
            // already failed - see https://github.com/arktypeio/arktype/issues/1458
            if (ctx.failFast && ctx.currentErrorCount > errorCount) return;
        }
    };
    get element() {
        return this.cacheGetter("element", this.$.node("union", this.children));
    }
    // minLength/maxLength compilation should be handled by Intersection
    compile(js) {
        // like Structure, bail out of subsequent elements in fail-fast mode
        // (e.g. inside a union branch) so we don't traverse an element whose
        // basis has already failed - see
        // https://github.com/arktypeio/arktype/issues/1458
        if (js.traversalKind === "Apply") js.initializeErrorCount();
        if (this.prefix) {
            for (const [i, node] of this.prefix.entries()){
                js.traverseKey(`${i}`, `data[${i}]`, node);
                if (js.traversalKind === "Apply") js.returnIfFailFast();
            }
        }
        for (const [i, node] of this.defaultablesAndOptionals.entries()){
            const dataIndex = `${i + this.prefixLength}`;
            js.if(`${dataIndex} >= data.length`, ()=>js.traversalKind === "Allows" ? js.return(true) : js.return());
            js.traverseKey(dataIndex, `data[${dataIndex}]`, node);
            if (js.traversalKind === "Apply") js.returnIfFailFast();
        }
        if (this.variadic) {
            if (this.postfix) {
                js.const("firstPostfixIndex", `data.length${this.postfix ? `- ${this.postfix.length}` : ""}`);
            }
            js.for(`i < ${this.postfix ? "firstPostfixIndex" : "data.length"}`, ()=>{
                js.traverseKey("i", "data[i]", this.variadic);
                return js.traversalKind === "Apply" ? js.returnIfFailFast() : js;
            }, this.prevariadic.length);
            if (this.postfix) {
                for (const [i, node] of this.postfix.entries()){
                    const keyExpression = `firstPostfixIndex + ${i}`;
                    js.traverseKey(keyExpression, `data[${keyExpression}]`, node);
                    if (js.traversalKind === "Apply") js.returnIfFailFast();
                }
            }
        }
        if (js.traversalKind === "Allows") js.return(true);
    }
    _transform(mapper, ctx) {
        ctx.path.push(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.nonNegativeIntegerString.internal);
        const result = super._transform(mapper, ctx);
        ctx.path.pop();
        return result;
    }
    // this depends on tuple so needs to come after it
    expression = this.description;
    reduceJsonSchema(schema, ctx) {
        const isDraft07 = ctx.target === "draft-07";
        if (this.prevariadic.length) {
            const prefixSchemas = this.prevariadic.map((el)=>{
                const valueSchema = el.node.toJsonSchemaRecurse(ctx);
                if (el.kind === "defaultables") {
                    const value = typeof el.default === "function" ? el.default() : el.default;
                    const jsonDefault = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.jsonData.allows(value) ? value : ctx.fallback.defaultValue({
                        code: "defaultValue",
                        base: valueSchema,
                        value
                    });
                    if (jsonDefault !== undefined) valueSchema.default = jsonDefault;
                }
                return valueSchema;
            });
            // draft-07 uses items as array, draft-2020-12 uses prefixItems
            if (isDraft07) schema.items = prefixSchemas;
            else schema.prefixItems = prefixSchemas;
        }
        // by default JSON schema prefixElements are optional
        // add minLength here if there are any required prefix elements
        if (this.minLength) schema.minItems = this.minLength;
        if (this.variadic) {
            const variadicItemSchema = this.variadic.toJsonSchemaRecurse(ctx);
            // draft-07 uses additionalItems when items is an array (tuple),
            // draft-2020-12 uses items
            if (isDraft07 && this.prevariadic.length) schema.additionalItems = variadicItemSchema;
            else schema.items = variadicItemSchema;
            // maxLength constraint will be enforced by items: false
            // for non-variadic arrays
            if (this.maxLength) schema.maxItems = this.maxLength;
            // postfix can only be present if variadic is present so nesting this is fine
            if (this.postfix) {
                const elements = this.postfix.map((el)=>el.toJsonSchemaRecurse(ctx));
                schema = ctx.fallback.arrayPostfix({
                    code: "arrayPostfix",
                    base: schema,
                    elements
                });
            }
        } else {
            // For fixed-length tuples without variadic elements
            // draft-07 uses additionalItems: false, draft-2020-12 uses items: false
            if (isDraft07) schema.additionalItems = false;
            else schema.items = false;
            // delete maxItems constraint that will have been added by the
            // base intersection node to enforce fixed length
            delete schema.maxItems;
        }
        return schema;
    }
}
const defaultableMorphsCache = {};
const getDefaultableMorphs = (node)=>{
    if (!node.defaultables) return [];
    const morphs = [];
    let cacheKey = "[";
    const lastDefaultableIndex = node.prefixLength + node.defaultablesLength - 1;
    for(let i = node.prefixLength; i <= lastDefaultableIndex; i++){
        const [elementNode, defaultValue] = node.defaultables[i - node.prefixLength];
        morphs.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeDefaultValueMorph"])(i, elementNode, defaultValue));
        cacheKey += `${i}: ${elementNode.id} = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultValueSerializer"])(defaultValue)}, `;
    }
    cacheKey += "]";
    return defaultableMorphsCache[cacheKey] ??= morphs;
};
const Sequence = {
    implementation,
    Node: SequenceNode
};
const sequenceInnerToTuple = (inner)=>{
    const tuple = [];
    if (inner.prefix) for (const node of inner.prefix)tuple.push({
        kind: "prefix",
        node
    });
    if (inner.defaultables) {
        for (const [node, defaultValue] of inner.defaultables)tuple.push({
            kind: "defaultables",
            node,
            default: defaultValue
        });
    }
    if (inner.optionals) for (const node of inner.optionals)tuple.push({
        kind: "optionals",
        node
    });
    if (inner.variadic) tuple.push({
        kind: "variadic",
        node: inner.variadic
    });
    if (inner.postfix) for (const node of inner.postfix)tuple.push({
        kind: "postfix",
        node
    });
    return tuple;
};
const sequenceTupleToInner = (tuple)=>tuple.reduce((result, element)=>{
        if (element.kind === "variadic") result.variadic = element.node;
        else if (element.kind === "defaultables") {
            result.defaultables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(result.defaultables, [
                [
                    element.node,
                    element.default
                ]
            ]);
        } else result[element.kind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(result[element.kind], element.node);
        return result;
    }, {});
const postfixAfterOptionalOrDefaultableMessage = "A postfix required element cannot follow an optional or defaultable element";
const postfixWithoutVariadicMessage = "A postfix element requires a variadic element";
const _intersectSequences = (s)=>{
    const [lHead, ...lTail] = s.l;
    const [rHead, ...rTail] = s.r;
    if (!lHead || !rHead) return s;
    const lHasPostfix = lTail[lTail.length - 1]?.kind === "postfix";
    const rHasPostfix = rTail[rTail.length - 1]?.kind === "postfix";
    const kind = lHead.kind === "prefix" || rHead.kind === "prefix" ? "prefix" : lHead.kind === "postfix" || rHead.kind === "postfix" ? "postfix" : lHead.kind === "variadic" && rHead.kind === "variadic" ? "variadic" : lHasPostfix || rHasPostfix ? "prefix" : lHead.kind === "defaultables" || rHead.kind === "defaultables" ? "defaultables" : "optionals";
    if (lHead.kind === "prefix" && rHead.kind === "variadic" && rHasPostfix) {
        const postfixBranchResult = _intersectSequences({
            ...s,
            fixedVariants: [],
            r: rTail.map((element)=>({
                    ...element,
                    kind: "prefix"
                }))
        });
        if (postfixBranchResult.disjoint.length === 0) s.fixedVariants.push(postfixBranchResult);
    } else if (rHead.kind === "prefix" && lHead.kind === "variadic" && lHasPostfix) {
        const postfixBranchResult = _intersectSequences({
            ...s,
            fixedVariants: [],
            l: lTail.map((element)=>({
                    ...element,
                    kind: "prefix"
                }))
        });
        if (postfixBranchResult.disjoint.length === 0) s.fixedVariants.push(postfixBranchResult);
    }
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectOrPipeNodes"])(lHead.node, rHead.node, s.ctx);
    if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) {
        if (kind === "prefix" || kind === "postfix") {
            s.disjoint.push(...result.withPrefixKey(// ideally we could handle disjoint paths more precisely here,
            // but not trivial to serialize postfix elements as keys
            kind === "prefix" ? s.result.length : `-${lTail.length + 1}`, // both operands must be required for the disjoint to be considered required
            elementIsRequired(lHead) && elementIsRequired(rHead) ? "required" : "optional"));
            s.result = [
                ...s.result,
                {
                    kind,
                    node: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.never.internal
                }
            ];
        } else if (kind === "optionals" || kind === "defaultables") {
            // if the element result is optional and unsatisfiable, the
            // intersection can still be satisfied as long as the tuple
            // ends before the disjoint element would occur
            return s;
        } else {
            // if the element is variadic and unsatisfiable, the intersection
            // can be satisfied with a fixed length variant including zero
            // variadic elements
            return _intersectSequences({
                ...s,
                fixedVariants: [],
                // if there were any optional elements, there will be no postfix elements
                // so this mapping will never occur (which would be illegal otherwise)
                l: lTail.map((element)=>({
                        ...element,
                        kind: "prefix"
                    })),
                r: lTail.map((element)=>({
                        ...element,
                        kind: "prefix"
                    }))
            });
        }
    } else if (kind === "defaultables") {
        if (lHead.kind === "defaultables" && rHead.kind === "defaultables" && lHead.default !== rHead.default) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$prop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeDefaultIntersectionMessage"])(lHead.default, rHead.default));
        }
        s.result = [
            ...s.result,
            {
                kind,
                node: result,
                default: lHead.kind === "defaultables" ? lHead.default : rHead.kind === "defaultables" ? rHead.default : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected defaultable intersection from ${lHead.kind} and ${rHead.kind} elements.`)
            }
        ];
    } else s.result = [
        ...s.result,
        {
            kind,
            node: result
        }
    ];
    const lRemaining = s.l.length;
    const rRemaining = s.r.length;
    if (lHead.kind !== "variadic" || lRemaining >= rRemaining && (rHead.kind === "variadic" || rRemaining === 1)) s.l = lTail;
    if (rHead.kind !== "variadic" || rRemaining >= lRemaining && (lHead.kind === "variadic" || lRemaining === 1)) s.r = rTail;
    return _intersectSequences(s);
};
const elementIsRequired = (el)=>el.kind === "prefix" || el.kind === "postfix";
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/shared.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrayIndexMatcher",
    ()=>arrayIndexMatcher,
    "arrayIndexMatcherReference",
    ()=>arrayIndexMatcherReference,
    "arrayIndexSource",
    ()=>arrayIndexSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
;
const arrayIndexSource = `^(?:0|[1-9]\\d*)$`;
const arrayIndexMatcher = new RegExp(arrayIndexSource);
const arrayIndexMatcherReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registeredReference"])(arrayIndexMatcher);
}),
"[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/structure.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Structure",
    ()=>Structure,
    "StructureNode",
    ()=>StructureNode,
    "normalizeIndex",
    ()=>normalizeIndex,
    "typeKeyToString",
    ()=>typeKeyToString,
    "writeDuplicateKeyMessage",
    ()=>writeDuplicateKeyMessage,
    "writeInvalidKeysMessage",
    ()=>writeInvalidKeysMessage,
    "writeNumberIndexMessage",
    ()=>writeNumberIndexMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/constraint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/intrinsic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/root.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/compile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/implement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/intersections.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/toJsonSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/traversal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/optional.js [app-route] (ecmascript)");
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
const createStructuralWriter = (childStringProp)=>(node)=>{
        if (node.props.length || node.index) {
            const parts = node.index?.map((index)=>index[childStringProp]) ?? [];
            for (const prop of node.props)parts.push(prop[childStringProp]);
            if (node.undeclared) parts.push(`+ (undeclared): ${node.undeclared}`);
            const objectLiteralDescription = `{ ${parts.join(", ")} }`;
            return node.sequence ? `${objectLiteralDescription} & ${node.sequence.description}` : objectLiteralDescription;
        }
        return node.sequence?.description ?? "{}";
    };
const structuralDescription = createStructuralWriter("description");
const structuralExpression = createStructuralWriter("expression");
const intersectPropsAndIndex = (l, r, $)=>{
    const kind = l.required ? "required" : "optional";
    if (!r.signature.allows(l.key)) return null;
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectNodesRoot"])(l.value, r.value, $);
    if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) {
        return kind === "optional" ? $.node("optional", {
            key: l.key,
            value: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.never.internal
        }) : value.withPrefixKey(l.key, l.kind);
    }
    return null;
};
const implementation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$implement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["implementNode"])({
    kind: "structure",
    hasAssociatedError: false,
    normalize: (schema)=>schema,
    applyConfig: (schema, config)=>{
        if (!schema.undeclared && config.onUndeclaredKey !== "ignore") {
            return {
                ...schema,
                undeclared: config.onUndeclaredKey
            };
        }
        return schema;
    },
    keys: {
        required: {
            child: true,
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKeyParser"])("required"),
            reduceIo: (ioKind, inner, nodes)=>{
                // ensure we don't overwrite nodes added by optional
                inner.required = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(inner.required, nodes.map((node)=>ioKind === "in" ? node.rawIn : node.rawOut));
                return;
            }
        },
        optional: {
            child: true,
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKeyParser"])("optional"),
            reduceIo: (ioKind, inner, nodes)=>{
                if (ioKind === "in") {
                    inner.optional = nodes.map((node)=>node.rawIn);
                    return;
                }
                for (const node of nodes){
                    inner[node.outProp.kind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(inner[node.outProp.kind], node.outProp.rawOut);
                }
            }
        },
        index: {
            child: true,
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKeyParser"])("index")
        },
        sequence: {
            child: true,
            parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constraintKeyParser"])("sequence")
        },
        undeclared: {
            parse: (behavior)=>behavior === "ignore" ? undefined : behavior,
            reduceIo: (ioKind, inner, value)=>{
                if (value === "reject") {
                    inner.undeclared = "reject";
                    return;
                }
                // if base is "delete", undeclared keys are "ignore" (i.e. unconstrained)
                // on input and "reject" on output
                if (ioKind === "in") delete inner.undeclared;
                else inner.undeclared = "reject";
            }
        }
    },
    defaults: {
        description: structuralDescription
    },
    intersections: {
        structure: (l, r, ctx)=>{
            const lInner = {
                ...l.inner
            };
            const rInner = {
                ...r.inner
            };
            const disjointResult = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]();
            // props an index signature narrows to once the other side's keys
            // are known. they can't be added to the side they came from, where
            // a prop with the same key would never be merged with them
            const derived = [];
            if (l.undeclared) {
                const lKey = l.keyof();
                for (const k of r.requiredKeys){
                    if (!lKey.allows(k)) {
                        disjointResult.add("presence", __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.never.internal, r.propsByKey[k].value, {
                            path: [
                                k
                            ]
                        });
                    }
                }
                if (rInner.optional) rInner.optional = rInner.optional.filter((n)=>lKey.allows(n.key));
                if (rInner.index) {
                    rInner.index = rInner.index.flatMap((n)=>{
                        if (n.signature.extends(lKey)) return n;
                        const indexOverlap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectNodesRoot"])(lKey, n.signature, ctx.$);
                        if (indexOverlap instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return [];
                        const normalized = normalizeIndex(indexOverlap, n.value, ctx.$);
                        derived.push(...normalized.required ?? []);
                        derived.push(...normalized.optional ?? []);
                        return normalized.index ?? [];
                    });
                }
            }
            if (r.undeclared) {
                const rKey = r.keyof();
                for (const k of l.requiredKeys){
                    if (!rKey.allows(k)) {
                        disjointResult.add("presence", l.propsByKey[k].value, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.never.internal, {
                            path: [
                                k
                            ]
                        });
                    }
                }
                if (lInner.optional) lInner.optional = lInner.optional.filter((n)=>rKey.allows(n.key));
                if (lInner.index) {
                    lInner.index = lInner.index.flatMap((n)=>{
                        if (n.signature.extends(rKey)) return n;
                        const indexOverlap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectNodesRoot"])(rKey, n.signature, ctx.$);
                        if (indexOverlap instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return [];
                        const normalized = normalizeIndex(indexOverlap, n.value, ctx.$);
                        derived.push(...normalized.required ?? []);
                        derived.push(...normalized.optional ?? []);
                        return normalized.index ?? [];
                    });
                }
            }
            const baseInner = {};
            if (l.undeclared || r.undeclared) {
                baseInner.undeclared = l.undeclared === "reject" || r.undeclared === "reject" ? "reject" : "delete";
            }
            const childIntersectionResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectConstraints"])({
                kind: "structure",
                baseInner,
                l: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flattenConstraints"])(lInner),
                r: [
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flattenConstraints"])(rInner),
                    ...derived
                ],
                roots: [],
                ctx
            });
            if (childIntersectionResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) disjointResult.push(...childIntersectionResult);
            if (disjointResult.length) return disjointResult;
            return childIntersectionResult;
        }
    },
    reduce: (inner, $)=>{
        if (!inner.required && !inner.optional) return;
        const seen = Object.create(null);
        let updated = false;
        const newOptionalProps = inner.optional ? [
            ...inner.optional
        ] : [];
        // check required keys for duplicates and handle index intersections
        if (inner.required) {
            for(let i = 0; i < inner.required.length; i++){
                const requiredProp = inner.required[i];
                if (requiredProp.key in seen) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeDuplicateKeyMessage(requiredProp.key));
                seen[requiredProp.key] = true;
                if (inner.index) {
                    for (const index of inner.index){
                        const intersection = intersectPropsAndIndex(requiredProp, index, $);
                        if (intersection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return intersection;
                    }
                }
            }
        }
        // check optional keys for duplicates and handle index intersections
        if (inner.optional) {
            for(let i = 0; i < inner.optional.length; i++){
                const optionalProp = inner.optional[i];
                if (optionalProp.key in seen) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeDuplicateKeyMessage(optionalProp.key));
                seen[optionalProp.key] = true;
                if (inner.index) {
                    for (const index of inner.index){
                        const intersection = intersectPropsAndIndex(optionalProp, index, $);
                        if (intersection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return intersection;
                        if (intersection !== null) {
                            newOptionalProps[i] = intersection;
                            updated = true;
                        }
                    }
                }
            }
        }
        if (updated) {
            return $.node("structure", {
                ...inner,
                optional: newOptionalProps
            }, {
                prereduced: true
            });
        }
    }
});
class StructureNode extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$constraint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseConstraint"] {
    impliedBasis = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.object.internal;
    impliedSiblings = this.children.flatMap((n)=>n.impliedSiblings ?? []);
    props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["conflatenate"])(this.required, this.optional);
    // a null prototype, so a key like "toString" isn't declared, and
    // fromEntries, so a declared "__proto__" is an own key
    propsByKey = Object.setPrototypeOf(Object.fromEntries(this.props.map((node)=>[
            node.key,
            node
        ])), null);
    propsByKeyReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registeredReference"])(this.propsByKey);
    expression = structuralExpression(this);
    requiredKeys = this.required?.map((node)=>node.key) ?? [];
    optionalKeys = this.optional?.map((node)=>node.key) ?? [];
    literalKeys = [
        ...this.requiredKeys,
        ...this.optionalKeys
    ];
    _keyof;
    keyof() {
        if (this._keyof) return this._keyof;
        let branches = this.$.units(this.literalKeys).branches;
        if (this.index) {
            for (const { signature } of this.index)branches = branches.concat(signature.branches);
        }
        return this._keyof = this.$.node("union", branches);
    }
    map(flatMapProp) {
        return this.$.node("structure", this.props.flatMap(flatMapProp).reduce((structureInner, mapped)=>{
            const originalProp = this.propsByKey[mapped.key];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNode"])(mapped)) {
                if (mapped.kind !== "required" && mapped.kind !== "optional") {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(`Map result must have kind "required" or "optional" (was ${mapped.kind})`);
                }
                structureInner[mapped.kind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(structureInner[mapped.kind], mapped);
                return structureInner;
            }
            const mappedKind = mapped.kind ?? originalProp?.kind ?? "required";
            // extract the inner keys from the map result in case a node was spread,
            // which would otherwise lead to invalid keys
            const mappedPropInner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(mapped, (k, v)=>k in __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Optional"].implementation.keys ? [
                    k,
                    v
                ] : []);
            structureInner[mappedKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(structureInner[mappedKind], this.$.node(mappedKind, mappedPropInner));
            return structureInner;
        }, {}));
    }
    assertHasKeys(keys) {
        const invalidKeys = keys.filter((k)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["typeOrTermExtends"])(k, this.keyof()));
        if (invalidKeys.length) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeInvalidKeysMessage(this.expression, invalidKeys));
        }
    }
    get(indexer, ...path) {
        let value;
        let required = false;
        const key = indexerToKey(indexer);
        if ((typeof key === "string" || typeof key === "symbol") && this.propsByKey[key]) {
            value = this.propsByKey[key].value;
            required = this.propsByKey[key].required;
        }
        if (this.index) {
            for (const n of this.index){
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["typeOrTermExtends"])(key, n.signature)) value = value?.and(n.value) ?? n.value;
            }
        }
        if (this.sequence && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["typeOrTermExtends"])(key, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.nonNegativeIntegerString)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(key, "root")) {
                if (this.sequence.variadic) // if there is a variadic element and we're accessing an index, return a union
                // of all possible elements. If there is no variadic expression, we're in a tuple
                // so this access wouldn't be safe based on the array indices
                value = value?.and(this.sequence.element) ?? this.sequence.element;
            } else {
                const index = Number.parseInt(key);
                if (index < this.sequence.prevariadic.length) {
                    const fixedElement = this.sequence.prevariadic[index].node;
                    value = value?.and(fixedElement) ?? fixedElement;
                    required ||= index < this.sequence.prefixLength;
                } else if (this.sequence.variadic) {
                    // ideally we could return something more specific for postfix
                    // but there is no way to represent it using an index alone
                    const nonFixedElement = this.$.node("union", this.sequence.variadicOrPostfix);
                    value = value?.and(nonFixedElement) ?? nonFixedElement;
                }
            }
        }
        if (!value) {
            if (this.sequence?.variadic && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(key, "root") && key.extends(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.number)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeNumberIndexMessage(key.expression, this.sequence.expression));
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeInvalidKeysMessage(this.expression, [
                key
            ]));
        }
        const result = value.get(...path);
        return required ? result : result.or(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.undefined);
    }
    pick(...keys) {
        this.assertHasKeys(keys);
        return this.$.node("structure", this.filterKeys("pick", keys));
    }
    omit(...keys) {
        this.assertHasKeys(keys);
        return this.$.node("structure", this.filterKeys("omit", keys));
    }
    optionalize() {
        const { required, ...inner } = this.inner;
        return this.$.node("structure", {
            ...inner,
            ...inner.sequence ? {
                sequence: inner.sequence.optionalize()
            } : {},
            optional: this.props.map((prop)=>prop.hasKind("required") ? this.$.node("optional", prop.inner) : prop)
        });
    }
    require() {
        const { optional, ...inner } = this.inner;
        return this.$.node("structure", {
            ...inner,
            ...inner.sequence ? {
                sequence: inner.sequence.require()
            } : {},
            required: this.props.map((prop)=>prop.hasKind("optional") ? {
                    key: prop.key,
                    value: prop.value
                } : prop)
        });
    }
    merge(r) {
        const inner = this.filterKeys("omit", [
            r.keyof()
        ]);
        if (r.required) inner.required = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(inner.required, r.required);
        if (r.optional) inner.optional = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(inner.optional, r.optional);
        if (r.index) inner.index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(inner.index, r.index);
        if (r.sequence) inner.sequence = r.sequence;
        if (r.undeclared) inner.undeclared = r.undeclared;
        else delete inner.undeclared;
        return this.$.node("structure", inner);
    }
    filterKeys(operation, keys) {
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeRootAndArrayPropertiesMutable"])(this.inner);
        const shouldKeep = (key)=>{
            const matchesKey = keys.some((k)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["typeOrTermExtends"])(key, k));
            return operation === "pick" ? matchesKey : !matchesKey;
        };
        if (result.required) result.required = result.required.filter((prop)=>shouldKeep(prop.key));
        if (result.optional) result.optional = result.optional.filter((prop)=>shouldKeep(prop.key));
        if (result.index) result.index = result.index.filter((index)=>shouldKeep(index.signature));
        return result;
    }
    traverseAllows = (data, ctx)=>this._traverse("Allows", data, ctx);
    traverseApply = (data, ctx)=>this._traverse("Apply", data, ctx);
    _traverse = (traversalKind, data, ctx)=>{
        const errorCount = ctx?.currentErrorCount ?? 0;
        for(let i = 0; i < this.props.length; i++){
            if (traversalKind === "Allows") {
                if (!this.props[i].traverseAllows(data, ctx)) return false;
            } else {
                this.props[i].traverseApply(data, ctx);
                if (ctx.failFast && ctx.currentErrorCount > errorCount) return false;
            }
        }
        if (this.sequence) {
            if (traversalKind === "Allows") {
                if (!this.sequence.traverseAllows(data, ctx)) return false;
            } else {
                this.sequence.traverseApply(data, ctx);
                if (ctx.failFast && ctx.currentErrorCount > errorCount) return false;
            }
        }
        if (this.index || this.undeclared === "reject") {
            const keys = Object.keys(data);
            keys.push(...Object.getOwnPropertySymbols(data));
            for(let i = 0; i < keys.length; i++){
                const k = keys[i];
                if (this.index) {
                    for (const node of this.index){
                        if (node.signature.traverseAllows(k, ctx)) {
                            if (traversalKind === "Allows") {
                                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseKey"])(k, ()=>node.value.traverseAllows(data[k], ctx), ctx);
                                if (!result) return false;
                            } else {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$traversal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseKey"])(k, ()=>node.value.traverseApply(data[k], ctx), ctx);
                                if (ctx.failFast && ctx.currentErrorCount > errorCount) return false;
                            }
                        }
                    }
                }
                if (this.undeclared === "reject" && !this.declaresKey(k)) {
                    if (traversalKind === "Allows") return false;
                    // this should have its own error code:
                    // https://github.com/arktypeio/arktype/issues/1403
                    ctx.errorFromNodeContext({
                        code: "predicate",
                        expected: "removed",
                        actual: "",
                        relativePath: [
                            k
                        ],
                        meta: this.meta
                    });
                    if (ctx.failFast) return false;
                }
            }
        }
        // added additional ctx check here to address
        // https://github.com/arktypeio/arktype/issues/1346
        if (this.structuralMorph && ctx && !ctx.hasError()) ctx.queueMorphs([
            this.structuralMorph
        ]);
        return true;
    };
    get defaultable() {
        return this.cacheGetter("defaultable", this.optional?.filter((o)=>o.hasDefault()) ?? []);
    }
    declaresKey = (k)=>k in this.propsByKey || this.index?.some((n)=>n.signature.allows(k)) || this.sequence !== undefined && __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.nonNegativeIntegerString.allows(k);
    _compileDeclaresKey(js) {
        const parts = [];
        if (this.props.length) parts.push(`k in ${this.propsByKeyReference}`);
        if (this.index) {
            for (const index of this.index)parts.push(js.invoke(index.signature, {
                kind: "Allows",
                arg: "k"
            }));
        }
        if (this.sequence) parts.push("$ark.intrinsic.nonNegativeIntegerString.allows(k)");
        // if parts is empty, this is a structure like { "+": "reject" }
        // that declares no keys, so return false
        return parts.join(" || ") || "false";
    }
    get structuralMorph() {
        return this.cacheGetter("structuralMorph", getPossibleMorph(this));
    }
    structuralMorphRef = this.structuralMorph && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registeredReference"])(this.structuralMorph);
    compile(js) {
        if (js.traversalKind === "Apply") js.initializeErrorCount();
        for (const prop of this.props){
            js.check(prop);
            if (js.traversalKind === "Apply") js.returnIfFailFast();
        }
        if (this.sequence) {
            js.check(this.sequence);
            if (js.traversalKind === "Apply") js.returnIfFailFast();
        }
        if (this.index || this.undeclared === "reject") {
            js.const("keys", "Object.keys(data)");
            js.line("keys.push(...Object.getOwnPropertySymbols(data))");
            js.for("i < keys.length", ()=>this.compileExhaustiveEntry(js));
        }
        if (js.traversalKind === "Allows") return js.return(true);
        // always queue deleteUndeclared on valid traversal for "delete"
        if (this.structuralMorphRef) {
            // added additional ctx check here to address
            // https://github.com/arktypeio/arktype/issues/1346
            js.if("ctx && !ctx.hasError()", ()=>{
                js.line(`ctx.queueMorphs([`);
                precompileMorphs(js, this);
                return js.line("])");
            });
        }
    }
    compileExhaustiveEntry(js) {
        js.const("k", "keys[i]");
        if (this.index) {
            for (const node of this.index){
                js.if(`${js.invoke(node.signature, {
                    arg: "k",
                    kind: "Allows"
                })}`, ()=>js.traverseKey("k", "data[k]", node.value));
            }
        }
        if (this.undeclared === "reject") {
            js.if(`!(${this._compileDeclaresKey(js)})`, ()=>{
                if (js.traversalKind === "Allows") return js.return(false);
                return js.line(`ctx.errorFromNodeContext({ code: "predicate", expected: "removed", actual: "", relativePath: [k], meta: ${this.compiledMeta} })`).if("ctx.failFast", ()=>js.return());
            });
        }
        return js;
    }
    reduceJsonSchema(schema, ctx) {
        switch(schema.type){
            case "object":
                return this.reduceObjectJsonSchema(schema, ctx);
            case "array":
                const arraySchema = this.sequence?.reduceJsonSchema(schema, ctx) ?? schema;
                if (this.props.length || this.index) {
                    return ctx.fallback.arrayObject({
                        code: "arrayObject",
                        base: arraySchema,
                        object: this.reduceObjectJsonSchema({
                            type: "object"
                        }, ctx)
                    });
                }
                return arraySchema;
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$toJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ToJsonSchema"].throwInternalOperandError("structure", schema);
        }
    }
    reduceObjectJsonSchema(schema, ctx) {
        if (this.props.length) {
            schema.properties = {};
            for (const prop of this.props){
                const valueSchema = prop.value.toJsonSchemaRecurse(ctx);
                if (typeof prop.key === "symbol") {
                    ctx.fallback.symbolKey({
                        code: "symbolKey",
                        base: schema,
                        key: prop.key,
                        value: valueSchema,
                        optional: prop.optional
                    });
                    continue;
                }
                if (prop.hasDefault()) {
                    const value = typeof prop.default === "function" ? prop.default() : prop.default;
                    const jsonDefault = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.jsonData.allows(value) ? value : ctx.fallback.defaultValue({
                        code: "defaultValue",
                        base: valueSchema,
                        value
                    });
                    if (jsonDefault !== undefined) valueSchema.default = jsonDefault;
                }
                schema.properties[prop.key] = valueSchema;
            }
            if (this.requiredKeys.length && schema.properties) {
                schema.required = this.requiredKeys.filter((k)=>typeof k === "string" && k in schema.properties);
            }
        }
        if (this.index) {
            for (const index of this.index){
                const valueJsonSchema = index.value.toJsonSchemaRecurse(ctx);
                if (index.signature.equals(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.string)) {
                    schema.additionalProperties = valueJsonSchema;
                    continue;
                }
                for (const keyBranch of index.signature.branches){
                    if (!keyBranch.extends(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.string)) {
                        schema = ctx.fallback.symbolKey({
                            code: "symbolKey",
                            base: schema,
                            key: null,
                            value: valueJsonSchema,
                            optional: false
                        });
                        continue;
                    }
                    let keySchema = {
                        type: "string"
                    };
                    if (keyBranch.hasKind("morph")) {
                        keySchema = ctx.fallback.morph({
                            code: "morph",
                            base: keyBranch.rawIn.toJsonSchemaRecurse(ctx),
                            out: keyBranch.rawOut.toJsonSchemaRecurse(ctx)
                        });
                    }
                    if (!keyBranch.hasKind("intersection")) {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected index branch kind ${keyBranch.kind}.`);
                    }
                    const { pattern } = keyBranch.inner;
                    if (pattern) {
                        const keySchemaWithPattern = Object.assign(keySchema, {
                            pattern: pattern[0].rule
                        });
                        for(let i = 1; i < pattern.length; i++){
                            keySchema = ctx.fallback.patternIntersection({
                                code: "patternIntersection",
                                base: keySchemaWithPattern,
                                pattern: pattern[i].rule
                            });
                        }
                        schema.patternProperties ??= {};
                        schema.patternProperties[keySchemaWithPattern.pattern] = valueJsonSchema;
                    }
                }
            }
        }
        if (this.undeclared && !schema.additionalProperties) schema.additionalProperties = false;
        return schema;
    }
}
const defaultableMorphsCache = {};
const constructStructuralMorphCacheKey = (node)=>{
    let cacheKey = "";
    for(let i = 0; i < node.defaultable.length; i++)cacheKey += node.defaultable[i].defaultValueMorphRef;
    if (node.sequence?.defaultValueMorphsReference) cacheKey += node.sequence?.defaultValueMorphsReference;
    if (node.undeclared === "delete") {
        cacheKey += "delete !(";
        if (node.required) for (const n of node.required)cacheKey += n.compiledKey + " | ";
        if (node.optional) for (const n of node.optional)cacheKey += n.compiledKey + " | ";
        if (node.index) for (const index of node.index)cacheKey += index.signature.id + " | ";
        if (node.sequence) {
            if (node.sequence.maxLength === null) cacheKey += __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].nonNegativeIntegerString.id;
            else {
                for(let i = 0; i < node.sequence.tuple.length; i++)cacheKey += i + " | ";
            }
        }
        cacheKey += ")";
    }
    return cacheKey;
};
const getPossibleMorph = (node)=>{
    const cacheKey = constructStructuralMorphCacheKey(node);
    if (!cacheKey) return undefined;
    if (defaultableMorphsCache[cacheKey]) return defaultableMorphsCache[cacheKey];
    const $arkStructuralMorph = (data, ctx)=>{
        for(let i = 0; i < node.defaultable.length; i++){
            if (!(node.defaultable[i].key in data)) node.defaultable[i].defaultValueMorph(data, ctx);
        }
        if (node.sequence?.defaultables) {
            for(let i = data.length - node.sequence.prefixLength; i < node.sequence.defaultables.length; i++)node.sequence.defaultValueMorphs[i](data, ctx);
        }
        if (node.undeclared === "delete") {
            for(const k in data)if (!node.declaresKey(k)) delete data[k];
        }
        return data;
    };
    return defaultableMorphsCache[cacheKey] = $arkStructuralMorph;
};
const precompileMorphs = (js, node)=>{
    const requiresContext = node.defaultable.some((node)=>node.defaultValueMorph.length === 2) || node.sequence?.defaultValueMorphs.some((morph)=>morph.length === 2);
    const args = `(data${requiresContext ? ", ctx" : ""})`;
    return js.block(`${args} => `, (js)=>{
        for(let i = 0; i < node.defaultable.length; i++){
            const { serializedKey, defaultValueMorphRef } = node.defaultable[i];
            js.if(`!(${serializedKey} in data)`, (js)=>js.line(`${defaultValueMorphRef}${args}`));
        }
        if (node.sequence?.defaultables) {
            js.for(`i < ${node.sequence.defaultables.length}`, (js)=>js.line(`${node.sequence.defaultValueMorphsReference}[i]${args}`), `data.length - ${node.sequence.prefixLength}`);
        }
        if (node.undeclared === "delete") {
            js.forIn("data", (js)=>js.if(`!(${node._compileDeclaresKey(js)})`, (js)=>js.line(`delete data[k]`)));
        }
        return js.return("data");
    });
};
const Structure = {
    implementation,
    Node: StructureNode
};
const indexerToKey = (indexable)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(indexable, "root") && indexable.hasKind("unit")) indexable = indexable.unit;
    if (typeof indexable === "number") indexable = `${indexable}`;
    return indexable;
};
const writeNumberIndexMessage = (indexExpression, sequenceExpression)=>`${indexExpression} is not allowed as an array index on ${sequenceExpression}. Use the 'nonNegativeIntegerString' keyword instead.`;
const normalizeIndex = (signature, value, $)=>{
    const [enumerableBranches, nonEnumerableBranches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["spliterate"])(signature.branches, (k)=>k.hasKind("unit"));
    if (!enumerableBranches.length) return {
        index: $.node("index", {
            signature,
            value
        })
    };
    const normalized = {};
    for (const n of enumerableBranches){
        // since required can be reduced to optional if it has a default or
        // optional meta on its value, we have to assign it depending on the
        // compiled kind
        const prop = $.node("required", {
            key: n.unit,
            value
        });
        normalized[prop.kind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(normalized[prop.kind], prop);
    }
    if (nonEnumerableBranches.length) {
        normalized.index = $.node("index", {
            signature: nonEnumerableBranches,
            value
        });
    }
    return normalized;
};
const typeKeyToString = (k)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(k, "root") ? k.expression : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(k);
const writeInvalidKeysMessage = (o, keys)=>`Key${keys.length === 1 ? "" : "s"} ${keys.map(typeKeyToString).join(", ")} ${keys.length === 1 ? "does" : "do"} not exist on ${o}`;
const writeDuplicateKeyMessage = (key)=>`Duplicate key ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$compile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compileSerializedValue"])(key)}`;
}),
];})()

//# sourceMappingURL=1676_%40ark_schema_out_0k26hww69vqlr._.js.map