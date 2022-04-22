"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["TranslatorLanguages-public"],{

/***/ "./src/components/translator/languages/index.jsx":
/*!*******************************************************!*\
  !*** ./src/components/translator/languages/index.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _shop_state_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shop/_state/hooks */ "./src/components/shop/_state/hooks.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Api */ "./src/api/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_i18n = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */






var _ref =  false ? 0 : {
  name: "crvxfl-TranslatorCSS",
  styles: "width:250px;max-width:100%;margin:0 5px;label:TranslatorCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy90cmFuc2xhdG9yL2xhbmd1YWdlcy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUzJCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy90cmFuc2xhdG9yL2xhbmd1YWdlcy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiXG5pbXBvcnQgeyB1c2VTaG9wRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vc2hvcC9fc3RhdGUvaG9va3NcIlxuaW1wb3J0IHsgc2FuaXRpemVMYW5ndWFnZXMgfSBmcm9tIFwiQXBpXCJcblxuZnVuY3Rpb24gVHJhbnNsYXRvckxhbmd1YWdlcyh7IHRyYW5zbGF0b3JTdGF0ZSwgdHJhbnNsYXRvckRpc3BhdGNoIH0pIHtcbiAgY29uc3Qgc2hvcERpc3BhdGNoID0gdXNlU2hvcERpc3BhdGNoKClcblxuICBjb25zdCBUcmFuc2xhdG9yQ1NTID0gY3NzYFxuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgYFxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGxhbmcpIHtcbiAgICBpZiAobGFuZykge1xuICAgICAgdHJhbnNsYXRvckRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJTRVRfU0VMRUNURURfTEFOR1VBR0VcIixcbiAgICAgICAgcGF5bG9hZDogbGFuZyxcbiAgICAgIH0pXG5cbiAgICAgIHNob3BEaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwiU0VUX0xBTkdVQUdFXCIsXG4gICAgICAgIHBheWxvYWQ6IGxhbmcudmFsdWUuaXNvQ29kZSxcbiAgICAgIH0pXG5cbiAgICAgIC8vIHNob3BEaXNwYXRjaCh7XG4gICAgICAvLyBcdHR5cGU6ICdTRVRfSVNfRkVUQ0hJTkdfTkVXJyxcbiAgICAgIC8vIFx0cGF5bG9hZDogdHJ1ZSxcbiAgICAgIC8vIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0XG4gICAgICBjc3M9e1RyYW5zbGF0b3JDU1N9XG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICBvcHRpb25zPXtzYW5pdGl6ZUxhbmd1YWdlcyhcbiAgICAgICAgdHJhbnNsYXRvclN0YXRlLnNlbGVjdGVkQ291bnRyeS52YWx1ZS5hdmFpbGFibGVMYW5ndWFnZXNcbiAgICAgICl9XG4gICAgICB2YWx1ZT17dHJhbnNsYXRvclN0YXRlLnNlbGVjdGVkTGFuZ3VhZ2U/LnZhbHVlPy5uYW1lfVxuICAgICAgcGxhY2Vob2xkZXI9e3dwLmkxOG4uX18oXCJTZWxlY3QgbGFuZ3VhZ2UgLi4uXCIsIFwic2hvcFwiKX1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zbGF0b3JMYW5ndWFnZXNcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function TranslatorLanguages(_ref2) {
  var _translatorState$sele, _translatorState$sele2;

  var translatorState = _ref2.translatorState,
      translatorDispatch = _ref2.translatorDispatch;
  var shopDispatch = (0,_shop_state_hooks__WEBPACK_IMPORTED_MODULE_0__.useShopDispatch)();
  var TranslatorCSS = _ref;

  function onChange(lang) {
    if (lang) {
      translatorDispatch({
        type: "SET_SELECTED_LANGUAGE",
        payload: lang
      });
      shopDispatch({
        type: "SET_LANGUAGE",
        payload: lang.value.isoCode
      }); // shopDispatch({
      // 	type: 'SET_IS_FETCHING_NEW',
      // 	payload: true,
      // })
    }
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
    css: TranslatorCSS,
    onChange: onChange,
    options: (0,Api__WEBPACK_IMPORTED_MODULE_1__.sanitizeLanguages)(translatorState.selectedCountry.value.availableLanguages),
    value: (_translatorState$sele = translatorState.selectedLanguage) === null || _translatorState$sele === void 0 ? void 0 : (_translatorState$sele2 = _translatorState$sele.value) === null || _translatorState$sele2 === void 0 ? void 0 : _translatorState$sele2.name,
    placeholder: __webpack_provided_wp_dot_i18n.__("Select language ...", "shop")
  });
}

/* harmony default export */ __webpack_exports__["default"] = (TranslatorLanguages);

/***/ })

}]);
//# sourceMappingURL=TranslatorLanguages-public.shopwp-components.js.map