"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["src_components_products_product_buy-button_index_jsx"],{

/***/ "./src/common/variants/index.js":
/*!**************************************!*\
  !*** ./src/common/variants/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterOnlyAvailableVariants": function() { return /* binding */ filterOnlyAvailableVariants; },
/* harmony export */   "onlyAvailableOptionsFromVariants": function() { return /* binding */ onlyAvailableOptionsFromVariants; }
/* harmony export */ });
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/groupBy */ "./node_modules/lodash/groupBy.js");
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/uniqBy */ "./node_modules/lodash/uniqBy.js");
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/flatMap */ "./node_modules/lodash/flatMap.js");
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_flatMap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_5__);







function onlyAvailableVariantsOptions(variants) {
  return lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default()(lodash_flatMap__WEBPACK_IMPORTED_MODULE_4___default()(variants, function (variant) {
    variant.node.selectedOptions.id = variant.node.id;
    var selectedOptions = variant.node.selectedOptions.map(function (option) {
      return {
        name: option.name,
        value: option.value
      };
    }); // return variant.node.selectedOptions

    return selectedOptions;
  }), "name");
}

function onlyUniqueOptionValues(optionValues) {
  return lodash_uniqBy__WEBPACK_IMPORTED_MODULE_2___default()(optionValues, "value").filter(function (item) {
    return item.value;
  });
}

function formatAvailableOptions(availOptions) {
  return lodash_map__WEBPACK_IMPORTED_MODULE_1___default()(availOptions, function (optionValues, optionName) {
    return {
      name: optionName,
      values: onlyUniqueOptionValues(optionValues)
    };
  });
}

function filterOnlyAvailableVariants(variants) {
  return lodash_filter__WEBPACK_IMPORTED_MODULE_3___default()(variants, function (v) {
    return v.node.availableForSale;
  });
}

function onlyAvailableOptionsFromVariants(variants, showOutOfStockVariants) {
  if (!variants.edges.length) {
    return false;
  }

  if (showOutOfStockVariants) {
    var onlyAvailableVariants = variants.edges;
  } else {
    var onlyAvailableVariants = filterOnlyAvailableVariants(variants.edges);
  }

  var groups = onlyAvailableVariantsOptions(onlyAvailableVariants);
  var finalOptions = formatAvailableOptions(groups);
  return finalOptions;
}



/***/ }),

/***/ "./src/components/link-modal/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/link-modal/index.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _products_product_state_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products/product/_state/hooks */ "./src/components/products/product/_state/hooks.jsx");
/* provided dependency */ var shopwp = __webpack_require__(/*! ./shopwp-defaults.js */ "./shopwp-defaults.js")["default"];
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */




var _ref =  false ? 0 : {
  name: "1m7okhr-LinkModalCSS",
  styles: "text-decoration:none;display:block;&:hover{cursor:pointer;};label:LinkModalCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9saW5rLW1vZGFsL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNeUIiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL2xpbmstbW9kYWwvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuaW1wb3J0IHsgdXNlUHJvZHVjdERpc3BhdGNoIH0gZnJvbSAnLi4vcHJvZHVjdHMvcHJvZHVjdC9fc3RhdGUvaG9va3MnXG5cbmZ1bmN0aW9uIExpbmtNb2RhbCh7IGNoaWxkcmVuIH0pIHtcblx0Y29uc3QgcHJvZHVjdERpc3BhdGNoID0gdXNlUHJvZHVjdERpc3BhdGNoKClcblx0Y29uc3QgTGlua01vZGFsQ1NTID0gY3NzYFxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRkaXNwbGF5OiBibG9jaztcblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdH1cblx0YFxuXG5cdGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG5cdFx0aWYgKHNob3B3cC5taXNjLmlzUHJvKSB7XG5cdFx0XHRwcm9kdWN0RGlzcGF0Y2goeyB0eXBlOiAnVE9HR0xFX01PREFMJywgcGF5bG9hZDogdHJ1ZSB9KVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxhXG5cdFx0XHRocmVmPScjISdcblx0XHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdFx0XHRjc3M9e0xpbmtNb2RhbENTU31cblx0XHRcdGNsYXNzTmFtZT0nd3BzLWxpbmstbW9kYWwnPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvYT5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rTW9kYWxcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function LinkModal(_ref2) {
  var children = _ref2.children;
  var productDispatch = (0,_products_product_state_hooks__WEBPACK_IMPORTED_MODULE_0__.useProductDispatch)();
  var LinkModalCSS = _ref;

  function onClick() {
    if (shopwp.misc.isPro) {
      productDispatch({
        type: 'TOGGLE_MODAL',
        payload: true
      });
    }
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
    href: "#!",
    onClick: onClick,
    css: LinkModalCSS,
    className: "wps-link-modal"
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (LinkModal);

/***/ }),

/***/ "./src/components/link-normal/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/link-normal/index.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Common_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Common/settings */ "./src/common/settings/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */




var _ref =  false ? 0 : {
  name: "rj311j-linkCSS",
  styles: "text-decoration:none;display:block;.wps-product-image{&:hover{cursor:pointer;}};label:linkCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9saW5rLW5vcm1hbC9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXFCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9saW5rLW5vcm1hbC9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IGdldEl0ZW1MaW5rIH0gZnJvbSBcIkNvbW1vbi9zZXR0aW5nc1wiXG5cbmZ1bmN0aW9uIExpbmtOb3JtYWwoe1xuICB0eXBlLFxuICBwYXlsb2FkLFxuICBsaW5rVG8sXG4gIG1hbnVhbExpbmssXG4gIHRhcmdldCxcbiAgY2xhc3NOYW1lcyxcbiAgY2hpbGRyZW4sXG59KSB7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IFwid3BzLVwiICsgdHlwZSArIFwiLWxpbmtcIiArIFwiIFwiICsgY2xhc3NOYW1lc1xuXG4gIGNvbnN0IGxpbmtDU1MgPSBjc3NgXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgLndwcy1wcm9kdWN0LWltYWdlIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICBgXG5cbiAgZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHJldHVybiB0YXJnZXRcbiAgICB9XG5cbiAgICByZXR1cm4gXCJfYmxhbmtcIlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgaHJlZj17d3AuaG9va3MuYXBwbHlGaWx0ZXJzKFxuICAgICAgICBcIm1pc2MubGlua0hyZWZcIixcbiAgICAgICAgbWFudWFsTGluayA/IGVuY29kZVVSSShtYW51YWxMaW5rKSA6IGdldEl0ZW1MaW5rKHBheWxvYWQsIHR5cGUsIGxpbmtUbyksXG4gICAgICAgIGxpbmtUb1xuICAgICAgKX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgY3NzPXtsaW5rQ1NTfVxuICAgICAgYXJpYS1sYWJlbD1cIlByb2R1Y3QgTGlua1wiXG4gICAgICB0YXJnZXQ9e3dwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgICAgXCJtaXNjLmxpbmtUYXJnZXRcIixcbiAgICAgICAgZ2V0VGFyZ2V0KHRhcmdldCksXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHBheWxvYWRcbiAgICAgICl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rTm9ybWFsXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function LinkNormal(_ref2) {
  var type = _ref2.type,
      payload = _ref2.payload,
      linkTo = _ref2.linkTo,
      manualLink = _ref2.manualLink,
      target = _ref2.target,
      classNames = _ref2.classNames,
      children = _ref2.children;
  var className = "wps-" + type + "-link" + " " + classNames;
  var linkCSS = _ref;

  function getTarget(target) {
    if (target) {
      return target;
    }

    return "_blank";
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
    href: __webpack_provided_wp_dot_hooks.applyFilters("misc.linkHref", manualLink ? encodeURI(manualLink) : (0,Common_settings__WEBPACK_IMPORTED_MODULE_0__.getItemLink)(payload, type, linkTo), linkTo),
    className: className,
    css: linkCSS,
    "aria-label": "Product Link",
    target: __webpack_provided_wp_dot_hooks.applyFilters("misc.linkTarget", getTarget(target), type, payload)
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (LinkNormal);

/***/ }),

/***/ "./src/components/link/index.jsx":
/*!***************************************!*\
  !*** ./src/components/link/index.jsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _link_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../link-modal */ "./src/components/link-modal/index.jsx");
/* harmony import */ var _link_normal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../link-normal */ "./src/components/link-normal/index.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");




function Link(_ref) {
  var type = _ref.type,
      payload = _ref.payload,
      _ref$classNames = _ref.classNames,
      classNames = _ref$classNames === void 0 ? '' : _ref$classNames,
      target = _ref.target,
      children = _ref.children,
      _ref$linkTo = _ref.linkTo,
      linkTo = _ref$linkTo === void 0 ? 'none' : _ref$linkTo,
      manualLink = _ref.manualLink,
      disableLink = _ref.disableLink;

  function renderLink() {
    if (disableLink) {
      return children;
    }

    if (linkTo === 'none' && !manualLink) {
      return children;
    }

    if (linkTo === 'modal') {
      return /*#__PURE__*/React.createElement(_link_modal__WEBPACK_IMPORTED_MODULE_0__["default"], null, children);
    }

    return /*#__PURE__*/React.createElement(_link_normal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: type,
      payload: payload,
      linkTo: linkTo,
      manualLink: manualLink,
      target: target,
      classNames: classNames
    }, children);
  }

  return renderLink();
}

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./src/components/products/product/buy-button/_state/context.js":
/*!**********************************************************************!*\
  !*** ./src/components/products/product/buy-button/_state/context.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductBuyButtonDispatchContext": function() { return /* binding */ ProductBuyButtonDispatchContext; },
/* harmony export */   "ProductBuyButtonStateContext": function() { return /* binding */ ProductBuyButtonStateContext; }
/* harmony export */ });
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
var ProductBuyButtonStateContext = __webpack_provided_wp_dot_element.createContext();
var ProductBuyButtonDispatchContext = __webpack_provided_wp_dot_element.createContext();


/***/ }),

/***/ "./src/components/products/product/buy-button/_state/hooks.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/products/product/buy-button/_state/hooks.jsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useProductBuyButtonDispatch": function() { return /* binding */ useProductBuyButtonDispatch; },
/* harmony export */   "useProductBuyButtonState": function() { return /* binding */ useProductBuyButtonState; }
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/components/products/product/buy-button/_state/context.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");


function useProductBuyButtonState() {
  var context = __webpack_provided_wp_dot_element.useContext(_context__WEBPACK_IMPORTED_MODULE_0__.ProductBuyButtonStateContext);

  if (!context) {
    throw new Error("useProductBuyButtonState must be used within the ProductBuyButtonProvider");
  }

  return context;
}

function useProductBuyButtonDispatch() {
  var context = __webpack_provided_wp_dot_element.useContext(_context__WEBPACK_IMPORTED_MODULE_0__.ProductBuyButtonDispatchContext);

  if (!context) {
    throw new Error("useProductBuyButtonDispatch must be used within the ProductBuyButtonProvider");
  }

  return context;
}



/***/ }),

/***/ "./src/components/products/product/buy-button/_state/initial-state.js":
/*!****************************************************************************!*\
  !*** ./src/components/products/product/buy-button/_state/initial-state.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function ProductBuyButtonInitialState(props) {
  return {
    subscription: false,
    // is eventually added to lineItemOptions
    subscriptions: false,
    attributes: false,
    // is eventually added to lineItemOptions
    selectedOptions: false,
    settings: props.settings,
    payload: props.payload
  };
}

/* harmony default export */ __webpack_exports__["default"] = (ProductBuyButtonInitialState);

/***/ }),

/***/ "./src/components/products/product/buy-button/_state/provider.jsx":
/*!************************************************************************!*\
  !*** ./src/components/products/product/buy-button/_state/provider.jsx ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/components/products/product/buy-button/_state/reducer.js");
/* harmony import */ var _initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial-state */ "./src/components/products/product/buy-button/_state/initial-state.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./src/components/products/product/buy-button/_state/context.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");






function ProductBuyButtonProvider(props) {
  var _wp$element$useReduce = __webpack_provided_wp_dot_element.useReducer(_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], (0,_initial_state__WEBPACK_IMPORTED_MODULE_2__["default"])(props)),
      _wp$element$useReduce2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_wp$element$useReduce, 2),
      state = _wp$element$useReduce2[0],
      dispatch = _wp$element$useReduce2[1];

  return /*#__PURE__*/React.createElement(_context__WEBPACK_IMPORTED_MODULE_3__.ProductBuyButtonStateContext.Provider, {
    value: state
  }, /*#__PURE__*/React.createElement(_context__WEBPACK_IMPORTED_MODULE_3__.ProductBuyButtonDispatchContext.Provider, {
    value: dispatch
  }, props.children));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductBuyButtonProvider);

/***/ }),

/***/ "./src/components/products/product/buy-button/_state/reducer.js":
/*!**********************************************************************!*\
  !*** ./src/components/products/product/buy-button/_state/reducer.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




function ProductBuyButtonReducer(state, action) {
  switch (action.type) {
    case "SET_SUBSCRIPTION":
      {
        return (0,Utils__WEBPACK_IMPORTED_MODULE_2__.rSet)("subscription", action, state);
      }

    case "SET_SUBSCRIPTIONS":
      {
        return (0,Utils__WEBPACK_IMPORTED_MODULE_2__.rSet)("subscriptions", action, state);
      }

    case "SET_NOTICE":
      {
        return (0,Utils__WEBPACK_IMPORTED_MODULE_2__.rSet)("notice", action, state);
      }

    case "UPDATE_SELECTED_OPTIONS":
      {
        if (state.selectedOptions === false || action.payload === false) {
          return _objectSpread(_objectSpread({}, state), {}, {
            selectedOptions: immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state.selectedOptions, {
              $set: action.payload
            })
          });
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          selectedOptions: immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state.selectedOptions, {
            $merge: action.payload
          })
        });
      }

    default:
      {
        throw new Error("Unhandled action type: ".concat(action.type, " in ProductBuyButtonReducer"));
      }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ProductBuyButtonReducer);

/***/ }),

/***/ "./src/components/products/product/buy-button/add-button/index.jsx":
/*!*************************************************************************!*\
  !*** ./src/components/products/product/buy-button/add-button/index.jsx ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var Common_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Common/css */ "./src/common/css/index.jsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/products/product/buy-button/_state/hooks.jsx");
/* harmony import */ var _quantity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../quantity */ "./src/components/products/product/buy-button/quantity/index.jsx");
/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../notice */ "./src/components/notice/index.jsx");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../link */ "./src/components/link/index.jsx");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../loader */ "./src/components/loader/index.jsx");
/* harmony import */ var _left_in_stock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../left-in-stock */ "./src/components/products/product/buy-button/left-in-stock/index.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");
/* provided dependency */ var shopwp = __webpack_require__(/*! ./shopwp-defaults.js */ "./shopwp-defaults.js")["default"];




var _templateObject;



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */










var _wp$element = wp.element,
    useRef = __webpack_provided_wp_dot_element.useRef,
    useEffect = __webpack_provided_wp_dot_element.useEffect,
    useState = __webpack_provided_wp_dot_element.useState;

function findSingleVariantFromPayload(payload) {
  if (!payload.variants.edges.length) {
    return false;
  }

  return payload.variants.edges[0];
}

function buildLines(variant, quantity, productBuyButtonState) {
  var data = {
    attributes: __webpack_provided_wp_dot_hooks.applyFilters("cart.lineItemAttributes", [], variant, quantity, productBuyButtonState),
    merchandiseId: variant.node.id,
    quantity: quantity
  };

  if (productBuyButtonState !== null && productBuyButtonState !== void 0 && productBuyButtonState.subscription) {
    data["sellingPlanId"] = productBuyButtonState.subscription.sellingPlanId;
  }

  return [data];
}

function AddButtonWrapper(_ref2) {
  var hasLink = _ref2.hasLink,
      payload = _ref2.payload,
      children = _ref2.children,
      linkTo = _ref2.linkTo,
      linkTarget = _ref2.linkTarget,
      isDirectCheckout = _ref2.isDirectCheckout,
      linkWithBuyButton = _ref2.linkWithBuyButton;
  return hasLink && !isDirectCheckout && !linkWithBuyButton ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(_link__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "products",
    payload: payload,
    linkTo: linkTo,
    target: linkTarget
  }, children) : children;
}

var _ref =  false ? 0 : {
  name: "jql0qu-NoticeCSS",
  styles: "margin-top:15px;label:NoticeCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vYWRkLWJ1dHRvbi9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkh1QiIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC9idXktYnV0dG9uL2FkZC1idXR0b24vaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IGZpbmRWYXJpYW50RnJvbVNlbGVjdGVkT3B0aW9ucywgYWxsT3B0aW9uc1NlbGVjdGVkTWF0Y2ggfSBmcm9tIFwiVXRpbHNcIlxuaW1wb3J0IHsgYnV0dG9uQ1NTLCBtcSB9IGZyb20gXCJDb21tb24vY3NzXCJcbmltcG9ydCB7XG4gIHVzZVByb2R1Y3RCdXlCdXR0b25TdGF0ZSxcbiAgdXNlUHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoLFxufSBmcm9tIFwiLi4vX3N0YXRlL2hvb2tzXCJcblxuaW1wb3J0IFByb2R1Y3RRdWFudGl0eSBmcm9tIFwiLi4vcXVhbnRpdHlcIlxuaW1wb3J0IE5vdGljZSBmcm9tIFwiLi4vLi4vLi4vLi4vbm90aWNlXCJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi8uLi8uLi8uLi9saW5rXCJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2xvYWRlclwiXG5pbXBvcnQgUHJvZHVjdEJ1eUJ1dHRvbkxlZnRJblN0b2NrIGZyb20gXCIuLi9sZWZ0LWluLXN0b2NrXCJcblxuY29uc3QgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnRcblxuZnVuY3Rpb24gZmluZFNpbmdsZVZhcmlhbnRGcm9tUGF5bG9hZChwYXlsb2FkKSB7XG4gIGlmICghcGF5bG9hZC52YXJpYW50cy5lZGdlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBwYXlsb2FkLnZhcmlhbnRzLmVkZ2VzWzBdXG59XG5cbmZ1bmN0aW9uIGJ1aWxkTGluZXModmFyaWFudCwgcXVhbnRpdHksIHByb2R1Y3RCdXlCdXR0b25TdGF0ZSkge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGF0dHJpYnV0ZXM6IHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgIFwiY2FydC5saW5lSXRlbUF0dHJpYnV0ZXNcIixcbiAgICAgIFtdLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHF1YW50aXR5LFxuICAgICAgcHJvZHVjdEJ1eUJ1dHRvblN0YXRlXG4gICAgKSxcbiAgICBtZXJjaGFuZGlzZUlkOiB2YXJpYW50Lm5vZGUuaWQsXG4gICAgcXVhbnRpdHk6IHF1YW50aXR5LFxuICB9XG5cbiAgaWYgKHByb2R1Y3RCdXlCdXR0b25TdGF0ZT8uc3Vic2NyaXB0aW9uKSB7XG4gICAgZGF0YVtcInNlbGxpbmdQbGFuSWRcIl0gPSBwcm9kdWN0QnV5QnV0dG9uU3RhdGUuc3Vic2NyaXB0aW9uLnNlbGxpbmdQbGFuSWRcbiAgfVxuXG4gIHJldHVybiBbZGF0YV1cbn1cblxuZnVuY3Rpb24gQWRkQnV0dG9uV3JhcHBlcih7XG4gIGhhc0xpbmssXG4gIHBheWxvYWQsXG4gIGNoaWxkcmVuLFxuICBsaW5rVG8sXG4gIGxpbmtUYXJnZXQsXG4gIGlzRGlyZWN0Q2hlY2tvdXQsXG4gIGxpbmtXaXRoQnV5QnV0dG9uLFxufSkge1xuICByZXR1cm4gaGFzTGluayAmJiAhaXNEaXJlY3RDaGVja291dCAmJiAhbGlua1dpdGhCdXlCdXR0b24gPyAoXG4gICAgPExpbmsgdHlwZT1cInByb2R1Y3RzXCIgcGF5bG9hZD17cGF5bG9hZH0gbGlua1RvPXtsaW5rVG99IHRhcmdldD17bGlua1RhcmdldH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MaW5rPlxuICApIDogKFxuICAgIGNoaWxkcmVuXG4gIClcbn1cblxuZnVuY3Rpb24gQWRkQnV0dG9uKHtcbiAgYWRkVG9DYXJ0QnV0dG9uQ29sb3IsXG4gIGFkZFRvQ2FydEJ1dHRvblRleHRDb2xvcixcbiAgaGFzTGluayxcbiAgbGlua1dpdGhCdXlCdXR0b24sXG4gIGlzRGlyZWN0Q2hlY2tvdXQsXG4gIHByb2R1Y3REaXNwYXRjaCxcbiAgaGFzTWFueVZhcmlhbnRzLFxuICBsb2FkZXIsXG4gIGJ1dHRvblRleHQsXG4gIGFkZGVkVG9DYXJ0LFxuICBxdWFudGl0eSxcbiAgc2VsZWN0ZWRPcHRpb25zLFxuICBwYXlsb2FkLFxuICBzZXR0aW5ncyxcbiAgbGlua1RvLFxufSkge1xuICBjb25zdCBbc2hvdWxkU2hha2UsIHNldFNob3VsZFNoYWtlXSA9IHdwLmVsZW1lbnQudXNlU3RhdGUoZmFsc2UpXG5cbiAgZnVuY3Rpb24gZmluZFZhcmlhbnQoKSB7XG4gICAgaWYgKGhhc01hbnlWYXJpYW50cykge1xuICAgICAgcmV0dXJuIGZpbmRWYXJpYW50RnJvbVNlbGVjdGVkT3B0aW9ucyhwYXlsb2FkLCBzZWxlY3RlZE9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmaW5kU2luZ2xlVmFyaWFudEZyb21QYXlsb2FkKHBheWxvYWQpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgW2lzRGlzYWJsZWQsIHNldElzRGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHZhciB2YXJpYW50ID0gZmluZFZhcmlhbnQoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIGFsbE9wdGlvbnNTZWxlY3RlZCA9IGFsbE9wdGlvbnNTZWxlY3RlZE1hdGNoKHNlbGVjdGVkT3B0aW9ucywgcGF5bG9hZClcblxuICAgIGlmICghYWxsT3B0aW9uc1NlbGVjdGVkKSB7XG4gICAgICBzZXRJc0Rpc2FibGVkKGZhbHNlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHZhcmlhbnROZXcgPSBmaW5kVmFyaWFudCgpXG5cbiAgICBpZiAoIXZhcmlhbnROZXcpIHtcbiAgICAgIHNldElzRGlzYWJsZWQodHJ1ZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh2YXJpYW50TmV3Lm5vZGUuYXZhaWxhYmxlRm9yU2FsZSkge1xuICAgICAgc2V0U2hvdWxkU2hha2UodHJ1ZSlcbiAgICAgIHNldElzRGlzYWJsZWQoZmFsc2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzRGlzYWJsZWQodHJ1ZSlcbiAgICB9XG4gIH0sIFtzZWxlY3RlZE9wdGlvbnNdKVxuXG4gIGNvbnN0IFtpc0NoZWNraW5nT3V0LCBzZXRJc0NoZWNraW5nT3V0XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGJ1dHRvbiA9IHVzZVJlZigpXG4gIGNvbnN0IHByb2R1Y3RCdXlCdXR0b25TdGF0ZSA9IHVzZVByb2R1Y3RCdXlCdXR0b25TdGF0ZSgpXG4gIGNvbnN0IHByb2R1Y3RCdXlCdXR0b25EaXNwYXRjaCA9IHVzZVByb2R1Y3RCdXlCdXR0b25EaXNwYXRjaCgpXG4gIGNvbnN0IG1heFF1YW50aXR5ID0gc2V0dGluZ3MubWF4UXVhbnRpdHlcblxuICBjb25zdCBOb3RpY2VDU1MgPSBjc3NgXG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgYFxuXG4gIGNvbnN0IGhlYWRTaGFrZSA9IGtleWZyYW1lc2Bcblx0XHQwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG5cdFx0fVxuXG5cdFx0Ni41JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyk7XG5cdFx0fVxuXG5cdFx0MTguNSUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKTtcblx0XHR9XG5cblx0XHQzMS41JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyk7XG5cdFx0fVxuXG5cdFx0NDMuNSUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCkgcm90YXRlWSgzZGVnKTtcblx0XHR9XG5cblx0XHQ1MCUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXHRcdH1cblx0YFxuXG4gIGNvbnN0IGFkZFRvQ2FydENTUyA9IGNzc2Bcblx0XHRmb250LWZhbWlseTogJHtcbiAgICAgIHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVGb250RmFtaWx5XG4gICAgICAgID8gc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUZvbnRGYW1pbHlcbiAgICAgICAgOiBcImluaGVyaXRcIlxuICAgIH07XG5cdFx0Zm9udC13ZWlnaHQ6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFdlaWdodFxuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVGb250V2VpZ2h0XG4gICAgICAgIDogXCJpbml0aWFsXCJcbiAgICB9O1xuXHRcdGZvbnQtc3R5bGU6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFN0eWxlXG4gICAgICAgID8gc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUZvbnRTdHlsZVxuICAgICAgICA6IFwiaW5pdGlhbFwiXG4gICAgfTtcblx0XHRmb250LXNpemU6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFNpemVcbiAgICAgICAgPyBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFNpemVcbiAgICAgICAgOiBcImluaXRpYWxcIlxuICAgIH07XG5cdFx0bGV0dGVyLXNwYWNpbmc6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlTGV0dGVyU3BhY2luZ1xuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVMZXR0ZXJTcGFjaW5nXG4gICAgICAgIDogXCJpbml0aWFsXCJcbiAgICB9O1xuXHRcdGxpbmUtaGVpZ2h0OiAke1xuICAgICAgc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUxpbmVIZWlnaHRcbiAgICAgICAgPyBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlTGluZUhlaWdodFxuICAgICAgICA6IFwiaW5pdGlhbFwiXG4gICAgfTtcblx0XHR0ZXh0LWRlY29yYXRpb246ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlVGV4dERlY29yYXRpb25cbiAgICAgICAgPyBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlVGV4dERlY29yYXRpb25cbiAgICAgICAgOiBcImluaXRpYWxcIlxuICAgIH07XG5cdFx0dGV4dC10cmFuc2Zvcm06ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlVGV4dFRyYW5zZm9ybVxuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVUZXh0VHJhbnNmb3JtXG4gICAgICAgIDogXCJpbml0aWFsXCJcbiAgICB9O1xuXHRcdG92ZXJmbG93LXk6IGhpZGRlbjtcblx0XHRmbGV4OiAxO1xuXHRcdG1pbi13aWR0aDogMTYwcHg7XG4gICAgbWluLWhlaWdodDogNDVweDtcblx0XHRhbmltYXRpb246ICR7XG4gICAgICBzaG91bGRTaGFrZVxuICAgICAgICA/IGNzc2BcbiAgICAgICAgICAgICR7aGVhZFNoYWtlfSAwLjlzIGVhc2UtaW4tb3V0XG4gICAgICAgICAgYFxuICAgICAgICA6IFwibm9uZVwiXG4gICAgfVxuXG5cdFx0Jjpmb2N1cyxcblx0XHQmOmhvdmVyIHtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdGN1cnNvcjogJHtpc0NoZWNraW5nT3V0IHx8IGlzRGlzYWJsZWQgPyBcIm5vdC1hbGxvd2VkXCIgOiBcInBvaW50ZXJcIn07XG5cblx0XHRcdGNvbG9yOiAke1xuICAgICAgICBpc0NoZWNraW5nT3V0IHx8IGlzRGlzYWJsZWRcbiAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiXG4gICAgICAgICAgOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KVwiXG4gICAgICB9O1xuXHRcdH1cblxuXHRcdCYmIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7aXNEaXNhYmxlZCA/IFwiI2NmY2ZjZlwiIDogYWRkVG9DYXJ0QnV0dG9uQ29sb3J9O1xuXHRcdH1cblx0YFxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAobGlua1RvID09PSBcIm1vZGFsXCIgJiYgc2hvcHdwLm1pc2MuaXNQcm8gJiYgIWlzRGlyZWN0Q2hlY2tvdXQpIHtcbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiVE9HR0xFX01PREFMXCIsIHBheWxvYWQ6IHRydWUgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChoYXNMaW5rICYmICFpc0RpcmVjdENoZWNrb3V0ICYmICFsaW5rV2l0aEJ1eUJ1dHRvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBjaGVjayBpZiBhbGwgb3B0aW9ucyBhcmUgc2VsZWN0ZWRcbiAgICAvLyBpZiBzb21lIGFyZSBub3Qgc2VsZWN0ZWQsIGhpZ2hsaWdodCB0aGVtIC8gc2hha2UgdGhlbVxuICAgIGlmICghdmFyaWFudCAmJiBoYXNNYW55VmFyaWFudHMpIHtcbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX01JU1NJTkdfU0VMRUNUSU9OU1wiLCBwYXlsb2FkOiB0cnVlIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXZhcmlhbnQpIHtcbiAgICAgIC8vIFRPRE86IEhhbmRsZSB0aGlzIGJldHRlclxuICAgICAgY29uc29sZS5lcnJvcihcIlNob3BXUCBlcnJvcjogaGFuZGxlQ2xpY2sgdmFyaWFudCB1bmRlZmluZWQgXCIpXG5cbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX01JU1NJTkdfU0VMRUNUSU9OU1wiLCBwYXlsb2FkOiB0cnVlIH0pXG4gICAgICBwcm9kdWN0QnV5QnV0dG9uRGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcIlVQREFURV9TRUxFQ1RFRF9PUFRJT05TXCIsXG4gICAgICAgIHBheWxvYWQ6IGZhbHNlLFxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGxpbmVJdGVtT3B0aW9ucyA9IHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcInByb2R1Y3QubGluZUl0ZW1PcHRpb25zXCIsIHtcbiAgICAgIG1pblF1YW50aXR5OiBzZXR0aW5ncy5taW5RdWFudGl0eSxcbiAgICAgIG1heFF1YW50aXR5OiBzZXR0aW5ncy5tYXhRdWFudGl0eSxcbiAgICAgIHN1YnNjcmlwdGlvbjogcHJvZHVjdEJ1eUJ1dHRvblN0YXRlLnN1YnNjcmlwdGlvbixcbiAgICAgIGF0dHJpYnV0ZXM6IHByb2R1Y3RCdXlCdXR0b25TdGF0ZS5hdHRyaWJ1dGVzLFxuICAgICAgdmFyaWFudElkOiB2YXJpYW50Lm5vZGUuaWQsXG4gICAgfSlcblxuICAgIGNvbnN0IGxpbmVzID0gYnVpbGRMaW5lcyh2YXJpYW50LCBxdWFudGl0eSwgcHJvZHVjdEJ1eUJ1dHRvblN0YXRlKVxuXG4gICAgaWYgKGlzRGlyZWN0Q2hlY2tvdXQpIHtcbiAgICAgIHZhciBjaGVja291dERhdGEgPSB7XG4gICAgICAgIGxpbmVzOiBsaW5lcyxcbiAgICAgICAgbGluZUl0ZW1PcHRpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyaWFudElkOiB2YXJpYW50Lm5vZGUuaWQsXG4gICAgICAgICAgICBvcHRpb25zOiBsaW5lSXRlbU9wdGlvbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbm90ZTogZmFsc2UsXG4gICAgICAgIGRpc2NvdW50Q29kZTogZmFsc2UsXG4gICAgICAgIGN1c3RvbUF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgfVxuXG4gICAgICBwcm9kdWN0RGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcIlNFVF9ESVJFQ1RfQ0hFQ0tPVVRfUEFSQU1TXCIsXG4gICAgICAgIHBheWxvYWQ6IGNoZWNrb3V0RGF0YSxcbiAgICAgIH0pXG5cbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lTX0RJUkVDVF9DSEVDS09VVFwiLCBwYXlsb2FkOiB0cnVlIH0pXG5cbiAgICAgIHNldElzQ2hlY2tpbmdPdXQodHJ1ZSlcblxuICAgICAgd3AuaG9va3MuZG9BY3Rpb24oXCJkby5kaXJlY3RDaGVja291dFwiLCBjaGVja291dERhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc2V0QWZ0ZXIgPSBzZXR0aW5ncy5yZXNldFZhcmlhbnRzQWZ0ZXJBZGRpbmdcbiAgICAgIGNvbnN0IG9wZW5DYXJ0QWZ0ZXJBZGRpbmcgPSBzZXR0aW5ncy5vcGVuQ2FydEFmdGVyQWRkaW5nXG5cbiAgICAgIGxldCBhZGRUb0NhcnRQYXJhbXMgPSB7XG4gICAgICAgIGxpbmVzOiBsaW5lcyxcbiAgICAgICAgZXh0cmFzOiB7XG4gICAgICAgICAgb3BlbkNhcnRBZnRlckFkZGluZzogc2V0dGluZ3Mub3BlbkNhcnRBZnRlckFkZGluZyxcbiAgICAgICAgfSxcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcm9kdWN0QnV5QnV0dG9uU3RhdGUucGF5bG9hZC5yZXF1aXJlc1NlbGxpbmdQbGFuICYmXG4gICAgICAgICFwcm9kdWN0QnV5QnV0dG9uU3RhdGUuc3Vic2NyaXB0aW9uXG4gICAgICApIHtcbiAgICAgICAgcHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIlNFVF9OT1RJQ0VcIixcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICBcIlRoaXMgcHJvZHVjdCBjYW5ub3QgYmUgcHVyY2hhc2VkIHdpdGhvdXQgYSBzdWJzY3JpcHRpb24uIFBsZWFzZSBzZWxlY3QgYSBzdWJzY3JpcHRpb24gYW5kIHRyeSBhZ2Fpbi4gSWYgeW91IGRvbid0IHNlZSBhIHN1YnNjcmlwdGlvbiwgeW91IG1heSBuZWVkIHRvIHR1cm4gdGhpcyBmZWF0dXJlIG9uLlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAobWF4UXVhbnRpdHkpIHtcbiAgICAgICAgaWYgKG9wZW5DYXJ0QWZ0ZXJBZGRpbmcpIHtcbiAgICAgICAgICB3cC5ob29rcy5kb0FjdGlvbihcImRvLmNhcnRUb2dnbGVcIiwgXCJvcGVuXCIpXG4gICAgICAgIH1cblxuICAgICAgICBwcm9kdWN0RGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TRUxFQ1RFRF9WQVJJQU5UXCIsIHBheWxvYWQ6IGZhbHNlIH0pXG4gICAgICAgIHByb2R1Y3RCdXlCdXR0b25EaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogXCJVUERBVEVfU0VMRUNURURfT1BUSU9OU1wiLFxuICAgICAgICAgIHBheWxvYWQ6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgICBwcm9kdWN0RGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9NSVNTSU5HX1NFTEVDVElPTlNcIiwgcGF5bG9hZDogZmFsc2UgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmVzZXRBZnRlcikge1xuICAgICAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0FEREVEX1ZBUklBTlRcIiwgcGF5bG9hZDogdmFyaWFudC5ub2RlIH0pXG4gICAgICAgICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJTRVRfU0VMRUNURURfVkFSSUFOVFwiLCBwYXlsb2FkOiBmYWxzZSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIlVQREFURV9TRUxFQ1RFRF9PUFRJT05TXCIsXG4gICAgICAgICAgcGF5bG9hZDogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX01JU1NJTkdfU0VMRUNUSU9OU1wiLCBwYXlsb2FkOiBmYWxzZSB9KVxuXG4gICAgICAgIHdwLmhvb2tzLmRvQWN0aW9uKFwiZG8uYWRkVG9DYXJ0XCIsIGFkZFRvQ2FydFBhcmFtcylcbiAgICAgICAgd3AuaG9va3MuZG9BY3Rpb24oXCJvbi5hZnRlckFkZFRvQ2FydFwiLCBsaW5lcywgdmFyaWFudC5ub2RlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgcmVmPXtidXR0b259XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgaXRlbVByb3A9XCJwb3RlbnRpYWxBY3Rpb25cIlxuICAgICAgICBpdGVtU2NvcGVcbiAgICAgICAgaXRlbVR5cGU9XCJodHRwczovL3NjaGVtYS5vcmcvQnV5QWN0aW9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwid3BzLWJ0biB3cHMtYnRuLXNlY29uZGFyeSB3cHMtYWRkLXRvLWNhcnRcIlxuICAgICAgICBkYXRhLXdwcy1pcy1kaXJlY3QtY2hlY2tvdXQ9e2lzRGlyZWN0Q2hlY2tvdXQgPyBcIjFcIiA6IFwiMFwifVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgY3NzPXtbYnV0dG9uQ1NTLCBhZGRUb0NhcnRDU1NdfVxuICAgICAgICBkaXNhYmxlZD17aXNDaGVja2luZ091dCB8fCBpc0Rpc2FibGVkfVxuICAgICAgPlxuICAgICAgICB7aXNDaGVja2luZ091dCA/IChcbiAgICAgICAgICBsb2FkZXJcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8QWRkQnV0dG9uVGV4dFxuICAgICAgICAgICAgaXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgICAgIGFkZGVkVG9DYXJ0PXthZGRlZFRvQ2FydH1cbiAgICAgICAgICAgIGJ1dHRvblRleHQ9e2J1dHRvblRleHR9XG4gICAgICAgICAgICBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3I9e2FkZFRvQ2FydEJ1dHRvblRleHRDb2xvcn1cbiAgICAgICAgICAgIGFmdGVyQWRkZWRUZXh0PXtzZXR0aW5ncy5hZnRlckFkZGVkVGV4dH1cbiAgICAgICAgICAgIHByb2R1Y3RCdXlCdXR0b25TdGF0ZT17cHJvZHVjdEJ1eUJ1dHRvblN0YXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAge3Byb2R1Y3RCdXlCdXR0b25TdGF0ZS5ub3RpY2UgPyAoXG4gICAgICAgIDxOb3RpY2Ugc3RhdHVzPXtwcm9kdWN0QnV5QnV0dG9uU3RhdGUubm90aWNlLnR5cGV9IGV4dHJhQ1NTPXtOb3RpY2VDU1N9PlxuICAgICAgICAgIHtwcm9kdWN0QnV5QnV0dG9uU3RhdGUubm90aWNlLm1lc3NhZ2V9XG4gICAgICAgIDwvTm90aWNlPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gQWRkQnV0dG9uVGV4dCh7XG4gIGJ1dHRvblRleHQsXG4gIGFkZGVkVG9DYXJ0LFxuICBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3IsXG4gIGFmdGVyQWRkZWRUZXh0LFxuICBpc0Rpc2FibGVkLFxuICBwcm9kdWN0QnV5QnV0dG9uU3RhdGUsXG59KSB7XG4gIGNvbnN0IFthZGRlZCwgc2V0QWRkZWRdID0gdXNlU3RhdGUoKCkgPT4gZmFsc2UpXG4gIGNvbnN0IGFkZGVkVGVzdCA9IHVzZVJlZigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWRkZWRUb0NhcnQpIHtcbiAgICAgIHNldEFkZGVkKHRydWUpXG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYWRkZWRUZXN0LmN1cnJlbnQpIHtcbiAgICAgICAgICBzZXRBZGRlZChmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSwgMzAwMClcbiAgICB9XG4gIH0sIFthZGRlZFRvQ2FydF0pXG5cbiAgY29uc3QgQWRkQnV0dG9uVGV4dENTUyA9IGNzc2BcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogJHthZGRUb0NhcnRCdXR0b25UZXh0Q29sb3IgPyBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3IgOiBcImluaGVyaXRcIn07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiAke2lzRGlzYWJsZWQgPyBcIm5vdC1hbGxvd2VkXCIgOiBcInBvaW50ZXJcIn07XG4gICAgfVxuICBgXG5cbiAgZnVuY3Rpb24gZ2V0QnV0dG9uVGV4dCgpIHtcbiAgICBpZiAoYWRkZWQpIHtcbiAgICAgIHZhciB0ZXh0ID0gYWZ0ZXJBZGRlZFRleHRcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRleHQgPSBidXR0b25UZXh0XG4gICAgfVxuXG4gICAgcmV0dXJuIHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgIFwicHJvZHVjdC5hZGRUb0NhcnQudGV4dFwiLFxuICAgICAgdGV4dCxcbiAgICAgIHByb2R1Y3RCdXlCdXR0b25TdGF0ZVxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIGNzcz17QWRkQnV0dG9uVGV4dENTU31cbiAgICAgIHJlZj17YWRkZWRUZXN0fVxuICAgICAgYXJpYS1sYWJlbD1cIlByb2R1Y3QgQWRkIHRvIENhcnQgVGV4dFwiXG4gICAgPlxuICAgICAge2dldEJ1dHRvblRleHQoKX1cbiAgICA8L3NwYW4+XG4gIClcbn1cblxuZnVuY3Rpb24gUHJvZHVjdEFkZEJ1dHRvbih7XG4gIGhhc0xpbmssXG4gIHBheWxvYWQsXG4gIGxpbmtUYXJnZXQsXG4gIGxpbmtUbyxcbiAgbGlua1dpdGhCdXlCdXR0b24sXG4gIGFkZFRvQ2FydEJ1dHRvbkNvbG9yLFxuICBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3IsXG4gIGlzRGlyZWN0Q2hlY2tvdXQsXG4gIGhhc01hbnlWYXJpYW50cyxcbiAgcHJvZHVjdERpc3BhdGNoLFxuICBidXR0b25UZXh0LFxuICBhZGRlZFRvQ2FydCxcbiAgcXVhbnRpdHksXG4gIHNlbGVjdGVkT3B0aW9ucyxcbiAgc2V0dGluZ3MsXG4gIHNob3VsZFNob3dRdWFudGl0eSxcbn0pIHtcbiAgY29uc3QgQWRkQnV0dG9uV3JhcHBlckNTUyA9IGNzc2BcbiAgICBkaXNwbGF5OiAke3Nob3VsZFNob3dRdWFudGl0eSA/IFwiZmxleFwiIDogXCJibG9ja1wifTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAud3BzLXF1YW50aXR5LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgICR7bXEoXCJtZWRpdW1cIil9IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC53cHMtcXVhbnRpdHktY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIGBcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cIndwcy1jb21wb25lbnQgd3BzLWNvbXBvbmVudC1wcm9kdWN0cy1hZGQtYnV0dG9uIHdwcy1idG4td3JhcHBlclwiXG4gICAgICBhcmlhLWxhYmVsPVwiUHJvZHVjdCBBZGQgQnV0dG9uXCJcbiAgICA+XG4gICAgICA8ZGl2IGNzcz17QWRkQnV0dG9uV3JhcHBlckNTU30+XG4gICAgICAgIHtzaG91bGRTaG93UXVhbnRpdHkgPyAoXG4gICAgICAgICAgPFByb2R1Y3RRdWFudGl0eVxuICAgICAgICAgICAgbWluUXVhbnRpdHk9e3NldHRpbmdzLm1pblF1YW50aXR5fVxuICAgICAgICAgICAgbWF4UXVhbnRpdHk9e1xuICAgICAgICAgICAgICBzZXR0aW5ncy5tYXhRdWFudGl0eVxuICAgICAgICAgICAgICAgID8gc2V0dGluZ3MubWF4UXVhbnRpdHlcbiAgICAgICAgICAgICAgICA6IHBheWxvYWQudG90YWxJbnZlbnRvcnlcbiAgICAgICAgICAgICAgICA/IHBheWxvYWQudG90YWxJbnZlbnRvcnlcbiAgICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWFudGl0eVN0ZXA9e3NldHRpbmdzLnF1YW50aXR5U3RlcH1cbiAgICAgICAgICAgIHBheWxvYWQ9e3BheWxvYWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPEFkZEJ1dHRvbldyYXBwZXJcbiAgICAgICAgICBoYXNMaW5rPXtoYXNMaW5rfVxuICAgICAgICAgIHBheWxvYWQ9e3BheWxvYWR9XG4gICAgICAgICAgbGlua1RhcmdldD17bGlua1RhcmdldH1cbiAgICAgICAgICBsaW5rVG89e2xpbmtUb31cbiAgICAgICAgICBsaW5rV2l0aEJ1eUJ1dHRvbj17bGlua1dpdGhCdXlCdXR0b259XG4gICAgICAgICAgaXNEaXJlY3RDaGVja291dD17aXNEaXJlY3RDaGVja291dH1cbiAgICAgICAgPlxuICAgICAgICAgIDxBZGRCdXR0b25cbiAgICAgICAgICAgIGhhc0xpbms9e2hhc0xpbmt9XG4gICAgICAgICAgICBsaW5rV2l0aEJ1eUJ1dHRvbj17bGlua1dpdGhCdXlCdXR0b259XG4gICAgICAgICAgICBhZGRUb0NhcnRCdXR0b25Db2xvcj17YWRkVG9DYXJ0QnV0dG9uQ29sb3J9XG4gICAgICAgICAgICBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3I9e2FkZFRvQ2FydEJ1dHRvblRleHRDb2xvcn1cbiAgICAgICAgICAgIGxvYWRlcj17PExvYWRlciAvPn1cbiAgICAgICAgICAgIGlzRGlyZWN0Q2hlY2tvdXQ9e2lzRGlyZWN0Q2hlY2tvdXR9XG4gICAgICAgICAgICBoYXNNYW55VmFyaWFudHM9e2hhc01hbnlWYXJpYW50c31cbiAgICAgICAgICAgIHByb2R1Y3REaXNwYXRjaD17cHJvZHVjdERpc3BhdGNofVxuICAgICAgICAgICAgYnV0dG9uVGV4dD17YnV0dG9uVGV4dH1cbiAgICAgICAgICAgIGFkZGVkVG9DYXJ0PXthZGRlZFRvQ2FydH1cbiAgICAgICAgICAgIHF1YW50aXR5PXtxdWFudGl0eX1cbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucz17c2VsZWN0ZWRPcHRpb25zfVxuICAgICAgICAgICAgcGF5bG9hZD17cGF5bG9hZH1cbiAgICAgICAgICAgIHNldHRpbmdzPXtzZXR0aW5nc31cbiAgICAgICAgICAgIGxpbmtUbz17bGlua1RvfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQWRkQnV0dG9uV3JhcHBlcj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7c2hvcHdwLm1pc2MuaXNQcm8gJiZcbiAgICAgIHNldHRpbmdzLnNob3dJbnZlbnRvcnlMZXZlbHMgJiZcbiAgICAgIHBheWxvYWQuYXZhaWxhYmxlRm9yU2FsZSAmJlxuICAgICAgcGF5bG9hZC50b3RhbEludmVudG9yeSA/IChcbiAgICAgICAgPFByb2R1Y3RCdXlCdXR0b25MZWZ0SW5TdG9jayBzZXR0aW5ncz17c2V0dGluZ3N9IC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0QWRkQnV0dG9uXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function AddButton(_ref3) {
  var addToCartButtonColor = _ref3.addToCartButtonColor,
      addToCartButtonTextColor = _ref3.addToCartButtonTextColor,
      hasLink = _ref3.hasLink,
      linkWithBuyButton = _ref3.linkWithBuyButton,
      isDirectCheckout = _ref3.isDirectCheckout,
      productDispatch = _ref3.productDispatch,
      hasManyVariants = _ref3.hasManyVariants,
      loader = _ref3.loader,
      buttonText = _ref3.buttonText,
      addedToCart = _ref3.addedToCart,
      quantity = _ref3.quantity,
      selectedOptions = _ref3.selectedOptions,
      payload = _ref3.payload,
      settings = _ref3.settings,
      linkTo = _ref3.linkTo;

  var _wp$element$useState = __webpack_provided_wp_dot_element.useState(false),
      _wp$element$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_wp$element$useState, 2),
      shouldShake = _wp$element$useState2[0],
      setShouldShake = _wp$element$useState2[1];

  function findVariant() {
    if (hasManyVariants) {
      return (0,Utils__WEBPACK_IMPORTED_MODULE_4__.findVariantFromSelectedOptions)(payload, selectedOptions);
    } else {
      return findSingleVariantFromPayload(payload);
    }
  }

  var _useState = useState(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      isDisabled = _useState2[0],
      setIsDisabled = _useState2[1];

  var variant = findVariant();
  useEffect(function () {
    var allOptionsSelected = (0,Utils__WEBPACK_IMPORTED_MODULE_4__.allOptionsSelectedMatch)(selectedOptions, payload);

    if (!allOptionsSelected) {
      setIsDisabled(false);
      return;
    }

    var variantNew = findVariant();

    if (!variantNew) {
      setIsDisabled(true);
      return;
    }

    if (variantNew.node.availableForSale) {
      setShouldShake(true);
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [selectedOptions]);

  var _useState3 = useState(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      isCheckingOut = _useState4[0],
      setIsCheckingOut = _useState4[1];

  var button = useRef();
  var productBuyButtonState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_6__.useProductBuyButtonState)();
  var productBuyButtonDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_6__.useProductBuyButtonDispatch)();
  var maxQuantity = settings.maxQuantity;
  var NoticeCSS = _ref;
  var headShake = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.keyframes)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\t\t0% {\n\t\t\ttransform: translateX(0);\n\t\t}\n\n\t\t6.5% {\n\t\t\ttransform: translateX(-6px) rotateY(-9deg);\n\t\t}\n\n\t\t18.5% {\n\t\t\ttransform: translateX(5px) rotateY(7deg);\n\t\t}\n\n\t\t31.5% {\n\t\t\ttransform: translateX(-3px) rotateY(-5deg);\n\t\t}\n\n\t\t43.5% {\n\t\t\ttransform: translateX(2px) rotateY(3deg);\n\t\t}\n\n\t\t50% {\n\t\t\ttransform: translateX(0);\n\t\t}\n\t"])));
  var addToCartCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.css)("font-family:", settings.addToCartButtonTypeFontFamily ? settings.addToCartButtonTypeFontFamily : "inherit", ";font-weight:", settings.addToCartButtonTypeFontWeight ? settings.addToCartButtonTypeFontWeight : "initial", ";font-style:", settings.addToCartButtonTypeFontStyle ? settings.addToCartButtonTypeFontStyle : "initial", ";font-size:", settings.addToCartButtonTypeFontSize ? settings.addToCartButtonTypeFontSize : "initial", ";letter-spacing:", settings.addToCartButtonTypeLetterSpacing ? settings.addToCartButtonTypeLetterSpacing : "initial", ";line-height:", settings.addToCartButtonTypeLineHeight ? settings.addToCartButtonTypeLineHeight : "initial", ";text-decoration:", settings.addToCartButtonTypeTextDecoration ? settings.addToCartButtonTypeTextDecoration : "initial", ";text-transform:", settings.addToCartButtonTypeTextTransform ? settings.addToCartButtonTypeTextTransform : "initial", ";overflow-y:hidden;flex:1;min-width:160px;min-height:45px;animation:", shouldShake ? /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.css)(headShake, " 0.9s ease-in-out;;label:addToCartCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vYWRkLWJ1dHRvbi9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd01hIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vYWRkLWJ1dHRvbi9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzLCBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHsgZmluZFZhcmlhbnRGcm9tU2VsZWN0ZWRPcHRpb25zLCBhbGxPcHRpb25zU2VsZWN0ZWRNYXRjaCB9IGZyb20gXCJVdGlsc1wiXG5pbXBvcnQgeyBidXR0b25DU1MsIG1xIH0gZnJvbSBcIkNvbW1vbi9jc3NcIlxuaW1wb3J0IHtcbiAgdXNlUHJvZHVjdEJ1eUJ1dHRvblN0YXRlLFxuICB1c2VQcm9kdWN0QnV5QnV0dG9uRGlzcGF0Y2gsXG59IGZyb20gXCIuLi9fc3RhdGUvaG9va3NcIlxuXG5pbXBvcnQgUHJvZHVjdFF1YW50aXR5IGZyb20gXCIuLi9xdWFudGl0eVwiXG5pbXBvcnQgTm90aWNlIGZyb20gXCIuLi8uLi8uLi8uLi9ub3RpY2VcIlxuaW1wb3J0IExpbmsgZnJvbSBcIi4uLy4uLy4uLy4uL2xpbmtcIlxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vLi4vLi4vLi4vbG9hZGVyXCJcbmltcG9ydCBQcm9kdWN0QnV5QnV0dG9uTGVmdEluU3RvY2sgZnJvbSBcIi4uL2xlZnQtaW4tc3RvY2tcIlxuXG5jb25zdCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9ID0gd3AuZWxlbWVudFxuXG5mdW5jdGlvbiBmaW5kU2luZ2xlVmFyaWFudEZyb21QYXlsb2FkKHBheWxvYWQpIHtcbiAgaWYgKCFwYXlsb2FkLnZhcmlhbnRzLmVkZ2VzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHBheWxvYWQudmFyaWFudHMuZWRnZXNbMF1cbn1cblxuZnVuY3Rpb24gYnVpbGRMaW5lcyh2YXJpYW50LCBxdWFudGl0eSwgcHJvZHVjdEJ1eUJ1dHRvblN0YXRlKSB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgYXR0cmlidXRlczogd3AuaG9va3MuYXBwbHlGaWx0ZXJzKFxuICAgICAgXCJjYXJ0LmxpbmVJdGVtQXR0cmlidXRlc1wiLFxuICAgICAgW10sXG4gICAgICB2YXJpYW50LFxuICAgICAgcXVhbnRpdHksXG4gICAgICBwcm9kdWN0QnV5QnV0dG9uU3RhdGVcbiAgICApLFxuICAgIG1lcmNoYW5kaXNlSWQ6IHZhcmlhbnQubm9kZS5pZCxcbiAgICBxdWFudGl0eTogcXVhbnRpdHksXG4gIH1cblxuICBpZiAocHJvZHVjdEJ1eUJ1dHRvblN0YXRlPy5zdWJzY3JpcHRpb24pIHtcbiAgICBkYXRhW1wic2VsbGluZ1BsYW5JZFwiXSA9IHByb2R1Y3RCdXlCdXR0b25TdGF0ZS5zdWJzY3JpcHRpb24uc2VsbGluZ1BsYW5JZFxuICB9XG5cbiAgcmV0dXJuIFtkYXRhXVxufVxuXG5mdW5jdGlvbiBBZGRCdXR0b25XcmFwcGVyKHtcbiAgaGFzTGluayxcbiAgcGF5bG9hZCxcbiAgY2hpbGRyZW4sXG4gIGxpbmtUbyxcbiAgbGlua1RhcmdldCxcbiAgaXNEaXJlY3RDaGVja291dCxcbiAgbGlua1dpdGhCdXlCdXR0b24sXG59KSB7XG4gIHJldHVybiBoYXNMaW5rICYmICFpc0RpcmVjdENoZWNrb3V0ICYmICFsaW5rV2l0aEJ1eUJ1dHRvbiA/IChcbiAgICA8TGluayB0eXBlPVwicHJvZHVjdHNcIiBwYXlsb2FkPXtwYXlsb2FkfSBsaW5rVG89e2xpbmtUb30gdGFyZ2V0PXtsaW5rVGFyZ2V0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xpbms+XG4gICkgOiAoXG4gICAgY2hpbGRyZW5cbiAgKVxufVxuXG5mdW5jdGlvbiBBZGRCdXR0b24oe1xuICBhZGRUb0NhcnRCdXR0b25Db2xvcixcbiAgYWRkVG9DYXJ0QnV0dG9uVGV4dENvbG9yLFxuICBoYXNMaW5rLFxuICBsaW5rV2l0aEJ1eUJ1dHRvbixcbiAgaXNEaXJlY3RDaGVja291dCxcbiAgcHJvZHVjdERpc3BhdGNoLFxuICBoYXNNYW55VmFyaWFudHMsXG4gIGxvYWRlcixcbiAgYnV0dG9uVGV4dCxcbiAgYWRkZWRUb0NhcnQsXG4gIHF1YW50aXR5LFxuICBzZWxlY3RlZE9wdGlvbnMsXG4gIHBheWxvYWQsXG4gIHNldHRpbmdzLFxuICBsaW5rVG8sXG59KSB7XG4gIGNvbnN0IFtzaG91bGRTaGFrZSwgc2V0U2hvdWxkU2hha2VdID0gd3AuZWxlbWVudC51c2VTdGF0ZShmYWxzZSlcblxuICBmdW5jdGlvbiBmaW5kVmFyaWFudCgpIHtcbiAgICBpZiAoaGFzTWFueVZhcmlhbnRzKSB7XG4gICAgICByZXR1cm4gZmluZFZhcmlhbnRGcm9tU2VsZWN0ZWRPcHRpb25zKHBheWxvYWQsIHNlbGVjdGVkT3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZpbmRTaW5nbGVWYXJpYW50RnJvbVBheWxvYWQocGF5bG9hZClcbiAgICB9XG4gIH1cblxuICBjb25zdCBbaXNEaXNhYmxlZCwgc2V0SXNEaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgdmFyIHZhcmlhbnQgPSBmaW5kVmFyaWFudCgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgYWxsT3B0aW9uc1NlbGVjdGVkID0gYWxsT3B0aW9uc1NlbGVjdGVkTWF0Y2goc2VsZWN0ZWRPcHRpb25zLCBwYXlsb2FkKVxuXG4gICAgaWYgKCFhbGxPcHRpb25zU2VsZWN0ZWQpIHtcbiAgICAgIHNldElzRGlzYWJsZWQoZmFsc2UpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgdmFyaWFudE5ldyA9IGZpbmRWYXJpYW50KClcblxuICAgIGlmICghdmFyaWFudE5ldykge1xuICAgICAgc2V0SXNEaXNhYmxlZCh0cnVlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHZhcmlhbnROZXcubm9kZS5hdmFpbGFibGVGb3JTYWxlKSB7XG4gICAgICBzZXRTaG91bGRTaGFrZSh0cnVlKVxuICAgICAgc2V0SXNEaXNhYmxlZChmYWxzZSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNEaXNhYmxlZCh0cnVlKVxuICAgIH1cbiAgfSwgW3NlbGVjdGVkT3B0aW9uc10pXG5cbiAgY29uc3QgW2lzQ2hlY2tpbmdPdXQsIHNldElzQ2hlY2tpbmdPdXRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgYnV0dG9uID0gdXNlUmVmKClcbiAgY29uc3QgcHJvZHVjdEJ1eUJ1dHRvblN0YXRlID0gdXNlUHJvZHVjdEJ1eUJ1dHRvblN0YXRlKClcbiAgY29uc3QgcHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoID0gdXNlUHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoKClcbiAgY29uc3QgbWF4UXVhbnRpdHkgPSBzZXR0aW5ncy5tYXhRdWFudGl0eVxuXG4gIGNvbnN0IE5vdGljZUNTUyA9IGNzc2BcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICBgXG5cbiAgY29uc3QgaGVhZFNoYWtlID0ga2V5ZnJhbWVzYFxuXHRcdDAlIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0XHR9XG5cblx0XHQ2LjUlIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKTtcblx0XHR9XG5cblx0XHQxOC41JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpO1xuXHRcdH1cblxuXHRcdDMxLjUlIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKTtcblx0XHR9XG5cblx0XHQ0My41JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpO1xuXHRcdH1cblxuXHRcdDUwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG5cdFx0fVxuXHRgXG5cbiAgY29uc3QgYWRkVG9DYXJ0Q1NTID0gY3NzYFxuXHRcdGZvbnQtZmFtaWx5OiAke1xuICAgICAgc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUZvbnRGYW1pbHlcbiAgICAgICAgPyBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udEZhbWlseVxuICAgICAgICA6IFwiaW5oZXJpdFwiXG4gICAgfTtcblx0XHRmb250LXdlaWdodDogJHtcbiAgICAgIHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVGb250V2VpZ2h0XG4gICAgICAgID8gc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUZvbnRXZWlnaHRcbiAgICAgICAgOiBcImluaXRpYWxcIlxuICAgIH07XG5cdFx0Zm9udC1zdHlsZTogJHtcbiAgICAgIHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVGb250U3R5bGVcbiAgICAgICAgPyBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFN0eWxlXG4gICAgICAgIDogXCJpbml0aWFsXCJcbiAgICB9O1xuXHRcdGZvbnQtc2l6ZTogJHtcbiAgICAgIHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVGb250U2l6ZVxuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVGb250U2l6ZVxuICAgICAgICA6IFwiaW5pdGlhbFwiXG4gICAgfTtcblx0XHRsZXR0ZXItc3BhY2luZzogJHtcbiAgICAgIHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVMZXR0ZXJTcGFjaW5nXG4gICAgICAgID8gc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUxldHRlclNwYWNpbmdcbiAgICAgICAgOiBcImluaXRpYWxcIlxuICAgIH07XG5cdFx0bGluZS1oZWlnaHQ6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlTGluZUhlaWdodFxuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVMaW5lSGVpZ2h0XG4gICAgICAgIDogXCJpbml0aWFsXCJcbiAgICB9O1xuXHRcdHRleHQtZGVjb3JhdGlvbjogJHtcbiAgICAgIHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVUZXh0RGVjb3JhdGlvblxuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVUZXh0RGVjb3JhdGlvblxuICAgICAgICA6IFwiaW5pdGlhbFwiXG4gICAgfTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogJHtcbiAgICAgIHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVUZXh0VHJhbnNmb3JtXG4gICAgICAgID8gc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZVRleHRUcmFuc2Zvcm1cbiAgICAgICAgOiBcImluaXRpYWxcIlxuICAgIH07XG5cdFx0b3ZlcmZsb3cteTogaGlkZGVuO1xuXHRcdGZsZXg6IDE7XG5cdFx0bWluLXdpZHRoOiAxNjBweDtcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xuXHRcdGFuaW1hdGlvbjogJHtcbiAgICAgIHNob3VsZFNoYWtlXG4gICAgICAgID8gY3NzYFxuICAgICAgICAgICAgJHtoZWFkU2hha2V9IDAuOXMgZWFzZS1pbi1vdXRcbiAgICAgICAgICBgXG4gICAgICAgIDogXCJub25lXCJcbiAgICB9XG5cblx0XHQmOmZvY3VzLFxuXHRcdCY6aG92ZXIge1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0Y3Vyc29yOiAke2lzQ2hlY2tpbmdPdXQgfHwgaXNEaXNhYmxlZCA/IFwibm90LWFsbG93ZWRcIiA6IFwicG9pbnRlclwifTtcblxuXHRcdFx0Y29sb3I6ICR7XG4gICAgICAgIGlzQ2hlY2tpbmdPdXQgfHwgaXNEaXNhYmxlZFxuICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXCJcbiAgICAgICAgICA6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpXCJcbiAgICAgIH07XG5cdFx0fVxuXG5cdFx0JiYge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtpc0Rpc2FibGVkID8gXCIjY2ZjZmNmXCIgOiBhZGRUb0NhcnRCdXR0b25Db2xvcn07XG5cdFx0fVxuXHRgXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIGlmIChsaW5rVG8gPT09IFwibW9kYWxcIiAmJiBzaG9wd3AubWlzYy5pc1BybyAmJiAhaXNEaXJlY3RDaGVja291dCkge1xuICAgICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJUT0dHTEVfTU9EQUxcIiwgcGF5bG9hZDogdHJ1ZSB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGhhc0xpbmsgJiYgIWlzRGlyZWN0Q2hlY2tvdXQgJiYgIWxpbmtXaXRoQnV5QnV0dG9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIGNoZWNrIGlmIGFsbCBvcHRpb25zIGFyZSBzZWxlY3RlZFxuICAgIC8vIGlmIHNvbWUgYXJlIG5vdCBzZWxlY3RlZCwgaGlnaGxpZ2h0IHRoZW0gLyBzaGFrZSB0aGVtXG4gICAgaWYgKCF2YXJpYW50ICYmIGhhc01hbnlWYXJpYW50cykge1xuICAgICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJTRVRfTUlTU0lOR19TRUxFQ1RJT05TXCIsIHBheWxvYWQ6IHRydWUgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghdmFyaWFudCkge1xuICAgICAgLy8gVE9ETzogSGFuZGxlIHRoaXMgYmV0dGVyXG4gICAgICBjb25zb2xlLmVycm9yKFwiU2hvcFdQIGVycm9yOiBoYW5kbGVDbGljayB2YXJpYW50IHVuZGVmaW5lZCBcIilcblxuICAgICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJTRVRfTUlTU0lOR19TRUxFQ1RJT05TXCIsIHBheWxvYWQ6IHRydWUgfSlcbiAgICAgIHByb2R1Y3RCdXlCdXR0b25EaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwiVVBEQVRFX1NFTEVDVEVEX09QVElPTlNcIixcbiAgICAgICAgcGF5bG9hZDogZmFsc2UsXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbGluZUl0ZW1PcHRpb25zID0gd3AuaG9va3MuYXBwbHlGaWx0ZXJzKFwicHJvZHVjdC5saW5lSXRlbU9wdGlvbnNcIiwge1xuICAgICAgbWluUXVhbnRpdHk6IHNldHRpbmdzLm1pblF1YW50aXR5LFxuICAgICAgbWF4UXVhbnRpdHk6IHNldHRpbmdzLm1heFF1YW50aXR5LFxuICAgICAgc3Vic2NyaXB0aW9uOiBwcm9kdWN0QnV5QnV0dG9uU3RhdGUuc3Vic2NyaXB0aW9uLFxuICAgICAgYXR0cmlidXRlczogcHJvZHVjdEJ1eUJ1dHRvblN0YXRlLmF0dHJpYnV0ZXMsXG4gICAgICB2YXJpYW50SWQ6IHZhcmlhbnQubm9kZS5pZCxcbiAgICB9KVxuXG4gICAgY29uc3QgbGluZXMgPSBidWlsZExpbmVzKHZhcmlhbnQsIHF1YW50aXR5LCBwcm9kdWN0QnV5QnV0dG9uU3RhdGUpXG5cbiAgICBpZiAoaXNEaXJlY3RDaGVja291dCkge1xuICAgICAgdmFyIGNoZWNrb3V0RGF0YSA9IHtcbiAgICAgICAgbGluZXM6IGxpbmVzLFxuICAgICAgICBsaW5lSXRlbU9wdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXJpYW50SWQ6IHZhcmlhbnQubm9kZS5pZCxcbiAgICAgICAgICAgIG9wdGlvbnM6IGxpbmVJdGVtT3B0aW9ucyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBub3RlOiBmYWxzZSxcbiAgICAgICAgZGlzY291bnRDb2RlOiBmYWxzZSxcbiAgICAgICAgY3VzdG9tQXR0cmlidXRlczogZmFsc2UsXG4gICAgICB9XG5cbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwiU0VUX0RJUkVDVF9DSEVDS09VVF9QQVJBTVNcIixcbiAgICAgICAgcGF5bG9hZDogY2hlY2tvdXREYXRhLFxuICAgICAgfSlcblxuICAgICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJTRVRfSVNfRElSRUNUX0NIRUNLT1VUXCIsIHBheWxvYWQ6IHRydWUgfSlcblxuICAgICAgc2V0SXNDaGVja2luZ091dCh0cnVlKVxuXG4gICAgICB3cC5ob29rcy5kb0FjdGlvbihcImRvLmRpcmVjdENoZWNrb3V0XCIsIGNoZWNrb3V0RGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzZXRBZnRlciA9IHNldHRpbmdzLnJlc2V0VmFyaWFudHNBZnRlckFkZGluZ1xuICAgICAgY29uc3Qgb3BlbkNhcnRBZnRlckFkZGluZyA9IHNldHRpbmdzLm9wZW5DYXJ0QWZ0ZXJBZGRpbmdcblxuICAgICAgbGV0IGFkZFRvQ2FydFBhcmFtcyA9IHtcbiAgICAgICAgbGluZXM6IGxpbmVzLFxuICAgICAgICBleHRyYXM6IHtcbiAgICAgICAgICBvcGVuQ2FydEFmdGVyQWRkaW5nOiBzZXR0aW5ncy5vcGVuQ2FydEFmdGVyQWRkaW5nLFxuICAgICAgICB9LFxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHByb2R1Y3RCdXlCdXR0b25TdGF0ZS5wYXlsb2FkLnJlcXVpcmVzU2VsbGluZ1BsYW4gJiZcbiAgICAgICAgIXByb2R1Y3RCdXlCdXR0b25TdGF0ZS5zdWJzY3JpcHRpb25cbiAgICAgICkge1xuICAgICAgICBwcm9kdWN0QnV5QnV0dG9uRGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFwiU0VUX05PVElDRVwiLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgIFwiVGhpcyBwcm9kdWN0IGNhbm5vdCBiZSBwdXJjaGFzZWQgd2l0aG91dCBhIHN1YnNjcmlwdGlvbi4gUGxlYXNlIHNlbGVjdCBhIHN1YnNjcmlwdGlvbiBhbmQgdHJ5IGFnYWluLiBJZiB5b3UgZG9uJ3Qgc2VlIGEgc3Vic2NyaXB0aW9uLCB5b3UgbWF5IG5lZWQgdG8gdHVybiB0aGlzIGZlYXR1cmUgb24uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChtYXhRdWFudGl0eSkge1xuICAgICAgICBpZiAob3BlbkNhcnRBZnRlckFkZGluZykge1xuICAgICAgICAgIHdwLmhvb2tzLmRvQWN0aW9uKFwiZG8uY2FydFRvZ2dsZVwiLCBcIm9wZW5cIilcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NFTEVDVEVEX1ZBUklBTlRcIiwgcGF5bG9hZDogZmFsc2UgfSlcbiAgICAgICAgcHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIlVQREFURV9TRUxFQ1RFRF9PUFRJT05TXCIsXG4gICAgICAgICAgcGF5bG9hZDogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX01JU1NJTkdfU0VMRUNUSU9OU1wiLCBwYXlsb2FkOiBmYWxzZSB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyZXNldEFmdGVyKSB7XG4gICAgICAgICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJTRVRfQURERURfVkFSSUFOVFwiLCBwYXlsb2FkOiB2YXJpYW50Lm5vZGUgfSlcbiAgICAgICAgICBwcm9kdWN0RGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TRUxFQ1RFRF9WQVJJQU5UXCIsIHBheWxvYWQ6IGZhbHNlIH0pXG4gICAgICAgIH1cblxuICAgICAgICBwcm9kdWN0QnV5QnV0dG9uRGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFwiVVBEQVRFX1NFTEVDVEVEX09QVElPTlNcIixcbiAgICAgICAgICBwYXlsb2FkOiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJTRVRfTUlTU0lOR19TRUxFQ1RJT05TXCIsIHBheWxvYWQ6IGZhbHNlIH0pXG5cbiAgICAgICAgd3AuaG9va3MuZG9BY3Rpb24oXCJkby5hZGRUb0NhcnRcIiwgYWRkVG9DYXJ0UGFyYW1zKVxuICAgICAgICB3cC5ob29rcy5kb0FjdGlvbihcIm9uLmFmdGVyQWRkVG9DYXJ0XCIsIGxpbmVzLCB2YXJpYW50Lm5vZGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9e2J1dHRvbn1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICBpdGVtUHJvcD1cInBvdGVudGlhbEFjdGlvblwiXG4gICAgICAgIGl0ZW1TY29wZVxuICAgICAgICBpdGVtVHlwZT1cImh0dHBzOi8vc2NoZW1hLm9yZy9CdXlBY3Rpb25cIlxuICAgICAgICBjbGFzc05hbWU9XCJ3cHMtYnRuIHdwcy1idG4tc2Vjb25kYXJ5IHdwcy1hZGQtdG8tY2FydFwiXG4gICAgICAgIGRhdGEtd3BzLWlzLWRpcmVjdC1jaGVja291dD17aXNEaXJlY3RDaGVja291dCA/IFwiMVwiIDogXCIwXCJ9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBjc3M9e1tidXR0b25DU1MsIGFkZFRvQ2FydENTU119XG4gICAgICAgIGRpc2FibGVkPXtpc0NoZWNraW5nT3V0IHx8IGlzRGlzYWJsZWR9XG4gICAgICA+XG4gICAgICAgIHtpc0NoZWNraW5nT3V0ID8gKFxuICAgICAgICAgIGxvYWRlclxuICAgICAgICApIDogKFxuICAgICAgICAgIDxBZGRCdXR0b25UZXh0XG4gICAgICAgICAgICBpc0Rpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgYWRkZWRUb0NhcnQ9e2FkZGVkVG9DYXJ0fVxuICAgICAgICAgICAgYnV0dG9uVGV4dD17YnV0dG9uVGV4dH1cbiAgICAgICAgICAgIGFkZFRvQ2FydEJ1dHRvblRleHRDb2xvcj17YWRkVG9DYXJ0QnV0dG9uVGV4dENvbG9yfVxuICAgICAgICAgICAgYWZ0ZXJBZGRlZFRleHQ9e3NldHRpbmdzLmFmdGVyQWRkZWRUZXh0fVxuICAgICAgICAgICAgcHJvZHVjdEJ1eUJ1dHRvblN0YXRlPXtwcm9kdWN0QnV5QnV0dG9uU3RhdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7cHJvZHVjdEJ1eUJ1dHRvblN0YXRlLm5vdGljZSA/IChcbiAgICAgICAgPE5vdGljZSBzdGF0dXM9e3Byb2R1Y3RCdXlCdXR0b25TdGF0ZS5ub3RpY2UudHlwZX0gZXh0cmFDU1M9e05vdGljZUNTU30+XG4gICAgICAgICAge3Byb2R1Y3RCdXlCdXR0b25TdGF0ZS5ub3RpY2UubWVzc2FnZX1cbiAgICAgICAgPC9Ob3RpY2U+XG4gICAgICApIDogbnVsbH1cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBBZGRCdXR0b25UZXh0KHtcbiAgYnV0dG9uVGV4dCxcbiAgYWRkZWRUb0NhcnQsXG4gIGFkZFRvQ2FydEJ1dHRvblRleHRDb2xvcixcbiAgYWZ0ZXJBZGRlZFRleHQsXG4gIGlzRGlzYWJsZWQsXG4gIHByb2R1Y3RCdXlCdXR0b25TdGF0ZSxcbn0pIHtcbiAgY29uc3QgW2FkZGVkLCBzZXRBZGRlZF0gPSB1c2VTdGF0ZSgoKSA9PiBmYWxzZSlcbiAgY29uc3QgYWRkZWRUZXN0ID0gdXNlUmVmKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhZGRlZFRvQ2FydCkge1xuICAgICAgc2V0QWRkZWQodHJ1ZSlcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChhZGRlZFRlc3QuY3VycmVudCkge1xuICAgICAgICAgIHNldEFkZGVkKGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9LCAzMDAwKVxuICAgIH1cbiAgfSwgW2FkZGVkVG9DYXJ0XSlcblxuICBjb25zdCBBZGRCdXR0b25UZXh0Q1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAke2FkZFRvQ2FydEJ1dHRvblRleHRDb2xvciA/IGFkZFRvQ2FydEJ1dHRvblRleHRDb2xvciA6IFwiaW5oZXJpdFwifTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6ICR7aXNEaXNhYmxlZCA/IFwibm90LWFsbG93ZWRcIiA6IFwicG9pbnRlclwifTtcbiAgICB9XG4gIGBcblxuICBmdW5jdGlvbiBnZXRCdXR0b25UZXh0KCkge1xuICAgIGlmIChhZGRlZCkge1xuICAgICAgdmFyIHRleHQgPSBhZnRlckFkZGVkVGV4dFxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdGV4dCA9IGJ1dHRvblRleHRcbiAgICB9XG5cbiAgICByZXR1cm4gd3AuaG9va3MuYXBwbHlGaWx0ZXJzKFxuICAgICAgXCJwcm9kdWN0LmFkZFRvQ2FydC50ZXh0XCIsXG4gICAgICB0ZXh0LFxuICAgICAgcHJvZHVjdEJ1eUJ1dHRvblN0YXRlXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgY3NzPXtBZGRCdXR0b25UZXh0Q1NTfVxuICAgICAgcmVmPXthZGRlZFRlc3R9XG4gICAgICBhcmlhLWxhYmVsPVwiUHJvZHVjdCBBZGQgdG8gQ2FydCBUZXh0XCJcbiAgICA+XG4gICAgICB7Z2V0QnV0dG9uVGV4dCgpfVxuICAgIDwvc3Bhbj5cbiAgKVxufVxuXG5mdW5jdGlvbiBQcm9kdWN0QWRkQnV0dG9uKHtcbiAgaGFzTGluayxcbiAgcGF5bG9hZCxcbiAgbGlua1RhcmdldCxcbiAgbGlua1RvLFxuICBsaW5rV2l0aEJ1eUJ1dHRvbixcbiAgYWRkVG9DYXJ0QnV0dG9uQ29sb3IsXG4gIGFkZFRvQ2FydEJ1dHRvblRleHRDb2xvcixcbiAgaXNEaXJlY3RDaGVja291dCxcbiAgaGFzTWFueVZhcmlhbnRzLFxuICBwcm9kdWN0RGlzcGF0Y2gsXG4gIGJ1dHRvblRleHQsXG4gIGFkZGVkVG9DYXJ0LFxuICBxdWFudGl0eSxcbiAgc2VsZWN0ZWRPcHRpb25zLFxuICBzZXR0aW5ncyxcbiAgc2hvdWxkU2hvd1F1YW50aXR5LFxufSkge1xuICBjb25zdCBBZGRCdXR0b25XcmFwcGVyQ1NTID0gY3NzYFxuICAgIGRpc3BsYXk6ICR7c2hvdWxkU2hvd1F1YW50aXR5ID8gXCJmbGV4XCIgOiBcImJsb2NrXCJ9O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC53cHMtcXVhbnRpdHktY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgJHttcShcIm1lZGl1bVwiKX0ge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgLndwcy1xdWFudGl0eS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwid3BzLWNvbXBvbmVudCB3cHMtY29tcG9uZW50LXByb2R1Y3RzLWFkZC1idXR0b24gd3BzLWJ0bi13cmFwcGVyXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJQcm9kdWN0IEFkZCBCdXR0b25cIlxuICAgID5cbiAgICAgIDxkaXYgY3NzPXtBZGRCdXR0b25XcmFwcGVyQ1NTfT5cbiAgICAgICAge3Nob3VsZFNob3dRdWFudGl0eSA/IChcbiAgICAgICAgICA8UHJvZHVjdFF1YW50aXR5XG4gICAgICAgICAgICBtaW5RdWFudGl0eT17c2V0dGluZ3MubWluUXVhbnRpdHl9XG4gICAgICAgICAgICBtYXhRdWFudGl0eT17XG4gICAgICAgICAgICAgIHNldHRpbmdzLm1heFF1YW50aXR5XG4gICAgICAgICAgICAgICAgPyBzZXR0aW5ncy5tYXhRdWFudGl0eVxuICAgICAgICAgICAgICAgIDogcGF5bG9hZC50b3RhbEludmVudG9yeVxuICAgICAgICAgICAgICAgID8gcGF5bG9hZC50b3RhbEludmVudG9yeVxuICAgICAgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1YW50aXR5U3RlcD17c2V0dGluZ3MucXVhbnRpdHlTdGVwfVxuICAgICAgICAgICAgcGF5bG9hZD17cGF5bG9hZH1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICA8QWRkQnV0dG9uV3JhcHBlclxuICAgICAgICAgIGhhc0xpbms9e2hhc0xpbmt9XG4gICAgICAgICAgcGF5bG9hZD17cGF5bG9hZH1cbiAgICAgICAgICBsaW5rVGFyZ2V0PXtsaW5rVGFyZ2V0fVxuICAgICAgICAgIGxpbmtUbz17bGlua1RvfVxuICAgICAgICAgIGxpbmtXaXRoQnV5QnV0dG9uPXtsaW5rV2l0aEJ1eUJ1dHRvbn1cbiAgICAgICAgICBpc0RpcmVjdENoZWNrb3V0PXtpc0RpcmVjdENoZWNrb3V0fVxuICAgICAgICA+XG4gICAgICAgICAgPEFkZEJ1dHRvblxuICAgICAgICAgICAgaGFzTGluaz17aGFzTGlua31cbiAgICAgICAgICAgIGxpbmtXaXRoQnV5QnV0dG9uPXtsaW5rV2l0aEJ1eUJ1dHRvbn1cbiAgICAgICAgICAgIGFkZFRvQ2FydEJ1dHRvbkNvbG9yPXthZGRUb0NhcnRCdXR0b25Db2xvcn1cbiAgICAgICAgICAgIGFkZFRvQ2FydEJ1dHRvblRleHRDb2xvcj17YWRkVG9DYXJ0QnV0dG9uVGV4dENvbG9yfVxuICAgICAgICAgICAgbG9hZGVyPXs8TG9hZGVyIC8+fVxuICAgICAgICAgICAgaXNEaXJlY3RDaGVja291dD17aXNEaXJlY3RDaGVja291dH1cbiAgICAgICAgICAgIGhhc01hbnlWYXJpYW50cz17aGFzTWFueVZhcmlhbnRzfVxuICAgICAgICAgICAgcHJvZHVjdERpc3BhdGNoPXtwcm9kdWN0RGlzcGF0Y2h9XG4gICAgICAgICAgICBidXR0b25UZXh0PXtidXR0b25UZXh0fVxuICAgICAgICAgICAgYWRkZWRUb0NhcnQ9e2FkZGVkVG9DYXJ0fVxuICAgICAgICAgICAgcXVhbnRpdHk9e3F1YW50aXR5fVxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zPXtzZWxlY3RlZE9wdGlvbnN9XG4gICAgICAgICAgICBwYXlsb2FkPXtwYXlsb2FkfVxuICAgICAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgICAgICAgbGlua1RvPXtsaW5rVG99XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9BZGRCdXR0b25XcmFwcGVyPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtzaG9wd3AubWlzYy5pc1BybyAmJlxuICAgICAgc2V0dGluZ3Muc2hvd0ludmVudG9yeUxldmVscyAmJlxuICAgICAgcGF5bG9hZC5hdmFpbGFibGVGb3JTYWxlICYmXG4gICAgICBwYXlsb2FkLnRvdGFsSW52ZW50b3J5ID8gKFxuICAgICAgICA8UHJvZHVjdEJ1eUJ1dHRvbkxlZnRJblN0b2NrIHNldHRpbmdzPXtzZXR0aW5nc30gLz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RBZGRCdXR0b25cbiJdfQ== */")) : "none", " &:focus,&:hover{text-decoration:none;cursor:", isCheckingOut || isDisabled ? "not-allowed" : "pointer", ";color:", isCheckingOut || isDisabled ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.7)", ";}&&{background-color:", isDisabled ? "#cfcfcf" : addToCartButtonColor, ";};label:addToCartCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vYWRkLWJ1dHRvbi9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUowQiIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC9idXktYnV0dG9uL2FkZC1idXR0b24vaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IGZpbmRWYXJpYW50RnJvbVNlbGVjdGVkT3B0aW9ucywgYWxsT3B0aW9uc1NlbGVjdGVkTWF0Y2ggfSBmcm9tIFwiVXRpbHNcIlxuaW1wb3J0IHsgYnV0dG9uQ1NTLCBtcSB9IGZyb20gXCJDb21tb24vY3NzXCJcbmltcG9ydCB7XG4gIHVzZVByb2R1Y3RCdXlCdXR0b25TdGF0ZSxcbiAgdXNlUHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoLFxufSBmcm9tIFwiLi4vX3N0YXRlL2hvb2tzXCJcblxuaW1wb3J0IFByb2R1Y3RRdWFudGl0eSBmcm9tIFwiLi4vcXVhbnRpdHlcIlxuaW1wb3J0IE5vdGljZSBmcm9tIFwiLi4vLi4vLi4vLi4vbm90aWNlXCJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi8uLi8uLi8uLi9saW5rXCJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2xvYWRlclwiXG5pbXBvcnQgUHJvZHVjdEJ1eUJ1dHRvbkxlZnRJblN0b2NrIGZyb20gXCIuLi9sZWZ0LWluLXN0b2NrXCJcblxuY29uc3QgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnRcblxuZnVuY3Rpb24gZmluZFNpbmdsZVZhcmlhbnRGcm9tUGF5bG9hZChwYXlsb2FkKSB7XG4gIGlmICghcGF5bG9hZC52YXJpYW50cy5lZGdlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBwYXlsb2FkLnZhcmlhbnRzLmVkZ2VzWzBdXG59XG5cbmZ1bmN0aW9uIGJ1aWxkTGluZXModmFyaWFudCwgcXVhbnRpdHksIHByb2R1Y3RCdXlCdXR0b25TdGF0ZSkge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGF0dHJpYnV0ZXM6IHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgIFwiY2FydC5saW5lSXRlbUF0dHJpYnV0ZXNcIixcbiAgICAgIFtdLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHF1YW50aXR5LFxuICAgICAgcHJvZHVjdEJ1eUJ1dHRvblN0YXRlXG4gICAgKSxcbiAgICBtZXJjaGFuZGlzZUlkOiB2YXJpYW50Lm5vZGUuaWQsXG4gICAgcXVhbnRpdHk6IHF1YW50aXR5LFxuICB9XG5cbiAgaWYgKHByb2R1Y3RCdXlCdXR0b25TdGF0ZT8uc3Vic2NyaXB0aW9uKSB7XG4gICAgZGF0YVtcInNlbGxpbmdQbGFuSWRcIl0gPSBwcm9kdWN0QnV5QnV0dG9uU3RhdGUuc3Vic2NyaXB0aW9uLnNlbGxpbmdQbGFuSWRcbiAgfVxuXG4gIHJldHVybiBbZGF0YV1cbn1cblxuZnVuY3Rpb24gQWRkQnV0dG9uV3JhcHBlcih7XG4gIGhhc0xpbmssXG4gIHBheWxvYWQsXG4gIGNoaWxkcmVuLFxuICBsaW5rVG8sXG4gIGxpbmtUYXJnZXQsXG4gIGlzRGlyZWN0Q2hlY2tvdXQsXG4gIGxpbmtXaXRoQnV5QnV0dG9uLFxufSkge1xuICByZXR1cm4gaGFzTGluayAmJiAhaXNEaXJlY3RDaGVja291dCAmJiAhbGlua1dpdGhCdXlCdXR0b24gPyAoXG4gICAgPExpbmsgdHlwZT1cInByb2R1Y3RzXCIgcGF5bG9hZD17cGF5bG9hZH0gbGlua1RvPXtsaW5rVG99IHRhcmdldD17bGlua1RhcmdldH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MaW5rPlxuICApIDogKFxuICAgIGNoaWxkcmVuXG4gIClcbn1cblxuZnVuY3Rpb24gQWRkQnV0dG9uKHtcbiAgYWRkVG9DYXJ0QnV0dG9uQ29sb3IsXG4gIGFkZFRvQ2FydEJ1dHRvblRleHRDb2xvcixcbiAgaGFzTGluayxcbiAgbGlua1dpdGhCdXlCdXR0b24sXG4gIGlzRGlyZWN0Q2hlY2tvdXQsXG4gIHByb2R1Y3REaXNwYXRjaCxcbiAgaGFzTWFueVZhcmlhbnRzLFxuICBsb2FkZXIsXG4gIGJ1dHRvblRleHQsXG4gIGFkZGVkVG9DYXJ0LFxuICBxdWFudGl0eSxcbiAgc2VsZWN0ZWRPcHRpb25zLFxuICBwYXlsb2FkLFxuICBzZXR0aW5ncyxcbiAgbGlua1RvLFxufSkge1xuICBjb25zdCBbc2hvdWxkU2hha2UsIHNldFNob3VsZFNoYWtlXSA9IHdwLmVsZW1lbnQudXNlU3RhdGUoZmFsc2UpXG5cbiAgZnVuY3Rpb24gZmluZFZhcmlhbnQoKSB7XG4gICAgaWYgKGhhc01hbnlWYXJpYW50cykge1xuICAgICAgcmV0dXJuIGZpbmRWYXJpYW50RnJvbVNlbGVjdGVkT3B0aW9ucyhwYXlsb2FkLCBzZWxlY3RlZE9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmaW5kU2luZ2xlVmFyaWFudEZyb21QYXlsb2FkKHBheWxvYWQpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgW2lzRGlzYWJsZWQsIHNldElzRGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHZhciB2YXJpYW50ID0gZmluZFZhcmlhbnQoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIGFsbE9wdGlvbnNTZWxlY3RlZCA9IGFsbE9wdGlvbnNTZWxlY3RlZE1hdGNoKHNlbGVjdGVkT3B0aW9ucywgcGF5bG9hZClcblxuICAgIGlmICghYWxsT3B0aW9uc1NlbGVjdGVkKSB7XG4gICAgICBzZXRJc0Rpc2FibGVkKGZhbHNlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHZhcmlhbnROZXcgPSBmaW5kVmFyaWFudCgpXG5cbiAgICBpZiAoIXZhcmlhbnROZXcpIHtcbiAgICAgIHNldElzRGlzYWJsZWQodHJ1ZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh2YXJpYW50TmV3Lm5vZGUuYXZhaWxhYmxlRm9yU2FsZSkge1xuICAgICAgc2V0U2hvdWxkU2hha2UodHJ1ZSlcbiAgICAgIHNldElzRGlzYWJsZWQoZmFsc2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzRGlzYWJsZWQodHJ1ZSlcbiAgICB9XG4gIH0sIFtzZWxlY3RlZE9wdGlvbnNdKVxuXG4gIGNvbnN0IFtpc0NoZWNraW5nT3V0LCBzZXRJc0NoZWNraW5nT3V0XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGJ1dHRvbiA9IHVzZVJlZigpXG4gIGNvbnN0IHByb2R1Y3RCdXlCdXR0b25TdGF0ZSA9IHVzZVByb2R1Y3RCdXlCdXR0b25TdGF0ZSgpXG4gIGNvbnN0IHByb2R1Y3RCdXlCdXR0b25EaXNwYXRjaCA9IHVzZVByb2R1Y3RCdXlCdXR0b25EaXNwYXRjaCgpXG4gIGNvbnN0IG1heFF1YW50aXR5ID0gc2V0dGluZ3MubWF4UXVhbnRpdHlcblxuICBjb25zdCBOb3RpY2VDU1MgPSBjc3NgXG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgYFxuXG4gIGNvbnN0IGhlYWRTaGFrZSA9IGtleWZyYW1lc2Bcblx0XHQwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG5cdFx0fVxuXG5cdFx0Ni41JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyk7XG5cdFx0fVxuXG5cdFx0MTguNSUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKTtcblx0XHR9XG5cblx0XHQzMS41JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyk7XG5cdFx0fVxuXG5cdFx0NDMuNSUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCkgcm90YXRlWSgzZGVnKTtcblx0XHR9XG5cblx0XHQ1MCUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXHRcdH1cblx0YFxuXG4gIGNvbnN0IGFkZFRvQ2FydENTUyA9IGNzc2Bcblx0XHRmb250LWZhbWlseTogJHtcbiAgICAgIHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVGb250RmFtaWx5XG4gICAgICAgID8gc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUZvbnRGYW1pbHlcbiAgICAgICAgOiBcImluaGVyaXRcIlxuICAgIH07XG5cdFx0Zm9udC13ZWlnaHQ6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFdlaWdodFxuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVGb250V2VpZ2h0XG4gICAgICAgIDogXCJpbml0aWFsXCJcbiAgICB9O1xuXHRcdGZvbnQtc3R5bGU6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFN0eWxlXG4gICAgICAgID8gc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUZvbnRTdHlsZVxuICAgICAgICA6IFwiaW5pdGlhbFwiXG4gICAgfTtcblx0XHRmb250LXNpemU6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFNpemVcbiAgICAgICAgPyBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFNpemVcbiAgICAgICAgOiBcImluaXRpYWxcIlxuICAgIH07XG5cdFx0bGV0dGVyLXNwYWNpbmc6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlTGV0dGVyU3BhY2luZ1xuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVMZXR0ZXJTcGFjaW5nXG4gICAgICAgIDogXCJpbml0aWFsXCJcbiAgICB9O1xuXHRcdGxpbmUtaGVpZ2h0OiAke1xuICAgICAgc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUxpbmVIZWlnaHRcbiAgICAgICAgPyBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlTGluZUhlaWdodFxuICAgICAgICA6IFwiaW5pdGlhbFwiXG4gICAgfTtcblx0XHR0ZXh0LWRlY29yYXRpb246ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlVGV4dERlY29yYXRpb25cbiAgICAgICAgPyBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlVGV4dERlY29yYXRpb25cbiAgICAgICAgOiBcImluaXRpYWxcIlxuICAgIH07XG5cdFx0dGV4dC10cmFuc2Zvcm06ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlVGV4dFRyYW5zZm9ybVxuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVUZXh0VHJhbnNmb3JtXG4gICAgICAgIDogXCJpbml0aWFsXCJcbiAgICB9O1xuXHRcdG92ZXJmbG93LXk6IGhpZGRlbjtcblx0XHRmbGV4OiAxO1xuXHRcdG1pbi13aWR0aDogMTYwcHg7XG4gICAgbWluLWhlaWdodDogNDVweDtcblx0XHRhbmltYXRpb246ICR7XG4gICAgICBzaG91bGRTaGFrZVxuICAgICAgICA/IGNzc2BcbiAgICAgICAgICAgICR7aGVhZFNoYWtlfSAwLjlzIGVhc2UtaW4tb3V0XG4gICAgICAgICAgYFxuICAgICAgICA6IFwibm9uZVwiXG4gICAgfVxuXG5cdFx0Jjpmb2N1cyxcblx0XHQmOmhvdmVyIHtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdGN1cnNvcjogJHtpc0NoZWNraW5nT3V0IHx8IGlzRGlzYWJsZWQgPyBcIm5vdC1hbGxvd2VkXCIgOiBcInBvaW50ZXJcIn07XG5cblx0XHRcdGNvbG9yOiAke1xuICAgICAgICBpc0NoZWNraW5nT3V0IHx8IGlzRGlzYWJsZWRcbiAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiXG4gICAgICAgICAgOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KVwiXG4gICAgICB9O1xuXHRcdH1cblxuXHRcdCYmIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7aXNEaXNhYmxlZCA/IFwiI2NmY2ZjZlwiIDogYWRkVG9DYXJ0QnV0dG9uQ29sb3J9O1xuXHRcdH1cblx0YFxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAobGlua1RvID09PSBcIm1vZGFsXCIgJiYgc2hvcHdwLm1pc2MuaXNQcm8gJiYgIWlzRGlyZWN0Q2hlY2tvdXQpIHtcbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiVE9HR0xFX01PREFMXCIsIHBheWxvYWQ6IHRydWUgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChoYXNMaW5rICYmICFpc0RpcmVjdENoZWNrb3V0ICYmICFsaW5rV2l0aEJ1eUJ1dHRvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBjaGVjayBpZiBhbGwgb3B0aW9ucyBhcmUgc2VsZWN0ZWRcbiAgICAvLyBpZiBzb21lIGFyZSBub3Qgc2VsZWN0ZWQsIGhpZ2hsaWdodCB0aGVtIC8gc2hha2UgdGhlbVxuICAgIGlmICghdmFyaWFudCAmJiBoYXNNYW55VmFyaWFudHMpIHtcbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX01JU1NJTkdfU0VMRUNUSU9OU1wiLCBwYXlsb2FkOiB0cnVlIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXZhcmlhbnQpIHtcbiAgICAgIC8vIFRPRE86IEhhbmRsZSB0aGlzIGJldHRlclxuICAgICAgY29uc29sZS5lcnJvcihcIlNob3BXUCBlcnJvcjogaGFuZGxlQ2xpY2sgdmFyaWFudCB1bmRlZmluZWQgXCIpXG5cbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX01JU1NJTkdfU0VMRUNUSU9OU1wiLCBwYXlsb2FkOiB0cnVlIH0pXG4gICAgICBwcm9kdWN0QnV5QnV0dG9uRGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcIlVQREFURV9TRUxFQ1RFRF9PUFRJT05TXCIsXG4gICAgICAgIHBheWxvYWQ6IGZhbHNlLFxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGxpbmVJdGVtT3B0aW9ucyA9IHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcInByb2R1Y3QubGluZUl0ZW1PcHRpb25zXCIsIHtcbiAgICAgIG1pblF1YW50aXR5OiBzZXR0aW5ncy5taW5RdWFudGl0eSxcbiAgICAgIG1heFF1YW50aXR5OiBzZXR0aW5ncy5tYXhRdWFudGl0eSxcbiAgICAgIHN1YnNjcmlwdGlvbjogcHJvZHVjdEJ1eUJ1dHRvblN0YXRlLnN1YnNjcmlwdGlvbixcbiAgICAgIGF0dHJpYnV0ZXM6IHByb2R1Y3RCdXlCdXR0b25TdGF0ZS5hdHRyaWJ1dGVzLFxuICAgICAgdmFyaWFudElkOiB2YXJpYW50Lm5vZGUuaWQsXG4gICAgfSlcblxuICAgIGNvbnN0IGxpbmVzID0gYnVpbGRMaW5lcyh2YXJpYW50LCBxdWFudGl0eSwgcHJvZHVjdEJ1eUJ1dHRvblN0YXRlKVxuXG4gICAgaWYgKGlzRGlyZWN0Q2hlY2tvdXQpIHtcbiAgICAgIHZhciBjaGVja291dERhdGEgPSB7XG4gICAgICAgIGxpbmVzOiBsaW5lcyxcbiAgICAgICAgbGluZUl0ZW1PcHRpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyaWFudElkOiB2YXJpYW50Lm5vZGUuaWQsXG4gICAgICAgICAgICBvcHRpb25zOiBsaW5lSXRlbU9wdGlvbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbm90ZTogZmFsc2UsXG4gICAgICAgIGRpc2NvdW50Q29kZTogZmFsc2UsXG4gICAgICAgIGN1c3RvbUF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgfVxuXG4gICAgICBwcm9kdWN0RGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcIlNFVF9ESVJFQ1RfQ0hFQ0tPVVRfUEFSQU1TXCIsXG4gICAgICAgIHBheWxvYWQ6IGNoZWNrb3V0RGF0YSxcbiAgICAgIH0pXG5cbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lTX0RJUkVDVF9DSEVDS09VVFwiLCBwYXlsb2FkOiB0cnVlIH0pXG5cbiAgICAgIHNldElzQ2hlY2tpbmdPdXQodHJ1ZSlcblxuICAgICAgd3AuaG9va3MuZG9BY3Rpb24oXCJkby5kaXJlY3RDaGVja291dFwiLCBjaGVja291dERhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc2V0QWZ0ZXIgPSBzZXR0aW5ncy5yZXNldFZhcmlhbnRzQWZ0ZXJBZGRpbmdcbiAgICAgIGNvbnN0IG9wZW5DYXJ0QWZ0ZXJBZGRpbmcgPSBzZXR0aW5ncy5vcGVuQ2FydEFmdGVyQWRkaW5nXG5cbiAgICAgIGxldCBhZGRUb0NhcnRQYXJhbXMgPSB7XG4gICAgICAgIGxpbmVzOiBsaW5lcyxcbiAgICAgICAgZXh0cmFzOiB7XG4gICAgICAgICAgb3BlbkNhcnRBZnRlckFkZGluZzogc2V0dGluZ3Mub3BlbkNhcnRBZnRlckFkZGluZyxcbiAgICAgICAgfSxcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcm9kdWN0QnV5QnV0dG9uU3RhdGUucGF5bG9hZC5yZXF1aXJlc1NlbGxpbmdQbGFuICYmXG4gICAgICAgICFwcm9kdWN0QnV5QnV0dG9uU3RhdGUuc3Vic2NyaXB0aW9uXG4gICAgICApIHtcbiAgICAgICAgcHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIlNFVF9OT1RJQ0VcIixcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICBcIlRoaXMgcHJvZHVjdCBjYW5ub3QgYmUgcHVyY2hhc2VkIHdpdGhvdXQgYSBzdWJzY3JpcHRpb24uIFBsZWFzZSBzZWxlY3QgYSBzdWJzY3JpcHRpb24gYW5kIHRyeSBhZ2Fpbi4gSWYgeW91IGRvbid0IHNlZSBhIHN1YnNjcmlwdGlvbiwgeW91IG1heSBuZWVkIHRvIHR1cm4gdGhpcyBmZWF0dXJlIG9uLlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAobWF4UXVhbnRpdHkpIHtcbiAgICAgICAgaWYgKG9wZW5DYXJ0QWZ0ZXJBZGRpbmcpIHtcbiAgICAgICAgICB3cC5ob29rcy5kb0FjdGlvbihcImRvLmNhcnRUb2dnbGVcIiwgXCJvcGVuXCIpXG4gICAgICAgIH1cblxuICAgICAgICBwcm9kdWN0RGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TRUxFQ1RFRF9WQVJJQU5UXCIsIHBheWxvYWQ6IGZhbHNlIH0pXG4gICAgICAgIHByb2R1Y3RCdXlCdXR0b25EaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogXCJVUERBVEVfU0VMRUNURURfT1BUSU9OU1wiLFxuICAgICAgICAgIHBheWxvYWQ6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgICBwcm9kdWN0RGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9NSVNTSU5HX1NFTEVDVElPTlNcIiwgcGF5bG9hZDogZmFsc2UgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmVzZXRBZnRlcikge1xuICAgICAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0FEREVEX1ZBUklBTlRcIiwgcGF5bG9hZDogdmFyaWFudC5ub2RlIH0pXG4gICAgICAgICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJTRVRfU0VMRUNURURfVkFSSUFOVFwiLCBwYXlsb2FkOiBmYWxzZSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIlVQREFURV9TRUxFQ1RFRF9PUFRJT05TXCIsXG4gICAgICAgICAgcGF5bG9hZDogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX01JU1NJTkdfU0VMRUNUSU9OU1wiLCBwYXlsb2FkOiBmYWxzZSB9KVxuXG4gICAgICAgIHdwLmhvb2tzLmRvQWN0aW9uKFwiZG8uYWRkVG9DYXJ0XCIsIGFkZFRvQ2FydFBhcmFtcylcbiAgICAgICAgd3AuaG9va3MuZG9BY3Rpb24oXCJvbi5hZnRlckFkZFRvQ2FydFwiLCBsaW5lcywgdmFyaWFudC5ub2RlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgcmVmPXtidXR0b259XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgaXRlbVByb3A9XCJwb3RlbnRpYWxBY3Rpb25cIlxuICAgICAgICBpdGVtU2NvcGVcbiAgICAgICAgaXRlbVR5cGU9XCJodHRwczovL3NjaGVtYS5vcmcvQnV5QWN0aW9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwid3BzLWJ0biB3cHMtYnRuLXNlY29uZGFyeSB3cHMtYWRkLXRvLWNhcnRcIlxuICAgICAgICBkYXRhLXdwcy1pcy1kaXJlY3QtY2hlY2tvdXQ9e2lzRGlyZWN0Q2hlY2tvdXQgPyBcIjFcIiA6IFwiMFwifVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgY3NzPXtbYnV0dG9uQ1NTLCBhZGRUb0NhcnRDU1NdfVxuICAgICAgICBkaXNhYmxlZD17aXNDaGVja2luZ091dCB8fCBpc0Rpc2FibGVkfVxuICAgICAgPlxuICAgICAgICB7aXNDaGVja2luZ091dCA/IChcbiAgICAgICAgICBsb2FkZXJcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8QWRkQnV0dG9uVGV4dFxuICAgICAgICAgICAgaXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgICAgIGFkZGVkVG9DYXJ0PXthZGRlZFRvQ2FydH1cbiAgICAgICAgICAgIGJ1dHRvblRleHQ9e2J1dHRvblRleHR9XG4gICAgICAgICAgICBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3I9e2FkZFRvQ2FydEJ1dHRvblRleHRDb2xvcn1cbiAgICAgICAgICAgIGFmdGVyQWRkZWRUZXh0PXtzZXR0aW5ncy5hZnRlckFkZGVkVGV4dH1cbiAgICAgICAgICAgIHByb2R1Y3RCdXlCdXR0b25TdGF0ZT17cHJvZHVjdEJ1eUJ1dHRvblN0YXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAge3Byb2R1Y3RCdXlCdXR0b25TdGF0ZS5ub3RpY2UgPyAoXG4gICAgICAgIDxOb3RpY2Ugc3RhdHVzPXtwcm9kdWN0QnV5QnV0dG9uU3RhdGUubm90aWNlLnR5cGV9IGV4dHJhQ1NTPXtOb3RpY2VDU1N9PlxuICAgICAgICAgIHtwcm9kdWN0QnV5QnV0dG9uU3RhdGUubm90aWNlLm1lc3NhZ2V9XG4gICAgICAgIDwvTm90aWNlPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gQWRkQnV0dG9uVGV4dCh7XG4gIGJ1dHRvblRleHQsXG4gIGFkZGVkVG9DYXJ0LFxuICBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3IsXG4gIGFmdGVyQWRkZWRUZXh0LFxuICBpc0Rpc2FibGVkLFxuICBwcm9kdWN0QnV5QnV0dG9uU3RhdGUsXG59KSB7XG4gIGNvbnN0IFthZGRlZCwgc2V0QWRkZWRdID0gdXNlU3RhdGUoKCkgPT4gZmFsc2UpXG4gIGNvbnN0IGFkZGVkVGVzdCA9IHVzZVJlZigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWRkZWRUb0NhcnQpIHtcbiAgICAgIHNldEFkZGVkKHRydWUpXG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYWRkZWRUZXN0LmN1cnJlbnQpIHtcbiAgICAgICAgICBzZXRBZGRlZChmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSwgMzAwMClcbiAgICB9XG4gIH0sIFthZGRlZFRvQ2FydF0pXG5cbiAgY29uc3QgQWRkQnV0dG9uVGV4dENTUyA9IGNzc2BcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogJHthZGRUb0NhcnRCdXR0b25UZXh0Q29sb3IgPyBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3IgOiBcImluaGVyaXRcIn07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiAke2lzRGlzYWJsZWQgPyBcIm5vdC1hbGxvd2VkXCIgOiBcInBvaW50ZXJcIn07XG4gICAgfVxuICBgXG5cbiAgZnVuY3Rpb24gZ2V0QnV0dG9uVGV4dCgpIHtcbiAgICBpZiAoYWRkZWQpIHtcbiAgICAgIHZhciB0ZXh0ID0gYWZ0ZXJBZGRlZFRleHRcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRleHQgPSBidXR0b25UZXh0XG4gICAgfVxuXG4gICAgcmV0dXJuIHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgIFwicHJvZHVjdC5hZGRUb0NhcnQudGV4dFwiLFxuICAgICAgdGV4dCxcbiAgICAgIHByb2R1Y3RCdXlCdXR0b25TdGF0ZVxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIGNzcz17QWRkQnV0dG9uVGV4dENTU31cbiAgICAgIHJlZj17YWRkZWRUZXN0fVxuICAgICAgYXJpYS1sYWJlbD1cIlByb2R1Y3QgQWRkIHRvIENhcnQgVGV4dFwiXG4gICAgPlxuICAgICAge2dldEJ1dHRvblRleHQoKX1cbiAgICA8L3NwYW4+XG4gIClcbn1cblxuZnVuY3Rpb24gUHJvZHVjdEFkZEJ1dHRvbih7XG4gIGhhc0xpbmssXG4gIHBheWxvYWQsXG4gIGxpbmtUYXJnZXQsXG4gIGxpbmtUbyxcbiAgbGlua1dpdGhCdXlCdXR0b24sXG4gIGFkZFRvQ2FydEJ1dHRvbkNvbG9yLFxuICBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3IsXG4gIGlzRGlyZWN0Q2hlY2tvdXQsXG4gIGhhc01hbnlWYXJpYW50cyxcbiAgcHJvZHVjdERpc3BhdGNoLFxuICBidXR0b25UZXh0LFxuICBhZGRlZFRvQ2FydCxcbiAgcXVhbnRpdHksXG4gIHNlbGVjdGVkT3B0aW9ucyxcbiAgc2V0dGluZ3MsXG4gIHNob3VsZFNob3dRdWFudGl0eSxcbn0pIHtcbiAgY29uc3QgQWRkQnV0dG9uV3JhcHBlckNTUyA9IGNzc2BcbiAgICBkaXNwbGF5OiAke3Nob3VsZFNob3dRdWFudGl0eSA/IFwiZmxleFwiIDogXCJibG9ja1wifTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAud3BzLXF1YW50aXR5LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgICR7bXEoXCJtZWRpdW1cIil9IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC53cHMtcXVhbnRpdHktY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIGBcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cIndwcy1jb21wb25lbnQgd3BzLWNvbXBvbmVudC1wcm9kdWN0cy1hZGQtYnV0dG9uIHdwcy1idG4td3JhcHBlclwiXG4gICAgICBhcmlhLWxhYmVsPVwiUHJvZHVjdCBBZGQgQnV0dG9uXCJcbiAgICA+XG4gICAgICA8ZGl2IGNzcz17QWRkQnV0dG9uV3JhcHBlckNTU30+XG4gICAgICAgIHtzaG91bGRTaG93UXVhbnRpdHkgPyAoXG4gICAgICAgICAgPFByb2R1Y3RRdWFudGl0eVxuICAgICAgICAgICAgbWluUXVhbnRpdHk9e3NldHRpbmdzLm1pblF1YW50aXR5fVxuICAgICAgICAgICAgbWF4UXVhbnRpdHk9e1xuICAgICAgICAgICAgICBzZXR0aW5ncy5tYXhRdWFudGl0eVxuICAgICAgICAgICAgICAgID8gc2V0dGluZ3MubWF4UXVhbnRpdHlcbiAgICAgICAgICAgICAgICA6IHBheWxvYWQudG90YWxJbnZlbnRvcnlcbiAgICAgICAgICAgICAgICA/IHBheWxvYWQudG90YWxJbnZlbnRvcnlcbiAgICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWFudGl0eVN0ZXA9e3NldHRpbmdzLnF1YW50aXR5U3RlcH1cbiAgICAgICAgICAgIHBheWxvYWQ9e3BheWxvYWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPEFkZEJ1dHRvbldyYXBwZXJcbiAgICAgICAgICBoYXNMaW5rPXtoYXNMaW5rfVxuICAgICAgICAgIHBheWxvYWQ9e3BheWxvYWR9XG4gICAgICAgICAgbGlua1RhcmdldD17bGlua1RhcmdldH1cbiAgICAgICAgICBsaW5rVG89e2xpbmtUb31cbiAgICAgICAgICBsaW5rV2l0aEJ1eUJ1dHRvbj17bGlua1dpdGhCdXlCdXR0b259XG4gICAgICAgICAgaXNEaXJlY3RDaGVja291dD17aXNEaXJlY3RDaGVja291dH1cbiAgICAgICAgPlxuICAgICAgICAgIDxBZGRCdXR0b25cbiAgICAgICAgICAgIGhhc0xpbms9e2hhc0xpbmt9XG4gICAgICAgICAgICBsaW5rV2l0aEJ1eUJ1dHRvbj17bGlua1dpdGhCdXlCdXR0b259XG4gICAgICAgICAgICBhZGRUb0NhcnRCdXR0b25Db2xvcj17YWRkVG9DYXJ0QnV0dG9uQ29sb3J9XG4gICAgICAgICAgICBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3I9e2FkZFRvQ2FydEJ1dHRvblRleHRDb2xvcn1cbiAgICAgICAgICAgIGxvYWRlcj17PExvYWRlciAvPn1cbiAgICAgICAgICAgIGlzRGlyZWN0Q2hlY2tvdXQ9e2lzRGlyZWN0Q2hlY2tvdXR9XG4gICAgICAgICAgICBoYXNNYW55VmFyaWFudHM9e2hhc01hbnlWYXJpYW50c31cbiAgICAgICAgICAgIHByb2R1Y3REaXNwYXRjaD17cHJvZHVjdERpc3BhdGNofVxuICAgICAgICAgICAgYnV0dG9uVGV4dD17YnV0dG9uVGV4dH1cbiAgICAgICAgICAgIGFkZGVkVG9DYXJ0PXthZGRlZFRvQ2FydH1cbiAgICAgICAgICAgIHF1YW50aXR5PXtxdWFudGl0eX1cbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucz17c2VsZWN0ZWRPcHRpb25zfVxuICAgICAgICAgICAgcGF5bG9hZD17cGF5bG9hZH1cbiAgICAgICAgICAgIHNldHRpbmdzPXtzZXR0aW5nc31cbiAgICAgICAgICAgIGxpbmtUbz17bGlua1RvfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQWRkQnV0dG9uV3JhcHBlcj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7c2hvcHdwLm1pc2MuaXNQcm8gJiZcbiAgICAgIHNldHRpbmdzLnNob3dJbnZlbnRvcnlMZXZlbHMgJiZcbiAgICAgIHBheWxvYWQuYXZhaWxhYmxlRm9yU2FsZSAmJlxuICAgICAgcGF5bG9hZC50b3RhbEludmVudG9yeSA/IChcbiAgICAgICAgPFByb2R1Y3RCdXlCdXR0b25MZWZ0SW5TdG9jayBzZXR0aW5ncz17c2V0dGluZ3N9IC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0QWRkQnV0dG9uXG4iXX0= */"));

  function handleClick(_x) {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(e) {
      var lineItemOptions, lines, checkoutData, resetAfter, openCartAfterAdding, addToCartParams;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(linkTo === "modal" && shopwp.misc.isPro && !isDirectCheckout)) {
                _context.next = 3;
                break;
              }

              productDispatch({
                type: "TOGGLE_MODAL",
                payload: true
              });
              return _context.abrupt("return");

            case 3:
              if (!(hasLink && !isDirectCheckout && !linkWithBuyButton)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              e.preventDefault(); // check if all options are selected
              // if some are not selected, highlight them / shake them

              if (!(!variant && hasManyVariants)) {
                _context.next = 9;
                break;
              }

              productDispatch({
                type: "SET_MISSING_SELECTIONS",
                payload: true
              });
              return _context.abrupt("return");

            case 9:
              if (variant) {
                _context.next = 14;
                break;
              }

              // TODO: Handle this better
              console.error("ShopWP error: handleClick variant undefined ");
              productDispatch({
                type: "SET_MISSING_SELECTIONS",
                payload: true
              });
              productBuyButtonDispatch({
                type: "UPDATE_SELECTED_OPTIONS",
                payload: false
              });
              return _context.abrupt("return");

            case 14:
              lineItemOptions = __webpack_provided_wp_dot_hooks.applyFilters("product.lineItemOptions", {
                minQuantity: settings.minQuantity,
                maxQuantity: settings.maxQuantity,
                subscription: productBuyButtonState.subscription,
                attributes: productBuyButtonState.attributes,
                variantId: variant.node.id
              });
              lines = buildLines(variant, quantity, productBuyButtonState);

              if (!isDirectCheckout) {
                _context.next = 24;
                break;
              }

              checkoutData = {
                lines: lines,
                lineItemOptions: [{
                  variantId: variant.node.id,
                  options: lineItemOptions
                }],
                note: false,
                discountCode: false,
                customAttributes: false
              };
              productDispatch({
                type: "SET_DIRECT_CHECKOUT_PARAMS",
                payload: checkoutData
              });
              productDispatch({
                type: "SET_IS_DIRECT_CHECKOUT",
                payload: true
              });
              setIsCheckingOut(true);
              __webpack_provided_wp_dot_hooks.doAction("do.directCheckout", checkoutData);
              _context.next = 43;
              break;

            case 24:
              resetAfter = settings.resetVariantsAfterAdding;
              openCartAfterAdding = settings.openCartAfterAdding;
              addToCartParams = {
                lines: lines,
                extras: {
                  openCartAfterAdding: settings.openCartAfterAdding
                }
              };

              if (!(productBuyButtonState.payload.requiresSellingPlan && !productBuyButtonState.subscription)) {
                _context.next = 30;
                break;
              }

              productBuyButtonDispatch({
                type: "SET_NOTICE",
                payload: {
                  type: "error",
                  message: "This product cannot be purchased without a subscription. Please select a subscription and try again. If you don't see a subscription, you may need to turn this feature on."
                }
              });
              return _context.abrupt("return");

            case 30:
              if (!maxQuantity) {
                _context.next = 38;
                break;
              }

              if (openCartAfterAdding) {
                __webpack_provided_wp_dot_hooks.doAction("do.cartToggle", "open");
              }

              productDispatch({
                type: "SET_SELECTED_VARIANT",
                payload: false
              });
              productBuyButtonDispatch({
                type: "UPDATE_SELECTED_OPTIONS",
                payload: false
              });
              productDispatch({
                type: "SET_MISSING_SELECTIONS",
                payload: false
              });
              return _context.abrupt("return");

            case 38:
              if (resetAfter) {
                productDispatch({
                  type: "SET_ADDED_VARIANT",
                  payload: variant.node
                });
                productDispatch({
                  type: "SET_SELECTED_VARIANT",
                  payload: false
                });
              }

              productBuyButtonDispatch({
                type: "UPDATE_SELECTED_OPTIONS",
                payload: false
              });
              productDispatch({
                type: "SET_MISSING_SELECTIONS",
                payload: false
              });
              __webpack_provided_wp_dot_hooks.doAction("do.addToCart", addToCartParams);
              __webpack_provided_wp_dot_hooks.doAction("on.afterAddToCart", lines, variant.node);

            case 43:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleClick.apply(this, arguments);
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(__webpack_provided_wp_dot_element.Fragment, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)("button", {
    ref: button,
    type: "button",
    role: "button",
    itemProp: "potentialAction",
    itemScope: true,
    itemType: "https://schema.org/BuyAction",
    className: "wps-btn wps-btn-secondary wps-add-to-cart",
    "data-wps-is-direct-checkout": isDirectCheckout ? "1" : "0",
    onClick: handleClick,
    css: [Common_css__WEBPACK_IMPORTED_MODULE_5__.buttonCSS, addToCartCSS, ";label:AddButton;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vYWRkLWJ1dHRvbi9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb1dRIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vYWRkLWJ1dHRvbi9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzLCBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHsgZmluZFZhcmlhbnRGcm9tU2VsZWN0ZWRPcHRpb25zLCBhbGxPcHRpb25zU2VsZWN0ZWRNYXRjaCB9IGZyb20gXCJVdGlsc1wiXG5pbXBvcnQgeyBidXR0b25DU1MsIG1xIH0gZnJvbSBcIkNvbW1vbi9jc3NcIlxuaW1wb3J0IHtcbiAgdXNlUHJvZHVjdEJ1eUJ1dHRvblN0YXRlLFxuICB1c2VQcm9kdWN0QnV5QnV0dG9uRGlzcGF0Y2gsXG59IGZyb20gXCIuLi9fc3RhdGUvaG9va3NcIlxuXG5pbXBvcnQgUHJvZHVjdFF1YW50aXR5IGZyb20gXCIuLi9xdWFudGl0eVwiXG5pbXBvcnQgTm90aWNlIGZyb20gXCIuLi8uLi8uLi8uLi9ub3RpY2VcIlxuaW1wb3J0IExpbmsgZnJvbSBcIi4uLy4uLy4uLy4uL2xpbmtcIlxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vLi4vLi4vLi4vbG9hZGVyXCJcbmltcG9ydCBQcm9kdWN0QnV5QnV0dG9uTGVmdEluU3RvY2sgZnJvbSBcIi4uL2xlZnQtaW4tc3RvY2tcIlxuXG5jb25zdCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9ID0gd3AuZWxlbWVudFxuXG5mdW5jdGlvbiBmaW5kU2luZ2xlVmFyaWFudEZyb21QYXlsb2FkKHBheWxvYWQpIHtcbiAgaWYgKCFwYXlsb2FkLnZhcmlhbnRzLmVkZ2VzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHBheWxvYWQudmFyaWFudHMuZWRnZXNbMF1cbn1cblxuZnVuY3Rpb24gYnVpbGRMaW5lcyh2YXJpYW50LCBxdWFudGl0eSwgcHJvZHVjdEJ1eUJ1dHRvblN0YXRlKSB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgYXR0cmlidXRlczogd3AuaG9va3MuYXBwbHlGaWx0ZXJzKFxuICAgICAgXCJjYXJ0LmxpbmVJdGVtQXR0cmlidXRlc1wiLFxuICAgICAgW10sXG4gICAgICB2YXJpYW50LFxuICAgICAgcXVhbnRpdHksXG4gICAgICBwcm9kdWN0QnV5QnV0dG9uU3RhdGVcbiAgICApLFxuICAgIG1lcmNoYW5kaXNlSWQ6IHZhcmlhbnQubm9kZS5pZCxcbiAgICBxdWFudGl0eTogcXVhbnRpdHksXG4gIH1cblxuICBpZiAocHJvZHVjdEJ1eUJ1dHRvblN0YXRlPy5zdWJzY3JpcHRpb24pIHtcbiAgICBkYXRhW1wic2VsbGluZ1BsYW5JZFwiXSA9IHByb2R1Y3RCdXlCdXR0b25TdGF0ZS5zdWJzY3JpcHRpb24uc2VsbGluZ1BsYW5JZFxuICB9XG5cbiAgcmV0dXJuIFtkYXRhXVxufVxuXG5mdW5jdGlvbiBBZGRCdXR0b25XcmFwcGVyKHtcbiAgaGFzTGluayxcbiAgcGF5bG9hZCxcbiAgY2hpbGRyZW4sXG4gIGxpbmtUbyxcbiAgbGlua1RhcmdldCxcbiAgaXNEaXJlY3RDaGVja291dCxcbiAgbGlua1dpdGhCdXlCdXR0b24sXG59KSB7XG4gIHJldHVybiBoYXNMaW5rICYmICFpc0RpcmVjdENoZWNrb3V0ICYmICFsaW5rV2l0aEJ1eUJ1dHRvbiA/IChcbiAgICA8TGluayB0eXBlPVwicHJvZHVjdHNcIiBwYXlsb2FkPXtwYXlsb2FkfSBsaW5rVG89e2xpbmtUb30gdGFyZ2V0PXtsaW5rVGFyZ2V0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xpbms+XG4gICkgOiAoXG4gICAgY2hpbGRyZW5cbiAgKVxufVxuXG5mdW5jdGlvbiBBZGRCdXR0b24oe1xuICBhZGRUb0NhcnRCdXR0b25Db2xvcixcbiAgYWRkVG9DYXJ0QnV0dG9uVGV4dENvbG9yLFxuICBoYXNMaW5rLFxuICBsaW5rV2l0aEJ1eUJ1dHRvbixcbiAgaXNEaXJlY3RDaGVja291dCxcbiAgcHJvZHVjdERpc3BhdGNoLFxuICBoYXNNYW55VmFyaWFudHMsXG4gIGxvYWRlcixcbiAgYnV0dG9uVGV4dCxcbiAgYWRkZWRUb0NhcnQsXG4gIHF1YW50aXR5LFxuICBzZWxlY3RlZE9wdGlvbnMsXG4gIHBheWxvYWQsXG4gIHNldHRpbmdzLFxuICBsaW5rVG8sXG59KSB7XG4gIGNvbnN0IFtzaG91bGRTaGFrZSwgc2V0U2hvdWxkU2hha2VdID0gd3AuZWxlbWVudC51c2VTdGF0ZShmYWxzZSlcblxuICBmdW5jdGlvbiBmaW5kVmFyaWFudCgpIHtcbiAgICBpZiAoaGFzTWFueVZhcmlhbnRzKSB7XG4gICAgICByZXR1cm4gZmluZFZhcmlhbnRGcm9tU2VsZWN0ZWRPcHRpb25zKHBheWxvYWQsIHNlbGVjdGVkT3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZpbmRTaW5nbGVWYXJpYW50RnJvbVBheWxvYWQocGF5bG9hZClcbiAgICB9XG4gIH1cblxuICBjb25zdCBbaXNEaXNhYmxlZCwgc2V0SXNEaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgdmFyIHZhcmlhbnQgPSBmaW5kVmFyaWFudCgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgYWxsT3B0aW9uc1NlbGVjdGVkID0gYWxsT3B0aW9uc1NlbGVjdGVkTWF0Y2goc2VsZWN0ZWRPcHRpb25zLCBwYXlsb2FkKVxuXG4gICAgaWYgKCFhbGxPcHRpb25zU2VsZWN0ZWQpIHtcbiAgICAgIHNldElzRGlzYWJsZWQoZmFsc2UpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgdmFyaWFudE5ldyA9IGZpbmRWYXJpYW50KClcblxuICAgIGlmICghdmFyaWFudE5ldykge1xuICAgICAgc2V0SXNEaXNhYmxlZCh0cnVlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHZhcmlhbnROZXcubm9kZS5hdmFpbGFibGVGb3JTYWxlKSB7XG4gICAgICBzZXRTaG91bGRTaGFrZSh0cnVlKVxuICAgICAgc2V0SXNEaXNhYmxlZChmYWxzZSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNEaXNhYmxlZCh0cnVlKVxuICAgIH1cbiAgfSwgW3NlbGVjdGVkT3B0aW9uc10pXG5cbiAgY29uc3QgW2lzQ2hlY2tpbmdPdXQsIHNldElzQ2hlY2tpbmdPdXRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgYnV0dG9uID0gdXNlUmVmKClcbiAgY29uc3QgcHJvZHVjdEJ1eUJ1dHRvblN0YXRlID0gdXNlUHJvZHVjdEJ1eUJ1dHRvblN0YXRlKClcbiAgY29uc3QgcHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoID0gdXNlUHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoKClcbiAgY29uc3QgbWF4UXVhbnRpdHkgPSBzZXR0aW5ncy5tYXhRdWFudGl0eVxuXG4gIGNvbnN0IE5vdGljZUNTUyA9IGNzc2BcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICBgXG5cbiAgY29uc3QgaGVhZFNoYWtlID0ga2V5ZnJhbWVzYFxuXHRcdDAlIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0XHR9XG5cblx0XHQ2LjUlIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKTtcblx0XHR9XG5cblx0XHQxOC41JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpO1xuXHRcdH1cblxuXHRcdDMxLjUlIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKTtcblx0XHR9XG5cblx0XHQ0My41JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpO1xuXHRcdH1cblxuXHRcdDUwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG5cdFx0fVxuXHRgXG5cbiAgY29uc3QgYWRkVG9DYXJ0Q1NTID0gY3NzYFxuXHRcdGZvbnQtZmFtaWx5OiAke1xuICAgICAgc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUZvbnRGYW1pbHlcbiAgICAgICAgPyBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udEZhbWlseVxuICAgICAgICA6IFwiaW5oZXJpdFwiXG4gICAgfTtcblx0XHRmb250LXdlaWdodDogJHtcbiAgICAgIHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVGb250V2VpZ2h0XG4gICAgICAgID8gc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUZvbnRXZWlnaHRcbiAgICAgICAgOiBcImluaXRpYWxcIlxuICAgIH07XG5cdFx0Zm9udC1zdHlsZTogJHtcbiAgICAgIHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVGb250U3R5bGVcbiAgICAgICAgPyBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFN0eWxlXG4gICAgICAgIDogXCJpbml0aWFsXCJcbiAgICB9O1xuXHRcdGZvbnQtc2l6ZTogJHtcbiAgICAgIHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVGb250U2l6ZVxuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVGb250U2l6ZVxuICAgICAgICA6IFwiaW5pdGlhbFwiXG4gICAgfTtcblx0XHRsZXR0ZXItc3BhY2luZzogJHtcbiAgICAgIHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVMZXR0ZXJTcGFjaW5nXG4gICAgICAgID8gc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUxldHRlclNwYWNpbmdcbiAgICAgICAgOiBcImluaXRpYWxcIlxuICAgIH07XG5cdFx0bGluZS1oZWlnaHQ6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlTGluZUhlaWdodFxuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVMaW5lSGVpZ2h0XG4gICAgICAgIDogXCJpbml0aWFsXCJcbiAgICB9O1xuXHRcdHRleHQtZGVjb3JhdGlvbjogJHtcbiAgICAgIHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVUZXh0RGVjb3JhdGlvblxuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVUZXh0RGVjb3JhdGlvblxuICAgICAgICA6IFwiaW5pdGlhbFwiXG4gICAgfTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogJHtcbiAgICAgIHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVUZXh0VHJhbnNmb3JtXG4gICAgICAgID8gc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZVRleHRUcmFuc2Zvcm1cbiAgICAgICAgOiBcImluaXRpYWxcIlxuICAgIH07XG5cdFx0b3ZlcmZsb3cteTogaGlkZGVuO1xuXHRcdGZsZXg6IDE7XG5cdFx0bWluLXdpZHRoOiAxNjBweDtcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xuXHRcdGFuaW1hdGlvbjogJHtcbiAgICAgIHNob3VsZFNoYWtlXG4gICAgICAgID8gY3NzYFxuICAgICAgICAgICAgJHtoZWFkU2hha2V9IDAuOXMgZWFzZS1pbi1vdXRcbiAgICAgICAgICBgXG4gICAgICAgIDogXCJub25lXCJcbiAgICB9XG5cblx0XHQmOmZvY3VzLFxuXHRcdCY6aG92ZXIge1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0Y3Vyc29yOiAke2lzQ2hlY2tpbmdPdXQgfHwgaXNEaXNhYmxlZCA/IFwibm90LWFsbG93ZWRcIiA6IFwicG9pbnRlclwifTtcblxuXHRcdFx0Y29sb3I6ICR7XG4gICAgICAgIGlzQ2hlY2tpbmdPdXQgfHwgaXNEaXNhYmxlZFxuICAgICAgICAgID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXCJcbiAgICAgICAgICA6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpXCJcbiAgICAgIH07XG5cdFx0fVxuXG5cdFx0JiYge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtpc0Rpc2FibGVkID8gXCIjY2ZjZmNmXCIgOiBhZGRUb0NhcnRCdXR0b25Db2xvcn07XG5cdFx0fVxuXHRgXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIGlmIChsaW5rVG8gPT09IFwibW9kYWxcIiAmJiBzaG9wd3AubWlzYy5pc1BybyAmJiAhaXNEaXJlY3RDaGVja291dCkge1xuICAgICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJUT0dHTEVfTU9EQUxcIiwgcGF5bG9hZDogdHJ1ZSB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGhhc0xpbmsgJiYgIWlzRGlyZWN0Q2hlY2tvdXQgJiYgIWxpbmtXaXRoQnV5QnV0dG9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIGNoZWNrIGlmIGFsbCBvcHRpb25zIGFyZSBzZWxlY3RlZFxuICAgIC8vIGlmIHNvbWUgYXJlIG5vdCBzZWxlY3RlZCwgaGlnaGxpZ2h0IHRoZW0gLyBzaGFrZSB0aGVtXG4gICAgaWYgKCF2YXJpYW50ICYmIGhhc01hbnlWYXJpYW50cykge1xuICAgICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJTRVRfTUlTU0lOR19TRUxFQ1RJT05TXCIsIHBheWxvYWQ6IHRydWUgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghdmFyaWFudCkge1xuICAgICAgLy8gVE9ETzogSGFuZGxlIHRoaXMgYmV0dGVyXG4gICAgICBjb25zb2xlLmVycm9yKFwiU2hvcFdQIGVycm9yOiBoYW5kbGVDbGljayB2YXJpYW50IHVuZGVmaW5lZCBcIilcblxuICAgICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJTRVRfTUlTU0lOR19TRUxFQ1RJT05TXCIsIHBheWxvYWQ6IHRydWUgfSlcbiAgICAgIHByb2R1Y3RCdXlCdXR0b25EaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwiVVBEQVRFX1NFTEVDVEVEX09QVElPTlNcIixcbiAgICAgICAgcGF5bG9hZDogZmFsc2UsXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbGluZUl0ZW1PcHRpb25zID0gd3AuaG9va3MuYXBwbHlGaWx0ZXJzKFwicHJvZHVjdC5saW5lSXRlbU9wdGlvbnNcIiwge1xuICAgICAgbWluUXVhbnRpdHk6IHNldHRpbmdzLm1pblF1YW50aXR5LFxuICAgICAgbWF4UXVhbnRpdHk6IHNldHRpbmdzLm1heFF1YW50aXR5LFxuICAgICAgc3Vic2NyaXB0aW9uOiBwcm9kdWN0QnV5QnV0dG9uU3RhdGUuc3Vic2NyaXB0aW9uLFxuICAgICAgYXR0cmlidXRlczogcHJvZHVjdEJ1eUJ1dHRvblN0YXRlLmF0dHJpYnV0ZXMsXG4gICAgICB2YXJpYW50SWQ6IHZhcmlhbnQubm9kZS5pZCxcbiAgICB9KVxuXG4gICAgY29uc3QgbGluZXMgPSBidWlsZExpbmVzKHZhcmlhbnQsIHF1YW50aXR5LCBwcm9kdWN0QnV5QnV0dG9uU3RhdGUpXG5cbiAgICBpZiAoaXNEaXJlY3RDaGVja291dCkge1xuICAgICAgdmFyIGNoZWNrb3V0RGF0YSA9IHtcbiAgICAgICAgbGluZXM6IGxpbmVzLFxuICAgICAgICBsaW5lSXRlbU9wdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXJpYW50SWQ6IHZhcmlhbnQubm9kZS5pZCxcbiAgICAgICAgICAgIG9wdGlvbnM6IGxpbmVJdGVtT3B0aW9ucyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBub3RlOiBmYWxzZSxcbiAgICAgICAgZGlzY291bnRDb2RlOiBmYWxzZSxcbiAgICAgICAgY3VzdG9tQXR0cmlidXRlczogZmFsc2UsXG4gICAgICB9XG5cbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwiU0VUX0RJUkVDVF9DSEVDS09VVF9QQVJBTVNcIixcbiAgICAgICAgcGF5bG9hZDogY2hlY2tvdXREYXRhLFxuICAgICAgfSlcblxuICAgICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJTRVRfSVNfRElSRUNUX0NIRUNLT1VUXCIsIHBheWxvYWQ6IHRydWUgfSlcblxuICAgICAgc2V0SXNDaGVja2luZ091dCh0cnVlKVxuXG4gICAgICB3cC5ob29rcy5kb0FjdGlvbihcImRvLmRpcmVjdENoZWNrb3V0XCIsIGNoZWNrb3V0RGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzZXRBZnRlciA9IHNldHRpbmdzLnJlc2V0VmFyaWFudHNBZnRlckFkZGluZ1xuICAgICAgY29uc3Qgb3BlbkNhcnRBZnRlckFkZGluZyA9IHNldHRpbmdzLm9wZW5DYXJ0QWZ0ZXJBZGRpbmdcblxuICAgICAgbGV0IGFkZFRvQ2FydFBhcmFtcyA9IHtcbiAgICAgICAgbGluZXM6IGxpbmVzLFxuICAgICAgICBleHRyYXM6IHtcbiAgICAgICAgICBvcGVuQ2FydEFmdGVyQWRkaW5nOiBzZXR0aW5ncy5vcGVuQ2FydEFmdGVyQWRkaW5nLFxuICAgICAgICB9LFxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHByb2R1Y3RCdXlCdXR0b25TdGF0ZS5wYXlsb2FkLnJlcXVpcmVzU2VsbGluZ1BsYW4gJiZcbiAgICAgICAgIXByb2R1Y3RCdXlCdXR0b25TdGF0ZS5zdWJzY3JpcHRpb25cbiAgICAgICkge1xuICAgICAgICBwcm9kdWN0QnV5QnV0dG9uRGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFwiU0VUX05PVElDRVwiLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgIFwiVGhpcyBwcm9kdWN0IGNhbm5vdCBiZSBwdXJjaGFzZWQgd2l0aG91dCBhIHN1YnNjcmlwdGlvbi4gUGxlYXNlIHNlbGVjdCBhIHN1YnNjcmlwdGlvbiBhbmQgdHJ5IGFnYWluLiBJZiB5b3UgZG9uJ3Qgc2VlIGEgc3Vic2NyaXB0aW9uLCB5b3UgbWF5IG5lZWQgdG8gdHVybiB0aGlzIGZlYXR1cmUgb24uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChtYXhRdWFudGl0eSkge1xuICAgICAgICBpZiAob3BlbkNhcnRBZnRlckFkZGluZykge1xuICAgICAgICAgIHdwLmhvb2tzLmRvQWN0aW9uKFwiZG8uY2FydFRvZ2dsZVwiLCBcIm9wZW5cIilcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NFTEVDVEVEX1ZBUklBTlRcIiwgcGF5bG9hZDogZmFsc2UgfSlcbiAgICAgICAgcHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIlVQREFURV9TRUxFQ1RFRF9PUFRJT05TXCIsXG4gICAgICAgICAgcGF5bG9hZDogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX01JU1NJTkdfU0VMRUNUSU9OU1wiLCBwYXlsb2FkOiBmYWxzZSB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyZXNldEFmdGVyKSB7XG4gICAgICAgICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJTRVRfQURERURfVkFSSUFOVFwiLCBwYXlsb2FkOiB2YXJpYW50Lm5vZGUgfSlcbiAgICAgICAgICBwcm9kdWN0RGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TRUxFQ1RFRF9WQVJJQU5UXCIsIHBheWxvYWQ6IGZhbHNlIH0pXG4gICAgICAgIH1cblxuICAgICAgICBwcm9kdWN0QnV5QnV0dG9uRGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFwiVVBEQVRFX1NFTEVDVEVEX09QVElPTlNcIixcbiAgICAgICAgICBwYXlsb2FkOiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJTRVRfTUlTU0lOR19TRUxFQ1RJT05TXCIsIHBheWxvYWQ6IGZhbHNlIH0pXG5cbiAgICAgICAgd3AuaG9va3MuZG9BY3Rpb24oXCJkby5hZGRUb0NhcnRcIiwgYWRkVG9DYXJ0UGFyYW1zKVxuICAgICAgICB3cC5ob29rcy5kb0FjdGlvbihcIm9uLmFmdGVyQWRkVG9DYXJ0XCIsIGxpbmVzLCB2YXJpYW50Lm5vZGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9e2J1dHRvbn1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICBpdGVtUHJvcD1cInBvdGVudGlhbEFjdGlvblwiXG4gICAgICAgIGl0ZW1TY29wZVxuICAgICAgICBpdGVtVHlwZT1cImh0dHBzOi8vc2NoZW1hLm9yZy9CdXlBY3Rpb25cIlxuICAgICAgICBjbGFzc05hbWU9XCJ3cHMtYnRuIHdwcy1idG4tc2Vjb25kYXJ5IHdwcy1hZGQtdG8tY2FydFwiXG4gICAgICAgIGRhdGEtd3BzLWlzLWRpcmVjdC1jaGVja291dD17aXNEaXJlY3RDaGVja291dCA/IFwiMVwiIDogXCIwXCJ9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBjc3M9e1tidXR0b25DU1MsIGFkZFRvQ2FydENTU119XG4gICAgICAgIGRpc2FibGVkPXtpc0NoZWNraW5nT3V0IHx8IGlzRGlzYWJsZWR9XG4gICAgICA+XG4gICAgICAgIHtpc0NoZWNraW5nT3V0ID8gKFxuICAgICAgICAgIGxvYWRlclxuICAgICAgICApIDogKFxuICAgICAgICAgIDxBZGRCdXR0b25UZXh0XG4gICAgICAgICAgICBpc0Rpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgYWRkZWRUb0NhcnQ9e2FkZGVkVG9DYXJ0fVxuICAgICAgICAgICAgYnV0dG9uVGV4dD17YnV0dG9uVGV4dH1cbiAgICAgICAgICAgIGFkZFRvQ2FydEJ1dHRvblRleHRDb2xvcj17YWRkVG9DYXJ0QnV0dG9uVGV4dENvbG9yfVxuICAgICAgICAgICAgYWZ0ZXJBZGRlZFRleHQ9e3NldHRpbmdzLmFmdGVyQWRkZWRUZXh0fVxuICAgICAgICAgICAgcHJvZHVjdEJ1eUJ1dHRvblN0YXRlPXtwcm9kdWN0QnV5QnV0dG9uU3RhdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7cHJvZHVjdEJ1eUJ1dHRvblN0YXRlLm5vdGljZSA/IChcbiAgICAgICAgPE5vdGljZSBzdGF0dXM9e3Byb2R1Y3RCdXlCdXR0b25TdGF0ZS5ub3RpY2UudHlwZX0gZXh0cmFDU1M9e05vdGljZUNTU30+XG4gICAgICAgICAge3Byb2R1Y3RCdXlCdXR0b25TdGF0ZS5ub3RpY2UubWVzc2FnZX1cbiAgICAgICAgPC9Ob3RpY2U+XG4gICAgICApIDogbnVsbH1cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBBZGRCdXR0b25UZXh0KHtcbiAgYnV0dG9uVGV4dCxcbiAgYWRkZWRUb0NhcnQsXG4gIGFkZFRvQ2FydEJ1dHRvblRleHRDb2xvcixcbiAgYWZ0ZXJBZGRlZFRleHQsXG4gIGlzRGlzYWJsZWQsXG4gIHByb2R1Y3RCdXlCdXR0b25TdGF0ZSxcbn0pIHtcbiAgY29uc3QgW2FkZGVkLCBzZXRBZGRlZF0gPSB1c2VTdGF0ZSgoKSA9PiBmYWxzZSlcbiAgY29uc3QgYWRkZWRUZXN0ID0gdXNlUmVmKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhZGRlZFRvQ2FydCkge1xuICAgICAgc2V0QWRkZWQodHJ1ZSlcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChhZGRlZFRlc3QuY3VycmVudCkge1xuICAgICAgICAgIHNldEFkZGVkKGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9LCAzMDAwKVxuICAgIH1cbiAgfSwgW2FkZGVkVG9DYXJ0XSlcblxuICBjb25zdCBBZGRCdXR0b25UZXh0Q1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAke2FkZFRvQ2FydEJ1dHRvblRleHRDb2xvciA/IGFkZFRvQ2FydEJ1dHRvblRleHRDb2xvciA6IFwiaW5oZXJpdFwifTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6ICR7aXNEaXNhYmxlZCA/IFwibm90LWFsbG93ZWRcIiA6IFwicG9pbnRlclwifTtcbiAgICB9XG4gIGBcblxuICBmdW5jdGlvbiBnZXRCdXR0b25UZXh0KCkge1xuICAgIGlmIChhZGRlZCkge1xuICAgICAgdmFyIHRleHQgPSBhZnRlckFkZGVkVGV4dFxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdGV4dCA9IGJ1dHRvblRleHRcbiAgICB9XG5cbiAgICByZXR1cm4gd3AuaG9va3MuYXBwbHlGaWx0ZXJzKFxuICAgICAgXCJwcm9kdWN0LmFkZFRvQ2FydC50ZXh0XCIsXG4gICAgICB0ZXh0LFxuICAgICAgcHJvZHVjdEJ1eUJ1dHRvblN0YXRlXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgY3NzPXtBZGRCdXR0b25UZXh0Q1NTfVxuICAgICAgcmVmPXthZGRlZFRlc3R9XG4gICAgICBhcmlhLWxhYmVsPVwiUHJvZHVjdCBBZGQgdG8gQ2FydCBUZXh0XCJcbiAgICA+XG4gICAgICB7Z2V0QnV0dG9uVGV4dCgpfVxuICAgIDwvc3Bhbj5cbiAgKVxufVxuXG5mdW5jdGlvbiBQcm9kdWN0QWRkQnV0dG9uKHtcbiAgaGFzTGluayxcbiAgcGF5bG9hZCxcbiAgbGlua1RhcmdldCxcbiAgbGlua1RvLFxuICBsaW5rV2l0aEJ1eUJ1dHRvbixcbiAgYWRkVG9DYXJ0QnV0dG9uQ29sb3IsXG4gIGFkZFRvQ2FydEJ1dHRvblRleHRDb2xvcixcbiAgaXNEaXJlY3RDaGVja291dCxcbiAgaGFzTWFueVZhcmlhbnRzLFxuICBwcm9kdWN0RGlzcGF0Y2gsXG4gIGJ1dHRvblRleHQsXG4gIGFkZGVkVG9DYXJ0LFxuICBxdWFudGl0eSxcbiAgc2VsZWN0ZWRPcHRpb25zLFxuICBzZXR0aW5ncyxcbiAgc2hvdWxkU2hvd1F1YW50aXR5LFxufSkge1xuICBjb25zdCBBZGRCdXR0b25XcmFwcGVyQ1NTID0gY3NzYFxuICAgIGRpc3BsYXk6ICR7c2hvdWxkU2hvd1F1YW50aXR5ID8gXCJmbGV4XCIgOiBcImJsb2NrXCJ9O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC53cHMtcXVhbnRpdHktY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgJHttcShcIm1lZGl1bVwiKX0ge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgLndwcy1xdWFudGl0eS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwid3BzLWNvbXBvbmVudCB3cHMtY29tcG9uZW50LXByb2R1Y3RzLWFkZC1idXR0b24gd3BzLWJ0bi13cmFwcGVyXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJQcm9kdWN0IEFkZCBCdXR0b25cIlxuICAgID5cbiAgICAgIDxkaXYgY3NzPXtBZGRCdXR0b25XcmFwcGVyQ1NTfT5cbiAgICAgICAge3Nob3VsZFNob3dRdWFudGl0eSA/IChcbiAgICAgICAgICA8UHJvZHVjdFF1YW50aXR5XG4gICAgICAgICAgICBtaW5RdWFudGl0eT17c2V0dGluZ3MubWluUXVhbnRpdHl9XG4gICAgICAgICAgICBtYXhRdWFudGl0eT17XG4gICAgICAgICAgICAgIHNldHRpbmdzLm1heFF1YW50aXR5XG4gICAgICAgICAgICAgICAgPyBzZXR0aW5ncy5tYXhRdWFudGl0eVxuICAgICAgICAgICAgICAgIDogcGF5bG9hZC50b3RhbEludmVudG9yeVxuICAgICAgICAgICAgICAgID8gcGF5bG9hZC50b3RhbEludmVudG9yeVxuICAgICAgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1YW50aXR5U3RlcD17c2V0dGluZ3MucXVhbnRpdHlTdGVwfVxuICAgICAgICAgICAgcGF5bG9hZD17cGF5bG9hZH1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICA8QWRkQnV0dG9uV3JhcHBlclxuICAgICAgICAgIGhhc0xpbms9e2hhc0xpbmt9XG4gICAgICAgICAgcGF5bG9hZD17cGF5bG9hZH1cbiAgICAgICAgICBsaW5rVGFyZ2V0PXtsaW5rVGFyZ2V0fVxuICAgICAgICAgIGxpbmtUbz17bGlua1RvfVxuICAgICAgICAgIGxpbmtXaXRoQnV5QnV0dG9uPXtsaW5rV2l0aEJ1eUJ1dHRvbn1cbiAgICAgICAgICBpc0RpcmVjdENoZWNrb3V0PXtpc0RpcmVjdENoZWNrb3V0fVxuICAgICAgICA+XG4gICAgICAgICAgPEFkZEJ1dHRvblxuICAgICAgICAgICAgaGFzTGluaz17aGFzTGlua31cbiAgICAgICAgICAgIGxpbmtXaXRoQnV5QnV0dG9uPXtsaW5rV2l0aEJ1eUJ1dHRvbn1cbiAgICAgICAgICAgIGFkZFRvQ2FydEJ1dHRvbkNvbG9yPXthZGRUb0NhcnRCdXR0b25Db2xvcn1cbiAgICAgICAgICAgIGFkZFRvQ2FydEJ1dHRvblRleHRDb2xvcj17YWRkVG9DYXJ0QnV0dG9uVGV4dENvbG9yfVxuICAgICAgICAgICAgbG9hZGVyPXs8TG9hZGVyIC8+fVxuICAgICAgICAgICAgaXNEaXJlY3RDaGVja291dD17aXNEaXJlY3RDaGVja291dH1cbiAgICAgICAgICAgIGhhc01hbnlWYXJpYW50cz17aGFzTWFueVZhcmlhbnRzfVxuICAgICAgICAgICAgcHJvZHVjdERpc3BhdGNoPXtwcm9kdWN0RGlzcGF0Y2h9XG4gICAgICAgICAgICBidXR0b25UZXh0PXtidXR0b25UZXh0fVxuICAgICAgICAgICAgYWRkZWRUb0NhcnQ9e2FkZGVkVG9DYXJ0fVxuICAgICAgICAgICAgcXVhbnRpdHk9e3F1YW50aXR5fVxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zPXtzZWxlY3RlZE9wdGlvbnN9XG4gICAgICAgICAgICBwYXlsb2FkPXtwYXlsb2FkfVxuICAgICAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgICAgICAgbGlua1RvPXtsaW5rVG99XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9BZGRCdXR0b25XcmFwcGVyPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtzaG9wd3AubWlzYy5pc1BybyAmJlxuICAgICAgc2V0dGluZ3Muc2hvd0ludmVudG9yeUxldmVscyAmJlxuICAgICAgcGF5bG9hZC5hdmFpbGFibGVGb3JTYWxlICYmXG4gICAgICBwYXlsb2FkLnRvdGFsSW52ZW50b3J5ID8gKFxuICAgICAgICA8UHJvZHVjdEJ1eUJ1dHRvbkxlZnRJblN0b2NrIHNldHRpbmdzPXtzZXR0aW5nc30gLz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RBZGRCdXR0b25cbiJdfQ== */")],
    disabled: isCheckingOut || isDisabled
  }, isCheckingOut ? loader : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(AddButtonText, {
    isDisabled: isDisabled,
    addedToCart: addedToCart,
    buttonText: buttonText,
    addToCartButtonTextColor: addToCartButtonTextColor,
    afterAddedText: settings.afterAddedText,
    productBuyButtonState: productBuyButtonState
  })), productBuyButtonState.notice ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(_notice__WEBPACK_IMPORTED_MODULE_8__["default"], {
    status: productBuyButtonState.notice.type,
    extraCSS: NoticeCSS
  }, productBuyButtonState.notice.message) : null);
}

function AddButtonText(_ref4) {
  var buttonText = _ref4.buttonText,
      addedToCart = _ref4.addedToCart,
      addToCartButtonTextColor = _ref4.addToCartButtonTextColor,
      afterAddedText = _ref4.afterAddedText,
      isDisabled = _ref4.isDisabled,
      productBuyButtonState = _ref4.productBuyButtonState;

  var _useState5 = useState(function () {
    return false;
  }),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      added = _useState6[0],
      setAdded = _useState6[1];

  var addedTest = useRef();
  useEffect(function () {
    if (addedToCart) {
      setAdded(true);
      setTimeout(function () {
        if (addedTest.current) {
          setAdded(false);
        }
      }, 3000);
    }
  }, [addedToCart]);
  var AddButtonTextCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.css)("display:block;margin:0;padding:0;width:100%;color:", addToCartButtonTextColor ? addToCartButtonTextColor : "inherit", ";transition:all 0.3s ease;&:hover{cursor:", isDisabled ? "not-allowed" : "pointer", ";};label:AddButtonTextCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vYWRkLWJ1dHRvbi9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcVo4QiIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC9idXktYnV0dG9uL2FkZC1idXR0b24vaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IGZpbmRWYXJpYW50RnJvbVNlbGVjdGVkT3B0aW9ucywgYWxsT3B0aW9uc1NlbGVjdGVkTWF0Y2ggfSBmcm9tIFwiVXRpbHNcIlxuaW1wb3J0IHsgYnV0dG9uQ1NTLCBtcSB9IGZyb20gXCJDb21tb24vY3NzXCJcbmltcG9ydCB7XG4gIHVzZVByb2R1Y3RCdXlCdXR0b25TdGF0ZSxcbiAgdXNlUHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoLFxufSBmcm9tIFwiLi4vX3N0YXRlL2hvb2tzXCJcblxuaW1wb3J0IFByb2R1Y3RRdWFudGl0eSBmcm9tIFwiLi4vcXVhbnRpdHlcIlxuaW1wb3J0IE5vdGljZSBmcm9tIFwiLi4vLi4vLi4vLi4vbm90aWNlXCJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi8uLi8uLi8uLi9saW5rXCJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2xvYWRlclwiXG5pbXBvcnQgUHJvZHVjdEJ1eUJ1dHRvbkxlZnRJblN0b2NrIGZyb20gXCIuLi9sZWZ0LWluLXN0b2NrXCJcblxuY29uc3QgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnRcblxuZnVuY3Rpb24gZmluZFNpbmdsZVZhcmlhbnRGcm9tUGF5bG9hZChwYXlsb2FkKSB7XG4gIGlmICghcGF5bG9hZC52YXJpYW50cy5lZGdlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBwYXlsb2FkLnZhcmlhbnRzLmVkZ2VzWzBdXG59XG5cbmZ1bmN0aW9uIGJ1aWxkTGluZXModmFyaWFudCwgcXVhbnRpdHksIHByb2R1Y3RCdXlCdXR0b25TdGF0ZSkge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGF0dHJpYnV0ZXM6IHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgIFwiY2FydC5saW5lSXRlbUF0dHJpYnV0ZXNcIixcbiAgICAgIFtdLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHF1YW50aXR5LFxuICAgICAgcHJvZHVjdEJ1eUJ1dHRvblN0YXRlXG4gICAgKSxcbiAgICBtZXJjaGFuZGlzZUlkOiB2YXJpYW50Lm5vZGUuaWQsXG4gICAgcXVhbnRpdHk6IHF1YW50aXR5LFxuICB9XG5cbiAgaWYgKHByb2R1Y3RCdXlCdXR0b25TdGF0ZT8uc3Vic2NyaXB0aW9uKSB7XG4gICAgZGF0YVtcInNlbGxpbmdQbGFuSWRcIl0gPSBwcm9kdWN0QnV5QnV0dG9uU3RhdGUuc3Vic2NyaXB0aW9uLnNlbGxpbmdQbGFuSWRcbiAgfVxuXG4gIHJldHVybiBbZGF0YV1cbn1cblxuZnVuY3Rpb24gQWRkQnV0dG9uV3JhcHBlcih7XG4gIGhhc0xpbmssXG4gIHBheWxvYWQsXG4gIGNoaWxkcmVuLFxuICBsaW5rVG8sXG4gIGxpbmtUYXJnZXQsXG4gIGlzRGlyZWN0Q2hlY2tvdXQsXG4gIGxpbmtXaXRoQnV5QnV0dG9uLFxufSkge1xuICByZXR1cm4gaGFzTGluayAmJiAhaXNEaXJlY3RDaGVja291dCAmJiAhbGlua1dpdGhCdXlCdXR0b24gPyAoXG4gICAgPExpbmsgdHlwZT1cInByb2R1Y3RzXCIgcGF5bG9hZD17cGF5bG9hZH0gbGlua1RvPXtsaW5rVG99IHRhcmdldD17bGlua1RhcmdldH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MaW5rPlxuICApIDogKFxuICAgIGNoaWxkcmVuXG4gIClcbn1cblxuZnVuY3Rpb24gQWRkQnV0dG9uKHtcbiAgYWRkVG9DYXJ0QnV0dG9uQ29sb3IsXG4gIGFkZFRvQ2FydEJ1dHRvblRleHRDb2xvcixcbiAgaGFzTGluayxcbiAgbGlua1dpdGhCdXlCdXR0b24sXG4gIGlzRGlyZWN0Q2hlY2tvdXQsXG4gIHByb2R1Y3REaXNwYXRjaCxcbiAgaGFzTWFueVZhcmlhbnRzLFxuICBsb2FkZXIsXG4gIGJ1dHRvblRleHQsXG4gIGFkZGVkVG9DYXJ0LFxuICBxdWFudGl0eSxcbiAgc2VsZWN0ZWRPcHRpb25zLFxuICBwYXlsb2FkLFxuICBzZXR0aW5ncyxcbiAgbGlua1RvLFxufSkge1xuICBjb25zdCBbc2hvdWxkU2hha2UsIHNldFNob3VsZFNoYWtlXSA9IHdwLmVsZW1lbnQudXNlU3RhdGUoZmFsc2UpXG5cbiAgZnVuY3Rpb24gZmluZFZhcmlhbnQoKSB7XG4gICAgaWYgKGhhc01hbnlWYXJpYW50cykge1xuICAgICAgcmV0dXJuIGZpbmRWYXJpYW50RnJvbVNlbGVjdGVkT3B0aW9ucyhwYXlsb2FkLCBzZWxlY3RlZE9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmaW5kU2luZ2xlVmFyaWFudEZyb21QYXlsb2FkKHBheWxvYWQpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgW2lzRGlzYWJsZWQsIHNldElzRGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHZhciB2YXJpYW50ID0gZmluZFZhcmlhbnQoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIGFsbE9wdGlvbnNTZWxlY3RlZCA9IGFsbE9wdGlvbnNTZWxlY3RlZE1hdGNoKHNlbGVjdGVkT3B0aW9ucywgcGF5bG9hZClcblxuICAgIGlmICghYWxsT3B0aW9uc1NlbGVjdGVkKSB7XG4gICAgICBzZXRJc0Rpc2FibGVkKGZhbHNlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHZhcmlhbnROZXcgPSBmaW5kVmFyaWFudCgpXG5cbiAgICBpZiAoIXZhcmlhbnROZXcpIHtcbiAgICAgIHNldElzRGlzYWJsZWQodHJ1ZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh2YXJpYW50TmV3Lm5vZGUuYXZhaWxhYmxlRm9yU2FsZSkge1xuICAgICAgc2V0U2hvdWxkU2hha2UodHJ1ZSlcbiAgICAgIHNldElzRGlzYWJsZWQoZmFsc2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzRGlzYWJsZWQodHJ1ZSlcbiAgICB9XG4gIH0sIFtzZWxlY3RlZE9wdGlvbnNdKVxuXG4gIGNvbnN0IFtpc0NoZWNraW5nT3V0LCBzZXRJc0NoZWNraW5nT3V0XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGJ1dHRvbiA9IHVzZVJlZigpXG4gIGNvbnN0IHByb2R1Y3RCdXlCdXR0b25TdGF0ZSA9IHVzZVByb2R1Y3RCdXlCdXR0b25TdGF0ZSgpXG4gIGNvbnN0IHByb2R1Y3RCdXlCdXR0b25EaXNwYXRjaCA9IHVzZVByb2R1Y3RCdXlCdXR0b25EaXNwYXRjaCgpXG4gIGNvbnN0IG1heFF1YW50aXR5ID0gc2V0dGluZ3MubWF4UXVhbnRpdHlcblxuICBjb25zdCBOb3RpY2VDU1MgPSBjc3NgXG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgYFxuXG4gIGNvbnN0IGhlYWRTaGFrZSA9IGtleWZyYW1lc2Bcblx0XHQwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG5cdFx0fVxuXG5cdFx0Ni41JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyk7XG5cdFx0fVxuXG5cdFx0MTguNSUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKTtcblx0XHR9XG5cblx0XHQzMS41JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyk7XG5cdFx0fVxuXG5cdFx0NDMuNSUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCkgcm90YXRlWSgzZGVnKTtcblx0XHR9XG5cblx0XHQ1MCUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXHRcdH1cblx0YFxuXG4gIGNvbnN0IGFkZFRvQ2FydENTUyA9IGNzc2Bcblx0XHRmb250LWZhbWlseTogJHtcbiAgICAgIHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVGb250RmFtaWx5XG4gICAgICAgID8gc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUZvbnRGYW1pbHlcbiAgICAgICAgOiBcImluaGVyaXRcIlxuICAgIH07XG5cdFx0Zm9udC13ZWlnaHQ6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFdlaWdodFxuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVGb250V2VpZ2h0XG4gICAgICAgIDogXCJpbml0aWFsXCJcbiAgICB9O1xuXHRcdGZvbnQtc3R5bGU6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFN0eWxlXG4gICAgICAgID8gc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUZvbnRTdHlsZVxuICAgICAgICA6IFwiaW5pdGlhbFwiXG4gICAgfTtcblx0XHRmb250LXNpemU6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFNpemVcbiAgICAgICAgPyBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFNpemVcbiAgICAgICAgOiBcImluaXRpYWxcIlxuICAgIH07XG5cdFx0bGV0dGVyLXNwYWNpbmc6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlTGV0dGVyU3BhY2luZ1xuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVMZXR0ZXJTcGFjaW5nXG4gICAgICAgIDogXCJpbml0aWFsXCJcbiAgICB9O1xuXHRcdGxpbmUtaGVpZ2h0OiAke1xuICAgICAgc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUxpbmVIZWlnaHRcbiAgICAgICAgPyBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlTGluZUhlaWdodFxuICAgICAgICA6IFwiaW5pdGlhbFwiXG4gICAgfTtcblx0XHR0ZXh0LWRlY29yYXRpb246ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlVGV4dERlY29yYXRpb25cbiAgICAgICAgPyBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlVGV4dERlY29yYXRpb25cbiAgICAgICAgOiBcImluaXRpYWxcIlxuICAgIH07XG5cdFx0dGV4dC10cmFuc2Zvcm06ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlVGV4dFRyYW5zZm9ybVxuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVUZXh0VHJhbnNmb3JtXG4gICAgICAgIDogXCJpbml0aWFsXCJcbiAgICB9O1xuXHRcdG92ZXJmbG93LXk6IGhpZGRlbjtcblx0XHRmbGV4OiAxO1xuXHRcdG1pbi13aWR0aDogMTYwcHg7XG4gICAgbWluLWhlaWdodDogNDVweDtcblx0XHRhbmltYXRpb246ICR7XG4gICAgICBzaG91bGRTaGFrZVxuICAgICAgICA/IGNzc2BcbiAgICAgICAgICAgICR7aGVhZFNoYWtlfSAwLjlzIGVhc2UtaW4tb3V0XG4gICAgICAgICAgYFxuICAgICAgICA6IFwibm9uZVwiXG4gICAgfVxuXG5cdFx0Jjpmb2N1cyxcblx0XHQmOmhvdmVyIHtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdGN1cnNvcjogJHtpc0NoZWNraW5nT3V0IHx8IGlzRGlzYWJsZWQgPyBcIm5vdC1hbGxvd2VkXCIgOiBcInBvaW50ZXJcIn07XG5cblx0XHRcdGNvbG9yOiAke1xuICAgICAgICBpc0NoZWNraW5nT3V0IHx8IGlzRGlzYWJsZWRcbiAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiXG4gICAgICAgICAgOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KVwiXG4gICAgICB9O1xuXHRcdH1cblxuXHRcdCYmIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7aXNEaXNhYmxlZCA/IFwiI2NmY2ZjZlwiIDogYWRkVG9DYXJ0QnV0dG9uQ29sb3J9O1xuXHRcdH1cblx0YFxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAobGlua1RvID09PSBcIm1vZGFsXCIgJiYgc2hvcHdwLm1pc2MuaXNQcm8gJiYgIWlzRGlyZWN0Q2hlY2tvdXQpIHtcbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiVE9HR0xFX01PREFMXCIsIHBheWxvYWQ6IHRydWUgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChoYXNMaW5rICYmICFpc0RpcmVjdENoZWNrb3V0ICYmICFsaW5rV2l0aEJ1eUJ1dHRvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBjaGVjayBpZiBhbGwgb3B0aW9ucyBhcmUgc2VsZWN0ZWRcbiAgICAvLyBpZiBzb21lIGFyZSBub3Qgc2VsZWN0ZWQsIGhpZ2hsaWdodCB0aGVtIC8gc2hha2UgdGhlbVxuICAgIGlmICghdmFyaWFudCAmJiBoYXNNYW55VmFyaWFudHMpIHtcbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX01JU1NJTkdfU0VMRUNUSU9OU1wiLCBwYXlsb2FkOiB0cnVlIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXZhcmlhbnQpIHtcbiAgICAgIC8vIFRPRE86IEhhbmRsZSB0aGlzIGJldHRlclxuICAgICAgY29uc29sZS5lcnJvcihcIlNob3BXUCBlcnJvcjogaGFuZGxlQ2xpY2sgdmFyaWFudCB1bmRlZmluZWQgXCIpXG5cbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX01JU1NJTkdfU0VMRUNUSU9OU1wiLCBwYXlsb2FkOiB0cnVlIH0pXG4gICAgICBwcm9kdWN0QnV5QnV0dG9uRGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcIlVQREFURV9TRUxFQ1RFRF9PUFRJT05TXCIsXG4gICAgICAgIHBheWxvYWQ6IGZhbHNlLFxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGxpbmVJdGVtT3B0aW9ucyA9IHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcInByb2R1Y3QubGluZUl0ZW1PcHRpb25zXCIsIHtcbiAgICAgIG1pblF1YW50aXR5OiBzZXR0aW5ncy5taW5RdWFudGl0eSxcbiAgICAgIG1heFF1YW50aXR5OiBzZXR0aW5ncy5tYXhRdWFudGl0eSxcbiAgICAgIHN1YnNjcmlwdGlvbjogcHJvZHVjdEJ1eUJ1dHRvblN0YXRlLnN1YnNjcmlwdGlvbixcbiAgICAgIGF0dHJpYnV0ZXM6IHByb2R1Y3RCdXlCdXR0b25TdGF0ZS5hdHRyaWJ1dGVzLFxuICAgICAgdmFyaWFudElkOiB2YXJpYW50Lm5vZGUuaWQsXG4gICAgfSlcblxuICAgIGNvbnN0IGxpbmVzID0gYnVpbGRMaW5lcyh2YXJpYW50LCBxdWFudGl0eSwgcHJvZHVjdEJ1eUJ1dHRvblN0YXRlKVxuXG4gICAgaWYgKGlzRGlyZWN0Q2hlY2tvdXQpIHtcbiAgICAgIHZhciBjaGVja291dERhdGEgPSB7XG4gICAgICAgIGxpbmVzOiBsaW5lcyxcbiAgICAgICAgbGluZUl0ZW1PcHRpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyaWFudElkOiB2YXJpYW50Lm5vZGUuaWQsXG4gICAgICAgICAgICBvcHRpb25zOiBsaW5lSXRlbU9wdGlvbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbm90ZTogZmFsc2UsXG4gICAgICAgIGRpc2NvdW50Q29kZTogZmFsc2UsXG4gICAgICAgIGN1c3RvbUF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgfVxuXG4gICAgICBwcm9kdWN0RGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcIlNFVF9ESVJFQ1RfQ0hFQ0tPVVRfUEFSQU1TXCIsXG4gICAgICAgIHBheWxvYWQ6IGNoZWNrb3V0RGF0YSxcbiAgICAgIH0pXG5cbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lTX0RJUkVDVF9DSEVDS09VVFwiLCBwYXlsb2FkOiB0cnVlIH0pXG5cbiAgICAgIHNldElzQ2hlY2tpbmdPdXQodHJ1ZSlcblxuICAgICAgd3AuaG9va3MuZG9BY3Rpb24oXCJkby5kaXJlY3RDaGVja291dFwiLCBjaGVja291dERhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc2V0QWZ0ZXIgPSBzZXR0aW5ncy5yZXNldFZhcmlhbnRzQWZ0ZXJBZGRpbmdcbiAgICAgIGNvbnN0IG9wZW5DYXJ0QWZ0ZXJBZGRpbmcgPSBzZXR0aW5ncy5vcGVuQ2FydEFmdGVyQWRkaW5nXG5cbiAgICAgIGxldCBhZGRUb0NhcnRQYXJhbXMgPSB7XG4gICAgICAgIGxpbmVzOiBsaW5lcyxcbiAgICAgICAgZXh0cmFzOiB7XG4gICAgICAgICAgb3BlbkNhcnRBZnRlckFkZGluZzogc2V0dGluZ3Mub3BlbkNhcnRBZnRlckFkZGluZyxcbiAgICAgICAgfSxcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcm9kdWN0QnV5QnV0dG9uU3RhdGUucGF5bG9hZC5yZXF1aXJlc1NlbGxpbmdQbGFuICYmXG4gICAgICAgICFwcm9kdWN0QnV5QnV0dG9uU3RhdGUuc3Vic2NyaXB0aW9uXG4gICAgICApIHtcbiAgICAgICAgcHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIlNFVF9OT1RJQ0VcIixcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICBcIlRoaXMgcHJvZHVjdCBjYW5ub3QgYmUgcHVyY2hhc2VkIHdpdGhvdXQgYSBzdWJzY3JpcHRpb24uIFBsZWFzZSBzZWxlY3QgYSBzdWJzY3JpcHRpb24gYW5kIHRyeSBhZ2Fpbi4gSWYgeW91IGRvbid0IHNlZSBhIHN1YnNjcmlwdGlvbiwgeW91IG1heSBuZWVkIHRvIHR1cm4gdGhpcyBmZWF0dXJlIG9uLlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAobWF4UXVhbnRpdHkpIHtcbiAgICAgICAgaWYgKG9wZW5DYXJ0QWZ0ZXJBZGRpbmcpIHtcbiAgICAgICAgICB3cC5ob29rcy5kb0FjdGlvbihcImRvLmNhcnRUb2dnbGVcIiwgXCJvcGVuXCIpXG4gICAgICAgIH1cblxuICAgICAgICBwcm9kdWN0RGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TRUxFQ1RFRF9WQVJJQU5UXCIsIHBheWxvYWQ6IGZhbHNlIH0pXG4gICAgICAgIHByb2R1Y3RCdXlCdXR0b25EaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogXCJVUERBVEVfU0VMRUNURURfT1BUSU9OU1wiLFxuICAgICAgICAgIHBheWxvYWQ6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgICBwcm9kdWN0RGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9NSVNTSU5HX1NFTEVDVElPTlNcIiwgcGF5bG9hZDogZmFsc2UgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmVzZXRBZnRlcikge1xuICAgICAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0FEREVEX1ZBUklBTlRcIiwgcGF5bG9hZDogdmFyaWFudC5ub2RlIH0pXG4gICAgICAgICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJTRVRfU0VMRUNURURfVkFSSUFOVFwiLCBwYXlsb2FkOiBmYWxzZSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIlVQREFURV9TRUxFQ1RFRF9PUFRJT05TXCIsXG4gICAgICAgICAgcGF5bG9hZDogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX01JU1NJTkdfU0VMRUNUSU9OU1wiLCBwYXlsb2FkOiBmYWxzZSB9KVxuXG4gICAgICAgIHdwLmhvb2tzLmRvQWN0aW9uKFwiZG8uYWRkVG9DYXJ0XCIsIGFkZFRvQ2FydFBhcmFtcylcbiAgICAgICAgd3AuaG9va3MuZG9BY3Rpb24oXCJvbi5hZnRlckFkZFRvQ2FydFwiLCBsaW5lcywgdmFyaWFudC5ub2RlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgcmVmPXtidXR0b259XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgaXRlbVByb3A9XCJwb3RlbnRpYWxBY3Rpb25cIlxuICAgICAgICBpdGVtU2NvcGVcbiAgICAgICAgaXRlbVR5cGU9XCJodHRwczovL3NjaGVtYS5vcmcvQnV5QWN0aW9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwid3BzLWJ0biB3cHMtYnRuLXNlY29uZGFyeSB3cHMtYWRkLXRvLWNhcnRcIlxuICAgICAgICBkYXRhLXdwcy1pcy1kaXJlY3QtY2hlY2tvdXQ9e2lzRGlyZWN0Q2hlY2tvdXQgPyBcIjFcIiA6IFwiMFwifVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgY3NzPXtbYnV0dG9uQ1NTLCBhZGRUb0NhcnRDU1NdfVxuICAgICAgICBkaXNhYmxlZD17aXNDaGVja2luZ091dCB8fCBpc0Rpc2FibGVkfVxuICAgICAgPlxuICAgICAgICB7aXNDaGVja2luZ091dCA/IChcbiAgICAgICAgICBsb2FkZXJcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8QWRkQnV0dG9uVGV4dFxuICAgICAgICAgICAgaXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgICAgIGFkZGVkVG9DYXJ0PXthZGRlZFRvQ2FydH1cbiAgICAgICAgICAgIGJ1dHRvblRleHQ9e2J1dHRvblRleHR9XG4gICAgICAgICAgICBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3I9e2FkZFRvQ2FydEJ1dHRvblRleHRDb2xvcn1cbiAgICAgICAgICAgIGFmdGVyQWRkZWRUZXh0PXtzZXR0aW5ncy5hZnRlckFkZGVkVGV4dH1cbiAgICAgICAgICAgIHByb2R1Y3RCdXlCdXR0b25TdGF0ZT17cHJvZHVjdEJ1eUJ1dHRvblN0YXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAge3Byb2R1Y3RCdXlCdXR0b25TdGF0ZS5ub3RpY2UgPyAoXG4gICAgICAgIDxOb3RpY2Ugc3RhdHVzPXtwcm9kdWN0QnV5QnV0dG9uU3RhdGUubm90aWNlLnR5cGV9IGV4dHJhQ1NTPXtOb3RpY2VDU1N9PlxuICAgICAgICAgIHtwcm9kdWN0QnV5QnV0dG9uU3RhdGUubm90aWNlLm1lc3NhZ2V9XG4gICAgICAgIDwvTm90aWNlPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gQWRkQnV0dG9uVGV4dCh7XG4gIGJ1dHRvblRleHQsXG4gIGFkZGVkVG9DYXJ0LFxuICBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3IsXG4gIGFmdGVyQWRkZWRUZXh0LFxuICBpc0Rpc2FibGVkLFxuICBwcm9kdWN0QnV5QnV0dG9uU3RhdGUsXG59KSB7XG4gIGNvbnN0IFthZGRlZCwgc2V0QWRkZWRdID0gdXNlU3RhdGUoKCkgPT4gZmFsc2UpXG4gIGNvbnN0IGFkZGVkVGVzdCA9IHVzZVJlZigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWRkZWRUb0NhcnQpIHtcbiAgICAgIHNldEFkZGVkKHRydWUpXG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYWRkZWRUZXN0LmN1cnJlbnQpIHtcbiAgICAgICAgICBzZXRBZGRlZChmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSwgMzAwMClcbiAgICB9XG4gIH0sIFthZGRlZFRvQ2FydF0pXG5cbiAgY29uc3QgQWRkQnV0dG9uVGV4dENTUyA9IGNzc2BcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogJHthZGRUb0NhcnRCdXR0b25UZXh0Q29sb3IgPyBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3IgOiBcImluaGVyaXRcIn07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiAke2lzRGlzYWJsZWQgPyBcIm5vdC1hbGxvd2VkXCIgOiBcInBvaW50ZXJcIn07XG4gICAgfVxuICBgXG5cbiAgZnVuY3Rpb24gZ2V0QnV0dG9uVGV4dCgpIHtcbiAgICBpZiAoYWRkZWQpIHtcbiAgICAgIHZhciB0ZXh0ID0gYWZ0ZXJBZGRlZFRleHRcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRleHQgPSBidXR0b25UZXh0XG4gICAgfVxuXG4gICAgcmV0dXJuIHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgIFwicHJvZHVjdC5hZGRUb0NhcnQudGV4dFwiLFxuICAgICAgdGV4dCxcbiAgICAgIHByb2R1Y3RCdXlCdXR0b25TdGF0ZVxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIGNzcz17QWRkQnV0dG9uVGV4dENTU31cbiAgICAgIHJlZj17YWRkZWRUZXN0fVxuICAgICAgYXJpYS1sYWJlbD1cIlByb2R1Y3QgQWRkIHRvIENhcnQgVGV4dFwiXG4gICAgPlxuICAgICAge2dldEJ1dHRvblRleHQoKX1cbiAgICA8L3NwYW4+XG4gIClcbn1cblxuZnVuY3Rpb24gUHJvZHVjdEFkZEJ1dHRvbih7XG4gIGhhc0xpbmssXG4gIHBheWxvYWQsXG4gIGxpbmtUYXJnZXQsXG4gIGxpbmtUbyxcbiAgbGlua1dpdGhCdXlCdXR0b24sXG4gIGFkZFRvQ2FydEJ1dHRvbkNvbG9yLFxuICBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3IsXG4gIGlzRGlyZWN0Q2hlY2tvdXQsXG4gIGhhc01hbnlWYXJpYW50cyxcbiAgcHJvZHVjdERpc3BhdGNoLFxuICBidXR0b25UZXh0LFxuICBhZGRlZFRvQ2FydCxcbiAgcXVhbnRpdHksXG4gIHNlbGVjdGVkT3B0aW9ucyxcbiAgc2V0dGluZ3MsXG4gIHNob3VsZFNob3dRdWFudGl0eSxcbn0pIHtcbiAgY29uc3QgQWRkQnV0dG9uV3JhcHBlckNTUyA9IGNzc2BcbiAgICBkaXNwbGF5OiAke3Nob3VsZFNob3dRdWFudGl0eSA/IFwiZmxleFwiIDogXCJibG9ja1wifTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAud3BzLXF1YW50aXR5LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgICR7bXEoXCJtZWRpdW1cIil9IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC53cHMtcXVhbnRpdHktY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIGBcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cIndwcy1jb21wb25lbnQgd3BzLWNvbXBvbmVudC1wcm9kdWN0cy1hZGQtYnV0dG9uIHdwcy1idG4td3JhcHBlclwiXG4gICAgICBhcmlhLWxhYmVsPVwiUHJvZHVjdCBBZGQgQnV0dG9uXCJcbiAgICA+XG4gICAgICA8ZGl2IGNzcz17QWRkQnV0dG9uV3JhcHBlckNTU30+XG4gICAgICAgIHtzaG91bGRTaG93UXVhbnRpdHkgPyAoXG4gICAgICAgICAgPFByb2R1Y3RRdWFudGl0eVxuICAgICAgICAgICAgbWluUXVhbnRpdHk9e3NldHRpbmdzLm1pblF1YW50aXR5fVxuICAgICAgICAgICAgbWF4UXVhbnRpdHk9e1xuICAgICAgICAgICAgICBzZXR0aW5ncy5tYXhRdWFudGl0eVxuICAgICAgICAgICAgICAgID8gc2V0dGluZ3MubWF4UXVhbnRpdHlcbiAgICAgICAgICAgICAgICA6IHBheWxvYWQudG90YWxJbnZlbnRvcnlcbiAgICAgICAgICAgICAgICA/IHBheWxvYWQudG90YWxJbnZlbnRvcnlcbiAgICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWFudGl0eVN0ZXA9e3NldHRpbmdzLnF1YW50aXR5U3RlcH1cbiAgICAgICAgICAgIHBheWxvYWQ9e3BheWxvYWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPEFkZEJ1dHRvbldyYXBwZXJcbiAgICAgICAgICBoYXNMaW5rPXtoYXNMaW5rfVxuICAgICAgICAgIHBheWxvYWQ9e3BheWxvYWR9XG4gICAgICAgICAgbGlua1RhcmdldD17bGlua1RhcmdldH1cbiAgICAgICAgICBsaW5rVG89e2xpbmtUb31cbiAgICAgICAgICBsaW5rV2l0aEJ1eUJ1dHRvbj17bGlua1dpdGhCdXlCdXR0b259XG4gICAgICAgICAgaXNEaXJlY3RDaGVja291dD17aXNEaXJlY3RDaGVja291dH1cbiAgICAgICAgPlxuICAgICAgICAgIDxBZGRCdXR0b25cbiAgICAgICAgICAgIGhhc0xpbms9e2hhc0xpbmt9XG4gICAgICAgICAgICBsaW5rV2l0aEJ1eUJ1dHRvbj17bGlua1dpdGhCdXlCdXR0b259XG4gICAgICAgICAgICBhZGRUb0NhcnRCdXR0b25Db2xvcj17YWRkVG9DYXJ0QnV0dG9uQ29sb3J9XG4gICAgICAgICAgICBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3I9e2FkZFRvQ2FydEJ1dHRvblRleHRDb2xvcn1cbiAgICAgICAgICAgIGxvYWRlcj17PExvYWRlciAvPn1cbiAgICAgICAgICAgIGlzRGlyZWN0Q2hlY2tvdXQ9e2lzRGlyZWN0Q2hlY2tvdXR9XG4gICAgICAgICAgICBoYXNNYW55VmFyaWFudHM9e2hhc01hbnlWYXJpYW50c31cbiAgICAgICAgICAgIHByb2R1Y3REaXNwYXRjaD17cHJvZHVjdERpc3BhdGNofVxuICAgICAgICAgICAgYnV0dG9uVGV4dD17YnV0dG9uVGV4dH1cbiAgICAgICAgICAgIGFkZGVkVG9DYXJ0PXthZGRlZFRvQ2FydH1cbiAgICAgICAgICAgIHF1YW50aXR5PXtxdWFudGl0eX1cbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucz17c2VsZWN0ZWRPcHRpb25zfVxuICAgICAgICAgICAgcGF5bG9hZD17cGF5bG9hZH1cbiAgICAgICAgICAgIHNldHRpbmdzPXtzZXR0aW5nc31cbiAgICAgICAgICAgIGxpbmtUbz17bGlua1RvfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQWRkQnV0dG9uV3JhcHBlcj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7c2hvcHdwLm1pc2MuaXNQcm8gJiZcbiAgICAgIHNldHRpbmdzLnNob3dJbnZlbnRvcnlMZXZlbHMgJiZcbiAgICAgIHBheWxvYWQuYXZhaWxhYmxlRm9yU2FsZSAmJlxuICAgICAgcGF5bG9hZC50b3RhbEludmVudG9yeSA/IChcbiAgICAgICAgPFByb2R1Y3RCdXlCdXR0b25MZWZ0SW5TdG9jayBzZXR0aW5ncz17c2V0dGluZ3N9IC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0QWRkQnV0dG9uXG4iXX0= */"));

  function getButtonText() {
    if (added) {
      var text = afterAddedText;
    } else {
      var text = buttonText;
    }

    return __webpack_provided_wp_dot_hooks.applyFilters("product.addToCart.text", text, productBuyButtonState);
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
    css: AddButtonTextCSS,
    ref: addedTest,
    "aria-label": "Product Add to Cart Text"
  }, getButtonText());
}

function ProductAddButton(_ref5) {
  var hasLink = _ref5.hasLink,
      payload = _ref5.payload,
      linkTarget = _ref5.linkTarget,
      linkTo = _ref5.linkTo,
      linkWithBuyButton = _ref5.linkWithBuyButton,
      addToCartButtonColor = _ref5.addToCartButtonColor,
      addToCartButtonTextColor = _ref5.addToCartButtonTextColor,
      isDirectCheckout = _ref5.isDirectCheckout,
      hasManyVariants = _ref5.hasManyVariants,
      productDispatch = _ref5.productDispatch,
      buttonText = _ref5.buttonText,
      addedToCart = _ref5.addedToCart,
      quantity = _ref5.quantity,
      selectedOptions = _ref5.selectedOptions,
      settings = _ref5.settings,
      shouldShowQuantity = _ref5.shouldShowQuantity;
  var AddButtonWrapperCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.css)("display:", shouldShowQuantity ? "flex" : "block", ";align-items:flex-start;flex-wrap:wrap;.wps-quantity-container{margin-right:10px;margin-bottom:10px;}", (0,Common_css__WEBPACK_IMPORTED_MODULE_5__.mq)("medium"), "{flex-direction:column;.wps-quantity-container{margin-bottom:10px;}};label:AddButtonWrapperCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vYWRkLWJ1dHRvbi9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNmNpQyIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC9idXktYnV0dG9uL2FkZC1idXR0b24vaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IGZpbmRWYXJpYW50RnJvbVNlbGVjdGVkT3B0aW9ucywgYWxsT3B0aW9uc1NlbGVjdGVkTWF0Y2ggfSBmcm9tIFwiVXRpbHNcIlxuaW1wb3J0IHsgYnV0dG9uQ1NTLCBtcSB9IGZyb20gXCJDb21tb24vY3NzXCJcbmltcG9ydCB7XG4gIHVzZVByb2R1Y3RCdXlCdXR0b25TdGF0ZSxcbiAgdXNlUHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoLFxufSBmcm9tIFwiLi4vX3N0YXRlL2hvb2tzXCJcblxuaW1wb3J0IFByb2R1Y3RRdWFudGl0eSBmcm9tIFwiLi4vcXVhbnRpdHlcIlxuaW1wb3J0IE5vdGljZSBmcm9tIFwiLi4vLi4vLi4vLi4vbm90aWNlXCJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi8uLi8uLi8uLi9saW5rXCJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2xvYWRlclwiXG5pbXBvcnQgUHJvZHVjdEJ1eUJ1dHRvbkxlZnRJblN0b2NrIGZyb20gXCIuLi9sZWZ0LWluLXN0b2NrXCJcblxuY29uc3QgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnRcblxuZnVuY3Rpb24gZmluZFNpbmdsZVZhcmlhbnRGcm9tUGF5bG9hZChwYXlsb2FkKSB7XG4gIGlmICghcGF5bG9hZC52YXJpYW50cy5lZGdlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBwYXlsb2FkLnZhcmlhbnRzLmVkZ2VzWzBdXG59XG5cbmZ1bmN0aW9uIGJ1aWxkTGluZXModmFyaWFudCwgcXVhbnRpdHksIHByb2R1Y3RCdXlCdXR0b25TdGF0ZSkge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGF0dHJpYnV0ZXM6IHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgIFwiY2FydC5saW5lSXRlbUF0dHJpYnV0ZXNcIixcbiAgICAgIFtdLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHF1YW50aXR5LFxuICAgICAgcHJvZHVjdEJ1eUJ1dHRvblN0YXRlXG4gICAgKSxcbiAgICBtZXJjaGFuZGlzZUlkOiB2YXJpYW50Lm5vZGUuaWQsXG4gICAgcXVhbnRpdHk6IHF1YW50aXR5LFxuICB9XG5cbiAgaWYgKHByb2R1Y3RCdXlCdXR0b25TdGF0ZT8uc3Vic2NyaXB0aW9uKSB7XG4gICAgZGF0YVtcInNlbGxpbmdQbGFuSWRcIl0gPSBwcm9kdWN0QnV5QnV0dG9uU3RhdGUuc3Vic2NyaXB0aW9uLnNlbGxpbmdQbGFuSWRcbiAgfVxuXG4gIHJldHVybiBbZGF0YV1cbn1cblxuZnVuY3Rpb24gQWRkQnV0dG9uV3JhcHBlcih7XG4gIGhhc0xpbmssXG4gIHBheWxvYWQsXG4gIGNoaWxkcmVuLFxuICBsaW5rVG8sXG4gIGxpbmtUYXJnZXQsXG4gIGlzRGlyZWN0Q2hlY2tvdXQsXG4gIGxpbmtXaXRoQnV5QnV0dG9uLFxufSkge1xuICByZXR1cm4gaGFzTGluayAmJiAhaXNEaXJlY3RDaGVja291dCAmJiAhbGlua1dpdGhCdXlCdXR0b24gPyAoXG4gICAgPExpbmsgdHlwZT1cInByb2R1Y3RzXCIgcGF5bG9hZD17cGF5bG9hZH0gbGlua1RvPXtsaW5rVG99IHRhcmdldD17bGlua1RhcmdldH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MaW5rPlxuICApIDogKFxuICAgIGNoaWxkcmVuXG4gIClcbn1cblxuZnVuY3Rpb24gQWRkQnV0dG9uKHtcbiAgYWRkVG9DYXJ0QnV0dG9uQ29sb3IsXG4gIGFkZFRvQ2FydEJ1dHRvblRleHRDb2xvcixcbiAgaGFzTGluayxcbiAgbGlua1dpdGhCdXlCdXR0b24sXG4gIGlzRGlyZWN0Q2hlY2tvdXQsXG4gIHByb2R1Y3REaXNwYXRjaCxcbiAgaGFzTWFueVZhcmlhbnRzLFxuICBsb2FkZXIsXG4gIGJ1dHRvblRleHQsXG4gIGFkZGVkVG9DYXJ0LFxuICBxdWFudGl0eSxcbiAgc2VsZWN0ZWRPcHRpb25zLFxuICBwYXlsb2FkLFxuICBzZXR0aW5ncyxcbiAgbGlua1RvLFxufSkge1xuICBjb25zdCBbc2hvdWxkU2hha2UsIHNldFNob3VsZFNoYWtlXSA9IHdwLmVsZW1lbnQudXNlU3RhdGUoZmFsc2UpXG5cbiAgZnVuY3Rpb24gZmluZFZhcmlhbnQoKSB7XG4gICAgaWYgKGhhc01hbnlWYXJpYW50cykge1xuICAgICAgcmV0dXJuIGZpbmRWYXJpYW50RnJvbVNlbGVjdGVkT3B0aW9ucyhwYXlsb2FkLCBzZWxlY3RlZE9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmaW5kU2luZ2xlVmFyaWFudEZyb21QYXlsb2FkKHBheWxvYWQpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgW2lzRGlzYWJsZWQsIHNldElzRGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHZhciB2YXJpYW50ID0gZmluZFZhcmlhbnQoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIGFsbE9wdGlvbnNTZWxlY3RlZCA9IGFsbE9wdGlvbnNTZWxlY3RlZE1hdGNoKHNlbGVjdGVkT3B0aW9ucywgcGF5bG9hZClcblxuICAgIGlmICghYWxsT3B0aW9uc1NlbGVjdGVkKSB7XG4gICAgICBzZXRJc0Rpc2FibGVkKGZhbHNlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHZhcmlhbnROZXcgPSBmaW5kVmFyaWFudCgpXG5cbiAgICBpZiAoIXZhcmlhbnROZXcpIHtcbiAgICAgIHNldElzRGlzYWJsZWQodHJ1ZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh2YXJpYW50TmV3Lm5vZGUuYXZhaWxhYmxlRm9yU2FsZSkge1xuICAgICAgc2V0U2hvdWxkU2hha2UodHJ1ZSlcbiAgICAgIHNldElzRGlzYWJsZWQoZmFsc2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzRGlzYWJsZWQodHJ1ZSlcbiAgICB9XG4gIH0sIFtzZWxlY3RlZE9wdGlvbnNdKVxuXG4gIGNvbnN0IFtpc0NoZWNraW5nT3V0LCBzZXRJc0NoZWNraW5nT3V0XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGJ1dHRvbiA9IHVzZVJlZigpXG4gIGNvbnN0IHByb2R1Y3RCdXlCdXR0b25TdGF0ZSA9IHVzZVByb2R1Y3RCdXlCdXR0b25TdGF0ZSgpXG4gIGNvbnN0IHByb2R1Y3RCdXlCdXR0b25EaXNwYXRjaCA9IHVzZVByb2R1Y3RCdXlCdXR0b25EaXNwYXRjaCgpXG4gIGNvbnN0IG1heFF1YW50aXR5ID0gc2V0dGluZ3MubWF4UXVhbnRpdHlcblxuICBjb25zdCBOb3RpY2VDU1MgPSBjc3NgXG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgYFxuXG4gIGNvbnN0IGhlYWRTaGFrZSA9IGtleWZyYW1lc2Bcblx0XHQwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG5cdFx0fVxuXG5cdFx0Ni41JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyk7XG5cdFx0fVxuXG5cdFx0MTguNSUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKTtcblx0XHR9XG5cblx0XHQzMS41JSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyk7XG5cdFx0fVxuXG5cdFx0NDMuNSUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCkgcm90YXRlWSgzZGVnKTtcblx0XHR9XG5cblx0XHQ1MCUge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXHRcdH1cblx0YFxuXG4gIGNvbnN0IGFkZFRvQ2FydENTUyA9IGNzc2Bcblx0XHRmb250LWZhbWlseTogJHtcbiAgICAgIHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVGb250RmFtaWx5XG4gICAgICAgID8gc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUZvbnRGYW1pbHlcbiAgICAgICAgOiBcImluaGVyaXRcIlxuICAgIH07XG5cdFx0Zm9udC13ZWlnaHQ6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFdlaWdodFxuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVGb250V2VpZ2h0XG4gICAgICAgIDogXCJpbml0aWFsXCJcbiAgICB9O1xuXHRcdGZvbnQtc3R5bGU6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFN0eWxlXG4gICAgICAgID8gc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUZvbnRTdHlsZVxuICAgICAgICA6IFwiaW5pdGlhbFwiXG4gICAgfTtcblx0XHRmb250LXNpemU6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFNpemVcbiAgICAgICAgPyBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlRm9udFNpemVcbiAgICAgICAgOiBcImluaXRpYWxcIlxuICAgIH07XG5cdFx0bGV0dGVyLXNwYWNpbmc6ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlTGV0dGVyU3BhY2luZ1xuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVMZXR0ZXJTcGFjaW5nXG4gICAgICAgIDogXCJpbml0aWFsXCJcbiAgICB9O1xuXHRcdGxpbmUtaGVpZ2h0OiAke1xuICAgICAgc2V0dGluZ3MuYWRkVG9DYXJ0QnV0dG9uVHlwZUxpbmVIZWlnaHRcbiAgICAgICAgPyBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlTGluZUhlaWdodFxuICAgICAgICA6IFwiaW5pdGlhbFwiXG4gICAgfTtcblx0XHR0ZXh0LWRlY29yYXRpb246ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlVGV4dERlY29yYXRpb25cbiAgICAgICAgPyBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlVGV4dERlY29yYXRpb25cbiAgICAgICAgOiBcImluaXRpYWxcIlxuICAgIH07XG5cdFx0dGV4dC10cmFuc2Zvcm06ICR7XG4gICAgICBzZXR0aW5ncy5hZGRUb0NhcnRCdXR0b25UeXBlVGV4dFRyYW5zZm9ybVxuICAgICAgICA/IHNldHRpbmdzLmFkZFRvQ2FydEJ1dHRvblR5cGVUZXh0VHJhbnNmb3JtXG4gICAgICAgIDogXCJpbml0aWFsXCJcbiAgICB9O1xuXHRcdG92ZXJmbG93LXk6IGhpZGRlbjtcblx0XHRmbGV4OiAxO1xuXHRcdG1pbi13aWR0aDogMTYwcHg7XG4gICAgbWluLWhlaWdodDogNDVweDtcblx0XHRhbmltYXRpb246ICR7XG4gICAgICBzaG91bGRTaGFrZVxuICAgICAgICA/IGNzc2BcbiAgICAgICAgICAgICR7aGVhZFNoYWtlfSAwLjlzIGVhc2UtaW4tb3V0XG4gICAgICAgICAgYFxuICAgICAgICA6IFwibm9uZVwiXG4gICAgfVxuXG5cdFx0Jjpmb2N1cyxcblx0XHQmOmhvdmVyIHtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdGN1cnNvcjogJHtpc0NoZWNraW5nT3V0IHx8IGlzRGlzYWJsZWQgPyBcIm5vdC1hbGxvd2VkXCIgOiBcInBvaW50ZXJcIn07XG5cblx0XHRcdGNvbG9yOiAke1xuICAgICAgICBpc0NoZWNraW5nT3V0IHx8IGlzRGlzYWJsZWRcbiAgICAgICAgICA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiXG4gICAgICAgICAgOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KVwiXG4gICAgICB9O1xuXHRcdH1cblxuXHRcdCYmIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7aXNEaXNhYmxlZCA/IFwiI2NmY2ZjZlwiIDogYWRkVG9DYXJ0QnV0dG9uQ29sb3J9O1xuXHRcdH1cblx0YFxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAobGlua1RvID09PSBcIm1vZGFsXCIgJiYgc2hvcHdwLm1pc2MuaXNQcm8gJiYgIWlzRGlyZWN0Q2hlY2tvdXQpIHtcbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiVE9HR0xFX01PREFMXCIsIHBheWxvYWQ6IHRydWUgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChoYXNMaW5rICYmICFpc0RpcmVjdENoZWNrb3V0ICYmICFsaW5rV2l0aEJ1eUJ1dHRvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBjaGVjayBpZiBhbGwgb3B0aW9ucyBhcmUgc2VsZWN0ZWRcbiAgICAvLyBpZiBzb21lIGFyZSBub3Qgc2VsZWN0ZWQsIGhpZ2hsaWdodCB0aGVtIC8gc2hha2UgdGhlbVxuICAgIGlmICghdmFyaWFudCAmJiBoYXNNYW55VmFyaWFudHMpIHtcbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX01JU1NJTkdfU0VMRUNUSU9OU1wiLCBwYXlsb2FkOiB0cnVlIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXZhcmlhbnQpIHtcbiAgICAgIC8vIFRPRE86IEhhbmRsZSB0aGlzIGJldHRlclxuICAgICAgY29uc29sZS5lcnJvcihcIlNob3BXUCBlcnJvcjogaGFuZGxlQ2xpY2sgdmFyaWFudCB1bmRlZmluZWQgXCIpXG5cbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX01JU1NJTkdfU0VMRUNUSU9OU1wiLCBwYXlsb2FkOiB0cnVlIH0pXG4gICAgICBwcm9kdWN0QnV5QnV0dG9uRGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcIlVQREFURV9TRUxFQ1RFRF9PUFRJT05TXCIsXG4gICAgICAgIHBheWxvYWQ6IGZhbHNlLFxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGxpbmVJdGVtT3B0aW9ucyA9IHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcInByb2R1Y3QubGluZUl0ZW1PcHRpb25zXCIsIHtcbiAgICAgIG1pblF1YW50aXR5OiBzZXR0aW5ncy5taW5RdWFudGl0eSxcbiAgICAgIG1heFF1YW50aXR5OiBzZXR0aW5ncy5tYXhRdWFudGl0eSxcbiAgICAgIHN1YnNjcmlwdGlvbjogcHJvZHVjdEJ1eUJ1dHRvblN0YXRlLnN1YnNjcmlwdGlvbixcbiAgICAgIGF0dHJpYnV0ZXM6IHByb2R1Y3RCdXlCdXR0b25TdGF0ZS5hdHRyaWJ1dGVzLFxuICAgICAgdmFyaWFudElkOiB2YXJpYW50Lm5vZGUuaWQsXG4gICAgfSlcblxuICAgIGNvbnN0IGxpbmVzID0gYnVpbGRMaW5lcyh2YXJpYW50LCBxdWFudGl0eSwgcHJvZHVjdEJ1eUJ1dHRvblN0YXRlKVxuXG4gICAgaWYgKGlzRGlyZWN0Q2hlY2tvdXQpIHtcbiAgICAgIHZhciBjaGVja291dERhdGEgPSB7XG4gICAgICAgIGxpbmVzOiBsaW5lcyxcbiAgICAgICAgbGluZUl0ZW1PcHRpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyaWFudElkOiB2YXJpYW50Lm5vZGUuaWQsXG4gICAgICAgICAgICBvcHRpb25zOiBsaW5lSXRlbU9wdGlvbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbm90ZTogZmFsc2UsXG4gICAgICAgIGRpc2NvdW50Q29kZTogZmFsc2UsXG4gICAgICAgIGN1c3RvbUF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgfVxuXG4gICAgICBwcm9kdWN0RGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcIlNFVF9ESVJFQ1RfQ0hFQ0tPVVRfUEFSQU1TXCIsXG4gICAgICAgIHBheWxvYWQ6IGNoZWNrb3V0RGF0YSxcbiAgICAgIH0pXG5cbiAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lTX0RJUkVDVF9DSEVDS09VVFwiLCBwYXlsb2FkOiB0cnVlIH0pXG5cbiAgICAgIHNldElzQ2hlY2tpbmdPdXQodHJ1ZSlcblxuICAgICAgd3AuaG9va3MuZG9BY3Rpb24oXCJkby5kaXJlY3RDaGVja291dFwiLCBjaGVja291dERhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc2V0QWZ0ZXIgPSBzZXR0aW5ncy5yZXNldFZhcmlhbnRzQWZ0ZXJBZGRpbmdcbiAgICAgIGNvbnN0IG9wZW5DYXJ0QWZ0ZXJBZGRpbmcgPSBzZXR0aW5ncy5vcGVuQ2FydEFmdGVyQWRkaW5nXG5cbiAgICAgIGxldCBhZGRUb0NhcnRQYXJhbXMgPSB7XG4gICAgICAgIGxpbmVzOiBsaW5lcyxcbiAgICAgICAgZXh0cmFzOiB7XG4gICAgICAgICAgb3BlbkNhcnRBZnRlckFkZGluZzogc2V0dGluZ3Mub3BlbkNhcnRBZnRlckFkZGluZyxcbiAgICAgICAgfSxcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcm9kdWN0QnV5QnV0dG9uU3RhdGUucGF5bG9hZC5yZXF1aXJlc1NlbGxpbmdQbGFuICYmXG4gICAgICAgICFwcm9kdWN0QnV5QnV0dG9uU3RhdGUuc3Vic2NyaXB0aW9uXG4gICAgICApIHtcbiAgICAgICAgcHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIlNFVF9OT1RJQ0VcIixcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICBcIlRoaXMgcHJvZHVjdCBjYW5ub3QgYmUgcHVyY2hhc2VkIHdpdGhvdXQgYSBzdWJzY3JpcHRpb24uIFBsZWFzZSBzZWxlY3QgYSBzdWJzY3JpcHRpb24gYW5kIHRyeSBhZ2Fpbi4gSWYgeW91IGRvbid0IHNlZSBhIHN1YnNjcmlwdGlvbiwgeW91IG1heSBuZWVkIHRvIHR1cm4gdGhpcyBmZWF0dXJlIG9uLlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAobWF4UXVhbnRpdHkpIHtcbiAgICAgICAgaWYgKG9wZW5DYXJ0QWZ0ZXJBZGRpbmcpIHtcbiAgICAgICAgICB3cC5ob29rcy5kb0FjdGlvbihcImRvLmNhcnRUb2dnbGVcIiwgXCJvcGVuXCIpXG4gICAgICAgIH1cblxuICAgICAgICBwcm9kdWN0RGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TRUxFQ1RFRF9WQVJJQU5UXCIsIHBheWxvYWQ6IGZhbHNlIH0pXG4gICAgICAgIHByb2R1Y3RCdXlCdXR0b25EaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogXCJVUERBVEVfU0VMRUNURURfT1BUSU9OU1wiLFxuICAgICAgICAgIHBheWxvYWQ6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgICBwcm9kdWN0RGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9NSVNTSU5HX1NFTEVDVElPTlNcIiwgcGF5bG9hZDogZmFsc2UgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmVzZXRBZnRlcikge1xuICAgICAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0FEREVEX1ZBUklBTlRcIiwgcGF5bG9hZDogdmFyaWFudC5ub2RlIH0pXG4gICAgICAgICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJTRVRfU0VMRUNURURfVkFSSUFOVFwiLCBwYXlsb2FkOiBmYWxzZSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIlVQREFURV9TRUxFQ1RFRF9PUFRJT05TXCIsXG4gICAgICAgICAgcGF5bG9hZDogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICAgIHByb2R1Y3REaXNwYXRjaCh7IHR5cGU6IFwiU0VUX01JU1NJTkdfU0VMRUNUSU9OU1wiLCBwYXlsb2FkOiBmYWxzZSB9KVxuXG4gICAgICAgIHdwLmhvb2tzLmRvQWN0aW9uKFwiZG8uYWRkVG9DYXJ0XCIsIGFkZFRvQ2FydFBhcmFtcylcbiAgICAgICAgd3AuaG9va3MuZG9BY3Rpb24oXCJvbi5hZnRlckFkZFRvQ2FydFwiLCBsaW5lcywgdmFyaWFudC5ub2RlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgcmVmPXtidXR0b259XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgaXRlbVByb3A9XCJwb3RlbnRpYWxBY3Rpb25cIlxuICAgICAgICBpdGVtU2NvcGVcbiAgICAgICAgaXRlbVR5cGU9XCJodHRwczovL3NjaGVtYS5vcmcvQnV5QWN0aW9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwid3BzLWJ0biB3cHMtYnRuLXNlY29uZGFyeSB3cHMtYWRkLXRvLWNhcnRcIlxuICAgICAgICBkYXRhLXdwcy1pcy1kaXJlY3QtY2hlY2tvdXQ9e2lzRGlyZWN0Q2hlY2tvdXQgPyBcIjFcIiA6IFwiMFwifVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgY3NzPXtbYnV0dG9uQ1NTLCBhZGRUb0NhcnRDU1NdfVxuICAgICAgICBkaXNhYmxlZD17aXNDaGVja2luZ091dCB8fCBpc0Rpc2FibGVkfVxuICAgICAgPlxuICAgICAgICB7aXNDaGVja2luZ091dCA/IChcbiAgICAgICAgICBsb2FkZXJcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8QWRkQnV0dG9uVGV4dFxuICAgICAgICAgICAgaXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgICAgIGFkZGVkVG9DYXJ0PXthZGRlZFRvQ2FydH1cbiAgICAgICAgICAgIGJ1dHRvblRleHQ9e2J1dHRvblRleHR9XG4gICAgICAgICAgICBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3I9e2FkZFRvQ2FydEJ1dHRvblRleHRDb2xvcn1cbiAgICAgICAgICAgIGFmdGVyQWRkZWRUZXh0PXtzZXR0aW5ncy5hZnRlckFkZGVkVGV4dH1cbiAgICAgICAgICAgIHByb2R1Y3RCdXlCdXR0b25TdGF0ZT17cHJvZHVjdEJ1eUJ1dHRvblN0YXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAge3Byb2R1Y3RCdXlCdXR0b25TdGF0ZS5ub3RpY2UgPyAoXG4gICAgICAgIDxOb3RpY2Ugc3RhdHVzPXtwcm9kdWN0QnV5QnV0dG9uU3RhdGUubm90aWNlLnR5cGV9IGV4dHJhQ1NTPXtOb3RpY2VDU1N9PlxuICAgICAgICAgIHtwcm9kdWN0QnV5QnV0dG9uU3RhdGUubm90aWNlLm1lc3NhZ2V9XG4gICAgICAgIDwvTm90aWNlPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gQWRkQnV0dG9uVGV4dCh7XG4gIGJ1dHRvblRleHQsXG4gIGFkZGVkVG9DYXJ0LFxuICBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3IsXG4gIGFmdGVyQWRkZWRUZXh0LFxuICBpc0Rpc2FibGVkLFxuICBwcm9kdWN0QnV5QnV0dG9uU3RhdGUsXG59KSB7XG4gIGNvbnN0IFthZGRlZCwgc2V0QWRkZWRdID0gdXNlU3RhdGUoKCkgPT4gZmFsc2UpXG4gIGNvbnN0IGFkZGVkVGVzdCA9IHVzZVJlZigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWRkZWRUb0NhcnQpIHtcbiAgICAgIHNldEFkZGVkKHRydWUpXG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYWRkZWRUZXN0LmN1cnJlbnQpIHtcbiAgICAgICAgICBzZXRBZGRlZChmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSwgMzAwMClcbiAgICB9XG4gIH0sIFthZGRlZFRvQ2FydF0pXG5cbiAgY29uc3QgQWRkQnV0dG9uVGV4dENTUyA9IGNzc2BcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogJHthZGRUb0NhcnRCdXR0b25UZXh0Q29sb3IgPyBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3IgOiBcImluaGVyaXRcIn07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiAke2lzRGlzYWJsZWQgPyBcIm5vdC1hbGxvd2VkXCIgOiBcInBvaW50ZXJcIn07XG4gICAgfVxuICBgXG5cbiAgZnVuY3Rpb24gZ2V0QnV0dG9uVGV4dCgpIHtcbiAgICBpZiAoYWRkZWQpIHtcbiAgICAgIHZhciB0ZXh0ID0gYWZ0ZXJBZGRlZFRleHRcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRleHQgPSBidXR0b25UZXh0XG4gICAgfVxuXG4gICAgcmV0dXJuIHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgIFwicHJvZHVjdC5hZGRUb0NhcnQudGV4dFwiLFxuICAgICAgdGV4dCxcbiAgICAgIHByb2R1Y3RCdXlCdXR0b25TdGF0ZVxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIGNzcz17QWRkQnV0dG9uVGV4dENTU31cbiAgICAgIHJlZj17YWRkZWRUZXN0fVxuICAgICAgYXJpYS1sYWJlbD1cIlByb2R1Y3QgQWRkIHRvIENhcnQgVGV4dFwiXG4gICAgPlxuICAgICAge2dldEJ1dHRvblRleHQoKX1cbiAgICA8L3NwYW4+XG4gIClcbn1cblxuZnVuY3Rpb24gUHJvZHVjdEFkZEJ1dHRvbih7XG4gIGhhc0xpbmssXG4gIHBheWxvYWQsXG4gIGxpbmtUYXJnZXQsXG4gIGxpbmtUbyxcbiAgbGlua1dpdGhCdXlCdXR0b24sXG4gIGFkZFRvQ2FydEJ1dHRvbkNvbG9yLFxuICBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3IsXG4gIGlzRGlyZWN0Q2hlY2tvdXQsXG4gIGhhc01hbnlWYXJpYW50cyxcbiAgcHJvZHVjdERpc3BhdGNoLFxuICBidXR0b25UZXh0LFxuICBhZGRlZFRvQ2FydCxcbiAgcXVhbnRpdHksXG4gIHNlbGVjdGVkT3B0aW9ucyxcbiAgc2V0dGluZ3MsXG4gIHNob3VsZFNob3dRdWFudGl0eSxcbn0pIHtcbiAgY29uc3QgQWRkQnV0dG9uV3JhcHBlckNTUyA9IGNzc2BcbiAgICBkaXNwbGF5OiAke3Nob3VsZFNob3dRdWFudGl0eSA/IFwiZmxleFwiIDogXCJibG9ja1wifTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAud3BzLXF1YW50aXR5LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgICR7bXEoXCJtZWRpdW1cIil9IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC53cHMtcXVhbnRpdHktY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIGBcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cIndwcy1jb21wb25lbnQgd3BzLWNvbXBvbmVudC1wcm9kdWN0cy1hZGQtYnV0dG9uIHdwcy1idG4td3JhcHBlclwiXG4gICAgICBhcmlhLWxhYmVsPVwiUHJvZHVjdCBBZGQgQnV0dG9uXCJcbiAgICA+XG4gICAgICA8ZGl2IGNzcz17QWRkQnV0dG9uV3JhcHBlckNTU30+XG4gICAgICAgIHtzaG91bGRTaG93UXVhbnRpdHkgPyAoXG4gICAgICAgICAgPFByb2R1Y3RRdWFudGl0eVxuICAgICAgICAgICAgbWluUXVhbnRpdHk9e3NldHRpbmdzLm1pblF1YW50aXR5fVxuICAgICAgICAgICAgbWF4UXVhbnRpdHk9e1xuICAgICAgICAgICAgICBzZXR0aW5ncy5tYXhRdWFudGl0eVxuICAgICAgICAgICAgICAgID8gc2V0dGluZ3MubWF4UXVhbnRpdHlcbiAgICAgICAgICAgICAgICA6IHBheWxvYWQudG90YWxJbnZlbnRvcnlcbiAgICAgICAgICAgICAgICA/IHBheWxvYWQudG90YWxJbnZlbnRvcnlcbiAgICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWFudGl0eVN0ZXA9e3NldHRpbmdzLnF1YW50aXR5U3RlcH1cbiAgICAgICAgICAgIHBheWxvYWQ9e3BheWxvYWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPEFkZEJ1dHRvbldyYXBwZXJcbiAgICAgICAgICBoYXNMaW5rPXtoYXNMaW5rfVxuICAgICAgICAgIHBheWxvYWQ9e3BheWxvYWR9XG4gICAgICAgICAgbGlua1RhcmdldD17bGlua1RhcmdldH1cbiAgICAgICAgICBsaW5rVG89e2xpbmtUb31cbiAgICAgICAgICBsaW5rV2l0aEJ1eUJ1dHRvbj17bGlua1dpdGhCdXlCdXR0b259XG4gICAgICAgICAgaXNEaXJlY3RDaGVja291dD17aXNEaXJlY3RDaGVja291dH1cbiAgICAgICAgPlxuICAgICAgICAgIDxBZGRCdXR0b25cbiAgICAgICAgICAgIGhhc0xpbms9e2hhc0xpbmt9XG4gICAgICAgICAgICBsaW5rV2l0aEJ1eUJ1dHRvbj17bGlua1dpdGhCdXlCdXR0b259XG4gICAgICAgICAgICBhZGRUb0NhcnRCdXR0b25Db2xvcj17YWRkVG9DYXJ0QnV0dG9uQ29sb3J9XG4gICAgICAgICAgICBhZGRUb0NhcnRCdXR0b25UZXh0Q29sb3I9e2FkZFRvQ2FydEJ1dHRvblRleHRDb2xvcn1cbiAgICAgICAgICAgIGxvYWRlcj17PExvYWRlciAvPn1cbiAgICAgICAgICAgIGlzRGlyZWN0Q2hlY2tvdXQ9e2lzRGlyZWN0Q2hlY2tvdXR9XG4gICAgICAgICAgICBoYXNNYW55VmFyaWFudHM9e2hhc01hbnlWYXJpYW50c31cbiAgICAgICAgICAgIHByb2R1Y3REaXNwYXRjaD17cHJvZHVjdERpc3BhdGNofVxuICAgICAgICAgICAgYnV0dG9uVGV4dD17YnV0dG9uVGV4dH1cbiAgICAgICAgICAgIGFkZGVkVG9DYXJ0PXthZGRlZFRvQ2FydH1cbiAgICAgICAgICAgIHF1YW50aXR5PXtxdWFudGl0eX1cbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucz17c2VsZWN0ZWRPcHRpb25zfVxuICAgICAgICAgICAgcGF5bG9hZD17cGF5bG9hZH1cbiAgICAgICAgICAgIHNldHRpbmdzPXtzZXR0aW5nc31cbiAgICAgICAgICAgIGxpbmtUbz17bGlua1RvfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQWRkQnV0dG9uV3JhcHBlcj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7c2hvcHdwLm1pc2MuaXNQcm8gJiZcbiAgICAgIHNldHRpbmdzLnNob3dJbnZlbnRvcnlMZXZlbHMgJiZcbiAgICAgIHBheWxvYWQuYXZhaWxhYmxlRm9yU2FsZSAmJlxuICAgICAgcGF5bG9hZC50b3RhbEludmVudG9yeSA/IChcbiAgICAgICAgPFByb2R1Y3RCdXlCdXR0b25MZWZ0SW5TdG9jayBzZXR0aW5ncz17c2V0dGluZ3N9IC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0QWRkQnV0dG9uXG4iXX0= */"));
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
    className: "wps-component wps-component-products-add-button wps-btn-wrapper",
    "aria-label": "Product Add Button"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
    css: AddButtonWrapperCSS
  }, shouldShowQuantity ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(_quantity__WEBPACK_IMPORTED_MODULE_7__["default"], {
    minQuantity: settings.minQuantity,
    maxQuantity: settings.maxQuantity ? settings.maxQuantity : payload.totalInventory ? payload.totalInventory : false,
    quantityStep: settings.quantityStep,
    payload: payload
  }) : null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(AddButtonWrapper, {
    hasLink: hasLink,
    payload: payload,
    linkTarget: linkTarget,
    linkTo: linkTo,
    linkWithBuyButton: linkWithBuyButton,
    isDirectCheckout: isDirectCheckout
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(AddButton, {
    hasLink: hasLink,
    linkWithBuyButton: linkWithBuyButton,
    addToCartButtonColor: addToCartButtonColor,
    addToCartButtonTextColor: addToCartButtonTextColor,
    loader: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(_loader__WEBPACK_IMPORTED_MODULE_10__["default"], null),
    isDirectCheckout: isDirectCheckout,
    hasManyVariants: hasManyVariants,
    productDispatch: productDispatch,
    buttonText: buttonText,
    addedToCart: addedToCart,
    quantity: quantity,
    selectedOptions: selectedOptions,
    payload: payload,
    settings: settings,
    linkTo: linkTo
  }))), shopwp.misc.isPro && settings.showInventoryLevels && payload.availableForSale && payload.totalInventory ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.jsx)(_left_in_stock__WEBPACK_IMPORTED_MODULE_11__["default"], {
    settings: settings
  }) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (ProductAddButton);

/***/ }),

/***/ "./src/components/products/product/buy-button/clear-selections/index.jsx":
/*!*******************************************************************************!*\
  !*** ./src/components/products/product/buy-button/clear-selections/index.jsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_state/hooks */ "./src/components/products/product/_state/hooks.jsx");
/* harmony import */ var Common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/css */ "./src/common/css/index.jsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/products/product/buy-button/_state/hooks.jsx");
/** @jsx jsx */






function ClearSelections(_ref) {
  var settings = _ref.settings;
  var productDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_0__.useProductDispatch)();
  var productBuyButtonDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_2__.useProductBuyButtonDispatch)();
  var ClearSelectionsCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)("position:absolute;right:0;font-size:14px;text-decoration:underline;top:", settings.variantStyle === "dropdown" ? "-50px" : "-25px", ";padding:5px 0;animation:", Common_css__WEBPACK_IMPORTED_MODULE_1__.fadeIn, " 0.2s ease;animation-timing-function:cubic-bezier(0.445, 0.05, 0.55, 0.95);&:hover{cursor:pointer;};label:ClearSelectionsCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vY2xlYXItc2VsZWN0aW9ucy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdDIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vY2xlYXItc2VsZWN0aW9ucy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IHVzZVByb2R1Y3REaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9fc3RhdGUvaG9va3NcIlxuaW1wb3J0IHsgZmFkZUluIH0gZnJvbSBcIkNvbW1vbi9jc3NcIlxuaW1wb3J0IHsgdXNlUHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoIH0gZnJvbSBcIi4uL19zdGF0ZS9ob29rc1wiXG5cbmZ1bmN0aW9uIENsZWFyU2VsZWN0aW9ucyh7IHNldHRpbmdzIH0pIHtcbiAgY29uc3QgcHJvZHVjdERpc3BhdGNoID0gdXNlUHJvZHVjdERpc3BhdGNoKClcbiAgY29uc3QgcHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoID0gdXNlUHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoKClcblxuICBjb25zdCBDbGVhclNlbGVjdGlvbnNDU1MgPSBjc3NgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0b3A6ICR7c2V0dGluZ3MudmFyaWFudFN0eWxlID09PSBcImRyb3Bkb3duXCIgPyBcIi01MHB4XCIgOiBcIi0yNXB4XCJ9O1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGFuaW1hdGlvbjogJHtmYWRlSW59IDAuMnMgZWFzZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40NDUsIDAuMDUsIDAuNTUsIDAuOTUpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICBgXG5cbiAgZnVuY3Rpb24gb25DbGVhcigpIHtcbiAgICBwcm9kdWN0RGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9NSVNTSU5HX1NFTEVDVElPTlNcIiwgcGF5bG9hZDogZmFsc2UgfSlcbiAgICBwcm9kdWN0RGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TRUxFQ1RFRF9WQVJJQU5UXCIsIHBheWxvYWQ6IGZhbHNlIH0pXG4gICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJTRVRfU0VMRUNURURfU1VCU0NSSVBUSU9OX0lORk9cIiwgcGF5bG9hZDogZmFsc2UgfSlcbiAgICBwcm9kdWN0QnV5QnV0dG9uRGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJVUERBVEVfU0VMRUNURURfT1BUSU9OU1wiLFxuICAgICAgcGF5bG9hZDogZmFsc2UsXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHAgY3NzPXtbQ2xlYXJTZWxlY3Rpb25zQ1NTLCBmYWRlSW5dfSBvbkNsaWNrPXtvbkNsZWFyfT5cbiAgICAgIHtzZXR0aW5ncy5jbGVhclNlbGVjdGlvbnNUZXh0fVxuICAgIDwvcD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGVhclNlbGVjdGlvbnNcbiJdfQ== */"));

  function onClear() {
    productDispatch({
      type: "SET_MISSING_SELECTIONS",
      payload: false
    });
    productDispatch({
      type: "SET_SELECTED_VARIANT",
      payload: false
    });
    productDispatch({
      type: "SET_SELECTED_SUBSCRIPTION_INFO",
      payload: false
    });
    productBuyButtonDispatch({
      type: "UPDATE_SELECTED_OPTIONS",
      payload: false
    });
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
    css: [ClearSelectionsCSS, Common_css__WEBPACK_IMPORTED_MODULE_1__.fadeIn, ";label:ClearSelections;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vY2xlYXItc2VsZWN0aW9ucy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NPIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vY2xlYXItc2VsZWN0aW9ucy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IHVzZVByb2R1Y3REaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9fc3RhdGUvaG9va3NcIlxuaW1wb3J0IHsgZmFkZUluIH0gZnJvbSBcIkNvbW1vbi9jc3NcIlxuaW1wb3J0IHsgdXNlUHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoIH0gZnJvbSBcIi4uL19zdGF0ZS9ob29rc1wiXG5cbmZ1bmN0aW9uIENsZWFyU2VsZWN0aW9ucyh7IHNldHRpbmdzIH0pIHtcbiAgY29uc3QgcHJvZHVjdERpc3BhdGNoID0gdXNlUHJvZHVjdERpc3BhdGNoKClcbiAgY29uc3QgcHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoID0gdXNlUHJvZHVjdEJ1eUJ1dHRvbkRpc3BhdGNoKClcblxuICBjb25zdCBDbGVhclNlbGVjdGlvbnNDU1MgPSBjc3NgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0b3A6ICR7c2V0dGluZ3MudmFyaWFudFN0eWxlID09PSBcImRyb3Bkb3duXCIgPyBcIi01MHB4XCIgOiBcIi0yNXB4XCJ9O1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGFuaW1hdGlvbjogJHtmYWRlSW59IDAuMnMgZWFzZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40NDUsIDAuMDUsIDAuNTUsIDAuOTUpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICBgXG5cbiAgZnVuY3Rpb24gb25DbGVhcigpIHtcbiAgICBwcm9kdWN0RGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9NSVNTSU5HX1NFTEVDVElPTlNcIiwgcGF5bG9hZDogZmFsc2UgfSlcbiAgICBwcm9kdWN0RGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TRUxFQ1RFRF9WQVJJQU5UXCIsIHBheWxvYWQ6IGZhbHNlIH0pXG4gICAgcHJvZHVjdERpc3BhdGNoKHsgdHlwZTogXCJTRVRfU0VMRUNURURfU1VCU0NSSVBUSU9OX0lORk9cIiwgcGF5bG9hZDogZmFsc2UgfSlcbiAgICBwcm9kdWN0QnV5QnV0dG9uRGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJVUERBVEVfU0VMRUNURURfT1BUSU9OU1wiLFxuICAgICAgcGF5bG9hZDogZmFsc2UsXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHAgY3NzPXtbQ2xlYXJTZWxlY3Rpb25zQ1NTLCBmYWRlSW5dfSBvbkNsaWNrPXtvbkNsZWFyfT5cbiAgICAgIHtzZXR0aW5ncy5jbGVhclNlbGVjdGlvbnNUZXh0fVxuICAgIDwvcD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGVhclNlbGVjdGlvbnNcbiJdfQ== */")],
    onClick: onClear
  }, settings.clearSelectionsText);
}

/* harmony default export */ __webpack_exports__["default"] = (ClearSelections);

/***/ }),

/***/ "./src/components/products/product/buy-button/index.jsx":
/*!**************************************************************!*\
  !*** ./src/components/products/product/buy-button/index.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/products/product/_state/hooks.jsx");
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrapper */ "./src/components/products/product/buy-button/wrapper/index.jsx");
/* harmony import */ var _state_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_state/provider */ "./src/components/products/product/buy-button/_state/provider.jsx");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var _items_state_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../items/_state/hooks */ "./src/components/items/_state/hooks.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */






var Notice = __webpack_provided_wp_dot_element.lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../notice */ "./src/components/notice/index.jsx"));
});



var _ref =  false ? 0 : {
  name: "1u6ks4d-unavailableNoticeCSS",
  styles: "margin-top:15px;label:unavailableNoticeCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0MiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvYnV5LWJ1dHRvbi9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IHVzZVBvcnRhbCB9IGZyb20gXCJIb29rc1wiXG5pbXBvcnQgeyB1c2VQcm9kdWN0RGlzcGF0Y2gsIHVzZVByb2R1Y3RTdGF0ZSB9IGZyb20gXCIuLi9fc3RhdGUvaG9va3NcIlxuaW1wb3J0IFByb2R1Y3RCdXlCdXR0b25XcmFwcGVyIGZyb20gXCIuL3dyYXBwZXJcIlxuaW1wb3J0IFByb2R1Y3RCdXlCdXR0b25Qcm92aWRlciBmcm9tIFwiLi9fc3RhdGUvcHJvdmlkZXJcIlxuaW1wb3J0IHsgRmlsdGVySG9vaywgZmluZFBvcnRhbEVsZW1lbnQgfSBmcm9tIFwiVXRpbHNcIlxuXG5jb25zdCBOb3RpY2UgPSB3cC5lbGVtZW50LmxhenkoKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdOb3RpY2UtcHVibGljJyAqLyBcIi4uLy4uLy4uL25vdGljZVwiKVxuKVxuXG5pbXBvcnQgeyB1c2VJdGVtc1N0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL2l0ZW1zL19zdGF0ZS9ob29rc1wiXG5cbmZ1bmN0aW9uIFByb2R1Y3RCdXlCdXR0b24oKSB7XG4gIGNvbnN0IHByb2R1Y3RTdGF0ZSA9IHVzZVByb2R1Y3RTdGF0ZSgpXG4gIGNvbnN0IHByb2R1Y3REaXNwYXRjaCA9IHVzZVByb2R1Y3REaXNwYXRjaCgpXG4gIGNvbnN0IGl0ZW1zU3RhdGUgPSB1c2VJdGVtc1N0YXRlKClcblxuICBjb25zdCBidXlCdXR0b25XcmFwcGVyQ1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAke2l0ZW1zU3RhdGUuc2V0dGluZ3MuaXNTaW5nbGVDb21wb25lbnQgPyBcIjBweFwiIDogXCIxNXB4XCJ9O1xuICBgXG5cbiAgY29uc3QgdW5hdmFpbGFibGVOb3RpY2VDU1MgPSBjc3NgXG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgYFxuXG4gIHJldHVybiB1c2VQb3J0YWwoXG4gICAgPFByb2R1Y3RCdXlCdXR0b25Qcm92aWRlclxuICAgICAgc2V0dGluZ3M9e2l0ZW1zU3RhdGUuc2V0dGluZ3N9XG4gICAgICBwYXlsb2FkPXtwcm9kdWN0U3RhdGUucGF5bG9hZH1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNzcz17YnV5QnV0dG9uV3JhcHBlckNTU31cbiAgICAgICAgY2xhc3NOYW1lPVwid3BzLWNvbXBvbmVudC1wcm9kdWN0cy1idXktYnV0dG9uXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlByb2R1Y3QgQnV5IEJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIDxGaWx0ZXJIb29rIG5hbWU9XCJiZWZvcmUucHJvZHVjdEJ1eUJ1dHRvblwiIGFyZ3M9e1twcm9kdWN0U3RhdGVdfSAvPlxuXG4gICAgICAgIHtwcm9kdWN0U3RhdGUucGF5bG9hZC5hdmFpbGFibGVGb3JTYWxlID8gKFxuICAgICAgICAgIDxQcm9kdWN0QnV5QnV0dG9uV3JhcHBlclxuICAgICAgICAgICAgcGF5bG9hZD17cHJvZHVjdFN0YXRlLnBheWxvYWR9XG4gICAgICAgICAgICBwcm9kdWN0U3RhdGU9e3Byb2R1Y3RTdGF0ZX1cbiAgICAgICAgICAgIHByb2R1Y3REaXNwYXRjaD17cHJvZHVjdERpc3BhdGNofVxuICAgICAgICAgICAgc2V0dGluZ3M9e2l0ZW1zU3RhdGUuc2V0dGluZ3N9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8RmlsdGVySG9vayBuYW1lPVwicHJvZHVjdC51bmF2YWlsYWJsZUh0bWxcIiBhcmdzPXtbcHJvZHVjdFN0YXRlXX0+XG4gICAgICAgICAgICA8Tm90aWNlIHN0YXR1cz1cIndhcm5pbmdcIiBleHRyYUNTUz17dW5hdmFpbGFibGVOb3RpY2VDU1N9PlxuICAgICAgICAgICAgICB7aXRlbXNTdGF0ZS5zZXR0aW5ncy5ub3RpY2VVbmF2YWlsYWJsZVRleHR9XG4gICAgICAgICAgICA8L05vdGljZT5cbiAgICAgICAgICA8L0ZpbHRlckhvb2s+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEZpbHRlckhvb2sgbmFtZT1cImFmdGVyLnByb2R1Y3RCdXlCdXR0b25cIiBhcmdzPXtbcHJvZHVjdFN0YXRlXX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUHJvZHVjdEJ1eUJ1dHRvblByb3ZpZGVyPixcbiAgICBmaW5kUG9ydGFsRWxlbWVudChpdGVtc1N0YXRlLnNldHRpbmdzLmRyb3B6b25lUHJvZHVjdEJ1eUJ1dHRvbilcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0QnV5QnV0dG9uXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function ProductBuyButton() {
  var productState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useProductState)();
  var productDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useProductDispatch)();
  var itemsState = (0,_items_state_hooks__WEBPACK_IMPORTED_MODULE_5__.useItemsState)();
  var buyButtonWrapperCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.css)("display:flex;flex-direction:column;margin-bottom:", itemsState.settings.isSingleComponent ? "0px" : "15px", ";;label:buyButtonWrapperCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CaUMiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvYnV5LWJ1dHRvbi9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IHVzZVBvcnRhbCB9IGZyb20gXCJIb29rc1wiXG5pbXBvcnQgeyB1c2VQcm9kdWN0RGlzcGF0Y2gsIHVzZVByb2R1Y3RTdGF0ZSB9IGZyb20gXCIuLi9fc3RhdGUvaG9va3NcIlxuaW1wb3J0IFByb2R1Y3RCdXlCdXR0b25XcmFwcGVyIGZyb20gXCIuL3dyYXBwZXJcIlxuaW1wb3J0IFByb2R1Y3RCdXlCdXR0b25Qcm92aWRlciBmcm9tIFwiLi9fc3RhdGUvcHJvdmlkZXJcIlxuaW1wb3J0IHsgRmlsdGVySG9vaywgZmluZFBvcnRhbEVsZW1lbnQgfSBmcm9tIFwiVXRpbHNcIlxuXG5jb25zdCBOb3RpY2UgPSB3cC5lbGVtZW50LmxhenkoKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdOb3RpY2UtcHVibGljJyAqLyBcIi4uLy4uLy4uL25vdGljZVwiKVxuKVxuXG5pbXBvcnQgeyB1c2VJdGVtc1N0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL2l0ZW1zL19zdGF0ZS9ob29rc1wiXG5cbmZ1bmN0aW9uIFByb2R1Y3RCdXlCdXR0b24oKSB7XG4gIGNvbnN0IHByb2R1Y3RTdGF0ZSA9IHVzZVByb2R1Y3RTdGF0ZSgpXG4gIGNvbnN0IHByb2R1Y3REaXNwYXRjaCA9IHVzZVByb2R1Y3REaXNwYXRjaCgpXG4gIGNvbnN0IGl0ZW1zU3RhdGUgPSB1c2VJdGVtc1N0YXRlKClcblxuICBjb25zdCBidXlCdXR0b25XcmFwcGVyQ1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAke2l0ZW1zU3RhdGUuc2V0dGluZ3MuaXNTaW5nbGVDb21wb25lbnQgPyBcIjBweFwiIDogXCIxNXB4XCJ9O1xuICBgXG5cbiAgY29uc3QgdW5hdmFpbGFibGVOb3RpY2VDU1MgPSBjc3NgXG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgYFxuXG4gIHJldHVybiB1c2VQb3J0YWwoXG4gICAgPFByb2R1Y3RCdXlCdXR0b25Qcm92aWRlclxuICAgICAgc2V0dGluZ3M9e2l0ZW1zU3RhdGUuc2V0dGluZ3N9XG4gICAgICBwYXlsb2FkPXtwcm9kdWN0U3RhdGUucGF5bG9hZH1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNzcz17YnV5QnV0dG9uV3JhcHBlckNTU31cbiAgICAgICAgY2xhc3NOYW1lPVwid3BzLWNvbXBvbmVudC1wcm9kdWN0cy1idXktYnV0dG9uXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlByb2R1Y3QgQnV5IEJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIDxGaWx0ZXJIb29rIG5hbWU9XCJiZWZvcmUucHJvZHVjdEJ1eUJ1dHRvblwiIGFyZ3M9e1twcm9kdWN0U3RhdGVdfSAvPlxuXG4gICAgICAgIHtwcm9kdWN0U3RhdGUucGF5bG9hZC5hdmFpbGFibGVGb3JTYWxlID8gKFxuICAgICAgICAgIDxQcm9kdWN0QnV5QnV0dG9uV3JhcHBlclxuICAgICAgICAgICAgcGF5bG9hZD17cHJvZHVjdFN0YXRlLnBheWxvYWR9XG4gICAgICAgICAgICBwcm9kdWN0U3RhdGU9e3Byb2R1Y3RTdGF0ZX1cbiAgICAgICAgICAgIHByb2R1Y3REaXNwYXRjaD17cHJvZHVjdERpc3BhdGNofVxuICAgICAgICAgICAgc2V0dGluZ3M9e2l0ZW1zU3RhdGUuc2V0dGluZ3N9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8RmlsdGVySG9vayBuYW1lPVwicHJvZHVjdC51bmF2YWlsYWJsZUh0bWxcIiBhcmdzPXtbcHJvZHVjdFN0YXRlXX0+XG4gICAgICAgICAgICA8Tm90aWNlIHN0YXR1cz1cIndhcm5pbmdcIiBleHRyYUNTUz17dW5hdmFpbGFibGVOb3RpY2VDU1N9PlxuICAgICAgICAgICAgICB7aXRlbXNTdGF0ZS5zZXR0aW5ncy5ub3RpY2VVbmF2YWlsYWJsZVRleHR9XG4gICAgICAgICAgICA8L05vdGljZT5cbiAgICAgICAgICA8L0ZpbHRlckhvb2s+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEZpbHRlckhvb2sgbmFtZT1cImFmdGVyLnByb2R1Y3RCdXlCdXR0b25cIiBhcmdzPXtbcHJvZHVjdFN0YXRlXX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUHJvZHVjdEJ1eUJ1dHRvblByb3ZpZGVyPixcbiAgICBmaW5kUG9ydGFsRWxlbWVudChpdGVtc1N0YXRlLnNldHRpbmdzLmRyb3B6b25lUHJvZHVjdEJ1eUJ1dHRvbilcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0QnV5QnV0dG9uXG4iXX0= */"));
  var unavailableNoticeCSS = _ref;
  return (0,Hooks__WEBPACK_IMPORTED_MODULE_0__.usePortal)((0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(_state_provider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    settings: itemsState.settings,
    payload: productState.payload
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    css: buyButtonWrapperCSS,
    className: "wps-component-products-buy-button",
    "aria-label": "Product Buy Button"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(Utils__WEBPACK_IMPORTED_MODULE_4__.FilterHook, {
    name: "before.productBuyButton",
    args: [productState]
  }), productState.payload.availableForSale ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    payload: productState.payload,
    productState: productState,
    productDispatch: productDispatch,
    settings: itemsState.settings
  }) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(Utils__WEBPACK_IMPORTED_MODULE_4__.FilterHook, {
    name: "product.unavailableHtml",
    args: [productState]
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(Notice, {
    status: "warning",
    extraCSS: unavailableNoticeCSS
  }, itemsState.settings.noticeUnavailableText)), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(Utils__WEBPACK_IMPORTED_MODULE_4__.FilterHook, {
    name: "after.productBuyButton",
    args: [productState]
  }))), (0,Utils__WEBPACK_IMPORTED_MODULE_4__.findPortalElement)(itemsState.settings.dropzoneProductBuyButton));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductBuyButton);

/***/ }),

/***/ "./src/components/products/product/buy-button/left-in-stock/index.jsx":
/*!****************************************************************************!*\
  !*** ./src/components/products/product/buy-button/left-in-stock/index.jsx ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_state/hooks */ "./src/components/products/product/_state/hooks.jsx");
/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notice */ "./src/components/products/product/buy-button/notice/index.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");

// const ProductBuyButtonTextNotice = wp.element.lazy(() =>
// 	import(
// 		/* webpackChunkName: 'ProductBuyButtonTextNotice-public' */ '../notice'
// 	)
// )




function ProductBuyButtonLeftInStock(_ref) {
  var settings = _ref.settings;
  var _wp$element = wp.element,
      useEffect = __webpack_provided_wp_dot_element.useEffect,
      useState = __webpack_provided_wp_dot_element.useState;

  var _useState = useState(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      quantityLeft = _useState2[0],
      setQuantityLeft = _useState2[1];

  var productState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useProductState)();
  useEffect(function () {
    if (!productState.selectedVariant) {
      setQuantityLeft(false);
      return;
    }

    if (productState.selectedVariant.node.availableForSale) {
      if (!productState.selectedVariant.node.quantityAvailable) {
        setQuantityLeft(false);
      }

      if (productState.selectedVariant.node.quantityAvailable <= settings.leftInStockThreshold) {
        setQuantityLeft(productState.selectedVariant.node.quantityAvailable);
      }
    } else {
      setQuantityLeft(false);
    }
  }, [productState.selectedVariant]);
  return quantityLeft && quantityLeft > 0 && productState.selectedVariant ? /*#__PURE__*/React.createElement(_notice__WEBPACK_IMPORTED_MODULE_2__["default"], {
    quantityLeft: quantityLeft
  }) : null;
}

/* harmony default export */ __webpack_exports__["default"] = (ProductBuyButtonLeftInStock);

/***/ }),

/***/ "./src/components/products/product/buy-button/notice/index.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/products/product/buy-button/notice/index.jsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Common_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Common/animations */ "./src/common/animations/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_i18n = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */




var _ref =  false ? 0 : {
  name: "17sxv2k-textNoticeCSS",
  styles: "text-align:center;margin:5px auto 2.4em auto;font-size:15px;padding:10px;color:red;width:calc(100% - 30px);font-weight:normal;display:block;label:textNoticeCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vbm90aWNlL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLMkIiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvYnV5LWJ1dHRvbi9ub3RpY2UvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgeyBTbGlkZUluRnJvbVRvcCB9IGZyb20gXCJDb21tb24vYW5pbWF0aW9uc1wiXG5cbmZ1bmN0aW9uIFByb2R1Y3RCdXlCdXR0b25UZXh0Tm90aWNlKHsgcXVhbnRpdHlMZWZ0IH0pIHtcbiAgY29uc3QgdGV4dE5vdGljZUNTUyA9IGNzc2BcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1cHggYXV0byAyLjRlbSBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiByZWQ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIGBcblxuICByZXR1cm4gKFxuICAgIDxTbGlkZUluRnJvbVRvcD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndwcy1ub3RpY2UtdGV4dFwiIGNzcz17W3RleHROb3RpY2VDU1NdfT5cbiAgICAgICAge1xuICAgICAgICAgIC8qIHRyYW5zbGF0b3JzOiAlczogT25seSA5IGxlZnQgKi9cbiAgICAgICAgICB3cC5pMThuLnNwcmludGYod3AuaTE4bi5fXyhcIk9ubHkgJXMgbGVmdCFcIiwgXCJzaG9wd3BcIiksIHF1YW50aXR5TGVmdClcbiAgICAgICAgfVxuICAgICAgPC9zcGFuPlxuICAgIDwvU2xpZGVJbkZyb21Ub3A+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEJ1eUJ1dHRvblRleHROb3RpY2VcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function ProductBuyButtonTextNotice(_ref2) {
  var quantityLeft = _ref2.quantityLeft;
  var textNoticeCSS = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(Common_animations__WEBPACK_IMPORTED_MODULE_0__.SlideInFromTop, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
    className: "wps-notice-text",
    css: [textNoticeCSS, ";label:ProductBuyButtonTextNotice;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vbm90aWNlL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQndDIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vbm90aWNlL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHsgU2xpZGVJbkZyb21Ub3AgfSBmcm9tIFwiQ29tbW9uL2FuaW1hdGlvbnNcIlxuXG5mdW5jdGlvbiBQcm9kdWN0QnV5QnV0dG9uVGV4dE5vdGljZSh7IHF1YW50aXR5TGVmdCB9KSB7XG4gIGNvbnN0IHRleHROb3RpY2VDU1MgPSBjc3NgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4IGF1dG8gMi40ZW0gYXV0bztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8U2xpZGVJbkZyb21Ub3A+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3cHMtbm90aWNlLXRleHRcIiBjc3M9e1t0ZXh0Tm90aWNlQ1NTXX0+XG4gICAgICAgIHtcbiAgICAgICAgICAvKiB0cmFuc2xhdG9yczogJXM6IE9ubHkgOSBsZWZ0ICovXG4gICAgICAgICAgd3AuaTE4bi5zcHJpbnRmKHdwLmkxOG4uX18oXCJPbmx5ICVzIGxlZnQhXCIsIFwic2hvcHdwXCIpLCBxdWFudGl0eUxlZnQpXG4gICAgICAgIH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L1NsaWRlSW5Gcm9tVG9wPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RCdXlCdXR0b25UZXh0Tm90aWNlXG4iXX0= */")]
  },
  /* translators: %s: Only 9 left */
  __webpack_provided_wp_dot_i18n.sprintf(__webpack_provided_wp_dot_i18n.__("Only %s left!", "shopwp"), quantityLeft)));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductBuyButtonTextNotice);

/***/ }),

/***/ "./src/components/products/product/buy-button/option/_state/context.js":
/*!*****************************************************************************!*\
  !*** ./src/components/products/product/buy-button/option/_state/context.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOptionContext": function() { return /* binding */ ProductOptionContext; }
/* harmony export */ });
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
var ProductOptionContext = __webpack_provided_wp_dot_element.createContext();


/***/ }),

/***/ "./src/components/products/product/buy-button/option/_state/initial-state.js":
/*!***********************************************************************************!*\
  !*** ./src/components/products/product/buy-button/option/_state/initial-state.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOptionInitialState": function() { return /* binding */ ProductOptionInitialState; }
/* harmony export */ });
function ProductOptionInitialState(options) {
  return {
    isOptionSelected: false,
    option: options.option ? options.option : false,
    dropdownElement: options.dropdownElement ? options.dropdownElement : false,
    selectedOption: {},
    isDropdownOpen: false,
    variants: options.variants ? options.variants : false,
    totalOptions: options.totalOptions ? options.totalOptions : false,
    settings: options.settings ? options.settings : false
  };
}



/***/ }),

/***/ "./src/components/products/product/buy-button/option/_state/provider.jsx":
/*!*******************************************************************************!*\
  !*** ./src/components/products/product/buy-button/option/_state/provider.jsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOptionProvider": function() { return /* binding */ ProductOptionProvider; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/components/products/product/buy-button/option/_state/reducer.js");
/* harmony import */ var _initial_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initial-state */ "./src/components/products/product/buy-button/option/_state/initial-state.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./src/components/products/product/buy-button/option/_state/context.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");







function ProductOptionProvider(props) {
  var _wp$element$useReduce = __webpack_provided_wp_dot_element.useReducer(_reducer__WEBPACK_IMPORTED_MODULE_2__.ProductOptionReducer, (0,_initial_state__WEBPACK_IMPORTED_MODULE_3__.ProductOptionInitialState)(props.options)),
      _wp$element$useReduce2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_wp$element$useReduce, 2),
      state = _wp$element$useReduce2[0],
      dispatch = _wp$element$useReduce2[1];

  var value = __webpack_provided_wp_dot_element.useMemo(function () {
    return [state, dispatch];
  }, [state]);
  return /*#__PURE__*/React.createElement(_context__WEBPACK_IMPORTED_MODULE_4__.ProductOptionContext.Provider, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: value
  }, props));
}



/***/ }),

/***/ "./src/components/products/product/buy-button/option/_state/reducer.js":
/*!*****************************************************************************!*\
  !*** ./src/components/products/product/buy-button/option/_state/reducer.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOptionReducer": function() { return /* binding */ ProductOptionReducer; }
/* harmony export */ });
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");


function ProductOptionReducer(state, action) {
  switch (action.type) {
    case "SET_SELECTED_OPTION":
      {
        return (0,Utils__WEBPACK_IMPORTED_MODULE_0__.rSet)("selectedOption", action, state);
      }

    case "SET_IS_OPTION_SELECTED":
      {
        return (0,Utils__WEBPACK_IMPORTED_MODULE_0__.rSet)("isOptionSelected", action, state);
      }

    case "TOGGLE_DROPDOWN":
      {
        return (0,Utils__WEBPACK_IMPORTED_MODULE_0__.rSet)("isDropdownOpen", action, state);
      }

    default:
      {
        throw new Error("Unhandled action type: ".concat(action.type, " in ProductOptionReducer"));
      }
  }
}



/***/ }),

/***/ "./src/components/products/product/buy-button/option/index.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/products/product/buy-button/option/index.jsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_state/provider */ "./src/components/products/product/buy-button/option/_state/provider.jsx");
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper */ "./src/components/products/product/buy-button/option/wrapper/index.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");



var ProductOptionDropdown = __webpack_provided_wp_dot_element.lazy(function () {
  return Promise.all(/*! import() | ProductOptionDropdown-public */[__webpack_require__.e("vendors-node_modules_tippyjs_react_dist_tippy-react_esm_js-node_modules_tippy_js_dist_tippy_css"), __webpack_require__.e("ProductOptionDropdown-public")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dropdown */ "./src/components/products/product/buy-button/option/dropdown/index.jsx"));
});

function ProductOption(_ref) {
  var option = _ref.option,
      availableVariants = _ref.availableVariants,
      selectedOptions = _ref.selectedOptions,
      missingSelections = _ref.missingSelections,
      variants = _ref.variants,
      settings = _ref.settings,
      totalOptions = _ref.totalOptions,
      allSelectableOptions = _ref.allSelectableOptions;
  var useRef = __webpack_provided_wp_dot_element.useRef;
  var dropdownElement = useRef();
  return /*#__PURE__*/React.createElement(_state_provider__WEBPACK_IMPORTED_MODULE_0__.ProductOptionProvider, {
    options: {
      option: option,
      variants: variants,
      dropdownElement: dropdownElement,
      settings: settings,
      totalOptions: totalOptions
    }
  }, /*#__PURE__*/React.createElement(_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/React.createElement(ProductOptionDropdown, {
    availableVariants: availableVariants,
    selectedOptions: selectedOptions,
    missingSelections: missingSelections,
    settings: settings,
    allSelectableOptions: allSelectableOptions
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_provided_wp_dot_element.memo(ProductOption));

/***/ }),

/***/ "./src/components/products/product/buy-button/option/value/index.jsx":
/*!***************************************************************************!*\
  !*** ./src/components/products/product/buy-button/option/value/index.jsx ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_state/context */ "./src/components/products/product/buy-button/option/_state/context.js");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_state/hooks */ "./src/components/products/product/buy-button/_state/hooks.jsx");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_5__);
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






function isSelectedVariantAvailableToSelect(allSelectableOptions, optionObj) {
  return allSelectableOptions.filter(function (selectableOption) {
    var found = lodash_find__WEBPACK_IMPORTED_MODULE_5___default()(selectableOption.selectedOptions, optionObj);

    if (found) {
      return selectableOption;
    }

    return false;
  });
}

function onlyAvailableForSale(variants) {
  return variants.filter(function (variant) {
    return variant.availableForSale;
  });
}

function isVariantAvailableInShopify(allSelectableOptions, optionObj) {
  var matchedVariants = isSelectedVariantAvailableToSelect(allSelectableOptions, optionObj);
  var onlyMatchesThatAreAvailable = onlyAvailableForSale(matchedVariants);

  if (onlyMatchesThatAreAvailable.length) {
    return true;
  }

  return false;
}

function isVariantAvailableToSelect(selectedOptions, productOptionState, optionNameValue, variants, isAvailableInShopify) {
  if (productOptionState.settings.showOutOfStockVariants) {
    return true;
  }
  /*
  If the option row is selected, then we want to ensure the rest of the 
  variants in that row are also available to select -- unless the variant is out of stock
  */


  if (productOptionState.isOptionSelected) {
    if (!isAvailableInShopify) {
      return false;
    }

    return true;
  }

  var couldSelect = _objectSpread(_objectSpread({}, optionNameValue), selectedOptions);

  var foundVariantFromSelectedOptions = (0,Utils__WEBPACK_IMPORTED_MODULE_3__.findVariantFromVariantsList)(couldSelect, variants);

  if (foundVariantFromSelectedOptions.length) {
    return true;
  } else {
    return false;
  }
}

function ProductOptionValue(_ref) {
  var optionObj = _ref.optionObj,
      selectedOptions = _ref.selectedOptions,
      _ref$variants = _ref.variants,
      variants = _ref$variants === void 0 ? false : _ref$variants,
      _ref$totalOptions = _ref.totalOptions,
      totalOptions = _ref$totalOptions === void 0 ? false : _ref$totalOptions,
      settings = _ref.settings,
      children = _ref.children,
      allSelectableOptions = _ref.allSelectableOptions;
  var useContext = __webpack_provided_wp_dot_element.useContext;

  var _useContext = useContext(_state_context__WEBPACK_IMPORTED_MODULE_2__.ProductOptionContext),
      _useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext, 2),
      productOptionState = _useContext2[0],
      productOptionDispatch = _useContext2[1];

  var optionNameValue = (0,Utils__WEBPACK_IMPORTED_MODULE_3__.createObj)(optionObj.name, optionObj.value);
  var productBuyButtonDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useProductBuyButtonDispatch)(); // Whether the variant is actually in stock

  var isAvailableInShopify = isVariantAvailableInShopify(allSelectableOptions, optionObj); // Whether the variant combination is available depending on what the user is choosing

  var isAvailableToSelect = isVariantAvailableToSelect(selectedOptions, productOptionState, optionNameValue, variants, isAvailableInShopify);

  function onSelection() {
    productBuyButtonDispatch({
      type: "UPDATE_SELECTED_OPTIONS",
      payload: optionNameValue
    });
    productOptionDispatch({
      type: "SET_SELECTED_OPTION",
      payload: optionNameValue
    });
    productOptionDispatch({
      type: "TOGGLE_DROPDOWN",
      payload: false
    });
    productOptionDispatch({
      type: "SET_IS_OPTION_SELECTED",
      payload: true
    });
    __webpack_provided_wp_dot_hooks.doAction("on.variantsSelection", optionNameValue, productOptionState);
  }

  return __webpack_provided_wp_dot_element.cloneElement(children, {
    onSelection: onSelection,
    optionObj: optionObj,
    isAvailableToSelect: isAvailableToSelect,
    selectedOptions: selectedOptions,
    variants: variants,
    totalOptions: totalOptions,
    settings: settings,
    isAvailableInShopify: isAvailableInShopify
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ProductOptionValue);

/***/ }),

/***/ "./src/components/products/product/buy-button/option/wrapper/index.jsx":
/*!*****************************************************************************!*\
  !*** ./src/components/products/product/buy-button/option/wrapper/index.jsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_state/context */ "./src/components/products/product/buy-button/option/_state/context.js");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_state/hooks */ "./src/components/products/product/_state/hooks.jsx");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_state/hooks */ "./src/components/products/product/buy-button/_state/hooks.jsx");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");







var _wp$element = wp.element,
    useContext = __webpack_provided_wp_dot_element.useContext,
    useEffect = __webpack_provided_wp_dot_element.useEffect;

function createSelected(options) {
  var obj = {};
  options.forEach(function (o) {
    return obj[o.name] = o.value;
  });
  return obj;
}

function ProductOptionWrapper(_ref) {
  var children = _ref.children;
  var productState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_2__.useProductState)();
  var productDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_2__.useProductDispatch)();

  var _useContext = useContext(_state_context__WEBPACK_IMPORTED_MODULE_1__.ProductOptionContext),
      _useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext, 2),
      productOptionDispatch = _useContext2[1];

  var productBuyButtonState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_5__.useProductBuyButtonState)();
  var productBuyButtonDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_5__.useProductBuyButtonDispatch)();
  var isFirstRender = (0,Hooks__WEBPACK_IMPORTED_MODULE_4__.useFirstRender)(); // Allows for selecting first variant

  useEffect(function () {
    if (productState.selectFirstVariant) {
      if (!productState.payload.variants.edges.length) {
        console.warn("ShopWP warning: Unable to select first variant because no variants exist.");
        return;
      }

      var firstVariant = productState.payload.variants.edges[0].node;

      if (!productState.payload.availableForSale || !firstVariant.availableForSale || !firstVariant.selectedOptions) {
        console.warn("ShopWP warning: Unable to select first variant because product is not available for sale.");
        return;
      }

      var selectedVariant = createSelected(firstVariant.selectedOptions);
      productBuyButtonDispatch({
        type: "UPDATE_SELECTED_OPTIONS",
        payload: selectedVariant
      });
      productOptionDispatch({
        type: "SET_SELECTED_OPTION",
        payload: selectedVariant
      });
      productOptionDispatch({
        type: "SET_IS_OPTION_SELECTED",
        payload: true
      });
    } else if (productState.preSelectVariant) {
      var foundVariant = (0,Utils__WEBPACK_IMPORTED_MODULE_3__.findVariantFromVariantId)(productState.preSelectVariant, productState.payload);

      if (foundVariant) {
        var createdOptions = (0,Utils__WEBPACK_IMPORTED_MODULE_3__.createSelectedOptionsObject)(foundVariant.node.selectedOptions);
        productDispatch({
          type: "SET_SELECTED_VARIANT",
          payload: foundVariant
        });
        createdOptions.forEach(function (selectedOption) {
          productBuyButtonDispatch({
            type: "UPDATE_SELECTED_OPTIONS",
            payload: selectedOption
          });
          productOptionDispatch({
            type: "SET_SELECTED_OPTION",
            payload: selectedOption
          });
          productOptionDispatch({
            type: "SET_IS_OPTION_SELECTED",
            payload: true
          });
        });
        __webpack_provided_wp_dot_hooks.doAction("on.beforeAddToCart", productState);
      }
    }
  }, []);
  useEffect(function () {
    if (isFirstRender) {
      return;
    }

    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(productBuyButtonState.selectedOptions)) {
      productOptionDispatch({
        type: "SET_IS_OPTION_SELECTED",
        payload: false
      });
      productOptionDispatch({
        type: "SET_SELECTED_OPTION",
        payload: {}
      });
    }
  }, [productBuyButtonState.selectedOptions, productOptionDispatch]);
  return children;
}

/* harmony default export */ __webpack_exports__["default"] = (ProductOptionWrapper);

/***/ }),

/***/ "./src/components/products/product/buy-button/options/index.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/products/product/buy-button/options/index.jsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _variant_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variant-buttons */ "./src/components/products/product/buy-button/variant-buttons/index.jsx");
/* harmony import */ var _variant_dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variant-dropdowns */ "./src/components/products/product/buy-button/variant-dropdowns/index.jsx");
/* harmony import */ var _clear_selections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clear-selections */ "./src/components/products/product/buy-button/clear-selections/index.jsx");
/* provided dependency */ var shopwp = __webpack_require__(/*! ./shopwp-defaults.js */ "./shopwp-defaults.js")["default"];
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */






var _ref =  false ? 0 : {
  name: "5ow4qb-ProductOptionsCSS",
  styles: "position:relative;label:ProductOptionsCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vb3B0aW9ucy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUI4QiIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC9idXktYnV0dG9uL29wdGlvbnMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuXG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRCdXR0b25zIGZyb20gJy4uL3ZhcmlhbnQtYnV0dG9ucydcbmltcG9ydCBQcm9kdWN0VmFyaWFudERyb3Bkb3ducyBmcm9tICcuLi92YXJpYW50LWRyb3Bkb3ducydcbmltcG9ydCBDbGVhclNlbGVjdGlvbnMgZnJvbSAnLi4vY2xlYXItc2VsZWN0aW9ucydcblxuZnVuY3Rpb24gUHJvZHVjdE9wdGlvbnMoe1xuXHR2YXJpYW50U3R5bGUsXG5cdGF2YWlsYWJsZU9wdGlvbnMsXG5cdG1pc3NpbmdTZWxlY3Rpb25zLFxuXHRzZWxlY3RlZE9wdGlvbnMsXG5cdGF2YWlsYWJsZVZhcmlhbnRzLFxuXHR2YXJpYW50cyxcblx0c2V0dGluZ3MsXG5cdGFsbFNlbGVjdGFibGVPcHRpb25zLFxuXHRoYXNTZWxlY3Rpb25zLFxuXHRpc0RpcmVjdENoZWNrb3V0T3V0LFxufSkge1xuXHRjb25zdCBQcm9kdWN0T3B0aW9uc0NTUyA9IGNzc2Bcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGBcblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9J3dwcy1wcm9kdWN0LW9wdGlvbnMnXG5cdFx0XHRjc3M9e1Byb2R1Y3RPcHRpb25zQ1NTfVxuXHRcdFx0YXJpYS1sYWJlbD17YFByb2R1Y3QgdmFyaWFudCAke1xuXHRcdFx0XHR2YXJpYW50U3R5bGUgPyB2YXJpYW50U3R5bGUgOiAnZHJvcGRvd24nXG5cdFx0XHR9YH0+XG5cdFx0XHR7aGFzU2VsZWN0aW9ucyAmJiAhaXNEaXJlY3RDaGVja291dE91dCA/IChcblx0XHRcdFx0PENsZWFyU2VsZWN0aW9ucyBzZXR0aW5ncz17c2V0dGluZ3N9IC8+XG5cdFx0XHQpIDogbnVsbH1cblx0XHRcdHt2YXJpYW50U3R5bGUgPT09ICdkcm9wZG93bicgPyAoXG5cdFx0XHRcdDxQcm9kdWN0VmFyaWFudERyb3Bkb3duc1xuXHRcdFx0XHRcdG9wdGlvbnM9e2F2YWlsYWJsZU9wdGlvbnN9XG5cdFx0XHRcdFx0bWlzc2luZ1NlbGVjdGlvbnM9e21pc3NpbmdTZWxlY3Rpb25zfVxuXHRcdFx0XHRcdGF2YWlsYWJsZVZhcmlhbnRzPXthdmFpbGFibGVWYXJpYW50c31cblx0XHRcdFx0XHRzZWxlY3RlZE9wdGlvbnM9e3NlbGVjdGVkT3B0aW9uc31cblx0XHRcdFx0XHR2YXJpYW50cz17dmFyaWFudHN9XG5cdFx0XHRcdFx0c2V0dGluZ3M9e3NldHRpbmdzfVxuXHRcdFx0XHRcdGFsbFNlbGVjdGFibGVPcHRpb25zPXthbGxTZWxlY3RhYmxlT3B0aW9uc31cblx0XHRcdFx0Lz5cblx0XHRcdCkgOiB2YXJpYW50U3R5bGUgPT09ICdidXR0b25zJyAmJiBzaG9wd3AubWlzYy5pc1BybyA/IChcblx0XHRcdFx0PFByb2R1Y3RWYXJpYW50QnV0dG9uc1xuXHRcdFx0XHRcdG9wdGlvbnM9e2F2YWlsYWJsZU9wdGlvbnN9XG5cdFx0XHRcdFx0bWlzc2luZ1NlbGVjdGlvbnM9e21pc3NpbmdTZWxlY3Rpb25zfVxuXHRcdFx0XHRcdGF2YWlsYWJsZVZhcmlhbnRzPXthdmFpbGFibGVWYXJpYW50c31cblx0XHRcdFx0XHRzZWxlY3RlZE9wdGlvbnM9e3NlbGVjdGVkT3B0aW9uc31cblx0XHRcdFx0XHR2YXJpYW50cz17dmFyaWFudHN9XG5cdFx0XHRcdFx0c2V0dGluZ3M9e3NldHRpbmdzfVxuXHRcdFx0XHRcdGFsbFNlbGVjdGFibGVPcHRpb25zPXthbGxTZWxlY3RhYmxlT3B0aW9uc31cblx0XHRcdFx0Lz5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxQcm9kdWN0VmFyaWFudERyb3Bkb3duc1xuXHRcdFx0XHRcdG9wdGlvbnM9e2F2YWlsYWJsZU9wdGlvbnN9XG5cdFx0XHRcdFx0bWlzc2luZ1NlbGVjdGlvbnM9e21pc3NpbmdTZWxlY3Rpb25zfVxuXHRcdFx0XHRcdGF2YWlsYWJsZVZhcmlhbnRzPXthdmFpbGFibGVWYXJpYW50c31cblx0XHRcdFx0XHRzZWxlY3RlZE9wdGlvbnM9e3NlbGVjdGVkT3B0aW9uc31cblx0XHRcdFx0XHR2YXJpYW50cz17dmFyaWFudHN9XG5cdFx0XHRcdFx0c2V0dGluZ3M9e3NldHRpbmdzfVxuXHRcdFx0XHRcdGFsbFNlbGVjdGFibGVPcHRpb25zPXthbGxTZWxlY3RhYmxlT3B0aW9uc31cblx0XHRcdFx0Lz5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdE9wdGlvbnNcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function ProductOptions(_ref2) {
  var variantStyle = _ref2.variantStyle,
      availableOptions = _ref2.availableOptions,
      missingSelections = _ref2.missingSelections,
      selectedOptions = _ref2.selectedOptions,
      availableVariants = _ref2.availableVariants,
      variants = _ref2.variants,
      settings = _ref2.settings,
      allSelectableOptions = _ref2.allSelectableOptions,
      hasSelections = _ref2.hasSelections,
      isDirectCheckoutOut = _ref2.isDirectCheckoutOut;
  var ProductOptionsCSS = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "wps-product-options",
    css: ProductOptionsCSS,
    "aria-label": "Product variant ".concat(variantStyle ? variantStyle : 'dropdown')
  }, hasSelections && !isDirectCheckoutOut ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_clear_selections__WEBPACK_IMPORTED_MODULE_2__["default"], {
    settings: settings
  }) : null, variantStyle === 'dropdown' ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_variant_dropdowns__WEBPACK_IMPORTED_MODULE_1__["default"], {
    options: availableOptions,
    missingSelections: missingSelections,
    availableVariants: availableVariants,
    selectedOptions: selectedOptions,
    variants: variants,
    settings: settings,
    allSelectableOptions: allSelectableOptions
  }) : variantStyle === 'buttons' && shopwp.misc.isPro ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_variant_buttons__WEBPACK_IMPORTED_MODULE_0__["default"], {
    options: availableOptions,
    missingSelections: missingSelections,
    availableVariants: availableVariants,
    selectedOptions: selectedOptions,
    variants: variants,
    settings: settings,
    allSelectableOptions: allSelectableOptions
  }) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_variant_dropdowns__WEBPACK_IMPORTED_MODULE_1__["default"], {
    options: availableOptions,
    missingSelections: missingSelections,
    availableVariants: availableVariants,
    selectedOptions: selectedOptions,
    variants: variants,
    settings: settings,
    allSelectableOptions: allSelectableOptions
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductOptions);

/***/ }),

/***/ "./src/components/products/product/buy-button/quantity/index.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/products/product/buy-button/quantity/index.jsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_state/hooks */ "./src/components/products/product/_state/hooks.jsx");
/* harmony import */ var _quantity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../quantity */ "./src/components/quantity/index.jsx");
/** @jsx jsx */





function ProductQuantity(_ref) {
  var minQuantity = _ref.minQuantity,
      maxQuantity = _ref.maxQuantity,
      quantityStep = _ref.quantityStep;
  var productDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_0__.useProductDispatch)();

  function onChange(newQuantity) {
    productDispatch({
      type: "UPDATE_QUANTITY",
      payload: newQuantity
    });
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_quantity__WEBPACK_IMPORTED_MODULE_1__["default"], {
    dispatch: productDispatch,
    quantityStep: quantityStep,
    maxQuantity: maxQuantity,
    minQuantity: minQuantity,
    initialQuantity: minQuantity > 1 ? minQuantity : 1,
    onChange: onChange,
    small: false
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ProductQuantity);

/***/ }),

/***/ "./src/components/products/product/buy-button/subscriptions/_state/context.js":
/*!************************************************************************************!*\
  !*** ./src/components/products/product/buy-button/subscriptions/_state/context.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionsBuyButtonDispatchContext": function() { return /* binding */ SubscriptionsBuyButtonDispatchContext; },
/* harmony export */   "SubscriptionsBuyButtonStateContext": function() { return /* binding */ SubscriptionsBuyButtonStateContext; }
/* harmony export */ });
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
var SubscriptionsBuyButtonStateContext = __webpack_provided_wp_dot_element.createContext();
var SubscriptionsBuyButtonDispatchContext = __webpack_provided_wp_dot_element.createContext();


/***/ }),

/***/ "./src/components/products/product/buy-button/subscriptions/_state/initial-state.js":
/*!******************************************************************************************!*\
  !*** ./src/components/products/product/buy-button/subscriptions/_state/initial-state.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");


function defaultSellingGroups(props) {
  if (props.payload.requiresSellingPlan) {
    return [{
      id: props.payload.id + "subscription"
    }];
  } else {
    return [{
      id: props.payload.id + "onetime"
    }, {
      id: props.payload.id + "subscription"
    }];
  }
}

function SubscriptionsBuyButtonInitialState(props) {
  return {
    payload: props.payload,
    sellingGroups: defaultSellingGroups(props),
    sellingPlans: false,
    isLoadingSellingGroups: props.payload.requiresSellingPlan ? true : false,
    selectedSubscription: props.payload.requiresSellingPlan || props.settings.subscriptionsSelectOnLoad ? props.payload.id + "subscription" : props.payload.id + "onetime",
    prices: (0,Utils__WEBPACK_IMPORTED_MODULE_0__.getPrices)(props.payload, "asc"),
    error: false,
    settings: props.settings
  };
}

/* harmony default export */ __webpack_exports__["default"] = (SubscriptionsBuyButtonInitialState);

/***/ }),

/***/ "./src/components/products/product/buy-button/subscriptions/_state/provider.jsx":
/*!**************************************************************************************!*\
  !*** ./src/components/products/product/buy-button/subscriptions/_state/provider.jsx ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/components/products/product/buy-button/subscriptions/_state/reducer.js");
/* harmony import */ var _initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial-state */ "./src/components/products/product/buy-button/subscriptions/_state/initial-state.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./src/components/products/product/buy-button/subscriptions/_state/context.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");






function SubscriptionsBuyButtonProvider(props) {
  var _wp$element$useReduce = __webpack_provided_wp_dot_element.useReducer(_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], (0,_initial_state__WEBPACK_IMPORTED_MODULE_2__["default"])(props)),
      _wp$element$useReduce2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_wp$element$useReduce, 2),
      state = _wp$element$useReduce2[0],
      dispatch = _wp$element$useReduce2[1];

  return /*#__PURE__*/React.createElement(_context__WEBPACK_IMPORTED_MODULE_3__.SubscriptionsBuyButtonStateContext.Provider, {
    value: state
  }, /*#__PURE__*/React.createElement(_context__WEBPACK_IMPORTED_MODULE_3__.SubscriptionsBuyButtonDispatchContext.Provider, {
    value: dispatch
  }, props.children));
}

/* harmony default export */ __webpack_exports__["default"] = (SubscriptionsBuyButtonProvider);

/***/ }),

/***/ "./src/components/products/product/buy-button/subscriptions/_state/reducer.js":
/*!************************************************************************************!*\
  !*** ./src/components/products/product/buy-button/subscriptions/_state/reducer.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");


function SubscriptionsBuyButtonReducer(state, action) {
  switch (action.type) {
    case "SET_SELLING_PLANS":
      {
        return (0,Utils__WEBPACK_IMPORTED_MODULE_0__.rSet)("sellingPlans", action, state);
      }

    case "SET_IS_LOADING_SELLING_GROUPS":
      {
        return (0,Utils__WEBPACK_IMPORTED_MODULE_0__.rSet)("isLoadingSellingGroups", action, state);
      }

    case "SET_SELECTED_SUBSCRIPTION":
      {
        return (0,Utils__WEBPACK_IMPORTED_MODULE_0__.rSet)("selectedSubscription", action, state);
      }

    case "SET_NOTICE":
      {
        return (0,Utils__WEBPACK_IMPORTED_MODULE_0__.rSet)("notice", action, state);
      }

    default:
      {
        throw new Error("Unhandled action type: ".concat(action.type, " in SubscriptionsBuyButtonReducer"));
      }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (SubscriptionsBuyButtonReducer);

/***/ }),

/***/ "./src/components/products/product/buy-button/subscriptions/index.jsx":
/*!****************************************************************************!*\
  !*** ./src/components/products/product/buy-button/subscriptions/index.jsx ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_state/provider */ "./src/components/products/product/buy-button/subscriptions/_state/provider.jsx");
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper */ "./src/components/products/product/buy-button/subscriptions/wrapper/index.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");




function SubscriptionsBuyButton(props) {
  return /*#__PURE__*/React.createElement(_state_provider__WEBPACK_IMPORTED_MODULE_0__["default"], props, /*#__PURE__*/React.createElement(_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (SubscriptionsBuyButton);

/***/ }),

/***/ "./src/components/products/product/buy-button/subscriptions/wrapper/index.jsx":
/*!************************************************************************************!*\
  !*** ./src/components/products/product/buy-button/subscriptions/wrapper/index.jsx ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */


var SubscriptionDetails = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | SubscriptionDetails-public */ "SubscriptionDetails-public").then(__webpack_require__.bind(__webpack_require__, /*! ../details */ "./src/components/products/product/buy-button/subscriptions/details/index.jsx"));
});
var SellingGroups = __webpack_provided_wp_dot_element.lazy(function () {
  return Promise.all(/*! import() | SellingGroups-public */[__webpack_require__.e("vendors-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("SellingGroups-public")]).then(__webpack_require__.bind(__webpack_require__, /*! ../selling-groups */ "./src/components/products/product/buy-button/subscriptions/selling-groups/index.jsx"));
});

var _ref =  false ? 0 : {
  name: "bvgcu4-SubscriptionBuyButtonCSS",
  styles: "margin:0px 0 25px 0;display:flex;flex-direction:column;label:SubscriptionBuyButtonCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vc3Vic2NyaXB0aW9ucy93cmFwcGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZc0MiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvYnV5LWJ1dHRvbi9zdWJzY3JpcHRpb25zL3dyYXBwZXIvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5cbmNvbnN0IFN1YnNjcmlwdGlvbkRldGFpbHMgPSB3cC5lbGVtZW50LmxhenkoKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdTdWJzY3JpcHRpb25EZXRhaWxzLXB1YmxpYycgKi8gXCIuLi9kZXRhaWxzXCIpXG4pXG5cbmNvbnN0IFNlbGxpbmdHcm91cHMgPSB3cC5lbGVtZW50LmxhenkoKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdTZWxsaW5nR3JvdXBzLXB1YmxpYycgKi8gXCIuLi9zZWxsaW5nLWdyb3Vwc1wiKVxuKVxuXG5mdW5jdGlvbiBTdWJzY3JpcHRpb25zQnV5QnV0dG9uV3JhcHBlcigpIHtcbiAgY29uc3QgU3Vic2NyaXB0aW9uQnV5QnV0dG9uQ1NTID0gY3NzYFxuICAgIG1hcmdpbjogMHB4IDAgMjVweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e1N1YnNjcmlwdGlvbkJ1eUJ1dHRvbkNTU30+XG4gICAgICA8U2VsbGluZ0dyb3VwcyAvPlxuICAgICAgPFN1YnNjcmlwdGlvbkRldGFpbHMgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJzY3JpcHRpb25zQnV5QnV0dG9uV3JhcHBlclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function SubscriptionsBuyButtonWrapper() {
  var SubscriptionBuyButtonCSS = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    css: SubscriptionBuyButtonCSS
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.jsx)(SellingGroups, null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubscriptionDetails, null));
}

/* harmony default export */ __webpack_exports__["default"] = (SubscriptionsBuyButtonWrapper);

/***/ }),

/***/ "./src/components/products/product/buy-button/variant-buttons/index.jsx":
/*!******************************************************************************!*\
  !*** ./src/components/products/product/buy-button/variant-buttons/index.jsx ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _variant_button_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variant-button-group */ "./src/components/products/product/buy-button/variant-buttons/variant-button-group/index.jsx");
/** @jsx jsx */




function ProductVariantButtons(_ref) {
  var options = _ref.options,
      missingSelections = _ref.missingSelections,
      selectedOptions = _ref.selectedOptions,
      availableVariants = _ref.availableVariants,
      variants = _ref.variants,
      settings = _ref.settings,
      allSelectableOptions = _ref.allSelectableOptions;
  return options ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "wpshopify-products-variant-buttons"
  }, options.map(function (option) {
    return option && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(_variant_button_group__WEBPACK_IMPORTED_MODULE_0__["default"], {
      key: option.name,
      option: option,
      missingSelections: missingSelections,
      selectedOptions: selectedOptions,
      availableVariants: availableVariants,
      variants: variants,
      totalOptions: options.length,
      settings: settings,
      allSelectableOptions: allSelectableOptions
    });
  })) : null;
}

/* harmony default export */ __webpack_exports__["default"] = (ProductVariantButtons);

/***/ }),

/***/ "./src/components/products/product/buy-button/variant-buttons/missing-selection/index.jsx":
/*!************************************************************************************************!*\
  !*** ./src/components/products/product/buy-button/variant-buttons/missing-selection/index.jsx ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_i18n = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */



var _ref =  false ? 0 : {
  name: "kqaj3j-selectStyles",
  styles: "margin-top:6px;color:red;label:selectStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vdmFyaWFudC1idXR0b25zL21pc3Npbmctc2VsZWN0aW9uL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJMEIiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvYnV5LWJ1dHRvbi92YXJpYW50LWJ1dHRvbnMvbWlzc2luZy1zZWxlY3Rpb24vaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5cbmZ1bmN0aW9uIFByb2R1Y3RWYXJpYW50TWlzc2luZ1NlbGVjdGlvbih7IHByb2R1Y3RPcHRpb25TdGF0ZSB9KSB7XG4gIGNvbnN0IHNlbGVjdFN0eWxlcyA9IGNzc2BcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgY29sb3I6IHJlZDtcbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPHAgY3NzPXtzZWxlY3RTdHlsZXN9PlxuICAgICAge3dwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgICAgXCJwcm9kdWN0Lm1pc3NpbmdTZWxlY3Rpb25UZXh0XCIsXG4gICAgICAgIHdwLmkxOG4uX18oXCJQbGVhc2Ugc2VsZWN0IGEgXCIsIFwic2hvcHdwXCIpICtcbiAgICAgICAgICBTdHJpbmcocHJvZHVjdE9wdGlvblN0YXRlLm9wdGlvbi5uYW1lKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBwcm9kdWN0T3B0aW9uU3RhdGVcbiAgICAgICl9XG4gICAgPC9wPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RWYXJpYW50TWlzc2luZ1NlbGVjdGlvblxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function ProductVariantMissingSelection(_ref2) {
  var productOptionState = _ref2.productOptionState;
  var selectStyles = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
    css: selectStyles
  }, __webpack_provided_wp_dot_hooks.applyFilters("product.missingSelectionText", __webpack_provided_wp_dot_i18n.__("Please select a ", "shopwp") + String(productOptionState.option.name).toLowerCase(), productOptionState));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductVariantMissingSelection);

/***/ }),

/***/ "./src/components/products/product/buy-button/variant-buttons/variant-button-group-wrapper/index.jsx":
/*!***********************************************************************************************************!*\
  !*** ./src/components/products/product/buy-button/variant-buttons/variant-button-group-wrapper/index.jsx ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _option_state_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../option/_state/context */ "./src/components/products/product/buy-button/option/_state/context.js");
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variants */ "./src/components/products/product/buy-button/variant-buttons/variants/index.jsx");
/* harmony import */ var _missing_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../missing-selection */ "./src/components/products/product/buy-button/variant-buttons/missing-selection/index.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */






var _ref =  false ? 0 : {
  name: "1rx0q05-groupStyles",
  styles: "display:flex;flex-direction:column;margin-bottom:1em;label:groupStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vdmFyaWFudC1idXR0b25zL3ZhcmlhbnQtYnV0dG9uLWdyb3VwLXdyYXBwZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCeUIiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvYnV5LWJ1dHRvbi92YXJpYW50LWJ1dHRvbnMvdmFyaWFudC1idXR0b24tZ3JvdXAtd3JhcHBlci9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IFByb2R1Y3RPcHRpb25Db250ZXh0IH0gZnJvbSBcIi4uLy4uL29wdGlvbi9fc3RhdGUvY29udGV4dFwiXG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRzQnV0dG9ucyBmcm9tIFwiLi4vdmFyaWFudHNcIlxuaW1wb3J0IFByb2R1Y3RWYXJpYW50TWlzc2luZ1NlbGVjdGlvbiBmcm9tIFwiLi4vbWlzc2luZy1zZWxlY3Rpb25cIlxuXG5mdW5jdGlvbiBQcm9kdWN0VmFyaWFudEJ1dHRvbkdyb3VwV3JhcHBlcih7XG4gIG9wdGlvbixcbiAgbWlzc2luZ1NlbGVjdGlvbnMsXG4gIHNlbGVjdGVkT3B0aW9ucyxcbiAgYXZhaWxhYmxlVmFyaWFudHMsXG4gIHNldHRpbmdzLFxuICBhbGxTZWxlY3RhYmxlT3B0aW9ucyxcbn0pIHtcbiAgY29uc3QgeyB1c2VSZWYsIHVzZUNvbnRleHQgfSA9IHdwLmVsZW1lbnRcbiAgY29uc3QgW3Byb2R1Y3RPcHRpb25TdGF0ZV0gPSB1c2VDb250ZXh0KFByb2R1Y3RPcHRpb25Db250ZXh0KVxuICBjb25zdCB2YXJpYW50R3JvdXAgPSB1c2VSZWYoKVxuXG4gIGNvbnN0IGxhYmVsU3R5bGVzID0gY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIGBcblxuICBjb25zdCBncm91cFN0eWxlcyA9IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndwc2hvcGlmeS12YXJpYW50LWJ1dHRvbnMtZ3JvdXBcIiBjc3M9e2dyb3VwU3R5bGVzfT5cbiAgICAgIDxsYWJlbCBjc3M9e2xhYmVsU3R5bGVzfT5cbiAgICAgICAge3dwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgICAgICBcInByb2R1Y3Qub3B0aW9uTmFtZVwiLFxuICAgICAgICAgIG9wdGlvbi5uYW1lLFxuICAgICAgICAgIHByb2R1Y3RPcHRpb25TdGF0ZVxuICAgICAgICApfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BzaG9waWZ5LXZhcmlhbnQtYnV0dG9uc1wiIHJlZj17dmFyaWFudEdyb3VwfT5cbiAgICAgICAgPFByb2R1Y3RWYXJpYW50c0J1dHRvbnNcbiAgICAgICAgICBvcHRpb249e29wdGlvbn1cbiAgICAgICAgICBhdmFpbGFibGVWYXJpYW50cz17YXZhaWxhYmxlVmFyaWFudHN9XG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb25zPXtzZWxlY3RlZE9wdGlvbnN9XG4gICAgICAgICAgdmFyaWFudHM9e3Byb2R1Y3RPcHRpb25TdGF0ZS52YXJpYW50c31cbiAgICAgICAgICB0b3RhbE9wdGlvbnM9e3Byb2R1Y3RPcHRpb25TdGF0ZS50b3RhbE9wdGlvbnN9XG4gICAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgICAgIGFsbFNlbGVjdGFibGVPcHRpb25zPXthbGxTZWxlY3RhYmxlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAge21pc3NpbmdTZWxlY3Rpb25zICYmICFwcm9kdWN0T3B0aW9uU3RhdGUuaXNPcHRpb25TZWxlY3RlZCAmJiAoXG4gICAgICAgIDxQcm9kdWN0VmFyaWFudE1pc3NpbmdTZWxlY3Rpb25cbiAgICAgICAgICBwcm9kdWN0T3B0aW9uU3RhdGU9e3Byb2R1Y3RPcHRpb25TdGF0ZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFZhcmlhbnRCdXR0b25Hcm91cFdyYXBwZXJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 =  false ? 0 : {
  name: "18jk3bw-labelStyles",
  styles: "margin-bottom:5px;font-weight:bold;font-size:15px;label:labelStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vdmFyaWFudC1idXR0b25zL3ZhcmlhbnQtYnV0dG9uLWdyb3VwLXdyYXBwZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCeUIiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvYnV5LWJ1dHRvbi92YXJpYW50LWJ1dHRvbnMvdmFyaWFudC1idXR0b24tZ3JvdXAtd3JhcHBlci9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IFByb2R1Y3RPcHRpb25Db250ZXh0IH0gZnJvbSBcIi4uLy4uL29wdGlvbi9fc3RhdGUvY29udGV4dFwiXG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRzQnV0dG9ucyBmcm9tIFwiLi4vdmFyaWFudHNcIlxuaW1wb3J0IFByb2R1Y3RWYXJpYW50TWlzc2luZ1NlbGVjdGlvbiBmcm9tIFwiLi4vbWlzc2luZy1zZWxlY3Rpb25cIlxuXG5mdW5jdGlvbiBQcm9kdWN0VmFyaWFudEJ1dHRvbkdyb3VwV3JhcHBlcih7XG4gIG9wdGlvbixcbiAgbWlzc2luZ1NlbGVjdGlvbnMsXG4gIHNlbGVjdGVkT3B0aW9ucyxcbiAgYXZhaWxhYmxlVmFyaWFudHMsXG4gIHNldHRpbmdzLFxuICBhbGxTZWxlY3RhYmxlT3B0aW9ucyxcbn0pIHtcbiAgY29uc3QgeyB1c2VSZWYsIHVzZUNvbnRleHQgfSA9IHdwLmVsZW1lbnRcbiAgY29uc3QgW3Byb2R1Y3RPcHRpb25TdGF0ZV0gPSB1c2VDb250ZXh0KFByb2R1Y3RPcHRpb25Db250ZXh0KVxuICBjb25zdCB2YXJpYW50R3JvdXAgPSB1c2VSZWYoKVxuXG4gIGNvbnN0IGxhYmVsU3R5bGVzID0gY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIGBcblxuICBjb25zdCBncm91cFN0eWxlcyA9IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndwc2hvcGlmeS12YXJpYW50LWJ1dHRvbnMtZ3JvdXBcIiBjc3M9e2dyb3VwU3R5bGVzfT5cbiAgICAgIDxsYWJlbCBjc3M9e2xhYmVsU3R5bGVzfT5cbiAgICAgICAge3dwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICAgICAgICBcInByb2R1Y3Qub3B0aW9uTmFtZVwiLFxuICAgICAgICAgIG9wdGlvbi5uYW1lLFxuICAgICAgICAgIHByb2R1Y3RPcHRpb25TdGF0ZVxuICAgICAgICApfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BzaG9waWZ5LXZhcmlhbnQtYnV0dG9uc1wiIHJlZj17dmFyaWFudEdyb3VwfT5cbiAgICAgICAgPFByb2R1Y3RWYXJpYW50c0J1dHRvbnNcbiAgICAgICAgICBvcHRpb249e29wdGlvbn1cbiAgICAgICAgICBhdmFpbGFibGVWYXJpYW50cz17YXZhaWxhYmxlVmFyaWFudHN9XG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb25zPXtzZWxlY3RlZE9wdGlvbnN9XG4gICAgICAgICAgdmFyaWFudHM9e3Byb2R1Y3RPcHRpb25TdGF0ZS52YXJpYW50c31cbiAgICAgICAgICB0b3RhbE9wdGlvbnM9e3Byb2R1Y3RPcHRpb25TdGF0ZS50b3RhbE9wdGlvbnN9XG4gICAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgICAgIGFsbFNlbGVjdGFibGVPcHRpb25zPXthbGxTZWxlY3RhYmxlT3B0aW9uc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAge21pc3NpbmdTZWxlY3Rpb25zICYmICFwcm9kdWN0T3B0aW9uU3RhdGUuaXNPcHRpb25TZWxlY3RlZCAmJiAoXG4gICAgICAgIDxQcm9kdWN0VmFyaWFudE1pc3NpbmdTZWxlY3Rpb25cbiAgICAgICAgICBwcm9kdWN0T3B0aW9uU3RhdGU9e3Byb2R1Y3RPcHRpb25TdGF0ZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFZhcmlhbnRCdXR0b25Hcm91cFdyYXBwZXJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function ProductVariantButtonGroupWrapper(_ref3) {
  var option = _ref3.option,
      missingSelections = _ref3.missingSelections,
      selectedOptions = _ref3.selectedOptions,
      availableVariants = _ref3.availableVariants,
      settings = _ref3.settings,
      allSelectableOptions = _ref3.allSelectableOptions;
  var _wp$element = wp.element,
      useRef = __webpack_provided_wp_dot_element.useRef,
      useContext = __webpack_provided_wp_dot_element.useContext;

  var _useContext = useContext(_option_state_context__WEBPACK_IMPORTED_MODULE_1__.ProductOptionContext),
      _useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext, 1),
      productOptionState = _useContext2[0];

  var variantGroup = useRef();
  var labelStyles = _ref2;
  var groupStyles = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "wpshopify-variant-buttons-group",
    css: groupStyles
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
    css: labelStyles
  }, __webpack_provided_wp_dot_hooks.applyFilters("product.optionName", option.name, productOptionState)), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "wpshopify-variant-buttons",
    ref: variantGroup
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(_variants__WEBPACK_IMPORTED_MODULE_2__["default"], {
    option: option,
    availableVariants: availableVariants,
    selectedOptions: selectedOptions,
    variants: productOptionState.variants,
    totalOptions: productOptionState.totalOptions,
    settings: settings,
    allSelectableOptions: allSelectableOptions
  })), missingSelections && !productOptionState.isOptionSelected && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(_missing_selection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    productOptionState: productOptionState
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductVariantButtonGroupWrapper);

/***/ }),

/***/ "./src/components/products/product/buy-button/variant-buttons/variant-button-group/index.jsx":
/*!***************************************************************************************************!*\
  !*** ./src/components/products/product/buy-button/variant-buttons/variant-button-group/index.jsx ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _option_state_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../option/_state/provider */ "./src/components/products/product/buy-button/option/_state/provider.jsx");
/* harmony import */ var _option_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../option/wrapper */ "./src/components/products/product/buy-button/option/wrapper/index.jsx");
/* harmony import */ var _variant_button_group_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variant-button-group-wrapper */ "./src/components/products/product/buy-button/variant-buttons/variant-button-group-wrapper/index.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");





function ProductVariantButtonGroup(_ref) {
  var option = _ref.option,
      missingSelections = _ref.missingSelections,
      availableVariants = _ref.availableVariants,
      selectedOptions = _ref.selectedOptions,
      variants = _ref.variants,
      totalOptions = _ref.totalOptions,
      settings = _ref.settings,
      allSelectableOptions = _ref.allSelectableOptions;
  return option ? /*#__PURE__*/React.createElement(_option_state_provider__WEBPACK_IMPORTED_MODULE_0__.ProductOptionProvider, {
    options: {
      option: option,
      variants: variants,
      totalOptions: totalOptions,
      settings: settings
    }
  }, /*#__PURE__*/React.createElement(_option_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/React.createElement(_variant_button_group_wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    option: option,
    missingSelections: missingSelections,
    availableVariants: availableVariants,
    selectedOptions: selectedOptions,
    settings: settings,
    allSelectableOptions: allSelectableOptions
  }))) : '';
}

/* harmony default export */ __webpack_exports__["default"] = (ProductVariantButtonGroup);

/***/ }),

/***/ "./src/components/products/product/buy-button/variant-buttons/variant/index.jsx":
/*!**************************************************************************************!*\
  !*** ./src/components/products/product/buy-button/variant-buttons/variant/index.jsx ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var Common_pricing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/pricing */ "./src/common/pricing/index.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */





function ProductVariantButtonValue(_ref2) {
  var optionObj = _ref2.optionObj,
      onSelection = _ref2.onSelection,
      selectedOptions = _ref2.selectedOptions,
      isAvailableToSelect = _ref2.isAvailableToSelect,
      variants = _ref2.variants,
      totalOptions = _ref2.totalOptions,
      settings = _ref2.settings,
      isAvailableInShopify = _ref2.isAvailableInShopify;
  console.log("ProductVariantButtonValue settings", settings);
  var isSelected = (0,Utils__WEBPACK_IMPORTED_MODULE_0__.isMatching)(selectedOptions, optionObj);
  var border = isSelected ? "#415aff" : "#606060";
  var color = isSelected ? "white" : "black";
  var backgroundColor = isSelected ? "#415aff" : "transparent";
  var opacity = isAvailableToSelect ? 1 : 0.4;

  if (settings.showPriceUnderVariantButton && totalOptions === 1) {
    var variantObject = (0,Utils__WEBPACK_IMPORTED_MODULE_0__.findVariantFromOptionObject)(optionObj, variants);
  } else {
    var variantObject = false;
  }

  var colorSwatchNames = settings.colorSwatchNames;
  var defaultVariantStyles = "margin: 0 10px 10px 0;\n    outline: none;\n    border: 1px solid ".concat(border, ";\n    font-size: 16px;\n    padding: 10px;\n    border-radius: 5px;\n    opacity: ").concat(opacity, ";\n    color: ").concat(color, ";\n    background-color: ").concat(backgroundColor, ";\n    transition: all ease 0.2s;\n\ttext-decoration: ").concat(!isAvailableInShopify ? "line-through" : "none", ";\n\n    &:hover,\n    &:focus {\n      cursor: ").concat(!isAvailableToSelect ? "not-allowed" : !isSelected ? "pointer" : "auto", ";\n      background-color: ").concat(!isAvailableToSelect ? backgroundColor : !isSelected ? "#e9e9e9" : backgroundColor, ";\n      text-decoration: ").concat(!isAvailableInShopify ? "line-through" : "none", ";\n    }");

  function maybeColorSwatches(optionObj, defaultCustomStyles) {
    console.log("maybeColorSwatches colorSwatchNames", colorSwatchNames);
    console.log("maybeColorSwatches defaultCustomStyles", defaultCustomStyles);
    var namesLowerCased = colorSwatchNames.map(function (v) {
      return String(v).toLowerCase();
    });

    if (namesLowerCased && !namesLowerCased.includes(String(optionObj.name).toLowerCase())) {
      return defaultCustomStyles;
    }

    var variantValue = __webpack_provided_wp_dot_hooks.applyFilters("product.colorSwatchValue", optionObj.value);

    if (variantValue === "white" || variantValue === "White") {
      var border = isSelected ? "3px solid #333" : "1px solid #333";
    } else {
      var border = isSelected ? "1px solid " + variantValue : "none";
    }

    return "\n         margin: 0 10px 10px 0;\n         outline: none;\n         padding: 10px;\n         background-color: ".concat(variantValue, ";\n         text-indent: 150%;\n         white-space: nowrap;\n         overflow: hidden;\n         width: 40px;\n         height: 40px;\n         font-size: 0;\n         opacity: ").concat(isAvailableToSelect ? 1 : 0.1, ";\n         border-radius: 50%;\n         border: ").concat(border, ";\n         box-shadow: ").concat(isSelected ? "inset 0 0 0px 4px white" : "none", ";\n         transition: all ease 0.15s;\n         line-height: 1;\n\n         &:hover {\n            transform: scale(1.2);\n            cursor: ").concat(!isSelected ? "pointer" : "auto", ";\n            opacity: 1 !important;\n         }      \n      ");
  }

  var ProductVariantButtonValueButtonCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)(__webpack_provided_wp_dot_hooks.applyFilters("product.variantStyles", maybeColorSwatches(optionObj, defaultVariantStyles), optionObj, isSelected, isAvailableToSelect), ";;label:ProductVariantButtonValueButtonCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vdmFyaWFudC1idXR0b25zL3ZhcmlhbnQvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBHOEMiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvYnV5LWJ1dHRvbi92YXJpYW50LWJ1dHRvbnMvdmFyaWFudC9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IGlzTWF0Y2hpbmcsIGZpbmRWYXJpYW50RnJvbU9wdGlvbk9iamVjdCB9IGZyb20gXCJVdGlsc1wiXG5pbXBvcnQgUHJpY2UgZnJvbSBcIkNvbW1vbi9wcmljaW5nXCJcblxuZnVuY3Rpb24gUHJvZHVjdFZhcmlhbnRCdXR0b25WYWx1ZSh7XG4gIG9wdGlvbk9iaixcbiAgb25TZWxlY3Rpb24sXG4gIHNlbGVjdGVkT3B0aW9ucyxcbiAgaXNBdmFpbGFibGVUb1NlbGVjdCxcbiAgdmFyaWFudHMsXG4gIHRvdGFsT3B0aW9ucyxcbiAgc2V0dGluZ3MsXG4gIGlzQXZhaWxhYmxlSW5TaG9waWZ5LFxufSkge1xuICBjb25zb2xlLmxvZyhcIlByb2R1Y3RWYXJpYW50QnV0dG9uVmFsdWUgc2V0dGluZ3NcIiwgc2V0dGluZ3MpXG4gIGNvbnN0IGlzU2VsZWN0ZWQgPSBpc01hdGNoaW5nKHNlbGVjdGVkT3B0aW9ucywgb3B0aW9uT2JqKVxuICBjb25zdCBib3JkZXIgPSBpc1NlbGVjdGVkID8gXCIjNDE1YWZmXCIgOiBcIiM2MDYwNjBcIlxuICBjb25zdCBjb2xvciA9IGlzU2VsZWN0ZWQgPyBcIndoaXRlXCIgOiBcImJsYWNrXCJcbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gaXNTZWxlY3RlZCA/IFwiIzQxNWFmZlwiIDogXCJ0cmFuc3BhcmVudFwiXG4gIGNvbnN0IG9wYWNpdHkgPSBpc0F2YWlsYWJsZVRvU2VsZWN0ID8gMSA6IDAuNFxuXG4gIGlmIChzZXR0aW5ncy5zaG93UHJpY2VVbmRlclZhcmlhbnRCdXR0b24gJiYgdG90YWxPcHRpb25zID09PSAxKSB7XG4gICAgdmFyIHZhcmlhbnRPYmplY3QgPSBmaW5kVmFyaWFudEZyb21PcHRpb25PYmplY3Qob3B0aW9uT2JqLCB2YXJpYW50cylcbiAgfSBlbHNlIHtcbiAgICB2YXIgdmFyaWFudE9iamVjdCA9IGZhbHNlXG4gIH1cblxuICBjb25zdCBjb2xvclN3YXRjaE5hbWVzID0gc2V0dGluZ3MuY29sb3JTd2F0Y2hOYW1lc1xuXG4gIGNvbnN0IGRlZmF1bHRWYXJpYW50U3R5bGVzID0gYG1hcmdpbjogMCAxMHB4IDEwcHggMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVyfTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3BhY2l0eTogJHtvcGFjaXR5fTtcbiAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3J9O1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMnM7XG5cdHRleHQtZGVjb3JhdGlvbjogJHshaXNBdmFpbGFibGVJblNob3BpZnkgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJub25lXCJ9O1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGN1cnNvcjogJHtcbiAgICAgICAgIWlzQXZhaWxhYmxlVG9TZWxlY3QgPyBcIm5vdC1hbGxvd2VkXCIgOiAhaXNTZWxlY3RlZCA/IFwicG9pbnRlclwiIDogXCJhdXRvXCJcbiAgICAgIH07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke1xuICAgICAgICAhaXNBdmFpbGFibGVUb1NlbGVjdFxuICAgICAgICAgID8gYmFja2dyb3VuZENvbG9yXG4gICAgICAgICAgOiAhaXNTZWxlY3RlZFxuICAgICAgICAgID8gXCIjZTllOWU5XCJcbiAgICAgICAgICA6IGJhY2tncm91bmRDb2xvclxuICAgICAgfTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogJHshaXNBdmFpbGFibGVJblNob3BpZnkgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJub25lXCJ9O1xuICAgIH1gXG5cbiAgZnVuY3Rpb24gbWF5YmVDb2xvclN3YXRjaGVzKG9wdGlvbk9iaiwgZGVmYXVsdEN1c3RvbVN0eWxlcykge1xuICAgIGNvbnNvbGUubG9nKFwibWF5YmVDb2xvclN3YXRjaGVzIGNvbG9yU3dhdGNoTmFtZXNcIiwgY29sb3JTd2F0Y2hOYW1lcylcbiAgICBjb25zb2xlLmxvZyhcIm1heWJlQ29sb3JTd2F0Y2hlcyBkZWZhdWx0Q3VzdG9tU3R5bGVzXCIsIGRlZmF1bHRDdXN0b21TdHlsZXMpXG4gICAgdmFyIG5hbWVzTG93ZXJDYXNlZCA9IGNvbG9yU3dhdGNoTmFtZXMubWFwKCh2KSA9PiBTdHJpbmcodikudG9Mb3dlckNhc2UoKSlcblxuICAgIGlmIChcbiAgICAgIG5hbWVzTG93ZXJDYXNlZCAmJlxuICAgICAgIW5hbWVzTG93ZXJDYXNlZC5pbmNsdWRlcyhTdHJpbmcob3B0aW9uT2JqLm5hbWUpLnRvTG93ZXJDYXNlKCkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdEN1c3RvbVN0eWxlc1xuICAgIH1cblxuICAgIGxldCB2YXJpYW50VmFsdWUgPSB3cC5ob29rcy5hcHBseUZpbHRlcnMoXG4gICAgICBcInByb2R1Y3QuY29sb3JTd2F0Y2hWYWx1ZVwiLFxuICAgICAgb3B0aW9uT2JqLnZhbHVlXG4gICAgKVxuXG4gICAgaWYgKHZhcmlhbnRWYWx1ZSA9PT0gXCJ3aGl0ZVwiIHx8IHZhcmlhbnRWYWx1ZSA9PT0gXCJXaGl0ZVwiKSB7XG4gICAgICB2YXIgYm9yZGVyID0gaXNTZWxlY3RlZCA/IFwiM3B4IHNvbGlkICMzMzNcIiA6IFwiMXB4IHNvbGlkICMzMzNcIlxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYm9yZGVyID0gaXNTZWxlY3RlZCA/IFwiMXB4IHNvbGlkIFwiICsgdmFyaWFudFZhbHVlIDogXCJub25lXCJcbiAgICB9XG5cbiAgICByZXR1cm4gYFxuICAgICAgICAgbWFyZ2luOiAwIDEwcHggMTBweCAwO1xuICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZhcmlhbnRWYWx1ZX07XG4gICAgICAgICB0ZXh0LWluZGVudDogMTUwJTtcbiAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICBmb250LXNpemU6IDA7XG4gICAgICAgICBvcGFjaXR5OiAke2lzQXZhaWxhYmxlVG9TZWxlY3QgPyAxIDogMC4xfTtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgIGJvcmRlcjogJHtib3JkZXJ9O1xuICAgICAgICAgYm94LXNoYWRvdzogJHtpc1NlbGVjdGVkID8gXCJpbnNldCAwIDAgMHB4IDRweCB3aGl0ZVwiIDogXCJub25lXCJ9O1xuICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4xNXM7XG4gICAgICAgICBsaW5lLWhlaWdodDogMTtcblxuICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgICAgICBjdXJzb3I6ICR7IWlzU2VsZWN0ZWQgPyBcInBvaW50ZXJcIiA6IFwiYXV0b1wifTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICAgICAgIH0gICAgICBcbiAgICAgIGBcbiAgfVxuXG4gIHZhciBQcm9kdWN0VmFyaWFudEJ1dHRvblZhbHVlQnV0dG9uQ1NTID0gY3NzYFxuICAgICR7d3AuaG9va3MuYXBwbHlGaWx0ZXJzKFxuICAgICAgXCJwcm9kdWN0LnZhcmlhbnRTdHlsZXNcIixcbiAgICAgIG1heWJlQ29sb3JTd2F0Y2hlcyhvcHRpb25PYmosIGRlZmF1bHRWYXJpYW50U3R5bGVzKSxcbiAgICAgIG9wdGlvbk9iaixcbiAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICBpc0F2YWlsYWJsZVRvU2VsZWN0XG4gICAgKX1cbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RWYXJpYW50QnV0dG9uVmFsdWVCdXR0b25cbiAgICAgIGRlZmF1bHRTdHlsZXM9e1Byb2R1Y3RWYXJpYW50QnV0dG9uVmFsdWVCdXR0b25DU1N9XG4gICAgICBvblNlbGVjdGlvbj17b25TZWxlY3Rpb259XG4gICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxuICAgICAgaXNBdmFpbGFibGVUb1NlbGVjdD17aXNBdmFpbGFibGVUb1NlbGVjdH1cbiAgICAgIGlzQXZhaWxhYmxlSW5TaG9waWZ5PXtpc0F2YWlsYWJsZUluU2hvcGlmeX1cbiAgICAgIHZhcmlhbnRWYWx1ZT17b3B0aW9uT2JqLnZhbHVlfVxuICAgICAgdmFyaWFudE9iamVjdD17dmFyaWFudE9iamVjdH1cbiAgICAvPlxuICApXG59XG5cbmZ1bmN0aW9uIFByb2R1Y3RWYXJpYW50QnV0dG9uVmFsdWVCdXR0b24oe1xuICBkZWZhdWx0U3R5bGVzLFxuICBvblNlbGVjdGlvbixcbiAgaXNTZWxlY3RlZCxcbiAgaXNBdmFpbGFibGVUb1NlbGVjdCxcbiAgaXNBdmFpbGFibGVJblNob3BpZnksXG4gIHZhcmlhbnRWYWx1ZSxcbiAgdmFyaWFudE9iamVjdCxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjc3M9e2RlZmF1bHRTdHlsZXN9XG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIG9uTW91c2VEb3duPXtvblNlbGVjdGlvbn1cbiAgICAgIGRhdGEtaXMtdmFyaWFudC1zZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgIGRhdGEtaXMtYXZhaWxhYmxlPXtpc0F2YWlsYWJsZVRvU2VsZWN0fVxuICAgICAgZGF0YS1pcy1hdmFpbGFibGUtaW4tc2hvcGlmeT17aXNBdmFpbGFibGVJblNob3BpZnl9XG4gICAgPlxuICAgICAge3dwLmhvb2tzLmFwcGx5RmlsdGVycyhcInByb2R1Y3QudmFyaWFudFZhbHVlXCIsIHZhcmlhbnRWYWx1ZSl9XG5cbiAgICAgIHt2YXJpYW50T2JqZWN0ICYmIChcbiAgICAgICAgPFByb2R1Y3RWYXJpYW50QnV0dG9uUHJpY2UgdmFyaWFudE9iamVjdD17dmFyaWFudE9iamVjdH0gLz5cbiAgICAgICl9XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuZnVuY3Rpb24gUHJvZHVjdFZhcmlhbnRCdXR0b25QcmljZSh7IHZhcmlhbnRPYmplY3QgfSkge1xuICBjb25zdCB2YXJpYW50T2JqZWN0Q1NTID0gY3NzYFxuICAgICYmIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gIGBcblxuICByZXR1cm4gKFxuICAgIDxwIGNzcz17dmFyaWFudE9iamVjdENTU30gY2xhc3NOYW1lPVwid3BzLXZhcmlhbnQtYnV0dG9uLXByaWNlXCI+XG4gICAgICA8UHJpY2UgcHJpY2U9e3ZhcmlhbnRPYmplY3RbMF0ubm9kZS5wcmljZVYyLmFtb3VudH0gLz5cbiAgICA8L3A+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFZhcmlhbnRCdXR0b25WYWx1ZVxuIl19 */"));
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(ProductVariantButtonValueButton, {
    defaultStyles: ProductVariantButtonValueButtonCSS,
    onSelection: onSelection,
    isSelected: isSelected,
    isAvailableToSelect: isAvailableToSelect,
    isAvailableInShopify: isAvailableInShopify,
    variantValue: optionObj.value,
    variantObject: variantObject
  });
}

function ProductVariantButtonValueButton(_ref3) {
  var defaultStyles = _ref3.defaultStyles,
      onSelection = _ref3.onSelection,
      isSelected = _ref3.isSelected,
      isAvailableToSelect = _ref3.isAvailableToSelect,
      isAvailableInShopify = _ref3.isAvailableInShopify,
      variantValue = _ref3.variantValue,
      variantObject = _ref3.variantObject;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
    css: defaultStyles,
    type: "button",
    onMouseDown: onSelection,
    "data-is-variant-selected": isSelected,
    "data-is-available": isAvailableToSelect,
    "data-is-available-in-shopify": isAvailableInShopify
  }, __webpack_provided_wp_dot_hooks.applyFilters("product.variantValue", variantValue), variantObject && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(ProductVariantButtonPrice, {
    variantObject: variantObject
  }));
}

var _ref =  false ? 0 : {
  name: "pvjize-variantObjectCSS",
  styles: "&&{font-size:15px;margin-top:5px;margin-bottom:0;display:inline;margin-left:10px;};label:variantObjectCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2J1eS1idXR0b24vdmFyaWFudC1idXR0b25zL3ZhcmlhbnQvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZKOEIiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvYnV5LWJ1dHRvbi92YXJpYW50LWJ1dHRvbnMvdmFyaWFudC9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IGlzTWF0Y2hpbmcsIGZpbmRWYXJpYW50RnJvbU9wdGlvbk9iamVjdCB9IGZyb20gXCJVdGlsc1wiXG5pbXBvcnQgUHJpY2UgZnJvbSBcIkNvbW1vbi9wcmljaW5nXCJcblxuZnVuY3Rpb24gUHJvZHVjdFZhcmlhbnRCdXR0b25WYWx1ZSh7XG4gIG9wdGlvbk9iaixcbiAgb25TZWxlY3Rpb24sXG4gIHNlbGVjdGVkT3B0aW9ucyxcbiAgaXNBdmFpbGFibGVUb1NlbGVjdCxcbiAgdmFyaWFudHMsXG4gIHRvdGFsT3B0aW9ucyxcbiAgc2V0dGluZ3MsXG4gIGlzQXZhaWxhYmxlSW5TaG9waWZ5LFxufSkge1xuICBjb25zb2xlLmxvZyhcIlByb2R1Y3RWYXJpYW50QnV0dG9uVmFsdWUgc2V0dGluZ3NcIiwgc2V0dGluZ3MpXG4gIGNvbnN0IGlzU2VsZWN0ZWQgPSBpc01hdGNoaW5nKHNlbGVjdGVkT3B0aW9ucywgb3B0aW9uT2JqKVxuICBjb25zdCBib3JkZXIgPSBpc1NlbGVjdGVkID8gXCIjNDE1YWZmXCIgOiBcIiM2MDYwNjBcIlxuICBjb25zdCBjb2xvciA9IGlzU2VsZWN0ZWQgPyBcIndoaXRlXCIgOiBcImJsYWNrXCJcbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gaXNTZWxlY3RlZCA/IFwiIzQxNWFmZlwiIDogXCJ0cmFuc3BhcmVudFwiXG4gIGNvbnN0IG9wYWNpdHkgPSBpc0F2YWlsYWJsZVRvU2VsZWN0ID8gMSA6IDAuNFxuXG4gIGlmIChzZXR0aW5ncy5zaG93UHJpY2VVbmRlclZhcmlhbnRCdXR0b24gJiYgdG90YWxPcHRpb25zID09PSAxKSB7XG4gICAgdmFyIHZhcmlhbnRPYmplY3QgPSBmaW5kVmFyaWFudEZyb21PcHRpb25PYmplY3Qob3B0aW9uT2JqLCB2YXJpYW50cylcbiAgfSBlbHNlIHtcbiAgICB2YXIgdmFyaWFudE9iamVjdCA9IGZhbHNlXG4gIH1cblxuICBjb25zdCBjb2xvclN3YXRjaE5hbWVzID0gc2V0dGluZ3MuY29sb3JTd2F0Y2hOYW1lc1xuXG4gIGNvbnN0IGRlZmF1bHRWYXJpYW50U3R5bGVzID0gYG1hcmdpbjogMCAxMHB4IDEwcHggMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVyfTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3BhY2l0eTogJHtvcGFjaXR5fTtcbiAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3J9O1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMnM7XG5cdHRleHQtZGVjb3JhdGlvbjogJHshaXNBdmFpbGFibGVJblNob3BpZnkgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJub25lXCJ9O1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGN1cnNvcjogJHtcbiAgICAgICAgIWlzQXZhaWxhYmxlVG9TZWxlY3QgPyBcIm5vdC1hbGxvd2VkXCIgOiAhaXNTZWxlY3RlZCA/IFwicG9pbnRlclwiIDogXCJhdXRvXCJcbiAgICAgIH07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke1xuICAgICAgICAhaXNBdmFpbGFibGVUb1NlbGVjdFxuICAgICAgICAgID8gYmFja2dyb3VuZENvbG9yXG4gICAgICAgICAgOiAhaXNTZWxlY3RlZFxuICAgICAgICAgID8gXCIjZTllOWU5XCJcbiAgICAgICAgICA6IGJhY2tncm91bmRDb2xvclxuICAgICAgfTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogJHshaXNBdmFpbGFibGVJblNob3BpZnkgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJub25lXCJ9O1xuICAgIH1gXG5cbiAgZnVuY3Rpb24gbWF5YmVDb2xvclN3YXRjaGVzKG9wdGlvbk9iaiwgZGVmYXVsdEN1c3RvbVN0eWxlcykge1xuICAgIGNvbnNvbGUubG9nKFwibWF5YmVDb2xvclN3YXRjaGVzIGNvbG9yU3dhdGNoTmFtZXNcIiwgY29sb3JTd2F0Y2hOYW1lcylcbiAgICBjb25zb2xlLmxvZyhcIm1heWJlQ29sb3JTd2F0Y2hlcyBkZWZhdWx0Q3VzdG9tU3R5bGVzXCIsIGRlZmF1bHRDdXN0b21TdHlsZXMpXG4gICAgdmFyIG5hbWVzTG93ZXJDYXNlZCA9IGNvbG9yU3dhdGNoTmFtZXMubWFwKCh2KSA9PiBTdHJpbmcodikudG9Mb3dlckNhc2UoKSlcblxuICAgIGlmIChcbiAgICAgIG5hbWVzTG93ZXJDYXNlZCAmJlxuICAgICAgIW5hbWVzTG93ZXJDYXNlZC5pbmNsdWRlcyhTdHJpbmcob3B0aW9uT2JqLm5hbWUpLnRvTG93ZXJDYXNlKCkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdEN1c3RvbVN0eWxlc1xuICAgIH1cblxuICAgIGxldCB2YXJpYW50VmFsdWUgPSB3cC5ob29rcy5hcHBseUZpbHRlcnMoXG4gICAgICBcInByb2R1Y3QuY29sb3JTd2F0Y2hWYWx1ZVwiLFxuICAgICAgb3B0aW9uT2JqLnZhbHVlXG4gICAgKVxuXG4gICAgaWYgKHZhcmlhbnRWYWx1ZSA9PT0gXCJ3aGl0ZVwiIHx8IHZhcmlhbnRWYWx1ZSA9PT0gXCJXaGl0ZVwiKSB7XG4gICAgICB2YXIgYm9yZGVyID0gaXNTZWxlY3RlZCA/IFwiM3B4IHNvbGlkICMzMzNcIiA6IFwiMXB4IHNvbGlkICMzMzNcIlxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYm9yZGVyID0gaXNTZWxlY3RlZCA/IFwiMXB4IHNvbGlkIFwiICsgdmFyaWFudFZhbHVlIDogXCJub25lXCJcbiAgICB9XG5cbiAgICByZXR1cm4gYFxuICAgICAgICAgbWFyZ2luOiAwIDEwcHggMTBweCAwO1xuICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZhcmlhbnRWYWx1ZX07XG4gICAgICAgICB0ZXh0LWluZGVudDogMTUwJTtcbiAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICBmb250LXNpemU6IDA7XG4gICAgICAgICBvcGFjaXR5OiAke2lzQXZhaWxhYmxlVG9TZWxlY3QgPyAxIDogMC4xfTtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgIGJvcmRlcjogJHtib3JkZXJ9O1xuICAgICAgICAgYm94LXNoYWRvdzogJHtpc1NlbGVjdGVkID8gXCJpbnNldCAwIDAgMHB4IDRweCB3aGl0ZVwiIDogXCJub25lXCJ9O1xuICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4xNXM7XG4gICAgICAgICBsaW5lLWhlaWdodDogMTtcblxuICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgICAgICBjdXJzb3I6ICR7IWlzU2VsZWN0ZWQgPyBcInBvaW50ZXJcIiA6IFwiYXV0b1wifTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICAgICAgIH0gICAgICBcbiAgICAgIGBcbiAgfVxuXG4gIHZhciBQcm9kdWN0VmFyaWFudEJ1dHRvblZhbHVlQnV0dG9uQ1NTID0gY3NzYFxuICAgICR7d3AuaG9va3MuYXBwbHlGaWx0ZXJzKFxuICAgICAgXCJwcm9kdWN0LnZhcmlhbnRTdHlsZXNcIixcbiAgICAgIG1heWJlQ29sb3JTd2F0Y2hlcyhvcHRpb25PYmosIGRlZmF1bHRWYXJpYW50U3R5bGVzKSxcbiAgICAgIG9wdGlvbk9iaixcbiAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICBpc0F2YWlsYWJsZVRvU2VsZWN0XG4gICAgKX1cbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RWYXJpYW50QnV0dG9uVmFsdWVCdXR0b25cbiAgICAgIGRlZmF1bHRTdHlsZXM9e1Byb2R1Y3RWYXJpYW50QnV0dG9uVmFsdWVCdXR0b25DU1N9XG4gICAgICBvblNlbGVjdGlvbj17b25TZWxlY3Rpb259XG4gICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxuICAgICAgaXNBdmFpbGFibGVUb1NlbGVjdD17aXNBdmFpbGFibGVUb1NlbGVjdH1cbiAgICAgIGlzQXZhaWxhYmxlSW5TaG9waWZ5PXtpc0F2YWlsYWJsZUluU2hvcGlmeX1cbiAgICAgIHZhcmlhbnRWYWx1ZT17b3B0aW9uT2JqLnZhbHVlfVxuICAgICAgdmFyaWFudE9iamVjdD17dmFyaWFudE9iamVjdH1cbiAgICAvPlxuICApXG59XG5cbmZ1bmN0aW9uIFByb2R1Y3RWYXJpYW50QnV0dG9uVmFsdWVCdXR0b24oe1xuICBkZWZhdWx0U3R5bGVzLFxuICBvblNlbGVjdGlvbixcbiAgaXNTZWxlY3RlZCxcbiAgaXNBdmFpbGFibGVUb1NlbGVjdCxcbiAgaXNBdmFpbGFibGVJblNob3BpZnksXG4gIHZhcmlhbnRWYWx1ZSxcbiAgdmFyaWFudE9iamVjdCxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjc3M9e2RlZmF1bHRTdHlsZXN9XG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIG9uTW91c2VEb3duPXtvblNlbGVjdGlvbn1cbiAgICAgIGRhdGEtaXMtdmFyaWFudC1zZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgIGRhdGEtaXMtYXZhaWxhYmxlPXtpc0F2YWlsYWJsZVRvU2VsZWN0fVxuICAgICAgZGF0YS1pcy1hdmFpbGFibGUtaW4tc2hvcGlmeT17aXNBdmFpbGFibGVJblNob3BpZnl9XG4gICAgPlxuICAgICAge3dwLmhvb2tzLmFwcGx5RmlsdGVycyhcInByb2R1Y3QudmFyaWFudFZhbHVlXCIsIHZhcmlhbnRWYWx1ZSl9XG5cbiAgICAgIHt2YXJpYW50T2JqZWN0ICYmIChcbiAgICAgICAgPFByb2R1Y3RWYXJpYW50QnV0dG9uUHJpY2UgdmFyaWFudE9iamVjdD17dmFyaWFudE9iamVjdH0gLz5cbiAgICAgICl9XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuZnVuY3Rpb24gUHJvZHVjdFZhcmlhbnRCdXR0b25QcmljZSh7IHZhcmlhbnRPYmplY3QgfSkge1xuICBjb25zdCB2YXJpYW50T2JqZWN0Q1NTID0gY3NzYFxuICAgICYmIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gIGBcblxuICByZXR1cm4gKFxuICAgIDxwIGNzcz17dmFyaWFudE9iamVjdENTU30gY2xhc3NOYW1lPVwid3BzLXZhcmlhbnQtYnV0dG9uLXByaWNlXCI+XG4gICAgICA8UHJpY2UgcHJpY2U9e3ZhcmlhbnRPYmplY3RbMF0ubm9kZS5wcmljZVYyLmFtb3VudH0gLz5cbiAgICA8L3A+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFZhcmlhbnRCdXR0b25WYWx1ZVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function ProductVariantButtonPrice(_ref4) {
  var variantObject = _ref4.variantObject;
  var variantObjectCSS = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
    css: variantObjectCSS,
    className: "wps-variant-button-price"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(Common_pricing__WEBPACK_IMPORTED_MODULE_1__["default"], {
    price: variantObject[0].node.priceV2.amount
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductVariantButtonValue);

/***/ }),

/***/ "./src/components/products/product/buy-button/variant-buttons/variants/index.jsx":
/*!***************************************************************************************!*\
  !*** ./src/components/products/product/buy-button/variant-buttons/variants/index.jsx ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _option_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../option/value */ "./src/components/products/product/buy-button/option/value/index.jsx");
/* harmony import */ var _variant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variant */ "./src/components/products/product/buy-button/variant-buttons/variant/index.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");




function ProductVariantsButtons(_ref) {
  var option = _ref.option,
      selectedOptions = _ref.selectedOptions,
      availableVariants = _ref.availableVariants,
      variants = _ref.variants,
      totalOptions = _ref.totalOptions,
      settings = _ref.settings,
      allSelectableOptions = _ref.allSelectableOptions;
  return option.values.map(function (optionObj) {
    return /*#__PURE__*/React.createElement(_option_value__WEBPACK_IMPORTED_MODULE_0__["default"], {
      selectedOptions: selectedOptions,
      availableVariants: availableVariants,
      optionObj: optionObj,
      key: optionObj.name + optionObj.value,
      variants: variants,
      totalOptions: totalOptions,
      settings: settings,
      allSelectableOptions: allSelectableOptions
    }, /*#__PURE__*/React.createElement(_variant__WEBPACK_IMPORTED_MODULE_1__["default"], null));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ProductVariantsButtons);

/***/ }),

/***/ "./src/components/products/product/buy-button/variant-dropdowns/index.jsx":
/*!********************************************************************************!*\
  !*** ./src/components/products/product/buy-button/variant-dropdowns/index.jsx ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option */ "./src/components/products/product/buy-button/option/index.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");



function ProductVariantDropdowns(_ref) {
  var options = _ref.options,
      availableVariants = _ref.availableVariants,
      selectedOptions = _ref.selectedOptions,
      missingSelections = _ref.missingSelections,
      variants = _ref.variants,
      settings = _ref.settings,
      allSelectableOptions = _ref.allSelectableOptions;
  return /*#__PURE__*/React.createElement("div", {
    className: "wps-component wps-component-products-options",
    "aria-label": "Product Options"
  }, options && options.map(function (option) {
    return /*#__PURE__*/React.createElement(_option__WEBPACK_IMPORTED_MODULE_0__["default"], {
      key: option.name,
      option: option,
      availableVariants: availableVariants,
      selectedOptions: selectedOptions,
      missingSelections: missingSelections,
      variants: variants,
      settings: settings,
      totalOptions: options.length,
      allSelectableOptions: allSelectableOptions
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductVariantDropdowns);

/***/ }),

/***/ "./src/components/products/product/buy-button/wrapper/index.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/products/product/buy-button/wrapper/index.jsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Common_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Common/settings */ "./src/common/settings/index.js");
/* harmony import */ var Common_variants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/variants */ "./src/common/variants/index.js");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/products/product/buy-button/_state/hooks.jsx");
/* harmony import */ var _add_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-button */ "./src/components/products/product/buy-button/add-button/index.jsx");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../options */ "./src/components/products/product/buy-button/options/index.jsx");
/* harmony import */ var _subscriptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subscriptions */ "./src/components/products/product/buy-button/subscriptions/index.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var shopwp = __webpack_require__(/*! ./shopwp-defaults.js */ "./shopwp-defaults.js")["default"];
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");










function ProductBuyButtonWrapper(_ref) {
  var settings = _ref.settings,
      payload = _ref.payload,
      productState = _ref.productState,
      productDispatch = _ref.productDispatch;
  var productBuyButtonState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useProductBuyButtonState)();
  var productBuyButtonDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useProductBuyButtonDispatch)();
  var _wp$element = wp.element,
      useEffect = __webpack_provided_wp_dot_element.useEffect,
      Suspense = __webpack_provided_wp_dot_element.Suspense;
  var isDirectCheckout = (settings.directCheckout || shopwp.general.directCheckout) && shopwp.misc.isPro;

  function isHidingControls() {
    if (settings.linkTo === "none") {
      return false;
    }

    if (settings.isSingular && settings.postId || isDirectCheckout) {
      return false;
    }

    if (settings.linkTo === "shopify" || settings.linkTo === "wordpress" || settings.linkTo === "modal") {
      if (settings.linkWithBuyButton) {
        return false;
      }

      return true;
    }

    return false;
  }

  var buttonText = (0,Common_settings__WEBPACK_IMPORTED_MODULE_0__.getButtonText)(settings, isDirectCheckout, settings.linkWithBuyButton);

  function shouldShowSubscriptions() {
    return shopwp.misc.isPro && shopwp.misc.hasRecharge && settings.subscriptions && settings.linkTo === "none";
  }

  function shouldShowOptions() {
    return productState.hasManyVariants && !isHidingControls();
  }

  function shouldShowQuantity() {
    return settings.hideQuantity === false && !isHidingControls();
  }

  var allSelectableOptions = [];
  payload.variants.edges.forEach(function (element) {
    allSelectableOptions.push({
      availableForSale: element.node.availableForSale,
      id: element.node.id,
      selectedOptions: element.node.selectedOptions
    });
  });
  var availableOptions = (0,Common_variants__WEBPACK_IMPORTED_MODULE_1__.onlyAvailableOptionsFromVariants)(payload.variants, settings.showOutOfStockVariants);
  useEffect(function () {
    var foundVariant = (0,Utils__WEBPACK_IMPORTED_MODULE_2__.findVariantFromSelectedOptions)(payload, productBuyButtonState.selectedOptions);

    if (foundVariant) {
      productDispatch({
        type: "SET_SELECTED_VARIANT",
        payload: foundVariant
      });
      __webpack_provided_wp_dot_hooks.doAction("on.beforeAddToCart", productState);

      if (!foundVariant.node.availableForSale) {
        productBuyButtonDispatch({
          type: "SET_NOTICE",
          payload: {
            type: "warning",
            message: settings.outOfStockNoticeText
          }
        });
      } else {
        productBuyButtonDispatch({
          type: "SET_NOTICE",
          payload: false
        });
      }
    } else {
      productDispatch({
        type: "SET_SELECTED_VARIANT",
        payload: false
      });

      if ((0,Utils__WEBPACK_IMPORTED_MODULE_2__.allOptionsSelectedMatch)(productBuyButtonState.selectedOptions, payload)) {
        productBuyButtonDispatch({
          type: "SET_NOTICE",
          payload: {
            type: "warning",
            message: settings.variantNotAvailableText
          }
        });
      } else {
        productBuyButtonDispatch({
          type: "SET_NOTICE",
          payload: false
        });
      }
    }
  }, [productBuyButtonState.selectedOptions, productDispatch, payload]);
  return /*#__PURE__*/React.createElement(__webpack_provided_wp_dot_element.Fragment, null, shouldShowOptions() ? /*#__PURE__*/React.createElement(_options__WEBPACK_IMPORTED_MODULE_6__["default"], {
    allSelectableOptions: allSelectableOptions,
    missingSelections: productState.missingSelections,
    variantStyle: settings.variantStyle,
    selectedOptions: productBuyButtonState.selectedOptions,
    hasSelections: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(productBuyButtonState.selectedOptions),
    availableOptions: availableOptions,
    variants: payload.variants,
    productDispatch: productDispatch,
    settings: settings,
    isDirectCheckoutOut: productState.isDirectCheckingOut
  }) : null, /*#__PURE__*/React.createElement(Suspense, {
    fallback: "Loading subscriptions"
  }, shouldShowSubscriptions() ? /*#__PURE__*/React.createElement(_subscriptions__WEBPACK_IMPORTED_MODULE_7__["default"], {
    payload: payload,
    settings: settings
  }) : null), /*#__PURE__*/React.createElement(Suspense, {
    fallback: "Loading add button"
  }, /*#__PURE__*/React.createElement(_add_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    shouldShowQuantity: shouldShowQuantity(),
    settings: settings,
    addedToCart: productState.addedToCart,
    hasLink: productState.hasLink,
    payload: payload,
    linkTarget: settings.linkTarget,
    linkTo: settings.linkTo,
    linkWithBuyButton: settings.linkWithBuyButton,
    addToCartButtonColor: settings.addToCartButtonColor,
    addToCartButtonTextColor: settings.addToCartButtonTextColor,
    isDirectCheckout: isDirectCheckout,
    hasManyVariants: productState.hasManyVariants,
    productDispatch: productDispatch,
    buttonText: buttonText,
    quantity: productState.quantity,
    selectedOptions: productBuyButtonState.selectedOptions
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductBuyButtonWrapper);

/***/ })

}]);
//# sourceMappingURL=src_components_products_product_buy-button_index_jsx.shopwp-components.js.map