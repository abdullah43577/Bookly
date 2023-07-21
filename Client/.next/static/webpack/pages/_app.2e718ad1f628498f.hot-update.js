"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/RootLayout.jsx":
/*!***************************************!*\
  !*** ./src/components/RootLayout.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Footer */ \"./src/components/Footer.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Navbar */ \"./src/components/Navbar.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _dynamic_contents_homeDYN__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/dynamic-contents/homeDYN */ \"./src/dynamic-contents/homeDYN.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    // const router = useRouter();\n    const [router, setRouter] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)((0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)());\n    // const currentRoute = router.pathname;\n    const [currentRoute, setCurrentRoute] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(router.pathname);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        console.log(\"current route changed\");\n        console.log(router);\n        // function to render different content based on the route\n        if (currentRoute === \"/pages\") {\n            return \"pages\";\n        } else if (currentRoute === \"/about\") {\n            return \"about\";\n        } else if (currentRoute === \"/services\") {\n            return \"services\";\n        } else if (currentRoute === \"/contact\") {\n            return \"contact\";\n        } else {\n            setCurrentRoute(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dynamic_contents_homeDYN__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\offic\\\\Documents\\\\Bookly\\\\Client\\\\src\\\\components\\\\RootLayout.jsx\",\n                lineNumber: 26,\n                columnNumber: 23\n            }, this));\n        }\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"bg-headerBackground w-full h-screen relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inner_header max-w-[1200px] w-full lg:flex items-center justify-center mx-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\offic\\\\Documents\\\\Bookly\\\\Client\\\\src\\\\components\\\\RootLayout.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\offic\\\\Documents\\\\Bookly\\\\Client\\\\src\\\\components\\\\RootLayout.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    currentRoute\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\offic\\\\Documents\\\\Bookly\\\\Client\\\\src\\\\components\\\\RootLayout.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full h-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inner_main max-w-[1200px]\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\offic\\\\Documents\\\\Bookly\\\\Client\\\\src\\\\components\\\\RootLayout.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\offic\\\\Documents\\\\Bookly\\\\Client\\\\src\\\\components\\\\RootLayout.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\offic\\\\Documents\\\\Bookly\\\\Client\\\\src\\\\components\\\\RootLayout.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\offic\\\\Documents\\\\Bookly\\\\Client\\\\src\\\\components\\\\RootLayout.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"5YLr7X/veFP7oSD1Hk7PANafwNY=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Sb290TGF5b3V0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDQTtBQUNEO0FBQ1M7QUFDTDtBQUU3QixTQUFTTSxXQUFXLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDakMsOEJBQThCO0lBQzlCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQ0Ysc0RBQVNBO0lBQzlDLHdDQUF3QztJQUN4QyxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHUCwrQ0FBUUEsQ0FBQ0ksT0FBT0ksUUFBUTtJQUVoRVAsZ0RBQVNBLENBQUM7UUFDUlEsUUFBUUMsR0FBRyxDQUFDO1FBQ1pELFFBQVFDLEdBQUcsQ0FBQ047UUFDWiwwREFBMEQ7UUFDMUQsSUFBSUUsaUJBQWlCLFVBQVU7WUFDN0IsT0FBTztRQUNULE9BQU8sSUFBSUEsaUJBQWlCLFVBQVU7WUFDcEMsT0FBTztRQUNULE9BQU8sSUFBSUEsaUJBQWlCLGFBQWE7WUFDdkMsT0FBTztRQUNULE9BQU8sSUFBSUEsaUJBQWlCLFlBQVk7WUFDdEMsT0FBTztRQUNULE9BQU87WUFDTEMsOEJBQWdCLDhEQUFDUixpRUFBT0E7Ozs7O1FBQzFCO0lBQ0YsR0FBRztRQUFDSztLQUFPO0lBRVgscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBT0QsV0FBVTs7a0NBQ2hCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ2YsMERBQU1BOzs7Ozs7Ozs7O29CQUlSUzs7Ozs7OzswQkFHSCw4REFBQ1E7Z0JBQUtGLFdBQVU7MEJBQ2QsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUE2QlQ7Ozs7Ozs7Ozs7OzBCQUc5Qyw4REFBQ1AsMERBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBekN3Qk07S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUm9vdExheW91dC5qc3g/ZjYzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ0AvY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBIb21lRFlOIGZyb20gJ0AvZHluYW1pYy1jb250ZW50cy9ob21lRFlOJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvb3RMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3JvdXRlciwgc2V0Um91dGVyXSA9IHVzZVN0YXRlKHVzZVJvdXRlcigpKTtcclxuICAvLyBjb25zdCBjdXJyZW50Um91dGUgPSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgY29uc3QgW2N1cnJlbnRSb3V0ZSwgc2V0Q3VycmVudFJvdXRlXSA9IHVzZVN0YXRlKHJvdXRlci5wYXRobmFtZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnY3VycmVudCByb3V0ZSBjaGFuZ2VkJyk7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xyXG4gICAgLy8gZnVuY3Rpb24gdG8gcmVuZGVyIGRpZmZlcmVudCBjb250ZW50IGJhc2VkIG9uIHRoZSByb3V0ZVxyXG4gICAgaWYgKGN1cnJlbnRSb3V0ZSA9PT0gJy9wYWdlcycpIHtcclxuICAgICAgcmV0dXJuICdwYWdlcyc7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRSb3V0ZSA9PT0gJy9hYm91dCcpIHtcclxuICAgICAgcmV0dXJuICdhYm91dCc7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRSb3V0ZSA9PT0gJy9zZXJ2aWNlcycpIHtcclxuICAgICAgcmV0dXJuICdzZXJ2aWNlcyc7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRSb3V0ZSA9PT0gJy9jb250YWN0Jykge1xyXG4gICAgICByZXR1cm4gJ2NvbnRhY3QnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q3VycmVudFJvdXRlKDxIb21lRFlOIC8+KTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy1oZWFkZXJCYWNrZ3JvdW5kIHctZnVsbCBoLXNjcmVlbiByZWxhdGl2ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfaGVhZGVyIG1heC13LVsxMjAwcHhdIHctZnVsbCBsZzpmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvXCI+XHJcbiAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBjb250ZW50IHJlbmRlcmVkIGR5bmFtaWNhbGx5IGJhc2VkIG9uIHRoZSByb3V0ZSAqL31cclxuICAgICAgICB7Y3VycmVudFJvdXRlfVxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX21haW4gbWF4LXctWzEyMDBweF1cIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkZvb3RlciIsIk5hdmJhciIsInVzZVJvdXRlciIsIkhvbWVEWU4iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJvb3RMYXlvdXQiLCJjaGlsZHJlbiIsInJvdXRlciIsInNldFJvdXRlciIsImN1cnJlbnRSb3V0ZSIsInNldEN1cnJlbnRSb3V0ZSIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/RootLayout.jsx\n"));

/***/ })

});