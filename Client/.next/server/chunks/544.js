exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 4431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Line.e5fc21e7.png","height":2,"width":34,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAA1BMVEX/x0Gcgjm4AAAAAXRSTlOArV5bRgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAtJREFUeJxjYIACAAAJAAH7UripAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":1});

/***/ }),

/***/ 8158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Point.92822f6e.png","height":17,"width":16,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX/ykL/vGH/yUD/ykH/zUL/yEH/ykH/xkD/zkP/20iOSD5hAAAACHRSTlP+AZRw25Y6Oxg9JnAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicPYtBCgAgDMPSuWn9/4dlCOuhhJKisO0Q6wLcRbrB2f0zyziqfpWQdtSRHhw4AMvUkLO+AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 5712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ RootLayout),
  o: () => (/* binding */ modal)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/book.png
/* harmony default export */ const book = ({"src":"/_next/static/media/book.798e2e67.png","height":29,"width":26,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAHlBMVEX/yUH/vDL/yED/y0L/yEL/ykH/zUL/yUH/yEL/zkQDb6iWAAAACnRSTlN+Am+rUEOUYz0lszMFWwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACxJREFUeJwlxUESACAIA7GFWtD/f9hBcwkIQVEZRAB5/pLeMaC2bRdaw3SOvg6IAJEf1RvOAAAAAElFTkSuQmCC","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/icon.png
/* harmony default export */ const icon = ({"src":"/_next/static/media/icon.5113aa75.png","height":7,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAACVBMVEX/yUH/yUFMaXGEbTyEAAAAA3RSTlN6jQAtPc9eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAF0lEQVR4nGNgZGBiYGBiYGRgZGACsRkBAIMADhrSNWcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Footer.jsx





function Footer() {
    const [date, setDate] = (0,external_react_.useState)(new Date().getFullYear());
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: "w-full p-8 bg-headerBackground",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container mx-auto flex flex-col lg:flex-row items-start gap-8 border-b border-mainPGParagraphTxt pb-8 mb-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: book,
                                        alt: "logo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                        htmlFor: "logo",
                                        className: "pl-2 text-white font-bold",
                                        children: "Bookly"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-2 mt-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "bg-headerParagraphTexts p-4 rounded-md"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "bg-headerParagraphTexts p-4 rounded-md"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "bg-headerParagraphTexts p-4 rounded-md"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "bg-headerParagraphTexts p-4 rounded-md"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "xl:ml-auto flex flex-col lg:flex-row items-start gap-10",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "cardoFont text-white text-lg pb-3 font-bold",
                                        children: "Explore"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "flex items-center gap-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: icon,
                                                        alt: "bullet point"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        htmlFor: "bullet point",
                                                        className: "text-white text-sm",
                                                        children: "Home"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "flex items-center gap-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: icon,
                                                        alt: "bullet point"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        htmlFor: "bullet point",
                                                        className: "text-white text-sm",
                                                        children: "About Us"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "flex items-center gap-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: icon,
                                                        alt: "bullet point"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        htmlFor: "bullet point",
                                                        className: "text-white text-sm",
                                                        children: "Services"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "flex items-center gap-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: icon,
                                                        alt: "bullet point"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        htmlFor: "bullet point",
                                                        className: "text-white text-sm",
                                                        children: "Appointment"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "flex items-center gap-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: icon,
                                                        alt: "bullet point"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        htmlFor: "bullet point",
                                                        className: "text-white text-sm",
                                                        children: "Blog"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "flex items-center gap-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: icon,
                                                        alt: "bullet point"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        htmlFor: "bullet point",
                                                        className: "text-white text-sm",
                                                        children: "Contact Us"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "cardoFont text-white text-lg pb-3 font-bold",
                                        children: "Utility Pages"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "flex items-center gap-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: icon,
                                                        alt: "bullet point"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        htmlFor: "bullet point",
                                                        className: "text-white text-sm",
                                                        children: "Start here"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "flex items-center gap-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: icon,
                                                        alt: "bullet point"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        htmlFor: "bullet point",
                                                        className: "text-white text-sm",
                                                        children: "Style guide"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "flex items-center gap-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: icon,
                                                        alt: "bullet point"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        htmlFor: "bullet point",
                                                        className: "text-white text-sm",
                                                        children: "404 not found"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "flex items-center gap-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: icon,
                                                        alt: "bullet point"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        htmlFor: "bullet point",
                                                        className: "text-white text-sm",
                                                        children: "Password protected"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "flex items-center gap-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: icon,
                                                        alt: "bullet point"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        htmlFor: "bullet point",
                                                        className: "text-white text-sm",
                                                        children: "Licenses"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "flex items-center gap-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: icon,
                                                        alt: "bullet point"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        htmlFor: "bullet point",
                                                        className: "text-white text-sm",
                                                        children: "Changelog"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "cardoFont text-white text-lg pb-3 font-bold",
                                        children: "Keep in Touch"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "flex items-center gap-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-white text-sm font-bold",
                                                        children: "Address:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        htmlFor: "bullet point",
                                                        className: "text-white text-sm",
                                                        children: "24A Kingston St, Los Vegas NC 28202, USA"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "flex items-center gap-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-white text-sm font-bold",
                                                        children: "Mail:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        htmlFor: "bullet point",
                                                        className: "text-white text-sm",
                                                        children: "support@doctors.com"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "flex items-center gap-2 py-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-white text-sm font-bold",
                                                        children: "Phone:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        htmlFor: "bullet point",
                                                        className: "text-white text-sm",
                                                        children: "(+22) 123 - 4567 - 900"
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
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-headerParagraphTexts w-full text-sm xl:text-center",
                children: [
                    "\xa9 ",
                    date,
                    " Drafted by ",
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-white",
                        children: "VictorFlow"
                    }),
                    " - Powered by ",
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-white",
                        children: "Webflow"
                    }),
                    " || Coded by ",
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-white",
                        children: "Ayoola"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/images/Vector.png
/* harmony default export */ const Vector = ({"src":"/_next/static/media/Vector.bfd71859.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEVMaXH////////////////////////////////////////////////c+C/6AAAADXRSTlMAig+WojECQCAFaM5R2snPYQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADVJREFUeJwdwYcNwDAMwDB5r/x/b4GSmCu/ke2IaHgnInIQwqAO6pqUkaybeZHU014lMWOuPiIqAQsITEgsAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/Navbar.jsx







function Navbar() {
    const { handleCartClick, noOfItemsInCart, navbar, handleNavBar, setNavbar } = (0,external_react_.useContext)(modal);
    // const handleDelete = async function () {
    //   try {
    //     const res = await fetch(`http://localhost:8080/api/delete-all-stores`, {
    //       method: 'DELETE',
    //     });
    //     const data = await res.json();
    //     console.log(data.message);
    //   } catch (err) {
    //     console.log(err.message);
    //   }
    // };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
        className: "logo_nav_menu flex items-center justify-between w-full py-6 h-[10vh]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "logo flex items-center justify-center z-20",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: book,
                        alt: "logo icon"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                        htmlFor: "logo",
                        className: "pl-2 text-white font-bold",
                        children: "Bookly"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `mobile-nav absolute top-[10vh] lg:top-0 right-0 lg:relative flex items-center lg:justify-center gap-4 bg-headerBackground h-screen lg:h-auto w-full lg:w-auto flex-col lg:bg-transparent lg:flex-row overflow-hidden lg:overflow-visible lg:translate-y-0 ${!navbar && "translate-y-[-100%]"}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: "lg:flex items-center justify-center text-white gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: "hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base text-center",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/pages",
                                children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: "hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base text-center",
                                    children: "Pages"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/about",
                                children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: "hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base text-center",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/services",
                                children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: "hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base text-center",
                                    children: "Services"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/store",
                                children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: "hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base text-center",
                                    children: "Store"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/contact",
                                children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: "hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base text-center",
                                    children: "Contact"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative",
                        onClick: handleCartClick,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: Vector,
                                alt: "cart icon",
                                height: 21,
                                width: 22,
                                className: "cursor-pointer"
                            }),
                            noOfItemsInCart > 0 && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "absolute -top-1 -right-1 bg-CTA text-white rounded-full w-4 h-4 text-xs flex items-center cardoFont justify-center",
                                children: noOfItemsInCart
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/store/checkout",
                        onClick: ()=>setNavbar(false),
                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: "bg-CTA px-3 py-2 text-headerBackground font-bold ml-6 cardoFont",
                            children: "Order Today"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "burger cursor-pointer lg:hidden z-20",
                onClick: handleNavBar,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `line1 bg-white ${navbar && "toggle"}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `line2 bg-white ${navbar && "toggle"}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `line3 bg-white ${navbar && "toggle"}`
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./public/images/hero book.png
/* harmony default export */ const hero_book = ({"src":"/_next/static/media/hero book.7b9a1171.png","height":800,"width":592,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAALVBMVEX09/zy9Pjo7PTk5+z7/P7x8vDFyc3S1NP45bOxsamcpKzX3erzxE3w582zwd3IXputAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nBXFyRGAMBAEsZ69Ddj5h+tCH6HqKhG9VgMoEyLPfIneZ48wdw/ATX8yQxcZbQDGVN5vngAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
// EXTERNAL MODULE: ./public/images/Line.png
var Line = __webpack_require__(4431);
;// CONCATENATED MODULE: ./public/images/white line.png
/* harmony default export */ const white_line = ({"src":"/_next/static/media/white line.e2d1ac02.png","height":2,"width":157,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAA1BMVEX///+nxBvIAAAAAXRSTlOArV5bRgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAtJREFUeJxjYIACAAAJAAH7UripAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":1});
// EXTERNAL MODULE: ./public/images/Point.png
var Point = __webpack_require__(8158);
;// CONCATENATED MODULE: ./src/components/Routes/HomeDYN.jsx







function HomeDYN() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "hero-content lg:flex gap-6 flex-col lg:w-1/2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("small", {
                        className: "text-background flex items-center gap-2 text-lg",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: Line/* default */.Z,
                                alt: "line"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                className: "cardoFont",
                                children: " Welcome to Bookly"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "text-white text-4xl lg:text-6xl font-bold cardoFont my-4 lg:my-0",
                        children: "Books are uniquely portable magic"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-headerParagraphTexts my-4 lg:my-0",
                        children: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "button-sect flex items-center gap-4 my-8 lg:my-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "bg-CTA px-6 py-3 text-headerBackground font-bold cardoFont",
                                children: "Order Today"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: "#",
                                className: "text-white hover:text-CTA",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "Read Free Demo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: white_line,
                                        alt: "white border",
                                        width: 125
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "info flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "info1 flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: Point/* default */.Z,
                                                alt: "bullet point",
                                                width: 10
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                htmlFor: "pages",
                                                className: "text-white text-base lg:text-lg",
                                                children: "Pages:"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("small", {
                                        className: "text-headerParagraphTexts",
                                        children: "586 pages"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "info2 flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: Point/* default */.Z,
                                                alt: "bullet point",
                                                width: 10
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                htmlFor: "pages",
                                                className: "text-white text-base lg:text-lg",
                                                children: "Length:"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("small", {
                                        className: "text-headerParagraphTexts",
                                        children: "10 Hours"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "info3 flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: Point/* default */.Z,
                                                alt: "bullet point",
                                                width: 10
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                htmlFor: "pages",
                                                className: "text-white text-base lg:text-lg",
                                                children: "Ratings:"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("small", {
                                        className: "text-headerParagraphTexts",
                                        children: "4.5/5 (305 ratings)"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: hero_book,
                width: 420,
                height: 680,
                alt: "book logo",
                className: "mt-8 lg:my-0 mx-auto"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Routes/AboutDYN.jsx



function AboutDYN() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "w-full flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col items-center my-4",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "text-5xl text-center mb-3 cardoFont font-bold text-white",
                        children: "About the Author"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: Line/* default */.Z,
                        alt: "line",
                        width: 50
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-headerParagraphTexts lg:w-1/2 text-center",
                children: "There are variations of passages of lorem ipsum available, that have suffered alteration in some form"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Routes/PagesDYN.jsx

function PagesDYN() {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "hero",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            children: "This is the pages route"
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Routes/ServicesDYN.jsx

function ServicesDYN() {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "hero",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            children: "This is the services route"
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Routes/ContactDYN.jsx



function ContactDYN() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "w-full flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col items-center my-4",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "text-5xl text-center mb-3 cardoFont font-bold text-white",
                        children: "Contact Us"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: Line/* default */.Z,
                        alt: "line",
                        width: 50
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-headerParagraphTexts lg:w-1/2 text-center",
                children: "There are variations of passages of lorem ipsum available, that have suffered alteration in some form"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Routes/StoreDYN.jsx



function StoreDYN() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "w-full flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col items-center my-4",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "text-5xl text-center mb-3 cardoFont font-bold text-white",
                        children: "My Store"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: Line/* default */.Z,
                        alt: "line",
                        width: 50
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-headerParagraphTexts lg:w-1/2 text-center",
                children: "There are variations of passages of lorem ipsum available, that have suffered alteration in some form"
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/helper.js
var helper = __webpack_require__(956);
;// CONCATENATED MODULE: ./src/components/RootLayout.jsx













const modal = /*#__PURE__*/ (0,external_react_.createContext)();
function RootLayout({ children }) {
    const router = (0,router_.useRouter)();
    const [currentRoute, setCurrentRoute] = (0,external_react_.useState)("");
    const [desktopHeaderHeight, setDesktopHeaderHeight] = (0,external_react_.useState)("");
    const [margin, setMargin] = (0,external_react_.useState)("");
    const [modalWindow, setModalWindow] = (0,external_react_.useState)(false);
    const [submitBtn, setSubmitBtn] = (0,external_react_.useState)("Upload");
    const [allUploadedBooks, setAllUploadedBooks] = (0,external_react_.useState)([]);
    const fileInput = (0,external_react_.useRef)();
    const initialFormValue = (0,external_react_.useRef)();
    const [cartIsOpened, setCartIsOpened] = (0,external_react_.useState)(false);
    const [noOfItemsInCart, setNoOfItemsInCart] = (0,external_react_.useState)(0);
    const [cartItems, setCartItems] = (0,external_react_.useState)([]); // stores all items in cart
    const [formData, setFormData] = (0,external_react_.useState)({
        file: "",
        title: "",
        price: "",
        description: "",
        category: "",
        total_quantity: 1
    });
    const [totalCost, setTotalCost] = (0,external_react_.useState)(null);
    const [newObj, setNewObj] = (0,external_react_.useState)(null);
    const [navbar, setNavbar] = (0,external_react_.useState)(false);
    // handle navbar toggle
    const handleNavBar = function() {
        setNavbar((prevValue)=>!prevValue);
    };
    (0,external_react_.useEffect)(()=>{
        // i.e if modalWindow is closed either by the button or the overlay was clicked it empty all inputs
        if (modalWindow === false) {
            setFormData((prevValue)=>{
                return {
                    ...prevValue,
                    file: "",
                    title: "",
                    price: "",
                    description: "",
                    category: ""
                };
            });
            // reset the file input back to an empty string
            if (fileInput.current) {
                fileInput.current.value = "";
            }
        }
    }, [
        modalWindow
    ]);
    // converting image to base64 format
    const base64EncodedImage = function(file) {
        return new Promise((resolve, reject)=>{
            try {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = function() {
                    resolve(reader.result);
                };
            } catch (error) {
                reject(error);
            }
        });
    };
    const handleFileChange = async function(e) {
        const file = e.target.files[0];
        if (!file) return;
        try {
            const base64Image = await base64EncodedImage(file);
            setFormData((prevValue)=>({
                    ...prevValue,
                    file: base64Image
                }));
        } catch (error) {
            console.error(error);
        }
    };
    const handleInputChange = async function(e) {
        const { name, value } = e.target;
        setFormData((prevValue)=>({
                ...prevValue,
                [name]: value
            }));
    };
    const handleSubmit = async function(e) {
        e.preventDefault();
        setSubmitBtn("Uploading...");
        try {
            const res = await fetch(`${helper/* SERVER */.c}/upload`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (res.status !== 200) throw new Error(data.message);
            (0,helper/* alert */.Z)("success", "Submitted Successfully!");
        } catch (err) {
            console.log(err);
            (0,helper/* alert */.Z)("error", "Error Submitting Form");
        } finally{
            setSubmitBtn("Upload");
            setModalWindow(false);
        }
    };
    const handleClick = function() {
        setModalWindow(true);
    };
    // fetch all books
    (0,external_react_.useEffect)(()=>{
        if (router.pathname === "/store") {
            const fetchBooks = async ()=>{
                try {
                    const res = await fetch(`${helper/* SERVER */.c}/get-all-books`);
                    const data = await res.json();
                    setAllUploadedBooks(data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchBooks();
        }
    }, [
        router.pathname,
        modalWindow
    ]);
    // code for cart section
    const handleCartClick = function() {
        setCartIsOpened((prevValue)=>!prevValue);
        setNavbar(false);
    };
    const closeCart = function() {
        setCartIsOpened(false);
    };
    const addToCart = function(bookInfo) {
        // checking if the item already exist in the cart
        const isExisting = cartItems.some((obj)=>obj._id === bookInfo._id);
        const newObj = cartItems.find((obj)=>obj._id === bookInfo._id);
        if (isExisting) {
            setCartItems((prevValue)=>prevValue.map((obj)=>obj._id === bookInfo._id ? {
                        ...obj,
                        total_quantity: newObj.total_quantity
                    } : obj));
            (0,helper/* alert */.Z)("success", "Successfully updated item in cart!");
        } else {
            // updating the bookinfo object with the total_quantity if modified on first visit of the details page since cartItems is not existent at this point
            if (initialFormValue.current !== bookInfo.total_quantity) {
                bookInfo.total_quantity = initialFormValue.current.textContent;
                setCartItems((prevValue)=>[
                        ...prevValue,
                        bookInfo
                    ]);
                (0,helper/* alert */.Z)("success", "Item successfully added to cart!");
            } else {
                setCartItems((prevValue)=>[
                        ...prevValue,
                        bookInfo
                    ]);
                (0,helper/* alert */.Z)("success", "Item successfully added to cart!");
            }
        }
    };
    (0,external_react_.useEffect)(()=>setNoOfItemsInCart(cartItems.length), [
        cartItems
    ]);
    // sets data to local storage
    (0,external_react_.useEffect)(()=>{
        if (cartItems.length) localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [
        cartItems
    ]);
    // get data from local storage
    (0,external_react_.useEffect)(()=>{
        const storedCartItems = localStorage.getItem("cartItems");
        const parsedArray = storedCartItems ? JSON.parse(storedCartItems) : [];
        if (parsedArray && parsedArray.length) {
            setCartItems(parsedArray);
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        const total = cartItems.map((obj)=>obj.price * obj.total_quantity).reduce((acc, curValue)=>acc + curValue, 0);
        setTotalCost(total);
    }, [
        cartItems,
        cartIsOpened
    ]);
    const handleIncrement2 = function(obj) {
        const index = cartItems.findIndex((item)=>item._id === obj._id); // returns the index of the object in the array
        setCartItems((prevValue)=>prevValue.map((item, i)=>i === index ? {
                    ...item,
                    total_quantity: +item.total_quantity + 1
                } : item));
    };
    const handleDecrement2 = function(obj) {
        if (obj.total_quantity > 1) {
            const index = cartItems.findIndex((item)=>item._id === obj._id); // returns the index of the object in the array
            setCartItems((prevValue)=>prevValue.map((item, i)=>i === index ? {
                        ...item,
                        total_quantity: +item.total_quantity - 1
                    } : item));
        }
    };
    const removeItemFromCart = function(obj) {
        const newArray = cartItems.filter((item)=>item._id !== obj._id);
        setCartItems(newArray);
        (0,helper/* alert */.Z)("success", "Item removed from cart");
        localStorage.setItem("cartItems", JSON.stringify(newArray));
    };
    const findCurObj = function(bookInfo) {
        const foundObject = cartItems.find((obj)=>obj._id === bookInfo._id);
        setNewObj(foundObject);
    };
    const cartDetails = cartItems?.map((obj, index)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex items-start px-8 py-6 gap-[2rem] border-b border-mainPGParagraphTxt",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: obj.file,
                    alt: "book image",
                    className: "w-[80px] md:w-[150px]"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between my-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "text-headerBackground cardoFont font-bold capitalize",
                                            children: obj.title
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            className: "text-mainPGParagraphTxt",
                                            children: [
                                                "$",
                                                obj.price
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "border border-CTA text-center w-[80px] px-3 py-1 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "cursor-pointer text-headerBackground font-bold text-2xl",
                                            onClick: ()=>handleDecrement2(obj),
                                            children: "-"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: obj.total_quantity
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "cursor-pointer text-headerBackground font-bold text-xl",
                                            onClick: ()=>handleIncrement2(obj),
                                            children: "+"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: "bg-headerBackground text-white font-bold cardoFont px-2 py-1 my-2",
                            onClick: ()=>removeItemFromCart(obj),
                            children: "Remove"
                        })
                    ]
                })
            ]
        }, index);
    });
    // render different content based on the route
    (0,external_react_.useEffect)(()=>{
        switch(router.pathname){
            case "/pages":
                setCurrentRoute(/*#__PURE__*/ jsx_runtime.jsx(PagesDYN, {}));
                setDesktopHeaderHeight("lg:h-[50vh]");
                setMargin("");
                setNavbar(false);
                break;
            case "/about":
                setCurrentRoute(/*#__PURE__*/ jsx_runtime.jsx(AboutDYN, {}));
                setDesktopHeaderHeight("lg:h-[50vh]");
                setMargin("");
                setNavbar(false);
                break;
            case "/services":
                setCurrentRoute(/*#__PURE__*/ jsx_runtime.jsx(ServicesDYN, {}));
                setDesktopHeaderHeight("lg:h-[50vh]");
                setMargin("");
                setNavbar(false);
                break;
            case "/contact":
                setCurrentRoute(/*#__PURE__*/ jsx_runtime.jsx(ContactDYN, {}));
                setDesktopHeaderHeight("lg:h-[50vh]");
                setMargin("");
                setNavbar(false);
                break;
            default:
                if (router.pathname.startsWith("/store")) {
                    setCurrentRoute(/*#__PURE__*/ jsx_runtime.jsx(StoreDYN, {}));
                    setDesktopHeaderHeight("lg:h-[50vh]");
                    setMargin("");
                    setNavbar(false);
                } else {
                    setCurrentRoute(/*#__PURE__*/ jsx_runtime.jsx(HomeDYN, {}));
                    setDesktopHeaderHeight("lg:h-screen");
                    setMargin("mb-32");
                    setNavbar(false);
                }
                break;
        }
    }, [
        router.pathname
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(modal.Provider, {
        value: {
            modalWindow,
            handleClick,
            handleSubmit,
            formData,
            handleInputChange,
            submitBtn,
            handleFileChange,
            allUploadedBooks,
            fileInput,
            setFormData,
            handleCartClick,
            closeCart,
            cartIsOpened,
            addToCart,
            noOfItemsInCart,
            cartItems,
            setCartItems,
            initialFormValue,
            findCurObj,
            newObj,
            totalCost,
            navbar,
            handleNavBar,
            setNavbar
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                className: `bg-headerBackground w-full h-auto ${desktopHeaderHeight} relative px-8 pb-6 lg:pb-0 ${margin}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "inner_header w-full lg:flex items-center justify-center mx-auto container",
                        children: /*#__PURE__*/ jsx_runtime.jsx(Navbar, {})
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("section", {
                        className: "hero lg:flex justify-between items-center container w-full mx-auto mt-10",
                        children: currentRoute
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: "w-full h-full",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `overlay absolute top-0 left-0 bottom-0 z-[1000] h-full w-full ${modalWindow && "visible"}`,
                onClick: ()=>setModalWindow(false)
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `overlay2 absolute top-0 left-0 bottom-0 z-[1000] h-full w-full ${cartIsOpened && "visible"}`,
                onClick: closeCart
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `modalWindow w-[300px] sm:w-[480px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999] rounded-md bg-white ${cartIsOpened && "visible"}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-CTA w-full flex items-center justify-between px-4 py-3 rounded-t-lg",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "text-headerBackground font-bold cardoFont text-xl",
                                children: "Your Cart"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-headerBackground cursor-pointer",
                                onClick: closeCart,
                                children: "✖"
                            })
                        ]
                    }),
                    cartDetails.length ? cartDetails : /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "cardoFont text-lg text-mainPGParagraphTxt text-center p-6",
                        children: "There are no items in your cart at this time. You can start by adding items to you cart!"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: `w-full px-8 py-6 ${cartItems.length ? "block" : "hidden"}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-between my-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "cardoFont text-headerBackground",
                                        children: "Sub-Total"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "text-headerBackground font-bold",
                                        children: [
                                            "$",
                                            totalCost?.toFixed(2),
                                            " USD"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/store/checkout",
                                onClick: handleCartClick,
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "text-headerBackground font-bold w-full bg-CTA py-2 my-2",
                                    children: "Continue to Checkout"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ alert),
/* harmony export */   c: () => (/* binding */ SERVER)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

const alert = function(status, message) {
    const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast)=>{
            toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
            toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
        }
    });
    Toast.fire({
        icon: status,
        title: message
    });
};
// export const SERVER = 'http://localhost:8080/api';
const SERVER = "https://bookly-api.onrender.com/api";


/***/ }),

/***/ 8375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RootLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5712);



function App({ Component, pageProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RootLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;