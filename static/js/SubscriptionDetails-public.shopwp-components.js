"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["SubscriptionDetails-public"],{

/***/ "./src/components/products/product/buy-button/subscriptions/_state/hooks.jsx":
/*!***********************************************************************************!*\
  !*** ./src/components/products/product/buy-button/subscriptions/_state/hooks.jsx ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSubscriptionsBuyButtonDispatch": function() { return /* binding */ useSubscriptionsBuyButtonDispatch; },
/* harmony export */   "useSubscriptionsBuyButtonState": function() { return /* binding */ useSubscriptionsBuyButtonState; }
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/components/products/product/buy-button/subscriptions/_state/context.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");


function useSubscriptionsBuyButtonState() {
  var context = __webpack_provided_wp_dot_element.useContext(_context__WEBPACK_IMPORTED_MODULE_0__.SubscriptionsBuyButtonStateContext);

  if (!context) {
    throw new Error("useSubscriptionsBuyButtonState must be used within the SubscriptionsBuyButtonProvider");
  }

  return context;
}

function useSubscriptionsBuyButtonDispatch() {
  var context = __webpack_provided_wp_dot_element.useContext(_context__WEBPACK_IMPORTED_MODULE_0__.SubscriptionsBuyButtonDispatchContext);

  if (!context) {
    throw new Error("useSubscriptionsBuyButtonDispatch must be used within the SubscriptionsBuyButtonProvider");
  }

  return context;
}



/***/ }),

/***/ "./src/components/products/product/buy-button/subscriptions/details/index.jsx":
/*!************************************************************************************!*\
  !*** ./src/components/products/product/buy-button/subscriptions/details/index.jsx ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/products/product/buy-button/subscriptions/_state/hooks.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");



var SubscriptionTooltip = __webpack_provided_wp_dot_element.lazy(function () {
  return Promise.all(/*! import() | SubscriptionTooltip-public */[__webpack_require__.e("vendors-node_modules_tippyjs_react_dist_tippy-react_esm_js-node_modules_tippy_js_dist_tippy_css"), __webpack_require__.e("vendors-node_modules_tippy_js_animations_shift-toward_css-node_modules_tippy_js_themes_light--811f78"), __webpack_require__.e("SubscriptionTooltip-public")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../../tooltip */ "./src/components/tooltip/index.jsx"));
});

function SubscriptionDetails() {
  var state = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useSubscriptionsBuyButtonState)();
  return /*#__PURE__*/React.createElement(SubscriptionTooltip, {
    label: state.settings.subscriptionsDetailsLabel,
    options: {
      placement: "right"
    }
  }, /*#__PURE__*/React.createElement(Utils__WEBPACK_IMPORTED_MODULE_0__.FilterHook, {
    name: "product.subscriptionsInfoHTML"
  }, /*#__PURE__*/React.createElement(__webpack_provided_wp_dot_element.Fragment, null, /*#__PURE__*/React.createElement("strong", null, state.settings.subscriptionsDetailsHeading), /*#__PURE__*/React.createElement("p", null, state.settings.subscriptionsDetailsText))));
}

/* harmony default export */ __webpack_exports__["default"] = (SubscriptionDetails);

/***/ })

}]);
//# sourceMappingURL=SubscriptionDetails-public.shopwp-components.js.map