"use strict";
(() => {
var exports = {};
exports.id = 81;
exports.ids = [81];
exports.modules = {

/***/ 1650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
;// CONCATENATED MODULE: ./components/skill.js


function Skill({ name , name2 , description , color  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
            className: `w-40 h-40 m-2 p-2 text-white focus:ring-4 focus:outline-none focus:ring-gray-500 font-bold rounded-lg text-6xl text-center ${color}`,
            children: [
                name,
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-xl font-normal",
                    children: name2
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./pages/skills.js


function About() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "px-16",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-black dark:text-white lg:text-6xl text-4xl my-6 font-times font-bold text-center",
                children: "Skills"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "divide-x",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Skill, {
                        name: "Hs",
                        name2: "Haskell",
                        description: "Great level working with haskell",
                        color: " bg-blue-700 dark:bg-blue-300 hover:bg-blue-500 dark:hover:bg-blue-500"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Skill, {
                        name: "Jv",
                        name2: "Java",
                        description: "Great level working with Java",
                        color: " bg-blue-700 dark:bg-blue-300 hover:bg-blue-500 dark:hover:bg-blue-500"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Skill, {
                        name: "Py",
                        name2: "Python",
                        description: "Great level working with Python",
                        color: " bg-blue-700 dark:bg-blue-300 hover:bg-blue-500 dark:hover:bg-blue-500"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Skill, {
                        name: "C",
                        name2: "C",
                        description: "Great level working with C",
                        color: " bg-blue-700 dark:bg-blue-300 hover:bg-blue-500 dark:hover:bg-blue-500"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "divide-x",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Skill, {
                        name: "JS",
                        name2: "Java Script",
                        description: "Some experience working with java script",
                        color: " bg-red-700 dark:bg-red-300 hover:bg-red-500 dark:hover:bg-red-500"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Skill, {
                        name: "GL",
                        name2: "Gloss",
                        description: "Made a project with this Haskell Language Graphics in 2D",
                        color: " bg-red-700 dark:bg-red-300 hover:bg-red-500 dark:hover:bg-red-500"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Skill, {
                        name: "Re",
                        name2: "React",
                        description: "Developed this web site using NextJs",
                        color: " bg-red-700 dark:bg-red-300 hover:bg-red-500 dark:hover:bg-red-500"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "divide-x",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Skill, {
                    name: "SQL",
                    name2: "MySQL",
                    description: "Experience working with mySQL in multiple projects",
                    color: " bg-green-700 dark:bg-green-300 hover:bg-green-500 dark:hover:bg-green-500"
                })
            })
        ]
    });
};


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__(1650));
module.exports = __webpack_exports__;

})();