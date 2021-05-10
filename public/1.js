(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&lang=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&lang=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "div",
        { staticClass: "sidebar ps", attrs: { "data-color": "black" } },
        [
          _c("div", { staticClass: "sidebar-wrapper ps ps--active-y" }, [
            _c("ul", { staticClass: "nav" }, [
              _c("div", { staticClass: "user user__menu" }, [
                _c("div", { staticClass: "photo" }, [
                  _c("img", {
                    attrs: { alt: "avatar", src: "/img/placeholder.jpg" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "info" }, [
                  _c("a", { attrs: { "data-toggle": "collapse", href: "#" } }, [
                    _c("span", [
                      _vm._v(
                        "\n                                Admin\n                                "
                      ),
                      _c("b", { staticClass: "caret" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "clearfix" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "ul",
                      {
                        staticClass: "nav user-menu__nav",
                        staticStyle: { display: "none" }
                      },
                      [
                        _c("li", [
                          _c(
                            "a",
                            { attrs: { href: "/examples/user-profile" } },
                            [
                              _c("span", { staticClass: "sidebar-mini-icon" }, [
                                _vm._v("MP")
                              ]),
                              _c("span", { staticClass: "sidebar-normal" }, [
                                _vm._v("My Profile")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("a", { staticClass: "twhite" }, [
                            _c("span", { staticClass: "sidebar-mini-icon" }, [
                              _vm._v("L")
                            ]),
                            _c("span", { staticClass: "sidebar-normal" }, [
                              _vm._v("Logout")
                            ])
                          ])
                        ])
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", {}, [
                _c(
                  "a",
                  { staticClass: "nav-link", attrs: { href: "/dashboard" } },
                  [
                    _c("i", { staticClass: "now-ui-icons design_app" }),
                    _vm._v(" "),
                    _c("p", [_vm._v("Dashboard")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c("ul", { staticClass: "nav links__nav" }, [
                  _c(
                    "li",
                    { staticClass: "nav-item active router-link-active" },
                    [
                      _c(
                        "a",
                        {
                          staticClass:
                            "nav-link nav-item active router-link-active",
                          attrs: {
                            href: "/examples/user-profile",
                            "aria-current": "page"
                          }
                        },
                        [
                          _c("span", { staticClass: "sidebar-mini-icon" }, [
                            _vm._v("UP")
                          ]),
                          _c("span", { staticClass: "sidebar-normal" }, [
                            _vm._v("User Profile")
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("li", {}, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        attrs: { href: "/examples/user-management/list-users" }
                      },
                      [
                        _c("span", { staticClass: "sidebar-mini-icon" }, [
                          _vm._v("UM")
                        ]),
                        _c("span", { staticClass: "sidebar-normal" }, [
                          _vm._v("User Management")
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "ps__rail-x",
              staticStyle: { left: "0px", bottom: "0px" }
            },
            [
              _c("div", {
                staticClass: "ps__thumb-x",
                staticStyle: { left: "0px", width: "0px" },
                attrs: { tabindex: "0" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "ps__rail-y",
              staticStyle: { top: "0px", right: "0px" }
            },
            [
              _c("div", {
                staticClass: "ps__thumb-y",
                staticStyle: { top: "0px", height: "0px" },
                attrs: { tabindex: "0" }
              })
            ]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Sidebar.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Sidebar.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_81fbb27e_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=81fbb27e&lang=true& */ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&lang=true&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_81fbb27e_lang_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_81fbb27e_lang_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&lang=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&lang=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=81fbb27e&lang=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&lang=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e_lang_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e_lang_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);