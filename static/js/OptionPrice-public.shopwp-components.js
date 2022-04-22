"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["OptionPrice-public"],{

/***/ "./src/components/storefront/options/option-price/index.jsx":
/*!******************************************************************!*\
  !*** ./src/components/storefront/options/option-price/index.jsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");


var StorefrontFilterOptionsGroup = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | StorefrontFilterOptionsGroup-public */ "StorefrontFilterOptionsGroup-public").then(__webpack_require__.bind(__webpack_require__, /*! ../group */ "./src/components/storefront/options/group/index.jsx"));
});
var StorefrontFilterOptionsGroupItems = __webpack_provided_wp_dot_element.lazy(function () {
  return Promise.all(/*! import() | StorefrontFilterOptionsGroupItems-public */[__webpack_require__.e("vendors-node_modules_lodash_some_js-node_modules_memoize-one_dist_memoize-one_esm_js-node_mod-83571a"), __webpack_require__.e("StorefrontFilterOptionsGroupItems-public")]).then(__webpack_require__.bind(__webpack_require__, /*! ../group-items */ "./src/components/storefront/options/group-items/index.jsx"));
});

function OptionPrice(_ref) {
  var settings = _ref.settings;
  var shouldOpen = (0,Utils__WEBPACK_IMPORTED_MODULE_0__.shouldOpenOnLoad)(settings, "price");
  return /*#__PURE__*/React.createElement(StorefrontFilterOptionsGroup, {
    openOnLoad: shouldOpen,
    isLoadingItems: false,
    groupType: "price",
    areFilterOptionsEmpty: false,
    noFilterGroupFoundText: settings.noFilterGroupFoundText,
    heading: settings.priceHeading,
    items: /*#__PURE__*/React.createElement(StorefrontFilterOptionsGroupItems, {
      filterOptions: __webpack_provided_wp_dot_hooks.applyFilters("storefront.availablePricing", settings.filterablePriceValues),
      itemType: "price"
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (OptionPrice);

/***/ })

}]);
//# sourceMappingURL=OptionPrice-public.shopwp-components.js.map