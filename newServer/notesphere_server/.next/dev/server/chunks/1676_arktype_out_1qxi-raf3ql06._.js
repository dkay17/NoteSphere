(()=>{"use strict";module.exports = [
"[project]/newServer/notesphere_server/node_modules/arktype/out/config.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "configure",
    ()=>configure
]);
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/config.js [app-route] (ecmascript)");
;
const configure = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["configureSchema"];
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/fn.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InternalFnParser",
    ()=>InternalFnParser,
    "InternalTypedFn",
    ()=>InternalTypedFn,
    "badFnReturnTypeMessage",
    ()=>badFnReturnTypeMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/functions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
;
class InternalFnParser extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callable"] {
    constructor($){
        const parse = (...signature)=>{
            const returnOperatorIndex = signature.indexOf(":");
            const lastParamIndex = returnOperatorIndex === -1 ? signature.length - 1 : returnOperatorIndex - 1;
            const paramDefs = signature.slice(0, lastParamIndex + 1);
            const paramTuple = $.parse(paramDefs).assertHasKind("intersection");
            let returnType = $.intrinsic.unknown;
            if (returnOperatorIndex !== -1) {
                if (returnOperatorIndex !== signature.length - 2) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(badFnReturnTypeMessage);
                returnType = $.parse(signature[returnOperatorIndex + 1]);
            }
            return (impl)=>new InternalTypedFn(impl, paramTuple, returnType);
        };
        // `raw` is an alias of `fn` itself with no type-level validation. It must
        // reference `parse` directly rather than `$.fn`, which is still being
        // constructed (and thus `undefined`) at this point.
        const attach = {
            $: $,
            raw: parse
        };
        super(parse, {
            attach
        });
    }
}
class InternalTypedFn extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callable"] {
    raw;
    params;
    returns;
    expression;
    constructor(raw, params, returns){
        const typedName = `typed ${raw.name}`;
        const typed = {
            // assign to a key with the expected name to force it to be created that way
            [typedName]: (...args)=>{
                const validatedArgs = params.assert(args);
                const returned = raw(...validatedArgs);
                return returns.assert(returned);
            }
        }[typedName];
        super(typed);
        this.raw = raw;
        this.params = params;
        this.returns = returns;
        let argsExpression = params.expression;
        if (argsExpression[0] === "[" && argsExpression[argsExpression.length - 1] === "]") argsExpression = argsExpression.slice(1, -1);
        else if (argsExpression.endsWith("[]")) argsExpression = `...${argsExpression}`;
        this.expression = `(${argsExpression}) => ${returns?.expression ?? "unknown"}`;
    }
}
const badFnReturnTypeMessage = `":" must be followed by exactly one return type e.g:
fn("string", ":", "number")(s => s.length)`;
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/generic.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Generic",
    ()=>Generic,
    "emptyGenericParameterMessage",
    ()=>emptyGenericParameterMessage,
    "parseGenericParamName",
    ()=>parseGenericParamName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$generic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/generic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$reduce$2f$dynamic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/reduce/dynamic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$tokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/tokens.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/string.js [app-route] (ecmascript)");
;
;
;
;
;
const Generic = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$generic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericRoot"];
const emptyGenericParameterMessage = "An empty string is not a valid generic parameter name";
const parseGenericParamName = (scanner, result, ctx)=>{
    scanner.shiftUntilNonWhitespace();
    const name = scanner.shiftUntilLookahead(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$tokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["terminatingChars"]);
    if (name === "") {
        // if we've reached the end of the string and have parsed at least one
        // param, return the valid result
        if (scanner.lookahead === "" && result.length) return result;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(emptyGenericParameterMessage);
    }
    scanner.shiftUntilNonWhitespace();
    return _parseOptionalConstraint(scanner, name, result, ctx);
};
const extendsToken = "extends ";
const _parseOptionalConstraint = (scanner, name, result, ctx)=>{
    scanner.shiftUntilNonWhitespace();
    if (scanner.unscanned.startsWith(extendsToken)) scanner.jumpForward(extendsToken.length);
    else {
        // if we don't have a contraining token here, return now so we can
        // assume in the rest of the function body we do have a constraint
        if (scanner.lookahead === ",") scanner.shift();
        result.push(name);
        return parseGenericParamName(scanner, result, ctx);
    }
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUntilFinalizer"])(new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$reduce$2f$dynamic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RuntimeState"](scanner, ctx));
    result.push([
        name,
        s.root
    ]);
    return parseGenericParamName(scanner, result, ctx);
};
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arkregex$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arkregex/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$generic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/generic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/keywords.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$module$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/module.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/scope.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/type.js [app-route] (ecmascript)");
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
"[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/Array.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arkArray",
    ()=>arkArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/scope.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/intrinsic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$hkt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/hkt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/scope.js [app-route] (ecmascript)");
;
;
;
class liftFromHkt extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$hkt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Hkt"] {
}
const liftFrom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genericNode"])("element")((args)=>{
    const nonArrayElement = args.element.exclude(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].Array);
    const lifted = nonArrayElement.array();
    return nonArrayElement.rawOr(lifted).pipe(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["liftArray"]).distribute((branch)=>branch.assertHasKind("morph").declareOut(lifted), __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"]);
}, liftFromHkt);
const arkArray = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].Array,
    readonly: "root",
    index: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].nonNegativeIntegerString,
    liftFrom
}, {
    name: "Array"
});
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/FormData.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arkFormData",
    ()=>arkFormData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/scope.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/scope.js [app-route] (ecmascript)");
;
;
;
const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])([
    "string",
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registry"].FileConstructor
]);
const parsedFormDataValue = value.rawOr(value.array());
const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
    meta: "an object representing parsed form data",
    domain: "object",
    index: {
        signature: "string",
        value: parsedFormDataValue
    }
});
const arkFormData = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: [
        "instanceof",
        FormData
    ],
    value,
    parsed,
    parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
        in: FormData,
        morphs: (data)=>{
            const result = {};
            for (const [k, v] of data){
                if (k in result) {
                    const existing = result[k];
                    if (typeof existing === "string" || existing instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registry"].FileConstructor) result[k] = [
                        existing,
                        v
                    ];
                    else existing.push(v);
                } else result[k] = v;
            }
            return result;
        },
        declaredOut: parsed
    })
}, {
    name: "FormData"
});
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/TypedArray.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypedArray",
    ()=>TypedArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/scope.js [app-route] (ecmascript)");
;
const TypedArray = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    Int8: [
        "instanceof",
        Int8Array
    ],
    Uint8: [
        "instanceof",
        Uint8Array
    ],
    Uint8Clamped: [
        "instanceof",
        Uint8ClampedArray
    ],
    Int16: [
        "instanceof",
        Int16Array
    ],
    Uint16: [
        "instanceof",
        Uint16Array
    ],
    Int32: [
        "instanceof",
        Int32Array
    ],
    Uint32: [
        "instanceof",
        Uint32Array
    ],
    Float32: [
        "instanceof",
        Float32Array
    ],
    Float64: [
        "instanceof",
        Float64Array
    ],
    BigInt64: [
        "instanceof",
        BigInt64Array
    ],
    BigUint64: [
        "instanceof",
        BigUint64Array
    ]
}, {
    name: "TypedArray"
});
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/builtins.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arkBuiltins",
    ()=>arkBuiltins
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/scope.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/intrinsic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$hkt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/hkt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/scope.js [app-route] (ecmascript)");
;
;
;
class MergeHkt extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$hkt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Hkt"] {
    description = 'merge an object\'s properties onto another like `Merge(User, { isAdmin: "true" })`';
}
const Merge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genericNode"])([
    "base",
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].object
], [
    "props",
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].object
])((args)=>args.base.merge(args.props), MergeHkt);
const arkBuiltins = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    Key: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].key,
    Merge
});
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/constructors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arkPrototypes",
    ()=>arkPrototypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/scope.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/Array.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$FormData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/FormData.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$TypedArray$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/TypedArray.js [app-route] (ecmascript)");
;
;
;
;
;
const omittedPrototypes = {
    Boolean: 1,
    Number: 1,
    String: 1
};
const arkPrototypes = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])({
        ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ecmascriptConstructors"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["platformConstructors"]
    }, (k, v)=>k in omittedPrototypes ? [] : [
            k,
            [
                "instanceof",
                v
            ]
        ]),
    Array: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$Array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arkArray"],
    TypedArray: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$TypedArray$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypedArray"],
    FormData: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$FormData$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arkFormData"]
});
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/keywords.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ark",
    ()=>ark,
    "declare",
    ()=>declare,
    "define",
    ()=>define,
    "fn",
    ()=>fn,
    "generic",
    ()=>generic,
    "keywords",
    ()=>keywords,
    "match",
    ()=>match,
    "schema",
    ()=>schema,
    "type",
    ()=>type
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/scope.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$builtins$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/builtins.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$constructors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/constructors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$number$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/number.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/string.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$ts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/ts.js [app-route] (ecmascript)");
;
;
;
;
;
;
const ark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scope"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$ts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arkTsKeywords"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$ts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arkTsGenerics"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$constructors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arkPrototypes"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$builtins$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arkBuiltins"],
    string: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"],
    number: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$number$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["number"],
    object: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$ts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["object"],
    unknown: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$ts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unknown"]
}, {
    prereducedAliases: true,
    name: "ark"
});
const keywords = ark.export();
Object.assign(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$arkTypeRegistry"].ambient, keywords);
__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$arkTypeRegistry"].typeAttachments = {
    string: keywords.string.root,
    number: keywords.number.root,
    bigint: keywords.bigint,
    boolean: keywords.boolean,
    symbol: keywords.symbol,
    undefined: keywords.undefined,
    null: keywords.null,
    object: keywords.object.root,
    unknown: keywords.unknown.root,
    false: keywords.false,
    true: keywords.true,
    never: keywords.never,
    arrayIndex: keywords.Array.index,
    Key: keywords.Key,
    Record: keywords.Record,
    Array: keywords.Array.root,
    Date: keywords.Date
};
const type = Object.assign(ark.type, // assign attachments newly parsed in keywords
// future scopes add these directly from the
// registry when their TypeParsers are instantiated
__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$arkTypeRegistry"].typeAttachments);
const match = ark.match;
const fn = ark.fn;
const generic = ark.generic;
const schema = ark.schema;
const define = ark.define;
const declare = ark.declare;
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/number.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "epoch",
    ()=>epoch,
    "integer",
    ()=>integer,
    "number",
    ()=>number
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/intrinsic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/scope.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/scope.js [app-route] (ecmascript)");
;
;
const epoch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
    domain: {
        domain: "number",
        meta: "a number representing a Unix timestamp"
    },
    divisor: {
        rule: 1,
        meta: `an integer representing a Unix timestamp`
    },
    min: {
        rule: -8640000000000000,
        meta: `a Unix timestamp after -8640000000000000`
    },
    max: {
        rule: 8640000000000000,
        meta: "a Unix timestamp before 8640000000000000"
    },
    meta: "an integer representing a safe Unix timestamp"
});
const integer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
    domain: "number",
    divisor: 1
});
const number = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].number,
    integer,
    epoch,
    safe: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
        domain: {
            domain: "number",
            numberAllowsNaN: false
        },
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER
    }),
    NaN: [
        "===",
        Number.NaN
    ],
    Infinity: [
        "===",
        Number.POSITIVE_INFINITY
    ],
    NegativeInfinity: [
        "===",
        Number.NEGATIVE_INFINITY
    ]
}, {
    name: "number"
});
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/string.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NFC",
    ()=>NFC,
    "NFD",
    ()=>NFD,
    "NFKC",
    ()=>NFKC,
    "NFKD",
    ()=>NFKD,
    "capitalize",
    ()=>capitalize,
    "creditCard",
    ()=>creditCard,
    "ip",
    ()=>ip,
    "isLuhnValid",
    ()=>isLuhnValid,
    "iso8601Matcher",
    ()=>iso8601Matcher,
    "json",
    ()=>json,
    "normalize",
    ()=>normalize,
    "normalizedForms",
    ()=>normalizedForms,
    "regexStringNode",
    ()=>regexStringNode,
    "string",
    ()=>string,
    "stringDate",
    ()=>stringDate,
    "stringInteger",
    ()=>stringInteger,
    "stringNumeric",
    ()=>stringNumeric,
    "tryParseDatePattern",
    ()=>tryParseDatePattern,
    "url",
    ()=>url,
    "uuid",
    ()=>uuid,
    "writeJsonSyntaxErrorProblem",
    ()=>writeJsonSyntaxErrorProblem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/intrinsic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/scope.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$numbers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/numbers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/scope.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$number$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/number.js [app-route] (ecmascript)");
;
;
;
;
const regexStringNode = (regex, description, jsonSchemaFormat)=>{
    const schema = {
        domain: "string",
        pattern: {
            rule: regex.source,
            flags: regex.flags,
            meta: description
        }
    };
    if (jsonSchemaFormat) schema.meta = {
        format: jsonSchemaFormat
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["node"])("intersection", schema);
};
const stringIntegerRoot = regexStringNode(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$numbers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wellFormedIntegerMatcher"], "a well-formed integer string");
const stringInteger = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: stringIntegerRoot,
    parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
        in: stringIntegerRoot,
        morphs: (s, ctx)=>{
            const parsed = Number.parseInt(s);
            return Number.isSafeInteger(parsed) ? parsed : ctx.error("an integer in the range Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER");
        },
        declaredOut: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].integer
    })
}, {
    name: "string.integer"
});
const hex = regexStringNode(/^[\dA-Fa-f]+$/, "hex characters only");
const base58 = regexStringNode(/^[1-9A-HJ-NP-Za-km-z]+$/, "base58-encoded");
const base64 = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: regexStringNode(/^(?:[\d+/A-Za-z]{4})*(?:[\d+/A-Za-z]{2}==|[\d+/A-Za-z]{3}=)?$/, "base64-encoded"),
    url: regexStringNode(/^(?:[\w-]{4})*(?:[\w-]{2}(?:==|%3D%3D)?|[\w-]{3}(?:=|%3D)?)?$/, "base64url-encoded")
}, {
    name: "string.base64"
});
const preformattedCapitalize = regexStringNode(/^[A-Z].*$/, "capitalized");
const capitalize = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
        in: "string",
        morphs: (s)=>s.charAt(0).toUpperCase() + s.slice(1),
        declaredOut: preformattedCapitalize
    }),
    preformatted: preformattedCapitalize
}, {
    name: "string.capitalize"
});
const isLuhnValid = (creditCardInput)=>{
    const sanitized = creditCardInput.replace(/[ -]+/g, "");
    let sum = 0;
    let digit;
    let tmpNum;
    let shouldDouble = false;
    for(let i = sanitized.length - 1; i >= 0; i--){
        digit = sanitized.substring(i, i + 1);
        tmpNum = Number.parseInt(digit, 10);
        if (shouldDouble) {
            tmpNum *= 2;
            sum += tmpNum >= 10 ? tmpNum % 10 + 1 : tmpNum;
        } else sum += tmpNum;
        shouldDouble = !shouldDouble;
    }
    return !!(sum % 10 === 0 ? sanitized : false);
};
// https://github.com/validatorjs/validator.js/blob/master/src/lib/isCreditCard.js
const creditCardMatcher = /^(?:4\d{12}(?:\d{3,6})?|5[1-5]\d{14}|(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}|6(?:011|5\d\d)\d{12,15}|3[47]\d{13}|3(?:0[0-5]|[68]\d)\d{11}|(?:2131|1800|35\d{3})\d{11}|6[27]\d{14}|^(81\d{14,17}))$/;
const creditCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
    domain: "string",
    pattern: {
        meta: "a credit card number",
        rule: creditCardMatcher.source
    },
    predicate: {
        meta: "a credit card number",
        predicate: isLuhnValid
    }
});
const dayDelimiterMatcher = /^[./-]$/;
const iso8601Matcher = /^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))(T((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([,.]\d+(?!:))?)?(\17[0-5]\d([,.]\d+)?)?([Zz]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
const isValidDateInstance = (date)=>!Number.isNaN(+date);
const writeFormattedExpected = (format)=>`a ${format}-formatted date`;
const tryParseDatePattern = (data, opts)=>{
    if (!opts?.format) {
        const result = new Date(data);
        return isValidDateInstance(result) ? result : "a valid date";
    }
    if (opts.format === "iso") {
        return iso8601Matcher.test(data) ? new Date(data) : writeFormattedExpected("iso");
    }
    const dataParts = data.split(dayDelimiterMatcher);
    // will be the first delimiter matched, if there is one
    const delimiter = data[dataParts[0].length];
    const formatParts = delimiter ? opts.format.split(delimiter) : [
        opts.format
    ];
    if (dataParts.length !== formatParts.length) return writeFormattedExpected(opts.format);
    const parsedParts = {};
    for(let i = 0; i < formatParts.length; i++){
        if (dataParts[i].length !== formatParts[i].length && // if format is "m" or "d", data is allowed to be 1 or 2 characters
        !(formatParts[i].length === 1 && dataParts[i].length === 2)) return writeFormattedExpected(opts.format);
        parsedParts[formatParts[i][0]] = dataParts[i];
    }
    const date = new Date(`${parsedParts.m}/${parsedParts.d}/${parsedParts.y}`);
    if (`${date.getDate()}` === parsedParts.d) return date;
    return writeFormattedExpected(opts.format);
};
const isParsableDate = (s)=>!Number.isNaN(new Date(s).valueOf());
const parsableDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
    domain: "string",
    predicate: {
        meta: "a parsable date",
        predicate: isParsableDate
    }
}).assertHasKind("intersection");
const epochRoot = stringInteger.root.internal.narrow((s, ctx)=>{
    // this is safe since it has already
    // been validated as an integer string
    const n = Number.parseInt(s);
    const out = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$number$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["number"].epoch(n);
    if (out instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ArkErrors"]) {
        ctx.errors.merge(out);
        return false;
    }
    return true;
}).configure({
    description: "an integer string representing a safe Unix timestamp"
}, "self").assertHasKind("intersection");
const epoch = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: epochRoot,
    parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
        in: epochRoot,
        // parse as a number so the string is treated as milliseconds
        // rather than passed to the Date string parser
        morphs: (s)=>new Date(Number.parseInt(s)),
        declaredOut: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].Date
    })
}, {
    name: "string.date.epoch"
});
const isoRoot = regexStringNode(iso8601Matcher, "an ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ) date").internal.assertHasKind("intersection");
const iso = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: isoRoot,
    parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
        in: isoRoot,
        morphs: (s)=>new Date(s),
        declaredOut: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].Date
    })
}, {
    name: "string.date.iso"
});
const stringDate = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: parsableDate,
    parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
        declaredIn: parsableDate,
        in: "string",
        morphs: (s, ctx)=>{
            const date = new Date(s);
            if (Number.isNaN(date.valueOf())) return ctx.error("a parsable date");
            return date;
        },
        declaredOut: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].Date
    }),
    iso,
    epoch
}, {
    name: "string.date"
});
const email = regexStringNode(// considered https://colinhacks.com/essays/reasonable-email-regex but it includes a lookahead
// which breaks some integrations e.g. fast-check
// regex based on:
// https://www.regular-expressions.info/email.html
/^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/, "an email address", "email");
// based on https://github.com/validatorjs/validator.js/blob/master/src/lib/isIP.js
const ipv4Segment = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
const ipv4Address = `(${ipv4Segment}[.]){3}${ipv4Segment}`;
const ipv4Matcher = new RegExp(`^${ipv4Address}$`);
const ipv6Segment = "(?:[0-9a-fA-F]{1,4})";
const ipv6Matcher = new RegExp("^(" + `(?:${ipv6Segment}:){7}(?:${ipv6Segment}|:)|` + `(?:${ipv6Segment}:){6}(?:${ipv4Address}|:${ipv6Segment}|:)|` + `(?:${ipv6Segment}:){5}(?::${ipv4Address}|(:${ipv6Segment}){1,2}|:)|` + `(?:${ipv6Segment}:){4}(?:(:${ipv6Segment}){0,1}:${ipv4Address}|(:${ipv6Segment}){1,3}|:)|` + `(?:${ipv6Segment}:){3}(?:(:${ipv6Segment}){0,2}:${ipv4Address}|(:${ipv6Segment}){1,4}|:)|` + `(?:${ipv6Segment}:){2}(?:(:${ipv6Segment}){0,3}:${ipv4Address}|(:${ipv6Segment}){1,5}|:)|` + `(?:${ipv6Segment}:){1}(?:(:${ipv6Segment}){0,4}:${ipv4Address}|(:${ipv6Segment}){1,6}|:)|` + `(?::((?::${ipv6Segment}){0,5}:${ipv4Address}|(?::${ipv6Segment}){1,7}|:))` + ")(%[0-9a-zA-Z.]{1,})?$");
const ip = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: [
        "v4 | v6",
        "@",
        "an IP address"
    ],
    v4: regexStringNode(ipv4Matcher, "an IPv4 address", "ipv4"),
    v6: regexStringNode(ipv6Matcher, "an IPv6 address", "ipv6")
}, {
    name: "string.ip"
});
const jsonStringDescription = "a JSON string";
const writeJsonSyntaxErrorProblem = (error)=>{
    if (!(error instanceof SyntaxError)) throw error;
    return `must be ${jsonStringDescription} (${error})`;
};
const jsonRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
    meta: jsonStringDescription,
    domain: "string",
    predicate: {
        meta: jsonStringDescription,
        predicate: (s, ctx)=>{
            try {
                JSON.parse(s);
                return true;
            } catch (e) {
                return ctx.reject({
                    code: "predicate",
                    expected: jsonStringDescription,
                    problem: writeJsonSyntaxErrorProblem(e)
                });
            }
        }
    }
});
const parseJson = (s, ctx)=>{
    if (s.length === 0) {
        return ctx.error({
            code: "predicate",
            expected: jsonStringDescription,
            actual: "empty"
        });
    }
    try {
        return JSON.parse(s);
    } catch (e) {
        return ctx.error({
            code: "predicate",
            expected: jsonStringDescription,
            problem: writeJsonSyntaxErrorProblem(e)
        });
    }
};
const json = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: jsonRoot,
    parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
        meta: "safe JSON string parser",
        in: "string",
        morphs: parseJson,
        declaredOut: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].jsonObject
    })
}, {
    name: "string.json"
});
const preformattedLower = regexStringNode(/^[a-z]*$/, "only lowercase letters");
const lower = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
        in: "string",
        morphs: (s)=>s.toLowerCase(),
        declaredOut: preformattedLower
    }),
    preformatted: preformattedLower
}, {
    name: "string.lower"
});
const normalizedForms = [
    "NFC",
    "NFD",
    "NFKC",
    "NFKD"
];
const preformattedNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(normalizedForms, (i, form)=>[
        form,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
            domain: "string",
            predicate: (s)=>s.normalize(form) === s,
            meta: `${form}-normalized unicode`
        })
    ]);
const normalizeNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(normalizedForms, (i, form)=>[
        form,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
            in: "string",
            morphs: (s)=>s.normalize(form),
            declaredOut: preformattedNodes[form]
        })
    ]);
const NFC = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: normalizeNodes.NFC,
    preformatted: preformattedNodes.NFC
}, {
    name: "string.normalize.NFC"
});
const NFD = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: normalizeNodes.NFD,
    preformatted: preformattedNodes.NFD
}, {
    name: "string.normalize.NFD"
});
const NFKC = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: normalizeNodes.NFKC,
    preformatted: preformattedNodes.NFKC
}, {
    name: "string.normalize.NFKC"
});
const NFKD = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: normalizeNodes.NFKD,
    preformatted: preformattedNodes.NFKD
}, {
    name: "string.normalize.NFKD"
});
const normalize = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: "NFC",
    NFC,
    NFD,
    NFKC,
    NFKD
}, {
    name: "string.normalize"
});
const numericRoot = regexStringNode(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$numbers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["numericStringMatcher"], "a well-formed numeric string");
const stringNumeric = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: numericRoot,
    parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
        in: numericRoot,
        morphs: (s)=>Number.parseFloat(s),
        declaredOut: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].number
    })
}, {
    name: "string.numeric"
});
const regexPatternDescription = "a regex pattern";
const regex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
    domain: "string",
    predicate: {
        meta: regexPatternDescription,
        predicate: (s, ctx)=>{
            try {
                new RegExp(s);
                return true;
            } catch (e) {
                return ctx.reject({
                    code: "predicate",
                    expected: regexPatternDescription,
                    problem: String(e)
                });
            }
        }
    },
    meta: {
        format: "regex"
    }
});
const semverMatcher = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[A-Za-z-][\dA-Za-z-]*)(?:\.(?:0|[1-9]\d*|\d*[A-Za-z-][\dA-Za-z-]*))*))?(?:\+([\dA-Za-z-]+(?:\.[\dA-Za-z-]+)*))?$/;
const semver = regexStringNode(semverMatcher, "a semantic version (see https://semver.org/)");
const preformattedTrim = regexStringNode(// no leading or trailing whitespace
/^\S.*\S$|^\S?$/, "trimmed");
const trim = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
        in: "string",
        morphs: (s)=>s.trim(),
        declaredOut: preformattedTrim
    }),
    preformatted: preformattedTrim
}, {
    name: "string.trim"
});
const preformattedUpper = regexStringNode(/^[A-Z]*$/, "only uppercase letters");
const upper = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
        in: "string",
        morphs: (s)=>s.toUpperCase(),
        declaredOut: preformattedUpper
    }),
    preformatted: preformattedUpper
}, {
    name: "string.upper"
});
const isParsableUrl = (s)=>URL.canParse(s);
const urlRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
    domain: "string",
    predicate: {
        meta: "a URL string",
        predicate: isParsableUrl
    },
    // URL.canParse allows a subset of the RFC-3986 URI spec
    // since there is no other serializable validation, best include a format
    meta: {
        format: "uri"
    }
});
const url = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: urlRoot,
    parse: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
        declaredIn: urlRoot,
        in: "string",
        morphs: (s, ctx)=>{
            try {
                return new URL(s);
            } catch  {
                return ctx.error("a URL string");
            }
        },
        declaredOut: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])(URL)
    })
}, {
    name: "string.url"
});
const uuid = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    // the meta tuple expression ensures the error message does not delegate
    // to the individual branches, which are too detailed
    root: [
        "versioned | nil | max",
        "@",
        {
            description: "a UUID",
            format: "uuid"
        }
    ],
    "#nil": "'00000000-0000-0000-0000-000000000000'",
    "#max": "'ffffffff-ffff-ffff-ffff-ffffffffffff'",
    "#versioned": /^[\dA-Fa-f]{8}-[\dA-Fa-f]{4}-[1-8][\dA-Fa-f]{3}-[89ABab][\dA-Fa-f]{3}-[\dA-Fa-f]{12}$/,
    v1: regexStringNode(/^[\dA-Fa-f]{8}-[\dA-Fa-f]{4}-1[\dA-Fa-f]{3}-[89ABab][\dA-Fa-f]{3}-[\dA-Fa-f]{12}$/, "a UUIDv1"),
    v2: regexStringNode(/^[\dA-Fa-f]{8}-[\dA-Fa-f]{4}-2[\dA-Fa-f]{3}-[89ABab][\dA-Fa-f]{3}-[\dA-Fa-f]{12}$/, "a UUIDv2"),
    v3: regexStringNode(/^[\dA-Fa-f]{8}-[\dA-Fa-f]{4}-3[\dA-Fa-f]{3}-[89ABab][\dA-Fa-f]{3}-[\dA-Fa-f]{12}$/, "a UUIDv3"),
    v4: regexStringNode(/^[\dA-Fa-f]{8}-[\dA-Fa-f]{4}-4[\dA-Fa-f]{3}-[89ABab][\dA-Fa-f]{3}-[\dA-Fa-f]{12}$/, "a UUIDv4"),
    v5: regexStringNode(/^[\dA-Fa-f]{8}-[\dA-Fa-f]{4}-5[\dA-Fa-f]{3}-[89ABab][\dA-Fa-f]{3}-[\dA-Fa-f]{12}$/, "a UUIDv5"),
    v6: regexStringNode(/^[\dA-Fa-f]{8}-[\dA-Fa-f]{4}-6[\dA-Fa-f]{3}-[89ABab][\dA-Fa-f]{3}-[\dA-Fa-f]{12}$/, "a UUIDv6"),
    v7: regexStringNode(/^[\dA-Fa-f]{8}-[\dA-Fa-f]{4}-7[\dA-Fa-f]{3}-[89ABab][\dA-Fa-f]{3}-[\dA-Fa-f]{12}$/, "a UUIDv7"),
    v8: regexStringNode(/^[\dA-Fa-f]{8}-[\dA-Fa-f]{4}-8[\dA-Fa-f]{3}-[89ABab][\dA-Fa-f]{3}-[\dA-Fa-f]{12}$/, "a UUIDv8")
}, {
    name: "string.uuid"
});
const string = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].string,
    alpha: regexStringNode(/^[A-Za-z]*$/, "only letters"),
    alphanumeric: regexStringNode(/^[\dA-Za-z]*$/, "only letters and digits 0-9"),
    hex,
    base58,
    base64,
    capitalize,
    creditCard,
    date: stringDate,
    digits: regexStringNode(/^\d*$/, "only digits 0-9"),
    email,
    integer: stringInteger,
    ip,
    json,
    lower,
    normalize,
    numeric: stringNumeric,
    regex,
    semver,
    trim,
    upper,
    url,
    uuid
}, {
    name: "string"
});
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/ts.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arkTsGenerics",
    ()=>arkTsGenerics,
    "arkTsKeywords",
    ()=>arkTsKeywords,
    "json",
    ()=>json,
    "object",
    ()=>object,
    "unknown",
    ()=>unknown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/scope.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/intrinsic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$hkt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/hkt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/scope.js [app-route] (ecmascript)");
;
;
;
const arkTsKeywords = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    bigint: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].bigint,
    boolean: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].boolean,
    false: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].false,
    never: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].never,
    null: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].null,
    number: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].number,
    object: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].object,
    string: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].string,
    symbol: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].symbol,
    true: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].true,
    unknown: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].unknown,
    undefined: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].undefined
});
const unknown = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].unknown,
    any: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].unknown
}, {
    name: "unknown"
});
const json = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].jsonObject,
    stringify: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["node"])("morph", {
        in: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].jsonObject,
        morphs: (data)=>JSON.stringify(data),
        declaredOut: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].string
    })
}, {
    name: "object.json"
});
const object = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    root: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].object,
    json
}, {
    name: "object"
});
class RecordHkt extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$hkt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Hkt"] {
    description = 'instantiate an object from an index signature and corresponding value type like `Record("string", "number")`';
}
const Record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genericNode"])([
    "K",
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].key
], "V")((args)=>({
        domain: "object",
        index: {
            signature: args.K,
            value: args.V
        }
    }), RecordHkt);
class PickHkt extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$hkt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Hkt"] {
    description = 'pick a set of properties from an object like `Pick(User, "name | age")`';
}
const Pick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genericNode"])([
    "T",
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].object
], [
    "K",
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].key
])((args)=>args.T.pick(args.K), PickHkt);
class OmitHkt extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$hkt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Hkt"] {
    description = 'omit a set of properties from an object like `Omit(User, "age")`';
}
const Omit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genericNode"])([
    "T",
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].object
], [
    "K",
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].key
])((args)=>args.T.omit(args.K), OmitHkt);
class PartialHkt extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$hkt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Hkt"] {
    description = "make all named properties of an object optional like `Partial(User)`";
}
const Partial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genericNode"])([
    "T",
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].object
])((args)=>args.T.partial(), PartialHkt);
class RequiredHkt extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$hkt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Hkt"] {
    description = "make all named properties of an object required like `Required(User)`";
}
const Required = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genericNode"])([
    "T",
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].object
])((args)=>args.T.required(), RequiredHkt);
class ExcludeHkt extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$hkt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Hkt"] {
    description = 'exclude branches of a union like `Exclude("boolean", "true")`';
}
const Exclude = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genericNode"])("T", "U")((args)=>args.T.exclude(args.U), ExcludeHkt);
class ExtractHkt extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$hkt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Hkt"] {
    description = 'extract branches of a union like `Extract("0 | false | 1", "number")`';
}
const Extract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genericNode"])("T", "U")((args)=>args.T.extract(args.U), ExtractHkt);
const arkTsGenerics = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scope"].module({
    Exclude,
    Extract,
    Omit,
    Partial,
    Pick,
    Record,
    Required
});
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/match.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InternalChainedMatchParser",
    ()=>InternalChainedMatchParser,
    "InternalMatchParser",
    ()=>InternalMatchParser,
    "chainedAtMessage",
    ()=>chainedAtMessage,
    "doubleAtMessage",
    ()=>doubleAtMessage,
    "throwOnDefault",
    ()=>throwOnDefault
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/intrinsic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/functions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
;
;
class InternalMatchParser extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callable"] {
    $;
    constructor($){
        super((...args)=>new InternalChainedMatchParser($)(...args), {
            bind: $
        });
        this.$ = $;
    }
    in(def) {
        return new InternalChainedMatchParser(this.$, def === undefined ? undefined : this.$.parse(def));
    }
    at(key, cases) {
        return new InternalChainedMatchParser(this.$).at(key, cases);
    }
    case(when, then) {
        return new InternalChainedMatchParser(this.$).case(when, then);
    }
}
class InternalChainedMatchParser extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callable"] {
    $;
    in;
    key;
    branches = [];
    constructor($, In){
        super((cases)=>this.caseEntries(Object.entries(cases).map(([k, v])=>k === "default" ? [
                    k,
                    v
                ] : [
                    this.$.parse(k),
                    v
                ])));
        this.$ = $;
        this.in = In;
    }
    at(key, cases) {
        if (this.key) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(doubleAtMessage);
        if (this.branches.length) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(chainedAtMessage);
        this.key = key;
        return cases ? this.match(cases) : this;
    }
    case(def, resolver) {
        return this.caseEntry(this.$.parse(def), resolver);
    }
    caseEntry(node, resolver) {
        const wrappableNode = this.key ? this.$.parse({
            [this.key]: node
        }) : node;
        const branch = wrappableNode.pipe(resolver);
        this.branches.push(branch);
        return this;
    }
    match(cases) {
        return this(cases);
    }
    strings(cases) {
        return this.caseEntries(Object.entries(cases).map(([k, v])=>k === "default" ? [
                k,
                v
            ] : [
                this.$.node("unit", {
                    unit: k
                }),
                v
            ]));
    }
    caseEntries(entries) {
        for(let i = 0; i < entries.length; i++){
            const [k, v] = entries[i];
            if (k === "default") {
                if (i !== entries.length - 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(`default may only be specified as the last key of a switch definition`);
                }
                return this.default(v);
            }
            if (typeof v !== "function") {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(`Value for case "${k}" must be a function (was ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainOf"])(v)})`);
            }
            this.caseEntry(k, v);
        }
        return this;
    }
    default(defaultCase) {
        if (typeof defaultCase === "function") this.case(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].unknown, defaultCase);
        const schema = {
            branches: this.branches,
            ordered: true
        };
        if (defaultCase === "never" || defaultCase === "assert") schema.meta = {
            onFail: throwOnDefault
        };
        const cases = this.$.node("union", schema);
        if (!this.in) return this.$.finalize(cases);
        let inputValidatedCases = this.in.pipe(cases);
        if (defaultCase === "never" || defaultCase === "assert") {
            inputValidatedCases = inputValidatedCases.configureReferences({
                onFail: throwOnDefault
            }, "self");
        }
        return this.$.finalize(inputValidatedCases);
    }
}
const throwOnDefault = (errors)=>errors.throw();
const chainedAtMessage = `A key matcher must be specified before the first case i.e. match.at('foo') or match.in<object>().at('bar')`;
const doubleAtMessage = `At most one key matcher may be specified per expression`;
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/module.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoundModule",
    ()=>BoundModule,
    "Module",
    ()=>Module
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$module$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/module.js [app-route] (ecmascript)");
;
const Module = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$module$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RootModule"];
const BoundModule = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$module$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RootModule"];
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/ast/validate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shallowDefaultableMessage",
    ()=>shallowDefaultableMessage,
    "shallowOptionalMessage",
    ()=>shallowOptionalMessage,
    "writePrefixedPrivateReferenceMessage",
    ()=>writePrefixedPrivateReferenceMessage
]);
const writePrefixedPrivateReferenceMessage = (name)=>`Private type references should not include '#'. Use '${name}' instead.`;
const shallowOptionalMessage = "Optional definitions like 'string?' are only valid as properties in an object or tuple";
const shallowDefaultableMessage = "Defaultable definitions like 'number = 0' are only valid as properties in an object or tuple";
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/definition.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseInnerDefinition",
    ()=>parseInnerDefinition,
    "parseObject",
    ()=>parseObject,
    "parseTuple",
    ()=>parseTuple,
    "writeBadDefinitionTypeMessage",
    ()=>writeBadDefinitionTypeMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/functions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/strings.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$objectLiteral$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/objectLiteral.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/string.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$tupleExpressions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/tupleExpressions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$tupleLiteral$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/tupleLiteral.js [app-route] (ecmascript)");
;
;
;
;
;
;
const parseCache = new WeakMap();
const parseInnerDefinition = (def, ctx)=>{
    if (typeof def === "string") {
        if (ctx.args && Object.keys(ctx.args).some((k)=>def.includes(k))) {
            // we can only rely on the cache if there are no contextual
            // resolutions like "this" or generic args
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseString"])(def, ctx);
        }
        let scopeCache = parseCache.get(ctx.$);
        if (!scopeCache) {
            scopeCache = {};
            parseCache.set(ctx.$, scopeCache);
        }
        return scopeCache[def] ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseString"])(def, ctx);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDomain"])(def, "object") ? parseObject(def, ctx) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeBadDefinitionTypeMessage((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainOf"])(def)));
};
const parseObject = (def, ctx)=>{
    const objectKind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectKindOf"])(def);
    switch(objectKind){
        case undefined:
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(def, "root")) return def;
            if ("~standard" in def) return parseStandardSchema(def, ctx);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$objectLiteral$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseObjectLiteral"])(def, ctx);
        case "Array":
            return parseTuple(def, ctx);
        case "RegExp":
            return ctx.$.node("intersection", {
                domain: "string",
                pattern: def
            }, {
                prereduced: true
            });
        case "Function":
            {
                const resolvedDef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isThunk"])(def) ? def() : def;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(resolvedDef, "root")) return resolvedDef;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeBadDefinitionTypeMessage("Function"));
            }
        default:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeBadDefinitionTypeMessage(objectKind ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(def)));
    }
};
const parseStandardSchema = (def, ctx)=>ctx.$.intrinsic.unknown.pipe((v, ctx)=>{
        const result = def["~standard"].validate(v);
        if (!result.issues) return result.value;
        for (const { message, path } of result.issues){
            if (path) {
                if (path.length) {
                    ctx.error({
                        problem: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uncapitalize"])(message),
                        relativePath: path.map((k)=>typeof k === "object" ? k.key : k)
                    });
                } else {
                    ctx.error({
                        message
                    });
                }
            } else {
                ctx.error({
                    message
                });
            }
        }
    });
const parseTuple = (def, ctx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$tupleExpressions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["maybeParseTupleExpression"])(def, ctx) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$tupleLiteral$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseTupleLiteral"])(def, ctx);
const writeBadDefinitionTypeMessage = (actual)=>`Type definitions must be strings or objects (was ${actual})`;
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/objectLiteral.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonLeadingSpreadError",
    ()=>nonLeadingSpreadError,
    "parseObjectLiteral",
    ()=>parseObjectLiteral,
    "preparseKey",
    ()=>preparseKey,
    "writeInvalidSpreadTypeMessage",
    ()=>writeInvalidSpreadTypeMessage,
    "writeInvalidUndeclaredBehaviorMessage",
    ()=>writeInvalidUndeclaredBehaviorMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/intrinsic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$structure$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/structure.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/strings.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$property$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/property.js [app-route] (ecmascript)");
;
;
;
const parseObjectLiteral = (def, ctx)=>{
    let spread;
    const structure = {};
    // We only allow a spread operator to be used as the first key in an object
    // because to match JS behavior any keys before the spread are overwritten
    // by the values in the target object, so there'd be no useful purpose in having it
    // anywhere except for the beginning.
    const defEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringAndSymbolicEntriesOf"])(def);
    for (const [k, v] of defEntries){
        const parsedKey = preparseKey(k);
        if (parsedKey.kind === "spread") {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmptyObject"])(structure)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(nonLeadingSpreadError);
            const operand = ctx.$.parseOwnDefinitionFormat(v, ctx);
            // treat object domain as empty for spreading (useful for generic constraints)
            if (operand.equals(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].object)) continue;
            if (!operand.hasKind("intersection") || // still error on attempts to spread proto nodes like ...Date
            !operand.basis?.equals(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$intrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intrinsic"].object)) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeInvalidSpreadTypeMessage(operand.expression));
            }
            spread = operand.structure;
            continue;
        }
        if (parsedKey.kind === "undeclared") {
            if (v !== "reject" && v !== "delete" && v !== "ignore") (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeInvalidUndeclaredBehaviorMessage(v));
            structure.undeclared = v;
            continue;
        }
        const parsedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$property$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseProperty"])(v, ctx);
        const parsedEntryKey = parsedKey;
        if (parsedKey.kind === "required") {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(parsedValue)) {
                appendNamedProp(structure, "required", {
                    key: parsedKey.normalized,
                    value: parsedValue
                }, ctx);
            } else {
                appendNamedProp(structure, "optional", parsedValue[1] === "=" ? {
                    key: parsedKey.normalized,
                    value: parsedValue[0],
                    default: parsedValue[2]
                } : {
                    key: parsedKey.normalized,
                    value: parsedValue[0]
                }, ctx);
            }
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(parsedValue)) {
            if (parsedValue[1] === "?") (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$property$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidOptionalKeyKindMessage"]);
            if (parsedValue[1] === "=") (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$property$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidDefaultableKeyKindMessage"]);
        }
        // value must be a BaseRoot at this point
        if (parsedKey.kind === "optional") {
            appendNamedProp(structure, "optional", {
                key: parsedKey.normalized,
                value: parsedValue
            }, ctx);
            continue;
        }
        // must be index at this point
        const signature = ctx.$.parseOwnDefinitionFormat(parsedEntryKey.normalized, ctx);
        const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$structure$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeIndex"])(signature, parsedValue, ctx.$);
        if (normalized.index) structure.index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(structure.index, normalized.index);
        if (normalized.required) structure.required = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(structure.required, normalized.required);
    }
    const structureNode = ctx.$.node("structure", structure);
    return ctx.$.parseSchema({
        domain: "object",
        structure: spread?.merge(structureNode) ?? structureNode
    });
};
const appendNamedProp = (structure, kind, inner, ctx)=>{
    structure[kind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(// doesn't seem like this cast should be necessary
    structure[kind], ctx.$.node(kind, inner));
};
const writeInvalidUndeclaredBehaviorMessage = (actual)=>`Value of '+' key must be 'reject', 'delete', or 'ignore' (was ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(actual)})`;
const nonLeadingSpreadError = "Spread operator may only be used as the first key in an object";
const preparseKey = (key)=>typeof key === "symbol" ? {
        kind: "required",
        normalized: key
    } : key[key.length - 1] === "?" ? key[key.length - 2] === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Backslash"] ? {
        kind: "required",
        normalized: `${key.slice(0, -2)}?`
    } : {
        kind: "optional",
        normalized: key.slice(0, -1)
    } : key[0] === "[" && key[key.length - 1] === "]" ? {
        kind: "index",
        normalized: key.slice(1, -1)
    } : key[0] === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Backslash"] && key[1] === "[" && key[key.length - 1] === "]" ? {
        kind: "required",
        normalized: key.slice(1)
    } : key === "..." ? {
        kind: "spread"
    } : key === "+" ? {
        kind: "undeclared"
    } : {
        kind: "required",
        normalized: key === "\\..." ? "..." : key === "\\+" ? "+" : key
    };
const writeInvalidSpreadTypeMessage = (def)=>`Spread operand must resolve to an object literal type (was ${def})`;
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/property.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invalidDefaultableKeyKindMessage",
    ()=>invalidDefaultableKeyKindMessage,
    "invalidOptionalKeyKindMessage",
    ()=>invalidOptionalKeyKindMessage,
    "parseProperty",
    ()=>parseProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$definition$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/definition.js [app-route] (ecmascript)");
;
;
const parseProperty = (def, ctx)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(def)) {
        if (def[1] === "=") return [
            ctx.$.parseOwnDefinitionFormat(def[0], ctx),
            "=",
            def[2]
        ];
        if (def[1] === "?") return [
            ctx.$.parseOwnDefinitionFormat(def[0], ctx),
            "?"
        ];
    }
    // string-embedded defaults/optionals are handled by the string parser
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$definition$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseInnerDefinition"])(def, ctx);
};
const invalidOptionalKeyKindMessage = `Only required keys may make their values optional, e.g. { [mySymbol]: ['number', '?'] }`;
const invalidDefaultableKeyKindMessage = `Only required keys may specify default values, e.g. { value: 'number = 0' }`;
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/reduce/dynamic.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RuntimeState",
    ()=>RuntimeState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$scanner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/scanner.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$operand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operand/operand.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operator$2f$operator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operator/operator.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/string.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$reduce$2f$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/reduce/shared.js [app-route] (ecmascript)");
;
;
;
;
;
class RuntimeState {
    root;
    branches = {
        prefixes: [],
        leftBound: null,
        intersection: null,
        union: null,
        pipe: null
    };
    finalizer;
    groups = [];
    scanner;
    ctx;
    constructor(scanner, ctx){
        this.scanner = scanner;
        this.ctx = ctx;
    }
    error(message) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(message);
    }
    hasRoot() {
        return this.root !== undefined;
    }
    setRoot(root) {
        this.root = root;
    }
    unsetRoot() {
        const value = this.root;
        this.root = undefined;
        return value;
    }
    constrainRoot(...args) {
        this.root = this.root.constrain(args[0], args[1]);
    }
    finalize(finalizer) {
        if (this.groups.length) return this.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$scanner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeUnclosedGroupMessage"])(")"));
        this.finalizeBranches();
        this.finalizer = finalizer;
    }
    reduceLeftBound(limit, comparator) {
        const invertedComparator = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$reduce$2f$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invertedComparators"][comparator];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isKeyOf"])(invertedComparator, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$reduce$2f$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["minComparators"])) return this.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$reduce$2f$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeUnpairableComparatorMessage"])(comparator));
        if (this.branches.leftBound) {
            return this.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$reduce$2f$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeMultipleLeftBoundsMessage"])(this.branches.leftBound.limit, this.branches.leftBound.comparator, limit, invertedComparator));
        }
        this.branches.leftBound = {
            comparator: invertedComparator,
            limit
        };
    }
    finalizeBranches() {
        this.assertRangeUnset();
        if (this.branches.pipe) {
            this.pushRootToBranch("|>");
            this.root = this.branches.pipe;
            return;
        }
        if (this.branches.union) {
            this.pushRootToBranch("|");
            this.root = this.branches.union;
            return;
        }
        if (this.branches.intersection) {
            this.pushRootToBranch("&");
            this.root = this.branches.intersection;
            return;
        }
        this.applyPrefixes();
    }
    finalizeGroup() {
        this.finalizeBranches();
        const topBranchState = this.groups.pop();
        if (!topBranchState) {
            return this.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$scanner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeUnmatchedGroupCloseMessage"])(")", this.scanner.unscanned));
        }
        this.branches = topBranchState;
    }
    addPrefix(prefix) {
        this.branches.prefixes.push(prefix);
    }
    applyPrefixes() {
        while(this.branches.prefixes.length){
            const lastPrefix = this.branches.prefixes.pop();
            this.root = lastPrefix === "keyof" ? this.root.keyof() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected prefix '${lastPrefix}'`);
        }
    }
    pushRootToBranch(token) {
        this.assertRangeUnset();
        this.applyPrefixes();
        const root = this.root;
        this.root = undefined;
        this.branches.intersection = this.branches.intersection?.rawAnd(root) ?? root;
        if (token === "&") return;
        this.branches.union = this.branches.union?.rawOr(this.branches.intersection) ?? this.branches.intersection;
        this.branches.intersection = null;
        if (token === "|") return;
        this.branches.pipe = this.branches.pipe?.rawPipeOnce(this.branches.union) ?? this.branches.union;
        this.branches.union = null;
    }
    parseUntilFinalizer() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUntilFinalizer"])(new RuntimeState(this.scanner, this.ctx));
    }
    parseOperator() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operator$2f$operator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseOperator"])(this);
    }
    parseOperand() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$operand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseOperand"])(this);
    }
    assertRangeUnset() {
        if (this.branches.leftBound) {
            return this.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$reduce$2f$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeOpenRangeMessage"])(this.branches.leftBound.limit, this.branches.leftBound.comparator));
        }
    }
    reduceGroupOpen() {
        this.groups.push(this.branches);
        this.branches = {
            prefixes: [],
            leftBound: null,
            union: null,
            intersection: null,
            pipe: null
        };
    }
    previousOperator() {
        return this.branches.leftBound?.comparator ?? this.branches.prefixes[this.branches.prefixes.length - 1] ?? (this.branches.intersection ? "&" : this.branches.union ? "|" : this.branches.pipe ? "|>" : undefined);
    }
    shiftedBy(count) {
        this.scanner.jumpForward(count);
        return this;
    }
}
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/reduce/shared.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comparators",
    ()=>comparators,
    "invertedComparators",
    ()=>invertedComparators,
    "maxComparators",
    ()=>maxComparators,
    "minComparators",
    ()=>minComparators,
    "writeMultipleLeftBoundsMessage",
    ()=>writeMultipleLeftBoundsMessage,
    "writeOpenRangeMessage",
    ()=>writeOpenRangeMessage,
    "writeUnpairableComparatorMessage",
    ()=>writeUnpairableComparatorMessage
]);
const minComparators = {
    ">": true,
    ">=": true
};
const maxComparators = {
    "<": true,
    "<=": true
};
const comparators = {
    ">": true,
    ">=": true,
    "<": true,
    "<=": true,
    "==": true
};
const invertedComparators = {
    "<": ">",
    ">": "<",
    "<=": ">=",
    ">=": "<=",
    "==": "=="
};
const writeOpenRangeMessage = (min, comparator)=>`Left bounds are only valid when paired with right bounds (try ...${comparator}${min})`;
const writeUnpairableComparatorMessage = (comparator)=>`Left-bounded expressions must specify their limits using < or <= (was ${comparator})`;
const writeMultipleLeftBoundsMessage = (openLimit, openComparator, limit, comparator)=>`An expression may have at most one left bound (parsed ${openLimit}${invertedComparators[openComparator]}, ${limit}${invertedComparators[comparator]})`;
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operand/date.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractDateLiteralSource",
    ()=>extractDateLiteralSource,
    "isDateLiteral",
    ()=>isDateLiteral,
    "isValidDate",
    ()=>isValidDate,
    "tryParseDate",
    ()=>tryParseDate,
    "writeInvalidDateMessage",
    ()=>writeInvalidDateMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$numbers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/numbers.js [app-route] (ecmascript)");
;
const isDateLiteral = (value)=>typeof value === "string" && value[0] === "d" && (value[1] === "'" || value[1] === '"') && value[value.length - 1] === value[1];
const isValidDate = (d)=>d.toString() !== "Invalid Date";
const extractDateLiteralSource = (literal)=>literal.slice(2, -1);
const writeInvalidDateMessage = (source)=>`'${source}' could not be parsed by the Date constructor`;
const tryParseDate = (source, errorOnFail)=>maybeParseDate(source, errorOnFail);
const maybeParseDate = (source, errorOnFail)=>{
    const stringParsedDate = new Date(source);
    if (isValidDate(stringParsedDate)) return stringParsedDate;
    const epochMillis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$numbers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tryParseNumber"])(source);
    if (epochMillis !== undefined) {
        const numberParsedDate = new Date(epochMillis);
        if (isValidDate(numberParsedDate)) return numberParsedDate;
    }
    return errorOnFail ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(errorOnFail === true ? writeInvalidDateMessage(source) : errorOnFail) : undefined;
};
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operand/enclosed.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enclosingChar",
    ()=>enclosingChar,
    "enclosingLiteralTokens",
    ()=>enclosingLiteralTokens,
    "enclosingQuote",
    ()=>enclosingQuote,
    "enclosingRegexTokens",
    ()=>enclosingRegexTokens,
    "enclosingTokens",
    ()=>enclosingTokens,
    "parseEnclosed",
    ()=>parseEnclosed,
    "untilLookaheadIsClosing",
    ()=>untilLookaheadIsClosing,
    "writeUnterminatedEnclosedMessage",
    ()=>writeUnterminatedEnclosedMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/scope.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/strings.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operand/date.js [app-route] (ecmascript)");
;
;
;
const regexExecArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rootSchema"])({
    proto: "Array",
    sequence: "string",
    required: {
        key: "groups",
        value: [
            "object",
            {
                unit: undefined
            }
        ]
    }
});
const parseEnclosed = (s, enclosing)=>{
    const enclosed = s.scanner.shiftUntilEscapable(untilLookaheadIsClosing[enclosingTokens[enclosing]], // within a regex literal, `\\` is a literal backslash and must be
    // preserved verbatim in the pattern source; collapsing it to a single
    // backslash would corrupt the regex (e.g. `\\d` -> `\d` digit class)
    enclosing in enclosingRegexTokens ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Backslash"] : "");
    if (s.scanner.lookahead === "") return s.error(writeUnterminatedEnclosedMessage(enclosed, enclosing));
    // Shift the scanner one additional time for the second enclosing token
    s.scanner.shift();
    if (enclosing in enclosingRegexTokens) {
        let regex;
        try {
            regex = new RegExp(enclosed);
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(String(e));
        }
        s.root = s.ctx.$.node("intersection", {
            domain: "string",
            pattern: enclosed
        }, {
            prereduced: true
        });
        if (enclosing === "x/") {
            s.root = s.ctx.$.node("morph", {
                in: s.root,
                morphs: (s)=>regex.exec(s),
                declaredOut: regexExecArray
            });
        }
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isKeyOf"])(enclosing, enclosingQuote)) s.root = s.ctx.$.node("unit", {
        unit: enclosed
    });
    else {
        const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tryParseDate"])(enclosed, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeInvalidDateMessage"])(enclosed));
        s.root = s.ctx.$.node("unit", {
            meta: enclosed,
            unit: date
        });
    }
};
const enclosingQuote = {
    "'": 1,
    '"': 1
};
const enclosingChar = {
    "/": 1,
    "'": 1,
    '"': 1
};
const enclosingLiteralTokens = {
    "d'": "'",
    'd"': '"',
    "'": "'",
    '"': '"'
};
const enclosingRegexTokens = {
    "/": "/",
    "x/": "/"
};
const enclosingTokens = {
    ...enclosingLiteralTokens,
    ...enclosingRegexTokens
};
const untilLookaheadIsClosing = {
    "'": (scanner)=>scanner.lookahead === `'`,
    '"': (scanner)=>scanner.lookahead === `"`,
    "/": (scanner)=>scanner.lookahead === `/`
};
const enclosingCharDescriptions = {
    '"': "double-quote",
    "'": "single-quote",
    "/": "forward slash"
};
const writeUnterminatedEnclosedMessage = (fragment, enclosingStart)=>`${enclosingStart}${fragment} requires a closing ${enclosingCharDescriptions[enclosingTokens[enclosingStart]]}`;
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operand/genericArgs.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseGenericArgs",
    ()=>parseGenericArgs,
    "writeInvalidGenericArgCountMessage",
    ()=>writeInvalidGenericArgCountMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$scanner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/scanner.js [app-route] (ecmascript)");
;
const parseGenericArgs = (name, g, s)=>_parseGenericArgs(name, g, s, []);
const _parseGenericArgs = (name, g, s, argNodes)=>{
    const argState = s.parseUntilFinalizer();
    argNodes.push(argState.root);
    if (argState.finalizer === ">") {
        if (argNodes.length !== g.params.length) {
            return s.error(writeInvalidGenericArgCountMessage(name, g.names, argNodes.map((arg)=>arg.expression)));
        }
        return argNodes;
    }
    if (argState.finalizer === ",") return _parseGenericArgs(name, g, s, argNodes);
    return argState.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$scanner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeUnclosedGroupMessage"])(">"));
};
const writeInvalidGenericArgCountMessage = (name, params, argDefs)=>`${name}<${params.join(", ")}> requires exactly ${params.length} args (got ${argDefs.length}${argDefs.length === 0 ? "" : `: ${argDefs.join(", ")}`})`;
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operand/operand.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseOperand",
    ()=>parseOperand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/strings.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$enclosed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operand/enclosed.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$unenclosed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operand/unenclosed.js [app-route] (ecmascript)");
;
;
;
const parseOperand = (s)=>s.scanner.lookahead === "" ? s.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$unenclosed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeMissingOperandMessage"])(s)) : s.scanner.lookahead === "(" ? s.shiftedBy(1).reduceGroupOpen() : s.scanner.lookaheadIsIn(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$enclosed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enclosingChar"]) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$enclosed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseEnclosed"])(s, s.scanner.shift()) : s.scanner.lookaheadIsIn(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["whitespaceChars"]) ? parseOperand(s.shiftedBy(1)) : s.scanner.lookahead === "d" ? s.scanner.nextLookahead in __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$enclosed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enclosingQuote"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$enclosed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseEnclosed"])(s, `${s.scanner.shift()}${s.scanner.shift()}`) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$unenclosed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUnenclosed"])(s) : s.scanner.lookahead === "x" ? s.scanner.nextLookahead === "/" ? s.shiftedBy(2) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$enclosed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseEnclosed"])(s, "x/") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$unenclosed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUnenclosed"])(s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$unenclosed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUnenclosed"])(s);
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operand/unenclosed.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseGenericInstantiation",
    ()=>parseGenericInstantiation,
    "parseUnenclosed",
    ()=>parseUnenclosed,
    "writeExpressionExpectedMessage",
    ()=>writeExpressionExpectedMessage,
    "writeMissingOperandMessage",
    ()=>writeMissingOperandMessage,
    "writeMissingRightOperandMessage",
    ()=>writeMissingRightOperandMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/scope.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$numbers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/numbers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$ast$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/ast/validate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$tokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/tokens.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$genericArgs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operand/genericArgs.js [app-route] (ecmascript)");
;
;
;
;
;
const parseUnenclosed = (s)=>{
    const token = s.scanner.shiftUntilLookahead(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$tokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["terminatingChars"]);
    if (token === "keyof") s.addPrefix("keyof");
    else s.root = unenclosedToNode(s, token);
};
const parseGenericInstantiation = (name, g, s)=>{
    s.scanner.shiftUntilNonWhitespace();
    const lookahead = s.scanner.shift();
    if (lookahead !== "<") return s.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$genericArgs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeInvalidGenericArgCountMessage"])(name, g.names, []));
    const parsedArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$genericArgs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseGenericArgs"])(name, g, s);
    return g(...parsedArgs);
};
const unenclosedToNode = (s, token)=>maybeParseReference(s, token) ?? maybeParseUnenclosedLiteral(s, token) ?? s.error(token === "" ? s.scanner.lookahead === "#" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$ast$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writePrefixedPrivateReferenceMessage"])(s.shiftedBy(1).scanner.shiftUntilLookahead(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$tokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["terminatingChars"])) : writeMissingOperandMessage(s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeUnresolvableMessage"])(token));
const maybeParseReference = (s, token)=>{
    if (s.ctx.args?.[token]) {
        const arg = s.ctx.args[token];
        if (typeof arg !== "string") return arg;
        return s.ctx.$.node("alias", {
            reference: arg
        }, {
            prereduced: true
        });
    }
    const resolution = s.ctx.$.maybeResolve(token);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(resolution, "root")) return resolution;
    if (resolution === undefined) return;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(resolution, "generic")) return parseGenericInstantiation(token, resolution, s);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(`Unexpected resolution ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(resolution)}`);
};
const maybeParseUnenclosedLiteral = (s, token)=>{
    const maybeNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$numbers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tryParseWellFormedNumber"])(token);
    if (maybeNumber !== undefined) return s.ctx.$.node("unit", {
        unit: maybeNumber
    });
    const maybeBigint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$numbers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tryParseWellFormedBigint"])(token);
    if (maybeBigint !== undefined) return s.ctx.$.node("unit", {
        unit: maybeBigint
    });
};
const writeMissingOperandMessage = (s)=>{
    const operator = s.previousOperator();
    return operator ? writeMissingRightOperandMessage(operator, s.scanner.unscanned) : writeExpressionExpectedMessage(s.scanner.unscanned);
};
const writeMissingRightOperandMessage = (token, unscanned = "")=>`Token '${token}' requires a right operand${unscanned ? ` before '${unscanned}'` : ""}`;
const writeExpressionExpectedMessage = (unscanned)=>`Expected an expression${unscanned ? ` before '${unscanned}'` : ""}`;
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operator/bounds.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comparatorStartChars",
    ()=>comparatorStartChars,
    "getBoundKinds",
    ()=>getBoundKinds,
    "parseBound",
    ()=>parseBound,
    "parseRightBound",
    ()=>parseRightBound,
    "writeIncompatibleRangeMessage",
    ()=>writeIncompatibleRangeMessage,
    "writeInvalidLimitMessage",
    ()=>writeInvalidLimitMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/refinements/range.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$reduce$2f$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/reduce/shared.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operand/date.js [app-route] (ecmascript)");
;
;
;
;
const parseBound = (s, start)=>{
    const comparator = shiftComparator(s, start);
    if (s.root.hasKind("unit")) {
        if (typeof s.root.unit === "number") {
            s.reduceLeftBound(s.root.unit, comparator);
            s.unsetRoot();
            return;
        }
        if (s.root.unit instanceof Date) {
            const literal = `d'${s.root.description ?? s.root.unit.toISOString()}'`;
            s.unsetRoot();
            s.reduceLeftBound(literal, comparator);
            return;
        }
    }
    return parseRightBound(s, comparator);
};
const comparatorStartChars = {
    "<": 1,
    ">": 1,
    "=": 1
};
const shiftComparator = (s, start)=>s.scanner.lookaheadIs("=") ? `${start}${s.scanner.shift()}` : start;
const writeIncompatibleRangeMessage = (l, r)=>`Bound kinds ${l} and ${r} are incompatible`;
const getBoundKinds = (comparator, limit, root, boundKind)=>{
    if (root.extends(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.number)) {
        if (typeof limit !== "number") {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeInvalidLimitMessage(comparator, limit, boundKind));
        }
        return comparator === "==" ? [
            "min",
            "max"
        ] : comparator[0] === ">" ? [
            "min"
        ] : [
            "max"
        ];
    }
    if (root.extends(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.lengthBoundable)) {
        if (typeof limit !== "number") {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeInvalidLimitMessage(comparator, limit, boundKind));
        }
        return comparator === "==" ? [
            "exactLength"
        ] : comparator[0] === ">" ? [
            "minLength"
        ] : [
            "maxLength"
        ];
    }
    if (root.extends(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.Date)) {
        // allow either numeric or date limits
        return comparator === "==" ? [
            "after",
            "before"
        ] : comparator[0] === ">" ? [
            "after"
        ] : [
            "before"
        ];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$refinements$2f$range$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeUnboundableMessage"])(root.expression));
};
const openLeftBoundToRoot = (leftBound)=>({
        rule: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDateLiteral"])(leftBound.limit) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractDateLiteralSource"])(leftBound.limit) : leftBound.limit,
        exclusive: leftBound.comparator.length === 1
    });
const parseRightBound = (s, comparator)=>{
    // store the node that will be bounded
    const previousRoot = s.unsetRoot();
    const previousScannerIndex = s.scanner.location;
    s.parseOperand();
    const limitNode = s.unsetRoot();
    // after parsing the next operand, use the locations to get the
    // token from which it was parsed
    const limitToken = s.scanner.sliceChars(previousScannerIndex, s.scanner.location);
    s.root = previousRoot;
    if (!limitNode.hasKind("unit") || typeof limitNode.unit !== "number" && !(limitNode.unit instanceof Date)) return s.error(writeInvalidLimitMessage(comparator, limitToken, "right"));
    const limit = limitNode.unit;
    // apply the newly-parsed right bound
    const exclusive = comparator.length === 1;
    const boundKinds = getBoundKinds(comparator, typeof limit === "number" ? limit : limitToken, previousRoot, "right");
    for (const kind of boundKinds){
        s.constrainRoot(kind, comparator === "==" ? {
            rule: limit
        } : {
            rule: limit,
            exclusive
        });
    }
    if (!s.branches.leftBound) return;
    // if there's an open left bound, perform additional validation and apply it
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isKeyOf"])(comparator, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$reduce$2f$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["maxComparators"])) return s.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$reduce$2f$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeUnpairableComparatorMessage"])(comparator));
    const lowerBoundKind = getBoundKinds(s.branches.leftBound.comparator, s.branches.leftBound.limit, previousRoot, "left");
    s.constrainRoot(lowerBoundKind[0], openLeftBoundToRoot(s.branches.leftBound));
    s.branches.leftBound = null;
};
const writeInvalidLimitMessage = (comparator, limit, boundKind)=>`Comparator ${boundKind === "left" ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$reduce$2f$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invertedComparators"][comparator] : comparator} must be ${boundKind === "left" ? "preceded" : "followed"} by a corresponding literal (was ${limit})`;
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operator/brand.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseBrand",
    ()=>parseBrand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$tokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/tokens.js [app-route] (ecmascript)");
;
const parseBrand = (s)=>{
    s.scanner.shiftUntilNonWhitespace();
    const brandName = s.scanner.shiftUntilLookahead(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$tokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["terminatingChars"]);
    s.root = s.root.brand(brandName);
};
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operator/default.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseDefault",
    ()=>parseDefault,
    "writeNonLiteralDefaultMessage",
    ()=>writeNonLiteralDefaultMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
;
const emptyCollectionDefaults = {
    "[]": ()=>[],
    "{}": ()=>({})
};
const emptyCollectionLiterals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["keysOf"])(emptyCollectionDefaults);
const parseDefault = (s)=>{
    // store the node that will be bounded
    const baseNode = s.unsetRoot();
    // an empty collection is not a unit literal, so it must be short-circuited
    // here and represented as a thunk to keep each traversal's default distinct
    s.scanner.shiftUntilNonWhitespace();
    const emptyCollection = emptyCollectionLiterals.find((literal)=>s.scanner.unscanned.startsWith(literal));
    if (emptyCollection !== undefined) {
        s.scanner.jumpForward(emptyCollection.length);
        return [
            baseNode,
            "=",
            emptyCollectionDefaults[emptyCollection]
        ];
    }
    s.parseOperand();
    const defaultNode = s.unsetRoot();
    // after parsing the next operand, use the locations to get the
    // token from which it was parsed
    if (!defaultNode.hasKind("unit")) return s.error(writeNonLiteralDefaultMessage(defaultNode.expression));
    const defaultValue = defaultNode.unit instanceof Date ? ()=>new Date(defaultNode.unit) : defaultNode.unit;
    return [
        baseNode,
        "=",
        defaultValue
    ];
};
const writeNonLiteralDefaultMessage = (defaultDef)=>`Default value '${defaultDef}' must be a literal value`;
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operator/divisor.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseDivisor",
    ()=>parseDivisor,
    "writeInvalidDivisorMessage",
    ()=>writeInvalidDivisorMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$numbers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/numbers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$tokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/tokens.js [app-route] (ecmascript)");
;
;
const parseDivisor = (s)=>{
    s.scanner.shiftUntilNonWhitespace();
    const divisorToken = s.scanner.shiftUntilLookahead(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$tokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["terminatingChars"]);
    const divisor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$numbers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tryParseInteger"])(divisorToken, {
        errorOnFail: writeInvalidDivisorMessage(divisorToken)
    });
    if (divisor === 0) s.error(writeInvalidDivisorMessage(0));
    s.root = s.root.constrain("divisor", divisor);
};
const writeInvalidDivisorMessage = (divisor)=>`% operator must be followed by a non-zero integer literal (was ${divisor})`;
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operator/operator.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "incompleteArrayTokenMessage",
    ()=>incompleteArrayTokenMessage,
    "parseOperator",
    ()=>parseOperator,
    "writeUnexpectedCharacterMessage",
    ()=>writeUnexpectedCharacterMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/strings.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$tokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/tokens.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operator$2f$bounds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operator/bounds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operator$2f$brand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operator/brand.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operator$2f$divisor$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operator/divisor.js [app-route] (ecmascript)");
;
;
;
;
;
const parseOperator = (s)=>{
    const lookahead = s.scanner.shift();
    return lookahead === "" ? s.finalize("") : lookahead === "[" ? s.scanner.shift() === "]" ? s.setRoot(s.root.rawArray()) : s.error(incompleteArrayTokenMessage) : lookahead === "|" ? s.scanner.lookahead === ">" ? s.shiftedBy(1).pushRootToBranch("|>") : s.pushRootToBranch(lookahead) : lookahead === "&" ? s.pushRootToBranch(lookahead) : lookahead === ")" ? s.finalizeGroup() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$tokens$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lookaheadIsFinalizing"])(lookahead, s.scanner.unscanned) ? s.finalize(lookahead) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isKeyOf"])(lookahead, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operator$2f$bounds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["comparatorStartChars"]) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operator$2f$bounds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseBound"])(s, lookahead) : lookahead === "%" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operator$2f$divisor$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDivisor"])(s) : lookahead === "#" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operator$2f$brand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseBrand"])(s) : lookahead in __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["whitespaceChars"] ? parseOperator(s) : s.error(writeUnexpectedCharacterMessage(lookahead));
};
const writeUnexpectedCharacterMessage = (char, shouldBe = "")=>`'${char}' is not allowed here${shouldBe && ` (should be ${shouldBe})`}`;
const incompleteArrayTokenMessage = `Missing expected ']'`;
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/tokens.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "finalizingLookaheads",
    ()=>finalizingLookaheads,
    "lookaheadIsFinalizing",
    ()=>lookaheadIsFinalizing,
    "terminatingChars",
    ()=>terminatingChars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/strings.js [app-route] (ecmascript)");
;
const terminatingChars = {
    "<": 1,
    ">": 1,
    "=": 1,
    "|": 1,
    "&": 1,
    ")": 1,
    "[": 1,
    "%": 1,
    ",": 1,
    ":": 1,
    "?": 1,
    "#": 1,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["whitespaceChars"]
};
const finalizingLookaheads = {
    ">": 1,
    ",": 1,
    "": 1,
    "=": 1,
    "?": 1
};
const lookaheadIsFinalizing = (lookahead, unscanned)=>lookahead === ">" ? unscanned[0] === "=" ? // >== would only occur in an expression like Array<number>==5
    // otherwise, >= would only occur as part of a bound like number>=5
    unscanned[1] === "=" : unscanned.trimStart() === "" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isKeyOf"])(unscanned.trimStart()[0], terminatingChars) : lookahead === "=" ? unscanned[0] !== "=" : lookahead === "," || lookahead === "?";
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/string.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullStringParse",
    ()=>fullStringParse,
    "parseString",
    ()=>parseString,
    "parseUntilFinalizer",
    ()=>parseUntilFinalizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$scanner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/scanner.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$reduce$2f$dynamic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/reduce/dynamic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operator$2f$default$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operator/default.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operator$2f$operator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operator/operator.js [app-route] (ecmascript)");
;
;
;
;
const parseString = (def, ctx)=>{
    const aliasResolution = ctx.$.maybeResolveRoot(def);
    if (aliasResolution) return aliasResolution;
    if (def.endsWith("[]")) {
        const possibleElementResolution = ctx.$.maybeResolveRoot(def.slice(0, -2));
        if (possibleElementResolution) return possibleElementResolution.rawArray();
    }
    const s = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$reduce$2f$dynamic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RuntimeState"](new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$scanner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scanner"](def), ctx);
    const node = fullStringParse(s);
    if (s.finalizer === ">") (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operator$2f$operator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeUnexpectedCharacterMessage"])(">"));
    return node;
};
const fullStringParse = (s)=>{
    s.parseOperand();
    let result = parseUntilFinalizer(s).root;
    if (!result) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Root was unexpectedly unset after parsing string '${s.scanner.scanned}'`);
    }
    if (s.finalizer === "=") result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operator$2f$default$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDefault"])(s);
    else if (s.finalizer === "?") result = [
        result,
        "?"
    ];
    s.scanner.shiftUntilNonWhitespace();
    if (s.scanner.lookahead) {
        // throw a parse error if non-whitespace characters made it here without being parsed
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operator$2f$operator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeUnexpectedCharacterMessage"])(s.scanner.lookahead));
    }
    return result;
};
const parseUntilFinalizer = (s)=>{
    while(s.finalizer === undefined)next(s);
    return s;
};
const next = (s)=>s.hasRoot() ? s.parseOperator() : s.parseOperand();
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/tupleExpressions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "maybeParseTupleExpression",
    ()=>maybeParseTupleExpression,
    "parseKeyOfTuple",
    ()=>parseKeyOfTuple,
    "parseMorphTuple",
    ()=>parseMorphTuple,
    "parseNarrowTuple",
    ()=>parseNarrowTuple,
    "writeInvalidConstructorMessage",
    ()=>writeInvalidConstructorMessage,
    "writeMalformedFunctionalExpressionMessage",
    ()=>writeMalformedFunctionalExpressionMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/disjoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/intersections.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$ast$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/ast/validate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$unenclosed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/shift/operand/unenclosed.js [app-route] (ecmascript)");
;
;
;
;
const maybeParseTupleExpression = (def, ctx)=>isIndexZeroExpression(def) ? indexZeroParsers[def[0]](def, ctx) : isIndexOneExpression(def) ? indexOneParsers[def[1]](def, ctx) : null;
const parseKeyOfTuple = (def, ctx)=>ctx.$.parseOwnDefinitionFormat(def[1], ctx).keyof();
const parseBranchTuple = (def, ctx)=>{
    if (def[2] === undefined) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$shift$2f$operand$2f$unenclosed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeMissingRightOperandMessage"])(def[1], ""));
    const l = ctx.$.parseOwnDefinitionFormat(def[0], ctx);
    const r = ctx.$.parseOwnDefinitionFormat(def[2], ctx);
    if (def[1] === "|") return ctx.$.node("union", {
        branches: [
            l,
            r
        ]
    });
    const result = def[1] === "&" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intersectNodesRoot"])(l, r, ctx.$) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$intersections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipeNodesRoot"])(l, r, ctx.$);
    if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$disjoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Disjoint"]) return result.throw();
    return result;
};
const parseArrayTuple = (def, ctx)=>ctx.$.parseOwnDefinitionFormat(def[0], ctx).rawArray();
const parseMorphTuple = (def, ctx)=>{
    if (typeof def[2] !== "function") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeMalformedFunctionalExpressionMessage("=>", def[2]));
    }
    return ctx.$.parseOwnDefinitionFormat(def[0], ctx).pipe(def[2]);
};
const writeMalformedFunctionalExpressionMessage = (operator, value)=>`${operator === ":" ? "Narrow" : "Morph"} expression requires a function following '${operator}' (was ${typeof value})`;
const parseNarrowTuple = (def, ctx)=>{
    if (typeof def[2] !== "function") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeMalformedFunctionalExpressionMessage(":", def[2]));
    }
    return ctx.$.parseOwnDefinitionFormat(def[0], ctx).constrain("predicate", def[2]);
};
const parseMetaTuple = (def, ctx)=>ctx.$.parseOwnDefinitionFormat(def[0], ctx).configure(def[2], def[3]);
const defineIndexOneParsers = (parsers)=>parsers;
const postfixParsers = defineIndexOneParsers({
    "[]": parseArrayTuple,
    "?": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$ast$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shallowOptionalMessage"])
});
const infixParsers = defineIndexOneParsers({
    "|": parseBranchTuple,
    "&": parseBranchTuple,
    ":": parseNarrowTuple,
    "=>": parseMorphTuple,
    "|>": parseBranchTuple,
    "@": parseMetaTuple,
    // since object and tuple literals parse there via `parseProperty`,
    // they must be shallow if parsed directly as a tuple expression
    "=": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$ast$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shallowDefaultableMessage"])
});
const indexOneParsers = {
    ...postfixParsers,
    ...infixParsers
};
const isIndexOneExpression = (def)=>indexOneParsers[def[1]] !== undefined;
const defineIndexZeroParsers = (parsers)=>parsers;
const indexZeroParsers = defineIndexZeroParsers({
    keyof: parseKeyOfTuple,
    instanceof: (def, ctx)=>{
        if (typeof def[1] !== "function") {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeInvalidConstructorMessage((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectKindOrDomainOf"])(def[1])));
        }
        const branches = def.slice(1).map((ctor)=>typeof ctor === "function" ? ctx.$.node("proto", {
                proto: ctor
            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeInvalidConstructorMessage((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectKindOrDomainOf"])(ctor))));
        return branches.length === 1 ? branches[0] : ctx.$.node("union", {
            branches
        });
    },
    "===": (def, ctx)=>ctx.$.units(def.slice(1))
});
const isIndexZeroExpression = (def)=>indexZeroParsers[def[0]] !== undefined;
const writeInvalidConstructorMessage = (actual)=>`Expected a constructor following 'instanceof' operator (was ${actual})`;
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/parser/tupleLiteral.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultablePostOptionalMessage",
    ()=>defaultablePostOptionalMessage,
    "multipleVariadicMesage",
    ()=>multipleVariadicMesage,
    "optionalOrDefaultableAfterVariadicMessage",
    ()=>optionalOrDefaultableAfterVariadicMessage,
    "parseTupleLiteral",
    ()=>parseTupleLiteral,
    "requiredPostOptionalMessage",
    ()=>requiredPostOptionalMessage,
    "spreadDefaultableMessage",
    ()=>spreadDefaultableMessage,
    "spreadOptionalMessage",
    ()=>spreadOptionalMessage,
    "writeNonArraySpreadMessage",
    ()=>writeNonArraySpreadMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$sequence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/structure/sequence.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$property$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/property.js [app-route] (ecmascript)");
;
;
;
const parseTupleLiteral = (def, ctx)=>{
    let sequences = [
        {}
    ];
    let i = 0;
    while(i < def.length){
        let spread = false;
        if (def[i] === "..." && i < def.length - 1) {
            spread = true;
            i++;
        }
        const parsedProperty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$property$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseProperty"])(def[i], ctx);
        const [valueNode, operator, possibleDefaultValue] = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(parsedProperty) ? [
            parsedProperty
        ] : parsedProperty;
        i++;
        if (spread) {
            if (!valueNode.extends(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.Array)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeNonArraySpreadMessage(valueNode.expression));
            // a spread must be distributed over branches e.g.:
            // def: [string, ...(number[] | [true, false])]
            // nodes: [string, ...number[]] | [string, true, false]
            sequences = sequences.flatMap((base)=>// since appendElement mutates base, we have to shallow-ish clone it for each branch
                valueNode.distribute((branch)=>appendSpreadBranch((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeRootAndArrayPropertiesMutable"])(base), branch)));
        } else {
            sequences = sequences.map((base)=>{
                if (operator === "?") return appendOptionalElement(base, valueNode);
                if (operator === "=") return appendDefaultableElement(base, valueNode, possibleDefaultValue);
                return appendRequiredElement(base, valueNode);
            });
        }
    }
    return ctx.$.parseSchema(sequences.map((sequence)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmptyObject"])(sequence) ? {
            proto: Array,
            exactLength: 0
        } : {
            proto: Array,
            sequence
        }));
};
const appendRequiredElement = (base, element)=>{
    if (base.defaultables || base.optionals) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(base.variadic ? // e.g. [boolean = true, ...string[], number]
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$structure$2f$sequence$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["postfixAfterOptionalOrDefaultableMessage"] : requiredPostOptionalMessage);
    }
    if (base.variadic) {
        // e.g. [...string[], number]
        base.postfix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(base.postfix, element);
    } else {
        // e.g. [string, number]
        base.prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(base.prefix, element);
    }
    return base;
};
const appendOptionalElement = (base, element)=>{
    if (base.variadic) // e.g. [...string[], number?]
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(optionalOrDefaultableAfterVariadicMessage);
    // e.g. [string, number?]
    base.optionals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(base.optionals, element);
    return base;
};
const appendDefaultableElement = (base, element, value)=>{
    if (base.variadic) // e.g. [...string[], number = 0]
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(optionalOrDefaultableAfterVariadicMessage);
    if (base.optionals) // e.g. [string?, number = 0]
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(defaultablePostOptionalMessage);
    // value's assignability to element will be checked when the
    // sequence is instantiated by @ark/schema
    // e.g. [string, number = 0]
    base.defaultables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(base.defaultables, [
        [
            element,
            value
        ]
    ]);
    return base;
};
const appendVariadicElement = (base, element)=>{
    // e.g. [...string[], number, ...string[]]
    if (base.postfix) (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(multipleVariadicMesage);
    if (base.variadic) {
        if (!base.variadic.equals(element)) {
            // e.g. [...string[], ...number[]]
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(multipleVariadicMesage);
        }
    // e.g. [...string[], ...string[]]
    // do nothing, second spread doesn't change the type
    } else {
        // e.g. [string, ...number[]]
        base.variadic = element.internal;
    }
    return base;
};
const appendSpreadBranch = (base, branch)=>{
    const spread = branch.select({
        method: "find",
        kind: "sequence"
    });
    if (!spread) {
        // the only array with no sequence reference is unknown[]
        return appendVariadicElement(base, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"].intrinsic.unknown);
    }
    if (spread.prefix) for (const node of spread.prefix)appendRequiredElement(base, node);
    if (spread.optionals) for (const node of spread.optionals)appendOptionalElement(base, node);
    if (spread.variadic) appendVariadicElement(base, spread.variadic);
    if (spread.postfix) for (const node of spread.postfix)appendRequiredElement(base, node);
    return base;
};
const writeNonArraySpreadMessage = (operand)=>`Spread element must be an array (was ${operand})`;
const multipleVariadicMesage = "A tuple may have at most one variadic element";
const requiredPostOptionalMessage = "A required element may not follow an optional element";
const optionalOrDefaultableAfterVariadicMessage = "An optional element may not follow a variadic element";
const spreadOptionalMessage = "A spread element cannot be optional";
const spreadDefaultableMessage = "A spread element cannot have a default";
const defaultablePostOptionalMessage = "A defaultable element may not follow an optional element without a default";
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/scope.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$arkTypeRegistry",
    ()=>$arkTypeRegistry,
    "InternalScope",
    ()=>InternalScope,
    "Scope",
    ()=>Scope,
    "scope",
    ()=>scope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/scope.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$generic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/generic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$scanner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/scanner.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/functions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$fn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/fn.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$generic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/generic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$match$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/match.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$ast$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/ast/validate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$definition$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/parser/definition.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/type.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const $arkTypeRegistry = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ark"];
class InternalScope extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$scope$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseScope"] {
    get ambientAttachments() {
        if (!$arkTypeRegistry.typeAttachments) return;
        return this.cacheGetter("ambientAttachments", (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])($arkTypeRegistry.typeAttachments, (k, v)=>[
                k,
                this.bindReference(v)
            ]));
    }
    preparseOwnAliasEntry(alias, def) {
        const firstParamIndex = alias.indexOf("<");
        if (firstParamIndex === -1) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(def, "module") || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(def, "generic")) return [
                alias,
                def
            ];
            const qualifiedName = this.name === "ark" ? alias : alias === "root" ? this.name : `${this.name}.${alias}`;
            const config = this.resolvedConfig.keywords?.[qualifiedName];
            if (config) def = [
                def,
                "@",
                config
            ];
            return [
                alias,
                def
            ];
        }
        if (alias[alias.length - 1] !== ">") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(`'>' must be the last character of a generic declaration in a scope`);
        }
        const name = alias.slice(0, firstParamIndex);
        const paramString = alias.slice(firstParamIndex + 1, -1);
        return [
            name,
            // use a thunk definition for the generic so that we can parse
            // constraints within the current scope
            ()=>{
                const params = this.parseGenericParams(paramString, {
                    alias: name
                });
                const generic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$generic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseGeneric"])(params, def, this);
                return generic;
            }
        ];
    }
    parseGenericParams(def, opts) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$generic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseGenericParamName"])(new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$scanner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Scanner"](def), [], this.createParseContext({
            ...opts,
            def,
            prefix: "generic"
        }));
    }
    normalizeRootScopeValue(resolution) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isThunk"])(resolution) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasArkKind"])(resolution, "generic")) return resolution();
        return resolution;
    }
    preparseOwnDefinitionFormat(def, opts) {
        return {
            ...opts,
            def,
            prefix: opts.alias ?? "type"
        };
    }
    parseOwnDefinitionFormat(def, ctx) {
        const isScopeAlias = ctx.alias && ctx.alias in this.aliases;
        // if the definition being parsed is not a scope alias and is not a
        // generic instantiation (i.e. opts don't include args), add `this` as a resolution.
        // if we're parsing a nested string, ctx.args will have already been set
        if (!isScopeAlias && !ctx.args) ctx.args = {
            this: ctx.id
        };
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$definition$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseInnerDefinition"])(def, ctx);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(result)) {
            if (result[1] === "=") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$ast$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shallowDefaultableMessage"]);
            if (result[1] === "?") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$parser$2f$ast$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shallowOptionalMessage"]);
        }
        return result;
    }
    unit = (value)=>this.units([
            value
        ]);
    valueOf = (tsEnum)=>this.units((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enumValues"])(tsEnum));
    enumerated = (...values)=>this.units(values);
    instanceOf = (ctor)=>this.node("proto", {
            proto: ctor
        }, {
            prereduced: true
        });
    or = (...defs)=>this.schema(defs.map((def)=>this.parse(def)));
    and = (...defs)=>defs.reduce((node, def)=>node.and(this.parse(def)), this.intrinsic.unknown);
    merge = (...defs)=>defs.reduce((node, def)=>node.merge(this.parse(def)), this.intrinsic.object);
    pipe = (...morphs)=>this.intrinsic.unknown.pipe(...morphs);
    fn = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$fn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InternalFnParser"](this);
    match = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$match$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InternalMatchParser"](this);
    declare = ()=>({
            type: this.type
        });
    define(def) {
        return def;
    }
    type = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$type$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InternalTypeParser"](this);
    static scope = (def, config = {})=>new InternalScope(def, config);
    static module = (def, config = {})=>InternalScope.scope(def, config).export();
}
const scope = Object.assign(InternalScope.scope, {
    define: (def)=>def
});
const Scope = InternalScope;
}),
"[project]/newServer/notesphere_server/node_modules/arktype/out/type.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InternalTypeParser",
    ()=>InternalTypeParser,
    "Type",
    ()=>Type
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/shared/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/roots/root.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$generic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/schema/out/generic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/functions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$hkt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/hkt.js [app-route] (ecmascript)");
;
;
class InternalTypeParser extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callable"] {
    constructor($){
        const attach = Object.assign({
            errors: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$shared$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ArkErrors"],
            hkt: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$hkt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Hkt"],
            $: $,
            raw: $.parse,
            module: $.constructor.module,
            scope: $.constructor.scope,
            declare: $.declare,
            define: $.define,
            match: $.match,
            generic: $.generic,
            schema: $.schema,
            // this won't be defined during bootstrapping, but externally always will be
            keywords: $.ambient,
            unit: $.unit,
            enumerated: $.enumerated,
            instanceOf: $.instanceOf,
            valueOf: $.valueOf,
            or: $.or,
            and: $.and,
            merge: $.merge,
            pipe: $.pipe,
            fn: $.fn
        }, // also won't be defined during bootstrapping
        $.ambientAttachments);
        super((...args)=>{
            if (args.length === 1) {
                // treat as a simple definition
                return $.parse(args[0]);
            }
            if (args.length === 2 && typeof args[0] === "string" && args[0][0] === "<" && args[0][args[0].length - 1] === ">") {
                // if there are exactly two args, the first of which looks like <${string}>,
                // treat as a generic
                const paramString = args[0].slice(1, -1);
                const params = $.parseGenericParams(paramString, {});
                return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$generic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericRoot"](params, args[1], $, $, null);
            }
            // otherwise, treat as a tuple expression. technically, this also allows
            // non-expression tuple definitions to be parsed, but it's not a supported
            // part of the API as specified by the associated types
            return $.parse(args);
        }, {
            attach
        });
    }
}
const Type = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$schema$2f$out$2f$roots$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseRoot"];
}),
];})()

//# sourceMappingURL=1676_arktype_out_1qxi-raf3ql06._.js.map