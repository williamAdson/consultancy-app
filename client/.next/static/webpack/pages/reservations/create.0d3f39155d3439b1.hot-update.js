"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reservations/create",{

/***/ "./pages/reservations/create.js":
/*!**************************************!*\
  !*** ./pages/reservations/create.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nfunction CreateReservation() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [day, setDay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [details, setDetails] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const create = ()=>{\n        Axios.post(\"http://localhost:5000/users/signup\", {\n            name,\n            time,\n            day,\n            details\n        }).then((response)=>{\n            console.log(response);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zero\\\\Projects\\\\consultancy-app\\\\client\\\\pages\\\\reservations\\\\create.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: create,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"make appointment\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zero\\\\Projects\\\\consultancy-app\\\\client\\\\pages\\\\reservations\\\\create.js\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"name\",\n                                value: name,\n                                onChange: (e)=>setName(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zero\\\\Projects\\\\consultancy-app\\\\client\\\\pages\\\\reservations\\\\create.js\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zero\\\\Projects\\\\consultancy-app\\\\client\\\\pages\\\\reservations\\\\create.js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                placeholder: \"details\",\n                                value: details,\n                                onChange: (e)=>setDetails(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zero\\\\Projects\\\\consultancy-app\\\\client\\\\pages\\\\reservations\\\\create.js\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zero\\\\Projects\\\\consultancy-app\\\\client\\\\pages\\\\reservations\\\\create.js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"confirm appointment\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zero\\\\Projects\\\\consultancy-app\\\\client\\\\pages\\\\reservations\\\\create.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\zero\\\\Projects\\\\consultancy-app\\\\client\\\\pages\\\\reservations\\\\create.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zero\\\\Projects\\\\consultancy-app\\\\client\\\\pages\\\\reservations\\\\create.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zero\\\\Projects\\\\consultancy-app\\\\client\\\\pages\\\\reservations\\\\create.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CreateReservation, \"hZTQ/E96jmlXka+jjWSbr+ZdVBk=\");\n_c = CreateReservation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateReservation);\nvar _c;\n$RefreshReg$(_c, \"CreateReservation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXNlcnZhdGlvbnMvY3JlYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFNkM7QUFDQTtBQUNkO0FBQ1c7QUFFMUMsU0FBU0ksb0JBQW1COztJQUN4QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sS0FBS0MsT0FBTyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFFdkMsTUFBTVcsU0FBUyxJQUFLO1FBQ2hCQyxNQUFNQyxJQUFJLENBQUMsc0NBQXNDO1lBQzdDVjtZQUNBRTtZQUNBRTtZQUNBRTtRQUNKLEdBQUdLLElBQUksQ0FBQyxDQUFDQyxXQUFXO1lBQ2hCQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hCO0lBQ0o7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNqQiwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDb0I7MEJBQ0csNEVBQUNDO29CQUFLQyxVQUFVVDs7c0NBQ1osOERBQUNVO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDO3NDQUNHLDRFQUFDQztnQ0FBTUMsTUFBSztnQ0FBT0MsYUFBWTtnQ0FDL0JDLE9BQU92QjtnQ0FBTXdCLFVBQVUsQ0FBQ0MsSUFBSXhCLFFBQVF3QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7O3NDQUd0RCw4REFBQ0o7c0NBQ0csNEVBQUNRO2dDQUFTTCxhQUFZO2dDQUFVQyxPQUFPakI7Z0NBQVNrQixVQUFVLENBQUNDLElBQUlsQixXQUFXa0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7OztzQ0FFNUYsOERBQUNLOzRCQUFPUCxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHOUIsOERBQUN6QiwwREFBTUE7Ozs7Ozs7QUFHbkI7R0FyQ1NHO0tBQUFBO0FBdUNULCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzZXJ2YXRpb25zL2NyZWF0ZS5qcz8wZjg1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5cclxuZnVuY3Rpb24gQ3JlYXRlUmVzZXJ2YXRpb24oKXtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkYXksIHNldERheV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGV0YWlscywgc2V0RGV0YWlsc10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlID0gKCkgPT57XHJcbiAgICAgICAgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL3VzZXJzL3NpZ251cCcsIHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgdGltZSxcclxuICAgICAgICAgICAgZGF5LFxyXG4gICAgICAgICAgICBkZXRhaWxzXHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtjcmVhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5tYWtlIGFwcG9pbnRtZW50PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nbmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXsoZSk9PnNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj0nZGV0YWlscycgdmFsdWU9e2RldGFpbHN9IG9uQ2hhbmdlPXsoZSk9PnNldERldGFpbHMoZS50YXJnZXQudmFsdWUpfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPmNvbmZpcm0gYXBwb2ludG1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUmVzZXJ2YXRpb247Il0sIm5hbWVzIjpbIkhlYWRlciIsIkZvb3RlciIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiQ3JlYXRlUmVzZXJ2YXRpb24iLCJuYW1lIiwic2V0TmFtZSIsInRpbWUiLCJzZXRUaW1lIiwiZGF5Iiwic2V0RGF5IiwiZGV0YWlscyIsInNldERldGFpbHMiLCJjcmVhdGUiLCJBeGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImZvcm0iLCJvblN1Ym1pdCIsImgzIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/reservations/create.js\n"));

/***/ })

});