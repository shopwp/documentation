"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["CollectionDescription-public"],{

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

/***/ "./src/components/collections/collection/description/index.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/collections/collection/description/index.jsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var _items_state_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../items/_state/hooks */ "./src/components/items/_state/hooks.jsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/collections/collection/_state/hooks.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");






function CollectionDescription() {
  var itemsState = (0,_items_state_hooks__WEBPACK_IMPORTED_MODULE_2__.useItemsState)();
  var collectionState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_3__.useCollectionState)();
  return (0,Hooks__WEBPACK_IMPORTED_MODULE_0__.usePortal)( /*#__PURE__*/React.createElement("div", {
    itemProp: "description",
    className: "wps-collections-description",
    dangerouslySetInnerHTML: {
      __html: collectionState.payload.descriptionHtml
    }
  }), (0,Utils__WEBPACK_IMPORTED_MODULE_1__.findPortalElement)(itemsState.settings.dropzoneCollectionDescription));
}

/* harmony default export */ __webpack_exports__["default"] = (CollectionDescription);

/***/ })

}]);
//# sourceMappingURL=CollectionDescription-public.shopwp-components.js.map