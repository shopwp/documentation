"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["CartLineItemRemove-public"],{

/***/ "./src/components/cart/lineitem/remove/index.jsx":
/*!*******************************************************!*\
  !*** ./src/components/cart/lineitem/remove/index.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _shop_state_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shop/_state/hooks */ "./src/components/shop/_state/hooks.js");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_state/hooks */ "./src/components/cart/_state/hooks.js");
/* harmony import */ var _api_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.jsx */ "./src/components/cart/api.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");
/** @jsx jsx */






function CartLineItemRemove(_ref) {
  var lineItem = _ref.lineItem,
      text = _ref.text;
  var shopState = (0,_shop_state_hooks__WEBPACK_IMPORTED_MODULE_0__.useShopState)();
  var shopDispatch = (0,_shop_state_hooks__WEBPACK_IMPORTED_MODULE_0__.useShopDispatch)();
  var cartState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useCartState)();
  var cartDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useCartDispatch)();

  function onRemove(e) {
    if (shopState.isCartUpdating) {
      return;
    }

    (0,_api_jsx__WEBPACK_IMPORTED_MODULE_2__.removeLines)(lineItem.id, shopState, cartDispatch, shopDispatch);
    __webpack_provided_wp_dot_hooks.doAction("on.lineItemRemove", lineItem, lineItem.merchandise.id);
  }

  var removeStyles = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)("position:absolute;top:-12px;right:0;font-size:12px;text-decoration:underline;padding-right:0;text-align:right;padding:13px 0;&:hover{cursor:", shopState.isCartUpdating ? "not-allowed" : "pointer", ";opacity:", shopState.isCartUpdating ? "1" : "0.7", ";};label:removeStyles;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jYXJ0L2xpbmVpdGVtL3JlbW92ZS9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0IwQiIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvY2FydC9saW5laXRlbS9yZW1vdmUvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgeyB1c2VTaG9wU3RhdGUsIHVzZVNob3BEaXNwYXRjaCB9IGZyb20gXCIuLi8uLi8uLi9zaG9wL19zdGF0ZS9ob29rc1wiXG5pbXBvcnQgeyB1c2VDYXJ0U3RhdGUsIHVzZUNhcnREaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9fc3RhdGUvaG9va3NcIlxuaW1wb3J0IHsgcmVtb3ZlTGluZXMgfSBmcm9tIFwiLi4vLi4vYXBpLmpzeFwiXG5cbmZ1bmN0aW9uIENhcnRMaW5lSXRlbVJlbW92ZSh7IGxpbmVJdGVtLCB0ZXh0IH0pIHtcbiAgY29uc3Qgc2hvcFN0YXRlID0gdXNlU2hvcFN0YXRlKClcbiAgY29uc3Qgc2hvcERpc3BhdGNoID0gdXNlU2hvcERpc3BhdGNoKClcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlQ2FydFN0YXRlKClcbiAgY29uc3QgY2FydERpc3BhdGNoID0gdXNlQ2FydERpc3BhdGNoKClcblxuICBmdW5jdGlvbiBvblJlbW92ZShlKSB7XG4gICAgaWYgKHNob3BTdGF0ZS5pc0NhcnRVcGRhdGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmVtb3ZlTGluZXMobGluZUl0ZW0uaWQsIHNob3BTdGF0ZSwgY2FydERpc3BhdGNoLCBzaG9wRGlzcGF0Y2gpXG5cbiAgICB3cC5ob29rcy5kb0FjdGlvbihcIm9uLmxpbmVJdGVtUmVtb3ZlXCIsIGxpbmVJdGVtLCBsaW5lSXRlbS5tZXJjaGFuZGlzZS5pZClcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZVN0eWxlcyA9IGNzc2BcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTJweDtcbiAgICByaWdodDogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiAxM3B4IDA7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogJHtzaG9wU3RhdGUuaXNDYXJ0VXBkYXRpbmcgPyBcIm5vdC1hbGxvd2VkXCIgOiBcInBvaW50ZXJcIn07XG4gICAgICBvcGFjaXR5OiAke3Nob3BTdGF0ZS5pc0NhcnRVcGRhdGluZyA/IFwiMVwiIDogXCIwLjdcIn07XG4gICAgfVxuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgY2xhc3NOYW1lPVwid3BzLWNhcnQtbGluZWl0ZW0tcmVtb3ZlXCJcbiAgICAgIGNzcz17cmVtb3ZlU3R5bGVzfVxuICAgICAgb25DbGljaz17b25SZW1vdmV9XG4gICAgPlxuICAgICAge3RleHR9XG4gICAgPC9zcGFuPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRMaW5lSXRlbVJlbW92ZVxuIl19 */"));
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
    className: "wps-cart-lineitem-remove",
    css: removeStyles,
    onClick: onRemove
  }, text);
}

/* harmony default export */ __webpack_exports__["default"] = (CartLineItemRemove);

/***/ })

}]);
//# sourceMappingURL=CartLineItemRemove-public.shopwp-components.js.map