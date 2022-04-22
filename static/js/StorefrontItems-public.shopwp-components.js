"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["StorefrontItems-public"],{

/***/ "./src/components/storefront/items/index.jsx":
/*!***************************************************!*\
  !*** ./src/components/storefront/items/index.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* harmony import */ var _products_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../products/product */ "./src/components/products/product/index.jsx");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pagination */ "./src/components/pagination/index.jsx");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */






var Notice = __webpack_provided_wp_dot_element.lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../notice */ "./src/components/notice/index.jsx"));
});

var _ref =  false ? 0 : {
  name: "180vktv-storefrontItemsWrapperCSS",
  styles: "position:relative;label:storefrontItemsWrapperCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zdG9yZWZyb250L2l0ZW1zL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnVDIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zdG9yZWZyb250L2l0ZW1zL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHsgdXNlUG9ydGFsIH0gZnJvbSBcIkhvb2tzXCJcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi8uLi9wcm9kdWN0cy9wcm9kdWN0XCJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi8uLi9wYWdpbmF0aW9uXCJcbmltcG9ydCB7IHJlbW92ZVNrZWxseSB9IGZyb20gXCJVdGlsc1wiXG5cbmNvbnN0IE5vdGljZSA9IHdwLmVsZW1lbnQubGF6eSgoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ05vdGljZS1wdWJsaWMnICovIFwiLi4vLi4vbm90aWNlXCIpXG4pXG5cbmZ1bmN0aW9uIFN0b3JlZnJvbnRJdGVtcyh7IG5vUmVzdWx0c1RleHQsIHNldHRpbmdzLCBwYXlsb2FkLCBpc0xvYWRpbmcgfSkge1xuICBjb25zdCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnRcbiAgY29uc3QgW3JlbW92ZWRTa2VsbHksIHNldFJlbW92ZWRTa2VsbHldID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IG5vdGljZUNTUyA9IGNzc2BcbiAgICAmJiB7XG4gICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICBgXG5cbiAgY29uc3Qgc3RvcmVmcm9udEl0ZW1zV3JhcHBlckNTUyA9IGNzc2BcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwYXlsb2FkICYmICFyZW1vdmVkU2tlbGx5KSB7XG4gICAgICByZW1vdmVTa2VsbHkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG9wd3Atc3RvcmVmcm9udFwiKSlcbiAgICAgIHNldFJlbW92ZWRTa2VsbHkodHJ1ZSlcbiAgICB9XG4gIH0sIFtwYXlsb2FkXSlcblxuICByZXR1cm4gdXNlUG9ydGFsKFxuICAgIDxkaXYgY3NzPXtzdG9yZWZyb250SXRlbXNXcmFwcGVyQ1NTfT5cbiAgICAgIHtwYXlsb2FkLmxlbmd0aCB8fCBpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxQYWdpbmF0aW9uPlxuICAgICAgICAgIDxQcm9kdWN0IC8+XG4gICAgICAgIDwvUGFnaW5hdGlvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxOb3RpY2UgY3NzPXtub3RpY2VDU1N9IHN0YXR1cz1cImluZm9cIj5cbiAgICAgICAgICB7bm9SZXN1bHRzVGV4dH1cbiAgICAgICAgPC9Ob3RpY2U+XG4gICAgICApfVxuICAgIDwvZGl2PixcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLmRyb3B6b25lUGF5bG9hZClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZWZyb250SXRlbXNcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 =  false ? 0 : {
  name: "48urua-noticeCSS",
  styles: "&&{margin-left:40px;margin-top:0;};label:noticeCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zdG9yZWZyb250L2l0ZW1zL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjdUIiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3N0b3JlZnJvbnQvaXRlbXMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgeyB1c2VQb3J0YWwgfSBmcm9tIFwiSG9va3NcIlxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uLy4uL3Byb2R1Y3RzL3Byb2R1Y3RcIlxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4uLy4uL3BhZ2luYXRpb25cIlxuaW1wb3J0IHsgcmVtb3ZlU2tlbGx5IH0gZnJvbSBcIlV0aWxzXCJcblxuY29uc3QgTm90aWNlID0gd3AuZWxlbWVudC5sYXp5KCgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnTm90aWNlLXB1YmxpYycgKi8gXCIuLi8uLi9ub3RpY2VcIilcbilcblxuZnVuY3Rpb24gU3RvcmVmcm9udEl0ZW1zKHsgbm9SZXN1bHRzVGV4dCwgc2V0dGluZ3MsIHBheWxvYWQsIGlzTG9hZGluZyB9KSB7XG4gIGNvbnN0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9ID0gd3AuZWxlbWVudFxuICBjb25zdCBbcmVtb3ZlZFNrZWxseSwgc2V0UmVtb3ZlZFNrZWxseV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgbm90aWNlQ1NTID0gY3NzYFxuICAgICYmIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gIGBcblxuICBjb25zdCBzdG9yZWZyb250SXRlbXNXcmFwcGVyQ1NTID0gY3NzYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBheWxvYWQgJiYgIXJlbW92ZWRTa2VsbHkpIHtcbiAgICAgIHJlbW92ZVNrZWxseShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3B3cC1zdG9yZWZyb250XCIpKVxuICAgICAgc2V0UmVtb3ZlZFNrZWxseSh0cnVlKVxuICAgIH1cbiAgfSwgW3BheWxvYWRdKVxuXG4gIHJldHVybiB1c2VQb3J0YWwoXG4gICAgPGRpdiBjc3M9e3N0b3JlZnJvbnRJdGVtc1dyYXBwZXJDU1N9PlxuICAgICAge3BheWxvYWQubGVuZ3RoIHx8IGlzTG9hZGluZyA/IChcbiAgICAgICAgPFBhZ2luYXRpb24+XG4gICAgICAgICAgPFByb2R1Y3QgLz5cbiAgICAgICAgPC9QYWdpbmF0aW9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPE5vdGljZSBjc3M9e25vdGljZUNTU30gc3RhdHVzPVwiaW5mb1wiPlxuICAgICAgICAgIHtub1Jlc3VsdHNUZXh0fVxuICAgICAgICA8L05vdGljZT5cbiAgICAgICl9XG4gICAgPC9kaXY+LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3MuZHJvcHpvbmVQYXlsb2FkKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlZnJvbnRJdGVtc1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function StorefrontItems(_ref3) {
  var noResultsText = _ref3.noResultsText,
      settings = _ref3.settings,
      payload = _ref3.payload,
      isLoading = _ref3.isLoading;
  var _wp$element = wp.element,
      useEffect = __webpack_provided_wp_dot_element.useEffect,
      useState = __webpack_provided_wp_dot_element.useState;

  var _useState = useState(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      removedSkelly = _useState2[0],
      setRemovedSkelly = _useState2[1];

  var noticeCSS = _ref2;
  var storefrontItemsWrapperCSS = _ref;
  useEffect(function () {
    if (payload && !removedSkelly) {
      (0,Utils__WEBPACK_IMPORTED_MODULE_4__.removeSkelly)(document.getElementById("shopwp-storefront"));
      setRemovedSkelly(true);
    }
  }, [payload]);
  return (0,Hooks__WEBPACK_IMPORTED_MODULE_1__.usePortal)((0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    css: storefrontItemsWrapperCSS
  }, payload.length || isLoading ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_pagination__WEBPACK_IMPORTED_MODULE_3__["default"], null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_products_product__WEBPACK_IMPORTED_MODULE_2__["default"], null)) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(Notice, {
    css: noticeCSS,
    status: "info"
  }, noResultsText)), document.querySelector(settings.dropzonePayload));
}

/* harmony default export */ __webpack_exports__["default"] = (StorefrontItems);

/***/ })

}]);
//# sourceMappingURL=StorefrontItems-public.shopwp-components.js.map