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

/***/ "./src/components/popovers/PopoverBG.jsx":
/*!***********************************************!*\
  !*** ./src/components/popovers/PopoverBG.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _provider_rootStoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/rootStoreProvider */ \"./src/provider/rootStoreProvider.js\");\n/* harmony import */ var _assets_img_textures_bgtop_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/textures/bgtop.png */ \"./src/assets/img/textures/bgtop.png\");\n/* harmony import */ var _assets_img_textures_bgbottom_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img/textures/bgbottom.png */ \"./src/assets/img/textures/bgbottom.png\");\n/* harmony import */ var _common_ChakraNextImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/ChakraNextImage */ \"./src/components/common/ChakraNextImage.jsx\");\n/* harmony import */ var _ClassPopItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClassPopItem */ \"./src/components/popovers/ClassPopItem.jsx\");\n/* harmony import */ var _constants_uiData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/uiData */ \"./src/constants/uiData.js\");\n/* harmony import */ var _GemPopItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GemPopItem */ \"./src/components/popovers/GemPopItem.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar PopoverBG = _s((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(_c = _s(function() {\n    var ref, ref1;\n    _s();\n    var uiStore = (0,_provider_rootStoreProvider__WEBPACK_IMPORTED_MODULE_2__.useUIStore)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Portal, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Popover, {\n                returnFocusOnClose: false,\n                isOpen: uiStore.popover,\n                onClose: function() {\n                    return uiStore.popover = null;\n                },\n                placement: \"right\",\n                closeOnBlur: false,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.PopoverTrigger, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n                            position: \"absolute\",\n                            top: uiStore.popover ? uiStore.popover.y : 0,\n                            left: uiStore.popover ? uiStore.popover.x : 0,\n                            w: uiStore.popover ? \"\".concat(uiStore.popover.width, \"px\") : 0,\n                            h: uiStore.popover ? \"\".concat(uiStore.popover.height, \"px\") : 0,\n                            pointerEvents: \"none\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\aftershock-united\\\\src\\\\components\\\\popovers\\\\PopoverBG.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"H:\\\\aftershock-united\\\\src\\\\components\\\\popovers\\\\PopoverBG.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.PopoverContent, {\n                        rounded: \"none\",\n                        border: \"0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n                            w: \"400px\",\n                            position: \"relative\",\n                            direction: \"column\",\n                            p: \"2px\",\n                            bg: _constants_uiData__WEBPACK_IMPORTED_MODULE_7__.GRADIENT_2,\n                            _before: {\n                                content: '\"\"',\n                                background: _constants_uiData__WEBPACK_IMPORTED_MODULE_7__.GRADIENT_2,\n                                position: \"absolute\",\n                                height: \"100%\",\n                                width: \"100%\",\n                                zIndex: 0,\n                                opacity: 0.4,\n                                filter: \"blur(8px)\"\n                            },\n                            boxShadow: \"3px 3px 30px black\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n                                flex: 1,\n                                zIndex: 1,\n                                bg: \"sec.100\",\n                                children: [\n                                    uiStore.popover,\n                                    ((ref = uiStore.popover) === null || ref === void 0 ? void 0 : ref.type) === \"class\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ClassPopItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"H:\\\\aftershock-united\\\\src\\\\components\\\\popovers\\\\PopoverBG.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 55\n                                    }, _this),\n                                    ((ref1 = uiStore.popover) === null || ref1 === void 0 ? void 0 : ref1.type) === \"gem\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GemPopItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                        fileName: \"H:\\\\aftershock-united\\\\src\\\\components\\\\popovers\\\\PopoverBG.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 53\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"H:\\\\aftershock-united\\\\src\\\\components\\\\popovers\\\\PopoverBG.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"H:\\\\aftershock-united\\\\src\\\\components\\\\popovers\\\\PopoverBG.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"H:\\\\aftershock-united\\\\src\\\\components\\\\popovers\\\\PopoverBG.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\aftershock-united\\\\src\\\\components\\\\popovers\\\\PopoverBG.jsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"H:\\\\aftershock-united\\\\src\\\\components\\\\popovers\\\\PopoverBG.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n}, \"QCBNKCcWKS/oqXUVYS8QGOsV9Fk=\", false, function() {\n    return [\n        _provider_rootStoreProvider__WEBPACK_IMPORTED_MODULE_2__.useUIStore\n    ];\n})), \"QCBNKCcWKS/oqXUVYS8QGOsV9Fk=\", false, function() {\n    return [\n        _provider_rootStoreProvider__WEBPACK_IMPORTED_MODULE_2__.useUIStore\n    ];\n});\n_c1 = PopoverBG;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopoverBG);\nvar _c, _c1;\n$RefreshReg$(_c, \"PopoverBG$observer\");\n$RefreshReg$(_c1, \"PopoverBG\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wb3BvdmVycy9Qb3BvdmVyQkcuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQU95QjtBQUNpQjtBQUNtQjtBQUNUO0FBQ1M7QUFDRjtBQUNyQjtBQUNHO0FBQ21DO0FBQ3ZDOztBQUNyQyxJQUFNaUIsU0FBUyxHQUFHWCxHQUFBQSx5REFBUSxTQUFDLFdBQU07UUEwQ2hCWSxHQUFlLEVBQ2ZBLElBQWU7O0lBMUM5QixJQUFNQSxPQUFPLEdBQUdYLHVFQUFVLEVBQUU7SUFFNUIscUJBQ0UsOERBQUNILG9EQUFNO2tCQUNMO3NCQUNFLDRFQUFDSCxxREFBTztnQkFDTmtCLGtCQUFrQixFQUFFLEtBQUs7Z0JBQ3pCQyxNQUFNLEVBQUVGLE9BQU8sQ0FBQ0csT0FBTztnQkFDdkJDLE9BQU8sRUFBRTsyQkFBT0osT0FBTyxDQUFDRyxPQUFPLEdBQUcsSUFBSTtpQkFBQztnQkFDdkNFLFNBQVMsRUFBQyxPQUFPO2dCQUNqQkMsV0FBVyxFQUFFLEtBQUs7O2tDQUNsQiw4REFBQ3JCLDREQUFjO2tDQUNiLDRFQUFDSCxrREFBSTs0QkFDSHlCLFFBQVEsRUFBQyxVQUFVOzRCQUNuQkMsR0FBRyxFQUFFUixPQUFPLENBQUNHLE9BQU8sR0FBR0gsT0FBTyxDQUFDRyxPQUFPLENBQUNNLENBQUMsR0FBRyxDQUFDOzRCQUM1Q0MsSUFBSSxFQUFFVixPQUFPLENBQUNHLE9BQU8sR0FBR0gsT0FBTyxDQUFDRyxPQUFPLENBQUNRLENBQUMsR0FBRyxDQUFDOzRCQUM3Q0MsQ0FBQyxFQUFFWixPQUFPLENBQUNHLE9BQU8sR0FBRyxFQUFDLENBQXdCLE1BQUUsQ0FBeEJILE9BQU8sQ0FBQ0csT0FBTyxDQUFDVSxLQUFLLEVBQUMsSUFBRSxDQUFDLEdBQUcsQ0FBQzs0QkFDckRDLENBQUMsRUFBRWQsT0FBTyxDQUFDRyxPQUFPLEdBQUcsRUFBQyxDQUF5QixNQUFFLENBQXpCSCxPQUFPLENBQUNHLE9BQU8sQ0FBQ1ksTUFBTSxFQUFDLElBQUUsQ0FBQyxHQUFHLENBQUM7NEJBQ3REQyxhQUFhLEVBQUMsTUFBTTs7Ozs7aUNBQ3BCOzs7Ozs2QkFDYTtrQ0FDakIsOERBQUNoQyw0REFBYzt3QkFBQ2lDLE9BQU8sRUFBQyxNQUFNO3dCQUFDQyxNQUFNLEVBQUMsR0FBRztrQ0FDdkMsNEVBQUNwQyxrREFBSTs0QkFDSDhCLENBQUMsRUFBQyxPQUFPOzRCQUNUTCxRQUFRLEVBQUMsVUFBVTs0QkFDbkJZLFNBQVMsRUFBQyxRQUFROzRCQUNsQkMsQ0FBQyxFQUFDLEtBQUs7NEJBQ1A5QixFQUFFLEVBQUVNLHlEQUFVOzRCQUNkeUIsT0FBTyxFQUFFO2dDQUNQQyxPQUFPLEVBQUUsSUFBSTtnQ0FDYkMsVUFBVSxFQUFFM0IseURBQVU7Z0NBQ3RCVyxRQUFRLEVBQUUsVUFBVTtnQ0FDcEJRLE1BQU0sRUFBRSxNQUFNO2dDQUNkRixLQUFLLEVBQUUsTUFBTTtnQ0FDYlcsTUFBTSxFQUFFLENBQUM7Z0NBQ1RDLE9BQU8sRUFBRSxHQUFHO2dDQUNaQyxNQUFNLEVBQUUsV0FBVzs2QkFDcEI7NEJBQ0RDLFNBQVMsRUFBQyxvQkFBb0I7c0NBQzlCLDRFQUFDN0Msa0RBQUk7Z0NBQUM4QyxJQUFJLEVBQUUsQ0FBQztnQ0FBRUosTUFBTSxFQUFFLENBQUM7Z0NBQUVsQyxFQUFFLEVBQUMsU0FBUzs7b0NBQ25DVSxPQUFPLENBQUNHLE9BQU87b0NBQ2ZILENBQUFBLENBQUFBLEdBQWUsR0FBZkEsT0FBTyxDQUFDRyxPQUFPLGNBQWZILEdBQWUsV0FBTSxHQUFyQkEsS0FBQUEsQ0FBcUIsR0FBckJBLEdBQWUsQ0FBRTZCLElBQUksTUFBSyxPQUFPLGtCQUFJLDhEQUFDbkMscURBQVk7Ozs7NkNBQUc7b0NBQ3JETSxDQUFBQSxDQUFBQSxJQUFlLEdBQWZBLE9BQU8sQ0FBQ0csT0FBTyxjQUFmSCxJQUFlLFdBQU0sR0FBckJBLEtBQUFBLENBQXFCLEdBQXJCQSxJQUFlLENBQUU2QixJQUFJLE1BQUssS0FBSyxrQkFBSSw4REFBQy9CLG1EQUFVOzs7OzZDQUFHOzs7Ozs7cUNBQzdDOzs7OztpQ0FDRjs7Ozs7NkJBQ1E7Ozs7OztxQkFDVDt5QkFDVDs7Ozs7YUFDSSxDQUNWO0NBQ0Y7O1FBbERpQlQsbUVBQVU7O0dBa0QxQjs7UUFsRGdCQSxtRUFBVTs7RUFrRDFCOztBQUVGLCtEQUFlVSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3BvcG92ZXJzL1BvcG92ZXJCRy5qc3g/MzVhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBGbGV4LFxuICBQb3BvdmVyLFxuICBQb3BvdmVyQ29udGVudCxcbiAgUG9wb3ZlclRyaWdnZXIsXG4gIFBvcnRhbCxcbiAgVGV4dCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJ1xuaW1wb3J0IHsgdXNlVUlTdG9yZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVyL3Jvb3RTdG9yZVByb3ZpZGVyJ1xuaW1wb3J0IGJnIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvdGV4dHVyZXMvYmd0b3AucG5nJ1xuaW1wb3J0IGJnQm90dG9tIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvdGV4dHVyZXMvYmdib3R0b20ucG5nJ1xuaW1wb3J0IHsgQ2hha3JhTmV4dEltYWdlIH0gZnJvbSAnLi4vY29tbW9uL0NoYWtyYU5leHRJbWFnZSdcbmltcG9ydCBDbGFzc0l0ZW0gZnJvbSAnLi9DbGFzc1BvcEl0ZW0nXG5pbXBvcnQgQ2xhc3NQb3BJdGVtIGZyb20gJy4vQ2xhc3NQb3BJdGVtJ1xuaW1wb3J0IHsgR1JBRElFTlQsIEdSQURJRU5UXzIsIEdSQURJRU5UX0dSQVkgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvdWlEYXRhJ1xuaW1wb3J0IEdlbVBvcEl0ZW0gZnJvbSAnLi9HZW1Qb3BJdGVtJ1xuY29uc3QgUG9wb3ZlckJHID0gb2JzZXJ2ZXIoKCkgPT4ge1xuICBjb25zdCB1aVN0b3JlID0gdXNlVUlTdG9yZSgpXG5cbiAgcmV0dXJuIChcbiAgICA8UG9ydGFsPlxuICAgICAgPD5cbiAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICByZXR1cm5Gb2N1c09uQ2xvc2U9e2ZhbHNlfVxuICAgICAgICAgIGlzT3Blbj17dWlTdG9yZS5wb3BvdmVyfVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+ICh1aVN0b3JlLnBvcG92ZXIgPSBudWxsKX1cbiAgICAgICAgICBwbGFjZW1lbnQ9J3JpZ2h0J1xuICAgICAgICAgIGNsb3NlT25CbHVyPXtmYWxzZX0+XG4gICAgICAgICAgPFBvcG92ZXJUcmlnZ2VyPlxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgcG9zaXRpb249J2Fic29sdXRlJ1xuICAgICAgICAgICAgICB0b3A9e3VpU3RvcmUucG9wb3ZlciA/IHVpU3RvcmUucG9wb3Zlci55IDogMH1cbiAgICAgICAgICAgICAgbGVmdD17dWlTdG9yZS5wb3BvdmVyID8gdWlTdG9yZS5wb3BvdmVyLnggOiAwfVxuICAgICAgICAgICAgICB3PXt1aVN0b3JlLnBvcG92ZXIgPyBgJHt1aVN0b3JlLnBvcG92ZXIud2lkdGh9cHhgIDogMH1cbiAgICAgICAgICAgICAgaD17dWlTdG9yZS5wb3BvdmVyID8gYCR7dWlTdG9yZS5wb3BvdmVyLmhlaWdodH1weGAgOiAwfVxuICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzPSdub25lJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1BvcG92ZXJUcmlnZ2VyPlxuICAgICAgICAgIDxQb3BvdmVyQ29udGVudCByb3VuZGVkPSdub25lJyBib3JkZXI9JzAnPlxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgdz0nNDAwcHgnXG4gICAgICAgICAgICAgIHBvc2l0aW9uPSdyZWxhdGl2ZSdcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXG4gICAgICAgICAgICAgIHA9JzJweCdcbiAgICAgICAgICAgICAgYmc9e0dSQURJRU5UXzJ9XG4gICAgICAgICAgICAgIF9iZWZvcmU9e3tcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogR1JBRElFTlRfMixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHpJbmRleDogMCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiAnYmx1cig4cHgpJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYm94U2hhZG93PSczcHggM3B4IDMwcHggYmxhY2snPlxuICAgICAgICAgICAgICA8RmxleCBmbGV4PXsxfSB6SW5kZXg9ezF9IGJnPSdzZWMuMTAwJz5cbiAgICAgICAgICAgICAgICB7dWlTdG9yZS5wb3BvdmVyfVxuICAgICAgICAgICAgICAgIHt1aVN0b3JlLnBvcG92ZXI/LnR5cGUgPT09ICdjbGFzcycgJiYgPENsYXNzUG9wSXRlbSAvPn1cbiAgICAgICAgICAgICAgICB7dWlTdG9yZS5wb3BvdmVyPy50eXBlID09PSAnZ2VtJyAmJiA8R2VtUG9wSXRlbSAvPn1cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvUG9wb3ZlckNvbnRlbnQ+XG4gICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgIDwvPlxuICAgIDwvUG9ydGFsPlxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyQkdcbiJdLCJuYW1lcyI6WyJGbGV4IiwiUG9wb3ZlciIsIlBvcG92ZXJDb250ZW50IiwiUG9wb3ZlclRyaWdnZXIiLCJQb3J0YWwiLCJUZXh0Iiwib2JzZXJ2ZXIiLCJ1c2VVSVN0b3JlIiwiYmciLCJiZ0JvdHRvbSIsIkNoYWtyYU5leHRJbWFnZSIsIkNsYXNzSXRlbSIsIkNsYXNzUG9wSXRlbSIsIkdSQURJRU5UIiwiR1JBRElFTlRfMiIsIkdSQURJRU5UX0dSQVkiLCJHZW1Qb3BJdGVtIiwiUG9wb3ZlckJHIiwidWlTdG9yZSIsInJldHVybkZvY3VzT25DbG9zZSIsImlzT3BlbiIsInBvcG92ZXIiLCJvbkNsb3NlIiwicGxhY2VtZW50IiwiY2xvc2VPbkJsdXIiLCJwb3NpdGlvbiIsInRvcCIsInkiLCJsZWZ0IiwieCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwicm91bmRlZCIsImJvcmRlciIsImRpcmVjdGlvbiIsInAiLCJfYmVmb3JlIiwiY29udGVudCIsImJhY2tncm91bmQiLCJ6SW5kZXgiLCJvcGFjaXR5IiwiZmlsdGVyIiwiYm94U2hhZG93IiwiZmxleCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/popovers/PopoverBG.jsx\n");

/***/ })

});