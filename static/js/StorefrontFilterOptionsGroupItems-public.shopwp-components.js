"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["StorefrontFilterOptionsGroupItems-public"],{

/***/ "./src/components/storefront/options/group-item-value/index.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/storefront/options/group-item-value/index.jsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/some */ "./node_modules/lodash/some.js");
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_some__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_state/hooks */ "./src/components/storefront/_state/hooks.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");






function CheckboxItem(_ref) {
  var itemValue = _ref.itemValue,
      itemType = _ref.itemType,
      storefrontDispatch = _ref.storefrontDispatch,
      isLoading = _ref.isLoading,
      initialSelections = _ref.initialSelections;
  var _wp$element = wp.element,
      useState = __webpack_provided_wp_dot_element.useState,
      useEffect = __webpack_provided_wp_dot_element.useEffect;

  var _useState = useState(function () {
    var stuff = initialSelections[itemType];

    if (itemType === "collections") {
      return;
    }

    if (stuff && stuff.length && itemValue) {
      return stuff.includes(String(itemValue).toLowerCase());
    }

    return false;
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isSelected = _useState2[0],
      setIsSelected = _useState2[1];

  var itemLabel = itemType === "collections" ? itemValue.label : itemValue;
  var state = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_3__.useStorefrontState)();

  function onClick() {
    if (isLoading) {
      return;
    }

    var settingThis = {
      itemValue: itemValue,
      itemType: itemType,
      isSelected: !isSelected
    };
    setIsSelected(!isSelected);
    storefrontDispatch({
      type: "SET_LAST_SELECTED",
      payload: settingThis
    });
  }

  useEffect(function () {
    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(state.selections)) {
      setIsSelected(false);
    }

    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(state.selections[itemType])) {
      setIsSelected(false);
    }

    if (itemType === "collections") {
      var found = lodash_some__WEBPACK_IMPORTED_MODULE_2___default()(state.selections[itemType], itemValue);
    } else {
      if (state.selections[itemType] && itemValue) {
        if (state.selections[itemType].length) {
          var found = state.selections[itemType].includes(String(itemValue).toLowerCase());
        } else {
          var found = isSelected;
        }
      } else {
        var found = isSelected;
      }
    }

    if (!found) {
      setIsSelected(false);
    }
  }, [state.selections]);
  return /*#__PURE__*/React.createElement("li", {
    "data-wps-is-selected": isSelected,
    "data-wps-filter-value": itemLabel,
    "data-wps-display-style": "checkbox",
    className: "wps-checkbox-wrapper"
  }, /*#__PURE__*/React.createElement("label", {
    className: "wps-input-label"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    onChange: onClick,
    disabled: isLoading,
    checked: isSelected ? "checked" : "",
    className: "wps-input-value"
  }), itemLabel && /*#__PURE__*/React.createElement("span", null, itemLabel)));
}

/* harmony default export */ __webpack_exports__["default"] = (CheckboxItem);

/***/ }),

/***/ "./src/components/storefront/options/group-items/index.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/storefront/options/group-items/index.jsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _group_item_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../group-item-value */ "./src/components/storefront/options/group-item-value/index.jsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_state/hooks */ "./src/components/storefront/_state/hooks.jsx");
/* harmony import */ var _items_state_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../items/_state/hooks */ "./src/components/items/_state/hooks.jsx");
/* harmony import */ var react_virtual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-virtual */ "./node_modules/react-virtual/dist/react-virtual.mjs");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");








var Row = __webpack_provided_wp_dot_element.memo(function (_ref) {
  var data = _ref.data,
      index = _ref.index,
      size = _ref.size,
      start = _ref.start;
  var filterOptions = data.filterOptions,
      itemType = data.itemType,
      storefrontDispatch = data.storefrontDispatch,
      isLoading = data.isLoading,
      initialSelections = data.initialSelections;
  var itemValue = filterOptions[index];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "".concat(size, "px"),
      transform: "translateY(".concat(start, "px)")
    }
  }, /*#__PURE__*/React.createElement(_group_item_value__WEBPACK_IMPORTED_MODULE_2__["default"], {
    itemType: itemType,
    itemValue: itemValue,
    storefrontDispatch: storefrontDispatch,
    isLoading: isLoading,
    initialSelections: initialSelections
  }));
});
var createItemData = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (filterOptions, itemType, storefrontDispatch, isLoading, initialSelections) {
  return {
    filterOptions: filterOptions,
    itemType: itemType,
    storefrontDispatch: storefrontDispatch,
    isLoading: isLoading,
    initialSelections: initialSelections
  };
});

function StorefrontFilterOptionsGroupItems(_ref2) {
  var _React$createElement;

  var filterOptions = _ref2.filterOptions,
      itemType = _ref2.itemType;
  var storefrontDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_3__.useStorefrontDispatch)();
  var storefrontState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_3__.useStorefrontState)();
  var useState = __webpack_provided_wp_dot_element.useState;

  var _useState = useState(storefrontState.selections),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 1),
      initialSelections = _useState2[0];

  var itemsState = (0,_items_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useItemsState)();
  var itemData = createItemData(filterOptions, itemType, storefrontDispatch, itemsState.isLoading, initialSelections);
  var parentRef = __webpack_provided_wp_dot_element.useRef();
  var rowVirtualizer = (0,react_virtual__WEBPACK_IMPORTED_MODULE_6__.useVirtual)({
    size: filterOptions.length,
    parentRef: parentRef,
    estimateSize: __webpack_provided_wp_dot_element.useCallback(function () {
      return 30;
    }, [])
  });
  return /*#__PURE__*/React.createElement("ul", (_React$createElement = {
    className: "wps-" + itemType,
    ref: parentRef
  }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "className", "List"), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "style", {
    height: "250px",
    width: "300px",
    overflow: "auto"
  }), _React$createElement), /*#__PURE__*/React.createElement("div", {
    className: "ListInner",
    style: {
      height: "".concat(rowVirtualizer.totalSize, "px"),
      width: "100%",
      position: "relative"
    }
  }, rowVirtualizer.virtualItems.map(function (virtualRow) {
    return /*#__PURE__*/React.createElement(Row, {
      key: virtualRow.index + virtualRow.end,
      data: itemData,
      index: virtualRow.index,
      size: virtualRow.size,
      start: virtualRow.start
    });
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (StorefrontFilterOptionsGroupItems);

/***/ })

}]);
//# sourceMappingURL=StorefrontFilterOptionsGroupItems-public.shopwp-components.js.map