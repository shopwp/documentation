"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["OptionTags-public"],{

/***/ "./src/components/storefront/options/option-tags/index.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/storefront/options/option-tags/index.jsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Api */ "./src/api/index.js");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");



var StorefrontFilterOptionsGroupOption = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | StorefrontFilterOptionsGroupOption-public */ "StorefrontFilterOptionsGroupOption-public").then(__webpack_require__.bind(__webpack_require__, /*! ../option */ "./src/components/storefront/options/option/index.jsx"));
});

function OptionTags(_ref) {
  var settings = _ref.settings;
  var shouldOpen = (0,Utils__WEBPACK_IMPORTED_MODULE_1__.shouldOpenOnLoad)(settings, "tags");
  var noFilterGroupFoundText = settings.noFilterGroupFoundText;
  return /*#__PURE__*/React.createElement(StorefrontFilterOptionsGroupOption, {
    openOnLoad: shouldOpen,
    noFilterGroupFoundText: noFilterGroupFoundText,
    queryFn: Api__WEBPACK_IMPORTED_MODULE_0__.getAllTags,
    groupType: "tags",
    filterName: "storefront.availableTags",
    heading: settings.tagsHeading
  });
}

/* harmony default export */ __webpack_exports__["default"] = (OptionTags);

/***/ })

}]);
//# sourceMappingURL=OptionTags-public.shopwp-components.js.map