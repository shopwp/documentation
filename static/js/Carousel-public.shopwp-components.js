"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["Carousel-public"],{

/***/ "./src/components/carousel/arrows.jsx":
/*!********************************************!*\
  !*** ./src/components/carousel/arrows.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultNextArrow": function() { return /* binding */ DefaultNextArrow; },
/* harmony export */   "DefaultPrevArrow": function() { return /* binding */ DefaultPrevArrow; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



function DefaultNextArrow(props) {
  var className = props.className,
      style = props.style,
      onClick = props.onClick;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: _objectSpread(_objectSpread({}, style), {}, {
      display: 'block',
      color: 'inherit'
    }),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    role: "button",
    style: {
      width: '55px',
      height: '55px'
    },
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 192 512"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"
  })));
}

function DefaultPrevArrow(props) {
  var className = props.className,
      style = props.style,
      onClick = props.onClick;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: _objectSpread(_objectSpread({}, style), {}, {
      display: 'block',
      color: 'inherit'
    }),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    style: {
      width: '55px',
      height: '55px'
    },
    role: "button",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 192 512"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z"
  })));
}



/***/ }),

/***/ "./src/components/carousel/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/carousel/index.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var Common_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/css */ "./src/common/css/index.jsx");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var _arrows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./arrows */ "./src/components/carousel/arrows.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");


/** @jsx jsx */










function Carousel(_ref) {
  var children = _ref.children,
      defaultSettings = _ref.defaultSettings,
      customSettings = _ref.customSettings,
      extraCSS = _ref.extraCSS,
      element = _ref.element;
  var CarouselCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.css)("max-width:100%;margin:0 auto;.slick-next,.slick-prev{top:calc(50% - 30px);width:55px;height:55px;background-size:contain;background-position:50% 50%;background-repeat:no-repeat;&:hover,&:focus{opacity:0.7;}&:before{color:black;font-size:35px;content:\"\";}}.slick-prev{left:-55px;}.slick-next{right:-55px;}.slick-slide>div{margin:0 10px;}.slick-dots{margin:0;padding:0;li button:before{width:10px;height:10px;font-size:10px;}}", (0,Common_css__WEBPACK_IMPORTED_MODULE_4__.mq)("large"), "{display:table!important;table-layout:fixed!important;width:100%!important;.slick-prev{left:0;z-index:999;}.slick-next{right:0;z-index:999;}.slick-list{width:75%;margin:0 auto;}}", (0,Common_css__WEBPACK_IMPORTED_MODULE_4__.mq)("medium"), "{.slick-prev,.slick-next{width:35px;height:35px;}};label:CarouselCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJ5QiIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvY2Fyb3VzZWwvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIlxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCJcbmltcG9ydCB7IG1xIH0gZnJvbSBcIkNvbW1vbi9jc3NcIlxuaW1wb3J0IG1lcmdlIGZyb20gXCJsb2Rhc2gvbWVyZ2VcIlxuaW1wb3J0IHsgcmVtb3ZlU2tlbGx5IH0gZnJvbSBcIlV0aWxzXCJcbmltcG9ydCB7IERlZmF1bHRQcmV2QXJyb3csIERlZmF1bHROZXh0QXJyb3cgfSBmcm9tIFwiLi9hcnJvd3NcIlxuXG5mdW5jdGlvbiBDYXJvdXNlbCh7XG4gIGNoaWxkcmVuLFxuICBkZWZhdWx0U2V0dGluZ3MsXG4gIGN1c3RvbVNldHRpbmdzLFxuICBleHRyYUNTUyxcbiAgZWxlbWVudCxcbn0pIHtcbiAgY29uc3QgQ2Fyb3VzZWxDU1MgPSBjc3NgXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLnNsaWNrLW5leHQsXG4gICAgLnNsaWNrLXByZXYge1xuICAgICAgdG9wOiBjYWxjKDUwJSAtIDMwcHgpO1xuICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICB9XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNsaWNrLXByZXYge1xuICAgICAgbGVmdDogLTU1cHg7XG4gICAgfVxuXG4gICAgLnNsaWNrLW5leHQge1xuICAgICAgcmlnaHQ6IC01NXB4O1xuICAgIH1cblxuICAgIC5zbGljay1zbGlkZSA+IGRpdiB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICB9XG5cbiAgICAuc2xpY2stZG90cyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBsaSBidXR0b246YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICR7bXEoXCJsYXJnZVwiKX0ge1xuICAgICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcbiAgICAgIHRhYmxlLWxheW91dDogZml4ZWQgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cbiAgICAgIC5zbGljay1wcmV2IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgfVxuXG4gICAgICAuc2xpY2stbmV4dCB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICB9XG5cbiAgICAgIC5zbGljay1saXN0IHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgJHttcShcIm1lZGl1bVwiKX0ge1xuICAgICAgLnNsaWNrLXByZXYsXG4gICAgICAuc2xpY2stbmV4dCB7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICB9XG4gICAgfVxuICBgXG5cbiAgdmFyIGRlZmF1bHRzID0ge1xuICAgIGRvdHM6IGRlZmF1bHRTZXR0aW5ncy5jYXJvdXNlbERvdHMsXG4gICAgaW5maW5pdGU6IGRlZmF1bHRTZXR0aW5ncy5jYXJvdXNlbEluZmluaXRlLFxuICAgIHNwZWVkOiBkZWZhdWx0U2V0dGluZ3MuY2Fyb3VzZWxTcGVlZCxcbiAgICBzbGlkZXNUb1Nob3c6IGRlZmF1bHRTZXR0aW5ncy5jYXJvdXNlbFNsaWRlc1RvU2hvdyxcbiAgICBzbGlkZXNUb1Njcm9sbDogZGVmYXVsdFNldHRpbmdzLmNhcm91c2VsU2xpZGVzVG9TY3JvbGwsXG4gICAgbmV4dEFycm93OlxuICAgICAgZGVmYXVsdFNldHRpbmdzLmNhcm91c2VsTmV4dEFycm93ICE9PSBmYWxzZSA/IChcbiAgICAgICAgPERlZmF1bHROZXh0QXJyb3cgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIGZhbHNlXG4gICAgICApLFxuICAgIHByZXZBcnJvdzpcbiAgICAgIGRlZmF1bHRTZXR0aW5ncy5jYXJvdXNlbFByZXZBcnJvdyAhPT0gZmFsc2UgPyAoXG4gICAgICAgIDxEZWZhdWx0UHJldkFycm93IC8+XG4gICAgICApIDogKFxuICAgICAgICBmYWxzZVxuICAgICAgKSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbW92ZVNrZWxseShlbGVtZW50KVxuICAgIH0sXG4gIH1cblxuICB2YXIgY29tYmluZWRTZXR0aW5ncyA9IG1lcmdlKGRlZmF1bHRzLCBjdXN0b21TZXR0aW5ncylcblxuICBjb25zdCBzZXR0aW5ncyA9IHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICBcIm1pc2MuY2Fyb3VzZWxTZXR0aW5nc1wiLFxuICAgIGNvbWJpbmVkU2V0dGluZ3NcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9IGNzcz17W0Nhcm91c2VsQ1NTLCBleHRyYUNTU119PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU2xpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iXX0= */"));
  var defaults = {
    dots: defaultSettings.carouselDots,
    infinite: defaultSettings.carouselInfinite,
    speed: defaultSettings.carouselSpeed,
    slidesToShow: defaultSettings.carouselSlidesToShow,
    slidesToScroll: defaultSettings.carouselSlidesToScroll,
    nextArrow: defaultSettings.carouselNextArrow !== false ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_arrows__WEBPACK_IMPORTED_MODULE_7__.DefaultNextArrow, null) : false,
    prevArrow: defaultSettings.carouselPrevArrow !== false ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_arrows__WEBPACK_IMPORTED_MODULE_7__.DefaultPrevArrow, null) : false,
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }],
    onInit: function onInit() {
      (0,Utils__WEBPACK_IMPORTED_MODULE_6__.removeSkelly)(element);
    }
  };
  var combinedSettings = lodash_merge__WEBPACK_IMPORTED_MODULE_5___default()(defaults, customSettings);
  var settings = __webpack_provided_wp_dot_hooks.applyFilters("misc.carouselSettings", combinedSettings);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_slick__WEBPACK_IMPORTED_MODULE_1__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    css: [CarouselCSS, extraCSS, ";label:Carousel;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEkwQiIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvY2Fyb3VzZWwvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIlxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCJcbmltcG9ydCB7IG1xIH0gZnJvbSBcIkNvbW1vbi9jc3NcIlxuaW1wb3J0IG1lcmdlIGZyb20gXCJsb2Rhc2gvbWVyZ2VcIlxuaW1wb3J0IHsgcmVtb3ZlU2tlbGx5IH0gZnJvbSBcIlV0aWxzXCJcbmltcG9ydCB7IERlZmF1bHRQcmV2QXJyb3csIERlZmF1bHROZXh0QXJyb3cgfSBmcm9tIFwiLi9hcnJvd3NcIlxuXG5mdW5jdGlvbiBDYXJvdXNlbCh7XG4gIGNoaWxkcmVuLFxuICBkZWZhdWx0U2V0dGluZ3MsXG4gIGN1c3RvbVNldHRpbmdzLFxuICBleHRyYUNTUyxcbiAgZWxlbWVudCxcbn0pIHtcbiAgY29uc3QgQ2Fyb3VzZWxDU1MgPSBjc3NgXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLnNsaWNrLW5leHQsXG4gICAgLnNsaWNrLXByZXYge1xuICAgICAgdG9wOiBjYWxjKDUwJSAtIDMwcHgpO1xuICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICB9XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNsaWNrLXByZXYge1xuICAgICAgbGVmdDogLTU1cHg7XG4gICAgfVxuXG4gICAgLnNsaWNrLW5leHQge1xuICAgICAgcmlnaHQ6IC01NXB4O1xuICAgIH1cblxuICAgIC5zbGljay1zbGlkZSA+IGRpdiB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICB9XG5cbiAgICAuc2xpY2stZG90cyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBsaSBidXR0b246YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICR7bXEoXCJsYXJnZVwiKX0ge1xuICAgICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcbiAgICAgIHRhYmxlLWxheW91dDogZml4ZWQgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cbiAgICAgIC5zbGljay1wcmV2IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgfVxuXG4gICAgICAuc2xpY2stbmV4dCB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICB9XG5cbiAgICAgIC5zbGljay1saXN0IHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgJHttcShcIm1lZGl1bVwiKX0ge1xuICAgICAgLnNsaWNrLXByZXYsXG4gICAgICAuc2xpY2stbmV4dCB7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICB9XG4gICAgfVxuICBgXG5cbiAgdmFyIGRlZmF1bHRzID0ge1xuICAgIGRvdHM6IGRlZmF1bHRTZXR0aW5ncy5jYXJvdXNlbERvdHMsXG4gICAgaW5maW5pdGU6IGRlZmF1bHRTZXR0aW5ncy5jYXJvdXNlbEluZmluaXRlLFxuICAgIHNwZWVkOiBkZWZhdWx0U2V0dGluZ3MuY2Fyb3VzZWxTcGVlZCxcbiAgICBzbGlkZXNUb1Nob3c6IGRlZmF1bHRTZXR0aW5ncy5jYXJvdXNlbFNsaWRlc1RvU2hvdyxcbiAgICBzbGlkZXNUb1Njcm9sbDogZGVmYXVsdFNldHRpbmdzLmNhcm91c2VsU2xpZGVzVG9TY3JvbGwsXG4gICAgbmV4dEFycm93OlxuICAgICAgZGVmYXVsdFNldHRpbmdzLmNhcm91c2VsTmV4dEFycm93ICE9PSBmYWxzZSA/IChcbiAgICAgICAgPERlZmF1bHROZXh0QXJyb3cgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIGZhbHNlXG4gICAgICApLFxuICAgIHByZXZBcnJvdzpcbiAgICAgIGRlZmF1bHRTZXR0aW5ncy5jYXJvdXNlbFByZXZBcnJvdyAhPT0gZmFsc2UgPyAoXG4gICAgICAgIDxEZWZhdWx0UHJldkFycm93IC8+XG4gICAgICApIDogKFxuICAgICAgICBmYWxzZVxuICAgICAgKSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbW92ZVNrZWxseShlbGVtZW50KVxuICAgIH0sXG4gIH1cblxuICB2YXIgY29tYmluZWRTZXR0aW5ncyA9IG1lcmdlKGRlZmF1bHRzLCBjdXN0b21TZXR0aW5ncylcblxuICBjb25zdCBzZXR0aW5ncyA9IHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcbiAgICBcIm1pc2MuY2Fyb3VzZWxTZXR0aW5nc1wiLFxuICAgIGNvbWJpbmVkU2V0dGluZ3NcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9IGNzcz17W0Nhcm91c2VsQ1NTLCBleHRyYUNTU119PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU2xpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iXX0= */")]
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ })

}]);
//# sourceMappingURL=Carousel-public.shopwp-components.js.map