"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["TranslatorCountries-public"],{

/***/ "./src/common/translator/index.js":
/*!****************************************!*\
  !*** ./src/common/translator/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findCountryByCode": function() { return /* binding */ findCountryByCode; },
/* harmony export */   "findLanguageByCode": function() { return /* binding */ findLanguageByCode; },
/* harmony export */   "sanitizeLanguages": function() { return /* binding */ sanitizeLanguages; },
/* harmony export */   "sanitizeTranslations": function() { return /* binding */ sanitizeTranslations; }
/* harmony export */ });
/* provided dependency */ var shopwp = __webpack_require__(/*! ./shopwp-defaults.js */ "./shopwp-defaults.js")["default"];
function sanitizeLanguages(rawLanguages) {
  return rawLanguages.map(function (language) {
    return {
      label: language.endonymName,
      value: language
    };
  });
}

function sanitizeTranslations(rawTranslations) {
  return rawTranslations.map(function (translation) {
    translation.flag = shopwp.misc.pluginsDirURL + 'assets/flags/' + translation.isoCode.toLowerCase() + '.svg';
    return {
      label: translation.name,
      value: translation
    };
  });
}

function findCountryByCode(countries) {
  return countries.filter(function (country) {
    return country.value.isoCode === shopwp.general.countryCode;
  });
}

function findLanguageByCode(languages, state) {
  if (!state.selectedLanguage) {
    return false;
  }

  return languages.filter(function (language) {
    return language.isoCode === state.selectedLanguage.value.isoCode;
  });
}



/***/ }),

/***/ "./src/components/translator/countries/index.jsx":
/*!*******************************************************!*\
  !*** ./src/components/translator/countries/index.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var Common_translator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/translator */ "./src/common/translator/index.js");
/* harmony import */ var _shop_state_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shop/_state/hooks */ "./src/components/shop/_state/hooks.js");
/* harmony import */ var _items_state_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../items/_state/hooks */ "./src/components/items/_state/hooks.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_i18n = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */







var _ref =  false ? 0 : {
  name: "crvxfl-TranslatorCSS",
  styles: "width:250px;max-width:100%;margin:0 5px;label:TranslatorCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy90cmFuc2xhdG9yL2NvdW50cmllcy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVzJCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy90cmFuc2xhdG9yL2NvdW50cmllcy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiXG5pbXBvcnQgeyBmaW5kTGFuZ3VhZ2VCeUNvZGUgfSBmcm9tIFwiQ29tbW9uL3RyYW5zbGF0b3JcIlxuaW1wb3J0IHsgdXNlU2hvcERpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL3Nob3AvX3N0YXRlL2hvb2tzXCJcbmltcG9ydCB7IHVzZUl0ZW1zRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vaXRlbXMvX3N0YXRlL2hvb2tzXCJcblxuZnVuY3Rpb24gVHJhbnNsYXRvckNvdW50cmllcyh7IHRyYW5zbGF0b3JTdGF0ZSwgdHJhbnNsYXRvckRpc3BhdGNoIH0pIHtcbiAgY29uc3Qgc2hvcERpc3BhdGNoID0gdXNlU2hvcERpc3BhdGNoKClcbiAgY29uc3QgaXRlbXNEaXNwYXRjaCA9IHVzZUl0ZW1zRGlzcGF0Y2goKVxuXG4gIGNvbnN0IFRyYW5zbGF0b3JDU1MgPSBjc3NgXG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgNXB4O1xuICBgXG5cbiAgZnVuY3Rpb24gb25DaGFuZ2Uoc2VsZWN0ZWRDb3VudHJ5KSB7XG4gICAgaWYgKHNlbGVjdGVkQ291bnRyeSkge1xuICAgICAgdHJhbnNsYXRvckRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJTRVRfU0VMRUNURURfQ09VTlRSWVwiLFxuICAgICAgICBwYXlsb2FkOiBzZWxlY3RlZENvdW50cnksXG4gICAgICB9KVxuXG4gICAgICBzaG9wRGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcIlNFVF9DT1VOVFJZXCIsXG4gICAgICAgIHBheWxvYWQ6IHNlbGVjdGVkQ291bnRyeS52YWx1ZS5pc29Db2RlLFxuICAgICAgfSlcblxuICAgICAgc2hvcERpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJTRVRfQ1VSUkVOQ1lcIixcbiAgICAgICAgcGF5bG9hZDogc2VsZWN0ZWRDb3VudHJ5LnZhbHVlLmN1cnJlbmN5Lmlzb0NvZGUsXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBmb3VuZFNlbGVjdGVkTGFuZ3VhZ2UgPSBmaW5kTGFuZ3VhZ2VCeUNvZGUoXG4gICAgICAgIHNlbGVjdGVkQ291bnRyeS52YWx1ZS5hdmFpbGFibGVMYW5ndWFnZXMsXG4gICAgICAgIHRyYW5zbGF0b3JTdGF0ZVxuICAgICAgKVxuXG4gICAgICBpZiAoIWZvdW5kU2VsZWN0ZWRMYW5ndWFnZS5sZW5ndGgpIHtcbiAgICAgICAgdHJhbnNsYXRvckRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIlNFVF9TRUxFQ1RFRF9MQU5HVUFHRVwiLFxuICAgICAgICAgIHBheWxvYWQ6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgICBvcHRpb246IChwcm92aWRlZCwgc3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByb3ZpZGVkLFxuICAgICAgICBwYWRkaW5nTGVmdDogNjAsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBzdGF0ZS52YWx1ZS5mbGFnICsgXCIpXCIsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcIjM1cHggMjZweFwiLFxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiMTBweCBjZW50ZXJcIixcbiAgICAgIH1cbiAgICB9LFxuICAgIHNpbmdsZVZhbHVlOiAocHJvdmlkZWQsIHN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcm92aWRlZCxcbiAgICAgICAgcGFkZGluZ0xlZnQ6IDMzLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgc3RhdGUuZGF0YS52YWx1ZS5mbGFnICsgXCIpXCIsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcIjI1cHggMjZweFwiLFxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiMHB4IGNlbnRlclwiLFxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTZWxlY3RcbiAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxuICAgICAgY3NzPXtUcmFuc2xhdG9yQ1NTfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgb3B0aW9ucz17dHJhbnNsYXRvclN0YXRlLmF2YWlsYWJsZVRyYW5zbGF0aW9uc31cbiAgICAgIHZhbHVlPXt0cmFuc2xhdG9yU3RhdGUuc2VsZWN0ZWRDb3VudHJ5fVxuICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICB0cmFuc2xhdG9yU3RhdGUuaXNMb2FkaW5nID8gd3AuaTE4bi5fXyhcIkxvYWRpbmcgLi4uIFwiLCBcInNob3B3cFwiKSA6IGZhbHNlXG4gICAgICB9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2xhdG9yQ291bnRyaWVzXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function TranslatorCountries(_ref2) {
  var translatorState = _ref2.translatorState,
      translatorDispatch = _ref2.translatorDispatch;
  var shopDispatch = (0,_shop_state_hooks__WEBPACK_IMPORTED_MODULE_2__.useShopDispatch)();
  var itemsDispatch = (0,_items_state_hooks__WEBPACK_IMPORTED_MODULE_3__.useItemsDispatch)();
  var TranslatorCSS = _ref;

  function onChange(selectedCountry) {
    if (selectedCountry) {
      translatorDispatch({
        type: "SET_SELECTED_COUNTRY",
        payload: selectedCountry
      });
      shopDispatch({
        type: "SET_COUNTRY",
        payload: selectedCountry.value.isoCode
      });
      shopDispatch({
        type: "SET_CURRENCY",
        payload: selectedCountry.value.currency.isoCode
      });
      var foundSelectedLanguage = (0,Common_translator__WEBPACK_IMPORTED_MODULE_1__.findLanguageByCode)(selectedCountry.value.availableLanguages, translatorState);

      if (!foundSelectedLanguage.length) {
        translatorDispatch({
          type: "SET_SELECTED_LANGUAGE",
          payload: false
        });
      }
    }
  }

  var customStyles = {
    option: function option(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        paddingLeft: 60,
        backgroundImage: "url(" + state.value.flag + ")",
        backgroundSize: "35px 26px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "10px center"
      });
    },
    singleValue: function singleValue(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        paddingLeft: 33,
        backgroundImage: "url(" + state.data.value.flag + ")",
        backgroundSize: "25px 26px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0px center"
      });
    }
  };
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    styles: customStyles,
    css: TranslatorCSS,
    onChange: onChange,
    options: translatorState.availableTranslations,
    value: translatorState.selectedCountry,
    placeholder: translatorState.isLoading ? __webpack_provided_wp_dot_i18n.__("Loading ... ", "shopwp") : false
  });
}

/* harmony default export */ __webpack_exports__["default"] = (TranslatorCountries);

/***/ })

}]);
//# sourceMappingURL=TranslatorCountries-public.shopwp-components.js.map