(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["StorefrontOptions-public"],{

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

/***/ "./src/components/storefront/options/_state/context.js":
/*!*************************************************************!*\
  !*** ./src/components/storefront/options/_state/context.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
var StorefrontOptionsContext = __webpack_provided_wp_dot_element.createContext();
/* harmony default export */ __webpack_exports__["default"] = (StorefrontOptionsContext);

/***/ }),

/***/ "./src/components/storefront/options/_state/initial-state.js":
/*!*******************************************************************!*\
  !*** ./src/components/storefront/options/_state/initial-state.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function StorefrontOptionsInitialState() {
  return {
    isBootstrapping: false,
    filterOptions: []
  };
}

/* harmony default export */ __webpack_exports__["default"] = (StorefrontOptionsInitialState);

/***/ }),

/***/ "./src/components/storefront/options/_state/provider.jsx":
/*!***************************************************************!*\
  !*** ./src/components/storefront/options/_state/provider.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/components/storefront/options/_state/reducer.js");
/* harmony import */ var _initial_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initial-state */ "./src/components/storefront/options/_state/initial-state.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./src/components/storefront/options/_state/context.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");







function StorefrontOptionsProvider(props) {
  var _wp$element$useReduce = __webpack_provided_wp_dot_element.useReducer(_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_initial_state__WEBPACK_IMPORTED_MODULE_3__["default"])(props.options)),
      _wp$element$useReduce2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_wp$element$useReduce, 2),
      state = _wp$element$useReduce2[0],
      dispatch = _wp$element$useReduce2[1];

  var value = __webpack_provided_wp_dot_element.useMemo(function () {
    return [state, dispatch];
  }, [state]);
  return /*#__PURE__*/React.createElement(_context__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: value
  }, props));
}

/* harmony default export */ __webpack_exports__["default"] = (StorefrontOptionsProvider);

/***/ }),

/***/ "./src/components/storefront/options/_state/reducer.js":
/*!*************************************************************!*\
  !*** ./src/components/storefront/options/_state/reducer.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");


function StorefrontOptionsReducer(state, action) {
  switch (action.type) {
    case "SET_IS_BOOTSTRAPPING":
      {
        return (0,Utils__WEBPACK_IMPORTED_MODULE_0__.rSet)("isBootstrapping", action, state);
      }

    case "SET_FILTER_OPTIONS":
      {
        return (0,Utils__WEBPACK_IMPORTED_MODULE_0__.rSet)("filterOptions", action, state);
      }

    default:
      {
        throw new Error("Unhandled action type: ".concat(action.type, " in StorefrontOptionsReducer"));
      }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (StorefrontOptionsReducer);

/***/ }),

/***/ "./src/components/storefront/options/heading/index.jsx":
/*!*************************************************************!*\
  !*** ./src/components/storefront/options/heading/index.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */




var _ref =  false ? 0 : {
  name: "15smrxm-headingCSS",
  styles: "&&{font-size:18px;background-color:#eaeaea;margin:0;padding:10px 15px;border-radius:5px;};label:headingCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zdG9yZWZyb250L29wdGlvbnMvaGVhZGluZy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS3dCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zdG9yZWZyb250L29wdGlvbnMvaGVhZGluZy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IHVzZVBvcnRhbCB9IGZyb20gXCJIb29rc1wiXG5cbmZ1bmN0aW9uIFN0b3JlZnJvbnRGaWx0ZXJPcHRpb25zSGVhZGluZyh7IGRyb3B6b25lLCBzZXR0aW5ncyB9KSB7XG4gIGNvbnN0IGhlYWRpbmdDU1MgPSBjc3NgXG4gICAgJiYge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gIGBcbiAgcmV0dXJuIHVzZVBvcnRhbChcbiAgICA8aDIgY2xhc3NOYW1lPVwid3BzLXN0b3JlZnJvbnQtaGVhZGluZ1wiIGNzcz17aGVhZGluZ0NTU30+XG4gICAgICB7c2V0dGluZ3MuZmlsdGVyQnlMYWJlbFRleHR9XG4gICAgPC9oMj4sXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihkcm9wem9uZSlcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZWZyb250RmlsdGVyT3B0aW9uc0hlYWRpbmdcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function StorefrontFilterOptionsHeading(_ref2) {
  var dropzone = _ref2.dropzone,
      settings = _ref2.settings;
  var headingCSS = _ref;
  return (0,Hooks__WEBPACK_IMPORTED_MODULE_0__.usePortal)((0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
    className: "wps-storefront-heading",
    css: headingCSS
  }, settings.filterByLabelText), document.querySelector(dropzone));
}

/* harmony default export */ __webpack_exports__["default"] = (StorefrontFilterOptionsHeading);

/***/ }),

/***/ "./src/components/storefront/options/index.jsx":
/*!*****************************************************!*\
  !*** ./src/components/storefront/options/index.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/storefront/_state/hooks.jsx");
/* harmony import */ var _state_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_state/provider */ "./src/components/storefront/options/_state/provider.jsx");
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrapper */ "./src/components/storefront/options/wrapper/index.jsx");
/* harmony import */ var Common_selections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/selections */ "./src/common/selections/index.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");







function StorefrontOptions(_ref) {
  var settings = _ref.settings;
  var useEffect = __webpack_provided_wp_dot_element.useEffect;
  var storefrontState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useStorefrontState)();
  var storefrontDispatch = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useStorefrontDispatch)();
  useEffect(function () {
    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(storefrontState.lastSelected)) {
      return;
    }

    var newList = (0,Common_selections__WEBPACK_IMPORTED_MODULE_4__.buildNewSelection)(storefrontState.lastSelected.itemValue, storefrontState.lastSelected.itemType, storefrontState.lastSelected.isSelected, storefrontState.selections);
    storefrontDispatch({
      type: "SET_SELECTIONS",
      payload: (0,Common_selections__WEBPACK_IMPORTED_MODULE_4__.createSelectionsOfType)(storefrontState.lastSelected.itemType, newList)
    });
    storefrontDispatch({
      type: "SET_SELECTED_" + String(storefrontState.lastSelected.itemType).toUpperCase(),
      payload: newList
    });

    if (newList.length) {
      storefrontDispatch({
        type: "SET_HAS_SELECTIONS",
        payload: true
      });
    } else {
      storefrontDispatch({
        type: "SET_HAS_SELECTIONS",
        payload: false
      });
    }
  }, [storefrontState.lastSelected]);
  return /*#__PURE__*/React.createElement(_state_provider__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/React.createElement(_wrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    settings: settings,
    dropzoneHeading: settings.dropzoneHeading
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (StorefrontOptions);

/***/ }),

/***/ "./src/components/storefront/options/wrapper/index.jsx":
/*!*************************************************************!*\
  !*** ./src/components/storefront/options/wrapper/index.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../heading */ "./src/components/storefront/options/heading/index.jsx");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */




var OptionCollections = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | OptionCollections-public */ "OptionCollections-public").then(__webpack_require__.bind(__webpack_require__, /*! ../option-collections */ "./src/components/storefront/options/option-collections/index.jsx"));
});
var OptionTags = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | OptionTags-public */ "OptionTags-public").then(__webpack_require__.bind(__webpack_require__, /*! ../option-tags */ "./src/components/storefront/options/option-tags/index.jsx"));
});
var OptionTypes = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | OptionTypes-public */ "OptionTypes-public").then(__webpack_require__.bind(__webpack_require__, /*! ../option-types */ "./src/components/storefront/options/option-types/index.jsx"));
});
var OptionVendors = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | OptionVendors-public */ "OptionVendors-public").then(__webpack_require__.bind(__webpack_require__, /*! ../option-vendors */ "./src/components/storefront/options/option-vendors/index.jsx"));
});
var OptionPrice = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | OptionPrice-public */ "OptionPrice-public").then(__webpack_require__.bind(__webpack_require__, /*! ../option-price */ "./src/components/storefront/options/option-price/index.jsx"));
});

var _ref =  false ? 0 : {
  name: "1wy0xc7-StorefrontSidebarCSS",
  styles: "margin-bottom:200px;.wps-checkbox-wrapper{align-items:center;margin:0;padding:0 0 0 18px;&:hover{cursor:pointer;background-color:#f0f0f0;label,input{cursor:pointer;}}}.wps-input-value{opacity:1;margin:0;display:block;position:static;width:16px;height:16px;top:0;[disabled],[disabled]+label{opacity:0.5;&:hover{cursor:not-allowed;}}}.wps-input-label{display:flex;flex:1;padding:9px 0;span{flex:1;text-transform:capitalize;margin-bottom:0;margin-left:0;padding:0 0 0 10px;line-height:1;}};label:StorefrontSidebarCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9zdG9yZWZyb250L29wdGlvbnMvd3JhcHBlci9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJrQyIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvc3RvcmVmcm9udC9vcHRpb25zL3dyYXBwZXIvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgU3RvcmVmcm9udEZpbHRlck9wdGlvbnNIZWFkaW5nIGZyb20gXCIuLi9oZWFkaW5nXCJcbmltcG9ydCB7IHVzZVBvcnRhbCB9IGZyb20gXCJIb29rc1wiXG5cbmNvbnN0IE9wdGlvbkNvbGxlY3Rpb25zID0gd3AuZWxlbWVudC5sYXp5KCgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnT3B0aW9uQ29sbGVjdGlvbnMtcHVibGljJyAqLyBcIi4uL29wdGlvbi1jb2xsZWN0aW9uc1wiXG4gIClcbilcblxuY29uc3QgT3B0aW9uVGFncyA9IHdwLmVsZW1lbnQubGF6eSgoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ09wdGlvblRhZ3MtcHVibGljJyAqLyBcIi4uL29wdGlvbi10YWdzXCIpXG4pXG5cbmNvbnN0IE9wdGlvblR5cGVzID0gd3AuZWxlbWVudC5sYXp5KCgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnT3B0aW9uVHlwZXMtcHVibGljJyAqLyBcIi4uL29wdGlvbi10eXBlc1wiKVxuKVxuXG5jb25zdCBPcHRpb25WZW5kb3JzID0gd3AuZWxlbWVudC5sYXp5KCgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnT3B0aW9uVmVuZG9ycy1wdWJsaWMnICovIFwiLi4vb3B0aW9uLXZlbmRvcnNcIilcbilcblxuY29uc3QgT3B0aW9uUHJpY2UgPSB3cC5lbGVtZW50LmxhenkoKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdPcHRpb25QcmljZS1wdWJsaWMnICovIFwiLi4vb3B0aW9uLXByaWNlXCIpXG4pXG5cbmZ1bmN0aW9uIFN0b3JlZnJvbnRPcHRpb25zV3JhcHBlcih7IHNldHRpbmdzLCBkcm9wem9uZUhlYWRpbmcgfSkge1xuICBjb25zdCBTdG9yZWZyb250U2lkZWJhckNTUyA9IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcblxuICAgIC53cHMtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMCAwIDAgMThweDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuXG4gICAgICAgIGxhYmVsLFxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLndwcy1pbnB1dC12YWx1ZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICB0b3A6IDA7XG5cbiAgICAgIFtkaXNhYmxlZF0sXG4gICAgICBbZGlzYWJsZWRdICsgbGFiZWwge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC53cHMtaW5wdXQtbGFiZWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwYWRkaW5nOiA5cHggMDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICB9XG4gICAgfVxuICBgXG5cbiAgcmV0dXJuIHVzZVBvcnRhbChcbiAgICA8PlxuICAgICAge3NldHRpbmdzLnNob3dPcHRpb25zSGVhZGluZyAmJiAoXG4gICAgICAgIDxTdG9yZWZyb250RmlsdGVyT3B0aW9uc0hlYWRpbmdcbiAgICAgICAgICBzZXR0aW5ncz17c2V0dGluZ3N9XG4gICAgICAgICAgZHJvcHpvbmU9e2Ryb3B6b25lSGVhZGluZ31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8YXNpZGUgY2xhc3NOYW1lPVwid3BzLXN0b3JlZnJvbnQtc2lkZWJhclwiIGNzcz17U3RvcmVmcm9udFNpZGViYXJDU1N9PlxuICAgICAgICB7c2V0dGluZ3Muc2hvd0NvbGxlY3Rpb25zICYmIDxPcHRpb25Db2xsZWN0aW9ucyBzZXR0aW5ncz17c2V0dGluZ3N9IC8+fVxuXG4gICAgICAgIHtzZXR0aW5ncy5zaG93UHJpY2UgJiYgPE9wdGlvblByaWNlIHNldHRpbmdzPXtzZXR0aW5nc30gLz59XG5cbiAgICAgICAge3NldHRpbmdzLnNob3dUYWdzICYmIDxPcHRpb25UYWdzIHNldHRpbmdzPXtzZXR0aW5nc30gLz59XG5cbiAgICAgICAge3NldHRpbmdzLnNob3dWZW5kb3JzICYmIDxPcHRpb25WZW5kb3JzIHNldHRpbmdzPXtzZXR0aW5nc30gLz59XG5cbiAgICAgICAge3NldHRpbmdzLnNob3dUeXBlcyAmJiA8T3B0aW9uVHlwZXMgc2V0dGluZ3M9e3NldHRpbmdzfSAvPn1cbiAgICAgIDwvYXNpZGU+XG4gICAgPC8+LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3MuZHJvcHpvbmVPcHRpb25zKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdwLmVsZW1lbnQubWVtbyhTdG9yZWZyb250T3B0aW9uc1dyYXBwZXIpXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function StorefrontOptionsWrapper(_ref2) {
  var settings = _ref2.settings,
      dropzoneHeading = _ref2.dropzoneHeading;
  var StorefrontSidebarCSS = _ref;
  return (0,Hooks__WEBPACK_IMPORTED_MODULE_1__.usePortal)((0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(__webpack_provided_wp_dot_element.Fragment, null, settings.showOptionsHeading && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heading__WEBPACK_IMPORTED_MODULE_0__["default"], {
    settings: settings,
    dropzone: dropzoneHeading
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("aside", {
    className: "wps-storefront-sidebar",
    css: StorefrontSidebarCSS
  }, settings.showCollections && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(OptionCollections, {
    settings: settings
  }), settings.showPrice && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(OptionPrice, {
    settings: settings
  }), settings.showTags && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(OptionTags, {
    settings: settings
  }), settings.showVendors && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(OptionVendors, {
    settings: settings
  }), settings.showTypes && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(OptionTypes, {
    settings: settings
  }))), document.querySelector(settings.dropzoneOptions));
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_provided_wp_dot_element.memo(StorefrontOptionsWrapper));

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
//# sourceMappingURL=StorefrontOptions-public.shopwp-components.js.map