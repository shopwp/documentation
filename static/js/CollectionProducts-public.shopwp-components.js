"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["CollectionProducts-public"],{

/***/ "./src/components/collections/collection/_state/hooks.js":
/*!***************************************************************!*\
  !*** ./src/components/collections/collection/_state/hooks.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCollectionDispatch": function() { return /* binding */ useCollectionDispatch; },
/* harmony export */   "useCollectionState": function() { return /* binding */ useCollectionState; }
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/components/collections/collection/_state/context.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");


function useCollectionState() {
  var context = __webpack_provided_wp_dot_element.useContext(_context__WEBPACK_IMPORTED_MODULE_0__.CollectionStateContext);

  if (!context) {
    throw new Error("useCollectionState must be used within the CollectionProvider");
  }

  return context;
}

function useCollectionDispatch() {
  var context = __webpack_provided_wp_dot_element.useContext(_context__WEBPACK_IMPORTED_MODULE_0__.CollectionDispatchContext);

  if (!context) {
    throw new Error("useCollectionDispatch must be used within the CollectionProvider");
  }

  return context;
}



/***/ }),

/***/ "./src/components/collections/collection/products/api.jsx":
/*!****************************************************************!*\
  !*** ./src/components/collections/collection/products/api.jsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useGetCollectionProductsQuery": function() { return /* binding */ useGetCollectionProductsQuery; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Api */ "./src/api/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






function useGetCollectionProductsQuery(state, dispatch, shopState) {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(["fetchProductsByCollections", state.productQueryParams], function () {
    dispatch({
      type: "SET_IS_LOADING",
      payload: true
    });
    return (0,Api__WEBPACK_IMPORTED_MODULE_1__.fetchProductsByCollections)(state.productQueryParams, shopState);
  }, _objectSpread({
    enabled: state.isFetchingNew,
    retry: false,
    onError: function onError(error) {
      dispatch({
        type: "SET_IS_LOADING",
        payload: false
      });
      dispatch({
        type: "SET_IS_FETCHING_NEW",
        payload: false
      });
      console.error("ShopWP Error", error);
    },
    onSuccess: function onSuccess(newItems) {
      var error = (0,Api__WEBPACK_IMPORTED_MODULE_1__.maybeHandleApiError)(false, newItems, dispatch);

      if (error) {
        dispatch({
          type: "SET_PRODUCTS",
          payload: []
        });
        return;
      }

      if (!newItems || lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(newItems) || lodash_has__WEBPACK_IMPORTED_MODULE_4___default()(newItems, "edges") && (!newItems.edges || !newItems.edges.length)) {
        dispatch({
          type: "SET_PRODUCTS",
          payload: []
        });
      } else {
        dispatch({
          type: "SET_PRODUCTS",
          payload: newItems.edges
        });
      }

      dispatch({
        type: "SET_IS_LOADING",
        payload: false
      });
      dispatch({
        type: "SET_IS_FETCHING_NEW",
        payload: false
      });
    }
  }, Api__WEBPACK_IMPORTED_MODULE_1__.queryOptionsNoRefetch));
}



/***/ }),

/***/ "./src/components/collections/collection/products/index.jsx":
/*!******************************************************************!*\
  !*** ./src/components/collections/collection/products/index.jsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../products */ "./src/components/products/index.jsx");
/* harmony import */ var _sorting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sorting */ "./src/components/collections/collection/products/sorting.jsx");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* harmony import */ var _items_state_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../items/_state/hooks */ "./src/components/items/_state/hooks.jsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/collections/collection/_state/hooks.js");
/* harmony import */ var _shop_state_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shop/_state/hooks */ "./src/components/shop/_state/hooks.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api */ "./src/components/collections/collection/products/api.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");









function CollectionProducts() {
  var collectionState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useCollectionState)();
  var collectionDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useCollectionDispatch)();
  var itemsState = (0,_items_state_hooks__WEBPACK_IMPORTED_MODULE_3__.useItemsState)();
  var shopState = (0,_shop_state_hooks__WEBPACK_IMPORTED_MODULE_5__.useShopState)();
  (0,_api__WEBPACK_IMPORTED_MODULE_6__.useGetCollectionProductsQuery)(collectionState, collectionDispatch, shopState);
  return /*#__PURE__*/React.createElement(__webpack_provided_wp_dot_element.Fragment, null, /*#__PURE__*/React.createElement(_products__WEBPACK_IMPORTED_MODULE_0__["default"], {
    settings: collectionState.productOptions.settings,
    element: collectionState.productOptions.element,
    queryType: collectionState.productOptions.queryType,
    id: collectionState.productOptions.id,
    isLoading: collectionState.isLoading,
    payload: collectionState.products,
    queryParams: collectionState.productQueryParams,
    initialFetch: false
  }), itemsState.settings.sorting ? (0,Hooks__WEBPACK_IMPORTED_MODULE_2__.usePortal)( /*#__PURE__*/React.createElement(_sorting__WEBPACK_IMPORTED_MODULE_1__["default"], {
    settings: itemsState.settings
  }), collectionState.productOptions.sortingElement) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (CollectionProducts);

/***/ }),

/***/ "./src/components/collections/collection/products/sorting.jsx":
/*!********************************************************************!*\
  !*** ./src/components/collections/collection/products/sorting.jsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _storefront_selects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../storefront/selects */ "./src/components/storefront/selects/index.jsx");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../loader */ "./src/components/loader/index.jsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/collections/collection/_state/hooks.js");
/* provided dependency */ var __webpack_provided_wp_dot_i18n = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */







var _ref =  false ? 0 : {
  name: "y0nm4u-CollectionsSortingWrapperCSS",
  styles: "width:100%;display:flex;align-items:flex-end;justify-content:flex-end;margin-bottom:20px;align-items:baseline;#swp-collections-sorting *:hover{cursor:pointer;};label:CollectionsSortingWrapperCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jb2xsZWN0aW9ucy9jb2xsZWN0aW9uL3Byb2R1Y3RzL3NvcnRpbmcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVcwQyIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvY29sbGVjdGlvbnMvY29sbGVjdGlvbi9wcm9kdWN0cy9zb3J0aW5nLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IFNlbGVjdHMgZnJvbSBcIi4uLy4uLy4uL3N0b3JlZnJvbnQvc2VsZWN0c1wiXG5pbXBvcnQgeyBmaW5kRGVmYXVsdFNlbGVjdFZhbCwgdXBkYXRlUXVlcnlQYXJhbXNXaXRoU29ydCB9IGZyb20gXCJVdGlsc1wiXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi8uLi9sb2FkZXJcIlxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvblN0YXRlLCB1c2VDb2xsZWN0aW9uRGlzcGF0Y2ggfSBmcm9tIFwiLi4vX3N0YXRlL2hvb2tzXCJcblxuZnVuY3Rpb24gQ29sbGVjdGlvblNvcnRpbmcoeyBzZXR0aW5ncyB9KSB7XG4gIGNvbnN0IGNvbGxlY3Rpb25EaXNwYXRjaCA9IHVzZUNvbGxlY3Rpb25EaXNwYXRjaCgpXG4gIGNvbnN0IGNvbGxlY3Rpb25TdGF0ZSA9IHVzZUNvbGxlY3Rpb25TdGF0ZSgpXG5cbiAgY29uc3QgQ29sbGVjdGlvbnNTb3J0aW5nV3JhcHBlckNTUyA9IGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuXG4gICAgI3N3cC1jb2xsZWN0aW9ucy1zb3J0aW5nICo6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgYFxuXG4gIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiVGl0bGUgKEEtWilcIixcbiAgICAgIHZhbHVlOiBcIlRJVExFXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJUaXRsZSAoWi1BKVwiLFxuICAgICAgdmFsdWU6IFwiVElUTEUtUkVWRVJTRVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiUHJpY2UgKExvdyB0byBoaWdoKVwiLFxuICAgICAgdmFsdWU6IFwiUFJJQ0VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlByaWNlIChoaWdoIHRvIGxvdylcIixcbiAgICAgIHZhbHVlOiBcIlBSSUNFLVJFVkVSU0VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkJlc3QgU2VsbGluZ1wiLFxuICAgICAgdmFsdWU6IFwiQkVTVF9TRUxMSU5HXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJSZWNlbnRseSBBZGRlZFwiLFxuICAgICAgdmFsdWU6IFwiQ1JFQVRFRFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiQ29sbGVjdGlvbiBkZWZhdWx0XCIsXG4gICAgICB2YWx1ZTogXCJDT0xMRUNUSU9OX0RFRkFVTFRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIk1hbnVhbFwiLFxuICAgICAgdmFsdWU6IFwiTUFOVUFMXCIsXG4gICAgfSxcbiAgXVxuXG4gIGZ1bmN0aW9uIGN1c3RvbU9uQ2hhbmdlKGRhdGEpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB1cGRhdGVRdWVyeVBhcmFtc1dpdGhTb3J0KGRhdGEudmFsdWUpXG5cbiAgICBjb25zdCBmaW5hbE5ld1BhcmFtcyA9IHtcbiAgICAgIC4uLmNvbGxlY3Rpb25TdGF0ZS5wcm9kdWN0UXVlcnlQYXJhbXMsXG4gICAgICAuLi5wYXJhbXMsXG4gICAgfVxuXG4gICAgY29sbGVjdGlvbkRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFwiU0VUX1BST0RVQ1RfUVVFUllfUEFSQU1TXCIsXG4gICAgICBwYXlsb2FkOiBmaW5hbE5ld1BhcmFtcyxcbiAgICB9KVxuXG4gICAgY29sbGVjdGlvbkRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFwiU0VUX0lTX0ZFVENISU5HX05FV1wiLFxuICAgICAgcGF5bG9hZDogdHJ1ZSxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17Q29sbGVjdGlvbnNTb3J0aW5nV3JhcHBlckNTU30+XG4gICAgICB7Y29sbGVjdGlvblN0YXRlLmlzTG9hZGluZyAmJiA8TG9hZGVyIGNvbG9yPVwiIzAwMFwiIC8+fVxuICAgICAgPFNlbGVjdHNcbiAgICAgICAgbGFiZWxUZXh0PXt3cC5pMThuLl9fKFwiU29ydCBieTpcIiwgXCJzaG9wd3BcIil9XG4gICAgICAgIHNlbGVjdElkPVwic3dwLWNvbGxlY3Rpb25zLXNvcnRpbmdcIlxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICBjdXN0b21PbkNoYW5nZT17Y3VzdG9tT25DaGFuZ2V9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZmluZERlZmF1bHRTZWxlY3RWYWwoXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBzZXR0aW5ncy5zb3J0QnksXG4gICAgICAgICAgc2V0dGluZ3MucmV2ZXJzZVxuICAgICAgICApfVxuICAgICAgICBpc0xvYWRpbmc9e2NvbGxlY3Rpb25TdGF0ZS5pc0xvYWRpbmd9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25Tb3J0aW5nXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function CollectionSorting(_ref2) {
  var settings = _ref2.settings;
  var collectionDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useCollectionDispatch)();
  var collectionState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useCollectionState)();
  var CollectionsSortingWrapperCSS = _ref;
  var options = [{
    label: "Title (A-Z)",
    value: "TITLE"
  }, {
    label: "Title (Z-A)",
    value: "TITLE-REVERSE"
  }, {
    label: "Price (Low to high)",
    value: "PRICE"
  }, {
    label: "Price (high to low)",
    value: "PRICE-REVERSE"
  }, {
    label: "Best Selling",
    value: "BEST_SELLING"
  }, {
    label: "Recently Added",
    value: "CREATED"
  }, {
    label: "Collection default",
    value: "COLLECTION_DEFAULT"
  }, {
    label: "Manual",
    value: "MANUAL"
  }];

  function customOnChange(data) {
    var params = (0,Utils__WEBPACK_IMPORTED_MODULE_2__.updateQueryParamsWithSort)(data.value);

    var finalNewParams = _objectSpread(_objectSpread({}, collectionState.productQueryParams), params);

    collectionDispatch({
      type: "SET_PRODUCT_QUERY_PARAMS",
      payload: finalNewParams
    });
    collectionDispatch({
      type: "SET_IS_FETCHING_NEW",
      payload: true
    });
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    css: CollectionsSortingWrapperCSS
  }, collectionState.isLoading && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "#000"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storefront_selects__WEBPACK_IMPORTED_MODULE_1__["default"], {
    labelText: __webpack_provided_wp_dot_i18n.__("Sort by:", "shopwp"),
    selectId: "swp-collections-sorting",
    options: options,
    customOnChange: customOnChange,
    defaultValue: (0,Utils__WEBPACK_IMPORTED_MODULE_2__.findDefaultSelectVal)(options, settings.sortBy, settings.reverse),
    isLoading: collectionState.isLoading
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CollectionSorting);

/***/ })

}]);
//# sourceMappingURL=CollectionProducts-public.shopwp-components.js.map