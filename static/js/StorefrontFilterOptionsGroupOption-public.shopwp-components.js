"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["StorefrontFilterOptionsGroupOption-public"],{

/***/ "./src/components/storefront/options/option/index.jsx":
/*!************************************************************!*\
  !*** ./src/components/storefront/options/option/index.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! await-to-js */ "./node_modules/await-to-js/dist/await-to-js.es5.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Api */ "./src/api/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");







var StorefrontFilterOptionsGroup = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | StorefrontFilterOptionsGroup-public */ "StorefrontFilterOptionsGroup-public").then(__webpack_require__.bind(__webpack_require__, /*! ../group */ "./src/components/storefront/options/group/index.jsx"));
});
var StorefrontFilterOptionsGroupItems = __webpack_provided_wp_dot_element.lazy(function () {
  return Promise.all(/*! import() | StorefrontFilterOptionsGroupItems-public */[__webpack_require__.e("vendors-node_modules_lodash_some_js-node_modules_memoize-one_dist_memoize-one_esm_js-node_mod-83571a"), __webpack_require__.e("StorefrontFilterOptionsGroupItems-public")]).then(__webpack_require__.bind(__webpack_require__, /*! ../group-items */ "./src/components/storefront/options/group-items/index.jsx"));
});

function StorefrontFilterOptionsGroupOption(_ref) {
  var queryFn = _ref.queryFn,
      groupType = _ref.groupType,
      heading = _ref.heading,
      _ref$openOnLoad = _ref.openOnLoad,
      openOnLoad = _ref$openOnLoad === void 0 ? false : _ref$openOnLoad,
      _ref$filterName = _ref.filterName,
      filterName = _ref$filterName === void 0 ? false : _ref$filterName,
      noFilterGroupFoundText = _ref.noFilterGroupFoundText;
  var _wp$element = wp.element,
      useState = __webpack_provided_wp_dot_element.useState,
      useEffect = __webpack_provided_wp_dot_element.useEffect;

  var _useState = useState(true),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isLoadingItems = _useState2[0],
      setIsLoadingItems = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      existingItems = _useState6[0],
      setExistingItems = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      filterableValues = _useState8[0],
      setFilterableValues = _useState8[1];

  function onOpen(_x) {
    return _onOpen.apply(this, arguments);
  }

  function _onOpen() {
    _onOpen = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(isOpen) {
      var _yield$to, _yield$to2, err, resp, errorMessage, filterData;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (isOpen) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              if (!existingItems) {
                _context.next = 5;
                break;
              }

              setFilterableValues(existingItems);
              return _context.abrupt("return");

            case 5:
              setIsLoadingItems(true);
              _context.next = 8;
              return (0,await_to_js__WEBPACK_IMPORTED_MODULE_3__["default"])(queryFn());

            case 8:
              _yield$to = _context.sent;
              _yield$to2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_yield$to, 2);
              err = _yield$to2[0];
              resp = _yield$to2[1];
              setIsLoadingItems(false);
              errorMessage = (0,Api__WEBPACK_IMPORTED_MODULE_5__.maybeHandleApiError)(err, resp, false);

              if (!errorMessage) {
                _context.next = 17;
                break;
              }

              setError(errorMessage);
              return _context.abrupt("return");

            case 17:
              if (filterName) {
                filterData = __webpack_provided_wp_dot_hooks.applyFilters(filterName, resp.data);
              } else {
                filterData = resp.data;
              }

              setExistingItems(filterData);
              setFilterableValues(filterData);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onOpen.apply(this, arguments);
  }

  useEffect(function () {
    if (openOnLoad) {
      onOpen(openOnLoad);
    }
  }, []);
  return /*#__PURE__*/React.createElement(StorefrontFilterOptionsGroup, {
    onOpen: onOpen,
    openOnLoad: openOnLoad,
    error: error,
    isLoadingItems: isLoadingItems,
    groupType: groupType,
    noFilterGroupFoundText: noFilterGroupFoundText,
    areFilterOptionsEmpty: lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(filterableValues),
    heading: heading,
    items: /*#__PURE__*/React.createElement(StorefrontFilterOptionsGroupItems, {
      filterOptions: filterableValues,
      itemType: groupType
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (StorefrontFilterOptionsGroupOption);

/***/ })

}]);
//# sourceMappingURL=StorefrontFilterOptionsGroupOption-public.shopwp-components.js.map