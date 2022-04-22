"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["ProductPricesSubscription-public"],{

/***/ "./src/components/products/product/pricing/subscription/index.jsx":
/*!************************************************************************!*\
  !*** ./src/components/products/product/pricing/subscription/index.jsx ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _single__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../single */ "./src/components/products/product/pricing/single/index.jsx");
/* harmony import */ var Common_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/animations */ "./src/common/animations/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */





var _ref =  false ? 0 : {
  name: "1cx1sfj-ProductPricesSubscriptionCSS",
  styles: "display:flex;flex-direction:row;label:ProductPricesSubscriptionCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L3ByaWNpbmcvc3Vic2NyaXB0aW9uL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNMEMiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvcHJpY2luZy9zdWJzY3JpcHRpb24vaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgUHJvZHVjdFByaWNlU2luZ2xlIGZyb20gXCIuLi9zaW5nbGVcIlxuaW1wb3J0IHsgU2xpZGVJbkZyb21SaWdodCB9IGZyb20gXCJDb21tb24vYW5pbWF0aW9uc1wiXG5cbmZ1bmN0aW9uIFByb2R1Y3RQcmljZXNTdWJzY3JpcHRpb24oeyBzdWJzY3JpcHRpb25JbmZvLCBzZWxlY3RlZFZhcmlhbnQgfSkge1xuICBjb25zdCBQcm9kdWN0UHJpY2VzU3Vic2NyaXB0aW9uQ1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPFNsaWRlSW5Gcm9tUmlnaHQ+XG4gICAgICA8ZGl2IGNzcz17UHJvZHVjdFByaWNlc1N1YnNjcmlwdGlvbkNTU30+XG4gICAgICAgIHtzdWJzY3JpcHRpb25JbmZvLmRpc2NvdW50UHJpY2UgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxQcm9kdWN0UHJpY2VTaW5nbGUgcHJpY2U9e3N1YnNjcmlwdGlvbkluZm8uZGlzY291bnRQcmljZX0gLz5cbiAgICAgICAgICAgIDxQcm9kdWN0UHJpY2VTaW5nbGVcbiAgICAgICAgICAgICAgcHJpY2U9e3N1YnNjcmlwdGlvbkluZm8ucmVndWxhclByaWNlfVxuICAgICAgICAgICAgICBjb21wYXJlQXQ9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogc2VsZWN0ZWRWYXJpYW50Lm5vZGUuY29tcGFyZUF0UHJpY2VWMiA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFByb2R1Y3RQcmljZVNpbmdsZSBwcmljZT17c3Vic2NyaXB0aW9uSW5mby5yZWd1bGFyUHJpY2V9IC8+XG4gICAgICAgICAgICA8UHJvZHVjdFByaWNlU2luZ2xlXG4gICAgICAgICAgICAgIHByaWNlPXtzZWxlY3RlZFZhcmlhbnQubm9kZS5jb21wYXJlQXRQcmljZVYyLmFtb3VudH1cbiAgICAgICAgICAgICAgY29tcGFyZUF0PXt0cnVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UHJvZHVjdFByaWNlU2luZ2xlIHByaWNlPXtzdWJzY3JpcHRpb25JbmZvLnJlZ3VsYXJQcmljZX0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvU2xpZGVJbkZyb21SaWdodD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UHJpY2VzU3Vic2NyaXB0aW9uXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function ProductPricesSubscription(_ref2) {
  var subscriptionInfo = _ref2.subscriptionInfo,
      selectedVariant = _ref2.selectedVariant;
  var ProductPricesSubscriptionCSS = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(Common_animations__WEBPACK_IMPORTED_MODULE_1__.SlideInFromRight, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    css: ProductPricesSubscriptionCSS
  }, subscriptionInfo.discountPrice ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(__webpack_provided_wp_dot_element.Fragment, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_single__WEBPACK_IMPORTED_MODULE_0__["default"], {
    price: subscriptionInfo.discountPrice
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_single__WEBPACK_IMPORTED_MODULE_0__["default"], {
    price: subscriptionInfo.regularPrice,
    compareAt: true
  })) : selectedVariant.node.compareAtPriceV2 ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(__webpack_provided_wp_dot_element.Fragment, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_single__WEBPACK_IMPORTED_MODULE_0__["default"], {
    price: subscriptionInfo.regularPrice
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_single__WEBPACK_IMPORTED_MODULE_0__["default"], {
    price: selectedVariant.node.compareAtPriceV2.amount,
    compareAt: true
  })) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_single__WEBPACK_IMPORTED_MODULE_0__["default"], {
    price: subscriptionInfo.regularPrice
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductPricesSubscription);

/***/ })

}]);
//# sourceMappingURL=ProductPricesSubscription-public.shopwp-components.js.map