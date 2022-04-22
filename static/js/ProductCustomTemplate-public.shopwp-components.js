"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["ProductCustomTemplate-public"],{

/***/ "./src/components/products/product/description/index.jsx":
/*!***************************************************************!*\
  !*** ./src/components/products/product/description/index.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var _items_state_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../items/_state/hooks */ "./src/components/items/_state/hooks.jsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/products/product/_state/hooks.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/** @jsx jsx */







function ProductDescription() {
  var itemsState = (0,_items_state_hooks__WEBPACK_IMPORTED_MODULE_2__.useItemsState)();
  var productState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_3__.useProductState)();
  var ProductDescriptionCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.css)("color:", itemsState.settings.descriptionColor, ";font-family:", itemsState.settings.descriptionTypeFontFamily ? itemsState.settings.descriptionTypeFontFamily : itemsState.settings.descriptionFont ? itemsState.settings.descriptionFont : "inherit", ";font-weight:", itemsState.settings.descriptionTypeFontWeight ? itemsState.settings.descriptionTypeFontWeight : itemsState.settings.descriptionFontWeight ? itemsState.settings.descriptionFontWeight : "initial", ";font-size:", itemsState.settings.descriptionTypeFontSize ? itemsState.settings.descriptionTypeFontSize : "initial", ";font-style:", itemsState.settings.descriptionTypeFontStyle ? itemsState.settings.descriptionTypeFontStyle : "initial", ";letter-spacing:", itemsState.settings.descriptionTypeLetterSpacing ? itemsState.settings.descriptionTypeLetterSpacing : "initial", ";line-height:", itemsState.settings.descriptionTypeLineHeight ? itemsState.settings.descriptionTypeLineHeight : "initial", ";text-decoration:", itemsState.settings.descriptionTypeTextDecoration ? itemsState.settings.descriptionTypeTextDecoration : "initial", ";text-transform:", itemsState.settings.descriptionTypeTextTransform ? itemsState.settings.descriptionTypeTextTransform : "initial", ";margin-bottom:", itemsState.settings.isSingleComponent ? "0px" : "20px", ";p:first-of-type{margin-top:0;};label:ProductDescriptionCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2Rlc2NyaXB0aW9uL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXbUMiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvZGVzY3JpcHRpb24vaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgeyB1c2VQb3J0YWwgfSBmcm9tIFwiSG9va3NcIlxuaW1wb3J0IHsgZmluZFBvcnRhbEVsZW1lbnQgfSBmcm9tIFwiVXRpbHNcIlxuaW1wb3J0IHsgdXNlSXRlbXNTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9pdGVtcy9fc3RhdGUvaG9va3NcIlxuaW1wb3J0IHsgdXNlUHJvZHVjdFN0YXRlIH0gZnJvbSBcIi4uL19zdGF0ZS9ob29rc1wiXG5cbmZ1bmN0aW9uIFByb2R1Y3REZXNjcmlwdGlvbigpIHtcbiAgY29uc3QgaXRlbXNTdGF0ZSA9IHVzZUl0ZW1zU3RhdGUoKVxuICBjb25zdCBwcm9kdWN0U3RhdGUgPSB1c2VQcm9kdWN0U3RhdGUoKVxuXG4gIGNvbnN0IFByb2R1Y3REZXNjcmlwdGlvbkNTUyA9IGNzc2BcbiAgICBjb2xvcjogJHtpdGVtc1N0YXRlLnNldHRpbmdzLmRlc2NyaXB0aW9uQ29sb3J9O1xuXG4gICAgZm9udC1mYW1pbHk6ICR7aXRlbXNTdGF0ZS5zZXR0aW5ncy5kZXNjcmlwdGlvblR5cGVGb250RmFtaWx5XG4gICAgICA/IGl0ZW1zU3RhdGUuc2V0dGluZ3MuZGVzY3JpcHRpb25UeXBlRm9udEZhbWlseVxuICAgICAgOiBpdGVtc1N0YXRlLnNldHRpbmdzLmRlc2NyaXB0aW9uRm9udFxuICAgICAgPyBpdGVtc1N0YXRlLnNldHRpbmdzLmRlc2NyaXB0aW9uRm9udFxuICAgICAgOiBcImluaGVyaXRcIn07XG5cbiAgICBmb250LXdlaWdodDogJHtpdGVtc1N0YXRlLnNldHRpbmdzLmRlc2NyaXB0aW9uVHlwZUZvbnRXZWlnaHRcbiAgICAgID8gaXRlbXNTdGF0ZS5zZXR0aW5ncy5kZXNjcmlwdGlvblR5cGVGb250V2VpZ2h0XG4gICAgICA6IGl0ZW1zU3RhdGUuc2V0dGluZ3MuZGVzY3JpcHRpb25Gb250V2VpZ2h0XG4gICAgICA/IGl0ZW1zU3RhdGUuc2V0dGluZ3MuZGVzY3JpcHRpb25Gb250V2VpZ2h0XG4gICAgICA6IFwiaW5pdGlhbFwifTtcblxuICAgIGZvbnQtc2l6ZTogJHtpdGVtc1N0YXRlLnNldHRpbmdzLmRlc2NyaXB0aW9uVHlwZUZvbnRTaXplXG4gICAgICA/IGl0ZW1zU3RhdGUuc2V0dGluZ3MuZGVzY3JpcHRpb25UeXBlRm9udFNpemVcbiAgICAgIDogXCJpbml0aWFsXCJ9O1xuXG4gICAgZm9udC1zdHlsZTogJHtpdGVtc1N0YXRlLnNldHRpbmdzLmRlc2NyaXB0aW9uVHlwZUZvbnRTdHlsZVxuICAgICAgPyBpdGVtc1N0YXRlLnNldHRpbmdzLmRlc2NyaXB0aW9uVHlwZUZvbnRTdHlsZVxuICAgICAgOiBcImluaXRpYWxcIn07XG5cbiAgICBsZXR0ZXItc3BhY2luZzogJHtpdGVtc1N0YXRlLnNldHRpbmdzLmRlc2NyaXB0aW9uVHlwZUxldHRlclNwYWNpbmdcbiAgICAgID8gaXRlbXNTdGF0ZS5zZXR0aW5ncy5kZXNjcmlwdGlvblR5cGVMZXR0ZXJTcGFjaW5nXG4gICAgICA6IFwiaW5pdGlhbFwifTtcbiAgICBsaW5lLWhlaWdodDogJHtpdGVtc1N0YXRlLnNldHRpbmdzLmRlc2NyaXB0aW9uVHlwZUxpbmVIZWlnaHRcbiAgICAgID8gaXRlbXNTdGF0ZS5zZXR0aW5ncy5kZXNjcmlwdGlvblR5cGVMaW5lSGVpZ2h0XG4gICAgICA6IFwiaW5pdGlhbFwifTtcbiAgICB0ZXh0LWRlY29yYXRpb246ICR7aXRlbXNTdGF0ZS5zZXR0aW5ncy5kZXNjcmlwdGlvblR5cGVUZXh0RGVjb3JhdGlvblxuICAgICAgPyBpdGVtc1N0YXRlLnNldHRpbmdzLmRlc2NyaXB0aW9uVHlwZVRleHREZWNvcmF0aW9uXG4gICAgICA6IFwiaW5pdGlhbFwifTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogJHtpdGVtc1N0YXRlLnNldHRpbmdzLmRlc2NyaXB0aW9uVHlwZVRleHRUcmFuc2Zvcm1cbiAgICAgID8gaXRlbXNTdGF0ZS5zZXR0aW5ncy5kZXNjcmlwdGlvblR5cGVUZXh0VHJhbnNmb3JtXG4gICAgICA6IFwiaW5pdGlhbFwifTtcblxuICAgIG1hcmdpbi1ib3R0b206ICR7aXRlbXNTdGF0ZS5zZXR0aW5ncy5pc1NpbmdsZUNvbXBvbmVudCA/IFwiMHB4XCIgOiBcIjIwcHhcIn07XG5cbiAgICBwOmZpcnN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gIGBcblxuICBmdW5jdGlvbiBtYXliZVRydW5jYXRlRGVzY3JpcHRpb24oKSB7XG4gICAgaWYgKCFpdGVtc1N0YXRlLnNldHRpbmdzLmRlc2NyaXB0aW9uTGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcHJvZHVjdFN0YXRlLnBheWxvYWQuZGVzY3JpcHRpb25IdG1sXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHByb2R1Y3RTdGF0ZS5wYXlsb2FkLmRlc2NyaXB0aW9uSHRtbC5zdWJzdHJpbmcoXG4gICAgICAgICAgMCxcbiAgICAgICAgICBpdGVtc1N0YXRlLnNldHRpbmdzLmRlc2NyaXB0aW9uTGVuZ3RoXG4gICAgICAgICkgKyBcIiAuLi5cIlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1c2VQb3J0YWwoXG4gICAgPGRpdlxuICAgICAgY3NzPXtQcm9kdWN0RGVzY3JpcHRpb25DU1N9XG4gICAgICBjbGFzc05hbWU9XCJ3cHMtY29tcG9uZW50LXByb2R1Y3RzLWRlc2NyaXB0aW9uXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJQcm9kdWN0IERlc2NyaXB0aW9uXCJcbiAgICAgIGl0ZW1Qcm9wPVwiZGVzY3JpcHRpb25cIlxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtYXliZVRydW5jYXRlRGVzY3JpcHRpb24oKSB9fVxuICAgIC8+LFxuICAgIGZpbmRQb3J0YWxFbGVtZW50KGl0ZW1zU3RhdGUuc2V0dGluZ3MuZHJvcHpvbmVQcm9kdWN0RGVzY3JpcHRpb24pXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3AuZWxlbWVudC5tZW1vKFByb2R1Y3REZXNjcmlwdGlvbilcbiJdfQ== */"));

  function maybeTruncateDescription() {
    if (!itemsState.settings.descriptionLength) {
      return productState.payload.descriptionHtml;
    } else {
      return productState.payload.descriptionHtml.substring(0, itemsState.settings.descriptionLength) + " ...";
    }
  }

  return (0,Hooks__WEBPACK_IMPORTED_MODULE_0__.usePortal)((0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    css: ProductDescriptionCSS,
    className: "wps-component-products-description",
    "aria-label": "Product Description",
    itemProp: "description",
    dangerouslySetInnerHTML: {
      __html: maybeTruncateDescription()
    }
  }), (0,Utils__WEBPACK_IMPORTED_MODULE_1__.findPortalElement)(itemsState.settings.dropzoneProductDescription));
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_provided_wp_dot_element.memo(ProductDescription));

/***/ }),

/***/ "./src/components/products/product/template/index.jsx":
/*!************************************************************!*\
  !*** ./src/components/products/product/template/index.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jsx-parser */ "./node_modules/react-jsx-parser/dist/umd/react-jsx-parser.min.js");
/* harmony import */ var react_jsx_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buy_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buy-button */ "./src/components/products/product/buy-button/index.jsx");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../title */ "./src/components/products/product/title/index.jsx");
/* harmony import */ var _pricing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pricing */ "./src/components/products/product/pricing/index.jsx");
/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../description */ "./src/components/products/product/description/index.jsx");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images */ "./src/components/products/product/images/index.jsx");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-error-boundary */ "./node_modules/react-error-boundary/dist/react-error-boundary.umd.js");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _error_fallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../error-fallback */ "./src/components/error-fallback/index.jsx");
/* harmony import */ var _items_state_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../items/_state/hooks */ "./src/components/items/_state/hooks.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");











function ProductCustomTemplate(_ref) {
  var payload = _ref.payload,
      customHtmlData = _ref.customHtmlData;
  var itemsState = (0,_items_state_hooks__WEBPACK_IMPORTED_MODULE_7__.useItemsState)();
  return itemsState.notice.length ? /*#__PURE__*/React.createElement(_error_fallback__WEBPACK_IMPORTED_MODULE_6__["default"], {
    error: itemsState.notice
  }) : /*#__PURE__*/React.createElement(react_error_boundary__WEBPACK_IMPORTED_MODULE_8__.ErrorBoundary, {
    FallbackComponent: _error_fallback__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, /*#__PURE__*/React.createElement((react_jsx_parser__WEBPACK_IMPORTED_MODULE_0___default()), {
    components: {
      ProductBuyButton: _buy_button__WEBPACK_IMPORTED_MODULE_1__["default"],
      ProductTitle: _title__WEBPACK_IMPORTED_MODULE_2__["default"],
      ProductPricing: _pricing__WEBPACK_IMPORTED_MODULE_3__["default"],
      ProductDescription: _description__WEBPACK_IMPORTED_MODULE_4__["default"],
      ProductImages: _images__WEBPACK_IMPORTED_MODULE_5__["default"]
    },
    bindings: {
      payload: payload
    },
    renderInWrapper: false,
    showWarnings: true,
    jsx: customHtmlData ? customHtmlData : itemsState.htmlTemplateData,
    blacklistedTags: ["script"]
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_provided_wp_dot_element.memo(ProductCustomTemplate));

/***/ })

}]);
//# sourceMappingURL=ProductCustomTemplate-public.shopwp-components.js.map