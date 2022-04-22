"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["src_components_products_product_pricing_index_jsx"],{

/***/ "./src/components/products/product/pricing/index.jsx":
/*!***********************************************************!*\
  !*** ./src/components/products/product/pricing/index.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prices */ "./src/components/products/product/pricing/prices/index.jsx");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var _items_state_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../items/_state/hooks */ "./src/components/items/_state/hooks.jsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/products/product/_state/hooks.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");







function ProductPricing() {
  var itemsState = (0,_items_state_hooks__WEBPACK_IMPORTED_MODULE_3__.useItemsState)();
  var productState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useProductState)();
  return (0,Hooks__WEBPACK_IMPORTED_MODULE_1__.usePortal)( /*#__PURE__*/React.createElement(_prices__WEBPACK_IMPORTED_MODULE_0__.ProductPrices, {
    settings: itemsState.settings,
    payload: productState.payload
  }), (0,Utils__WEBPACK_IMPORTED_MODULE_2__.findPortalElement)(itemsState.settings.dropzoneProductPricing));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductPricing);

/***/ }),

/***/ "./src/components/products/product/pricing/price/index.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/products/product/pricing/price/index.jsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/last */ "./node_modules/lodash/last.js");
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/min */ "./node_modules/lodash/min.js");
/* harmony import */ var lodash_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/max */ "./node_modules/lodash/max.js");
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_max__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../range */ "./src/components/products/product/pricing/range/index.jsx");
/* harmony import */ var _single__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../single */ "./src/components/products/product/pricing/single/index.jsx");
/* harmony import */ var Common_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Common/animations */ "./src/common/animations/index.js");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");


/** @jsx jsx */










var _wp$element = wp.element,
    useEffect = __webpack_provided_wp_dot_element.useEffect,
    useRef = __webpack_provided_wp_dot_element.useRef,
    useState = __webpack_provided_wp_dot_element.useState;

function lastPrice(prices, type) {
  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(prices)) {
    return 0;
  }

  return lodash_last__WEBPACK_IMPORTED_MODULE_2___default()(prices[type]);
}

function firstRegPrice(prices) {
  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(prices)) {
    return 0;
  }

  return prices.regPrices[0];
}

function lastRegPrice(prices) {
  return lastPrice(prices, "regPrices");
}

function lastPriceCompareAt(prices) {
  return lastPrice(prices, "compareAtPrices");
}

function ProductPrice(_ref) {
  var compareAt = _ref.compareAt,
      prices = _ref.prices,
      showPriceRange = _ref.showPriceRange,
      selectedVariant = _ref.selectedVariant,
      settings = _ref.settings;
  var singlePriceElement = useRef();

  var _useState = useState(function () {
    return getFirstPrice();
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      regPrice = _useState2[0],
      setRegPrice = _useState2[1];

  var _useState3 = useState(function () {
    return (0,Utils__WEBPACK_IMPORTED_MODULE_8__.firstPriceCompareAt)(prices);
  }),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      comparePrice = _useState4[0],
      setComparePrice = _useState4[1];

  function isRegAndCompareSame() {
    if (!showPriceRange && compareAt) {
      var firstCompare = (0,Utils__WEBPACK_IMPORTED_MODULE_8__.firstPriceCompareAt)(prices);
      var firstReg = firstRegPrice(prices);

      if (firstCompare === firstReg) {
        return true;
      }
    }

    return false;
  }

  function isFirstAndLastSame() {
    if (getFirstPrice() === getLastPrice()) {
      return true;
    }

    return false;
  }

  function getFirstPrice() {
    if (compareAt) {
      if (showPriceRange) {
        return lodash_min__WEBPACK_IMPORTED_MODULE_3___default()(prices.compareAtPrices);
      } else {
        return (0,Utils__WEBPACK_IMPORTED_MODULE_8__.firstPriceCompareAt)(prices);
      }
    } else {
      if (showPriceRange) {
        return lodash_min__WEBPACK_IMPORTED_MODULE_3___default()(prices.regPrices);
      } else {
        return firstRegPrice(prices);
      }
    }
  }

  function getLastPrice() {
    if (compareAt) {
      if (showPriceRange) {
        return lodash_max__WEBPACK_IMPORTED_MODULE_4___default()(prices.compareAtPrices);
      } else {
        return lastPriceCompareAt(prices);
      }
    } else {
      if (showPriceRange) {
        return lodash_max__WEBPACK_IMPORTED_MODULE_4___default()(prices.regPrices);
      } else {
        return lastRegPrice(prices);
      }
    }
  }

  useEffect(function () {
    if (selectedVariant) {
      if (selectedVariant.node.compareAtPriceV2) {
        setComparePrice(selectedVariant.node.compareAtPriceV2.amount);
      } else {
        setComparePrice(false);
      }

      setRegPrice(selectedVariant.node.priceV2.amount);
    } else {
      setComparePrice((0,Utils__WEBPACK_IMPORTED_MODULE_8__.firstPriceCompareAt)(prices));
      setRegPrice(getFirstPrice());
    }
  }, [selectedVariant]);
  var priceWrapperCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.css)("line-height:1;margin:0 15px 0 0;display:block;font-family:", settings.pricingTypeFontFamily ? settings.pricingTypeFontFamily : settings.pricingFont ? settings.pricingFont : "inherit", ";font-weight:", settings.pricingTypeFontWeight ? settings.pricingTypeFontWeight : settings.pricingFontWeight ? settings.pricingFontWeight : "initial", ";font-size:", settings.pricingTypeFontSize ? settings.pricingTypeFontSize : "initial", ";letter-spacing:", settings.pricingTypeLetterSpacing ? settings.pricingTypeLetterSpacing : "initial", ";line-height:", settings.pricingTypeLineHeight ? settings.pricingTypeLineHeight : "initial", ";text-decoration:", settings.pricingTypeTextDecoration ? settings.pricingTypeTextDecoration : "initial", ";text-transform:", settings.pricingTypeTextTransform ? settings.pricingTypeTextTransform : "initial", ";;label:priceWrapperCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L3ByaWNpbmcvcHJpY2UvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVINkIiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvcHJpY2luZy9wcmljZS9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzLCBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuXG5pbXBvcnQgaXNFbXB0eSBmcm9tIFwibG9kYXNoL2lzRW1wdHlcIlxuaW1wb3J0IGxhc3QgZnJvbSBcImxvZGFzaC9sYXN0XCJcbmltcG9ydCBtaW4gZnJvbSBcImxvZGFzaC9taW5cIlxuaW1wb3J0IG1heCBmcm9tIFwibG9kYXNoL21heFwiXG5cbmltcG9ydCBQcm9kdWN0UHJpY2luZ1JhbmdlIGZyb20gXCIuLi9yYW5nZVwiXG5pbXBvcnQgUHJvZHVjdFByaWNlU2luZ2xlIGZyb20gXCIuLi9zaW5nbGVcIlxuaW1wb3J0IHsgU2xpZGVJbkZyb21SaWdodCB9IGZyb20gXCJDb21tb24vYW5pbWF0aW9uc1wiXG5pbXBvcnQgeyBmaXJzdFByaWNlQ29tcGFyZUF0IH0gZnJvbSBcIlV0aWxzXCJcblxuY29uc3QgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnRcblxuZnVuY3Rpb24gbGFzdFByaWNlKHByaWNlcywgdHlwZSkge1xuICBpZiAoaXNFbXB0eShwcmljZXMpKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICByZXR1cm4gbGFzdChwcmljZXNbdHlwZV0pXG59XG5cbmZ1bmN0aW9uIGZpcnN0UmVnUHJpY2UocHJpY2VzKSB7XG4gIGlmIChpc0VtcHR5KHByaWNlcykpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgcmV0dXJuIHByaWNlcy5yZWdQcmljZXNbMF1cbn1cblxuZnVuY3Rpb24gbGFzdFJlZ1ByaWNlKHByaWNlcykge1xuICByZXR1cm4gbGFzdFByaWNlKHByaWNlcywgXCJyZWdQcmljZXNcIilcbn1cblxuZnVuY3Rpb24gbGFzdFByaWNlQ29tcGFyZUF0KHByaWNlcykge1xuICByZXR1cm4gbGFzdFByaWNlKHByaWNlcywgXCJjb21wYXJlQXRQcmljZXNcIilcbn1cblxuZnVuY3Rpb24gUHJvZHVjdFByaWNlKHtcbiAgY29tcGFyZUF0LFxuICBwcmljZXMsXG4gIHNob3dQcmljZVJhbmdlLFxuICBzZWxlY3RlZFZhcmlhbnQsXG4gIHNldHRpbmdzLFxufSkge1xuICBjb25zdCBzaW5nbGVQcmljZUVsZW1lbnQgPSB1c2VSZWYoKVxuICBjb25zdCBbcmVnUHJpY2UsIHNldFJlZ1ByaWNlXSA9IHVzZVN0YXRlKCgpID0+IGdldEZpcnN0UHJpY2UoKSlcbiAgY29uc3QgW2NvbXBhcmVQcmljZSwgc2V0Q29tcGFyZVByaWNlXSA9IHVzZVN0YXRlKCgpID0+XG4gICAgZmlyc3RQcmljZUNvbXBhcmVBdChwcmljZXMpXG4gIClcblxuICBmdW5jdGlvbiBpc1JlZ0FuZENvbXBhcmVTYW1lKCkge1xuICAgIGlmICghc2hvd1ByaWNlUmFuZ2UgJiYgY29tcGFyZUF0KSB7XG4gICAgICB2YXIgZmlyc3RDb21wYXJlID0gZmlyc3RQcmljZUNvbXBhcmVBdChwcmljZXMpXG4gICAgICB2YXIgZmlyc3RSZWcgPSBmaXJzdFJlZ1ByaWNlKHByaWNlcylcblxuICAgICAgaWYgKGZpcnN0Q29tcGFyZSA9PT0gZmlyc3RSZWcpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRmlyc3RBbmRMYXN0U2FtZSgpIHtcbiAgICBpZiAoZ2V0Rmlyc3RQcmljZSgpID09PSBnZXRMYXN0UHJpY2UoKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZpcnN0UHJpY2UoKSB7XG4gICAgaWYgKGNvbXBhcmVBdCkge1xuICAgICAgaWYgKHNob3dQcmljZVJhbmdlKSB7XG4gICAgICAgIHJldHVybiBtaW4ocHJpY2VzLmNvbXBhcmVBdFByaWNlcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmaXJzdFByaWNlQ29tcGFyZUF0KHByaWNlcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNob3dQcmljZVJhbmdlKSB7XG4gICAgICAgIHJldHVybiBtaW4ocHJpY2VzLnJlZ1ByaWNlcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmaXJzdFJlZ1ByaWNlKHByaWNlcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMYXN0UHJpY2UoKSB7XG4gICAgaWYgKGNvbXBhcmVBdCkge1xuICAgICAgaWYgKHNob3dQcmljZVJhbmdlKSB7XG4gICAgICAgIHJldHVybiBtYXgocHJpY2VzLmNvbXBhcmVBdFByaWNlcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsYXN0UHJpY2VDb21wYXJlQXQocHJpY2VzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc2hvd1ByaWNlUmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIG1heChwcmljZXMucmVnUHJpY2VzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxhc3RSZWdQcmljZShwcmljZXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRWYXJpYW50KSB7XG4gICAgICBpZiAoc2VsZWN0ZWRWYXJpYW50Lm5vZGUuY29tcGFyZUF0UHJpY2VWMikge1xuICAgICAgICBzZXRDb21wYXJlUHJpY2Uoc2VsZWN0ZWRWYXJpYW50Lm5vZGUuY29tcGFyZUF0UHJpY2VWMi5hbW91bnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRDb21wYXJlUHJpY2UoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIHNldFJlZ1ByaWNlKHNlbGVjdGVkVmFyaWFudC5ub2RlLnByaWNlVjIuYW1vdW50KVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDb21wYXJlUHJpY2UoZmlyc3RQcmljZUNvbXBhcmVBdChwcmljZXMpKVxuICAgICAgc2V0UmVnUHJpY2UoZ2V0Rmlyc3RQcmljZSgpKVxuICAgIH1cbiAgfSwgW3NlbGVjdGVkVmFyaWFudF0pXG5cbiAgY29uc3QgcHJpY2VXcmFwcGVyQ1NTID0gY3NzYFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIGZvbnQtZmFtaWx5OiAke3NldHRpbmdzLnByaWNpbmdUeXBlRm9udEZhbWlseVxuICAgICAgPyBzZXR0aW5ncy5wcmljaW5nVHlwZUZvbnRGYW1pbHlcbiAgICAgIDogc2V0dGluZ3MucHJpY2luZ0ZvbnRcbiAgICAgID8gc2V0dGluZ3MucHJpY2luZ0ZvbnRcbiAgICAgIDogXCJpbmhlcml0XCJ9O1xuICAgIGZvbnQtd2VpZ2h0OiAke3NldHRpbmdzLnByaWNpbmdUeXBlRm9udFdlaWdodFxuICAgICAgPyBzZXR0aW5ncy5wcmljaW5nVHlwZUZvbnRXZWlnaHRcbiAgICAgIDogc2V0dGluZ3MucHJpY2luZ0ZvbnRXZWlnaHRcbiAgICAgID8gc2V0dGluZ3MucHJpY2luZ0ZvbnRXZWlnaHRcbiAgICAgIDogXCJpbml0aWFsXCJ9O1xuICAgIGZvbnQtc2l6ZTogJHtzZXR0aW5ncy5wcmljaW5nVHlwZUZvbnRTaXplXG4gICAgICA/IHNldHRpbmdzLnByaWNpbmdUeXBlRm9udFNpemVcbiAgICAgIDogXCJpbml0aWFsXCJ9O1xuICAgIGxldHRlci1zcGFjaW5nOiAke3NldHRpbmdzLnByaWNpbmdUeXBlTGV0dGVyU3BhY2luZ1xuICAgICAgPyBzZXR0aW5ncy5wcmljaW5nVHlwZUxldHRlclNwYWNpbmdcbiAgICAgIDogXCJpbml0aWFsXCJ9O1xuICAgIGxpbmUtaGVpZ2h0OiAke3NldHRpbmdzLnByaWNpbmdUeXBlTGluZUhlaWdodFxuICAgICAgPyBzZXR0aW5ncy5wcmljaW5nVHlwZUxpbmVIZWlnaHRcbiAgICAgIDogXCJpbml0aWFsXCJ9O1xuICAgIHRleHQtZGVjb3JhdGlvbjogJHtzZXR0aW5ncy5wcmljaW5nVHlwZVRleHREZWNvcmF0aW9uXG4gICAgICA/IHNldHRpbmdzLnByaWNpbmdUeXBlVGV4dERlY29yYXRpb25cbiAgICAgIDogXCJpbml0aWFsXCJ9O1xuICAgIHRleHQtdHJhbnNmb3JtOiAke3NldHRpbmdzLnByaWNpbmdUeXBlVGV4dFRyYW5zZm9ybVxuICAgICAgPyBzZXR0aW5ncy5wcmljaW5nVHlwZVRleHRUcmFuc2Zvcm1cbiAgICAgIDogXCJpbml0aWFsXCJ9O1xuICBgXG5cbiAgcmV0dXJuICFpc1JlZ0FuZENvbXBhcmVTYW1lKCkgPyAoXG4gICAgPHNwYW5cbiAgICAgIGl0ZW1TY29wZVxuICAgICAgaXRlbVByb3A9XCJvZmZlcnNcIlxuICAgICAgaXRlbVR5cGU9XCJodHRwczovL3NjaGVtYS5vcmcvT2ZmZXJcIlxuICAgICAgY2xhc3NOYW1lPVwid3BzLXByb2R1Y3RzLXByaWNlIHdwcy1wcm9kdWN0LXByaWNpbmcgd3BzLXByb2R1Y3RzLXByaWNlLW9uZVwiXG4gICAgICBkYXRhLXNob3ctcHJpY2UtcmFuZ2U9e3Nob3dQcmljZVJhbmdlfVxuICAgICAgY3NzPXtwcmljZVdyYXBwZXJDU1N9XG4gICAgPlxuICAgICAge3Nob3dQcmljZVJhbmdlICYmICFzZWxlY3RlZFZhcmlhbnQgPyAoXG4gICAgICAgIDxQcm9kdWN0UHJpY2luZ1JhbmdlXG4gICAgICAgICAgZmlyc3RQcmljZT17Z2V0Rmlyc3RQcmljZSgpfVxuICAgICAgICAgIGxhc3RQcmljZT17Z2V0TGFzdFByaWNlKCl9XG4gICAgICAgICAgaXNGaXJzdEFuZExhc3RTYW1lPXtpc0ZpcnN0QW5kTGFzdFNhbWUoKX1cbiAgICAgICAgICBjb21wYXJlQXQ9e2NvbXBhcmVBdH1cbiAgICAgICAgICBzaG93UHJpY2VSYW5nZT17c2hvd1ByaWNlUmFuZ2V9XG4gICAgICAgICAgcHJpY2luZ0NvbG9yPXtzZXR0aW5ncy5wcmljaW5nQ29sb3J9XG4gICAgICAgICAgcHJpY2luZ0ZvbnRTaXplPXtzZXR0aW5ncy5wcmljaW5nVHlwZUZvbnRTaXplfVxuICAgICAgICAvPlxuICAgICAgKSA6IHNlbGVjdGVkVmFyaWFudCA/IChcbiAgICAgICAgPFNsaWRlSW5Gcm9tUmlnaHQ+XG4gICAgICAgICAgPFByb2R1Y3RQcmljZVNpbmdsZVxuICAgICAgICAgICAgcmVmPXtzaW5nbGVQcmljZUVsZW1lbnR9XG4gICAgICAgICAgICBwcmljZT17Y29tcGFyZUF0ID8gY29tcGFyZVByaWNlIDogcmVnUHJpY2V9XG4gICAgICAgICAgICBjb21wYXJlQXQ9e2NvbXBhcmVBdH1cbiAgICAgICAgICAgIHNob3dQcmljZVJhbmdlPXtzaG93UHJpY2VSYW5nZX1cbiAgICAgICAgICAgIHByaWNpbmdDb2xvcj17c2V0dGluZ3MucHJpY2luZ0NvbG9yfVxuICAgICAgICAgICAgcHJpY2luZ0ZvbnRTaXplPXtzZXR0aW5ncy5wcmljaW5nVHlwZUZvbnRTaXplfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2xpZGVJbkZyb21SaWdodD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxQcm9kdWN0UHJpY2VTaW5nbGVcbiAgICAgICAgICByZWY9e3NpbmdsZVByaWNlRWxlbWVudH1cbiAgICAgICAgICBwcmljZT17Y29tcGFyZUF0ID8gY29tcGFyZVByaWNlIDogcmVnUHJpY2V9XG4gICAgICAgICAgY29tcGFyZUF0PXtjb21wYXJlQXR9XG4gICAgICAgICAgc2hvd1ByaWNlUmFuZ2U9e3Nob3dQcmljZVJhbmdlfVxuICAgICAgICAgIHByaWNpbmdDb2xvcj17c2V0dGluZ3MucHJpY2luZ0NvbG9yfVxuICAgICAgICAgIHByaWNpbmdGb250U2l6ZT17c2V0dGluZ3MucHJpY2luZ1R5cGVGb250U2l6ZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9zcGFuPlxuICApIDogbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UHJpY2VcbiJdfQ== */"));
  return !isRegAndCompareSame() ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
    itemScope: true,
    itemProp: "offers",
    itemType: "https://schema.org/Offer",
    className: "wps-products-price wps-product-pricing wps-products-price-one",
    "data-show-price-range": showPriceRange,
    css: priceWrapperCSS
  }, showPriceRange && !selectedVariant ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_range__WEBPACK_IMPORTED_MODULE_5__["default"], {
    firstPrice: getFirstPrice(),
    lastPrice: getLastPrice(),
    isFirstAndLastSame: isFirstAndLastSame(),
    compareAt: compareAt,
    showPriceRange: showPriceRange,
    pricingColor: settings.pricingColor,
    pricingFontSize: settings.pricingTypeFontSize
  }) : selectedVariant ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(Common_animations__WEBPACK_IMPORTED_MODULE_7__.SlideInFromRight, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_single__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: singlePriceElement,
    price: compareAt ? comparePrice : regPrice,
    compareAt: compareAt,
    showPriceRange: showPriceRange,
    pricingColor: settings.pricingColor,
    pricingFontSize: settings.pricingTypeFontSize
  })) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_single__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: singlePriceElement,
    price: compareAt ? comparePrice : regPrice,
    compareAt: compareAt,
    showPriceRange: showPriceRange,
    pricingColor: settings.pricingColor,
    pricingFontSize: settings.pricingTypeFontSize
  })) : null;
}

/* harmony default export */ __webpack_exports__["default"] = (ProductPrice);

/***/ }),

/***/ "./src/components/products/product/pricing/prices/index.jsx":
/*!******************************************************************!*\
  !*** ./src/components/products/product/pricing/prices/index.jsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPrices": function() { return /* binding */ ProductPrices; }
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_state/hooks */ "./src/components/products/product/_state/hooks.jsx");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../price */ "./src/components/products/product/pricing/price/index.jsx");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/** @jsx jsx */





var ProductPricesCompareAt = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | ProductPricesCompareAt-public */ "ProductPricesCompareAt-public").then(__webpack_require__.bind(__webpack_require__, /*! ../compare-at */ "./src/components/products/product/pricing/compare-at/index.jsx"));
});
var ProductPricesSubscription = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | ProductPricesSubscription-public */ "ProductPricesSubscription-public").then(__webpack_require__.bind(__webpack_require__, /*! ../subscription */ "./src/components/products/product/pricing/subscription/index.jsx"));
});

function ProductPrices(_ref) {
  var settings = _ref.settings,
      payload = _ref.payload;
  var productState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_0__.useProductState)();
  var prices = (0,Utils__WEBPACK_IMPORTED_MODULE_2__.getPrices)(payload);
  var Suspense = __webpack_provided_wp_dot_element.Suspense;
  var ProductPricesCompareAtCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)("display:flex;flex-direction:column;align-items:baseline;position:relative;margin-bottom:", settings.isSingleComponent || settings.type === "search" ? "0px" : "35px", ";+.wps-buy-button-wrapper>.wps-product-quantity-wrapper{margin-top:1.7em;};label:ProductPricesCompareAtCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L3ByaWNpbmcvcHJpY2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QnVDIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L3ByaWNpbmcvcHJpY2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHsgdXNlUHJvZHVjdFN0YXRlIH0gZnJvbSBcIi4uLy4uL19zdGF0ZS9ob29rc1wiXG5pbXBvcnQgUHJvZHVjdFByaWNlIGZyb20gXCIuLi9wcmljZVwiXG5pbXBvcnQgeyBGaWx0ZXJIb29rLCBnZXRQcmljZXMgfSBmcm9tIFwiVXRpbHNcIlxuXG5jb25zdCBQcm9kdWN0UHJpY2VzQ29tcGFyZUF0ID0gd3AuZWxlbWVudC5sYXp5KCgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnUHJvZHVjdFByaWNlc0NvbXBhcmVBdC1wdWJsaWMnICovIFwiLi4vY29tcGFyZS1hdFwiXG4gIClcbilcblxuY29uc3QgUHJvZHVjdFByaWNlc1N1YnNjcmlwdGlvbiA9IHdwLmVsZW1lbnQubGF6eSgoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogJ1Byb2R1Y3RQcmljZXNTdWJzY3JpcHRpb24tcHVibGljJyAqLyBcIi4uL3N1YnNjcmlwdGlvblwiXG4gIClcbilcblxuZnVuY3Rpb24gUHJvZHVjdFByaWNlcyh7IHNldHRpbmdzLCBwYXlsb2FkIH0pIHtcbiAgY29uc3QgcHJvZHVjdFN0YXRlID0gdXNlUHJvZHVjdFN0YXRlKClcbiAgY29uc3QgcHJpY2VzID0gZ2V0UHJpY2VzKHBheWxvYWQpXG4gIGNvbnN0IHsgU3VzcGVuc2UgfSA9IHdwLmVsZW1lbnRcblxuICBjb25zdCBQcm9kdWN0UHJpY2VzQ29tcGFyZUF0Q1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206ICR7c2V0dGluZ3MuaXNTaW5nbGVDb21wb25lbnQgfHwgc2V0dGluZ3MudHlwZSA9PT0gXCJzZWFyY2hcIlxuICAgICAgPyBcIjBweFwiXG4gICAgICA6IFwiMzVweFwifTtcblxuICAgICsgLndwcy1idXktYnV0dG9uLXdyYXBwZXIgPiAud3BzLXByb2R1Y3QtcXVhbnRpdHktd3JhcHBlciB7XG4gICAgICBtYXJnaW4tdG9wOiAxLjdlbTtcbiAgICB9XG4gIGBcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cIndwcy1jb21wb25lbnQtcHJvZHVjdHMtcHJpY2luZ1wiXG4gICAgICBhcmlhLWxhYmVsPVwiUHJvZHVjdCBQcmljaW5nXCJcbiAgICAgIGNzcz17UHJvZHVjdFByaWNlc0NvbXBhcmVBdENTU31cbiAgICA+XG4gICAgICA8RmlsdGVySG9vayBuYW1lPVwiYmVmb3JlLnByb2R1Y3RQcmljaW5nXCIgYXJncz17W3Byb2R1Y3RTdGF0ZV19IC8+XG5cbiAgICAgIHtwcm9kdWN0U3RhdGUuc2VsZWN0ZWRTdWJzY3JpcHRpb25JbmZvICYmIHByb2R1Y3RTdGF0ZS5zZWxlY3RlZFZhcmlhbnQgPyAoXG4gICAgICAgIDxQcm9kdWN0UHJpY2VzU3Vic2NyaXB0aW9uXG4gICAgICAgICAgc3Vic2NyaXB0aW9uSW5mbz17cHJvZHVjdFN0YXRlLnNlbGVjdGVkU3Vic2NyaXB0aW9uSW5mb31cbiAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQ9e3Byb2R1Y3RTdGF0ZS5zZWxlY3RlZFZhcmlhbnR9XG4gICAgICAgIC8+XG4gICAgICApIDogc2V0dGluZ3Muc2hvd0NvbXBhcmVBdCA/IChcbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXtmYWxzZX0+XG4gICAgICAgICAgPFByb2R1Y3RQcmljZXNDb21wYXJlQXRcbiAgICAgICAgICAgIHNlbGVjdGVkVmFyaWFudD17cHJvZHVjdFN0YXRlLnNlbGVjdGVkVmFyaWFudH1cbiAgICAgICAgICAgIHByaWNlcz17cHJpY2VzfVxuICAgICAgICAgICAgc2hvd1ByaWNlUmFuZ2U9e3NldHRpbmdzLnNob3dQcmljZVJhbmdlfVxuICAgICAgICAgICAgY29tcGFyZUF0PXtzZXR0aW5ncy5zaG93Q29tcGFyZUF0fVxuICAgICAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICApIDogKFxuICAgICAgICA8UHJvZHVjdFByaWNlXG4gICAgICAgICAgc2VsZWN0ZWRWYXJpYW50PXtwcm9kdWN0U3RhdGUuc2VsZWN0ZWRWYXJpYW50fVxuICAgICAgICAgIGNvbXBhcmVBdD17ZmFsc2V9XG4gICAgICAgICAgcHJpY2VzPXtwcmljZXN9XG4gICAgICAgICAgc2hvd1ByaWNlUmFuZ2U9e3NldHRpbmdzLnNob3dQcmljZVJhbmdlfVxuICAgICAgICAgIHNldHRpbmdzPXtzZXR0aW5nc31cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIDxGaWx0ZXJIb29rIG5hbWU9XCJhZnRlci5wcm9kdWN0UHJpY2luZ1wiIGFyZ3M9e1twcm9kdWN0U3RhdGVdfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7IFByb2R1Y3RQcmljZXMgfVxuIl19 */"));
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "wps-component-products-pricing",
    "aria-label": "Product Pricing",
    css: ProductPricesCompareAtCSS
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(Utils__WEBPACK_IMPORTED_MODULE_2__.FilterHook, {
    name: "before.productPricing",
    args: [productState]
  }), productState.selectedSubscriptionInfo && productState.selectedVariant ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(ProductPricesSubscription, {
    subscriptionInfo: productState.selectedSubscriptionInfo,
    selectedVariant: productState.selectedVariant
  }) : settings.showCompareAt ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(Suspense, {
    fallback: false
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(ProductPricesCompareAt, {
    selectedVariant: productState.selectedVariant,
    prices: prices,
    showPriceRange: settings.showPriceRange,
    compareAt: settings.showCompareAt,
    settings: settings
  })) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_price__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedVariant: productState.selectedVariant,
    compareAt: false,
    prices: prices,
    showPriceRange: settings.showPriceRange,
    settings: settings
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(Utils__WEBPACK_IMPORTED_MODULE_2__.FilterHook, {
    name: "after.productPricing",
    args: [productState]
  }));
}



/***/ }),

/***/ "./src/components/products/product/pricing/range/group/index.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/products/product/pricing/range/group/index.jsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _single__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../single */ "./src/components/products/product/pricing/single/index.jsx");
/* harmony import */ var _separator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../separator */ "./src/components/products/product/pricing/separator/index.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");




function ProductPricingRangeGroup(_ref) {
  var firstPrice = _ref.firstPrice,
      lastPrice = _ref.lastPrice,
      compareAt = _ref.compareAt,
      showPriceRange = _ref.showPriceRange,
      pricingColor = _ref.pricingColor,
      pricingFontSize = _ref.pricingFontSize;
  return /*#__PURE__*/React.createElement(__webpack_provided_wp_dot_element.Fragment, null, /*#__PURE__*/React.createElement(_single__WEBPACK_IMPORTED_MODULE_0__["default"], {
    price: firstPrice,
    compareAt: compareAt,
    showPriceRange: showPriceRange,
    pricingColor: pricingColor,
    pricingFontSize: pricingFontSize
  }), /*#__PURE__*/React.createElement(_separator__WEBPACK_IMPORTED_MODULE_1__.ProductPricingSeparator, {
    compareAt: compareAt
  }), /*#__PURE__*/React.createElement(_single__WEBPACK_IMPORTED_MODULE_0__["default"], {
    price: lastPrice,
    compareAt: compareAt,
    showPriceRange: showPriceRange,
    pricingColor: pricingColor,
    pricingFontSize: pricingFontSize
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_provided_wp_dot_element.memo(ProductPricingRangeGroup));

/***/ }),

/***/ "./src/components/products/product/pricing/range/index.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/products/product/pricing/range/index.jsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _single__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../single */ "./src/components/products/product/pricing/single/index.jsx");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group */ "./src/components/products/product/pricing/range/group/index.jsx");
/** @jsx jsx */





function ProductPricingRange(_ref) {
  var firstPrice = _ref.firstPrice,
      lastPrice = _ref.lastPrice,
      isFirstAndLastSame = _ref.isFirstAndLastSame,
      compareAt = _ref.compareAt,
      showPriceRange = _ref.showPriceRange,
      pricingColor = _ref.pricingColor,
      pricingFontSize = _ref.pricingFontSize;
  var showPriceRangeStyles = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)("margin-top:0;position:", showPriceRange && compareAt ? 'relative' : 'static', ";display:flex;align-items:baseline;height:100%;line-height:1;;label:showPriceRangeStyles;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L3ByaWNpbmcvcmFuZ2UvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNpQyIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC9wcmljaW5nL3JhbmdlL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcbmltcG9ydCBQcm9kdWN0UHJpY2VTaW5nbGUgZnJvbSAnLi4vc2luZ2xlJ1xuaW1wb3J0IFByb2R1Y3RQcmljaW5nUmFuZ2VHcm91cCBmcm9tICcuL2dyb3VwJ1xuXG5mdW5jdGlvbiBQcm9kdWN0UHJpY2luZ1JhbmdlKHtcblx0Zmlyc3RQcmljZSxcblx0bGFzdFByaWNlLFxuXHRpc0ZpcnN0QW5kTGFzdFNhbWUsXG5cdGNvbXBhcmVBdCxcblx0c2hvd1ByaWNlUmFuZ2UsXG5cdHByaWNpbmdDb2xvcixcblx0cHJpY2luZ0ZvbnRTaXplLFxufSkge1xuXHRjb25zdCBzaG93UHJpY2VSYW5nZVN0eWxlcyA9IGNzc2Bcblx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdHBvc2l0aW9uOiAke3Nob3dQcmljZVJhbmdlICYmIGNvbXBhcmVBdCA/ICdyZWxhdGl2ZScgOiAnc3RhdGljJ307XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogYmFzZWxpbmU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRgXG5cblx0cmV0dXJuIChcblx0XHQ8c3BhbiBjbGFzc05hbWU9J3dwcy1wcmljaW5nLXJhbmdlLXdyYXBwZXInIGNzcz17c2hvd1ByaWNlUmFuZ2VTdHlsZXN9PlxuXHRcdFx0e2lzRmlyc3RBbmRMYXN0U2FtZSA/IChcblx0XHRcdFx0PFByb2R1Y3RQcmljZVNpbmdsZVxuXHRcdFx0XHRcdHNob3dQcmljZVJhbmdlPXtzaG93UHJpY2VSYW5nZX1cblx0XHRcdFx0XHRwcmljZT17Zmlyc3RQcmljZX1cblx0XHRcdFx0XHRjb21wYXJlQXQ9e2NvbXBhcmVBdH1cblx0XHRcdFx0XHRwcmljaW5nQ29sb3I9e3ByaWNpbmdDb2xvcn1cblx0XHRcdFx0XHRwcmljaW5nRm9udFNpemU9e3ByaWNpbmdGb250U2l6ZX1cblx0XHRcdFx0Lz5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxQcm9kdWN0UHJpY2luZ1JhbmdlR3JvdXBcblx0XHRcdFx0XHRmaXJzdFByaWNlPXtmaXJzdFByaWNlfVxuXHRcdFx0XHRcdGxhc3RQcmljZT17bGFzdFByaWNlfVxuXHRcdFx0XHRcdGNvbXBhcmVBdD17Y29tcGFyZUF0fVxuXHRcdFx0XHRcdHNob3dQcmljZVJhbmdlPXtzaG93UHJpY2VSYW5nZX1cblx0XHRcdFx0XHRwcmljaW5nQ29sb3I9e3ByaWNpbmdDb2xvcn1cblx0XHRcdFx0XHRwcmljaW5nRm9udFNpemU9e3ByaWNpbmdGb250U2l6ZX1cblx0XHRcdFx0Lz5cblx0XHRcdCl9XG5cdFx0PC9zcGFuPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RQcmljaW5nUmFuZ2VcbiJdfQ== */"));
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    className: "wps-pricing-range-wrapper",
    css: showPriceRangeStyles
  }, isFirstAndLastSame ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_single__WEBPACK_IMPORTED_MODULE_0__["default"], {
    showPriceRange: showPriceRange,
    price: firstPrice,
    compareAt: compareAt,
    pricingColor: pricingColor,
    pricingFontSize: pricingFontSize
  }) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_group__WEBPACK_IMPORTED_MODULE_1__["default"], {
    firstPrice: firstPrice,
    lastPrice: lastPrice,
    compareAt: compareAt,
    showPriceRange: showPriceRange,
    pricingColor: pricingColor,
    pricingFontSize: pricingFontSize
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductPricingRange);

/***/ }),

/***/ "./src/components/products/product/pricing/separator/index.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/products/product/pricing/separator/index.jsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPricingSeparator": function() { return /* binding */ ProductPricingSeparator; }
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/** @jsx jsx */



function ProductPricingSeparator(_ref) {
  var compareAt = _ref.compareAt;
  var ProductPricingSeparatorCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("margin:", compareAt ? '0 0 0 5px' : '0 5px', ";display:inline-block;color:", compareAt ? '#848484' : '#121212', ";position:", compareAt ? 'static' : 'relative', ";top:", compareAt ? 0 : '-2px', ";;label:ProductPricingSeparatorCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L3ByaWNpbmcvc2VwYXJhdG9yL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJdUMiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvcHJpY2luZy9zZXBhcmF0b3IvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuXG5mdW5jdGlvbiBQcm9kdWN0UHJpY2luZ1NlcGFyYXRvcih7IGNvbXBhcmVBdCB9KSB7XG5cdGNvbnN0IFByb2R1Y3RQcmljaW5nU2VwYXJhdG9yQ1NTID0gY3NzYFxuXHRcdG1hcmdpbjogJHtjb21wYXJlQXQgPyAnMCAwIDAgNXB4JyA6ICcwIDVweCd9O1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRjb2xvcjogJHtjb21wYXJlQXQgPyAnIzg0ODQ4NCcgOiAnIzEyMTIxMid9O1xuXHRcdHBvc2l0aW9uOiAke2NvbXBhcmVBdCA/ICdzdGF0aWMnIDogJ3JlbGF0aXZlJ307XG5cdFx0dG9wOiAke2NvbXBhcmVBdCA/IDAgOiAnLTJweCd9O1xuXHRgXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjc3M9e1Byb2R1Y3RQcmljaW5nU2VwYXJhdG9yQ1NTfVxuXHRcdFx0Y2xhc3NOYW1lPSd3cHMtcHJvZHVjdC1mcm9tLXByaWNlLXNlcGFyYXRvcic+XG5cdFx0XHTigJNcblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgeyBQcm9kdWN0UHJpY2luZ1NlcGFyYXRvciB9XG4iXX0= */"));
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    css: ProductPricingSeparatorCSS,
    className: "wps-product-from-price-separator"
  }, "\u2013");
}



/***/ }),

/***/ "./src/components/products/product/pricing/single/index.jsx":
/*!******************************************************************!*\
  !*** ./src/components/products/product/pricing/single/index.jsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Common_pricing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Common/pricing */ "./src/common/pricing/index.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/** @jsx jsx */



var ProductPriceSingle = __webpack_provided_wp_dot_element.forwardRef(function (props, ref) {
  var priceCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)("display:inline-block;padding:0;margin:", props.compareAt ? "1px" : "0", " 0 0 ", props.compareAt ? "7px" : "0", ";font-size:", props.pricingFontSize ? props.pricingFontSize : props.compareAt ? "16px" : "18px", ";color:", props.pricingColor ? props.pricingColor : props.compareAt ? "#848484" : "#121212", ";text-decoration:", props.compareAt ? "line-through" : "none", ";font-weight:", props.compareAt ? "normal" : "bold", ";;label:priceCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L3ByaWNpbmcvc2luZ2xlL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLc0IiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvcHJpY2luZy9zaW5nbGUvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgUHJpY2UgZnJvbSBcIkNvbW1vbi9wcmljaW5nXCJcblxuY29uc3QgUHJvZHVjdFByaWNlU2luZ2xlID0gd3AuZWxlbWVudC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHByaWNlQ1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogJHtwcm9wcy5jb21wYXJlQXQgPyBcIjFweFwiIDogXCIwXCJ9IDAgMFxuICAgICAgJHtwcm9wcy5jb21wYXJlQXQgPyBcIjdweFwiIDogXCIwXCJ9O1xuICAgIGZvbnQtc2l6ZTogJHtwcm9wcy5wcmljaW5nRm9udFNpemVcbiAgICAgID8gcHJvcHMucHJpY2luZ0ZvbnRTaXplXG4gICAgICA6IHByb3BzLmNvbXBhcmVBdFxuICAgICAgPyBcIjE2cHhcIlxuICAgICAgOiBcIjE4cHhcIn07XG4gICAgY29sb3I6ICR7cHJvcHMucHJpY2luZ0NvbG9yXG4gICAgICA/IHByb3BzLnByaWNpbmdDb2xvclxuICAgICAgOiBwcm9wcy5jb21wYXJlQXRcbiAgICAgID8gXCIjODQ4NDg0XCJcbiAgICAgIDogXCIjMTIxMjEyXCJ9O1xuICAgIHRleHQtZGVjb3JhdGlvbjogJHtwcm9wcy5jb21wYXJlQXQgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJub25lXCJ9O1xuICAgIGZvbnQtd2VpZ2h0OiAke3Byb3BzLmNvbXBhcmVBdCA/IFwibm9ybWFsXCIgOiBcImJvbGRcIn07XG4gIGBcblxuICByZXR1cm4gcHJvcHMucHJpY2UgIT09IGZhbHNlIHx8IHByb3BzLnByaWNlICE9PSBudWxsID8gKFxuICAgIDxzcGFuXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT1cIndwcy1wcm9kdWN0LWluZGl2aWR1YWwtcHJpY2VcIlxuICAgICAgY3NzPXtwcmljZUNTU31cbiAgICAgIGRhdGEtcHJpY2U9e3Byb3BzLnByaWNlfVxuICAgID5cbiAgICAgIDxQcmljZSBwcmljZT17cHJvcHMucHJpY2V9IC8+XG4gICAgPC9zcGFuPlxuICApIDogbnVsbFxufSlcblxuZXhwb3J0IGRlZmF1bHQgd3AuZWxlbWVudC5tZW1vKFByb2R1Y3RQcmljZVNpbmdsZSlcbiJdfQ== */"));
  return props.price !== false || props.price !== null ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
    ref: ref,
    className: "wps-product-individual-price",
    css: priceCSS,
    "data-price": props.price
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(Common_pricing__WEBPACK_IMPORTED_MODULE_0__["default"], {
    price: props.price
  })) : null;
});
/* harmony default export */ __webpack_exports__["default"] = (__webpack_provided_wp_dot_element.memo(ProductPriceSingle));

/***/ })

}]);
//# sourceMappingURL=src_components_products_product_pricing_index_jsx.shopwp-components.js.map