"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["src_components_storefront_selects_index_jsx"],{

/***/ "./src/components/storefront/selects/index.jsx":
/*!*****************************************************!*\
  !*** ./src/components/storefront/selects/index.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");




function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */





var _ref =  false ? 0 : {
  name: "1ah7m5e-SelectWrapperCSS",
  styles: "display:flex;align-items:center;margin-left:20px;#swp-sortby *:hover,#swp-pagesize *:hover{cursor:pointer;}div[class*=\"control\"]{border-color:#aeaeae;};label:SelectWrapperCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zdG9yZWZyb250L3NlbGVjdHMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDOEIiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3N0b3JlZnJvbnQvc2VsZWN0cy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IHVzZVBvcnRhbCB9IGZyb20gXCJIb29rc1wiXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIlxuXG5mdW5jdGlvbiBTZWxlY3RzKHtcbiAgZHJvcHpvbmUsXG4gIGxhYmVsVGV4dCxcbiAgc2VsZWN0SWQsXG4gIG9wdGlvbnMsXG4gIGlzTG9hZGluZyxcbiAgY3VzdG9tT25DaGFuZ2UsXG4gIGRlZmF1bHRWYWx1ZSxcbn0pIHtcbiAgY29uc3QgeyB1c2VTdGF0ZSB9ID0gd3AuZWxlbWVudFxuICBjb25zdCBbc2VsZWN0VmFsLCBzZXRTZWxlY3RWYWxdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKVxuXG4gIGNvbnN0IFNlbGVjdENTUyA9IGNzc2BcbiAgICB3aWR0aDogMjAwcHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuICAgIH1cbiAgYFxuXG4gIGNvbnN0IExhYmVsQ1NTID0gY3NzYFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICBgXG5cbiAgY29uc3QgU2VsZWN0V3JhcHBlckNTUyA9IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG5cbiAgICAjc3dwLXNvcnRieSAqOmhvdmVyLFxuICAgICNzd3AtcGFnZXNpemUgKjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgZGl2W2NsYXNzKj1cImNvbnRyb2xcIl0ge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjYWVhZWFlO1xuICAgIH1cbiAgYFxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgc2V0U2VsZWN0VmFsKHZhbHVlKVxuICAgIGN1c3RvbU9uQ2hhbmdlKHZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIHVzZVBvcnRhbChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJzd3Atc2VsZWN0XCJcbiAgICAgIGFyaWEtbGFiZWw9e1wiU29ydCBwcm9kdWN0c1wifVxuICAgICAgY3NzPXtTZWxlY3RXcmFwcGVyQ1NTfVxuICAgID5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtzZWxlY3RJZH0gY3NzPXtMYWJlbENTU30+XG4gICAgICAgIHtsYWJlbFRleHR9XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8U2VsZWN0XG4gICAgICAgIGlkPXtzZWxlY3RJZH1cbiAgICAgICAgY3NzPXtTZWxlY3RDU1N9XG4gICAgICAgIHZhbHVlPXtzZWxlY3RWYWx9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIGlzRGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgIC8+XG4gICAgPC9kaXY+LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZHJvcHpvbmUpXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0c1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 =  false ? 0 : {
  name: "1ryp790-LabelCSS",
  styles: "font-weight:bold;text-align:right;padding-right:10px;font-size:15px;label:LabelCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zdG9yZWZyb250L3NlbGVjdHMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCc0IiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3N0b3JlZnJvbnQvc2VsZWN0cy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IHVzZVBvcnRhbCB9IGZyb20gXCJIb29rc1wiXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIlxuXG5mdW5jdGlvbiBTZWxlY3RzKHtcbiAgZHJvcHpvbmUsXG4gIGxhYmVsVGV4dCxcbiAgc2VsZWN0SWQsXG4gIG9wdGlvbnMsXG4gIGlzTG9hZGluZyxcbiAgY3VzdG9tT25DaGFuZ2UsXG4gIGRlZmF1bHRWYWx1ZSxcbn0pIHtcbiAgY29uc3QgeyB1c2VTdGF0ZSB9ID0gd3AuZWxlbWVudFxuICBjb25zdCBbc2VsZWN0VmFsLCBzZXRTZWxlY3RWYWxdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKVxuXG4gIGNvbnN0IFNlbGVjdENTUyA9IGNzc2BcbiAgICB3aWR0aDogMjAwcHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuICAgIH1cbiAgYFxuXG4gIGNvbnN0IExhYmVsQ1NTID0gY3NzYFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICBgXG5cbiAgY29uc3QgU2VsZWN0V3JhcHBlckNTUyA9IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG5cbiAgICAjc3dwLXNvcnRieSAqOmhvdmVyLFxuICAgICNzd3AtcGFnZXNpemUgKjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgZGl2W2NsYXNzKj1cImNvbnRyb2xcIl0ge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjYWVhZWFlO1xuICAgIH1cbiAgYFxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgc2V0U2VsZWN0VmFsKHZhbHVlKVxuICAgIGN1c3RvbU9uQ2hhbmdlKHZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIHVzZVBvcnRhbChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJzd3Atc2VsZWN0XCJcbiAgICAgIGFyaWEtbGFiZWw9e1wiU29ydCBwcm9kdWN0c1wifVxuICAgICAgY3NzPXtTZWxlY3RXcmFwcGVyQ1NTfVxuICAgID5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtzZWxlY3RJZH0gY3NzPXtMYWJlbENTU30+XG4gICAgICAgIHtsYWJlbFRleHR9XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8U2VsZWN0XG4gICAgICAgIGlkPXtzZWxlY3RJZH1cbiAgICAgICAgY3NzPXtTZWxlY3RDU1N9XG4gICAgICAgIHZhbHVlPXtzZWxlY3RWYWx9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIGlzRGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgIC8+XG4gICAgPC9kaXY+LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZHJvcHpvbmUpXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0c1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref3 =  false ? 0 : {
  name: "1991tl3-SelectCSS",
  styles: "width:200px;&:hover{cursor:pointer;}&:disabled{&:hover{cursor:not-allowed;}};label:SelectCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zdG9yZWZyb250L3NlbGVjdHMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCdUIiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3N0b3JlZnJvbnQvc2VsZWN0cy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IHVzZVBvcnRhbCB9IGZyb20gXCJIb29rc1wiXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIlxuXG5mdW5jdGlvbiBTZWxlY3RzKHtcbiAgZHJvcHpvbmUsXG4gIGxhYmVsVGV4dCxcbiAgc2VsZWN0SWQsXG4gIG9wdGlvbnMsXG4gIGlzTG9hZGluZyxcbiAgY3VzdG9tT25DaGFuZ2UsXG4gIGRlZmF1bHRWYWx1ZSxcbn0pIHtcbiAgY29uc3QgeyB1c2VTdGF0ZSB9ID0gd3AuZWxlbWVudFxuICBjb25zdCBbc2VsZWN0VmFsLCBzZXRTZWxlY3RWYWxdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKVxuXG4gIGNvbnN0IFNlbGVjdENTUyA9IGNzc2BcbiAgICB3aWR0aDogMjAwcHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuICAgIH1cbiAgYFxuXG4gIGNvbnN0IExhYmVsQ1NTID0gY3NzYFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICBgXG5cbiAgY29uc3QgU2VsZWN0V3JhcHBlckNTUyA9IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG5cbiAgICAjc3dwLXNvcnRieSAqOmhvdmVyLFxuICAgICNzd3AtcGFnZXNpemUgKjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgZGl2W2NsYXNzKj1cImNvbnRyb2xcIl0ge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjYWVhZWFlO1xuICAgIH1cbiAgYFxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgc2V0U2VsZWN0VmFsKHZhbHVlKVxuICAgIGN1c3RvbU9uQ2hhbmdlKHZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIHVzZVBvcnRhbChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJzd3Atc2VsZWN0XCJcbiAgICAgIGFyaWEtbGFiZWw9e1wiU29ydCBwcm9kdWN0c1wifVxuICAgICAgY3NzPXtTZWxlY3RXcmFwcGVyQ1NTfVxuICAgID5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtzZWxlY3RJZH0gY3NzPXtMYWJlbENTU30+XG4gICAgICAgIHtsYWJlbFRleHR9XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8U2VsZWN0XG4gICAgICAgIGlkPXtzZWxlY3RJZH1cbiAgICAgICAgY3NzPXtTZWxlY3RDU1N9XG4gICAgICAgIHZhbHVlPXtzZWxlY3RWYWx9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIGlzRGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgIC8+XG4gICAgPC9kaXY+LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZHJvcHpvbmUpXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0c1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function Selects(_ref4) {
  var dropzone = _ref4.dropzone,
      labelText = _ref4.labelText,
      selectId = _ref4.selectId,
      options = _ref4.options,
      isLoading = _ref4.isLoading,
      customOnChange = _ref4.customOnChange,
      defaultValue = _ref4.defaultValue;
  var useState = __webpack_provided_wp_dot_element.useState;

  var _useState = useState(defaultValue),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      selectVal = _useState2[0],
      setSelectVal = _useState2[1];

  var SelectCSS = _ref3;
  var LabelCSS = _ref2;
  var SelectWrapperCSS = _ref;

  function onChange(_x) {
    return _onChange.apply(this, arguments);
  }

  function _onChange() {
    _onChange = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(value) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setSelectVal(value);
              customOnChange(value);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onChange.apply(this, arguments);
  }

  return (0,Hooks__WEBPACK_IMPORTED_MODULE_3__.usePortal)((0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "swp-select",
    "aria-label": "Sort products",
    css: SelectWrapperCSS
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
    htmlFor: selectId,
    css: LabelCSS
  }, labelText), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: selectId,
    css: SelectCSS,
    value: selectVal,
    onChange: onChange,
    options: options,
    defaultValue: defaultValue,
    isDisabled: isLoading
  })), document.querySelector(dropzone));
}

/* harmony default export */ __webpack_exports__["default"] = (Selects);

/***/ })

}]);
//# sourceMappingURL=src_components_storefront_selects_index_jsx.shopwp-components.js.map