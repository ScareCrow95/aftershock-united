"use strict";
exports.id = 743;
exports.ids = [743];
exports.modules = {

/***/ 476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ChakraNextImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(675);




const ChakraNextImage = (props)=>{
    const { src , alt , objectFit , ...rest } = props;
    console.log(objectFit);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        position: "relative",
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
            objectFit: objectFit || "cover",
            layout: "fill",
            src: src,
            alt: alt
        })
    });
};


/***/ }),

/***/ 64:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(930);
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

/***/ 248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LD": () => (/* binding */ RootStoreProvider),
  "HB": () => (/* binding */ useUIStore)
});

// UNUSED EXPORTS: useRootStore

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "mobx-react-lite"
var external_mobx_react_lite_ = __webpack_require__(944);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__(211);
;// CONCATENATED MODULE: ./src/store/uiStore.js


class UIStore {
    /**
   * @type {RootStore}
   */ root = null;
    counter = 0;
    theme = "dark";
    constructor(root){
        (0,external_mobx_.makeAutoObservable)(this);
        this.root = root;
        this.counter = 0;
    }
    hydrate(data) {
        if (data) {
            this.counter = data;
        }
    }
    get scrollCSS() {
        return {
            "&::-webkit-scrollbar": {
                width: "4px",
                background: "transparent"
            },
            "&::-webkit-scrollbar-track": {
                width: "6px",
                background: "transparent"
            },
            "&::-webkit-scrollbar-thumb": {
                background: this.theme === "dark" ? "#EC911D" : "#d6d6d6",
                borderRadius: "24px"
            }
        };
    }
}

;// CONCATENATED MODULE: ./src/store/rootStore.js


class RootStore {
    uiStore = null;
    constructor(){
        (0,external_mobx_.makeAutoObservable)(this);
        this.uiStore = new UIStore(this);
    }
    hydrate(data) {
        if (data.ui) {
            this.uiStore.hydrate(data.ui);
        }
    }
}

;// CONCATENATED MODULE: ./src/provider/rootStoreProvider.js





(0,external_mobx_react_lite_.enableStaticRendering)("undefined" === "undefined");
let store;
const StoreContext = /*#__PURE__*/ (0,external_react_.createContext)(undefined);
StoreContext.displayName = "StoreContext";
/**
 *
 * @returns {RootStore}
 */ function useRootStore() {
    const context = (0,external_react_.useContext)(StoreContext);
    if (context === undefined) {
        throw new Error("useRootStore must be used within RootStoreProvider");
    }
    return context;
}
/**
 *
 * @returns {UIStore}
 */ function useUIStore() {
    const { uiStore  } = useRootStore();
    return uiStore;
}
function RootStoreProvider({ children , hydrationData  }) {
    const store1 = initializeStore(hydrationData);
    return /*#__PURE__*/ jsx_runtime_.jsx(StoreContext.Provider, {
        value: store1,
        children: children
    });
}
function initializeStore(initialData) {
    const _store = store !== null && store !== void 0 ? store : new RootStore();
    if (initialData) {
        _store.hydrate(initialData);
    }
    if (true) return _store;
    if (!store) store = _store;
    return _store;
}


/***/ })

};
;