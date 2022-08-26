"use strict";
exports.id = 997;
exports.ids = [997];
exports.modules = {

/***/ 8997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projects),
/* harmony export */   "getAllPostIds": () => (/* binding */ getAllPostIds),
/* harmony export */   "getPostData": () => (/* binding */ getPostData)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_personalCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9244);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);






const MENU_LIST = [
    {
        name: "BusPrime",
        description: "Platform focused in the comercialize public transport tickets",
        image: "/busprime.png",
        category: "Web Development",
        languagues: "Java, HTML",
        date: "June 2022",
        technologies: "Vue.js",
        link: "https://bus-prime-frontend.vercel.app/"
    },
    {
        name: "Tanks",
        description: "Tanks 2D game",
        image: "/mapa2.bmp",
        category: "Game",
        languagues: "Haskell",
        date: "December 2018",
        technologies: "Gloss",
        link: "https://github.com/luissobral4/Haskell-tanks-game"
    }
];
function getAllPostIds() {
    return [
        {
            params: {
                pid: "0"
            }
        },
        {
            params: {
                pid: "1"
            }
        }
    ];
}
function getPostData(pid) {
    const item = MENU_LIST[pid];
    return {
        pid,
        ...item
    };
}
function Projects() {
    const item = MENU_LIST[0];
    const item2 = MENU_LIST[1];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-black dark:text-white lg:text-6xl text-4xl mt-6 font-times font-bold text-center",
                children: "Projects"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-wrap place-content-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_personalCard_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        id: "0",
                        category: item.category,
                        name: item.name,
                        description: item.description,
                        image: item.image
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_personalCard_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        id: "1",
                        category: item2.category,
                        name: item2.name,
                        description: item2.description,
                        image: item2.image
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;