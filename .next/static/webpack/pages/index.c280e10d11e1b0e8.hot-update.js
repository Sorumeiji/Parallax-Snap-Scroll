"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullpage/react-fullpage */ \"./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js\");\n/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n// NOTE: if using fullpage extensions/plugins put them here and pass it as props.\n// This is no longer required for the scrollOverflow option.\nvar pluginWrapper = function() {\n/*\r\n\t * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the \"scrollHorizontally\" extension.\r\n\t */ };\nvar originalColors = [\n    '#ff5f45',\n    '#0798ec',\n    '#fc6c7c',\n    '#435b71',\n    'orange',\n    'blue',\n    'purple',\n    'yellow', \n];\nvar App = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(App, _Component);\n    var _super = _createSuper(App);\n    function App(props) {\n        _classCallCheck(this, App);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            sectionsColor: _toConsumableArray(originalColors),\n            fullpages: [\n                {\n                    text: 'Section 1'\n                },\n                {\n                    text: 'Section 2'\n                },\n                {\n                    text: 'Section 3'\n                }, \n            ]\n        };\n        return _this;\n    }\n    _createClass(App, [\n        {\n            key: \"onLeave\",\n            value: function onLeave(origin, destination, direction) {\n                console.log('onLeave', {\n                    origin: origin,\n                    destination: destination,\n                    direction: direction\n                });\n            // arguments are mapped in order of fullpage.js callback arguments do something\n            // with the event\n            }\n        },\n        {\n            key: \"handleChangeColors\",\n            value: function handleChangeColors() {\n                var newColors = this.state.sectionsColor[0] === 'yellow' ? _toConsumableArray(originalColors) : [\n                    'yellow',\n                    'blue',\n                    'white'\n                ];\n                this.setState({\n                    sectionsColor: newColors\n                });\n            }\n        },\n        {\n            key: \"handleAddSection\",\n            value: function handleAddSection() {\n                this.setState(function(state) {\n                    var fullpages = state.fullpages;\n                    var length = fullpages.length;\n                    fullpages.push({\n                        text: \"section \".concat(length + 1),\n                        id: Math.random()\n                    });\n                    return {\n                        fullpages: _toConsumableArray(fullpages)\n                    };\n                });\n            }\n        },\n        {\n            key: \"handleRemoveSection\",\n            value: function handleRemoveSection() {\n                this.setState(function(state) {\n                    var fullpages = state.fullpages;\n                    var newPages = _toConsumableArray(fullpages);\n                    newPages.pop();\n                    return {\n                        fullpages: newPages\n                    };\n                });\n            }\n        },\n        {\n            key: \"moveSectionDown\",\n            value: function moveSectionDown() {\n                fullpage_api.moveSectionDown();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                var fullpages = this.state.fullpages;\n                if (!fullpages.length) {\n                    return null;\n                }\n                var Menu = function() {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu\",\n                        style: {\n                            position: 'fixed',\n                            top: 0,\n                            zIndex: 100\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"actions\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: function() {\n                                            return _this.handleAddSection();\n                                        },\n                                        children: \"Add Section\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kaleb\\\\Documents\\\\Github\\\\Next-FullPage\\\\pages\\\\index.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 7\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: function() {\n                                            return _this.handleRemoveSection();\n                                        },\n                                        children: \"Remove Section\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kaleb\\\\Documents\\\\Github\\\\Next-FullPage\\\\pages\\\\index.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 7\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: function() {\n                                            return _this.handleChangeColors();\n                                        },\n                                        children: \"Change background colors\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kaleb\\\\Documents\\\\Github\\\\Next-FullPage\\\\pages\\\\index.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 7\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: function() {\n                                            return _this.moveSectionDown();\n                                        },\n                                        children: \"Move Section Down\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kaleb\\\\Documents\\\\Github\\\\Next-FullPage\\\\pages\\\\index.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 7\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\kaleb\\\\Documents\\\\Github\\\\Next-FullPage\\\\pages\\\\index.js\",\n                                lineNumber: 103,\n                                columnNumber: 6\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kaleb\\\\Documents\\\\Github\\\\Next-FullPage\\\\pages\\\\index.js\",\n                            lineNumber: 102,\n                            columnNumber: 5\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kaleb\\\\Documents\\\\Github\\\\Next-FullPage\\\\pages\\\\index.js\",\n                        lineNumber: 95,\n                        columnNumber: 4\n                    }, _this);\n                };\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"App\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                children: \"My styled page\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kaleb\\\\Documents\\\\Github\\\\Next-FullPage\\\\pages\\\\index.js\",\n                                lineNumber: 116,\n                                columnNumber: 6\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kaleb\\\\Documents\\\\Github\\\\Next-FullPage\\\\pages\\\\index.js\",\n                            lineNumber: 115,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Menu, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kaleb\\\\Documents\\\\Github\\\\Next-FullPage\\\\pages\\\\index.js\",\n                            lineNumber: 118,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            navigation: true,\n                            // scrollHorizontally = {true}\n                            sectionsColor: this.state.sectionsColor,\n                            render: function(comp) {\n                                return console.log('render prop change') || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3___default().Wrapper), {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"section\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: \" HELLO WORLD\"\n                                        }, void 0, false, void 0, void 0)\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kaleb\\\\Documents\\\\Github\\\\Next-FullPage\\\\pages\\\\index.js\",\n                            lineNumber: 119,\n                            columnNumber: 5\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kaleb\\\\Documents\\\\Github\\\\Next-FullPage\\\\pages\\\\index.js\",\n                    lineNumber: 114,\n                    columnNumber: 4\n                }, this));\n            }\n        }\n    ]);\n    return App;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QURiOztrREFBbUIsQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQU1wRSxNQUFNOzs7OzttR0FHa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUlyQmU7NEJBQ0EsRUFBOEI7NEJBQzlCcEMsYUFBYSxFQUFFOzRCQUNmdUIsTUFBTSxFQUFFLFFBQVEsQ0FBUGMsSUFBSTtnQ0FDWjlCLE1BQU0sQ0FBTkEsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBb0I7O3dDQUV6QmtCLFNBQVMsRUFBQyxDQUFTOzhIQUN0QmEsQ0FBRTtzREFBQyxDQUFZOzs7Ozs7Ozs7Ozs7Ozs7O1lBUXhCLENBQUM7Ozs7RUE5R2dCaEQsS0FBSztBQWlIdkIsTUFBTSxTQUFTTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgUmVhY3RGdWxscGFnZSBmcm9tICdAZnVsbHBhZ2UvcmVhY3QtZnVsbHBhZ2UnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuLy8gTk9URTogaWYgdXNpbmcgZnVsbHBhZ2UgZXh0ZW5zaW9ucy9wbHVnaW5zIHB1dCB0aGVtIGhlcmUgYW5kIHBhc3MgaXQgYXMgcHJvcHMuXHJcbi8vIFRoaXMgaXMgbm8gbG9uZ2VyIHJlcXVpcmVkIGZvciB0aGUgc2Nyb2xsT3ZlcmZsb3cgb3B0aW9uLlxyXG5jb25zdCBwbHVnaW5XcmFwcGVyID0gKCkgPT4ge1xyXG5cdC8qXHJcblx0ICogcmVxdWlyZSgnLi4vc3RhdGljL2Z1bGxwYWdlLnNjcm9sbEhvcml6b250YWxseS5taW4uanMnKTsgLy8gT3B0aW9uYWwuIFJlcXVpcmVkIHdoZW4gdXNpbmcgdGhlIFwic2Nyb2xsSG9yaXpvbnRhbGx5XCIgZXh0ZW5zaW9uLlxyXG5cdCAqL1xyXG59O1xyXG5cclxuY29uc3Qgb3JpZ2luYWxDb2xvcnMgPSBbXHJcblx0JyNmZjVmNDUnLFxyXG5cdCcjMDc5OGVjJyxcclxuXHQnI2ZjNmM3YycsXHJcblx0JyM0MzViNzEnLFxyXG5cdCdvcmFuZ2UnLFxyXG5cdCdibHVlJyxcclxuXHQncHVycGxlJyxcclxuXHQneWVsbG93JyxcclxuXTtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHNlY3Rpb25zQ29sb3I6IFsuLi5vcmlnaW5hbENvbG9yc10sXHJcblx0XHRcdGZ1bGxwYWdlczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICdTZWN0aW9uIDEnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ1NlY3Rpb24gMicsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAnU2VjdGlvbiAzJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdG9uTGVhdmUob3JpZ2luLCBkZXN0aW5hdGlvbiwgZGlyZWN0aW9uKSB7XHJcblx0XHRjb25zb2xlLmxvZygnb25MZWF2ZScsIHsgb3JpZ2luLCBkZXN0aW5hdGlvbiwgZGlyZWN0aW9uIH0pO1xyXG5cdFx0Ly8gYXJndW1lbnRzIGFyZSBtYXBwZWQgaW4gb3JkZXIgb2YgZnVsbHBhZ2UuanMgY2FsbGJhY2sgYXJndW1lbnRzIGRvIHNvbWV0aGluZ1xyXG5cdFx0Ly8gd2l0aCB0aGUgZXZlbnRcclxuXHR9XHJcblxyXG5cdGhhbmRsZUNoYW5nZUNvbG9ycygpIHtcclxuXHRcdGNvbnN0IG5ld0NvbG9ycyA9XHJcblx0XHRcdHRoaXMuc3RhdGUuc2VjdGlvbnNDb2xvclswXSA9PT0gJ3llbGxvdycgPyBbLi4ub3JpZ2luYWxDb2xvcnNdIDogWyd5ZWxsb3cnLCAnYmx1ZScsICd3aGl0ZSddO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdHNlY3Rpb25zQ29sb3I6IG5ld0NvbG9ycyxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlQWRkU2VjdGlvbigpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcblx0XHRcdGNvbnN0IHsgZnVsbHBhZ2VzIH0gPSBzdGF0ZTtcclxuXHRcdFx0Y29uc3QgeyBsZW5ndGggfSA9IGZ1bGxwYWdlcztcclxuXHRcdFx0ZnVsbHBhZ2VzLnB1c2goe1xyXG5cdFx0XHRcdHRleHQ6IGBzZWN0aW9uICR7bGVuZ3RoICsgMX1gLFxyXG5cdFx0XHRcdGlkOiBNYXRoLnJhbmRvbSgpLFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZnVsbHBhZ2VzOiBbLi4uZnVsbHBhZ2VzXSxcclxuXHRcdFx0fTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlUmVtb3ZlU2VjdGlvbigpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcblx0XHRcdGNvbnN0IHsgZnVsbHBhZ2VzIH0gPSBzdGF0ZTtcclxuXHRcdFx0Y29uc3QgbmV3UGFnZXMgPSBbLi4uZnVsbHBhZ2VzXTtcclxuXHRcdFx0bmV3UGFnZXMucG9wKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4geyBmdWxscGFnZXM6IG5ld1BhZ2VzIH07XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG1vdmVTZWN0aW9uRG93bigpIHtcclxuXHRcdGZ1bGxwYWdlX2FwaS5tb3ZlU2VjdGlvbkRvd24oKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgZnVsbHBhZ2VzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuXHRcdGlmICghZnVsbHBhZ2VzLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBNZW51ID0gKCkgPT4gKFxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPSdtZW51J1xyXG5cdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdHRvcDogMCxcclxuXHRcdFx0XHRcdHpJbmRleDogMTAwLFxyXG5cdFx0XHRcdH19PlxyXG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9J2FjdGlvbnMnPlxyXG5cdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQWRkU2VjdGlvbigpfT5BZGQgU2VjdGlvbjwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlU2VjdGlvbigpfT5SZW1vdmUgU2VjdGlvbjwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlQ29sb3JzKCl9PkNoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yczwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMubW92ZVNlY3Rpb25Eb3duKCl9Pk1vdmUgU2VjdGlvbiBEb3duPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nQXBwJz5cclxuXHRcdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHRcdDx0aXRsZT5NeSBzdHlsZWQgcGFnZTwvdGl0bGU+XHJcblx0XHRcdFx0PC9IZWFkPlxyXG5cdFx0XHRcdDxNZW51IC8+XHJcblx0XHRcdFx0PFJlYWN0RnVsbHBhZ2VcclxuXHRcdFx0XHRcdG5hdmlnYXRpb25cclxuXHRcdFx0XHRcdC8vIHNjcm9sbEhvcml6b250YWxseSA9IHt0cnVlfVxyXG5cdFx0XHRcdFx0c2VjdGlvbnNDb2xvcj17dGhpcy5zdGF0ZS5zZWN0aW9uc0NvbG9yfVxyXG5cdFx0XHRcdFx0cmVuZGVyPXsoY29tcCkgPT5cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3JlbmRlciBwcm9wIGNoYW5nZScpIHx8IChcclxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RGdWxscGFnZS5XcmFwcGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlY3Rpb24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDE+IEhFTExPIFdPUkxEPC9oMT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvUmVhY3RGdWxscGFnZS5XcmFwcGVyPlxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIlJlYWN0RnVsbHBhZ2UiLCJIZWFkIiwicGx1Z2luV3JhcHBlciIsIm9yaWdpbmFsQ29sb3JzIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInNlY3Rpb25zQ29sb3IiLCJmdWxscGFnZXMiLCJ0ZXh0Iiwib25MZWF2ZSIsIm9yaWdpbiIsImRlc3RpbmF0aW9uIiwiZGlyZWN0aW9uIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZUNvbG9ycyIsIm5ld0NvbG9ycyIsInNldFN0YXRlIiwiaGFuZGxlQWRkU2VjdGlvbiIsImxlbmd0aCIsInB1c2giLCJpZCIsIk1hdGgiLCJyYW5kb20iLCJoYW5kbGVSZW1vdmVTZWN0aW9uIiwibmV3UGFnZXMiLCJwb3AiLCJtb3ZlU2VjdGlvbkRvd24iLCJmdWxscGFnZV9hcGkiLCJyZW5kZXIiLCJNZW51IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsInpJbmRleCIsInVsIiwibGkiLCJidXR0b24iLCJvbkNsaWNrIiwidGl0bGUiLCJuYXZpZ2F0aW9uIiwiY29tcCIsIldyYXBwZXIiLCJoMSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});