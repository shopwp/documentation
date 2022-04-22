"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["ProductImages-public"],{

/***/ "./src/common/images/index.js":
/*!************************************!*\
  !*** ./src/common/images/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCustomCropToImageUrl": function() { return /* binding */ addCustomCropToImageUrl; },
/* harmony export */   "addCustomScaleToImageUrl": function() { return /* binding */ addCustomScaleToImageUrl; },
/* harmony export */   "addCustomSizeToImageUrl": function() { return /* binding */ addCustomSizeToImageUrl; },
/* harmony export */   "addCustomSizingToImageUrl": function() { return /* binding */ addCustomSizingToImageUrl; },
/* harmony export */   "autoWidthAndHeight": function() { return /* binding */ autoWidthAndHeight; },
/* harmony export */   "buildCropFilter": function() { return /* binding */ buildCropFilter; },
/* harmony export */   "buildScaleFilter": function() { return /* binding */ buildScaleFilter; },
/* harmony export */   "buildWidthHeightFilter": function() { return /* binding */ buildWidthHeightFilter; },
/* harmony export */   "doFeaturedSizing": function() { return /* binding */ doFeaturedSizing; },
/* harmony export */   "doThumbnailSizing": function() { return /* binding */ doThumbnailSizing; },
/* harmony export */   "getMediaInfo": function() { return /* binding */ getMediaInfo; },
/* harmony export */   "splitFromExtension": function() { return /* binding */ splitFromExtension; },
/* harmony export */   "splitImageUrl": function() { return /* binding */ splitImageUrl; }
/* harmony export */ });
function isInt(val) {
  return Number.isInteger(val);
}

function isString(val) {
  return typeof val === 'string' || val instanceof String;
}

function explode(value, delimiter) {
  return value.split(delimiter);
}

function getExtension(path) {
  if (!path) {
    return;
  }

  var first = path.split('.');
  var second = first[first.length - 1];
  var third = second.split('?')[0];
  return third;
}
/*

Responsible for splitting image into parts

*/


function splitFromExtension(imageUrl, extension) {
  var delimiter = '.' + extension;
  return explode(imageUrl, delimiter);
}
/*

Responsible for building width and height filter

*/


function buildWidthHeightFilter() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!isInt(width) || width < 0) {
    width = 0;
  }

  if (!isInt(height) || height < 0) {
    height = 0;
  } // Both set


  if (width !== 0 && height !== 0) {
    return '_' + width + 'x' + height;
  } // Only width set


  if (height === 0 && width !== 0) {
    return '_' + width + 'x';
  } // Only height set


  if (width === 0 && height !== 0) {
    return '_x' + height;
  }

  return '';
}
/*

Responsible for taking an $imageUrl and returning its parts.

*/


function splitImageUrl(imageUrl) {
  var extension = getExtension(imageUrl);

  if (!extension) {
    return false;
  }

  var imageParts = splitFromExtension(imageUrl, extension);
  return {
    extension: extension,
    beforeExtension: imageParts[0],
    afterExtension: imageParts[1]
  };
}
/*

Responsible for taking a $crop value and returning the URL string version.

Empty string is no $crop set

*/


function buildCropFilter() {
  var crop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (!crop || !isString(crop) || crop === 'none') {
    return '';
  }

  return '_crop_' + crop;
}
/*

Responsible for taking a $scale value and returning the URL string version.

Empty string is no $scale set

*/


function buildScaleFilter() {
  var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  if (!scale || !isInt(scale) || scale <= 1 || scale > 3) {
    return '';
  }

  return '@' + scale + 'x';
}
/*

Responsible for adding width and height filter to image URL

*/


function addCustomSizeToImageUrl(width, height, imageUrl) {
  var splitParts = splitImageUrl(imageUrl);

  if (splitParts === false) {
    return imageUrl;
  }

  return splitParts.beforeExtension + buildWidthHeightFilter(width, height) + '.' + splitParts.extension + splitParts.afterExtension;
}

function autoWidthAndHeight(settings) {
  if (settings.width) {
    return settings.width === 0 && settings.height === 0;
  }

  return true;
}
/*

Responsible for adding crop filter to image URL

*/


function addCustomCropToImageUrl(settings, imageUrl) {
  var splitParts = splitImageUrl(imageUrl);

  if (splitParts === false || !settings.crop || autoWidthAndHeight(settings)) {
    return imageUrl;
  }

  return splitParts.beforeExtension + buildCropFilter(settings.crop) + '.' + splitParts.extension + splitParts.afterExtension;
}
/*

Responsible for adding scale filter to image URL

*/


function addCustomScaleToImageUrl(settings, imageUrl) {
  var splitParts = splitImageUrl(imageUrl);

  if (splitParts === false || settings.scale <= 1 || settings.scale > 3) {
    return imageUrl;
  }

  return splitParts.beforeExtension + buildScaleFilter(settings.scale) + '.' + splitParts.extension + splitParts.afterExtension;
}

function isPlaceholder(src) {
  if (!src) {
    return false;
  }

  return src.includes('cdn.shopify.com/s/files/1/0533/2089/files/placeholder');
}
/*

$settings is an array with this structure:

[
   'src'			=> 'https://domain.com/s/files/1/1405/0664.jpg',
   'width'		=> 300
   'height'	=> 0
   'crop'		=> 'none'
   'scale'		=> 0
]

*/


function addCustomSizingToImageUrl(settings) {
  if (settings.src && isPlaceholder(settings.src)) {
    return settings.src;
  } // Returns a modified image URL


  return addCustomScaleToImageUrl(settings, addCustomCropToImageUrl(settings, addCustomSizeToImageUrl(settings.width, settings.height, settings.src)));
}

function doFeaturedSizing(src, settings) {
  if (!settings) {
    return src;
  }

  return addCustomSizingToImageUrl({
    src: src,
    width: settings.imagesSizingWidth,
    height: settings.imagesSizingHeight,
    crop: settings.imagesSizingCrop,
    scale: settings.imagesSizingScale
  });
}

function doThumbnailSizing(src, settings) {
  if (!settings) {
    return src;
  }

  return addCustomSizingToImageUrl({
    src: src,
    width: settings.thumbnailImagesSizingWidth,
    height: settings.thumbnailImagesSizingHeight,
    crop: settings.thumbnailImagesSizingCrop,
    scale: settings.thumbnailImagesSizingScale
  });
}

function getMediaInfo(image) {
  var media = {
    id: '',
    data: false
  };

  switch (image.node.mediaContentType) {
    case 'IMAGE':
      media.id = image.node.image.id;
      media.data = image.node.image;
      break;

    case 'VIDEO':
      media.id = image.node.previewImage.id;
      media.data = image.node;
      break;

    case 'EXTERNAL_VIDEO':
      media.id = image.node.id;
      media.data = image.node;
      break;

    default:
      break;
  }

  return media;
}



/***/ }),

/***/ "./src/components/products/product/images/featured/index.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/products/product/images/featured/index.jsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductFeaturedImage": function() { return /* binding */ ProductFeaturedImage; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _gallery_state_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gallery/_state/context */ "./src/components/products/product/images/gallery/_state/context.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image */ "./src/components/products/product/images/image/index.jsx");
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isNull */ "./node_modules/lodash/isNull.js");
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var drift_zoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! drift-zoom */ "./node_modules/drift-zoom/es/Drift.js");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var shopwp = __webpack_require__(/*! ./shopwp-defaults.js */ "./shopwp-defaults.js")["default"];



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */







var ProductImageSoldOutLabel = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | ProductImageSoldOutLabel-public */ "ProductImageSoldOutLabel-public").then(__webpack_require__.bind(__webpack_require__, /*! ../sold-out-label */ "./src/components/products/product/images/sold-out-label/index.jsx"));
});
var ProductImageOnSaleLabel = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | ProductImageOnSaleLabel-public */ "ProductImageOnSaleLabel-public").then(__webpack_require__.bind(__webpack_require__, /*! ../on-sale-label */ "./src/components/products/product/images/on-sale-label/index.jsx"));
});
var ProductFeaturedImageVideo = __webpack_provided_wp_dot_element.lazy(function () {
  return Promise.all(/*! import() | ProductFeaturedImageVideo-public */[__webpack_require__.e("vendors-node_modules_react-player_lazy_index_js"), __webpack_require__.e("ProductFeaturedImageVideo-public")]).then(__webpack_require__.bind(__webpack_require__, /*! ../video */ "./src/components/products/product/images/video/index.jsx"));
});

function destroyDrift(drift) {
  drift.destroy();
  window.Drift = null;
  drift = null;
}

var _ref =  false ? 0 : {
  name: "1w0isq8-paneElementCSS",
  styles: "position:relative;label:paneElementCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2ltYWdlcy9mZWF0dXJlZC9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0c0QiIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC9pbWFnZXMvZmVhdHVyZWQvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgUHJvZHVjdEdhbGxlcnlDb250ZXh0IGZyb20gXCIuLi9nYWxsZXJ5L19zdGF0ZS9jb250ZXh0XCJcbmltcG9ydCBQcm9kdWN0SW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCJcbmltcG9ydCBpc051bGwgZnJvbSBcImxvZGFzaC9pc051bGxcIlxuaW1wb3J0IERyaWZ0IGZyb20gXCJkcmlmdC16b29tXCJcbmltcG9ydCB7IHVzZUZpcnN0UmVuZGVyIH0gZnJvbSBcIkhvb2tzXCJcblxuY29uc3QgUHJvZHVjdEltYWdlU29sZE91dExhYmVsID0gd3AuZWxlbWVudC5sYXp5KCgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnUHJvZHVjdEltYWdlU29sZE91dExhYmVsLXB1YmxpYycgKi8gXCIuLi9zb2xkLW91dC1sYWJlbFwiXG4gIClcbilcblxuY29uc3QgUHJvZHVjdEltYWdlT25TYWxlTGFiZWwgPSB3cC5lbGVtZW50LmxhenkoKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6ICdQcm9kdWN0SW1hZ2VPblNhbGVMYWJlbC1wdWJsaWMnICovIFwiLi4vb24tc2FsZS1sYWJlbFwiXG4gIClcbilcblxuY29uc3QgUHJvZHVjdEZlYXR1cmVkSW1hZ2VWaWRlbyA9IHdwLmVsZW1lbnQubGF6eSgoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ1Byb2R1Y3RGZWF0dXJlZEltYWdlVmlkZW8tcHVibGljJyAqLyBcIi4uL3ZpZGVvXCIpXG4pXG5cbmZ1bmN0aW9uIGRlc3Ryb3lEcmlmdChkcmlmdCkge1xuICBkcmlmdC5kZXN0cm95KClcbiAgd2luZG93LkRyaWZ0ID0gbnVsbFxuICBkcmlmdCA9IG51bGxcbn1cblxuZnVuY3Rpb24gUHJvZHVjdEZlYXR1cmVkSW1hZ2UoeyBzZXR0aW5ncywgcGF5bG9hZCwgaXNPblNhbGUgfSkge1xuICBjb25zdCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSwgU3VzcGVuc2UgfSA9IHdwLmVsZW1lbnRcbiAgY29uc3QgcGFuZUVsZW1lbnQgPSB1c2VSZWYoKVxuICBjb25zdCBpc0ZpcnN0UmVuZGVyID0gdXNlRmlyc3RSZW5kZXIoKVxuICBjb25zdCBbZ2FsbGVyeVN0YXRlLCBnYWxsZXJ5RGlzcGF0Y2hdID0gdXNlQ29udGV4dChQcm9kdWN0R2FsbGVyeUNvbnRleHQpXG4gIGNvbnN0IFtvcmlnaW5hbEZlYXRJbWddID0gdXNlU3RhdGUoZ2FsbGVyeVN0YXRlLmZlYXRJbWFnZSlcblxuICBmdW5jdGlvbiBkcmlmdE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnNldHRpbmdzLmltYWdlWm9vbU9wdGlvbnMsXG4gICAgICBpbmxpbmVDb250YWluZXI6IHBhbmVFbGVtZW50LmN1cnJlbnQsXG4gICAgICBwYW5lQ29udGFpbmVyOiBwYW5lRWxlbWVudC5jdXJyZW50LFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dab29tKCkge1xuICAgIGlmIChzZXR0aW5ncy5saW5rVG8gIT09IFwibm9uZVwiKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoaXNOdWxsKHNldHRpbmdzLnNob3dab29tKSkge1xuICAgICAgcmV0dXJuIHNob3B3cC5nZW5lcmFsLnByb2R1Y3RzSW1hZ2VzU2hvd1pvb21cbiAgICB9XG5cbiAgICByZXR1cm4gc2V0dGluZ3Muc2hvd1pvb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0ZlYXRJbWFnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZ2FsbGVyeVN0YXRlLmZlYXRJbWFnZSAmJlxuICAgICAgZ2FsbGVyeVN0YXRlLmZlYXRJbWFnZUVsZW1lbnQgJiZcbiAgICAgIHBhbmVFbGVtZW50LmN1cnJlbnRcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBmaW5kTmV4dEltYWdlSW5kZXgoKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAwXG4gICAgcGF5bG9hZC5tZWRpYS5lZGdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbWFnZS5ub2RlLm1lZGlhQ29udGVudFR5cGUgPT09IFwiSU1BR0VcIikge1xuICAgICAgICBpZiAoaW1hZ2Uubm9kZS5pbWFnZS5pZCA9PT0gb3JpZ2luYWxGZWF0SW1nLmlkKSB7XG4gICAgICAgICAgZm91bmRJbmRleCA9IGluZGV4ICsgMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBmb3VuZEluZGV4XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSBmaW5kTmV4dEltYWdlSW5kZXgoKVxuXG4gICAgaWYgKGZvdW5kSW5kZXggPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBmb3VuZE5leHRJbWFnZSA9IHBheWxvYWQubWVkaWEuZWRnZXNbZm91bmRJbmRleF0ubm9kZVxuXG4gICAgaWYgKGZvdW5kTmV4dEltYWdlKSB7XG4gICAgICBnYWxsZXJ5RGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcIlNFVF9GRUFUX0lNQUdFXCIsXG4gICAgICAgIHBheWxvYWQ6IGZvdW5kTmV4dEltYWdlLmltYWdlLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7XG4gICAgZ2FsbGVyeURpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFwiU0VUX0ZFQVRfSU1BR0VcIixcbiAgICAgIHBheWxvYWQ6IG9yaWdpbmFsRmVhdEltZyxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgcGFuZUVsZW1lbnRDU1MgPSBjc3NgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBgXG5cbiAgY29uc3QgUHJvZHVjdEltYWdlRmVhdHVyZWRXcmFwcGVyQ1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiAke3NldHRpbmdzLmltYWdlc0FsaWduID09PSBcImxlZnRcIlxuICAgICAgPyBcImZsZXgtc3RhcnRcIlxuICAgICAgOiBzZXR0aW5ncy5pbWFnZXNBbGlnbiA9PT0gXCJyaWdodFwiXG4gICAgICA/IFwiZmxleC1lbmRcIlxuICAgICAgOiBzZXR0aW5ncy5pbWFnZXNBbGlnbn07XG4gIGBcblxuICBjb25zdCBpc091dE9mU3RvY2sgPSBwYXlsb2FkLmF2YWlsYWJsZUZvclNhbGUgPT09IGZhbHNlXG5cbiAgZnVuY3Rpb24gaXNTaG93aW5nTmV4dE9uSG92ZXIoKSB7XG4gICAgaWYgKGdhbGxlcnlTdGF0ZS5mZWF0SW1hZ2VJc1ZpZGVvKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoc2hvd1pvb20oKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHBheWxvYWQubWVkaWEuZWRnZXMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiBzZXR0aW5ncy5pbWFnZXNTaG93TmV4dE9uSG92ZXJcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzaG9wd3AubWlzYy5pc1Bybykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzRmlyc3RSZW5kZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChoYXNGZWF0SW1hZ2UoKSAmJiBzaG93Wm9vbSgpKSB7XG4gICAgICB2YXIgZHJpZnQgPSBuZXcgRHJpZnQoZ2FsbGVyeVN0YXRlLmZlYXRJbWFnZUVsZW1lbnQsIGRyaWZ0T3B0aW9ucygpKVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkZXN0cm95RHJpZnQoZHJpZnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbZ2FsbGVyeVN0YXRlLmZlYXRJbWFnZUVsZW1lbnQsIHNldHRpbmdzLnNob3dab29tXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cIndwcy1nYWxsZXJ5LWZlYXR1cmVkLXdyYXBwZXJcIlxuICAgICAgcmVmPXtwYW5lRWxlbWVudH1cbiAgICAgIGNzcz17cGFuZUVsZW1lbnRDU1N9XG4gICAgICBvbk1vdXNlRW50ZXI9e2lzU2hvd2luZ05leHRPbkhvdmVyKCkgPyBvbk1vdXNlRW50ZXIgOiB1bmRlZmluZWR9XG4gICAgICBvbk1vdXNlTGVhdmU9e2lzU2hvd2luZ05leHRPbkhvdmVyKCkgPyBvbk1vdXNlTGVhdmUgOiB1bmRlZmluZWR9XG4gICAgPlxuICAgICAge2dhbGxlcnlTdGF0ZS5mZWF0SW1hZ2VJc1ZpZGVvID8gKFxuICAgICAgICA8UHJvZHVjdEZlYXR1cmVkSW1hZ2VWaWRlbyB2aWRlb0RhdGE9e2dhbGxlcnlTdGF0ZS5mZWF0SW1hZ2V9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIHtpc09uU2FsZSAmJiBzZXR0aW5ncy5zaG93U2FsZU5vdGljZSAmJiAhaXNPdXRPZlN0b2NrICYmIChcbiAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17ZmFsc2V9PlxuICAgICAgICAgICAgICA8UHJvZHVjdEltYWdlT25TYWxlTGFiZWwgdGV4dD17c2V0dGluZ3Muc2FsZUxhYmVsVGV4dH0gLz5cbiAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtpc091dE9mU3RvY2sgJiZcbiAgICAgICAgICAgIGdhbGxlcnlTdGF0ZS5mZWF0SW1hZ2UgJiZcbiAgICAgICAgICAgIHNldHRpbmdzLnNob3dPdXRPZlN0b2NrTm90aWNlICYmIChcbiAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgPFByb2R1Y3RJbWFnZVNvbGRPdXRMYWJlbFxuICAgICAgICAgICAgICAgICAgdGV4dD17c2V0dGluZ3Muc29sZE91dEltYWdlTGFiZWxUZXh0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndwcy1wcm9kdWN0LWltYWdlLXdyYXBwZXJcIlxuICAgICAgICAgICAgY3NzPXtQcm9kdWN0SW1hZ2VGZWF0dXJlZFdyYXBwZXJDU1N9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2dhbGxlcnlTdGF0ZS5mZWF0SW1hZ2UgPyAoXG4gICAgICAgICAgICAgIDxQcm9kdWN0SW1hZ2VcbiAgICAgICAgICAgICAgICBwYXlsb2FkPXtwYXlsb2FkfVxuICAgICAgICAgICAgICAgIHNldHRpbmdzPXtzZXR0aW5nc31cbiAgICAgICAgICAgICAgICBpc0ZlYXR1cmVkPXt0cnVlfVxuICAgICAgICAgICAgICAgIGltYWdlPXtnYWxsZXJ5U3RhdGUuZmVhdEltYWdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFByb2R1Y3RJbWFnZVxuICAgICAgICAgICAgICAgIHBheWxvYWQ9e3BheWxvYWR9XG4gICAgICAgICAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgICAgICAgICAgIGlzRmVhdHVyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e2dhbGxlcnlTdGF0ZS5mZWF0SW1hZ2VQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJ1ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgeyBQcm9kdWN0RmVhdHVyZWRJbWFnZSB9XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function ProductFeaturedImage(_ref2) {
  var settings = _ref2.settings,
      payload = _ref2.payload,
      isOnSale = _ref2.isOnSale;
  var _wp$element = wp.element,
      useEffect = __webpack_provided_wp_dot_element.useEffect,
      useContext = __webpack_provided_wp_dot_element.useContext,
      useRef = __webpack_provided_wp_dot_element.useRef,
      useState = __webpack_provided_wp_dot_element.useState,
      Suspense = __webpack_provided_wp_dot_element.Suspense;
  var paneElement = useRef();
  var isFirstRender = (0,Hooks__WEBPACK_IMPORTED_MODULE_6__.useFirstRender)();

  var _useContext = useContext(_gallery_state_context__WEBPACK_IMPORTED_MODULE_2__["default"]),
      _useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useContext, 2),
      galleryState = _useContext2[0],
      galleryDispatch = _useContext2[1];

  var _useState = useState(galleryState.featImage),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 1),
      originalFeatImg = _useState2[0];

  function driftOptions() {
    return _objectSpread(_objectSpread({}, settings.imageZoomOptions), {}, {
      inlineContainer: paneElement.current,
      paneContainer: paneElement.current
    });
  }

  function showZoom() {
    if (settings.linkTo !== "none") {
      return false;
    }

    if (lodash_isNull__WEBPACK_IMPORTED_MODULE_4___default()(settings.showZoom)) {
      return shopwp.general.productsImagesShowZoom;
    }

    return settings.showZoom;
  }

  function hasFeatImage() {
    return galleryState.featImage && galleryState.featImageElement && paneElement.current;
  }

  function findNextImageIndex() {
    var foundIndex = 0;
    payload.media.edges.forEach(function (image, index) {
      if (image.node.mediaContentType === "IMAGE") {
        if (image.node.image.id === originalFeatImg.id) {
          foundIndex = index + 1;
        }
      }
    });
    return foundIndex;
  }

  function onMouseEnter() {
    var foundIndex = findNextImageIndex();

    if (foundIndex === 0) {
      return;
    }

    var foundNextImage = payload.media.edges[foundIndex].node;

    if (foundNextImage) {
      galleryDispatch({
        type: "SET_FEAT_IMAGE",
        payload: foundNextImage.image
      });
    }
  }

  function onMouseLeave() {
    galleryDispatch({
      type: "SET_FEAT_IMAGE",
      payload: originalFeatImg
    });
  }

  var paneElementCSS = _ref;
  var ProductImageFeaturedWrapperCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.css)("display:flex;align-items:flex-start;justify-content:", settings.imagesAlign === "left" ? "flex-start" : settings.imagesAlign === "right" ? "flex-end" : settings.imagesAlign, ";;label:ProductImageFeaturedWrapperCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2ltYWdlcy9mZWF0dXJlZC9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEc0QyIsImZpbGUiOiIvVXNlcnMvYW5kcmV3L193d3cvc2hvcHdwL2h0ZG9jcy93cC1jb250ZW50L3BsdWdpbnMvc2hvcHdwLXByby9ucG0tcGFja2FnZXMvc2hvcHdwLWNvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC9pbWFnZXMvZmVhdHVyZWQvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXG5pbXBvcnQgUHJvZHVjdEdhbGxlcnlDb250ZXh0IGZyb20gXCIuLi9nYWxsZXJ5L19zdGF0ZS9jb250ZXh0XCJcbmltcG9ydCBQcm9kdWN0SW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCJcbmltcG9ydCBpc051bGwgZnJvbSBcImxvZGFzaC9pc051bGxcIlxuaW1wb3J0IERyaWZ0IGZyb20gXCJkcmlmdC16b29tXCJcbmltcG9ydCB7IHVzZUZpcnN0UmVuZGVyIH0gZnJvbSBcIkhvb2tzXCJcblxuY29uc3QgUHJvZHVjdEltYWdlU29sZE91dExhYmVsID0gd3AuZWxlbWVudC5sYXp5KCgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnUHJvZHVjdEltYWdlU29sZE91dExhYmVsLXB1YmxpYycgKi8gXCIuLi9zb2xkLW91dC1sYWJlbFwiXG4gIClcbilcblxuY29uc3QgUHJvZHVjdEltYWdlT25TYWxlTGFiZWwgPSB3cC5lbGVtZW50LmxhenkoKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6ICdQcm9kdWN0SW1hZ2VPblNhbGVMYWJlbC1wdWJsaWMnICovIFwiLi4vb24tc2FsZS1sYWJlbFwiXG4gIClcbilcblxuY29uc3QgUHJvZHVjdEZlYXR1cmVkSW1hZ2VWaWRlbyA9IHdwLmVsZW1lbnQubGF6eSgoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ1Byb2R1Y3RGZWF0dXJlZEltYWdlVmlkZW8tcHVibGljJyAqLyBcIi4uL3ZpZGVvXCIpXG4pXG5cbmZ1bmN0aW9uIGRlc3Ryb3lEcmlmdChkcmlmdCkge1xuICBkcmlmdC5kZXN0cm95KClcbiAgd2luZG93LkRyaWZ0ID0gbnVsbFxuICBkcmlmdCA9IG51bGxcbn1cblxuZnVuY3Rpb24gUHJvZHVjdEZlYXR1cmVkSW1hZ2UoeyBzZXR0aW5ncywgcGF5bG9hZCwgaXNPblNhbGUgfSkge1xuICBjb25zdCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSwgU3VzcGVuc2UgfSA9IHdwLmVsZW1lbnRcbiAgY29uc3QgcGFuZUVsZW1lbnQgPSB1c2VSZWYoKVxuICBjb25zdCBpc0ZpcnN0UmVuZGVyID0gdXNlRmlyc3RSZW5kZXIoKVxuICBjb25zdCBbZ2FsbGVyeVN0YXRlLCBnYWxsZXJ5RGlzcGF0Y2hdID0gdXNlQ29udGV4dChQcm9kdWN0R2FsbGVyeUNvbnRleHQpXG4gIGNvbnN0IFtvcmlnaW5hbEZlYXRJbWddID0gdXNlU3RhdGUoZ2FsbGVyeVN0YXRlLmZlYXRJbWFnZSlcblxuICBmdW5jdGlvbiBkcmlmdE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnNldHRpbmdzLmltYWdlWm9vbU9wdGlvbnMsXG4gICAgICBpbmxpbmVDb250YWluZXI6IHBhbmVFbGVtZW50LmN1cnJlbnQsXG4gICAgICBwYW5lQ29udGFpbmVyOiBwYW5lRWxlbWVudC5jdXJyZW50LFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dab29tKCkge1xuICAgIGlmIChzZXR0aW5ncy5saW5rVG8gIT09IFwibm9uZVwiKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoaXNOdWxsKHNldHRpbmdzLnNob3dab29tKSkge1xuICAgICAgcmV0dXJuIHNob3B3cC5nZW5lcmFsLnByb2R1Y3RzSW1hZ2VzU2hvd1pvb21cbiAgICB9XG5cbiAgICByZXR1cm4gc2V0dGluZ3Muc2hvd1pvb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0ZlYXRJbWFnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZ2FsbGVyeVN0YXRlLmZlYXRJbWFnZSAmJlxuICAgICAgZ2FsbGVyeVN0YXRlLmZlYXRJbWFnZUVsZW1lbnQgJiZcbiAgICAgIHBhbmVFbGVtZW50LmN1cnJlbnRcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBmaW5kTmV4dEltYWdlSW5kZXgoKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAwXG4gICAgcGF5bG9hZC5tZWRpYS5lZGdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbWFnZS5ub2RlLm1lZGlhQ29udGVudFR5cGUgPT09IFwiSU1BR0VcIikge1xuICAgICAgICBpZiAoaW1hZ2Uubm9kZS5pbWFnZS5pZCA9PT0gb3JpZ2luYWxGZWF0SW1nLmlkKSB7XG4gICAgICAgICAgZm91bmRJbmRleCA9IGluZGV4ICsgMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBmb3VuZEluZGV4XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSBmaW5kTmV4dEltYWdlSW5kZXgoKVxuXG4gICAgaWYgKGZvdW5kSW5kZXggPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBmb3VuZE5leHRJbWFnZSA9IHBheWxvYWQubWVkaWEuZWRnZXNbZm91bmRJbmRleF0ubm9kZVxuXG4gICAgaWYgKGZvdW5kTmV4dEltYWdlKSB7XG4gICAgICBnYWxsZXJ5RGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcIlNFVF9GRUFUX0lNQUdFXCIsXG4gICAgICAgIHBheWxvYWQ6IGZvdW5kTmV4dEltYWdlLmltYWdlLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7XG4gICAgZ2FsbGVyeURpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFwiU0VUX0ZFQVRfSU1BR0VcIixcbiAgICAgIHBheWxvYWQ6IG9yaWdpbmFsRmVhdEltZyxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgcGFuZUVsZW1lbnRDU1MgPSBjc3NgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBgXG5cbiAgY29uc3QgUHJvZHVjdEltYWdlRmVhdHVyZWRXcmFwcGVyQ1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiAke3NldHRpbmdzLmltYWdlc0FsaWduID09PSBcImxlZnRcIlxuICAgICAgPyBcImZsZXgtc3RhcnRcIlxuICAgICAgOiBzZXR0aW5ncy5pbWFnZXNBbGlnbiA9PT0gXCJyaWdodFwiXG4gICAgICA/IFwiZmxleC1lbmRcIlxuICAgICAgOiBzZXR0aW5ncy5pbWFnZXNBbGlnbn07XG4gIGBcblxuICBjb25zdCBpc091dE9mU3RvY2sgPSBwYXlsb2FkLmF2YWlsYWJsZUZvclNhbGUgPT09IGZhbHNlXG5cbiAgZnVuY3Rpb24gaXNTaG93aW5nTmV4dE9uSG92ZXIoKSB7XG4gICAgaWYgKGdhbGxlcnlTdGF0ZS5mZWF0SW1hZ2VJc1ZpZGVvKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoc2hvd1pvb20oKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHBheWxvYWQubWVkaWEuZWRnZXMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiBzZXR0aW5ncy5pbWFnZXNTaG93TmV4dE9uSG92ZXJcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzaG9wd3AubWlzYy5pc1Bybykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzRmlyc3RSZW5kZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChoYXNGZWF0SW1hZ2UoKSAmJiBzaG93Wm9vbSgpKSB7XG4gICAgICB2YXIgZHJpZnQgPSBuZXcgRHJpZnQoZ2FsbGVyeVN0YXRlLmZlYXRJbWFnZUVsZW1lbnQsIGRyaWZ0T3B0aW9ucygpKVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkZXN0cm95RHJpZnQoZHJpZnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbZ2FsbGVyeVN0YXRlLmZlYXRJbWFnZUVsZW1lbnQsIHNldHRpbmdzLnNob3dab29tXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cIndwcy1nYWxsZXJ5LWZlYXR1cmVkLXdyYXBwZXJcIlxuICAgICAgcmVmPXtwYW5lRWxlbWVudH1cbiAgICAgIGNzcz17cGFuZUVsZW1lbnRDU1N9XG4gICAgICBvbk1vdXNlRW50ZXI9e2lzU2hvd2luZ05leHRPbkhvdmVyKCkgPyBvbk1vdXNlRW50ZXIgOiB1bmRlZmluZWR9XG4gICAgICBvbk1vdXNlTGVhdmU9e2lzU2hvd2luZ05leHRPbkhvdmVyKCkgPyBvbk1vdXNlTGVhdmUgOiB1bmRlZmluZWR9XG4gICAgPlxuICAgICAge2dhbGxlcnlTdGF0ZS5mZWF0SW1hZ2VJc1ZpZGVvID8gKFxuICAgICAgICA8UHJvZHVjdEZlYXR1cmVkSW1hZ2VWaWRlbyB2aWRlb0RhdGE9e2dhbGxlcnlTdGF0ZS5mZWF0SW1hZ2V9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIHtpc09uU2FsZSAmJiBzZXR0aW5ncy5zaG93U2FsZU5vdGljZSAmJiAhaXNPdXRPZlN0b2NrICYmIChcbiAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17ZmFsc2V9PlxuICAgICAgICAgICAgICA8UHJvZHVjdEltYWdlT25TYWxlTGFiZWwgdGV4dD17c2V0dGluZ3Muc2FsZUxhYmVsVGV4dH0gLz5cbiAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtpc091dE9mU3RvY2sgJiZcbiAgICAgICAgICAgIGdhbGxlcnlTdGF0ZS5mZWF0SW1hZ2UgJiZcbiAgICAgICAgICAgIHNldHRpbmdzLnNob3dPdXRPZlN0b2NrTm90aWNlICYmIChcbiAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgPFByb2R1Y3RJbWFnZVNvbGRPdXRMYWJlbFxuICAgICAgICAgICAgICAgICAgdGV4dD17c2V0dGluZ3Muc29sZE91dEltYWdlTGFiZWxUZXh0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndwcy1wcm9kdWN0LWltYWdlLXdyYXBwZXJcIlxuICAgICAgICAgICAgY3NzPXtQcm9kdWN0SW1hZ2VGZWF0dXJlZFdyYXBwZXJDU1N9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2dhbGxlcnlTdGF0ZS5mZWF0SW1hZ2UgPyAoXG4gICAgICAgICAgICAgIDxQcm9kdWN0SW1hZ2VcbiAgICAgICAgICAgICAgICBwYXlsb2FkPXtwYXlsb2FkfVxuICAgICAgICAgICAgICAgIHNldHRpbmdzPXtzZXR0aW5nc31cbiAgICAgICAgICAgICAgICBpc0ZlYXR1cmVkPXt0cnVlfVxuICAgICAgICAgICAgICAgIGltYWdlPXtnYWxsZXJ5U3RhdGUuZmVhdEltYWdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFByb2R1Y3RJbWFnZVxuICAgICAgICAgICAgICAgIHBheWxvYWQ9e3BheWxvYWR9XG4gICAgICAgICAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgICAgICAgICAgIGlzRmVhdHVyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e2dhbGxlcnlTdGF0ZS5mZWF0SW1hZ2VQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJ1ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgeyBQcm9kdWN0RmVhdHVyZWRJbWFnZSB9XG4iXX0= */"));
  var isOutOfStock = payload.availableForSale === false;

  function isShowingNextOnHover() {
    if (galleryState.featImageIsVideo) {
      return false;
    }

    if (showZoom()) {
      return false;
    }

    if (payload.media.edges.length <= 1) {
      return false;
    }

    return settings.imagesShowNextOnHover;
  }

  useEffect(function () {
    if (!shopwp.misc.isPro) {
      return;
    }

    if (isFirstRender) {
      return;
    }

    if (hasFeatImage() && showZoom()) {
      var drift = new drift_zoom__WEBPACK_IMPORTED_MODULE_5__["default"](galleryState.featImageElement, driftOptions());
      return function () {
        destroyDrift(drift);
      };
    }
  }, [galleryState.featImageElement, settings.showZoom]);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "wps-gallery-featured-wrapper",
    ref: paneElement,
    css: paneElementCSS,
    onMouseEnter: isShowingNextOnHover() ? onMouseEnter : undefined,
    onMouseLeave: isShowingNextOnHover() ? onMouseLeave : undefined
  }, galleryState.featImageIsVideo ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(ProductFeaturedImageVideo, {
    videoData: galleryState.featImage
  }) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(__webpack_provided_wp_dot_element.Fragment, null, isOnSale && settings.showSaleNotice && !isOutOfStock && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(Suspense, {
    fallback: false
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(ProductImageOnSaleLabel, {
    text: settings.saleLabelText
  })), isOutOfStock && galleryState.featImage && settings.showOutOfStockNotice && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(Suspense, {
    fallback: false
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(ProductImageSoldOutLabel, {
    text: settings.soldOutImageLabelText
  })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "wps-product-image-wrapper",
    css: ProductImageFeaturedWrapperCSS
  }, galleryState.featImage ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    payload: payload,
    settings: settings,
    isFeatured: true,
    image: galleryState.featImage
  }) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    payload: payload,
    settings: settings,
    isFeatured: true,
    image: galleryState.featImagePlaceholder,
    placeholder: true
  }))));
}



/***/ }),

/***/ "./src/components/products/product/images/gallery/_state/context.js":
/*!**************************************************************************!*\
  !*** ./src/components/products/product/images/gallery/_state/context.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
var ProductGalleryContext = __webpack_provided_wp_dot_element.createContext();
/* harmony default export */ __webpack_exports__["default"] = (ProductGalleryContext);

/***/ }),

/***/ "./src/components/products/product/images/gallery/_state/initial-state.js":
/*!********************************************************************************!*\
  !*** ./src/components/products/product/images/gallery/_state/initial-state.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* provided dependency */ var __webpack_provided_wp_dot_i18n = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
function ProductGalleryInitialState(props) {
  if (props.payload.media.edges.length) {
    var _props$payload$media$;

    if (((_props$payload$media$ = props.payload.media.edges[0]) === null || _props$payload$media$ === void 0 ? void 0 : _props$payload$media$.node.mediaContentType) === "IMAGE") {
      var featImage = props.payload.media.edges[0].node.image;
      var featImageIsVideo = false;
    } else {
      var featImage = props.payload.media.edges[0].node;
      var featImageIsVideo = true;
    }
  } else {
    var featImage = false;
  }

  return {
    product: props.payload,
    featImageIsVideo: featImageIsVideo,
    featImage: props.payload ? featImage : false,
    featImageElement: false,
    featImagePlaceholder: {
      src: props.settings.imagePlaceholder,
      alt: __webpack_provided_wp_dot_i18n.__("Placeholder Image", "shopwp")
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (ProductGalleryInitialState);

/***/ }),

/***/ "./src/components/products/product/images/gallery/_state/provider.jsx":
/*!****************************************************************************!*\
  !*** ./src/components/products/product/images/gallery/_state/provider.jsx ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductGalleryProvider": function() { return /* binding */ ProductGalleryProvider; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/components/products/product/images/gallery/_state/reducer.js");
/* harmony import */ var _initial_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initial-state */ "./src/components/products/product/images/gallery/_state/initial-state.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./src/components/products/product/images/gallery/_state/context.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");







function ProductGalleryProvider(props) {
  var _wp$element$useReduce = __webpack_provided_wp_dot_element.useReducer(_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_initial_state__WEBPACK_IMPORTED_MODULE_3__["default"])(props)),
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



/***/ }),

/***/ "./src/components/products/product/images/gallery/_state/reducer.js":
/*!**************************************************************************!*\
  !*** ./src/components/products/product/images/gallery/_state/reducer.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");


function ProductGalleryReducer(state, action) {
  switch (action.type) {
    case "SET_FEAT_IMAGE":
      {
        return (0,Utils__WEBPACK_IMPORTED_MODULE_0__.rSet)("featImage", action, state);
      }

    case "SET_FEAT_IMAGE_ELEMENT":
      {
        return (0,Utils__WEBPACK_IMPORTED_MODULE_0__.rSet)("featImageElement", action, state);
      }

    case "SET_FEAT_IMAGE_IS_VIDEO":
      {
        return (0,Utils__WEBPACK_IMPORTED_MODULE_0__.rSet)("featImageIsVideo", action, state);
      }

    default:
      {
        throw new Error("Unhandled action type: ".concat(action.type, " in ProductGalleryReducer"));
      }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ProductGalleryReducer);

/***/ }),

/***/ "./src/components/products/product/images/gallery/index.jsx":
/*!******************************************************************!*\
  !*** ./src/components/products/product/images/gallery/index.jsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductGallery": function() { return /* binding */ ProductGallery; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_state/hooks */ "./src/components/products/product/_state/hooks.jsx");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_state/context */ "./src/components/products/product/images/gallery/_state/context.js");
/* harmony import */ var _thumbnails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../thumbnails */ "./src/components/products/product/images/thumbnails/index.jsx");
/* harmony import */ var _featured__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../featured */ "./src/components/products/product/images/featured/index.jsx");
/* harmony import */ var Common_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Common/settings */ "./src/common/settings/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");








function ProductGallery(_ref) {
  var settings = _ref.settings,
      payload = _ref.payload,
      carousel = _ref.carousel;
  var _wp$element = wp.element,
      useEffect = __webpack_provided_wp_dot_element.useEffect,
      useContext = __webpack_provided_wp_dot_element.useContext;
  var productState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_1__.useProductState)();

  var _useContext = useContext(_state_context__WEBPACK_IMPORTED_MODULE_2__["default"]),
      _useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext, 2),
      galleryDispatch = _useContext2[1];

  function hasManyImages() {
    if (!productState) {
      return false;
    }

    return productState.hasManyImages;
  }

  function isFeaturedOnly() {
    if ((0,Common_settings__WEBPACK_IMPORTED_MODULE_5__.hasLink)(settings)) {
      if (settings.showFeaturedOnly || settings.linkTo !== "none") {
        return true;
      } else {
        return false;
      }
    }

    return settings.showFeaturedOnly;
  }

  useEffect(function () {
    if (!productState.selectedVariant) {
      return;
    }

    galleryDispatch({
      type: "SET_FEAT_IMAGE_IS_VIDEO",
      payload: false
    });
    galleryDispatch({
      type: "SET_FEAT_IMAGE",
      payload: productState.selectedVariant.node.image
    });
  }, [productState.selectedVariant]);
  return /*#__PURE__*/React.createElement(__webpack_provided_wp_dot_element.Fragment, null, isFeaturedOnly() ? /*#__PURE__*/React.createElement(_featured__WEBPACK_IMPORTED_MODULE_4__.ProductFeaturedImage, {
    isOnSale: productState.isOnSale,
    payload: payload,
    settings: settings
  }) : hasManyImages() ? settings.showImagesCarousel ? carousel && carousel : /*#__PURE__*/React.createElement(__webpack_provided_wp_dot_element.Fragment, null, /*#__PURE__*/React.createElement(_featured__WEBPACK_IMPORTED_MODULE_4__.ProductFeaturedImage, {
    payload: payload,
    settings: settings,
    isOnSale: productState.isOnSale
  }), /*#__PURE__*/React.createElement(_thumbnails__WEBPACK_IMPORTED_MODULE_3__["default"], {
    product: payload,
    settings: settings
  })) : /*#__PURE__*/React.createElement(_featured__WEBPACK_IMPORTED_MODULE_4__.ProductFeaturedImage, {
    payload: payload,
    settings: settings,
    isOnSale: productState.isOnSale
  }));
}



/***/ }),

/***/ "./src/components/products/product/images/gallery/wrapper/index.jsx":
/*!**************************************************************************!*\
  !*** ./src/components/products/product/images/gallery/wrapper/index.jsx ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/components/products/product/images/gallery/index.jsx");
/* harmony import */ var _state_provider_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_state/provider.jsx */ "./src/components/products/product/images/gallery/_state/provider.jsx");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/** @jsx jsx */




var ProductCarouselImages = __webpack_provided_wp_dot_element.lazy(function () {
  return Promise.all(/*! import() | ProductCarouselImages-public */[__webpack_require__.e("vendors-node_modules_react-slick_lib_index_js-node_modules_slick-carousel_slick_slick-theme_c-2f2bea"), __webpack_require__.e("vendors-node_modules_react-player_lazy_index_js"), __webpack_require__.e("Carousel-public"), __webpack_require__.e("ProductCarouselImages-public")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../carousel */ "./src/components/products/product/images/carousel/index.jsx"));
});

function ProductGalleryWrapper(_ref) {
  var settings = _ref.settings,
      payload = _ref.payload,
      defaultGalleryCarouselSettings = _ref.defaultGalleryCarouselSettings,
      element = _ref.element;
  var ProductGalleryWrapperCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)("margin-bottom:", settings.isSingleComponent ? "0px" : "15px", ";;label:ProductGalleryWrapperCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2ltYWdlcy9nYWxsZXJ5L3dyYXBwZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCc0MiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvaW1hZ2VzL2dhbGxlcnkvd3JhcHBlci9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCB7IFByb2R1Y3RHYWxsZXJ5IH0gZnJvbSBcIi4uL2luZGV4XCJcbmltcG9ydCB7IFByb2R1Y3RHYWxsZXJ5UHJvdmlkZXIgfSBmcm9tIFwiLi4vX3N0YXRlL3Byb3ZpZGVyLmpzeFwiXG5cbmNvbnN0IFByb2R1Y3RDYXJvdXNlbEltYWdlcyA9IHdwLmVsZW1lbnQubGF6eSgoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogJ1Byb2R1Y3RDYXJvdXNlbEltYWdlcy1wdWJsaWMnICovIFwiLi4vLi4vY2Fyb3VzZWxcIlxuICApXG4pXG5cbmZ1bmN0aW9uIFByb2R1Y3RHYWxsZXJ5V3JhcHBlcih7XG4gIHNldHRpbmdzLFxuICBwYXlsb2FkLFxuICBkZWZhdWx0R2FsbGVyeUNhcm91c2VsU2V0dGluZ3MsXG4gIGVsZW1lbnQsXG59KSB7XG4gIGNvbnN0IFByb2R1Y3RHYWxsZXJ5V3JhcHBlckNTUyA9IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAke3NldHRpbmdzLmlzU2luZ2xlQ29tcG9uZW50ID8gXCIwcHhcIiA6IFwiMTVweFwifTtcbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwid3BzLWNvbXBvbmVudCB3cHMtY29tcG9uZW50LXByb2R1Y3RzLWltYWdlc1wiXG4gICAgICBhcmlhLWxhYmVsPVwiUHJvZHVjdCBJbWFnZXNcIlxuICAgICAgY3NzPXtQcm9kdWN0R2FsbGVyeVdyYXBwZXJDU1N9XG4gICAgPlxuICAgICAgPFByb2R1Y3RHYWxsZXJ5UHJvdmlkZXIgcGF5bG9hZD17cGF5bG9hZH0gc2V0dGluZ3M9e3NldHRpbmdzfT5cbiAgICAgICAgPFByb2R1Y3RHYWxsZXJ5XG4gICAgICAgICAgcGF5bG9hZD17cGF5bG9hZH1cbiAgICAgICAgICBzZXR0aW5ncz17c2V0dGluZ3N9XG4gICAgICAgICAgY2Fyb3VzZWw9e1xuICAgICAgICAgICAgPFByb2R1Y3RDYXJvdXNlbEltYWdlc1xuICAgICAgICAgICAgICBpbWFnZXM9e3BheWxvYWQubWVkaWEuZWRnZXN9XG4gICAgICAgICAgICAgIGRlZmF1bHRDYXJvdXNlbFNldHRpbmdzPXtkZWZhdWx0R2FsbGVyeUNhcm91c2VsU2V0dGluZ3N9XG4gICAgICAgICAgICAgIGVsZW1lbnQ9e2VsZW1lbnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvUHJvZHVjdEdhbGxlcnlQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0R2FsbGVyeVdyYXBwZXJcbiJdfQ== */"));
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "wps-component wps-component-products-images",
    "aria-label": "Product Images",
    css: ProductGalleryWrapperCSS
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_state_provider_jsx__WEBPACK_IMPORTED_MODULE_1__.ProductGalleryProvider, {
    payload: payload,
    settings: settings
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_0__.ProductGallery, {
    payload: payload,
    settings: settings,
    carousel: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(ProductCarouselImages, {
      images: payload.media.edges,
      defaultCarouselSettings: defaultGalleryCarouselSettings,
      element: element
    })
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductGalleryWrapper);

/***/ }),

/***/ "./src/components/products/product/images/image/img.jsx":
/*!**************************************************************!*\
  !*** ./src/components/products/product/images/image/img.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var __webpack_provided_wp_dot_i18n = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */



var _ref =  false ? 0 : {
  name: "1ffumr9-videoIcon",
  styles: "position:absolute;width:12px;fill:white;top:calc(50% - 14px);z-index:9999;left:calc(50% - 6px);label:videoIcon;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2ltYWdlcy9pbWFnZS9pbWcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEdUIiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvaW1hZ2VzL2ltYWdlL2ltZy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcblxuZnVuY3Rpb24gSW1nKHByb3BzKSB7XG4gIGZ1bmN0aW9uIGlzU2VsZWN0ZWRJbWFnZSgpIHtcbiAgICBpZiAocHJvcHMuaXNGZWF0dXJlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJvcHMuZ2FsbGVyeVN0YXRlLmZlYXRJbWFnZT8ubWVkaWFDb250ZW50VHlwZSAmJlxuICAgICAgcHJvcHMuaW1hZ2U/LnByZXZpZXdJbWFnZVxuICAgICkge1xuICAgICAgaWYgKHByb3BzLmdhbGxlcnlTdGF0ZS5mZWF0SW1hZ2U/LnNvdXJjZXMgJiYgcHJvcHMuaW1hZ2U/LnNvdXJjZXMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBwcm9wcy5nYWxsZXJ5U3RhdGUuZmVhdEltYWdlLnByZXZpZXdJbWFnZS5pZCA9PT1cbiAgICAgICAgICBwcm9wcy5pbWFnZS5wcmV2aWV3SW1hZ2UuaWRcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBwcm9wcy5nYWxsZXJ5U3RhdGUuZmVhdEltYWdlLmVtYmVkZGVkVXJsID09PSBwcm9wcy5pbWFnZS5lbWJlZGRlZFVybFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHByb3BzLmdhbGxlcnlTdGF0ZS5mZWF0SW1hZ2Uub3JpZ2luYWxTcmMgPT09IHByb3BzLmltYWdlLm9yaWdpbmFsU3JjXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZmVhdFRodW1iU3R5bGVzID0gY3NzYFxuICAgIG91dGxpbmU6IDFweCBkYXNoZWQgIzAwMDAwMDtcbiAgICBvdXRsaW5lLW9mZnNldDogM3B4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgYFxuXG4gIGNvbnN0IHRodW1ibmFpbFN0eWxlcyA9IGNzc2BcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAke3Byb3BzLmlzRmVhdHVyZWQgPyBcIjBweFwiIDogXCIxMHB4XCJ9O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBmaWx0ZXI6ICR7cHJvcHMuaXNWaWRlbyA/IFwiYnJpZ2h0bmVzcygwLjUpXCIgOiBcIm5vbmVcIn07XG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBvdXRsaW5lOiAke3Byb3BzLmlzRmVhdHVyZWQgPyBcIm5vbmVcIiA6IFwiMXB4IGRhc2hlZCAjMDAwMDAwXCJ9O1xuICAgICAgb3V0bGluZS1vZmZzZXQ6ICR7cHJvcHMuaXNGZWF0dXJlZCA/IFwibm9uZVwiIDogXCIzcHhcIn07XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6ICR7cHJvcHMuaXNGZWF0dXJlZFxuICAgICAgICA/IFwiZGVmYXVsdFwiICYmIHByb3BzLmxpbmtUbyAhPT0gXCJtb2RhbFwiXG4gICAgICAgIDogXCJwb2ludGVyXCJ9O1xuICAgIH1cbiAgYFxuXG4gIGNvbnN0IHZpZGVvSWNvbiA9IGNzc2BcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgZmlsbDogd2hpdGU7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDE0cHgpO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgbGVmdDogY2FsYyg1MCUgLSA2cHgpO1xuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGltZ1xuICAgICAgICBjc3M9e2lzU2VsZWN0ZWRJbWFnZSgpID8gZmVhdFRodW1iU3R5bGVzIDogdGh1bWJuYWlsU3R5bGVzfVxuICAgICAgICByZWY9e3Byb3BzLmltYWdlUmVmfVxuICAgICAgICBpdGVtUHJvcD1cImltYWdlXCJcbiAgICAgICAgc3JjPXtwcm9wcy5wcm9kdWN0SW1hZ2VTcmN9XG4gICAgICAgIGNsYXNzTmFtZT1cIndwcy1wcm9kdWN0LWltYWdlXCJcbiAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICBhbHQ9e1xuICAgICAgICAgIHByb3BzLmltYWdlLmFsdFRleHRcbiAgICAgICAgICAgID8gcHJvcHMuaW1hZ2UuYWx0VGV4dFxuICAgICAgICAgICAgOiB3cC5pMThuLl9fKFwiVGh1bWJuYWlsIGZvciBcIiwgXCJzaG9wd3BcIikgK1xuICAgICAgICAgICAgICBwcm9wcy5nYWxsZXJ5U3RhdGUucHJvZHVjdC50aXRsZVxuICAgICAgICB9XG4gICAgICAgIGRhdGEtem9vbT17cHJvcHMuaW1hZ2Uub3JpZ2luYWxTcmN9XG4gICAgICAvPlxuICAgICAge3Byb3BzLmlzVmlkZW8gJiYgKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgY3NzPXt2aWRlb0ljb259XG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAzODQgNTEyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMjQuNTIgMzguMTNDMzkuNjYgMjkuNjQgNTguMjEgMjkuOTkgNzMuMDMgMzkuMDRMMzYxIDIxNUMzNzUuMyAyMjMuOCAzODQgMjM5LjMgMzg0IDI1NkMzODQgMjcyLjcgMzc1LjMgMjg4LjIgMzYxIDI5Ni4xTDczLjAzIDQ3Mi4xQzU4LjIxIDQ4MiAzOS42NiA0ODIuNCAyNC41MiA0NzMuOUM5LjM3NyA0NjUuNCAwIDQ0OS40IDAgNDMyVjgwQzAgNjIuNjQgOS4zNzcgNDYuNjMgMjQuNTIgMzguMTNWMzguMTN6TTQ4IDQzMkwzMzYgMjU2TDQ4IDgwVjQzMnpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3AuZWxlbWVudC5tZW1vKEltZylcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 =  false ? 0 : {
  name: "3njco4-featThumbStyles",
  styles: "outline:1px dashed #000000;outline-offset:3px;transition:transform 100ms ease;max-width:100%;label:featThumbStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2ltYWdlcy9pbWFnZS9pbWcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCNkIiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvaW1hZ2VzL2ltYWdlL2ltZy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcblxuZnVuY3Rpb24gSW1nKHByb3BzKSB7XG4gIGZ1bmN0aW9uIGlzU2VsZWN0ZWRJbWFnZSgpIHtcbiAgICBpZiAocHJvcHMuaXNGZWF0dXJlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJvcHMuZ2FsbGVyeVN0YXRlLmZlYXRJbWFnZT8ubWVkaWFDb250ZW50VHlwZSAmJlxuICAgICAgcHJvcHMuaW1hZ2U/LnByZXZpZXdJbWFnZVxuICAgICkge1xuICAgICAgaWYgKHByb3BzLmdhbGxlcnlTdGF0ZS5mZWF0SW1hZ2U/LnNvdXJjZXMgJiYgcHJvcHMuaW1hZ2U/LnNvdXJjZXMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBwcm9wcy5nYWxsZXJ5U3RhdGUuZmVhdEltYWdlLnByZXZpZXdJbWFnZS5pZCA9PT1cbiAgICAgICAgICBwcm9wcy5pbWFnZS5wcmV2aWV3SW1hZ2UuaWRcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBwcm9wcy5nYWxsZXJ5U3RhdGUuZmVhdEltYWdlLmVtYmVkZGVkVXJsID09PSBwcm9wcy5pbWFnZS5lbWJlZGRlZFVybFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHByb3BzLmdhbGxlcnlTdGF0ZS5mZWF0SW1hZ2Uub3JpZ2luYWxTcmMgPT09IHByb3BzLmltYWdlLm9yaWdpbmFsU3JjXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZmVhdFRodW1iU3R5bGVzID0gY3NzYFxuICAgIG91dGxpbmU6IDFweCBkYXNoZWQgIzAwMDAwMDtcbiAgICBvdXRsaW5lLW9mZnNldDogM3B4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgYFxuXG4gIGNvbnN0IHRodW1ibmFpbFN0eWxlcyA9IGNzc2BcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAke3Byb3BzLmlzRmVhdHVyZWQgPyBcIjBweFwiIDogXCIxMHB4XCJ9O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBmaWx0ZXI6ICR7cHJvcHMuaXNWaWRlbyA/IFwiYnJpZ2h0bmVzcygwLjUpXCIgOiBcIm5vbmVcIn07XG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBvdXRsaW5lOiAke3Byb3BzLmlzRmVhdHVyZWQgPyBcIm5vbmVcIiA6IFwiMXB4IGRhc2hlZCAjMDAwMDAwXCJ9O1xuICAgICAgb3V0bGluZS1vZmZzZXQ6ICR7cHJvcHMuaXNGZWF0dXJlZCA/IFwibm9uZVwiIDogXCIzcHhcIn07XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6ICR7cHJvcHMuaXNGZWF0dXJlZFxuICAgICAgICA/IFwiZGVmYXVsdFwiICYmIHByb3BzLmxpbmtUbyAhPT0gXCJtb2RhbFwiXG4gICAgICAgIDogXCJwb2ludGVyXCJ9O1xuICAgIH1cbiAgYFxuXG4gIGNvbnN0IHZpZGVvSWNvbiA9IGNzc2BcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgZmlsbDogd2hpdGU7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDE0cHgpO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgbGVmdDogY2FsYyg1MCUgLSA2cHgpO1xuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGltZ1xuICAgICAgICBjc3M9e2lzU2VsZWN0ZWRJbWFnZSgpID8gZmVhdFRodW1iU3R5bGVzIDogdGh1bWJuYWlsU3R5bGVzfVxuICAgICAgICByZWY9e3Byb3BzLmltYWdlUmVmfVxuICAgICAgICBpdGVtUHJvcD1cImltYWdlXCJcbiAgICAgICAgc3JjPXtwcm9wcy5wcm9kdWN0SW1hZ2VTcmN9XG4gICAgICAgIGNsYXNzTmFtZT1cIndwcy1wcm9kdWN0LWltYWdlXCJcbiAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICBhbHQ9e1xuICAgICAgICAgIHByb3BzLmltYWdlLmFsdFRleHRcbiAgICAgICAgICAgID8gcHJvcHMuaW1hZ2UuYWx0VGV4dFxuICAgICAgICAgICAgOiB3cC5pMThuLl9fKFwiVGh1bWJuYWlsIGZvciBcIiwgXCJzaG9wd3BcIikgK1xuICAgICAgICAgICAgICBwcm9wcy5nYWxsZXJ5U3RhdGUucHJvZHVjdC50aXRsZVxuICAgICAgICB9XG4gICAgICAgIGRhdGEtem9vbT17cHJvcHMuaW1hZ2Uub3JpZ2luYWxTcmN9XG4gICAgICAvPlxuICAgICAge3Byb3BzLmlzVmlkZW8gJiYgKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgY3NzPXt2aWRlb0ljb259XG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAzODQgNTEyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMjQuNTIgMzguMTNDMzkuNjYgMjkuNjQgNTguMjEgMjkuOTkgNzMuMDMgMzkuMDRMMzYxIDIxNUMzNzUuMyAyMjMuOCAzODQgMjM5LjMgMzg0IDI1NkMzODQgMjcyLjcgMzc1LjMgMjg4LjIgMzYxIDI5Ni4xTDczLjAzIDQ3Mi4xQzU4LjIxIDQ4MiAzOS42NiA0ODIuNCAyNC41MiA0NzMuOUM5LjM3NyA0NjUuNCAwIDQ0OS40IDAgNDMyVjgwQzAgNjIuNjQgOS4zNzcgNDYuNjMgMjQuNTIgMzguMTNWMzguMTN6TTQ4IDQzMkwzMzYgMjU2TDQ4IDgwVjQzMnpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3AuZWxlbWVudC5tZW1vKEltZylcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function Img(props) {
  function isSelectedImage() {
    var _props$galleryState$f, _props$image;

    if (props.isFeatured) {
      return;
    }

    if ((_props$galleryState$f = props.galleryState.featImage) !== null && _props$galleryState$f !== void 0 && _props$galleryState$f.mediaContentType && (_props$image = props.image) !== null && _props$image !== void 0 && _props$image.previewImage) {
      var _props$galleryState$f2, _props$image2;

      if ((_props$galleryState$f2 = props.galleryState.featImage) !== null && _props$galleryState$f2 !== void 0 && _props$galleryState$f2.sources && (_props$image2 = props.image) !== null && _props$image2 !== void 0 && _props$image2.sources) {
        return props.galleryState.featImage.previewImage.id === props.image.previewImage.id;
      } else {
        return props.galleryState.featImage.embeddedUrl === props.image.embeddedUrl;
      }
    } else {
      return props.galleryState.featImage.originalSrc === props.image.originalSrc;
    }
  }

  var featThumbStyles = _ref2;
  var thumbnailStyles = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("display:block;margin-bottom:", props.isFeatured ? "0px" : "10px", ";max-width:100%;filter:", props.isVideo ? "brightness(0.5)" : "none", ";&:focus,&:active{outline:", props.isFeatured ? "none" : "1px dashed #000000", ";outline-offset:", props.isFeatured ? "none" : "3px", ";}&:hover{cursor:", props.isFeatured ?  true && props.linkTo !== "modal" : "pointer", ";};label:thumbnailStyles;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2ltYWdlcy9pbWFnZS9pbWcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDNkIiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvaW1hZ2VzL2ltYWdlL2ltZy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcblxuZnVuY3Rpb24gSW1nKHByb3BzKSB7XG4gIGZ1bmN0aW9uIGlzU2VsZWN0ZWRJbWFnZSgpIHtcbiAgICBpZiAocHJvcHMuaXNGZWF0dXJlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJvcHMuZ2FsbGVyeVN0YXRlLmZlYXRJbWFnZT8ubWVkaWFDb250ZW50VHlwZSAmJlxuICAgICAgcHJvcHMuaW1hZ2U/LnByZXZpZXdJbWFnZVxuICAgICkge1xuICAgICAgaWYgKHByb3BzLmdhbGxlcnlTdGF0ZS5mZWF0SW1hZ2U/LnNvdXJjZXMgJiYgcHJvcHMuaW1hZ2U/LnNvdXJjZXMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBwcm9wcy5nYWxsZXJ5U3RhdGUuZmVhdEltYWdlLnByZXZpZXdJbWFnZS5pZCA9PT1cbiAgICAgICAgICBwcm9wcy5pbWFnZS5wcmV2aWV3SW1hZ2UuaWRcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBwcm9wcy5nYWxsZXJ5U3RhdGUuZmVhdEltYWdlLmVtYmVkZGVkVXJsID09PSBwcm9wcy5pbWFnZS5lbWJlZGRlZFVybFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHByb3BzLmdhbGxlcnlTdGF0ZS5mZWF0SW1hZ2Uub3JpZ2luYWxTcmMgPT09IHByb3BzLmltYWdlLm9yaWdpbmFsU3JjXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZmVhdFRodW1iU3R5bGVzID0gY3NzYFxuICAgIG91dGxpbmU6IDFweCBkYXNoZWQgIzAwMDAwMDtcbiAgICBvdXRsaW5lLW9mZnNldDogM3B4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgYFxuXG4gIGNvbnN0IHRodW1ibmFpbFN0eWxlcyA9IGNzc2BcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAke3Byb3BzLmlzRmVhdHVyZWQgPyBcIjBweFwiIDogXCIxMHB4XCJ9O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBmaWx0ZXI6ICR7cHJvcHMuaXNWaWRlbyA/IFwiYnJpZ2h0bmVzcygwLjUpXCIgOiBcIm5vbmVcIn07XG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBvdXRsaW5lOiAke3Byb3BzLmlzRmVhdHVyZWQgPyBcIm5vbmVcIiA6IFwiMXB4IGRhc2hlZCAjMDAwMDAwXCJ9O1xuICAgICAgb3V0bGluZS1vZmZzZXQ6ICR7cHJvcHMuaXNGZWF0dXJlZCA/IFwibm9uZVwiIDogXCIzcHhcIn07XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6ICR7cHJvcHMuaXNGZWF0dXJlZFxuICAgICAgICA/IFwiZGVmYXVsdFwiICYmIHByb3BzLmxpbmtUbyAhPT0gXCJtb2RhbFwiXG4gICAgICAgIDogXCJwb2ludGVyXCJ9O1xuICAgIH1cbiAgYFxuXG4gIGNvbnN0IHZpZGVvSWNvbiA9IGNzc2BcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgZmlsbDogd2hpdGU7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDE0cHgpO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgbGVmdDogY2FsYyg1MCUgLSA2cHgpO1xuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGltZ1xuICAgICAgICBjc3M9e2lzU2VsZWN0ZWRJbWFnZSgpID8gZmVhdFRodW1iU3R5bGVzIDogdGh1bWJuYWlsU3R5bGVzfVxuICAgICAgICByZWY9e3Byb3BzLmltYWdlUmVmfVxuICAgICAgICBpdGVtUHJvcD1cImltYWdlXCJcbiAgICAgICAgc3JjPXtwcm9wcy5wcm9kdWN0SW1hZ2VTcmN9XG4gICAgICAgIGNsYXNzTmFtZT1cIndwcy1wcm9kdWN0LWltYWdlXCJcbiAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICBhbHQ9e1xuICAgICAgICAgIHByb3BzLmltYWdlLmFsdFRleHRcbiAgICAgICAgICAgID8gcHJvcHMuaW1hZ2UuYWx0VGV4dFxuICAgICAgICAgICAgOiB3cC5pMThuLl9fKFwiVGh1bWJuYWlsIGZvciBcIiwgXCJzaG9wd3BcIikgK1xuICAgICAgICAgICAgICBwcm9wcy5nYWxsZXJ5U3RhdGUucHJvZHVjdC50aXRsZVxuICAgICAgICB9XG4gICAgICAgIGRhdGEtem9vbT17cHJvcHMuaW1hZ2Uub3JpZ2luYWxTcmN9XG4gICAgICAvPlxuICAgICAge3Byb3BzLmlzVmlkZW8gJiYgKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgY3NzPXt2aWRlb0ljb259XG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAzODQgNTEyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMjQuNTIgMzguMTNDMzkuNjYgMjkuNjQgNTguMjEgMjkuOTkgNzMuMDMgMzkuMDRMMzYxIDIxNUMzNzUuMyAyMjMuOCAzODQgMjM5LjMgMzg0IDI1NkMzODQgMjcyLjcgMzc1LjMgMjg4LjIgMzYxIDI5Ni4xTDczLjAzIDQ3Mi4xQzU4LjIxIDQ4MiAzOS42NiA0ODIuNCAyNC41MiA0NzMuOUM5LjM3NyA0NjUuNCAwIDQ0OS40IDAgNDMyVjgwQzAgNjIuNjQgOS4zNzcgNDYuNjMgMjQuNTIgMzguMTNWMzguMTN6TTQ4IDQzMkwzMzYgMjU2TDQ4IDgwVjQzMnpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3AuZWxlbWVudC5tZW1vKEltZylcbiJdfQ== */"));
  var videoIcon = _ref;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.jsx)(__webpack_provided_wp_dot_element.Fragment, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
    css: isSelectedImage() ? featThumbStyles : thumbnailStyles,
    ref: props.imageRef,
    itemProp: "image",
    src: props.productImageSrc,
    className: "wps-product-image",
    loading: "lazy",
    alt: props.image.altText ? props.image.altText : __webpack_provided_wp_dot_i18n.__("Thumbnail for ", "shopwp") + props.galleryState.product.title,
    "data-zoom": props.image.originalSrc
  }), props.isVideo && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    css: videoIcon,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 512"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13V38.13zM48 432L336 256L48 80V432z"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_provided_wp_dot_element.memo(Img));

/***/ }),

/***/ "./src/components/products/product/images/image/index.jsx":
/*!****************************************************************!*\
  !*** ./src/components/products/product/images/image/index.jsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _gallery_state_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gallery/_state/context */ "./src/components/products/product/images/gallery/_state/context.js");
/* harmony import */ var Common_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/images */ "./src/common/images/index.js");
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img */ "./src/components/products/product/images/image/img.jsx");
/* harmony import */ var Common_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/settings */ "./src/common/settings/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");






var Link = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | Link-public */ "Link-public").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../link */ "./src/components/link/index.jsx"));
});

function ProductImage(_ref) {
  var image = _ref.image,
      isFeatured = _ref.isFeatured,
      settings = _ref.settings,
      payload = _ref.payload,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? false : _ref$placeholder,
      _ref$isVideo = _ref.isVideo,
      isVideo = _ref$isVideo === void 0 ? false : _ref$isVideo;
  var _wp$element = wp.element,
      useEffect = __webpack_provided_wp_dot_element.useEffect,
      useContext = __webpack_provided_wp_dot_element.useContext,
      useRef = __webpack_provided_wp_dot_element.useRef,
      useState = __webpack_provided_wp_dot_element.useState;
  var imageRef = useRef();

  var _useContext = useContext(_gallery_state_context__WEBPACK_IMPORTED_MODULE_1__["default"]),
      _useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext, 2),
      galleryState = _useContext2[0],
      galleryDispatch = _useContext2[1];

  var _useState = useState(function () {
    return __webpack_provided_wp_dot_hooks.applyFilters("product.imageSrc", applyImageSizing(), image, isFeatured, isVideo, payload);
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      productImageSrc = _useState2[0],
      setProductImageSrc = _useState2[1];

  function applyImageSizing() {
    if (isVideo) {
      if (isFeatured) {
        if (image.mediaContentType === "EXTERNAL_VIDEO") {
          return image.embeddedUrl;
        } else {
          return image.sources[0].url;
        }
      }

      return (0,Common_images__WEBPACK_IMPORTED_MODULE_2__.doThumbnailSizing)(image.previewImage.url, settings);
    }

    if (placeholder) {
      return image.src;
    }

    if (isFeatured) {
      if (settings.imagesSizingToggle) {
        return (0,Common_images__WEBPACK_IMPORTED_MODULE_2__.doFeaturedSizing)(image.originalSrc, settings);
      }

      return image.originalSrc;
    } else {
      if (settings.thumbnailImagesSizingToggle) {
        return (0,Common_images__WEBPACK_IMPORTED_MODULE_2__.doThumbnailSizing)(image.originalSrc, settings);
      }

      return image.originalSrc;
    }
  }

  useEffect(function () {
    setProductImageSrc(applyImageSizing());

    if (isFeatured) {
      galleryDispatch({
        type: "SET_FEAT_IMAGE_ELEMENT",
        payload: imageRef.current
      });
    }
  }, [image, settings]);
  /*
   
   TODO: Fix duplication here. For some reason the Drift image zoom breaks if we move 
   the image tag into a reusable component. Probably something to do with ref forwarding.
    */

  return productImageSrc ? (0,Common_settings__WEBPACK_IMPORTED_MODULE_4__.hasLink)(settings) ? /*#__PURE__*/React.createElement(Link, {
    payload: payload,
    type: "products",
    linkTo: settings.linkTo,
    target: settings.linkTarget
  }, /*#__PURE__*/React.createElement(_img__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageRef: imageRef,
    image: image,
    productImageSrc: productImageSrc,
    galleryState: galleryState,
    isFeatured: isFeatured,
    linkTo: settings.linkTo,
    isVideo: isVideo
  })) : /*#__PURE__*/React.createElement(_img__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageRef: imageRef,
    image: image,
    productImageSrc: productImageSrc,
    galleryState: galleryState,
    isFeatured: isFeatured,
    linkTo: settings.linkTo,
    isVideo: isVideo
  }) : null;
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_provided_wp_dot_element.memo(ProductImage));

/***/ }),

/***/ "./src/components/products/product/images/index.jsx":
/*!**********************************************************!*\
  !*** ./src/components/products/product/images/index.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gallery_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery/wrapper */ "./src/components/products/product/images/gallery/wrapper/index.jsx");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/products/product/_state/hooks.jsx");
/* harmony import */ var _items_state_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../items/_state/hooks */ "./src/components/items/_state/hooks.jsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");







function ProductImages() {
  var productState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_3__.useProductState)();
  var itemsState = (0,_items_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useItemsState)();
  return (0,Hooks__WEBPACK_IMPORTED_MODULE_1__.usePortal)( /*#__PURE__*/React.createElement(_gallery_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"], {
    defaultGalleryCarouselSettings: productState.defaultGalleryCarouselSettings,
    settings: itemsState.settings,
    payload: productState.payload,
    element: productState.element
  }), (0,Utils__WEBPACK_IMPORTED_MODULE_2__.findPortalElement)(itemsState.settings.dropzoneProductGallery));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductImages);

/***/ }),

/***/ "./src/components/products/product/images/thumbnail/index.jsx":
/*!********************************************************************!*\
  !*** ./src/components/products/product/images/thumbnail/index.jsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image */ "./src/components/products/product/images/image/index.jsx");
/* harmony import */ var _gallery_state_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gallery/_state/context */ "./src/components/products/product/images/gallery/_state/context.js");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */






var _ref =  false ? 0 : {
  name: "1knh69z-ThumbnailCSS",
  styles: "transition:outline 0.2s ease;position:relative;&:hover{img{outline:1px dashed #000000;outline-offset:3px;}};label:ThumbnailCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2ltYWdlcy90aHVtYm5haWwvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCMEIiLCJmaWxlIjoiL1VzZXJzL2FuZHJldy9fd3d3L3Nob3B3cC9odGRvY3Mvd3AtY29udGVudC9wbHVnaW5zL3Nob3B3cC1wcm8vbnBtLXBhY2thZ2VzL3Nob3B3cC1jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3QvaW1hZ2VzL3RodW1ibmFpbC9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCJcbmltcG9ydCBQcm9kdWN0SW1hZ2UgZnJvbSBcIi4uL2ltYWdlXCJcbmltcG9ydCBQcm9kdWN0R2FsbGVyeUNvbnRleHQgZnJvbSBcIi4uL2dhbGxlcnkvX3N0YXRlL2NvbnRleHRcIlxuaW1wb3J0IHsgRmlsdGVySG9vayB9IGZyb20gXCJVdGlsc1wiXG5cbmZ1bmN0aW9uIFByb2R1Y3RUaHVtYm5haWxJbWFnZSh7XG4gIGltYWdlLFxuICBwYXlsb2FkLFxuICBzZXR0aW5ncyxcbiAgaXNFeHRlcm5hbFZpZGVvLFxuICBpc0hvc3RlZFZpZGVvLFxufSkge1xuICBjb25zdCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnRcbiAgY29uc3QgW2dhbGxlcnlTdGF0ZSwgZ2FsbGVyeURpc3BhdGNoXSA9IHVzZUNvbnRleHQoUHJvZHVjdEdhbGxlcnlDb250ZXh0KVxuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKCgpID0+IGZhbHNlKVxuXG4gIGNvbnN0IFRodW1ibmFpbENTUyA9IGNzc2BcbiAgICB0cmFuc2l0aW9uOiBvdXRsaW5lIDAuMnMgZWFzZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGltZyB7XG4gICAgICAgIG91dGxpbmU6IDFweCBkYXNoZWQgIzAwMDAwMDtcbiAgICAgICAgb3V0bGluZS1vZmZzZXQ6IDNweDtcbiAgICAgIH1cbiAgICB9XG4gIGBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghY2hlY2tJc0FjdGl2ZShnYWxsZXJ5U3RhdGUuZmVhdEltYWdlLm9yaWdpbmFsU3JjKSkge1xuICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzQWN0aXZlKHRydWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICBzZXRJc0FjdGl2ZShmYWxzZSlcbiAgICB9XG4gIH0sIFtnYWxsZXJ5U3RhdGUuZmVhdEltYWdlXSlcblxuICBmdW5jdGlvbiBjaGVja0lzQWN0aXZlKGZlYXRJbWFnZVNyYykge1xuICAgIHJldHVybiBmZWF0SW1hZ2VTcmMgPT09IGltYWdlLm9yaWdpbmFsU3JjXG4gIH1cblxuICBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgIGdhbGxlcnlEaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0ZFQVRfSU1BR0VcIiwgcGF5bG9hZDogaW1hZ2UgfSlcbiAgICBnYWxsZXJ5RGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJTRVRfRkVBVF9JTUFHRV9JU19WSURFT1wiLFxuICAgICAgcGF5bG9hZDogaXNFeHRlcm5hbFZpZGVvIHx8IGlzSG9zdGVkVmlkZW8sXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtUaHVtYm5haWxDU1N9XG4gICAgICBjbGFzc05hbWU9XCJ3cHMtY29tcG9uZW50IHdwcy1jb21wb25lbnQtcHJvZHVjdHMtaW1hZ2VzLXRodW1ibmFpbFwiXG4gICAgICBhcmlhLWxhYmVsPVwiUHJvZHVjdCBJbWFnZXMgVGh1bWJuYWlsXCJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBkYXRhLXdwcy1pcy1hY3RpdmU9e2lzQWN0aXZlfVxuICAgID5cbiAgICAgIDxGaWx0ZXJIb29rIG5hbWU9XCJiZWZvcmUucHJvZHVjdFRodW1ibmFpbFwiIGFyZ3M9e1tnYWxsZXJ5U3RhdGVdfSAvPlxuICAgICAge2lzRXh0ZXJuYWxWaWRlbyB8fCBpc0hvc3RlZFZpZGVvID8gKFxuICAgICAgICA8UHJvZHVjdEltYWdlXG4gICAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgICAgIGlzRmVhdHVyZWQ9e2ZhbHNlfVxuICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICBwYXlsb2FkPXtwYXlsb2FkfVxuICAgICAgICAgIGlzVmlkZW89e3RydWV9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8UHJvZHVjdEltYWdlXG4gICAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgICAgIGlzRmVhdHVyZWQ9e2ZhbHNlfVxuICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICBwYXlsb2FkPXtwYXlsb2FkfVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAgPEZpbHRlckhvb2sgbmFtZT1cImFmdGVyLnByb2R1Y3RUaHVtYm5haWxcIiBhcmdzPXtbZ2FsbGVyeVN0YXRlXX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3cC5lbGVtZW50Lm1lbW8oUHJvZHVjdFRodW1ibmFpbEltYWdlKVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function ProductThumbnailImage(_ref2) {
  var image = _ref2.image,
      payload = _ref2.payload,
      settings = _ref2.settings,
      isExternalVideo = _ref2.isExternalVideo,
      isHostedVideo = _ref2.isHostedVideo;
  var _wp$element = wp.element,
      useEffect = __webpack_provided_wp_dot_element.useEffect,
      useContext = __webpack_provided_wp_dot_element.useContext,
      useState = __webpack_provided_wp_dot_element.useState;

  var _useContext = useContext(_gallery_state_context__WEBPACK_IMPORTED_MODULE_2__["default"]),
      _useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useContext, 2),
      galleryState = _useContext2[0],
      galleryDispatch = _useContext2[1];

  var _useState = useState(function () {
    return false;
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var ThumbnailCSS = _ref;
  useEffect(function () {
    if (!checkIsActive(galleryState.featImage.originalSrc)) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }

    return function cleanup() {
      setIsActive(false);
    };
  }, [galleryState.featImage]);

  function checkIsActive(featImageSrc) {
    return featImageSrc === image.originalSrc;
  }

  function onClick() {
    galleryDispatch({
      type: "SET_FEAT_IMAGE",
      payload: image
    });
    galleryDispatch({
      type: "SET_FEAT_IMAGE_IS_VIDEO",
      payload: isExternalVideo || isHostedVideo
    });
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    css: ThumbnailCSS,
    className: "wps-component wps-component-products-images-thumbnail",
    "aria-label": "Product Images Thumbnail",
    onClick: onClick,
    "data-wps-is-active": isActive
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(Utils__WEBPACK_IMPORTED_MODULE_3__.FilterHook, {
    name: "before.productThumbnail",
    args: [galleryState]
  }), isExternalVideo || isHostedVideo ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
    settings: settings,
    isFeatured: false,
    image: image,
    payload: payload,
    isVideo: true
  }) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
    settings: settings,
    isFeatured: false,
    image: image,
    payload: payload
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(Utils__WEBPACK_IMPORTED_MODULE_3__.FilterHook, {
    name: "after.productThumbnail",
    args: [galleryState]
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_provided_wp_dot_element.memo(ProductThumbnailImage));

/***/ }),

/***/ "./src/components/products/product/images/thumbnails/index.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/products/product/images/thumbnails/index.jsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _mapped__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapped */ "./src/components/products/product/images/thumbnails/mapped.jsx");
/* harmony import */ var Common_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Common/images */ "./src/common/images/index.js");
/* harmony import */ var Common_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Common/css */ "./src/common/css/index.jsx");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! await-to-js */ "./node_modules/await-to-js/dist/await-to-js.es5.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");
/* provided dependency */ var __webpack_provided_wp_dot_hooks = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");




/** @jsx jsx */








function ProductThumbnailImages(_ref) {
  var product = _ref.product,
      settings = _ref.settings;
  var useState = __webpack_provided_wp_dot_element.useState;

  var _useState = useState("idle"),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      preloadStatus = _useState2[0],
      setPreloadStatus = _useState2[1];

  var _useState3 = useState(__webpack_provided_wp_dot_hooks.applyFilters("product.thumbnails", product.media)),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 1),
      thumbnails = _useState4[0];

  var thumbnailsWrapperCSS = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.css)("display:grid;grid-template-columns:repeat(5, 1fr);grid-template-rows:1fr;grid-column-gap:15px;grid-row-gap:0px;margin-top:12px;max-width:410px;", (0,Common_css__WEBPACK_IMPORTED_MODULE_5__.mq)("large"), "{display:flex;flex-wrap:wrap;gap:0px 12px;max-width:100%;>div{width:57px;}};label:thumbnailsWrapperCSS;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2ltYWdlcy90aHVtYm5haWxzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmtDIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0L2ltYWdlcy90aHVtYm5haWxzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IFRodW1ibmFpbHMgZnJvbSBcIi4vbWFwcGVkXCJcbmltcG9ydCB7IGRvRmVhdHVyZWRTaXppbmcgfSBmcm9tIFwiQ29tbW9uL2ltYWdlc1wiXG5pbXBvcnQgeyBtcSB9IGZyb20gXCJDb21tb24vY3NzXCJcbmltcG9ydCBpc0VtcHR5IGZyb20gXCJsb2Rhc2gvaXNFbXB0eVwiXG5pbXBvcnQgdG8gZnJvbSBcImF3YWl0LXRvLWpzXCJcblxuZnVuY3Rpb24gUHJvZHVjdFRodW1ibmFpbEltYWdlcyh7IHByb2R1Y3QsIHNldHRpbmdzIH0pIHtcbiAgY29uc3QgeyB1c2VTdGF0ZSB9ID0gd3AuZWxlbWVudFxuICBjb25zdCBbcHJlbG9hZFN0YXR1cywgc2V0UHJlbG9hZFN0YXR1c10gPSB1c2VTdGF0ZShcImlkbGVcIilcblxuICBjb25zdCBbdGh1bWJuYWlsc10gPSB1c2VTdGF0ZShcbiAgICB3cC5ob29rcy5hcHBseUZpbHRlcnMoXCJwcm9kdWN0LnRodW1ibmFpbHNcIiwgcHJvZHVjdC5tZWRpYSlcbiAgKVxuXG4gIGNvbnN0IHRodW1ibmFpbHNXcmFwcGVyQ1NTID0gY3NzYFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDE1cHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBtYXgtd2lkdGg6IDQxMHB4O1xuXG4gICAgJHttcShcImxhcmdlXCIpfSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZ2FwOiAwcHggMTJweDtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcblxuICAgICAgPiBkaXYge1xuICAgICAgICB3aWR0aDogNTdweDtcbiAgICAgIH1cbiAgICB9XG4gIGBcblxuICBmdW5jdGlvbiBoYXNJbWFnZXMoKSB7XG4gICAgaWYgKHNldHRpbmdzLmxpbmtUbyA9PT0gXCJtb2RhbFwiKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvZHVjdCAmJiAhaXNFbXB0eShwcm9kdWN0Lm1lZGlhKVxuICB9XG5cbiAgZnVuY3Rpb24gcHJlbG9hZChpbWFnZU9iaikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuXG4gICAgICBpZiAoaW1hZ2VPYmoubm9kZSAmJiBpbWFnZU9iai5ub2RlLm1lZGlhQ29udGVudFR5cGUgPT09IFwiSU1BR0VcIikge1xuICAgICAgICBpbWcub25sb2FkID0gcmVzb2x2ZVxuICAgICAgICBpbWcub25lcnJvciA9IHJlamVjdFxuICAgICAgICBpbWcuc3JjID0gZG9GZWF0dXJlZFNpemluZyhpbWFnZU9iai5ub2RlLmltYWdlLm9yaWdpbmFsU3JjLCBzZXR0aW5ncylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcHJlbG9hZEFsbChpbWFnZXMpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoaW1hZ2VzLmVkZ2VzLm1hcChwcmVsb2FkKSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHByZWxvYWRJbWFnZXMoKSB7XG4gICAgYXdhaXQgdG8ocHJlbG9hZEFsbChwcm9kdWN0Lm1lZGlhKSlcblxuICAgIHNldFByZWxvYWRTdGF0dXMoXCJkb25lXCIpXG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7XG4gICAgaWYgKHByZWxvYWRTdGF0dXMgPT09IFwiZG9uZVwiKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBwcmVsb2FkSW1hZ2VzKClcbiAgfVxuXG4gIHJldHVybiBoYXNJbWFnZXMoKSA/IChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJ3cHMtdGh1bWJuYWlscy13cmFwcGVyXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJQcm9kdWN0IFRodW1ibmFpbHNcIlxuICAgICAgY3NzPXt0aHVtYm5haWxzV3JhcHBlckNTU31cbiAgICAgIG9uTW91c2VFbnRlcj17cHJlbG9hZFN0YXR1cyA9PT0gXCJpZGxlXCIgPyBvbk1vdXNlRW50ZXIgOiB1bmRlZmluZWR9XG4gICAgPlxuICAgICAgPFRodW1ibmFpbHNcbiAgICAgICAgcGF5bG9hZD17cHJvZHVjdH1cbiAgICAgICAgdGh1bWJuYWlscz17dGh1bWJuYWlsc31cbiAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKSA6IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3AuZWxlbWVudC5tZW1vKFByb2R1Y3RUaHVtYm5haWxJbWFnZXMpXG4iXX0= */"));

  function hasImages() {
    if (settings.linkTo === "modal") {
      return false;
    }

    return product && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(product.media);
  }

  function preload(imageObj) {
    return new Promise(function (resolve, reject) {
      var img = new Image();

      if (imageObj.node && imageObj.node.mediaContentType === "IMAGE") {
        img.onload = resolve;
        img.onerror = reject;
        img.src = (0,Common_images__WEBPACK_IMPORTED_MODULE_4__.doFeaturedSizing)(imageObj.node.image.originalSrc, settings);
      }
    });
  }

  function preloadAll(images) {
    return Promise.all(images.edges.map(preload));
  }

  function preloadImages() {
    return _preloadImages.apply(this, arguments);
  }

  function _preloadImages() {
    _preloadImages = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,await_to_js__WEBPACK_IMPORTED_MODULE_7__["default"])(preloadAll(product.media));

            case 2:
              setPreloadStatus("done");

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _preloadImages.apply(this, arguments);
  }

  function onMouseEnter() {
    if (preloadStatus === "done") {
      return;
    }

    preloadImages();
  }

  return hasImages() ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: "wps-thumbnails-wrapper",
    "aria-label": "Product Thumbnails",
    css: thumbnailsWrapperCSS,
    onMouseEnter: preloadStatus === "idle" ? onMouseEnter : undefined
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mapped__WEBPACK_IMPORTED_MODULE_3__["default"], {
    payload: product,
    thumbnails: thumbnails,
    settings: settings
  })) : null;
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_provided_wp_dot_element.memo(ProductThumbnailImages));

/***/ }),

/***/ "./src/components/products/product/images/thumbnails/mapped.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/products/product/images/thumbnails/mapped.jsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _thumbnail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../thumbnail */ "./src/components/products/product/images/thumbnail/index.jsx");
/* harmony import */ var Common_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Common/images */ "./src/common/images/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");




function Thumbnails(_ref) {
  var payload = _ref.payload,
      thumbnails = _ref.thumbnails,
      settings = _ref.settings;

  function getMediaId(image) {
    var media = (0,Common_images__WEBPACK_IMPORTED_MODULE_1__.getMediaInfo)(image);
    return media.id;
  }

  function getMediaData(image) {
    var media = (0,Common_images__WEBPACK_IMPORTED_MODULE_1__.getMediaInfo)(image);
    return media.data;
  }

  return thumbnails.edges.map(function (image) {
    return /*#__PURE__*/React.createElement(_thumbnail__WEBPACK_IMPORTED_MODULE_0__["default"], {
      key: getMediaId(image),
      image: getMediaData(image),
      payload: payload,
      settings: settings,
      isExternalVideo: image.node.mediaContentType === "EXTERNAL_VIDEO" ? true : false,
      isHostedVideo: image.node.mediaContentType === "VIDEO" ? true : false
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Thumbnails);

/***/ })

}]);
//# sourceMappingURL=ProductImages-public.shopwp-components.js.map