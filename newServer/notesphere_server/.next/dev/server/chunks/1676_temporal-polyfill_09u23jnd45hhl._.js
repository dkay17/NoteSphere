(()=>{"use strict";module.exports = [
"[project]/newServer/notesphere_server/node_modules/temporal-polyfill/chunks/apiHelpers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarBranding",
    ()=>CalendarBranding,
    "DurationBranding",
    ()=>DurationBranding,
    "InstantBranding",
    ()=>InstantBranding,
    "PlainDateBranding",
    ()=>PlainDateBranding,
    "PlainDateTimeBranding",
    ()=>PlainDateTimeBranding,
    "PlainMonthDayBranding",
    ()=>PlainMonthDayBranding,
    "PlainTimeBranding",
    ()=>PlainTimeBranding,
    "PlainYearMonthBranding",
    ()=>PlainYearMonthBranding,
    "ZonedDateTimeBranding",
    ()=>ZonedDateTimeBranding,
    "adaptRecordTimeUnitDiff",
    ()=>adaptRecordTimeUnitDiff,
    "attachDebugString",
    ()=>attachDebugString,
    "dateDerivedGetters",
    ()=>dateDerivedGetters,
    "dateFieldGetters",
    ()=>dateFieldGetters$1,
    "dateFieldGetters$1",
    ()=>dateFieldGetters,
    "defineTemporalClass",
    ()=>defineTemporalClass,
    "diffDateDays",
    ()=>diffDateDays,
    "diffDateMonths",
    ()=>diffDateMonths,
    "diffDateTimeDays",
    ()=>diffDateTimeDays,
    "diffDateTimeEpochNanoTimeUnit",
    ()=>diffDateTimeEpochNanoTimeUnit,
    "diffDateTimeMonths",
    ()=>diffDateTimeMonths,
    "diffDateTimeWeeks",
    ()=>diffDateTimeWeeks,
    "diffDateTimeYears",
    ()=>diffDateTimeYears,
    "diffDateTimes",
    ()=>diffDateTimes,
    "diffDateWeeks",
    ()=>diffDateWeeks,
    "diffDateYears",
    ()=>diffDateYears,
    "diffDates",
    ()=>diffDates,
    "diffInstantEpochNanoTimeUnit",
    ()=>diffInstantEpochNanoTimeUnit,
    "diffInstants",
    ()=>diffInstants,
    "diffTimeNanoOfDayTimeUnit",
    ()=>diffTimeNanoOfDayTimeUnit,
    "diffTimes",
    ()=>diffTimes,
    "diffYearMonthMonths",
    ()=>diffYearMonthMonths,
    "diffYearMonthYears",
    ()=>diffYearMonthYears,
    "diffYearMonths",
    ()=>diffYearMonths,
    "diffZonedDateTimes",
    ()=>diffZonedDateTimes,
    "diffZonedDays",
    ()=>diffZonedDays,
    "diffZonedEpochNanoTimeUnit",
    ()=>diffZonedEpochNanoTimeUnit,
    "diffZonedMonths",
    ()=>diffZonedMonths,
    "diffZonedWeeks",
    ()=>diffZonedWeeks,
    "diffZonedYears",
    ()=>diffZonedYears,
    "durationGetters",
    ()=>durationGetters,
    "forbiddenValueOf",
    ()=>forbiddenValueOf,
    "invalidRecordType",
    ()=>invalidRecordType,
    "monthDayFieldGetters",
    ()=>monthDayFieldGetters$1,
    "monthDayFieldGetters$1",
    ()=>monthDayFieldGetters,
    "moveDateByMonths",
    ()=>moveDateByMonths,
    "moveDateByYears",
    ()=>moveDateByYears,
    "moveToDayOfMonth",
    ()=>moveToDayOfMonth,
    "moveToDayOfWeek",
    ()=>moveToDayOfWeek,
    "moveToDayOfYear",
    ()=>moveToDayOfYear,
    "moveToWeekOfYear",
    ()=>moveToWeekOfYear,
    "reversedMove",
    ()=>reversedMove,
    "timeGetters",
    ()=>timeGetters,
    "withDateFields",
    ()=>withDateFields,
    "withDateTimeFields",
    ()=>withDateTimeFields,
    "withMonthDayFields",
    ()=>withMonthDayFields,
    "withTimeFields",
    ()=>withTimeFields,
    "withYearMonthFields",
    ()=>withYearMonthFields,
    "withZonedDateTimeFields",
    ()=>withZonedDateTimeFields,
    "yearMonthDerivedGetters",
    ()=>yearMonthDerivedGetters,
    "yearMonthFieldGetters",
    ()=>yearMonthFieldGetters$1,
    "yearMonthFieldGetters$1",
    ()=>yearMonthFieldGetters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-polyfill/chunks/internal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$protected$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-utils/dist/protected.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-utils/dist/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$protected$2d$error$2d$messages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-utils/dist/protected-error-messages.js [app-route] (ecmascript) <locals>");
;
;
;
const PlainYearMonthBranding = "PlainYearMonth";
const PlainMonthDayBranding = "PlainMonthDay";
const PlainDateBranding = "PlainDate";
const PlainDateTimeBranding = "PlainDateTime";
const PlainTimeBranding = "PlainTime";
const ZonedDateTimeBranding = "ZonedDateTime";
const InstantBranding = "Instant";
const DurationBranding = "Duration";
const CalendarBranding = "Calendar";
function defineTemporalClass(branding, cls, getSlots, ...getterMaps) {
    return Object.defineProperties(cls, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createNameDescriptors"])(branding)), Object.defineProperties(cls.prototype, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createStringTagDescriptors"])("Temporal." + branding)), Object.defineProperties(cls.prototype, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapProps"])((getter)=>({
            get () {
                return getter(getSlots(this));
            },
            configurable: 1
        }), Object.assign({}, ...getterMaps))), cls;
}
const attachDebugString = "noop" !== __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["noop"].name || globalThis.process ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["noop"] : (instance)=>{
    Object.defineProperty(instance, "_str_", {
        value: instance.toJSON()
    });
};
function invalidRecordType() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwTypeError"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidCallingContext"]);
}
function forbiddenValueOf() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwTypeError"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forbiddenValueOf"]);
}
const yearMonthFieldGetters$1 = {
    era (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarEraFields"])(slots.calendar, slots).era;
    },
    eraYear (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarEraFields"])(slots.calendar, slots).eraYear;
    },
    year (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarDateFields"])(slots.calendar, slots).year;
    },
    month (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarDateFields"])(slots.calendar, slots).month;
    },
    monthCode (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarMonthCode"])(slots.calendar, slots);
    }
};
const dateFieldGetters$1 = {
    era (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarEraFields"])(slots.calendar, slots).era;
    },
    eraYear (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarEraFields"])(slots.calendar, slots).eraYear;
    },
    year (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarDateFields"])(slots.calendar, slots).year;
    },
    month (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarDateFields"])(slots.calendar, slots).month;
    },
    monthCode (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarMonthCode"])(slots.calendar, slots);
    },
    day (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarDateFields"])(slots.calendar, slots).day;
    }
};
const monthDayFieldGetters$1 = {
    monthCode (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarMonthCode"])(slots.calendar, slots);
    },
    day (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarDateFields"])(slots.calendar, slots).day;
    }
};
const yearMonthDerivedGetters = {
    daysInMonth (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarDaysInMonth"])(slots.calendar, slots);
    },
    daysInYear (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarDaysInYear"])(slots.calendar, slots);
    },
    monthsInYear (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarMonthsInYear"])(slots.calendar, slots);
    },
    inLeapYear (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarInLeapYear"])(slots.calendar, slots);
    }
};
const dateDerivedGetters = {
    dayOfWeek (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeIsoDayOfWeek"])(slots);
    },
    dayOfYear (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarDayOfYear"])(slots.calendar, slots);
    },
    weekOfYear (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarWeekOfYear"])(slots.calendar, slots);
    },
    yearOfWeek (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarYearOfWeek"])(slots.calendar, slots);
    },
    daysInWeek () {
        return 7;
    },
    daysInMonth (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarDaysInMonth"])(slots.calendar, slots);
    },
    daysInYear (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarDaysInYear"])(slots.calendar, slots);
    },
    monthsInYear (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarMonthsInYear"])(slots.calendar, slots);
    },
    inLeapYear (slots) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeCalendarInLeapYear"])(slots.calendar, slots);
    }
};
function diffInstants(invert, instantSlots0, instantSlots1, options) {
    const [largestUnit, smallestUnit, roundingInc, roundingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineDiffOptions"])(invert, options, 3, 5);
    return createDiffDurationSlots(invert, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffEpochNanosRounded"])(instantSlots0.epochNanoseconds, instantSlots1.epochNanoseconds, largestUnit, smallestUnit, roundingInc, roundingMode));
}
function diffZonedDateTimes(invert, slots0, slots1, options) {
    const calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonCalendar"])(slots0.calendar, slots1.calendar);
    const [largestUnit, smallestUnit, roundingInc, roundingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineDiffOptions"])(invert, options, 5);
    return createDiffDurationSlots(invert, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffZonedDateTimesRounded"])(calendar, slots0, slots1, largestUnit, smallestUnit, roundingInc, roundingMode));
}
function diffDateTimes(invert, plainDateTimeSlots0, plainDateTimeSlots1, options) {
    const calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonCalendar"])(plainDateTimeSlots0.calendar, plainDateTimeSlots1.calendar);
    const [largestUnit, smallestUnit, roundingInc, roundingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineDiffOptions"])(invert, options, 6);
    return createDiffDurationSlots(invert, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffDateTimesRounded"])(calendar, plainDateTimeSlots0, plainDateTimeSlots1, largestUnit, smallestUnit, roundingInc, roundingMode));
}
function diffDates(invert, plainDateSlots0, plainDateSlots1, options) {
    const calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonCalendar"])(plainDateSlots0.calendar, plainDateSlots1.calendar);
    const [largestUnit, smallestUnit, roundingInc, roundingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineDiffOptions"])(invert, options, 6, 9, 6);
    return createDiffDurationSlots(invert, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffDatesRounded"])(calendar, plainDateSlots0, plainDateSlots1, largestUnit, smallestUnit, roundingInc, roundingMode));
}
function diffYearMonths(invert, plainYearMonthSlots0, plainYearMonthSlots1, options) {
    const calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonCalendar"])(plainYearMonthSlots0.calendar, plainYearMonthSlots1.calendar);
    const [largestUnit, smallestUnit, roundingInc, roundingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineDiffOptions"])(invert, options, 9, 9, 8);
    return createDiffDurationSlots(invert, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffYearMonthsRounded"])(calendar, plainYearMonthSlots0, plainYearMonthSlots1, largestUnit, smallestUnit, roundingInc, roundingMode));
}
function diffTimes(invert, plainTimeSlots0, plainTimeSlots1, options) {
    const [largestUnit, smallestUnit, roundingInc, roundingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineDiffOptions"])(invert, options, 5, 5);
    return createDiffDurationSlots(invert, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffTimesRounded"])(plainTimeSlots0, plainTimeSlots1, largestUnit, smallestUnit, roundingInc, roundingMode));
}
function createDiffDurationSlots(invert, durationFields) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDurationSlots"])(invert ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["negateDurationFields"])(durationFields) : durationFields);
}
function withDateFields(slots, modFields, options) {
    const { calendar: calendar } = slots;
    const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeDateFields"])(calendar, slots, modFields);
    const [year, monthCodeParts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineCalendarDateFields"])(fields, calendar);
    const overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateFromRefinedFields"])(fields, calendar, year, monthCodeParts, overflow);
}
function withDateTimeFields(slots, modFields, options) {
    const { calendar: calendar } = slots;
    const [mergedFields, calendarFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeDateTimeFields"])(calendar, slots, modFields);
    const [year, monthCodeParts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineCalendarDateFields"])(calendarFields, calendar);
    const overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateTimeFromMergedFields"])(mergedFields, calendarFields, calendar, year, monthCodeParts, overflow);
}
function withYearMonthFields(slots, modFields, options) {
    const { calendar: calendar } = slots;
    const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeYearMonthFields"])(calendar, slots, modFields);
    const [year, monthCodeParts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineCalendarDateFields"])(fields, calendar, 1);
    const overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createYearMonthFromRefinedFields"])(fields, calendar, year, monthCodeParts, overflow);
}
function withMonthDayFields(slots, modFields, options) {
    const { calendar: calendar } = slots;
    const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMonthDayFields"])(calendar, slots, modFields);
    const [year, monthCodeParts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineMonthDayFields"])(fields, calendar);
    const overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createMonthDayFromRefinedFields"])(fields, calendar, year, monthCodeParts, overflow);
}
function withTimeFields(slots, modFields, options) {
    const refinedFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeTimeFields"])(slots, modFields);
    const overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTimeFields"])(refinedFields, overflow);
}
function withZonedDateTimeFields(slots, modFields, options) {
    const { calendar: calendar } = slots;
    const [mergedFields, calendarFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeZonedDateTimeFields"])(calendar, slots, modFields);
    const [year, monthCodeParts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineCalendarDateFields"])(calendarFields, calendar);
    const [overflow, offsetDisambig, epochDisambig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineZonedFieldOptions"])(options, 2);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createZonedDateTimeFromMergedFields"])(slots, mergedFields, calendarFields, year, monthCodeParts, overflow, offsetDisambig, epochDisambig);
}
function createNativeGetters(shimGetters) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPropGetters"])(Object.keys(shimGetters));
}
const durationGetters = /*@__PURE__*/ createNativeGetters(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["durationGetters"]);
const timeGetters = /*@__PURE__*/ createNativeGetters(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timeGetters"]);
const yearMonthFieldGetters = /*@__PURE__*/ createNativeGetters(yearMonthFieldGetters$1);
const dateFieldGetters = /*@__PURE__*/ createNativeGetters(dateFieldGetters$1);
const monthDayFieldGetters = /*@__PURE__*/ createNativeGetters(monthDayFieldGetters$1);
const diffZonedYears = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bindArgs"])(diffZonedCalendarUnit, 9);
const diffZonedMonths = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bindArgs"])(diffZonedCalendarUnit, 8);
const diffZonedWeeks = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bindArgs"])(diffZonedDayWeekUnit, 7);
const diffZonedDays = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bindArgs"])(diffZonedDayWeekUnit, 6);
const diffInstantEpochNanoTimeUnit = diffInstantTimeUnit;
const diffDateYears = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bindArgs"])(diffDateCalendarUnit, 9);
const diffDateMonths = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bindArgs"])(diffDateCalendarUnit, 8);
const diffDateTimeYears = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bindArgs"])(diffDateTimeCalendarUnit, 9);
const diffDateTimeMonths = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bindArgs"])(diffDateTimeCalendarUnit, 8);
const diffYearMonthYears = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bindArgs"])(diffYearMonthUnit, 9);
const diffYearMonthMonths = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bindArgs"])(diffYearMonthUnit, 8);
function diffZonedEpochNanoTimeUnit(unit, slots0, slots1, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonCalendar"])(slots0.calendar, slots1.calendar), diffInstantTimeUnit(unit, slots0, slots1, options);
}
function diffDateTimeEpochNanoTimeUnit(unit, slots0, slots1, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonCalendar"])(slots0.calendar, slots1.calendar), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countDateTimeUnit"])(slots0, slots1, unit, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineUnitDiffOptions"])(unit, options));
}
function diffTimeNanoOfDayTimeUnit(unit, slots0, slots1, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countTimeUnit"])(slots0, slots1, unit, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineUnitDiffOptions"])(unit, options));
}
function adaptRecordTimeUnitDiff(diffSlots, getSlots) {
    return (unit, record0, record1, options)=>diffSlots(unit, getSlots(record0), getSlots(record1), options);
}
function diffInstantTimeUnit(unit, slots0, slots1, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countEpochNanoUnit"])(slots0.epochNanoseconds, slots1.epochNanoseconds, unit, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineUnitDiffOptions"])(unit, options));
}
function diffZonedCalendarUnit(unit, slots0, slots1, options) {
    const calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonCalendar"])(slots0.calendar, slots1.calendar);
    const rounding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineUnitDiffOptions"])(unit, options);
    const timeZone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonTimeZone"])(slots0.timeZone, slots1.timeZone);
    return slots0.epochNanoseconds === slots1.epochNanoseconds ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countRelativeUnit"])(unit, {
        he: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffZonedEpochsExact"])(timeZone, calendar, slots0, slots1, unit),
        le: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createZonedRelativeOps"])(calendar, timeZone, slots0),
        ie: slots1.epochNanoseconds
    }, rounding, 1);
}
function diffZonedDayWeekUnit(unit, slots0, slots1, options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonCalendar"])(slots0.calendar, slots1.calendar);
    const rounding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineUnitDiffOptions"])(unit, options);
    const timeZone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonTimeZone"])(slots0.timeZone, slots1.timeZone);
    return slots0.epochNanoseconds === slots1.epochNanoseconds ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countZonedDayWeekUnit"])(unit, timeZone, slots0, slots1, rounding);
}
function diffDateTimeCalendarUnit(unit, slots0, slots1, options) {
    const calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonCalendar"])(slots0.calendar, slots1.calendar);
    return diffPlainRelativeUnit(unit, options, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffDateTimesExact"])(calendar, slots0, slots1, unit), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateRelativeOps"])(calendar, slots0), computeEndEpochNanoFromMidnight(slots0, slots1));
}
function diffDateTimeWeeks(slots0, slots1, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonCalendar"])(slots0.calendar, slots1.calendar), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countDateWeeks"])(slots0, computeEndEpochNanoFromMidnight(slots0, slots1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineUnitDiffOptions"])(7, options));
}
function diffDateTimeDays(slots0, slots1, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonCalendar"])(slots0.calendar, slots1.calendar), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countEpochNanoDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoDateTimeToEpochNano"])(slots0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoDateTimeToEpochNano"])(slots1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timeFieldsToNano"])(slots0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineUnitDiffOptions"])(6, options));
}
function computeEndEpochNanoFromMidnight(isoDateTime0, isoDateTime1) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoDateTimeToEpochNano"])(isoDateTime1) - BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timeFieldsToNano"])(isoDateTime0));
}
function diffDateCalendarUnit(unit, slots0, slots1, options) {
    const calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonCalendar"])(slots0.calendar, slots1.calendar);
    return diffPlainRelativeUnit(unit, options, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffCalendarDates"])(calendar, slots0, slots1, unit), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateRelativeOps"])(calendar, slots0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoDateToEpochNano"])(slots1));
}
function diffDateWeeks(slots0, slots1, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonCalendar"])(slots0.calendar, slots1.calendar), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countDateWeeks"])(slots0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoDateToEpochNano"])(slots1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineUnitDiffOptions"])(7, options));
}
function diffDateDays(slots0, slots1, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonCalendar"])(slots0.calendar, slots1.calendar), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countEpochNanoDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoDateToEpochNano"])(slots0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoDateToEpochNano"])(slots1), 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineUnitDiffOptions"])(6, options));
}
function diffYearMonthUnit(unit, slots0, slots1, options) {
    const calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommonCalendar"])(slots0.calendar, slots1.calendar);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countYearMonthUnit"])(calendar, slots0, slots1, unit, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineUnitDiffOptions"])(unit, options));
}
function diffPlainRelativeUnit(unit, options, diffExact, relativeOps, endEpochNano) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countRelativeUnit"])(unit, {
        he: diffExact,
        le: relativeOps,
        ie: endEpochNano
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineUnitDiffOptions"])(unit, options));
}
function reversedMove(f) {
    return (slots, units, options)=>f(slots, -units, options);
}
function moveDateByYears(calendar, isoDate, years, options) {
    const overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options);
    return years ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveDateByCalendarUnits"])(calendar, isoDate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toStrictInteger"])(years), 0, overflow) : isoDate;
}
function moveDateByMonths(calendar, isoDate, months, options) {
    const overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options);
    return months ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveDateByCalendarUnits"])(calendar, isoDate, 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toStrictInteger"])(months), overflow) : isoDate;
}
function moveToDayOfYear(calendar, isoDate, dayOfYear, options) {
    const overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveToRefinedDayOfYear"])(calendar, isoDate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toIntegerWithTrunc"])(dayOfYear), overflow);
}
function moveToDayOfMonth(calendar, isoDate, day, options) {
    const overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveToRefinedDayOfMonth"])(calendar, isoDate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toPositiveIntegerWithTruncation"])(day), overflow);
}
function moveToDayOfWeek(_calendar, isoDate, dayOfWeek, options) {
    const overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveToRefinedDayOfWeek"])(isoDate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toIntegerWithTrunc"])(dayOfWeek), overflow);
}
function moveToWeekOfYear(calendar, isoDate, weekOfYear, options) {
    const overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveToRefinedWeekOfYear"])(calendar, isoDate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toIntegerWithTrunc"])(weekOfYear), overflow);
}
;
}),
"[project]/newServer/notesphere_server/node_modules/temporal-polyfill/chunks/classApi-basic.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DateTimeFormat",
    ()=>DateTimeFormat,
    "IntlExtended",
    ()=>IntlExtended,
    "Temporal",
    ()=>Temporal,
    "toTemporalInstant",
    ()=>toTemporalInstant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-polyfill/chunks/internal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$classApi$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-polyfill/chunks/classApi.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-polyfill/chunks/apiHelpers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$protected$2d$error$2d$messages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-utils/dist/protected-error-messages.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$protected$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-utils/dist/protected.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-utils/dist/utils.js [app-route] (ecmascript)");
;
;
;
;
;
function resolveBasicCalendarId(rawCalendarId) {
    const lowerRawCalendarId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireString"])(rawCalendarId).toLowerCase();
    return lowerRawCalendarId === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoCalendarId"] ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoCalendarImpl"] : lowerRawCalendarId === __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gregoryCalendarId"] ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gregoryCalendarImpl"] : void (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwRangeError"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exoticCalendarRequired"])(rawCalendarId, "temporal-polyfill/full"));
}
function resolveBasicCalendarArg(rawCalendarId = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoCalendarId"]) {
    return resolveBasicCalendarId(rawCalendarId);
}
const zonedDateTimeSlotsMap = /*@__PURE__*/ new WeakMap;
const ZonedDateTime = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defineTemporalClass"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZonedDateTimeBranding"], class {
    constructor(epochNanoseconds, timeZoneId, calendar = void 0){
        const epochNano = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkEpochNanoInBounds"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toBigInt"])(epochNanoseconds));
        const timeZone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryTimeZone"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineTimeZoneId"])(timeZoneId));
        const calendarImpl = resolveBasicCalendarArg(calendar);
        initZonedDateTime(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createZonedEpochNanoSlots"])(epochNano, timeZone, calendarImpl));
    }
    static from(arg, options = void 0) {
        return createZonedDateTime(toZonedDateTimeSlots(arg, options));
    }
    static compare(arg0, arg1) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compareZonedEpochSlots"])(toZonedDateTimeSlots(arg0), toZonedDateTimeSlots(arg1));
    }
    get calendarId() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCalendarSlotId"])(getZonedDateTimeSlots(this).calendar);
    }
    get timeZoneId() {
        return getZonedDateTimeSlots(this).timeZone.id;
    }
    get epochMilliseconds() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["epochNanoToMilli"])(getZonedDateTimeSlots(this).epochNanoseconds);
    }
    get epochNanoseconds() {
        return getZonedDateTimeSlots(this).epochNanoseconds;
    }
    get offset() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatOffsetNano"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["zonedEpochSlotsToIso"])(getZonedDateTimeSlots(this)).offsetNanoseconds);
    }
    get offsetNanoseconds() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["zonedEpochSlotsToIso"])(getZonedDateTimeSlots(this)).offsetNanoseconds;
    }
    get hoursInDay() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeZonedHoursInDay"])(getZonedDateTimeSlots(this));
    }
    with(mod, options = void 0) {
        return createZonedDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withZonedDateTimeFields"])(getZonedDateTimeSlots(this), validateBag(mod), options));
    }
    withCalendar(calendarArg) {
        return createZonedDateTime({
            ...getZonedDateTimeSlots(this),
            calendar: refineCalendarArg(calendarArg)
        });
    }
    withTimeZone(timeZoneArg) {
        return createZonedDateTime({
            ...getZonedDateTimeSlots(this),
            timeZone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryTimeZone"])(refineTimeZoneArg(timeZoneArg))
        });
    }
    withPlainTime(plainTimeArg = void 0) {
        return createZonedDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["zonedDateTimeWithPlainTime"])(getZonedDateTimeSlots(this), optionalToPlainTimeFields(plainTimeArg)));
    }
    add(durationArg, options = void 0) {
        const slots = getZonedDateTimeSlots(this);
        return createZonedDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveZonedEpochSlots"])(slots, toDurationSlots(durationArg), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options)));
    }
    subtract(durationArg, options = void 0) {
        const slots = getZonedDateTimeSlots(this);
        return createZonedDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveZonedEpochSlots"])(slots, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["negateDurationFields"])(toDurationSlots(durationArg)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options)));
    }
    until(otherArg, options = void 0) {
        const slots = getZonedDateTimeSlots(this);
        const other = toZonedDateTimeSlots(otherArg);
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffZonedDateTimes"])(0, slots, other, options));
    }
    since(otherArg, options = void 0) {
        const slots = getZonedDateTimeSlots(this);
        const other = toZonedDateTimeSlots(otherArg);
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffZonedDateTimes"])(1, slots, other, options));
    }
    round(options) {
        const slots = getZonedDateTimeSlots(this);
        const [smallestUnit, roundingInc, roundingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineRoundingOptions"])(options);
        return createZonedDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["roundZonedEpochSlotsToUnit"])(slots, smallestUnit, roundingInc, roundingMode));
    }
    startOfDay() {
        return createZonedDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeZonedStartOfDay"])(getZonedDateTimeSlots(this)));
    }
    equals(otherArg) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["zonedDateTimesEqual"])(getZonedDateTimeSlots(this), toZonedDateTimeSlots(otherArg));
    }
    toInstant() {
        return createInstant((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["zonedDateTimeToInstant"])(getZonedDateTimeSlots(this)));
    }
    toPlainDateTime() {
        return createPlainDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["zonedDateTimeToDateTime"])(getZonedDateTimeSlots(this)));
    }
    toPlainDate() {
        return createPlainDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["zonedDateTimeToDate"])(getZonedDateTimeSlots(this)));
    }
    toPlainTime() {
        return createPlainTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["zonedDateTimeToTime"])(getZonedDateTimeSlots(this)));
    }
    toLocaleString(locales = void 0, options = {}) {
        const slots = getZonedDateTimeSlots(this);
        const format = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RawDateTimeFormat"](locales, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyZonedFormatTimeZone"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transformZonedOptions"])(options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getZonedTimeZoneId"])(slots)));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkResolvedCalendarCompatible"])(format, slots), format.format((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["epochNanoToMilli"])(slots.epochNanoseconds));
    }
    toString(options = void 0) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatZonedDateTimeIso"])(getZonedDateTimeSlots(this), options);
    }
    toJSON() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatZonedDateTimeIso"])(getZonedDateTimeSlots(this));
    }
    getTimeZoneTransition(options) {
        const slots = getZonedDateTimeSlots(this);
        const newEpochNano = slots.timeZone.C(slots.epochNanoseconds, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineDirectionOptions"])(options));
        return void 0 !== newEpochNano ? createZonedDateTime({
            ...slots,
            epochNanoseconds: newEpochNano
        }) : null;
    }
    valueOf() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forbiddenValueOf"])();
    }
}, getZonedDateTimeIsoSlots, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dateFieldGetters"], __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dateDerivedGetters"], __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timeGetters"]);
function createZonedDateTime(slots) {
    return initZonedDateTime(Object.create(ZonedDateTime.prototype), slots);
}
function getZonedDateTimeSlots(obj) {
    return getZonedDateTimeSlotsIfPresent(obj) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidRecordType"])();
}
function getZonedDateTimeIsoSlots(obj) {
    const slots = getZonedDateTimeSlots(obj);
    return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["zonedEpochSlotsToIso"])(slots),
        calendar: slots.calendar
    };
}
function getZonedDateTimeSlotsIfPresent(obj) {
    return zonedDateTimeSlotsMap.get(obj);
}
function toZonedDateTimeSlots(arg, options) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectLike"])(arg)) {
        const ownSlots = getZonedDateTimeSlotsIfPresent(arg);
        if (ownSlots) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineZonedFieldOptions"])(options), ownSlots;
        }
        const calendar = getCalendarFromBag(arg);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineZonedDateTimeObjectLike"])(refineTimeZoneArg, calendar, arg, options);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseZonedDateTime"])(arg, resolveBasicCalendarId, options);
}
function initZonedDateTime(instance, slots) {
    return zonedDateTimeSlotsMap.set(instance, slots), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["attachDebugString"])(instance), instance;
}
function refineTimeZoneArg(arg) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectLike"])(arg)) {
        const slots = getZonedDateTimeSlotsIfPresent(arg);
        return slots || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwTypeError"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidTimeZone"])(arg)), slots.timeZone.id;
    }
    return ((arg)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTimeZoneId"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseTimeZoneId"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireString"])(arg))))(arg);
}
const instantSlotsMap = /*@__PURE__*/ new WeakMap;
const Instant = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defineTemporalClass"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InstantBranding"], class {
    constructor(epochNanoseconds){
        const epochNano = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkEpochNanoInBounds"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toBigInt"])(epochNanoseconds));
        initInstant(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEpochNanoSlots"])(epochNano));
    }
    static from(arg) {
        return createInstant(toInstantSlots(arg));
    }
    static fromEpochMilliseconds(epochMilli) {
        return createInstant((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["epochMilliToInstant"])(epochMilli));
    }
    static fromEpochNanoseconds(epochNano) {
        return createInstant((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["epochNanoToInstant"])(epochNano));
    }
    static compare(a, b) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compareZonedEpochSlots"])(toInstantSlots(a), toInstantSlots(b));
    }
    get epochMilliseconds() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["epochNanoToMilli"])(getInstantSlots(this).epochNanoseconds);
    }
    get epochNanoseconds() {
        return getInstantSlots(this).epochNanoseconds;
    }
    add(durationArg) {
        const slots = getInstantSlots(this);
        return createInstant((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEpochNanoSlots"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveEpochNano"])(slots.epochNanoseconds, toDurationSlots(durationArg))));
    }
    subtract(durationArg) {
        const slots = getInstantSlots(this);
        return createInstant((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEpochNanoSlots"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveEpochNano"])(slots.epochNanoseconds, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["negateDurationFields"])(toDurationSlots(durationArg)))));
    }
    until(otherArg, options = void 0) {
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffInstants"])(0, getInstantSlots(this), toInstantSlots(otherArg), options));
    }
    since(otherArg, options = void 0) {
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffInstants"])(1, getInstantSlots(this), toInstantSlots(otherArg), options));
    }
    round(options) {
        const slots = getInstantSlots(this);
        const [smallestUnit, roundingInc, roundingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineRoundingOptions"])(options, 5, 1);
        return createInstant((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEpochNanoSlots"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["roundBigNanoToDayOriginInc"])(slots.epochNanoseconds, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["computeBigNanoInc"])(smallestUnit, roundingInc), roundingMode)));
    }
    equals(otherArg) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["instantsEqual"])(getInstantSlots(this), toInstantSlots(otherArg));
    }
    toZonedDateTimeISO(timeZoneArg) {
        return createZonedDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["instantToZonedDateTime"])(getInstantSlots(this), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryTimeZone"])(refineTimeZoneArg(timeZoneArg))));
    }
    toLocaleString(locales = void 0, options = {}) {
        const slots = getInstantSlots(this);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RawDateTimeFormat"](locales, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transformInstantOptions"])(options)).format((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["epochNanoToMilli"])(slots.epochNanoseconds));
    }
    toString(options = void 0) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatInstantIso"])(refineTimeZoneArg, getInstantSlots(this), options);
    }
    toJSON() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatInstantIso"])(refineTimeZoneArg, getInstantSlots(this));
    }
    valueOf() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forbiddenValueOf"])();
    }
});
function createInstant(slots) {
    return initInstant(Object.create(Instant.prototype), slots);
}
function getInstantSlots(obj) {
    return getInstantSlotsIfPresent(obj) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidRecordType"])();
}
function getInstantSlotsIfPresent(obj) {
    return instantSlotsMap.get(obj);
}
function toInstantSlots(arg) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectLike"])(arg)) {
        const ownSlots = getInstantSlotsIfPresent(arg);
        if (ownSlots) {
            return ownSlots;
        }
        const zonedDateTimeSlots = getZonedDateTimeSlotsIfPresent(arg);
        if (zonedDateTimeSlots) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEpochNanoSlots"])(zonedDateTimeSlots.epochNanoseconds);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseInstant"])(arg);
}
const { toTemporalInstant: toTemporalInstant } = {
    toTemporalInstant () {
        const epochMilli = Date.prototype.valueOf.call(this);
        return createInstant((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEpochNanoSlots"])(BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireNumberIsInteger"])(epochMilli)) * __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bigNanoInMilli"]));
    }
};
function initInstant(instance, slots) {
    return instantSlotsMap.set(instance, slots), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["attachDebugString"])(instance), instance;
}
const plainMonthDaySlotsMap = /*@__PURE__*/ new WeakMap;
const PlainMonthDay = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defineTemporalClass"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainMonthDayBranding"], class {
    constructor(isoMonth, isoDay, calendar = void 0, referenceIsoYear){
        const isoMonthInt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toIntegerWithTrunc"])(isoMonth);
        const isoDayInt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toIntegerWithTrunc"])(isoDay);
        const calendarImpl = resolveBasicCalendarArg(calendar);
        const isoYearInt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toIntegerWithTrunc"])(referenceIsoYear ?? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoEpochFirstLeapYear"]);
        const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkIsoDateInBounds"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateIsoDateFields"])({
            year: isoYearInt,
            month: isoMonthInt,
            day: isoDayInt
        }));
        initPlainMonthDay(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateSlots"])(fields, calendarImpl));
    }
    static from(arg, options = void 0) {
        return createPlainMonthDay(toPlainMonthDaySlots(arg, options));
    }
    get calendarId() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCalendarSlotId"])(getPlainMonthDaySlots(this).calendar);
    }
    with(mod, options = void 0) {
        return createPlainMonthDay((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMonthDayFields"])(getPlainMonthDaySlots(this), validateBag(mod), options));
    }
    equals(otherArg) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["plainMonthDaysEqual"])(getPlainMonthDaySlots(this), toPlainMonthDaySlots(otherArg));
    }
    toPlainDate(bag) {
        const slots = getPlainMonthDaySlots(this);
        return createPlainDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["monthDayToDate"])(slots.calendar, this, bag));
    }
    toLocaleString(locales = void 0, options = {}) {
        const slots = getPlainMonthDaySlots(this);
        const format = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RawDateTimeFormat"](locales, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPlainFormatTimeZone"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transformMonthDayOptions"])(options)));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkResolvedCalendarCompatible"])(format, slots, 1), format.format((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoDateToEpochMilli"])(slots));
    }
    toString(options = void 0) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPlainMonthDayIso"])(getPlainMonthDaySlots(this), options);
    }
    toJSON() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPlainMonthDayIso"])(getPlainMonthDaySlots(this));
    }
    valueOf() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forbiddenValueOf"])();
    }
}, getPlainMonthDaySlots, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["monthDayFieldGetters"]);
function createPlainMonthDay(slots) {
    return initPlainMonthDay(Object.create(PlainMonthDay.prototype), slots);
}
function getPlainMonthDaySlots(obj) {
    return getPlainMonthDaySlotsIfPresent(obj) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidRecordType"])();
}
function getPlainMonthDaySlotsIfPresent(obj) {
    return plainMonthDaySlotsMap.get(obj);
}
function toPlainMonthDaySlots(arg, options) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectLike"])(arg)) {
        const ownSlots = getPlainMonthDaySlotsIfPresent(arg);
        if (ownSlots) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options), ownSlots;
        }
        const calendarMaybe = extractCalendarFromBag(arg);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refinePlainMonthDayObjectLike"])(void 0 === calendarMaybe ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoCalendarImpl"] : calendarMaybe, void 0 === calendarMaybe, arg, options);
    }
    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePlainMonthDay"])(arg, resolveBasicCalendarId);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options), res;
}
function initPlainMonthDay(instance, slots) {
    return plainMonthDaySlotsMap.set(instance, slots), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["attachDebugString"])(instance), instance;
}
const plainYearMonthSlotsMap = /*@__PURE__*/ new WeakMap;
const PlainYearMonth = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defineTemporalClass"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainYearMonthBranding"], class {
    constructor(isoYear, isoMonth, calendar = void 0, referenceIsoDay){
        const isoYearInt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toIntegerWithTrunc"])(isoYear);
        const isoMonthInt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toIntegerWithTrunc"])(isoMonth);
        const calendarImpl = resolveBasicCalendarArg(calendar);
        const isoDayInt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toIntegerWithTrunc"])(referenceIsoDay ?? 1);
        const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkIsoYearMonthInBounds"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateIsoDateFields"])({
            year: isoYearInt,
            month: isoMonthInt,
            day: isoDayInt
        }));
        initPlainYearMonth(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateSlots"])(fields, calendarImpl));
    }
    static from(arg, options = void 0) {
        return createPlainYearMonth(toPlainYearMonthSlots(arg, options));
    }
    static compare(arg0, arg1) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compareIsoDateFields"])(toPlainYearMonthSlots(arg0), toPlainYearMonthSlots(arg1));
    }
    get calendarId() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCalendarSlotId"])(getPlainYearMonthSlots(this).calendar);
    }
    with(mod, options = void 0) {
        return createPlainYearMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withYearMonthFields"])(getPlainYearMonthSlots(this), validateBag(mod), options));
    }
    add(durationArg, options = void 0) {
        const slots = getPlainYearMonthSlots(this);
        return createPlainYearMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateSlots"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveYearMonth"])(slots.calendar, slots, toDurationSlots(durationArg), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options)), slots.calendar));
    }
    subtract(durationArg, options = void 0) {
        const slots = getPlainYearMonthSlots(this);
        return createPlainYearMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateSlots"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveYearMonth"])(slots.calendar, slots, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["negateDurationFields"])(toDurationSlots(durationArg)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options)), slots.calendar));
    }
    until(otherArg, options = void 0) {
        const slots = getPlainYearMonthSlots(this);
        const other = toPlainYearMonthSlots(otherArg);
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffYearMonths"])(0, slots, other, options));
    }
    since(otherArg, options = void 0) {
        const slots = getPlainYearMonthSlots(this);
        const other = toPlainYearMonthSlots(otherArg);
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffYearMonths"])(1, slots, other, options));
    }
    equals(otherArg) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["plainYearMonthsEqual"])(getPlainYearMonthSlots(this), toPlainYearMonthSlots(otherArg));
    }
    toPlainDate(bag) {
        const slots = getPlainYearMonthSlots(this);
        return createPlainDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["yearMonthToDate"])(slots.calendar, this, bag));
    }
    toLocaleString(locales = void 0, options = {}) {
        const slots = getPlainYearMonthSlots(this);
        const format = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RawDateTimeFormat"](locales, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPlainFormatTimeZone"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transformYearMonthOptions"])(options)));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkResolvedCalendarCompatible"])(format, slots, 1), format.format((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoDateToEpochMilli"])(slots));
    }
    toString(options = void 0) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPlainYearMonthIso"])(getPlainYearMonthSlots(this), options);
    }
    toJSON() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPlainYearMonthIso"])(getPlainYearMonthSlots(this));
    }
    valueOf() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forbiddenValueOf"])();
    }
}, getPlainYearMonthSlots, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["yearMonthFieldGetters"], __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["yearMonthDerivedGetters"]);
function createPlainYearMonth(slots) {
    return initPlainYearMonth(Object.create(PlainYearMonth.prototype), slots);
}
function getPlainYearMonthSlots(obj) {
    return getPlainYearMonthSlotsIfPresent(obj) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidRecordType"])();
}
function getPlainYearMonthSlotsIfPresent(obj) {
    return plainYearMonthSlotsMap.get(obj);
}
function toPlainYearMonthSlots(arg, options) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectLike"])(arg)) {
        const ownSlots = getPlainYearMonthSlotsIfPresent(arg);
        if (ownSlots) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options), ownSlots;
        }
        const calendar = getCalendarFromBag(arg);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refinePlainYearMonthObjectLike"])(calendar, arg, options);
    }
    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePlainYearMonth"])(arg, resolveBasicCalendarId);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options), res;
}
function initPlainYearMonth(instance, slots) {
    return plainYearMonthSlotsMap.set(instance, slots), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["attachDebugString"])(instance), instance;
}
function getTemporalBrandingAndSlots(obj) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectLike"])(obj)) {
        return;
    }
    let slots = getInstantSlotsIfPresent(obj);
    return slots ? [
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InstantBranding"],
        slots
    ] : (slots = getZonedDateTimeSlotsIfPresent(obj), slots ? [
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZonedDateTimeBranding"],
        slots
    ] : (slots = getPlainDateTimeSlotsIfPresent(obj), slots ? [
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainDateTimeBranding"],
        slots
    ] : (slots = getPlainDateSlotsIfPresent(obj), slots ? [
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainDateBranding"],
        slots
    ] : (slots = getPlainTimeSlotsIfPresent(obj), slots ? [
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainTimeBranding"],
        slots
    ] : (slots = getPlainYearMonthSlotsIfPresent(obj), slots ? [
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainYearMonthBranding"],
        slots
    ] : (slots = getPlainMonthDaySlotsIfPresent(obj), slots ? [
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainMonthDayBranding"],
        slots
    ] : (slots = getDurationSlotsIfPresent(obj), slots ? [
        __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DurationBranding"],
        slots
    ] : void 0)))))));
}
function validateBag(bag) {
    return (getTemporalBrandingAndSlots(bag) || void 0 !== bag.calendar || void 0 !== bag.timeZone) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwTypeError"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidBag"]), bag;
}
const plainTimeSlotsMap = /*@__PURE__*/ new WeakMap;
const PlainTime = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defineTemporalClass"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainTimeBranding"], class {
    constructor(hour = 0, minute = 0, second = 0, millisecond = 0, microsecond = 0, nanosecond = 0){
        const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateTimeFields"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapProps"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toIntegerWithTrunc"], {
            hour: hour,
            minute: minute,
            second: second,
            millisecond: millisecond,
            microsecond: microsecond,
            nanosecond: nanosecond
        }));
        initPlainTime(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTimeSlots"])(fields));
    }
    static from(arg, options = void 0) {
        return createPlainTime(toPlainTimeSlots(arg, options));
    }
    static compare(arg0, arg1) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compareTimeFields"])(toPlainTimeSlots(arg0), toPlainTimeSlots(arg1));
    }
    with(mod, options = void 0) {
        return createPlainTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withTimeFields"])(getPlainTimeSlots(this), validateBag(mod), options));
    }
    add(durationArg) {
        const slots = getPlainTimeSlots(this);
        return createPlainTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveTime"])(slots, toDurationSlots(durationArg))[0]);
    }
    subtract(durationArg) {
        const slots = getPlainTimeSlots(this);
        return createPlainTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveTime"])(slots, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["negateDurationFields"])(toDurationSlots(durationArg)))[0]);
    }
    until(otherArg, options = void 0) {
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffTimes"])(0, getPlainTimeSlots(this), toPlainTimeSlots(otherArg), options));
    }
    since(otherArg, options = void 0) {
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffTimes"])(1, getPlainTimeSlots(this), toPlainTimeSlots(otherArg), options));
    }
    round(options) {
        const slots = getPlainTimeSlots(this);
        const [smallestUnit, roundingInc, roundingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineRoundingOptions"])(options, 5);
        return createPlainTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["roundTimeToUnit"])(slots, smallestUnit, roundingInc, roundingMode)[0]);
    }
    equals(other) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["plainTimesEqual"])(getPlainTimeSlots(this), toPlainTimeSlots(other));
    }
    toLocaleString(locales = void 0, options = {}) {
        const slots = getPlainTimeSlots(this);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RawDateTimeFormat"](locales, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPlainFormatTimeZone"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transformTimeOptions"])(options))).format((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timeFieldsToMilli"])(slots));
    }
    toString(options = void 0) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPlainTimeIso"])(getPlainTimeSlots(this), options);
    }
    toJSON() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPlainTimeIso"])(getPlainTimeSlots(this));
    }
    valueOf() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forbiddenValueOf"])();
    }
}, getPlainTimeSlots, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timeGetters"]);
function createPlainTime(slots) {
    return initPlainTime(Object.create(PlainTime.prototype), slots);
}
function getPlainTimeSlots(obj) {
    return getPlainTimeSlotsIfPresent(obj) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidRecordType"])();
}
function getPlainTimeSlotsIfPresent(obj) {
    return plainTimeSlotsMap.get(obj);
}
function toPlainTimeSlots(arg, options) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectLike"])(arg)) {
        const ownSlots = getPlainTimeSlotsIfPresent(arg);
        if (ownSlots) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options), ownSlots;
        }
        const dateTimeSlots = getPlainDateTimeSlotsIfPresent(arg);
        if (dateTimeSlots) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTimeSlots"])(dateTimeSlots);
        }
        const zonedDateTimeSlots = getZonedDateTimeSlotsIfPresent(arg);
        return zonedDateTimeSlots ? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["zonedDateTimeToTime"])(zonedDateTimeSlots)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refinePlainTimeObjectLike"])(arg, options);
    }
    const timeSlots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePlainTime"])(arg);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options), timeSlots;
}
function optionalToPlainTimeFields(timeArg) {
    return void 0 === timeArg ? void 0 : toPlainTimeSlots(timeArg);
}
function initPlainTime(instance, slots) {
    return plainTimeSlotsMap.set(instance, slots), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["attachDebugString"])(instance), instance;
}
const plainDateTimeSlotsMap = /*@__PURE__*/ new WeakMap;
const PlainDateTime = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defineTemporalClass"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainDateTimeBranding"], class {
    constructor(isoYear, isoMonth, isoDay, hour = 0, minute = 0, second = 0, millisecond = 0, microsecond = 0, nanosecond = 0, calendar = void 0){
        const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkIsoDateTimeInBounds"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateIsoDateTimeFields"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapProps"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toIntegerWithTrunc"], {
            year: isoYear,
            month: isoMonth,
            day: isoDay,
            hour: hour,
            minute: minute,
            second: second,
            millisecond: millisecond,
            microsecond: microsecond,
            nanosecond: nanosecond
        })));
        const calendarImpl = resolveBasicCalendarArg(calendar);
        initPlainDateTime(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateTimeSlots"])(fields, calendarImpl));
    }
    static from(arg, options = void 0) {
        return createPlainDateTime(toPlainDateTimeSlots(arg, options));
    }
    static compare(arg0, arg1) {
        const slots0 = toPlainDateTimeSlots(arg0);
        const slots1 = toPlainDateTimeSlots(arg1);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compareIsoDateTimeFields"])(slots0, slots1);
    }
    get calendarId() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCalendarSlotId"])(getPlainDateTimeSlots(this).calendar);
    }
    with(mod, options = void 0) {
        return createPlainDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDateTimeFields"])(getPlainDateTimeSlots(this), validateBag(mod), options));
    }
    withCalendar(calendarArg) {
        const slots = getPlainDateTimeSlots(this);
        return createPlainDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateTimeSlots"])(slots, refineCalendarArg(calendarArg)));
    }
    withPlainTime(plainTimeArg = void 0) {
        const slots = getPlainDateTimeSlots(this);
        return createPlainDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateTimeFromRefinedFields"])(slots, optionalToPlainTimeFields(plainTimeArg), slots.calendar));
    }
    add(durationArg, options = void 0) {
        const slots = getPlainDateTimeSlots(this);
        return createPlainDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateTimeSlots"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveDateTime"])(slots.calendar, slots, toDurationSlots(durationArg), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options)), slots.calendar));
    }
    subtract(durationArg, options = void 0) {
        const slots = getPlainDateTimeSlots(this);
        return createPlainDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateTimeSlots"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveDateTime"])(slots.calendar, slots, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["negateDurationFields"])(toDurationSlots(durationArg)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options)), slots.calendar));
    }
    until(otherArg, options = void 0) {
        const slots = getPlainDateTimeSlots(this);
        const other = toPlainDateTimeSlots(otherArg);
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffDateTimes"])(0, slots, other, options));
    }
    since(otherArg, options = void 0) {
        const slots = getPlainDateTimeSlots(this);
        const other = toPlainDateTimeSlots(otherArg);
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffDateTimes"])(1, slots, other, options));
    }
    round(options) {
        const slots = getPlainDateTimeSlots(this);
        const [smallestUnit, roundingInc, roundingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineRoundingOptions"])(options);
        return createPlainDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateTimeSlots"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["roundDateTimeToUnit"])(slots, smallestUnit, roundingInc, roundingMode), slots.calendar));
    }
    equals(otherArg) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["plainDateTimesEqual"])(getPlainDateTimeSlots(this), toPlainDateTimeSlots(otherArg));
    }
    toZonedDateTime(timeZoneArg, options = void 0) {
        return createZonedDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dateTimeToZonedDateTime"])(getPlainDateTimeSlots(this), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryTimeZone"])(refineTimeZoneArg(timeZoneArg)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineEpochDisambigOptions"])(options)));
    }
    toPlainDate() {
        const slots = getPlainDateTimeSlots(this);
        return createPlainDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateSlots"])(slots, slots.calendar));
    }
    toPlainTime() {
        return createPlainTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTimeSlots"])(getPlainDateTimeSlots(this)));
    }
    toLocaleString(locales = void 0, options = {}) {
        const slots = getPlainDateTimeSlots(this);
        const format = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RawDateTimeFormat"](locales, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPlainFormatTimeZone"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transformDateTimeOptions"])(options)));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkResolvedCalendarCompatible"])(format, slots), format.format((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoDateTimeToEpochMilli"])(slots));
    }
    toString(options = void 0) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPlainDateTimeIso"])(getPlainDateTimeSlots(this), options);
    }
    toJSON() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPlainDateTimeIso"])(getPlainDateTimeSlots(this));
    }
    valueOf() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forbiddenValueOf"])();
    }
}, getPlainDateTimeSlots, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dateFieldGetters"], __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dateDerivedGetters"], __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timeGetters"]);
function createPlainDateTime(slots) {
    return initPlainDateTime(Object.create(PlainDateTime.prototype), slots);
}
function getPlainDateTimeSlots(obj) {
    return getPlainDateTimeSlotsIfPresent(obj) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidRecordType"])();
}
function getPlainDateTimeSlotsIfPresent(obj) {
    return plainDateTimeSlotsMap.get(obj);
}
function toPlainDateTimeSlots(arg, options) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectLike"])(arg)) {
        const ownSlots = getPlainDateTimeSlotsIfPresent(arg);
        if (ownSlots) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options), ownSlots;
        }
        const dateSlots = getPlainDateSlotsIfPresent(arg);
        if (dateSlots) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateTimeSlots"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineDateAndTime"])(dateSlots, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timeFieldDefaults"]), dateSlots.calendar);
        }
        const zonedDateTimeSlots = getZonedDateTimeSlotsIfPresent(arg);
        if (zonedDateTimeSlots) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["zonedDateTimeToDateTime"])(zonedDateTimeSlots);
        }
        const calendar = getCalendarFromBag(arg);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refinePlainDateTimeObjectLike"])(calendar, arg, options);
    }
    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePlainDateTime"])(arg, resolveBasicCalendarId);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options), res;
}
function initPlainDateTime(instance, slots) {
    return plainDateTimeSlotsMap.set(instance, slots), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["attachDebugString"])(instance), instance;
}
const plainDateSlotsMap = /*@__PURE__*/ new WeakMap;
const PlainDate = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defineTemporalClass"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainDateBranding"], class {
    constructor(isoYear, isoMonth, isoDay, calendar = void 0){
        const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkIsoDateInBounds"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateIsoDateFields"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapProps"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toIntegerWithTrunc"], {
            year: isoYear,
            month: isoMonth,
            day: isoDay
        })));
        const calendarImpl = resolveBasicCalendarArg(calendar);
        initPlainDate(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateSlots"])(fields, calendarImpl));
    }
    static from(arg, options = void 0) {
        return createPlainDate(toPlainDateSlots(arg, options));
    }
    static compare(arg0, arg1) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compareIsoDateFields"])(toPlainDateSlots(arg0), toPlainDateSlots(arg1));
    }
    get calendarId() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCalendarSlotId"])(getPlainDateSlots(this).calendar);
    }
    with(mod, options = void 0) {
        return createPlainDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withDateFields"])(getPlainDateSlots(this), validateBag(mod), options));
    }
    withCalendar(calendarArg) {
        const slots = getPlainDateSlots(this);
        return createPlainDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateSlots"])(slots, refineCalendarArg(calendarArg)));
    }
    add(durationArg, options = void 0) {
        const slots = getPlainDateSlots(this);
        return createPlainDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateSlots"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveDate"])(slots.calendar, slots, toDurationSlots(durationArg), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options)), slots.calendar));
    }
    subtract(durationArg, options = void 0) {
        const slots = getPlainDateSlots(this);
        return createPlainDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateSlots"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveDate"])(slots.calendar, slots, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["negateDurationFields"])(toDurationSlots(durationArg)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options)), slots.calendar));
    }
    until(otherArg, options = void 0) {
        const slots = getPlainDateSlots(this);
        const other = toPlainDateSlots(otherArg);
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffDates"])(0, slots, other, options));
    }
    since(otherArg, options = void 0) {
        const slots = getPlainDateSlots(this);
        const other = toPlainDateSlots(otherArg);
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["diffDates"])(1, slots, other, options));
    }
    equals(otherArg) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["plainDatesEqual"])(getPlainDateSlots(this), toPlainDateSlots(otherArg));
    }
    toZonedDateTime(options) {
        const optionsObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectLike"])(options) ? {
            timeZone: options.timeZone,
            plainTime: options.plainTime
        } : {
            timeZone: options
        };
        const slots = getPlainDateSlots(this);
        const timeZoneId = refineTimeZoneArg(optionsObj.timeZone);
        const plainTimeArg = optionsObj.plainTime;
        const timeFields = void 0 !== plainTimeArg ? toPlainTimeSlots(plainTimeArg) : void 0;
        return createZonedDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dateToZonedDateTime"])(slots, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryTimeZone"])(timeZoneId), timeFields));
    }
    toPlainDateTime(plainTimeArg = void 0) {
        const slots = getPlainDateSlots(this);
        return createPlainDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateTimeFromRefinedFields"])(slots, optionalToPlainTimeFields(plainTimeArg), slots.calendar));
    }
    toPlainYearMonth() {
        const slots = getPlainDateSlots(this);
        return createPlainYearMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldsToYearMonth"])(slots.calendar, this));
    }
    toPlainMonthDay() {
        const slots = getPlainDateSlots(this);
        return createPlainMonthDay((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldsToMonthDay"])(slots.calendar, this));
    }
    toLocaleString(locales = void 0, options = {}) {
        const slots = getPlainDateSlots(this);
        const format = new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RawDateTimeFormat"](locales, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPlainFormatTimeZone"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transformDateOptions"])(options)));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkResolvedCalendarCompatible"])(format, slots), format.format((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoDateToEpochMilli"])(slots));
    }
    toString(options = void 0) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPlainDateIso"])(getPlainDateSlots(this), options);
    }
    toJSON() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPlainDateIso"])(getPlainDateSlots(this));
    }
    valueOf() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forbiddenValueOf"])();
    }
}, getPlainDateSlots, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dateFieldGetters"], __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dateDerivedGetters"]);
function createPlainDate(slots) {
    return initPlainDate(Object.create(PlainDate.prototype), slots);
}
function getPlainDateSlots(obj) {
    return getPlainDateSlotsIfPresent(obj) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidRecordType"])();
}
function getPlainDateSlotsIfPresent(obj) {
    return plainDateSlotsMap.get(obj);
}
function toPlainDateSlots(arg, options) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectLike"])(arg)) {
        const ownSlots = getPlainDateSlotsIfPresent(arg);
        if (ownSlots) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options), ownSlots;
        }
        const dateTimeSlots = getPlainDateTimeSlotsIfPresent(arg);
        if (dateTimeSlots) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateSlots"])(dateTimeSlots, dateTimeSlots.calendar);
        }
        const zonedDateTimeSlots = getZonedDateTimeSlotsIfPresent(arg);
        if (zonedDateTimeSlots) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["zonedDateTimeToDate"])(zonedDateTimeSlots);
        }
        const calendar = getCalendarFromBag(arg);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refinePlainDateObjectLike"])(calendar, arg, options);
    }
    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePlainDate"])(arg, resolveBasicCalendarId);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineOverflowOptions"])(options), res;
}
function initPlainDate(instance, slots) {
    return plainDateSlotsMap.set(instance, slots), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["attachDebugString"])(instance), instance;
}
function getCalendarFromBag(bag) {
    const calendar = extractCalendarFromBag(bag);
    return void 0 === calendar ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoCalendarImpl"] : calendar;
}
function extractCalendarFromBag(bag) {
    const { calendar: calendarArg } = bag;
    if (void 0 !== calendarArg) {
        return refineCalendarArg(calendarArg);
    }
}
function refineCalendarArg(arg) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectLike"])(arg)) {
        const slots = getPlainDateSlotsIfPresent(arg) || getPlainDateTimeSlotsIfPresent(arg) || getZonedDateTimeSlotsIfPresent(arg) || getPlainMonthDaySlotsIfPresent(arg) || getPlainYearMonthSlotsIfPresent(arg);
        return slots || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwTypeError"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidCalendar"])(arg)), slots.calendar;
    }
    return ((arg)=>resolveBasicCalendarId((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseCalendarId"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireString"])(arg))))(arg);
}
const durationSlotsMap = /*@__PURE__*/ new WeakMap;
const Duration = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defineTemporalClass"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DurationBranding"], class {
    constructor(years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0, microseconds = 0, nanoseconds = 0){
        const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateDurationFields"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapProps"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toStrictInteger"], {
            years: years,
            months: months,
            weeks: weeks,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            milliseconds: milliseconds,
            microseconds: microseconds,
            nanoseconds: nanoseconds
        }));
        initDuration(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDurationSlots"])(fields));
    }
    static from(arg) {
        return createDuration(toDurationSlots(arg));
    }
    static compare(durationArg0, durationArg1, options = void 0) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compareDurations"])(refinePublicRelativeTo, toDurationSlots(durationArg0), toDurationSlots(durationArg1), options);
    }
    get sign() {
        return getDurationSlots(this).sign;
    }
    get blank() {
        return !getDurationSlots(this).sign;
    }
    with(mod) {
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeDurationFields"])(getDurationSlots(this), mod));
    }
    negated() {
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["negateDuration"])(getDurationSlots(this)));
    }
    abs() {
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["absDuration"])(getDurationSlots(this)));
    }
    add(otherArg) {
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addDurationsWithoutRelativeTo"])(0, getDurationSlots(this), toDurationSlots(otherArg)));
    }
    subtract(otherArg) {
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addDurationsWithoutRelativeTo"])(1, getDurationSlots(this), toDurationSlots(otherArg)));
    }
    round(roundTo) {
        return createDuration((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["roundDuration"])(refinePublicRelativeTo, getDurationSlots(this), roundTo));
    }
    total(totalOf) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["totalDuration"])(refinePublicRelativeTo, getDurationSlots(this), totalOf);
    }
    toLocaleString(locales = void 0, options) {
        const slots = getDurationSlots(this);
        return Intl.DurationFormat ? new Intl.DurationFormat(locales, options).format(slots) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDurationIso"])(slots, options);
    }
    toString(options = void 0) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDurationIso"])(getDurationSlots(this), options);
    }
    toJSON() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDurationIso"])(getDurationSlots(this));
    }
    valueOf() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forbiddenValueOf"])();
    }
}, getDurationSlots, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["durationGetters"]);
function createDuration(slots) {
    return initDuration(Object.create(Duration.prototype), slots);
}
function getDurationSlots(obj) {
    return getDurationSlotsIfPresent(obj) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidRecordType"])();
}
function getDurationSlotsIfPresent(obj) {
    return durationSlotsMap.get(obj);
}
function toDurationSlots(arg) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectLike"])(arg)) {
        return getDurationSlotsIfPresent(arg) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineDurationObjectLike"])(arg);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDuration"])(arg);
}
function refinePublicRelativeTo(relativeTo) {
    if (void 0 !== relativeTo) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectLike"])(relativeTo)) {
            const zonedDateTimeSlots = getZonedDateTimeSlotsIfPresent(relativeTo);
            if (zonedDateTimeSlots) {
                return zonedDateTimeSlots;
            }
            const dateSlots = getPlainDateSlotsIfPresent(relativeTo);
            if (dateSlots) {
                return dateSlots;
            }
            const dateTimeSlots = getPlainDateTimeSlotsIfPresent(relativeTo);
            if (dateTimeSlots) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateSlots"])(dateTimeSlots, dateTimeSlots.calendar);
            }
            const calendar = getCalendarFromBag(relativeTo);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refineMaybeZonedDateTimeObjectLike"])(refineTimeZoneArg, calendar, relativeTo);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseRelativeToSlots"])(relativeTo, resolveBasicCalendarId);
    }
}
function initDuration(instance, slots) {
    return durationSlotsMap.set(instance, slots), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["attachDebugString"])(instance), instance;
}
const Now = /*@__PURE__*/ Object.defineProperties({}, {
    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createStringTagDescriptors"])("Temporal.Now"),
    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPropDescriptors"])({
        timeZoneId () {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentTimeZoneId"])();
        },
        instant () {
            return createInstant((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEpochNanoSlots"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentEpochNano"])()));
        },
        zonedDateTimeISO (timeZoneArg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentTimeZoneId"])()) {
            const timeZone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryTimeZone"])(refineTimeZoneArg(timeZoneArg));
            return createZonedDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createZonedEpochNanoSlots"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentEpochNano"])(), timeZone));
        },
        plainDateTimeISO (timeZoneArg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentTimeZoneId"])()) {
            const isoDateTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentIsoDateTime"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryTimeZone"])(refineTimeZoneArg(timeZoneArg)));
            return createPlainDateTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateTimeSlots"])(isoDateTime));
        },
        plainDateISO (timeZoneArg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentTimeZoneId"])()) {
            const isoDateTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentIsoDateTime"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryTimeZone"])(refineTimeZoneArg(timeZoneArg)));
            return createPlainDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateSlots"])(isoDateTime));
        },
        plainTimeISO (timeZoneArg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentTimeZoneId"])()) {
            const isoDateTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentIsoDateTime"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryTimeZone"])(refineTimeZoneArg(timeZoneArg)));
            return createPlainTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTimeSlots"])(isoDateTime));
        }
    })
});
const Temporal = /*@__PURE__*/ Object.defineProperties({}, {
    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createStringTagDescriptors"])("Temporal"),
    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPropDescriptors"])({
        PlainYearMonth: PlainYearMonth,
        PlainMonthDay: PlainMonthDay,
        PlainDate: PlainDate,
        PlainTime: PlainTime,
        PlainDateTime: PlainDateTime,
        ZonedDateTime: ZonedDateTime,
        Instant: Instant,
        Duration: Duration,
        Now: Now
    })
});
const DateTimeFormat = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$classApi$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateTimeFormatClass"])(getTemporalBrandingAndSlots);
const IntlExtended = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$classApi$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createIntlExtended"])(DateTimeFormat);
;
}),
"[project]/newServer/notesphere_server/node_modules/temporal-polyfill/chunks/classApi.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDateTimeFormatClass",
    ()=>createDateTimeFormatClass,
    "createIntlExtended",
    ()=>createIntlExtended
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-polyfill/chunks/internal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-polyfill/chunks/apiHelpers.js [app-route] (ecmascript)");
;
;
function createIntlExtended(DateTimeFormat) {
    return Object.defineProperties(Object.create(Intl), (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPropDescriptors"])({
        DateTimeFormat: DateTimeFormat
    }));
}
function createDateTimeFormatClass(getTemporalBrandingAndSlots) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDateTimeFormatShell"])((internals)=>{
        const getTemporalFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["memoize"])((branding)=>{
            let options;
            switch(branding){
                case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InstantBranding"]:
                    options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transformInstantOptions"])(internals.F, 1);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainDateTimeBranding"]:
                    options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPlainFormatTimeZone"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transformDateTimeOptions"])(internals.F, 1));
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainDateBranding"]:
                    options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPlainFormatTimeZone"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transformDateOptions"])(internals.F, 1));
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainTimeBranding"]:
                    options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPlainFormatTimeZone"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transformTimeOptions"])(internals.F, 1));
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainYearMonthBranding"]:
                    options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPlainFormatTimeZone"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transformYearMonthOptions"])(internals.F, 1));
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainMonthDayBranding"]:
                    options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPlainFormatTimeZone"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transformMonthDayOptions"])(internals.F, 1));
                    break;
                default:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwTypeError"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidFormatType"])(branding));
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RawDateTimeFormat"](internals.Ce, options);
        });
        return {
            A (formattable) {
                if (void 0 === formattable) {
                    return [
                        internals.t
                    ];
                }
                const brandingAndSlots = getTemporalBrandingAndSlots(formattable);
                if (!brandingAndSlots) {
                    return [
                        internals.t,
                        Number(formattable)
                    ];
                }
                const [branding, slots] = brandingAndSlots;
                const format = getTemporalFormat(branding);
                return checkTemporalDateTimeFormatCompatible(format, branding, slots), [
                    format,
                    temporalDateTimeToEpochMilli(branding, slots)
                ];
            },
            v (start, end) {
                void 0 !== start && void 0 !== end || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwTypeError"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mismatchingFormatTypes"]);
                const startBrandingAndSlots = getTemporalBrandingAndSlots(start);
                const startEpochMilli = startBrandingAndSlots ? void 0 : Number(start);
                const endBrandingAndSlots = getTemporalBrandingAndSlots(end);
                const endEpochMilli = endBrandingAndSlots ? void 0 : Number(end);
                if (!startBrandingAndSlots && !endBrandingAndSlots) {
                    return [
                        internals.t,
                        startEpochMilli,
                        endEpochMilli
                    ];
                }
                startBrandingAndSlots && endBrandingAndSlots || (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwTypeError"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mismatchingFormatTypes"]);
                const [startBranding, startSlots] = startBrandingAndSlots;
                const [endBranding, endSlots] = endBrandingAndSlots;
                startBranding !== endBranding && (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwTypeError"])(__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mismatchingFormatTypes"]);
                const format = getTemporalFormat(startBranding);
                return checkTemporalDateTimeFormatCompatible(format, startBranding, startSlots), checkTemporalDateTimeFormatCompatible(format, startBranding, endSlots), [
                    format,
                    temporalDateTimeToEpochMilli(startBranding, startSlots),
                    temporalDateTimeToEpochMilli(startBranding, endSlots)
                ];
            }
        };
    });
}
function checkTemporalDateTimeFormatCompatible(format, branding, slots) {
    switch(branding){
        case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InstantBranding"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainTimeBranding"]:
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainDateTimeBranding"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainDateBranding"]:
            return void (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkResolvedCalendarCompatible"])(format, slots);
        case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainYearMonthBranding"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainMonthDayBranding"]:
            return void (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkResolvedCalendarCompatible"])(format, slots, 1);
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwTypeError"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidFormatType"])(branding));
    }
}
function temporalDateTimeToEpochMilli(branding, slots) {
    switch(branding){
        case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InstantBranding"]:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["epochNanoToMilli"])(slots.epochNanoseconds);
        case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainDateTimeBranding"]:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoDateTimeToEpochMilli"])(slots);
        case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainDateBranding"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainYearMonthBranding"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainMonthDayBranding"]:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isoDateToEpochMilli"])(slots);
        case __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$apiHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PlainTimeBranding"]:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timeFieldsToMilli"])(slots);
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwTypeError"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidFormatType"])(branding));
    }
}
;
}),
"[project]/newServer/notesphere_server/node_modules/temporal-polyfill/chunks/internal.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RawDateTimeFormat",
    ()=>RawDateTimeFormat,
    "absDuration",
    ()=>absDuration,
    "addDurationsWithoutRelativeTo",
    ()=>addDurationsWithoutRelativeTo,
    "addIsoMonths",
    ()=>addIsoMonths,
    "alignZonedEpoch",
    ()=>alignZonedEpoch,
    "applyPlainFormatTimeZone",
    ()=>applyPlainFormatTimeZone,
    "applyZonedFormatTimeZone",
    ()=>applyZonedFormatTimeZone,
    "bigNanoInHour",
    ()=>bigNanoInHour,
    "bigNanoInMicro",
    ()=>bigNanoInMicro,
    "bigNanoInMilli",
    ()=>bigNanoInMilli,
    "bigNanoInMinute",
    ()=>bigNanoInMinute,
    "bigNanoInSec",
    ()=>bigNanoInSec,
    "bindArgs",
    ()=>bindArgs,
    "checkEpochNanoInBounds",
    ()=>checkEpochNanoInBounds,
    "checkIsoDateInBounds",
    ()=>checkIsoDateInBounds,
    "checkIsoDateTimeInBounds",
    ()=>checkIsoDateTimeInBounds,
    "checkIsoYearMonthInBounds",
    ()=>checkIsoYearMonthInBounds,
    "checkResolvedCalendarCompatible",
    ()=>checkResolvedCalendarCompatible,
    "coerceRoundingIncInteger",
    ()=>coerceRoundingIncInteger,
    "combineDateAndTime",
    ()=>combineDateAndTime,
    "compareDurations",
    ()=>compareDurations,
    "compareIsoDateFields",
    ()=>compareIsoDateFields,
    "compareIsoDateTimeFields",
    ()=>compareIsoDateTimeFields,
    "compareNumbers",
    ()=>compareNumbers,
    "compareTimeFields",
    ()=>compareTimeFields,
    "compareZonedEpochSlots",
    ()=>compareZonedEpochSlots,
    "computeBigNanoInc",
    ()=>computeBigNanoInc,
    "computeCalendarDateFields",
    ()=>computeCalendarDateFields,
    "computeCalendarDayOfYear",
    ()=>computeCalendarDayOfYear,
    "computeCalendarDaysInMonth",
    ()=>computeCalendarDaysInMonth,
    "computeCalendarDaysInYear",
    ()=>computeCalendarDaysInYear,
    "computeCalendarEraFields",
    ()=>computeCalendarEraFields,
    "computeCalendarInLeapYear",
    ()=>computeCalendarInLeapYear,
    "computeCalendarMonthCode",
    ()=>computeCalendarMonthCode,
    "computeCalendarMonthsInYear",
    ()=>computeCalendarMonthsInYear,
    "computeCalendarWeekOfYear",
    ()=>computeCalendarWeekOfYear,
    "computeCalendarYearOfWeek",
    ()=>computeCalendarYearOfWeek,
    "computeDayCeil",
    ()=>computeDayCeil,
    "computeDayFloor",
    ()=>computeDayFloor,
    "computeGregoryEraFields",
    ()=>computeGregoryEraFields,
    "computeIsoDayOfWeek",
    ()=>computeIsoDayOfWeek,
    "computeIsoDaysInMonth",
    ()=>computeIsoDaysInMonth,
    "computeIsoDaysInYear",
    ()=>computeIsoDaysInYear,
    "computeIsoFieldsFromParts",
    ()=>computeIsoFieldsFromParts,
    "computeIsoInLeapYear",
    ()=>computeIsoInLeapYear,
    "computeIsoMonthCodeParts",
    ()=>computeIsoMonthCodeParts,
    "computeIsoWeekCeil",
    ()=>computeIsoWeekCeil,
    "computeIsoWeekFloor",
    ()=>computeIsoWeekFloor,
    "computeIsoWeekInterval",
    ()=>computeIsoWeekInterval,
    "computeIsoYearMonthFieldsForMonthDay",
    ()=>computeIsoYearMonthFieldsForMonthDay,
    "computeMonthCeil",
    ()=>computeMonthCeil,
    "computeMonthFloor",
    ()=>computeMonthFloor,
    "computeMonthInterval",
    ()=>computeMonthInterval,
    "computeYearCeil",
    ()=>computeYearCeil,
    "computeYearFloor",
    ()=>computeYearFloor,
    "computeYearInterval",
    ()=>computeYearInterval,
    "computeZonedHoursInDay",
    ()=>computeZonedHoursInDay,
    "computeZonedStartOfDay",
    ()=>computeZonedStartOfDay,
    "constrainToRange",
    ()=>constrainToRange,
    "countDateTimeUnit",
    ()=>countDateTimeUnit,
    "countDateWeeks",
    ()=>countDateWeeks,
    "countEpochNanoDays",
    ()=>countEpochNanoDays,
    "countEpochNanoUnit",
    ()=>countEpochNanoUnit,
    "countRelativeUnit",
    ()=>countRelativeUnit,
    "countTimeUnit",
    ()=>countTimeUnit,
    "countYearMonthUnit",
    ()=>countYearMonthUnit,
    "countZonedDayWeekUnit",
    ()=>countZonedDayWeekUnit,
    "createDateFromRefinedFields",
    ()=>createDateFromRefinedFields,
    "createDateRelativeOps",
    ()=>createDateRelativeOps,
    "createDateSlots",
    ()=>createDateSlots,
    "createDateTimeFormatShell",
    ()=>createDateTimeFormatShell,
    "createDateTimeFromMergedFields",
    ()=>createDateTimeFromMergedFields,
    "createDateTimeFromRefinedFields",
    ()=>createDateTimeFromRefinedFields,
    "createDateTimeSlots",
    ()=>createDateTimeSlots,
    "createDurationSlots",
    ()=>createDurationSlots,
    "createEpochNanoSlots",
    ()=>createEpochNanoSlots,
    "createMonthDayFromCalendarParts",
    ()=>createMonthDayFromCalendarParts,
    "createMonthDayFromRefinedFields",
    ()=>createMonthDayFromRefinedFields,
    "createNameDescriptors",
    ()=>createNameDescriptors,
    "createPropDescriptors",
    ()=>createPropDescriptors,
    "createPropGetters",
    ()=>createPropGetters,
    "createStringTagDescriptors",
    ()=>createStringTagDescriptors,
    "createTimeSlots",
    ()=>createTimeSlots,
    "createYearMonthFromCalendarParts",
    ()=>createYearMonthFromCalendarParts,
    "createYearMonthFromRefinedFields",
    ()=>createYearMonthFromRefinedFields,
    "createZonedDateTimeFromMergedFields",
    ()=>createZonedDateTimeFromMergedFields,
    "createZonedEpochNanoSlots",
    ()=>createZonedEpochNanoSlots,
    "createZonedRelativeOps",
    ()=>createZonedRelativeOps,
    "dateTimeToZonedDateTime",
    ()=>dateTimeToZonedDateTime,
    "dateToZonedDateTime",
    ()=>dateToZonedDateTime,
    "diffCalendarDates",
    ()=>diffCalendarDates,
    "diffDateTimesExact",
    ()=>diffDateTimesExact,
    "diffDateTimesRounded",
    ()=>diffDateTimesRounded,
    "diffDatesRounded",
    ()=>diffDatesRounded,
    "diffEpochMilliDays",
    ()=>diffEpochMilliDays,
    "diffEpochNanosRounded",
    ()=>diffEpochNanosRounded,
    "diffIsoMonthSlots",
    ()=>diffIsoMonthSlots,
    "diffTimesRounded",
    ()=>diffTimesRounded,
    "diffYearMonthsRounded",
    ()=>diffYearMonthsRounded,
    "diffZonedDateTimesRounded",
    ()=>diffZonedDateTimesRounded,
    "diffZonedEpochsExact",
    ()=>diffZonedEpochsExact,
    "durationGetters",
    ()=>durationGetters,
    "epochDaysToIsoDate",
    ()=>epochDaysToIsoDate,
    "epochMilliToInstant",
    ()=>epochMilliToInstant,
    "epochMilliToIsoDateTime",
    ()=>epochMilliToIsoDateTime,
    "epochNanoToInstant",
    ()=>epochNanoToInstant,
    "epochNanoToIsoDateTime",
    ()=>epochNanoToIsoDateTime,
    "epochNanoToMilli",
    ()=>epochNanoToMilli,
    "eraYearToYear",
    ()=>eraYearToYear,
    "exoticCalendarRequired",
    ()=>exoticCalendarRequired,
    "fieldsToMonthDay",
    ()=>fieldsToMonthDay,
    "fieldsToYearMonth",
    ()=>fieldsToYearMonth,
    "forbiddenValueOf",
    ()=>forbiddenValueOf,
    "formatDateIsoAuto",
    ()=>formatDateIsoAuto,
    "formatDateTimeIsoAuto",
    ()=>formatDateTimeIsoAuto,
    "formatDurationIso",
    ()=>formatDurationIso,
    "formatDurationIsoAuto",
    ()=>formatDurationIsoAuto,
    "formatEpochMilliToPartsRecord",
    ()=>formatEpochMilliToPartsRecord,
    "formatInstantIso",
    ()=>formatInstantIso,
    "formatInstantIsoAuto",
    ()=>formatInstantIsoAuto,
    "formatMonthDayIsoAuto",
    ()=>formatMonthDayIsoAuto,
    "formatOffsetNano",
    ()=>formatOffsetNano,
    "formatPlainDateIso",
    ()=>formatPlainDateIso,
    "formatPlainDateTimeIso",
    ()=>formatPlainDateTimeIso,
    "formatPlainMonthDayIso",
    ()=>formatPlainMonthDayIso,
    "formatPlainTimeIso",
    ()=>formatPlainTimeIso,
    "formatPlainYearMonthIso",
    ()=>formatPlainYearMonthIso,
    "formatTimeIsoAuto",
    ()=>formatTimeIsoAuto,
    "formatYearMonthIsoAuto",
    ()=>formatYearMonthIsoAuto,
    "formatZonedDateTimeIso",
    ()=>formatZonedDateTimeIso,
    "formatZonedDateTimeIsoAuto",
    ()=>formatZonedDateTimeIsoAuto,
    "getCalendarSlotId",
    ()=>getCalendarSlotId,
    "getCommonCalendar",
    ()=>getCommonCalendar,
    "getCommonTimeZone",
    ()=>getCommonTimeZone,
    "getCurrentEpochNano",
    ()=>getCurrentEpochNano,
    "getCurrentIsoDateTime",
    ()=>getCurrentIsoDateTime,
    "getCurrentTimeZoneId",
    ()=>getCurrentTimeZoneId,
    "getInstantPreferringOffset",
    ()=>getInstantPreferringOffset,
    "getSingleInstantFor",
    ()=>getSingleInstantFor,
    "getZonedTimeZoneId",
    ()=>getZonedTimeZoneId,
    "gregoryCalendarId",
    ()=>gregoryCalendarId,
    "gregoryCalendarImpl",
    ()=>gregoryCalendarImpl,
    "gregoryEraOrigins",
    ()=>gregoryEraOrigins,
    "instantToZonedDateTime",
    ()=>instantToZonedDateTime,
    "instantsEqual",
    ()=>instantsEqual,
    "invalidBag",
    ()=>invalidBag,
    "invalidCalendar",
    ()=>invalidCalendar,
    "invalidCallingContext",
    ()=>invalidCallingContext,
    "invalidFormatType",
    ()=>invalidFormatType,
    "invalidRelativeTo",
    ()=>invalidRelativeTo,
    "invalidTimeZone",
    ()=>invalidTimeZone,
    "isObjectLike",
    ()=>isObjectLike,
    "isoCalendarId",
    ()=>isoCalendarId,
    "isoCalendarImpl",
    ()=>isoCalendarImpl,
    "isoDateTimeToEpochMilli",
    ()=>isoDateTimeToEpochMilli,
    "isoDateTimeToEpochNano",
    ()=>isoDateTimeToEpochNano,
    "isoDateToEpochDays",
    ()=>isoDateToEpochDays,
    "isoDateToEpochMilli",
    ()=>isoDateToEpochMilli,
    "isoDateToEpochNano",
    ()=>isoDateToEpochNano,
    "isoEpochFirstLeapYear",
    ()=>isoEpochFirstLeapYear,
    "isoEpochOriginYear",
    ()=>isoEpochOriginYear,
    "isoMonthsInYear",
    ()=>isoMonthsInYear,
    "isoPartsToEpochDays",
    ()=>isoPartsToEpochDays,
    "mapProps",
    ()=>mapProps,
    "maxMilli",
    ()=>maxMilli,
    "memoize",
    ()=>memoize,
    "mergeDateFields",
    ()=>mergeDateFields,
    "mergeDateTimeFields",
    ()=>mergeDateTimeFields,
    "mergeDurationFields",
    ()=>mergeDurationFields,
    "mergeMonthDayFields",
    ()=>mergeMonthDayFields,
    "mergeTimeFields",
    ()=>mergeTimeFields,
    "mergeYearMonthFields",
    ()=>mergeYearMonthFields,
    "mergeZonedDateTimeFields",
    ()=>mergeZonedDateTimeFields,
    "milliInUtcDay",
    ()=>milliInUtcDay,
    "mismatchingFormatTypes",
    ()=>mismatchingFormatTypes,
    "modFloor",
    ()=>modFloor,
    "monthCodeNumberToMonth",
    ()=>monthCodeNumberToMonth,
    "monthDayToDate",
    ()=>monthDayToDate,
    "monthToMonthCodeNumber",
    ()=>monthToMonthCodeNumber,
    "moveDate",
    ()=>moveDate,
    "moveDateByCalendarUnits",
    ()=>moveDateByCalendarUnits,
    "moveDateByDays",
    ()=>moveDateByDays,
    "moveDateTime",
    ()=>moveDateTime,
    "moveDateTimeByNano",
    ()=>moveDateTimeByNano,
    "moveEpochNano",
    ()=>moveEpochNano,
    "moveEpochNanoByNano",
    ()=>moveEpochNanoByNano,
    "moveTime",
    ()=>moveTime,
    "moveTimeByNano",
    ()=>moveTimeByNano,
    "moveToRefinedDayOfMonth",
    ()=>moveToRefinedDayOfMonth,
    "moveToRefinedDayOfWeek",
    ()=>moveToRefinedDayOfWeek,
    "moveToRefinedDayOfYear",
    ()=>moveToRefinedDayOfYear,
    "moveToRefinedWeekOfYear",
    ()=>moveToRefinedWeekOfYear,
    "moveYearMonth",
    ()=>moveYearMonth,
    "moveYearMonthByUnits",
    ()=>moveYearMonthByUnits,
    "moveZonedEpochSlots",
    ()=>moveZonedEpochSlots,
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
    "negateDuration",
    ()=>negateDuration,
    "negateDurationFields",
    ()=>negateDurationFields,
    "noop",
    ()=>noop,
    "normalizeUnitRoundOptions",
    ()=>normalizeUnitRoundOptions,
    "outOfBoundsDate",
    ()=>outOfBoundsDate,
    "parseCalendarId",
    ()=>parseCalendarId,
    "parseDuration",
    ()=>parseDuration,
    "parseInstant",
    ()=>parseInstant,
    "parsePlainDate",
    ()=>parsePlainDate,
    "parsePlainDateTime",
    ()=>parsePlainDateTime,
    "parsePlainMonthDay",
    ()=>parsePlainMonthDay,
    "parsePlainTime",
    ()=>parsePlainTime,
    "parsePlainYearMonth",
    ()=>parsePlainYearMonth,
    "parseRelativeToSlots",
    ()=>parseRelativeToSlots,
    "parseTimeZoneId",
    ()=>parseTimeZoneId,
    "parseZonedDateTime",
    ()=>parseZonedDateTime,
    "plainDateTimesEqual",
    ()=>plainDateTimesEqual,
    "plainDatesEqual",
    ()=>plainDatesEqual,
    "plainMonthDaysEqual",
    ()=>plainMonthDaysEqual,
    "plainTimesEqual",
    ()=>plainTimesEqual,
    "plainYearMonthsEqual",
    ()=>plainYearMonthsEqual,
    "queryTimeZone",
    ()=>queryTimeZone,
    "refineCalendarDateFields",
    ()=>refineCalendarDateFields,
    "refineDiffOptions",
    ()=>refineDiffOptions,
    "refineDirectionOptions",
    ()=>refineDirectionOptions,
    "refineDurationObjectLike",
    ()=>refineDurationObjectLike,
    "refineEpochDisambigOptions",
    ()=>refineEpochDisambigOptions,
    "refineMaybeZonedDateTimeObjectLike",
    ()=>refineMaybeZonedDateTimeObjectLike,
    "refineMonthDayFields",
    ()=>refineMonthDayFields,
    "refineOverflowOptions",
    ()=>refineOverflowOptions,
    "refinePlainDateObjectLike",
    ()=>refinePlainDateObjectLike,
    "refinePlainDateTimeObjectLike",
    ()=>refinePlainDateTimeObjectLike,
    "refinePlainMonthDayObjectLike",
    ()=>refinePlainMonthDayObjectLike,
    "refinePlainTimeObjectLike",
    ()=>refinePlainTimeObjectLike,
    "refinePlainYearMonthObjectLike",
    ()=>refinePlainYearMonthObjectLike,
    "refineRoundingOptions",
    ()=>refineRoundingOptions,
    "refineTimeZoneId",
    ()=>refineTimeZoneId,
    "refineUnitDiffOptions",
    ()=>refineUnitDiffOptions,
    "refineUnitRoundOptions",
    ()=>refineUnitRoundOptions,
    "refineZonedDateTimeObjectLike",
    ()=>refineZonedDateTimeObjectLike,
    "refineZonedFieldOptions",
    ()=>refineZonedFieldOptions,
    "requireNumberIsInteger",
    ()=>requireNumberIsInteger,
    "requireString",
    ()=>requireString,
    "resolveTimeFields",
    ()=>resolveTimeFields,
    "resolveTimeZoneId",
    ()=>resolveTimeZoneId,
    "roundBigNanoToDayOriginInc",
    ()=>roundBigNanoToDayOriginInc,
    "roundDateTimeToInterval",
    ()=>roundDateTimeToInterval,
    "roundDateTimeToUnit",
    ()=>roundDateTimeToUnit,
    "roundDateToInterval",
    ()=>roundDateToInterval,
    "roundDuration",
    ()=>roundDuration,
    "roundTimeToUnit",
    ()=>roundTimeToUnit,
    "roundZonedEpochSlotsToUnit",
    ()=>roundZonedEpochSlotsToUnit,
    "roundZonedEpochToDay",
    ()=>roundZonedEpochToDay,
    "roundZonedEpochToInterval",
    ()=>roundZonedEpochToInterval,
    "roundZonedEpochToTime",
    ()=>roundZonedEpochToTime,
    "throwRangeError",
    ()=>throwRangeError,
    "throwTypeError",
    ()=>throwTypeError,
    "timeFieldDefaults",
    ()=>timeFieldDefaults,
    "timeFieldsToMilli",
    ()=>timeFieldsToMilli,
    "timeFieldsToNano",
    ()=>timeFieldsToNano,
    "timeGetters",
    ()=>timeGetters,
    "toBigInt",
    ()=>toBigInt,
    "toStrictInteger",
    ()=>toStrictInteger,
    "totalDuration",
    ()=>totalDuration,
    "transformDateOptions",
    ()=>transformDateOptions,
    "transformDateTimeOptions",
    ()=>transformDateTimeOptions,
    "transformInstantOptions",
    ()=>transformInstantOptions,
    "transformMonthDayOptions",
    ()=>transformMonthDayOptions,
    "transformTimeOptions",
    ()=>transformTimeOptions,
    "transformYearMonthOptions",
    ()=>transformYearMonthOptions,
    "transformZonedOptions",
    ()=>transformZonedOptions,
    "utcTimeZoneId",
    ()=>utcTimeZoneId,
    "validateDurationCalendarUnit",
    ()=>validateDurationCalendarUnit,
    "validateDurationFields",
    ()=>validateDurationFields,
    "validateIsoDateFields",
    ()=>validateIsoDateFields,
    "validateIsoDateTimeFields",
    ()=>validateIsoDateTimeFields,
    "validateTimeFields",
    ()=>validateTimeFields,
    "yearMonthToDate",
    ()=>yearMonthToDate,
    "zonedDateTimeToDate",
    ()=>zonedDateTimeToDate,
    "zonedDateTimeToDateTime",
    ()=>zonedDateTimeToDateTime,
    "zonedDateTimeToInstant",
    ()=>zonedDateTimeToInstant,
    "zonedDateTimeToTime",
    ()=>zonedDateTimeToTime,
    "zonedDateTimeWithPlainTime",
    ()=>zonedDateTimeWithPlainTime,
    "zonedDateTimesEqual",
    ()=>zonedDateTimesEqual,
    "zonedEpochSlotsToIso",
    ()=>zonedEpochSlotsToIso
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$protected$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-utils/dist/protected.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-utils/dist/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$protected$2d$error$2d$messages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-utils/dist/protected-error-messages.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-utils/dist/errorMessages.js [app-route] (ecmascript)");
;
;
;
const invalidEntity = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidEntity"];
const unsupportedWeekNumbers = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unsupportedWeekNumbers"];
const missingField = (fieldName)=>`Missing ${fieldName}`;
const invalidBag = "Invalid bag";
const invalidChoice = (fieldName, val, choiceMap)=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidEntity"](fieldName, val) + "; must be " + Object.keys(choiceMap).join();
const forbiddenValueOf = "Cannot use valueOf";
const invalidCallingContext = "Invalid calling context";
const missingYear = (allowEra)=>"Missing year" + (allowEra ? "/era/eraYear" : "");
const invalidLeapMonth = "Invalid leap month";
const invalidCalendar = (calendarId)=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidEntity"]("Calendar", calendarId);
const exoticCalendarRequired = (calendarId, remedy)=>`Unknown calendar ${calendarId}; might need ${remedy}`;
const invalidTimeZone = (calendarId)=>__TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalidEntity"]("TimeZone", calendarId);
const outOfBoundsDate = "Out-of-bounds date";
const invalidRelativeTo = (arg)=>invalidEntity("relativeTo", arg);
const failedParse = (s)=>`Cannot parse: ${s}`;
const invalidFormatType = (branding)=>`Cannot format ${branding}`;
const mismatchingFormatTypes = "Mismatching types for formatting";
const constrainToRange = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constrainToRange"];
const isObjectLike = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectLike"];
function throwRangeError(message) {
    throw new RangeError(message);
}
function throwTypeError(message) {
    throw new TypeError(message);
}
function clampProp(props, propName, min, max, overflow) {
    return clampEntity(propName, ((props, propName)=>{
        const propVal = props[propName];
        return void 0 === propVal && throwTypeError(missingField(propName)), propVal;
    })(props, propName), min, max, overflow);
}
function clampEntity(entityName, num, min, max, overflow, choices) {
    const clamped = constrainToRange(num, min, max);
    return overflow && num !== clamped && throwRangeError(((entityName, val, min, max, choices)=>choices ? __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["numberOutOfRange"](entityName, choices[val], choices[min], choices[max]) : __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["numberOutOfRange"](entityName, val, min, max))(entityName, num, min, max, choices)), clamped;
}
function memoize(generator, MapClass = Map, maxSize = 1e4) {
    const map = new MapClass;
    return (key, ...otherArgs)=>{
        if (map.has(key)) {
            return map.get(key);
        }
        map.size >= maxSize && map.clear();
        const val = generator(key, ...otherArgs);
        return map.set(key, val), val;
    };
}
const createNameDescriptors = (name)=>createPropDescriptors({
        name: name
    }, 1);
const createPropDescriptors = (propVals, readonly)=>mapProps((value)=>({
            value: value,
            configurable: 1,
            writable: !readonly
        }), propVals);
const createStringTagDescriptors = (value)=>({
        [Symbol.toStringTag]: {
            value: value,
            configurable: 1
        }
    });
function mapProps(transformer, props) {
    const res = {};
    for(const propName in props){
        res[propName] = transformer(props[propName], propName);
    }
    return res;
}
function zipPropsConst(propNames, propVal) {
    const res = {};
    for (const propName of propNames){
        res[propName] = propVal;
    }
    return res;
}
function createPropGetters(propNames) {
    const getters = {};
    for (const propName of propNames){
        getters[propName] = (slots)=>slots[propName];
    }
    return getters;
}
function pluckProps(propNames, props, dest = Object.create(null)) {
    for (const propName of propNames){
        dest[propName] = props[propName];
    }
    return dest;
}
function allPropsEqual(propNames, props0, props1) {
    for (const propName of propNames){
        if (props0[propName] !== props1[propName]) {
            return 0;
        }
    }
    return 1;
}
function zeroOutProps(propNames, clearUntilI, props) {
    const copy = {
        ...props
    };
    for(let i = 0; i < clearUntilI; i++){
        copy[propNames[i]] = 0;
    }
    return copy;
}
function bindArgs(f, ...boundArgs) {
    return (...dynamicArgs)=>f(...boundArgs, ...dynamicArgs);
}
function identity(arg) {
    return arg;
}
function noop() {}
function capitalize(s) {
    return s[0].toUpperCase() + s.substring(1);
}
function sortStrings(...strss) {
    return [].concat(...strss).sort();
}
function createRegExp(meat) {
    return new RegExp(`^${meat}$`);
}
function parseSubsecNano(fracStr) {
    return parseInt(fracStr.padEnd(9, "0"));
}
function parseInt0(s) {
    return void 0 === s ? 0 : parseInt(s);
}
function padNumber(digits, num) {
    return String(num).padStart(digits, "0");
}
const padNumber2 = /*@__PURE__*/ bindArgs(padNumber, 2);
function compareNumbers(a, b) {
    return Math.sign(a - b);
}
function compareBigInts(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
function divFloorBigInt(num, denom) {
    const whole = num / denom;
    return num % denom < 0n ? whole - 1n : whole;
}
function divModFloorBigInt(num, divisor) {
    const quotient = divFloorBigInt(num, divisor);
    return [
        quotient,
        num - quotient * divisor
    ];
}
function divModFloor(num, divisor) {
    return [
        Math.floor(num / divisor),
        modFloor(num, divisor)
    ];
}
function modFloor(num, divisor) {
    return (num % divisor + divisor) % divisor;
}
function divTrunc(num, divisor) {
    return Math.trunc(num / divisor) || 0;
}
function modTrunc(num, divisor) {
    return num % divisor || 0;
}
function fabricateNearHalfFraction(halfCompare, sign = 1) {
    return sign * (.5 + halfCompare / 5);
}
function hasHalf(num) {
    return .5 === Math.abs(num % 1);
}
const isoCalendarId = "iso8601";
const gregoryCalendarId = "gregory";
const gregoryEraOrigins = {
    "bce": -1,
    "ce": 0
};
function normalizeEraName(era) {
    const normalized = era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, "");
    return "bc" === normalized || "b" === normalized ? "bce" : "ad" === normalized || "a" === normalized ? "ce" : normalized;
}
const isoCalendarImpl = void 0;
const gregoryCalendarImpl = 0;
function getCalendarSlotId(calendar) {
    return calendar === isoCalendarImpl ? "iso8601" : 0 === calendar ? "gregory" : calendar.id;
}
const monthCodeRegExp = /^M(\d{2})(L?)$/;
function parseMonthCode(monthCode) {
    const m = monthCodeRegExp.exec(monthCode);
    return m || throwRangeError(((monthCode)=>`Invalid monthCode: ${monthCode}`)(monthCode)), [
        parseInt(m[1]),
        Boolean(m[2])
    ];
}
function formatMonthCode(monthCodeNumber, isLeapMonth) {
    return "M" + padNumber2(monthCodeNumber) + (isLeapMonth ? "L" : "");
}
function monthCodeNumberToMonth(monthCodeNumber, isLeapMonth, leapMonth) {
    return monthCodeNumber + (isLeapMonth || leapMonth && monthCodeNumber >= leapMonth ? 1 : 0);
}
function monthToMonthCodeNumber(month, leapMonth) {
    return month - (leapMonth && month >= leapMonth ? 1 : 0);
}
const unitNameMap = {
    nanosecond: 0,
    microsecond: 1,
    millisecond: 2,
    second: 3,
    minute: 4,
    hour: 5,
    day: 6,
    week: 7,
    month: 8,
    year: 9
};
const unitNamesAsc = /*@__PURE__*/ Object.keys(unitNameMap);
const milliInUtcDay = 864e5;
const nanoInMicro = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nanoInMicro"];
const nanoInMilli = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nanoInMilli"];
const nanoInSec = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nanoInSec"];
const nanoInMinute = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nanoInMinute"];
const nanoInHour = __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nanoInHour"];
const nanoInUtcDay = 864e11;
const unitNanoMap = [
    1,
    nanoInMicro,
    nanoInMilli,
    nanoInSec,
    nanoInMinute,
    nanoInHour,
    nanoInUtcDay
];
const bigNanoInMicro = /*@__PURE__*/ BigInt(nanoInMicro);
const bigNanoInMilli = /*@__PURE__*/ BigInt(nanoInMilli);
const bigNanoInSec = /*@__PURE__*/ BigInt(nanoInSec);
const bigNanoInMinute = /*@__PURE__*/ BigInt(nanoInMinute);
const bigNanoInHour = /*@__PURE__*/ BigInt(nanoInHour);
const bigNanoInUtcDay = /*@__PURE__*/ BigInt(nanoInUtcDay);
function divideBigNanoToExactNumber(bigNano, divisorNano) {
    const days = Number(bigNano / bigNanoInUtcDay);
    const timeNano = Number(bigNano % bigNanoInUtcDay);
    return days * (nanoInUtcDay / divisorNano) + (Math.trunc(timeNano / divisorNano) + timeNano % divisorNano / divisorNano);
}
const timeFieldNamesAsc = /*@__PURE__*/ unitNamesAsc.slice(0, 6);
const timeGetters = /*@__PURE__*/ createPropGetters(timeFieldNamesAsc);
const yearFieldNamesAsc = [
    "year"
];
const dayFieldNamesAsc = [
    "day"
];
const calendarDateFieldNamesAsc = [
    "day",
    "month",
    "year"
];
const offsetFieldNames = [
    "offset"
];
const timeZoneFieldNames = [
    "timeZone"
];
const eraYearFieldNames = [
    "era",
    "eraYear"
];
const allYearFieldNames = [
    "era",
    "eraYear",
    "year"
];
const monthFieldNames = [
    "month",
    "monthCode"
];
const monthDayFieldNames = [
    "day",
    "month",
    "monthCode"
];
const timeFieldNamesAlpha = /*@__PURE__*/ sortStrings(timeFieldNamesAsc);
const yearFieldNamesWithEraAlpha = /*@__PURE__*/ sortStrings(eraYearFieldNames, yearFieldNamesAsc);
const yearMonthFieldNamesAlpha = /*@__PURE__*/ sortStrings(monthFieldNames, yearFieldNamesAsc);
const yearMonthFieldNamesWithEraAlpha = /*@__PURE__*/ sortStrings(eraYearFieldNames, yearMonthFieldNamesAlpha);
const yearMonthCodeFieldNamesAlpha = /*@__PURE__*/ sortStrings([
    "monthCode"
], yearFieldNamesAsc);
const yearMonthCodeFieldNamesWithEraAlpha = /*@__PURE__*/ sortStrings(eraYearFieldNames, yearMonthCodeFieldNamesAlpha);
const monthCodeDayFieldNamesAlpha = /*@__PURE__*/ sortStrings(dayFieldNamesAsc, [
    "monthCode"
]);
const dateFieldNamesAlpha = /*@__PURE__*/ sortStrings(dayFieldNamesAsc, yearMonthFieldNamesAlpha);
const dateFieldNamesWithEraAlpha = /*@__PURE__*/ sortStrings(dayFieldNamesAsc, eraYearFieldNames, yearMonthFieldNamesAlpha);
const dateTimeFieldNamesAlpha = /*@__PURE__*/ sortStrings(dateFieldNamesAlpha, timeFieldNamesAsc);
const dateTimeFieldNamesWithEraAlpha = /*@__PURE__*/ sortStrings(dateFieldNamesWithEraAlpha, timeFieldNamesAsc);
const dateTimeAndOffsetFieldNamesAlpha = /*@__PURE__*/ sortStrings(dateFieldNamesAlpha, timeFieldNamesAsc, offsetFieldNames);
const dateTimeAndOffsetFieldNamesWithEraAlpha = /*@__PURE__*/ sortStrings(dateFieldNamesWithEraAlpha, timeFieldNamesAsc, offsetFieldNames);
const dateTimeAndZoneFieldNamesAlpha = /*@__PURE__*/ sortStrings(dateFieldNamesAlpha, timeFieldNamesAsc, offsetFieldNames, timeZoneFieldNames);
const dateTimeAndZoneFieldNamesWithEraAlpha = /*@__PURE__*/ sortStrings(dateFieldNamesWithEraAlpha, timeFieldNamesAsc, offsetFieldNames, timeZoneFieldNames);
const yearMonthCodeDayFieldNamesAlpha = /*@__PURE__*/ sortStrings(dayFieldNamesAsc, yearMonthCodeFieldNamesAlpha);
const yearMonthCodeDayFieldNamesWithEraAlpha = /*@__PURE__*/ sortStrings(dayFieldNamesAsc, eraYearFieldNames, yearMonthCodeFieldNamesAlpha);
const timeFieldDefaults = /*@__PURE__*/ zipPropsConst(timeFieldNamesAsc, 0);
function validateTimeFields(timeFields) {
    return constrainTimeFields(timeFields, 1), timeFields;
}
const maxValues = {
    hour: 23,
    minute: 59,
    second: 59
};
function constrainTimeFields(timeFields, overflow) {
    const constrainedFields = {};
    for (const fieldName of timeFieldNamesAsc){
        constrainedFields[fieldName] = clampEntity(fieldName, timeFields[fieldName], 0, maxValues[fieldName] || 999, overflow);
    }
    return constrainedFields;
}
function timeFieldsToNano(timeFields) {
    return timeFieldsToSec(timeFields) * nanoInSec + timeFieldsToSubsecNano(timeFields);
}
function timeFieldsToMilli(timeFields) {
    return 1e3 * timeFieldsToSec(timeFields) + timeFields.millisecond;
}
function timeFieldsToSec(timeFields) {
    return 3600 * timeFields.hour + 60 * timeFields.minute + timeFields.second;
}
function timeFieldsToSubsecNano(timeFields) {
    return timeFields.millisecond * nanoInMilli + timeFields.microsecond * nanoInMicro + timeFields.nanosecond;
}
function nanoToTimeAndDay(nano) {
    const [dayDelta, timeNano] = divModFloor(nano, nanoInUtcDay);
    return [
        nanoToTimeFields(timeNano),
        dayDelta
    ];
}
function nanoToTimeFields(timeNano) {
    const [timeMilli, nanoAfterMilli] = divModFloor(timeNano, nanoInMilli);
    const [microsecond, nanosecond] = divModFloor(nanoAfterMilli, nanoInMicro);
    return milliToTimeFields(timeMilli, microsecond, nanosecond);
}
function milliToTimeFields(timeMilli, microsecond = 0, nanosecond = 0) {
    const [hour, milliAfterHour] = divModFloor(timeMilli, 36e5);
    const [minute, milliAfterMinute] = divModFloor(milliAfterHour, 6e4);
    const [second, millisecond] = divModFloor(milliAfterMinute, 1e3);
    return {
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond,
        microsecond: microsecond,
        nanosecond: nanosecond
    };
}
function epochNanoToSecMod(epochNano) {
    const [epochSec, nano] = divModFloorBigInt(epochNano, bigNanoInSec);
    return [
        Number(epochSec),
        Number(nano)
    ];
}
function epochNanoToMilli(epochNano) {
    return Number(divFloorBigInt(epochNano, bigNanoInMilli));
}
function isoDateTimeToEpochNano(isoDateTime) {
    return isoDateToEpochNano(isoDateTime) + BigInt(timeFieldsToNano(isoDateTime));
}
function isoDateTimeToEpochMilli(isoDateTime) {
    return isoDateToEpochMilli(isoDateTime) + timeFieldsToMilli(isoDateTime);
}
function isoDateToEpochNano(isoDate) {
    return BigInt(isoDateToEpochDays(isoDate)) * bigNanoInUtcDay;
}
function isoDateToEpochMilli(isoDate) {
    return 864e5 * isoDateToEpochDays(isoDate);
}
function isoDateToEpochDays(isoDate) {
    return isoPartsToEpochDays(isoDate.year, isoDate.month, isoDate.day);
}
function isoPartsToEpochDays(isoYear, isoMonth = 1, isoDay = 1) {
    const monthIndex = isoMonth - 1;
    return isoYear += Math.floor(monthIndex / 12), isoMonth = modFloor(monthIndex, 12), Date.UTC(isoYear % 400 - 400, isoMonth, 0) / 864e5 + 146097 * (divTrunc(isoYear, 400) + 1) + isoDay;
}
function epochNanoToIsoDateTime(epochNano) {
    const [epochDays, nanoAfterDay] = divModFloorBigInt(epochNano, bigNanoInUtcDay);
    return {
        ...epochDaysToIsoDate(Number(epochDays)),
        ...nanoToTimeFields(Number(nanoAfterDay))
    };
}
function epochMilliToIsoDateTime(epochMilli, microsecond = 0, nanosecond = 0) {
    const [epochDays, milliAfterDay] = divModFloor(epochMilli, 864e5);
    return {
        ...epochDaysToIsoDate(epochDays),
        ...milliToTimeFields(milliAfterDay, microsecond, nanosecond)
    };
}
function epochDaysToIsoDate(epochDays) {
    const legacyDate = new Date(864e5 * modFloor(epochDays, 146097));
    return {
        year: legacyDate.getUTCFullYear() + 400 * Math.floor(epochDays / 146097),
        month: legacyDate.getUTCMonth() + 1,
        day: legacyDate.getUTCDate()
    };
}
function diffEpochMilliDays(epochMilli0, epochMilli1) {
    return Math.trunc((epochMilli1 - epochMilli0) / 864e5);
}
const isoEpochOriginYear = 1970;
const isoEpochFirstLeapYear = 1972;
const isoMonthsInYear = 12;
function computeIsoMonthCodeParts(month) {
    return [
        month,
        0
    ];
}
function computeIsoYearMonthFieldsForMonthDay(monthCodeNumber, isLeapMonth) {
    if (!isLeapMonth) {
        return {
            year: 1972,
            month: monthCodeNumber
        };
    }
}
function computeIsoFieldsFromParts(year, month, day) {
    return {
        year: year,
        month: month,
        day: day
    };
}
function computeIsoDaysInMonth(year, month) {
    switch(month){
        case 2:
            return computeIsoInLeapYear(year) ? 29 : 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
    }
    return 31;
}
function computeIsoDaysInYear(year) {
    return computeIsoInLeapYear(year) ? 366 : 365;
}
function computeIsoInLeapYear(year) {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}
function addIsoMonths(year, month, monthDelta) {
    return year += divTrunc(monthDelta, 12), (month += modTrunc(monthDelta, 12)) < 1 ? (year--, month += 12) : month > 12 && (year++, month -= 12), {
        year: year,
        month: month
    };
}
function diffIsoMonthSlots(year0, month0, year1, month1) {
    return 12 * (year1 - year0) + month1 - month0;
}
function computeIsoDayOfWeek(isoDate) {
    return modFloor(isoPartsToEpochDays(isoDate.year, isoDate.month, isoDate.day) + 4, 7) || 7;
}
function computeIsoDayOfYear(isoDate) {
    return isoPartsToEpochDays(isoDate.year, isoDate.month, isoDate.day) - isoPartsToEpochDays(isoDate.year) + 1;
}
function computeIsoWeekFields(isoDate) {
    let yearOfWeek = isoDate.year;
    let weekOfYear = Math.floor((computeIsoDayOfYear(isoDate) - computeIsoDayOfWeek(isoDate) + 10) / 7);
    let weeksInYear = computeIsoWeeksInYear(yearOfWeek);
    return weekOfYear < 1 ? weekOfYear = weeksInYear = computeIsoWeeksInYear(--yearOfWeek) : weekOfYear > weeksInYear && (weekOfYear = 1, weeksInYear = computeIsoWeeksInYear(++yearOfWeek)), {
        weekOfYear: weekOfYear,
        yearOfWeek: yearOfWeek,
        De: weeksInYear
    };
}
function computeIsoWeeksInYear(year) {
    const y0DayOfWeek = computeIsoDayOfWeek({
        year: year,
        month: 1,
        day: 1
    });
    return 4 === y0DayOfWeek || 3 === y0DayOfWeek && computeIsoInLeapYear(year) ? 53 : 52;
}
function computeGregoryEraFields({ year: year }) {
    return year < 1 ? {
        era: "bce",
        eraYear: 1 - year
    } : {
        era: "ce",
        eraYear: year
    };
}
function validateIsoDateTimeFields(isoDateTime) {
    return validateIsoDateFields(isoDateTime), validateTimeFields(isoDateTime);
}
function validateIsoDateFields(isoInternals) {
    return constrainIsoDateFields(isoInternals, 1), isoInternals;
}
function constrainIsoDateFields(isoDate, overflow) {
    const { year: year } = isoDate;
    const month = clampProp(isoDate, "month", 1, 12, overflow);
    return {
        year: year,
        month: month,
        day: clampProp(isoDate, "day", 1, computeIsoDaysInMonth(year, month), overflow)
    };
}
function computeCalendarDateFields(calendar, isoDate) {
    return calendar ? calendar.de(isoDate) : isoDate;
}
function computeCalendarMonthCodeParts(calendar, year, month) {
    return calendar ? calendar.L(year, month) : computeIsoMonthCodeParts(month);
}
function computeCalendarEraFields(calendar, isoDate) {
    return 0 === calendar ? computeGregoryEraFields(isoDate) : calendar && calendar.h?.(isoDate) || {};
}
function computeCalendarIsoFieldsFromParts(calendar, year, month, day) {
    return calendar ? calendar.fe(year, month, day) : computeIsoFieldsFromParts(year, month, day);
}
function computeCalendarMonthsInYearForYear(calendar, year) {
    return calendar ? calendar.j(year) : 12;
}
function computeCalendarDaysInMonthForYearMonth(calendar, year, month) {
    return calendar ? calendar.o(year, month) : computeIsoDaysInMonth(year, month);
}
function computeCalendarMonthCode(calendar, isoDate) {
    const { year: year, month: month } = computeCalendarDateFields(calendar, isoDate);
    const [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, year, month);
    return formatMonthCode(monthCodeNumber, isLeapMonth);
}
function computeCalendarInLeapYear(calendar, isoDate) {
    const { year: year } = computeCalendarDateFields(calendar, isoDate);
    return calendar ? calendar.q(year) : computeIsoInLeapYear(year);
}
function computeCalendarMonthsInYear(calendar, isoDate) {
    const { year: year } = computeCalendarDateFields(calendar, isoDate);
    return computeCalendarMonthsInYearForYear(calendar, year);
}
function computeCalendarDaysInMonth(calendar, isoDate) {
    const { year: year, month: month } = computeCalendarDateFields(calendar, isoDate);
    return computeCalendarDaysInMonthForYearMonth(calendar, year, month);
}
function computeCalendarDaysInYear(calendar, isoDate) {
    const { year: year } = computeCalendarDateFields(calendar, isoDate);
    return calendar ? calendar.i(year) : computeIsoDaysInYear(year);
}
function computeCalendarDayOfYear(calendar, isoDate) {
    if (!calendar) {
        return computeIsoDayOfYear(isoDate);
    }
    const { year: year } = computeCalendarDateFields(calendar, isoDate);
    const yearStartIsoDate = computeCalendarIsoFieldsFromParts(calendar, year, 1, 1);
    return isoDateToEpochDays(isoDate) - isoDateToEpochDays(yearStartIsoDate) + 1;
}
function computeCalendarWeekOfYear(calendar, isoDate) {
    return calendar === isoCalendarImpl ? computeIsoWeekFields(isoDate).weekOfYear : void 0;
}
function computeCalendarYearOfWeek(calendar, isoDate) {
    return calendar === isoCalendarImpl ? computeIsoWeekFields(isoDate).yearOfWeek : void 0;
}
const durationFieldNamesAsc = /*@__PURE__*/ unitNamesAsc.map((unitName)=>unitName + "s");
const durationGetters = /*@__PURE__*/ createPropGetters(durationFieldNamesAsc);
const durationFieldNamesAlpha = /*@__PURE__*/ sortStrings(durationFieldNamesAsc);
const durationTimeFieldNamesAsc = /*@__PURE__*/ durationFieldNamesAsc.slice(0, 6);
const durationDateFieldNamesAsc = /*@__PURE__*/ durationFieldNamesAsc.slice(6);
const durationCalendarFieldNamesAsc = /*@__PURE__*/ durationDateFieldNamesAsc.slice(1);
const durationFieldDefaults = /*@__PURE__*/ zipPropsConst(durationFieldNamesAsc, 0);
const durationTimeFieldDefaults = /*@__PURE__*/ zipPropsConst(durationTimeFieldNamesAsc, 0);
const clearDurationFields = /*@__PURE__*/ bindArgs(zeroOutProps, durationFieldNamesAsc);
function requirePropDefined(optionName, optionVal) {
    return null == optionVal && throwRangeError(missingField(optionName)), optionVal;
}
const requireString = /*@__PURE__*/ bindArgs(requireType, "string");
function requireType(typeName, arg, entityName = typeName) {
    return typeof arg !== typeName && throwTypeError(invalidEntity(entityName, arg)), arg;
}
function requireNumberIsInteger(num, entityName = "number") {
    return Number.isInteger(num) || throwRangeError(((entityName, num)=>`Non-integer ${entityName}: ${num}`)(entityName, num)), num || 0;
}
function toString(arg) {
    return "symbol" == typeof arg && throwTypeError("Cannot convert Symbol to string"), String(arg);
}
function toPrimitiveWithStringHint(arg) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectLike"])(arg)) {
        return arg;
    }
    const exoticToPrimitive = arg[Symbol.toPrimitive];
    if (null != exoticToPrimitive) {
        "function" != typeof exoticToPrimitive && throwTypeError();
        const primitive = Reflect.apply(exoticToPrimitive, arg, [
            "string"
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectLike"])(primitive) && throwTypeError(), primitive;
    }
    return Date.prototype[Symbol.toPrimitive].call(arg, "string");
}
function toBigInt(bi) {
    return "boolean" == typeof bi ? BigInt(bi ? 1 : 0) : "string" == typeof bi ? BigInt(bi) : ("bigint" != typeof bi && throwTypeError(`Invalid bigint: ${bi}`), bi);
}
function toStrictInteger(arg, entityName) {
    return requireNumberIsInteger((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toFiniteNumber"])(arg, entityName), entityName);
}
const smallestUnitStr = "smallestUnit";
const overflowMap = {
    constrain: 0,
    reject: 1
};
const epochDisambigMap = {
    compatible: 0,
    reject: 1,
    earlier: 2,
    later: 3
};
const offsetDisambigMap = {
    reject: 0,
    use: 1,
    prefer: 2,
    ignore: 3
};
const calendarDisplayMap = {
    auto: 0,
    never: 1,
    critical: 2,
    always: 3
};
const timeZoneDisplayMap = {
    auto: 0,
    never: 1,
    critical: 2
};
const offsetDisplayMap = {
    auto: 0,
    never: 1
};
const roundingModeMap = {
    floor: 0,
    halfFloor: 1,
    ceil: 2,
    halfCeil: 3,
    trunc: 4,
    halfTrunc: 5,
    expand: 6,
    halfExpand: 7,
    halfEven: 8
};
const roundingModeFuncs = [
    Math.floor,
    (num)=>hasHalf(num) ? Math.floor(num) : Math.round(num),
    Math.ceil,
    (num)=>hasHalf(num) ? Math.ceil(num) : Math.round(num),
    Math.trunc,
    (num)=>hasHalf(num) ? Math.trunc(num) || 0 : Math.round(num),
    (num)=>num < 0 ? Math.floor(num) : Math.ceil(num),
    (num)=>Math.sign(num) * Math.round(Math.abs(num)) || 0,
    (num)=>hasHalf(num) ? (num = Math.trunc(num) || 0) + num % 2 : Math.round(num)
];
const directionMap = {
    previous: -1,
    next: 1
};
function coerceRoundingIncInteger(options) {
    const roundingInc = options.roundingIncrement;
    if (void 0 === roundingInc) {
        return 1;
    }
    const integer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toIntegerWithTrunc"])(roundingInc, "roundingIncrement");
    return (integer < 1 || integer > 10 ** 9) && throwRangeError(invalidEntity("roundingIncrement", integer)), integer;
}
function coerceFractionalSecondDigits(options) {
    let subsecDigits = options.fractionalSecondDigits;
    if (void 0 !== subsecDigits) {
        if ("number" != typeof subsecDigits) {
            if ("auto" === toString(subsecDigits)) {
                return;
            }
            throwRangeError(invalidEntity("fractionalSecondDigits", subsecDigits));
        }
        subsecDigits = clampEntity("fractionalSecondDigits", Math.floor(subsecDigits), 0, 9, 1);
    }
    return subsecDigits;
}
function coerceUnitOption(optionName, options, minUnit = 0, ensureDefined) {
    let unitStr = options[optionName];
    if (void 0 === unitStr) {
        return ensureDefined ? minUnit : void 0;
    }
    if (unitStr = toString(unitStr), "auto" === unitStr) {
        return ensureDefined ? minUnit : null;
    }
    let unit = unitNameMap[unitStr];
    return void 0 === unit && (unit = durationFieldNamesAsc.indexOf(unitStr)), unit < 0 && throwRangeError(invalidChoice(optionName, unitStr, unitNameMap)), unit;
}
function coerceChoiceOption(optionName, enumNameMap, options, defaultChoice = 0) {
    const enumArg = options[optionName];
    if (void 0 === enumArg) {
        return defaultChoice;
    }
    const enumStr = toString(enumArg);
    const enumNum = enumNameMap[enumStr];
    return void 0 === enumNum && throwRangeError(invalidChoice(optionName, enumStr, enumNameMap)), enumNum;
}
const coerceSmallestUnit = /*@__PURE__*/ bindArgs(coerceUnitOption, smallestUnitStr);
const coerceLargestUnit = /*@__PURE__*/ bindArgs(coerceUnitOption, "largestUnit");
const coerceTotalUnit = /*@__PURE__*/ bindArgs(coerceUnitOption, "unit");
const coerceOverflow = /*@__PURE__*/ bindArgs(coerceChoiceOption, "overflow", overflowMap);
const coerceEpochDisambig = /*@__PURE__*/ bindArgs(coerceChoiceOption, "disambiguation", epochDisambigMap);
const coerceOffsetDisambig = /*@__PURE__*/ bindArgs(coerceChoiceOption, "offset", offsetDisambigMap);
const coerceCalendarDisplay = /*@__PURE__*/ bindArgs(coerceChoiceOption, "calendarName", calendarDisplayMap);
const coerceTimeZoneDisplay = /*@__PURE__*/ bindArgs(coerceChoiceOption, "timeZoneName", timeZoneDisplayMap);
const coerceOffsetDisplay = /*@__PURE__*/ bindArgs(coerceChoiceOption, "offset", offsetDisplayMap);
const coerceRoundingMode = /*@__PURE__*/ bindArgs(coerceChoiceOption, "roundingMode", roundingModeMap);
const coerceDirection = /*@__PURE__*/ bindArgs(coerceChoiceOption, "direction", directionMap);
function normalizeOptionsOrString(options, optionName) {
    return "string" == typeof options ? ((optionName, optionVal)=>{
        const res = Object.create(null);
        return res[optionName] = optionVal, res;
    })(optionName, options) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireObjectLike"])(options);
}
function validateRoundingInc(roundingInc, smallestUnit, allowManyLargeUnits, solarMode) {
    const upUnitNano = solarMode ? nanoInUtcDay : unitNanoMap[smallestUnit + 1];
    if (upUnitNano) {
        const incNano = roundingInc * unitNanoMap[smallestUnit];
        (upUnitNano % incNano || !solarMode && incNano === upUnitNano) && throwRangeError(invalidEntity("roundingIncrement", roundingInc));
    } else {
        !allowManyLargeUnits && roundingInc > 1 && throwRangeError(invalidEntity("roundingIncrement", roundingInc));
    }
    return roundingInc;
}
function validateUnitRange(optionName, unit, minUnit, maxUnit) {
    return null != unit && clampEntity(optionName, unit, minUnit, maxUnit, 1, unitNamesAsc), unit;
}
function checkLargestSmallestUnit(largestUnit, smallestUnit) {
    smallestUnit > largestUnit && throwRangeError("smallestUnit > largestUnit");
}
function refineDiffOptions(roundingModeInvert, options, defaultLargestUnit, maxUnit = 9, minUnit = 0, defaultRoundingMode = 4) {
    options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeOptions"])(options);
    let largestUnit = coerceLargestUnit(options, minUnit);
    let roundingInc = coerceRoundingIncInteger(options);
    let roundingMode = coerceRoundingMode(options, defaultRoundingMode);
    let smallestUnit = coerceSmallestUnit(options, minUnit, 1);
    return largestUnit = validateUnitRange("largestUnit", largestUnit, minUnit, maxUnit), smallestUnit = validateUnitRange(smallestUnitStr, smallestUnit, minUnit, maxUnit), null == largestUnit ? largestUnit = Math.max(defaultLargestUnit, smallestUnit) : checkLargestSmallestUnit(largestUnit, smallestUnit), roundingInc = validateRoundingInc(roundingInc, smallestUnit, 1), roundingModeInvert && (roundingMode = ((roundingMode)=>roundingMode < 4 ? (roundingMode + 2) % 4 : roundingMode)(roundingMode)), [
        largestUnit,
        smallestUnit,
        roundingInc,
        roundingMode
    ];
}
function refineRoundingOptions(options, maxUnit = 6, solarMode) {
    let roundingInc = coerceRoundingIncInteger(options = normalizeOptionsOrString(options, smallestUnitStr));
    const roundingMode = coerceRoundingMode(options, 7);
    let smallestUnit = coerceSmallestUnit(options);
    return smallestUnit = requirePropDefined(smallestUnitStr, smallestUnit), smallestUnit = validateUnitRange(smallestUnitStr, smallestUnit, 0, maxUnit), roundingInc = validateRoundingInc(roundingInc, smallestUnit, void 0, solarMode), [
        smallestUnit,
        roundingInc,
        roundingMode
    ];
}
function refineUnitDiffOptions(unit, options) {
    return "string" == typeof options || Boolean(options && (options.roundingMode || void 0 !== options.roundingIncrement)) ? ((smallestUnit, options, allowManyLargeUnits, defaultRoundingMode = 7)=>{
        let roundingInc = coerceRoundingIncInteger(options = normalizeOptionsOrString(options, "roundingMode"));
        const roundingMode = coerceRoundingMode(options, defaultRoundingMode);
        return roundingInc = validateRoundingInc(roundingInc, smallestUnit, allowManyLargeUnits), [
            roundingInc,
            roundingMode
        ];
    })(unit, options, 1, 4) : [
        1,
        void 0
    ];
}
function refineUnitRoundOptions(smallestUnit, options, solarMode) {
    let roundingInc = coerceRoundingIncInteger(options = normalizeUnitRoundOptions(options));
    const roundingMode = coerceRoundingMode(options, 7);
    return roundingInc = validateRoundingInc(roundingInc, smallestUnit, void 0, solarMode), [
        roundingInc,
        roundingMode
    ];
}
function normalizeUnitRoundOptions(options) {
    return void 0 === options ? Object.create(null) : normalizeOptionsOrString(options, "roundingMode");
}
function combineDateAndTime(isoDate, time) {
    return pluckProps(calendarDateFieldNamesAsc, isoDate, pluckProps(timeFieldNamesAsc, time));
}
const maxMilli = 864e13;
const epochNanoMax = /*@__PURE__*/ BigInt(1e8) * bigNanoInUtcDay;
const epochNanoMin = /*@__PURE__*/ BigInt(-1e8) * bigNanoInUtcDay;
const plainDateEpochNanoMin = epochNanoMin - bigNanoInUtcDay;
function checkIsoYearMonthInBounds(isoDate) {
    const isoYearMonthIndex = 12 * isoDate.year + isoDate.month;
    return (isoYearMonthIndex < -3261848 || isoYearMonthIndex > 3309129) && throwRangeError(outOfBoundsDate), isoDate;
}
function checkIsoDateInBounds(isoDate, allowPlainDateLowerEdge = 1) {
    const epochNano = isoDateToEpochNano(isoDate);
    return (epochNano < (allowPlainDateLowerEdge ? plainDateEpochNanoMin : epochNanoMin) || epochNano > epochNanoMax) && throwRangeError(outOfBoundsDate), isoDate;
}
function checkIsoDateTimeInBounds(isoDateTime) {
    return checkIsoDateTimeEpochNanoInBounds(isoDateTimeToEpochNano(isoDateTime)), isoDateTime;
}
function checkIsoDateTimeEpochNanoInBounds(epochNano) {
    return (epochNano <= plainDateEpochNanoMin || epochNano >= epochNanoMax + bigNanoInUtcDay) && throwRangeError(outOfBoundsDate), epochNano;
}
function checkEpochNanoInBounds(epochNano) {
    return (epochNano < epochNanoMin || epochNano > epochNanoMax) && throwRangeError(outOfBoundsDate), epochNano;
}
function isoDateTimeAndOffsetToEpochNano(isoDateTime, offsetNano) {
    return checkEpochNanoInBounds(isoDateToEpochNano(isoDateTime) + BigInt(timeFieldsToNano(isoDateTime) - offsetNano));
}
function roundNumberToInc(num, roundingInc, roundingMode) {
    return roundWithMode(num / roundingInc, roundingMode) * roundingInc || 0;
}
function roundWithMode(num, roundingMode) {
    return roundingModeFuncs[roundingMode](num);
}
function totalRelativeUnit(wholeValue, sign, endEpochNano, moveValueToEpochNano) {
    const unitWindow = clampRelativeUnitValue(wholeValue, sign, moveValueToEpochNano, endEpochNano);
    return interpolateRelativeUnitWindow(unitWindow, Number(endEpochNano - unitWindow.N) / Number(unitWindow.te - unitWindow.N));
}
function roundRelativeUnit(wholeValue, sign, endEpochNano, moveValueToEpochNano, roundingInc, roundingMode) {
    return roundRelativeUnitWindow(clampRelativeUnitValue(divTrunc(wholeValue, roundingInc) * roundingInc, roundingInc * sign, moveValueToEpochNano, endEpochNano), endEpochNano, roundingInc, roundingMode);
}
function roundRelativeUnitWindow(unitWindow, endEpochNano, roundingInc, roundingMode) {
    return roundNumberToInc(interpolateRelativeUnitWindow(unitWindow, computeEpochNanoFrac(endEpochNano, unitWindow.N, unitWindow.te)), roundingInc, roundingMode);
}
function clampRelativeUnitValue(startValue, valueDelta, moveValueToEpochNano, epochNanoProgress) {
    let unitWindow = computeRelativeUnitWindow(startValue, valueDelta, moveValueToEpochNano);
    return ((epochNanoProgress, epochNano0, epochNano1, sign)=>sign > 0 ? epochNano0 <= epochNanoProgress && epochNanoProgress <= epochNano1 : epochNano1 <= epochNanoProgress && epochNanoProgress <= epochNano0)(epochNanoProgress, unitWindow.N, unitWindow.te, Math.sign(valueDelta)) || (unitWindow = computeRelativeUnitWindow(startValue + valueDelta, valueDelta, moveValueToEpochNano)), unitWindow;
}
function computeRelativeUnitWindow(startValue, valueDelta, moveValueToEpochNano) {
    const endValue = startValue + valueDelta;
    return {
        ve: startValue,
        pe: endValue,
        N: moveValueToEpochNano(startValue),
        te: moveValueToEpochNano(endValue)
    };
}
function interpolateRelativeUnitWindow(unitWindow, fraction) {
    return unitWindow.ve + fraction * (unitWindow.pe - unitWindow.ve);
}
function computeEpochNanoFrac(epochNanoProgress, epochNano0, epochNano1) {
    const denomBig = epochNano1 - epochNano0;
    const numeratorBig = epochNanoProgress - epochNano0;
    if (!numeratorBig) {
        return 0;
    }
    const absNumerator = numeratorBig < 0n ? -numeratorBig : numeratorBig;
    const absDenom = denomBig < 0n ? -denomBig : denomBig;
    const fracSign = compareBigInts(numeratorBig, 0n) === compareBigInts(denomBig, 0n) ? 1 : -1;
    return compareBigInts(absNumerator, absDenom) <= 0 ? absNumerator === absDenom ? fracSign : fabricateNearHalfFraction(compareBigInts(2n * absNumerator, absDenom), fracSign) : Number(numeratorBig) / Number(denomBig);
}
function createEpochNanoSlots(epochNano) {
    return {
        epochNanoseconds: epochNano
    };
}
function createZonedEpochNanoSlots(epochNano, timeZone, calendar) {
    return {
        calendar: calendar,
        timeZone: timeZone,
        epochNanoseconds: epochNano
    };
}
function createDateTimeSlots(isoDateTime, calendar) {
    return pluckProps(timeFieldNamesAsc, isoDateTime, createDateSlots(isoDateTime, calendar));
}
function createDateSlots(isoDate, calendar) {
    return pluckProps(calendarDateFieldNamesAsc, isoDate, {
        calendar: calendar
    });
}
function createTimeSlots(time) {
    return pluckProps(timeFieldNamesAsc, time);
}
function createDurationSlots(durationFields) {
    return pluckProps(durationFieldNamesAsc, durationFields, {
        sign: computeDurationSign(durationFields)
    });
}
function roundZonedEpochSlotsToUnit(slots, smallestUnit, roundingInc, roundingMode) {
    return createZonedEpochNanoSlots(6 === smallestUnit ? roundZonedEpochToDay(slots, roundingMode) : roundZonedEpochToTime(slots, smallestUnit, roundingInc, roundingMode), slots.timeZone, slots.calendar);
}
function computeZonedHoursInDay(slots) {
    const [epochNano0, epochNano1] = computeZonedDayEpochInterval(slots);
    return divideBigNanoToExactNumber(epochNano1 - epochNano0, nanoInHour);
}
function computeZonedStartOfDay(slots) {
    const { timeZone: timeZone, calendar: calendar } = slots;
    return createZonedEpochNanoSlots(getStartOfDayInstantFor(timeZone, combineDateAndTime(zonedEpochSlotsToIso(slots), timeFieldDefaults)), timeZone, calendar);
}
function alignZonedEpoch(computeAlignment, slots) {
    const { calendar: calendar, timeZone: timeZone } = slots;
    return getStartOfDayInstantFor(timeZone, computeAlignment(calendar, zonedEpochSlotsToIso(slots)));
}
function roundZonedEpochToInterval(computeInterval, slots, roundingMode) {
    const { calendar: calendar, timeZone: timeZone } = slots;
    const isoSlots = zonedEpochSlotsToIso(slots);
    const [isoDateTime0, isoDateTime1] = computeInterval(calendar, isoSlots);
    return roundZonedEpochToBounds(slots.epochNanoseconds, getStartOfDayInstantFor(timeZone, isoDateTime0), getStartOfDayInstantFor(timeZone, isoDateTime1), roundingMode);
}
function roundRelativeDuration(durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, relativeOps, isZoned) {
    if (0 === smallestUnit && 1 === roundingInc) {
        return durationFields;
    }
    const sign = computeDurationSign(durationFields) || 1;
    const nudgeFunc = isUniformUnit(smallestUnit, isZoned) ? isZoned && smallestUnit < 6 && largestUnit >= 6 ? nudgeZonedTimeDuration : nudgeDayTimeDuration : nudgeRelativeDuration;
    let [roundedDurationFields, roundedEpochNano, grewBigUnit] = nudgeFunc(sign, durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, relativeOps);
    return grewBigUnit && 7 !== smallestUnit && (roundedDurationFields = ((durationFields, endEpochNano, largestUnit, smallestUnit, sign, relativeOps)=>{
        for(let currentUnit = smallestUnit + 1; currentUnit <= largestUnit; currentUnit++){
            if (7 === currentUnit && 7 !== largestUnit) {
                continue;
            }
            const baseDurationFields = clearDurationFields(currentUnit, durationFields);
            baseDurationFields[durationFieldNamesAsc[currentUnit]] += sign;
            const thresholdCompare = compareBigInts(endEpochNano, moveRelativeMarkerToEpochNano(relativeOps, baseDurationFields));
            if (thresholdCompare && thresholdCompare !== sign) {
                break;
            }
            durationFields = baseDurationFields;
        }
        return durationFields;
    })(roundedDurationFields, roundedEpochNano, largestUnit, Math.max(6, smallestUnit), sign, relativeOps)), roundedDurationFields;
}
function roundDayTimeDurationByInc(durationFields, nanoInc, roundingMode) {
    const maxUnit = Math.max(Math.min(getMaxDurationUnit(durationFields), 6), 3);
    return nanoToDurationDayTimeFields(roundBigNanoToInc(durationDayTimeToBigNano(durationFields), BigInt(nanoInc), roundingMode), maxUnit);
}
function roundZonedEpochToDay(slots, roundingMode) {
    const [epochNano0, epochNano1] = computeZonedDayEpochInterval(slots);
    return roundZonedEpochToBounds(slots.epochNanoseconds, epochNano0, epochNano1, roundingMode);
}
function roundZonedEpochToTime(slots, smallestUnit, roundingInc, roundingMode) {
    if (0 === smallestUnit && 1 === roundingInc) {
        return slots.epochNanoseconds;
    }
    const isoDateTime = zonedEpochSlotsToIso(slots);
    return getInstantPreferringOffset(slots.timeZone, roundDateTimeToUnit(isoDateTime, smallestUnit, roundingInc, roundingMode), isoDateTime.offsetNanoseconds);
}
function roundDateTimeToUnit(isoDateTime, smallestUnit, roundingInc, roundingMode) {
    return roundDateTimeToInc(isoDateTime, computeNanoInc(smallestUnit, roundingInc), roundingMode, unitNanoMap[smallestUnit + 1]);
}
function roundTimeToUnit(timeFields, smallestUnit, roundingInc, roundingMode) {
    return roundTimeToInc(timeFields, computeNanoInc(smallestUnit, roundingInc), roundingMode, unitNanoMap[smallestUnit + 1]);
}
function roundDateTimeToInc(isoDateTime, nanoInc, roundingMode, spanNano) {
    const [roundedTimeFields, dayDelta] = roundTimeToInc(isoDateTime, nanoInc, roundingMode, spanNano);
    const roundedIsoDateTime = combineDateAndTime(moveDateByDays(isoDateTime, dayDelta), roundedTimeFields);
    return checkIsoDateTimeInBounds(roundedIsoDateTime), roundedIsoDateTime;
}
function roundTimeToInc(timeFields, nanoInc, roundingMode, spanNano = nanoInUtcDay) {
    const timeNano = timeFieldsToNano(timeFields);
    const remainderNano = timeNano % spanNano;
    return nanoToTimeAndDay(timeNano - remainderNano + roundNumberToInc(remainderNano, nanoInc, roundingMode));
}
function nudgeRelativeDuration(sign, durationFields, endEpochNano, _largestUnit, smallestUnit, roundingInc, roundingMode, relativeOps) {
    const smallestUnitFieldName = durationFieldNamesAsc[smallestUnit];
    const baseDurationFields = clearDurationFields(smallestUnit, durationFields);
    7 === smallestUnit && (durationFields = {
        ...durationFields,
        weeks: durationFields.weeks + Math.trunc(durationFields.days / 7)
    });
    const truncedVal = divTrunc(durationFields[smallestUnitFieldName], roundingInc) * roundingInc;
    const nudgeWindow = clampRelativeUnitValue(truncedVal, roundingInc * sign, (value)=>(baseDurationFields[smallestUnitFieldName] = value, moveRelativeMarkerToEpochNano(relativeOps, baseDurationFields)), endEpochNano);
    const roundedVal = roundRelativeUnitWindow(nudgeWindow, endEpochNano, roundingInc, roundingMode);
    return baseDurationFields[smallestUnitFieldName] = roundedVal, [
        baseDurationFields,
        roundedVal === nudgeWindow.pe ? nudgeWindow.te : nudgeWindow.N,
        roundedVal !== truncedVal
    ];
}
function nudgeZonedTimeDuration(sign, durationFields, _endEpochNano, _largestUnit, smallestUnit, roundingInc, roundingMode, relativeOps) {
    const timeNano = Number(durationTimeToBigNano(durationFields));
    const nanoInc = computeNanoInc(smallestUnit, roundingInc);
    let roundedTimeNano = roundNumberToInc(timeNano, nanoInc, roundingMode);
    const dateDurationFields = {
        ...durationFields,
        ...durationTimeFieldDefaults
    };
    const dayEpochNano0 = relativeOps.X(dateDurationFields);
    const dayEpochNano1 = relativeOps.X({
        ...dateDurationFields,
        days: dateDurationFields.days + sign
    });
    const daySpanNano = Number(dayEpochNano1 - dayEpochNano0);
    Math.sign(daySpanNano) !== sign && throwRangeError("Out-of-bounds TimeZone gap");
    const beyondDayNano = roundedTimeNano - daySpanNano;
    let dayDelta = 0;
    let nudgedEpochNano;
    beyondDayNano && Math.sign(beyondDayNano) !== sign ? nudgedEpochNano = dayEpochNano0 + BigInt(roundedTimeNano) : (dayDelta += sign, roundedTimeNano = roundNumberToInc(beyondDayNano, nanoInc, roundingMode), nudgedEpochNano = dayEpochNano1 + BigInt(roundedTimeNano));
    const durationTimeFields = nanoToDurationTimeFields(roundedTimeNano);
    return [
        {
            ...durationFields,
            ...durationTimeFields,
            days: durationFields.days + dayDelta
        },
        nudgedEpochNano,
        Boolean(dayDelta)
    ];
}
function nudgeDayTimeDuration(sign, durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode) {
    const bigNano = durationDayTimeToBigNano(durationFields);
    const roundedBigNano = roundBigNanoToInc(bigNano, computeBigNanoInc(smallestUnit, roundingInc), roundingMode);
    const nanoDiff = roundedBigNano - bigNano;
    const expandedBigUnit = Math.sign(Number(roundedBigNano / bigNanoInUtcDay) - Number(bigNano / bigNanoInUtcDay)) === sign;
    const roundedDayTimeFields = nanoToDurationDayTimeFields(roundedBigNano, Math.min(largestUnit, 6));
    return [
        {
            ...durationFields,
            ...roundedDayTimeFields
        },
        endEpochNano + nanoDiff,
        expandedBigUnit
    ];
}
function computeZonedDayEpochInterval(slots) {
    const { timeZone: timeZone } = slots;
    const isoDateTime0 = combineDateAndTime(zonedEpochSlotsToIso(slots), timeFieldDefaults);
    const isoDateTime1 = combineDateAndTime(moveDateByDays(isoDateTime0, 1), timeFieldDefaults);
    return [
        getStartOfDayInstantFor(timeZone, isoDateTime0),
        getStartOfDayInstantFor(timeZone, isoDateTime1)
    ];
}
function roundZonedEpochToBounds(epochNano, epochNano0, epochNano1, roundingMode) {
    return roundWithMode(computeEpochNanoFrac(epochNano < epochNano1 ? epochNano : epochNano1 - 1n, epochNano0, epochNano1), roundingMode) ? epochNano1 : epochNano0;
}
function roundToMinute(offsetNano) {
    return roundNumberToInc(offsetNano, nanoInMinute, 7);
}
function roundBigNanoToInc(bigNano, bigNanoInc, roundingMode) {
    return roundBigNanoToIncWithTail(bigNano, bigNanoInc, roundingMode, bigNano / bigNanoInc % 2n);
}
function roundBigNanoToDayOriginInc(bigNano, bigNanoInc, roundingMode) {
    const [day, timeNano] = divModFloorBigInt(bigNano, bigNanoInUtcDay);
    const dayOriginNano = day * bigNanoInUtcDay;
    return dayOriginNano + roundBigNanoToIncWithTail(timeNano, bigNanoInc, roundingMode, dayOriginNano / bigNanoInc + timeNano / bigNanoInc & 1n);
}
function roundBigNanoToIncWithTail(bigNano, bigNanoInc, roundingMode, quotientTail) {
    const quotient = bigNano / bigNanoInc;
    const remainder = bigNano % bigNanoInc;
    let fraction = 0;
    remainder && (fraction = fabricateNearHalfFraction(compareBigInts(2n * (remainder < 0n ? -remainder : remainder), bigNanoInc), Math.sign(Number(remainder))));
    const roundedTail = roundWithMode(Number(quotientTail) + fraction, roundingMode);
    return (quotient - quotientTail + BigInt(roundedTail)) * bigNanoInc;
}
function computeNanoInc(smallestUnit, roundingInc) {
    return unitNanoMap[smallestUnit] * roundingInc;
}
function computeBigNanoInc(smallestUnit, roundingInc) {
    return BigInt(unitNanoMap[smallestUnit]) * BigInt(roundingInc);
}
const zonedEpochSlotsToIso = /*@__PURE__*/ memoize(_zonedEpochSlotsToIso, WeakMap);
function _zonedEpochSlotsToIso(slots) {
    const { epochNanoseconds: epochNanoseconds, timeZone: timeZone } = slots;
    const offsetNanoseconds = timeZone.B(epochNanoseconds);
    return {
        ...epochNanoToIsoDateTime(epochNanoseconds + BigInt(offsetNanoseconds)),
        offsetNanoseconds: offsetNanoseconds
    };
}
function getInstantPreferringOffset(timeZone, isoDateTime, offsetNano) {
    return getMatchingInstantFor(timeZone, isoDateTime, offsetNano, 2, 0);
}
function getMatchingInstantFor(timeZone, isoDateTime, offsetNano, offsetDisambig = 0, epochDisambig = 0, epochFuzzy, hasZ) {
    if (hasZ || void 0 !== offsetNano && 1 === offsetDisambig) {
        return isoDateTimeAndOffsetToEpochNano(isoDateTime, offsetNano || 0);
    }
    const possibleEpochNanos = timeZone.O(isoDateTime);
    if (void 0 !== offsetNano && 3 !== offsetDisambig) {
        checkIsoDateInBounds(isoDateTime, 0);
        const matchingEpochNano = ((possibleEpochNanos, isoDateTime, offsetNano, fuzzy)=>{
            const zonedEpochNano = isoDateTimeToEpochNano(isoDateTime);
            fuzzy && (offsetNano = roundToMinute(offsetNano));
            for (const possibleEpochNano of possibleEpochNanos){
                let possibleOffsetNano = Number(zonedEpochNano - possibleEpochNano);
                if (fuzzy && (possibleOffsetNano = roundToMinute(possibleOffsetNano)), possibleOffsetNano === offsetNano) {
                    return possibleEpochNano;
                }
            }
        })(possibleEpochNanos, isoDateTime, offsetNano, epochFuzzy);
        if (void 0 !== matchingEpochNano) {
            return matchingEpochNano;
        }
        0 === offsetDisambig && throwRangeError("Invalid TimeZone offset");
    }
    return getSingleInstantFor(timeZone, isoDateTime, epochDisambig, possibleEpochNanos);
}
function getSingleInstantFor(timeZone, isoDateTime, disambig = 0, possibleEpochNanos = timeZone.O(isoDateTime)) {
    if (1 === possibleEpochNanos.length) {
        return possibleEpochNanos[0];
    }
    if (1 === disambig && throwRangeError("Ambiguous offset"), possibleEpochNanos.length) {
        return possibleEpochNanos[3 === disambig ? 1 : 0];
    }
    const zonedEpochNano = isoDateTimeToEpochNano(isoDateTime);
    const gapNano = ((timeZone, zonedEpochNano)=>{
        const startOffsetNano = timeZone.B(zonedEpochNano - bigNanoInUtcDay);
        return ((gapNano)=>(gapNano > nanoInUtcDay && throwRangeError("Out-of-bounds TimeZone gap"), gapNano))(timeZone.B(zonedEpochNano + bigNanoInUtcDay) - startOffsetNano);
    })(timeZone, zonedEpochNano);
    const shiftedIsoDateTime = epochNanoToIsoDateTime(zonedEpochNano + BigInt(gapNano * (2 === disambig ? -1 : 1)));
    return (possibleEpochNanos = timeZone.O(shiftedIsoDateTime))[2 === disambig ? 0 : possibleEpochNanos.length - 1];
}
function getStartOfDayInstantFor(timeZone, isoDateTime) {
    const possibleEpochNanos = timeZone.O(isoDateTime);
    if (possibleEpochNanos.length) {
        return possibleEpochNanos[0];
    }
    const zonedEpochNanoDayBefore = isoDateTimeToEpochNano(isoDateTime) - bigNanoInUtcDay;
    return timeZone.C(zonedEpochNanoDayBefore, 1);
}
function moveYearMonth(calendar, isoDate, durationSlots, overflow = 0) {
    computeDurationSign(durationSlots) && clampEntity("unit", getMaxDurationUnit(durationSlots), 8, 9, 1, durationFieldNamesAsc);
    const first = checkIsoDateInBounds(moveToStartOfMonth(calendar, isoDate));
    return moveToStartOfMonth(calendar, moveDate(calendar, first, durationSlots, overflow));
}
function moveYearMonthByUnits(calendar, isoDate, years, months, overflow) {
    const first = checkIsoDateInBounds(moveToStartOfMonth(calendar, isoDate));
    return moveToStartOfMonth(calendar, years || months ? checkIsoDateInBounds(moveDateByCalendarUnits(calendar, first, years, months, overflow)) : first);
}
function moveZonedEpochSlots(slots, durationFields, overflow = 0) {
    const { calendar: calendar, epochNanoseconds: epochNano, timeZone: timeZone } = slots;
    const timeOnlyNano = durationTimeToBigNano(durationFields);
    let movedEpochNano = epochNano;
    if (durationHasDateParts(durationFields)) {
        const isoDateTime = zonedEpochSlotsToIso(slots);
        movedEpochNano = getSingleInstantFor(timeZone, combineDateAndTime(moveDate(calendar, isoDateTime, {
            ...durationFields,
            ...durationTimeFieldDefaults
        }, overflow), isoDateTime)) + timeOnlyNano;
    } else {
        movedEpochNano += timeOnlyNano;
    }
    return {
        ...slots,
        epochNanoseconds: checkEpochNanoInBounds(movedEpochNano)
    };
}
function moveDateTime(calendar, isoDateTime, durationFields, overflow = 0) {
    const [movedTimeFields, dayDelta] = moveTime(isoDateTime, durationFields);
    return checkIsoDateTimeInBounds(combineDateAndTime(moveDate(calendar, isoDateTime, {
        ...durationFields,
        ...durationTimeFieldDefaults,
        days: durationFields.days + dayDelta
    }, overflow), movedTimeFields));
}
function moveDateTimeByNano(fields, delta) {
    const [time, days] = moveTimeByNano(fields, delta);
    return checkIsoDateTimeInBounds(combineDateAndTime(moveDateByDays(fields, days), time));
}
function moveTime(timeFields, durationFields) {
    return moveTimeByNano(timeFields, durationTimeToBigNano(durationFields));
}
function moveEpochNano(epochNano, durationFields) {
    return moveEpochNanoByNano(epochNano, (clampEntity("unit", getMaxDurationUnit(fields = durationFields), 0, 5, 1, durationFieldNamesAsc), durationTimeToBigNano(fields)));
    //TURBOPACK unreachable
    ;
    var fields;
}
function moveDate(calendar, isoDate, durationFields, overflow = 0) {
    let { years: years, months: months, weeks: weeks, days: days } = durationFields;
    let movedIsoDate;
    if (days += Number(durationTimeToBigNano(durationFields) / bigNanoInUtcDay), years || months) {
        movedIsoDate = moveDateByCalendarUnits(calendar, isoDate, years, months, overflow);
    } else {
        if (!weeks && !days) {
            return isoDate;
        }
        movedIsoDate = isoDate;
    }
    return (weeks || days) && (movedIsoDate = moveDateByDays(movedIsoDate, 7 * weeks + days)), checkIsoDateInBounds(movedIsoDate);
}
function moveToStartOfMonth(calendar, isoDate) {
    return moveDateByDays(isoDate, 1 - computeCalendarDateFields(calendar, isoDate).day);
}
function moveDateByCalendarUnits(calendar, isoDate, years, months, overflow) {
    const dateParts = computeCalendarDateFields(calendar, isoDate);
    let { year: year, month: month, day: day } = dateParts;
    if (years) {
        const [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, year, month);
        year += years, month = resolveMonthInMovedYear(calendar, monthCodeNumber, isLeapMonth, calendar ? calendar.p(year) : void 0, overflow), month = clampEntity("month", month, 1, computeCalendarMonthsInYearForYear(calendar, year), overflow);
    }
    if (months) {
        const yearMonthParts = addCalendarMonths(calendar, year, month, months);
        ({ year: year, month: month } = yearMonthParts);
    }
    return day = clampEntity("day", day, 1, computeCalendarDaysInMonthForYearMonth(calendar, year, month), overflow), computeCalendarIsoFieldsFromParts(calendar, year, month, day);
}
function addCalendarMonths(calendar, year, month, monthDelta) {
    return calendar ? calendar.ae(year, month, monthDelta) : addIsoMonths(year, month, monthDelta);
}
function resolveMonthInMovedYear(calendar, monthCodeNumber, isLeapMonth, targetLeapMonth, overflow) {
    if (isLeapMonth) {
        const leapMonthMeta = calendar ? calendar.l : void 0;
        if (void 0 !== targetLeapMonth && (leapMonthMeta < 0 || targetLeapMonth === monthCodeNumber + 1)) {
            return targetLeapMonth;
        }
        if (1 === overflow && throwRangeError(invalidLeapMonth), leapMonthMeta < 0) {
            return -leapMonthMeta;
        }
    }
    return monthCodeNumberToMonth(monthCodeNumber, 0, targetLeapMonth);
}
function moveTimeByNano(timeFields, durationBigNano) {
    const durDays = Number(durationBigNano / bigNanoInUtcDay);
    const durTimeNano = Number(durationBigNano % bigNanoInUtcDay);
    const [newTimeFields, overflowDays] = nanoToTimeAndDay(timeFieldsToNano(timeFields) + durTimeNano);
    return [
        newTimeFields,
        durDays + overflowDays
    ];
}
function moveEpochNanoByNano(epochNano, deltaNano) {
    return checkEpochNanoInBounds(epochNano + deltaNano);
}
function moveDateByDays(isoDate, days) {
    return days ? epochDaysToIsoDate(isoDateToEpochDays(isoDate) + days) : isoDate;
}
function getCommonCalendar(a, b) {
    return getCalendarSlotId(a) !== getCalendarSlotId(b) && throwRangeError("Mismatching Calendars"), a;
}
function getCommonTimeZone(a, b) {
    return a.m !== b.m && throwRangeError("Mismatching TimeZones"), a;
}
function getZonedTimeZoneId(slots) {
    return slots.timeZone.id;
}
function diffZonedDateTimesRounded(calendar, startZoned, endZoned, largestUnit, smallestUnit, roundingInc, roundingMode) {
    return largestUnit < 6 ? diffEpochNanosRounded(startZoned.epochNanoseconds, endZoned.epochNanoseconds, largestUnit, smallestUnit, roundingInc, roundingMode) : ((calendar, startZoned, endZoned, largestUnit, smallestUnit, roundingInc, roundingMode)=>{
        const timeZone = getCommonTimeZone(startZoned.timeZone, endZoned.timeZone);
        const endEpochNano = endZoned.epochNanoseconds;
        if (endEpochNano === startZoned.epochNanoseconds) {
            return durationFieldDefaults;
        }
        let durationFields;
        return durationFields = diffZonedEpochsExact(timeZone, calendar, startZoned, endZoned, largestUnit), durationFields = roundRelativeDuration(durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, createZonedRelativeOps(calendar, timeZone, startZoned), 1), durationFields;
    })(calendar, startZoned, endZoned, largestUnit, smallestUnit, roundingInc, roundingMode);
}
function diffDateTimesRounded(calendar, startIsoDateTime, endIsoDateTime, largestUnit, smallestUnit, roundingInc, roundingMode) {
    return largestUnit <= 6 ? diffEpochNanosRounded(isoDateTimeToEpochNano(startIsoDateTime), isoDateTimeToEpochNano(endIsoDateTime), largestUnit, smallestUnit, roundingInc, roundingMode) : ((calendar, startIsoDateTime, endIsoDateTime, largestUnit, smallestUnit, roundingInc, roundingMode)=>{
        const endEpochNano = isoDateTimeToEpochNano(endIsoDateTime);
        const sign = compareBigInts(endEpochNano, isoDateTimeToEpochNano(startIsoDateTime));
        if (!sign) {
            return durationFieldDefaults;
        }
        let durationFields;
        return durationFields = diffDateTimesBig(calendar, startIsoDateTime, endIsoDateTime, sign, largestUnit), durationFields = roundRelativeDuration(durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, ((calendar, origin)=>({
                ne: isoDateTimeToEpochNano(origin),
                X: (duration)=>isoDateTimeToEpochNano(combineDateAndTime(moveDate(calendar, origin, duration), origin))
            }))(calendar, startIsoDateTime)), durationFields;
    })(calendar, startIsoDateTime, endIsoDateTime, largestUnit, smallestUnit, roundingInc, roundingMode);
}
function diffYearMonthsRounded(calendar, startIsoDate, endIsoDate, largestUnit, smallestUnit, roundingInc, roundingMode) {
    const firstOfMonth0 = moveToStartOfMonth(calendar, startIsoDate);
    const firstOfMonth1 = moveToStartOfMonth(calendar, endIsoDate);
    return compareIsoDates(firstOfMonth0, firstOfMonth1) ? diffDateCalendarUnitsRounded(calendar, checkIsoDateInBounds(firstOfMonth0), checkIsoDateInBounds(firstOfMonth1), largestUnit, smallestUnit, roundingInc, roundingMode, 8) : durationFieldDefaults;
}
function diffDatesRounded(calendar, startIsoDate, endIsoDate, largestUnit, smallestUnit, roundingInc, roundingMode, smallestPrecision = 6) {
    return 6 === largestUnit ? diffEpochNanosRounded(isoDateToEpochNano(startIsoDate), isoDateToEpochNano(endIsoDate), largestUnit, smallestUnit, roundingInc, roundingMode) : diffDateCalendarUnitsRounded(calendar, startIsoDate, endIsoDate, largestUnit, smallestUnit, roundingInc, roundingMode, smallestPrecision);
}
function diffTimesRounded(plainTimeSlots0, plainTimeSlots1, largestUnit, smallestUnit, roundingInc, roundingMode) {
    const timeDiffNano = roundNumberToInc(timeFieldsToNano(plainTimeSlots1) - timeFieldsToNano(plainTimeSlots0), computeNanoInc(smallestUnit, roundingInc), roundingMode);
    return {
        ...durationFieldDefaults,
        ...nanoToDurationTimeFields(timeDiffNano, largestUnit)
    };
}
function diffDateCalendarUnitsRounded(calendar, startIsoDate, endIsoDate, largestUnit, smallestUnit, roundingInc, roundingMode, smallestPrecision = 6) {
    const endEpochNano = isoDateToEpochNano(endIsoDate);
    if (!compareIsoDates(startIsoDate, endIsoDate)) {
        return durationFieldDefaults;
    }
    let durationFields;
    return durationFields = diffCalendarDates(calendar, startIsoDate, endIsoDate, largestUnit), smallestUnit === smallestPrecision && 1 === roundingInc || (durationFields = roundRelativeDuration(durationFields, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, createDateRelativeOps(calendar, startIsoDate))), durationFields;
}
function diffEpochNanosRounded(startEpochNano, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode) {
    return {
        ...durationFieldDefaults,
        ...nanoToDurationDayTimeFields(roundBigNanoToInc(endEpochNano - startEpochNano, computeBigNanoInc(smallestUnit, roundingInc), roundingMode), largestUnit)
    };
}
function diffZonedEpochsExact(timeZone, calendar, startZoned, endZoned, largestUnit) {
    return largestUnit < 6 ? {
        ...durationFieldDefaults,
        ...nanoToDurationDayTimeFields(endZoned.epochNanoseconds - startZoned.epochNanoseconds, largestUnit)
    } : ((timeZone, startZoned, endZoned)=>{
        const sign = compareBigInts(endZoned.epochNanoseconds, startZoned.epochNanoseconds);
        if (!sign) {
            return durationFieldDefaults;
        }
        if (!compareIsoDates(zonedEpochSlotsToIso(startZoned), zonedEpochSlotsToIso(endZoned))) {
            return {
                ...durationFieldDefaults,
                ...nanoToDurationDayTimeFields(endZoned.epochNanoseconds - startZoned.epochNanoseconds, 5)
            };
        }
        const [startIsoDateTime, endIsoDate, remainderNano] = prepareZonedEpochDiff(timeZone, startZoned, endZoned, sign);
        return {
            ...(start = startIsoDateTime, end = endIsoDate, diffCalendarDates(calendar, start, end, largestUnit)),
            ...nanoToDurationTimeFields(remainderNano)
        };
        //TURBOPACK unreachable
        ;
        var start, end;
    })(timeZone, startZoned, endZoned);
}
function diffDateTimesExact(calendar, startIsoDateTime, endIsoDateTime, largestUnit) {
    const startEpochNano = isoDateTimeToEpochNano(startIsoDateTime);
    const endEpochNano = isoDateTimeToEpochNano(endIsoDateTime);
    const sign = compareBigInts(endEpochNano, startEpochNano);
    return sign ? largestUnit <= 6 ? {
        ...durationFieldDefaults,
        ...nanoToDurationDayTimeFields(endEpochNano - startEpochNano, largestUnit)
    } : diffDateTimesBig(calendar, startIsoDateTime, endIsoDateTime, sign, largestUnit) : durationFieldDefaults;
}
function diffDateTimesBig(calendar, startIsoDateTime, endIsoDateTime, sign, largestUnit) {
    let diffEndDate = endIsoDateTime;
    let timeNano = timeFieldsToNano(endIsoDateTime) - timeFieldsToNano(startIsoDateTime);
    return Math.sign(timeNano) === -sign && (diffEndDate = moveDateByDays(endIsoDateTime, -sign), timeNano += nanoInUtcDay * sign), {
        ...diffCalendarDates(calendar, startIsoDateTime, diffEndDate, largestUnit),
        ...nanoToDurationTimeFields(timeNano)
    };
}
function prepareZonedEpochDiff(timeZone, startZoned, endZoned, sign) {
    const startIsoDate = zonedEpochSlotsToIso(startZoned);
    const endIsoDate = zonedEpochSlotsToIso(endZoned);
    const endEpochNano = endZoned.epochNanoseconds;
    let dayCorrection = 0;
    const timeDiffNano = timeFieldsToNano(endIsoDate) - timeFieldsToNano(startIsoDate);
    Math.sign(timeDiffNano) === -sign && dayCorrection++;
    const maxDayCorrection = sign > 0 ? 2 : 1;
    for(;; dayCorrection++){
        const midIsoDate = moveDateByDays(endIsoDate, dayCorrection * -sign);
        const midEpochNano = getSingleInstantFor(timeZone, combineDateAndTime(midIsoDate, startIsoDate));
        if (dayCorrection === maxDayCorrection || compareBigInts(endEpochNano, midEpochNano) !== -sign) {
            return [
                startIsoDate,
                midIsoDate,
                Number(endEpochNano - midEpochNano)
            ];
        }
    }
}
function diffCalendarDates(calendar, startIsoDate, endIsoDate, largestUnit) {
    if (largestUnit <= 7) {
        return ((asWeeks, start, end)=>{
            const days = countIsoDays(start, end);
            return asWeeks ? {
                ...durationFieldDefaults,
                weeks: divTrunc(days, 7),
                days: modTrunc(days, 7)
            } : {
                ...durationFieldDefaults,
                days: days
            };
        })(7 === largestUnit, startIsoDate, endIsoDate);
    }
    const yearMonthDayStart = computeCalendarDateFields(calendar, startIsoDate);
    const yearMonthDayEnd = computeCalendarDateFields(calendar, endIsoDate);
    if (8 === largestUnit) {
        const { year: year0, month: month0, day: day0 } = yearMonthDayStart;
        const { year: year1, month: month1, day: day1 } = yearMonthDayEnd;
        const sign = Math.sign(compareNumbers(year1, year0) || compareNumbers(month1, month0) || countIsoDays(startIsoDate, endIsoDate));
        let months = 0;
        let days = 0;
        if (sign) {
            months = calendar ? calendar.ee(year0, month0, year1, month1) : diffIsoMonthSlots(year0, month0, year1, month1);
            let anchorIsoDate = moveDateByCalendarUnits(calendar, startIsoDate, 0, months, 0);
            sign * compareNumbers(day0, day1) > 0 && (months -= sign, anchorIsoDate = moveDateByCalendarUnits(calendar, startIsoDate, 0, months, 0)), days = countIsoDays(anchorIsoDate, endIsoDate);
        }
        return {
            ...durationFieldDefaults,
            months: months,
            days: days
        };
    }
    const { year: year0, month: month0, day: day0 } = yearMonthDayStart;
    let { year: year1, month: month1, day: day1 } = yearMonthDayEnd;
    let yearDiff = year1 - year0;
    let monthDiff = month1 - month0;
    let dayDiff = day1 - day0;
    if (yearDiff || monthDiff) {
        const sign = Math.sign(yearDiff || monthDiff);
        let daysInMonth1 = computeCalendarDaysInMonthForYearMonth(calendar, year1, month1);
        let dayCorrect = 0;
        if (Math.sign(day1 - day0) === -sign) {
            const origDaysInMonth1 = daysInMonth1;
            const yearMonthParts = addCalendarMonths(calendar, year1, month1, -sign);
            ({ year: year1, month: month1 } = yearMonthParts), yearDiff = year1 - year0, monthDiff = month1 - month0, daysInMonth1 = computeCalendarDaysInMonthForYearMonth(calendar, year1, month1), dayCorrect = sign < 0 ? -origDaysInMonth1 : daysInMonth1;
        }
        if (dayDiff = day1 - Math.min(day0, daysInMonth1) + dayCorrect, yearDiff) {
            const [monthCodeNumber0, isLeapMonth0] = computeCalendarMonthCodeParts(calendar, year0, month0);
            const [monthCodeNumber1, isLeapMonth1] = computeCalendarMonthCodeParts(calendar, year1, month1);
            const leapMonthMeta = calendar ? calendar.l : void 0;
            if (monthDiff = void 0 !== leapMonthMeta && isLeapMonth0 && !isLeapMonth1 && (leapMonthMeta < 0 ? sign > 0 && monthCodeNumber1 === -leapMonthMeta : sign < 0 && monthCodeNumber1 === monthCodeNumber0) ? 0 : monthCodeNumber1 - monthCodeNumber0 || Number(isLeapMonth1) - Number(isLeapMonth0), Math.sign(monthDiff) === -sign) {
                const monthCorrect = sign < 0 && -computeCalendarMonthsInYearForYear(calendar, year1);
                year1 -= sign, yearDiff = year1 - year0, monthDiff = month1 - resolveMonthInMovedYear(calendar, monthCodeNumber0, isLeapMonth0, calendar ? calendar.p(year1) : void 0, 0) + (monthCorrect || computeCalendarMonthsInYearForYear(calendar, year1));
            } else if (calendar) {
                const month0Projected = resolveMonthInMovedYear(calendar, monthCodeNumber0, isLeapMonth0, calendar.p(year1), 0);
                monthDiff = calendar.ee(year1, month0Projected, year1, month1);
            }
        }
    }
    return {
        ...durationFieldDefaults,
        years: yearDiff,
        months: monthDiff,
        days: dayDiff
    };
}
function compareIsoDates(isoDate0, isoDate1) {
    return compareNumbers(isoDate0.year, isoDate1.year) || compareNumbers(isoDate0.month, isoDate1.month) || compareNumbers(isoDate0.day, isoDate1.day);
}
function countIsoDays(startIsoDate, endIsoDate) {
    return isoDateToEpochDays(endIsoDate) - isoDateToEpochDays(startIsoDate);
}
function spanRelativeDuration(relativeToSlots, durationFields, largestUnit) {
    return isZonedEpochSlots(relativeToSlots) ? ((relativeToSlots, durationFields, largestUnit)=>{
        const { calendar: calendar, timeZone: timeZone } = relativeToSlots;
        const endSlots = moveZonedEpochSlots(relativeToSlots, durationFields);
        return [
            diffZonedEpochsExact(timeZone, calendar, relativeToSlots, endSlots, largestUnit),
            endSlots.epochNanoseconds,
            createZonedRelativeOps(calendar, timeZone, relativeToSlots)
        ];
    })(relativeToSlots, durationFields, largestUnit) : ((relativeToSlots, durationFields, largestUnit)=>{
        const { calendar: calendar } = relativeToSlots;
        const origin = checkIsoDateTimeInBounds(combineDateAndTime(relativeToSlots, timeFieldDefaults));
        const end = moveDateTime(calendar, origin, durationFields);
        return [
            diffDateTimesExact(calendar, origin, end, largestUnit),
            isoDateTimeToEpochNano(end),
            createDateRelativeOps(calendar, relativeToSlots)
        ];
    })(relativeToSlots, durationFields, largestUnit);
}
function moveRelativeEndpointToEpochNano(relativeToSlots, durationFields) {
    return isZonedEpochSlots(relativeToSlots) ? moveZonedEpochSlots(relativeToSlots, durationFields).epochNanoseconds : isoDateTimeToEpochNano(moveDateTime(relativeToSlots.calendar, combineDateAndTime(relativeToSlots, timeFieldDefaults), durationFields));
}
function moveRelativeMarkerToEpochNano(relativeOps, dateDuration) {
    return durationHasDateParts(dateDuration) ? relativeOps.X(dateDuration) : relativeOps.ne;
}
function createZonedRelativeOps(calendar, timeZone, slots) {
    const origin = zonedEpochSlotsToIso(slots);
    return {
        ne: slots.epochNanoseconds,
        X: (duration)=>getSingleInstantFor(timeZone, combineDateAndTime(moveDate(calendar, origin, duration), origin))
    };
}
function createDateRelativeOps(calendar, origin) {
    return {
        ne: isoDateToEpochNano(origin),
        X: (duration)=>isoDateToEpochNano(moveDate(calendar, origin, duration))
    };
}
function isZonedEpochSlots(slots) {
    return "timeZone" in slots;
}
function isUniformUnit(unit, isZoned) {
    return unit <= 6 - (isZoned ? 1 : 0);
}
function nanoToGivenFields(nano, largestUnit, fieldNames) {
    const fields = {};
    for(let unit = largestUnit; unit >= 0; unit--){
        const divisor = unitNanoMap[unit];
        fields[fieldNames[unit]] = divTrunc(nano, divisor), nano = modTrunc(nano, divisor);
    }
    return fields;
}
const maxDurationSeconds = 2 ** 53;
function addDurationsWithoutRelativeTo(doSubtract, slots, otherSlots) {
    const maxUnit = Math.max(getMaxDurationUnit(slots), getMaxDurationUnit(otherSlots));
    return clampEntity("unit", maxUnit, 0, 6, 1, durationFieldNamesAsc), ((doSubtract, slots, otherSlots, maxUnit)=>createDurationSlots(validateDurationFields(((a, b, largestUnit, doSubtract)=>{
            const combined = durationDayTimeToBigNano(a) + durationDayTimeToBigNano(b) * BigInt(doSubtract ? -1 : 1);
            return Number.isFinite(Number(combined / bigNanoInUtcDay)) || throwRangeError(outOfBoundsDate), {
                ...durationFieldDefaults,
                ...nanoToDurationDayTimeFields(combined, largestUnit)
            };
        })(slots, otherSlots, maxUnit, doSubtract))))(doSubtract, slots, otherSlots, maxUnit);
}
function roundDuration(refineRelativeTo, slots, options) {
    const durationLargestUnit = getMaxDurationUnit(slots);
    const [largestUnit, smallestUnit, roundingInc, roundingMode, relativeToSlots] = ((options, defaultLargestUnit, refineRelativeTo)=>{
        options = normalizeOptionsOrString(options, smallestUnitStr);
        let largestUnit = coerceLargestUnit(options);
        const relativeToInternals = refineRelativeTo(options.relativeTo);
        let roundingInc = coerceRoundingIncInteger(options);
        const roundingMode = coerceRoundingMode(options, 7);
        let smallestUnit = coerceSmallestUnit(options);
        return void 0 === largestUnit && void 0 === smallestUnit && throwRangeError("Required smallestUnit or largestUnit"), null == smallestUnit && (smallestUnit = 0), null == largestUnit && (largestUnit = Math.max(smallestUnit, defaultLargestUnit)), checkLargestSmallestUnit(largestUnit, smallestUnit), roundingInc = validateRoundingInc(roundingInc, smallestUnit, 1), roundingInc > 1 && smallestUnit > 5 && largestUnit !== smallestUnit && throwRangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit"), [
            largestUnit,
            smallestUnit,
            roundingInc,
            roundingMode,
            relativeToInternals
        ];
    })(options, durationLargestUnit, refineRelativeTo);
    if (!relativeToSlots && Math.max(durationLargestUnit, largestUnit) <= 6) {
        return createDurationSlots(validateDurationFields(((durationFields, largestUnit, smallestUnit, roundingInc, roundingMode)=>{
            const roundedBigNano = roundBigNanoToInc(durationDayTimeToBigNano(durationFields), computeBigNanoInc(smallestUnit, roundingInc), roundingMode);
            return {
                ...durationFieldDefaults,
                ...nanoToDurationDayTimeFields(roundedBigNano, largestUnit)
            };
        })(slots, largestUnit, smallestUnit, roundingInc, roundingMode)));
    }
    relativeToSlots || throwRangeError("Missing relativeTo");
    const isZoned = isZonedEpochSlots(relativeToSlots);
    if (!slots.sign && (!isZoned || largestUnit < 6)) {
        return slots;
    }
    const [balancedDuration, endEpochNano, relativeOps] = spanRelativeDuration(relativeToSlots, slots, largestUnit);
    return createDurationSlots(roundRelativeDuration(balancedDuration, endEpochNano, largestUnit, smallestUnit, roundingInc, roundingMode, relativeOps, isZoned));
}
function absDuration(slots) {
    return -1 === slots.sign ? negateDuration(slots) : slots;
}
function negateDuration(slots) {
    return createDurationSlots(negateDurationFields(slots));
}
function negateDurationFields(fields) {
    const res = {};
    for (const fieldName of durationFieldNamesAsc){
        res[fieldName] = -1 * fields[fieldName] || 0;
    }
    return res;
}
function computeDurationSign(fields, fieldNames = durationFieldNamesAsc) {
    let sign = 0;
    for (const fieldName of fieldNames){
        const fieldSign = Math.sign(fields[fieldName]);
        fieldSign && (sign && sign !== fieldSign && throwRangeError("Cannot mix duration signs"), sign = fieldSign);
    }
    return sign;
}
function validateDurationFields(fields) {
    for (const calendarUnit of durationCalendarFieldNamesAsc){
        validateDurationCalendarUnit(calendarUnit, fields[calendarUnit]);
    }
    const bigNano = durationDayTimeToBigNano(fields);
    return validateDurationTimeUnit(Number(bigNano / bigNanoInSec)), fields;
}
function validateDurationCalendarUnit(unit, value) {
    return clampEntity(unit, value, -4294967295, 4294967295, 1);
}
function validateDurationTimeUnit(n) {
    Number.isSafeInteger(n) || throwRangeError("Out-of-bounds duration");
}
function durationDayTimeToBigNano(fields) {
    return BigInt(fields.days) * bigNanoInUtcDay + durationTimeToBigNano(fields);
}
function durationTimeToBigNano(fields) {
    return BigInt(fields.hours) * bigNanoInHour + BigInt(fields.minutes) * bigNanoInMinute + durationSubMinuteToBigNano(fields);
}
function durationSubMinuteToBigNano(fields) {
    return BigInt(fields.seconds) * bigNanoInSec + BigInt(fields.milliseconds) * bigNanoInMilli + BigInt(fields.microseconds) * bigNanoInMicro + BigInt(fields.nanoseconds);
}
function nanoToDurationDayTimeFields(bigNano, largestUnit = 6) {
    const days = Number(bigNano / bigNanoInUtcDay);
    const timeNano = Number(bigNano % bigNanoInUtcDay);
    const unitNano = unitNanoMap[largestUnit];
    const largestUnitVal = largestUnit <= 3 ? Number(bigNano / BigInt(unitNano)) : days * (nanoInUtcDay / unitNano) + divTrunc(timeNano, unitNano);
    Number.isFinite(largestUnitVal) || throwRangeError(outOfBoundsDate), largestUnit <= 3 && Math.abs(largestUnitVal) / (nanoInSec / unitNanoMap[largestUnit]) >= maxDurationSeconds && throwRangeError(outOfBoundsDate);
    const dayTimeFields = nanoToGivenFields(timeNano, largestUnit, durationFieldNamesAsc);
    return dayTimeFields[durationFieldNamesAsc[largestUnit]] = largestUnitVal, dayTimeFields;
}
function nanoToDurationTimeFields(nano, largestUnit = 5) {
    return nanoToGivenFields(nano, largestUnit, durationFieldNamesAsc);
}
function durationHasDateParts(fields) {
    return Boolean(computeDurationSign(fields, durationDateFieldNamesAsc));
}
function getMaxDurationUnit(fields) {
    let unit = 9;
    for(; unit > 0 && !fields[durationFieldNamesAsc[unit]]; unit--){}
    return unit;
}
function compareZonedEpochSlots(zonedEpochSlots0, zonedEpochSlots1) {
    return compareBigInts(zonedEpochSlots0.epochNanoseconds, zonedEpochSlots1.epochNanoseconds);
}
function compareDurations(refineRelativeTo, durationSlots0, durationSlots1, options) {
    const relativeToSlots = refineRelativeTo((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeOptions"])(options).relativeTo);
    const maxUnit = Math.max(getMaxDurationUnit(durationSlots0), getMaxDurationUnit(durationSlots1));
    return allPropsEqual(durationFieldNamesAsc, durationSlots0, durationSlots1) ? 0 : isUniformUnit(maxUnit, relativeToSlots && isZonedEpochSlots(relativeToSlots)) ? compareBigInts(durationDayTimeToBigNano(durationSlots0), durationDayTimeToBigNano(durationSlots1)) : (relativeToSlots || throwRangeError("Missing relativeTo"), compareBigInts(moveRelativeEndpointToEpochNano(relativeToSlots, durationSlots0), moveRelativeEndpointToEpochNano(relativeToSlots, durationSlots1)));
}
function compareIsoDateTimeFields(isoDateTime0, isoDateTime1) {
    return compareIsoDateFields(isoDateTime0, isoDateTime1) || compareTimeFields(isoDateTime0, isoDateTime1);
}
function compareIsoDateFields(isoDate0, isoDate1) {
    return compareNumbers(isoDateToEpochDays(isoDate0), isoDateToEpochDays(isoDate1));
}
function compareTimeFields(timeFields0, timeFields1) {
    return compareNumbers(timeFieldsToNano(timeFields0), timeFieldsToNano(timeFields1));
}
function instantsEqual(instantSlots0, instantSlots1) {
    return !compareZonedEpochSlots(instantSlots0, instantSlots1);
}
function zonedDateTimesEqual(zonedDateTimeSlots0, zonedDateTimeSlots1) {
    return !compareZonedEpochSlots(zonedDateTimeSlots0, zonedDateTimeSlots1) && zonedDateTimeSlots0.timeZone.m === zonedDateTimeSlots1.timeZone.m && zonedDateTimeSlots0.calendar === zonedDateTimeSlots1.calendar;
}
function plainDateTimesEqual(plainDateTimeSlots0, plainDateTimeSlots1) {
    return !compareIsoDateTimeFields(plainDateTimeSlots0, plainDateTimeSlots1) && plainDateTimeSlots0.calendar === plainDateTimeSlots1.calendar;
}
function plainDatesEqual(plainDateSlots0, plainDateSlots1) {
    return !compareIsoDateFields(plainDateSlots0, plainDateSlots1) && plainDateSlots0.calendar === plainDateSlots1.calendar;
}
function plainYearMonthsEqual(plainYearMonthSlots0, plainYearMonthSlots1) {
    return !compareIsoDateFields(plainYearMonthSlots0, plainYearMonthSlots1) && plainYearMonthSlots0.calendar === plainYearMonthSlots1.calendar;
}
function plainMonthDaysEqual(plainMonthDaySlots0, plainMonthDaySlots1) {
    return !compareIsoDateFields(plainMonthDaySlots0, plainMonthDaySlots1) && plainMonthDaySlots0.calendar === plainMonthDaySlots1.calendar;
}
function plainTimesEqual(plainTimeSlots0, plainTimeSlots1) {
    return !compareTimeFields(plainTimeSlots0, plainTimeSlots1);
}
function getCalendarEraOrigins(calendar) {
    return 0 === calendar ? gregoryEraOrigins : calendar ? calendar.k : void 0;
}
function getCalendarFieldNames(calendar, fieldNames, fieldNamesWithEra = fieldNames) {
    return getCalendarEraOrigins(calendar) ? fieldNamesWithEra : fieldNames;
}
function resolveCalendarYear(fields, calendar) {
    const exoticCalendar = calendar || void 0;
    const eraOrigins = getCalendarEraOrigins(calendar);
    let { era: era, eraYear: eraYear, year: year } = fields;
    if (void 0 !== year && (year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toIntegerWithTrunc"])(year, "year")), void 0 !== eraYear && (eraYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toIntegerWithTrunc"])(eraYear, "eraYear")), void 0 !== era || void 0 !== eraYear) {
        void 0 !== era && void 0 !== eraYear || throwTypeError("Mismatching era/eraYear"), eraOrigins || throwRangeError("Forbidden era/eraYear");
        const normalizedEra = normalizeEraName(era);
        const eraOrigin = eraOrigins[normalizedEra];
        void 0 === eraOrigin && throwRangeError(((era)=>`Invalid era: ${era}`)(era));
        const yearByEra = exoticCalendar?._ ? exoticCalendar._(eraYear, normalizedEra, eraOrigin) : eraYearToYear(eraYear, eraOrigin);
        void 0 !== year && year !== yearByEra && throwRangeError("Mismatching year/eraYear"), year = yearByEra;
    } else {
        void 0 === year && throwTypeError(missingYear(eraOrigins));
    }
    return year;
}
function resolveCalendarMonth(fields, calendar, year, monthCodeParts, overflow) {
    let { month: month, monthCode: monthCode } = fields;
    if (void 0 !== monthCode) {
        const monthByCode = ((calendar, monthCode, year, overflow, monthCodeParts = parseMonthCode(monthCode))=>{
            const leapMonth = calendar ? calendar.p(year) : void 0;
            const [monthCodeNumber, wantsLeapMonth] = monthCodeParts;
            let month = monthCodeNumberToMonth(monthCodeNumber, wantsLeapMonth, leapMonth);
            if (wantsLeapMonth) {
                const leapMonthMeta = calendar ? calendar.l : void 0;
                void 0 === leapMonthMeta && throwRangeError(invalidLeapMonth), leapMonthMeta > 0 ? (month > leapMonthMeta && throwRangeError(invalidLeapMonth), leapMonth !== month && (1 === overflow && throwRangeError(invalidLeapMonth), month = monthCodeNumberToMonth(monthCodeNumber, 0, leapMonth))) : (month !== -leapMonthMeta && throwRangeError(invalidLeapMonth), void 0 === leapMonth && 1 === overflow && throwRangeError(invalidLeapMonth));
            }
            return month;
        })(calendar, monthCode, year, overflow, monthCodeParts);
        void 0 !== month && month !== monthByCode && throwRangeError("Mismatching month/monthCode"), month = monthByCode, overflow = 1;
    } else {
        void 0 === month && throwTypeError("Missing month/monthCode");
    }
    return clampEntity("month", month, 1, computeCalendarMonthsInYearForYear(calendar, year), overflow);
}
function resolveCalendarDay(fields, calendar, year, month, overflow) {
    return clampProp(fields, "day", 1, computeCalendarDaysInMonthForYearMonth(calendar, year, month), overflow);
}
function eraYearToYear(eraYear, eraOrigin) {
    return (eraOrigin + eraYear) * (Math.sign(eraOrigin) || 1) || 0;
}
function resolveTimeFields(fields, overflow) {
    return constrainTimeFields(pluckProps(timeFieldNamesAsc, {
        ...timeFieldDefaults,
        ...fields
    }), overflow);
}
const offsetRegExp = /^([+-])([01]\d|2[0-3])(?:(:?)([0-5]\d)(?:\3([0-5]\d)(?:[.,](\d{1,9}))?)?)?$/;
function parseOffsetNano(s) {
    const offsetNano = parseOffsetNanoMaybe(s);
    return void 0 === offsetNano && throwRangeError(failedParse(s)), offsetNano;
}
function parseOffsetNanoMaybe(s, onlyHourMinute) {
    const parts = offsetRegExp.exec(s);
    if (parts) {
        return onlyHourMinute && parts[5] && throwRangeError(failedParse(s)), ((s)=>s && "+" !== s ? -1 : 1)(parts[1]) * (parseInt(parts[2]) * nanoInHour + parseInt0(parts[4]) * nanoInMinute + parseInt0(parts[5]) * nanoInSec + parseSubsecNano(parts[6] || ""));
    }
}
const dateFieldRefiners = {
    era: toString,
    month: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toPositiveIntegerWithTruncation"],
    monthCode (monthCode, fieldName) {
        return requireString(toPrimitiveWithStringHint(monthCode), fieldName);
    },
    day: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toPositiveIntegerWithTruncation"]
};
const timeFieldRefiners = /*@__PURE__*/ zipPropsConst(timeFieldNamesAsc, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toIntegerWithTrunc"]);
const durationFieldRefiners = /*@__PURE__*/ zipPropsConst(durationFieldNamesAsc, toStrictInteger);
const dateTimeFieldRefiners = /*@__PURE__*/ Object.assign({}, dateFieldRefiners, timeFieldRefiners);
const zonedDateTimeFieldRefiners = {
    offset (offsetString) {
        return parseOffsetNano(requireString(toPrimitiveWithStringHint(offsetString)));
    },
    ...dateTimeFieldRefiners
};
function readAndRefineBagFields(bag, validFieldNames, fieldRefiners, requiredFieldNames, disallowEmpty = !requiredFieldNames) {
    const res = {};
    let anyMatching = 0;
    for (const fieldName of validFieldNames){
        let fieldVal = bag[fieldName];
        if (void 0 !== fieldVal) {
            anyMatching = 1;
            const refiner = fieldRefiners[fieldName];
            refiner && (fieldVal = refiner(fieldVal, fieldName)), res[fieldName] = fieldVal;
        } else {
            requiredFieldNames && requiredFieldNames.includes(fieldName) && throwTypeError(missingField(fieldName));
        }
    }
    return disallowEmpty && !anyMatching && throwTypeError("No valid fields: " + validFieldNames.join()), res;
}
function refineOverflowOptions(options) {
    return void 0 === options ? 0 : coerceOverflow((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireObjectLike"])(options));
}
function refineZonedFieldOptions(options, defaultOffsetDisambig = 0) {
    options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeOptions"])(options);
    const epochDisambig = coerceEpochDisambig(options);
    const offsetDisambig = coerceOffsetDisambig(options, defaultOffsetDisambig);
    return [
        coerceOverflow(options),
        offsetDisambig,
        epochDisambig
    ];
}
function refineEpochDisambigOptions(options) {
    return coerceEpochDisambig((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeOptions"])(options));
}
function refineCalendarDateFields(fields, calendar, allowMissingDay) {
    const eraOrigins = getCalendarEraOrigins(calendar);
    void 0 !== fields.year || void 0 !== fields.era && void 0 !== fields.eraYear || throwTypeError(missingYear(eraOrigins)), void 0 === fields.monthCode && void 0 === fields.month && throwTypeError("Missing month/monthCode"), allowMissingDay || void 0 !== fields.day || throwTypeError(missingField("day"));
    const monthCodeParts = parseMonthCodeField(fields);
    return [
        resolveCalendarYear(fields, calendar),
        monthCodeParts
    ];
}
function refineMonthDayFields(fields, calendar) {
    const isIso = calendar === isoCalendarImpl;
    const eraOrigins = getCalendarEraOrigins(calendar);
    void 0 === fields.day && throwTypeError(missingField("day")), isIso || void 0 === fields.month || void 0 !== fields.year || void 0 !== fields.era && void 0 !== fields.eraYear || throwTypeError(missingYear(eraOrigins));
    const monthCodeParts = parseMonthCodeField(fields);
    return [
        void 0 !== fields.eraYear || void 0 !== fields.year ? resolveCalendarYear(fields, calendar) : void 0,
        monthCodeParts
    ];
}
function createDateTimeFromRefinedFields(isoDate, timeFields = timeFieldDefaults, calendar) {
    const isoDateTime = combineDateAndTime(isoDate, timeFields);
    return checkIsoDateTimeInBounds(isoDateTime), createDateTimeSlots(isoDateTime, calendar);
}
function createDateFromRefinedFields(fields, calendar, year, monthCodeParts, overflow) {
    const month = resolveCalendarMonth(fields, calendar, year, monthCodeParts, overflow);
    return createDateSlots(checkIsoDateInBounds(computeCalendarIsoFieldsFromParts(calendar, year, month, resolveCalendarDay(fields, calendar, year, month, overflow))), calendar);
}
function createYearMonthFromRefinedFields(fields, calendar, year, monthCodeParts, overflow) {
    return createYearMonthFromCalendarParts(calendar, year, resolveCalendarMonth(fields, calendar, year, monthCodeParts, overflow));
}
function createMonthDayFromRefinedFields(fields, calendar, year, monthCodeParts, overflow) {
    const isIso = calendar === isoCalendarImpl;
    let yearMaybe = year;
    let day;
    let monthCodeNumber;
    let isLeapMonth;
    if (void 0 === yearMaybe && isIso && (yearMaybe = 1972), void 0 !== yearMaybe) {
        isIso || checkIsoDateInBounds(computeCalendarIsoFieldsFromParts(calendar, yearMaybe, 1, 1));
        const month = resolveCalendarMonth(fields, calendar, yearMaybe, monthCodeParts, overflow);
        day = resolveCalendarDay(fields, calendar, yearMaybe, month, overflow), [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, yearMaybe, month);
    } else {
        void 0 === fields.monthCode && throwTypeError("Missing month/monthCode"), [monthCodeNumber, isLeapMonth] = monthCodeParts;
        const referenceYear = calendar ? calendar.re : 1972;
        if (void 0 !== referenceYear) {
            day = resolveCalendarDay(fields, calendar, referenceYear, resolveCalendarMonth(fields, calendar, referenceYear, monthCodeParts, overflow), overflow);
        } else {
            const constrainedDay = 0 === overflow && calendar ? calendar.ge?.(monthCodeNumber, isLeapMonth, fields.day) : void 0;
            day = void 0 !== constrainedDay ? constrainedDay : fields.day;
        }
    }
    return createMonthDayFromMonthCodeParts(calendar, monthCodeNumber, isLeapMonth, day, fields.day, overflow);
}
function createYearMonthFromCalendarParts(calendar, year, month) {
    return createDateSlots(checkIsoYearMonthInBounds(computeCalendarIsoFieldsFromParts(calendar, year, month, 1)), calendar);
}
function createMonthDayFromCalendarParts(calendar, year, month, day) {
    const [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, year, month);
    return createMonthDayFromMonthCodeParts(calendar, monthCodeNumber, isLeapMonth, day, day, 0);
}
function createMonthDayFromMonthCodeParts(calendar, monthCodeNumber, isLeapMonthArg, day, requestedDay, overflow) {
    let isLeapMonth = isLeapMonthArg;
    isLeapMonth && ((calendar && calendar.U?.[monthCodeNumber]) ?? 1 / 0) < requestedDay && (1 === overflow && throwRangeError(invalidLeapMonth), isLeapMonth = 0, day = constrainToRange(requestedDay, 1, (calendar && calendar.R) ?? 1 / 0));
    let res = calendar ? calendar.u(monthCodeNumber, Boolean(isLeapMonth), day) : computeIsoYearMonthFieldsForMonthDay(monthCodeNumber, Boolean(isLeapMonth));
    for(; !res && 0 === overflow && day > 1;){
        day--, res = calendar ? calendar.u(monthCodeNumber, Boolean(isLeapMonth), day) : computeIsoYearMonthFieldsForMonthDay(monthCodeNumber, Boolean(isLeapMonth));
    }
    res || throwRangeError("Cannot guess year");
    const { year: finalYear, month: finalMonth } = res;
    return createDateSlots(checkIsoDateInBounds(computeCalendarIsoFieldsFromParts(calendar, finalYear, finalMonth, day)), calendar);
}
function parseMonthCodeField(fields) {
    if (void 0 !== fields.monthCode) {
        return parseMonthCode(fields.monthCode);
    }
}
const RawDateTimeFormat = Intl.DateTimeFormat;
function formatEpochMilliToPartsRecord(intlFormat, epochMilli) {
    epochMilli < -864e13 && throwRangeError(outOfBoundsDate);
    const parts = intlFormat.formatToParts(epochMilli);
    const hash = {};
    for (const part of parts){
        hash[part.type] = part.value;
    }
    return hash;
}
const utcTimeZoneId = "UTC";
const timeZonePeriodDaysByName = {
    "El_Aaiun": 16,
    "Tucuman": 12,
    "Tirane": 11,
    "Riga": 10,
    "Simferopol": 9,
    "Vienna": 9,
    "Tunis": 8,
    "Boa_Vista": 6,
    "Fortaleza": 6,
    "Maceio": 6,
    "Noronha": 6,
    "Recife": 6,
    "Gaza": 6,
    "Hebron": 6,
    "DeNoronha": 6
};
const minPossibleTransitionSec = -4e9;
function refineTimeDisplayTuple(options, maxSmallestUnit = 4) {
    const subsecDigits = coerceFractionalSecondDigits(options);
    const roundingMode = coerceRoundingMode(options, 4);
    const smallestUnit = coerceSmallestUnit(options);
    return [
        roundingMode,
        ...resolveSmallestUnitAndSubsecDigits(validateUnitRange(smallestUnitStr, smallestUnit, 0, maxSmallestUnit), subsecDigits)
    ];
}
function refineDateDisplayOptions(options) {
    return coerceCalendarDisplay((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeOptions"])(options));
}
function refineTimeDisplayOptions(options, maxSmallestUnit) {
    return refineTimeDisplayTuple((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeOptions"])(options), maxSmallestUnit);
}
function resolveSmallestUnitAndSubsecDigits(smallestUnit, subsecDigits) {
    return null != smallestUnit ? [
        unitNanoMap[smallestUnit],
        smallestUnit < 4 ? 9 - 3 * smallestUnit : -1
    ] : [
        void 0 === subsecDigits ? 1 : 10 ** (9 - subsecDigits),
        subsecDigits
    ];
}
function formatInstantIso(refineTimeZoneString, instantSlots, options) {
    const [timeZoneArg, roundingMode, nanoInc, subsecDigits] = ((options)=>{
        const subsecDigits = coerceFractionalSecondDigits(options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeOptions"])(options));
        const roundingMode = coerceRoundingMode(options, 4);
        const smallestUnit = coerceSmallestUnit(options);
        return [
            options.timeZone,
            roundingMode,
            ...resolveSmallestUnitAndSubsecDigits(validateUnitRange(smallestUnitStr, smallestUnit, 0, 4), subsecDigits)
        ];
    })(options);
    const providedTimeZone = void 0 !== timeZoneArg;
    return ((providedTimeZone, timeZone, epochNano, roundingMode, nanoInc, subsecDigits)=>{
        epochNano = roundBigNanoToDayOriginInc(epochNano, BigInt(nanoInc), roundingMode);
        const offsetNano = timeZone.B(epochNano);
        return formatIsoDateTimeFields(epochNanoToIsoDateTime(epochNano + BigInt(offsetNano)), subsecDigits) + (providedTimeZone ? formatOffsetNano(roundToMinute(offsetNano)) : "Z");
    })(providedTimeZone, queryTimeZone(providedTimeZone ? refineTimeZoneString(timeZoneArg) : "UTC"), instantSlots.epochNanoseconds, roundingMode, nanoInc, subsecDigits);
}
function formatInstantIsoAuto(instantSlots) {
    return formatIsoDateTimeFields(epochNanoToIsoDateTime(instantSlots.epochNanoseconds), void 0) + "Z";
}
function formatZonedDateTimeIso(zonedDateTimeSlots0, options) {
    const displayOptions = ((options)=>{
        options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeOptions"])(options);
        const calendarDisplay = coerceCalendarDisplay(options);
        const subsecDigits = coerceFractionalSecondDigits(options);
        const offsetDisplay = coerceOffsetDisplay(options);
        const roundingMode = coerceRoundingMode(options, 4);
        const smallestUnit = coerceSmallestUnit(options);
        return [
            calendarDisplay,
            coerceTimeZoneDisplay(options),
            offsetDisplay,
            roundingMode,
            ...resolveSmallestUnitAndSubsecDigits(validateUnitRange(smallestUnitStr, smallestUnit, 0, 4), subsecDigits)
        ];
    })(options);
    return ((calendar, timeZoneId, timeZone, epochNano, calendarDisplay, timeZoneDisplay, offsetDisplay, roundingMode, nanoInc, subsecDigits)=>{
        epochNano = roundBigNanoToDayOriginInc(epochNano, BigInt(nanoInc), roundingMode);
        const offsetNano = timeZone.B(epochNano);
        return formatIsoDateTimeFields(epochNanoToIsoDateTime(epochNano + BigInt(offsetNano)), subsecDigits) + formatOffsetNano(roundToMinute(offsetNano), offsetDisplay) + formatTimeZone(timeZoneId, timeZoneDisplay) + formatCalendar(calendar, calendarDisplay);
    })(zonedDateTimeSlots0.calendar, zonedDateTimeSlots0.timeZone.id, zonedDateTimeSlots0.timeZone, zonedDateTimeSlots0.epochNanoseconds, ...displayOptions);
}
function formatZonedDateTimeIsoAuto(zonedDateTimeSlots) {
    const calendar = zonedDateTimeSlots.calendar;
    const timeZone = zonedDateTimeSlots.timeZone;
    const offsetNano = timeZone.B(zonedDateTimeSlots.epochNanoseconds);
    return formatIsoDateTimeFields(epochNanoToIsoDateTime(zonedDateTimeSlots.epochNanoseconds + BigInt(offsetNano)), void 0) + formatOffsetNano(roundToMinute(offsetNano)) + formatTimeZone(timeZone.id, 0) + (calendar === isoCalendarImpl ? "" : formatCalendarId(getCalendarSlotId(calendar), 0));
}
function formatPlainDateTimeIso(plainDateTimeSlots0, options) {
    const displayOptions = ((options)=>(options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeOptions"])(options), [
            coerceCalendarDisplay(options),
            ...refineTimeDisplayTuple(options)
        ]))(options);
    return ((calendar, isoDateTime, calendarDisplay, roundingMode, nanoInc, subsecDigits)=>formatIsoDateTimeFields(roundDateTimeToInc(isoDateTime, nanoInc, roundingMode), subsecDigits) + formatCalendar(calendar, calendarDisplay))(plainDateTimeSlots0.calendar, plainDateTimeSlots0, ...displayOptions);
}
function formatDateTimeIsoAuto(isoDateTimeSlots) {
    const calendar = isoDateTimeSlots.calendar;
    return formatIsoDateTimeFields(isoDateTimeSlots, void 0) + (calendar === isoCalendarImpl ? "" : formatCalendarId(getCalendarSlotId(calendar), 0));
}
function formatPlainDateIso(plainDateSlots, options) {
    return calendar = plainDateSlots.calendar, isoDate = plainDateSlots, calendarDisplay = refineDateDisplayOptions(options), formatIsoDateFields(isoDate) + formatCalendar(calendar, calendarDisplay);
    //TURBOPACK unreachable
    ;
    var calendar, isoDate, calendarDisplay;
}
function formatDateIsoAuto(plainDateSlots) {
    return formatIsoDateFields(plainDateSlots) + (plainDateSlots.calendar === isoCalendarImpl ? "" : formatCalendarId(getCalendarSlotId(plainDateSlots.calendar), 0));
}
function formatPlainYearMonthIso(plainYearMonthSlots, options) {
    return formatDateLikeIso(plainYearMonthSlots.calendar, formatIsoYearMonthFields, plainYearMonthSlots, refineDateDisplayOptions(options));
}
function formatYearMonthIsoAuto(plainYearMonthSlots) {
    const calendar = plainYearMonthSlots.calendar;
    return calendar !== isoCalendarImpl ? formatIsoDateFields(plainYearMonthSlots) + formatCalendarId(getCalendarSlotId(calendar), 0) : formatIsoYearMonthFields(plainYearMonthSlots);
}
function formatPlainMonthDayIso(plainMonthDaySlots, options) {
    return formatDateLikeIso(plainMonthDaySlots.calendar, formatIsoMonthDayFields, plainMonthDaySlots, refineDateDisplayOptions(options));
}
function formatMonthDayIsoAuto(plainMonthDaySlots) {
    const calendar = plainMonthDaySlots.calendar;
    return calendar !== isoCalendarImpl ? formatIsoDateFields(plainMonthDaySlots) + formatCalendarId(getCalendarSlotId(calendar), 0) : formatIsoMonthDayFields(plainMonthDaySlots);
}
function formatDateLikeIso(calendar, formatSimple, isoDate, calendarDisplay) {
    const showCalendar = calendarDisplay > 1 || 0 === calendarDisplay && calendar !== isoCalendarImpl;
    return 1 === calendarDisplay ? calendar === isoCalendarImpl ? formatSimple(isoDate) : formatIsoDateFields(isoDate) : showCalendar ? formatIsoDateFields(isoDate) + formatCalendarId(getCalendarSlotId(calendar), 2 === calendarDisplay) : formatSimple(isoDate);
}
function formatPlainTimeIso(slots, options) {
    return ((fields, roundingMode, nanoInc, subsecDigits)=>formatTimeFields(roundTimeToInc(fields, nanoInc, roundingMode)[0], subsecDigits))(slots, ...refineTimeDisplayOptions(options));
}
function formatTimeIsoAuto(slots) {
    return formatTimeFields(slots, void 0);
}
function formatDurationIso(slots, options) {
    const [roundingMode, nanoInc, subsecDigits] = refineTimeDisplayOptions(options, 3);
    return nanoInc > 1 && ((slots = {
        ...slots,
        ...roundDayTimeDurationByInc(slots, nanoInc, roundingMode)
    }).sign = computeDurationSign(slots), validateDurationFields(slots)), formatDurationSlots(slots, subsecDigits);
}
function formatDurationIsoAuto(slots) {
    return formatDurationSlots(slots, void 0);
}
function formatDurationSlots(durationSlots, subsecDigits) {
    const { sign: sign } = durationSlots;
    const abs = -1 === sign ? negateDurationFields(durationSlots) : durationSlots;
    const { hours: hours, minutes: minutes } = abs;
    const bigNano = durationSubMinuteToBigNano(abs);
    const wholeSec = Number(bigNano / bigNanoInSec);
    const subsecNano = Number(bigNano % bigNanoInSec);
    validateDurationTimeUnit(wholeSec);
    const subsecNanoString = formatSubsecNano(subsecNano, subsecDigits);
    const forceSec = subsecDigits >= 0 || !sign || subsecNanoString;
    return (sign < 0 ? "-" : "") + "P" + formatDurationFragments({
        "Y": formatDurationNumber(abs.years),
        "M": formatDurationNumber(abs.months),
        "W": formatDurationNumber(abs.weeks),
        "D": formatDurationNumber(abs.days)
    }) + (hours || minutes || wholeSec || forceSec ? "T" + formatDurationFragments({
        "H": formatDurationNumber(hours),
        "M": formatDurationNumber(minutes),
        "S": formatDurationNumber(wholeSec, forceSec) + subsecNanoString
    }) : "");
}
function formatDurationFragments(fragObj) {
    const parts = [];
    for(const fragName in fragObj){
        const fragVal = fragObj[fragName];
        fragVal && parts.push(fragVal, fragName);
    }
    return parts.join("");
}
function formatDurationNumber(n, force) {
    if (!n && !force) {
        return "";
    }
    const options = Object.create(null);
    return options.useGrouping = 0, n.toLocaleString("fullwide", options);
}
function formatIsoDateTimeFields(isoDateTime, subsecDigits) {
    return formatIsoDateFields(isoDateTime) + "T" + formatTimeFields(isoDateTime, subsecDigits);
}
function formatIsoDateFields(isoDate) {
    return formatIsoYearMonthFields(isoDate) + "-" + padNumber2(isoDate.day);
}
function formatIsoYearMonthFields(isoDate) {
    const { year: year } = isoDate;
    return (year < 0 || year > 9999 ? getSignStr(year) + padNumber(6, Math.abs(year)) : padNumber(4, year)) + "-" + padNumber2(isoDate.month);
}
function formatIsoMonthDayFields(isoDate) {
    return padNumber2(isoDate.month) + "-" + padNumber2(isoDate.day);
}
function formatTimeFields(timeFields, subsecDigits) {
    const parts = [
        padNumber2(timeFields.hour),
        padNumber2(timeFields.minute)
    ];
    return -1 !== subsecDigits && parts.push(padNumber2(timeFields.second) + ((millisecond, microsecond, nanosecond, subsecDigits)=>formatSubsecNano(millisecond * nanoInMilli + microsecond * nanoInMicro + nanosecond, subsecDigits))(timeFields.millisecond, timeFields.microsecond, timeFields.nanosecond, subsecDigits)), parts.join(":");
}
function formatOffsetNano(offsetNano, offsetDisplay = 0) {
    if (1 === offsetDisplay) {
        return "";
    }
    const [hour, nanoRemainder0] = divModFloor(Math.abs(offsetNano), nanoInHour);
    const [minute, nanoRemainder1] = divModFloor(nanoRemainder0, nanoInMinute);
    const [second, nanoRemainder2] = divModFloor(nanoRemainder1, nanoInSec);
    return getSignStr(offsetNano) + padNumber2(hour) + ":" + padNumber2(minute) + (second || nanoRemainder2 ? ":" + padNumber2(second) + formatSubsecNano(nanoRemainder2) : "");
}
function formatTimeZone(timeZoneId, timeZoneDisplay) {
    return 1 !== timeZoneDisplay ? "[" + (2 === timeZoneDisplay ? "!" : "") + timeZoneId + "]" : "";
}
function formatCalendar(calendar, calendarDisplay) {
    return calendarDisplay > 1 || 0 === calendarDisplay && calendar !== isoCalendarImpl ? formatCalendarId(getCalendarSlotId(calendar), 2 === calendarDisplay) : "";
}
function formatCalendarId(calendarId, isCritical) {
    return "[" + (isCritical ? "!" : "") + "u-ca=" + calendarId + "]";
}
const trailingZerosRE = /0+$/;
function formatSubsecNano(totalNano, subsecDigits) {
    let s = padNumber(9, totalNano);
    return s = void 0 === subsecDigits ? s.replace(trailingZerosRE, "") : s.slice(0, subsecDigits), s ? "." + s : "";
}
function getSignStr(num) {
    return num < 0 ? "-" : "+";
}
const icuRegExp = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/;
const badCharactersRegExp = /[^\w\/:+-]+/;
function refineTimeZoneId(rawId) {
    return resolveTimeZoneId(requireString(rawId));
}
function resolveTimeZoneId(rawId) {
    return resolveTimeZoneRecord(rawId).id;
}
const resolveTimeZoneRecord = /*@__PURE__*/ memoize((rawId)=>{
    const upperRawId = rawId.toUpperCase();
    const offsetRecord = ((upperRawId)=>{
        const offsetNano = parseOffsetNanoMaybe(upperRawId, 1);
        if (void 0 !== offsetNano) {
            return {
                id: formatOffsetNano(offsetNano),
                Z: offsetNano,
                m: offsetNano
            };
        }
    })(upperRawId);
    if (offsetRecord) {
        return {
            kind: "fixed",
            ...offsetRecord
        };
    }
    const normId = "UTC" === upperRawId ? "UTC" : ((rawId)=>(badCharactersRegExp.test(rawId) && throwRangeError(invalidTimeZone(rawId)), icuRegExp.test(rawId) && throwRangeError("Forbidden ICU TimeZone"), rawId.toLowerCase().split("/").map((part, partI)=>(part.length <= 3 || /\d/.test(part)) && !/etc|yap/.test(part) ? part.toUpperCase() : part.replace(/baja|dumont|[a-z]+/g, (a, i)=>a.length <= 2 && !partI || "in" === a || "chat" === a ? a.toUpperCase() : a.length > 2 || !i ? capitalize(a).replace(/island|noronha|murdo|rivadavia|urville/, capitalize) : a)).join("/")))(rawId);
    return queryNamedTimeZoneRecord(normId);
});
const queryNamedTimeZoneRecord = /*@__PURE__*/ memoize((normId)=>{
    if ("UTC" === normId) {
        return {
            kind: "utc",
            id: normId,
            m: normId
        };
    }
    const format = (upperNormId = normId.toUpperCase(), new RawDateTimeFormat("en-u-hc-h23", {
        calendar: "iso8601",
        timeZone: upperNormId,
        era: "short",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }));
    var upperNormId;
    return {
        kind: "named",
        id: normId,
        format: format,
        m: format.resolvedOptions().timeZone
    };
});
function queryTimeZone(rawTimeZoneId) {
    const record = resolveTimeZoneRecord(rawTimeZoneId);
    return queryTimeZoneRecord(record.id, record);
}
const queryTimeZoneRecord = /*@__PURE__*/ memoize((normTimeZoneId, record)=>"named" === record.kind ? new IntlTimeZone(normTimeZoneId, record.m, record.format) : new FixedTimeZone(normTimeZoneId, record.m, "fixed" === record.kind ? record.Z : 0));
class FixedTimeZone {
    constructor(id, compareKey, offsetNano){
        this.id = id, this.m = compareKey, this.Z = offsetNano;
    }
    B() {
        return this.Z;
    }
    O(isoDateTime) {
        return [
            isoDateTimeAndOffsetToEpochNano(isoDateTime, this.Z)
        ];
    }
    C() {}
}
class IntlTimeZone {
    constructor(id, compareKey, format){
        this.id = id, this.m = compareKey, this.me = ((computeOffsetSec, periodDays)=>{
            const getSample = memoize(computeOffsetSec);
            const getSplit = memoize(createSplitTuple);
            const periodSec = 86400 * periodDays;
            function getOffsetSec(epochSec) {
                const [startEpochSec, endEpochSec] = computePeriod(epochSec, periodSec);
                const clampedStartEpochSec = clampIntlSampleEpochSec(startEpochSec);
                const clampedEndEpochSec = clampIntlSampleEpochSec(endEpochSec);
                const startOffsetSec = getSample(clampedStartEpochSec);
                const endOffsetSec = getSample(clampedEndEpochSec);
                return startOffsetSec === endOffsetSec ? startOffsetSec : pinch(getSplit(clampedStartEpochSec, clampedEndEpochSec), startOffsetSec, endOffsetSec, epochSec);
            }
            function searchTransition(searchEpochSec, direction, searchLimit, epochSec = searchEpochSec) {
                let [startEpochSec, endEpochSec] = computePeriod(searchEpochSec, periodSec);
                const inc = periodSec * direction;
                const inBounds = ()=>direction < 0 ? endEpochSec > searchLimit : startEpochSec < searchLimit;
                for(; inBounds();){
                    const clampedStartEpochSec = clampIntlSampleEpochSec(startEpochSec);
                    const clampedEndEpochSec = clampIntlSampleEpochSec(endEpochSec);
                    const startOffsetSec = getSample(clampedStartEpochSec);
                    const endOffsetSec = getSample(clampedEndEpochSec);
                    if (startOffsetSec !== endOffsetSec) {
                        const split = getSplit(clampedStartEpochSec, clampedEndEpochSec);
                        pinch(split, startOffsetSec, endOffsetSec);
                        const transitionEpochSec = split[0];
                        if ((compareNumbers(transitionEpochSec, epochSec) || 1) === direction) {
                            return transitionEpochSec;
                        }
                    }
                    startEpochSec += inc, endEpochSec += inc;
                }
            }
            function pinch(split, startOffsetSec, endOffsetSec, forEpochSec) {
                let offsetSec;
                let splitDurSec;
                for(; (void 0 === forEpochSec || void 0 === (offsetSec = forEpochSec < split[0] ? startOffsetSec : forEpochSec >= split[1] ? endOffsetSec : void 0)) && (splitDurSec = split[1] - split[0]);){
                    const middleEpochSec = split[0] + Math.floor(splitDurSec / 2);
                    computeOffsetSec(middleEpochSec) === endOffsetSec ? split[1] = middleEpochSec : split[0] = middleEpochSec + 1;
                }
                return offsetSec;
            }
            return {
                Ae (zonedEpochSec) {
                    const wideOffsetSec0 = getOffsetSec(zonedEpochSec - 86400);
                    const wideOffsetSec1 = getOffsetSec(zonedEpochSec + 86400);
                    const wideUtcEpochSec0 = zonedEpochSec - wideOffsetSec0;
                    const wideUtcEpochSec1 = zonedEpochSec - wideOffsetSec1;
                    if (wideOffsetSec0 === wideOffsetSec1) {
                        return [
                            wideUtcEpochSec0
                        ];
                    }
                    const narrowOffsetSec0 = getOffsetSec(wideUtcEpochSec0);
                    return narrowOffsetSec0 === getOffsetSec(wideUtcEpochSec1) ? [
                        zonedEpochSec - narrowOffsetSec0
                    ] : wideOffsetSec0 > wideOffsetSec1 ? [
                        wideUtcEpochSec0,
                        wideUtcEpochSec1
                    ] : [];
                },
                ze: getOffsetSec,
                C (epochSec, direction) {
                    if (!(direction > 0 && epochSec >= 864e10)) {
                        if (direction < 0) {
                            if (epochSec <= minPossibleTransitionSec) {
                                return;
                            }
                            return epochSec > 4e9 ? searchTransition(epochSec, -1, epochSec - 94867200) ?? searchTransition(4e9, -1, minPossibleTransitionSec) : searchTransition(epochSec, -1, minPossibleTransitionSec);
                        }
                        return searchTransition(Math.max(epochSec, minPossibleTransitionSec) - 1, 1, Math.max(epochSec, Math.floor(Date.now() / 1e3)) + 94867200, epochSec);
                    }
                }
            };
        })(((format)=>(epochSec)=>{
                const intlParts = formatEpochMilliToPartsRecord(format, 1e3 * epochSec);
                return 86400 * isoPartsToEpochDays(((intlParts)=>{
                    const relatedYear = intlParts.relatedYear;
                    if (void 0 !== relatedYear) {
                        return parseInt(relatedYear);
                    }
                    const year = parseInt(intlParts.year);
                    return void 0 !== intlParts.era && "bce" === normalizeEraName(intlParts.era) ? 1 - year : year;
                })(intlParts), parseInt(intlParts.month), parseInt(intlParts.day)) + 3600 * parseInt(intlParts.hour) + 60 * parseInt(intlParts.minute) + parseInt(intlParts.second) - epochSec;
            })(format), ((timeZoneId)=>{
            const timeZoneName = timeZoneId.split("/").pop();
            return timeZonePeriodDaysByName[timeZoneName] || 19;
        })(id));
    }
    B(epochNano) {
        return this.me.ze(((epochNano)=>epochNanoToSecMod(epochNano)[0])(epochNano)) * nanoInSec;
    }
    O(isoDateTime) {
        const zonedEpochSec = 86400 * isoDateToEpochDays(isoDateTime) + timeFieldsToSec(isoDateTime);
        const subsecNano = timeFieldsToSubsecNano(isoDateTime);
        return this.me.Ae(zonedEpochSec).map((epochSec)=>checkEpochNanoInBounds(BigInt(epochSec) * bigNanoInSec + BigInt(subsecNano)));
    }
    C(epochNano, direction) {
        const [epochSec, subsecNano] = epochNanoToSecMod(epochNano);
        const resEpochSec = this.me.C(epochSec + (direction > 0 || subsecNano ? 1 : 0), direction);
        if (void 0 !== resEpochSec) {
            return BigInt(resEpochSec) * bigNanoInSec;
        }
    }
}
function createSplitTuple(startEpochSec, endEpochSec) {
    return [
        startEpochSec,
        endEpochSec
    ];
}
function computePeriod(epochSec, periodSec) {
    const startEpochSec = Math.floor(epochSec / periodSec) * periodSec;
    return [
        startEpochSec,
        startEpochSec + periodSec
    ];
}
function clampIntlSampleEpochSec(epochSec) {
    return constrainToRange(epochSec, -1e10, 864e10);
}
function refineMaybeZonedDateTimeObjectLike(refineTimeZoneString, calendar, bag) {
    const fields = readAndRefineBagFields(bag, getCalendarFieldNames(calendar, dateTimeAndZoneFieldNamesAlpha, dateTimeAndZoneFieldNamesWithEraAlpha), zonedDateTimeFieldRefiners, [], 0);
    const isZoned = void 0 !== fields.timeZone;
    const [year, monthCodeParts] = refineCalendarDateFields(fields, calendar);
    const isoDate = createDateFromRefinedFields(fields, calendar, year, monthCodeParts, 0);
    if (isZoned) {
        const timeFields = resolveTimeFields(fields);
        const timeZone = queryTimeZone(refineTimeZoneString(fields.timeZone));
        return {
            epochNanoseconds: getMatchingInstantFor(timeZone, combineDateAndTime(isoDate, timeFields), fields.offset),
            timeZone: timeZone,
            calendar: calendar
        };
    }
    return isoDate;
}
function refineZonedDateTimeObjectLike(refineTimeZoneString, calendar, bag, options) {
    const fields = readAndRefineBagFields(bag, getCalendarFieldNames(calendar, dateTimeAndZoneFieldNamesAlpha, dateTimeAndZoneFieldNamesWithEraAlpha), zonedDateTimeFieldRefiners, timeZoneFieldNames, 0);
    const timeZoneId = refineTimeZoneString(fields.timeZone);
    const [year, monthCodeParts] = refineCalendarDateFields(fields, calendar);
    const [overflow, offsetDisambig, epochDisambig] = refineZonedFieldOptions(options);
    const isoDate = createDateFromRefinedFields(fields, calendar, year, monthCodeParts, overflow);
    const timeFields = resolveTimeFields(fields, overflow);
    const timeZone = queryTimeZone(timeZoneId);
    return createZonedEpochNanoSlots(getMatchingInstantFor(timeZone, combineDateAndTime(isoDate, timeFields), fields.offset, offsetDisambig, epochDisambig), timeZone, calendar);
}
function refinePlainDateTimeObjectLike(calendar, bag, options) {
    const fields = readAndRefineBagFields(bag, getCalendarFieldNames(calendar, dateTimeFieldNamesAlpha, dateTimeFieldNamesWithEraAlpha), dateTimeFieldRefiners, [], 0);
    const [year, monthCodeParts] = refineCalendarDateFields(fields, calendar);
    const overflow = refineOverflowOptions(options);
    return createDateTimeFromRefinedFields(createDateFromRefinedFields(fields, calendar, year, monthCodeParts, overflow), resolveTimeFields(fields, overflow), calendar);
}
function refinePlainDateObjectLike(calendar, bag, options, requireFields = []) {
    const fields = readAndRefineBagFields(bag, getCalendarFieldNames(calendar, dateFieldNamesAlpha, dateFieldNamesWithEraAlpha), dateFieldRefiners, requireFields);
    const [year, monthCodeParts] = refineCalendarDateFields(fields, calendar);
    return createDateFromRefinedFields(fields, calendar, year, monthCodeParts, refineOverflowOptions(options));
}
function refinePlainYearMonthObjectLike(calendar, bag, options, requireFields) {
    const fields = readAndRefineBagFields(bag, getCalendarFieldNames(calendar, yearMonthFieldNamesAlpha, yearMonthFieldNamesWithEraAlpha), dateFieldRefiners, requireFields);
    const [year, monthCodeParts] = refineCalendarDateFields(fields, calendar, 1);
    return createYearMonthFromRefinedFields(fields, calendar, year, monthCodeParts, refineOverflowOptions(options));
}
function refinePlainMonthDayObjectLike(calendar, calendarAbsent, bag, options) {
    const fields = readAndRefineBagFields(bag, getCalendarFieldNames(calendar, dateFieldNamesAlpha, dateFieldNamesWithEraAlpha), dateFieldRefiners, dayFieldNamesAsc, 0);
    calendarAbsent && void 0 !== fields.month && void 0 === fields.monthCode && void 0 === fields.year && (fields.year = 1972);
    const [year, monthCodeParts] = refineMonthDayFields(fields, calendar);
    return createMonthDayFromRefinedFields(fields, calendar, year, monthCodeParts, refineOverflowOptions(options));
}
function refinePlainTimeObjectLike(bag, options) {
    return resolveTimeFields(readAndRefineBagFields(bag, timeFieldNamesAlpha, timeFieldRefiners, [], 1), refineOverflowOptions(options));
}
function refineDurationObjectLike(bag) {
    const durationFields = readAndRefineBagFields(bag, durationFieldNamesAlpha, durationFieldRefiners);
    return createDurationSlots(validateDurationFields({
        ...durationFieldDefaults,
        ...durationFields
    }));
}
function throwFailedParse(s) {
    throwRangeError(failedParse(s));
}
function parseInstant(s) {
    const organized = parseDateTimeLike(s = requireString(toPrimitiveWithStringHint(s)));
    let offsetNano;
    return organized || throwFailedParse(s), organized.I ? offsetNano = 0 : organized.offset ? offsetNano = parseOffsetNano(organized.offset) : throwFailedParse(s), createEpochNanoSlots(isoDateTimeAndOffsetToEpochNano(organized, offsetNano));
}
function parseRelativeToSlots(s, resolveCalendar) {
    const organized = parseDateTimeLike(requireString(s));
    return organized && organized.timeZoneId ? finalizeZonedDateTime(organized, resolveCalendar, void 0) : finalizeDate(parsePlainDateLike(s), resolveCalendar);
}
function parseZonedDateTime(s, resolveCalendar, options) {
    const organized = parseDateTimeLike(requireString(s));
    return organized && organized.timeZoneId || throwFailedParse(s), finalizeZonedDateTime(organized, resolveCalendar, options);
}
function parsePlainDateTime(s, resolveCalendar) {
    const organized = parsePlainDateLike(s);
    return checkIsoDateTimeInBounds(organized), {
        ...combineDateAndTime(organized, organized),
        calendar: resolveCalendar(organized.calendarId)
    };
}
function parsePlainDate(s, resolveCalendar) {
    return finalizeDate(parsePlainDateLike(s), resolveCalendar);
}
function parsePlainYearMonth(s, resolveCalendar) {
    const organized = parseYearMonthOnly(requireString(s)) || parsePlainDateLike(s);
    const calendar = resolveCalendar(organized.calendarId);
    return createDateSlots(checkIsoYearMonthInBounds(moveToStartOfMonth(calendar, checkIsoYearMonthInBounds(organized))), calendar);
}
function parsePlainMonthDay(s, resolveCalendar) {
    const organized = parseMonthDayOnly(requireString(s)) || parsePlainDateLike(s);
    if ("iso8601" === organized.calendarId) {
        return createDateSlots({
            ...organized,
            year: 1972
        }, resolveCalendar("iso8601"));
    }
    const { calendar: calendar } = finalizeDate(organized, resolveCalendar);
    const { year: origYear, month: origMonth, day: day } = computeCalendarDateFields(calendar, organized);
    const [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, origYear, origMonth);
    const yearMonthFields = calendar ? calendar.u(monthCodeNumber, isLeapMonth, day) : computeIsoYearMonthFieldsForMonthDay(monthCodeNumber, isLeapMonth);
    return yearMonthFields || throwRangeError("Cannot guess year"), createDateSlots(checkIsoDateInBounds(computeCalendarIsoFieldsFromParts(calendar, yearMonthFields.year, yearMonthFields.month, day)), calendar);
}
function parsePlainTime(s) {
    const organized = parseDateTimeLike(s = requireString(s)) || parseTimeOnly(s);
    return (!organized || !organized.qe || organized.I || parseYearMonthOnly(s) || parseMonthDayOnly(s)) && throwFailedParse(s), createTimeSlots(organized);
}
function parseDuration(s) {
    const parts = durationRegExp.exec(requireString(s));
    parts && !invalidDurationRegExp.test(s) || throwFailedParse(s);
    const fraction = nanoToGivenFields(3600 * parseSubsecNano(parts[7] || "") + 60 * parseSubsecNano(parts[9] || "") + parseSubsecNano(parts[11] || ""), 4, durationFieldNamesAsc);
    const durationFields = {
        ...fraction,
        years: parseInt0(parts[2]),
        months: parseInt0(parts[3]),
        weeks: parseInt0(parts[4]),
        days: parseInt0(parts[5]),
        hours: parseInt0(parts[6]),
        minutes: parseInt0(parts[8]) + fraction.minutes,
        seconds: parseInt0(parts[10]) + fraction.seconds
    };
    return createDurationSlots(validateDurationFields("-" === parts[1] ? negateDurationFields(durationFields) : durationFields));
}
function parseCalendarId(s) {
    const organized = parseDateTimeLike(s) || parseYearMonthOnly(s) || parseMonthDayOnly(s) || parseTimeOnly(s);
    return organized ? organized.calendarId : s;
}
function parseTimeZoneId(s) {
    const parsed = parseDateTimeLike(s);
    return parsed && (parsed.timeZoneId || parsed.I && "UTC" || parsed.offset) || s;
}
function parsePlainDateLike(s) {
    const organized = parseDateTimeLike(requireString(s));
    return organized && !organized.I || throwFailedParse(s), organized;
}
function finalizeZonedDateTime(organized, resolveCalendar, options) {
    const timeZone = queryTimeZone(resolveTimeZoneId(organized.timeZoneId));
    let epochNano;
    if (organized.qe) {
        const offsetNano = organized.offset ? parseOffsetNano(organized.offset) : void 0;
        const [, offsetDisambig, epochDisambig] = refineZonedFieldOptions(options);
        epochNano = getMatchingInstantFor(timeZone, organized, offsetNano, offsetDisambig, epochDisambig, !(timeZone.Z || void 0 === organized.offset || (offset = organized.offset, offset.length > 6)), organized.I);
    } else {
        refineZonedFieldOptions(options), epochNano = getStartOfDayInstantFor(timeZone, organized);
    }
    var offset;
    return checkEpochNanoInBounds(epochNano), createZonedEpochNanoSlots(epochNano, timeZone, resolveCalendar(organized.calendarId));
}
function finalizeDate(organized, resolveCalendar) {
    return createDateSlots(checkIsoDateInBounds(organized), resolveCalendar(organized.calendarId));
}
function timeRegExpStr(separatorIndex, leapSecondStr = "") {
    return `([01]\\d|2[0-3])(?:(:?)([0-5]\\d)(?:\\${separatorIndex}([0-5]\\d${leapSecondStr})(?:[.,](\\d{1,9}))?)?)?`;
}
const dateTimeRegExpStr = "((?!-0{6})[+-]\\d{6}|\\d{4})(-?)(0[1-9]|1[0-2])\\2(0[1-9]|[12]\\d|3[01])(?:[Tt ]" + timeRegExpStr(6, "|60") + "(?:([Zz])|(([+-])" + timeRegExpStr(14) + "))?)?";
const yearMonthRegExp = /*@__PURE__*/ createRegExp("((?!-0{6})[+-]\\d{6}|\\d{4})-?(0[1-9]|1[0-2])(?:\\[!?([+-](?:[01]\\d|2[0-3])(?::?[0-5]\\d)?|[a-zA-Z._][\\w.+-]*(?:/[a-zA-Z._][\\w.+-]*)*)\\])?((?:\\[!?[a-z_][a-z\\d_-]*=[a-zA-Z\\d]+(?:-[a-zA-Z\\d]+)*\\])*)");
const monthDayRegExp = /*@__PURE__*/ createRegExp("(?:--)?(0[1-9]|1[0-2])-?(0[1-9]|[12]\\d|3[01])(?:\\[!?([+-](?:[01]\\d|2[0-3])(?::?[0-5]\\d)?|[a-zA-Z._][\\w.+-]*(?:/[a-zA-Z._][\\w.+-]*)*)\\])?((?:\\[!?[a-z_][a-z\\d_-]*=[a-zA-Z\\d]+(?:-[a-zA-Z\\d]+)*\\])*)");
const dateTimeRegExp = /*@__PURE__*/ createRegExp(dateTimeRegExpStr + "(?:\\[!?([+-](?:[01]\\d|2[0-3])(?::?[0-5]\\d)?|[a-zA-Z._][\\w.+-]*(?:/[a-zA-Z._][\\w.+-]*)*)\\])?((?:\\[!?[a-z_][a-z\\d_-]*=[a-zA-Z\\d]+(?:-[a-zA-Z\\d]+)*\\])*)");
const annotationRegExp = /\[(!?)([^=]+)=([^\]]+)/g;
const durationRegExp = /^([+-])?P(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(?:T(?:(\d+)(?:[.,](\d{1,9}))?H)?(?:(\d+)(?:[.,](\d{1,9}))?M)?(?:(\d+)(?:[.,](\d{1,9}))?S)?)?$/i;
const invalidDurationRegExp = /[PT]$|[.,]\d+[HMS]./i;
function parseDateTimeLike(s) {
    const parts = dateTimeRegExp.exec(s);
    if (!parts) {
        return;
    }
    const organized = ((parts)=>({
            year: parseInt(parts[1]),
            month: parseInt(parts[3]),
            day: parseInt(parts[4]),
            ...nanoToTimeAndDay(parseSubsecNano(parts[9] || ""))[0],
            hour: parseInt0(parts[5]),
            minute: parseInt0(parts[7]),
            second: Math.min(parseInt0(parts[8]), 59),
            ...organizeAnnotationParts(parts[18], parts[19]),
            qe: !!parts[5],
            I: !!parts[10],
            offset: parts[11]
        }))(parts);
    return validateIsoDateFields(organized);
}
function parseYearMonthOnly(s) {
    const parts = yearMonthRegExp.exec(s);
    return parts ? requireIsoCalendar(((parts)=>({
            year: parseInt(parts[1]),
            month: parseInt(parts[2]),
            day: 1,
            ...organizeAnnotationParts(parts[3], parts[4])
        }))(parts)) : void 0;
}
function parseMonthDayOnly(s) {
    const parts = monthDayRegExp.exec(s);
    if (parts) {
        const organized = ((parts)=>({
                year: 1972,
                month: parseInt(parts[1]),
                day: parseInt(parts[2]),
                ...organizeAnnotationParts(parts[3], parts[4])
            }))(parts);
        if (allPropsEqual(calendarDateFieldNamesAsc, isoDate = organized, constrainIsoDateFields(isoDate))) {
            return requireIsoCalendar(organized);
        }
    }
    var isoDate;
}
function requireIsoCalendar(organized) {
    return "iso8601" !== organized.calendarId && throwFailedParse(organized.calendarId), organized;
}
function parseTimeOnly(s) {
    const organized = parseDateTimeLike(s.replace(/^t?/i, "0000-01-01T"));
    return organized && !organized.I ? organized : void 0;
}
function organizeAnnotationParts(timeZoneId, s) {
    let calendarIsCritical;
    const calendarIds = [];
    return s.replace(annotationRegExp, (whole, criticalStr, key, value)=>("u-ca" === key ? (calendarIds.push(value.toLowerCase()), calendarIsCritical || (calendarIsCritical = criticalStr)) : criticalStr && throwFailedParse(whole), "")), calendarIds.length > 1 && calendarIsCritical && throwFailedParse(s), {
        timeZoneId: timeZoneId,
        calendarId: calendarIds[0] || "iso8601"
    };
}
function mergeCalendarFields(calendar, baseFields, additionalFields) {
    const merged = Object.assign(Object.create(null), baseFields);
    return spliceFields(merged, additionalFields, monthFieldNames), getCalendarEraOrigins(calendar) && (spliceFields(merged, additionalFields, allYearFieldNames), calendar && calendar.je && spliceFields(merged, additionalFields, monthDayFieldNames, eraYearFieldNames)), merged;
}
function spliceFields(dest, additional, allPropNames, deletablePropNames) {
    let anyMatching = 0;
    const nonMatchingPropNames = [];
    for (const propName of allPropNames){
        void 0 !== additional[propName] ? anyMatching = 1 : nonMatchingPropNames.push(propName);
    }
    if (Object.assign(dest, additional), anyMatching) {
        for (const deletablePropName of deletablePropNames || nonMatchingPropNames){
            delete dest[deletablePropName];
        }
    }
}
function mergeZonedDateTimeFields(calendar, zonedDateTimeSlots, modFields) {
    const validFieldNames = getCalendarFieldNames(calendar, dateTimeAndOffsetFieldNamesAlpha, dateTimeAndOffsetFieldNamesWithEraAlpha);
    const zonedSlots = zonedEpochSlotsToIso(zonedDateTimeSlots);
    const { year: year, month: month, day: day } = computeCalendarDateFields(calendar, zonedSlots);
    const origFields = {
        year: year,
        monthCode: computeMonthCode(calendar, year, month),
        day: day,
        hour: zonedSlots.hour,
        minute: zonedSlots.minute,
        second: zonedSlots.second,
        millisecond: zonedSlots.millisecond,
        microsecond: zonedSlots.microsecond,
        nanosecond: zonedSlots.nanosecond,
        offset: zonedSlots.offsetNanoseconds
    };
    const partialFields = readAndRefineBagFields(modFields, validFieldNames, zonedDateTimeFieldRefiners);
    const mergedCalendarFields = mergeCalendarFields(calendar, origFields, partialFields);
    return [
        {
            ...origFields,
            ...partialFields
        },
        mergedCalendarFields
    ];
}
function mergeDateTimeFields(calendar, plainDateTimeSlots, modFields) {
    const validFieldNames = getCalendarFieldNames(calendar, dateTimeFieldNamesAlpha, dateTimeFieldNamesWithEraAlpha);
    const { year: year, month: month, day: day } = computeCalendarDateFields(calendar, plainDateTimeSlots);
    const origFields = {
        year: year,
        monthCode: computeMonthCode(calendar, year, month),
        day: day,
        hour: plainDateTimeSlots.hour,
        minute: plainDateTimeSlots.minute,
        second: plainDateTimeSlots.second,
        millisecond: plainDateTimeSlots.millisecond,
        microsecond: plainDateTimeSlots.microsecond,
        nanosecond: plainDateTimeSlots.nanosecond
    };
    const partialFields = readAndRefineBagFields(modFields, validFieldNames, dateTimeFieldRefiners);
    const mergedCalendarFields = mergeCalendarFields(calendar, origFields, partialFields);
    return [
        {
            ...origFields,
            ...partialFields
        },
        mergedCalendarFields
    ];
}
function mergeDateFields(calendar, plainDateSlots, modFields) {
    const validFieldNames = getCalendarFieldNames(calendar, dateFieldNamesAlpha, dateFieldNamesWithEraAlpha);
    const { year: year, month: month, day: day } = computeCalendarDateFields(calendar, plainDateSlots);
    return mergeCalendarFields(calendar, {
        year: year,
        monthCode: computeMonthCode(calendar, year, month),
        day: day
    }, readAndRefineBagFields(modFields, validFieldNames, dateFieldRefiners));
}
function mergeYearMonthFields(calendar, plainYearMonthSlots, modFields) {
    const validFieldNames = getCalendarFieldNames(calendar, yearMonthFieldNamesAlpha, yearMonthFieldNamesWithEraAlpha);
    const { year: year, month: month } = computeCalendarDateFields(calendar, plainYearMonthSlots);
    return mergeCalendarFields(calendar, {
        year: year,
        monthCode: computeMonthCode(calendar, year, month)
    }, readAndRefineBagFields(modFields, validFieldNames, dateFieldRefiners));
}
function mergeMonthDayFields(calendar, plainMonthDaySlots, modFields) {
    const validFieldNames = getCalendarFieldNames(calendar, dateFieldNamesAlpha, dateFieldNamesWithEraAlpha);
    const { year: year, month: month, day: day } = computeCalendarDateFields(calendar, plainMonthDaySlots);
    return mergeCalendarFields(calendar, {
        monthCode: computeMonthCode(calendar, year, month),
        day: day
    }, readAndRefineBagFields(modFields, validFieldNames, dateFieldRefiners));
}
function createZonedDateTimeFromMergedFields(zonedDateTimeSlots, mergedAllFields, calendarFields, year, monthCodeParts, overflow, offsetDisambig, epochDisambig) {
    const { calendar: calendar, timeZone: timeZone } = zonedDateTimeSlots;
    return createZonedEpochNanoSlots(getMatchingInstantFor(timeZone, combineDateAndTime(createDateFromRefinedFields(calendarFields, calendar, year, monthCodeParts, overflow), constrainTimeFields(mergedAllFields, overflow)), mergedAllFields.offset, offsetDisambig, epochDisambig), timeZone, calendar);
}
function createDateTimeFromMergedFields(mergedAllFields, calendarFields, calendar, year, monthCodeParts, overflow) {
    return createDateTimeFromRefinedFields(createDateFromRefinedFields(calendarFields, calendar, year, monthCodeParts, overflow), constrainTimeFields(mergedAllFields, overflow), calendar);
}
function mergeTimeFields(initialFields, modFields) {
    return {
        ...pluckProps(timeFieldNamesAlpha, initialFields),
        ...readAndRefineBagFields(modFields, timeFieldNamesAlpha, timeFieldRefiners)
    };
}
function mergeDurationFields(slots, fields) {
    return createDurationSlots((initialFields = slots, modFields = fields, validateDurationFields({
        ...initialFields,
        ...readAndRefineBagFields(modFields, durationFieldNamesAlpha, durationFieldRefiners)
    })));
    //TURBOPACK unreachable
    ;
    var initialFields, modFields;
}
function computeMonthCode(calendar, year, month) {
    const [monthCodeNumber, isLeapMonth] = computeCalendarMonthCodeParts(calendar, year, month);
    return formatMonthCode(monthCodeNumber, isLeapMonth);
}
function totalDuration(refineRelativeTo, slots, options) {
    const [totalUnit, relativeToSlots] = ((options, refineRelativeTo)=>{
        const relativeToInternals = refineRelativeTo((options = normalizeOptionsOrString(options, "unit")).relativeTo);
        let totalUnit = coerceTotalUnit(options);
        return totalUnit = requirePropDefined("unit", totalUnit), [
            totalUnit,
            relativeToInternals
        ];
    })(options, refineRelativeTo);
    const maxDurationUnit = getMaxDurationUnit(slots);
    const maxUnit = Math.max(totalUnit, maxDurationUnit);
    const isZoned = relativeToSlots && isZonedEpochSlots(relativeToSlots);
    if (!relativeToSlots && isUniformUnit(maxUnit, isZoned)) {
        return totalDayTimeDuration(slots, totalUnit);
    }
    if (relativeToSlots || throwRangeError("Missing relativeTo"), !slots.sign && (!isZoned || totalUnit < 6)) {
        return 0;
    }
    const [balancedDuration, endEpochNano, relativeOps] = spanRelativeDuration(relativeToSlots, slots, totalUnit);
    return isUniformUnit(totalUnit, isZoned) ? totalDayTimeDuration(balancedDuration, totalUnit) : ((durationFields, endEpochNano, totalUnit, relativeOps)=>{
        const fieldName = durationFieldNamesAsc[totalUnit];
        const baseDurationFields = clearDurationFields(totalUnit, durationFields);
        return totalRelativeUnit(durationFields[fieldName], computeDurationSign(durationFields) || 1, endEpochNano, (value)=>(baseDurationFields[fieldName] = value, moveRelativeMarkerToEpochNano(relativeOps, baseDurationFields)));
    })(balancedDuration, endEpochNano, totalUnit, relativeOps);
}
function totalDayTimeDuration(durationFields, totalUnit) {
    return divideBigNanoToExactNumber(durationDayTimeToBigNano(durationFields), unitNanoMap[totalUnit]);
}
function instantToZonedDateTime(instantSlots, timeZone, calendar) {
    return createZonedEpochNanoSlots(instantSlots.epochNanoseconds, timeZone, calendar);
}
function zonedDateTimeToInstant(zonedDateTimeSlots0) {
    return createEpochNanoSlots(zonedDateTimeSlots0.epochNanoseconds);
}
function zonedDateTimeToDateTime(zonedDateTimeSlots0) {
    return createDateTimeSlots(zonedEpochSlotsToIso(zonedDateTimeSlots0), zonedDateTimeSlots0.calendar);
}
function zonedDateTimeToDate(zonedDateTimeSlots0) {
    return createDateSlots(zonedEpochSlotsToIso(zonedDateTimeSlots0), zonedDateTimeSlots0.calendar);
}
function zonedDateTimeToTime(zonedDateTimeSlots0) {
    return createTimeSlots(zonedEpochSlotsToIso(zonedDateTimeSlots0));
}
function dateTimeToZonedDateTime(plainDateTimeSlots, timeZone, epochDisambig) {
    return createZonedEpochNanoSlots(checkEpochNanoInBounds(getSingleInstantFor(timeZone, plainDateTimeSlots, epochDisambig)), timeZone, plainDateTimeSlots.calendar);
}
function dateToZonedDateTime(plainDateSlots, timeZone, timeFields) {
    let epochNano;
    return epochNano = timeFields ? getSingleInstantFor(timeZone, combineDateAndTime(plainDateSlots, timeFields)) : getStartOfDayInstantFor(timeZone, combineDateAndTime(plainDateSlots, timeFieldDefaults)), createZonedEpochNanoSlots(epochNano, timeZone, plainDateSlots.calendar);
}
function yearMonthToDate(calendar, input, bag) {
    return mergeFieldsIntoDate(calendar, pluckProps(getCalendarFieldNames(calendar, yearMonthCodeFieldNamesAlpha, yearMonthCodeFieldNamesWithEraAlpha), input), readAndRefineBagFields((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireObjectLike"])(bag), dayFieldNamesAsc, dateFieldRefiners, []));
}
function monthDayToDate(calendar, input, bag) {
    const extraFieldNames = getCalendarFieldNames(calendar, yearFieldNamesAsc, yearFieldNamesWithEraAlpha);
    return mergeFieldsIntoDate(calendar, pluckProps(monthCodeDayFieldNamesAlpha, input), readAndRefineBagFields((0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireObjectLike"])(bag), extraFieldNames, dateFieldRefiners, []));
}
function fieldsToMonthDay(calendar, input) {
    const refinedFields = readAndRefineBagFields(input, monthCodeDayFieldNamesAlpha, dateFieldRefiners);
    const [year, monthCodeParts] = refineMonthDayFields(refinedFields, calendar);
    return createMonthDayFromRefinedFields(refinedFields, calendar, year, monthCodeParts, 0);
}
function fieldsToYearMonth(calendar, input) {
    const refinedFields = readAndRefineBagFields(input, getCalendarFieldNames(calendar, yearMonthCodeFieldNamesAlpha, yearMonthCodeFieldNamesWithEraAlpha), dateFieldRefiners);
    const [year, monthCodeParts] = refineCalendarDateFields(refinedFields, calendar, 1);
    return createYearMonthFromRefinedFields(refinedFields, calendar, year, monthCodeParts, 0);
}
function mergeFieldsIntoDate(calendar, inputFields, extraFields) {
    const mergedFieldNames = getCalendarFieldNames(calendar, yearMonthCodeDayFieldNamesAlpha, yearMonthCodeDayFieldNamesWithEraAlpha);
    let mergedFields = mergeCalendarFields(calendar, inputFields, extraFields);
    mergedFields = readAndRefineBagFields(mergedFields, mergedFieldNames, dateFieldRefiners, []);
    const [year, monthCodeParts] = refineCalendarDateFields(mergedFields, calendar);
    return createDateFromRefinedFields(mergedFields, calendar, year, monthCodeParts, 0);
}
function epochMilliToInstant(epochMilli) {
    return createEpochNanoSlots(checkEpochNanoInBounds(BigInt(toStrictInteger(epochMilli)) * bigNanoInMilli));
}
function epochNanoToInstant(epochNano) {
    return createEpochNanoSlots(checkEpochNanoInBounds(toBigInt(epochNano)));
}
function applyPlainFormatTimeZone(options) {
    return options.timeZone = "UTC", [
        "full",
        "long"
    ].includes(options.timeStyle) && (options.timeStyle = "medium"), options;
}
function applyZonedFormatTimeZone(options, timeZoneId) {
    return void 0 !== options.timeZone && throwTypeError("Cannot specify TimeZone"), options.timeZone = timeZoneId, options;
}
function checkResolvedCalendarCompatible(format, slots, strictCalendarCheck) {
    const resolvedCalendarId = format.resolvedOptions().calendar;
    !strictCalendarCheck && slots.calendar === isoCalendarImpl || getCalendarSlotId(slots.calendar) === resolvedCalendarId || throwRangeError("Mismatching Calendars");
}
function createOptionsTransformer(shapeFieldNames, invalidShapeFieldNames, ignoredFieldNames, defaultShapeFields, dateStyleReplacementFields) {
    const shapeFieldNameSet = new Set(shapeFieldNames);
    const invalidShapeFieldNameSet = new Set(invalidShapeFieldNames);
    const ignoredFieldNameSet = new Set(ignoredFieldNames);
    return (options, allowPartialOverlap)=>{
        let dateStyle;
        let timeStyle;
        const granularShapeFields = {};
        const modifierFields = {};
        const otherFields = {};
        let hasInvalidGranularShapeFields = 0;
        let hasInvalidStyleFields = 0;
        for (const name of Object.keys(options)){
            const value = options[name];
            void 0 === value || ignoredFieldNameSet.has(name) || (shapeFieldNameSet.has(name) ? "dateStyle" === name ? dateStyle = value : "timeStyle" === name ? timeStyle = value : granularShapeFields[name] = value : "era" === name ? modifierFields[name] = value : invalidShapeFieldNameSet.has(name) ? "dateStyle" === name || "timeStyle" === name ? hasInvalidStyleFields = 1 : hasInvalidGranularShapeFields = 1 : otherFields[name] = value);
        }
        const hasDateStyle = void 0 !== dateStyle;
        const hasTimeStyle = void 0 !== timeStyle;
        const hasAnyStyle = hasDateStyle || hasTimeStyle;
        const hasGranularShapeFields = Object.keys(granularShapeFields).length > 0;
        const hasInvalids = hasInvalidGranularShapeFields || hasInvalidStyleFields;
        const hasShapeFields = hasGranularShapeFields || hasDateStyle || hasTimeStyle;
        const hasModifierFields = Object.keys(modifierFields).length > 0;
        (!allowPartialOverlap && hasInvalids || allowPartialOverlap && hasInvalids && !hasShapeFields || hasAnyStyle && (hasGranularShapeFields || hasModifierFields || hasInvalidGranularShapeFields)) && throwTypeError("Invalid formatting options");
        const transformedOptions = {};
        return hasAnyStyle || hasShapeFields || Object.assign(transformedOptions, defaultShapeFields), Object.assign(transformedOptions, granularShapeFields, modifierFields, otherFields), hasDateStyle && (dateStyleReplacementFields ? Object.assign(transformedOptions, dateStyleReplacementFields[dateStyle]) : transformedOptions.dateStyle = dateStyle), hasTimeStyle && (transformedOptions.timeStyle = timeStyle), transformedOptions;
    };
}
const dateDefaultShapeFields = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
};
const timeDefaultShapeFields = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
};
const dateTimeDefaultShapeFields = /*@__PURE__*/ Object.assign({}, dateDefaultShapeFields, timeDefaultShapeFields);
const dateShapeFieldNames = [
    "weekday",
    "year",
    "month",
    "day",
    "dateStyle"
];
const timeShapeFieldNames = [
    "dayPeriod",
    "hour",
    "minute",
    "second",
    "fractionalSecondDigits",
    "timeStyle"
];
const dateTimeShapeFieldNames = /*@__PURE__*/ dateShapeFieldNames.concat(timeShapeFieldNames);
const yearMonthIgnoredFieldNames = /*@__PURE__*/ [
    "weekday",
    "day"
].concat(timeShapeFieldNames);
const monthDayIgnoredFieldNames = /*@__PURE__*/ [
    "weekday",
    "year"
].concat(timeShapeFieldNames);
const transformInstantOptions = /*@__PURE__*/ createOptionsTransformer(dateTimeShapeFieldNames, [], [], dateTimeDefaultShapeFields);
const transformZonedOptions = /*@__PURE__*/ createOptionsTransformer(dateTimeShapeFieldNames, [], [], {
    ...dateTimeDefaultShapeFields,
    timeZoneName: "short"
});
const transformDateTimeOptions = /*@__PURE__*/ createOptionsTransformer(dateTimeShapeFieldNames, [], [
    "timeZoneName"
], dateTimeDefaultShapeFields);
const transformDateOptions = /*@__PURE__*/ createOptionsTransformer(dateShapeFieldNames, timeShapeFieldNames, [
    "timeZoneName"
], dateDefaultShapeFields);
const transformTimeOptions = /*@__PURE__*/ createOptionsTransformer(timeShapeFieldNames, dateShapeFieldNames, [
    "timeZoneName",
    "era"
], timeDefaultShapeFields);
const transformYearMonthOptions = /*@__PURE__*/ createOptionsTransformer([
    "year",
    "month",
    "dateStyle"
], yearMonthIgnoredFieldNames, [
    "timeZoneName"
], {
    year: "numeric",
    month: "numeric"
}, {
    full: {
        year: "numeric",
        month: "long"
    },
    long: {
        year: "numeric",
        month: "long"
    },
    medium: {
        year: "numeric",
        month: "short"
    },
    short: {
        year: "2-digit",
        month: "numeric"
    }
});
const transformMonthDayOptions = /*@__PURE__*/ createOptionsTransformer([
    "month",
    "day",
    "dateStyle"
], monthDayIgnoredFieldNames, [
    "timeZoneName",
    "era"
], {
    month: "numeric",
    day: "numeric"
}, {
    full: {
        month: "long",
        day: "numeric"
    },
    long: {
        month: "long",
        day: "numeric"
    },
    medium: {
        month: "short",
        day: "numeric"
    },
    short: {
        month: "numeric",
        day: "numeric"
    }
});
function zonedDateTimeWithPlainTime(zonedDateTimeSlots, plainTimeFields) {
    const { timeZone: timeZone } = zonedDateTimeSlots;
    const newIsoDateTime = combineDateAndTime(zonedEpochSlotsToIso(zonedDateTimeSlots), plainTimeFields || timeFieldDefaults);
    return createZonedEpochNanoSlots(plainTimeFields ? getSingleInstantFor(timeZone, newIsoDateTime) : getStartOfDayInstantFor(timeZone, newIsoDateTime), timeZone, zonedDateTimeSlots.calendar);
}
function refineDirectionOptions(options) {
    const normalizedOptions = normalizeOptionsOrString(options, "direction");
    const res = coerceDirection(normalizedOptions, 0);
    return res || throwRangeError(invalidEntity("direction", res)), res;
}
function getCurrentIsoDateTime(timeZone) {
    const epochNano = getCurrentEpochNano();
    const offsetNano = timeZone.B(epochNano);
    return epochNanoToIsoDateTime(epochNano + BigInt(offsetNano));
}
function getCurrentEpochNano() {
    return BigInt(Date.now()) * bigNanoInMilli;
}
function getCurrentTimeZoneId() {
    return (new RawDateTimeFormat).resolvedOptions().timeZone || "UTC";
}
function createDateTimeFormatShell(createArgsProvider, transformOptions = identity) {
    const internalsMap = new WeakMap;
    function getInternals(format) {
        const internals = internalsMap.get(format);
        return internals || throwTypeError("Invalid calling context"), internals;
    }
    class ShimDateTimeFormat {
        constructor(locales, options = Object.create(null)){
            const transformedOptions = transformOptions(options);
            const observedOptionNames = [];
            const trackedOptions = new Proxy(Object.create(null), {
                get (_target, name) {
                    const value = transformedOptions[name];
                    return void 0 !== value && observedOptionNames.push(name), value;
                }
            });
            const baseFormat = new RawDateTimeFormat(locales, trackedOptions);
            const resolvedOptions = baseFormat.resolvedOptions();
            const copiedOptions = pluckProps(observedOptionNames, resolvedOptions);
            internalsMap.set(this, {
                $: createArgsProvider({
                    t: baseFormat,
                    Ce: resolvedOptions.locale,
                    F: copiedOptions,
                    Ee: transformedOptions
                }),
                t: baseFormat
            });
        }
        get format() {
            const internals = getInternals(this);
            return internals.we || (internals.we = (record)=>{
                const [format, ...rest] = internals.$.A(record);
                return format.format(...rest);
            });
        }
        formatToParts(record) {
            const { $: argsProvider } = getInternals(this);
            const [format, ...rest] = argsProvider.A(record);
            return format.formatToParts(...rest);
        }
        resolvedOptions() {
            return getInternals(this).t.resolvedOptions();
        }
    }
    const { prototype: prototype } = ShimDateTimeFormat;
    function DateTimeFormat(locales, options) {
        return new ShimDateTimeFormat(locales, options);
    }
    RawDateTimeFormat.prototype.formatRange && Object.defineProperties(prototype, createPropDescriptors({
        formatRange (record0, record1) {
            const { $: argsProvider } = getInternals(this);
            const [format, epochMilli0, epochMilli1] = argsProvider.v(record0, record1);
            return format.formatRange(epochMilli0, epochMilli1);
        },
        formatRangeToParts (record0, record1) {
            const { $: argsProvider } = getInternals(this);
            const [format, epochMilli0, epochMilli1] = argsProvider.v(record0, record1);
            return format.formatRangeToParts(epochMilli0, epochMilli1);
        }
    }));
    const rawStaticDescriptors = Object.getOwnPropertyDescriptors(RawDateTimeFormat);
    return rawStaticDescriptors.prototype.value = prototype, Object.defineProperties(DateTimeFormat, rawStaticDescriptors), prototype.constructor = DateTimeFormat, Object.defineProperties(prototype, createStringTagDescriptors("Intl.DateTimeFormat")), DateTimeFormat;
}
function countEpochNanoUnit(start, end, unit, [roundingInc, roundingMode]) {
    let diffNano = end - start;
    return void 0 !== roundingMode && (diffNano = roundBigNanoToInc(diffNano, computeBigNanoInc(unit, roundingInc), roundingMode)), divideBigNanoToExactNumber(diffNano, unitNanoMap[unit]);
}
function countDateTimeUnit(start, end, unit, rounding) {
    return countEpochNanoUnit(isoDateTimeToEpochNano(start), isoDateTimeToEpochNano(end), unit, rounding);
}
function countTimeUnit(start, end, unit, [roundingInc, roundingMode]) {
    let diffNano = timeFieldsToNano(end) - timeFieldsToNano(start);
    return void 0 !== roundingMode && (diffNano = roundNumberToInc(diffNano, computeNanoInc(unit, roundingInc), roundingMode)), divideBigNanoToExactNumber(BigInt(diffNano), unitNanoMap[unit]);
}
function countEpochNanoDays(startEpochNano, endEpochNano, originTimeNano, [roundingInc, roundingMode]) {
    let diffNano = endEpochNano - startEpochNano;
    if (void 0 !== roundingMode) {
        diffNano = roundBigNanoToInc(diffNano, computeBigNanoInc(6, roundingInc), roundingMode);
    } else if (diffNano) {
        const originTimeBigNano = BigInt(originTimeNano);
        checkIsoDateTimeEpochNanoInBounds(startEpochNano - originTimeBigNano), checkIsoDateTimeEpochNanoInBounds(endEpochNano - originTimeBigNano);
    }
    return divideBigNanoToExactNumber(diffNano, unitNanoMap[6]);
}
function countYearMonthUnit(calendar, isoDate0, isoDate1, unit, rounding) {
    const start = moveToStartOfMonth(calendar, isoDate0);
    const end = moveToStartOfMonth(calendar, isoDate1);
    return compareIsoDates(start, end) ? (checkIsoDateInBounds(start), checkIsoDateInBounds(end), countRelativeUnit(unit, {
        he: ()=>diffCalendarDates(calendar, start, end, unit),
        le: createDateRelativeOps(calendar, start),
        ie: isoDateToEpochNano(end)
    }, rounding, 0, 8 === unit)) : 0;
}
function countRelativeUnit(unit, relativeUnitDiff, [roundingInc, roundingMode], isZoned, isPrecisionUnit) {
    const { he: diffExact, le: relativeOps } = relativeUnitDiff;
    const durationFields = diffExact();
    let { ie: endEpochNano } = relativeUnitDiff;
    return computeDurationSign(durationFields) ? void 0 !== roundingMode ? isPrecisionUnit && 1 === roundingInc ? durationFields[durationFieldNamesAsc[unit]] : resolveDurationUnit(unit, durationFields, endEpochNano, relativeOps, roundingInc, roundingMode) : (isZoned ? endEpochNano = checkEpochNanoInBounds(moveRelativeMarkerToEpochNano(relativeOps, {
        ...durationFields,
        ...durationTimeFieldDefaults
    }) + durationTimeToBigNano(durationFields)) : (checkIsoDateTimeEpochNanoInBounds(relativeOps.ne), checkIsoDateTimeEpochNanoInBounds(endEpochNano)), resolveDurationUnit(unit, durationFields, endEpochNano, relativeOps, 1, void 0)) : 0;
}
function countDateWeeks(originIsoDate, endEpochNano, [roundingInc, roundingMode]) {
    const originEpochNano = isoDateToEpochNano(originIsoDate);
    const diffNano = endEpochNano - originEpochNano;
    if (!diffNano) {
        return 0;
    }
    void 0 === roundingMode && (checkIsoDateTimeEpochNanoInBounds(originEpochNano), checkIsoDateTimeEpochNanoInBounds(endEpochNano));
    const wholeWeeks = Number(diffNano / (7n * bigNanoInUtcDay));
    const sign = diffNano < 0n ? -1 : 1;
    const moveWeeksToEpochNano = (weeks)=>{
        return weeks ? (((epochNano = originEpochNano + BigInt(weeks) * bigNanoInUtcDay * 7n) < plainDateEpochNanoMin || epochNano > epochNanoMax) && throwRangeError(outOfBoundsDate), epochNano) : originEpochNano;
        //TURBOPACK unreachable
        ;
        var epochNano;
    };
    return void 0 === roundingMode ? totalRelativeUnit(wholeWeeks, sign, endEpochNano, moveWeeksToEpochNano) : roundRelativeUnit(wholeWeeks, sign, endEpochNano, moveWeeksToEpochNano, roundingInc, roundingMode);
}
function countZonedDayWeekUnit(unit, timeZone, startZoned, endZoned, [roundingInc, roundingMode]) {
    const daysInUnit = 7 === unit ? 7 : 1;
    const startEpochNano = startZoned.epochNanoseconds;
    const sign = endZoned.epochNanoseconds > startEpochNano ? 1 : -1;
    const originIsoDateTime = zonedEpochSlotsToIso(startZoned);
    let deltaDays = 0;
    let remainderNano;
    if (compareIsoDates(originIsoDateTime, zonedEpochSlotsToIso(endZoned))) {
        const [startIsoDateTime, endIsoDate, timeNano] = prepareZonedEpochDiff(timeZone, startZoned, endZoned, sign);
        deltaDays = isoDateToEpochDays(endIsoDate) - isoDateToEpochDays(startIsoDateTime), remainderNano = timeNano;
    } else {
        remainderNano = Number(endZoned.epochNanoseconds - startEpochNano);
    }
    const moveByDays = (days)=>days ? getSingleInstantFor(timeZone, combineDateAndTime(checkIsoDateInBounds(moveDateByDays(originIsoDateTime, days)), originIsoDateTime)) : startEpochNano;
    const endEpochNano = void 0 === roundingMode ? checkEpochNanoInBounds(moveByDays(deltaDays) + BigInt(remainderNano)) : endZoned.epochNanoseconds;
    const wholeValue = Math.trunc(deltaDays / daysInUnit);
    const moveValueToEpochNano = (value)=>moveByDays(value * daysInUnit);
    return void 0 === roundingMode ? totalRelativeUnit(wholeValue, sign, endEpochNano, moveValueToEpochNano) : roundRelativeUnit(wholeValue, sign, endEpochNano, moveValueToEpochNano, roundingInc, roundingMode);
}
function resolveDurationUnit(unit, durationFields, endEpochNano, relativeOps, unitWindowInc, roundingMode) {
    const sign = computeDurationSign(durationFields);
    const fieldName = durationFieldNamesAsc[unit];
    const moveValueToEpochNano = (value)=>moveRelativeMarkerToEpochNano(relativeOps, {
            ...durationFieldDefaults,
            [fieldName]: value
        });
    return void 0 === roundingMode ? totalRelativeUnit(durationFields[fieldName], sign, endEpochNano, moveValueToEpochNano) : roundRelativeUnit(durationFields[fieldName], sign, endEpochNano, moveValueToEpochNano, unitWindowInc, roundingMode);
}
function moveToRefinedDayOfYear(calendar, isoDate, dayOfYear, overflow) {
    return moveDateByDays(isoDate, clampEntity("dayOfMonth", dayOfYear, 1, computeCalendarDaysInYear(calendar, isoDate), overflow) - computeCalendarDayOfYear(calendar, isoDate));
}
function moveToRefinedDayOfMonth(calendar, isoDate, day, overflow) {
    return moveDateByDays(isoDate, clampEntity("day", day, 1, computeCalendarDaysInMonth(calendar, isoDate), overflow) - computeCalendarDateFields(calendar, isoDate).day);
}
function moveToRefinedDayOfWeek(isoDate, dayOfWeek, overflow) {
    return moveDateByDays(isoDate, clampEntity("dayOfWeek", dayOfWeek, 1, 7, overflow) - computeIsoDayOfWeek(isoDate));
}
function moveToRefinedWeekOfYear(calendar, isoDate, weekOfYear, overflow) {
    calendar !== isoCalendarImpl && throwRangeError(unsupportedWeekNumbers);
    const { weekOfYear: currentWeekOfYear, De: weeksInYear } = computeIsoWeekFields(isoDate);
    return moveDateByDays(isoDate, 7 * (clampEntity("weekOfYear", weekOfYear, 1, weeksInYear, overflow) - currentWeekOfYear));
}
function computeDayFloor(slots) {
    return combineDateAndTime(slots, timeFieldDefaults);
}
function computeYearFloor(calendar, slots) {
    const { year: year0 } = computeCalendarDateFields(calendar, slots);
    return computeCalendarDateTimeFromParts(calendar, year0);
}
function computeMonthFloor(calendar, slots) {
    const { year: year0, month: month0 } = computeCalendarDateFields(calendar, slots);
    return computeCalendarDateTimeFromParts(calendar, year0, month0);
}
function computeIsoWeekFloor(_calendar, slots) {
    return combineDateAndTime(moveDateByDays(slots, 1 - computeIsoDayOfWeek(slots)), timeFieldDefaults);
}
function computeYearCeil(calendar, slots) {
    return computeYearInterval(calendar, slots)[1];
}
function computeMonthCeil(calendar, slots) {
    return computeMonthInterval(calendar, slots)[1];
}
function computeIsoWeekCeil(calendar, slots) {
    return combineDateAndTime(moveDateByDays(computeIsoWeekFloor(0, slots), 7), timeFieldDefaults);
}
function computeDayCeil(_calendar, slots) {
    return combineDateAndTime(moveDateByDays(slots, 1), timeFieldDefaults);
}
function computeYearInterval(calendar, slots) {
    return [
        computeYearFloor(calendar, slots),
        computeCalendarDateTimeFromParts(calendar, computeCalendarDateFields(calendar, slots).year + 1)
    ];
}
function computeMonthInterval(calendar, slots) {
    const isoDateTime0 = computeMonthFloor(calendar, slots);
    const { year: year, month: month } = computeCalendarDateFields(calendar, slots);
    const { year: year1, month: month1 } = addCalendarMonths(calendar, year, month, 1);
    return [
        isoDateTime0,
        computeCalendarDateTimeFromParts(calendar, year1, month1)
    ];
}
function computeIsoWeekInterval(calendar, slots) {
    const isoDateTime0 = computeIsoWeekFloor(0, slots);
    return [
        isoDateTime0,
        combineDateAndTime(moveDateByDays(isoDateTime0, 7), timeFieldDefaults)
    ];
}
function roundDateToInterval(computeInterval, calendar, slots, roundingMode) {
    return roundEpochNanoToInterval(computeInterval, calendar, slots, isoDateToEpochNano(slots), roundingMode);
}
function computeCalendarDateTimeFromParts(calendar, year, month = 1) {
    return combineDateAndTime(computeCalendarIsoFieldsFromParts(calendar, year, month, 1), timeFieldDefaults);
}
function roundDateTimeToInterval(computeInterval, calendar, slots, roundingMode) {
    return roundEpochNanoToInterval(computeInterval, calendar, slots, isoDateTimeToEpochNano(slots), roundingMode);
}
function roundEpochNanoToInterval(computeInterval, calendar, slots, epochNano, roundingMode) {
    const [isoDateTime0, isoDateTime1] = computeInterval(calendar, slots);
    return roundWithMode(computeEpochNanoFrac(epochNano, isoDateTimeToEpochNano(isoDateTime0), isoDateTimeToEpochNano(isoDateTime1)), roundingMode) ? isoDateTime1 : isoDateTime0;
}
;
}),
"[project]/newServer/notesphere_server/node_modules/temporal-polyfill/chunks/root.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeTemporal",
    ()=>NativeTemporal
]);
const NativeTemporal = globalThis.Temporal;
;
}),
"[project]/newServer/notesphere_server/node_modules/temporal-polyfill/global.esm.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$shim$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-polyfill/shim.js [app-route] (ecmascript)");
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$shim$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["install"])();
}),
"[project]/newServer/notesphere_server/node_modules/temporal-polyfill/shim.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "install",
    ()=>install,
    "installImplementation",
    ()=>installImplementation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-polyfill/chunks/internal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-polyfill/chunks/root.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$classApi$2d$basic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/newServer/notesphere_server/node_modules/temporal-polyfill/chunks/classApi-basic.js [app-route] (ecmascript)");
;
;
;
function installImplementation() {
    Object.defineProperties(globalThis, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPropDescriptors"])({
        Temporal: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$classApi$2d$basic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Temporal"]
    })), Object.defineProperties(Intl, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPropDescriptors"])({
        DateTimeFormat: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$classApi$2d$basic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTimeFormat"]
    })), Object.defineProperties(Date.prototype, (0, __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$internal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPropDescriptors"])({
        toTemporalInstant: __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$classApi$2d$basic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toTemporalInstant"]
    }));
}
function install() {
    __TURBOPACK__imported__module__$5b$project$5d2f$newServer$2f$notesphere_server$2f$node_modules$2f$temporal$2d$polyfill$2f$chunks$2f$root$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NativeTemporal"] || installImplementation();
}
;
}),
];})()

//# sourceMappingURL=1676_temporal-polyfill_09u23jnd45hhl._.js.map