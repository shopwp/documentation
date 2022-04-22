"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["CartLineItemTitle-public"],{

/***/ "./src/components/cart/lineitem/title/index.jsx":
/*!******************************************************!*\
  !*** ./src/components/cart/lineitem/title/index.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Common/css */ "./src/common/css/index.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_i18n = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */



var Link = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | Link-public */ "Link-public").then(__webpack_require__.bind(__webpack_require__, /*! ../../../link */ "./src/components/link/index.jsx"));
});

var _ref2 =  false ? 0 : {
  name: "avkj9c-CartLineItemSubscriptionTitleCSS",
  styles: "margin-top:-2px;font-size:13px;font-style:italic;color:#464646;margin-bottom:11px;text-transform:lowercase;max-width:100%;&:first-letter{text-transform:capitalize;};label:CartLineItemSubscriptionTitleCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jYXJ0L2xpbmVpdGVtL3RpdGxlL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTOEMiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2NhcnQvbGluZWl0ZW0vdGl0bGUvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgeyBtcSB9IGZyb20gXCJDb21tb24vY3NzXCJcblxuY29uc3QgTGluayA9IHdwLmVsZW1lbnQubGF6eSgoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ0xpbmstcHVibGljJyAqLyBcIi4uLy4uLy4uL2xpbmtcIilcbilcblxuZnVuY3Rpb24gQ2FydExpbmVJdGVtU3Vic2NyaXB0aW9uVGl0bGUoeyBzdWJzY3JpcHRpb25OYW1lIH0pIHtcbiAgY29uc3QgQ2FydExpbmVJdGVtU3Vic2NyaXB0aW9uVGl0bGVDU1MgPSBjc3NgXG4gICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAjNDY0NjQ2O1xuICAgIG1hcmdpbi1ib3R0b206IDExcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICAmOmZpcnN0LWxldHRlciB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG4gIGBcblxuICByZXR1cm4gKFxuICAgIDxwIGNzcz17Q2FydExpbmVJdGVtU3Vic2NyaXB0aW9uVGl0bGVDU1N9PlxuICAgICAge3dwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgICAgXCJjYXJ0LmxpbmVJdGVtU3Vic2NyaXB0aW9uRGVzY3JpcHRpb25cIixcbiAgICAgICAgd3AuaTE4bi5fXyhcIlN1YnNjcmlwdGlvbjogXCIsIFwic2hvcHdwXCIpICsgc3Vic2NyaXB0aW9uTmFtZVxuICAgICAgKX1cbiAgICA8L3A+XG4gIClcbn1cblxuZnVuY3Rpb24gQ2FydExpbmVJdGVtVGl0bGUoeyBsaW5lSXRlbSwgc2V0dGluZ3MgfSkge1xuICBjb25zdCBtYW51YWxMaW5rID0gd3AuaG9va3MuYXBwbHlGaWx0ZXJzKFxuICAgIFwiY2FydC5saW5lSXRlbXNMaW5rXCIsXG4gICAgbGluZUl0ZW0/LnNob3B3cCA/IGxpbmVJdGVtLnNob3B3cC51cmwgOiBmYWxzZSxcbiAgICBsaW5lSXRlbVxuICApXG5cbiAgY29uc3QgQ2FydExpbmVJdGVtVGl0bGVDU1MgPSBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgbWF4LXdpZHRoOiAyNDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGJsYWNrO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246ICR7bWFudWFsTGluayA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIn07XG4gICAgfVxuXG4gICAgJHttcShcInNtYWxsXCIpfSB7XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgbWFyZ2luLXRvcDogLTNweDtcbiAgICB9XG4gIGBcblxuICBjb25zdCBDYXJ0TGluZUl0ZW1UaXRsZVdyYXBwZXJDU1MgPSBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgcGF5bG9hZD17bGluZUl0ZW0ubWVyY2hhbmRpc2V9XG4gICAgICB0eXBlPVwicHJvZHVjdHNcIlxuICAgICAgY2xhc3NOYW1lcz1cIndwcy1jYXJ0LWxpbmVpdGVtLXRpdGxlLWxpbmtcIlxuICAgICAgdGFyZ2V0PXtzZXR0aW5ncy5saW5laXRlbXNMaW5rVGFyZ2V0fVxuICAgICAgbWFudWFsTGluaz17bWFudWFsTGlua31cbiAgICA+XG4gICAgICA8ZGl2IGNzcz17Q2FydExpbmVJdGVtVGl0bGVXcmFwcGVyQ1NTfT5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3cHMtY2FydC1saW5laXRlbS10aXRsZS1jb250ZW50XCJcbiAgICAgICAgICBjc3M9e0NhcnRMaW5lSXRlbVRpdGxlQ1NTfVxuICAgICAgICA+XG4gICAgICAgICAge3dwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgICAgICAgIFwiY2FydC5saW5lSXRlbVRpdGxlVGV4dFwiLFxuICAgICAgICAgICAgbGluZUl0ZW0ubWVyY2hhbmRpc2UucHJvZHVjdC50aXRsZSxcbiAgICAgICAgICAgIGxpbmVJdGVtXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7bGluZUl0ZW0uc2VsbGluZ1BsYW5BbGxvY2F0aW9uID8gKFxuICAgICAgICAgIDxDYXJ0TGluZUl0ZW1TdWJzY3JpcHRpb25UaXRsZVxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uTmFtZT17bGluZUl0ZW0uc2VsbGluZ1BsYW5BbGxvY2F0aW9uLnNlbGxpbmdQbGFuLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydExpbmVJdGVtVGl0bGVcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function CartLineItemSubscriptionTitle(_ref3) {
  var subscriptionName = _ref3.subscriptionName;
  var CartLineItemSubscriptionTitleCSS = _ref2;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
    css: CartLineItemSubscriptionTitleCSS
  }, __webpack_provided_wp_dot_hooks.applyFilters("cart.lineItemSubscriptionDescription", __webpack_provided_wp_dot_i18n.__("Subscription: ", "shopwp") + subscriptionName));
}

var _ref =  false ? 0 : {
  name: "3rqcxa-CartLineItemTitleWrapperCSS",
  styles: "display:flex;flex-direction:column;label:CartLineItemTitleWrapperCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jYXJ0L2xpbmVpdGVtL3RpdGxlL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRHlDIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jYXJ0L2xpbmVpdGVtL3RpdGxlL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHsgbXEgfSBmcm9tIFwiQ29tbW9uL2Nzc1wiXG5cbmNvbnN0IExpbmsgPSB3cC5lbGVtZW50LmxhenkoKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdMaW5rLXB1YmxpYycgKi8gXCIuLi8uLi8uLi9saW5rXCIpXG4pXG5cbmZ1bmN0aW9uIENhcnRMaW5lSXRlbVN1YnNjcmlwdGlvblRpdGxlKHsgc3Vic2NyaXB0aW9uTmFtZSB9KSB7XG4gIGNvbnN0IENhcnRMaW5lSXRlbVN1YnNjcmlwdGlvblRpdGxlQ1NTID0gY3NzYFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogIzQ2NDY0NjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICAgJjpmaXJzdC1sZXR0ZXIge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8cCBjc3M9e0NhcnRMaW5lSXRlbVN1YnNjcmlwdGlvblRpdGxlQ1NTfT5cbiAgICAgIHt3cC5ob29rcy5hcHBseUZpbHRlcnMoXG4gICAgICAgIFwiY2FydC5saW5lSXRlbVN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHdwLmkxOG4uX18oXCJTdWJzY3JpcHRpb246IFwiLCBcInNob3B3cFwiKSArIHN1YnNjcmlwdGlvbk5hbWVcbiAgICAgICl9XG4gICAgPC9wPlxuICApXG59XG5cbmZ1bmN0aW9uIENhcnRMaW5lSXRlbVRpdGxlKHsgbGluZUl0ZW0sIHNldHRpbmdzIH0pIHtcbiAgY29uc3QgbWFudWFsTGluayA9IHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICBcImNhcnQubGluZUl0ZW1zTGlua1wiLFxuICAgIGxpbmVJdGVtPy5zaG9wd3AgPyBsaW5lSXRlbS5zaG9wd3AudXJsIDogZmFsc2UsXG4gICAgbGluZUl0ZW1cbiAgKVxuXG4gIGNvbnN0IENhcnRMaW5lSXRlbVRpdGxlQ1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIG1heC13aWR0aDogMjQ1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBibGFjaztcblxuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiAke21hbnVhbExpbmsgPyBcInVuZGVybGluZVwiIDogXCJub25lXCJ9O1xuICAgIH1cblxuICAgICR7bXEoXCJzbWFsbFwiKX0ge1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgfVxuICBgXG5cbiAgY29uc3QgQ2FydExpbmVJdGVtVGl0bGVXcmFwcGVyQ1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIHBheWxvYWQ9e2xpbmVJdGVtLm1lcmNoYW5kaXNlfVxuICAgICAgdHlwZT1cInByb2R1Y3RzXCJcbiAgICAgIGNsYXNzTmFtZXM9XCJ3cHMtY2FydC1saW5laXRlbS10aXRsZS1saW5rXCJcbiAgICAgIHRhcmdldD17c2V0dGluZ3MubGluZWl0ZW1zTGlua1RhcmdldH1cbiAgICAgIG1hbnVhbExpbms9e21hbnVhbExpbmt9XG4gICAgPlxuICAgICAgPGRpdiBjc3M9e0NhcnRMaW5lSXRlbVRpdGxlV3JhcHBlckNTU30+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPVwid3BzLWNhcnQtbGluZWl0ZW0tdGl0bGUtY29udGVudFwiXG4gICAgICAgICAgY3NzPXtDYXJ0TGluZUl0ZW1UaXRsZUNTU31cbiAgICAgICAgPlxuICAgICAgICAgIHt3cC5ob29rcy5hcHBseUZpbHRlcnMoXG4gICAgICAgICAgICBcImNhcnQubGluZUl0ZW1UaXRsZVRleHRcIixcbiAgICAgICAgICAgIGxpbmVJdGVtLm1lcmNoYW5kaXNlLnByb2R1Y3QudGl0bGUsXG4gICAgICAgICAgICBsaW5lSXRlbVxuICAgICAgICAgICl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAge2xpbmVJdGVtLnNlbGxpbmdQbGFuQWxsb2NhdGlvbiA/IChcbiAgICAgICAgICA8Q2FydExpbmVJdGVtU3Vic2NyaXB0aW9uVGl0bGVcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbk5hbWU9e2xpbmVJdGVtLnNlbGxpbmdQbGFuQWxsb2NhdGlvbi5zZWxsaW5nUGxhbi5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRMaW5lSXRlbVRpdGxlXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function CartLineItemTitle(_ref4) {
  var lineItem = _ref4.lineItem,
      settings = _ref4.settings;
  var manualLink = __webpack_provided_wp_dot_hooks.applyFilters("cart.lineItemsLink", lineItem !== null && lineItem !== void 0 && lineItem.shopwp ? lineItem.shopwp.url : false, lineItem);
  var CartLineItemTitleCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)("display:inline-block;line-height:1.3;max-width:245px;margin-bottom:4px;font-weight:bold;color:black;&:hover{text-decoration:", manualLink ? "underline" : "none", ";}", (0,Common_css__WEBPACK_IMPORTED_MODULE_0__.mq)("small"), "{line-height:1.4;margin-top:-3px;};label:CartLineItemTitleCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jYXJ0L2xpbmVpdGVtL3RpdGxlL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q2tDIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jYXJ0L2xpbmVpdGVtL3RpdGxlL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHsgbXEgfSBmcm9tIFwiQ29tbW9uL2Nzc1wiXG5cbmNvbnN0IExpbmsgPSB3cC5lbGVtZW50LmxhenkoKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdMaW5rLXB1YmxpYycgKi8gXCIuLi8uLi8uLi9saW5rXCIpXG4pXG5cbmZ1bmN0aW9uIENhcnRMaW5lSXRlbVN1YnNjcmlwdGlvblRpdGxlKHsgc3Vic2NyaXB0aW9uTmFtZSB9KSB7XG4gIGNvbnN0IENhcnRMaW5lSXRlbVN1YnNjcmlwdGlvblRpdGxlQ1NTID0gY3NzYFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogIzQ2NDY0NjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICAgJjpmaXJzdC1sZXR0ZXIge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8cCBjc3M9e0NhcnRMaW5lSXRlbVN1YnNjcmlwdGlvblRpdGxlQ1NTfT5cbiAgICAgIHt3cC5ob29rcy5hcHBseUZpbHRlcnMoXG4gICAgICAgIFwiY2FydC5saW5lSXRlbVN1YnNjcmlwdGlvbkRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHdwLmkxOG4uX18oXCJTdWJzY3JpcHRpb246IFwiLCBcInNob3B3cFwiKSArIHN1YnNjcmlwdGlvbk5hbWVcbiAgICAgICl9XG4gICAgPC9wPlxuICApXG59XG5cbmZ1bmN0aW9uIENhcnRMaW5lSXRlbVRpdGxlKHsgbGluZUl0ZW0sIHNldHRpbmdzIH0pIHtcbiAgY29uc3QgbWFudWFsTGluayA9IHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICBcImNhcnQubGluZUl0ZW1zTGlua1wiLFxuICAgIGxpbmVJdGVtPy5zaG9wd3AgPyBsaW5lSXRlbS5zaG9wd3AudXJsIDogZmFsc2UsXG4gICAgbGluZUl0ZW1cbiAgKVxuXG4gIGNvbnN0IENhcnRMaW5lSXRlbVRpdGxlQ1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIG1heC13aWR0aDogMjQ1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBibGFjaztcblxuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiAke21hbnVhbExpbmsgPyBcInVuZGVybGluZVwiIDogXCJub25lXCJ9O1xuICAgIH1cblxuICAgICR7bXEoXCJzbWFsbFwiKX0ge1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgfVxuICBgXG5cbiAgY29uc3QgQ2FydExpbmVJdGVtVGl0bGVXcmFwcGVyQ1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIHBheWxvYWQ9e2xpbmVJdGVtLm1lcmNoYW5kaXNlfVxuICAgICAgdHlwZT1cInByb2R1Y3RzXCJcbiAgICAgIGNsYXNzTmFtZXM9XCJ3cHMtY2FydC1saW5laXRlbS10aXRsZS1saW5rXCJcbiAgICAgIHRhcmdldD17c2V0dGluZ3MubGluZWl0ZW1zTGlua1RhcmdldH1cbiAgICAgIG1hbnVhbExpbms9e21hbnVhbExpbmt9XG4gICAgPlxuICAgICAgPGRpdiBjc3M9e0NhcnRMaW5lSXRlbVRpdGxlV3JhcHBlckNTU30+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPVwid3BzLWNhcnQtbGluZWl0ZW0tdGl0bGUtY29udGVudFwiXG4gICAgICAgICAgY3NzPXtDYXJ0TGluZUl0ZW1UaXRsZUNTU31cbiAgICAgICAgPlxuICAgICAgICAgIHt3cC5ob29rcy5hcHBseUZpbHRlcnMoXG4gICAgICAgICAgICBcImNhcnQubGluZUl0ZW1UaXRsZVRleHRcIixcbiAgICAgICAgICAgIGxpbmVJdGVtLm1lcmNoYW5kaXNlLnByb2R1Y3QudGl0bGUsXG4gICAgICAgICAgICBsaW5lSXRlbVxuICAgICAgICAgICl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAge2xpbmVJdGVtLnNlbGxpbmdQbGFuQWxsb2NhdGlvbiA/IChcbiAgICAgICAgICA8Q2FydExpbmVJdGVtU3Vic2NyaXB0aW9uVGl0bGVcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbk5hbWU9e2xpbmVJdGVtLnNlbGxpbmdQbGFuQWxsb2NhdGlvbi5zZWxsaW5nUGxhbi5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRMaW5lSXRlbVRpdGxlXG4iXX0= */"));
  var CartLineItemTitleWrapperCSS = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(Link, {
    payload: lineItem.merchandise,
    type: "products",
    classNames: "wps-cart-lineitem-title-link",
    target: settings.lineitemsLinkTarget,
    manualLink: manualLink
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    css: CartLineItemTitleWrapperCSS
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
    className: "wps-cart-lineitem-title-content",
    css: CartLineItemTitleCSS
  }, __webpack_provided_wp_dot_hooks.applyFilters("cart.lineItemTitleText", lineItem.merchandise.product.title, lineItem)), lineItem.sellingPlanAllocation ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(CartLineItemSubscriptionTitle, {
    subscriptionName: lineItem.sellingPlanAllocation.sellingPlan.name
  }) : null));
}

/* harmony default export */ __webpack_exports__["default"] = (CartLineItemTitle);

/***/ })

}]);
//# sourceMappingURL=CartLineItemTitle-public.shopwp-components.js.map