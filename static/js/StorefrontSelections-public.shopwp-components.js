(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["StorefrontSelections-public"],{

/***/ "./src/common/selections/index.jsx":
/*!*****************************************!*\
  !*** ./src/common/selections/index.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildNewSelection": function() { return /* binding */ buildNewSelection; },
/* harmony export */   "createSelectionsOfType": function() { return /* binding */ createSelectionsOfType; },
/* harmony export */   "findDeselectedValue": function() { return /* binding */ findDeselectedValue; },
/* harmony export */   "foundDeselectedValue": function() { return /* binding */ foundDeselectedValue; },
/* harmony export */   "getSelectionTypes": function() { return /* binding */ getSelectionTypes; },
/* harmony export */   "isCurrentlySelected": function() { return /* binding */ isCurrentlySelected; },
/* harmony export */   "isSelectionsOfTypeEmpty": function() { return /* binding */ isSelectionsOfTypeEmpty; },
/* harmony export */   "updateSelectionList": function() { return /* binding */ updateSelectionList; }
/* harmony export */ });
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/difference */ "./node_modules/lodash/difference.js");
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_difference__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_hasIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/hasIn */ "./node_modules/lodash/hasIn.js");
/* harmony import */ var lodash_hasIn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_hasIn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");








function lowercaseCurrentList(currentList) {
  if (!currentList) {
    return [];
  }

  return currentList.map(function (name) {
    if (!lodash_isString__WEBPACK_IMPORTED_MODULE_5___default()(name)) {
      return name;
    }

    if (name.includes("gid://")) {
      return name;
    }

    return String(name).toLowerCase();
  });
}

function updateSelectionList(params) {
  if (!params.isSelected) {
    return lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(lowercaseCurrentList(params.currentList), params.selectedValue);
  }

  return lodash_union__WEBPACK_IMPORTED_MODULE_0___default()([params.selectedValue], params.currentList);
}

function isSelectionsOfTypeEmpty(selections, type) {
  return !selections[type];
}

function findDeselectedValue(localSelectedState, globalSelectionsTypeList) {
  return lodash_difference__WEBPACK_IMPORTED_MODULE_2___default()(localSelectedState, globalSelectionsTypeList);
}

function foundDeselectedValue(removedValue, localValue) {
  return removedValue[0] === localValue;
}

function getSelectionTypes(selections) {
  var filterTypes = Object.keys(selections);

  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(filterTypes) || (0,Utils__WEBPACK_IMPORTED_MODULE_6__.objectIsEmpty)(selections)) {
    return [];
  }

  return filterTypes;
}
/*

When selections are removed ...

*/


function isCurrentlySelected(selections, valueSelected, type) {
  var selected = false;

  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(selections)) {
    selected = false;
  } else {
    if (!lodash_hasIn__WEBPACK_IMPORTED_MODULE_4___default()(selections, type)) {
      selected = false;
    } else if (selections[type].find(function (value) {
      return valueSelected === value;
    })) {
      selected = true;
    }
  }

  return selected;
}

function createSelectionsOfType(itemType, typeSelections) {
  var temp = {};
  temp[itemType] = typeSelections;
  return temp;
}

function buildNewSelection(itemValue, itemType, isSelected, existingSelections) {
  for (var prop in existingSelections) {
    if (prop !== itemType) {
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(existingSelections[prop])) {
        delete existingSelections[prop];
      }
    }
  }

  if (itemType === "collections") {
    for (var _prop in existingSelections) {
      if (_prop !== "collections") {
        delete existingSelections[_prop];
      }
    }
  } else {
    for (var _prop2 in existingSelections) {
      if (_prop2 === "collections") {
        delete existingSelections[_prop2];
      }
    }
  }

  if (!itemValue) {
    return updateSelectionList({
      currentList: existingSelections[itemType]
    });
  }

  if (lodash_isString__WEBPACK_IMPORTED_MODULE_5___default()(itemValue)) {
    if (itemValue.includes("gid://")) {
      var newSelectedVal = itemValue;
    } else {
      var newSelectedVal = String(itemValue).toLowerCase();
    }
  } else {
    var newSelectedVal = itemValue;
  }

  return updateSelectionList({
    isSelected: isSelected,
    currentList: existingSelections[itemType],
    selectedValue: newSelectedVal
  });
}



/***/ }),

/***/ "./src/components/storefront/selections/clear.jsx":
/*!********************************************************!*\
  !*** ./src/components/storefront/selections/clear.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorefrontSelectionsClear": function() { return /* binding */ StorefrontSelectionsClear; }
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _items_state_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../items/_state/hooks */ "./src/components/items/_state/hooks.jsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/storefront/_state/hooks.jsx");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */





var _ref =  false ? 0 : {
  name: "1o6q2bz-clearAllCSS",
  styles: "text-decoration:underline;font-size:14px;margin-left:4px;margin-top:0px;position:relative;top:-2px;&:hover{opacity:0.8;cursor:pointer;};label:clearAllCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zdG9yZWZyb250L3NlbGVjdGlvbnMvY2xlYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCd0IiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3N0b3JlZnJvbnQvc2VsZWN0aW9ucy9jbGVhci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgeyB1c2VJdGVtc1N0YXRlLCB1c2VJdGVtc0Rpc3BhdGNoIH0gZnJvbSAnLi4vLi4vaXRlbXMvX3N0YXRlL2hvb2tzJ1xuaW1wb3J0IHsgdXNlU3RvcmVmcm9udFN0YXRlLCB1c2VTdG9yZWZyb250RGlzcGF0Y2ggfSBmcm9tICcuLi9fc3RhdGUvaG9va3MnXG5cbmZ1bmN0aW9uIFN0b3JlZnJvbnRTZWxlY3Rpb25zQ2xlYXIoKSB7XG5cdGNvbnN0IGl0ZW1zU3RhdGUgPSB1c2VJdGVtc1N0YXRlKClcblx0Y29uc3QgaXRlbXNEaXNwYXRjaCA9IHVzZUl0ZW1zRGlzcGF0Y2goKVxuXHRjb25zdCBzdG9yZWZyb250RGlzcGF0Y2ggPSB1c2VTdG9yZWZyb250RGlzcGF0Y2goKVxuXHRjb25zdCBzdG9yZWZyb250U3RhdGUgPSB1c2VTdG9yZWZyb250U3RhdGUoKVxuXG5cdGZ1bmN0aW9uIGNsZWFyQWxsU2VsZWN0aW9ucygpIHtcblx0XHRzdG9yZWZyb250RGlzcGF0Y2goeyB0eXBlOiAnQ0xFQVJfU0VMRUNUSU9OUycgfSlcblx0XHRpdGVtc0Rpc3BhdGNoKHsgdHlwZTogJ1NFVF9RVUVSWV9UWVBFJywgcGF5bG9hZDogJ3Byb2R1Y3RzJyB9KVxuXG5cdFx0aXRlbXNEaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnU0VUX1FVRVJZX1BBUkFNUycsXG5cdFx0XHRwYXlsb2FkOiBpdGVtc1N0YXRlLm9yaWdpbmFsUGFyYW1zLFxuXHRcdH0pXG5cblx0XHRpdGVtc0Rpc3BhdGNoKHsgdHlwZTogJ1NFVF9JU19GRVRDSElOR19ORVcnLCBwYXlsb2FkOiB0cnVlIH0pXG5cdH1cblxuXHRjb25zdCBjbGVhckFsbENTUyA9IGNzc2Bcblx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0bWFyZ2luLWxlZnQ6IDRweDtcblx0XHRtYXJnaW4tdG9wOiAwcHg7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHRvcDogLTJweDtcblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0b3BhY2l0eTogMC44O1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdH1cblx0YFxuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPSd3cHMtZmlsdGVyLXNlbGVjdGlvbnMtY2xlYXInXG5cdFx0XHRvbkNsaWNrPXtjbGVhckFsbFNlbGVjdGlvbnN9XG5cdFx0XHRjc3M9e2NsZWFyQWxsQ1NTfT5cblx0XHRcdHtpdGVtc1N0YXRlLnNldHRpbmdzLmNsZWFyRmlsdGVyU2VsZWN0aW9uc1RleHR9XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IHsgU3RvcmVmcm9udFNlbGVjdGlvbnNDbGVhciB9XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function StorefrontSelectionsClear() {
  var itemsState = (0,_items_state_hooks__WEBPACK_IMPORTED_MODULE_0__.useItemsState)();
  var itemsDispatch = (0,_items_state_hooks__WEBPACK_IMPORTED_MODULE_0__.useItemsDispatch)();
  var storefrontDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useStorefrontDispatch)();
  var storefrontState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useStorefrontState)();

  function clearAllSelections() {
    storefrontDispatch({
      type: 'CLEAR_SELECTIONS'
    });
    itemsDispatch({
      type: 'SET_QUERY_TYPE',
      payload: 'products'
    });
    itemsDispatch({
      type: 'SET_QUERY_PARAMS',
      payload: itemsState.originalParams
    });
    itemsDispatch({
      type: 'SET_IS_FETCHING_NEW',
      payload: true
    });
  }

  var clearAllCSS = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "wps-filter-selections-clear",
    onClick: clearAllSelections,
    css: clearAllCSS
  }, itemsState.settings.clearFilterSelectionsText);
}



/***/ }),

/***/ "./src/components/storefront/selections/index.jsx":
/*!********************************************************!*\
  !*** ./src/components/storefront/selections/index.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper */ "./src/components/storefront/selections/wrapper.jsx");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/storefront/_state/hooks.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");






function StorefrontSelections(_ref) {
  var dropzone = _ref.dropzone;
  var storefrontState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_3__.useStorefrontState)();
  return (0,Hooks__WEBPACK_IMPORTED_MODULE_2__.usePortal)(!(0,Utils__WEBPACK_IMPORTED_MODULE_1__.objectIsEmpty)(storefrontState.selections) ? /*#__PURE__*/React.createElement(_wrapper__WEBPACK_IMPORTED_MODULE_0__.StorefrontSelectionsWrapper, {
    selections: storefrontState.selections
  }) : null, document.querySelector(dropzone));
}

/* harmony default export */ __webpack_exports__["default"] = (StorefrontSelections);

/***/ }),

/***/ "./src/components/storefront/selections/types.jsx":
/*!********************************************************!*\
  !*** ./src/components/storefront/selections/types.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorefrontSelectionsTypes": function() { return /* binding */ StorefrontSelectionsTypes; }
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./values */ "./src/components/storefront/selections/values.jsx");
/* harmony import */ var Common_selections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/selections */ "./src/common/selections/index.jsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/storefront/_state/hooks.jsx");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */







var _ref =  false ? 0 : {
  name: "1q53ro7-filterSelectionGroupCSS",
  styles: "display:flex;flex-wrap:wrap;label:filterSelectionGroupCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zdG9yZWZyb250L3NlbGVjdGlvbnMvdHlwZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNxQyIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvc3RvcmVmcm9udC9zZWxlY3Rpb25zL3R5cGVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHsgU3RvcmVmcm9udFNlbGVjdGlvbnNWYWx1ZXMgfSBmcm9tIFwiLi92YWx1ZXNcIlxuaW1wb3J0IHsgZ2V0U2VsZWN0aW9uVHlwZXMgfSBmcm9tIFwiQ29tbW9uL3NlbGVjdGlvbnNcIlxuaW1wb3J0IHsgdXNlU3RvcmVmcm9udFN0YXRlIH0gZnJvbSBcIi4uL19zdGF0ZS9ob29rc1wiXG5pbXBvcnQgaXNFbXB0eSBmcm9tIFwibG9kYXNoL2lzRW1wdHlcIlxuXG5mdW5jdGlvbiBTdG9yZWZyb250U2VsZWN0aW9uc1R5cGUoeyBzZWxlY3Rpb25UeXBlIH0pIHtcbiAgY29uc3Qgc3RvcmVmcm9udFN0YXRlID0gdXNlU3RvcmVmcm9udFN0YXRlKClcblxuICBjb25zdCBmaWx0ZXJTZWxlY3Rpb25UeXBlQ1NTID0gY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGBcblxuICBjb25zdCBmaWx0ZXJTZWxlY3Rpb25Hcm91cENTUyA9IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgYFxuICByZXR1cm4gIWlzRW1wdHkoc3RvcmVmcm9udFN0YXRlLnNlbGVjdGlvbnNbc2VsZWN0aW9uVHlwZV0pID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3BzLWZpbHRlci1zZWxlY3Rpb24tdHlwZVwiIGNzcz17ZmlsdGVyU2VsZWN0aW9uVHlwZUNTU30+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cIndwcy1zZWxlY3Rpb25zLWdyb3VwIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgIGNzcz17ZmlsdGVyU2VsZWN0aW9uR3JvdXBDU1N9XG4gICAgICA+XG4gICAgICAgIDxTdG9yZWZyb250U2VsZWN0aW9uc1ZhbHVlc1xuICAgICAgICAgIHNlbGVjdGlvblR5cGU9e3NlbGVjdGlvblR5cGV9XG4gICAgICAgICAgdmFscz17c3RvcmVmcm9udFN0YXRlLnNlbGVjdGlvbnNbc2VsZWN0aW9uVHlwZV19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKSA6IG51bGxcbn1cblxuZnVuY3Rpb24gU3RvcmVmcm9udFNlbGVjdGlvbnNUeXBlcyh7IHNlbGVjdGlvbnMgfSkge1xuICBjb25zdCBzZWxlY3Rpb25UeXBlcyA9IGdldFNlbGVjdGlvblR5cGVzKHNlbGVjdGlvbnMpXG5cbiAgcmV0dXJuIHNlbGVjdGlvblR5cGVzLm1hcCgoc2VsZWN0aW9uVHlwZSwgaW5kZXgpID0+IChcbiAgICA8U3RvcmVmcm9udFNlbGVjdGlvbnNUeXBlIGtleT17aW5kZXh9IHNlbGVjdGlvblR5cGU9e3NlbGVjdGlvblR5cGV9IC8+XG4gICkpXG59XG5cbmV4cG9ydCB7IFN0b3JlZnJvbnRTZWxlY3Rpb25zVHlwZXMgfVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 =  false ? 0 : {
  name: "rrtgqc-filterSelectionTypeCSS",
  styles: "margin-bottom:10px;label:filterSelectionTypeCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zdG9yZWZyb250L3NlbGVjdGlvbnMvdHlwZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVvQyIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvc3RvcmVmcm9udC9zZWxlY3Rpb25zL3R5cGVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHsgU3RvcmVmcm9udFNlbGVjdGlvbnNWYWx1ZXMgfSBmcm9tIFwiLi92YWx1ZXNcIlxuaW1wb3J0IHsgZ2V0U2VsZWN0aW9uVHlwZXMgfSBmcm9tIFwiQ29tbW9uL3NlbGVjdGlvbnNcIlxuaW1wb3J0IHsgdXNlU3RvcmVmcm9udFN0YXRlIH0gZnJvbSBcIi4uL19zdGF0ZS9ob29rc1wiXG5pbXBvcnQgaXNFbXB0eSBmcm9tIFwibG9kYXNoL2lzRW1wdHlcIlxuXG5mdW5jdGlvbiBTdG9yZWZyb250U2VsZWN0aW9uc1R5cGUoeyBzZWxlY3Rpb25UeXBlIH0pIHtcbiAgY29uc3Qgc3RvcmVmcm9udFN0YXRlID0gdXNlU3RvcmVmcm9udFN0YXRlKClcblxuICBjb25zdCBmaWx0ZXJTZWxlY3Rpb25UeXBlQ1NTID0gY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGBcblxuICBjb25zdCBmaWx0ZXJTZWxlY3Rpb25Hcm91cENTUyA9IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgYFxuICByZXR1cm4gIWlzRW1wdHkoc3RvcmVmcm9udFN0YXRlLnNlbGVjdGlvbnNbc2VsZWN0aW9uVHlwZV0pID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3BzLWZpbHRlci1zZWxlY3Rpb24tdHlwZVwiIGNzcz17ZmlsdGVyU2VsZWN0aW9uVHlwZUNTU30+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cIndwcy1zZWxlY3Rpb25zLWdyb3VwIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgIGNzcz17ZmlsdGVyU2VsZWN0aW9uR3JvdXBDU1N9XG4gICAgICA+XG4gICAgICAgIDxTdG9yZWZyb250U2VsZWN0aW9uc1ZhbHVlc1xuICAgICAgICAgIHNlbGVjdGlvblR5cGU9e3NlbGVjdGlvblR5cGV9XG4gICAgICAgICAgdmFscz17c3RvcmVmcm9udFN0YXRlLnNlbGVjdGlvbnNbc2VsZWN0aW9uVHlwZV19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKSA6IG51bGxcbn1cblxuZnVuY3Rpb24gU3RvcmVmcm9udFNlbGVjdGlvbnNUeXBlcyh7IHNlbGVjdGlvbnMgfSkge1xuICBjb25zdCBzZWxlY3Rpb25UeXBlcyA9IGdldFNlbGVjdGlvblR5cGVzKHNlbGVjdGlvbnMpXG5cbiAgcmV0dXJuIHNlbGVjdGlvblR5cGVzLm1hcCgoc2VsZWN0aW9uVHlwZSwgaW5kZXgpID0+IChcbiAgICA8U3RvcmVmcm9udFNlbGVjdGlvbnNUeXBlIGtleT17aW5kZXh9IHNlbGVjdGlvblR5cGU9e3NlbGVjdGlvblR5cGV9IC8+XG4gICkpXG59XG5cbmV4cG9ydCB7IFN0b3JlZnJvbnRTZWxlY3Rpb25zVHlwZXMgfVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function StorefrontSelectionsType(_ref3) {
  var selectionType = _ref3.selectionType;
  var storefrontState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_2__.useStorefrontState)();
  var filterSelectionTypeCSS = _ref2;
  var filterSelectionGroupCSS = _ref;
  return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(storefrontState.selections[selectionType]) ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "wps-filter-selection-type",
    css: filterSelectionTypeCSS
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "wps-selections-group align-items-center",
    css: filterSelectionGroupCSS
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(_values__WEBPACK_IMPORTED_MODULE_0__.StorefrontSelectionsValues, {
    selectionType: selectionType,
    vals: storefrontState.selections[selectionType]
  }))) : null;
}

function StorefrontSelectionsTypes(_ref4) {
  var selections = _ref4.selections;
  var selectionTypes = (0,Common_selections__WEBPACK_IMPORTED_MODULE_1__.getSelectionTypes)(selections);
  return selectionTypes.map(function (selectionType, index) {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(StorefrontSelectionsType, {
      key: index,
      selectionType: selectionType
    });
  });
}



/***/ }),

/***/ "./src/components/storefront/selections/values.jsx":
/*!*********************************************************!*\
  !*** ./src/components/storefront/selections/values.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorefrontSelectionsValues": function() { return /* binding */ StorefrontSelectionsValues; }
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Common_icons_icon_remove_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Common/icons/icon-remove.jsx */ "./src/common/icons/icon-remove.jsx");
/* harmony import */ var Common_selections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/selections */ "./src/common/selections/index.jsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/storefront/_state/hooks.jsx");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _items_state_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../items/_state/hooks */ "./src/components/items/_state/hooks.jsx");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */








var _ref =  false ? 0 : {
  name: "1h4ju16-selectionValueCSS",
  styles: "margin-right:8px;margin-bottom:10px;text-transform:capitalize;padding:5px 9px 5px 12px;background:transparent;font-size:14px;position:relative;display:flex;align-items:center;border:1px solid silver;border-radius:4px;&:hover{cursor:pointer;opacity:0.8;}.wps-icon{width:7px;height:7px;display:inline-block;right:2px;position:relative;top:0;margin-left:10px;}.wps-icon svg{width:7px;height:7px;display:inline-block;position:relative;position:absolute;top:0;};label:selectionValueCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zdG9yZWZyb250L3NlbGVjdGlvbnMvdmFsdWVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQytCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zdG9yZWZyb250L3NlbGVjdGlvbnMvdmFsdWVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHsgSWNvblJlbW92ZSB9IGZyb20gXCJDb21tb24vaWNvbnMvaWNvbi1yZW1vdmUuanN4XCJcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdGlvbnNPZlR5cGUsIGJ1aWxkTmV3U2VsZWN0aW9uIH0gZnJvbSBcIkNvbW1vbi9zZWxlY3Rpb25zXCJcbmltcG9ydCB7IHVzZVN0b3JlZnJvbnRTdGF0ZSwgdXNlU3RvcmVmcm9udERpc3BhdGNoIH0gZnJvbSBcIi4uL19zdGF0ZS9ob29rc1wiXG5pbXBvcnQgaXNTdHJpbmcgZnJvbSBcImxvZGFzaC9pc1N0cmluZ1wiXG5pbXBvcnQgeyB1c2VJdGVtc1N0YXRlIH0gZnJvbSBcIi4uLy4uL2l0ZW1zL19zdGF0ZS9ob29rc1wiXG5cbmZ1bmN0aW9uIFN0b3JlZnJvbnRTZWxlY3Rpb25zVmFsdWUoeyBzZWxlY3Rpb25UeXBlLCB2YWwgfSkge1xuICBjb25zdCBzdG9yZWZyb250U3RhdGUgPSB1c2VTdG9yZWZyb250U3RhdGUoKVxuICBjb25zdCBzdG9yZWZyb250RGlzcGF0Y2ggPSB1c2VTdG9yZWZyb250RGlzcGF0Y2goKVxuICBjb25zdCBpdGVtc1N0YXRlID0gdXNlSXRlbXNTdGF0ZSgpXG5cbiAgZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IGJ1aWxkTmV3U2VsZWN0aW9uKFxuICAgICAgdmFsLFxuICAgICAgc2VsZWN0aW9uVHlwZSxcbiAgICAgIGZhbHNlLFxuICAgICAgc3RvcmVmcm9udFN0YXRlLnNlbGVjdGlvbnNcbiAgICApXG5cbiAgICB2YXIgY3JlYXRlZFNlbGVjdGlvbnMgPSBjcmVhdGVTZWxlY3Rpb25zT2ZUeXBlKHNlbGVjdGlvblR5cGUsIG5ld0xpc3QpXG5cbiAgICBzdG9yZWZyb250RGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJTRVRfU0VMRUNUSU9OU1wiLFxuICAgICAgcGF5bG9hZDogY3JlYXRlZFNlbGVjdGlvbnMsXG4gICAgfSlcblxuICAgIHN0b3JlZnJvbnREaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcIlNFVF9TRUxFQ1RFRF9cIiArIFN0cmluZyhzZWxlY3Rpb25UeXBlKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgcGF5bG9hZDogbmV3TGlzdCxcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgc2VsZWN0aW9uVmFsdWVDU1MgPSBjc3NgXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBwYWRkaW5nOiA1cHggOXB4IDVweCAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG5cbiAgICAud3BzLWljb24ge1xuICAgICAgd2lkdGg6IDdweDtcbiAgICAgIGhlaWdodDogN3B4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcmlnaHQ6IDJweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cblxuICAgIC53cHMtaWNvbiBzdmcge1xuICAgICAgd2lkdGg6IDdweDtcbiAgICAgIGhlaWdodDogN3B4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIGNsYXNzTmFtZT1cIndwcy1maWx0ZXItc2VsZWN0aW9uLXZhbHVlIHdwcy1tci0yXCJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBjc3M9e3NlbGVjdGlvblZhbHVlQ1NTfVxuICAgID5cbiAgICAgIHtzZWxlY3Rpb25UeXBlID09PSBcImF2YWlsYWJsZV9mb3Jfc2FsZVwiXG4gICAgICAgID8gaXRlbXNTdGF0ZS5zZXR0aW5ncy5zZWxlY3Rpb25zQXZhaWxhYmxlRm9yU2FsZVRleHRcbiAgICAgICAgOiBpc1N0cmluZyh2YWwpXG4gICAgICAgID8gdmFsXG4gICAgICAgIDogdmFsLmxhYmVsfVxuICAgICAgPEljb25SZW1vdmUgLz5cbiAgICA8L3NwYW4+XG4gIClcbn1cblxuZnVuY3Rpb24gU3RvcmVmcm9udFNlbGVjdGlvbnNWYWx1ZXMoeyBzZWxlY3Rpb25UeXBlLCB2YWxzIH0pIHtcbiAgcmV0dXJuIHZhbHMubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIGl0ZW0gPyAoXG4gICAgICA8U3RvcmVmcm9udFNlbGVjdGlvbnNWYWx1ZVxuICAgICAgICBrZXk9e2lzU3RyaW5nKGl0ZW0pID8gaXRlbSA6IGl0ZW0uaWR9XG4gICAgICAgIHNlbGVjdGlvblR5cGU9e3NlbGVjdGlvblR5cGV9XG4gICAgICAgIHZhbD17aXRlbX1cbiAgICAgIC8+XG4gICAgKSA6IG51bGxcbiAgfSlcbn1cblxuZXhwb3J0IHsgU3RvcmVmcm9udFNlbGVjdGlvbnNWYWx1ZXMgfVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function StorefrontSelectionsValue(_ref2) {
  var selectionType = _ref2.selectionType,
      val = _ref2.val;
  var storefrontState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_2__.useStorefrontState)();
  var storefrontDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_2__.useStorefrontDispatch)();
  var itemsState = (0,_items_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useItemsState)();

  function onClick(e) {
    var newList = (0,Common_selections__WEBPACK_IMPORTED_MODULE_1__.buildNewSelection)(val, selectionType, false, storefrontState.selections);
    var createdSelections = (0,Common_selections__WEBPACK_IMPORTED_MODULE_1__.createSelectionsOfType)(selectionType, newList);
    storefrontDispatch({
      type: "SET_SELECTIONS",
      payload: createdSelections
    });
    storefrontDispatch({
      type: "SET_SELECTED_" + String(selectionType).toUpperCase(),
      payload: newList
    });
  }

  var selectionValueCSS = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
    className: "wps-filter-selection-value wps-mr-2",
    onClick: onClick,
    css: selectionValueCSS
  }, selectionType === "available_for_sale" ? itemsState.settings.selectionsAvailableForSaleText : lodash_isString__WEBPACK_IMPORTED_MODULE_3___default()(val) ? val : val.label, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(Common_icons_icon_remove_jsx__WEBPACK_IMPORTED_MODULE_0__.IconRemove, null));
}

function StorefrontSelectionsValues(_ref3) {
  var selectionType = _ref3.selectionType,
      vals = _ref3.vals;
  return vals.map(function (item) {
    return item ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(StorefrontSelectionsValue, {
      key: lodash_isString__WEBPACK_IMPORTED_MODULE_3___default()(item) ? item : item.id,
      selectionType: selectionType,
      val: item
    }) : null;
  });
}



/***/ }),

/***/ "./src/components/storefront/selections/wrapper.jsx":
/*!**********************************************************!*\
  !*** ./src/components/storefront/selections/wrapper.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorefrontSelectionsWrapper": function() { return /* binding */ StorefrontSelectionsWrapper; }
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ "./src/components/storefront/selections/clear.jsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/components/storefront/selections/types.jsx");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */





var _ref =  false ? 0 : {
  name: "fihllr-StorefrontSelectionsWrapperCSS",
  styles: "display:flex;flex-direction:row;align-items:baseline;flex-wrap:wrap;label:StorefrontSelectionsWrapperCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zdG9yZWZyb250L3NlbGVjdGlvbnMvd3JhcHBlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTTJDIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zdG9yZWZyb250L3NlbGVjdGlvbnMvd3JhcHBlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgeyBTdG9yZWZyb250U2VsZWN0aW9uc0NsZWFyIH0gZnJvbSAnLi9jbGVhcidcbmltcG9ydCB7IFN0b3JlZnJvbnRTZWxlY3Rpb25zVHlwZXMgfSBmcm9tICcuL3R5cGVzJ1xuXG5mdW5jdGlvbiBTdG9yZWZyb250U2VsZWN0aW9uc1dyYXBwZXIoeyBzZWxlY3Rpb25zIH0pIHtcblx0Y29uc3QgU3RvcmVmcm9udFNlbGVjdGlvbnNXcmFwcGVyQ1NTID0gY3NzYFxuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogYmFzZWxpbmU7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRgXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nd3BzLWZpbHRlci1zZWxlY3Rpb25zJyBjc3M9e1N0b3JlZnJvbnRTZWxlY3Rpb25zV3JhcHBlckNTU30+XG5cdFx0XHQ8U3RvcmVmcm9udFNlbGVjdGlvbnNUeXBlcyBzZWxlY3Rpb25zPXtzZWxlY3Rpb25zfSAvPlxuXHRcdFx0PFN0b3JlZnJvbnRTZWxlY3Rpb25zQ2xlYXIgLz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgeyBTdG9yZWZyb250U2VsZWN0aW9uc1dyYXBwZXIgfVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function StorefrontSelectionsWrapper(_ref2) {
  var selections = _ref2.selections;
  var StorefrontSelectionsWrapperCSS = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "wps-filter-selections",
    css: StorefrontSelectionsWrapperCSS
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_types__WEBPACK_IMPORTED_MODULE_1__.StorefrontSelectionsTypes, {
    selections: selections
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_clear__WEBPACK_IMPORTED_MODULE_0__.StorefrontSelectionsClear, null));
}



/***/ }),

/***/ "./node_modules/lodash/difference.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/difference.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseDifference = __webpack_require__(/*! ./_baseDifference */ "./node_modules/lodash/_baseDifference.js"),
    baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js");

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),

/***/ "./node_modules/lodash/union.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/union.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js");

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ })

}]);
//# sourceMappingURL=StorefrontSelections-public.shopwp-components.js.map