"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["CartNote-public"],{

/***/ "./src/components/cart/note/index.jsx":
/*!********************************************!*\
  !*** ./src/components/cart/note/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _shop_state_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shop/_state/hooks */ "./src/components/shop/_state/hooks.js");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/cart/_state/hooks.js");
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! use-debounce */ "./node_modules/use-debounce/esm/useDebounce.js");
/* harmony import */ var _api_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.jsx */ "./src/components/cart/api.jsx");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */








var _ref =  false ? 0 : {
  name: "lh790v-CartTextareaCSS",
  styles: "width:100%;color:#121212;display:block;font-size:15px;padding:10px;border-color:#7e7e7e;appearance:none;font-family:inherit;border-radius:5px;min-height:100px;::placeholder,::-webkit-input-placeholder{color:#969696;};label:CartTextareaCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jYXJ0L25vdGUvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFNkIiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2NhcnQvbm90ZS9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IHVzZVNob3BTdGF0ZSwgdXNlU2hvcERpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL3Nob3AvX3N0YXRlL2hvb2tzXCJcbmltcG9ydCB7IHVzZUNhcnRTdGF0ZSwgdXNlQ2FydERpc3BhdGNoIH0gZnJvbSBcIi4uL19zdGF0ZS9ob29rc1wiXG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gXCJ1c2UtZGVib3VuY2VcIlxuaW1wb3J0IHsgdXBkYXRlQ2FydE5vdGUgfSBmcm9tIFwiLi4vYXBpLmpzeFwiXG5pbXBvcnQgeyB1c2VGaXJzdFJlbmRlciB9IGZyb20gXCJIb29rc1wiXG5cbmZ1bmN0aW9uIENhcnROb3RlKCkge1xuICBjb25zdCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9ID0gd3AuZWxlbWVudFxuICBjb25zdCBzaG9wU3RhdGUgPSB1c2VTaG9wU3RhdGUoKVxuICBjb25zdCBzaG9wRGlzcGF0Y2ggPSB1c2VTaG9wRGlzcGF0Y2goKVxuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VDYXJ0U3RhdGUoKVxuICBjb25zdCBjYXJ0RGlzcGF0Y2ggPSB1c2VDYXJ0RGlzcGF0Y2goKVxuICBjb25zdCBpbnB1dEVsZW1lbnQgPSB1c2VSZWYoKVxuICBjb25zdCBbbm90ZVZhbHVlLCBzZXROb3RlVmFsdWVdID0gdXNlU3RhdGUoc2hvcFN0YXRlLmNhcnREYXRhLm5vdGUpXG5cbiAgY29uc3QgW2RlYm91bmNlZFZhbHVlXSA9IHVzZURlYm91bmNlKG5vdGVWYWx1ZSwgNDUwKVxuICBjb25zdCBpc0ZpcnN0UmVuZGVyID0gdXNlRmlyc3RSZW5kZXIoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzRmlyc3RSZW5kZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzaG9wU3RhdGUuY2FydERhdGEubm90ZSA9PT0gZGVib3VuY2VkVmFsdWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHNob3BEaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lTX0NBUlRfVVBEQVRJTkdcIiwgcGF5bG9hZDogdHJ1ZSB9KVxuXG4gICAgdXBkYXRlQ2FydE5vdGUoXG4gICAgICBkZWJvdW5jZWRWYWx1ZSxcbiAgICAgIHNob3BTdGF0ZSxcbiAgICAgIGNhcnREaXNwYXRjaCxcbiAgICAgIGlucHV0RWxlbWVudCxcbiAgICAgIHNob3BEaXNwYXRjaFxuICAgIClcbiAgfSwgW2RlYm91bmNlZFZhbHVlXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaG9wU3RhdGUuY2FydERhdGEubm90ZSkge1xuICAgICAgc2V0Tm90ZVZhbHVlKHNob3BTdGF0ZS5jYXJ0RGF0YS5ub3RlKVxuICAgIH1cbiAgfSwgW3Nob3BTdGF0ZS5jYXJ0RGF0YS5ub3RlXSlcblxuICBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgaWYgKHNob3BTdGF0ZS5pc0NhcnRVcGRhdGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldE5vdGVWYWx1ZShlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IENhcnROb3Rlc0NTUyA9IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub25lO1xuICAgIGNvbG9yOiAjMTIxMjEyO1xuXG4gICAgbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICBgXG5cbiAgY29uc3QgQ2FydFRleHRhcmVhQ1NTID0gY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjMTIxMjEyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1jb2xvcjogIzdlN2U3ZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcblxuICAgIDo6cGxhY2Vob2xkZXIsXG4gICAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjOTY5Njk2O1xuICAgIH1cbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid3BzLWNhcnQtbm90ZXNcIiBjc3M9e0NhcnROb3Rlc0NTU30+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIndwcy1pbnB1dC1ub3Rlc1wiPntjYXJ0U3RhdGUuc2V0dGluZ3Mubm90ZXNMYWJlbH08L2xhYmVsPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGNzcz17Q2FydFRleHRhcmVhQ1NTfVxuICAgICAgICBwbGFjZWhvbGRlcj17Y2FydFN0YXRlLnNldHRpbmdzLm5vdGVzUGxhY2Vob2xkZXJ9XG4gICAgICAgIGlkPVwid3BzLWlucHV0LW5vdGVzXCJcbiAgICAgICAgY2xhc3NOYW1lPVwid3BzLWlucHV0IHdwcy1pbnB1dC10ZXh0YXJlYVwiXG4gICAgICAgIHZhbHVlPXtub3RlVmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgcmVmPXtpbnB1dEVsZW1lbnR9XG4gICAgICAgIGRpc2FibGVkPXtzaG9wU3RhdGUuaXNDYXJ0VXBkYXRpbmd9XG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0Tm90ZVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 =  false ? 0 : {
  name: "fma5os-CartNotesCSS",
  styles: "margin-bottom:0.5em;padding:0;font-weight:none;color:#121212;label{font-size:15px;display:block;margin-bottom:5px;};label:CartNotesCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jYXJ0L25vdGUvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEMEIiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2NhcnQvbm90ZS9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IHVzZVNob3BTdGF0ZSwgdXNlU2hvcERpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL3Nob3AvX3N0YXRlL2hvb2tzXCJcbmltcG9ydCB7IHVzZUNhcnRTdGF0ZSwgdXNlQ2FydERpc3BhdGNoIH0gZnJvbSBcIi4uL19zdGF0ZS9ob29rc1wiXG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gXCJ1c2UtZGVib3VuY2VcIlxuaW1wb3J0IHsgdXBkYXRlQ2FydE5vdGUgfSBmcm9tIFwiLi4vYXBpLmpzeFwiXG5pbXBvcnQgeyB1c2VGaXJzdFJlbmRlciB9IGZyb20gXCJIb29rc1wiXG5cbmZ1bmN0aW9uIENhcnROb3RlKCkge1xuICBjb25zdCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9ID0gd3AuZWxlbWVudFxuICBjb25zdCBzaG9wU3RhdGUgPSB1c2VTaG9wU3RhdGUoKVxuICBjb25zdCBzaG9wRGlzcGF0Y2ggPSB1c2VTaG9wRGlzcGF0Y2goKVxuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VDYXJ0U3RhdGUoKVxuICBjb25zdCBjYXJ0RGlzcGF0Y2ggPSB1c2VDYXJ0RGlzcGF0Y2goKVxuICBjb25zdCBpbnB1dEVsZW1lbnQgPSB1c2VSZWYoKVxuICBjb25zdCBbbm90ZVZhbHVlLCBzZXROb3RlVmFsdWVdID0gdXNlU3RhdGUoc2hvcFN0YXRlLmNhcnREYXRhLm5vdGUpXG5cbiAgY29uc3QgW2RlYm91bmNlZFZhbHVlXSA9IHVzZURlYm91bmNlKG5vdGVWYWx1ZSwgNDUwKVxuICBjb25zdCBpc0ZpcnN0UmVuZGVyID0gdXNlRmlyc3RSZW5kZXIoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzRmlyc3RSZW5kZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzaG9wU3RhdGUuY2FydERhdGEubm90ZSA9PT0gZGVib3VuY2VkVmFsdWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHNob3BEaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lTX0NBUlRfVVBEQVRJTkdcIiwgcGF5bG9hZDogdHJ1ZSB9KVxuXG4gICAgdXBkYXRlQ2FydE5vdGUoXG4gICAgICBkZWJvdW5jZWRWYWx1ZSxcbiAgICAgIHNob3BTdGF0ZSxcbiAgICAgIGNhcnREaXNwYXRjaCxcbiAgICAgIGlucHV0RWxlbWVudCxcbiAgICAgIHNob3BEaXNwYXRjaFxuICAgIClcbiAgfSwgW2RlYm91bmNlZFZhbHVlXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaG9wU3RhdGUuY2FydERhdGEubm90ZSkge1xuICAgICAgc2V0Tm90ZVZhbHVlKHNob3BTdGF0ZS5jYXJ0RGF0YS5ub3RlKVxuICAgIH1cbiAgfSwgW3Nob3BTdGF0ZS5jYXJ0RGF0YS5ub3RlXSlcblxuICBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgaWYgKHNob3BTdGF0ZS5pc0NhcnRVcGRhdGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldE5vdGVWYWx1ZShlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IENhcnROb3Rlc0NTUyA9IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub25lO1xuICAgIGNvbG9yOiAjMTIxMjEyO1xuXG4gICAgbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICBgXG5cbiAgY29uc3QgQ2FydFRleHRhcmVhQ1NTID0gY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjMTIxMjEyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1jb2xvcjogIzdlN2U3ZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcblxuICAgIDo6cGxhY2Vob2xkZXIsXG4gICAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjOTY5Njk2O1xuICAgIH1cbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid3BzLWNhcnQtbm90ZXNcIiBjc3M9e0NhcnROb3Rlc0NTU30+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIndwcy1pbnB1dC1ub3Rlc1wiPntjYXJ0U3RhdGUuc2V0dGluZ3Mubm90ZXNMYWJlbH08L2xhYmVsPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGNzcz17Q2FydFRleHRhcmVhQ1NTfVxuICAgICAgICBwbGFjZWhvbGRlcj17Y2FydFN0YXRlLnNldHRpbmdzLm5vdGVzUGxhY2Vob2xkZXJ9XG4gICAgICAgIGlkPVwid3BzLWlucHV0LW5vdGVzXCJcbiAgICAgICAgY2xhc3NOYW1lPVwid3BzLWlucHV0IHdwcy1pbnB1dC10ZXh0YXJlYVwiXG4gICAgICAgIHZhbHVlPXtub3RlVmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgcmVmPXtpbnB1dEVsZW1lbnR9XG4gICAgICAgIGRpc2FibGVkPXtzaG9wU3RhdGUuaXNDYXJ0VXBkYXRpbmd9XG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0Tm90ZVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function CartNote() {
  var _wp$element = wp.element,
      useState = __webpack_provided_wp_dot_element.useState,
      useRef = __webpack_provided_wp_dot_element.useRef,
      useEffect = __webpack_provided_wp_dot_element.useEffect;
  var shopState = (0,_shop_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useShopState)();
  var shopDispatch = (0,_shop_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useShopDispatch)();
  var cartState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_2__.useCartState)();
  var cartDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_2__.useCartDispatch)();
  var inputElement = useRef();

  var _useState = useState(shopState.cartData.note),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      noteValue = _useState2[0],
      setNoteValue = _useState2[1];

  var _useDebounce = (0,use_debounce__WEBPACK_IMPORTED_MODULE_5__["default"])(noteValue, 450),
      _useDebounce2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDebounce, 1),
      debouncedValue = _useDebounce2[0];

  var isFirstRender = (0,Hooks__WEBPACK_IMPORTED_MODULE_4__.useFirstRender)();
  useEffect(function () {
    if (isFirstRender) {
      return;
    }

    if (shopState.cartData.note === debouncedValue) {
      return;
    }

    shopDispatch({
      type: "SET_IS_CART_UPDATING",
      payload: true
    });
    (0,_api_jsx__WEBPACK_IMPORTED_MODULE_3__.updateCartNote)(debouncedValue, shopState, cartDispatch, inputElement, shopDispatch);
  }, [debouncedValue]);
  useEffect(function () {
    if (shopState.cartData.note) {
      setNoteValue(shopState.cartData.note);
    }
  }, [shopState.cartData.note]);

  function onChange(e) {
    if (shopState.isCartUpdating) {
      return;
    }

    setNoteValue(e.target.value);
  }

  var CartNotesCSS = _ref2;
  var CartTextareaCSS = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
    className: "wps-cart-notes",
    css: CartNotesCSS
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
    htmlFor: "wps-input-notes"
  }, cartState.settings.notesLabel), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
    css: CartTextareaCSS,
    placeholder: cartState.settings.notesPlaceholder,
    id: "wps-input-notes",
    className: "wps-input wps-input-textarea",
    value: noteValue,
    onChange: onChange,
    ref: inputElement,
    disabled: shopState.isCartUpdating
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CartNote);

/***/ })

}]);
//# sourceMappingURL=CartNote-public.shopwp-components.js.map