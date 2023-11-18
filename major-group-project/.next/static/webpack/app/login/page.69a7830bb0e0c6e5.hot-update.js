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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_loginform_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/loginform.css */ \"(app-pages-browser)/./src/app/css/loginform.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n // Make sure this path is correct\nconst Login = (event)=>{\n    const showPopup = ()=>{\n        event.preventDefault();\n        console.log(\"handling submit\");\n        const data = new FormData(event.currentTarget);\n        let username = data.get(\"username\");\n        let email = data.get(\"email\");\n        let pass = data.get(\"pass\");\n        runDBCallAsync(\"http://localhost:3000/api/register?email=\".concat(email, \"&pass=\").concat(pass, \"&username=\").concat(username));\n        // Check if either the username or password is empty\n        if (!username || !password) {\n            // Specify what popup to show\n            setPopupStyle(\"login-popup-show\");\n            // Popup duration\n            setTimeout(()=>{\n                setPopupStyle(\"hide\");\n            }, 3000);\n        } else {\n            // Here you would put your login logic\n            console.log(\"Attempt login with:\", username, password);\n        }\n    };\n    async function runDBCallAsync(url, formData) {\n        try {\n            const res = await fetch(url, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData)\n            });\n            // Check if the HTTP status code is OK (200-299)\n            if (!res.ok) {\n                throw new Error(\"HTTP error! status: \".concat(res.status));\n            }\n            // Try to parse the response as JSON\n            const data = await res.json();\n            if (data.data === \"valid\") {\n                console.log(\"Registration Successful!\");\n            } else {\n                console.log(\"Error: Registration unsuccessful\");\n            }\n        } catch (error) {\n            // If an error occurs, log it to the console\n            console.error(\"Error during fetch: \", error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"loginContainer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"loginBox\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: showPopup,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"appleLogin\",\n                            children: \"Sign in with Apple\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 70,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"googleLogin\",\n                            children: \"Sign in with Google\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 71,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"divider\",\n                            children: \"or\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 72,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Phone, email, or username\",\n                            className: \"inputField\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 73,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            placeholder: \"Password\",\n                            className: \"inputField\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 80,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"nextButton\",\n                            onClick: showPopup,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 87,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: \"forgotPassword\",\n                            children: \"Forgot password?\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 89,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"signUp\",\n                            children: [\n                                \"Don't have an account? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"signUpLink\",\n                                    children: \"Sign up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 34\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 90,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: popupStyle,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Login Failed!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Username or Password incorrect\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 93,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDd0M7QUFDVixDQUFDLGlDQUFpQztBQUVoRSxNQUFNRSxRQUFRLENBQUNDO0lBSWIsTUFBTUMsWUFBWTtRQUNoQkQsTUFBTUUsY0FBYztRQUNwQkMsUUFBUUMsR0FBRyxDQUFDO1FBR1osTUFBTUMsT0FBTyxJQUFJQyxTQUFTTixNQUFNTyxhQUFhO1FBRTdDLElBQUlDLFdBQVdILEtBQUtJLEdBQUcsQ0FBQztRQUN4QixJQUFJQyxRQUFRTCxLQUFLSSxHQUFHLENBQUM7UUFDckIsSUFBSUUsT0FBT04sS0FBS0ksR0FBRyxDQUFDO1FBQ3BCRyxlQUFlLDRDQUEwREQsT0FBZEQsT0FBTSxVQUF5QkYsT0FBakJHLE1BQUssY0FBcUIsT0FBVEg7UUFDMUYsb0RBQW9EO1FBQ3BELElBQUksQ0FBQ0EsWUFBWSxDQUFDSyxVQUFVO1lBQzFCLDZCQUE2QjtZQUM3QkMsY0FBYztZQUVkLGlCQUFpQjtZQUNqQkMsV0FBVztnQkFDVEQsY0FBYztZQUNoQixHQUFHO1FBQ0wsT0FBTztZQUNMLHNDQUFzQztZQUN0Q1gsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkksVUFBVUs7UUFDL0M7SUFDRjtJQUdBLGVBQWVELGVBQWVJLEdBQUcsRUFBRUMsUUFBUTtRQUN6QyxJQUFJO1lBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNSCxLQUFLO2dCQUMzQkksUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNQO1lBQ3ZCO1lBRUEsZ0RBQWdEO1lBQ2hELElBQUksQ0FBQ0MsSUFBSU8sRUFBRSxFQUFFO2dCQUNYLE1BQU0sSUFBSUMsTUFBTSx1QkFBa0MsT0FBWFIsSUFBSVMsTUFBTTtZQUNuRDtZQUVBLG9DQUFvQztZQUNwQyxNQUFNdEIsT0FBTyxNQUFNYSxJQUFJVSxJQUFJO1lBRTNCLElBQUl2QixLQUFLQSxJQUFJLEtBQUssU0FBUztnQkFDekJGLFFBQVFDLEdBQUcsQ0FBQztZQUNkLE9BQU87Z0JBQ0xELFFBQVFDLEdBQUcsQ0FBQztZQUNkO1FBQ0YsRUFBRSxPQUFPeUIsT0FBTztZQUNkLDRDQUE0QztZQUM1QzFCLFFBQVEwQixLQUFLLENBQUMsd0JBQXdCQTtRQUN4QztJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQztvQkFBS0MsVUFBVWpDOztzQ0FDaEIsOERBQUNrQzs0QkFBT0osV0FBVTtzQ0FBYTs7Ozs7O3NDQUMvQiw4REFBQ0k7NEJBQU9KLFdBQVU7c0NBQWM7Ozs7OztzQ0FDaEMsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUFVOzs7Ozs7c0NBQ3pCLDhEQUFDSzs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWlAsV0FBVTs7Ozs7O3NDQUlaLDhEQUFDSzs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWlAsV0FBVTs7Ozs7O3NDQUlaLDhEQUFDSTs0QkFBT0UsTUFBSzs0QkFBU04sV0FBVTs0QkFBYVEsU0FBU3RDO3NDQUFXOzs7Ozs7c0NBRWpFLDhEQUFDdUM7NEJBQUVDLE1BQUs7NEJBQUlWLFdBQVU7c0NBQWlCOzs7Ozs7c0NBQ3ZDLDhEQUFDRDs0QkFBSUMsV0FBVTs7Z0NBQVM7OENBQ0MsOERBQUNTO29DQUFFQyxNQUFLO29DQUFJVixXQUFVOzhDQUFhOzs7Ozs7Ozs7Ozs7c0NBRTVELDhEQUFDRDs0QkFBSUMsV0FBV1c7OzhDQUNkLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQzs4Q0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtLQWhHTTdDO0FBa0dOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS5qcz80OGI5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL2Nzcy9sb2dpbmZvcm0uY3NzJzsgLy8gTWFrZSBzdXJlIHRoaXMgcGF0aCBpcyBjb3JyZWN0XG5cbmNvbnN0IExvZ2luID0gKGV2ZW50KSA9PiB7XG5cblxuICBcbiAgY29uc3Qgc2hvd1BvcHVwID0gKCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGluZyBzdWJtaXRcIik7XG4gIFxuICBcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICBcbiAgICBsZXQgdXNlcm5hbWUgPSBkYXRhLmdldCgndXNlcm5hbWUnKTtcbiAgICBsZXQgZW1haWwgPSBkYXRhLmdldCgnZW1haWwnKTtcbiAgICBsZXQgcGFzcyA9IGRhdGEuZ2V0KCdwYXNzJyk7XG4gICAgcnVuREJDYWxsQXN5bmMoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcmVnaXN0ZXI/ZW1haWw9JHtlbWFpbH0mcGFzcz0ke3Bhc3N9JnVzZXJuYW1lPSR7dXNlcm5hbWV9YCk7XG4gICAgLy8gQ2hlY2sgaWYgZWl0aGVyIHRoZSB1c2VybmFtZSBvciBwYXNzd29yZCBpcyBlbXB0eVxuICAgIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkKSB7XG4gICAgICAvLyBTcGVjaWZ5IHdoYXQgcG9wdXAgdG8gc2hvd1xuICAgICAgc2V0UG9wdXBTdHlsZShcImxvZ2luLXBvcHVwLXNob3dcIik7XG5cbiAgICAgIC8vIFBvcHVwIGR1cmF0aW9uXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0UG9wdXBTdHlsZShcImhpZGVcIik7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSGVyZSB5b3Ugd291bGQgcHV0IHlvdXIgbG9naW4gbG9naWNcbiAgICAgIGNvbnNvbGUubG9nKCdBdHRlbXB0IGxvZ2luIHdpdGg6JywgdXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICB9XG4gIH07XG5cbiAgXG4gIGFzeW5jIGZ1bmN0aW9uIHJ1bkRCQ2FsbEFzeW5jKHVybCwgZm9ybURhdGEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyBVc2UgUE9TVCBtZXRob2RcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcbiAgICAgIH0pO1xuICBcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBIVFRQIHN0YXR1cyBjb2RlIGlzIE9LICgyMDAtMjk5KVxuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzLnN0YXR1c31gKTtcbiAgICAgIH1cbiAgXG4gICAgICAvLyBUcnkgdG8gcGFyc2UgdGhlIHJlc3BvbnNlIGFzIEpTT05cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBcbiAgICAgIGlmIChkYXRhLmRhdGEgPT09IFwidmFsaWRcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlZ2lzdHJhdGlvbiBTdWNjZXNzZnVsIVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFJlZ2lzdHJhdGlvbiB1bnN1Y2Nlc3NmdWxcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElmIGFuIGVycm9yIG9jY3VycywgbG9nIGl0IHRvIHRoZSBjb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIGZldGNoOiBcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbkNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbkJveFwiPlxuICAgICAgICA8aDE+U2lnbiBpbjwvaDE+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtzaG93UG9wdXB9PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFwcGxlTG9naW5cIj5TaWduIGluIHdpdGggQXBwbGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnb29nbGVMb2dpblwiPlNpZ24gaW4gd2l0aCBHb29nbGU8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+b3I8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmUsIGVtYWlsLCBvciB1c2VybmFtZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRGaWVsZFwiXG4gICAgICAgICBcbiAgICAgXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRGaWVsZFwiXG4gICAgICAgICBcbiAgICBcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmV4dEJ1dHRvblwiIG9uQ2xpY2s9e3Nob3dQb3B1cH0+TmV4dDwvYnV0dG9uPlxuXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9yZ290UGFzc3dvcmRcIj5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ25VcFwiPlxuICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD8gPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzaWduVXBMaW5rXCI+U2lnbiB1cDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3B1cFN0eWxlfT5cbiAgICAgICAgICA8aDM+TG9naW4gRmFpbGVkITwvaDM+XG4gICAgICAgICAgPHA+VXNlcm5hbWUgb3IgUGFzc3dvcmQgaW5jb3JyZWN0PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTG9naW4iLCJldmVudCIsInNob3dQb3B1cCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJ1c2VybmFtZSIsImdldCIsImVtYWlsIiwicGFzcyIsInJ1bkRCQ2FsbEFzeW5jIiwicGFzc3dvcmQiLCJzZXRQb3B1cFN0eWxlIiwic2V0VGltZW91dCIsInVybCIsImZvcm1EYXRhIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJidXR0b24iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJhIiwiaHJlZiIsInBvcHVwU3R5bGUiLCJoMyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.js\n"));

/***/ })

});