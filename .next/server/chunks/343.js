"use strict";
exports.id = 343;
exports.ids = [343];
exports.modules = {

/***/ 9343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_": () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const type = {
    NAV: "NAV",
    COLOR: "COLOR",
    SHOWPROJECT: "SHOWPROJECT",
    ACTIVEPROJECT: "ACTIVEPROJECT"
};
const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const reducer = (state, action)=>{
    switch(action.type){
        case type.NAV:
            return {
                ...state,
                nav: action.payload
            };
        case type.COLOR:
            return {
                ...state,
                color: action.payload
            };
        case type.SHOWPROJECT:
            return {
                ...state,
                showProject: !state.showProject
            };
        case type.ACTIVEPROJECT:
            return {
                ...state,
                activeProject: action.payload
            };
        default:
            return state;
    }
};
const State = (props)=>{
    const initialState = {
        nav: null,
        color: "goldrenrod",
        showProject: false,
        activeProject: null
    };
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const openSection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        dispatch({
            type: type.NAV,
            payload: value
        });
    }, []);
    const closeSection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        dispatch({
            type: type.NAV,
            payload: null
        });
    }, []);
    const getColor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        let color = localStorage.getItem("color");
        document.documentElement.style.setProperty("--main-color", color ? color : value);
        dispatch({
            type: type.COLOR,
            payload: color ? color : value
        });
    }, []);
    const colorChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        document.documentElement.style.setProperty("--main-color", value);
        localStorage.setItem("color", value);
        dispatch({
            type: type.COLOR,
            payload: value
        });
    }, []);
    // Project view
    const showProjectFunction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        dispatch({
            type: type.SHOWPROJECT
        });
    }, []);
    const activeProjectFunction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        dispatch({
            type: type.ACTIVEPROJECT,
            payload: value
        });
    }, []);
    const { color , nav , activeProject , showProject  } = state;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: {
            openSection: openSection,
            closeSection: closeSection,
            nav,
            colorChange: colorChange,
            getColor: getColor,
            color,
            // project
            showProjectFunction: showProjectFunction,
            activeProjectFunction: activeProjectFunction,
            activeProject,
            showProject
        },
        children: props.children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (State);



/***/ })

};
;