"use strict";
exports.id = 858;
exports.ids = [858];
exports.modules = {

/***/ 1858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/context.js
var context = __webpack_require__(9343);
;// CONCATENATED MODULE: ./src/layout/Preloader.js


const Preloader = ()=>{
    const { 0: loader , 1: setLoader  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoader(false);
        }, 500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "preloader",
        style: {
            display: loader ? "block" : "none"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "wrapper",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "preloader-wrapper large active",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "spinner-layer spinner-only",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "circle-clipper left",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "circle"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "gap-patch",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "circle"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const layout_Preloader = (/*#__PURE__*/(0,external_react_.memo)(Preloader));

;// CONCATENATED MODULE: ./src/layout/Switcher.js



const colors = [
    {
        name: "blue",
        colorImg: "images/styleswitcher/blue.png"
    },
    {
        name: "red",
        colorImg: "images/styleswitcher/red.png"
    },
    {
        name: "goldrenrod",
        colorImg: "images/styleswitcher/goldenrod.png"
    },
    {
        name: "magenta",
        colorImg: "images/styleswitcher/magenta.png"
    },
    {
        name: "yellowgreen",
        colorImg: "images/styleswitcher/yellowgreen.png"
    },
    {
        name: "orange",
        colorImg: "images/styleswitcher/orange.png"
    },
    {
        name: "green",
        colorImg: "images/styleswitcher/green.png"
    },
    {
        name: "yellow",
        colorImg: "images/styleswitcher/yellow.png"
    },
    {
        name: "purple",
        colorImg: "images/styleswitcher/purple.png"
    },
    {
        name: "blueviolet",
        colorImg: "images/styleswitcher/blueviolet.png"
    }, 
];
const Switcher = ()=>{
    const { 0: toggle , 1: setToggle  } = (0,external_react_.useState)(false);
    const { 0: dark , 1: setDark  } = (0,external_react_.useState)(false);
    const { colorChange  } = (0,external_react_.useContext)(context/* Context */._);
    (0,external_react_.useEffect)(()=>{
        setDark(document.querySelector("body").classList.contains("dark"));
    }, []);
    const toggleState = (0,external_react_.useMemo)(()=>({
            toggle,
            setToggle
        }), [
        toggle
    ]);
    const themeToggle = (0,external_react_.useMemo)(()=>({
            dark,
            setDark
        }), [
        dark
    ]);
    const moodChange = (value)=>{
        if (value === "dark") {
            document.querySelector("body").classList.add("dark");
            document.querySelector("body").classList.remove("light");
        } else {
            document.querySelector("body").classList.add("light");
            document.querySelector("body").classList.remove("dark");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {});
};
/* harmony default export */ const layout_Switcher = (/*#__PURE__*/(0,external_react_.memo)(Switcher));

;// CONCATENATED MODULE: ./src/layout/Layout.js






const Layout = ({ children  })=>{
    const { color  } = (0,external_react_.useContext)(context/* Context */._);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "James Aldridge - Personal Portfolio"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css?family=Lato:400,700,900",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "css/font-awesome.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "css/jquery.animatedheadline.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "css/materialize.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "css/style.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: `css/skins/${color}.css`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "css/styleswitcher.css"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Preloader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Switcher, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "wrapper",
                children: children
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (/*#__PURE__*/(0,external_react_.memo)(Layout));


/***/ })

};
;