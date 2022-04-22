"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["StorefrontSorting-public"],{

/***/ "./src/components/storefront/sorting/index.jsx":
/*!*****************************************************!*\
  !*** ./src/components/storefront/sorting/index.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _items_state_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../items/_state/hooks */ "./src/components/items/_state/hooks.jsx");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var _selects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selects */ "./src/components/storefront/selects/index.jsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/** @jsx jsx */






function StorefrontSorting(_ref) {
  var isFilteringCollections = _ref.isFilteringCollections;
  var itemsDispatch = (0,_items_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useItemsDispatch)();
  var itemsState = (0,_items_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useItemsState)();
  var options = isFilteringCollections ? itemsState.settings.sortingOptionsCollections : itemsState.settings.sortingOptionsProducts;

  function customOnChange(data) {
    var params = (0,Utils__WEBPACK_IMPORTED_MODULE_2__.updateQueryParamsWithSort)(data.value);
    itemsDispatch({
      type: "SET_QUERY_PARAMS",
      payload: _objectSpread(_objectSpread({}, itemsState.queryParams), params)
    });
    itemsDispatch({
      type: "SET_IS_FETCHING_NEW",
      payload: true
    });
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(_selects__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dropzone: itemsState.settings.dropzoneSorting,
    labelText: itemsState.settings.sortByLabelText,
    selectId: "swp-sortby",
    options: options,
    isLoading: itemsState.isLoading,
    customOnChange: customOnChange,
    defaultValue: (0,Utils__WEBPACK_IMPORTED_MODULE_2__.findDefaultSelectVal)(options, itemsState.settings.sortBy, itemsState.settings.reverse)
  });
}

/* harmony default export */ __webpack_exports__["default"] = (StorefrontSorting);

/***/ })

}]);
//# sourceMappingURL=StorefrontSorting-public.shopwp-components.js.map