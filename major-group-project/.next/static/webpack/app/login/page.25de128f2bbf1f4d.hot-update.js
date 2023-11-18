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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_loginform_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/loginform.css */ \"(app-pages-browser)/./src/app/css/loginform.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // Make sure this path is correct\nconst Login = ()=>{\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [popupStyle, setPopupStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hide\");\n    async function runDBCallAsync(url, formData) {\n        try {\n            const res = await fetch(url, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData)\n            });\n            // Check if the HTTP status code is OK (200-299)\n            if (!res.ok) {\n                throw new Error(\"HTTP error! status: \".concat(res.status));\n            }\n            // Try to parse the response as JSON\n            const data = await res.json();\n            if (data.data === \"valid\") {\n                console.log(\"Registration Successful!\");\n            } else {\n                console.log(\"Error: Registration unsuccessful\");\n            }\n        } catch (error) {\n            // If an error occurs, log it to the console\n            console.error(\"Error during fetch: \", error);\n        }\n    }\n    const showPopup = (event)=>{\n        console.log(\"handling submit\");\n        event.preventDefault();\n        const data = new FormData(event.currentTarget);\n        let username = data.get(\"username\");\n        let email = data.get(\"email\");\n        let pass = data.get(\"pass\");\n        // Check if either the username or password is empty\n        if (!username || !password) {\n            // Specify what popup to show\n            setPopupStyle(\"login-popup-show\");\n            // Popup duration\n            setTimeout(()=>{\n                setPopupStyle(\"hide\");\n            }, 3000);\n        } else {\n            // Here you would put your login logic\n            console.log(\"Attempt login with:\", username, password);\n        }\n        runDBCallAsync(\"http://localhost:3000/api/register?email=\".concat(email, \"&pass=\").concat(pass, \"&username=\").concat(username));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"loginContainer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"loginBox\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"appleLogin\",\n                    children: \"Sign in with Apple\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"googleLogin\",\n                    children: \"Sign in with Google\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"divider\",\n                    children: \"or\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Phone, email, or username\",\n                    className: \"inputField\",\n                    value: username,\n                    onChange: (e)=>setUsername(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    placeholder: \"Password\",\n                    className: \"inputField\",\n                    value: password,\n                    onChange: (e)=>setPassword(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"nextButton\",\n                    onClick: showPopup,\n                    children: \"Next\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#\",\n                    className: \"forgotPassword\",\n                    children: \"Forgot password?\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"signUp\",\n                    children: [\n                        \"Don't have an account? \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: \"signUpLink\",\n                            children: \"Sign up\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 93,\n                            columnNumber: 34\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: popupStyle,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Login Failed!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Username or Password incorrect\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\beka\\\\OneDrive\\\\TU DUBLIN\\\\Y3\\\\Sem1\\\\web app\\\\Major-Group-Project-Student-Network-Website-main\\\\major-group-project\\\\src\\\\app\\\\login\\\\page.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"ihdopsOw8Ag2wxOpMj/a6wlzbgQ=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dDO0FBQ1YsQ0FBQyxpQ0FBaUM7QUFFaEUsTUFBTUUsUUFBUTs7SUFDWixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUs3QyxlQUFlUSxlQUFlQyxHQUFHLEVBQUVDLFFBQVE7UUFDekMsSUFBSTtZQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTUgsS0FBSztnQkFDM0JJLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDUDtZQUN2QjtZQUVBLGdEQUFnRDtZQUNoRCxJQUFJLENBQUNDLElBQUlPLEVBQUUsRUFBRTtnQkFDWCxNQUFNLElBQUlDLE1BQU0sdUJBQWtDLE9BQVhSLElBQUlTLE1BQU07WUFDbkQ7WUFFQSxvQ0FBb0M7WUFDcEMsTUFBTUMsT0FBTyxNQUFNVixJQUFJVyxJQUFJO1lBRTNCLElBQUlELEtBQUtBLElBQUksS0FBSyxTQUFTO2dCQUN6QkUsUUFBUUMsR0FBRyxDQUFDO1lBQ2QsT0FBTztnQkFDTEQsUUFBUUMsR0FBRyxDQUFDO1lBQ2Q7UUFDRixFQUFFLE9BQU9DLE9BQU87WUFDZCw0Q0FBNEM7WUFDNUNGLFFBQVFFLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0Y7SUFFQSxNQUFNQyxZQUFZLENBQUNDO1FBQ2pCSixRQUFRQyxHQUFHLENBQUM7UUFDWkcsTUFBTUMsY0FBYztRQUVwQixNQUFNUCxPQUFPLElBQUlRLFNBQVNGLE1BQU1HLGFBQWE7UUFFN0MsSUFBSTVCLFdBQVdtQixLQUFLVSxHQUFHLENBQUM7UUFDeEIsSUFBSUMsUUFBUVgsS0FBS1UsR0FBRyxDQUFDO1FBQ3JCLElBQUlFLE9BQU9aLEtBQUtVLEdBQUcsQ0FBQztRQUVwQixvREFBb0Q7UUFDcEQsSUFBSSxDQUFDN0IsWUFBWSxDQUFDRSxVQUFVO1lBQzFCLDZCQUE2QjtZQUM3QkcsY0FBYztZQUVkLGlCQUFpQjtZQUNqQjJCLFdBQVc7Z0JBQ1QzQixjQUFjO1lBQ2hCLEdBQUc7UUFDTCxPQUFPO1lBQ0wsc0NBQXNDO1lBQ3RDZ0IsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QnRCLFVBQVVFO1FBQy9DO1FBQ0FJLGVBQWUsNENBQTBEeUIsT0FBZEQsT0FBTSxVQUF5QjlCLE9BQWpCK0IsTUFBSyxjQUFxQixPQUFUL0I7SUFDNUY7SUFFQSxxQkFDRSw4REFBQ2lDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQztvQkFBT0YsV0FBVTs4QkFBYTs7Ozs7OzhCQUMvQiw4REFBQ0U7b0JBQU9GLFdBQVU7OEJBQWM7Ozs7Ozs4QkFDaEMsOERBQUNEO29CQUFJQyxXQUFVOzhCQUFVOzs7Ozs7OEJBQ3pCLDhEQUFDRztvQkFDQ0MsTUFBSztvQkFDTEMsYUFBWTtvQkFDWkwsV0FBVTtvQkFDVk0sT0FBT3hDO29CQUNQeUMsVUFBVSxDQUFDQyxJQUFNekMsWUFBWXlDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzhCQUU3Qyw4REFBQ0g7b0JBQ0NDLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pMLFdBQVU7b0JBQ1ZNLE9BQU90QztvQkFDUHVDLFVBQVUsQ0FBQ0MsSUFBTXZDLFlBQVl1QyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs4QkFFN0MsOERBQUNKO29CQUFPRSxNQUFLO29CQUFTSixXQUFVO29CQUFhVSxTQUFTcEI7OEJBQVc7Ozs7Ozs4QkFFakUsOERBQUNxQjtvQkFBRUMsTUFBSztvQkFBSVosV0FBVTs4QkFBaUI7Ozs7Ozs4QkFDdkMsOERBQUNEO29CQUFJQyxXQUFVOzt3QkFBUztzQ0FDQyw4REFBQ1c7NEJBQUVDLE1BQUs7NEJBQUlaLFdBQVU7c0NBQWE7Ozs7Ozs7Ozs7Ozs4QkFFNUQsOERBQUNEO29CQUFJQyxXQUFXOUI7O3NDQUNkLDhEQUFDMkM7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2I7R0FqR01qRDtLQUFBQTtBQW1HTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL3BhZ2UuanM/NDhiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9jc3MvbG9naW5mb3JtLmNzcyc7IC8vIE1ha2Ugc3VyZSB0aGlzIHBhdGggaXMgY29ycmVjdFxuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcG9wdXBTdHlsZSwgc2V0UG9wdXBTdHlsZV0gPSB1c2VTdGF0ZShcImhpZGVcIik7XG5cblxuXG4gIFxuICBhc3luYyBmdW5jdGlvbiBydW5EQkNhbGxBc3luYyh1cmwsIGZvcm1EYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJywgLy8gVXNlIFBPU1QgbWV0aG9kXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgICB9KTtcbiAgXG4gICAgICAvLyBDaGVjayBpZiB0aGUgSFRUUCBzdGF0dXMgY29kZSBpcyBPSyAoMjAwLTI5OSlcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgICB9XG4gIFxuICAgICAgLy8gVHJ5IHRvIHBhcnNlIHRoZSByZXNwb25zZSBhcyBKU09OXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgXG4gICAgICBpZiAoZGF0YS5kYXRhID09PSBcInZhbGlkXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWdpc3RyYXRpb24gU3VjY2Vzc2Z1bCFcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBSZWdpc3RyYXRpb24gdW5zdWNjZXNzZnVsXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBJZiBhbiBlcnJvciBvY2N1cnMsIGxvZyBpdCB0byB0aGUgY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGR1cmluZyBmZXRjaDogXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG93UG9wdXAgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIHN1Ym1pdFwiKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgIGxldCB1c2VybmFtZSA9IGRhdGEuZ2V0KCd1c2VybmFtZScpO1xuICAgIGxldCBlbWFpbCA9IGRhdGEuZ2V0KCdlbWFpbCcpO1xuICAgIGxldCBwYXNzID0gZGF0YS5nZXQoJ3Bhc3MnKTtcblxuICAgIC8vIENoZWNrIGlmIGVpdGhlciB0aGUgdXNlcm5hbWUgb3IgcGFzc3dvcmQgaXMgZW1wdHlcbiAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkge1xuICAgICAgLy8gU3BlY2lmeSB3aGF0IHBvcHVwIHRvIHNob3dcbiAgICAgIHNldFBvcHVwU3R5bGUoXCJsb2dpbi1wb3B1cC1zaG93XCIpO1xuXG4gICAgICAvLyBQb3B1cCBkdXJhdGlvblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFBvcHVwU3R5bGUoXCJoaWRlXCIpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEhlcmUgeW91IHdvdWxkIHB1dCB5b3VyIGxvZ2luIGxvZ2ljXG4gICAgICBjb25zb2xlLmxvZygnQXR0ZW1wdCBsb2dpbiB3aXRoOicsIHVzZXJuYW1lLCBwYXNzd29yZCk7XG4gICAgfVxuICAgIHJ1bkRCQ2FsbEFzeW5jKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3JlZ2lzdGVyP2VtYWlsPSR7ZW1haWx9JnBhc3M9JHtwYXNzfSZ1c2VybmFtZT0ke3VzZXJuYW1lfWApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbkNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbkJveFwiPlxuICAgICAgICA8aDE+U2lnbiBpbjwvaDE+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYXBwbGVMb2dpblwiPlNpZ24gaW4gd2l0aCBBcHBsZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdvb2dsZUxvZ2luXCI+U2lnbiBpbiB3aXRoIEdvb2dsZTwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj5vcjwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaG9uZSwgZW1haWwsIG9yIHVzZXJuYW1lXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dEZpZWxkXCJcbiAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRGaWVsZFwiXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuZXh0QnV0dG9uXCIgb25DbGljaz17c2hvd1BvcHVwfT5OZXh0PC9idXR0b24+XG5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb3Jnb3RQYXNzd29yZFwiPkZvcmdvdCBwYXNzd29yZD88L2E+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnblVwXCI+XG4gICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpZ25VcExpbmtcIj5TaWduIHVwPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BvcHVwU3R5bGV9PlxuICAgICAgICAgIDxoMz5Mb2dpbiBGYWlsZWQhPC9oMz5cbiAgICAgICAgICA8cD5Vc2VybmFtZSBvciBQYXNzd29yZCBpbmNvcnJlY3Q8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTG9naW4iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBvcHVwU3R5bGUiLCJzZXRQb3B1cFN0eWxlIiwicnVuREJDYWxsQXN5bmMiLCJ1cmwiLCJmb3JtRGF0YSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJFcnJvciIsInN0YXR1cyIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic2hvd1BvcHVwIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkZvcm1EYXRhIiwiY3VycmVudFRhcmdldCIsImdldCIsImVtYWlsIiwicGFzcyIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImJ1dHRvbiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkNsaWNrIiwiYSIsImhyZWYiLCJoMyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.js\n"));

/***/ })

});