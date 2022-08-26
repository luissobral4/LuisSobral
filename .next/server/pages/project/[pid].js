"use strict";
(() => {
var exports = {};
exports.id = 569;
exports.ids = [569,327];
exports.modules = {

/***/ 948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ project),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/projectMenu.js





function ProjectMenu({ name , description , image , category , languagues , date , technologies , link  }) {
    const { 0: state , 1: setState  } = (0,external_react_.useState)({
        state: -1
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-[500px] rounded-xl mx-auto text-black place-content-center ring-black",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "w-1/2 p-4 hover:border-b-4 text-xl font-bold text-green-900 dark:text-gray-200 dark:border-white focus:border-b-4 border-green-900",
                            onClick: ()=>setState(0),
                            children: "Description"
                        }, "Description"),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "w-1/2 p-4 hover:border-b-4 text-xl font-bold text-green-900 dark:text-gray-200 dark:border-white focus:border-b-4 border-green-900",
                            onClick: ()=>setState(1),
                            children: "Details"
                        }, "Details")
                    ]
                }),
                state === 0 && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "p-2 dark:text-white",
                    children: description
                }),
                state === 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col w-1/2 font-bold",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-2 dark:text-gray-200 text-gray-700 border-b-2 dark:border-white border-green-900",
                                    children: "Category"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-2 dark:text-gray-200 text-gray-700 border-b-2 dark:border-white border-green-900",
                                    children: "Technologies"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-2 dark:text-gray-200 text-gray-700 border-b-2 dark:border-white border-green-900",
                                    children: "Languagues"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-2 dark:text-gray-200 text-gray-700",
                                    children: "Date"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col w-1/2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-2 border-b-2 dark:border-white border-green-900 dark:text-white",
                                    children: category
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-2 border-b-2 dark:border-white border-green-900 dark:text-white",
                                    children: technologies
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-2 border-b-2 dark:border-white border-green-900 dark:text-white",
                                    children: languagues
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "p-2 dark:text-white",
                                    children: date
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: link,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row m-2 max-w-[200px] rounded-xl bg-gray-200 w-1/3 mx-auto text-black hover:bg-gray-400 cursor-pointer",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillGithub, {
                                className: "w-20 h-20 mx-auto focus:ring"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-base my-auto mx-auto",
                                children: "Check it on GitHub"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
;

// EXTERNAL MODULE: ./pages/projects.js
var projects = __webpack_require__(8997);
;// CONCATENATED MODULE: ./pages/project/[pid].js






function project({ postData  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-green-700 dark:text-gray-300 text-base m-2 ",
                children: " Project Name "
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-black dark:text-white font-bold lg:text-6xl text-3xl ml-2 mb-4",
                children: [
                    " ",
                    postData.name,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap place-content-center mx-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mr-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ProjectMenu, {
                            ...postData,
                            className: "w-[500px] h-[300px] mx-auto"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: postData.image,
                            layout: "fixed",
                            width: 500,
                            height: 300
                        })
                    })
                ]
            })
        ]
    });
};
async function getStaticPaths() {
    const paths = (0,projects.getAllPostIds)();
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const postData = (0,projects.getPostData)(params.pid);
    return {
        props: {
            postData
        }
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,244,997], () => (__webpack_exec__(948)));
module.exports = __webpack_exports__;

})();