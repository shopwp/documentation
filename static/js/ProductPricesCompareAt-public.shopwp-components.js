"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["ProductPricesCompareAt-public"],{

/***/ "./src/components/products/product/pricing/compare-at/index.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/products/product/pricing/compare-at/index.jsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../price */ "./src/components/products/product/pricing/price/index.jsx");
/* harmony import */ var _sale_notice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sale-notice */ "./src/components/products/product/pricing/sale-notice/index.jsx");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/** @jsx jsx */






function ProductPricesCompareAt(_ref) {
  var prices = _ref.prices,
      compareAt = _ref.compareAt,
      selectedVariant = _ref.selectedVariant,
      showPriceRange = _ref.showPriceRange,
      settings = _ref.settings;
  var ProductPricesCompareAtWrapperCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)("display:flex;align-items:center;margin:", selectedVariant ? "6px 0 0 0" : "10px 0 0 0", ";.wps-product-individual-price{font-size:15px;}&:empty{display:none;};label:ProductPricesCompareAtWrapperCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L3ByaWNpbmcvY29tcGFyZS1hdC9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYThDIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L3ByaWNpbmcvY29tcGFyZS1hdC9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCBQcm9kdWN0UHJpY2UgZnJvbSBcIi4uL3ByaWNlXCJcbmltcG9ydCBQcm9kdWN0UHJpY2VTYWxlTm90aWNlIGZyb20gXCIuLi9zYWxlLW5vdGljZVwiXG5pbXBvcnQgeyBmaXJzdFByaWNlQ29tcGFyZUF0IH0gZnJvbSBcIlV0aWxzXCJcblxuZnVuY3Rpb24gUHJvZHVjdFByaWNlc0NvbXBhcmVBdCh7XG4gIHByaWNlcyxcbiAgY29tcGFyZUF0LFxuICBzZWxlY3RlZFZhcmlhbnQsXG4gIHNob3dQcmljZVJhbmdlLFxuICBzZXR0aW5ncyxcbn0pIHtcbiAgY29uc3QgUHJvZHVjdFByaWNlc0NvbXBhcmVBdFdyYXBwZXJDU1MgPSBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogJHtzZWxlY3RlZFZhcmlhbnQgPyBcIjZweCAwIDAgMFwiIDogXCIxMHB4IDAgMCAwXCJ9O1xuXG4gICAgLndwcy1wcm9kdWN0LWluZGl2aWR1YWwtcHJpY2Uge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuICAgICY6ZW1wdHkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIGBcblxuICBpZiAoc2VsZWN0ZWRWYXJpYW50KSB7XG4gICAgaWYgKHNlbGVjdGVkVmFyaWFudC5ub2RlLmNvbXBhcmVBdFByaWNlVjIpIHtcbiAgICAgIHZhciBoYXNDb21wYXJlQXRQcmljZSA9IHNlbGVjdGVkVmFyaWFudC5ub2RlLmNvbXBhcmVBdFByaWNlVjIuYW1vdW50XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBoYXNDb21wYXJlQXRQcmljZSA9IGZhbHNlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBoYXNDb21wYXJlQXRQcmljZSA9IGZpcnN0UHJpY2VDb21wYXJlQXQocHJpY2VzKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFByb2R1Y3RQcmljZVxuICAgICAgICBzZWxlY3RlZFZhcmlhbnQ9e3NlbGVjdGVkVmFyaWFudH1cbiAgICAgICAgY29tcGFyZUF0PXtmYWxzZX1cbiAgICAgICAgcHJpY2VzPXtwcmljZXN9XG4gICAgICAgIHNob3dQcmljZVJhbmdlPXtzaG93UHJpY2VSYW5nZX1cbiAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgLz5cblxuICAgICAge2NvbXBhcmVBdCAmJiBoYXNDb21wYXJlQXRQcmljZSA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIndwcy1wcm9kdWN0LXByaWNlcy1jb21wYXJlLWF0XCJcbiAgICAgICAgICBjc3M9e1Byb2R1Y3RQcmljZXNDb21wYXJlQXRXcmFwcGVyQ1NTfVxuICAgICAgICA+XG4gICAgICAgICAgPFByb2R1Y3RQcmljZVNhbGVOb3RpY2U+XG4gICAgICAgICAgICA8UHJvZHVjdFByaWNlXG4gICAgICAgICAgICAgIHNlbGVjdGVkVmFyaWFudD17c2VsZWN0ZWRWYXJpYW50fVxuICAgICAgICAgICAgICBjb21wYXJlQXQ9e3RydWV9XG4gICAgICAgICAgICAgIHByaWNlcz17cHJpY2VzfVxuICAgICAgICAgICAgICBzaG93UHJpY2VSYW5nZT17c2hvd1ByaWNlUmFuZ2V9XG4gICAgICAgICAgICAgIHNldHRpbmdzPXtzZXR0aW5nc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Qcm9kdWN0UHJpY2VTYWxlTm90aWNlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdwLmVsZW1lbnQubWVtbyhQcm9kdWN0UHJpY2VzQ29tcGFyZUF0KVxuIl19 */"));

  if (selectedVariant) {
    if (selectedVariant.node.compareAtPriceV2) {
      var hasCompareAtPrice = selectedVariant.node.compareAtPriceV2.amount;
    } else {
      var hasCompareAtPrice = false;
    }
  } else {
    var hasCompareAtPrice = (0,Utils__WEBPACK_IMPORTED_MODULE_2__.firstPriceCompareAt)(prices);
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(__webpack_provided_wp_dot_element.Fragment, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_price__WEBPACK_IMPORTED_MODULE_0__["default"], {
    selectedVariant: selectedVariant,
    compareAt: false,
    prices: prices,
    showPriceRange: showPriceRange,
    settings: settings
  }), compareAt && hasCompareAtPrice ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "wps-product-prices-compare-at",
    css: ProductPricesCompareAtWrapperCSS
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sale_notice__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_price__WEBPACK_IMPORTED_MODULE_0__["default"], {
    selectedVariant: selectedVariant,
    compareAt: true,
    prices: prices,
    showPriceRange: showPriceRange,
    settings: settings
  }))) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_provided_wp_dot_element.memo(ProductPricesCompareAt));

/***/ }),

/***/ "./src/components/products/product/pricing/sale-notice/index.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/products/product/pricing/sale-notice/index.jsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var __webpack_provided_wp_dot_i18n = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */




var _ref =  false ? 0 : {
  name: "1apltd1-ProductPriceSaleNoticeCSS",
  styles: "&&{color:red;margin:0;position:relative;top:0;font-size:15px;line-height:1;font-style:normal;};label:ProductPriceSaleNoticeCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L3ByaWNpbmcvc2FsZS1ub3RpY2UvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUt1QyIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC9wcmljaW5nL3NhbGUtbm90aWNlL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHsgc2hvdWxkU2hvd1NhbGVOb3RpY2UgfSBmcm9tIFwiVXRpbHNcIlxuXG5mdW5jdGlvbiBQcm9kdWN0UHJpY2VTYWxlTm90aWNlKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBQcm9kdWN0UHJpY2VTYWxlTm90aWNlQ1NTID0gY3NzYFxuICAgICYmIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDA7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICB9XG4gIGBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c21hbGxcbiAgICAgICAgY2xhc3NOYW1lPVwid3BzLXByaWNpbmctc2FsZS1ub3RpY2VcIlxuICAgICAgICBjc3M9e1Byb2R1Y3RQcmljZVNhbGVOb3RpY2VDU1N9XG4gICAgICA+XG4gICAgICAgIHt3cC5pMThuLl9fKFwiU2FsZSFcIiwgXCJzaG9wd3BcIil9XG4gICAgICA8L3NtYWxsPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RQcmljZVNhbGVOb3RpY2VcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function ProductPriceSaleNotice(_ref2) {
  var children = _ref2.children;
  var ProductPriceSaleNoticeCSS = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(__webpack_provided_wp_dot_element.Fragment, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("small", {
    className: "wps-pricing-sale-notice",
    css: ProductPriceSaleNoticeCSS
  }, __webpack_provided_wp_dot_i18n.__("Sale!", "shopwp")), children);
}

/* harmony default export */ __webpack_exports__["default"] = (ProductPriceSaleNotice);

/***/ })

}]);
//# sourceMappingURL=ProductPricesCompareAt-public.shopwp-components.js.map