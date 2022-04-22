"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["ProductOptionDropdown-public"],{

/***/ "./src/components/products/product/buy-button/option/dropdown-content/index.jsx":
/*!**************************************************************************************!*\
  !*** ./src/components/products/product/buy-button/option/dropdown-content/index.jsx ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_state/context */ "./src/components/products/product/buy-button/option/_state/context.js");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../value */ "./src/components/products/product/buy-button/option/value/index.jsx");
/* harmony import */ var _dropdown_value__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dropdown-value */ "./src/components/products/product/buy-button/option/dropdown-value/index.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */







var _ref =  false ? 0 : {
  name: "1h5p2bf-modalCSS",
  styles: "&&{list-style:none;padding:0;margin:0;background-color:#fff;width:100%;max-width:100%;border-bottom-left-radius:5px;border-bottom-right-radius:5px;overflow-x:hidden;overflow-y:scroll;max-height:400px;};label:modalCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vb3B0aW9uL2Ryb3Bkb3duLWNvbnRlbnQvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCc0IiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvYnV5LWJ1dHRvbi9vcHRpb24vZHJvcGRvd24tY29udGVudC9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IFByb2R1Y3RPcHRpb25Db250ZXh0IH0gZnJvbSBcIi4uL19zdGF0ZS9jb250ZXh0XCJcbmltcG9ydCB7IHVzZU9uQ2xpY2tPdXRzaWRlIH0gZnJvbSBcIkhvb2tzXCJcbmltcG9ydCBQcm9kdWN0T3B0aW9uVmFsdWUgZnJvbSBcIi4uL3ZhbHVlXCJcbmltcG9ydCBQcm9kdWN0VmFyaWFudERyb3Bkb3duVmFsdWUgZnJvbSBcIi4uL2Ryb3Bkb3duLXZhbHVlXCJcblxuZnVuY3Rpb24gUHJvZHVjdFZhcmlhbnRzRHJvcGRvd25Db250ZW50KHtcbiAgYXZhaWxhYmxlVmFyaWFudHMsXG4gIGRyb3Bkb3duRWxlbWVudCxcbiAgaXNEcm9wZG93bk9wZW4sXG4gIHNlbGVjdGVkT3B0aW9ucyxcbiAgb3B0aW9uLFxuICBhbGxTZWxlY3RhYmxlT3B0aW9ucyxcbn0pIHtcbiAgY29uc3QgeyB1c2VDb250ZXh0IH0gPSB3cC5lbGVtZW50XG4gIGNvbnN0IFtwcm9kdWN0T3B0aW9uU3RhdGUsIHByb2R1Y3RPcHRpb25EaXNwYXRjaF0gPVxuICAgIHVzZUNvbnRleHQoUHJvZHVjdE9wdGlvbkNvbnRleHQpXG5cbiAgdXNlT25DbGlja091dHNpZGUoXG4gICAgZHJvcGRvd25FbGVtZW50LFxuICAgICgpID0+IHtcbiAgICAgIHByb2R1Y3RPcHRpb25EaXNwYXRjaCh7IHR5cGU6IFwiVE9HR0xFX0RST1BET1dOXCIsIHBheWxvYWQ6IGZhbHNlIH0pXG4gICAgfSxcbiAgICBpc0Ryb3Bkb3duT3BlblxuICApXG5cbiAgY29uc3QgbW9kYWxDU1MgPSBjc3NgXG4gICAgJiYge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgfVxuICBgXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cIndwcy1tb2RhbCB3cHMtdmFyaWFudHNcIiBjc3M9e21vZGFsQ1NTfT5cbiAgICAgIHtvcHRpb24udmFsdWVzLm1hcCgob3B0aW9uT2JqKSA9PiAoXG4gICAgICAgIDxQcm9kdWN0T3B0aW9uVmFsdWVcbiAgICAgICAgICBrZXk9e29wdGlvbk9iai5uYW1lICsgb3B0aW9uT2JqLnZhbHVlfVxuICAgICAgICAgIG9wdGlvbk9iaj17b3B0aW9uT2JqfVxuICAgICAgICAgIGF2YWlsYWJsZVZhcmlhbnRzPXthdmFpbGFibGVWYXJpYW50c31cbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbnM9e3NlbGVjdGVkT3B0aW9uc31cbiAgICAgICAgICB2YXJpYW50cz17cHJvZHVjdE9wdGlvblN0YXRlLnZhcmlhbnRzfVxuICAgICAgICAgIGFsbFNlbGVjdGFibGVPcHRpb25zPXthbGxTZWxlY3RhYmxlT3B0aW9uc31cbiAgICAgICAgPlxuICAgICAgICAgIDxQcm9kdWN0VmFyaWFudERyb3Bkb3duVmFsdWUgLz5cbiAgICAgICAgPC9Qcm9kdWN0T3B0aW9uVmFsdWU+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RWYXJpYW50c0Ryb3Bkb3duQ29udGVudFxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function ProductVariantsDropdownContent(_ref2) {
  var availableVariants = _ref2.availableVariants,
      dropdownElement = _ref2.dropdownElement,
      isDropdownOpen = _ref2.isDropdownOpen,
      selectedOptions = _ref2.selectedOptions,
      option = _ref2.option,
      allSelectableOptions = _ref2.allSelectableOptions;
  var useContext = __webpack_provided_wp_dot_element.useContext;

  var _useContext = useContext(_state_context__WEBPACK_IMPORTED_MODULE_1__.ProductOptionContext),
      _useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext, 2),
      productOptionState = _useContext2[0],
      productOptionDispatch = _useContext2[1];

  (0,Hooks__WEBPACK_IMPORTED_MODULE_2__.useOnClickOutside)(dropdownElement, function () {
    productOptionDispatch({
      type: "TOGGLE_DROPDOWN",
      payload: false
    });
  }, isDropdownOpen);
  var modalCSS = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
    className: "wps-modal wps-variants",
    css: modalCSS
  }, option.values.map(function (optionObj) {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_value__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: optionObj.name + optionObj.value,
      optionObj: optionObj,
      availableVariants: availableVariants,
      selectedOptions: selectedOptions,
      variants: productOptionState.variants,
      allSelectableOptions: allSelectableOptions
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_dropdown_value__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductVariantsDropdownContent);

/***/ }),

/***/ "./src/components/products/product/buy-button/option/dropdown-value/index.jsx":
/*!************************************************************************************!*\
  !*** ./src/components/products/product/buy-button/option/dropdown-value/index.jsx ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */



var _ref =  false ? 0 : {
  name: "1pbp7de-ProductVariantDropdownValueCSS",
  styles: "margin:0;padding:12px;border-bottom:1px solid #eee;font-size:15px;text-align:center;color:black;list-style:none;line-height:1.4;&:last-child{border-bottom:none;}&:hover{background-color:#f3f3f3;cursor:pointer;};label:ProductVariantDropdownValueCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vb3B0aW9uL2Ryb3Bkb3duLXZhbHVlL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTNEMiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvYnV5LWJ1dHRvbi9vcHRpb24vZHJvcGRvd24tdmFsdWUvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5cbmZ1bmN0aW9uIFByb2R1Y3RWYXJpYW50RHJvcGRvd25WYWx1ZSh7XG4gIG9uU2VsZWN0aW9uLFxuICBvcHRpb25PYmosXG4gIGlzQXZhaWxhYmxlVG9TZWxlY3QsXG4gIGlzQXZhaWxhYmxlSW5TaG9waWZ5LFxufSkge1xuICBjb25zdCBQcm9kdWN0VmFyaWFudERyb3Bkb3duVmFsdWVDU1MgPSBjc3NgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgYFxuXG4gIHJldHVybiBpc0F2YWlsYWJsZVRvU2VsZWN0ID8gKFxuICAgIDxsaVxuICAgICAgaXRlbVByb3A9XCJjYXRlZ29yeVwiXG4gICAgICBjbGFzc05hbWU9XCJ3cHMtcHJvZHVjdC12YXJpYW50IHdwcy1wcm9kdWN0LXN0eWxlIHdwcy1tb2RhbC1jbG9zZS10cmlnZ2VyXCJcbiAgICAgIG9uQ2xpY2s9e29uU2VsZWN0aW9ufVxuICAgICAgY3NzPXtQcm9kdWN0VmFyaWFudERyb3Bkb3duVmFsdWVDU1N9XG4gICAgICBkYXRhLWlzLWF2YWlsYWJsZT17aXNBdmFpbGFibGVUb1NlbGVjdH1cbiAgICAgIGRhdGEtaXMtYXZhaWxhYmxlLWluLXNob3BpZnk9e2lzQXZhaWxhYmxlSW5TaG9waWZ5fVxuICAgID5cbiAgICAgIHt3cC5ob29rcy5hcHBseUZpbHRlcnMoXCJwcm9kdWN0LnZhcmlhbnRWYWx1ZVwiLCBvcHRpb25PYmoudmFsdWUpfVxuICAgIDwvbGk+XG4gICkgOiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RWYXJpYW50RHJvcGRvd25WYWx1ZVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function ProductVariantDropdownValue(_ref2) {
  var onSelection = _ref2.onSelection,
      optionObj = _ref2.optionObj,
      isAvailableToSelect = _ref2.isAvailableToSelect,
      isAvailableInShopify = _ref2.isAvailableInShopify;
  var ProductVariantDropdownValueCSS = _ref;
  return isAvailableToSelect ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
    itemProp: "category",
    className: "wps-product-variant wps-product-style wps-modal-close-trigger",
    onClick: onSelection,
    css: ProductVariantDropdownValueCSS,
    "data-is-available": isAvailableToSelect,
    "data-is-available-in-shopify": isAvailableInShopify
  }, __webpack_provided_wp_dot_hooks.applyFilters("product.variantValue", optionObj.value)) : null;
}

/* harmony default export */ __webpack_exports__["default"] = (ProductVariantDropdownValue);

/***/ }),

/***/ "./src/components/products/product/buy-button/option/dropdown/index.jsx":
/*!******************************************************************************!*\
  !*** ./src/components/products/product/buy-button/option/dropdown/index.jsx ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_state/context */ "./src/components/products/product/buy-button/option/_state/context.js");
/* harmony import */ var Common_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/css */ "./src/common/css/index.jsx");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "./node_modules/tippy.js/dist/tippy.css");
/* harmony import */ var tippy_js_animations_shift_away_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tippy.js/animations/shift-away.css */ "./node_modules/tippy.js/animations/shift-away.css");
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tippyjs/react */ "./node_modules/@tippyjs/react/dist/tippy-react.esm.js");
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../trigger */ "./src/components/products/product/buy-button/option/trigger/index.jsx");
/* harmony import */ var _dropdown_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dropdown-content */ "./src/components/products/product/buy-button/option/dropdown-content/index.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");


/** @jsx jsx */










function ProductOptionDropdown(_ref) {
  var availableVariants = _ref.availableVariants,
      selectedOptions = _ref.selectedOptions,
      missingSelections = _ref.missingSelections,
      settings = _ref.settings,
      allSelectableOptions = _ref.allSelectableOptions;
  var useContext = __webpack_provided_wp_dot_element.useContext;

  var _useContext = useContext(_state_context__WEBPACK_IMPORTED_MODULE_1__.ProductOptionContext),
      _useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext, 1),
      productOptionState = _useContext2[0];

  var ProductOptionDropdownCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.css)("position:relative;text-align:center;margin:0 0 10px 0;padding:0;width:100%;[data-tippy-root]{width:100%!important;max-width:100%;*:focus{outline:none;}.tippy-box{border-bottom-left-radius:5px;border-bottom-right-radius:5px;border-top-left-radius:0;border-top-right-radius:0;}}.tippy-box{box-shadow:0 28px 30px rgba(0, 0, 0, 0.11);padding:0;max-width:100%!important;margin:0 auto;margin-top:-2px;background:white;border:1px solid #313131;left:0;}.tippy-content{padding:0;}span[aria-expanded=\"true\"]{display:block;}&[data-wps-is-selected=\"false\"] .wps-product-variant[data-wps-is-selectable=\"false\"]{display:none;}[aria-expanded=\"true\"] .wps-modal-trigger{border-bottom-right-radius:0;border-bottom-left-radius:0;}[aria-expanded=\"true\"]+[data-tippy-root] .tippy-box[data-animation]{opacity:1!important;}", (0,Common_css__WEBPACK_IMPORTED_MODULE_2__.mq)("medium"), "{width:100%;flex:1;max-width:100%;padding-right:0;};label:ProductOptionDropdownCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vb3B0aW9uL2Ryb3Bkb3duL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQnNDIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vb3B0aW9uL2Ryb3Bkb3duL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHsgUHJvZHVjdE9wdGlvbkNvbnRleHQgfSBmcm9tIFwiLi4vX3N0YXRlL2NvbnRleHRcIlxuaW1wb3J0IHsgbXEgfSBmcm9tIFwiQ29tbW9uL2Nzc1wiXG5cbmltcG9ydCBcInRpcHB5LmpzL2Rpc3QvdGlwcHkuY3NzXCJcbmltcG9ydCBcInRpcHB5LmpzL2FuaW1hdGlvbnMvc2hpZnQtYXdheS5jc3NcIlxuaW1wb3J0IFRpcHB5IGZyb20gXCJAdGlwcHlqcy9yZWFjdFwiXG5cbmltcG9ydCBQcm9kdWN0T3B0aW9uVHJpZ2dlciBmcm9tIFwiLi4vdHJpZ2dlclwiXG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRzRHJvcGRvd25Db250ZW50IGZyb20gXCIuLi9kcm9wZG93bi1jb250ZW50XCJcblxuZnVuY3Rpb24gUHJvZHVjdE9wdGlvbkRyb3Bkb3duKHtcbiAgYXZhaWxhYmxlVmFyaWFudHMsXG4gIHNlbGVjdGVkT3B0aW9ucyxcbiAgbWlzc2luZ1NlbGVjdGlvbnMsXG4gIHNldHRpbmdzLFxuICBhbGxTZWxlY3RhYmxlT3B0aW9ucyxcbn0pIHtcbiAgY29uc3QgeyB1c2VDb250ZXh0IH0gPSB3cC5lbGVtZW50XG4gIGNvbnN0IFtwcm9kdWN0T3B0aW9uU3RhdGVdID0gdXNlQ29udGV4dChQcm9kdWN0T3B0aW9uQ29udGV4dClcblxuICBjb25zdCBQcm9kdWN0T3B0aW9uRHJvcGRvd25DU1MgPSBjc3NgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIFtkYXRhLXRpcHB5LXJvb3RdIHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICAgICo6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuXG4gICAgICAudGlwcHktYm94IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGlwcHktYm94IHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMjhweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMSk7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMTMxMzE7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC50aXBweS1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgc3BhblthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAmW2RhdGEtd3BzLWlzLXNlbGVjdGVkPVwiZmFsc2VcIl1cbiAgICAgIC53cHMtcHJvZHVjdC12YXJpYW50W2RhdGEtd3BzLWlzLXNlbGVjdGFibGU9XCJmYWxzZVwiXSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIFthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSAud3BzLW1vZGFsLXRyaWdnZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgIH1cblxuICAgIFthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSArIFtkYXRhLXRpcHB5LXJvb3RdIC50aXBweS1ib3hbZGF0YS1hbmltYXRpb25dIHtcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAke21xKFwibWVkaXVtXCIpfSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cHMtYnRuLWRyb3Bkb3duLXdyYXBwZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwid3BzLWJ0bi1kcm9wZG93blwiXG4gICAgICAgIGNzcz17UHJvZHVjdE9wdGlvbkRyb3Bkb3duQ1NTfVxuICAgICAgICBkYXRhLXdwcy1pcy1zZWxlY3RlZD17cHJvZHVjdE9wdGlvblN0YXRlLmlzT3B0aW9uU2VsZWN0ZWR9XG4gICAgICAgIHJlZj17cHJvZHVjdE9wdGlvblN0YXRlLmRyb3Bkb3duRWxlbWVudH1cbiAgICAgID5cbiAgICAgICAgPFRpcHB5XG4gICAgICAgICAgdmlzaWJsZT17cHJvZHVjdE9wdGlvblN0YXRlLmlzRHJvcGRvd25PcGVufVxuICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgYWxsb3dIVE1MPXt0cnVlfVxuICAgICAgICAgIGFwcGVuZFRvPVwicGFyZW50XCJcbiAgICAgICAgICBhcnJvdz17ZmFsc2V9XG4gICAgICAgICAgYW5pbWF0aW9uPVwic2hpZnQtYXdheVwiXG4gICAgICAgICAgdGhlbWU9XCJsaWdodFwiXG4gICAgICAgICAgaW50ZXJhY3RpdmU9e3RydWV9XG4gICAgICAgICAgaW5lcnRpYT17dHJ1ZX1cbiAgICAgICAgICBkZWxheT17WzAsIDBdfVxuICAgICAgICAgIG9mZnNldD17WzAsIDBdfVxuICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgPFByb2R1Y3RWYXJpYW50c0Ryb3Bkb3duQ29udGVudFxuICAgICAgICAgICAgICBkcm9wZG93bkVsZW1lbnQ9e3Byb2R1Y3RPcHRpb25TdGF0ZS5kcm9wZG93bkVsZW1lbnR9XG4gICAgICAgICAgICAgIGlzRHJvcGRvd25PcGVuPXtwcm9kdWN0T3B0aW9uU3RhdGUuaXNEcm9wZG93bk9wZW59XG4gICAgICAgICAgICAgIG9wdGlvbj17cHJvZHVjdE9wdGlvblN0YXRlLm9wdGlvbn1cbiAgICAgICAgICAgICAgYXZhaWxhYmxlVmFyaWFudHM9e2F2YWlsYWJsZVZhcmlhbnRzfVxuICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnM9e3NlbGVjdGVkT3B0aW9uc31cbiAgICAgICAgICAgICAgYWxsU2VsZWN0YWJsZU9wdGlvbnM9e2FsbFNlbGVjdGFibGVPcHRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxQcm9kdWN0T3B0aW9uVHJpZ2dlclxuICAgICAgICAgICAgICBtaXNzaW5nU2VsZWN0aW9ucz17bWlzc2luZ1NlbGVjdGlvbnN9XG4gICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucz17c2VsZWN0ZWRPcHRpb25zfVxuICAgICAgICAgICAgICBzZXR0aW5ncz17c2V0dGluZ3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9UaXBweT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RPcHRpb25Ecm9wZG93blxuIl19 */"));
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "wps-btn-dropdown-wrapper"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "wps-btn-dropdown",
    css: ProductOptionDropdownCSS,
    "data-wps-is-selected": productOptionState.isOptionSelected,
    ref: productOptionState.dropdownElement
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tippyjs_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
    visible: productOptionState.isDropdownOpen,
    placement: "bottom",
    allowHTML: true,
    appendTo: "parent",
    arrow: false,
    animation: "shift-away",
    theme: "light",
    interactive: true,
    inertia: true,
    delay: [0, 0],
    offset: [0, 0],
    content: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(_dropdown_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
      dropdownElement: productOptionState.dropdownElement,
      isDropdownOpen: productOptionState.isDropdownOpen,
      option: productOptionState.option,
      availableVariants: availableVariants,
      selectedOptions: selectedOptions,
      allSelectableOptions: allSelectableOptions
    })
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(_trigger__WEBPACK_IMPORTED_MODULE_5__["default"], {
    missingSelections: missingSelections,
    selectedOptions: selectedOptions,
    settings: settings
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductOptionDropdown);

/***/ }),

/***/ "./src/components/products/product/buy-button/option/trigger/index.jsx":
/*!*****************************************************************************!*\
  !*** ./src/components/products/product/buy-button/option/trigger/index.jsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Common_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/css */ "./src/common/css/index.jsx");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_state/context */ "./src/components/products/product/buy-button/option/_state/context.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__);
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");



var _templateObject;

/** @jsx jsx */







function TriggerIcon() {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 30 30",
    style: {
      maxWidth: "19px",
      position: "absolute",
      right: "16px",
      top: "calc(50% - 9px)"
    }
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
    fill: "#fff",
    d: "M15 17.8L3.2 6 .7 8.7 15 23 29.3 8.7 26.8 6z"
  }));
}

function ProductOptionTrigger(_ref) {
  var missingSelections = _ref.missingSelections,
      selectedOptions = _ref.selectedOptions,
      settings = _ref.settings;
  var _wp$element = wp.element,
      useEffect = __webpack_provided_wp_dot_element.useEffect,
      useContext = __webpack_provided_wp_dot_element.useContext;

  var _useContext = useContext(_state_context__WEBPACK_IMPORTED_MODULE_4__.ProductOptionContext),
      _useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useContext, 2),
      productOptionState = _useContext2[0],
      productOptionDispatch = _useContext2[1];

  var isFirstRender = (0,Hooks__WEBPACK_IMPORTED_MODULE_3__.useFirstRender)();

  function onClick() {
    __webpack_provided_wp_dot_hooks.doAction("on.variantDropdownToggle", productOptionState);
    productOptionDispatch({
      type: "TOGGLE_DROPDOWN",
      payload: !productOptionState.isDropdownOpen
    });
  }

  useEffect(function () {
    if (isFirstRender || !missingSelections) {
      return;
    }

    if (!productOptionState.isOptionSelected) {// console.log('Do missing selections animation here')
    }
  }, [missingSelections]);

  function getOptionName(selectedOption, option) {
    return selectedOption[option.name];
  }

  function getOptionValue() {
    return getOptionName(productOptionState.selectedOption, productOptionState.option);
  }

  function optionNameWithSelect() {
    return productOptionState.option.name + ": " + getOptionValue();
  }

  function displayOptionName() {
    return productOptionState.isOptionSelected && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(selectedOptions) ? optionNameWithSelect() : productOptionState.option.name;
  }

  var asdasd = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.keyframes)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t\t0%,\n\t\t100% {\n\t\t\ttransform: translateX(0);\n\t\t}\n\t\t10%,\n\t\t30%,\n\t\t50%,\n\t\t70% {\n\t\t\ttransform: translateX(-5px);\n\t\t}\n\t\t20%,\n\t\t40%,\n\t\t60% {\n\t\t\ttransform: translateX(5px);\n\t\t}\n\t\t80% {\n\t\t\ttransform: translateX(6px);\n\t\t}\n\t\t90% {\n\t\t\ttransform: translateX(-6px);\n\t\t}\n\n\n\t"])));
  var variantDropdownCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css)("&&{animation:", missingSelections && !productOptionState.isOptionSelected && !isFirstRender ? /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css)(asdasd, " 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;;label:variantDropdownCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vb3B0aW9uL3RyaWdnZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBHYSIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC9idXktYnV0dG9uL29wdGlvbi90cmlnZ2VyL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MsIGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgeyBidXR0b25DU1MsIEljb25DU1MgfSBmcm9tIFwiQ29tbW9uL2Nzc1wiXG5pbXBvcnQgeyB1c2VGaXJzdFJlbmRlciB9IGZyb20gXCJIb29rc1wiXG5pbXBvcnQgeyBQcm9kdWN0T3B0aW9uQ29udGV4dCB9IGZyb20gXCIuLi9fc3RhdGUvY29udGV4dFwiXG5pbXBvcnQgaXNFbXB0eSBmcm9tIFwibG9kYXNoL2lzRW1wdHlcIlxuXG5mdW5jdGlvbiBUcmlnZ2VySWNvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgbWF4V2lkdGg6IFwiMTlweFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICByaWdodDogXCIxNnB4XCIsXG4gICAgICAgIHRvcDogXCJjYWxjKDUwJSAtIDlweClcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTE1IDE3LjhMMy4yIDYgLjcgOC43IDE1IDIzIDI5LjMgOC43IDI2LjggNnpcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmZ1bmN0aW9uIFByb2R1Y3RPcHRpb25UcmlnZ2VyKHtcbiAgbWlzc2luZ1NlbGVjdGlvbnMsXG4gIHNlbGVjdGVkT3B0aW9ucyxcbiAgc2V0dGluZ3MsXG59KSB7XG4gIGNvbnN0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gPSB3cC5lbGVtZW50XG4gIGNvbnN0IFtwcm9kdWN0T3B0aW9uU3RhdGUsIHByb2R1Y3RPcHRpb25EaXNwYXRjaF0gPVxuICAgIHVzZUNvbnRleHQoUHJvZHVjdE9wdGlvbkNvbnRleHQpXG5cbiAgY29uc3QgaXNGaXJzdFJlbmRlciA9IHVzZUZpcnN0UmVuZGVyKClcblxuICBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgIHdwLmhvb2tzLmRvQWN0aW9uKFwib24udmFyaWFudERyb3Bkb3duVG9nZ2xlXCIsIHByb2R1Y3RPcHRpb25TdGF0ZSlcblxuICAgIHByb2R1Y3RPcHRpb25EaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcIlRPR0dMRV9EUk9QRE9XTlwiLFxuICAgICAgcGF5bG9hZDogIXByb2R1Y3RPcHRpb25TdGF0ZS5pc0Ryb3Bkb3duT3BlbixcbiAgICB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNGaXJzdFJlbmRlciB8fCAhbWlzc2luZ1NlbGVjdGlvbnMpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghcHJvZHVjdE9wdGlvblN0YXRlLmlzT3B0aW9uU2VsZWN0ZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEbyBtaXNzaW5nIHNlbGVjdGlvbnMgYW5pbWF0aW9uIGhlcmUnKVxuICAgIH1cbiAgfSwgW21pc3NpbmdTZWxlY3Rpb25zXSlcblxuICBmdW5jdGlvbiBnZXRPcHRpb25OYW1lKHNlbGVjdGVkT3B0aW9uLCBvcHRpb24pIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25bb3B0aW9uLm5hbWVdXG4gIH1cblxuICBmdW5jdGlvbiBnZXRPcHRpb25WYWx1ZSgpIHtcbiAgICByZXR1cm4gZ2V0T3B0aW9uTmFtZShcbiAgICAgIHByb2R1Y3RPcHRpb25TdGF0ZS5zZWxlY3RlZE9wdGlvbixcbiAgICAgIHByb2R1Y3RPcHRpb25TdGF0ZS5vcHRpb25cbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBvcHRpb25OYW1lV2l0aFNlbGVjdCgpIHtcbiAgICByZXR1cm4gcHJvZHVjdE9wdGlvblN0YXRlLm9wdGlvbi5uYW1lICsgXCI6IFwiICsgZ2V0T3B0aW9uVmFsdWUoKVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheU9wdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHByb2R1Y3RPcHRpb25TdGF0ZS5pc09wdGlvblNlbGVjdGVkICYmICFpc0VtcHR5KHNlbGVjdGVkT3B0aW9ucylcbiAgICAgID8gb3B0aW9uTmFtZVdpdGhTZWxlY3QoKVxuICAgICAgOiBwcm9kdWN0T3B0aW9uU3RhdGUub3B0aW9uLm5hbWVcbiAgfVxuXG4gIGNvbnN0IGFzZGFzZCA9IGtleWZyYW1lc2Bcblx0XHQwJSxcblx0XHQxMDAlIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0XHR9XG5cdFx0MTAlLFxuXHRcdDMwJSxcblx0XHQ1MCUsXG5cdFx0NzAlIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcblx0XHR9XG5cdFx0MjAlLFxuXHRcdDQwJSxcblx0XHQ2MCUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG5cdFx0fVxuXHRcdDgwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KTtcblx0XHR9XG5cdFx0OTAlIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KTtcblx0XHR9XG5cblxuXHRgXG5cbiAgY29uc3QgdmFyaWFudERyb3Bkb3duQ1NTID0gY3NzYFxuICAgICYmIHtcbiAgICAgIGFuaW1hdGlvbjogJHttaXNzaW5nU2VsZWN0aW9ucyAmJlxuICAgICAgIXByb2R1Y3RPcHRpb25TdGF0ZS5pc09wdGlvblNlbGVjdGVkICYmXG4gICAgICAhaXNGaXJzdFJlbmRlclxuICAgICAgICA/IGNzc2BcbiAgICAgICAgICAgICR7YXNkYXNkfSAwLjhzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMzAsIDAuNTE1LCAwLjk1NSkgYm90aFxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIm5vbmVcIn07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3NldHRpbmdzLnZhcmlhbnREcm9wZG93bkJ1dHRvbkNvbG9yXG4gICAgICAgID8gc2V0dGluZ3MudmFyaWFudERyb3Bkb3duQnV0dG9uQ29sb3JcbiAgICAgICAgOiBcImJsYWNrXCJ9O1xuICAgICAgY29sb3I6ICR7c2V0dGluZ3MudmFyaWFudERyb3Bkb3duVGV4dENvbG9yXG4gICAgICAgID8gc2V0dGluZ3MudmFyaWFudERyb3Bkb3duVGV4dENvbG9yXG4gICAgICAgIDogXCJ3aGl0ZVwifTtcbiAgICAgIGZvbnQtZmFtaWx5OiAke3NldHRpbmdzLnZhcmlhbnREcm9wZG93blR5cGVGb250RmFtaWx5XG4gICAgICAgID8gc2V0dGluZ3MudmFyaWFudERyb3Bkb3duVHlwZUZvbnRGYW1pbHlcbiAgICAgICAgOiBcImluaGVyaXRcIn07XG4gICAgICBmb250LXdlaWdodDogJHtzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlRm9udFdlaWdodFxuICAgICAgICA/IHNldHRpbmdzLnZhcmlhbnREcm9wZG93blR5cGVGb250V2VpZ2h0XG4gICAgICAgIDogXCJpbml0aWFsXCJ9O1xuICAgICAgZm9udC1zdHlsZTogJHtzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlRm9udFN0eWxlXG4gICAgICAgID8gc2V0dGluZ3MudmFyaWFudERyb3Bkb3duVHlwZUZvbnRTdHlsZVxuICAgICAgICA6IFwiaW5pdGlhbFwifTtcbiAgICAgIGZvbnQtc2l6ZTogJHtzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlRm9udFNpemVcbiAgICAgICAgPyBzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlRm9udFNpemVcbiAgICAgICAgOiBcImluaXRpYWxcIn07XG4gICAgICBsZXR0ZXItc3BhY2luZzogJHtzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlTGV0dGVyU3BhY2luZ1xuICAgICAgICA/IHNldHRpbmdzLnZhcmlhbnREcm9wZG93blR5cGVMZXR0ZXJTcGFjaW5nXG4gICAgICAgIDogXCJpbml0aWFsXCJ9O1xuICAgICAgbGluZS1oZWlnaHQ6ICR7c2V0dGluZ3MudmFyaWFudERyb3Bkb3duVHlwZUxpbmVIZWlnaHRcbiAgICAgICAgPyBzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlTGluZUhlaWdodFxuICAgICAgICA6IFwiaW5pdGlhbFwifTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogJHtzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlVGV4dERlY29yYXRpb25cbiAgICAgICAgPyBzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlVGV4dERlY29yYXRpb25cbiAgICAgICAgOiBcImluaXRpYWxcIn07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogJHtzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlVGV4dFRyYW5zZm9ybVxuICAgICAgICA/IHNldHRpbmdzLnZhcmlhbnREcm9wZG93blR5cGVUZXh0VHJhbnNmb3JtXG4gICAgICAgIDogXCJpbml0aWFsXCJ9O1xuICAgIH1cbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPVwid3BzLWJ0biB3cHMtaWNvbiB3cHMtaWNvbi1kcm9wZG93biB3cHMtbW9kYWwtdHJpZ2dlclwiXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgY3NzPXtbSWNvbkNTUywgYnV0dG9uQ1NTLCB2YXJpYW50RHJvcGRvd25DU1NdfVxuICAgICAgYXJpYS1sYWJlbD1cIlByb2R1Y3QgVmFyaWFudCBEcm9wZG93blwiXG4gICAgPlxuICAgICAge3dwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgICAgXCJwcm9kdWN0Lm9wdGlvbk5hbWVcIixcbiAgICAgICAgZGlzcGxheU9wdGlvbk5hbWUoKSxcbiAgICAgICAgcHJvZHVjdE9wdGlvblN0YXRlXG4gICAgICApfVxuICAgICAgPFRyaWdnZXJJY29uIC8+XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdE9wdGlvblRyaWdnZXJcbiJdfQ== */")) : "none", ";background-color:", settings.variantDropdownButtonColor ? settings.variantDropdownButtonColor : "black", ";color:", settings.variantDropdownTextColor ? settings.variantDropdownTextColor : "white", ";font-family:", settings.variantDropdownTypeFontFamily ? settings.variantDropdownTypeFontFamily : "inherit", ";font-weight:", settings.variantDropdownTypeFontWeight ? settings.variantDropdownTypeFontWeight : "initial", ";font-style:", settings.variantDropdownTypeFontStyle ? settings.variantDropdownTypeFontStyle : "initial", ";font-size:", settings.variantDropdownTypeFontSize ? settings.variantDropdownTypeFontSize : "initial", ";letter-spacing:", settings.variantDropdownTypeLetterSpacing ? settings.variantDropdownTypeLetterSpacing : "initial", ";line-height:", settings.variantDropdownTypeLineHeight ? settings.variantDropdownTypeLineHeight : "initial", ";text-decoration:", settings.variantDropdownTypeTextDecoration ? settings.variantDropdownTypeTextDecoration : "initial", ";text-transform:", settings.variantDropdownTypeTextTransform ? settings.variantDropdownTypeTextTransform : "initial", ";};label:variantDropdownCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vb3B0aW9uL3RyaWdnZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFHZ0MiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvYnV5LWJ1dHRvbi9vcHRpb24vdHJpZ2dlci9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzLCBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHsgYnV0dG9uQ1NTLCBJY29uQ1NTIH0gZnJvbSBcIkNvbW1vbi9jc3NcIlxuaW1wb3J0IHsgdXNlRmlyc3RSZW5kZXIgfSBmcm9tIFwiSG9va3NcIlxuaW1wb3J0IHsgUHJvZHVjdE9wdGlvbkNvbnRleHQgfSBmcm9tIFwiLi4vX3N0YXRlL2NvbnRleHRcIlxuaW1wb3J0IGlzRW1wdHkgZnJvbSBcImxvZGFzaC9pc0VtcHR5XCJcblxuZnVuY3Rpb24gVHJpZ2dlckljb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB2aWV3Qm94PVwiMCAwIDMwIDMwXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIG1heFdpZHRoOiBcIjE5cHhcIixcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgcmlnaHQ6IFwiMTZweFwiLFxuICAgICAgICB0b3A6IFwiY2FsYyg1MCUgLSA5cHgpXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0xNSAxNy44TDMuMiA2IC43IDguNyAxNSAyMyAyOS4zIDguNyAyNi44IDZ6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5mdW5jdGlvbiBQcm9kdWN0T3B0aW9uVHJpZ2dlcih7XG4gIG1pc3NpbmdTZWxlY3Rpb25zLFxuICBzZWxlY3RlZE9wdGlvbnMsXG4gIHNldHRpbmdzLFxufSkge1xuICBjb25zdCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9ID0gd3AuZWxlbWVudFxuICBjb25zdCBbcHJvZHVjdE9wdGlvblN0YXRlLCBwcm9kdWN0T3B0aW9uRGlzcGF0Y2hdID1cbiAgICB1c2VDb250ZXh0KFByb2R1Y3RPcHRpb25Db250ZXh0KVxuXG4gIGNvbnN0IGlzRmlyc3RSZW5kZXIgPSB1c2VGaXJzdFJlbmRlcigpXG5cbiAgZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICB3cC5ob29rcy5kb0FjdGlvbihcIm9uLnZhcmlhbnREcm9wZG93blRvZ2dsZVwiLCBwcm9kdWN0T3B0aW9uU3RhdGUpXG5cbiAgICBwcm9kdWN0T3B0aW9uRGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJUT0dHTEVfRFJPUERPV05cIixcbiAgICAgIHBheWxvYWQ6ICFwcm9kdWN0T3B0aW9uU3RhdGUuaXNEcm9wZG93bk9wZW4sXG4gICAgfSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzRmlyc3RSZW5kZXIgfHwgIW1pc3NpbmdTZWxlY3Rpb25zKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXByb2R1Y3RPcHRpb25TdGF0ZS5pc09wdGlvblNlbGVjdGVkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnRG8gbWlzc2luZyBzZWxlY3Rpb25zIGFuaW1hdGlvbiBoZXJlJylcbiAgICB9XG4gIH0sIFttaXNzaW5nU2VsZWN0aW9uc10pXG5cbiAgZnVuY3Rpb24gZ2V0T3B0aW9uTmFtZShzZWxlY3RlZE9wdGlvbiwgb3B0aW9uKSB7XG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uW29wdGlvbi5uYW1lXVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0T3B0aW9uVmFsdWUoKSB7XG4gICAgcmV0dXJuIGdldE9wdGlvbk5hbWUoXG4gICAgICBwcm9kdWN0T3B0aW9uU3RhdGUuc2VsZWN0ZWRPcHRpb24sXG4gICAgICBwcm9kdWN0T3B0aW9uU3RhdGUub3B0aW9uXG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gb3B0aW9uTmFtZVdpdGhTZWxlY3QoKSB7XG4gICAgcmV0dXJuIHByb2R1Y3RPcHRpb25TdGF0ZS5vcHRpb24ubmFtZSArIFwiOiBcIiArIGdldE9wdGlvblZhbHVlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlPcHRpb25OYW1lKCkge1xuICAgIHJldHVybiBwcm9kdWN0T3B0aW9uU3RhdGUuaXNPcHRpb25TZWxlY3RlZCAmJiAhaXNFbXB0eShzZWxlY3RlZE9wdGlvbnMpXG4gICAgICA/IG9wdGlvbk5hbWVXaXRoU2VsZWN0KClcbiAgICAgIDogcHJvZHVjdE9wdGlvblN0YXRlLm9wdGlvbi5uYW1lXG4gIH1cblxuICBjb25zdCBhc2Rhc2QgPSBrZXlmcmFtZXNgXG5cdFx0MCUsXG5cdFx0MTAwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG5cdFx0fVxuXHRcdDEwJSxcblx0XHQzMCUsXG5cdFx0NTAlLFxuXHRcdDcwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XG5cdFx0fVxuXHRcdDIwJSxcblx0XHQ0MCUsXG5cdFx0NjAlIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuXHRcdH1cblx0XHQ4MCUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZweCk7XG5cdFx0fVxuXHRcdDkwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCk7XG5cdFx0fVxuXG5cblx0YFxuXG4gIGNvbnN0IHZhcmlhbnREcm9wZG93bkNTUyA9IGNzc2BcbiAgICAmJiB7XG4gICAgICBhbmltYXRpb246ICR7bWlzc2luZ1NlbGVjdGlvbnMgJiZcbiAgICAgICFwcm9kdWN0T3B0aW9uU3RhdGUuaXNPcHRpb25TZWxlY3RlZCAmJlxuICAgICAgIWlzRmlyc3RSZW5kZXJcbiAgICAgICAgPyBjc3NgXG4gICAgICAgICAgICAke2FzZGFzZH0gMC44cyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMwLCAwLjUxNSwgMC45NTUpIGJvdGhcbiAgICAgICAgICBgXG4gICAgICAgIDogXCJub25lXCJ9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzZXR0aW5ncy52YXJpYW50RHJvcGRvd25CdXR0b25Db2xvclxuICAgICAgICA/IHNldHRpbmdzLnZhcmlhbnREcm9wZG93bkJ1dHRvbkNvbG9yXG4gICAgICAgIDogXCJibGFja1wifTtcbiAgICAgIGNvbG9yOiAke3NldHRpbmdzLnZhcmlhbnREcm9wZG93blRleHRDb2xvclxuICAgICAgICA/IHNldHRpbmdzLnZhcmlhbnREcm9wZG93blRleHRDb2xvclxuICAgICAgICA6IFwid2hpdGVcIn07XG4gICAgICBmb250LWZhbWlseTogJHtzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlRm9udEZhbWlseVxuICAgICAgICA/IHNldHRpbmdzLnZhcmlhbnREcm9wZG93blR5cGVGb250RmFtaWx5XG4gICAgICAgIDogXCJpbmhlcml0XCJ9O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7c2V0dGluZ3MudmFyaWFudERyb3Bkb3duVHlwZUZvbnRXZWlnaHRcbiAgICAgICAgPyBzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlRm9udFdlaWdodFxuICAgICAgICA6IFwiaW5pdGlhbFwifTtcbiAgICAgIGZvbnQtc3R5bGU6ICR7c2V0dGluZ3MudmFyaWFudERyb3Bkb3duVHlwZUZvbnRTdHlsZVxuICAgICAgICA/IHNldHRpbmdzLnZhcmlhbnREcm9wZG93blR5cGVGb250U3R5bGVcbiAgICAgICAgOiBcImluaXRpYWxcIn07XG4gICAgICBmb250LXNpemU6ICR7c2V0dGluZ3MudmFyaWFudERyb3Bkb3duVHlwZUZvbnRTaXplXG4gICAgICAgID8gc2V0dGluZ3MudmFyaWFudERyb3Bkb3duVHlwZUZvbnRTaXplXG4gICAgICAgIDogXCJpbml0aWFsXCJ9O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6ICR7c2V0dGluZ3MudmFyaWFudERyb3Bkb3duVHlwZUxldHRlclNwYWNpbmdcbiAgICAgICAgPyBzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlTGV0dGVyU3BhY2luZ1xuICAgICAgICA6IFwiaW5pdGlhbFwifTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAke3NldHRpbmdzLnZhcmlhbnREcm9wZG93blR5cGVMaW5lSGVpZ2h0XG4gICAgICAgID8gc2V0dGluZ3MudmFyaWFudERyb3Bkb3duVHlwZUxpbmVIZWlnaHRcbiAgICAgICAgOiBcImluaXRpYWxcIn07XG4gICAgICB0ZXh0LWRlY29yYXRpb246ICR7c2V0dGluZ3MudmFyaWFudERyb3Bkb3duVHlwZVRleHREZWNvcmF0aW9uXG4gICAgICAgID8gc2V0dGluZ3MudmFyaWFudERyb3Bkb3duVHlwZVRleHREZWNvcmF0aW9uXG4gICAgICAgIDogXCJpbml0aWFsXCJ9O1xuICAgICAgdGV4dC10cmFuc2Zvcm06ICR7c2V0dGluZ3MudmFyaWFudERyb3Bkb3duVHlwZVRleHRUcmFuc2Zvcm1cbiAgICAgICAgPyBzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlVGV4dFRyYW5zZm9ybVxuICAgICAgICA6IFwiaW5pdGlhbFwifTtcbiAgICB9XG4gIGBcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cIndwcy1idG4gd3BzLWljb24gd3BzLWljb24tZHJvcGRvd24gd3BzLW1vZGFsLXRyaWdnZXJcIlxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIGNzcz17W0ljb25DU1MsIGJ1dHRvbkNTUywgdmFyaWFudERyb3Bkb3duQ1NTXX1cbiAgICAgIGFyaWEtbGFiZWw9XCJQcm9kdWN0IFZhcmlhbnQgRHJvcGRvd25cIlxuICAgID5cbiAgICAgIHt3cC5ob29rcy5hcHBseUZpbHRlcnMoXG4gICAgICAgIFwicHJvZHVjdC5vcHRpb25OYW1lXCIsXG4gICAgICAgIGRpc3BsYXlPcHRpb25OYW1lKCksXG4gICAgICAgIHByb2R1Y3RPcHRpb25TdGF0ZVxuICAgICAgKX1cbiAgICAgIDxUcmlnZ2VySWNvbiAvPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RPcHRpb25UcmlnZ2VyXG4iXX0= */"));
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
    className: "wps-btn wps-icon wps-icon-dropdown wps-modal-trigger",
    onClick: onClick,
    css: [Common_css__WEBPACK_IMPORTED_MODULE_2__.IconCSS, Common_css__WEBPACK_IMPORTED_MODULE_2__.buttonCSS, variantDropdownCSS, ";label:ProductOptionTrigger;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vb3B0aW9uL3RyaWdnZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1KTSIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC9idXktYnV0dG9uL29wdGlvbi90cmlnZ2VyL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MsIGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgeyBidXR0b25DU1MsIEljb25DU1MgfSBmcm9tIFwiQ29tbW9uL2Nzc1wiXG5pbXBvcnQgeyB1c2VGaXJzdFJlbmRlciB9IGZyb20gXCJIb29rc1wiXG5pbXBvcnQgeyBQcm9kdWN0T3B0aW9uQ29udGV4dCB9IGZyb20gXCIuLi9fc3RhdGUvY29udGV4dFwiXG5pbXBvcnQgaXNFbXB0eSBmcm9tIFwibG9kYXNoL2lzRW1wdHlcIlxuXG5mdW5jdGlvbiBUcmlnZ2VySWNvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgbWF4V2lkdGg6IFwiMTlweFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICByaWdodDogXCIxNnB4XCIsXG4gICAgICAgIHRvcDogXCJjYWxjKDUwJSAtIDlweClcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTE1IDE3LjhMMy4yIDYgLjcgOC43IDE1IDIzIDI5LjMgOC43IDI2LjggNnpcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmZ1bmN0aW9uIFByb2R1Y3RPcHRpb25UcmlnZ2VyKHtcbiAgbWlzc2luZ1NlbGVjdGlvbnMsXG4gIHNlbGVjdGVkT3B0aW9ucyxcbiAgc2V0dGluZ3MsXG59KSB7XG4gIGNvbnN0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gPSB3cC5lbGVtZW50XG4gIGNvbnN0IFtwcm9kdWN0T3B0aW9uU3RhdGUsIHByb2R1Y3RPcHRpb25EaXNwYXRjaF0gPVxuICAgIHVzZUNvbnRleHQoUHJvZHVjdE9wdGlvbkNvbnRleHQpXG5cbiAgY29uc3QgaXNGaXJzdFJlbmRlciA9IHVzZUZpcnN0UmVuZGVyKClcblxuICBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgIHdwLmhvb2tzLmRvQWN0aW9uKFwib24udmFyaWFudERyb3Bkb3duVG9nZ2xlXCIsIHByb2R1Y3RPcHRpb25TdGF0ZSlcblxuICAgIHByb2R1Y3RPcHRpb25EaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcIlRPR0dMRV9EUk9QRE9XTlwiLFxuICAgICAgcGF5bG9hZDogIXByb2R1Y3RPcHRpb25TdGF0ZS5pc0Ryb3Bkb3duT3BlbixcbiAgICB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNGaXJzdFJlbmRlciB8fCAhbWlzc2luZ1NlbGVjdGlvbnMpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghcHJvZHVjdE9wdGlvblN0YXRlLmlzT3B0aW9uU2VsZWN0ZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdEbyBtaXNzaW5nIHNlbGVjdGlvbnMgYW5pbWF0aW9uIGhlcmUnKVxuICAgIH1cbiAgfSwgW21pc3NpbmdTZWxlY3Rpb25zXSlcblxuICBmdW5jdGlvbiBnZXRPcHRpb25OYW1lKHNlbGVjdGVkT3B0aW9uLCBvcHRpb24pIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25bb3B0aW9uLm5hbWVdXG4gIH1cblxuICBmdW5jdGlvbiBnZXRPcHRpb25WYWx1ZSgpIHtcbiAgICByZXR1cm4gZ2V0T3B0aW9uTmFtZShcbiAgICAgIHByb2R1Y3RPcHRpb25TdGF0ZS5zZWxlY3RlZE9wdGlvbixcbiAgICAgIHByb2R1Y3RPcHRpb25TdGF0ZS5vcHRpb25cbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBvcHRpb25OYW1lV2l0aFNlbGVjdCgpIHtcbiAgICByZXR1cm4gcHJvZHVjdE9wdGlvblN0YXRlLm9wdGlvbi5uYW1lICsgXCI6IFwiICsgZ2V0T3B0aW9uVmFsdWUoKVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheU9wdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHByb2R1Y3RPcHRpb25TdGF0ZS5pc09wdGlvblNlbGVjdGVkICYmICFpc0VtcHR5KHNlbGVjdGVkT3B0aW9ucylcbiAgICAgID8gb3B0aW9uTmFtZVdpdGhTZWxlY3QoKVxuICAgICAgOiBwcm9kdWN0T3B0aW9uU3RhdGUub3B0aW9uLm5hbWVcbiAgfVxuXG4gIGNvbnN0IGFzZGFzZCA9IGtleWZyYW1lc2Bcblx0XHQwJSxcblx0XHQxMDAlIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0XHR9XG5cdFx0MTAlLFxuXHRcdDMwJSxcblx0XHQ1MCUsXG5cdFx0NzAlIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcblx0XHR9XG5cdFx0MjAlLFxuXHRcdDQwJSxcblx0XHQ2MCUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG5cdFx0fVxuXHRcdDgwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KTtcblx0XHR9XG5cdFx0OTAlIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KTtcblx0XHR9XG5cblxuXHRgXG5cbiAgY29uc3QgdmFyaWFudERyb3Bkb3duQ1NTID0gY3NzYFxuICAgICYmIHtcbiAgICAgIGFuaW1hdGlvbjogJHttaXNzaW5nU2VsZWN0aW9ucyAmJlxuICAgICAgIXByb2R1Y3RPcHRpb25TdGF0ZS5pc09wdGlvblNlbGVjdGVkICYmXG4gICAgICAhaXNGaXJzdFJlbmRlclxuICAgICAgICA/IGNzc2BcbiAgICAgICAgICAgICR7YXNkYXNkfSAwLjhzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMzAsIDAuNTE1LCAwLjk1NSkgYm90aFxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIm5vbmVcIn07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3NldHRpbmdzLnZhcmlhbnREcm9wZG93bkJ1dHRvbkNvbG9yXG4gICAgICAgID8gc2V0dGluZ3MudmFyaWFudERyb3Bkb3duQnV0dG9uQ29sb3JcbiAgICAgICAgOiBcImJsYWNrXCJ9O1xuICAgICAgY29sb3I6ICR7c2V0dGluZ3MudmFyaWFudERyb3Bkb3duVGV4dENvbG9yXG4gICAgICAgID8gc2V0dGluZ3MudmFyaWFudERyb3Bkb3duVGV4dENvbG9yXG4gICAgICAgIDogXCJ3aGl0ZVwifTtcbiAgICAgIGZvbnQtZmFtaWx5OiAke3NldHRpbmdzLnZhcmlhbnREcm9wZG93blR5cGVGb250RmFtaWx5XG4gICAgICAgID8gc2V0dGluZ3MudmFyaWFudERyb3Bkb3duVHlwZUZvbnRGYW1pbHlcbiAgICAgICAgOiBcImluaGVyaXRcIn07XG4gICAgICBmb250LXdlaWdodDogJHtzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlRm9udFdlaWdodFxuICAgICAgICA/IHNldHRpbmdzLnZhcmlhbnREcm9wZG93blR5cGVGb250V2VpZ2h0XG4gICAgICAgIDogXCJpbml0aWFsXCJ9O1xuICAgICAgZm9udC1zdHlsZTogJHtzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlRm9udFN0eWxlXG4gICAgICAgID8gc2V0dGluZ3MudmFyaWFudERyb3Bkb3duVHlwZUZvbnRTdHlsZVxuICAgICAgICA6IFwiaW5pdGlhbFwifTtcbiAgICAgIGZvbnQtc2l6ZTogJHtzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlRm9udFNpemVcbiAgICAgICAgPyBzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlRm9udFNpemVcbiAgICAgICAgOiBcImluaXRpYWxcIn07XG4gICAgICBsZXR0ZXItc3BhY2luZzogJHtzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlTGV0dGVyU3BhY2luZ1xuICAgICAgICA/IHNldHRpbmdzLnZhcmlhbnREcm9wZG93blR5cGVMZXR0ZXJTcGFjaW5nXG4gICAgICAgIDogXCJpbml0aWFsXCJ9O1xuICAgICAgbGluZS1oZWlnaHQ6ICR7c2V0dGluZ3MudmFyaWFudERyb3Bkb3duVHlwZUxpbmVIZWlnaHRcbiAgICAgICAgPyBzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlTGluZUhlaWdodFxuICAgICAgICA6IFwiaW5pdGlhbFwifTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogJHtzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlVGV4dERlY29yYXRpb25cbiAgICAgICAgPyBzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlVGV4dERlY29yYXRpb25cbiAgICAgICAgOiBcImluaXRpYWxcIn07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogJHtzZXR0aW5ncy52YXJpYW50RHJvcGRvd25UeXBlVGV4dFRyYW5zZm9ybVxuICAgICAgICA/IHNldHRpbmdzLnZhcmlhbnREcm9wZG93blR5cGVUZXh0VHJhbnNmb3JtXG4gICAgICAgIDogXCJpbml0aWFsXCJ9O1xuICAgIH1cbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPVwid3BzLWJ0biB3cHMtaWNvbiB3cHMtaWNvbi1kcm9wZG93biB3cHMtbW9kYWwtdHJpZ2dlclwiXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgY3NzPXtbSWNvbkNTUywgYnV0dG9uQ1NTLCB2YXJpYW50RHJvcGRvd25DU1NdfVxuICAgICAgYXJpYS1sYWJlbD1cIlByb2R1Y3QgVmFyaWFudCBEcm9wZG93blwiXG4gICAgPlxuICAgICAge3dwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgICAgXCJwcm9kdWN0Lm9wdGlvbk5hbWVcIixcbiAgICAgICAgZGlzcGxheU9wdGlvbk5hbWUoKSxcbiAgICAgICAgcHJvZHVjdE9wdGlvblN0YXRlXG4gICAgICApfVxuICAgICAgPFRyaWdnZXJJY29uIC8+XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdE9wdGlvblRyaWdnZXJcbiJdfQ== */")],
    "aria-label": "Product Variant Dropdown"
  }, __webpack_provided_wp_dot_hooks.applyFilters("product.optionName", displayOptionName(), productOptionState), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(TriggerIcon, null));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductOptionTrigger);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/tippy.js/animations/shift-away.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/tippy.js/animations/shift-away.css ***!
  \***********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tippy-box[data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=top]{transform:translateY(10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=bottom]{transform:translateY(-10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=left]{transform:translateX(10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=right]{transform:translateX(-10px)}", "",{"version":3,"sources":["webpack://./node_modules/tippy.js/animations/shift-away.css"],"names":[],"mappings":"AAAA,yDAAyD,SAAS,CAAC,8EAA8E,0BAA0B,CAAC,iFAAiF,2BAA2B,CAAC,+EAA+E,0BAA0B,CAAC,gFAAgF,2BAA2B","sourcesContent":[".tippy-box[data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=top]{transform:translateY(10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=bottom]{transform:translateY(-10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=left]{transform:translateX(10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=right]{transform:translateX(-10px)}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/tippy.js/animations/shift-away.css":
/*!*********************************************************!*\
  !*** ./node_modules/tippy.js/animations/shift-away.css ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_shift_away_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./shift-away.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/tippy.js/animations/shift-away.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_shift_away_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_css_loader_dist_cjs_js_shift_away_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_shift_away_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_shift_away_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=ProductOptionDropdown-public.shopwp-components.js.map