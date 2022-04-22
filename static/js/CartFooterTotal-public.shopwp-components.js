"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["CartFooterTotal-public"],{

/***/ "./src/components/cart/footer/total/index.jsx":
/*!****************************************************!*\
  !*** ./src/components/cart/footer/total/index.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var shopwp = __webpack_require__(/*! ./shopwp-defaults.js */ "./shopwp-defaults.js")["default"];
/** @jsx jsx */


var CartFooterEstimatedTax = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | CartFooterEstimatedTax-public */ "CartFooterEstimatedTax-public").then(__webpack_require__.bind(__webpack_require__, /*! ../estimated-tax/index.jsx */ "./src/components/cart/footer/estimated-tax/index.jsx"));
});
var CartFooterSubtotal = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | CartFooterSubtotal-public */ "CartFooterSubtotal-public").then(__webpack_require__.bind(__webpack_require__, /*! ../subtotal */ "./src/components/cart/footer/subtotal/index.jsx"));
});
var CartFooterDiscountWrapper = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | CartFooterDiscountWrapper-public */ "CartFooterDiscountWrapper-public").then(__webpack_require__.bind(__webpack_require__, /*! ../discount-wrapper */ "./src/components/cart/footer/discount-wrapper/index.jsx"));
});

function CartFooterTotal(_ref) {
  var cartState = _ref.cartState;
  var CartFooterTotalCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("display:flex;flex-direction:column;margin-top:15px;.wps-tax-row{order:", cartState.discountCode ? "1" : "2", ";}.wps-discount-row{order:", cartState.discountCode ? "2" : "1", ";}.wps-subtotal-row{order:3;};label:CartFooterTotalCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jYXJ0L2Zvb3Rlci90b3RhbC9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JnQyIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvY2FydC9mb290ZXIvdG90YWwvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5cbmNvbnN0IENhcnRGb290ZXJFc3RpbWF0ZWRUYXggPSB3cC5lbGVtZW50LmxhenkoKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6ICdDYXJ0Rm9vdGVyRXN0aW1hdGVkVGF4LXB1YmxpYycgKi8gXCIuLi9lc3RpbWF0ZWQtdGF4L2luZGV4LmpzeFwiXG4gIClcbilcblxuY29uc3QgQ2FydEZvb3RlclN1YnRvdGFsID0gd3AuZWxlbWVudC5sYXp5KCgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnQ2FydEZvb3RlclN1YnRvdGFsLXB1YmxpYycgKi8gXCIuLi9zdWJ0b3RhbFwiKVxuKVxuXG5jb25zdCBDYXJ0Rm9vdGVyRGlzY291bnRXcmFwcGVyID0gd3AuZWxlbWVudC5sYXp5KCgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnQ2FydEZvb3RlckRpc2NvdW50V3JhcHBlci1wdWJsaWMnICovIFwiLi4vZGlzY291bnQtd3JhcHBlclwiXG4gIClcbilcblxuZnVuY3Rpb24gQ2FydEZvb3RlclRvdGFsKHsgY2FydFN0YXRlIH0pIHtcbiAgY29uc3QgQ2FydEZvb3RlclRvdGFsQ1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuXG4gICAgLndwcy10YXgtcm93IHtcbiAgICAgIG9yZGVyOiAke2NhcnRTdGF0ZS5kaXNjb3VudENvZGUgPyBcIjFcIiA6IFwiMlwifTtcbiAgICB9XG5cbiAgICAud3BzLWRpc2NvdW50LXJvdyB7XG4gICAgICBvcmRlcjogJHtjYXJ0U3RhdGUuZGlzY291bnRDb2RlID8gXCIyXCIgOiBcIjFcIn07XG4gICAgfVxuXG4gICAgLndwcy1zdWJ0b3RhbC1yb3cge1xuICAgICAgb3JkZXI6IDM7XG4gICAgfVxuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17Q2FydEZvb3RlclRvdGFsQ1NTfT5cbiAgICAgIHtzaG9wd3AubWlzYy5pc1BybyAmJiBzaG9wd3AuZ2VuZXJhbC5zaG93RXN0aW1hdGVkVGF4ID8gKFxuICAgICAgICA8Q2FydEZvb3RlckVzdGltYXRlZFRheCBkaXNjb3VudEFwcGxpZWQ9e2NhcnRTdGF0ZS5kaXNjb3VudENvZGV9IC8+XG4gICAgICApIDogbnVsbH1cblxuICAgICAge3Nob3B3cC5taXNjLmlzUHJvICYmIHNob3B3cC5nZW5lcmFsLmVuYWJsZURpc2NvdW50Q29kZXMgPyAoXG4gICAgICAgIDxDYXJ0Rm9vdGVyRGlzY291bnRXcmFwcGVyIC8+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxDYXJ0Rm9vdGVyU3VidG90YWwgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0Rm9vdGVyVG90YWxcbiJdfQ== */"));
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    css: CartFooterTotalCSS
  }, shopwp.misc.isPro && shopwp.general.showEstimatedTax ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.jsx)(CartFooterEstimatedTax, {
    discountApplied: cartState.discountCode
  }) : null, shopwp.misc.isPro && shopwp.general.enableDiscountCodes ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.jsx)(CartFooterDiscountWrapper, null) : null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.jsx)(CartFooterSubtotal, null));
}

/* harmony default export */ __webpack_exports__["default"] = (CartFooterTotal);

/***/ })

}]);
//# sourceMappingURL=CartFooterTotal-public.shopwp-components.js.map