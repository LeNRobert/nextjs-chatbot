"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/models/route";
exports.ids = ["app/api/models/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmodels%2Froute&page=%2Fapi%2Fmodels%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmodels%2Froute.ts&appDir=C%3A%5CUsers%5Clenam%5CDocuments%5Cprojet_perso%5Cnextjs-chatbot%5Cnextjs-chatbot-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Clenam%5CDocuments%5Cprojet_perso%5Cnextjs-chatbot%5Cnextjs-chatbot-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmodels%2Froute&page=%2Fapi%2Fmodels%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmodels%2Froute.ts&appDir=C%3A%5CUsers%5Clenam%5CDocuments%5Cprojet_perso%5Cnextjs-chatbot%5Cnextjs-chatbot-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Clenam%5CDocuments%5Cprojet_perso%5Cnextjs-chatbot%5Cnextjs-chatbot-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_lenam_Documents_projet_perso_nextjs_chatbot_nextjs_chatbot_app_app_api_models_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/models/route.ts */ \"(rsc)/./app/api/models/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/models/route\",\n        pathname: \"/api/models\",\n        filename: \"route\",\n        bundlePath: \"app/api/models/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\lenam\\\\Documents\\\\projet_perso\\\\nextjs-chatbot\\\\nextjs-chatbot-app\\\\app\\\\api\\\\models\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_lenam_Documents_projet_perso_nextjs_chatbot_nextjs_chatbot_app_app_api_models_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/models/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtb2RlbHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm1vZGVscyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm1vZGVscyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNsZW5hbSU1Q0RvY3VtZW50cyU1Q3Byb2pldF9wZXJzbyU1Q25leHRqcy1jaGF0Ym90JTVDbmV4dGpzLWNoYXRib3QtYXBwJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNsZW5hbSU1Q0RvY3VtZW50cyU1Q3Byb2pldF9wZXJzbyU1Q25leHRqcy1jaGF0Ym90JTVDbmV4dGpzLWNoYXRib3QtYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUN5RDtBQUN0STtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jaGF0Ym90LWFwcC8/OWFkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxsZW5hbVxcXFxEb2N1bWVudHNcXFxccHJvamV0X3BlcnNvXFxcXG5leHRqcy1jaGF0Ym90XFxcXG5leHRqcy1jaGF0Ym90LWFwcFxcXFxhcHBcXFxcYXBpXFxcXG1vZGVsc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbW9kZWxzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbW9kZWxzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9tb2RlbHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxsZW5hbVxcXFxEb2N1bWVudHNcXFxccHJvamV0X3BlcnNvXFxcXG5leHRqcy1jaGF0Ym90XFxcXG5leHRqcy1jaGF0Ym90LWFwcFxcXFxhcHBcXFxcYXBpXFxcXG1vZGVsc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbW9kZWxzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmodels%2Froute&page=%2Fapi%2Fmodels%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmodels%2Froute.ts&appDir=C%3A%5CUsers%5Clenam%5CDocuments%5Cprojet_perso%5Cnextjs-chatbot%5Cnextjs-chatbot-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Clenam%5CDocuments%5Cprojet_perso%5Cnextjs-chatbot%5Cnextjs-chatbot-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/models/route.ts":
/*!*********************************!*\
  !*** ./app/api/models/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _mistralai_mistralai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mistralai/mistralai */ \"(rsc)/./node_modules/@mistralai/mistralai/src/client.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\nconst models = __webpack_require__(/*! ./models.json */ \"(rsc)/./app/api/models/models.json\");\nconst mistral = new _mistralai_mistralai__WEBPACK_IMPORTED_MODULE_0__[\"default\"](process.env.MISTRAL_API_KEY || \"\");\nasync function GET(req) {\n    try {\n        //const response = await mistral.listModels();\n        const response = models;\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(response);\n    } catch (error) {\n        console.error(error);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            success: false,\n            error: error instanceof Error ? error.message : \"Unknown error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21vZGVscy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFDTztBQUN4RCxNQUFNRSxTQUFTQyxtQkFBT0EsQ0FBQztBQUV2QixNQUFNQyxVQUFVLElBQUlKLDREQUFhQSxDQUFDSyxRQUFRQyxHQUFHLENBQUNDLGVBQWUsSUFBSTtBQUUxRCxlQUFlQyxJQUFJQyxHQUFZO0lBQ2xDLElBQUk7UUFDQSw4Q0FBOEM7UUFDOUMsTUFBTUMsV0FBV1I7UUFDakIsT0FBT0QscURBQVlBLENBQUNVLElBQUksQ0FBQ0Q7SUFDN0IsRUFBRSxPQUFPRSxPQUFPO1FBQ1pDLFFBQVFELEtBQUssQ0FBQ0E7UUFDZCxPQUFPWCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUNwQjtZQUNJRyxTQUFTO1lBQ1RGLE9BQU9BLGlCQUFpQkcsUUFBUUgsTUFBTUksT0FBTyxHQUFHO1FBQ3BELEdBQ0E7WUFBRUMsUUFBUTtRQUFJO0lBRXRCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY2hhdGJvdC1hcHAvLi9hcHAvYXBpL21vZGVscy9yb3V0ZS50cz8wMzY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNaXN0cmFsQ2xpZW50IGZyb20gJ0BtaXN0cmFsYWkvbWlzdHJhbGFpJztcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5jb25zdCBtb2RlbHMgPSByZXF1aXJlKCcuL21vZGVscy5qc29uJyk7XHJcblxyXG5jb25zdCBtaXN0cmFsID0gbmV3IE1pc3RyYWxDbGllbnQocHJvY2Vzcy5lbnYuTUlTVFJBTF9BUElfS0VZIHx8ICcnKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBSZXF1ZXN0KSA6IFByb21pc2U8TmV4dFJlc3BvbnNlPntcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy9jb25zdCByZXNwb25zZSA9IGF3YWl0IG1pc3RyYWwubGlzdE1vZGVscygpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gbW9kZWxzO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyZXNwb25zZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCIsXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIk1pc3RyYWxDbGllbnQiLCJOZXh0UmVzcG9uc2UiLCJtb2RlbHMiLCJyZXF1aXJlIiwibWlzdHJhbCIsInByb2Nlc3MiLCJlbnYiLCJNSVNUUkFMX0FQSV9LRVkiLCJHRVQiLCJyZXEiLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJzdWNjZXNzIiwiRXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/models/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/models/models.json":
/*!************************************!*\
  !*** ./app/api/models/models.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"object":"list","data":[{"id":"open-mistral-7b","object":"model","created":1715116149,"owned_by":"mistralai","root":null,"parent":null,"permission":[{"id":"modelperm-9ae0f768f5814895966d6a63375ed2ad","object":"model_permission","created":1715116149,"allow_create_engine":false,"allow_sampling":true,"allow_logprobs":false,"allow_search_indices":false,"allow_view":true,"allow_fine_tuning":false,"organization":"*","group":null,"is_blocking":false}]},{"id":"open-mixtral-8x7b","object":"model","created":1715116149,"owned_by":"mistralai","root":null,"parent":null,"permission":[{"id":"modelperm-cc45de6b6b274db9b9a56e8b5f88ad72","object":"model_permission","created":1715116149,"allow_create_engine":false,"allow_sampling":true,"allow_logprobs":false,"allow_search_indices":false,"allow_view":true,"allow_fine_tuning":false,"organization":"*","group":null,"is_blocking":false}]},{"id":"open-mixtral-8x22b","object":"model","created":1715116149,"owned_by":"mistralai","root":null,"parent":null,"permission":[{"id":"modelperm-0ff2cfdebec642548e27272f171de592","object":"model_permission","created":1715116149,"allow_create_engine":false,"allow_sampling":true,"allow_logprobs":false,"allow_search_indices":false,"allow_view":true,"allow_fine_tuning":false,"organization":"*","group":null,"is_blocking":false}]},{"id":"mistral-small-latest","object":"model","created":1715116149,"owned_by":"mistralai","root":null,"parent":null,"permission":[{"id":"modelperm-97527a141dab4a49a0cf4cd5fae9add0","object":"model_permission","created":1715116149,"allow_create_engine":false,"allow_sampling":true,"allow_logprobs":false,"allow_search_indices":false,"allow_view":true,"allow_fine_tuning":false,"organization":"*","group":null,"is_blocking":false}]},{"id":"mistral-large-latest","object":"model","created":1715116149,"owned_by":"mistralai","root":null,"parent":null,"permission":[{"id":"modelperm-643218a766fe4acd8aa356d98a5a5151","object":"model_permission","created":1715116149,"allow_create_engine":false,"allow_sampling":true,"allow_logprobs":false,"allow_search_indices":false,"allow_view":true,"allow_fine_tuning":false,"organization":"*","group":null,"is_blocking":false}]}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@mistralai"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmodels%2Froute&page=%2Fapi%2Fmodels%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmodels%2Froute.ts&appDir=C%3A%5CUsers%5Clenam%5CDocuments%5Cprojet_perso%5Cnextjs-chatbot%5Cnextjs-chatbot-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Clenam%5CDocuments%5Cprojet_perso%5Cnextjs-chatbot%5Cnextjs-chatbot-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();