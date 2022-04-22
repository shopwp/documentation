"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["SearchModal-public"],{

/***/ "./src/components/search/form/modal/index.jsx":
/*!****************************************************!*\
  !*** ./src/components/search/form/modal/index.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../products */ "./src/components/products/index.jsx");
/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../notice */ "./src/components/notice/index.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/** @jsx jsx */





function SearchModal(_ref) {
  var searchTerm = _ref.searchTerm,
      payload = _ref.payload,
      settings = _ref.settings;
  var useEffect = __webpack_provided_wp_dot_element.useEffect;
  var bodyEl = document.getElementsByTagName("body")[0];
  useEffect(function () {
    if (searchTerm) {
      bodyEl.classList.add("shopwp-is-searching");
    } else {
      bodyEl.classList.remove("shopwp-is-searching");
    }
  }, [searchTerm]);
  var SearchModalCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)("position:absolute;top:52px;left:0;width:100%;background:white;padding:", searchTerm ? "30px 20px" : "0", ";box-shadow:", searchTerm ? "0 0 21px -13px rgb(0 0 0 / 42%)" : "none", ";border-bottom-left-radius:15px;border-bottom-right-radius:15px;border:", searchTerm ? "1px solid #ddd" : "none", ";border-top:0;max-height:400px;overflow-y:scroll;;label:SearchModalCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zZWFyY2gvZm9ybS9tb2RhbC9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUI0QiIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvc2VhcmNoL2Zvcm0vbW9kYWwvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSBcIi4uLy4uLy4uL3Byb2R1Y3RzXCJcbmltcG9ydCBOb3RpY2UgZnJvbSBcIi4uLy4uLy4uL25vdGljZVwiXG5cbmZ1bmN0aW9uIFNlYXJjaE1vZGFsKHsgc2VhcmNoVGVybSwgcGF5bG9hZCwgc2V0dGluZ3MgfSkge1xuICBjb25zdCB7IHVzZUVmZmVjdCB9ID0gd3AuZWxlbWVudFxuICBsZXQgYm9keUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VhcmNoVGVybSkge1xuICAgICAgYm9keUVsLmNsYXNzTGlzdC5hZGQoXCJzaG9wd3AtaXMtc2VhcmNoaW5nXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJvZHlFbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvcHdwLWlzLXNlYXJjaGluZ1wiKVxuICAgIH1cbiAgfSwgW3NlYXJjaFRlcm1dKVxuXG4gIGNvbnN0IFNlYXJjaE1vZGFsQ1NTID0gY3NzYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUycHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAke3NlYXJjaFRlcm0gPyBcIjMwcHggMjBweFwiIDogXCIwXCJ9O1xuICAgIGJveC1zaGFkb3c6ICR7c2VhcmNoVGVybSA/IFwiMCAwIDIxcHggLTEzcHggcmdiKDAgMCAwIC8gNDIlKVwiIDogXCJub25lXCJ9O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyOiAke3NlYXJjaFRlcm0gPyBcIjFweCBzb2xpZCAjZGRkXCIgOiBcIm5vbmVcIn07XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGBcblxuICByZXR1cm4gc2VhcmNoVGVybSAmJiBwYXlsb2FkID8gKFxuICAgIDxkaXYgY3NzPXtTZWFyY2hNb2RhbENTU30+XG4gICAgICB7cGF5bG9hZC5sZW5ndGggPyAoXG4gICAgICAgIDxQcm9kdWN0cyBwYXlsb2FkPXtwYXlsb2FkfSBzZXR0aW5ncz17c2V0dGluZ3N9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8Tm90aWNlIHN0YXR1cz1cImluZm9cIj57c2V0dGluZ3Mubm9SZXN1bHRzVGV4dH08L05vdGljZT5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICkgOiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaE1vZGFsXG4iXX0= */"));
  return searchTerm && payload ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    css: SearchModalCSS
  }, payload.length ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_products__WEBPACK_IMPORTED_MODULE_0__["default"], {
    payload: payload,
    settings: settings
  }) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_notice__WEBPACK_IMPORTED_MODULE_1__["default"], {
    status: "info"
  }, settings.noResultsText)) : null;
}

/* harmony default export */ __webpack_exports__["default"] = (SearchModal);

/***/ })

}]);
//# sourceMappingURL=SearchModal-public.shopwp-components.js.map