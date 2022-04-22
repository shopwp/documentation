"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["CartFooterSubtotal-public"],{

/***/ "./src/components/cart/footer/subtotal/index.jsx":
/*!*******************************************************!*\
  !*** ./src/components/cart/footer/subtotal/index.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Common_pricing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Common/pricing */ "./src/common/pricing/index.jsx");
/* harmony import */ var Common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/css */ "./src/common/css/index.jsx");
/* harmony import */ var _savings_inline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../savings-inline */ "./src/components/savings-inline/index.jsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_state/hooks */ "./src/components/cart/_state/hooks.js");
/* harmony import */ var _shop_state_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shop/_state/hooks */ "./src/components/shop/_state/hooks.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */








var _ref =  false ? 0 : {
  name: "5upo9i-SubtotalLabelCSS",
  styles: "font-size:20px;top:-4px;label:SubtotalLabelCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jYXJ0L2Zvb3Rlci9zdWJ0b3RhbC9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkI4QiIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvY2FydC9mb290ZXIvc3VidG90YWwvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgUHJpY2UgZnJvbSBcIkNvbW1vbi9wcmljaW5nXCJcbmltcG9ydCB7IG1xIH0gZnJvbSBcIkNvbW1vbi9jc3NcIlxuaW1wb3J0IFNhdmluZ3NJbmxpbmUgZnJvbSBcIi4uLy4uLy4uL3NhdmluZ3MtaW5saW5lXCJcbmltcG9ydCB7IHVzZUNhcnRTdGF0ZSB9IGZyb20gXCIuLi8uLi9fc3RhdGUvaG9va3NcIlxuaW1wb3J0IHsgdXNlU2hvcFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL3Nob3AvX3N0YXRlL2hvb2tzXCJcblxuZnVuY3Rpb24gQ2FydEZvb3RlclN1YnRvdGFsKCkge1xuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VDYXJ0U3RhdGUoKVxuICBjb25zdCBzaG9wU3RhdGUgPSB1c2VTaG9wU3RhdGUoKVxuXG4gIGNvbnN0IENhcnRGb290ZXJTdWJ0b3RhbENTUyA9IGNzc2BcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICMxMjEyMTI7XG5cbiAgICAke21xKFwic21hbGxcIil9IHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB9XG4gIGBcbiAgY29uc3QgZm9vdGVyUm93Q1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDA7XG4gIGBcblxuICBjb25zdCBTdWJ0b3RhbExhYmVsQ1NTID0gY3NzYFxuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0b3A6IC00cHg7XG4gIGBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY3NzPXtmb290ZXJSb3dDU1N9IGNsYXNzTmFtZT1cIndwcy1zdWJ0b3RhbC1yb3dcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIndwcy10b3RhbC1wcmVmaXhcIiBjc3M9e1N1YnRvdGFsTGFiZWxDU1N9PlxuICAgICAgICB7Y2FydFN0YXRlLnNldHRpbmdzLnN1YnRvdGFsTGFiZWxUZXh0fVxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwid3BzLXRvdGFsLWFtb3VudFwiIGNzcz17Q2FydEZvb3RlclN1YnRvdGFsQ1NTfT5cbiAgICAgICAge2NhcnRTdGF0ZS5wZXJjZW50YWdlT2ZmICYmIGNhcnRTdGF0ZS5kaXNjb3VudENvZGUgJiYgKFxuICAgICAgICAgIDxTYXZpbmdzSW5saW5lIGFtb3VudD17Y2FydFN0YXRlLnBlcmNlbnRhZ2VPZmZ9IHR5cGU9XCJwZXJjZW50YWdlXCIgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2NhcnRTdGF0ZS5hbW91bnRPZmYgJiYgY2FydFN0YXRlLmRpc2NvdW50Q29kZSAmJiAoXG4gICAgICAgICAgPFNhdmluZ3NJbmxpbmUgYW1vdW50PXtjYXJ0U3RhdGUuYW1vdW50T2ZmfSB0eXBlPVwiZml4ZWRcIiAvPlxuICAgICAgICApfVxuICAgICAgICB7c2hvcFN0YXRlLmNhcnREYXRhICYmIHNob3BTdGF0ZS5jYXJ0RGF0YT8uZXN0aW1hdGVkQ29zdCA/IChcbiAgICAgICAgICA8UHJpY2VcbiAgICAgICAgICAgIHByaWNlPXtcbiAgICAgICAgICAgICAgY2FydFN0YXRlLmRpc2NvdW50Q29kZVxuICAgICAgICAgICAgICAgID8gc2hvcFN0YXRlLmNhcnREYXRhLmVzdGltYXRlZENvc3QudG90YWxBbW91bnQuYW1vdW50XG4gICAgICAgICAgICAgICAgOiBzaG9wU3RhdGUuY2FydERhdGEuZXN0aW1hdGVkQ29zdC5zdWJ0b3RhbEFtb3VudC5hbW91bnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0Rm9vdGVyU3VidG90YWxcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 =  false ? 0 : {
  name: "d75lvl-footerRowCSS",
  styles: "display:flex;align-items:flex-end;justify-content:space-between;margin:0;label:footerRowCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jYXJ0L2Zvb3Rlci9zdWJ0b3RhbC9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0IwQiIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvY2FydC9mb290ZXIvc3VidG90YWwvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgUHJpY2UgZnJvbSBcIkNvbW1vbi9wcmljaW5nXCJcbmltcG9ydCB7IG1xIH0gZnJvbSBcIkNvbW1vbi9jc3NcIlxuaW1wb3J0IFNhdmluZ3NJbmxpbmUgZnJvbSBcIi4uLy4uLy4uL3NhdmluZ3MtaW5saW5lXCJcbmltcG9ydCB7IHVzZUNhcnRTdGF0ZSB9IGZyb20gXCIuLi8uLi9fc3RhdGUvaG9va3NcIlxuaW1wb3J0IHsgdXNlU2hvcFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL3Nob3AvX3N0YXRlL2hvb2tzXCJcblxuZnVuY3Rpb24gQ2FydEZvb3RlclN1YnRvdGFsKCkge1xuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VDYXJ0U3RhdGUoKVxuICBjb25zdCBzaG9wU3RhdGUgPSB1c2VTaG9wU3RhdGUoKVxuXG4gIGNvbnN0IENhcnRGb290ZXJTdWJ0b3RhbENTUyA9IGNzc2BcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICMxMjEyMTI7XG5cbiAgICAke21xKFwic21hbGxcIil9IHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB9XG4gIGBcbiAgY29uc3QgZm9vdGVyUm93Q1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDA7XG4gIGBcblxuICBjb25zdCBTdWJ0b3RhbExhYmVsQ1NTID0gY3NzYFxuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0b3A6IC00cHg7XG4gIGBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY3NzPXtmb290ZXJSb3dDU1N9IGNsYXNzTmFtZT1cIndwcy1zdWJ0b3RhbC1yb3dcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIndwcy10b3RhbC1wcmVmaXhcIiBjc3M9e1N1YnRvdGFsTGFiZWxDU1N9PlxuICAgICAgICB7Y2FydFN0YXRlLnNldHRpbmdzLnN1YnRvdGFsTGFiZWxUZXh0fVxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwid3BzLXRvdGFsLWFtb3VudFwiIGNzcz17Q2FydEZvb3RlclN1YnRvdGFsQ1NTfT5cbiAgICAgICAge2NhcnRTdGF0ZS5wZXJjZW50YWdlT2ZmICYmIGNhcnRTdGF0ZS5kaXNjb3VudENvZGUgJiYgKFxuICAgICAgICAgIDxTYXZpbmdzSW5saW5lIGFtb3VudD17Y2FydFN0YXRlLnBlcmNlbnRhZ2VPZmZ9IHR5cGU9XCJwZXJjZW50YWdlXCIgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2NhcnRTdGF0ZS5hbW91bnRPZmYgJiYgY2FydFN0YXRlLmRpc2NvdW50Q29kZSAmJiAoXG4gICAgICAgICAgPFNhdmluZ3NJbmxpbmUgYW1vdW50PXtjYXJ0U3RhdGUuYW1vdW50T2ZmfSB0eXBlPVwiZml4ZWRcIiAvPlxuICAgICAgICApfVxuICAgICAgICB7c2hvcFN0YXRlLmNhcnREYXRhICYmIHNob3BTdGF0ZS5jYXJ0RGF0YT8uZXN0aW1hdGVkQ29zdCA/IChcbiAgICAgICAgICA8UHJpY2VcbiAgICAgICAgICAgIHByaWNlPXtcbiAgICAgICAgICAgICAgY2FydFN0YXRlLmRpc2NvdW50Q29kZVxuICAgICAgICAgICAgICAgID8gc2hvcFN0YXRlLmNhcnREYXRhLmVzdGltYXRlZENvc3QudG90YWxBbW91bnQuYW1vdW50XG4gICAgICAgICAgICAgICAgOiBzaG9wU3RhdGUuY2FydERhdGEuZXN0aW1hdGVkQ29zdC5zdWJ0b3RhbEFtb3VudC5hbW91bnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0Rm9vdGVyU3VidG90YWxcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function CartFooterSubtotal() {
  var _shopState$cartData;

  var cartState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_3__.useCartState)();
  var shopState = (0,_shop_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useShopState)();
  var CartFooterSubtotalCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.css)("font-weight:bold;text-align:right;font-size:24px;color:#121212;", (0,Common_css__WEBPACK_IMPORTED_MODULE_1__.mq)("small"), "{font-size:28px;};label:CartFooterSubtotalCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jYXJ0L2Zvb3Rlci9zdWJ0b3RhbC9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWW1DIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jYXJ0L2Zvb3Rlci9zdWJ0b3RhbC9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCBQcmljZSBmcm9tIFwiQ29tbW9uL3ByaWNpbmdcIlxuaW1wb3J0IHsgbXEgfSBmcm9tIFwiQ29tbW9uL2Nzc1wiXG5pbXBvcnQgU2F2aW5nc0lubGluZSBmcm9tIFwiLi4vLi4vLi4vc2F2aW5ncy1pbmxpbmVcIlxuaW1wb3J0IHsgdXNlQ2FydFN0YXRlIH0gZnJvbSBcIi4uLy4uL19zdGF0ZS9ob29rc1wiXG5pbXBvcnQgeyB1c2VTaG9wU3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vc2hvcC9fc3RhdGUvaG9va3NcIlxuXG5mdW5jdGlvbiBDYXJ0Rm9vdGVyU3VidG90YWwoKSB7XG4gIGNvbnN0IGNhcnRTdGF0ZSA9IHVzZUNhcnRTdGF0ZSgpXG4gIGNvbnN0IHNob3BTdGF0ZSA9IHVzZVNob3BTdGF0ZSgpXG5cbiAgY29uc3QgQ2FydEZvb3RlclN1YnRvdGFsQ1NTID0gY3NzYFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzEyMTIxMjtcblxuICAgICR7bXEoXCJzbWFsbFwiKX0ge1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbiAgYFxuICBjb25zdCBmb290ZXJSb3dDU1MgPSBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMDtcbiAgYFxuXG4gIGNvbnN0IFN1YnRvdGFsTGFiZWxDU1MgPSBjc3NgXG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRvcDogLTRweDtcbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e2Zvb3RlclJvd0NTU30gY2xhc3NOYW1lPVwid3BzLXN1YnRvdGFsLXJvd1wiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwid3BzLXRvdGFsLXByZWZpeFwiIGNzcz17U3VidG90YWxMYWJlbENTU30+XG4gICAgICAgIHtjYXJ0U3RhdGUuc2V0dGluZ3Muc3VidG90YWxMYWJlbFRleHR9XG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ3cHMtdG90YWwtYW1vdW50XCIgY3NzPXtDYXJ0Rm9vdGVyU3VidG90YWxDU1N9PlxuICAgICAgICB7Y2FydFN0YXRlLnBlcmNlbnRhZ2VPZmYgJiYgY2FydFN0YXRlLmRpc2NvdW50Q29kZSAmJiAoXG4gICAgICAgICAgPFNhdmluZ3NJbmxpbmUgYW1vdW50PXtjYXJ0U3RhdGUucGVyY2VudGFnZU9mZn0gdHlwZT1cInBlcmNlbnRhZ2VcIiAvPlxuICAgICAgICApfVxuICAgICAgICB7Y2FydFN0YXRlLmFtb3VudE9mZiAmJiBjYXJ0U3RhdGUuZGlzY291bnRDb2RlICYmIChcbiAgICAgICAgICA8U2F2aW5nc0lubGluZSBhbW91bnQ9e2NhcnRTdGF0ZS5hbW91bnRPZmZ9IHR5cGU9XCJmaXhlZFwiIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzaG9wU3RhdGUuY2FydERhdGEgJiYgc2hvcFN0YXRlLmNhcnREYXRhPy5lc3RpbWF0ZWRDb3N0ID8gKFxuICAgICAgICAgIDxQcmljZVxuICAgICAgICAgICAgcHJpY2U9e1xuICAgICAgICAgICAgICBjYXJ0U3RhdGUuZGlzY291bnRDb2RlXG4gICAgICAgICAgICAgICAgPyBzaG9wU3RhdGUuY2FydERhdGEuZXN0aW1hdGVkQ29zdC50b3RhbEFtb3VudC5hbW91bnRcbiAgICAgICAgICAgICAgICA6IHNob3BTdGF0ZS5jYXJ0RGF0YS5lc3RpbWF0ZWRDb3N0LnN1YnRvdGFsQW1vdW50LmFtb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRGb290ZXJTdWJ0b3RhbFxuIl19 */"));
  var footerRowCSS = _ref2;
  var SubtotalLabelCSS = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    css: footerRowCSS,
    className: "wps-subtotal-row"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
    className: "wps-total-prefix",
    css: SubtotalLabelCSS
  }, cartState.settings.subtotalLabelText), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
    className: "wps-total-amount",
    css: CartFooterSubtotalCSS
  }, cartState.percentageOff && cartState.discountCode && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_savings_inline__WEBPACK_IMPORTED_MODULE_2__["default"], {
    amount: cartState.percentageOff,
    type: "percentage"
  }), cartState.amountOff && cartState.discountCode && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_savings_inline__WEBPACK_IMPORTED_MODULE_2__["default"], {
    amount: cartState.amountOff,
    type: "fixed"
  }), shopState.cartData && (_shopState$cartData = shopState.cartData) !== null && _shopState$cartData !== void 0 && _shopState$cartData.estimatedCost ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(Common_pricing__WEBPACK_IMPORTED_MODULE_0__["default"], {
    price: cartState.discountCode ? shopState.cartData.estimatedCost.totalAmount.amount : shopState.cartData.estimatedCost.subtotalAmount.amount
  }) : null));
}

/* harmony default export */ __webpack_exports__["default"] = (CartFooterSubtotal);

/***/ }),

/***/ "./src/components/savings-inline/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/savings-inline/index.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Common_pricing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Common/pricing */ "./src/common/pricing/index.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_i18n = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */




var _ref =  false ? 0 : {
  name: "ibunhu-SavingsInlineCSS",
  styles: "font-size:15px;font-weight:normal;margin-right:6px;label:SavingsInlineCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zYXZpbmdzLWlubGluZS9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSzhCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zYXZpbmdzLWlubGluZS9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCBQcmljZSBmcm9tIFwiQ29tbW9uL3ByaWNpbmdcIlxuXG5mdW5jdGlvbiBTYXZpbmdzSW5saW5lKHsgYW1vdW50LCB0eXBlIH0pIHtcbiAgY29uc3QgU2F2aW5nc0lubGluZUNTUyA9IGNzc2BcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgYFxuXG4gIHJldHVybiB0eXBlID09PSBcImZpeGVkXCIgPyAoXG4gICAgPHNwYW4gY3NzPXtTYXZpbmdzSW5saW5lQ1NTfT5cbiAgICAgICg8UHJpY2UgcHJpY2U9e2Ftb3VudH0gLz4ge3dwLmkxOG4uX18oXCJvZmZcIiwgXCJzaG9wd3BcIil9KVxuICAgIDwvc3Bhbj5cbiAgKSA6IChcbiAgICA8c3BhbiBjc3M9e1NhdmluZ3NJbmxpbmVDU1N9PlxuICAgICAgKHthbW91bnR9JSB7d3AuaTE4bi5fXyhcIm9mZlwiLCBcInNob3B3cFwiKX0pXG4gICAgPC9zcGFuPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmluZ3NJbmxpbmVcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function SavingsInline(_ref2) {
  var amount = _ref2.amount,
      type = _ref2.type;
  var SavingsInlineCSS = _ref;
  return type === "fixed" ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
    css: SavingsInlineCSS
  }, "(", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(Common_pricing__WEBPACK_IMPORTED_MODULE_0__["default"], {
    price: amount
  }), " ", __webpack_provided_wp_dot_i18n.__("off", "shopwp"), ")") : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
    css: SavingsInlineCSS
  }, "(", amount, "% ", __webpack_provided_wp_dot_i18n.__("off", "shopwp"), ")");
}

/* harmony default export */ __webpack_exports__["default"] = (SavingsInline);

/***/ })

}]);
//# sourceMappingURL=CartFooterSubtotal-public.shopwp-components.js.map