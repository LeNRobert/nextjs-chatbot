"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-local-storage-state";
exports.ids = ["vendor-chunks/use-local-storage-state"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-local-storage-state/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/use-local-storage-state/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_useLocalStorageState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/useLocalStorageState.js */ \"(ssr)/./node_modules/use-local-storage-state/src/useLocalStorageState.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_useLocalStorageState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWxvY2FsLXN0b3JhZ2Utc3RhdGUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUU7QUFDakUsaUVBQWUsb0VBQW9CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY2hhdGJvdC1hcHAvLi9ub2RlX21vZHVsZXMvdXNlLWxvY2FsLXN0b3JhZ2Utc3RhdGUvaW5kZXguanM/OWY2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlTG9jYWxTdG9yYWdlU3RhdGUgZnJvbSAnLi9zcmMvdXNlTG9jYWxTdG9yYWdlU3RhdGUuanMnO1xuZXhwb3J0IGRlZmF1bHQgdXNlTG9jYWxTdG9yYWdlU3RhdGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-local-storage-state/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-local-storage-state/src/useLocalStorageState.js":
/*!**************************************************************************!*\
  !*** ./node_modules/use-local-storage-state/src/useLocalStorageState.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useLocalStorageState),\n/* harmony export */   inMemoryData: () => (/* binding */ inMemoryData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\n// in memory fallback used then `localStorage` throws an error\nconst inMemoryData = new Map();\nfunction useLocalStorageState(key, options) {\n    const [defaultValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options === null || options === void 0 ? void 0 : options.defaultValue);\n    // SSR support\n    // - on the server, return a constant value\n    // - this makes the implementation simpler and smaller because the `localStorage` object is\n    //   `undefined` on the server\n    if (typeof window === 'undefined') {\n        return [\n            defaultValue,\n            () => { },\n            {\n                isPersistent: true,\n                removeItem: () => { },\n            },\n        ];\n    }\n    const serializer = options === null || options === void 0 ? void 0 : options.serializer;\n    // disabling ESLint because the above if statement can be executed only on the server. the value\n    // of `window` can't change between calls.\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    return useBrowserLocalStorageState(key, defaultValue, options === null || options === void 0 ? void 0 : options.storageSync, serializer === null || serializer === void 0 ? void 0 : serializer.parse, serializer === null || serializer === void 0 ? void 0 : serializer.stringify);\n}\nfunction useBrowserLocalStorageState(key, defaultValue, storageSync = true, parse = parseJSON, stringify = JSON.stringify) {\n    // store default value in localStorage:\n    // - initial issue: https://github.com/astoilkov/use-local-storage-state/issues/26\n    //   issues that were caused by incorrect initial and secondary implementations:\n    //   - https://github.com/astoilkov/use-local-storage-state/issues/30\n    //   - https://github.com/astoilkov/use-local-storage-state/issues/33\n    if (!inMemoryData.has(key) &&\n        defaultValue !== undefined &&\n        goodTry(() => localStorage.getItem(key)) === null) {\n        // reasons for `localStorage` to throw an error:\n        // - maximum quota is exceeded\n        // - under Mobile Safari (since iOS 5) when the user enters private mode\n        //   `localStorage.setItem()` will throw\n        // - trying to access localStorage object when cookies are disabled in Safari throws\n        //   \"SecurityError: The operation is insecure.\"\n        goodTry(() => localStorage.setItem(key, stringify(defaultValue)));\n    }\n    // we keep the `parsed` value in a ref because `useSyncExternalStore` requires a cached version\n    const storageValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({\n        item: null,\n        parsed: defaultValue,\n    });\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)((0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((onStoreChange) => {\n        const onChange = (localKey) => {\n            if (key === localKey) {\n                onStoreChange();\n            }\n        };\n        callbacks.add(onChange);\n        return () => {\n            callbacks.delete(onChange);\n        };\n    }, [key]), \n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    () => {\n        var _a;\n        const item = (_a = goodTry(() => localStorage.getItem(key))) !== null && _a !== void 0 ? _a : null;\n        if (inMemoryData.has(key)) {\n            storageValue.current = {\n                item,\n                parsed: inMemoryData.get(key),\n            };\n        }\n        else if (item !== storageValue.current.item) {\n            let parsed;\n            try {\n                parsed = item === null ? defaultValue : parse(item);\n            }\n            catch (_b) {\n                parsed = defaultValue;\n            }\n            storageValue.current = {\n                item,\n                parsed,\n            };\n        }\n        return storageValue.current.parsed;\n    }, \n    // istanbul ignore next\n    () => defaultValue);\n    const setState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newValue) => {\n        const value = newValue instanceof Function ? newValue(storageValue.current.parsed) : newValue;\n        // reasons for `localStorage` to throw an error:\n        // - maximum quota is exceeded\n        // - under Mobile Safari (since iOS 5) when the user enters private mode\n        //   `localStorage.setItem()` will throw\n        // - trying to access `localStorage` object when cookies are disabled in Safari throws\n        //   \"SecurityError: The operation is insecure.\"\n        try {\n            localStorage.setItem(key, stringify(value));\n            inMemoryData.delete(key);\n        }\n        catch (_a) {\n            inMemoryData.set(key, value);\n        }\n        triggerCallbacks(key);\n    }, [key, stringify]);\n    // - syncs change across tabs, windows, iframes\n    // - the `storage` event is called only in all tabs, windows, iframe's except the one that\n    //   triggered the change\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        if (!storageSync) {\n            return undefined;\n        }\n        const onStorage = (e) => {\n            if (e.storageArea === goodTry(() => localStorage) && e.key === key) {\n                triggerCallbacks(key);\n            }\n        };\n        window.addEventListener('storage', onStorage);\n        return () => window.removeEventListener('storage', onStorage);\n    }, [key, storageSync]);\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [\n        value,\n        setState,\n        {\n            isPersistent: value === defaultValue || !inMemoryData.has(key),\n            removeItem() {\n                goodTry(() => localStorage.removeItem(key));\n                inMemoryData.delete(key);\n                triggerCallbacks(key);\n            },\n        },\n    ], [key, setState, value, defaultValue]);\n}\n// notifies all instances using the same `key` to update\nconst callbacks = new Set();\nfunction triggerCallbacks(key) {\n    for (const callback of [...callbacks]) {\n        callback(key);\n    }\n}\n// a wrapper for `JSON.parse()` that supports \"undefined\" value. otherwise,\n// `JSON.parse(JSON.stringify(undefined))` returns the string \"undefined\" not the value `undefined`\nfunction parseJSON(value) {\n    return value === 'undefined' ? undefined : JSON.parse(value);\n}\nfunction goodTry(tryFn) {\n    try {\n        return tryFn();\n    }\n    catch (_a) {\n        return undefined;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWxvY2FsLXN0b3JhZ2Utc3RhdGUvc3JjL3VzZUxvY2FsU3RvcmFnZVN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnRztBQUNoRztBQUNPO0FBQ1E7QUFDZiwyQkFBMkIsK0NBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBTTtBQUMvQjtBQUNBO0FBQ0EsS0FBSztBQUNMLGtCQUFrQiwyREFBb0IsQ0FBQyxrREFBVztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxxQkFBcUIsa0RBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxXQUFXLDhDQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNoYXRib3QtYXBwLy4vbm9kZV9tb2R1bGVzL3VzZS1sb2NhbC1zdG9yYWdlLXN0YXRlL3NyYy91c2VMb2NhbFN0b3JhZ2VTdGF0ZS5qcz9hZjBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUsIHVzZVN5bmNFeHRlcm5hbFN0b3JlIH0gZnJvbSAncmVhY3QnO1xuLy8gaW4gbWVtb3J5IGZhbGxiYWNrIHVzZWQgdGhlbiBgbG9jYWxTdG9yYWdlYCB0aHJvd3MgYW4gZXJyb3JcbmV4cG9ydCBjb25zdCBpbk1lbW9yeURhdGEgPSBuZXcgTWFwKCk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VMb2NhbFN0b3JhZ2VTdGF0ZShrZXksIG9wdGlvbnMpIHtcbiAgICBjb25zdCBbZGVmYXVsdFZhbHVlXSA9IHVzZVN0YXRlKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5kZWZhdWx0VmFsdWUpO1xuICAgIC8vIFNTUiBzdXBwb3J0XG4gICAgLy8gLSBvbiB0aGUgc2VydmVyLCByZXR1cm4gYSBjb25zdGFudCB2YWx1ZVxuICAgIC8vIC0gdGhpcyBtYWtlcyB0aGUgaW1wbGVtZW50YXRpb24gc2ltcGxlciBhbmQgc21hbGxlciBiZWNhdXNlIHRoZSBgbG9jYWxTdG9yYWdlYCBvYmplY3QgaXNcbiAgICAvLyAgIGB1bmRlZmluZWRgIG9uIHRoZSBzZXJ2ZXJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICgpID0+IHsgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpc1BlcnNpc3RlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbTogKCkgPT4geyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgY29uc3Qgc2VyaWFsaXplciA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zZXJpYWxpemVyO1xuICAgIC8vIGRpc2FibGluZyBFU0xpbnQgYmVjYXVzZSB0aGUgYWJvdmUgaWYgc3RhdGVtZW50IGNhbiBiZSBleGVjdXRlZCBvbmx5IG9uIHRoZSBzZXJ2ZXIuIHRoZSB2YWx1ZVxuICAgIC8vIG9mIGB3aW5kb3dgIGNhbid0IGNoYW5nZSBiZXR3ZWVuIGNhbGxzLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIHJldHVybiB1c2VCcm93c2VyTG9jYWxTdG9yYWdlU3RhdGUoa2V5LCBkZWZhdWx0VmFsdWUsIG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zdG9yYWdlU3luYywgc2VyaWFsaXplciA9PT0gbnVsbCB8fCBzZXJpYWxpemVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZXJpYWxpemVyLnBhcnNlLCBzZXJpYWxpemVyID09PSBudWxsIHx8IHNlcmlhbGl6ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlcmlhbGl6ZXIuc3RyaW5naWZ5KTtcbn1cbmZ1bmN0aW9uIHVzZUJyb3dzZXJMb2NhbFN0b3JhZ2VTdGF0ZShrZXksIGRlZmF1bHRWYWx1ZSwgc3RvcmFnZVN5bmMgPSB0cnVlLCBwYXJzZSA9IHBhcnNlSlNPTiwgc3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnkpIHtcbiAgICAvLyBzdG9yZSBkZWZhdWx0IHZhbHVlIGluIGxvY2FsU3RvcmFnZTpcbiAgICAvLyAtIGluaXRpYWwgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hc3RvaWxrb3YvdXNlLWxvY2FsLXN0b3JhZ2Utc3RhdGUvaXNzdWVzLzI2XG4gICAgLy8gICBpc3N1ZXMgdGhhdCB3ZXJlIGNhdXNlZCBieSBpbmNvcnJlY3QgaW5pdGlhbCBhbmQgc2Vjb25kYXJ5IGltcGxlbWVudGF0aW9uczpcbiAgICAvLyAgIC0gaHR0cHM6Ly9naXRodWIuY29tL2FzdG9pbGtvdi91c2UtbG9jYWwtc3RvcmFnZS1zdGF0ZS9pc3N1ZXMvMzBcbiAgICAvLyAgIC0gaHR0cHM6Ly9naXRodWIuY29tL2FzdG9pbGtvdi91c2UtbG9jYWwtc3RvcmFnZS1zdGF0ZS9pc3N1ZXMvMzNcbiAgICBpZiAoIWluTWVtb3J5RGF0YS5oYXMoa2V5KSAmJlxuICAgICAgICBkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBnb29kVHJ5KCgpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpID09PSBudWxsKSB7XG4gICAgICAgIC8vIHJlYXNvbnMgZm9yIGBsb2NhbFN0b3JhZ2VgIHRvIHRocm93IGFuIGVycm9yOlxuICAgICAgICAvLyAtIG1heGltdW0gcXVvdGEgaXMgZXhjZWVkZWRcbiAgICAgICAgLy8gLSB1bmRlciBNb2JpbGUgU2FmYXJpIChzaW5jZSBpT1MgNSkgd2hlbiB0aGUgdXNlciBlbnRlcnMgcHJpdmF0ZSBtb2RlXG4gICAgICAgIC8vICAgYGxvY2FsU3RvcmFnZS5zZXRJdGVtKClgIHdpbGwgdGhyb3dcbiAgICAgICAgLy8gLSB0cnlpbmcgdG8gYWNjZXNzIGxvY2FsU3RvcmFnZSBvYmplY3Qgd2hlbiBjb29raWVzIGFyZSBkaXNhYmxlZCBpbiBTYWZhcmkgdGhyb3dzXG4gICAgICAgIC8vICAgXCJTZWN1cml0eUVycm9yOiBUaGUgb3BlcmF0aW9uIGlzIGluc2VjdXJlLlwiXG4gICAgICAgIGdvb2RUcnkoKCkgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBzdHJpbmdpZnkoZGVmYXVsdFZhbHVlKSkpO1xuICAgIH1cbiAgICAvLyB3ZSBrZWVwIHRoZSBgcGFyc2VkYCB2YWx1ZSBpbiBhIHJlZiBiZWNhdXNlIGB1c2VTeW5jRXh0ZXJuYWxTdG9yZWAgcmVxdWlyZXMgYSBjYWNoZWQgdmVyc2lvblxuICAgIGNvbnN0IHN0b3JhZ2VWYWx1ZSA9IHVzZVJlZih7XG4gICAgICAgIGl0ZW06IG51bGwsXG4gICAgICAgIHBhcnNlZDogZGVmYXVsdFZhbHVlLFxuICAgIH0pO1xuICAgIGNvbnN0IHZhbHVlID0gdXNlU3luY0V4dGVybmFsU3RvcmUodXNlQ2FsbGJhY2soKG9uU3RvcmVDaGFuZ2UpID0+IHtcbiAgICAgICAgY29uc3Qgb25DaGFuZ2UgPSAobG9jYWxLZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IGxvY2FsS2V5KSB7XG4gICAgICAgICAgICAgICAgb25TdG9yZUNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjYWxsYmFja3MuYWRkKG9uQ2hhbmdlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5kZWxldGUob25DaGFuZ2UpO1xuICAgICAgICB9O1xuICAgIH0sIFtrZXldKSwgXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgICgpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBpdGVtID0gKF9hID0gZ29vZFRyeSgoKSA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbDtcbiAgICAgICAgaWYgKGluTWVtb3J5RGF0YS5oYXMoa2V5KSkge1xuICAgICAgICAgICAgc3RvcmFnZVZhbHVlLmN1cnJlbnQgPSB7XG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICBwYXJzZWQ6IGluTWVtb3J5RGF0YS5nZXQoa2V5KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXRlbSAhPT0gc3RvcmFnZVZhbHVlLmN1cnJlbnQuaXRlbSkge1xuICAgICAgICAgICAgbGV0IHBhcnNlZDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkID0gaXRlbSA9PT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IHBhcnNlKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9iKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RvcmFnZVZhbHVlLmN1cnJlbnQgPSB7XG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICBwYXJzZWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yYWdlVmFsdWUuY3VycmVudC5wYXJzZWQ7XG4gICAgfSwgXG4gICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAoKSA9PiBkZWZhdWx0VmFsdWUpO1xuICAgIGNvbnN0IHNldFN0YXRlID0gdXNlQ2FsbGJhY2soKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmV3VmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IG5ld1ZhbHVlKHN0b3JhZ2VWYWx1ZS5jdXJyZW50LnBhcnNlZCkgOiBuZXdWYWx1ZTtcbiAgICAgICAgLy8gcmVhc29ucyBmb3IgYGxvY2FsU3RvcmFnZWAgdG8gdGhyb3cgYW4gZXJyb3I6XG4gICAgICAgIC8vIC0gbWF4aW11bSBxdW90YSBpcyBleGNlZWRlZFxuICAgICAgICAvLyAtIHVuZGVyIE1vYmlsZSBTYWZhcmkgKHNpbmNlIGlPUyA1KSB3aGVuIHRoZSB1c2VyIGVudGVycyBwcml2YXRlIG1vZGVcbiAgICAgICAgLy8gICBgbG9jYWxTdG9yYWdlLnNldEl0ZW0oKWAgd2lsbCB0aHJvd1xuICAgICAgICAvLyAtIHRyeWluZyB0byBhY2Nlc3MgYGxvY2FsU3RvcmFnZWAgb2JqZWN0IHdoZW4gY29va2llcyBhcmUgZGlzYWJsZWQgaW4gU2FmYXJpIHRocm93c1xuICAgICAgICAvLyAgIFwiU2VjdXJpdHlFcnJvcjogVGhlIG9wZXJhdGlvbiBpcyBpbnNlY3VyZS5cIlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBzdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgICAgIGluTWVtb3J5RGF0YS5kZWxldGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIGluTWVtb3J5RGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJpZ2dlckNhbGxiYWNrcyhrZXkpO1xuICAgIH0sIFtrZXksIHN0cmluZ2lmeV0pO1xuICAgIC8vIC0gc3luY3MgY2hhbmdlIGFjcm9zcyB0YWJzLCB3aW5kb3dzLCBpZnJhbWVzXG4gICAgLy8gLSB0aGUgYHN0b3JhZ2VgIGV2ZW50IGlzIGNhbGxlZCBvbmx5IGluIGFsbCB0YWJzLCB3aW5kb3dzLCBpZnJhbWUncyBleGNlcHQgdGhlIG9uZSB0aGF0XG4gICAgLy8gICB0cmlnZ2VyZWQgdGhlIGNoYW5nZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghc3RvcmFnZVN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb25TdG9yYWdlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLnN0b3JhZ2VBcmVhID09PSBnb29kVHJ5KCgpID0+IGxvY2FsU3RvcmFnZSkgJiYgZS5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgICAgIHRyaWdnZXJDYWxsYmFja3Moa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBvblN0b3JhZ2UpO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBvblN0b3JhZ2UpO1xuICAgIH0sIFtrZXksIHN0b3JhZ2VTeW5jXSk7XG4gICAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gW1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgc2V0U3RhdGUsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlzUGVyc2lzdGVudDogdmFsdWUgPT09IGRlZmF1bHRWYWx1ZSB8fCAhaW5NZW1vcnlEYXRhLmhhcyhrZXkpLFxuICAgICAgICAgICAgcmVtb3ZlSXRlbSgpIHtcbiAgICAgICAgICAgICAgICBnb29kVHJ5KCgpID0+IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSkpO1xuICAgICAgICAgICAgICAgIGluTWVtb3J5RGF0YS5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyQ2FsbGJhY2tzKGtleSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIF0sIFtrZXksIHNldFN0YXRlLCB2YWx1ZSwgZGVmYXVsdFZhbHVlXSk7XG59XG4vLyBub3RpZmllcyBhbGwgaW5zdGFuY2VzIHVzaW5nIHRoZSBzYW1lIGBrZXlgIHRvIHVwZGF0ZVxuY29uc3QgY2FsbGJhY2tzID0gbmV3IFNldCgpO1xuZnVuY3Rpb24gdHJpZ2dlckNhbGxiYWNrcyhrZXkpIHtcbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIFsuLi5jYWxsYmFja3NdKSB7XG4gICAgICAgIGNhbGxiYWNrKGtleSk7XG4gICAgfVxufVxuLy8gYSB3cmFwcGVyIGZvciBgSlNPTi5wYXJzZSgpYCB0aGF0IHN1cHBvcnRzIFwidW5kZWZpbmVkXCIgdmFsdWUuIG90aGVyd2lzZSxcbi8vIGBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVuZGVmaW5lZCkpYCByZXR1cm5zIHRoZSBzdHJpbmcgXCJ1bmRlZmluZWRcIiBub3QgdGhlIHZhbHVlIGB1bmRlZmluZWRgXG5mdW5jdGlvbiBwYXJzZUpTT04odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSlNPTi5wYXJzZSh2YWx1ZSk7XG59XG5mdW5jdGlvbiBnb29kVHJ5KHRyeUZuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRyeUZuKCk7XG4gICAgfVxuICAgIGNhdGNoIChfYSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-local-storage-state/src/useLocalStorageState.js\n");

/***/ })

};
;