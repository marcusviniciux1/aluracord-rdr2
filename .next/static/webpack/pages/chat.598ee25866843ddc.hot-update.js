"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), mensagem = ref[0], setMensagem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[\"000\"],\n            backgroundImage: \"url(https://initiate.alphacoders.com/images/977/cropped-1920-1080-977202.jpg?4395)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\Cursos\\\\Alura\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        as: \"form\",\n                        styleSheet: {\n                            display: \"flex\",\n                            alignItems: \"center\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                            value: mensagem,\n                            onChange: function(e) {\n                                var valor = e.target.value;\n                                setMensagem(valor);\n                            },\n                            onKeyPress: function(e) {\n                                if (e.key === \"Enter\") {\n                                    setListaDeMensagens.apply(void 0, _toConsumableArray(listaDeMensagens).concat([\n                                        mensagem\n                                    ]));\n                                    setMensagem(\"\");\n                                }\n                            },\n                            placeholder: \"Insira sua mensagem aqui...\",\n                            type: \"textarea\",\n                            styleSheet: {\n                                width: \"100%\",\n                                border: \"0\",\n                                resize: \"none\",\n                                borderRadius: \"5px\",\n                                padding: \"6px 8px\",\n                                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                marginRight: \"12px\",\n                                color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\Cursos\\\\Alura\\\\aluracord\\\\pages\\\\chat.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\Cursos\\\\Alura\\\\aluracord\\\\pages\\\\chat.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\Cursos\\\\Alura\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\Cursos\\\\Alura\\\\aluracord\\\\pages\\\\chat.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\Cursos\\\\Alura\\\\aluracord\\\\pages\\\\chat.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"/YxVmfZku2946ChKMnddCR+VCYM=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\Cursos\\\\Alura\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\Cursos\\\\Alura\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\Cursos\\\\Alura\\\\aluracord\\\\pages\\\\chat.js\",\n            lineNumber: 93,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    console.log(\"MessageList\", props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"scroll\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            tag: \"li\",\n            styleSheet: {\n                borderRadius: \"5px\",\n                padding: \"6px\",\n                marginBottom: \"12px\",\n                hover: {\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                }\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        marginBottom: \"8px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                            styleSheet: {\n                                width: \"20px\",\n                                height: \"20px\",\n                                borderRadius: \"50%\",\n                                display: \"inline-block\",\n                                marginRight: \"8px\"\n                            },\n                            src: \"https://github.com/vanessametonini.png\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\Cursos\\\\Alura\\\\aluracord\\\\pages\\\\chat.js\",\n                            lineNumber: 145,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            tag: \"strong\",\n                            children: mensagem.de\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\Cursos\\\\Alura\\\\aluracord\\\\pages\\\\chat.js\",\n                            lineNumber: 155,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            styleSheet: {\n                                fontSize: \"10px\",\n                                marginLeft: \"8px\",\n                                color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                            },\n                            tag: \"span\",\n                            children: new Date().toLocaleDateString()\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\Cursos\\\\Alura\\\\aluracord\\\\pages\\\\chat.js\",\n                            lineNumber: 156,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\Cursos\\\\Alura\\\\aluracord\\\\pages\\\\chat.js\",\n                    lineNumber: 140,\n                    columnNumber: 9\n                }, this),\n                mensagem.texto\n            ]\n        }, mensagem.id, true, {\n            fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\Cursos\\\\Alura\\\\aluracord\\\\pages\\\\chat.js\",\n            lineNumber: 128,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\Cursos\\\\Alura\\\\aluracord\\\\pages\\\\chat.js\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwRTtBQUNuQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsUUFBUSxDQUFDUSxRQUFRLEdBQUcsQ0FBQzs7SUFDbEMsR0FBSyxDQUEyQkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBcENHLFFBQVEsR0FBaUJILEdBQVksS0FBM0JJLFdBQVcsR0FBSUosR0FBWTtJQUM1QyxHQUFLLENBQTJDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQXBESyxnQkFBZ0IsR0FBeUJMLElBQVksS0FBbkNNLG1CQUFtQixHQUFJTixJQUFZO0lBRTVELE1BQU0sNkVBQ0hOLHFEQUFHO1FBQ0ZhLFVBQVUsRUFBRSxDQUFDO1lBQ1hDLE9BQU8sRUFBRSxDQUFNO1lBQ2ZDLFVBQVUsRUFBRSxDQUFRO1lBQ3BCQyxjQUFjLEVBQUUsQ0FBUTtZQUN4QkMsZUFBZSxFQUFFVixxRUFBb0M7WUFDckRjLGVBQWUsRUFBRyxDQUFrRjtZQUNwR0MsZ0JBQWdCLEVBQUUsQ0FBVztZQUM3QkMsY0FBYyxFQUFFLENBQU87WUFDdkJDLG1CQUFtQixFQUFFLENBQVU7WUFDL0JDLEtBQUssRUFBRWxCLHNFQUFxQztRQUM5QyxDQUFDOzhGQUVBUCxxREFBRztZQUNGYSxVQUFVLEVBQUUsQ0FBQztnQkFDWEMsT0FBTyxFQUFFLENBQU07Z0JBQ2ZhLGFBQWEsRUFBRSxDQUFRO2dCQUN2QkMsSUFBSSxFQUFFLENBQUM7Z0JBQ1BDLFNBQVMsRUFBRSxDQUErQjtnQkFDMUNDLFlBQVksRUFBRSxDQUFLO2dCQUNuQmIsZUFBZSxFQUFFVixvRUFBb0M7Z0JBQ3JEd0IsTUFBTSxFQUFFLENBQU07Z0JBQ2RDLFFBQVEsRUFBRSxDQUFLO2dCQUNmQyxTQUFTLEVBQUUsQ0FBTTtnQkFDakJDLE9BQU8sRUFBRSxDQUFNO1lBQ2pCLENBQUM7OzRGQUVBQyxNQUFNOzs7Ozs0RkFDTm5DLHFEQUFHO29CQUNGYSxVQUFVLEVBQUUsQ0FBQzt3QkFDWHVCLFFBQVEsRUFBRSxDQUFVO3dCQUNwQnRCLE9BQU8sRUFBRSxDQUFNO3dCQUNmYyxJQUFJLEVBQUUsQ0FBQzt3QkFDUEcsTUFBTSxFQUFFLENBQUs7d0JBQ2JkLGVBQWUsRUFBRVYsb0VBQW9DO3dCQUNyRG9CLGFBQWEsRUFBRSxDQUFRO3dCQUN2QkcsWUFBWSxFQUFFLENBQUs7d0JBQ25CSSxPQUFPLEVBQUUsQ0FBTTtvQkFDakIsQ0FBQzswR0FHQWxDLHFEQUFHO3dCQUNGcUMsRUFBRSxFQUFDLENBQU07d0JBQ1R4QixVQUFVLEVBQUUsQ0FBQzs0QkFDWEMsT0FBTyxFQUFFLENBQU07NEJBQ2ZDLFVBQVUsRUFBRSxDQUFRO3dCQUN0QixDQUFDOzhHQUVBYiwyREFBUzs0QkFDUm9DLEtBQUssRUFBRTdCLFFBQVE7NEJBQ2Y4QixRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztnQ0FDaEIsR0FBSyxDQUFDQyxLQUFLLEdBQUdELENBQUMsQ0FBQ0UsTUFBTSxDQUFDSixLQUFLO2dDQUM1QjVCLFdBQVcsQ0FBQytCLEtBQUs7NEJBQ25CLENBQUM7NEJBQ0RFLFVBQVUsRUFBRSxRQUFRLENBQVBILENBQUMsRUFBSyxDQUFDO2dDQUNsQixFQUFFLEVBQUVBLENBQUMsQ0FBQ0ksR0FBRyxLQUFLLENBQU8sUUFBRSxDQUFDO29DQUN0QmhDLG1CQUFtQixDQUFuQkEsS0FBa0QsQ0FBbERBLElBQUksQ0FBSkEsQ0FBbUIscUJBQUlELGdCQUFnQixTQUF2Q0MsQ0FBQzt3Q0FBd0NILFFBQVE7b0NBQUEsQ0FBQztvQ0FDbERDLFdBQVcsQ0FBQyxDQUFFO2dDQUNoQixDQUFDOzRCQUNILENBQUM7NEJBQ0RtQyxXQUFXLEVBQUMsQ0FBNkI7NEJBQ3pDQyxJQUFJLEVBQUMsQ0FBVTs0QkFDZmpDLFVBQVUsRUFBRSxDQUFDO2dDQUNYa0MsS0FBSyxFQUFFLENBQU07Z0NBQ2JDLE1BQU0sRUFBRSxDQUFHO2dDQUNYQyxNQUFNLEVBQUUsQ0FBTTtnQ0FDZG5CLFlBQVksRUFBRSxDQUFLO2dDQUNuQkksT0FBTyxFQUFFLENBQVM7Z0NBQ2xCakIsZUFBZSxFQUFFVixvRUFBb0M7Z0NBQ3JEMkMsV0FBVyxFQUFFLENBQU07Z0NBQ25CekIsS0FBSyxFQUFFbEIsb0VBQW9DOzRCQUM3QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZixDQUFDO0dBbkZ1QkMsUUFBUTtLQUFSQSxRQUFRO1NBcUZ2QjJCLE1BQU0sR0FBRyxDQUFDO0lBQ2pCLE1BQU07OEZBRURuQyxxREFBRztZQUNGYSxVQUFVLEVBQUUsQ0FBQztnQkFDWGtDLEtBQUssRUFBRSxDQUFNO2dCQUNiSSxZQUFZLEVBQUUsQ0FBTTtnQkFDcEJyQyxPQUFPLEVBQUUsQ0FBTTtnQkFDZkMsVUFBVSxFQUFFLENBQVE7Z0JBQ3BCQyxjQUFjLEVBQUUsQ0FBZTtZQUNqQyxDQUFDOzs0RkFFQWYsc0RBQUk7b0JBQUNtRCxPQUFPLEVBQUMsQ0FBVTs4QkFBQyxDQUFJOzs7Ozs7NEZBQzVCaEQsd0RBQU07b0JBQ0xnRCxPQUFPLEVBQUMsQ0FBVTtvQkFDbEJDLFlBQVksRUFBQyxDQUFTO29CQUN0QkMsS0FBSyxFQUFDLENBQVE7b0JBQ2RDLElBQUksRUFBQyxDQUFHOzs7Ozs7Ozs7Ozs7O0FBS2xCLENBQUM7TUF0QlFwQixNQUFNO1NBd0JOcUIsV0FBVyxDQUFDQyxLQUFLLEVBQUUsQ0FBQztJQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBYSxjQUFFRixLQUFLO0lBQ2hDLE1BQU0sNkVBQ0h6RCxxREFBRztRQUNGNEQsR0FBRyxFQUFDLENBQUk7UUFDUi9DLFVBQVUsRUFBRSxDQUFDO1lBQ1hnRCxRQUFRLEVBQUUsQ0FBUTtZQUNsQi9DLE9BQU8sRUFBRSxDQUFNO1lBQ2ZhLGFBQWEsRUFBRSxDQUFnQjtZQUMvQkMsSUFBSSxFQUFFLENBQUM7WUFDUEgsS0FBSyxFQUFFbEIsc0VBQXFDO1lBQzVDNEMsWUFBWSxFQUFFLENBQU07UUFDdEIsQ0FBQzs4RkFFQWxELHNEQUFJO1lBRUgyRCxHQUFHLEVBQUMsQ0FBSTtZQUNSL0MsVUFBVSxFQUFFLENBQUM7Z0JBQ1hpQixZQUFZLEVBQUUsQ0FBSztnQkFDbkJJLE9BQU8sRUFBRSxDQUFLO2dCQUNkaUIsWUFBWSxFQUFFLENBQU07Z0JBQ3BCVyxLQUFLLEVBQUUsQ0FBQztvQkFDTjdDLGVBQWUsRUFBRVYsb0VBQW9DO2dCQUN2RCxDQUFDO1lBQ0gsQ0FBQzs7NEZBRUFQLHFEQUFHO29CQUNGYSxVQUFVLEVBQUUsQ0FBQzt3QkFDWHNDLFlBQVksRUFBRSxDQUFLO29CQUNyQixDQUFDOztvR0FFQWhELHVEQUFLOzRCQUNKVSxVQUFVLEVBQUUsQ0FBQztnQ0FDWGtDLEtBQUssRUFBRSxDQUFNO2dDQUNiaEIsTUFBTSxFQUFFLENBQU07Z0NBQ2RELFlBQVksRUFBRSxDQUFLO2dDQUNuQmhCLE9BQU8sRUFBRSxDQUFjO2dDQUN2Qm9DLFdBQVcsRUFBRSxDQUFLOzRCQUNwQixDQUFDOzRCQUNEYSxHQUFHLEVBQUcsQ0FBc0M7Ozs7OztvR0FFN0M5RCxzREFBSTs0QkFBQzJELEdBQUcsRUFBQyxDQUFRO3NDQUFFbkQsUUFBUSxDQUFDdUQsRUFBRTs7Ozs7O29HQUM5Qi9ELHNEQUFJOzRCQUNIWSxVQUFVLEVBQUUsQ0FBQztnQ0FDWG9ELFFBQVEsRUFBRSxDQUFNO2dDQUNoQkMsVUFBVSxFQUFFLENBQUs7Z0NBQ2pCekMsS0FBSyxFQUFFbEIsb0VBQW9DOzRCQUM3QyxDQUFDOzRCQUNEcUQsR0FBRyxFQUFDLENBQU07c0NBRVQsR0FBRyxDQUFDTyxJQUFJLEdBQUdDLGtCQUFrQjs7Ozs7Ozs7Ozs7O2dCQUdqQzNELFFBQVEsQ0FBQzRELEtBQUs7O1dBdENWNUQsUUFBUSxDQUFDNkQsRUFBRTs7Ozs7Ozs7OztBQTBDeEIsQ0FBQztNQXpEUWQsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0RmllbGQsIEltYWdlLCBCdXR0b24gfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpIHtcclxuICBjb25zdCBbbWVuc2FnZW0sIHNldE1lbnNhZ2VtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaXN0YURlTWVuc2FnZW5zLCBzZXRMaXN0YURlTWVuc2FnZW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbXCIwMDBcIl0sXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vaW5pdGlhdGUuYWxwaGFjb2RlcnMuY29tL2ltYWdlcy85NzcvY3JvcHBlZC0xOTIwLTEwODAtOTc3MjAyLmpwZz80Mzk1KWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgIGJhY2tncm91bmRCbGVuZE1vZGU6IFwibXVsdGlwbHlcIixcclxuICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICBib3hTaGFkb3c6IFwiMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSlcIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgIG1heFdpZHRoOiBcIjk1JVwiLFxyXG4gICAgICAgICAgbWF4SGVpZ2h0OiBcIjk1dmhcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMzJweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjE2cHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIDxNZXNzYWdlTGlzdCBtZW5zYWdlbnM9e1tdfSAvPiAqL31cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICB2YWx1ZT17bWVuc2FnZW19XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgc2V0TWVuc2FnZW0odmFsb3IpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldExpc3RhRGVNZW5zYWdlbnMoLi4ubGlzdGFEZU1lbnNhZ2VucywgbWVuc2FnZW0pO1xyXG4gICAgICAgICAgICAgICAgICBzZXRNZW5zYWdlbShcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICByZXNpemU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHggOHB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJoZWFkaW5nNVwiPkNoYXQ8L1RleHQ+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgIGNvbG9yVmFyaWFudD1cIm5ldXRyYWxcIlxyXG4gICAgICAgICAgbGFiZWw9XCJMb2dvdXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhcIk1lc3NhZ2VMaXN0XCIsIHByb3BzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICB0YWc9XCJ1bFwiXHJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtbi1yZXZlcnNlXCIsXHJcbiAgICAgICAgZmxleDogMSxcclxuICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTZweFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8VGV4dFxyXG4gICAgICAgIGtleT17bWVuc2FnZW0uaWR9XHJcbiAgICAgICAgdGFnPVwibGlcIlxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiNnB4XCIsXHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTJweFwiLFxyXG4gICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI4cHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tL3ZhbmVzc2FtZXRvbmluaS5wbmdgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0IHRhZz1cInN0cm9uZ1wiPnttZW5zYWdlbS5kZX08L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdGFnPVwic3BhblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIHttZW5zYWdlbS50ZXh0b31cclxuICAgICAgPC9UZXh0PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiQnV0dG9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFwcENvbmZpZyIsIkNoYXRQYWdlIiwibWVuc2FnZW0iLCJzZXRNZW5zYWdlbSIsImxpc3RhRGVNZW5zYWdlbnMiLCJzZXRMaXN0YURlTWVuc2FnZW5zIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiY29sb3IiLCJuZXV0cmFscyIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwiSGVhZGVyIiwicG9zaXRpb24iLCJhcyIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidmFsb3IiLCJ0YXJnZXQiLCJvbktleVByZXNzIiwia2V5IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwid2lkdGgiLCJib3JkZXIiLCJyZXNpemUiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsInZhcmlhbnQiLCJjb2xvclZhcmlhbnQiLCJsYWJlbCIsImhyZWYiLCJNZXNzYWdlTGlzdCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInRhZyIsIm92ZXJmbG93IiwiaG92ZXIiLCJzcmMiLCJkZSIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0ZXh0byIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});