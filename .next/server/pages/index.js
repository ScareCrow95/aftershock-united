"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "mobx-react-lite"
var external_mobx_react_lite_ = __webpack_require__(5944);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-responsive-carousel"
const external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");
;// CONCATENATED MODULE: ./src/assets/img/carousel/1.png
/* harmony default export */ const _1 = ({"src":"/_next/static/media/1.98900331.png","height":270,"width":760,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAVElEQVR42mMwd/S19Y8Nqe9PbJ9VMGlFQlW/Y0C0oYUTg1VgtE1MdkDHjPi+qbnTV/llV1v5hqgZWjJou3paxGa557YaBUW5ZdfpeEbI6Jmr6JsDAPetGTsHEeoFAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/assets/img/carousel/2.png
/* harmony default export */ const _2 = ({"src":"/_next/static/media/2.a229ef42.png","height":270,"width":760,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAUUlEQVR42mOwUFN3tzI2dnDLiooujk1KCgkDIl9nDwY1BZVQa8v+hLhQF7fcsICWzIzyyIiKsFAGBVlZL339rrBQPXWDkuig2sTIAj/XVG93AC7ZFlSqTKH5AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/assets/img/carousel/3.png
/* harmony default export */ const _3 = ({"src":"/_next/static/media/3.8ef09cdb.png","height":270,"width":760,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAU0lEQVR42mMQ4+fRkxAylhN0VhG2UxHSkOJXFeOXEuBlEObltpYVMlMQMpASMhYQURMVUhUWUBURZFAT4rOTFraXEImWFp5mKeQiKhQsLhQkIQQAORwJJSIQ+OYAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./src/assets/img/carousel/4.png
var _4 = __webpack_require__(3726);
// EXTERNAL MODULE: ./src/components/common/ChakraNextImage.jsx
var ChakraNextImage = __webpack_require__(4476);
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
                    src: _4/* default */.Z,
                    w: "100%",
                    h: "300px"
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/components/home/Activity.jsx + 3 modules
var Activity = __webpack_require__(2635);
// EXTERNAL MODULE: ./src/provider/rootStoreProvider.js + 3 modules
var rootStoreProvider = __webpack_require__(7486);
// EXTERNAL MODULE: ./src/components/home/Trending.jsx + 2 modules
var Trending = __webpack_require__(5024);
;// CONCATENATED MODULE: ./src/constants/data/_home.js
const featuredUsers = [
    {
        _id: "1",
        name: "John Smith",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        rank: 2,
        main: "monk",
        country: "US",
        social: {
            discord: "594",
            twitch: "594",
            twitter: "594",
            insta: "594",
            facebook: "594",
            youtube: "594"
        },
        about: "Orci nulla pellentesque dignissim enim sit amet venenatis urna. Eros donec ac odio tempor orci. Phasellus vestibulum lorem sed risus ultricies tristique"
    },
    {
        _id: "2",
        name: "Cara Diaz",
        avatar: "https://randomuser.me/api/portraits/women/11.jpg",
        rank: 2,
        main: "wizard",
        country: "UK",
        social: {
            discord: "594",
            twitch: "594",
            twitter: "594",
            insta: "594",
            facebook: "594",
            youtube: "594"
        },
        about: "Rhoncus urna neque viverra justo nec. Proin gravida hendrerit lectus a. Mauris commodo quis imperdiet massa tincidunt."
    },
    {
        _id: "1",
        name: "Jordan Crane",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        rank: 2,
        main: "barbarian",
        country: "CA",
        social: {
            discord: "594",
            twitch: "594",
            twitter: "594",
            insta: "594",
            facebook: "594",
            youtube: "594"
        },
        about: "Ut sem nulla pharetra diam sit. Suspendisse potenti nullam ac tortor vitae purus faucibus"
    }, 
];
const liveStreamers = [
    {
        _id: "1",
        name: "Danielle Ray",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rank: 2,
        main: "barbarian",
        country: "US",
        social: {
            discord: "594",
            twitch: "594",
            twitter: "594",
            insta: "594",
            facebook: "594",
            youtube: "594"
        }
    },
    {
        _id: "3",
        name: "Tom Ellis",
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
        rank: 2,
        main: "barbarian",
        country: "AU",
        social: {
            discord: "594",
            twitch: "594",
            twitter: "594",
            insta: "594",
            facebook: "594",
            youtube: "594"
        }
    },
    {
        _id: "2",
        name: "Andrea Holmes",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        rank: 2,
        main: "barbarian",
        country: "CA",
        social: {
            discord: "594",
            twitch: "594",
            twitter: "594",
            insta: "594",
            facebook: "594",
            youtube: "594"
        }
    }, 
];
const youtubers = [
    {
        _id: "1",
        name: "Fernando Bryant",
        avatar: "https://randomuser.me/api/portraits/men/21.jpg",
        rank: 2,
        main: "barbarian",
        country: "US",
        social: {
            discord: "594",
            twitch: "594",
            twitter: "594",
            insta: "594",
            facebook: "594",
            youtube: "594"
        }
    },
    {
        _id: "3",
        name: "Gilbert Mccoy",
        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
        rank: 2,
        main: "barbarian",
        country: "AU",
        social: {
            discord: "594",
            twitch: "594",
            twitter: "594",
            insta: "594",
            facebook: "594",
            youtube: "594"
        }
    },
    {
        _id: "2",
        name: "Hailey Henderson",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        rank: 2,
        main: "barbarian",
        country: "CA",
        social: {
            discord: "594",
            twitch: "594",
            twitter: "594",
            insta: "594",
            facebook: "594",
            youtube: "594"
        }
    }, 
];
const trending = [
    {
        _id: "2",
        title: "What is the optimal Warband (Group of 8) for getting started?",
        description: "The optimal warband is something that will most likely remain mostly the same in-terms of wanting each class because of how the game is designed. There are 8 spots available in a warband, and there are 6 classes in Diablo Immortal on launch, which means 6 of the 8 spots are pretty logical. You should strive to have at least 1 of each class because this will allow your group to evolve with the game and have what you need for different situations in all forms of content.",
        createdOn: 1652910807000,
        thumbnail: "https://vc-static-server.nyc3.digitaloceanspaces.com/personal/blog-1-thumb.png",
        createdBy: {
            _id: "1",
            name: "Chosen",
            avatar: "https://vc-static-server.nyc3.digitaloceanspaces.com/personal/chosen.png",
            rank: 2,
            main: "barbarian",
            country: "US",
            social: {
                discord: "594",
                twitch: "594",
                twitter: "594",
                insta: "594",
                facebook: "594",
                youtube: "594"
            }
        },
        views: 695
    },
    {
        _id: "3",
        title: "Pretium vulputate sapien nec sagittis aliquam.",
        subtitle: "Ut sem nulla pharetra diam sit suspendisse potenti nullam.",
        description: "Orci nulla pellentesque dignissim enim sit amet venenatis urna. Eros donec ac odio tempor orci. Phasellus vestibulum lorem sed risus ultricies tristique. Diam in arcu cursus euismod quis viverra. Id neque aliquam vestibulum morbi blandit cursus risus. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Non pulvinar neque laoreet suspendisse. A diam maecenas sed enim ut sem. Magnis dis parturient montes nascetur ridiculus mus. Rhoncus urna neque viverra justo nec. Proin gravida hendrerit lectus a. Mauris commodo quis imperdiet massa tincidunt.",
        createdOn: 1652700807000,
        createdBy: {
            _id: "3",
            name: "Tom Ellis",
            avatar: "https://randomuser.me/api/portraits/men/65.jpg",
            rank: 2,
            main: "barbarian",
            country: "AU",
            social: {
                discord: "594",
                twitch: "594",
                twitter: "594",
                insta: "594",
                facebook: "594",
                youtube: "594"
            }
        },
        views: 695
    },
    {
        _id: "1",
        title: "Euismod in pellentesque massa placerat duis?",
        subtitle: "Eget nunc lobortis mattis aliquam faucibus.",
        description: "Nunc aliquet bibendum enim facilisis gravida. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Facilisi cras fermentum odio eu. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Nisi porta lorem mollis aliquam ut porttitor. Pretium lectus quam id leo in. Pellentesque massa placerat duis ultricies lacus sed. Augue eget arcu dictum varius duis at. Enim eu turpis egestas pretium aenean. Et tortor at risus viverra adipiscing at in tellus integer. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl.",
        createdOn: 1652710807000,
        createdBy: {
            _id: "1",
            name: "Danielle Ray",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            rank: 2,
            main: "barbarian",
            country: "US",
            social: {
                discord: "594",
                twitch: "594",
                twitter: "594",
                insta: "594",
                facebook: "594",
                youtube: "594"
            }
        },
        views: 695
    }, 
];
const recent = [
    {
        _id: "2",
        title: "Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra.",
        description: "Semper feugiat nibh sed pulvinar proin gravida hendrerit. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Nibh sed pulvinar proin gravida hendrerit lectus a. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Blandit turpis cursus in hac habitasse platea dictumst quisque. Blandit massa enim nec dui nunc mattis enim. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Amet justo donec enim diam vulputate. Accumsan sit amet nulla facilisi. Arcu bibendum at varius vel pharetra vel turpis. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Sit amet massa vitae tortor condimentum lacinia quis. Bibendum at varius vel pharetra. Duis tristique sollicitudin nibh sit amet.",
        createdOn: 1652910807000,
        createdBy: {
            _id: "1",
            name: "Danielle Ray",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            rank: 2,
            main: "barbarian",
            country: "US",
            social: {
                discord: "594",
                twitch: "594",
                twitter: "594",
                insta: "594",
                facebook: "594",
                youtube: "594"
            }
        },
        views: 695
    },
    {
        _id: "2",
        title: "Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra.",
        description: "Semper feugiat nibh sed pulvinar proin gravida hendrerit. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Nibh sed pulvinar proin gravida hendrerit lectus a. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Blandit turpis cursus in hac habitasse platea dictumst quisque. Blandit massa enim nec dui nunc mattis enim. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Amet justo donec enim diam vulputate. Accumsan sit amet nulla facilisi. Arcu bibendum at varius vel pharetra vel turpis. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Sit amet massa vitae tortor condimentum lacinia quis. Bibendum at varius vel pharetra. Duis tristique sollicitudin nibh sit amet.",
        createdOn: 1652910807000,
        createdBy: {
            _id: "1",
            name: "Danielle Ray",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            rank: 2,
            main: "barbarian",
            country: "US",
            social: {
                discord: "594",
                twitch: "594",
                twitter: "594",
                insta: "594",
                facebook: "594",
                youtube: "594"
            }
        },
        views: 695
    },
    {
        _id: "2",
        title: "Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra.",
        description: "Semper feugiat nibh sed pulvinar proin gravida hendrerit. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Nibh sed pulvinar proin gravida hendrerit lectus a. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Blandit turpis cursus in hac habitasse platea dictumst quisque. Blandit massa enim nec dui nunc mattis enim. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Amet justo donec enim diam vulputate. Accumsan sit amet nulla facilisi. Arcu bibendum at varius vel pharetra vel turpis. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Sit amet massa vitae tortor condimentum lacinia quis. Bibendum at varius vel pharetra. Duis tristique sollicitudin nibh sit amet.",
        createdOn: 1652910807000,
        createdBy: {
            _id: "1",
            name: "Danielle Ray",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            rank: 2,
            main: "barbarian",
            country: "US",
            social: {
                discord: "594",
                twitch: "594",
                twitter: "594",
                insta: "594",
                facebook: "594",
                youtube: "594"
            }
        },
        views: 695
    },
    {
        _id: "2",
        title: "Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra.",
        description: "Semper feugiat nibh sed pulvinar proin gravida hendrerit. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Nibh sed pulvinar proin gravida hendrerit lectus a. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Blandit turpis cursus in hac habitasse platea dictumst quisque. Blandit massa enim nec dui nunc mattis enim. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Amet justo donec enim diam vulputate. Accumsan sit amet nulla facilisi. Arcu bibendum at varius vel pharetra vel turpis. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Sit amet massa vitae tortor condimentum lacinia quis. Bibendum at varius vel pharetra. Duis tristique sollicitudin nibh sit amet.",
        createdOn: 1652910807000,
        createdBy: {
            _id: "1",
            name: "Danielle Ray",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            rank: 2,
            main: "barbarian",
            country: "US",
            social: {
                discord: "594",
                twitch: "594",
                twitter: "594",
                insta: "594",
                facebook: "594",
                youtube: "594"
            }
        },
        views: 695,
        content: [
            {
                type: "text",
                data: "Pretium vulputate sapien nec sagittis aliquam. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Nisl condimentum id venenatis a condimentum vitae. Vel orci porta non pulvinar neque laoreet suspendisse. Tempor orci eu lobortis elementum nibh tellus molestie. Et odio pellentesque diam volutpat commodo sed. Ut sem nulla pharetra diam sit. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Interdum velit euismod in pellentesque massa placerat duis. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Pharetra convallis posuere morbi leo urna molestie at elementum."
            },
            {
                type: "youtube",
                data: "https://www.youtube.com/watch?v=LqU4pYnuI7s"
            },
            {
                type: "image",
                data: "https://images.pexels.com/photos/11240200/pexels-photo-11240200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=500"
            },
            {
                type: "text",
                data: "Pretium vulputate sapien nec sagittis aliquam. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Nisl condimentum id venenatis a condimentum vitae. Vel orci porta non pulvinar neque laoreet suspendisse. Tempor orci eu lobortis elementum nibh tellus molestie. Et odio pellentesque diam volutpat commodo sed. Ut sem nulla pharetra diam sit. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Interdum velit euismod in pellentesque massa placerat duis. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Pharetra convallis posuere morbi leo urna molestie at elementum."
            }, 
        ]
    }, 
];
const _homeData = {
    featuredUsers,
    liveStreamers,
    trending,
    youtubers,
    recent
};

// EXTERNAL MODULE: ./src/components/common/HeadingContainer.jsx
var HeadingContainer = __webpack_require__(3231);
;// CONCATENATED MODULE: ./src/constants/data/_tier.js
const Tiers = [
    {
        name: "Solo Play",
        id: "solo",
        classes: [
            {
                id: "barbarian",
                rating: 7
            },
            {
                id: "crusader",
                rating: 7
            },
            {
                id: "demonHunter",
                rating: 9
            },
            {
                id: "necromancer",
                rating: 10
            },
            {
                id: "wizard",
                rating: 4
            },
            {
                id: "monk",
                rating: 5
            }, 
        ],
        weight: 0.16
    },
    {
        id: "syn",
        name: "Synergy",
        classes: [
            {
                id: "barbarian",
                rating: 9
            },
            {
                id: "crusader",
                rating: 10
            },
            {
                id: "demonHunter",
                rating: 10
            },
            {
                id: "necromancer",
                rating: 8
            },
            {
                id: "wizard",
                rating: 8
            },
            {
                id: "monk",
                rating: 8
            }, 
        ],
        weight: 0.1
    },
    {
        id: "level",
        name: "Leveling 1-60",
        classes: [
            {
                id: "barbarian",
                rating: 9
            },
            {
                id: "crusader",
                rating: 9
            },
            {
                id: "demonHunter",
                rating: 10
            },
            {
                id: "necromancer",
                rating: 10
            },
            {
                id: "wizard",
                rating: 6
            },
            {
                id: "monk",
                rating: 7
            }, 
        ],
        weight: 0.1
    },
    {
        id: "pvp",
        name: "PvP",
        classes: [
            {
                id: "barbarian",
                rating: 10
            },
            {
                id: "crusader",
                rating: 9
            },
            {
                id: "demonHunter",
                rating: 5
            },
            {
                id: "necromancer",
                rating: 7
            },
            {
                id: "wizard",
                rating: 8
            },
            {
                id: "monk",
                rating: 9
            }, 
        ],
        weight: 0.15
    },
    {
        id: "begin",
        name: "Beginner Friendly",
        classes: [
            {
                id: "barbarian",
                rating: 10
            },
            {
                id: "crusader",
                rating: 9
            },
            {
                id: "demonHunter",
                rating: 5
            },
            {
                id: "necromancer",
                rating: 7
            },
            {
                id: "wizard",
                rating: 8
            },
            {
                id: "monk",
                rating: 9
            }, 
        ],
        weight: 0.05
    },
    {
        id: "dungeons",
        name: "Dungeons",
        classes: [
            {
                id: "barbarian",
                rating: 8
            },
            {
                id: "crusader",
                rating: 9
            },
            {
                id: "demonHunter",
                rating: 10
            },
            {
                id: "necromancer",
                rating: 8
            },
            {
                id: "wizard",
                rating: 7
            },
            {
                id: "monk",
                rating: 7
            }, 
        ],
        weight: 0.17
    },
    {
        id: "rifts",
        name: "Challenge Rifts",
        classes: [
            {
                id: "barbarian",
                rating: 7
            },
            {
                id: "crusader",
                rating: 9
            },
            {
                id: "demonHunter",
                rating: 9
            },
            {
                id: "necromancer",
                rating: 8
            },
            {
                id: "wizard",
                rating: 8
            },
            {
                id: "monk",
                rating: 8
            }, 
        ],
        weight: 0.17
    },
    {
        id: "support",
        name: "Support",
        classes: [
            {
                id: "barbarian",
                rating: 6
            },
            {
                id: "crusader",
                rating: 8
            },
            {
                id: "demonHunter",
                rating: 2
            },
            {
                id: "necromancer",
                rating: 8
            },
            {
                id: "wizard",
                rating: 5
            },
            {
                id: "monk",
                rating: 8
            }, 
        ],
        weight: 0.05
    },
    {
        id: "dmg",
        name: "Damage",
        classes: [
            {
                id: "barbarian",
                rating: 7
            },
            {
                id: "crusader",
                rating: 5
            },
            {
                id: "demonHunter",
                rating: 10
            },
            {
                id: "necromancer",
                rating: 6
            },
            {
                id: "wizard",
                rating: 8
            },
            {
                id: "monk",
                rating: 6
            }, 
        ],
        weight: 0.05
    },
    {
        id: "overall",
        name: "Overall",
        classes: [
            {
                id: "barbarian",
                rating: 8.07
            },
            {
                id: "crusader",
                rating: 8.48
            },
            {
                id: "demonHunter",
                rating: 8.42
            },
            {
                id: "necromancer",
                rating: 8.37
            },
            {
                id: "wizard",
                rating: 6.59
            },
            {
                id: "monk",
                rating: 7.15
            }, 
        ],
        weight: 1
    }, 
];

// EXTERNAL MODULE: ./src/components/common/ClassIconElement.jsx
var ClassIconElement = __webpack_require__(8787);
;// CONCATENATED MODULE: ./src/components/home/TierItem.jsx








function getColor(value) {
    const colors = [
        "#ff1500",
        "#ff4000",
        "#ff7300",
        "#ff9100",
        "#ffae00",
        "#ffcc00",
        "#e5ff00",
        "#bbff00",
        "#86e000",
        "#54c200",
        "#00e300", 
    ];
    return colors[Math.floor(value) - 1];
}
const TierItem = (0,external_mobx_react_lite_.observer)(({ data  })=>{
    const { filterClasses  } = (0,rootStoreProvider/* useUIStore */.HB)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        width: "240px",
        role: "group",
        bg: "sec.200",
        m: 4,
        direction: "column",
        borderWidth: "2px",
        borderColor: "transparent",
        _hover: {
            transition: "200ms ease-in-out",
            borderColor: "pr.100",
            boxShadow: "dark-lg"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                label: `Weight: ${data.weight * 100}%`,
                hasArrow: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    bg: "sec.300",
                    align: "center",
                    _groupHover: {
                        bg: "pr.100"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                            direction: "column",
                            p: 3,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    fontWeight: "bold",
                                    _groupHover: {
                                        color: "sec.300"
                                    },
                                    children: data.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    fontSize: "xs",
                                    color: "grey.300",
                                    _groupHover: {
                                        color: "sec.300"
                                    },
                                    children: "Lorem ipsum dolor sit amet, consectetur adip"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.CircularProgress, {
                            trackColor: "sec.100",
                            color: "blue.100",
                            size: "50px",
                            value: data.weight * 100,
                            mr: 2,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.CircularProgressLabel, {
                                children: [
                                    data.weight * 100,
                                    "%"
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                direction: "column",
                py: 2,
                pr: 2,
                children: data.classes.sort((a, b)=>b.rating - a.rating
                ).map((x, idx)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        align: "center",
                        p: 2,
                        opacity: filterClasses.size === 0 || filterClasses.has(x.id) ? 1 : 0.1,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Circle, {
                                bg: "sec.300",
                                mr: 2,
                                boxSize: "38px",
                                justify: "center",
                                align: "center",
                                display: "flex",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ClassIconElement/* default */.Z, {
                                    id: x.id,
                                    _w: "24px",
                                    mt: "5px"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                direction: "column",
                                flex: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontWeight: idx === 0 ? "semibold" : "normal",
                                                color: idx === 0 ? "pr.100" : "white",
                                                children: x.id
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontWeight: "bold",
                                                color: getColor(x.rating),
                                                children: x.rating
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                        mt: "2px",
                                        h: "1px",
                                        bg: "border.50",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            w: `${x.rating * 10}%`,
                                            h: "100%",
                                            bg: getColor(x.rating)
                                        })
                                    })
                                ]
                            })
                        ]
                    }, x.id);
                })
            })
        ]
    });
});
/* harmony default export */ const home_TierItem = (TierItem);

// EXTERNAL MODULE: ./src/assets/img/classIcon/classAssets.js + 6 modules
var classAssets = __webpack_require__(6209);
;// CONCATENATED MODULE: ./src/components/home/TierList.jsx










const TierList = (0,external_mobx_react_lite_.observer)(()=>{
    const { filterClasses  } = (0,rootStoreProvider/* useUIStore */.HB)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        direction: "column",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeadingContainer/* default */.Z, {
                title: "Tier List"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                p: 6,
                pb: 0,
                color: "grey.300",
                textAlign: "center",
                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex amet animi modi nam numquam deserunt minima voluptatum, quisquam et eveniet possimus nesciunt corrupti tempora accusantium ipsam itaque consectetur inventore aspernatur."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                my: 4
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                direction: "column",
                align: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontWeight: "semibold",
                        color: "grey.200",
                        children: "Filter By Classes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        mt: 3,
                        children: Object.keys(classAssets/* ClassIcons */.n).map((x)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Circle, {
                                    bg: "sec.200",
                                    boxSize: "40px",
                                    mx: 1,
                                    cursor: "pointer",
                                    onClick: ()=>{
                                        if (filterClasses.has(x)) filterClasses.delete(x);
                                        else filterClasses.add(x);
                                    },
                                    border: "1px",
                                    shadow: filterClasses.has(x) ? "md" : "none",
                                    borderColor: filterClasses.has(x) ? "pr.100" : "transparent",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ClassIconElement/* default */.Z, {
                                        id: x,
                                        mt: "4px",
                                        opacity: filterClasses.has(x) ? 1 : 0.4
                                    })
                                })
                            }, x);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                wrap: "wrap",
                justify: "center",
                children: Tiers.map((x)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(home_TierItem, {
                        data: x
                    }, x.id);
                })
            })
        ]
    });
});
/* harmony default export */ const home_TierList = (TierList);

;// CONCATENATED MODULE: ./src/pages/index.js









/* harmony default export */ const pages = ((0,external_mobx_react_lite_.observer)(()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        direction: "column",
        borderLeftWidth: "3px",
        borderRightWidth: "3px",
        borderLeftColor: "pr.100",
        borderRightColor: "pr.100",
        boxShadow: "dark-lg",
        bg: "sec.100",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HomeCarousel, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(home_TierList, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Activity/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Trending/* default */.Z, {})
        ]
    });
}));
async function getStaticProps(context) {
    /**
   * get Data later
   */ const data = _homeData;
    return {
        props: {
            hydrationData: {
                homeStore: data
            }
        }
    };
}


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 6211:
/***/ ((module) => {

module.exports = require("mobx");

/***/ }),

/***/ 5944:
/***/ ((module) => {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5534:
/***/ ((module) => {

module.exports = require("react-country-flag");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = require("react-icons/ri");

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
var __webpack_exports__ = __webpack_require__.X(0, [675,486,139,231,931], () => (__webpack_exec__(7633)));
module.exports = __webpack_exports__;

})();