"use strict";
(() => {
var exports = {};
exports.id = 513;
exports.ids = [513];
exports.modules = {

/***/ 8687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fstore_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fstore_2F_5Bid_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderpage_2Fstore_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fstore_2F_5Bid_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Fstore_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fstore_2F_5Bid_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/store/[id].js
var _id_namespaceObject = {};
__webpack_require__.r(_id_namespaceObject);
__webpack_require__.d(_id_namespaceObject, {
  "default": () => (Details),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./src/pages/_document.js
var _document = __webpack_require__(894);
// EXTERNAL MODULE: ./src/pages/_app.js
var _app = __webpack_require__(8375);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/helper.js
var helper = __webpack_require__(956);
;// CONCATENATED MODULE: ./public/images/Vector2.png
/* harmony default export */ const Vector2 = ({"src":"/_next/static/media/Vector2.88c03e4e.png","height":23,"width":22,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEVMaXEaNmMaNmIaNmQaN2MZNmMaNWMbM2IaN2UYNmMaN2MASG0YNWJztJ8wAAAADXRSTlMAnE+HYcR7H28rrgM+ORRWkAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUeJwdw4cJgAAQALH73tx/XtFAsBiOT25nZoOGunrACEcJXDxTbRwqIlKA6/9Yg7UXJoEBBPf3TXAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/RootLayout.jsx + 13 modules
var RootLayout = __webpack_require__(5712);
;// CONCATENATED MODULE: ./src/pages/store/[id].js






const getStaticPaths = async function() {
    try {
        const res = await fetch(`${helper/* SERVER */.c}/get-all-books`);
        const data = await res.json();
        const paths = data.map((item)=>{
            return {
                params: {
                    id: item._id.toString()
                }
            };
        });
        return {
            paths,
            fallback: false
        };
    } catch (err) {
        console.error(err);
    }
};
const getStaticProps = async function({ params }) {
    try {
        const id = params.id;
        const res = await fetch(`${helper/* SERVER */.c}/${id}`);
        const data = await res.json();
        return {
            props: {
                bookInfo: data
            }
        };
    } catch (err) {
        console.error(err);
    }
};
function Details({ bookInfo }) {
    const { addToCart, cartItems, formData, setFormData, setCartItems, initialFormValue, findCurObj, newObj } = (0,external_react_.useContext)(RootLayout/* modal */.o);
    (0,external_react_.useEffect)(()=>{
        findCurObj(bookInfo);
    }, [
        cartItems
    ]);
    const handleDecrement = function() {
        if (newObj) {
            if (newObj.total_quantity > 1) {
                setCartItems((prevValue)=>prevValue.map((obj)=>obj._id === bookInfo._id ? {
                            ...obj,
                            total_quantity: +newObj.total_quantity - 1
                        } : obj));
            }
        } else {
            if (formData.total_quantity > 1) {
                setFormData((prevValue)=>({
                        ...prevValue,
                        total_quantity: +prevValue.total_quantity - 1
                    }));
            }
        }
    };
    const handleIncrement = function() {
        if (newObj) {
            setCartItems((prevValue)=>prevValue.map((obj)=>obj._id === bookInfo._id ? {
                        ...obj,
                        total_quantity: +newObj.total_quantity + 1
                    } : obj));
        } else {
            setFormData((prevValue)=>({
                    ...prevValue,
                    total_quantity: +prevValue.total_quantity + 1
                }));
        }
    };
    const handleAddToCart = function() {
        // bookinfo is the current object that is being displayed on the browser
        addToCart(bookInfo);
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
            className: "w-full p-8 mt-0 lg:my-32",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mx-auto flex flex-col lg:flex-row lg:items-start justify-between gap-[4rem]",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "p-4 bg-[#F5F8FC]",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                className: "mx-auto",
                                width: 800,
                                src: bookInfo.file,
                                alt: "uploaded books images"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "cardoFont font-bold text-headerBackground text-xl lg:text-3xl capitalize",
                                    children: bookInfo.title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    className: "text-CTA text-xl font-bold my-3",
                                    children: [
                                        "$",
                                        bookInfo.price
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "Making this the first true generator on the Internet. It uses a dictionary of over 200 latin words, combined with a handful of model sentence structures, to generate Lorem ipsum which looks reasonable. The generated Lorem ipsum."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                    className: "text-mainPGParagraphTxt my-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-[2rem] my-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "Publisher :"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "Learning Private Limited (1 January 2021)"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-[2rem] my-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "Language :"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "English"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-[2rem] my-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "Paperback :"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "212 pages"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-[2rem] my-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "ISBN-10 :"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "9788120345799"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-[2rem] my-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "Dimensions :"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "20 x 14 x 4 cm"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-[2rem] mt-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "border border-CTA text-center w-[150px] p-3 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "cursor-pointer text-headerBackground font-bold text-2xl",
                                                    onClick: handleDecrement,
                                                    children: "-"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    ref: initialFormValue,
                                                    children: newObj?.total_quantity || formData.total_quantity
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "cursor-pointer text-headerBackground font-bold text-xl",
                                                    onClick: handleIncrement,
                                                    children: "+"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            className: "cardoFont bg-CTA px-6 py-3 text-headerBackground font-bold",
                                            onClick: handleAddToCart,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: Vector2,
                                                    alt: "cart icon",
                                                    className: "inline"
                                                }),
                                                " Add to cart"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                    className: "product-description container mx-auto flex flex-col lg:flex-row items-center gap-[6rem] mt-32",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "cardoFont text-lg bg-headerBackground px-6 py-3 text-white font-bold max-w-[300px] ml-auto",
                                    children: "PRODUCT DESCRIPTION"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "cardoFont text-headerBackground font-bold my-4 text-2xl",
                                            children: "Do you offer discounts for education?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-mainPGParagraphTxt",
                                            children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, bypassed injected humour, or randomised words which don't look even slightly believable."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "cardoFont text-lg text-headerBackground font-bold bg-[#F5F8FC] px-6 py-3 inline-block",
                                    children: "ADDITIONAL INFO"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "cardoFont text-headerBackground font-bold my-4 text-2xl",
                                            children: "Is this book for me?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-mainPGParagraphTxt",
                                            children: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fstore%2F%5Bid%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fstore%2F%5Bid%5D.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fstore_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fstore_2F_5Bid_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_id_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Fstore_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fstore_2F_5Bid_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticProps")
        const next_route_loaderpage_2Fstore_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fstore_2F_5Bid_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_id_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_id_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/store/[id]","pathname":"/store/[id]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: _id_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

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

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 271:
/***/ ((module) => {

module.exports = require("sweetalert2");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [743,544], () => (__webpack_exec__(8687)));
module.exports = __webpack_exports__;

})();