module.exports = [
(()=>{"use strict";return[
"[externals]/pg [external] (pg, esm_import, [project]/newServer/notesphere_server/node_modules/pg)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("pg-82f28c56c2f5788f");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Extracts duplicated elements and their indices from an array, returning them.
 *
 * Note that given `a === b && b === c`, then `c === a` must be `true` for this to give accurate results.
 *
 * @param arr The array to extract duplicate elements from.
 */ __turbopack_context__.s([
    "ReadonlyArray",
    ()=>ReadonlyArray,
    "append",
    ()=>append,
    "appendUnique",
    ()=>appendUnique,
    "arrayEquals",
    ()=>arrayEquals,
    "conflatenate",
    ()=>conflatenate,
    "conflatenateAll",
    ()=>conflatenateAll,
    "getDuplicatesOf",
    ()=>getDuplicatesOf,
    "getPath",
    ()=>getPath,
    "groupBy",
    ()=>groupBy,
    "includes",
    ()=>includes,
    "intersectUniqueLists",
    ()=>intersectUniqueLists,
    "join",
    ()=>join,
    "liftArray",
    ()=>liftArray,
    "range",
    ()=>range,
    "spliterate",
    ()=>spliterate
]);
const getDuplicatesOf = (arr, opts)=>{
    const isEqual = opts?.isEqual ?? ((l, r)=>l === r);
    const elementFirstSeenIndx = new Map();
    const duplicates = [];
    for (const [indx, element] of arr.entries()){
        const duplicatesIndx = duplicates.findIndex((duplicate)=>isEqual(duplicate.element, element));
        if (duplicatesIndx !== -1) {
            // This is at least the third occurrence of an item equal to `element`,
            // so add this index to the list of indices where the element is duplicated.
            duplicates[duplicatesIndx].indices.push(indx);
            continue;
        }
        // At this point, we know this is either the first
        // or second occurrence of an item equal to `element`...
        let found = false;
        for (const [existingElement, firstSeenIndx] of elementFirstSeenIndx){
            if (isEqual(element, existingElement)) {
                // This is the second occurrence of an item equal to `element`,
                // so store it as a duplicate.
                found = true;
                duplicates.push({
                    element: existingElement,
                    indices: [
                        firstSeenIndx,
                        indx
                    ]
                });
            }
        }
        if (!found) {
            // We haven't seen this element before,
            // so just store the index it was first seen
            elementFirstSeenIndx.set(element, indx);
        }
    }
    return duplicates;
};
const join = (segments, delimiter)=>segments.join(delimiter);
const getPath = (root, path)=>{
    let result = root;
    for (const segment of path){
        if (typeof result !== "object" || result === null) return undefined;
        result = result[segment];
    }
    return result;
};
const intersectUniqueLists = (l, r)=>{
    const intersection = [
        ...l
    ];
    for (const item of r)if (!l.includes(item)) intersection.push(item);
    return intersection;
};
const liftArray = (data)=>Array.isArray(data) ? data : [
        data
    ];
const spliterate = (arr, predicate)=>{
    const result = [
        [],
        []
    ];
    for (const item of arr){
        if (predicate(item)) result[0].push(item);
        else result[1].push(item);
    }
    return result;
};
const ReadonlyArray = Array;
const includes = (array, element)=>array.includes(element);
const range = (length, offset = 0)=>[
        ...new Array(length)
    ].map((_, i)=>i + offset);
const append = (to, value, opts)=>{
    if (to === undefined) {
        return value === undefined ? [] : Array.isArray(value) ? value : [
            value
        ];
    }
    if (opts?.prepend) {
        if (Array.isArray(value)) to.unshift(...value);
        else to.unshift(value);
    } else {
        if (Array.isArray(value)) to.push(...value);
        else to.push(value);
    }
    return to;
};
const conflatenate = (to, elementOrList)=>{
    if (elementOrList === undefined || elementOrList === null) return to ?? [];
    if (to === undefined || to === null) return liftArray(elementOrList);
    return to.concat(elementOrList);
};
const conflatenateAll = (...elementsOrLists)=>elementsOrLists.reduce(conflatenate, []);
const appendUnique = (to, value, opts)=>{
    if (to === undefined) return Array.isArray(value) ? value : [
        value
    ];
    const isEqual = opts?.isEqual ?? ((l, r)=>l === r);
    for (const v of liftArray(value))if (!to.some((existing)=>isEqual(existing, v))) to.push(v);
    return to;
};
const groupBy = (array, discriminant)=>array.reduce((result, item)=>{
        const key = item[discriminant];
        result[key] = append(result[key], item);
        return result;
    }, {});
const arrayEquals = (l, r, opts)=>l.length === r.length && l.every(opts?.isEqual ? (lItem, i)=>opts.isEqual(lItem, r[i]) : (lItem, i)=>lItem === r[i]);
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/clone.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deepClone",
    ()=>deepClone,
    "shallowClone",
    ()=>shallowClone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
;
const shallowClone = (input)=>_clone(input, null);
const deepClone = (input)=>_clone(input, new Map());
const _clone = (input, seen)=>{
    if (typeof input !== "object" || input === null) return input;
    if (seen?.has(input)) return seen.get(input);
    const builtinConstructorName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBuiltinNameOfConstructor"])(input.constructor);
    if (builtinConstructorName === "Date") return new Date(input.getTime());
    // we don't try and clone other prototypes here since this we can't guarantee arrow functions attached to the object
    // are rebound in case they reference `this` (see https://x.com/colinhacks/status/1818422039210049985)
    if (builtinConstructorName && builtinConstructorName !== "Array") return input;
    const cloned = Array.isArray(input) ? input.slice() : Object.create(Object.getPrototypeOf(input));
    const propertyDescriptors = Object.getOwnPropertyDescriptors(input);
    if (seen) {
        seen.set(input, cloned);
        for(const k in propertyDescriptors){
            const desc = propertyDescriptors[k];
            if ("get" in desc || "set" in desc) continue;
            desc.value = _clone(desc.value, seen);
        }
    }
    Object.defineProperties(cloned, propertyDescriptors);
    return cloned;
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "domainDescriptions",
    ()=>domainDescriptions,
    "domainOf",
    ()=>domainOf,
    "hasDomain",
    ()=>hasDomain,
    "jsTypeOfDescriptions",
    ()=>jsTypeOfDescriptions
]);
const hasDomain = (data, kind)=>domainOf(data) === kind;
const domainOf = (data)=>{
    const builtinType = typeof data;
    return builtinType === "object" ? data === null ? "null" : "object" : builtinType === "function" ? "object" : builtinType;
};
const domainDescriptions = {
    boolean: "boolean",
    null: "null",
    undefined: "undefined",
    bigint: "a bigint",
    number: "a number",
    object: "an object",
    string: "a string",
    symbol: "a symbol"
};
const jsTypeOfDescriptions = {
    ...domainDescriptions,
    function: "a function"
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InternalArktypeError",
    ()=>InternalArktypeError,
    "ParseError",
    ()=>ParseError,
    "ZeroWidthSpace",
    ()=>ZeroWidthSpace,
    "noSuggest",
    ()=>noSuggest,
    "throwError",
    ()=>throwError,
    "throwInternalError",
    ()=>throwInternalError,
    "throwParseError",
    ()=>throwParseError
]);
class InternalArktypeError extends Error {
}
const throwInternalError = (message)=>throwError(message, InternalArktypeError);
const throwError = (message, ctor = Error)=>{
    throw new ctor(message);
};
class ParseError extends Error {
    name = "ParseError";
}
const throwParseError = (message)=>throwError(message, ParseError);
const noSuggest = (s)=>` ${s}`;
const ZeroWidthSpace = "\u{200B}";
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flatMorph",
    ()=>flatMorph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
;
const flatMorph = (o, flatMapEntry)=>{
    const result = {};
    const inputIsArray = Array.isArray(o);
    let outputShouldBeArray = false;
    for (const [i, entry] of Object.entries(o).entries()){
        const mapped = inputIsArray ? flatMapEntry(i, entry[1]) : flatMapEntry(...entry, i);
        outputShouldBeArray ||= typeof mapped[0] === "number";
        const flattenedEntries = Array.isArray(mapped[0]) || mapped.length === 0 ? // if we have an empty array (for filtering) or an array with
        // another array as its first element, treat it as a list
        mapped : [
            mapped
        ];
        for (const [k, v] of flattenedEntries){
            if (typeof k === "object") result[k.group] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])(result[k.group], v);
            else result[k] = v;
        }
    }
    return outputShouldBeArray ? Object.values(result) : result;
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/functions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Callable",
    ()=>Callable,
    "DynamicFunction",
    ()=>DynamicFunction,
    "cached",
    ()=>cached,
    "envHasCsp",
    ()=>envHasCsp,
    "isThunk",
    ()=>isThunk,
    "tryCatch",
    ()=>tryCatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
;
;
const cached = (thunk)=>{
    let result = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unset"];
    return ()=>result === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unset"] ? result = thunk() : result;
};
const isThunk = (value)=>typeof value === "function" && value.length === 0;
const tryCatch = (fn, onError)=>{
    try {
        return fn();
    } catch (e) {
        return onError?.(e);
    }
};
const DynamicFunction = class extends Function {
    constructor(...args){
        const params = args.slice(0, -1);
        const body = args[args.length - 1];
        try {
            super(...params, body);
        } catch (e) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Encountered an unexpected error while compiling your definition:
                Message: ${e} 
                Source: (${args.slice(0, -1)}) => {
                    ${args[args.length - 1]}
                }`);
        }
    }
};
class Callable {
    constructor(fn, ...[opts]){
        return Object.assign(Object.setPrototypeOf(fn.bind(opts?.bind ?? this), this.constructor.prototype), opts?.attach);
    }
}
const envHasCsp = cached(()=>{
    try {
        return new Function("return false")();
    } catch  {
        return true;
    }
});
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/generics.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brand",
    ()=>brand,
    "inferred",
    ()=>inferred,
    "narrow",
    ()=>narrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
;
const brand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["noSuggest"])("brand");
const narrow = (t)=>t;
const inferred = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["noSuggest"])("arkInferred");
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/hkt.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hkt",
    ()=>Hkt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
;
const args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["noSuggest"])("args");
class Hkt {
    constructor(){}
}
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$clone$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/clone.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/functions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$generics$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/generics.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$hkt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/hkt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$numbers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/numbers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/path.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$scanner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/scanner.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$traits$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/traits.js [app-route] (ecmascript)");
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
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/isomorphic.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isomorphic",
    ()=>isomorphic
]);
// based on the util of the same name in @ark/fs
// isolated here for use with registry
/** get a CJS/ESM compatible string representing the current file */ const fileName = ()=>{
    try {
        const error = new Error();
        const stackLine = error.stack?.split("\n")[2]?.trim() || ""; // [1]=this func, [2]=caller
        const filePath = stackLine.match(/\(?(.+?)(?::\d+:\d+)?\)?$/)?.[1] || "unknown";
        return filePath.replace(/^file:\/\//, "");
    } catch  {
        return "unknown";
    }
};
const env = globalThis.process?.env ?? {};
const isomorphic = {
    fileName,
    env
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/numbers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "integerLikeMatcher",
    ()=>integerLikeMatcher,
    "isNumericString",
    ()=>isNumericString,
    "isWellFormedInteger",
    ()=>isWellFormedInteger,
    "isWellFormedNumber",
    ()=>isWellFormedNumber,
    "nearestFloat",
    ()=>nearestFloat,
    "numberLikeMatcher",
    ()=>numberLikeMatcher,
    "numericStringMatcher",
    ()=>numericStringMatcher,
    "tryParseInteger",
    ()=>tryParseInteger,
    "tryParseNumber",
    ()=>tryParseNumber,
    "tryParseWellFormedBigint",
    ()=>tryParseWellFormedBigint,
    "tryParseWellFormedNumber",
    ()=>tryParseWellFormedNumber,
    "wellFormedIntegerMatcher",
    ()=>wellFormedIntegerMatcher,
    "wellFormedNumberMatcher",
    ()=>wellFormedNumberMatcher,
    "writeMalformedNumericLiteralMessage",
    ()=>writeMalformedNumericLiteralMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/strings.js [app-route] (ecmascript)");
;
;
/*
 * The goal of the number literal and bigint literal regular expressions is to:
 *
 *   1. Ensure definitions form a bijection with the values they represent.
 *   2. Attempt to mirror TypeScript's own format for stringification of numeric
 *      values such that the regex should match a given definition if any only if
 *      a precise literal type will be inferred (in TS4.8+).
 */ const anchoredNegativeZeroPattern = /^-0\.?0*$/.source;
const positiveIntegerPattern = /[1-9]\d*/.source;
const looseDecimalPattern = /\.\d+/.source;
const strictDecimalPattern = /\.\d*[1-9]/.source;
const createNumberMatcher = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["anchoredRegex"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RegexPatterns"].negativeLookahead(anchoredNegativeZeroPattern) + __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RegexPatterns"].nonCapturingGroup("-?" + __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RegexPatterns"].nonCapturingGroup(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RegexPatterns"].nonCapturingGroup("0|" + positiveIntegerPattern) + __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RegexPatterns"].nonCapturingGroup(opts.decimalPattern) + "?") + (opts.allowDecimalOnly ? "|" + opts.decimalPattern + "?" : "")));
const wellFormedNumberMatcher = createNumberMatcher({
    decimalPattern: strictDecimalPattern,
    allowDecimalOnly: false
});
const isWellFormedNumber = wellFormedNumberMatcher.test.bind(wellFormedNumberMatcher);
const numericStringMatcher = createNumberMatcher({
    decimalPattern: looseDecimalPattern,
    allowDecimalOnly: true
});
const isNumericString = numericStringMatcher.test.bind(numericStringMatcher);
const numberLikeMatcher = /^-?\d*\.?\d*$/;
const isNumberLike = (s)=>s.length !== 0 && numberLikeMatcher.test(s);
const wellFormedIntegerMatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["anchoredRegex"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RegexPatterns"].negativeLookahead("^-0$") + "-?" + __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RegexPatterns"].nonCapturingGroup(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RegexPatterns"].nonCapturingGroup("0|" + positiveIntegerPattern)));
const isWellFormedInteger = wellFormedIntegerMatcher.test.bind(wellFormedIntegerMatcher);
const integerLikeMatcher = /^-?\d+$/;
const isIntegerLike = integerLikeMatcher.test.bind(integerLikeMatcher);
const numericLiteralDescriptions = {
    number: "a number",
    bigint: "a bigint",
    integer: "an integer"
};
const writeMalformedNumericLiteralMessage = (def, kind)=>`'${def}' was parsed as ${numericLiteralDescriptions[kind]} but could not be narrowed to a literal value. Avoid unnecessary leading or trailing zeros and other abnormal notation`;
const isWellFormed = (def, kind)=>kind === "number" ? isWellFormedNumber(def) : isWellFormedInteger(def);
const parseKind = (def, kind)=>kind === "number" ? Number(def) : Number.parseInt(def);
const isKindLike = (def, kind)=>kind === "number" ? isNumberLike(def) : isIntegerLike(def);
const tryParseNumber = (token, options)=>parseNumeric(token, "number", options);
const tryParseWellFormedNumber = (token, options)=>parseNumeric(token, "number", {
        ...options,
        strict: true
    });
const tryParseInteger = (token, options)=>parseNumeric(token, "integer", options);
const parseNumeric = (token, kind, options)=>{
    const value = parseKind(token, kind);
    if (!Number.isNaN(value)) {
        if (isKindLike(token, kind)) {
            if (options?.strict) {
                return isWellFormed(token, kind) ? value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeMalformedNumericLiteralMessage(token, kind));
            }
            return value;
        }
    }
    return options?.errorOnFail ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(options?.errorOnFail === true ? `Failed to parse ${numericLiteralDescriptions[kind]} from '${token}'` : options?.errorOnFail) : undefined;
};
const tryParseWellFormedBigint = (def)=>{
    if (def[def.length - 1] !== "n") return;
    const maybeIntegerLiteral = def.slice(0, -1);
    let value;
    try {
        value = BigInt(maybeIntegerLiteral);
    } catch  {
        return;
    }
    if (wellFormedIntegerMatcher.test(maybeIntegerLiteral)) return value;
    if (integerLikeMatcher.test(maybeIntegerLiteral)) {
        // If the definition looks like a bigint but is
        // not well-formed, throw.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(writeMalformedNumericLiteralMessage(def, "bigint"));
    }
};
const nearestFloat = (n, direction = "+")=>{
    const buffer = new ArrayBuffer(8);
    const f64 = new Float64Array(buffer);
    const u32 = new Uint32Array(buffer);
    f64[0] = n;
    if (n === 0) {
        u32[0] = 1;
        u32[1] = direction === "-" ? 1 << 31 : 0;
    } else if (n > 0 && direction === "+" || n < 0 && direction === "-") {
        if (u32[0]++ === 0xffffffff) u32[1]++;
    } else if (u32[0]-- === 0) u32[1]--;
    return f64[0];
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileConstructor",
    ()=>FileConstructor,
    "ancestorsOf",
    ()=>ancestorsOf,
    "builtinConstructors",
    ()=>builtinConstructors,
    "constructorExtends",
    ()=>constructorExtends,
    "ecmascriptConstructors",
    ()=>ecmascriptConstructors,
    "ecmascriptDescriptions",
    ()=>ecmascriptDescriptions,
    "getBuiltinNameOfConstructor",
    ()=>getBuiltinNameOfConstructor,
    "hasObjectKind",
    ()=>hasObjectKind,
    "isArray",
    ()=>isArray,
    "objectKindDescriptions",
    ()=>objectKindDescriptions,
    "objectKindOf",
    ()=>objectKindOf,
    "objectKindOrDomainOf",
    ()=>objectKindOrDomainOf,
    "platformConstructors",
    ()=>platformConstructors,
    "platformDescriptions",
    ()=>platformDescriptions,
    "typedArrayConstructors",
    ()=>typedArrayConstructors,
    "typedArrayDescriptions",
    ()=>typedArrayDescriptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
;
;
const ecmascriptConstructors = {
    Array,
    Boolean,
    Date,
    Error,
    Function,
    Map,
    Number,
    Promise,
    RegExp,
    Set,
    String,
    WeakMap,
    WeakSet
};
const FileConstructor = globalThis.File ?? Blob;
const platformConstructors = {
    ArrayBuffer,
    Blob,
    File: FileConstructor,
    FormData,
    Headers,
    Request,
    Response,
    URL
};
const typedArrayConstructors = {
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    BigInt64Array,
    BigUint64Array
};
const builtinConstructors = {
    ...ecmascriptConstructors,
    ...platformConstructors,
    ...typedArrayConstructors,
    String,
    Number,
    Boolean
};
const objectKindOf = (data)=>{
    // Realm-safe: cross-window/vm arrays fail `instanceof Array` but pass
    // Array.isArray (https://github.com/arktypeio/arktype/issues/1597).
    if (Array.isArray(data)) return "Array";
    let prototype = Object.getPrototypeOf(data);
    while(prototype?.constructor && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isKeyOf"])(prototype.constructor.name, builtinConstructors) || !(data instanceof builtinConstructors[prototype.constructor.name])))prototype = Object.getPrototypeOf(prototype);
    const name = prototype?.constructor?.name;
    if (name === undefined || name === "Object") return undefined;
    return name;
};
const objectKindOrDomainOf = (data)=>typeof data === "object" && data !== null ? objectKindOf(data) ?? "object" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainOf"])(data);
const hasObjectKind = (data, kind)=>objectKindOf(data) === kind;
const isArray = Array.isArray;
const ecmascriptDescriptions = {
    Array: "an array",
    Function: "a function",
    Date: "a Date",
    RegExp: "a RegExp",
    Error: "an Error",
    Map: "a Map",
    Set: "a Set",
    String: "a String object",
    Number: "a Number object",
    Boolean: "a Boolean object",
    Promise: "a Promise",
    WeakMap: "a WeakMap",
    WeakSet: "a WeakSet"
};
const platformDescriptions = {
    ArrayBuffer: "an ArrayBuffer instance",
    Blob: "a Blob instance",
    File: "a File instance",
    FormData: "a FormData instance",
    Headers: "a Headers instance",
    Request: "a Request instance",
    Response: "a Response instance",
    URL: "a URL instance"
};
const typedArrayDescriptions = {
    Int8Array: "an Int8Array",
    Uint8Array: "a Uint8Array",
    Uint8ClampedArray: "a Uint8ClampedArray",
    Int16Array: "an Int16Array",
    Uint16Array: "a Uint16Array",
    Int32Array: "an Int32Array",
    Uint32Array: "a Uint32Array",
    Float32Array: "a Float32Array",
    Float64Array: "a Float64Array",
    BigInt64Array: "a BigInt64Array",
    BigUint64Array: "a BigUint64Array"
};
const objectKindDescriptions = {
    ...ecmascriptDescriptions,
    ...platformDescriptions,
    ...typedArrayDescriptions
};
const getBuiltinNameOfConstructor = (ctor)=>{
    const constructorName = Object(ctor).name ?? null;
    return constructorName && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isKeyOf"])(constructorName, builtinConstructors) && builtinConstructors[constructorName] === ctor ? constructorName : null;
};
const ancestorsOf = (o)=>{
    let proto = Object.getPrototypeOf(o);
    const result = [];
    while(proto !== null){
        result.push(proto.constructor);
        proto = Object.getPrototypeOf(proto);
    }
    return result;
};
const constructorExtends = (ctor, base)=>{
    let current = ctor.prototype;
    while(current !== null){
        if (current === base.prototype) return true;
        current = Object.getPrototypeOf(current);
    }
    return false;
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/path.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadonlyPath",
    ()=>ReadonlyPath,
    "appendStringifiedKey",
    ()=>appendStringifiedKey,
    "stringifyPath",
    ()=>stringifyPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/arrays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/registry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)");
;
;
;
;
const appendStringifiedKey = (path, prop, ...[opts])=>{
    const stringifySymbol = opts?.stringifySymbol ?? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"];
    let propAccessChain = path;
    switch(typeof prop){
        case "string":
            propAccessChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDotAccessible"])(prop) ? path === "" ? prop : `${path}.${prop}` : `${path}[${JSON.stringify(prop)}]`;
            break;
        case "number":
            propAccessChain = `${path}[${prop}]`;
            break;
        case "symbol":
            propAccessChain = `${path}[${stringifySymbol(prop)}]`;
            break;
        default:
            if (opts?.stringifyNonKey) propAccessChain = `${path}[${opts.stringifyNonKey(prop)}]`;
            else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwParseError"])(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(prop)} must be a PropertyKey or stringifyNonKey must be passed to options`);
            }
    }
    return propAccessChain;
};
const stringifyPath = (path, ...opts)=>path.reduce((s, k)=>appendStringifiedKey(s, k, ...opts), "");
class ReadonlyPath extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReadonlyArray"] {
    // alternate strategy for caching since the base object is frozen
    cache = {};
    constructor(...items){
        super();
        this.push(...items);
    }
    toJSON() {
        if (this.cache.json) return this.cache.json;
        this.cache.json = [];
        for(let i = 0; i < this.length; i++){
            this.cache.json.push(typeof this[i] === "symbol" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printable"])(this[i]) : this[i]);
        }
        return this.cache.json;
    }
    stringify() {
        if (this.cache.stringify) return this.cache.stringify;
        return this.cache.stringify = stringifyPath(this);
    }
    stringifyAncestors() {
        if (this.cache.stringifyAncestors) return this.cache.stringifyAncestors;
        let propString = "";
        const result = [
            propString
        ];
        for (const path of this){
            propString = appendStringifiedKey(propString, path);
            result.push(propString);
        }
        return this.cache.stringifyAncestors = result;
    }
}
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/primitive.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializePrimitive",
    ()=>serializePrimitive
]);
const serializePrimitive = (value)=>typeof value === "string" ? JSON.stringify(value) : typeof value === "bigint" ? `${value}n` : `${value}`;
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CastableBase",
    ()=>CastableBase,
    "DynamicBase",
    ()=>DynamicBase,
    "InnerDynamicBase",
    ()=>InnerDynamicBase,
    "NoopBase",
    ()=>NoopBase,
    "defineProperties",
    ()=>defineProperties,
    "entriesOf",
    ()=>entriesOf,
    "enumValues",
    ()=>enumValues,
    "fromEntries",
    ()=>fromEntries,
    "hasDefinedKey",
    ()=>hasDefinedKey,
    "hasKey",
    ()=>hasKey,
    "invert",
    ()=>invert,
    "isEmptyObject",
    ()=>isEmptyObject,
    "isKeyOf",
    ()=>isKeyOf,
    "keysOf",
    ()=>keysOf,
    "omit",
    ()=>omit,
    "pick",
    ()=>pick,
    "splitByKeys",
    ()=>splitByKeys,
    "stringAndSymbolicEntriesOf",
    ()=>stringAndSymbolicEntriesOf,
    "unset",
    ()=>unset,
    "withAlphabetizedKeys",
    ()=>withAlphabetizedKeys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/flatMorph.js [app-route] (ecmascript)");
;
;
const entriesOf = Object.entries;
const fromEntries = (entries)=>Object.fromEntries(entries);
const keysOf = (o)=>Object.keys(o);
const isKeyOf = (k, o)=>k in o;
const hasKey = (o, k)=>k in o;
const hasDefinedKey = (o, k)=>o[k] !== undefined;
const InnerDynamicBase = class {
};
class DynamicBase {
    constructor(properties){
        Object.assign(this, properties);
    }
}
const NoopBase = class {
};
class CastableBase extends NoopBase {
}
const splitByKeys = (o, leftKeys)=>{
    const l = {};
    const r = {};
    let k;
    for(k in o){
        if (k in leftKeys) l[k] = o[k];
        else r[k] = o[k];
    }
    return [
        l,
        r
    ];
};
const pick = (o, keys)=>splitByKeys(o, keys)[0];
const omit = (o, keys)=>splitByKeys(o, keys)[1];
const isEmptyObject = (o)=>Object.keys(o).length === 0;
const stringAndSymbolicEntriesOf = (o)=>[
        ...Object.entries(o),
        ...Object.getOwnPropertySymbols(o).map((k)=>[
                k,
                o[k]
            ])
    ];
const defineProperties = (base, merged)=>// declared like this to avoid https://github.com/microsoft/TypeScript/issues/55049
    Object.defineProperties(base, Object.getOwnPropertyDescriptors(merged));
const withAlphabetizedKeys = (o)=>{
    const keys = Object.keys(o).sort();
    const result = {};
    for(let i = 0; i < keys.length; i++)result[keys[i]] = o[keys[i]];
    return result;
};
const invert = (t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flatMorph"])(t, (k, v)=>[
            v,
            k
        ]);
const unset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["noSuggest"])(`unset${__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZeroWidthSpace"]}`);
const enumValues = (tsEnum)=>Object.values(tsEnum).filter((v)=>{
        if (typeof v === "number") return true;
        return typeof tsEnum[v] !== "number";
    });
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/registry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arkUtilVersion",
    ()=>arkUtilVersion,
    "initialRegistryContents",
    ()=>initialRegistryContents,
    "isDotAccessible",
    ()=>isDotAccessible,
    "register",
    ()=>register,
    "registry",
    ()=>registry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$isomorphic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/isomorphic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
;
;
;
;
const arkUtilVersion = "0.56.8";
const initialRegistryContents = {
    version: arkUtilVersion,
    filename: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$isomorphic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isomorphic"].fileName(),
    FileConstructor: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FileConstructor"]
};
const registry = initialRegistryContents;
const namesByResolution = new Map();
const nameCounts = Object.create(null);
const register = (value)=>{
    const existingName = namesByResolution.get(value);
    if (existingName) return existingName;
    let name = baseNameFor(value);
    if (nameCounts[name]) name = `${name}${nameCounts[name]++}`;
    else nameCounts[name] = 1;
    registry[name] = value;
    namesByResolution.set(value, name);
    return name;
};
const isDotAccessible = (keyName)=>/^[$A-Z_a-z][\w$]*$/.test(keyName);
const baseNameFor = (value)=>{
    switch(typeof value){
        case "object":
            {
                if (value === null) break;
                const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectKindOf"])(value) ?? "object";
                // convert to camelCase
                return prefix[0].toLowerCase() + prefix.slice(1);
            }
        case "function":
            return isDotAccessible(value.name) ? value.name : "fn";
        case "symbol":
            return value.description && isDotAccessible(value.description) ? value.description : "symbol";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected attempt to register serializable value of type ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainOf"])(value)}`);
};
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/scanner.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scanner",
    ()=>Scanner,
    "writeUnclosedGroupMessage",
    ()=>writeUnclosedGroupMessage,
    "writeUnmatchedGroupCloseMessage",
    ()=>writeUnmatchedGroupCloseMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/strings.js [app-route] (ecmascript)");
;
class Scanner {
    chars;
    i;
    def;
    constructor(def){
        this.def = def;
        this.chars = [
            ...def
        ];
        this.i = 0;
    }
    /** Get lookahead and advance scanner by one */ shift() {
        return this.chars[this.i++] ?? "";
    }
    get lookahead() {
        return this.chars[this.i] ?? "";
    }
    get nextLookahead() {
        return this.chars[this.i + 1] ?? "";
    }
    get length() {
        return this.chars.length;
    }
    shiftUntil(condition) {
        let shifted = "";
        while(this.lookahead){
            if (condition(this, shifted)) break;
            else shifted += this.shift();
        }
        return shifted;
    }
    shiftUntilEscapable(condition, escapeEscape = "") {
        let shifted = "";
        while(this.lookahead){
            if (this.lookahead === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Backslash"]) {
                this.shift();
                if (condition(this, shifted)) shifted += this.shift();
                else if (this.lookahead === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Backslash"]) shifted += `${escapeEscape}${this.shift()}`;
                else shifted += `${__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Backslash"]}${this.shift()}`;
            } else if (condition(this, shifted)) break;
            else shifted += this.shift();
        }
        return shifted;
    }
    shiftUntilLookahead(charOrSet) {
        return typeof charOrSet === "string" ? this.shiftUntil((s)=>s.lookahead === charOrSet) : this.shiftUntil((s)=>s.lookahead in charOrSet);
    }
    shiftUntilNonWhitespace() {
        return this.shiftUntil(()=>!(this.lookahead in __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["whitespaceChars"]));
    }
    jumpToIndex(i) {
        this.i = i < 0 ? this.length + i : i;
    }
    jumpForward(count) {
        this.i += count;
    }
    get location() {
        return this.i;
    }
    get unscanned() {
        return this.chars.slice(this.i, this.length).join("");
    }
    get scanned() {
        return this.chars.slice(0, this.i).join("");
    }
    sliceChars(start, end) {
        return this.chars.slice(start, end).join("");
    }
    lookaheadIs(char) {
        return this.lookahead === char;
    }
    lookaheadIsIn(tokens) {
        return this.lookahead in tokens;
    }
}
const writeUnmatchedGroupCloseMessage = (char, unscanned)=>`Unmatched ${char}${unscanned === "" ? "" : ` before ${unscanned}`}`;
const writeUnclosedGroupMessage = (missingChar)=>`Missing ${missingChar}`;
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/serialize.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "describeCollapsibleDate",
    ()=>describeCollapsibleDate,
    "print",
    ()=>print,
    "printable",
    ()=>printable,
    "snapshot",
    ()=>snapshot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$primitive$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/primitive.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/registry.js [app-route] (ecmascript)");
;
;
;
;
const snapshot = (data, opts = {})=>_serialize(data, {
        onUndefined: `$ark.undefined`,
        onBigInt: (n)=>`$ark.bigint-${n}`,
        ...opts
    }, []);
const print = (data, opts)=>console.log(printable(data, opts));
const printable = (data, opts)=>{
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainOf"])(data)){
        case "object":
            const o = data;
            const ctorName = o.constructor?.name ?? "Object";
            return ctorName === "Object" || ctorName === "Array" ? opts?.quoteKeys === false ? stringifyUnquoted(o, opts?.indent ?? 0, "") : JSON.stringify(_serialize(o, printableOpts, []), null, opts?.indent).replace(quotedBigIntMarker, "$1") : stringifyUnquoted(o, opts?.indent ?? 0, "");
        case "symbol":
            return printableOpts.onSymbol(data);
        default:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$primitive$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serializePrimitive"])(data);
    }
};
const stringifyUnquoted = (value, indent, currentIndent)=>{
    if (typeof value === "function") return printableOpts.onFunction(value);
    if (typeof value !== "object" || value === null) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$primitive$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serializePrimitive"])(value);
    const nextIndent = currentIndent + " ".repeat(indent);
    if (Array.isArray(value)) {
        if (value.length === 0) return "[]";
        const items = value.map((item)=>stringifyUnquoted(item, indent, nextIndent)).join(",\n" + nextIndent);
        return indent ? `[\n${nextIndent}${items}\n${currentIndent}]` : `[${items}]`;
    }
    const ctorName = value.constructor?.name ?? "Object";
    if (ctorName === "Object") {
        const keyValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringAndSymbolicEntriesOf"])(value).map(([key, val])=>{
            const stringifiedKey = typeof key === "symbol" ? printableOpts.onSymbol(key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDotAccessible"])(key) ? key : JSON.stringify(key);
            const stringifiedValue = stringifyUnquoted(val, indent, nextIndent);
            return `${nextIndent}${stringifiedKey}: ${stringifiedValue}`;
        });
        if (keyValues.length === 0) return "{}";
        return indent ? `{\n${keyValues.join(",\n")}\n${currentIndent}}` : `{${keyValues.join(", ")}}`;
    }
    if (value instanceof Date) return describeCollapsibleDate(value);
    if ("expression" in value && typeof value.expression === "string") return value.expression;
    return ctorName;
};
const printableOpts = {
    onCycle: ()=>"(cycle)",
    onSymbol: (v)=>`Symbol(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["register"])(v)})`,
    onFunction: (v)=>`Function(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["register"])(v)})`,
    // prefix bigints with a marker so printable can strip the quotes
    // JSON.stringify adds, e.g. [1n] rather than ["1n"]
    onBigInt: (n)=>`${bigIntMarker}${n}n`
};
// private use character that JSON.stringify leaves unescaped
const bigIntMarker = "\uE000";
const quotedBigIntMarker = new RegExp(`"${bigIntMarker}(-?\\d+n)"`, "g");
const _serialize = (data, opts, seen)=>{
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["domainOf"])(data)){
        case "object":
            {
                const o = data;
                if ("toJSON" in o && typeof o.toJSON === "function") return o.toJSON();
                if (typeof o === "function") return printableOpts.onFunction(o);
                if (seen.includes(o)) return "(cycle)";
                const nextSeen = [
                    ...seen,
                    o
                ];
                if (Array.isArray(o)) return o.map((item)=>_serialize(item, opts, nextSeen));
                if (o instanceof Date) return o.toDateString();
                const result = {};
                for(const k in o)result[k] = _serialize(o[k], opts, nextSeen);
                for (const s of Object.getOwnPropertySymbols(o)){
                    result[opts.onSymbol?.(s) ?? s.toString()] = _serialize(o[s], opts, nextSeen);
                }
                return result;
            }
        case "symbol":
            return printableOpts.onSymbol(data);
        case "bigint":
            return opts.onBigInt?.(data) ?? `${data}n`;
        case "undefined":
            return opts.onUndefined ?? "undefined";
        case "string":
            return data.replace(/\\/g, "\\\\");
        default:
            return data;
    }
};
const describeCollapsibleDate = (date)=>{
    const year = date.getFullYear();
    const month = date.getMonth();
    const dayOfMonth = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    if (month === 0 && dayOfMonth === 1 && hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 0) return `${year}`;
    const datePortion = `${months[month]} ${dayOfMonth}, ${year}`;
    if (hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 0) return datePortion;
    const h = hours % 12 || 12;
    const suffix = hours < 12 ? " AM" : " PM";
    let timePortion = seconds || milliseconds ? `${h}:${pad(minutes, 2)}:${pad(seconds, 2)}` : `${h}:${pad(minutes, 2)}`;
    if (milliseconds) timePortion += `.${pad(milliseconds, 3)}`;
    return `${timePortion + suffix}, ${datePortion}`;
};
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const pad = (value, length)=>String(value).padStart(length, "0");
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/strings.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Backslash",
    ()=>Backslash,
    "RegexPatterns",
    ()=>RegexPatterns,
    "alphabet",
    ()=>alphabet,
    "anchoredRegex",
    ()=>anchoredRegex,
    "anchoredSource",
    ()=>anchoredSource,
    "capitalize",
    ()=>capitalize,
    "deanchoredRegex",
    ()=>deanchoredRegex,
    "deanchoredSource",
    ()=>deanchoredSource,
    "emojiToUnicode",
    ()=>emojiToUnicode,
    "uncapitalize",
    ()=>uncapitalize,
    "whitespaceChars",
    ()=>whitespaceChars
]);
const capitalize = (s)=>s.length === 0 ? s : s[0].toUpperCase() + s.slice(1);
const uncapitalize = (s)=>s.length === 0 ? s : s[0].toLowerCase() + s.slice(1);
const anchoredRegex = (regex)=>new RegExp(anchoredSource(regex), typeof regex === "string" ? "" : regex.flags);
const deanchoredRegex = (regex)=>new RegExp(deanchoredSource(regex), typeof regex === "string" ? "" : regex.flags);
const anchoredSource = (regex)=>{
    const source = typeof regex === "string" ? regex : regex.source;
    return `^(?:${source})$`;
};
const deanchoredSource = (regex)=>{
    const source = typeof regex === "string" ? regex : regex.source;
    if (source.startsWith("^(?:") && source.endsWith(")$")) return source.slice(4, -2);
    return source.slice(source[0] === "^" ? 1 : 0, source[source.length - 1] === "$" ? -1 : undefined);
};
const RegexPatterns = {
    negativeLookahead: (pattern)=>`(?!${pattern})`,
    nonCapturingGroup: (pattern)=>`(?:${pattern})`
};
const Backslash = "\\";
const whitespaceChars = {
    " ": 1,
    "\n": 1,
    "\t": 1
};
const emojiToUnicode = (emoji)=>emoji.split("").map((char)=>{
        const codePoint = char.codePointAt(0);
        return codePoint ? `\\u${codePoint.toString(16).padStart(4, "0")}` : "";
    }).join("");
const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];
}),
"[project]/newServer/notesphere_server/node_modules/@ark/util/out/traits.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trait",
    ()=>Trait,
    "compose",
    ()=>compose,
    "hasTrait",
    ()=>hasTrait,
    "implement",
    ()=>implement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/domain.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/objectKinds.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@ark/util/out/records.js [app-route] (ecmascript)");
;
;
;
;
// even though the value we attach will be identical, we use this so classes
// won't be treated as instanceof a Trait
const implementedTraits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["noSuggest"])("implementedTraits");
const hasTrait = (traitClass)=>(o)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasDomain"])(o, "object")) return false;
        if (implementedTraits in o.constructor && o.constructor[implementedTraits].includes(traitClass)) return true;
        // emulate standard instanceof behavior
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ancestorsOf"])(o).includes(traitClass);
    };
class Trait extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoopBase"] {
    static get [Symbol.hasInstance]() {
        return hasTrait(this);
    }
    traitsOf() {
        return implementedTraits in this.constructor ? this.constructor[implementedTraits] : [];
    }
}
const collectPrototypeDescriptors = (trait)=>{
    let proto = trait.prototype;
    let result = {};
    do {
        // ensure prototypes are sorted from lowest to highest precedence
        result = Object.assign(Object.getOwnPropertyDescriptors(proto), result);
        proto = Object.getPrototypeOf(proto);
    }while (proto !== Object.prototype && proto !== null)
    return result;
};
const compose = (...traits)=>{
    const base = function(...args) {
        for (const trait of traits){
            const instance = Reflect.construct(trait, args, this.constructor);
            Object.assign(this, instance);
        }
    };
    const flatImplementedTraits = [];
    for (const trait of traits){
        // copy static properties
        Object.assign(base, trait);
        // flatten and copy prototype
        Object.defineProperties(base.prototype, collectPrototypeDescriptors(trait));
        if (implementedTraits in trait) {
            // add any ancestor traits from which the current trait was composed
            for (const innerTrait of trait[implementedTraits]){
                if (!flatImplementedTraits.includes(innerTrait)) flatImplementedTraits.push(innerTrait);
            }
        }
        if (!flatImplementedTraits.includes(trait)) flatImplementedTraits.push(trait);
    }
    Object.defineProperty(base, implementedTraits, {
        value: flatImplementedTraits,
        enumerable: false
    });
    return base;
};
const implement = (...args)=>{
    if (args[args.length - 1] instanceof Trait) return compose(...args);
    const implementation = args[args.length - 1];
    const base = compose(...args.slice(0, -1));
    // copy implementation last since it overrides traits
    Object.defineProperties(base.prototype, Object.getOwnPropertyDescriptors(implementation));
    return base;
};
}),
"[project]/newServer/notesphere_server/node_modules/@noble/hashes/_u64.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "add",
    ()=>add,
    "add3H",
    ()=>add3H,
    "add3L",
    ()=>add3L,
    "add4H",
    ()=>add4H,
    "add4L",
    ()=>add4L,
    "add5H",
    ()=>add5H,
    "add5L",
    ()=>add5L,
    "fromBig",
    ()=>fromBig,
    "fromNumH",
    ()=>fromNumH,
    "fromNumL",
    ()=>fromNumL,
    "rotr32H",
    ()=>rotr32H,
    "rotr32L",
    ()=>rotr32L,
    "rotrBH",
    ()=>rotrBH,
    "rotrBL",
    ()=>rotrBL,
    "rotrSH",
    ()=>rotrSH,
    "rotrSL",
    ()=>rotrSL,
    "setU64FromNum",
    ()=>setU64FromNum,
    "shrSH",
    ()=>shrSH,
    "shrSL",
    ()=>shrSL,
    "split",
    ()=>split,
    "toBig",
    ()=>toBig
]);
const U32_MASK64 = /* @__PURE__ */ (()=>BigInt(2 ** 32 - 1))();
const _32n = /* @__PURE__ */ BigInt(32);
// Split bigint into two 32-bit halves. With `le=true`, returned fields become `{ h: low, l: high
// }` to match little-endian word order rather than the property names.
function fromBig(n, le = false) {
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
// Split bigint list into `[highWords, lowWords]` when `le=false`; with `le=true`, the first array
// holds the low halves because `fromBig(...)` swaps the semantic meaning of `h` and `l`.
function split(lst, le = false) {
    const len = lst.length;
    let Ah = new Uint32Array(len);
    let Al = new Uint32Array(len);
    for(let i = 0; i < len; i++){
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
// Combine explicit `(high, low)` 32-bit halves into a bigint; `>>> 0` normalizes signed JS
// bitwise results back to uint32 first, and little-endian callers must swap.
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
// Split a JS number into u32 halves without a BigInt allocation. Exact only for integers
// `0 <= n < 2**53`; callers use it on byte / bit counters, which JS length math caps far below
// that (an ArrayBuffer cannot exceed 2**53 - 1 bytes).
const fromNumH = (n)=>n / 2 ** 32 | 0;
const fromNumL = (n)=>n >>> 0;
// Drop-in replacement for `view.setBigUint64(byteOffset, BigInt(n), isLE)` without the per-call
// BigInt allocation. Same `n < 2**53` precondition as `fromNumH`/`fromNumL`.
function setU64FromNum(view, byteOffset, n, isLE) {
    const h = fromNumH(n);
    const l = fromNumL(n);
    view.setUint32(byteOffset, isLE ? l : h, isLE);
    view.setUint32(byteOffset + 4, isLE ? h : l, isLE);
}
// High 32-bit half of a 64-bit logical right shift for `s` in `0..31`.
const shrSH = (h, _l, s)=>h >>> s;
// Low 32-bit half of a 64-bit logical right shift, valid for `s` in `1..31`.
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
// High 32-bit half of a 64-bit right rotate, valid for `s` in `1..31`.
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
// Low 32-bit half of a 64-bit right rotate, valid for `s` in `1..31`.
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
// High 32-bit half of a 64-bit right rotate, valid for `s` in `33..63`; `32` uses `rotr32*`.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
// Low 32-bit half of a 64-bit right rotate, valid for `s` in `33..63`; `32` uses `rotr32*`.
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
// High 32-bit half of a 64-bit right rotate for `s === 32`; this is just the swapped low half.
const rotr32H = (_h, l)=>l;
// Low 32-bit half of a 64-bit right rotate for `s === 32`; this is just the swapped high half.
const rotr32L = (h, _l)=>h;
// 64-bit left rotates (rotl*) are not defined here: sha3.ts, their only consumer, keeps
// local copies so V8 inlines them into keccakP.
// Add two split 64-bit words and return the split `{ h, l }` sum.
// JS uses 32-bit signed integers for bitwise operations, so we cannot simply shift the carry out
// of the low sum and instead use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
// Addition with more than 2 elements
// Unmasked low-word accumulator for 3-way addition; pass the raw result into `add3H(...)`.
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
// High-word finalize step for 3-way addition; `low` must be the untruncated output of `add3L(...)`.
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
// Unmasked low-word accumulator for 4-way addition; pass the raw result into `add4H(...)`.
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
// High-word finalize step for 4-way addition; `low` must be the untruncated output of `add4L(...)`.
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
// Unmasked low-word accumulator for 5-way addition; pass the raw result into `add5H(...)`.
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
// High-word finalize step for 5-way addition; `low` must be the untruncated output of `add5L(...)`.
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
;
}),
"[project]/newServer/notesphere_server/node_modules/@noble/hashes/sha3.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Keccak",
    ()=>Keccak,
    "keccakP",
    ()=>keccakP,
    "keccak_224",
    ()=>keccak_224,
    "keccak_256",
    ()=>keccak_256,
    "keccak_384",
    ()=>keccak_384,
    "keccak_512",
    ()=>keccak_512,
    "sha3_224",
    ()=>sha3_224,
    "sha3_256",
    ()=>sha3_256,
    "sha3_384",
    ()=>sha3_384,
    "sha3_512",
    ()=>sha3_512,
    "shake128",
    ()=>shake128,
    "shake128_32",
    ()=>shake128_32,
    "shake256",
    ()=>shake256,
    "shake256_64",
    ()=>shake256_64
]);
/**
 * SHA3 (keccak) hash function, based on a new "Sponge function" design.
 * Different from older hashes, the internal state is bigger than output size.
 *
 * Check out
 * {@link https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf | FIPS-202},
 * {@link https://keccak.team/keccak.html | Website}, and
 * {@link https://crypto.stackexchange.com/q/15727 | the differences between
 * SHA-3 and Keccak}.
 *
 * Check out `sha3-addons` module for cSHAKE, k12, and others.
 * @module
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@noble/hashes/_u64.js [app-route] (ecmascript)");
// prettier-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@noble/hashes/utils.js [app-route] (ecmascript)");
;
;
// No __PURE__ annotations in sha3 header:
// EVERYTHING is in fact used on every export.
// Various per round constants calculations
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const _7n = BigInt(7);
const _256n = BigInt(256);
// FIPS 202 Algorithm 5 rc(): when the outgoing bit is 1, the 8-bit LFSR xors
// taps 0, 4, 5, and 6, which compresses to the feedback mask `0x71`.
const _0x71n = BigInt(0x71);
const SHA3_PI = [];
const SHA3_ROTL = [];
const _SHA3_IOTA = []; // no pure annotation: var is always used
for(let round = 0, R = _1n, x = 1, y = 0; round < 24; round++){
    // Pi
    [x, y] = [
        y,
        (2 * x + 3 * y) % 5
    ];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    // Iota
    let t = _0n;
    for(let j = 0; j < 7; j++){
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n) t ^= _1n << (_1n << BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
}
const IOTAS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["split"])(_SHA3_IOTA, true);
// `split(..., true)` keeps the local little-endian lane-word layout used by
// `state32`, so these `H` / `L` tables follow the file's first-word /
// second-word lane slots rather than `_u64.ts`'s usual high/low naming.
const SHA3_IOTA_H = IOTAS[0];
const SHA3_IOTA_L = IOTAS[1];
// 64-bit left rotates as u32 pairs. Inlined here (not imported from _u64) so V8 can
// inline them into keccakP — the import path costs ~24% on sha3_256. SHA3 is the only
// consumer of left-rotates; other hashes use right-rotates from _u64.
// Valid for s in 1..31 (SH/SL) and 33..63 (BH/BL); keccak never rotates by 0/32/64.
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
const rotlH = (h, l, s)=>s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s);
const rotlL = (h, l, s)=>s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
// Reused Theta scratch buffer (column parities), same pattern as SHA256_W in sha2.
// keccakP never calls user code, so the shared buffer cannot be observed mid-permutation.
const B = new Uint32Array(5 * 2);
function keccakP(s, rounds = 24) {
    if (!(s instanceof Uint32Array)) throw new TypeError('"s" expected Uint32Array(50), got type=' + typeof s);
    if (s.length !== 50) throw new RangeError('"s" expected Uint32Array(50), got length=' + s.length);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["anumber"])(rounds, 'rounds');
    // This implementation precomputes only the standard Keccak-f[1600] 24-round Iota table.
    if (rounds < 1 || rounds > 24) throw new Error('"rounds" expected integer 1..24');
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for(let round = 24 - rounds; round < 24; round++){
        // Theta θ
        for(let x = 0; x < 10; x++)B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for(let x = 0; x < 10; x += 2){
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for(let y = 0; y < 50; y += 10){
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for(let t = 0; t < 24; t++){
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        // Same as:
        // for (let x = 0; x < 10; x++) B[x] = s[y + x];
        // for (let x = 0; x < 10; x++) s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        for(let y = 0; y < 50; y += 10){
            const b0 = s[y], b1 = s[y + 1], b2 = s[y + 2], b3 = s[y + 3];
            s[y] ^= ~s[y + 2] & s[y + 4];
            s[y + 1] ^= ~s[y + 3] & s[y + 5];
            s[y + 2] ^= ~s[y + 4] & s[y + 6];
            s[y + 3] ^= ~s[y + 5] & s[y + 7];
            s[y + 4] ^= ~s[y + 6] & s[y + 8];
            s[y + 5] ^= ~s[y + 7] & s[y + 9];
            s[y + 6] ^= ~s[y + 8] & b0;
            s[y + 7] ^= ~s[y + 9] & b1;
            s[y + 8] ^= ~b0 & b2;
            s[y + 9] ^= ~b1 & b3;
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clean"])(B);
}
class Keccak {
    state;
    pos = 0;
    posOut = 0;
    finished = false;
    state32;
    destroyed = false;
    blockLen;
    suffix;
    outputLen;
    canXOF;
    enableXOF = false;
    rounds;
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["anumber"])(blockLen, 'blockLen');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["anumber"])(suffix, 'suffix');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["anumber"])(rounds, 'rounds');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["abool"])(enableXOF, 'enableXOF');
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.canXOF = enableXOF;
        this.rounds = rounds;
        // Can be passed from user as dkLen
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["anumber"])(outputLen, 'outputLen');
        // Only keccak-f1600 is supported: 1600 bits (5x5 matrix of 64bit) === 200 bytes of state.
        if (!(0 < blockLen && blockLen < 200)) throw new Error('"blockLen" must be 1..199');
        this.state = new Uint8Array(200);
        this.state32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u32"])(this.state);
    }
    clone() {
        return this._cloneInto();
    }
    keccak() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["swap32IfBE"])(this.state32);
        keccakP(this.state32, this.rounds);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["swap32IfBE"])(this.state32);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["abytes"])(data);
        const { blockLen, state, state32 } = this;
        const len = data.length;
        // Absorb full blocks with u32 XORs when both sides are 4-byte aligned.
        // XOR of same-position words equals XOR of same-position bytes, so this is endianness-safe.
        const canUseU32 = blockLen % 4 === 0 && data.byteOffset % 4 === 0;
        const blockLen32 = blockLen / 4;
        const data32 = canUseU32 && len >= blockLen ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u32"])(data) : undefined;
        for(let pos = 0; pos < len;){
            if (data32 !== undefined && this.pos === 0 && pos % 4 === 0 && len - pos >= blockLen) {
                for(let i = 0, o = pos / 4; i < blockLen32; i++)state32[i] ^= data32[o + i];
                pos += blockLen;
                // Subclasses (_KeccakPRG) read `this.pos` inside their `keccak()` override,
                // so it must reflect the fully-absorbed block before the permutation fires.
                this.pos = blockLen;
                this.keccak();
                continue;
            }
            const take = Math.min(blockLen - this.pos, len - pos);
            for(let i = 0; i < take; i++)state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen) this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished) return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // FIPS 202 appends the SHA3/SHAKE domain-separation suffix before pad10*1.
        // These byte values already include the first padding bit, while the
        // final `0x80` below supplies the closing `1` bit in the last rate byte.
        state[pos] ^= suffix;
        // If that combined suffix lands in the last rate byte and already sets
        // bit 7, absorb it first so the final pad10*1 bit can be xored into a
        // fresh block.
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1) this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aexists"])(this, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["abytes"])(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for(let pos = 0, len = out.length; pos < len;){
            if (this.posOut >= blockLen) this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Plain SHA3/Keccak usage with XOF is probably a mistake, but this base
        // class is also reused by SHAKE/cSHAKE/KMAC/TupleHash/ParallelHash/
        // TurboSHAKE/KangarooTwelve wrappers that intentionally enable XOF.
        if (!this.enableXOF) throw new Error('XOF is not enabled');
        return this.writeInto(out);
    }
    xof(bytes) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["anumber"])(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        if (this.finished) throw new Error('digest() was already called');
        // `aoutput(...)` allows oversized buffers; digestInto() must fill only the advertised digest.
        this.writeInto(out.length === this.outputLen ? out : out.subarray(0, this.outputLen));
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.outputLen);
        this.digestInto(out);
        return out;
    }
    destroy() {
        this.destroyed = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clean"])(this.state);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to ||= new Keccak(blockLen, suffix, outputLen, enableXOF, rounds);
        // Reused destinations can come from a different rate/capacity variant, so clone must rewrite
        // the sponge geometry as well as the state words.
        to.blockLen = blockLen;
        to.state32.set(this.state32);
        // Sponge padding and XOF output are positional, so both offsets are part of the clone state.
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        // Clones must preserve the public capability bit too; `_KMAC` reuses this path and deep clone
        // tests compare instance fields directly, so leaving `canXOF` behind makes the clone lie.
        to.canXOF = this.canXOF;
        to.destroyed = this.destroyed;
        return to;
    }
}
const genKeccak = (suffix, blockLen, outputLen, info = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHasher"])(()=>new Keccak(blockLen, suffix, outputLen), info);
const sha3_224 = /* @__PURE__ */ genKeccak(0x06, 144, 28, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oidNist"])(0x07));
const sha3_256 = /* @__PURE__ */ genKeccak(0x06, 136, 32, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oidNist"])(0x08));
const sha3_384 = /* @__PURE__ */ genKeccak(0x06, 104, 48, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oidNist"])(0x09));
const sha3_512 = /* @__PURE__ */ genKeccak(0x06, 72, 64, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oidNist"])(0x0a));
const keccak_224 = /* @__PURE__ */ genKeccak(0x01, 144, 28);
const keccak_256 = /* @__PURE__ */ genKeccak(0x01, 136, 32);
const keccak_384 = /* @__PURE__ */ genKeccak(0x01, 104, 48);
const keccak_512 = /* @__PURE__ */ genKeccak(0x01, 72, 64);
const genShake = (suffix, blockLen, outputLen, info = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHasher"])((opts = {})=>{
        opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkOpts"])({}, opts);
        return new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true);
    }, info);
const shake128 = /* @__PURE__ */ genShake(0x1f, 168, 16, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oidNist"])(0x0b));
const shake256 = /* @__PURE__ */ genShake(0x1f, 136, 32, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oidNist"])(0x0c));
const shake128_32 = /* @__PURE__ */ genShake(0x1f, 168, 32, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oidNist"])(0x0b));
const shake256_64 = /* @__PURE__ */ genShake(0x1f, 136, 64, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["oidNist"])(0x0c));
}),
"[project]/newServer/notesphere_server/node_modules/@noble/hashes/utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if something is Uint8Array. Be careful: nodejs Buffer will return true.
 * @param a - value to test
 * @returns `true` when the value is a Uint8Array-compatible view.
 * @example
 * Check whether a value is a Uint8Array-compatible view.
 * ```ts
 * isBytes(new Uint8Array([1, 2, 3]));
 * ```
 */ __turbopack_context__.s([
    "abool",
    ()=>abool,
    "abytes",
    ()=>abytes,
    "aexists",
    ()=>aexists,
    "ahash",
    ()=>ahash,
    "anumber",
    ()=>anumber,
    "aoutput",
    ()=>aoutput,
    "asyncLoop",
    ()=>asyncLoop,
    "byteSwap",
    ()=>byteSwap,
    "byteSwap32",
    ()=>byteSwap32,
    "bytesToHex",
    ()=>bytesToHex,
    "checkOpts",
    ()=>checkOpts,
    "clean",
    ()=>clean,
    "concatBytes",
    ()=>concatBytes,
    "copyBytes",
    ()=>copyBytes,
    "createHasher",
    ()=>createHasher,
    "createView",
    ()=>createView,
    "hexToBytes",
    ()=>hexToBytes,
    "isBytes",
    ()=>isBytes,
    "isLE",
    ()=>isLE,
    "kdfInputToBytes",
    ()=>kdfInputToBytes,
    "nextTick",
    ()=>nextTick,
    "oidNist",
    ()=>oidNist,
    "randomBytes",
    ()=>randomBytes,
    "rotl",
    ()=>rotl,
    "rotr",
    ()=>rotr,
    "swap32IfBE",
    ()=>swap32IfBE,
    "swap8IfBE",
    ()=>swap8IfBE,
    "u32",
    ()=>u32,
    "u8",
    ()=>u8,
    "utf8ToBytes",
    ()=>utf8ToBytes,
    "validateObject",
    ()=>validateObject
]);
function isBytes(a) {
    // Plain `instanceof Uint8Array` is too strict for some Buffer / proxy / cross-realm cases.
    // The fallback still requires a real ArrayBuffer view, so plain
    // JSON-deserialized `{ constructor: ... }` spoofing is rejected, and
    // `BYTES_PER_ELEMENT === 1` keeps the fallback on byte-oriented views.
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array' && 'BYTES_PER_ELEMENT' in a && a.BYTES_PER_ELEMENT === 1;
}
// Shared error-message prefix builder. Only called on throw paths, so assert
// success paths never pay for the string concatenation.
const atitle = (title)=>title ? `"${title}" ` : '';
function anumber(n, title = '') {
    if (typeof n !== 'number') throw new TypeError(atitle(title) + 'expected number, got ' + typeof n);
    if (!Number.isSafeInteger(n) || n < 0) throw new RangeError(atitle(title) + 'expected integer >= 0, got ' + n);
    return n;
}
function abool(value, title = '') {
    if (typeof value !== 'boolean') throw new TypeError(atitle(title) + 'expected boolean, got type=' + typeof value);
    return value;
}
function abytes(value, length, title = '') {
    // Success path first: this runs at the start of every update() / digestInto(), and the
    // common `abytes(data)` form must not pay for length handling it does not use.
    if (isBytes(value) && (length === undefined || value.length === length)) return value;
    // Error path: recompute freely to build the exact message.
    if (length !== undefined) anumber(length, 'length');
    const bytes = isBytes(value);
    const ofLen = length !== undefined ? ` of length ${length}` : '';
    const got = bytes ? `length=${value.length}` : `type=${typeof value}`;
    const message = atitle(title) + 'expected Uint8Array' + ofLen + ', got ' + got;
    if (!bytes) throw new TypeError(message);
    throw new RangeError(message);
}
function copyBytes(bytes) {
    // `Uint8Array.from(...)` would also accept arrays / other typed arrays. Keep this helper strict
    // because callers use it at byte-validation boundaries before mutating the detached copy.
    return Uint8Array.from(abytes(bytes));
}
function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function') throw new TypeError('expected hash wrapped by utils.createHasher');
    anumber(h.outputLen);
    anumber(h.blockLen);
    // HMAC and KDF callers treat these as real byte lengths; allowing zero lets fake wrappers pass
    // validation and can produce empty outputs instead of failing fast.
    if (h.outputLen < 1 || h.blockLen < 1) throw new Error('hash blockLen / outputLen must be >= 1');
}
const aobject = (value, label)=>{
    if (value === null || typeof value !== 'object' || Array.isArray(value)) throw new TypeError((label === 'object' ? '' : `"${label}" `) + 'expected object, got type=' + typeof value);
};
const aopts = (value, label)=>{
    aobject(value, label);
    const proto = Object.getPrototypeOf(value);
    if (proto !== Object.prototype && proto !== null) throw new TypeError(`"${label}" expected plain object`);
    // Object.assign() treats an own "__proto__" source key as a write to the target's legacy
    // prototype setter. Reject it before merging so inherited option values cannot be injected.
    if (Object.hasOwn(value, '__proto__')) throw new TypeError(`"${label}.__proto__" is not allowed`);
};
function aexists(instance, checkFinished = true) {
    // Runs on every update()/digestInto(); the flags are library-owned booleans, so only their
    // truthiness is checked - re-validating their type per call was pure hot-path overhead.
    if (instance.destroyed) throw new Error('hash was destroyed');
    if (checkFinished && instance.finished) throw new Error('digest() was already called');
}
function aoutput(out, instance) {
    abytes(out, undefined, 'output');
    // `outputLen` is a library-owned readonly number; the negated comparison keeps failing fast
    // when it is missing/NaN (comparisons with undefined/NaN are false) without an anumber() call.
    const min = instance.outputLen;
    if (!(out.length >= min)) {
        throw new RangeError('"output" expected length >= ' + min);
    }
}
function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean(...arrays) {
    for(let i = 0; i < arrays.length; i++){
        arrays[i].fill(0);
    }
}
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
}
function rotl(word, shift) {
    return word << shift | word >>> 32 - shift >>> 0;
}
const isLE = /* @__PURE__ */ (()=>new Uint8Array(new Uint32Array([
        0x11223344
    ]).buffer)[0] === 0x44)();
function byteSwap(word) {
    return word << 24 & 0xff000000 | word << 8 & 0xff0000 | word >>> 8 & 0xff00 | word >>> 24 & 0xff;
}
const swap8IfBE = isLE ? (n)=>n : (n)=>byteSwap(n) >>> 0;
function byteSwap32(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = byteSwap(arr[i]);
    }
    return arr;
}
const swap32IfBE = isLE ? (u)=>u : byteSwap32;
// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
const hasHexBuiltin = /* @__PURE__ */ (()=>// @ts-ignore
    typeof Uint8Array.from([]).toHex === 'function' && typeof Uint8Array.fromHex === 'function')();
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
function bytesToHex(bytes) {
    abytes(bytes);
    // @ts-ignore
    if (hasHexBuiltin) return bytes.toHex();
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
// Strict ASCII nibble parser: non-ASCII hex lookalikes are rejected as undefined.
// ASCII codes: '0'..'9' = 48..57, 'A'..'F' = 65..70, 'a'..'f' = 97..102.
// prettier-ignore
function asciiToBase16(ch) {
    return ch >= 48 && ch <= 57 ? ch - 48 // '2' => 50-48
     : ch >= 65 && ch <= 70 ? ch - (65 - 10) // 'B' => 66-(65-10)
     : ch >= 97 && ch <= 102 ? ch - (97 - 10) // 'b' => 98-(97-10)
     : undefined;
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new TypeError('hex string expected, got ' + typeof hex);
    if (hasHexBuiltin) {
        try {
            return Uint8Array.fromHex(hex);
        } catch (error) {
            if (error instanceof SyntaxError) throw new RangeError(error.message);
            throw error;
        }
    }
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new RangeError('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi)); // parse first char, multiply it by 16
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1)); // parse second char
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new RangeError('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // example: 'A9' => 10*16 + 9
    }
    return array;
}
function nextTick(onReject) {
    const host = globalThis;
    if (typeof host.scheduler?.yield === 'function') {
        const promise = host.scheduler.yield();
        // Keep the original scheduler rejection; this handler exists only for cleanup.
        if (onReject) promise.catch(onReject);
        return promise;
    }
    return new Promise((resolve)=>host.setTimeout(resolve, 0));
}
async function asyncLoop(iters, tick, cb, onReject) {
    anumber(iters, 'iters');
    anumber(tick, 'tick');
    if (typeof cb !== 'function') throw new TypeError('callback must be a function');
    // Callback is synchronous by contract; asyncLoop only yields between sync work windows.
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await nextTick(onReject);
        // Track only synchronous work time; scheduler delay after yielding is outside our budget.
        ts = Date.now();
    }
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new TypeError('string expected');
    const encoded = new TextEncoder().encode(str);
    try {
        // Copy into the current realm for Firefox extension contexts. Callers that own the returned
        // buffer can then wipe it independently of TextEncoder's temporary result.
        return new Uint8Array(encoded); // https://bugzil.la/1681809
    } finally{
        clean(encoded);
    }
}
function kdfInputToBytes(data, errorTitle = '') {
    if (typeof data === 'string') return utf8ToBytes(data);
    return abytes(data, undefined, errorTitle);
}
function concatBytes(...arrays) {
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
const validateObject = (object, fields = {}, optFields = {}, title = 'object')=>{
    aobject(object, title);
    aobject(fields, 'fields');
    aobject(optFields, 'optFields');
    function checkField(fieldName, expectedType, isOpt) {
        const label = title === 'object' ? `param "${String(fieldName)}"` : `"${title}.${String(fieldName)}"`;
        // Config fields must be explicit own properties. Optional inherited values are rejected too
        // because callers keep reading the same options object after validation.
        const val = object[fieldName];
        // Runtime objects such as Field instances intentionally satisfy required method slots
        // via their shared prototype.
        if (!Object.hasOwn(object, fieldName) && (isOpt ? val !== undefined : expectedType !== 'function')) {
            throw new TypeError(`${label} is invalid: expected own property`);
        }
        if (isOpt && val === undefined) return;
        const current = typeof val;
        if (current !== expectedType || val === null) throw new TypeError(`${label} is invalid: expected ${expectedType}, got ${current}`);
    }
    const iter = (f, isOpt)=>Object.entries(f).forEach(([k, v])=>checkField(k, v, isOpt));
    iter(fields, false);
    iter(optFields, true);
};
function checkOpts(defaults, opts, title = 'opts') {
    aopts(defaults, 'defaults');
    if (opts !== undefined) aopts(opts, title);
    // Callers read optional fields directly, so omitted values must not fall through to ambient
    // Object.prototype pollution (for example a forged `dkLen` changing SHAKE's default output).
    const merged = Object.assign(Object.create(null), defaults, opts);
    return merged;
}
function createHasher(hashCons, info = {}) {
    if (typeof hashCons !== 'function') throw new TypeError('"hashCons" expected function, got type=' + typeof hashCons);
    info = checkOpts({}, info, 'info');
    const hashC = (msg, opts)=>hashCons(opts).update(msg).digest();
    const tmp = hashCons(undefined);
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.canXOF = tmp.canXOF;
    hashC.create = (opts)=>hashCons(opts);
    Object.assign(hashC, info);
    return Object.freeze(hashC);
}
function randomBytes(bytesLength = 32) {
    // Match the repo's other length-taking helpers instead of relying on Uint8Array coercion.
    anumber(bytesLength, 'bytesLength');
    const cr = typeof globalThis === 'object' ? globalThis.crypto : null;
    if (typeof cr?.getRandomValues !== 'function') throw new Error('crypto.getRandomValues must be defined');
    // Web Cryptography API Level 2 §10.1.1:
    // if `byteLength > 65536`, throw `QuotaExceededError`.
    // Keep the guard explicit so callers can see the quota in code
    // instead of discovering it by reading the spec or host errors.
    // This wrapper surfaces the same quota as a stable library RangeError.
    if (bytesLength > 65536) throw new RangeError(`"bytesLength" expected <= 65536, got ${bytesLength}`);
    return cr.getRandomValues(new Uint8Array(bytesLength));
}
const oidNist = (suffix)=>({
        // Current NIST hashAlgs suffixes used here fit in one DER subidentifier octet.
        // Larger suffix values would need base-128 OID encoding and a different length byte.
        oid: Uint8Array.from([
            0x06,
            0x09,
            0x60,
            0x86,
            0x48,
            0x01,
            0x65,
            0x03,
            0x04,
            0x02,
            suffix
        ])
    });
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/binding-DgumIe5f-BPV5_73g.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "a",
    ()=>postgresBindingRules,
    "c",
    ()=>toDriverCursorOptions,
    "i",
    ()=>isPgPool,
    "l",
    ()=>validateCursorOptions,
    "n",
    ()=>connectWithBinding,
    "o",
    ()=>resolveOptionalPostgresBinding,
    "r",
    ()=>isPgClient,
    "s",
    ()=>resolvePostgresBinding,
    "t",
    ()=>DEFAULT_CONNECT_TIMEOUT_MILLIS,
    "u",
    ()=>validatePostgresUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/errors-DfWK9xep-CB07krZF.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export t as InternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__createPgPool$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/session-settings-cHekxETj-CKXTmPoK.mjs [app-route] (ecmascript) <export i as createPgPool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$suppress$2d$idle$2d$connection$2d$errors$2d$DzApeUb3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__suppressIdleConnectionErrors$3e$__$3c$export__suppressIdleConnectionErrors__as__n$3e$__$3c$export__n__as__suppressIdleConnectionErrors$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/suppress-idle-connection-errors-DzApeUb3.mjs [app-route] (ecmascript) <export t as suppressIdleConnectionErrors> <export suppressIdleConnectionErrors as n> <export n as suppressIdleConnectionErrors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$target_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/target__runtime.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arktype/out/keywords/keywords.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__createPgPool$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__createPgPool$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
//#region ../../../3-targets/postgres/9-facade/dist/binding-DgumIe5f.mjs
/**
* Default time to wait for the database to accept a connection, for a client's pool and for a
* connection's `pg.Client`.
*/ const DEFAULT_CONNECT_TIMEOUT_MILLIS = 2e4;
const cursorOptionsSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"])({
    "batchSize?": "number.integer > 0 | undefined"
}).onUndeclaredKey("reject");
function validateCursorOptions(cursor, helper) {
    if (cursor === void 0) return;
    const result = cursorOptionsSchema(cursor);
    if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["type"].errors) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("RUNTIME.ARGUMENT_INVALID", "Invalid cursor option", {
        why: result.summary,
        fix: "Pass cursor: {} or cursor: { batchSize: <positive integer> } to read through a server-side cursor, or leave cursor unset to read without one.",
        meta: {
            extension: "postgres",
            helper,
            argument: "cursor",
            received: cursor
        }
    });
    return result;
}
function toDriverCursorOptions(cursor) {
    return cursor === void 0 ? {
        disabled: true
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("batchSize", cursor.batchSize);
}
const isPgPool = (pg)=>"totalCount" in pg && "idleCount" in pg && "waitingCount" in pg;
const isPgClient = (pg)=>"escapeIdentifier" in pg && "escapeLiteral" in pg;
function validatePostgresUrl(url, extension = "postgres") {
    const trimmed = url.trim();
    if (trimmed.length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("RUNTIME.BINDING_INVALID", "Postgres URL must be a non-empty string", {
        meta: {
            extension,
            reason: "empty url"
        }
    });
    let parsed;
    try {
        parsed = new URL(trimmed);
    } catch  {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("RUNTIME.BINDING_INVALID", "Postgres URL must be a valid URL", {
            meta: {
                extension,
                reason: "unparseable url"
            }
        });
    }
    if (parsed.protocol !== "postgres:" && parsed.protocol !== "postgresql:") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("RUNTIME.BINDING_INVALID", "Postgres URL must use postgres:// or postgresql://", {
        meta: {
            extension,
            reason: "wrong scheme",
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("received", trimmed.toLowerCase().startsWith(`${parsed.protocol}//`) ? parsed.protocol : void 0)
        }
    });
    return trimmed;
}
function typeOfInput(value) {
    return value === null ? "null" : typeof value;
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
const postgresBindingRules = {
    extension: "postgres",
    kinds: {
        url: true,
        pgPool: true,
        pgClient: true
    }
};
const bindingForms = {
    url: "{ kind: 'url', url }",
    pgPool: "{ kind: 'pgPool', pool }",
    pgClient: "{ kind: 'pgClient', client }"
};
function isBindingKind(kind) {
    return typeof kind === "string" && Object.hasOwn(bindingForms, kind);
}
const pgObjectNames = {
    pgPool: "pg.Pool",
    pgClient: "pg.Client"
};
function orList(items) {
    return items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} or ${items[items.length - 1]}`;
}
function wordingOf(rules) {
    const kinds = Object.keys(bindingForms).filter(isBindingKind).filter((kind)=>rules.kinds[kind] === true);
    const pgKinds = kinds.filter((kind)=>pgObjectNames[kind] !== void 0);
    const pgNames = pgKinds.flatMap((kind)=>pgObjectNames[kind] ?? []);
    return {
        extension: rules.extension,
        kinds: orList(kinds.map((kind)=>`'${kind}'`)),
        forms: orList(kinds.map((kind)=>bindingForms[kind])),
        pgForms: orList(pgKinds.map((kind)=>`binding: ${bindingForms[kind]}`)),
        pgObjects: orList(pgNames),
        pgObjectsEach: orList(pgNames.map((name)=>`a ${name}`))
    };
}
function invalidInput(wording, input, message, fix) {
    const receivedType = typeOfInput(input.value);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("RUNTIME.BINDING_INVALID", message, {
        why: `The ${input.name} is ${receivedType === "null" ? "null" : `a ${receivedType}`}, and it must be ${input.expected}.`,
        fix,
        meta: {
            extension: wording.extension,
            reason: input.reason,
            receivedType
        }
    });
}
const echoableKind = /^[A-Za-z_][A-Za-z0-9_]{0,31}$/;
function describeUnknownKind(kind) {
    if (kind === void 0) return {
        why: "The binding option has no kind, so it names no database.",
        received: {
            receivedKind: "undefined"
        }
    };
    if (typeof kind === "string" && echoableKind.test(kind)) return {
        why: `The binding option has kind '${kind}', which is not a binding kind this client takes.`,
        received: {
            receivedKind: kind
        }
    };
    const receivedType = typeOfInput(kind);
    return {
        why: typeof kind === "string" ? "The binding option has a kind that is a string not in the list of binding kinds." : `The binding option has kind of type ${receivedType}, which is not a binding kind.`,
        received: typeof kind === "string" ? {
            receivedType
        } : {
            receivedKind: receivedType
        }
    };
}
function unknownKindError(wording, kind) {
    const { why, received } = describeUnknownKind(kind);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("RUNTIME.BINDING_INVALID", `The binding option must have kind ${wording.kinds}`, {
        why,
        fix: `Pass binding: ${wording.forms}.`,
        meta: {
            extension: wording.extension,
            reason: "unknown binding kind",
            ...received
        }
    });
}
function checkInputTypes(options, rules, wording) {
    const binding = options.binding;
    const url = options.url;
    const pg = options.pg;
    if (binding !== void 0 && !isObject(binding)) throw invalidInput(wording, {
        name: "binding option",
        value: binding,
        expected: "an object with a kind",
        reason: "invalid binding input"
    }, "The binding option must be an object with a kind", `Pass binding: ${wording.forms}.`);
    if (url !== void 0 && typeof url !== "string") throw invalidInput(wording, {
        name: "url option",
        value: url,
        expected: "a connection string",
        reason: "invalid url input"
    }, "The url option must be a string", "Pass a postgres:// or postgresql:// connection string as url, and check that the variable it comes from is set.");
    if (pg !== void 0 && !isObject(pg)) throw invalidInput(wording, {
        name: "pg option",
        value: pg,
        expected: `a ${wording.pgObjects} object`,
        reason: "invalid pg input"
    }, `The pg option must be ${wording.pgObjectsEach}`, `Pass a ${wording.pgObjects} as pg, or pass a connection string as url.`);
    if (binding !== void 0) {
        const kind = "kind" in binding ? binding.kind : void 0;
        if (!isBindingKind(kind) || rules.kinds[kind] !== true) throw unknownKindError(wording, kind);
    }
}
function checkBindingContents(binding, wording) {
    if (binding.kind === "url") {
        const url = binding.url;
        if (typeof url !== "string") throw invalidInput(wording, {
            name: "url in the binding option",
            value: url,
            expected: "a connection string",
            reason: "invalid binding url"
        }, "The url in the binding option must be a string", "Pass binding: { kind: 'url', url } with a postgres:// or postgresql:// connection string, and check that the variable it comes from is set.");
        return {
            kind: "url",
            url: validatePostgresUrl(url, wording.extension)
        };
    }
    const [name, value] = binding.kind === "pgPool" ? [
        "pool",
        binding.pool
    ] : [
        "client",
        binding.client
    ];
    if (!isObject(value)) {
        const objectName = binding.kind === "pgPool" ? "pg.Pool" : "pg.Client";
        throw invalidInput(wording, {
            name: `${name} in the binding option`,
            value,
            expected: `a ${objectName}`,
            reason: `invalid binding ${name}`
        }, `The ${name} in the binding option must be a ${objectName}`, `Pass binding: ${bindingForms[binding.kind]} with a ${objectName}.`);
    }
    return binding;
}
function resolveBinding(options, rules) {
    const wording = wordingOf(rules);
    checkInputTypes(options, rules, wording);
    const binding = resolveInput(options, rules, wording);
    if (rules.kinds[binding.kind] !== true) throw refusedInputError(wording, options.url !== void 0 ? "url" : "pg", binding.kind);
    return binding;
}
const inputDescriptions = {
    url: "a connection string",
    pgPool: "a pg.Pool",
    pgClient: "a pg.Client"
};
function refusedInputError(wording, option, kind) {
    const pgFix = wording.pgObjectsEach === "" ? "" : `${wording.pgObjectsEach} as pg, or `;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("RUNTIME.BINDING_INVALID", `The ${option} option is ${inputDescriptions[kind]}, which this client does not take`, {
        fix: `Pass ${pgFix}binding: ${wording.forms}.`,
        meta: {
            extension: wording.extension,
            reason: `refused ${option} input`,
            receivedKind: kind
        }
    });
}
function resolveInput(options, rules, wording) {
    if (Number(options.binding !== void 0) + Number(options.url !== void 0) + Number(options.pg !== void 0) !== 1) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("RUNTIME.BINDING_INVALID", "Provide one binding input: binding, url, or pg", {
        fix: "Pass exactly one of `binding`, `url`, or `pg`.",
        meta: {
            extension: rules.extension,
            reason: "zero or multiple binding inputs"
        }
    });
    if (options.binding !== void 0) return checkBindingContents(options.binding, wording);
    if (options.url !== void 0) return {
        kind: "url",
        url: validatePostgresUrl(options.url, rules.extension)
    };
    const pgBinding = options.pg;
    if (pgBinding === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"]("Invariant violation: expected pg binding after validation");
    if (isPgPool(pgBinding)) return {
        kind: "pgPool",
        pool: pgBinding
    };
    if (isPgClient(pgBinding)) return {
        kind: "pgClient",
        client: pgBinding
    };
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("RUNTIME.BINDING_INVALID", "Unable to determine pg binding type from pg input; use binding with explicit kind", {
        fix: `Pass ${wording.pgForms} instead of pg.`,
        meta: {
            extension: rules.extension,
            reason: "unrecognizable pg object"
        }
    });
}
function resolvePostgresBinding(options) {
    return resolveBinding(options, postgresBindingRules);
}
function resolveOptionalPostgresBinding(options, rules) {
    if (Number(options.binding !== void 0) + Number(options.url !== void 0) + Number(options.pg !== void 0) === 0) return;
    return resolveBinding((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(options), rules);
}
function toRuntimeBinding(binding, options) {
    if (binding.kind !== "url") return {
        ...binding,
        ownedByDriver: false
    };
    return {
        kind: "pgPool",
        ownedByDriver: true,
        pool: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$suppress$2d$idle$2d$connection$2d$errors$2d$DzApeUb3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__suppressIdleConnectionErrors$3e$__$3c$export__suppressIdleConnectionErrors__as__n$3e$__$3c$export__n__as__suppressIdleConnectionErrors$3e$__["suppressIdleConnectionErrors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__createPgPool$3e$__["createPgPool"])({
            connectionString: binding.url,
            connectionTimeoutMillis: options.poolOptions?.connectionTimeoutMillis ?? 2e4,
            idleTimeoutMillis: options.poolOptions?.idleTimeoutMillis ?? 3e4
        }, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$target_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].sessionSettings ?? {}))
    };
}
/** Connects `driver` to `binding`, and ends the pool created for a url binding when the connection fails. */ async function connectWithBinding(driver, binding, options) {
    const runtimeBinding = toRuntimeBinding(binding, options);
    try {
        await driver.connect(runtimeBinding);
    } catch (error) {
        if (runtimeBinding.kind === "pgPool" && runtimeBinding.ownedByDriver) await runtimeBinding.pool.end().catch(()=>void 0);
        throw error;
    }
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/contract-builder.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defineContract",
    ()=>defineContract,
    "enumType",
    ()=>enumType,
    "extension",
    ()=>extension,
    "field",
    ()=>field,
    "fullTextIndex",
    ()=>fullTextIndex,
    "gen",
    ()=>gen,
    "nativeEnum",
    ()=>nativeEnum,
    "pg",
    ()=>pg,
    "policyAll",
    ()=>policyAll,
    "policyDelete",
    ()=>policyDelete,
    "policyInsert",
    ()=>policyInsert,
    "policySelect",
    ()=>policySelect,
    "policyUpdate",
    ()=>policyUpdate,
    "rlsEnabled",
    ()=>rlsEnabled,
    "role",
    ()=>role,
    "type",
    ()=>type
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/errors-DfWK9xep-CB07krZF.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__s__as__PG_ENUM_CODEC_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-ids-2htdtS66-CJPMZv1t.mjs [app-route] (ecmascript) <locals> <export s as PG_ENUM_CODEC_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$descriptor$2d$meta$2d$DWKp5Q1s$2d$DplRJE9N$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__default$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/descriptor-meta-DWKp5Q1s-DplRJE9N.mjs [app-route] (ecmascript) <export t as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$native$2d$enum$2d$CdP3b_$2d$R$2d$DgG3pi5p$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__PostgresNativeEnum$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-native-enum-CdP3b_-R-DgG3pi5p.mjs [app-route] (ecmascript) <export t as PostgresNativeEnum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v__as__postgresCreateNamespace$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-schema-BBWgs4fX-DWdYxNi8.mjs [app-route] (ecmascript) <export v as postgresCreateNamespace>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__t__as__autoincrement$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/contract-builder-m9XW9MgR.mjs [app-route] (ecmascript) <locals> <export t as autoincrement>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$authoring$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__bindEnumType__as__n$3e$__$3c$export__n__as__bindEnumType$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/contract-authoring.mjs [app-route] (ecmascript) <export bindEnumType as n> <export n as bindEnumType>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__r__as__buildBoundContract$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/contract-builder-m9XW9MgR.mjs [app-route] (ecmascript) <locals> <export r as buildBoundContract>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$zjkmqsa_$2d$D7VKKK_q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__buildSqlContractFromDefinition$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/derived-checks-zjkmqsa_-D7VKKK_q.mjs [app-route] (ecmascript) <export n as buildSqlContractFromDefinition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__a__as__check$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/contract-builder-m9XW9MgR.mjs [app-route] (ecmascript) <locals> <export a as check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__s__as__createComposedAuthoringHelpers$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/contract-builder-m9XW9MgR.mjs [app-route] (ecmascript) <locals> <export s as createComposedAuthoringHelpers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$authoring$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__member__as__f$3e$__$3c$export__f__as__member$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/contract-authoring.mjs [app-route] (ecmascript) <export member as f> <export f as member>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__p__as__model$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/contract-builder-m9XW9MgR.mjs [app-route] (ecmascript) <locals> <export p as model>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__m__as__now$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/contract-builder-m9XW9MgR.mjs [app-route] (ecmascript) <locals> <export m as now>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__h__as__rel$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/contract-builder-m9XW9MgR.mjs [app-route] (ecmascript) <locals> <export h as rel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__sql$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/sql-expression-CKgKznXS.mjs [app-route] (ecmascript) <export l as sql>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__g__as__unbound$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/contract-builder-m9XW9MgR.mjs [app-route] (ecmascript) <locals> <export g as unbound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$contributions$2d$DpTbtESH$2d$CxVtT7cT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__postgresAdapterContractContributions$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/contract-contributions-DpTbtESH-CxVtT7cT.mjs [app-route] (ecmascript) <export r as postgresAdapterContractContributions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$family_$5f$pack$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/family__pack.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__assembleDataTypeSupport$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/temporal-type-aliases-CFh3BW2a-DOlmiuQn.mjs [app-route] (ecmascript) <export a as assembleDataTypeSupport>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$registry$2d$7LHPD8C1$2d$BALCyEB$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__assemblePostgresCodecRegistryWithBuiltins$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-registry-7LHPD8C1-BALCyEB-.mjs [app-route] (ecmascript) <export n as assemblePostgresCodecRegistryWithBuiltins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__m__as__pgEnumDescriptor$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codecs-CV-_K-z0-DZc60ccR.mjs [app-route] (ecmascript) <export m as pgEnumDescriptor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/namespace-VUH2dgnS-By5y75h9.mjs [app-route] (ecmascript) <export r as UNBOUND_NAMESPACE_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$ast$2d$CyvE6CR$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__UNBOUND_PSL_NAMESPACE_NAME$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/psl-ast-CyvE6CR-.mjs [app-route] (ecmascript) <export n as UNBOUND_PSL_NAMESPACE_NAME>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__requireSqlExpression$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/sql-expression-CKgKznXS.mjs [app-route] (ecmascript) <export c as requireSqlExpression>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__FULL_TEXT_INDEX_TYPE$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript) <export n as FULL_TEXT_INDEX_TYPE>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__describeFullTextIndexProblem$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript) <export o as describeFullTextIndexProblem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__fullTextIndexProblems$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript) <export l as fullTextIndexProblems>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$codec$2d$traits$2d$DeZiroEE$2d$BACV_wuh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__postgresCodecTraitsOf$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-codec-traits-DeZiroEE-BACV_wuh.mjs [app-route] (ecmascript) <export t as postgresCodecTraitsOf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__weightGroupsOf$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript) <export f as weightGroupsOf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__DEFAULT_FULL_TEXT_SEARCH_LANGUAGE$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/full-text-index-definition-MfjtL-x7-ImaTAFMs.mjs [app-route] (ecmascript) <export t as DEFAULT_FULL_TEXT_SEARCH_LANGUAGE>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__assertDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/assertions-Dw1lZz_Q.mjs [app-route] (ecmascript) <export t as assertDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export t as InternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$canonicalize$2d$RdxoUHao$2d$FTTkizfe$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__POLICY_OPERATION_PREDICATES$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/canonicalize-RdxoUHao-FTTkizfe.mjs [app-route] (ecmascript) <export n as POLICY_OPERATION_PREDICATES>");
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
//#region ../../../3-targets/postgres/9-facade/dist/contract-builder.mjs
const adapter = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$contract$2d$contributions$2d$DpTbtESH$2d$CxVtT7cT$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__postgresAdapterContractContributions$3e$__["postgresAdapterContractContributions"];
function defineContract(definition, factory) {
    const extensions = Object.values(definition.extensions ?? {});
    const dataTypeLookup = definition.dataTypeLookup ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__assembleDataTypeSupport$3e$__["assembleDataTypeSupport"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$family_$5f$pack$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$descriptor$2d$meta$2d$DWKp5Q1s$2d$DplRJE9N$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__default$3e$__["default"],
        ...extensions
    ], ()=>void 0).support.lookup;
    const bound = {
        ...definition,
        adapter,
        createNamespace: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$schema$2d$BBWgs4fX$2d$DWdYxNi8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v__as__postgresCreateNamespace$3e$__["postgresCreateNamespace"],
        codecLookup: definition.codecLookup ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$registry$2d$7LHPD8C1$2d$BALCyEB$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__assemblePostgresCodecRegistryWithBuiltins$3e$__["assemblePostgresCodecRegistryWithBuiltins"])(extensions, dataTypeLookup),
        dataTypeLookup
    };
    if (factory !== void 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__r__as__buildBoundContract$3e$__["buildBoundContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$family_$5f$pack$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$descriptor$2d$meta$2d$DWKp5Q1s$2d$DplRJE9N$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__default$3e$__["default"], bound, factory);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__r__as__buildBoundContract$3e$__["buildBoundContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$family_$5f$pack$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$descriptor$2d$meta$2d$DWKp5Q1s$2d$DplRJE9N$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__default$3e$__["default"], bound);
}
/**
* The `enumType` authors call when building a Postgres contract (re-exported
* from `@internal/postgres/contract-builder`).
*
* `bindEnumType` is the core, codec-agnostic `enumType` factory; calling it with
* the Postgres pack's codec typemap fixes which member-value type each codec
* permits, so `member()` values are checked against the column's codec at
* authoring time: `pg/text@1` requires `string`, `pg/int4@1` requires `number`,
* and a mismatch is a compile error. The core `enumType` can't know the codec
* set, which is why the binding happens here, per target.
*/ const enumType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$authoring$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__bindEnumType__as__n$3e$__$3c$export__n__as__bindEnumType$3e$__["bindEnumType"])();
/**
* Declares a Postgres extension the database must have installed, mirroring PSL's `extension <name> {}`. Place it in the `entities` list; `namespace` names the namespace whose schema holds the extension's objects, the default namespace when omitted. Pass `unbound` to have the extension found through the connection's `search_path`.
*/ function extension(name, options) {
    if (name.trim().length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("CONTRACT.ARGUMENT_INVALID", `extension("${name}"): name must be a non-empty string.`, {
        fix: "Pass the extension name, such as \"pg_trgm\".",
        meta: {
            extensionName: name
        }
    });
    const namespace = namespaceIdOf(name, options?.namespace);
    return Object.freeze({
        entityKind: "extension",
        name,
        ...namespace === void 0 ? {} : {
            namespace
        }
    });
}
function namespaceIdOf(name, namespace) {
    if (namespace === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__g__as__unbound$3e$__["unbound"]) return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__["UNBOUND_NAMESPACE_ID"];
    if (namespace === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$ast$2d$CyvE6CR$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__UNBOUND_PSL_NAMESPACE_NAME$3e$__["UNBOUND_PSL_NAMESPACE_NAME"] || namespace === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$VUH2dgnS$2d$By5y75h9$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__UNBOUND_NAMESPACE_ID$3e$__["UNBOUND_NAMESPACE_ID"]) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("CONTRACT.ARGUMENT_INVALID", `extension("${name}"): namespace "${namespace}" is reserved; pass the unbound symbol to declare the extension in the unbound namespace.`, {
        fix: "Import `unbound` from the contract builder and pass `{ namespace: unbound }`.",
        meta: {
            extensionName: name,
            namespace
        }
    });
    return namespace;
}
const { support } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$type$2d$aliases$2d$CFh3BW2a$2d$DOlmiuQn$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__assembleDataTypeSupport$3e$__["assembleDataTypeSupport"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$family_$5f$pack$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$descriptor$2d$meta$2d$DWKp5Q1s$2d$DplRJE9N$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__default$3e$__["default"]
], ()=>void 0);
const helpers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$builder$2d$m9XW9MgR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__s__as__createComposedAuthoringHelpers$3e$__["createComposedAuthoringHelpers"])({
    family: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$family_$5f$pack$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    target: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$descriptor$2d$meta$2d$DWKp5Q1s$2d$DplRJE9N$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__default$3e$__["default"],
    codecLookup: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$registry$2d$7LHPD8C1$2d$BALCyEB$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__assemblePostgresCodecRegistryWithBuiltins$3e$__["assemblePostgresCodecRegistryWithBuiltins"])([], support.lookup)
});
/**
* The field builders of the `defineContract` callback for Postgres, without extensions: `field.column(type.TimestamptzTemporal())`. Use it outside a contract, for example to declare the fields of a query fragment.
*/ const field = helpers.field;
/**
* The generator function calls of the `defineContract` callback for Postgres, without extensions, for `.onCreate(...)` and `.onUpdate(...)`: `gen.now()`, `gen.uuid(7)`, `gen.cuid(2)`, `gen.ulid()`, `gen.nanoid(16)` and `gen.ksuid()`.
*/ const gen = helpers.gen;
/**
* The type constructors and type aliases of the `defineContract` callback for Postgres, without extensions, for `field.column(...)`: `type.TimestamptzTemporal()`, `type.Ulid()`, `type.temporal.CreatedAt()`.
*/ const type = helpers.type;
function isColumnRef(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
function fullTextIndex(fields, options) {
    const fieldGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__weightGroupsOf$3e$__["weightGroupsOf"])(fields, isColumnRef).map((group)=>group.map((ref)=>ref.fieldName));
    refuseInvalid({
        weightGroups: fieldGroups
    });
    const language = options.language ?? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__DEFAULT_FULL_TEXT_SEARCH_LANGUAGE$3e$__["DEFAULT_FULL_TEXT_SEARCH_LANGUAGE"];
    const fieldNames = fieldGroups.flat();
    return {
        kind: "index",
        fields: fieldNames,
        type: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__FULL_TEXT_INDEX_TYPE$3e$__["FULL_TEXT_INDEX_TYPE"],
        options: (columns)=>{
            const columnOf = new Map(fieldNames.map((fieldName, i)=>[
                    fieldName,
                    columns[i]
                ]));
            refuseInvalid({
                weightGroups: fieldGroups,
                codecs: {
                    codecIdOf: (fieldName)=>columnOf.get(fieldName)?.codecId,
                    traitsOf: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$codec$2d$traits$2d$DeZiroEE$2d$BACV_wuh$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__postgresCodecTraitsOf$3e$__["postgresCodecTraitsOf"]
                }
            });
            const columnNameOf = (fieldName)=>{
                const column = columnOf.get(fieldName);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__assertDefined$3e$__["assertDefined"])(column, `fullTextIndex field "${fieldName}" was resolved to a column`);
                return column.name;
            };
            return {
                weightGroups: fieldGroups.map((group)=>group.map(columnNameOf)),
                language
            };
        },
        ...options.where !== void 0 ? {
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$CKgKznXS$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__requireSqlExpression$3e$__["requireSqlExpression"])(options.where, `${fullTextIndexOwner(fieldNames, options)} where`)
        } : {},
        ...options.name !== void 0 ? {
            name: options.name
        } : {},
        ...options.map !== void 0 ? {
            map: options.map
        } : {}
    };
}
function fullTextIndexOwner(fieldNames, options) {
    const name = options.name ?? options.map;
    return name === void 0 ? `Full-text index on fields ${fieldNames.map((fieldName)=>`"${fieldName}"`).join(", ")}` : `Full-text index "${name}"`;
}
function refuseInvalid(candidate) {
    const [problem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__fullTextIndexProblems$3e$__["fullTextIndexProblems"])(candidate);
    if (problem === void 0) return;
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("CONTRACT.INDEX_INVALID", (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$full$2d$text$2d$index$2d$definition$2d$MfjtL$2d$x7$2d$ImaTAFMs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__describeFullTextIndexProblem$3e$__["describeFullTextIndexProblem"])("fullTextIndex", problem), {
        why: "Each top-level item of the fields is one weight group; Postgres has four weights, A to D, each field belongs to one group, and to_tsvector takes text.",
        fix: "List each text field once, in at most four non-empty groups.",
        meta: {
            helper: "fullTextIndex",
            fields: candidate.weightGroups
        }
    });
}
function buildNativeEnumHandle(name, typeName, members) {
    if (typeName.trim().length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("CONTRACT.ENUM_INVALID", `nativeEnum("${name}"): the Postgres type name must be a non-empty string.`, {
        fix: "Pass a non-empty Postgres type name to .map(typeName).",
        meta: {
            enumName: name,
            reason: "empty type name"
        }
    });
    return {
        entityKind: "native_enum",
        name,
        typeName,
        members,
        entity: new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$native$2d$enum$2d$CdP3b_$2d$R$2d$DgG3pi5p$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__PostgresNativeEnum$3e$__["PostgresNativeEnum"]({
            typeName,
            members
        }),
        map: (mappedTypeName)=>buildNativeEnumHandle(name, mappedTypeName, members)
    };
}
/**
* Declares a native Postgres enum type for use with {@link pg}'s `.enum()`
* column helper. Mirrors PSL's `native_enum <Name> { … }` lowering
* (`lowerNativeEnumFromBlock`): validates a non-empty, duplicate-free member
* list and builds the same {@link PostgresNativeEnum} entity. Its value-set is
* derived generically at contract-build time — the same
* `deriveValueSetFromEntity` fold PSL's native enums go through — once
* `pg.enum(handle)` lands the entity in the field's owning namespace.
*
* The first argument is the entity `name` (the `entries.valueSet` key). The
* Postgres type name, the `entries.native_enum` key, defaults to `name`; use
* `.map(typeName)` to override it (PSL's `@@map`).
*
* A handle referenced by columns in N different namespaces materialises N
* native enum types (one per namespace) — by design: a Postgres type lives in
* exactly one schema, and PSL can't share a type across schemas either.
*
* @example
* ```ts
* // name === Postgres type name
* const Role = nativeEnum('Role', 'user', 'admin');
* // entity name `AalLevel`, Postgres type `aal_level` (Supabase's auth.aal_level)
* const AalLevel = nativeEnum('AalLevel', 'aal1', 'aal2', 'aal3').map('aal_level');
* model('Session', { fields: { aal: field.column(pg.enum(AalLevel)).optional() } });
* ```
*/ function nativeEnum(name, ...members) {
    if (name.trim().length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("CONTRACT.ENUM_INVALID", "nativeEnum(): name must be a non-empty string.", {
        fix: "Pass a non-empty entity name as the first argument to nativeEnum().",
        meta: {
            enumName: name,
            reason: "empty name"
        }
    });
    if (members.length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("CONTRACT.ENUM_INVALID", `nativeEnum("${name}"): must have at least one member.`, {
        why: "Postgres rejects CREATE TYPE ... AS ENUM () with no labels.",
        fix: "Declare at least one member value after the name.",
        meta: {
            enumName: name,
            reason: "zero members"
        }
    });
    const seenValues = /* @__PURE__ */ new Set();
    for (const value of members){
        if (seenValues.has(value)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("CONTRACT.ENUM_INVALID", `nativeEnum("${name}"): duplicate member value "${value}". Member values must be unique.`, {
            fix: "Remove the duplicate member value.",
            meta: {
                enumName: name,
                member: value,
                reason: "duplicate member value"
            }
        });
        seenValues.add(value);
    }
    return buildNativeEnumHandle(name, name, members);
}
/**
* Builds the deferred column descriptor for `handle`: its `typeParams` come from `pgEnumDescriptor.columnFromEntity` (the same
* authoring hook the PSL `pg.enum(Ref)` type constructor resolves through),
* carrying `handle.entity` as the descriptor's `entityRef` keyed by the entity
* `name` (not the Postgres type name — they differ when `.map()` was used).
* Schema qualification and the storage `valueSet` ref are NOT computed here — a
* `field.column(pg.enum(handle))` call runs before the enclosing `model(...)`
* associates a namespace, so `buildSqlContractFromDefinition` resolves both
* once the field's namespace is known.
*/ function pgEnumColumn(handle) {
    const resolved = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codecs$2d$CV$2d$_K$2d$z0$2d$DZc60ccR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__m__as__pgEnumDescriptor$3e$__["pgEnumDescriptor"].columnFromEntity(handle.entity);
    if (resolved === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`pg.enum("${handle.name}"): handle.entity is not a PostgresNativeEnum. This is an authoring-surface bug — nativeEnum() must always produce one.`);
    return {
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__s__as__PG_ENUM_CODEC_ID$3e$__["PG_ENUM_CODEC_ID"],
        typeParams: resolved.typeParams,
        entityRef: {
            entityKind: handle.entityKind,
            entityName: handle.name,
            entity: handle.entity
        }
    };
}
/** Postgres-specific TS type-constructor namespace, mirroring the PSL `pg.` prefix. */ const pg = {
    enum: pgEnumColumn
};
function assertNonEmptyName(helper, name) {
    if (name.trim().length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("CONTRACT.POLICY_INVALID", `${helper}: name must be a non-empty string.`, {
        fix: "Pass a non-empty policy name.",
        meta: {
            policyName: name,
            reason: "empty name"
        }
    });
}
/** The user-facing helper name per operation, for runtime error messages. */ const HELPER_NAMES = {
    select: "policySelect",
    insert: "policyInsert",
    update: "policyUpdate",
    delete: "policyDelete",
    all: "policyAll"
};
function buildPolicyHandle(operation, model, descriptor) {
    const helper = HELPER_NAMES[operation];
    const support = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$canonicalize$2d$RdxoUHao$2d$FTTkizfe$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__POLICY_OPERATION_PREDICATES$3e$__["POLICY_OPERATION_PREDICATES"][operation];
    assertNonEmptyName(`${helper}("${descriptor.name}")`, descriptor.name);
    const supported = support.using && support.withCheck ? "`using` and `withCheck`" : support.using ? "`using` only" : "`withCheck` only";
    const rejectPredicate = (predicate)=>{
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("CONTRACT.POLICY_INVALID", `${helper}: policy "${descriptor.name}" does not take a \`${predicate}\` predicate; the ${operation.toUpperCase()} operation uses ${supported}.`, {
            fix: `Use only the predicates the ${operation.toUpperCase()} operation supports: ${supported}.`,
            meta: {
                policyName: descriptor.name,
                reason: `unsupported \`${predicate}\` predicate`
            }
        });
    };
    if (descriptor.using !== void 0 && !support.using) rejectPredicate("using");
    if (descriptor.withCheck !== void 0 && !support.withCheck) rejectPredicate("withCheck");
    if (descriptor.using === void 0 && descriptor.withCheck === void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("CONTRACT.POLICY_INVALID", `${helper}: policy "${descriptor.name}" requires at least one predicate; the ${operation.toUpperCase()} operation uses ${supported}.`, {
        fix: `Provide at least one predicate: ${supported}.`,
        meta: {
            policyName: descriptor.name,
            reason: "no predicate given"
        }
    });
    return Object.freeze({
        entityKind: "policy",
        operation,
        name: descriptor.name,
        refs: Object.freeze({
            target: model
        }),
        roles: Object.freeze([
            ...descriptor.roles
        ]),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("using", descriptor.using),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("withCheck", descriptor.withCheck)
    });
}
/**
* Declares a Postgres role by name, mirroring PSL's bare role identifiers.
* Returns an inert handle: referenced in a policy's `roles` it contributes
* the bare name; placed in the `entities` list it declares the role
* (`entries.role`), making it subject to the existence verify.
*/ function role(name) {
    assertNonEmptyName(`role("${name}")`, name);
    return Object.freeze({
        entityKind: "role",
        name
    });
}
/**
* Marks a model's table RLS-controlled, mirroring PSL's `@@rls`. The
* enablement marker (never the policy set) drives `ENABLE`/`DISABLE ROW
* LEVEL SECURITY` planning.
*/ function rlsEnabled(model) {
    return Object.freeze({
        entityKind: "rls",
        refs: Object.freeze({
            target: model
        })
    });
}
/** Authors a `FOR SELECT` policy (PSL `policy_select`): row visibility via `using`. */ function policySelect(model, descriptor) {
    return buildPolicyHandle("select", model, descriptor);
}
/** Authors a `FOR INSERT` policy (PSL `policy_insert`): new-row validation via `withCheck`. */ function policyInsert(model, descriptor) {
    return buildPolicyHandle("insert", model, descriptor);
}
/** Authors a `FOR UPDATE` policy (PSL `policy_update`): takes `using` and `withCheck`. */ function policyUpdate(model, descriptor) {
    return buildPolicyHandle("update", model, descriptor);
}
/** Authors a `FOR DELETE` policy (PSL `policy_delete`): row eligibility via `using`. */ function policyDelete(model, descriptor) {
    return buildPolicyHandle("delete", model, descriptor);
}
/** Authors a `FOR ALL` policy (PSL `policy_all`): takes `using` and `withCheck`. */ function policyAll(model, descriptor) {
    return buildPolicyHandle("all", model, descriptor);
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/contract-from-json-KgdElmHA-CqQlS9jb.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>validatePostgresContract,
    "t",
    ()=>contractFromJson
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$target_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/target__runtime.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$contract$2d$view$2d$yDfay91x$2d$BBinYMBq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__PostgresContractSerializer$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/postgres-contract-view-yDfay91x-BBinYMBq.mjs [app-route] (ecmascript) <export t as PostgresContractSerializer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$validate$2d$once$2d$D$2d$IwXHYP$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__validateContractOnce$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/validate-once-D-IwXHYP.mjs [app-route] (ecmascript) <export t as validateContractOnce>");
;
;
//#region ../../../3-targets/postgres/9-facade/dist/contract-from-json-KgdElmHA.mjs
var version = "8.0.0-rc.23";
const serializer = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$contract$2d$view$2d$yDfay91x$2d$BBinYMBq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__PostgresContractSerializer$3e$__["PostgresContractSerializer"]();
const validator = `${__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$target_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].targetId}@${version}`;
/**
* Validates an emitted Postgres `contract.json` and returns it as the contract type the
* application names, ready to pass to `postgres({ contract })` and the other Postgres clients.
* Clients built from the result do not validate it again.
*
* The returned value's top level is frozen; its nested objects are not. Do not change `json` or the
* returned value after the call: clients built from the value later do not validate it again.
*
* @example
* ```ts
* import type { Contract } from './contract.d';
* import contractJson from './contract.json' with { type: 'json' };
*
* export const contract = contractFromJson<Contract>(contractJson);
* ```
*/ function contractFromJson(json) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$validate$2d$once$2d$D$2d$IwXHYP$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__validateContractOnce$3e$__["validateContractOnce"])(json, validator, (input)=>serializer.deserializeContract(input));
}
/** Validates a contract value for a Postgres client, once per value. */ function validatePostgresContract(contract) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$validate$2d$once$2d$D$2d$IwXHYP$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__validateContractOnce$3e$__["validateContractOnce"])(contract, validator, ()=>serializer.deserializeContract(serializer.serializeContract(contract)));
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/errors-DfWK9xep-CB07krZF.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>postgresError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-route] (ecmascript) <export o as structuredError>");
;
//#region ../../../3-targets/postgres/9-facade/dist/errors-DfWK9xep.mjs
function postgresError(code, message, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])(code, message, options);
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/postgres-members-Bwcngc1q-HwIhD-Fq.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>buildPostgresRuntimeBoundMembers,
    "t",
    ()=>buildPostgresQueryMembers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-route] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__activitySource$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/exports-WNaGWaJR-CVNygh-P.mjs [app-route] (ecmascript) <export i as activitySource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__delegatingActivitySource$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/exports-WNaGWaJR-CVNygh-P.mjs [app-route] (ecmascript) <export u as delegatingActivitySource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__delegatingRuntime$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/exports-WNaGWaJR-CVNygh-P.mjs [app-route] (ecmascript) <export d as delegatingRuntime>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__withTransaction$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/exports-WNaGWaJR-CVNygh-P.mjs [app-route] (ecmascript) <export w as withTransaction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__T__as__withTransactionMembers$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/exports-WNaGWaJR-CVNygh-P.mjs [app-route] (ecmascript) <export T as withTransactionMembers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$orm$2d$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/orm-client.mjs [app-route] (ecmascript)");
;
;
;
//#region ../../../3-targets/postgres/9-facade/dist/postgres-members-Bwcngc1q.mjs
/**
* Builds the query members of a Postgres transaction over `txCtx`, so every statement they run goes through the transaction. `query` and `execute` are the transaction's own; `sql`, `raw` and `toSql` are the client's. Preparing sends nothing to the database, so `prepare` uses `prepareRuntime`; the prepared statement runs on the queryable it is given.
*/ function buildPostgresQueryMembers(options, txCtx) {
    const { context, collections, sql, raw, toSql, prepareRuntime } = options;
    return {
        toSql,
        sql,
        raw,
        orm: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$orm$2d$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["orm"])({
            runtime: {
                query (plan) {
                    return txCtx.query(plan);
                },
                execute (plan) {
                    return txCtx.execute(plan);
                },
                [__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__activitySource$3e$__["activitySource"]]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__delegatingActivitySource$3e$__["delegatingActivitySource"])(()=>txCtx)
            },
            context,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("collections", collections)
        }),
        prepare (declaration, callback) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$orm$2d$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prepareQuery"])(prepareRuntime, declaration, callback);
        }
    };
}
function buildPostgresRuntimeBoundMembers(options) {
    const { context, collections, sql, raw, enums, nativeEnums, toSql, getRuntime, getRuntimeForWork } = options;
    const workRuntime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__delegatingRuntime$3e$__["delegatingRuntime"])(getRuntimeForWork);
    const orm$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$orm$2d$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["orm"])({
        runtime: workRuntime,
        context,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("collections", collections)
    });
    function prepare(declaration, callback) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$orm$2d$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prepareQuery"])(workRuntime, declaration, callback);
    }
    return {
        orm: orm$1,
        query: workRuntime.query,
        execute: workRuntime.execute,
        runtime () {
            return getRuntime();
        },
        prepare,
        transaction (fn) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__w__as__withTransaction$3e$__["withTransaction"])(workRuntime, (txCtx)=>{
                return fn((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__T__as__withTransactionMembers$3e$__["withTransactionMembers"])(txCtx, {
                    ...buildPostgresQueryMembers({
                        context,
                        collections,
                        sql,
                        raw,
                        toSql,
                        prepareRuntime: workRuntime
                    }, txCtx),
                    enums,
                    nativeEnums
                }));
            });
        }
    };
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/postgres-runtime-BKdag6p9-gHVB2jfC.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>PostgresRuntimeImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$target_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/target__runtime.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__SqlRuntimeBase$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/exports-WNaGWaJR-CVNygh-P.mjs [app-route] (ecmascript) <export r as SqlRuntimeBase>");
;
;
//#region ../../../3-targets/postgres/9-facade/dist/postgres-runtime-BKdag6p9.mjs
var PostgresRuntimeImpl = class extends __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__SqlRuntimeBase$3e$__["SqlRuntimeBase"] {
    getListDecoder() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$target_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].listDecoder();
    }
};
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/postgres-static-DiyBIOCC-S3PLynn8.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>buildPostgresStaticContext,
    "r",
    ()=>postgresStatic,
    "t",
    ()=>buildNamespacedNativeEnums
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$contract$2d$from$2d$json$2d$KgdElmHA$2d$CqQlS9jb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/contract-from-json-KgdElmHA-CqQlS9jb.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__s__as__PG_ENUM_CODEC_ID$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/codec-ids-2htdtS66-CJPMZv1t.mjs [app-route] (ecmascript) <locals> <export s as PG_ENUM_CODEC_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$target_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/target__runtime.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-route] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$enum$2d$accessor$2d$B$2d$A2wNok$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__buildNamespacedEnums$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/enum-accessor-B-A2wNok.mjs [app-route] (ecmascript) <export n as buildNamespacedEnums>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$enum$2d$accessor$2d$B$2d$A2wNok$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__createEnumAccessor$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/enum-accessor-B-A2wNok.mjs [app-route] (ecmascript) <export r as createEnumAccessor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$adapter_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/adapter__runtime.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__createExecutionContext$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/exports-WNaGWaJR-CVNygh-P.mjs [app-route] (ecmascript) <export s as createExecutionContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__createSqlExecutionStack$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/exports-WNaGWaJR-CVNygh-P.mjs [app-route] (ecmascript) <export c as createSqlExecutionStack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__createToSql$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/exports-WNaGWaJR-CVNygh-P.mjs [app-route] (ecmascript) <export l as createToSql>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$builder_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/builder__runtime.mjs [app-route] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
//#region ../../../3-targets/postgres/9-facade/dist/postgres-static-DiyBIOCC.mjs
/**
* The accessors for one namespace's value sets, leaving out each value set whose name is a domain enum's in the same namespace: a domain enum's value set takes its enum's name and namespace, and `db.enums` holds that enum. The rest are native enum types, because `native_enum` is the only pack entity that derives a value set today. Reads plain contract data, so a `validateContract`'d JSON contract works as well as a hydrated one. A member is a value, as in `CREATE TYPE … AS ENUM ('a', 'b')`, so each value is also its own name.
*/ function buildNativeEnumsMapForNamespace(storage, domain, namespaceId) {
    const result = {};
    const valueSets = storage.namespaces[namespaceId]?.entries.valueSet;
    if (!valueSets) return result;
    const domainEnums = domain.namespaces[namespaceId]?.enum ?? {};
    for (const [name, valueSet] of Object.entries(valueSets)){
        if (Object.hasOwn(domainEnums, name)) continue;
        result[name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$enum$2d$accessor$2d$B$2d$A2wNok$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__createEnumAccessor$3e$__["createEnumAccessor"])({
            codecId: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$2htdtS66$2d$CJPMZv1t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__s__as__PG_ENUM_CODEC_ID$3e$__["PG_ENUM_CODEC_ID"],
            members: valueSet.values.map((value)=>({
                    name: String(value),
                    value
                }))
        });
    }
    return result;
}
function buildNamespacedNativeEnums(storage, domain) {
    const result = {};
    for (const namespaceId of Object.keys(storage.namespaces))result[namespaceId] = buildNativeEnumsMapForNamespace(storage, domain, namespaceId);
    return result;
}
function buildPostgresStaticContext(contract, context, stack) {
    const { rawCodecInferer } = stack.adapter;
    const sqlDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$builder_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sql"])({
        context,
        rawCodecInferer
    });
    const raw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$builder_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRawLane"])({
        context,
        rawCodecInferer
    });
    return {
        context,
        contract,
        enums: Object.freeze((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$enum$2d$accessor$2d$B$2d$A2wNok$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__buildNamespacedEnums$3e$__["buildNamespacedEnums"])(context.contract.domain, (codecId)=>context.contractCodecs.forCodecRef({
                codecId
            }))),
        nativeEnums: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(Object.freeze(buildNamespacedNativeEnums(context.contract.storage, context.contract.domain))),
        sql: sqlDb,
        raw,
        toSql: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__l__as__createToSql$3e$__["createToSql"])(stack, contract)
    };
}
/**
* The query surfaces of a Postgres client without a driver: `sql`, `raw`, `enums`, `nativeEnums`
* and `toSql`. Use it where loading `pg` is not wanted, for example in browser code that reads
* enums.
*
* @example
* ```ts
* const { enums } = postgresStatic({ contract: contractFromJson<Contract>(contractJson) });
* ```
*/ function postgresStatic(options) {
    const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$contract$2d$from$2d$json$2d$KgdElmHA$2d$CqQlS9jb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(options.contract);
    const stack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__createSqlExecutionStack$3e$__["createSqlExecutionStack"])({
        target: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$target_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
        adapter: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$adapter_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
        extensions: options.extensions ?? []
    });
    return buildPostgresStaticContext(contract, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__createExecutionContext$3e$__["createExecutionContext"])({
        contract,
        stack
    }), stack);
}
;
}),
"[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/serverless.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>postgresServerless
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/errors-DfWK9xep-CB07krZF.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$binding$2d$DgumIe5f$2d$BPV5_73g$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/binding-DgumIe5f-BPV5_73g.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$contract$2d$from$2d$json$2d$KgdElmHA$2d$CqQlS9jb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/contract-from-json-KgdElmHA-CqQlS9jb.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$postgres$2d$static$2d$DiyBIOCC$2d$S3PLynn8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/postgres-static-DiyBIOCC-S3PLynn8.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$postgres$2d$members$2d$Bwcngc1q$2d$HwIhD$2d$Fq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/postgres-members-Bwcngc1q-HwIhD-Fq.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$postgres$2d$runtime$2d$BKdag6p9$2d$gHVB2jfC$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-postgres/dist/postgres-runtime-BKdag6p9-gHVB2jfC.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-route] (ecmascript) <export t as InternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$runtime$2d$y_2Hxv0c$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__t__as__default$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/runtime-y_2Hxv0c.mjs [app-route] (ecmascript) <locals> <export t as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__createPgClient$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/session-settings-cHekxETj-CKXTmPoK.mjs [app-route] (ecmascript) <export r as createPgClient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$suppress$2d$idle$2d$connection$2d$errors$2d$DzApeUb3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__suppressIdleConnectionErrors$3e$__$3c$export__suppressIdleConnectionErrors__as__n$3e$__$3c$export__n__as__suppressIdleConnectionErrors$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/suppress-idle-connection-errors-DzApeUb3.mjs [app-route] (ecmascript) <export t as suppressIdleConnectionErrors> <export suppressIdleConnectionErrors as n> <export n as suppressIdleConnectionErrors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$target_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/target__runtime.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$adapter_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-target-postgres/dist/adapter__runtime.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__createExecutionContext$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/exports-WNaGWaJR-CVNygh-P.mjs [app-route] (ecmascript) <export s as createExecutionContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__createSqlExecutionStack$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/exports-WNaGWaJR-CVNygh-P.mjs [app-route] (ecmascript) <export c as createSqlExecutionStack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__x__as__toRuntimeOptions$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-family-sql/dist/exports-WNaGWaJR-CVNygh-P.mjs [app-route] (ecmascript) <export x as toRuntimeOptions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$redact$2d$db$2d$url$2d$CRWJWdB1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__redactDatabaseUrl$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@prisma/orm-framework/dist/redact-db-url-CRWJWdB1.mjs [app-route] (ecmascript) <export t as redactDatabaseUrl>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$binding$2d$DgumIe5f$2d$BPV5_73g$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$runtime$2d$y_2Hxv0c$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__t__as__default$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__createPgClient$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$binding$2d$DgumIe5f$2d$BPV5_73g$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$runtime$2d$y_2Hxv0c$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__t__as__default$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__createPgClient$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
//#region ../../../3-targets/postgres/9-facade/dist/serverless.mjs
function closedConnectionError() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("DRIVER.NOT_CONNECTED", "Postgres connection is closed", {
        why: "close() was called on this connection, or the await using scope that held it has ended.",
        fix: "Call connect({ url }) again to open a new connection.",
        meta: {
            extension: "postgres"
        }
    });
}
function connectionFailedError(url, cause) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CB07krZF$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])("DRIVER.CONNECTION_FAILED", "Database connection failed", {
        why: cause instanceof Error ? cause.message : String(cause),
        fix: "Verify the database URL, ensure the database is reachable, and confirm credentials/permissions",
        meta: {
            extension: "postgres",
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$redact$2d$db$2d$url$2d$CRWJWdB1$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__redactDatabaseUrl$3e$__["redactDatabaseUrl"])(url)
        },
        cause
    });
}
/**
* Creates a serverless client for serverless and edge runtimes (Cloudflare Workers + Hyperdrive,
* AWS Lambda, Vercel, Deno Deploy).
*
* The serverless client holds no database connection and has the static members. Each
* `connect({ url })` opens one database connection, a fresh `pg.Client`, and returns a connection
* with the members of a `postgres()` client except `connect`. It rejects with
* `DRIVER.CONNECTION_FAILED` when the database refuses the connection, rejects the credentials,
* or does not answer within 20 seconds. Close the connection with `await using` or `close()`.
*
* The client infers its contract type from `contract` and validates it once, when the client is
* created; connections reuse it.
*
* @example
* ```ts
* const postgres = postgresServerless({ contract: contractFromJson<Contract>(contractJson) });
*
* export default {
*   async fetch(_req: Request, env: Env): Promise<Response> {
*     await using db = await postgres.connect({ url: env.HYPERDRIVE.connectionString });
*     const users = await db.orm.public.User.all();
*     return Response.json(users);
*   },
* };
* ```
*/ function postgresServerless(options) {
    const cursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$binding$2d$DgumIe5f$2d$BPV5_73g$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"])(options.cursor, "postgresServerless");
    const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$contract$2d$from$2d$json$2d$KgdElmHA$2d$CqQlS9jb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(options.contract);
    const stack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__createSqlExecutionStack$3e$__["createSqlExecutionStack"])({
        target: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$target_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
        adapter: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$adapter_$5f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
        driver: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$runtime$2d$y_2Hxv0c$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__t__as__default$3e$__["default"],
        extensions: options.extensions ?? []
    });
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__s__as__createExecutionContext$3e$__["createExecutionContext"])({
        contract,
        stack,
        driver: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$runtime$2d$y_2Hxv0c$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__t__as__default$3e$__["default"]
    });
    const { sql, raw, enums, nativeEnums, toSql } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$postgres$2d$static$2d$DiyBIOCC$2d$S3PLynn8$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(contract, context, stack);
    const buildRuntimeBoundMembers = (getRuntime, getRuntimeForWork)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$postgres$2d$members$2d$Bwcngc1q$2d$HwIhD$2d$Fq$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])({
            context,
            collections: options.collections,
            sql,
            raw,
            enums,
            nativeEnums,
            toSql,
            getRuntime,
            getRuntimeForWork
        });
    const noRuntime = ()=>{
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"]("The serverless client has no runtime");
    };
    buildRuntimeBoundMembers(noRuntime, noRuntime);
    const createConnection = (runtime)=>{
        let closing;
        const close = ()=>{
            closing ??= runtime.close();
            return closing;
        };
        const runtimeBoundMembers = buildRuntimeBoundMembers(()=>{
            if (closing !== void 0) throw closedConnectionError();
            return runtime;
        }, ()=>runtime);
        return {
            sql,
            raw,
            enums,
            nativeEnums,
            toSql,
            context,
            contract,
            stack,
            ...runtimeBoundMembers,
            close,
            [Symbol.asyncDispose]: close
        };
    };
    return {
        sql,
        raw,
        enums,
        nativeEnums,
        toSql,
        context,
        stack,
        contract,
        async connect (binding) {
            const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$binding$2d$DgumIe5f$2d$BPV5_73g$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])(binding.url);
            const driverDescriptor = stack.driver;
            const adapter = stack.adapter.create(stack);
            const driver = driverDescriptor.create({
                cursor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$binding$2d$DgumIe5f$2d$BPV5_73g$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"])(cursor)
            });
            const pgClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$suppress$2d$idle$2d$connection$2d$errors$2d$DzApeUb3$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__suppressIdleConnectionErrors$3e$__$3c$export__suppressIdleConnectionErrors__as__n$3e$__$3c$export__n__as__suppressIdleConnectionErrors$3e$__["suppressIdleConnectionErrors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$session$2d$settings$2d$cHekxETj$2d$CKXTmPoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__createPgClient$3e$__["createPgClient"])({
                connectionString: url,
                connectionTimeoutMillis: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$binding$2d$DgumIe5f$2d$BPV5_73g$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]
            }, stack.target.sessionSettings ?? {}));
            await driver.connect({
                kind: "pgClient",
                client: pgClient,
                ownedByDriver: true
            });
            const runtime = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$postgres$2d$runtime$2d$BKdag6p9$2d$gHVB2jfC$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"]({
                context,
                adapter,
                driver,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$exports$2d$WNaGWaJR$2d$CVNygh$2d$P$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__x__as__toRuntimeOptions$3e$__["toRuntimeOptions"])(options),
                closeRefusal: "when-idle"
            });
            const connection = createConnection(runtime);
            try {
                await (await driver.acquireConnection()).release();
            } catch (err) {
                await driver.close().catch(()=>void 0);
                throw connectionFailedError(url, err);
            }
            return connection;
        }
    };
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/newServer/notesphere_server/node_modules/arkregex/out/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$arkregex$2f$out$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/arkregex/out/regex.js [app-route] (ecmascript)");
;
}),
"[project]/newServer/notesphere_server/node_modules/arkregex/out/regex.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "regex",
    ()=>regex
]);
const regex = (src, flags)=>new RegExp(src, flags);
Object.assign(regex, {
    as: regex
});
}),
"[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_path,
    "a",
    ()=>normalizeString,
    "b",
    ()=>relative,
    "c",
    ()=>basename,
    "d",
    ()=>dirname,
    "e",
    ()=>extname,
    "f",
    ()=>format,
    "g",
    ()=>normalizeWindowsPath,
    "i",
    ()=>isAbsolute,
    "j",
    ()=>join,
    "m",
    ()=>matchesGlob,
    "n",
    ()=>normalize,
    "p",
    ()=>parse,
    "r",
    ()=>resolve,
    "s",
    ()=>sep,
    "t",
    ()=>toNamespacedPath
]);
let _lazyMatch = ()=>{
    var __lib__ = (()=>{
        var m = Object.defineProperty, V = Object.getOwnPropertyDescriptor, G = Object.getOwnPropertyNames, T = Object.prototype.hasOwnProperty, q = (r, e)=>{
            for(var n in e)m(r, n, {
                get: e[n],
                enumerable: true
            });
        }, H = (r, e, n, a)=>{
            if (e && typeof e == "object" || typeof e == "function") for (let t of G(e))!T.call(r, t) && t !== n && m(r, t, {
                get: ()=>e[t],
                enumerable: !(a = V(e, t)) || a.enumerable
            });
            return r;
        }, J = (r)=>H(m({}, "__esModule", {
                value: true
            }), r), w = {};
        q(w, {
            default: ()=>re
        });
        var A = (r)=>Array.isArray(r), d = (r)=>typeof r == "function", Q = (r)=>r.length === 0, W = (r)=>typeof r == "number", K = (r)=>typeof r == "object" && r !== null, X = (r)=>r instanceof RegExp, b = (r)=>typeof r == "string", h = (r)=>r === void 0, Y = (r)=>{
            const e = new Map;
            return (n)=>{
                const a = e.get(n);
                if (a) return a;
                const t = r(n);
                return e.set(n, t), t;
            };
        }, rr = (r, e, n = {})=>{
            const a = {
                cache: {},
                input: r,
                index: 0,
                indexMax: 0,
                options: n,
                output: []
            };
            if (v(e)(a) && a.index === r.length) return a.output;
            throw new Error(`Failed to parse at index ${a.indexMax}`);
        }, i = (r, e)=>A(r) ? er(r, e) : b(r) ? ar(r, e) : nr(r, e), er = (r, e)=>{
            const n = {};
            for (const a of r){
                if (a.length !== 1) throw new Error(`Invalid character: "${a}"`);
                const t = a.charCodeAt(0);
                n[t] = true;
            }
            return (a)=>{
                const t = a.index, o = a.input;
                for(; a.index < o.length && o.charCodeAt(a.index) in n;)a.index += 1;
                const u = a.index;
                if (u > t) {
                    if (!h(e) && !a.options.silent) {
                        const s = a.input.slice(t, u), c = d(e) ? e(s, o, String(t)) : e;
                        h(c) || a.output.push(c);
                    }
                    a.indexMax = Math.max(a.indexMax, a.index);
                }
                return true;
            };
        }, nr = (r, e)=>{
            const n = r.source, a = r.flags.replace(/y|$/, "y"), t = new RegExp(n, a);
            return g((o)=>{
                t.lastIndex = o.index;
                const u = t.exec(o.input);
                if (u) {
                    if (!h(e) && !o.options.silent) {
                        const s = d(e) ? e(...u, o.input, String(o.index)) : e;
                        h(s) || o.output.push(s);
                    }
                    return o.index += u[0].length, o.indexMax = Math.max(o.indexMax, o.index), true;
                } else return false;
            });
        }, ar = (r, e)=>(n)=>{
                if (n.input.startsWith(r, n.index)) {
                    if (!h(e) && !n.options.silent) {
                        const t = d(e) ? e(r, n.input, String(n.index)) : e;
                        h(t) || n.output.push(t);
                    }
                    return n.index += r.length, n.indexMax = Math.max(n.indexMax, n.index), true;
                } else return false;
            }, C = (r, e, n, a)=>{
            const t = v(r);
            return g(_(M((o)=>{
                let u = 0;
                for(; u < n;){
                    const s = o.index;
                    if (!t(o) || (u += 1, o.index === s)) break;
                }
                return u >= e;
            })));
        }, tr = (r, e)=>C(r, 0, 1), f = (r, e)=>C(r, 0, 1 / 0), x = (r, e)=>{
            const n = r.map(v);
            return g(_(M((a)=>{
                for(let t = 0, o = n.length; t < o; t++)if (!n[t](a)) return false;
                return true;
            })));
        }, l = (r, e)=>{
            const n = r.map(v);
            return g(_((a)=>{
                for(let t = 0, o = n.length; t < o; t++)if (n[t](a)) return true;
                return false;
            }));
        }, M = (r, e = false)=>{
            const n = v(r);
            return (a)=>{
                const t = a.index, o = a.output.length, u = n(a);
                return (!u || e) && (a.index = t, a.output.length !== o && (a.output.length = o)), u;
            };
        }, _ = (r, e)=>{
            const n = v(r);
            return n;
        }, g = (()=>{
            let r = 0;
            return (e)=>{
                const n = v(e), a = r += 1;
                return (t)=>{
                    var o;
                    if (t.options.memoization === false) return n(t);
                    const u = t.index, s = (o = t.cache)[a] || (o[a] = new Map), c = s.get(u);
                    if (c === false) return false;
                    if (W(c)) return t.index = c, true;
                    if (c) return t.index = c.index, c.output?.length && t.output.push(...c.output), true;
                    {
                        const Z = t.output.length;
                        if (n(t)) {
                            const D = t.index, U = t.output.length;
                            if (U > Z) {
                                const ee = t.output.slice(Z, U);
                                s.set(u, {
                                    index: D,
                                    output: ee
                                });
                            } else s.set(u, D);
                            return true;
                        } else return s.set(u, false), false;
                    }
                };
            };
        })(), E = (r)=>{
            let e;
            return (n)=>(e || (e = v(r())), e(n));
        }, v = Y((r)=>{
            if (d(r)) return Q(r) ? E(r) : r;
            if (b(r) || X(r)) return i(r);
            if (A(r)) return x(r);
            if (K(r)) return l(Object.values(r));
            throw new Error("Invalid rule");
        }), P = "abcdefghijklmnopqrstuvwxyz", ir = (r)=>{
            let e = "";
            for(; r > 0;){
                const n = (r - 1) % 26;
                e = P[n] + e, r = Math.floor((r - 1) / 26);
            }
            return e;
        }, O = (r)=>{
            let e = 0;
            for(let n = 0, a = r.length; n < a; n++)e = e * 26 + P.indexOf(r[n]) + 1;
            return e;
        }, S = (r, e)=>{
            if (e < r) return S(e, r);
            const n = [];
            for(; r <= e;)n.push(r++);
            return n;
        }, or = (r, e, n)=>S(r, e).map((a)=>String(a).padStart(n, "0")), R = (r, e)=>S(O(r), O(e)).map(ir), p = (r)=>r, z = (r)=>ur((e)=>rr(e, r, {
                    memoization: false
                }).join("")), ur = (r)=>{
            const e = {};
            return (n)=>e[n] ?? (e[n] = r(n));
        }, sr = i(/^\*\*\/\*$/, ".*"), cr = i(/^\*\*\/(\*)?([ a-zA-Z0-9._-]+)$/, (r, e, n)=>`.*${e ? "" : "(?:^|/)"}${n.replaceAll(".", "\\.")}`), lr = i(/^\*\*\/(\*)?([ a-zA-Z0-9._-]*)\{([ a-zA-Z0-9._-]+(?:,[ a-zA-Z0-9._-]+)*)\}$/, (r, e, n, a)=>`.*${e ? "" : "(?:^|/)"}${n.replaceAll(".", "\\.")}(?:${a.replaceAll(",", "|").replaceAll(".", "\\.")})`), y = i(/\\./, p), pr = i(/[$.*+?^(){}[\]\|]/, (r)=>`\\${r}`), vr = i(/./, p), hr = i(/^(?:!!)*!(.*)$/, (r, e)=>`(?!^${L(e)}$).*?`), dr = i(/^(!!)+/, ""), fr = l([
            hr,
            dr
        ]), xr = i(/\/(\*\*\/)+/, "(?:/.+/|/)"), gr = i(/^(\*\*\/)+/, "(?:^|.*/)"), mr = i(/\/(\*\*)$/, "(?:/.*|$)"), _r = i(/\*\*/, ".*"), j = l([
            xr,
            gr,
            mr,
            _r
        ]), Sr = i(/\*\/(?!\*\*\/)/, "[^/]*/"), yr = i(/\*/, "[^/]*"), N = l([
            Sr,
            yr
        ]), k = i("?", "[^/]"), $r = i("[", p), wr = i("]", p), Ar = i(/[!^]/, "^/"), br = i(/[a-z]-[a-z]|[0-9]-[0-9]/i, p), Cr = i(/[$.*+?^(){}[\|]/, (r)=>`\\${r}`), Mr = i(/[^\]]/, p), Er = l([
            y,
            Cr,
            br,
            Mr
        ]), B = x([
            $r,
            tr(Ar),
            f(Er),
            wr
        ]), Pr = i("{", "(?:"), Or = i("}", ")"), Rr = i(/(\d+)\.\.(\d+)/, (r, e, n)=>or(+e, +n, Math.min(e.length, n.length)).join("|")), zr = i(/([a-z]+)\.\.([a-z]+)/, (r, e, n)=>R(e, n).join("|")), jr = i(/([A-Z]+)\.\.([A-Z]+)/, (r, e, n)=>R(e.toLowerCase(), n.toLowerCase()).join("|").toUpperCase()), Nr = l([
            Rr,
            zr,
            jr
        ]), I = x([
            Pr,
            Nr,
            Or
        ]), kr = i("{", "(?:"), Br = i("}", ")"), Ir = i(",", "|"), Fr = i(/[$.*+?^(){[\]\|]/, (r)=>`\\${r}`), Lr = i(/[^}]/, p), Zr = E(()=>F), Dr = l([
            j,
            N,
            k,
            B,
            I,
            Zr,
            y,
            Fr,
            Ir,
            Lr
        ]), F = x([
            kr,
            f(Dr),
            Br
        ]), Ur = f(l([
            sr,
            cr,
            lr,
            fr,
            j,
            N,
            k,
            B,
            I,
            F,
            y,
            pr,
            vr
        ])), Vr = Ur, Gr = z(Vr), L = Gr, Tr = i(/\\./, p), qr = i(/./, p), Hr = i(/\*\*\*+/, "*"), Jr = i(/([^/{[(!])\*\*/, (r, e)=>`${e}*`), Qr = i(/(^|.)\*\*(?=[^*/)\]}])/, (r, e)=>`${e}*`), Wr = f(l([
            Tr,
            Hr,
            Jr,
            Qr,
            qr
        ])), Kr = Wr, Xr = z(Kr), Yr = Xr, $ = (r, e)=>{
            const n = Array.isArray(r) ? r : [
                r
            ];
            if (!n.length) return false;
            const a = n.map($.compile), t = n.every((s)=>/(\/(?:\*\*)?|\[\/\])$/.test(s)), o = e.replace(/[\\\/]+/g, "/").replace(/\/$/, t ? "/" : "");
            return a.some((s)=>s.test(o));
        };
        $.compile = (r)=>new RegExp(`^${L(Yr(r))}$`, "s");
        var re = $;
        return J(w);
    })();
    return __lib__.default || __lib__;
};
let _match;
const zeptomatch = (path, pattern)=>{
    if (!_match) {
        _match = _lazyMatch();
        _lazyMatch = null;
    }
    return _match(path, pattern);
};
const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
    if (!input) {
        return input;
    }
    return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r)=>r.toUpperCase());
}
const _UNC_REGEX = /^[/\\]{2}/;
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
const _ROOT_FOLDER_RE = /^\/([A-Za-z]:)?$/;
const _EXTNAME_RE = /.(\.[^./]+|\.)$/;
const _PATH_ROOT_RE = /^[/\\]|^[a-zA-Z]:[/\\]/;
const sep = "/";
const normalize = function(path) {
    if (path.length === 0) {
        return ".";
    }
    path = normalizeWindowsPath(path);
    const isUNCPath = path.match(_UNC_REGEX);
    const isPathAbsolute = isAbsolute(path);
    const trailingSeparator = path[path.length - 1] === "/";
    path = normalizeString(path, !isPathAbsolute);
    if (path.length === 0) {
        if (isPathAbsolute) {
            return "/";
        }
        return trailingSeparator ? "./" : ".";
    }
    if (trailingSeparator) {
        path += "/";
    }
    if (_DRIVE_LETTER_RE.test(path)) {
        path += "/";
    }
    if (isUNCPath) {
        if (!isPathAbsolute) {
            return `//./${path}`;
        }
        return `//${path}`;
    }
    return isPathAbsolute && !isAbsolute(path) ? `/${path}` : path;
};
const join = function(...segments) {
    let path = "";
    for (const seg of segments){
        if (!seg) {
            continue;
        }
        if (path.length > 0) {
            const pathTrailing = path[path.length - 1] === "/";
            const segLeading = seg[0] === "/";
            const both = pathTrailing && segLeading;
            if (both) {
                path += seg.slice(1);
            } else {
                path += pathTrailing || segLeading ? seg : `/${seg}`;
            }
        } else {
            path += seg;
        }
    }
    return normalize(path);
};
function cwd() {
    if (typeof process !== "undefined" && typeof process.cwd === "function") {
        return process.cwd().replace(/\\/g, "/");
    }
    return "/";
}
const resolve = function(...arguments_) {
    arguments_ = arguments_.map((argument)=>normalizeWindowsPath(argument));
    let resolvedPath = "";
    let resolvedAbsolute = false;
    for(let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--){
        const path = index >= 0 ? arguments_[index] : cwd();
        if (!path || path.length === 0) {
            continue;
        }
        resolvedPath = `${path}/${resolvedPath}`;
        resolvedAbsolute = isAbsolute(path);
    }
    resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
    if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
        return `/${resolvedPath}`;
    }
    return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
    let res = "";
    let lastSegmentLength = 0;
    let lastSlash = -1;
    let dots = 0;
    let char = null;
    for(let index = 0; index <= path.length; ++index){
        if (index < path.length) {
            char = path[index];
        } else if (char === "/") {
            break;
        } else {
            char = "/";
        }
        if (char === "/") {
            if (lastSlash === index - 1 || dots === 1) ;
            else if (dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
                    if (res.length > 2) {
                        const lastSlashIndex = res.lastIndexOf("/");
                        if (lastSlashIndex === -1) {
                            res = "";
                            lastSegmentLength = 0;
                        } else {
                            res = res.slice(0, lastSlashIndex);
                            lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                        }
                        lastSlash = index;
                        dots = 0;
                        continue;
                    } else if (res.length > 0) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = index;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    res += res.length > 0 ? "/.." : "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) {
                    res += `/${path.slice(lastSlash + 1, index)}`;
                } else {
                    res = path.slice(lastSlash + 1, index);
                }
                lastSegmentLength = index - lastSlash - 1;
            }
            lastSlash = index;
            dots = 0;
        } else if (char === "." && dots !== -1) {
            ++dots;
        } else {
            dots = -1;
        }
    }
    return res;
}
const isAbsolute = function(p) {
    return _IS_ABSOLUTE_RE.test(p);
};
const toNamespacedPath = function(p) {
    return normalizeWindowsPath(p);
};
const extname = function(p) {
    if (p === "..") return "";
    const match = _EXTNAME_RE.exec(normalizeWindowsPath(p));
    return match && match[1] || "";
};
const relative = function(from, to) {
    const _from = resolve(from).replace(_ROOT_FOLDER_RE, "$1").split("/");
    const _to = resolve(to).replace(_ROOT_FOLDER_RE, "$1").split("/");
    if (_to[0][1] === ":" && _from[0][1] === ":" && _from[0] !== _to[0]) {
        return _to.join("/");
    }
    const _fromCopy = [
        ..._from
    ];
    for (const segment of _fromCopy){
        if (_to[0] !== segment) {
            break;
        }
        _from.shift();
        _to.shift();
    }
    return [
        ..._from.map(()=>".."),
        ..._to
    ].join("/");
};
const dirname = function(p) {
    const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
    if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
        segments[0] += "/";
    }
    return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};
const format = function(p) {
    const ext = p.ext ? p.ext.startsWith(".") ? p.ext : `.${p.ext}` : "";
    const segments = [
        p.root,
        p.dir,
        p.base ?? (p.name ?? "") + ext
    ].filter(Boolean);
    return normalizeWindowsPath(p.root ? resolve(...segments) : segments.join("/"));
};
const basename = function(p, extension) {
    const segments = normalizeWindowsPath(p).split("/");
    let lastSegment = "";
    for(let i = segments.length - 1; i >= 0; i--){
        const val = segments[i];
        if (val) {
            lastSegment = val;
            break;
        }
    }
    return extension && lastSegment.endsWith(extension) ? lastSegment.slice(0, -extension.length) : lastSegment;
};
const parse = function(p) {
    const root = _PATH_ROOT_RE.exec(p)?.[0]?.replace(/\\/g, "/") || "";
    const base = basename(p);
    const extension = extname(base);
    return {
        root,
        dir: dirname(p),
        base,
        ext: extension,
        name: base.slice(0, base.length - extension.length)
    };
};
const matchesGlob = (path, pattern)=>{
    return zeptomatch(pattern, normalize(path));
};
const _path = {
    __proto__: null,
    basename: basename,
    dirname: dirname,
    extname: extname,
    format: format,
    isAbsolute: isAbsolute,
    join: join,
    matchesGlob: matchesGlob,
    normalize: normalize,
    normalizeString: normalizeString,
    parse: parse,
    relative: relative,
    resolve: resolve,
    sep: sep,
    toNamespacedPath: toNamespacedPath
};
;
}),
"[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript) <export b as relative>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "relative",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["b"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript) <export c as basename>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "basename",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript) <export d as dirname>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dirname",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["d"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript) <export j as join>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "join",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["j"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript) <export r as resolve>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolve",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pathe$2f$dist$2f$shared$2f$pathe$2e$M$2d$eThtNZ$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/pg-connection-string/esm/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "parse",
    ()=>parse,
    "parseIntoClientConfig",
    ()=>parseIntoClientConfig,
    "toClientConfig",
    ()=>toClientConfig
]);
// ESM wrapper for pg-connection-string
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$2d$connection$2d$string$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pg-connection-string/index.js [app-route] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$2d$connection$2d$string$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].parse;
const parse = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$2d$connection$2d$string$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].parse;
const toClientConfig = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$2d$connection$2d$string$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].toClientConfig;
const parseIntoClientConfig = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$2d$connection$2d$string$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].parseIntoClientConfig;
}),
"[project]/newServer/notesphere_server/node_modules/pg-connection-string/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

//Parse method copied from https://github.com/brianc/node-postgres
//Copyright (c) 2010-2014 Brian Carlson (brian.m.carlson@gmail.com)
//MIT License
//parses a connection string
function parse(str, options = {}) {
    //unix socket
    if (str.charAt(0) === '/') {
        const config = str.split(' ');
        return {
            host: config[0],
            database: config[1]
        };
    }
    // Check for empty host in URL
    const config = Object.create(null);
    let result;
    let dummyHost = false;
    if (/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(str)) {
        // Ensure spaces are encoded as %20
        str = encodeURI(str).replace(/%25(\d\d)/g, '%$1');
    }
    try {
        try {
            result = new URL(str, 'postgres://base');
        } catch (e) {
            // The URL is invalid so try again with a dummy host
            result = new URL(str.replace('@/', '@___DUMMY___/'), 'postgres://base');
            dummyHost = true;
        }
    } catch (err) {
        // Remove the input from the error message to avoid leaking sensitive information
        err.input && (err.input = '*****REDACTED*****');
        throw err;
    }
    // We'd like to use Object.fromEntries() here but Node.js 10 does not support it
    for (const entry of result.searchParams.entries()){
        config[entry[0]] = entry[1];
    }
    config.user = config.user || decodeURIComponent(result.username);
    config.password = config.password || decodeURIComponent(result.password);
    if (result.protocol == 'socket:') {
        config.host = decodeURI(result.pathname);
        config.database = result.searchParams.get('db');
        config.client_encoding = result.searchParams.get('encoding');
        return config;
    }
    const hostname = (dummyHost ? '' : result.hostname).replace(/^\[(.+)\]$/, '$1');
    if (!config.host) {
        // Only set the host if there is no equivalent query param.
        config.host = decodeURIComponent(hostname);
    } else if (hostname && /^%2f/i.test(hostname)) {
        // Only prepend the hostname to the pathname if it is not a URL encoded Unix socket host.
        result.pathname = hostname + result.pathname;
    }
    if (!config.port) {
        // Only set the port if there is no equivalent query param.
        config.port = result.port;
    }
    const pathname = result.pathname.slice(1) || null;
    config.database = pathname ? decodeURI(pathname) : null;
    if (config.ssl === 'true' || config.ssl === '1') {
        config.ssl = true;
    }
    if (config.ssl === '0') {
        config.ssl = false;
    }
    if (config.sslcert || config.sslkey || config.sslrootcert || config.sslmode) {
        config.ssl = {};
    }
    // sslnegotiation=direct implies SSL is in use (libpq requires sslmode>=require),
    // so enable SSL if the connection string did not otherwise configure it.
    if (config.sslnegotiation === 'direct' && config.ssl === undefined) {
        config.ssl = true;
    }
    // Only try to load fs if we expect to read from the disk
    const fs = config.sslcert || config.sslkey || config.sslrootcert ? __turbopack_context__.r("[externals]/fs [external] (fs, cjs)") : null;
    if (config.sslcert) {
        config.ssl.cert = fs.readFileSync(config.sslcert).toString();
    }
    if (config.sslkey) {
        config.ssl.key = fs.readFileSync(config.sslkey).toString();
    }
    if (config.sslrootcert) {
        config.ssl.ca = fs.readFileSync(config.sslrootcert).toString();
    }
    if (options.useLibpqCompat && config.uselibpqcompat) {
        throw new Error('Both useLibpqCompat and uselibpqcompat are set. Please use only one of them.');
    }
    if (config.uselibpqcompat === 'true' || options.useLibpqCompat) {
        switch(config.sslmode){
            case 'disable':
                {
                    config.ssl = false;
                    break;
                }
            case 'prefer':
                {
                    config.ssl.rejectUnauthorized = false;
                    break;
                }
            case 'require':
                {
                    if (config.sslrootcert) {
                        // If a root CA is specified, behavior of `sslmode=require` will be the same as that of `verify-ca`
                        config.ssl.checkServerIdentity = function() {};
                    } else {
                        config.ssl.rejectUnauthorized = false;
                    }
                    break;
                }
            case 'verify-ca':
                {
                    if (!config.ssl.ca) {
                        throw new Error('SECURITY WARNING: Using sslmode=verify-ca requires specifying a CA with sslrootcert. If a public CA is used, verify-ca allows connections to a server that somebody else may have registered with the CA, making you vulnerable to Man-in-the-Middle attacks. Either specify a custom CA certificate with sslrootcert parameter or use sslmode=verify-full for proper security.');
                    }
                    config.ssl.checkServerIdentity = function() {};
                    break;
                }
            case 'verify-full':
                {
                    break;
                }
        }
    } else {
        switch(config.sslmode){
            case 'disable':
                {
                    config.ssl = false;
                    break;
                }
            case 'prefer':
            case 'require':
            case 'verify-ca':
            case 'verify-full':
                {
                    if (config.sslmode !== 'verify-full') {
                        deprecatedSslModeWarning(config.sslmode);
                    }
                    break;
                }
            case 'no-verify':
                {
                    config.ssl.rejectUnauthorized = false;
                    break;
                }
        }
    }
    return config;
}
// convert pg-connection-string ssl config to a ClientConfig.ConnectionOptions
function toConnectionOptions(sslConfig) {
    const connectionOptions = Object.entries(sslConfig).reduce((c, [key, value])=>{
        // we explicitly check for undefined and null instead of `if (value)` because some
        // options accept falsy values. Example: `ssl.rejectUnauthorized = false`
        if (value !== undefined && value !== null) {
            c[key] = value;
        }
        return c;
    }, Object.create(null));
    return connectionOptions;
}
// convert pg-connection-string config to a ClientConfig
function toClientConfig(config) {
    const poolConfig = Object.entries(config).reduce((c, [key, value])=>{
        if (key === 'ssl') {
            const sslConfig = value;
            if (typeof sslConfig === 'boolean') {
                c[key] = sslConfig;
            }
            if (typeof sslConfig === 'object') {
                c[key] = toConnectionOptions(sslConfig);
            }
        } else if (value !== undefined && value !== null) {
            if (key === 'port') {
                // when port is not specified, it is converted into an empty string
                // we want to avoid NaN or empty string as a values in ClientConfig
                if (value !== '') {
                    const v = parseInt(value, 10);
                    if (isNaN(v)) {
                        throw new Error(`Invalid ${key}: ${value}`);
                    }
                    c[key] = v;
                }
            } else {
                c[key] = value;
            }
        }
        return c;
    }, Object.create(null));
    return poolConfig;
}
// parses a connection string into ClientConfig
function parseIntoClientConfig(str) {
    return toClientConfig(parse(str));
}
function deprecatedSslModeWarning(sslmode) {
    if (!deprecatedSslModeWarning.warned && typeof process !== 'undefined' && process.emitWarning) {
        deprecatedSslModeWarning.warned = true;
        process.emitWarning(`SECURITY WARNING: The SSL modes 'prefer', 'require', and 'verify-ca' are treated as aliases for 'verify-full'.
In the next major version (pg-connection-string v3.0.0 and pg v9.0.0), these modes will adopt standard libpq semantics, which have weaker security guarantees.

To prepare for this change:
- If you want the current behavior, explicitly use 'sslmode=verify-full'
- If you want libpq compatibility now, use 'uselibpqcompat=true&sslmode=${sslmode}'

See https://www.postgresql.org/docs/current/libpq-ssl.html for libpq SSL mode definitions.`);
    }
}
module.exports = parse;
parse.parse = parse;
parse.toClientConfig = toClientConfig;
parse.parseIntoClientConfig = parseIntoClientConfig;
}),
"[project]/newServer/notesphere_server/node_modules/pg-cursor/esm/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// ESM wrapper for pg-cursor
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$2d$cursor$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/pg-cursor/index.js [app-route] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$pg$2d$cursor$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/newServer/notesphere_server/node_modules/pg-cursor/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// note: can remove these deep requires when we bump min version of pg to 9.x
const Result = __turbopack_context__.r("[externals]/pg/lib/result.js [external] (pg/lib/result.js, cjs, [project]/newServer/notesphere_server/node_modules/pg)");
const prepare = __turbopack_context__.r("[externals]/pg/lib/utils.js [external] (pg/lib/utils.js, cjs, [project]/newServer/notesphere_server/node_modules/pg)").prepareValue;
const EventEmitter = __turbopack_context__.r("[externals]/events [external] (events, cjs)").EventEmitter;
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let nextUniqueID = 1 // concept borrowed from org.postgresql.core.v3.QueryExecutorImpl
;
class Cursor extends EventEmitter {
    constructor(text, values, config){
        super();
        this._conf = config || {};
        this.text = text;
        this.values = values ? values.map(prepare) : null;
        this.connection = null;
        this._queue = [];
        this.state = 'initialized';
        this._result = new Result(this._conf.rowMode, this._conf.types);
        this._Promise = this._conf.Promise || /*TURBOPACK member replacement*/ __turbopack_context__.g.Promise;
        this._cb = null;
        this._rows = null;
        this._portal = null;
        this._ifNoData = this._ifNoData.bind(this);
        this._rowDescription = this._rowDescription.bind(this);
    }
    _ifNoData() {
        if (this.state !== 'done' && this.state !== 'error') {
            this.state = 'idle';
            this._shiftQueue();
        }
        if (this.connection) {
            this.connection.removeListener('rowDescription', this._rowDescription);
        }
    }
    _rowDescription() {
        if (this.connection) {
            this.connection.removeListener('noData', this._ifNoData);
        }
    }
    submit(connection) {
        this.state = 'submitted';
        this.connection = connection;
        this._portal = 'C_' + nextUniqueID++;
        const con = connection;
        con.parse({
            text: this.text
        }, true);
        con.bind({
            portal: this._portal,
            values: this.values
        }, true);
        con.describe({
            type: 'P',
            name: this._portal
        }, true);
        con.flush();
        if (this._conf.types) {
            this._result._getTypeParser = this._conf.types.getTypeParser;
        }
        con.once('noData', this._ifNoData);
        con.once('rowDescription', this._rowDescription);
    }
    _shiftQueue() {
        if (this._queue.length) {
            this._getRows.apply(this, this._queue.shift());
        }
    }
    _closePortal() {
        if (this.state === 'done') return;
        // because we opened a named portal to stream results
        // we need to close the same named portal.  Leaving a named portal
        // open can lock tables for modification if inside a transaction.
        // see https://github.com/brianc/node-pg-cursor/issues/56
        this.connection.close({
            type: 'P',
            name: this._portal
        });
        // If we've received an error we already sent a sync message.
        // do not send another sync as it triggers another readyForQuery message.
        if (this.state !== 'error') {
            this.connection.sync();
        }
        this.state = 'done';
    }
    handleRowDescription(msg) {
        this._result.addFields(msg.fields);
        if (this.state !== 'done' && this.state !== 'error') {
            this.state = 'idle';
            this._shiftQueue();
        }
    }
    handleDataRow(msg) {
        const row = this._result.parseRow(msg.fields);
        this.emit('row', row, this._result);
        this._rows.push(row);
    }
    _sendRows() {
        if (this.state !== 'done') {
            this.state = 'idle';
        }
        setImmediate(()=>{
            const cb = this._cb;
            // remove callback before calling it
            // because likely a new one will be added
            // within the call to this callback
            this._cb = null;
            if (cb) {
                this._result.rows = this._rows;
                cb(null, this._rows, this._result);
            }
            this._rows = [];
        });
    }
    handleCommandComplete(msg) {
        this._result.addCommandComplete(msg);
        this._closePortal();
    }
    handlePortalSuspended() {
        this._sendRows();
    }
    handleReadyForQuery() {
        this._sendRows();
        this.state = 'done';
        this.emit('end', this._result);
    }
    handleEmptyQuery() {
        this.connection.sync();
    }
    handleError(msg) {
        // If this cursor has already closed, don't try to handle the error.
        if (this.state === 'done') return;
        // If we're in an initialized state we've never been submitted
        // and don't have a connection instance reference yet.
        // This can happen if you queue a stream and close the client before
        // the client has submitted the stream.  In this scenario we don't have
        // a connection so there's nothing to unsubscribe from.
        if (this.state !== 'initialized') {
            this.connection.removeListener('noData', this._ifNoData);
            this.connection.removeListener('rowDescription', this._rowDescription);
            // call sync to trigger a readyForQuery
            this.connection.sync();
        }
        this.state = 'error';
        this._error = msg;
        // satisfy any waiting callback
        if (this._cb) {
            this._cb(msg);
        }
        // dispatch error to all waiting callbacks
        for(let i = 0; i < this._queue.length; i++){
            const queuedCallback = this._queue[i][1];
            queuedCallback.call(this, msg);
        }
        this._queue.length = 0;
        if (this.listenerCount('error') > 0) {
            // only dispatch error events if we have a listener
            this.emit('error', msg);
        }
    }
    _getRows(rows, cb) {
        this.state = 'busy';
        this._cb = cb;
        this._rows = [];
        const msg = {
            portal: this._portal,
            rows: rows
        };
        this.connection.execute(msg, true);
        this.connection.flush();
    }
    // users really shouldn't be calling 'end' here and terminating a connection to postgres
    // via the low level connection.end api
    end(cb) {
        if (this.state !== 'initialized') {
            this.connection.sync();
        }
        this.connection.once('end', cb);
        this.connection.end();
    }
    close(cb) {
        let promise;
        if (!cb) {
            promise = new this._Promise((resolve, reject)=>{
                cb = (err)=>err ? reject(err) : resolve();
            });
        }
        if (!this.connection || this.state === 'done') {
            setImmediate(cb);
            return promise;
        }
        this._closePortal();
        this.connection.once('readyForQuery', function() {
            cb();
        });
        // Return the promise (or undefined)
        return promise;
    }
    read(rows, cb) {
        let promise;
        if (!cb) {
            promise = new this._Promise((resolve, reject)=>{
                cb = (err, rows)=>err ? reject(err) : resolve(rows);
            });
        }
        if (this.state === 'idle' || this.state === 'submitted') {
            this._getRows(rows, cb);
        } else if (this.state === 'busy' || this.state === 'initialized') {
            this._queue.push([
                rows,
                cb
            ]);
        } else if (this.state === 'error') {
            setImmediate(()=>cb(this._error));
        } else if (this.state === 'done') {
            setImmediate(()=>cb(null, []));
        } else {
            throw new Error('Unknown state: ' + this.state);
        }
        // Return the promise (or undefined)
        return promise;
    }
}
Cursor.prototype.end = util.deprecate(Cursor.prototype.end, 'Cursor.end is deprecated. Call end on the client itself to end a connection to the database.');
module.exports = Cursor;
}),
"[project]/newServer/notesphere_server/node_modules/postgres-array/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.parse = function(source, transform) {
    return new ArrayParser(source, transform).parse();
};
class ArrayParser {
    constructor(source, transform){
        this.source = source;
        this.transform = transform || identity;
        this.position = 0;
        this.entries = [];
        this.recorded = [];
        this.dimension = 0;
    }
    isEof() {
        return this.position >= this.source.length;
    }
    nextCharacter() {
        var character = this.source[this.position++];
        if (character === '\\') {
            return {
                value: this.source[this.position++],
                escaped: true
            };
        }
        return {
            value: character,
            escaped: false
        };
    }
    record(character) {
        this.recorded.push(character);
    }
    newEntry(includeEmpty) {
        var entry;
        if (this.recorded.length > 0 || includeEmpty) {
            entry = this.recorded.join('');
            if (entry === 'NULL' && !includeEmpty) {
                entry = null;
            }
            if (entry !== null) entry = this.transform(entry);
            this.entries.push(entry);
            this.recorded = [];
        }
    }
    consumeDimensions() {
        if (this.source[0] === '[') {
            while(!this.isEof()){
                var char = this.nextCharacter();
                if (char.value === '=') break;
            }
        }
    }
    parse(nested) {
        var character, parser, quote;
        this.consumeDimensions();
        while(!this.isEof()){
            character = this.nextCharacter();
            if (character.value === '{' && !quote) {
                this.dimension++;
                if (this.dimension > 1) {
                    parser = new ArrayParser(this.source.substr(this.position - 1), this.transform);
                    this.entries.push(parser.parse(true));
                    this.position += parser.position - 2;
                }
            } else if (character.value === '}' && !quote) {
                this.dimension--;
                if (!this.dimension) {
                    this.newEntry();
                    if (nested) return this.entries;
                }
            } else if (character.value === '"' && !character.escaped) {
                if (quote) this.newEntry(true);
                quote = !quote;
            } else if (character.value === ',' && !quote) {
                this.newEntry();
            } else {
                this.record(character.value);
            }
        }
        if (this.dimension !== 0) {
            throw new Error('array dimension not balanced');
        }
        return this.entries;
    }
}
function identity(value) {
    return value;
}
}),
"[project]/newServer/notesphere_server/node_modules/temporal-utils/dist/errorMessages.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Low-Level
__turbopack_context__.s([
    "expectedFinite",
    ()=>expectedFinite,
    "expectedPositive",
    ()=>expectedPositive,
    "forbiddenBigIntToNumber",
    ()=>forbiddenBigIntToNumber,
    "invalidEntity",
    ()=>invalidEntity,
    "invalidObject",
    ()=>invalidObject,
    "invalidOverflowOption",
    ()=>invalidOverflowOption,
    "nonOneRoundingIncrement",
    ()=>nonOneRoundingIncrement,
    "numberOutOfRange",
    ()=>numberOutOfRange,
    "unsupportedWeekNumbers",
    ()=>unsupportedWeekNumbers
]);
const expectedPositive = (entityName, num)=>`Non-positive ${entityName}: ${num}`;
const expectedFinite = (entityName, num)=>`Non-finite ${entityName}: ${num}`;
const forbiddenBigIntToNumber = (entityName)=>`Cannot convert bigint to ${entityName}`;
const invalidObject = 'Invalid object';
const numberOutOfRange = (entityName, val, min, max)=>invalidEntity(entityName, val) + `; must be between ${min}-${max}`;
const invalidEntity = (fieldName, val)=>`Invalid ${fieldName}: ${val}`;
const unsupportedWeekNumbers = 'Calendar week operations forbidden';
const nonOneRoundingIncrement = 'Non-1 roundingIncrement not allowed';
const invalidOverflowOption = 'Invalid overflow option';
}),
"[project]/newServer/notesphere_server/node_modules/temporal-utils/dist/protected-error-messages.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/newServer/notesphere_server/node_modules/temporal-utils/dist/protected.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-utils/dist/utils.js [app-route] (ecmascript)");
;
}),
"[project]/newServer/notesphere_server/node_modules/temporal-utils/dist/utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constrainToRange",
    ()=>constrainToRange,
    "isObjectLike",
    ()=>isObjectLike,
    "nanoInHour",
    ()=>nanoInHour,
    "nanoInMicro",
    ()=>nanoInMicro,
    "nanoInMilli",
    ()=>nanoInMilli,
    "nanoInMinute",
    ()=>nanoInMinute,
    "nanoInSec",
    ()=>nanoInSec,
    "normalizeNumberInRange",
    ()=>normalizeNumberInRange,
    "normalizeOptions",
    ()=>normalizeOptions,
    "requireNumberIsPositive",
    ()=>requireNumberIsPositive,
    "requireObjectLike",
    ()=>requireObjectLike,
    "toFiniteNumber",
    ()=>toFiniteNumber,
    "toIntegerWithTrunc",
    ()=>toIntegerWithTrunc,
    "toPositiveIntegerWithTruncation",
    ()=>toPositiveIntegerWithTruncation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-utils/dist/errorMessages.js [app-route] (ecmascript)");
;
const nanoInMicro = 1_000;
const nanoInMilli = 1_000_000;
const nanoInSec = 1_000_000_000;
const nanoInMinute = 60_000_000_000;
const nanoInHour = 3_600_000_000_000;
function normalizeOptions(options) {
    if (options === undefined) {
        return Object.create(null);
    }
    return requireObjectLike(options);
}
function toFiniteNumber(arg, entityName = 'number') {
    if (typeof arg === 'bigint') {
        throw new TypeError(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forbiddenBigIntToNumber"](entityName));
    }
    arg = Number(arg);
    if (!Number.isFinite(arg)) {
        throw new RangeError(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["expectedFinite"](entityName, arg));
    }
    return arg;
}
function toIntegerWithTrunc(arg, entityName) {
    return Math.trunc(toFiniteNumber(arg, entityName)) || 0; // ensure no -0
}
function toPositiveIntegerWithTruncation(arg, entityName) {
    return requireNumberIsPositive(toIntegerWithTrunc(arg, entityName), entityName);
}
function requireNumberIsPositive(num, entityName = 'number') {
    if (num <= 0) {
        throw new RangeError(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["expectedPositive"](entityName, num));
    }
    return num;
}
function constrainToRange(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function isObjectLike(arg) {
    return arg !== null && (typeof arg === 'object' || typeof arg === 'function');
}
function requireObjectLike(arg) {
    if (!isObjectLike(arg)) {
        throw new TypeError(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidObject"]);
    }
    return arg;
}
function normalizeNumberInRange(num, min, max, options) {
    const clamped = constrainToRange(num, min, max);
    if (normalizeOverflow(options) === 'reject' && num !== clamped) {
        throw new RangeError(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["numberOutOfRange"]('number', num, min, max));
    }
    return clamped;
}
/*
Match Temporal's field overflow shape without depending on the polyfill's
internal option readers. Undefined defaults to constrain; explicit reject asks
for exact in-range input.
*/ function normalizeOverflow(options) {
    options = normalizeOptions(options);
    const overflow = options.overflow;
    if (overflow === undefined) {
        return 'constrain';
    }
    if (overflow === 'constrain' || overflow === 'reject') {
        return overflow;
    }
    throw new RangeError(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidOverflowOption"]);
}
}),
"[project]/newServer/notesphere_server/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx, extraExtensions, ignoreCase) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        if (extraExtensions) {
            for(var extension in extraExtensions){
                var suffix = path.slice(-extension.length);
                if (suffix === extension || ignoreCase && suffix.toLowerCase() === extension.toLowerCase()) {
                    var output = extraExtensions[extension];
                    return output === extension ? path : path.slice(0, -extension.length) + output;
                }
            }
        }
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/newServer/notesphere_server/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript) <export __addDisposableResource as _>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__addDisposableResource"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript) <export __disposeResources as _>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__disposeResources"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
}),
"[project]/newServer/notesphere_server/node_modules/uniku/build/bytes-xqWxFYsM.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>n,
    "r",
    ()=>t,
    "t",
    ()=>e
]);
function e(e) {
    for(let t = e.length - 1; t >= 0; --t){
        if (e[t] < 255) return e[t] += 1, !0;
        e[t] = 0;
    }
    return !1;
}
function t(e, t, n) {
    e[t] = n / 1099511627776 & 255, e[t + 1] = n / 4294967296 & 255, e[t + 2] = n / 16777216 & 255, e[t + 3] = n / 65536 & 255, e[t + 4] = n / 256 & 255, e[t + 5] = n & 255;
}
function n(e, t, n) {
    e[t] = n >>> 24 & 255, e[t + 1] = n >>> 16 & 255, e[t + 2] = n >>> 8 & 255, e[t + 3] = n & 255;
}
;
}),
"[project]/newServer/notesphere_server/node_modules/uniku/build/cuid2/cuid2.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cuid2",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/errors.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$sha3$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/@noble/hashes/sha3.js [app-route] (ecmascript)");
;
;
;
const i = /^[a-z][0-9a-z]+$/, a = `0123456789abcdefghijklmnopqrstuvwxyz`, o = new TextEncoder, s = {
    counter: void 0,
    fingerprint: void 0
};
function c() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])() % 476782368;
}
function l(e) {
    let t = 0n;
    for (let n of e)t = t * 256n + BigInt(n);
    return t;
}
function u(e) {
    if (e === 0n) return `0`;
    let t = [];
    for(; e > 0n;)t.push(a[Number(e % 36n)]), e /= 36n;
    return t.reverse().join(``);
}
function d(e) {
    return `abcdefghijklmnopqrstuvwxyz`[Math.floor(e() * 26)];
}
function f(e, t) {
    let n = Array(e);
    for(let r = 0; r < e; r++)n[r] = a[Math.floor(t() * 36)];
    return n.join(``);
}
function p(e) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f40$noble$2f$hashes$2f$sha3$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sha3_512"])(o.encode(e));
}
function m() {
    let e = h;
    return u(l(p(Object.keys(globalThis).toString() + f(32, e)))).slice(1, 33);
}
function h() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])() / 4294967296;
}
function g(e) {
    if (e) {
        if (e.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`RANDOM_BYTES_TOO_SHORT`, `Random byte array cannot be empty`, {
            strategy: `cuid`
        });
        let n = 0;
        return ()=>{
            let t = e[n % e.length] / 256;
            return n += 1, t;
        };
    }
    return h;
}
function _(e) {
    let n = e?.length;
    if (n !== void 0 && (!Number.isInteger(n) || n < 2 || n > 32)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`LENGTH_OUT_OF_RANGE`, `CUID2 length must be between 2 and 32. Received: ${n}`, {
        strategy: `cuid`
    });
    let r = n ?? 24, i = g(e?.random);
    s.counter === void 0 && (s.counter = c()), s.fingerprint === void 0 && (s.fingerprint = m());
    let a = d(i), o = Date.now().toString(36);
    s.counter += 1;
    let h = s.counter.toString(36);
    return a + u(l(p(o + f(r, i) + h + s.fingerprint))).slice(1, r);
}
function v(e) {
    return typeof e == `string` && e.length >= 2 && e.length <= 32 && i.test(e);
}
const y = Object.assign(_, {
    isValid: v
});
;
}),
"[project]/newServer/notesphere_server/node_modules/uniku/build/errors.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BufferError",
    ()=>i,
    "ERROR_CODES",
    ()=>e,
    "InvalidInputError",
    ()=>n,
    "ParseError",
    ()=>r,
    "UniqueIdError",
    ()=>t
]);
const e = [
    `TIMESTAMP_OUT_OF_RANGE`,
    `CONFLICTING_OPTIONS`,
    `COUNTER_OUT_OF_RANGE`,
    `NODE_OUT_OF_RANGE`,
    `NODE_BITS_OUT_OF_RANGE`,
    `EPOCH_INVALID`,
    `PROCESS_ID_OUT_OF_RANGE`,
    `MACHINE_ID_BYTES_TOO_SHORT`,
    `RANDOM_BYTES_TOO_SHORT`,
    `RANDOM_OVERFLOW`,
    `LENGTH_OUT_OF_RANGE`,
    `ALPHABET_OUT_OF_RANGE`,
    `ALPHABET_INVALID_CHAR`,
    `ALPHABET_DUPLICATE`,
    `PREFIX_TOO_LONG`,
    `PREFIX_INVALID_CHAR`,
    `PREFIX_INVALID_BOUNDARY`,
    `UUID_NOT_V7`,
    `BYTES_INVALID_LENGTH`,
    `BUFFER_OUT_OF_BOUNDS`,
    `INVALID_CHAR`,
    `INVALID_LENGTH`,
    `INVALID_FORMAT`,
    `NON_CANONICAL`,
    `VALUE_OUT_OF_RANGE`
];
var t = class extends Error {
    strategy;
    constructor(e, t){
        super(e), this.name = this.constructor.name, this.strategy = t?.strategy;
    }
}, n = class extends t {
    code;
    _tag = `InvalidInputError`;
    constructor(e, t, n){
        super(t, n), this.code = e;
    }
}, r = class extends t {
    code;
    _tag = `ParseError`;
    constructor(e, t, n){
        super(t, n), this.code = e;
    }
}, i = class extends t {
    code;
    _tag = `BufferError`;
    constructor(e, t, n){
        super(t, n), this.code = e;
    }
};
;
}),
"[project]/newServer/notesphere_server/node_modules/uniku/build/ksuid/ksuid.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ksuid",
    ()=>C
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/validation-CTNpXm94.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/errors.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$bytes$2d$xqWxFYsM$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/bytes-xqWxFYsM.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$timestamp$2d$ChrSuQCR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/timestamp-ChrSuQCR.mjs [app-route] (ecmascript)");
;
;
;
;
;
const c = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`, l = 62n, u = (1n << 160n) - 1n, d = new Uint8Array(65536);
d.fill(255);
for(let e = 0; e < 62; e += 1)d[c.charCodeAt(e)] = e;
function f(e) {
    if (e.length < 20) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BufferError"](`BYTES_INVALID_LENGTH`, `KSUID bytes must be at least 20 bytes, got ${e.length}`, {
        strategy: `ksuid`
    });
    let t = 0n;
    for(let n = 0; n < 20; n += 1)t = t << 8n | BigInt(e[n]);
    let r = ``;
    for(; t > 0n;){
        let e = t % l;
        t /= l, r = c[Number(e)] + r;
    }
    return r.padStart(27, `0`);
}
function p(e) {
    if (e.length !== 27) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ParseError"](`INVALID_LENGTH`, `KSUID string must be 27 characters, got ${e.length}`, {
        strategy: `ksuid`
    });
    let t = 0n;
    for(let n = 0; n < 27; n += 1){
        let r = d[e.charCodeAt(n)];
        if (r === 255) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ParseError"](`INVALID_CHAR`, `Invalid KSUID character: ${e[n]}`, {
            strategy: `ksuid`
        });
        t = t * l + BigInt(r);
    }
    if (t > u) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ParseError"](`VALUE_OUT_OF_RANGE`, `KSUID string exceeds 160-bit range`, {
        strategy: `ksuid`
    });
    let n = new Uint8Array(20);
    for(let e = 19; e >= 0; --e)n[e] = Number(t & 255n), t >>= 8n;
    return n;
}
const m = 14e8, h = f(new Uint8Array(20).fill(255)), g = /^[0-9A-Za-z]{27}$/;
function _(e, t, n, r) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$bytes$2d$xqWxFYsM$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(n, r, e);
    for(let e = 0; e < 16; e += 1)n[r + 4 + e] = t[e];
}
function v(i, a, o = 0) {
    let c = i?.random;
    if (c && c.length < 16) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`RANDOM_BYTES_TOO_SHORT`, `Random bytes length must be >= 16 for KSUID`, {
        strategy: `ksuid`
    });
    let l, u = i === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$timestamp$2d$ChrSuQCR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(i, m, 5694967295, `ksuid`);
    l = u === void 0 ? Math.floor(Date.now() / 1e3) - m : u - m;
    let d = c ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])();
    if (a) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(a, o, 20)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BufferError"](`BUFFER_OUT_OF_BOUNDS`, `KSUID byte range ${o}:${o + 20 - 1} is out of buffer bounds`, {
            strategy: `ksuid`
        });
        return _(l, d, a, o), a;
    }
    let p = new Uint8Array(20);
    return _(l, d, p, 0), f(p);
}
function y(e) {
    return p(e);
}
function b(e) {
    if (e.length !== 20) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BufferError"](`BYTES_INVALID_LENGTH`, `KSUID bytes must be exactly 20 bytes, got ${e.length}`, {
        strategy: `ksuid`
    });
    return f(e);
}
function x(e) {
    let t = p(e);
    return (((t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3]) >>> 0) + m) * 1e3;
}
function S(e) {
    return typeof e == `string` && e.length === 27 && g.test(e) && e <= h;
}
const C = Object.assign(v, {
    toBytes: y,
    fromBytes: b,
    timestamp: x,
    isValid: S,
    NIL: `000000000000000000000000000`,
    MAX: h
});
;
}),
"[project]/newServer/notesphere_server/node_modules/uniku/build/nanoid/nanoid.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "URL_ALPHABET",
    ()=>n,
    "nanoid",
    ()=>h
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/errors.mjs [app-route] (ecmascript)");
;
const n = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-`, r = 2048, i = /^[A-Za-z0-9_-]+$/, a = new TextDecoder;
let o, s = ``, c = 0;
function l(e) {
    let t = Math.min(e * 128, 65536);
    if ((!o || o.length < t) && (o = new Uint8Array(t)), c + e > s.length) {
        crypto.getRandomValues(o);
        for(let e = 0; e < o.length; e++)o[e] = n.charCodeAt(o[e] & 63);
        s = a.decode(o), c = 0;
    }
}
function u(e) {
    l(e);
    let t = s.substring(c, c + e);
    return c += e, t;
}
function d(t) {
    if (t.length < 2) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`ALPHABET_OUT_OF_RANGE`, `Alphabet must contain at least 2 characters`, {
        strategy: `nanoid`
    });
    if (t.length > 256) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`ALPHABET_OUT_OF_RANGE`, `Alphabet must not exceed 256 characters`, {
        strategy: `nanoid`
    });
    let n = new Set;
    for (let r of t){
        let t = r.charCodeAt(0);
        if (t < 32 || t > 126) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`ALPHABET_INVALID_CHAR`, `Alphabet must contain only printable ASCII characters (32-126)`, {
            strategy: `nanoid`
        });
        if (n.has(r)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`ALPHABET_DUPLICATE`, `Duplicate character in alphabet: "${r}"`, {
            strategy: `nanoid`
        });
        n.add(r);
    }
}
function f(t) {
    if (!Number.isInteger(t) || t < 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`LENGTH_OUT_OF_RANGE`, `Length must be a non-negative integer`, {
        strategy: `nanoid`
    });
    if (t > r) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`LENGTH_OUT_OF_RANGE`, `Length must not exceed ${r}`, {
        strategy: `nanoid`
    });
}
function p(t) {
    if (t === void 0) return u(21);
    let r = 21, i = n, a;
    if (typeof t == `number`) r = t;
    else {
        if (t.length !== void 0 && t.size !== void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`CONFLICTING_OPTIONS`, "Pass only one of `length` or `size`, not both", {
            strategy: `nanoid`
        });
        r = t.length ?? t.size ?? 21, i = t.alphabet ?? `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-`, a = t.random, t.alphabet !== void 0 && d(i);
    }
    if (f(r), r === 0) return ``;
    if (i === `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-` && a === void 0) return u(r);
    let o = i.length;
    if (!(o & o - 1)) {
        let t = o - 1;
        if (a && a.length < r) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`RANDOM_BYTES_TOO_SHORT`, `Insufficient random bytes: need ${r}, have ${a.length}`, {
            strategy: `nanoid`
        });
        let n = a?.subarray(0, r) ?? globalThis.crypto.getRandomValues(new Uint8Array(r)), s = ``;
        for(let e = 0; e < r; e++)s += i[n[e] & t];
        return s;
    }
    let s = (2 << 31 - Math.clz32(o - 1 | 1)) - 1, c = Math.ceil(1.6 * s * r / o), l = ``, p = 0;
    for(; l.length < r;){
        let t;
        if (a) {
            if (a.length - p < c) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`RANDOM_BYTES_TOO_SHORT`, `Insufficient random bytes: need at least ${c} more, have ${a.length - p}`, {
                strategy: `nanoid`
            });
            t = a.subarray(p, p + c), p += c;
        } else t = globalThis.crypto.getRandomValues(new Uint8Array(c));
        for(let e = 0; e < t.length && l.length < r; e++){
            let n = t[e] & s;
            n < o && (l += i[n]);
        }
    }
    return l;
}
function m(e) {
    return typeof e == `string` && e.length > 0 && i.test(e);
}
const h = Object.assign(p, {
    isValid: m
});
;
}),
"[project]/newServer/notesphere_server/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>a,
    "r",
    ()=>o,
    "t",
    ()=>i
]);
const e = globalThis.crypto.getRandomValues.bind(globalThis.crypto), t = new Uint8Array(256);
let n = 256;
function r() {
    e(t), n = 0;
}
function i(i) {
    if (i > 256) return e(new Uint8Array(i));
    n + i > 256 && r();
    let a = n;
    return n += i, t.subarray(a, n);
}
function a() {
    n > 252 && r();
    let e = t[n] * 16777216 + t[n + 1] * 65536 + t[n + 2] * 256 + t[n + 3] >>> 0;
    return n += 4, e;
}
function o() {
    n > 240 && r();
    let e = n;
    return n += 16, t.subarray(e, n);
}
;
}),
"[project]/newServer/notesphere_server/node_modules/uniku/build/timestamp-ChrSuQCR.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/validation-CTNpXm94.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/errors.mjs [app-route] (ecmascript)");
;
;
function n(n, r, i, a) {
    let { msecs: o, secs: s } = n;
    if (o !== void 0 && s !== void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`CONFLICTING_OPTIONS`, "Pass only one of `msecs` or `secs`, not both", {
        strategy: a
    });
    if (o !== void 0) {
        let n = r * 1e3, s = i * 1e3 + 999;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(o, n, s)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`TIMESTAMP_OUT_OF_RANGE`, `Timestamp must be an integer between ${n} and ${s} milliseconds`, {
            strategy: a
        });
        return Math.floor(o / 1e3);
    }
    if (s !== void 0) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(s, r, i)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`TIMESTAMP_OUT_OF_RANGE`, `Timestamp must be an integer between ${r} and ${i} seconds`, {
            strategy: a
        });
        return s;
    }
}
;
}),
"[project]/newServer/notesphere_server/node_modules/uniku/build/ulid/ulid.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ulid",
    ()=>E
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/validation-CTNpXm94.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/errors.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$bytes$2d$xqWxFYsM$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/bytes-xqWxFYsM.mjs [app-route] (ecmascript)");
;
;
;
;
const l = `0123456789ABCDEFGHJKMNPQRSTVWXYZ`, u = new Uint8Array(65536);
u.fill(255);
for(let e = 0; e < 32; e += 1){
    let t = l.charCodeAt(e), n = l[e].toLowerCase().charCodeAt(0);
    u[t] = e, u[n] = e;
}
function d(e, t) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ParseError"](`INVALID_CHAR`, `Invalid ULID character: ${e[t]}`, {
        strategy: `ulid`
    });
}
function f() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ParseError"](`TIMESTAMP_OUT_OF_RANGE`, `ULID timestamp exceeds 48 bits`, {
        strategy: `ulid`
    });
}
function p(e) {
    let t = u[e.charCodeAt(0)];
    if (t === 255) throw d(e, 0);
    if (t > 7) throw f();
    let n = t;
    for(let t = 1; t < 10; t += 1){
        let r = u[e.charCodeAt(t)];
        if (r === 255) throw d(e, t);
        n = n * 32 + r;
    }
    return n;
}
function m(e) {
    return l[Math.floor(e / 35184372088832) & 31] + l[Math.floor(e / 1099511627776) & 31] + l[Math.floor(e / 34359738368) & 31] + l[Math.floor(e / 1073741824) & 31] + l[Math.floor(e / 33554432) & 31] + l[Math.floor(e / 1048576) & 31] + l[Math.floor(e / 32768) & 31] + l[Math.floor(e / 1024) & 31] + l[Math.floor(e / 32) & 31] + l[e & 31];
}
function h(e) {
    return l[e[0] >> 3 & 31] + l[(e[0] << 2 | e[1] >> 6) & 31] + l[e[1] >> 1 & 31] + l[(e[1] << 4 | e[2] >> 4) & 31] + l[(e[2] << 1 | e[3] >> 7) & 31] + l[e[3] >> 2 & 31] + l[(e[3] << 3 | e[4] >> 5) & 31] + l[e[4] & 31] + l[e[5] >> 3 & 31] + l[(e[5] << 2 | e[6] >> 6) & 31] + l[e[6] >> 1 & 31] + l[(e[6] << 4 | e[7] >> 4) & 31] + l[(e[7] << 1 | e[8] >> 7) & 31] + l[e[8] >> 2 & 31] + l[(e[8] << 3 | e[9] >> 5) & 31] + l[e[9] & 31];
}
function g(e) {
    if (e.length !== 26) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ParseError"](`INVALID_LENGTH`, `ULID string must be 26 characters`, {
        strategy: `ulid`
    });
    return p(e);
}
function _(e) {
    if (e.length !== 26) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ParseError"](`INVALID_LENGTH`, `ULID string must be 26 characters`, {
        strategy: `ulid`
    });
    let t = new Uint8Array(16), n = u[e.charCodeAt(0)], r = u[e.charCodeAt(1)], i = u[e.charCodeAt(2)], o = u[e.charCodeAt(3)], s = u[e.charCodeAt(4)], c = u[e.charCodeAt(5)], l = u[e.charCodeAt(6)], p = u[e.charCodeAt(7)], m = u[e.charCodeAt(8)], h = u[e.charCodeAt(9)], g = u[e.charCodeAt(10)], _ = u[e.charCodeAt(11)], v = u[e.charCodeAt(12)], y = u[e.charCodeAt(13)], b = u[e.charCodeAt(14)], x = u[e.charCodeAt(15)], S = u[e.charCodeAt(16)], C = u[e.charCodeAt(17)], w = u[e.charCodeAt(18)], T = u[e.charCodeAt(19)], E = u[e.charCodeAt(20)], D = u[e.charCodeAt(21)], O = u[e.charCodeAt(22)], k = u[e.charCodeAt(23)], A = u[e.charCodeAt(24)], j = u[e.charCodeAt(25)];
    if ((n | r | i | o | s | c | l | p | m | h | g | _ | v | y | b | x | S | C | w | T | E | D | O | k | A | j) & 128) {
        for(let t = 0; t < 26; t += 1)if (u[e.charCodeAt(t)] === 255) throw d(e, t);
    }
    if (n > 7) throw f();
    return t[0] = n << 5 | r, t[1] = i << 3 | o >> 2, t[2] = o << 6 | s << 1 | c >> 4, t[3] = c << 4 | l >> 1, t[4] = l << 7 | p << 2 | m >> 3, t[5] = m << 5 | h, t[6] = g << 3 | _ >> 2, t[7] = _ << 6 | v << 1 | y >> 4, t[8] = y << 4 | b >> 1, t[9] = b << 7 | x << 2 | S >> 3, t[10] = S << 5 | C, t[11] = w << 3 | T >> 2, t[12] = T << 6 | E << 1 | D >> 4, t[13] = D << 4 | O >> 1, t[14] = O << 7 | k << 2 | A >> 3, t[15] = A << 5 | j, t;
}
function v(e) {
    if (e.length !== 16) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BufferError"](`BYTES_INVALID_LENGTH`, `ULID bytes must be exactly 16 bytes, got ${e.length}`, {
        strategy: `ulid`
    });
    let t = 0;
    for(let n = 0; n < 6; n += 1)t = t * 256 + e[n];
    return m(t) + h(e.subarray(6, 16));
}
const y = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/i, b = 0xffffffffffff, x = {
    msecs: -1 / 0,
    lastRandom: new Uint8Array(10)
};
function S(e, t, n, r) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$bytes$2d$xqWxFYsM$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])(n, r, e);
    for(let e = 0; e < 10; e += 1)n[r + 6 + e] = t[e];
}
function C(e, n, i, a) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(i, a, 16)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BufferError"](`BUFFER_OUT_OF_BOUNDS`, `ULID byte range ${a}:${a + 16 - 1} is out of buffer bounds`, {
        strategy: `ulid`
    });
    S(e, n, i, a);
}
function w(t, r, a = 0) {
    let o, s;
    if (t) {
        let r = t.msecs;
        if (r !== void 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(r, 0, b)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`TIMESTAMP_OUT_OF_RANGE`, `Timestamp must be an integer between 0 and ${b}`, {
            strategy: `ulid`
        });
        o = r ?? Date.now();
        let a = t.random;
        if (a) {
            if (a.length < 10) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`RANDOM_BYTES_TOO_SHORT`, `Random bytes length must be >= 10 for ULID`, {
                strategy: `ulid`
            });
            s = a;
        } else s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])();
    } else if (o = Date.now(), o > x.msecs) s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])(), x.msecs = o, x.lastRandom.set(s.subarray(0, 10));
    else {
        if (o = x.msecs, !(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$bytes$2d$xqWxFYsM$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(x.lastRandom)) throw x.lastRandom.fill(255), new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`RANDOM_OVERFLOW`, `ULID random component overflowed while preserving monotonic order`, {
            strategy: `ulid`
        });
        s = x.lastRandom;
    }
    return r ? (C(o, s, r, a), r) : m(o) + h(s);
}
function T(e) {
    return typeof e == `string` && y.test(e);
}
const E = Object.assign(w, {
    toBytes: (e)=>_(e),
    fromBytes: (e)=>v(e),
    timestamp: (e)=>g(e),
    isValid: T,
    NIL: `00000000000000000000000000`,
    MAX: `7ZZZZZZZZZZZZZZZZZZZZZZZZZ`
});
;
}),
"[project]/newServer/notesphere_server/node_modules/uniku/build/uuid-BPebYihz.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>s,
    "r",
    ()=>c,
    "t",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/errors.mjs [app-route] (ecmascript)");
;
function n(e) {
    return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 65 + 10 : e >= 97 && e <= 102 ? e - 97 + 10 : -1;
}
const r = [
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    -1,
    4,
    4,
    5,
    5,
    -1,
    6,
    6,
    7,
    7,
    -1,
    8,
    8,
    9,
    9,
    -1,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    14,
    14,
    15,
    15
], i = [
    !0,
    !1,
    !0,
    !1,
    !0,
    !1,
    !0,
    !1,
    !1,
    !0,
    !1,
    !0,
    !1,
    !1,
    !0,
    !1,
    !0,
    !1,
    !1,
    !0,
    !1,
    !0,
    !1,
    !1,
    !0,
    !1,
    !0,
    !1,
    !0,
    !1,
    !0,
    !1,
    !0,
    !1,
    !0,
    !1
], a = Array.from({
    length: 256
}, (e, t)=>t.toString(16).padStart(2, `0`));
function o(t) {
    if (t.length !== 16) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BufferError"](`BYTES_INVALID_LENGTH`, `UUID bytes must be exactly 16 bytes, got ${t.length}`, {
        strategy: `uuid`
    });
    return s(t);
}
function s(e) {
    return a[e[0]] + a[e[1]] + a[e[2]] + a[e[3]] + `-` + a[e[4]] + a[e[5]] + `-` + a[e[6]] + a[e[7]] + `-` + a[e[8]] + a[e[9]] + `-` + a[e[10]] + a[e[11]] + a[e[12]] + a[e[13]] + a[e[14]] + a[e[15]];
}
function c(e) {
    if (e.length !== 36) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ParseError"](`INVALID_LENGTH`, `UUID string must be 36 characters, got ${e.length}`, {
        strategy: `uuid`
    });
    if (e[8] !== `-` || e[13] !== `-` || e[18] !== `-` || e[23] !== `-`) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ParseError"](`INVALID_FORMAT`, `UUID string has invalid separators at positions 8, 13, 18, 23. Received: "${e}"`, {
        strategy: `uuid`
    });
    let a = new Uint8Array(16);
    for(let o = 0; o < 36; o += 1){
        let s = r[o];
        if (s === -1) continue;
        let c = n(e.charCodeAt(o));
        if (c === -1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ParseError"](`INVALID_CHAR`, `UUID string contains invalid hex character at position ${o}`, {
            strategy: `uuid`
        });
        i[o] ? a[s] = c << 4 : a[s] |= c;
    }
    return a;
}
;
}),
"[project]/newServer/notesphere_server/node_modules/uniku/build/uuid/v4.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uuidv4",
    ()=>g
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/validation-CTNpXm94.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/errors.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/uuid-BPebYihz.mjs [app-route] (ecmascript)");
;
;
;
;
const l = globalThis.crypto.randomUUID.bind(globalThis.crypto), u = new Uint8Array(16), d = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function f(e, t, n) {
    for(let r = 0; r < 16; r += 1)t[n + r] = e[r];
    t[n + 6] = t[n + 6] & 15 | 64, t[n + 8] = t[n + 8] & 63 | 128;
}
function p(e, t, n) {
    return !t && !e ? l() : m(e, t, n);
}
function m(i, a, s) {
    let c = i?.random;
    if (c && c.length < 16) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`RANDOM_BYTES_TOO_SHORT`, `Random bytes length must be >= 16`, {
        strategy: `uuid`
    });
    let l = a ? s ?? 0 : 0;
    if (a && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(a, l, 16)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BufferError"](`BUFFER_OUT_OF_BOUNDS`, `UUID byte range ${l}:${l + 16 - 1} is out of buffer bounds`, {
        strategy: `uuid`
    });
    let d = a ?? u;
    return f(c ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])(), d, l), a ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(d);
}
function h(e) {
    return typeof e == `string` && d.test(e);
}
const g = Object.assign(p, {
    toBytes: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"],
    fromBytes: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"],
    isValid: h,
    NIL: `00000000-0000-0000-0000-000000000000`,
    MAX: `ffffffff-ffff-ffff-ffff-ffffffffffff`
});
;
}),
"[project]/newServer/notesphere_server/node_modules/uniku/build/uuid/v7.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uuidv7",
    ()=>x
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/validation-CTNpXm94.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/errors.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/uniku/build/uuid-BPebYihz.mjs [app-route] (ecmascript)");
;
;
;
;
const u = /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, d = 0xffffffffffff, f = 4294967295, p = new Uint8Array(16), m = {
    msecs: -1 / 0,
    seq: 0
};
function h(e, t, n, r, i) {
    r[i++] = t / 1099511627776 & 255, r[i++] = t / 4294967296 & 255, r[i++] = t / 16777216 & 255, r[i++] = t / 65536 & 255, r[i++] = t / 256 & 255, r[i++] = t & 255, r[i++] = 112 | n >>> 28 & 15, r[i++] = n >>> 20 & 255, r[i++] = 128 | n >>> 14 & 63, r[i++] = n >>> 6 & 255, r[i++] = n << 2 & 255 | e[10] & 3, r[i++] = e[11], r[i++] = e[12], r[i++] = e[13], r[i++] = e[14], r[i++] = e[15];
}
function g(e, n, i, a, o) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(a, o, 16)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BufferError"](`BUFFER_OUT_OF_BOUNDS`, `UUID byte range ${o}:${o + 16 - 1} is out of buffer bounds`, {
        strategy: `uuid`
    });
    h(e, n, i, a, o);
}
function _(t, r, a = 0) {
    let o = t.msecs;
    if (o !== void 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(o, 0, d)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`TIMESTAMP_OUT_OF_RANGE`, `Timestamp must be an integer between 0 and ${d}`, {
        strategy: `uuid`
    });
    if (t.counter !== void 0 && t.seq !== void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`CONFLICTING_OPTIONS`, "Pass only one of `counter` or `seq`, not both", {
        strategy: `uuid`
    });
    let c = t.counter ?? t.seq;
    if (c !== void 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(c, 0, f)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`COUNTER_OUT_OF_RANGE`, `Counter must be an integer between 0 and ${f}`, {
        strategy: `uuid`
    });
    let l = t.random;
    if (l && l.length < 16) throw new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputError"](`RANDOM_BYTES_TOO_SHORT`, `Random bytes length must be >= 16`, {
        strategy: `uuid`
    });
    let u = l ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])(), m = o ?? Date.now(), _1 = c ?? u[6] << 23 | u[7] << 16 | u[8] << 8 | u[9];
    return r ? (g(u, m, _1, r, a), r) : (h(u, m, _1, p, 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(p));
}
function v(t, n, r) {
    if (t) return _(t, n, r);
    let i = Date.now(), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])();
    return i > m.msecs ? (m.seq = a[6] << 23 | a[7] << 16 | a[8] << 8 | a[9], m.msecs = i) : (m.seq = m.seq + 1 | 0, m.seq < 0 && (m.seq = 0, m.msecs++)), n ? (g(a, m.msecs, m.seq, n, r ?? 0), n) : (h(a, m.msecs, m.seq, p, 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"])(p));
}
function y(e) {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"])(e), n = 0;
    for(let e = 0; e < 6; e += 1)n = n * 256 + t[e];
    return n;
}
function b(e) {
    return typeof e == `string` && u.test(e);
}
const x = Object.assign(v, {
    toBytes: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"],
    fromBytes: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"],
    timestamp: y,
    isValid: b,
    NIL: `00000000-0000-0000-0000-000000000000`,
    MAX: `ffffffff-ffff-ffff-ffff-ffffffffffff`
});
;
}),
"[project]/newServer/notesphere_server/node_modules/uniku/build/validation-CTNpXm94.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>t,
    "t",
    ()=>e
]);
function e(e, t, n) {
    return Number.isInteger(e) && e >= t && e <= n;
}
function t(e, t, n) {
    return Number.isInteger(t) && t >= 0 && t + n <= e.length;
}
;
}),
]})(),
"[externals]/pg/lib/result.js [external] (pg/lib/result.js, cjs, [project]/newServer/notesphere_server/node_modules/pg)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("pg-82f28c56c2f5788f/lib/result.js", () => require("pg-82f28c56c2f5788f/lib/result.js"));

module.exports = mod;
}),
"[externals]/pg/lib/utils.js [external] (pg/lib/utils.js, cjs, [project]/newServer/notesphere_server/node_modules/pg)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("pg-82f28c56c2f5788f/lib/utils.js", () => require("pg-82f28c56c2f5788f/lib/utils.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1d0bh-8wq08zn._.js.map