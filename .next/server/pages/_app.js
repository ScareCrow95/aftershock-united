"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
// EXTERNAL MODULE: external "mobx-react-lite"
var external_mobx_react_lite_ = __webpack_require__(944);
// EXTERNAL MODULE: ./src/provider/rootStoreProvider.js + 2 modules
var rootStoreProvider = __webpack_require__(248);
;// CONCATENATED MODULE: external "@chakra-ui/theme-tools"
const theme_tools_namespaceObject = require("@chakra-ui/theme-tools");
;// CONCATENATED MODULE: ./src/theme/dark.js


const breakpoints = (0,theme_tools_namespaceObject.createBreakpoints)({
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
const darkTheme = (0,react_.extendTheme)({
    colors,
    sizes,
    components: {
        Button: {
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

;// CONCATENATED MODULE: ./src/theme/light.js


const light_breakpoints = (0,theme_tools_namespaceObject.createBreakpoints)({
    sm: "32em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em"
});
const light_colors = {
    pr: {
        100: "#ff6a00",
        200: "#e85900"
    },
    blue: {
        100: "#4d84f1",
        200: "#3964b8"
    },
    green: {
        100: "#26ca4f"
    },
    red: {
        50: "#d05f5f",
        100: "#d64141"
    },
    gold: {
        100: "#eba41b"
    },
    sec: {
        100: "#f3f3f3",
        150: "#ebebeb",
        200: "#e9e9e9",
        300: "#d9d9d9"
    },
    input: {
        100: "#fafafa"
    },
    border: {
        25: "#ededed",
        50: "#e4e4e4",
        75: "#c4c4c4",
        100: "#b1b1b1"
    },
    grey: {
        100: "#141414",
        200: "#313131",
        300: "#525252"
    }
};
const light_sizes = {};
const lightTheme = (0,react_.extendTheme)({
    colors: light_colors,
    sizes: light_sizes,
    components: {
        Button: {
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
        initialColorMode: "light"
    },
    breakpoints: light_breakpoints,
    fonts: {
        heading: "Raleway",
        body: "Raleway"
    }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/assets/img/diablo-icon.png
/* harmony default export */ const diablo_icon = ({"src":"/_next/static/media/diablo-icon.1c7671dd.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA50lEQVR42i2Pv0sCYRzGP2U4Bf0FQUsUuDY2VHBNCsbpDRVEFATSHBQ0ZPH24+yog67BQY+7xR+IOLooCC46OPnfvPcV8X3Wz8PD8yFqlNdqsA7wD6oFCqB2XUgD8AopgPjl3g5uLrRfzMo7WADVy/yq5Fp7znTQlOjvU+J6RUbdQAInZwHws72rPkBP+qE8neUSG/R8HEn9sSQeKMKdfeVCMmz/ykPB1hboWVdJdJWV0PzBz2w6g/hNwvKddL5LMq0+SxNOAdiCDYDR123eOz9OvOKR9Ax0DzNpTFLGSPlmtnJysIQsAE9TVjhfrm5dAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./src/components/common/ChakraNextImage.jsx
var ChakraNextImage = __webpack_require__(476);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: ./src/components/common/SocialIcon.jsx
var SocialIcon = __webpack_require__(64);
;// CONCATENATED MODULE: ./src/components/layout/Header.jsx








const Header = (0,external_mobx_react_lite_.observer)(()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        bg: "sec.300",
        p: 4,
        align: "center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ChakraNextImage/* ChakraNextImage */.N, {
                src: diablo_icon,
                boxSize: 6
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                ml: 2,
                fontWeight: "semibold",
                children: "Diablo Immortal"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon/* default */.Z, {
                color: "grey.300",
                icon: bs_.BsTwitch,
                hover: "#A970FF",
                boxSize: 5,
                mr: 4
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon/* default */.Z, {
                color: "grey.300",
                icon: bs_.BsTwitter,
                hover: "#1D9BF0",
                boxSize: 5,
                mr: 4
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon/* default */.Z, {
                color: "grey.300",
                icon: bs_.BsFacebook,
                hover: "#3982E4",
                boxSize: 5,
                mr: 4
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon/* default */.Z, {
                color: "grey.300",
                icon: bs_.BsDiscord,
                hover: "#5662F6",
                boxSize: 5,
                mr: 2
            })
        ]
    });
});
/* harmony default export */ const layout_Header = (Header);

;// CONCATENATED MODULE: external "@chakra-ui/icons"
const icons_namespaceObject = require("@chakra-ui/icons");
;// CONCATENATED MODULE: ./src/assets/img/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.36fb5218.png","height":80,"width":80,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZ0lEQVR42iXIvQ1BUQAG0C/+OgMoNKKTGEDy1tCoGIHisYCGFWjfAnbBIKI7l+TmdCd6Yu7rLvoSQ3FRNGIgEWMfbzNLqXFU/HlY1Di4unk6e0lsFWt7K61iFyedxkZMdNqImBpJ9QObpVSrc141NAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/assets/img/headerBG.png
/* harmony default export */ const headerBG = ({"src":"/_next/static/media/headerBG.09cd02e6.png","height":114,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAPUlEQVR4nB3KsRHAIAwEwXsJeYwdukOHFEhOZSD46GduNdo3wyf1Bi/C8nsBM3JC/d8A3gpXJHwSxklIsABbOgffBJDbIgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/assets/img/title-logo.png
/* harmony default export */ const title_logo = ({"src":"/_next/static/media/title-logo.b3692d49.png","height":83,"width":312,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAK0lEQVR42mMIdg7ytYrySImO9wvzD/XxZpjP/Vvie+LX2K+xP0ofys/lAgDOGw3cSYlslQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/constants/menu.js
const MenuData = [
    {
        id: "Home",
        subMenu: [],
        icon: "home"
    },
    {
        id: "Classes",
        subMenu: [
            {
                id: "Barbarian"
            },
            {
                id: "Crusader"
            },
            {
                id: "Demon Hunter"
            },
            {
                id: "Barbarian"
            },
            {
                id: "Monk"
            },
            {
                id: "Necromancer"
            },
            {
                id: "Wizard"
            }, 
        ],
        icon: "classes"
    },
    {
        id: "Join us",
        subMenu: [],
        icon: "home"
    },
    {
        id: "Creators",
        subMenu: [],
        icon: "home"
    }, 
];

;// CONCATENATED MODULE: ./src/components/layout/NavigationMenu.jsx









const NavigationMenu = (0,external_mobx_react_lite_.observer)(()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        h: 16,
        bg: "#DA8313",
        // bg='red.100'
        align: "center",
        justify: "center",
        p: 4,
        boxShadow: "dark-lg",
        zIndex: 2,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ChakraNextImage/* ChakraNextImage */.N, {
                src: headerBG,
                position: "absolute",
                h: 16,
                w: "225px",
                left: "0px",
                objectFit: "contain"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ChakraNextImage/* ChakraNextImage */.N, {
                src: headerBG,
                position: "absolute",
                h: 16,
                w: "225px",
                right: "0px",
                transform: "scale(-1.0,1)",
                objectFit: "contain"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                w: "1400px",
                position: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ChakraNextImage/* ChakraNextImage */.N, {
                        src: logo,
                        boxSize: 8
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ChakraNextImage/* ChakraNextImage */.N, {
                        src: title_logo,
                        objectFit: "contain",
                        w: 32,
                        h: 8,
                        ml: 2
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                    MenuData.map((x)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                        align: "center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                ml: 8,
                                                fontWeight: "semibold",
                                                fontSize: "lg",
                                                color: "sec.300",
                                                children: x.id
                                            }),
                                            x.subMenu.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.ChevronDownIcon, {
                                                ml: 2,
                                                boxSize: 5,
                                                color: "sec.100"
                                            })
                                        ]
                                    })
                                }),
                                x.subMenu.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuList, {
                                        bg: "sec.200",
                                        children: x.subMenu.map((item)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                _hover: {
                                                    bg: "sec.300"
                                                },
                                                children: item.id
                                            }, item.id);
                                        })
                                    })
                                })
                            ]
                        }, x.id);
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const layout_NavigationMenu = (NavigationMenu);

;// CONCATENATED MODULE: ./src/assets/img/bgPattern.png
/* harmony default export */ const bgPattern = ({"src":"/_next/static/media/bgPattern.e60d7f93.png","height":246,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAvElEQVR42oWOMQ6CMABF26VL8w+o59ALaBxRdoYa2wQJkEBlsEHKBUjYWAgJA5EELmH1Av7tJz/vffI383umx8OJ7nc7GscxTZKE5nlON5stnaaJkqsQLIoitiwLW9eVNU3DfN9nRVGwtm0ZCYKA28ry6lXxYRi41ppba3lZltzROLlJCXmTUFIhDEN4nodxHJGmKe6uE6UUhBDo+x7GGDg8zNPAaeEo+H5AXdfIsuw3cG5czmdo/UDXdfgAQgllulAMGE8AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/layout/Layout.jsx









/* #region  Font Weights */ 









const Layout = (0,external_mobx_react_lite_.observer)(({ children  })=>{
    const store = (0,rootStoreProvider/* useUIStore */.HB)();
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        theme: store.theme === "dark" ? darkTheme : lightTheme,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
            direction: "column",
            h: "100vh",
            position: "relative",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(layout_NavigationMenu, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    bg: "sec.150",
                    justify: "center",
                    background: `url('/bg.png')`,
                    backgroundSize: "256px",
                    backgroundRepeat: "repeat",
                    children: children
                })
            ]
        })
    });
});
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./src/pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(rootStoreProvider/* RootStoreProvider */.LD, {
        hydrationData: pageProps.hydrationData,
        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 944:
/***/ ((module) => {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

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
var __webpack_exports__ = __webpack_require__.X(0, [675,743], () => (__webpack_exec__(558)));
module.exports = __webpack_exports__;

})();