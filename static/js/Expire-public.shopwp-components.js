"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["Expire-public"],{

/***/ "./src/components/expire/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/expire/index.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");



function Expire(_ref) {
  var delay = _ref.delay,
      children = _ref.children;
  var _wp$element = wp.element,
      useState = __webpack_provided_wp_dot_element.useState,
      useEffect = __webpack_provided_wp_dot_element.useEffect;

  var _useState = useState(true),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  useEffect(function () {
    setTimeout(function () {
      setVisible(false);
    }, delay);
  }, [delay]);
  return visible ? /*#__PURE__*/React.createElement(__webpack_provided_wp_dot_element.Fragment, null, children) : null;
}

/* harmony default export */ __webpack_exports__["default"] = (Expire);

/***/ })

}]);
//# sourceMappingURL=Expire-public.shopwp-components.js.map