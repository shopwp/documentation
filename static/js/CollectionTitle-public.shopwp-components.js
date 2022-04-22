"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["CollectionTitle-public"],{

/***/ "./src/components/collections/collection/_state/hooks.js":
/*!***************************************************************!*\
  !*** ./src/components/collections/collection/_state/hooks.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCollectionDispatch": function() { return /* binding */ useCollectionDispatch; },
/* harmony export */   "useCollectionState": function() { return /* binding */ useCollectionState; }
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/components/collections/collection/_state/context.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");


function useCollectionState() {
  var context = __webpack_provided_wp_dot_element.useContext(_context__WEBPACK_IMPORTED_MODULE_0__.CollectionStateContext);

  if (!context) {
    throw new Error("useCollectionState must be used within the CollectionProvider");
  }

  return context;
}

function useCollectionDispatch() {
  var context = __webpack_provided_wp_dot_element.useContext(_context__WEBPACK_IMPORTED_MODULE_0__.CollectionDispatchContext);

  if (!context) {
    throw new Error("useCollectionDispatch must be used within the CollectionProvider");
  }

  return context;
}



/***/ }),

/***/ "./src/components/collections/collection/title/index.jsx":
/*!***************************************************************!*\
  !*** ./src/components/collections/collection/title/index.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _items_state_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../items/_state/hooks */ "./src/components/items/_state/hooks.jsx");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var Common_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Common/settings */ "./src/common/settings/index.js");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/collections/collection/_state/hooks.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var shopwp = __webpack_require__(/*! ./shopwp-defaults.js */ "./shopwp-defaults.js")["default"];
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */







var Link = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | Link-public */ "Link-public").then(__webpack_require__.bind(__webpack_require__, /*! ../../../link */ "./src/components/link/index.jsx"));
});

var _ref =  false ? 0 : {
  name: "1qmxt59-CollectionTitleCSS",
  styles: "margin-top:0;label:CollectionTitleCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jb2xsZWN0aW9ucy9jb2xsZWN0aW9uL3RpdGxlL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmdDIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jb2xsZWN0aW9ucy9jb2xsZWN0aW9uL3RpdGxlL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuXG5pbXBvcnQgeyB1c2VJdGVtc1N0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL2l0ZW1zL19zdGF0ZS9ob29rc1wiXG5pbXBvcnQgeyB1c2VQb3J0YWwgfSBmcm9tIFwiSG9va3NcIlxuaW1wb3J0IHsgZmluZFBvcnRhbEVsZW1lbnQgfSBmcm9tIFwiVXRpbHNcIlxuaW1wb3J0IHsgaGFzTGluayB9IGZyb20gXCJDb21tb24vc2V0dGluZ3NcIlxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvblN0YXRlIH0gZnJvbSBcIi4uL19zdGF0ZS9ob29rc1wiXG5cbmNvbnN0IExpbmsgPSB3cC5lbGVtZW50LmxhenkoKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdMaW5rLXB1YmxpYycgKi8gXCIuLi8uLi8uLi9saW5rXCIpXG4pXG5cbmZ1bmN0aW9uIFRpdGxlQ29udGVudCh7IHRpdGxlIH0pIHtcbiAgY29uc3QgQ3VzdG9tSGVhZGluZyA9IGBoJHtzaG9wd3AubWlzYy5pc1Npbmd1bGFyQ29sbGVjdGlvbnMgPyBcIjFcIiA6IFwiMlwifWBcblxuICBjb25zdCBDb2xsZWN0aW9uVGl0bGVDU1MgPSBjc3NgXG4gICAgbWFyZ2luLXRvcDogMDtcbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPEN1c3RvbUhlYWRpbmdcbiAgICAgIGl0ZW1Qcm9wPVwibmFtZVwiXG4gICAgICBjbGFzc05hbWU9XCJ3cHMtY29sbGVjdGlvbi10aXRsZVwiXG4gICAgICBjc3M9e0NvbGxlY3Rpb25UaXRsZUNTU31cbiAgICA+XG4gICAgICB7dGl0bGV9XG4gICAgPC9DdXN0b21IZWFkaW5nPlxuICApXG59XG5mdW5jdGlvbiBDb2xsZWN0aW9uVGl0bGUoKSB7XG4gIGNvbnN0IGl0ZW1zU3RhdGUgPSB1c2VJdGVtc1N0YXRlKClcbiAgY29uc3QgY29sbGVjdGlvblN0YXRlID0gdXNlQ29sbGVjdGlvblN0YXRlKClcblxuICByZXR1cm4gdXNlUG9ydGFsKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cIndwcy1jb21wb25lbnQgd3BzLWNvbXBvbmVudC1jb2xsZWN0aW9uLXRpdGxlXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJDb2xsZWN0aW9uIFRpdGxlXCJcbiAgICA+XG4gICAgICB7aGFzTGluayhpdGVtc1N0YXRlLnNldHRpbmdzKSAmJiAhaXRlbXNTdGF0ZS5zZXR0aW5ncy5pc1Npbmd1bGFyID8gKFxuICAgICAgICA8TGlua1xuICAgICAgICAgIHR5cGU9XCJjb2xsZWN0aW9uc1wiXG4gICAgICAgICAgcGF5bG9hZD17Y29sbGVjdGlvblN0YXRlLnBheWxvYWR9XG4gICAgICAgICAgbGlua1RvPXtpdGVtc1N0YXRlLnNldHRpbmdzLmxpbmtUb31cbiAgICAgICAgICB0YXJnZXQ9e2l0ZW1zU3RhdGUuc2V0dGluZ3MubGlua1RhcmdldH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUaXRsZUNvbnRlbnQgdGl0bGU9e2NvbGxlY3Rpb25TdGF0ZS5wYXlsb2FkLnRpdGxlfSAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICApIDogKFxuICAgICAgICA8VGl0bGVDb250ZW50IHRpdGxlPXtjb2xsZWN0aW9uU3RhdGUucGF5bG9hZC50aXRsZX0gLz5cbiAgICAgICl9XG4gICAgPC9kaXY+LFxuICAgIGZpbmRQb3J0YWxFbGVtZW50KGl0ZW1zU3RhdGUuc2V0dGluZ3MuZHJvcHpvbmVDb2xsZWN0aW9uVGl0bGUpXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvblRpdGxlXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function TitleContent(_ref2) {
  var title = _ref2.title;
  var CustomHeading = "h".concat(shopwp.misc.isSingularCollections ? "1" : "2");
  var CollectionTitleCSS = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(CustomHeading, {
    itemProp: "name",
    className: "wps-collection-title",
    css: CollectionTitleCSS
  }, title);
}

function CollectionTitle() {
  var itemsState = (0,_items_state_hooks__WEBPACK_IMPORTED_MODULE_0__.useItemsState)();
  var collectionState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useCollectionState)();
  return (0,Hooks__WEBPACK_IMPORTED_MODULE_1__.usePortal)((0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "wps-component wps-component-collection-title",
    "aria-label": "Collection Title"
  }, (0,Common_settings__WEBPACK_IMPORTED_MODULE_3__.hasLink)(itemsState.settings) && !itemsState.settings.isSingular ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(Link, {
    type: "collections",
    payload: collectionState.payload,
    linkTo: itemsState.settings.linkTo,
    target: itemsState.settings.linkTarget
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(TitleContent, {
    title: collectionState.payload.title
  })) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(TitleContent, {
    title: collectionState.payload.title
  })), (0,Utils__WEBPACK_IMPORTED_MODULE_2__.findPortalElement)(itemsState.settings.dropzoneCollectionTitle));
}

/* harmony default export */ __webpack_exports__["default"] = (CollectionTitle);

/***/ })

}]);
//# sourceMappingURL=CollectionTitle-public.shopwp-components.js.map