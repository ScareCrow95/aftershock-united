"use strict";
(() => {
var exports = {};
exports.id = 809;
exports.ids = [809];
exports.modules = {

/***/ 4683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gem": () => (/* binding */ Gem),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_HeadingContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3231);
/* harmony import */ var _constants_data_gems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2281);
/* harmony import */ var _provider_rootStoreProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7486);







const Gem = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(({ x  })=>{
    const uiStore = (0,_provider_rootStoreProvider__WEBPACK_IMPORTED_MODULE_6__/* .useUIStore */ .HB)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        direction: "column",
        align: "center",
        role: "group",
        onMouseEnter: (e)=>{
            uiStore.setPopover(e, x.id, "gem", 0, 20);
        },
        onMouseLeave: (e)=>{
            uiStore.popover = null;
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                py: 4,
                borderWidth: "2px",
                borderColor: "transparent",
                _groupHover: {
                    borderColor: "cyan",
                    boxShadow: "inset 0 0 10px cyan"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                    _groupHover: {
                        transform: "scale(1.16)",
                        transition: "100ms ease-in-out"
                    },
                    src: `https://vc-static-server.nyc3.digitaloceanspaces.com/personal/gems/${x.id}.webp`,
                    boxSize: "130px",
                    alt: x.id,
                    objectFit: "contain"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                w: "90px",
                mt: 1,
                align: "center",
                fontWeight: "semibold",
                _groupHover: {
                    textShadow: "0 0 6px orange",
                    color: "pr.100"
                },
                fontSize: "sm",
                color: "grey.300",
                children: x.name
            })
        ]
    });
});
const index = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(({ data  })=>{
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        borderLeftWidth: "3px",
        borderRightWidth: "3px",
        borderLeftColor: "pr.100",
        borderRightColor: "pr.100",
        direction: "column",
        boxShadow: "dark-lg",
        flex: 1,
        bg: "sec.100",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                p: 4,
                px: 8,
                mt: 2,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                    placeholder: "Search for Gem",
                    value: selected,
                    onChange: (e)=>{
                        setSelected(e.target.value);
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_HeadingContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: "1 Star Legendary Gems"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                wrap: "wrap",
                px: 4,
                children: data.filter((x)=>{
                    if (selected) {
                        return x.rarity === 1 && x.name.toLowerCase().includes(selected.toLowerCase());
                    } else {
                        return x.rarity === 1;
                    }
                }).map((x)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Gem, {
                        x: x
                    }, x.id);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_HeadingContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: "3 Star Legendary Gems"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                wrap: "wrap",
                px: 4,
                children: data.filter((x)=>{
                    if (selected) {
                        return x.rarity === 3 && x.name.toLowerCase().includes(selected.toLowerCase());
                    } else {
                        return x.rarity === 3;
                    }
                }).map((x)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Gem, {
                        x: x
                    }, x.id);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_HeadingContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: "5 Star Legendary Gems"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                wrap: "wrap",
                px: 4,
                mb: 8,
                children: data.filter((x)=>{
                    if (selected) {
                        return x.rarity === 5 && x.name.toLowerCase().includes(selected.toLowerCase());
                    } else {
                        return x.rarity === 5;
                    }
                }).map((x)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Gem, {
                        x: x
                    }, x.id);
                })
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);
async function getStaticProps(context) {
    /**
   * get Data later
   */ const data = _constants_data_gems__WEBPACK_IMPORTED_MODULE_5__/* ._gems */ .z;
    console.log(data);
    return {
        props: {
            data
        }
    };
}


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 5944:
/***/ ((module) => {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [486,231], () => (__webpack_exec__(4683)));
module.exports = __webpack_exports__;

})();