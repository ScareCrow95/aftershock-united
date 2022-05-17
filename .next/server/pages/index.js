"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
// EXTERNAL MODULE: external "mobx-react-lite"
var external_mobx_react_lite_ = __webpack_require__(944);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "react-responsive-carousel"
const external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");
;// CONCATENATED MODULE: ./src/assets/img/carousel/1.png
/* harmony default export */ const _1 = ({"src":"/_next/static/media/1.98900331.png","height":270,"width":760,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAVElEQVR42mMwd/S19Y8Nqe9PbJ9VMGlFQlW/Y0C0oYUTg1VgtE1MdkDHjPi+qbnTV/llV1v5hqgZWjJou3paxGa557YaBUW5ZdfpeEbI6Jmr6JsDAPetGTsHEeoFAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/assets/img/carousel/2.png
/* harmony default export */ const _2 = ({"src":"/_next/static/media/2.a229ef42.png","height":270,"width":760,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAUUlEQVR42mOwUFN3tzI2dnDLiooujk1KCgkDIl9nDwY1BZVQa8v+hLhQF7fcsICWzIzyyIiKsFAGBVlZL339rrBQPXWDkuig2sTIAj/XVG93AC7ZFlSqTKH5AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/assets/img/carousel/3.png
/* harmony default export */ const _3 = ({"src":"/_next/static/media/3.8ef09cdb.png","height":270,"width":760,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAU0lEQVR42mMQ4+fRkxAylhN0VhG2UxHSkOJXFeOXEuBlEObltpYVMlMQMpASMhYQURMVUhUWUBURZFAT4rOTFraXEImWFp5mKeQiKhQsLhQkIQQAORwJJSIQ+OYAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/assets/img/carousel/4.png
/* harmony default export */ const _4 = ({"src":"/_next/static/media/4.3fc07459.png","height":270,"width":760,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAU0lEQVR42mMQExL2MFSrjnCeUpa4Ytq8dH93RytTEX5+BikRISt99bJIn/wgz+zwsBgPZzMzU2kpCQYJdlZ1CTE7RblIaxN3IyMrPT01FVURMTEAxRgQp0yhdjoAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./src/components/common/ChakraNextImage.jsx
var ChakraNextImage = __webpack_require__(476);
;// CONCATENATED MODULE: ./src/components/home/HomeCarousel.jsx










const HomeCarousel = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_responsive_carousel_namespaceObject.Carousel, {
        emulateTouch: true,
        infiniteLoop: true,
        showStatus: false,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                position: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ChakraNextImage/* ChakraNextImage */.N, {
                        src: _1,
                        w: "100%",
                        h: "300px"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        p: 4,
                        direction: "column",
                        position: "absolute",
                        w: "100%",
                        left: "0px",
                        bg: "rgb(0,0,0,.6)",
                        bottom: "0px",
                        pb: "40px",
                        align: "flex-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontWeight: "bold",
                                fontSize: "2xl",
                                color: "pr.100",
                                children: "Non blandit massa"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                align: "left",
                                children: "Non sodales neque sodales ut etiam sit amet nisl. Ac turpis egestas sed tempus urna et pharetra. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Sagittis id consectetur purus ut faucibus."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ChakraNextImage/* ChakraNextImage */.N, {
                    src: _2,
                    w: "100%",
                    h: "300px"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                position: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ChakraNextImage/* ChakraNextImage */.N, {
                        src: _3,
                        w: "100%",
                        h: "300px"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        p: 4,
                        direction: "column",
                        position: "absolute",
                        left: "0px",
                        bg: "rgb(0,0,0,.6)",
                        bottom: "0px",
                        w: "100%",
                        pb: "40px",
                        align: "flex-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontWeight: "bold",
                                fontSize: "2xl",
                                color: "pr.100",
                                children: "Risus feugiat in ante"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                align: "left",
                                children: "Non sodales neque sodales ut etiam sit amet nisl. Ac turpis egestas sed tempus urna et pharetra. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Sagittis id consectetur purus ut faucibus."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ChakraNextImage/* ChakraNextImage */.N, {
                    src: _4,
                    w: "100%",
                    h: "300px"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/assets/img/twitch.png
/* harmony default export */ const twitch = ({"src":"/_next/static/media/twitch.85b647ee.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6UlEQVR42jXKMUtCYRyF8T9Ue01JRFNDS1CfoCGMgohqaOkLRFNQLgYtYddyuN3UxoSWoLGhyaXCySEqGySassWWEEXEe5/jK+KzncPP+p3PkSoW0PsT0WsRfTwTvtwjf4mEXe+w602hv18koeY/6rQJ6z8ou+FAbotjL+ZAbXB+llClRPj9hm72HMhvc+RND4CEWg0k0al9ocwiScttcngxj6pluhJRFNF2WA8+FTMm7TLOydUaSs+ixzy6S6JTo2rGuPUL4iw75Aer1DMLlNMznBX2iZkrNcaoDQtWSNweMDHc2XVGzMx6UPyk0soTjLMAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/assets/img/youtube.webp
/* harmony default export */ const youtube = ({"src":"/_next/static/media/youtube.4e47261a.webp","height":1771,"width":2560,"blurDataURL":"data:image/webp;base64,UklGRqQAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSCkAAAABYBAAYJnkc1b79scQETEBNG73vSVg8pBP+c/5z3EeBZOHnKXtfvYEAQBWUDggVAAAAFACAJ0BKggABgACQDglsAJ0ugH4AAM4jx/u8AD+0rF7vb/s/9dN0+t5C/kyUK5cdFx/u5kbktPXHiRr/+FXxuQxHf/AoI2Ar5ZH8SF+FNx3/D+AAA=="});
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: ./src/components/common/SocialIcon.jsx
var SocialIcon = __webpack_require__(64);
;// CONCATENATED MODULE: ./src/components/home/Activity.jsx










const Activity = (0,external_mobx_react_lite_.observer)(()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        direction: "column",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                align: "center",
                direction: "column",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        align: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                                as: fa_namespaceObject.FaStar,
                                boxSize: 8,
                                mr: 4,
                                color: "pr.100"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontWeight: "bold",
                                fontSize: "2xl",
                                children: "Featured Creators"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        p: 4,
                        my: 4,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                align: "center",
                                bg: "sec.200",
                                p: 4,
                                mx: 3,
                                borderWidth: "2px",
                                borderColor: "transparent",
                                _hover: {
                                    transform: "scale(1.04)",
                                    transition: "200ms",
                                    borderColor: "pr.100",
                                    boxShadow: "dark-lg"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                        src: "https://randomuser.me/api/portraits/men/22.jpg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.AvatarBadge, {
                                            boxSize: "1em",
                                            bg: "green.500"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                        direction: "column",
                                        ml: 4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontWeight: "semibold",
                                                children: "Martin Hernandez"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                                mt: 1,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon/* default */.Z, {
                                                        color: "grey.300",
                                                        icon: bs_.BsTwitch,
                                                        hover: "#A970FF",
                                                        boxSize: 4,
                                                        mr: 2
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon/* default */.Z, {
                                                        color: "grey.300",
                                                        icon: bs_.BsTwitter,
                                                        hover: "#1D9BF0",
                                                        boxSize: 4,
                                                        mr: 2
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon/* default */.Z, {
                                                        color: "grey.300",
                                                        icon: bs_.BsFacebook,
                                                        hover: "#3982E4",
                                                        boxSize: 4,
                                                        mr: 2
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon/* default */.Z, {
                                                        color: "grey.300",
                                                        icon: bs_.BsDiscord,
                                                        hover: "#5662F6",
                                                        boxSize: 4,
                                                        mr: 2
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                align: "center",
                                bg: "sec.200",
                                p: 4,
                                mx: 3,
                                borderWidth: "2px",
                                borderColor: "transparent",
                                _hover: {
                                    transform: "scale(1.04)",
                                    transition: "200ms",
                                    borderColor: "pr.100",
                                    boxShadow: "dark-lg"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                        src: "https://randomuser.me/api/portraits/men/8.jpg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.AvatarBadge, {
                                            boxSize: "1em",
                                            bg: "green.500"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                        direction: "column",
                                        ml: 4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontWeight: "semibold",
                                                children: "Cody Wagner"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                                mt: 1,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon/* default */.Z, {
                                                        color: "grey.300",
                                                        icon: bs_.BsTwitch,
                                                        hover: "#A970FF",
                                                        boxSize: 4,
                                                        mr: 2
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon/* default */.Z, {
                                                        color: "grey.300",
                                                        icon: bs_.BsTwitter,
                                                        hover: "#1D9BF0",
                                                        boxSize: 4,
                                                        mr: 2
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon/* default */.Z, {
                                                        color: "grey.300",
                                                        icon: bs_.BsFacebook,
                                                        hover: "#3982E4",
                                                        boxSize: 4,
                                                        mr: 2
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon/* default */.Z, {
                                                        color: "grey.300",
                                                        icon: bs_.BsDiscord,
                                                        hover: "#5662F6",
                                                        boxSize: 4,
                                                        mr: 2
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                align: "center",
                                bg: "sec.200",
                                p: 4,
                                mx: 3,
                                borderWidth: "2px",
                                borderColor: "transparent",
                                _hover: {
                                    transform: "scale(1.04)",
                                    transition: "200ms",
                                    borderColor: "pr.100",
                                    boxShadow: "dark-lg"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                        src: "https://randomuser.me/api/portraits/men/3.jpg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.AvatarBadge, {
                                            boxSize: "1em",
                                            bg: "green.500"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                        direction: "column",
                                        ml: 4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontWeight: "semibold",
                                                children: "Jeremy Rogers"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                                mt: 1,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon/* default */.Z, {
                                                        color: "grey.300",
                                                        icon: bs_.BsTwitch,
                                                        hover: "#A970FF",
                                                        boxSize: 4,
                                                        mr: 2
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon/* default */.Z, {
                                                        color: "grey.300",
                                                        icon: bs_.BsTwitter,
                                                        hover: "#1D9BF0",
                                                        boxSize: 4,
                                                        mr: 2
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon/* default */.Z, {
                                                        color: "grey.300",
                                                        icon: bs_.BsFacebook,
                                                        hover: "#3982E4",
                                                        boxSize: 4,
                                                        mr: 2
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon/* default */.Z, {
                                                        color: "grey.300",
                                                        icon: bs_.BsDiscord,
                                                        hover: "#5662F6",
                                                        boxSize: 4,
                                                        mr: 2
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                justify: "center",
                pt: 8,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                align: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ChakraNextImage/* ChakraNextImage */.N, {
                                        src: twitch,
                                        boxSize: 8
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        fontSize: "xl",
                                        ml: 3,
                                        fontWeight: "semibold",
                                        children: "Live Streamers"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                direction: "column",
                                mt: 8,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                        align: "center",
                                        w: "200px",
                                        mb: 4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                                name: "ChoflyChosen",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.AvatarBadge, {
                                                    boxSize: "1em",
                                                    bg: "green.500"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontWeight: "semibold",
                                                ml: 2,
                                                children: "ChoflyChosen"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                                                as: fa_namespaceObject.FaVideo,
                                                boxSize: 5,
                                                color: "pr.100"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                        align: "center",
                                        w: "200px",
                                        mb: 4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                                name: "Aaron Rock",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.AvatarBadge, {
                                                    boxSize: "1em",
                                                    bg: "green.500"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontWeight: "semibold",
                                                ml: 2,
                                                children: "Aron Rock"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                                                as: fa_namespaceObject.FaVideo,
                                                boxSize: 5,
                                                color: "pr.100"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                        align: "center",
                                        w: "200px",
                                        mb: 4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                                name: "EGC TV",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.AvatarBadge, {
                                                    boxSize: "1em",
                                                    bg: "green.500"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontWeight: "semibold",
                                                ml: 2,
                                                children: "EGC TV"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                                                as: fa_namespaceObject.FaVideo,
                                                boxSize: 5,
                                                color: "pr.100"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        h: "100%",
                        w: "1px",
                        bg: "border.25",
                        mx: 16
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                align: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ChakraNextImage/* ChakraNextImage */.N, {
                                        src: youtube,
                                        boxSize: 8,
                                        objectFit: "contain"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        fontSize: "xl",
                                        ml: 3,
                                        fontWeight: "semibold",
                                        children: "Youtubers"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                direction: "column",
                                mt: 8,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                        align: "center",
                                        w: "200px",
                                        mb: 4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                                name: "ChoflyChosen",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.AvatarBadge, {
                                                    boxSize: "1em",
                                                    bg: "green.500"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontWeight: "semibold",
                                                ml: 2,
                                                children: "ChoflyChosen"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                                                as: fa_namespaceObject.FaVideo,
                                                boxSize: 5,
                                                color: "pr.100"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                        align: "center",
                                        w: "200px",
                                        mb: 4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                                name: "Aaron Rock",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.AvatarBadge, {
                                                    boxSize: "1em",
                                                    bg: "green.500"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontWeight: "semibold",
                                                ml: 2,
                                                children: "Aron Rock"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                                                as: fa_namespaceObject.FaVideo,
                                                boxSize: 5,
                                                color: "pr.100"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                        align: "center",
                                        w: "200px",
                                        mb: 4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                                name: "EGC TV",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.AvatarBadge, {
                                                    boxSize: "1em",
                                                    bg: "green.500"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontWeight: "semibold",
                                                ml: 2,
                                                children: "EGC TV"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                                                as: fa_namespaceObject.FaVideo,
                                                boxSize: 5,
                                                color: "pr.100"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const home_Activity = (Activity);

// EXTERNAL MODULE: ./src/provider/rootStoreProvider.js + 2 modules
var rootStoreProvider = __webpack_require__(248);
;// CONCATENATED MODULE: ./src/components/home/Trending.jsx







const Trending = (0,external_mobx_react_lite_.observer)(()=>{
    const uiStore = (0,rootStoreProvider/* useUIStore */.HB)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        direction: "column",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                bg: "sec.300",
                mt: 8,
                position: "relative",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    fontSize: "2xl",
                    fontWeight: "semibold",
                    p: 4,
                    color: "pr.100",
                    children: "Trending"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                p: 12,
                align: "center",
                justify: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        direction: "column",
                        p: 8,
                        bg: "sec.200",
                        w: "360px",
                        h: "430px",
                        overflowY: "auto",
                        borderWidth: "2px",
                        borderColor: "transparent",
                        _hover: {
                            transform: "scale(1.04)",
                            transition: "200ms",
                            borderColor: "pr.100",
                            boxShadow: "dark-lg"
                        },
                        mr: 8,
                        css: uiStore.scrollCSS,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "2xl",
                                fontWeight: "semibold",
                                children: "Sem integer vitae justo eget. Amet consectetur adipiscing"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                mt: 3,
                                color: "grey.300",
                                children: "Risus feugiat in ante metus dictum at tempor commodo. Proin nibh nisl condimentum id venenatis a. Nibh mauris cursus mattis molestie a iaculis. Lacus laoreet non curabitur gravida. Aliquet sagittis id consectetur purus ut faucibus. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Sit amet tellus cras adipiscing enim..."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        direction: "column",
                        bg: "sec.200",
                        w: "360px",
                        h: "430px",
                        overflow: "clip",
                        borderWidth: "2px",
                        borderColor: "transparent",
                        _hover: {
                            transform: "scale(1.04)",
                            transition: "200ms",
                            borderColor: "pr.100",
                            boxShadow: "dark-lg"
                        },
                        mr: 8,
                        css: uiStore.scrollCSS,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "2xl",
                                fontWeight: "semibold",
                                p: 4,
                                children: "Sem integer vitae justo eget. Amet consectetur adipiscing"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ChakraNextImage/* ChakraNextImage */.N, {
                                src: _4,
                                w: "360px",
                                h: "430px"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        direction: "column",
                        p: 8,
                        bg: "sec.200",
                        w: "360px",
                        h: "430px",
                        overflowY: "auto",
                        borderWidth: "2px",
                        borderColor: "transparent",
                        _hover: {
                            transform: "scale(1.04)",
                            transition: "200ms",
                            borderColor: "pr.100",
                            boxShadow: "dark-lg"
                        },
                        mr: 8,
                        css: uiStore.scrollCSS,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "2xl",
                                fontWeight: "semibold",
                                children: "Sem integer vitae justo eget. Amet consectetur adipiscing"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                mt: 3,
                                color: "grey.300",
                                children: "Risus feugiat in ante metus dictum at tempor commodo. Proin nibh nisl condimentum id venenatis a. Nibh mauris cursus mattis molestie a iaculis. Lacus laoreet non curabitur gravida. Aliquet sagittis id consectetur purus ut faucibus. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Sit amet tellus cras adipiscing enim..."
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const home_Trending = (Trending);

;// CONCATENATED MODULE: ./src/pages/index.js







/* harmony default export */ const pages = ((0,external_mobx_react_lite_.observer)(()=>{
    const uiStore = (0,rootStoreProvider/* useUIStore */.HB)();
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        borderLeftWidth: "3px",
        borderLeftColor: "pr.100",
        bg: "sec.100",
        direction: "column",
        w: "1400px",
        overflowY: "auto",
        maxH: "calc(100vh - 120px)",
        boxShadow: "dark-lg",
        css: uiStore.scrollCSS,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
            direction: "column",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(HomeCarousel, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(home_Activity, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(home_Trending, {})
            ]
        })
    });
}));
async function getServerSideProps(context) {
    return {
        props: {
            hydrationData: {
                ui: 2
            }
        }
    };
}


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
var __webpack_exports__ = __webpack_require__.X(0, [675,743], () => (__webpack_exec__(603)));
module.exports = __webpack_exports__;

})();