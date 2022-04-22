"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["CartLineItemQuantity-public"],{

/***/ "./src/components/cart/lineitem/quantity/index.jsx":
/*!*********************************************************!*\
  !*** ./src/components/cart/lineitem/quantity/index.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./src/components/cart/api.jsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_state/hooks */ "./src/components/cart/_state/hooks.js");
/* harmony import */ var _shop_state_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shop/_state/hooks */ "./src/components/shop/_state/hooks.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/** @jsx jsx */





var Quantity = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | Quantity-public */ "Quantity-public").then(__webpack_require__.bind(__webpack_require__, /*! ../../../quantity */ "./src/components/quantity/index.jsx"));
});

function CartLineItemQuantity(_ref) {
  var lineItem = _ref.lineItem,
      setNotice = _ref.setNotice;
  var cartState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useCartState)();
  var shopState = (0,_shop_state_hooks__WEBPACK_IMPORTED_MODULE_2__.useShopState)();
  var shopDispatch = (0,_shop_state_hooks__WEBPACK_IMPORTED_MODULE_2__.useShopDispatch)();
  var cartDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useCartDispatch)();
  var quantityAvailable = lineItem.merchandise.quantityAvailable;
  var maxQuantity = cartState.settings.lineitemsMaxQuantity ? cartState.settings.lineitemsMaxQuantity : quantityAvailable ? quantityAvailable : false;
  var minQuantity = cartState.settings.lineitemsMinQuantity;
  var customStep = cartState.settings.lineitemsQuantityStep;

  function onChange(newQuantity) {
    if (lineItem.quantity === newQuantity) {
      return;
    }

    (0,_api__WEBPACK_IMPORTED_MODULE_0__.updateLines)(shopState, cartDispatch, shopDispatch, lineItem, newQuantity);
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(Quantity, {
    dispatch: cartDispatch,
    quantityStep: customStep,
    maxQuantity: maxQuantity,
    minQuantity: minQuantity,
    initialQuantity: lineItem.quantity,
    lineItem: lineItem,
    onChange: onChange,
    isUpdating: shopState.isCartUpdating,
    setNotice: setNotice
  });
}

/* harmony default export */ __webpack_exports__["default"] = (CartLineItemQuantity);

/***/ })

}]);
//# sourceMappingURL=CartLineItemQuantity-public.shopwp-components.js.map