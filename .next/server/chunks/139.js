"use strict";
exports.id = 139;
exports.ids = [139];
exports.modules = {

/***/ 4476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ChakraNextImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);




const ChakraNextImage = (props)=>{
    const { src , alt , objectFit , objectPosition , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        position: "relative",
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
            objectFit: objectFit || "cover",
            objectPosition: objectPosition || "none",
            layout: "fill",
            src: src,
            alt: alt,
            style: {
                filter: props.filter
            }
        })
    });
};


/***/ }),

/***/ 7064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);



const SocialIcon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        as: props.icon,
        _hover: {
            color: props.hover
        },
        cursor: "pointer",
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialIcon);


/***/ }),

/***/ 9374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Le": () => (/* binding */ GRADIENT),
/* harmony export */   "Pq": () => (/* binding */ GRADIENT_2),
/* harmony export */   "Qe": () => (/* binding */ GRADIENT_GRAY)
/* harmony export */ });
/* harmony import */ var _theme_dark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9323);

const GRADIENT = `linear-gradient(to bottom right, orange, transparent, orange)`;
const GRADIENT_2 = `linear-gradient(45deg, transparent, transparent, cyan)`;
const GRADIENT_GRAY = `linear-gradient(to bottom right, ${_theme_dark__WEBPACK_IMPORTED_MODULE_0__/* .colors.sec[100] */ .O.sec[100]}, transparent, ${_theme_dark__WEBPACK_IMPORTED_MODULE_0__/* .colors.sec[200] */ .O.sec[200]})`;


/***/ }),

/***/ 9323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ colors),
/* harmony export */   "$": () => (/* binding */ darkTheme)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(429);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);


const breakpoints = (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.createBreakpoints)({
    sm: "32em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em"
});
const colors = {
    sec: {
        100: "#212121",
        150: "#1a1a1a",
        200: "#171717",
        300: "#101010"
    },
    grey: {
        100: "#fafafa",
        200: "#c7c7c7",
        300: "#a3a3a3"
    },
    input: {
        100: "#474747"
    },
    border: {
        25: "#323232",
        50: "#474747",
        75: "#505050",
        100: "#555"
    },
    pr: {
        100: "#EC911D",
        200: "#B05D13"
    },
    blue: {
        100: "#4694ff",
        200: "#2367cc"
    },
    green: {
        50: "#5bd91c",
        100: "#00a300"
    },
    red: {
        50: "#d05f5f",
        100: "#d64141"
    },
    gold: {
        100: "#fee3ae"
    }
};
const sizes = {};
const darkTheme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    colors,
    sizes,
    components: {
        Button: {
            baseStyle: {
                _focus: {
                    boxShadow: "none"
                }
            }
        },
        Input: {
            baseStyle: {
                _focus: {
                    boxShadow: "none"
                }
            }
        }
    },
    shadows: {
        outline: "0 !important"
    },
    config: {
        useSystemColorMode: false,
        initialColorMode: "dark"
    },
    breakpoints,
    fonts: {
        heading: "Raleway",
        body: "Raleway"
    }
});


/***/ })

};
;