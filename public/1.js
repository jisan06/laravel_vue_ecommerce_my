(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/modules/brands/router/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/modules/brands/router/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * TEST MODULE ROUTES. THIS IS A CUSTOM ROUTES.
 * A TEST SET UP...
 * ALL TEAM MEMBERS SHOULD JUST COPY AND PASTE TO EXTENDS THE APP
 */
var routes = [{
  path: 'brands',
  name: 'Brands',
  component: function component() {
    return __webpack_require__.e(/*! import() | Chunks/Admin-Brands */ "Chunks/Admin-Brands").then(__webpack_require__.bind(null, /*! ../pages/brands.vue */ "./resources/js/modules/brands/pages/brands.vue"));
  },
  title: 'This is brand page',
  meta: {
    guest: false,
    allowedUserType: ['Admin']
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

}]);