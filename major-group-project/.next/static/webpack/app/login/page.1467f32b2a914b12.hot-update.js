"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/page.js":
/*!*******************************!*\
  !*** ./src/app/login/page.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_loginform_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/loginform.css */ \"(app-pages-browser)/./src/app/css/loginform.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // Make sure this path is correct\nconst Login = ()=>{\n    _s();\n    const [popupStyle, setPopupStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hide\");\n    async function runDBCallAsync(url, formData) {\n        try {\n            const res = await fetch(url, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData)\n            });\n            // Check if the HTTP status code is OK (200-299)\n            if (!res.ok) {\n                throw new Error(\"HTTP error! status: \".concat(res.status));\n            }\n            // Try to parse the response as JSON\n            const data = await res.json();\n            if (data.data === \"valid\") {\n                console.log(\"Registration Successful!\");\n            } else {\n                console.log(\"Error: Registration unsuccessful\");\n            }\n        } catch (error) {\n            // If an error occurs, log it to the console\n            console.error(\"Error during fetch: \", error);\n        }\n    }\n    const showPopup = (event)=>{\n        console.log(\"handling submit\");\n        event.preventDefault();\n        const data = new FormData(event.currentTarget);\n        let username = data.get(\"username\");\n        let email = data.get(\"email\");\n        let pass = data.get(\"pass\");\n        // Check if either the username or password is empty\n        if (!username || !pass) {\n            // Specify what popup to show\n            setPopupStyle(\"login-popup-show\");\n            // Popup duration\n            setTimeout(()=>{\n                setPopupStyle(\"hide\");\n            }, 3000);\n        } else {\n            // Here you would put your login logic\n            console.log(\"Attempt login with:\", username, password);\n        }\n        runDBCallAsync(\"http://localhost:3000/api/register?email=\".concat(email, \"&pass=\").concat(pass, \"&username=\").concat(username));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"loginContainer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"loginBox\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"appleLogin\",\n                    children: \"Sign in with Apple\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"googleLogin\",\n                    children: \"Sign in with Google\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"divider\",\n                    children: \"or\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Phone, email, or username\",\n                    className: \"inputField\",\n                    id: \"username\",\n                    onChange: (e)=>setUsername(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    placeholder: \"Password\",\n                    className: \"inputField\",\n                    id: \"password\",\n                    onChange: (e)=>setPassword(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"nextButton\",\n                    onClick: showPopup,\n                    children: \"Next\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#\",\n                    className: \"forgotPassword\",\n                    children: \"Forgot password?\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"signUp\",\n                    children: [\n                        \"Don't have an account? \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: \"signUpLink\",\n                            children: \"Sign up\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 92,\n                            columnNumber: 34\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: popupStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Login Failed!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Username or Password incorrect\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"4Y3164Ugw0vah8fKM2KqGJsSB7A=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dDO0FBQ1YsQ0FBQyxpQ0FBaUM7QUFFaEUsTUFBTUUsUUFBUTs7SUFFWixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0gsK0NBQVFBLENBQUM7SUFLN0MsZUFBZUksZUFBZUMsR0FBRyxFQUFFQyxRQUFRO1FBQ3pDLElBQUk7WUFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQU1ILEtBQUs7Z0JBQzNCSSxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1A7WUFDdkI7WUFFQSxnREFBZ0Q7WUFDaEQsSUFBSSxDQUFDQyxJQUFJTyxFQUFFLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJQyxNQUFNLHVCQUFrQyxPQUFYUixJQUFJUyxNQUFNO1lBQ25EO1lBRUEsb0NBQW9DO1lBQ3BDLE1BQU1DLE9BQU8sTUFBTVYsSUFBSVcsSUFBSTtZQUUzQixJQUFJRCxLQUFLQSxJQUFJLEtBQUssU0FBUztnQkFDekJFLFFBQVFDLEdBQUcsQ0FBQztZQUNkLE9BQU87Z0JBQ0xELFFBQVFDLEdBQUcsQ0FBQztZQUNkO1FBQ0YsRUFBRSxPQUFPQyxPQUFPO1lBQ2QsNENBQTRDO1lBQzVDRixRQUFRRSxLQUFLLENBQUMsd0JBQXdCQTtRQUN4QztJQUNGO0lBRUEsTUFBTUMsWUFBWSxDQUFDQztRQUNqQkosUUFBUUMsR0FBRyxDQUFDO1FBQ1pHLE1BQU1DLGNBQWM7UUFFcEIsTUFBTVAsT0FBTyxJQUFJUSxTQUFTRixNQUFNRyxhQUFhO1FBRTdDLElBQUlDLFdBQVdWLEtBQUtXLEdBQUcsQ0FBQztRQUN4QixJQUFJQyxRQUFRWixLQUFLVyxHQUFHLENBQUM7UUFDckIsSUFBSUUsT0FBT2IsS0FBS1csR0FBRyxDQUFDO1FBRXBCLG9EQUFvRDtRQUNwRCxJQUFJLENBQUNELFlBQVksQ0FBQ0csTUFBTTtZQUN0Qiw2QkFBNkI7WUFDN0IzQixjQUFjO1lBRWQsaUJBQWlCO1lBQ2pCNEIsV0FBVztnQkFDVDVCLGNBQWM7WUFDaEIsR0FBRztRQUNMLE9BQU87WUFDTCxzQ0FBc0M7WUFDdENnQixRQUFRQyxHQUFHLENBQUMsdUJBQXVCTyxVQUFVSztRQUMvQztRQUNBNUIsZUFBZSw0Q0FBMEQwQixPQUFkRCxPQUFNLFVBQXlCRixPQUFqQkcsTUFBSyxjQUFxQixPQUFUSDtJQUM1RjtJQUVBLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7b0JBQU9GLFdBQVU7OEJBQWE7Ozs7Ozs4QkFDL0IsOERBQUNFO29CQUFPRixXQUFVOzhCQUFjOzs7Ozs7OEJBQ2hDLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFBVTs7Ozs7OzhCQUN6Qiw4REFBQ0c7b0JBQ0NDLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pMLFdBQVU7b0JBQ1ZNLElBQUc7b0JBQ0hDLFVBQVUsQ0FBQ0MsSUFBTUMsWUFBWUQsRUFBRUUsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7OEJBRTdDLDhEQUFDUjtvQkFDQ0MsTUFBSztvQkFDTEMsYUFBWTtvQkFDWkwsV0FBVTtvQkFDVk0sSUFBRztvQkFDSEMsVUFBVSxDQUFDQyxJQUFNSSxZQUFZSixFQUFFRSxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs4QkFFN0MsOERBQUNUO29CQUFPRSxNQUFLO29CQUFTSixXQUFVO29CQUFhYSxTQUFTekI7OEJBQVc7Ozs7Ozs4QkFFakUsOERBQUMwQjtvQkFBRUMsTUFBSztvQkFBSWYsV0FBVTs4QkFBaUI7Ozs7Ozs4QkFDdkMsOERBQUNEO29CQUFJQyxXQUFVOzt3QkFBUztzQ0FDQyw4REFBQ2M7NEJBQUVDLE1BQUs7NEJBQUlmLFdBQVU7c0NBQWE7Ozs7Ozs7Ozs7Ozs4QkFFNUQsOERBQUNEO29CQUFJQyxXQUFXaEM7O3NDQUNkLDhEQUFDZ0Q7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2I7R0FoR01sRDtLQUFBQTtBQWtHTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL3BhZ2UuanM/NDhiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9jc3MvbG9naW5mb3JtLmNzcyc7IC8vIE1ha2Ugc3VyZSB0aGlzIHBhdGggaXMgY29ycmVjdFxuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcblxuICBjb25zdCBbcG9wdXBTdHlsZSwgc2V0UG9wdXBTdHlsZV0gPSB1c2VTdGF0ZShcImhpZGVcIik7XG5cblxuXG4gIFxuICBhc3luYyBmdW5jdGlvbiBydW5EQkNhbGxBc3luYyh1cmwsIGZvcm1EYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJywgLy8gVXNlIFBPU1QgbWV0aG9kXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgICB9KTtcbiAgXG4gICAgICAvLyBDaGVjayBpZiB0aGUgSFRUUCBzdGF0dXMgY29kZSBpcyBPSyAoMjAwLTI5OSlcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgICB9XG4gIFxuICAgICAgLy8gVHJ5IHRvIHBhcnNlIHRoZSByZXNwb25zZSBhcyBKU09OXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgXG4gICAgICBpZiAoZGF0YS5kYXRhID09PSBcInZhbGlkXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWdpc3RyYXRpb24gU3VjY2Vzc2Z1bCFcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBSZWdpc3RyYXRpb24gdW5zdWNjZXNzZnVsXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBJZiBhbiBlcnJvciBvY2N1cnMsIGxvZyBpdCB0byB0aGUgY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGR1cmluZyBmZXRjaDogXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG93UG9wdXAgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIHN1Ym1pdFwiKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgIGxldCB1c2VybmFtZSA9IGRhdGEuZ2V0KCd1c2VybmFtZScpO1xuICAgIGxldCBlbWFpbCA9IGRhdGEuZ2V0KCdlbWFpbCcpO1xuICAgIGxldCBwYXNzID0gZGF0YS5nZXQoJ3Bhc3MnKTtcblxuICAgIC8vIENoZWNrIGlmIGVpdGhlciB0aGUgdXNlcm5hbWUgb3IgcGFzc3dvcmQgaXMgZW1wdHlcbiAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzKSB7XG4gICAgICAvLyBTcGVjaWZ5IHdoYXQgcG9wdXAgdG8gc2hvd1xuICAgICAgc2V0UG9wdXBTdHlsZShcImxvZ2luLXBvcHVwLXNob3dcIik7XG5cbiAgICAgIC8vIFBvcHVwIGR1cmF0aW9uXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0UG9wdXBTdHlsZShcImhpZGVcIik7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSGVyZSB5b3Ugd291bGQgcHV0IHlvdXIgbG9naW4gbG9naWNcbiAgICAgIGNvbnNvbGUubG9nKCdBdHRlbXB0IGxvZ2luIHdpdGg6JywgdXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICB9XG4gICAgcnVuREJDYWxsQXN5bmMoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcmVnaXN0ZXI/ZW1haWw9JHtlbWFpbH0mcGFzcz0ke3Bhc3N9JnVzZXJuYW1lPSR7dXNlcm5hbWV9YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luQ29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luQm94XCI+XG4gICAgICAgIDxoMT5TaWduIGluPC9oMT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhcHBsZUxvZ2luXCI+U2lnbiBpbiB3aXRoIEFwcGxlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ29vZ2xlTG9naW5cIj5TaWduIGluIHdpdGggR29vZ2xlPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPm9yPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lLCBlbWFpbCwgb3IgdXNlcm5hbWVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0RmllbGRcIlxuICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0RmllbGRcIlxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuZXh0QnV0dG9uXCIgb25DbGljaz17c2hvd1BvcHVwfT5OZXh0PC9idXR0b24+XG5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb3Jnb3RQYXNzd29yZFwiPkZvcmdvdCBwYXNzd29yZD88L2E+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnblVwXCI+XG4gICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpZ25VcExpbmtcIj5TaWduIHVwPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BvcHVwU3R5bGV9PlxuICAgICAgICAgIDxoMz5Mb2dpbiBGYWlsZWQhPC9oMz5cbiAgICAgICAgICA8cD5Vc2VybmFtZSBvciBQYXNzd29yZCBpbmNvcnJlY3Q8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTG9naW4iLCJwb3B1cFN0eWxlIiwic2V0UG9wdXBTdHlsZSIsInJ1bkRCQ2FsbEFzeW5jIiwidXJsIiwiZm9ybURhdGEiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInNob3dQb3B1cCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJ1c2VybmFtZSIsImdldCIsImVtYWlsIiwicGFzcyIsInNldFRpbWVvdXQiLCJwYXNzd29yZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYnV0dG9uIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsIm9uQ2hhbmdlIiwiZSIsInNldFVzZXJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRQYXNzd29yZCIsIm9uQ2xpY2siLCJhIiwiaHJlZiIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.js\n"));

/***/ })

});