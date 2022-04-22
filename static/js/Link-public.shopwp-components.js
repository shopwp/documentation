"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["Link-public"],{

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

/***/ })

}]);
//# sourceMappingURL=Link-public.shopwp-components.js.map