"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["SubscriptionTooltip-public"],{

/***/ "./src/components/tooltip/index.jsx":
/*!******************************************!*\
  !*** ./src/components/tooltip/index.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "./node_modules/tippy.js/dist/tippy.css");
/* harmony import */ var tippy_js_animations_shift_toward_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tippy.js/animations/shift-toward.css */ "./node_modules/tippy.js/animations/shift-toward.css");
/* harmony import */ var tippy_js_themes_light_border_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tippy.js/themes/light-border.css */ "./node_modules/tippy.js/themes/light-border.css");
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tippyjs/react */ "./node_modules/@tippyjs/react/dist/tippy-react.esm.js");
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-debounce */ "./node_modules/use-debounce/esm/useDebounce.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */








var _ref =  false ? 0 : {
  name: "1rtwjrb-textCSS",
  styles: "&&{margin:0;font-size:15px;line-height:1;};label:textCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy90b29sdGlwL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ3FCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy90b29sdGlwL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IFwidGlwcHkuanMvZGlzdC90aXBweS5jc3NcIlxuaW1wb3J0IFwidGlwcHkuanMvYW5pbWF0aW9ucy9zaGlmdC10b3dhcmQuY3NzXCJcbmltcG9ydCBcInRpcHB5LmpzL3RoZW1lcy9saWdodC1ib3JkZXIuY3NzXCJcbmltcG9ydCBUaXBweSBmcm9tIFwiQHRpcHB5anMvcmVhY3RcIlxuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tIFwidXNlLWRlYm91bmNlXCJcblxuZnVuY3Rpb24gVG9vbHRpcCh7IGxhYmVsLCBjaGlsZHJlbiwgb3B0aW9ucyB9KSB7XG4gIGNvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnRcbiAgY29uc3QgW2lzU2hvd2luZ0RldGFpbHMsIHNldElzU2hvd2luZ0RldGFpbHNdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc1Nob3dpbmdEZXRhaWxzRGVib3VuY2VkXSA9IHVzZURlYm91bmNlKGlzU2hvd2luZ0RldGFpbHMsIDI1MClcblxuICBjb25zdCBUb29sdGlwQ1NTID0gY3NzYFxuICAgIHdpZHRoOiAxNzBweDtcbiAgICBwYWRkaW5nOiAycHggMCAycHggMDtcbiAgICBtYXJnaW46IDA7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogaGVscDtcbiAgICB9XG5cbiAgICAudGlwcHktY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAxNXB4IDIwcHggMTBweCAyMHB4O1xuXG4gICAgICBzdHJvbmcgKyBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgYFxuICBjb25zdCBUb29sdGlwSW5uZXJDU1MgPSBjc3NgXG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICBgXG5cbiAgY29uc3QgaWNvbkNTUyA9IGNzc2BcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luOiAwIDAgMCA3cHg7XG4gIGBcblxuICBjb25zdCB0ZXh0Q1NTID0gY3NzYFxuICAgICYmIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cbiAgYFxuXG4gIGZ1bmN0aW9uIG9uTW91c2VMZWF2ZSgpIHtcbiAgICBzZXRJc1Nob3dpbmdEZXRhaWxzKGZhbHNlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge1xuICAgIHNldElzU2hvd2luZ0RldGFpbHModHJ1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtUb29sdGlwQ1NTfVxuICAgICAgb25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9XG4gICAgICBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX1cbiAgICA+XG4gICAgICA8VGlwcHlcbiAgICAgICAgaW50ZXJhY3RpdmU9e3RydWV9XG4gICAgICAgIHZpc2libGU9e2lzU2hvd2luZ0RldGFpbHNEZWJvdW5jZWR9XG4gICAgICAgIHBsYWNlbWVudD17b3B0aW9ucy5wbGFjZW1lbnR9XG4gICAgICAgIGFwcGVuZFRvPVwicGFyZW50XCJcbiAgICAgICAgYWxsb3dIVE1MPXt0cnVlfVxuICAgICAgICBhbmltYXRpb249XCJzaGlmdC10b3dhcmRcIlxuICAgICAgICB0aGVtZT1cImxpZ2h0LWJvcmRlclwiXG4gICAgICAgIGluZXJ0aWE9e2ZhbHNlfVxuICAgICAgICBkZWxheT17NTB9XG4gICAgICAgIGNvbnRlbnQ9e2NoaWxkcmVufVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNzcz17VG9vbHRpcElubmVyQ1NTfT5cbiAgICAgICAgICA8cCBjc3M9e3RleHRDU1N9PntsYWJlbH08L3A+XG5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjc3M9e2ljb25DU1N9XG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYXNcIlxuICAgICAgICAgICAgZGF0YS1pY29uPVwiaW5mby1jaXJjbGVcIlxuICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIGQ9XCJNMjU2IDhDMTE5LjA0MyA4IDggMTE5LjA4MyA4IDI1NmMwIDEzNi45OTcgMTExLjA0MyAyNDggMjQ4IDI0OHMyNDgtMTExLjAwMyAyNDgtMjQ4QzUwNCAxMTkuMDgzIDM5Mi45NTcgOCAyNTYgOHptMCAxMTBjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHpcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1RpcHB5PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 =  false ? 0 : {
  name: "1s8o9tg-iconCSS",
  styles: "width:15px;height:15px;margin:0 0 0 7px;label:iconCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy90b29sdGlwL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ3FCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy90b29sdGlwL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IFwidGlwcHkuanMvZGlzdC90aXBweS5jc3NcIlxuaW1wb3J0IFwidGlwcHkuanMvYW5pbWF0aW9ucy9zaGlmdC10b3dhcmQuY3NzXCJcbmltcG9ydCBcInRpcHB5LmpzL3RoZW1lcy9saWdodC1ib3JkZXIuY3NzXCJcbmltcG9ydCBUaXBweSBmcm9tIFwiQHRpcHB5anMvcmVhY3RcIlxuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tIFwidXNlLWRlYm91bmNlXCJcblxuZnVuY3Rpb24gVG9vbHRpcCh7IGxhYmVsLCBjaGlsZHJlbiwgb3B0aW9ucyB9KSB7XG4gIGNvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnRcbiAgY29uc3QgW2lzU2hvd2luZ0RldGFpbHMsIHNldElzU2hvd2luZ0RldGFpbHNdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc1Nob3dpbmdEZXRhaWxzRGVib3VuY2VkXSA9IHVzZURlYm91bmNlKGlzU2hvd2luZ0RldGFpbHMsIDI1MClcblxuICBjb25zdCBUb29sdGlwQ1NTID0gY3NzYFxuICAgIHdpZHRoOiAxNzBweDtcbiAgICBwYWRkaW5nOiAycHggMCAycHggMDtcbiAgICBtYXJnaW46IDA7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogaGVscDtcbiAgICB9XG5cbiAgICAudGlwcHktY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAxNXB4IDIwcHggMTBweCAyMHB4O1xuXG4gICAgICBzdHJvbmcgKyBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgYFxuICBjb25zdCBUb29sdGlwSW5uZXJDU1MgPSBjc3NgXG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICBgXG5cbiAgY29uc3QgaWNvbkNTUyA9IGNzc2BcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luOiAwIDAgMCA3cHg7XG4gIGBcblxuICBjb25zdCB0ZXh0Q1NTID0gY3NzYFxuICAgICYmIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cbiAgYFxuXG4gIGZ1bmN0aW9uIG9uTW91c2VMZWF2ZSgpIHtcbiAgICBzZXRJc1Nob3dpbmdEZXRhaWxzKGZhbHNlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge1xuICAgIHNldElzU2hvd2luZ0RldGFpbHModHJ1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtUb29sdGlwQ1NTfVxuICAgICAgb25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9XG4gICAgICBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX1cbiAgICA+XG4gICAgICA8VGlwcHlcbiAgICAgICAgaW50ZXJhY3RpdmU9e3RydWV9XG4gICAgICAgIHZpc2libGU9e2lzU2hvd2luZ0RldGFpbHNEZWJvdW5jZWR9XG4gICAgICAgIHBsYWNlbWVudD17b3B0aW9ucy5wbGFjZW1lbnR9XG4gICAgICAgIGFwcGVuZFRvPVwicGFyZW50XCJcbiAgICAgICAgYWxsb3dIVE1MPXt0cnVlfVxuICAgICAgICBhbmltYXRpb249XCJzaGlmdC10b3dhcmRcIlxuICAgICAgICB0aGVtZT1cImxpZ2h0LWJvcmRlclwiXG4gICAgICAgIGluZXJ0aWE9e2ZhbHNlfVxuICAgICAgICBkZWxheT17NTB9XG4gICAgICAgIGNvbnRlbnQ9e2NoaWxkcmVufVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNzcz17VG9vbHRpcElubmVyQ1NTfT5cbiAgICAgICAgICA8cCBjc3M9e3RleHRDU1N9PntsYWJlbH08L3A+XG5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjc3M9e2ljb25DU1N9XG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYXNcIlxuICAgICAgICAgICAgZGF0YS1pY29uPVwiaW5mby1jaXJjbGVcIlxuICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIGQ9XCJNMjU2IDhDMTE5LjA0MyA4IDggMTE5LjA4MyA4IDI1NmMwIDEzNi45OTcgMTExLjA0MyAyNDggMjQ4IDI0OHMyNDgtMTExLjAwMyAyNDgtMjQ4QzUwNCAxMTkuMDgzIDM5Mi45NTcgOCAyNTYgOHptMCAxMTBjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHpcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1RpcHB5PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref3 =  false ? 0 : {
  name: "r5wpl4-TooltipInnerCSS",
  styles: "flex:1;display:flex;width:100%;label:TooltipInnerCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy90b29sdGlwL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QjZCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy90b29sdGlwL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IFwidGlwcHkuanMvZGlzdC90aXBweS5jc3NcIlxuaW1wb3J0IFwidGlwcHkuanMvYW5pbWF0aW9ucy9zaGlmdC10b3dhcmQuY3NzXCJcbmltcG9ydCBcInRpcHB5LmpzL3RoZW1lcy9saWdodC1ib3JkZXIuY3NzXCJcbmltcG9ydCBUaXBweSBmcm9tIFwiQHRpcHB5anMvcmVhY3RcIlxuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tIFwidXNlLWRlYm91bmNlXCJcblxuZnVuY3Rpb24gVG9vbHRpcCh7IGxhYmVsLCBjaGlsZHJlbiwgb3B0aW9ucyB9KSB7XG4gIGNvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnRcbiAgY29uc3QgW2lzU2hvd2luZ0RldGFpbHMsIHNldElzU2hvd2luZ0RldGFpbHNdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc1Nob3dpbmdEZXRhaWxzRGVib3VuY2VkXSA9IHVzZURlYm91bmNlKGlzU2hvd2luZ0RldGFpbHMsIDI1MClcblxuICBjb25zdCBUb29sdGlwQ1NTID0gY3NzYFxuICAgIHdpZHRoOiAxNzBweDtcbiAgICBwYWRkaW5nOiAycHggMCAycHggMDtcbiAgICBtYXJnaW46IDA7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogaGVscDtcbiAgICB9XG5cbiAgICAudGlwcHktY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAxNXB4IDIwcHggMTBweCAyMHB4O1xuXG4gICAgICBzdHJvbmcgKyBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgYFxuICBjb25zdCBUb29sdGlwSW5uZXJDU1MgPSBjc3NgXG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICBgXG5cbiAgY29uc3QgaWNvbkNTUyA9IGNzc2BcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luOiAwIDAgMCA3cHg7XG4gIGBcblxuICBjb25zdCB0ZXh0Q1NTID0gY3NzYFxuICAgICYmIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cbiAgYFxuXG4gIGZ1bmN0aW9uIG9uTW91c2VMZWF2ZSgpIHtcbiAgICBzZXRJc1Nob3dpbmdEZXRhaWxzKGZhbHNlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge1xuICAgIHNldElzU2hvd2luZ0RldGFpbHModHJ1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtUb29sdGlwQ1NTfVxuICAgICAgb25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9XG4gICAgICBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX1cbiAgICA+XG4gICAgICA8VGlwcHlcbiAgICAgICAgaW50ZXJhY3RpdmU9e3RydWV9XG4gICAgICAgIHZpc2libGU9e2lzU2hvd2luZ0RldGFpbHNEZWJvdW5jZWR9XG4gICAgICAgIHBsYWNlbWVudD17b3B0aW9ucy5wbGFjZW1lbnR9XG4gICAgICAgIGFwcGVuZFRvPVwicGFyZW50XCJcbiAgICAgICAgYWxsb3dIVE1MPXt0cnVlfVxuICAgICAgICBhbmltYXRpb249XCJzaGlmdC10b3dhcmRcIlxuICAgICAgICB0aGVtZT1cImxpZ2h0LWJvcmRlclwiXG4gICAgICAgIGluZXJ0aWE9e2ZhbHNlfVxuICAgICAgICBkZWxheT17NTB9XG4gICAgICAgIGNvbnRlbnQ9e2NoaWxkcmVufVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNzcz17VG9vbHRpcElubmVyQ1NTfT5cbiAgICAgICAgICA8cCBjc3M9e3RleHRDU1N9PntsYWJlbH08L3A+XG5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjc3M9e2ljb25DU1N9XG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYXNcIlxuICAgICAgICAgICAgZGF0YS1pY29uPVwiaW5mby1jaXJjbGVcIlxuICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIGQ9XCJNMjU2IDhDMTE5LjA0MyA4IDggMTE5LjA4MyA4IDI1NmMwIDEzNi45OTcgMTExLjA0MyAyNDggMjQ4IDI0OHMyNDgtMTExLjAwMyAyNDgtMjQ4QzUwNCAxMTkuMDgzIDM5Mi45NTcgOCAyNTYgOHptMCAxMTBjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHpcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1RpcHB5PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref4 =  false ? 0 : {
  name: "18hjwow-TooltipCSS",
  styles: "width:170px;padding:2px 0 2px 0;margin:0;&:hover{cursor:help;}.tippy-content{padding:15px 20px 10px 20px;strong+p{margin-top:5px;}};label:TooltipCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy90b29sdGlwL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhd0IiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Rvb2x0aXAvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgXCJ0aXBweS5qcy9kaXN0L3RpcHB5LmNzc1wiXG5pbXBvcnQgXCJ0aXBweS5qcy9hbmltYXRpb25zL3NoaWZ0LXRvd2FyZC5jc3NcIlxuaW1wb3J0IFwidGlwcHkuanMvdGhlbWVzL2xpZ2h0LWJvcmRlci5jc3NcIlxuaW1wb3J0IFRpcHB5IGZyb20gXCJAdGlwcHlqcy9yZWFjdFwiXG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gXCJ1c2UtZGVib3VuY2VcIlxuXG5mdW5jdGlvbiBUb29sdGlwKHsgbGFiZWwsIGNoaWxkcmVuLCBvcHRpb25zIH0pIHtcbiAgY29uc3QgeyB1c2VTdGF0ZSB9ID0gd3AuZWxlbWVudFxuICBjb25zdCBbaXNTaG93aW5nRGV0YWlscywgc2V0SXNTaG93aW5nRGV0YWlsc10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lzU2hvd2luZ0RldGFpbHNEZWJvdW5jZWRdID0gdXNlRGVib3VuY2UoaXNTaG93aW5nRGV0YWlscywgMjUwKVxuXG4gIGNvbnN0IFRvb2x0aXBDU1MgPSBjc3NgXG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIHBhZGRpbmc6IDJweCAwIDJweCAwO1xuICAgIG1hcmdpbjogMDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBoZWxwO1xuICAgIH1cblxuICAgIC50aXBweS1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweCAxMHB4IDIwcHg7XG5cbiAgICAgIHN0cm9uZyArIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgfVxuICBgXG4gIGNvbnN0IFRvb2x0aXBJbm5lckNTUyA9IGNzc2BcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIGBcblxuICBjb25zdCBpY29uQ1NTID0gY3NzYFxuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBtYXJnaW46IDAgMCAwIDdweDtcbiAgYFxuXG4gIGNvbnN0IHRleHRDU1MgPSBjc3NgXG4gICAgJiYge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgfVxuICBgXG5cbiAgZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge1xuICAgIHNldElzU2hvd2luZ0RldGFpbHMoZmFsc2UpXG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7XG4gICAgc2V0SXNTaG93aW5nRGV0YWlscyh0cnVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e1Rvb2x0aXBDU1N9XG4gICAgICBvbk1vdXNlRW50ZXI9e29uTW91c2VFbnRlcn1cbiAgICAgIG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfVxuICAgID5cbiAgICAgIDxUaXBweVxuICAgICAgICBpbnRlcmFjdGl2ZT17dHJ1ZX1cbiAgICAgICAgdmlzaWJsZT17aXNTaG93aW5nRGV0YWlsc0RlYm91bmNlZH1cbiAgICAgICAgcGxhY2VtZW50PXtvcHRpb25zLnBsYWNlbWVudH1cbiAgICAgICAgYXBwZW5kVG89XCJwYXJlbnRcIlxuICAgICAgICBhbGxvd0hUTUw9e3RydWV9XG4gICAgICAgIGFuaW1hdGlvbj1cInNoaWZ0LXRvd2FyZFwiXG4gICAgICAgIHRoZW1lPVwibGlnaHQtYm9yZGVyXCJcbiAgICAgICAgaW5lcnRpYT17ZmFsc2V9XG4gICAgICAgIGRlbGF5PXs1MH1cbiAgICAgICAgY29udGVudD17Y2hpbGRyZW59XG4gICAgICA+XG4gICAgICAgIDxkaXYgY3NzPXtUb29sdGlwSW5uZXJDU1N9PlxuICAgICAgICAgIDxwIGNzcz17dGV4dENTU30+e2xhYmVsfTwvcD5cblxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGNzcz17aWNvbkNTU31cbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhc1wiXG4gICAgICAgICAgICBkYXRhLWljb249XCJpbmZvLWNpcmNsZVwiXG4gICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgZD1cIk0yNTYgOEMxMTkuMDQzIDggOCAxMTkuMDgzIDggMjU2YzAgMTM2Ljk5NyAxMTEuMDQzIDI0OCAyNDggMjQ4czI0OC0xMTEuMDAzIDI0OC0yNDhDNTA0IDExOS4wODMgMzkyLjk1NyA4IDI1NiA4em0wIDExMGMyMy4xOTYgMCA0MiAxOC44MDQgNDIgNDJzLTE4LjgwNCA0Mi00MiA0Mi00Mi0xOC44MDQtNDItNDIgMTguODA0LTQyIDQyLTQyem01NiAyNTRjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtODhjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoMTJ2LTY0aC0xMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg2NGM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjEwMGgxMmM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjI0elwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVGlwcHk+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function Tooltip(_ref5) {
  var label = _ref5.label,
      children = _ref5.children,
      options = _ref5.options;
  var useState = __webpack_provided_wp_dot_element.useState;

  var _useState = useState(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isShowingDetails = _useState2[0],
      setIsShowingDetails = _useState2[1];

  var _useDebounce = (0,use_debounce__WEBPACK_IMPORTED_MODULE_4__["default"])(isShowingDetails, 250),
      _useDebounce2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDebounce, 1),
      isShowingDetailsDebounced = _useDebounce2[0];

  var TooltipCSS = _ref4;
  var TooltipInnerCSS = _ref3;
  var iconCSS = _ref2;
  var textCSS = _ref;

  function onMouseLeave() {
    setIsShowingDetails(false);
  }

  function onMouseEnter() {
    setIsShowingDetails(true);
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    css: TooltipCSS,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tippyjs_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    interactive: true,
    visible: isShowingDetailsDebounced,
    placement: options.placement,
    appendTo: "parent",
    allowHTML: true,
    animation: "shift-toward",
    theme: "light-border",
    inertia: false,
    delay: 50,
    content: children
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    css: TooltipInnerCSS
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
    css: textCSS
  }, label), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
    css: iconCSS,
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "info-circle",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
    fill: "currentColor",
    d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4= ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=";

/***/ })

}]);
//# sourceMappingURL=SubscriptionTooltip-public.shopwp-components.js.map