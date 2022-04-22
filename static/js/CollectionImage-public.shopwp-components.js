"use strict";
(self["webpackChunkshopwpComponents"] = self["webpackChunkshopwpComponents"] || []).push([["CollectionImage-public"],{

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

/***/ "./src/components/collections/collection/image/index.jsx":
/*!***************************************************************!*\
  !*** ./src/components/collections/collection/image/index.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var Hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Hooks */ "./src/hooks/index.js");
/* harmony import */ var Common_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Common/images */ "./src/common/images/index.js");
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Utils */ "./src/utils/index.js");
/* harmony import */ var _items_state_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../items/_state/hooks */ "./src/components/items/_state/hooks.jsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_state/hooks */ "./src/components/collections/collection/_state/hooks.js");
/* provided dependency */ var __webpack_provided_wp_dot_element = __webpack_require__(/*! react */ "react");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */







var Link = __webpack_provided_wp_dot_element.lazy(function () {
  return __webpack_require__.e(/*! import() | Link-public */ "Link-public").then(__webpack_require__.bind(__webpack_require__, /*! ../../../link */ "./src/components/link/index.jsx"));
});

var _ref =  false ? 0 : {
  name: "f39i3g-CollectionImageCSS",
  styles: "max-width:100%;label:CollectionImageCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jb2xsZWN0aW9ucy9jb2xsZWN0aW9uL2ltYWdlL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q2dDIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jb2xsZWN0aW9ucy9jb2xsZWN0aW9uL2ltYWdlL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHsgdXNlUG9ydGFsIH0gZnJvbSBcIkhvb2tzXCJcbmltcG9ydCB7IGFkZEN1c3RvbVNpemluZ1RvSW1hZ2VVcmwgfSBmcm9tIFwiQ29tbW9uL2ltYWdlc1wiXG5pbXBvcnQgeyBmaW5kUG9ydGFsRWxlbWVudCB9IGZyb20gXCJVdGlsc1wiXG5pbXBvcnQgeyB1c2VJdGVtc1N0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL2l0ZW1zL19zdGF0ZS9ob29rc1wiXG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uU3RhdGUgfSBmcm9tIFwiLi4vX3N0YXRlL2hvb2tzXCJcblxuY29uc3QgTGluayA9IHdwLmVsZW1lbnQubGF6eSgoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ0xpbmstcHVibGljJyAqLyBcIi4uLy4uLy4uL2xpbmtcIilcbilcblxuZnVuY3Rpb24gQ29sbGVjdGlvbkltYWdlKCkge1xuICBjb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnRcbiAgY29uc3QgaXRlbXNTdGF0ZSA9IHVzZUl0ZW1zU3RhdGUoKVxuICBjb25zdCBjb2xsZWN0aW9uU3RhdGUgPSB1c2VDb2xsZWN0aW9uU3RhdGUoKVxuXG4gIGNvbnN0IFtpbWFnZVNyYywgc2V0SW1hZ2VTcmNdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIHJldHVybiBjb2xsZWN0aW9uU3RhdGUucGF5bG9hZC5pbWFnZVxuICAgICAgPyBjb2xsZWN0aW9uU3RhdGUucGF5bG9hZC5pbWFnZS5vcmlnaW5hbFNyY1xuICAgICAgOiBmYWxzZVxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpbWFnZVNyYykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNvbGxlY3Rpb25TdGF0ZS5pbWFnZXNTaXppbmdUb2dnbGUpIHtcbiAgICAgIHNldEltYWdlU3JjKFxuICAgICAgICBhZGRDdXN0b21TaXppbmdUb0ltYWdlVXJsKHtcbiAgICAgICAgICBzcmM6IGNvbGxlY3Rpb25TdGF0ZS5wYXlsb2FkLmltYWdlLm9yaWdpbmFsU3JjLFxuICAgICAgICAgIHdpZHRoOiBjb2xsZWN0aW9uU3RhdGUuaW1hZ2VzU2l6aW5nV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBjb2xsZWN0aW9uU3RhdGUuaW1hZ2VzU2l6aW5nSGVpZ2h0LFxuICAgICAgICAgIGNyb3A6IGNvbGxlY3Rpb25TdGF0ZS5pbWFnZXNTaXppbmdDcm9wLFxuICAgICAgICAgIHNjYWxlOiBjb2xsZWN0aW9uU3RhdGUuaW1hZ2VzU2l6aW5nU2NhbGUsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBDb2xsZWN0aW9uSW1hZ2VXcmFwcGVyQ1NTID0gY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYFxuXG4gIGNvbnN0IENvbGxlY3Rpb25JbWFnZUNTUyA9IGNzc2BcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIGBcblxuICByZXR1cm4gdXNlUG9ydGFsKFxuICAgIGltYWdlU3JjID8gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJ3cHMtY29tcG9uZW50IHdwcy1jb21wb25lbnQtY29sbGVjdGlvbi1pbWFnZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJDb2xsZWN0aW9uIEltYWdlXCJcbiAgICAgICAgY3NzPXtDb2xsZWN0aW9uSW1hZ2VXcmFwcGVyQ1NTfVxuICAgICAgPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHR5cGU9XCJjb2xsZWN0aW9uc1wiXG4gICAgICAgICAgcGF5bG9hZD17Y29sbGVjdGlvblN0YXRlLnBheWxvYWR9XG4gICAgICAgICAgbGlua1RvPXtpdGVtc1N0YXRlLnNldHRpbmdzLmxpbmtUb31cbiAgICAgICAgICB0YXJnZXQ9e2l0ZW1zU3RhdGUuc2V0dGluZ3MubGlua1RhcmdldH1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGl0ZW1Qcm9wPVwiaW1hZ2VcIlxuICAgICAgICAgICAgc3JjPXtpbWFnZVNyY31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndwcy1wcm9kdWN0LWltYWdlXCJcbiAgICAgICAgICAgIGNzcz17Q29sbGVjdGlvbkltYWdlQ1NTfVxuICAgICAgICAgICAgYWx0PXtcbiAgICAgICAgICAgICAgY29sbGVjdGlvblN0YXRlLnBheWxvYWQuaW1hZ2VcbiAgICAgICAgICAgICAgICA/IGNvbGxlY3Rpb25TdGF0ZS5wYXlsb2FkLmltYWdlLmFsdFRleHRcbiAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApIDogbnVsbCxcbiAgICBmaW5kUG9ydGFsRWxlbWVudChpdGVtc1N0YXRlLnNldHRpbmdzLmRyb3B6b25lQ29sbGVjdGlvbkltYWdlKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25JbWFnZVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 =  false ? 0 : {
  name: "8fsg2c-CollectionImageWrapperCSS",
  styles: "margin-bottom:20px;max-width:400px;label:CollectionImageWrapperCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jb2xsZWN0aW9ucy9jb2xsZWN0aW9uL2ltYWdlL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q3VDIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXcvX3d3dy9zaG9wd3AvaHRkb2NzL3dwLWNvbnRlbnQvcGx1Z2lucy9zaG9wd3AtcHJvL25wbS1wYWNrYWdlcy9zaG9wd3AtY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9jb2xsZWN0aW9ucy9jb2xsZWN0aW9uL2ltYWdlL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxuaW1wb3J0IHsgdXNlUG9ydGFsIH0gZnJvbSBcIkhvb2tzXCJcbmltcG9ydCB7IGFkZEN1c3RvbVNpemluZ1RvSW1hZ2VVcmwgfSBmcm9tIFwiQ29tbW9uL2ltYWdlc1wiXG5pbXBvcnQgeyBmaW5kUG9ydGFsRWxlbWVudCB9IGZyb20gXCJVdGlsc1wiXG5pbXBvcnQgeyB1c2VJdGVtc1N0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL2l0ZW1zL19zdGF0ZS9ob29rc1wiXG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uU3RhdGUgfSBmcm9tIFwiLi4vX3N0YXRlL2hvb2tzXCJcblxuY29uc3QgTGluayA9IHdwLmVsZW1lbnQubGF6eSgoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ0xpbmstcHVibGljJyAqLyBcIi4uLy4uLy4uL2xpbmtcIilcbilcblxuZnVuY3Rpb24gQ29sbGVjdGlvbkltYWdlKCkge1xuICBjb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnRcbiAgY29uc3QgaXRlbXNTdGF0ZSA9IHVzZUl0ZW1zU3RhdGUoKVxuICBjb25zdCBjb2xsZWN0aW9uU3RhdGUgPSB1c2VDb2xsZWN0aW9uU3RhdGUoKVxuXG4gIGNvbnN0IFtpbWFnZVNyYywgc2V0SW1hZ2VTcmNdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIHJldHVybiBjb2xsZWN0aW9uU3RhdGUucGF5bG9hZC5pbWFnZVxuICAgICAgPyBjb2xsZWN0aW9uU3RhdGUucGF5bG9hZC5pbWFnZS5vcmlnaW5hbFNyY1xuICAgICAgOiBmYWxzZVxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpbWFnZVNyYykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNvbGxlY3Rpb25TdGF0ZS5pbWFnZXNTaXppbmdUb2dnbGUpIHtcbiAgICAgIHNldEltYWdlU3JjKFxuICAgICAgICBhZGRDdXN0b21TaXppbmdUb0ltYWdlVXJsKHtcbiAgICAgICAgICBzcmM6IGNvbGxlY3Rpb25TdGF0ZS5wYXlsb2FkLmltYWdlLm9yaWdpbmFsU3JjLFxuICAgICAgICAgIHdpZHRoOiBjb2xsZWN0aW9uU3RhdGUuaW1hZ2VzU2l6aW5nV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBjb2xsZWN0aW9uU3RhdGUuaW1hZ2VzU2l6aW5nSGVpZ2h0LFxuICAgICAgICAgIGNyb3A6IGNvbGxlY3Rpb25TdGF0ZS5pbWFnZXNTaXppbmdDcm9wLFxuICAgICAgICAgIHNjYWxlOiBjb2xsZWN0aW9uU3RhdGUuaW1hZ2VzU2l6aW5nU2NhbGUsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBDb2xsZWN0aW9uSW1hZ2VXcmFwcGVyQ1NTID0gY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYFxuXG4gIGNvbnN0IENvbGxlY3Rpb25JbWFnZUNTUyA9IGNzc2BcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIGBcblxuICByZXR1cm4gdXNlUG9ydGFsKFxuICAgIGltYWdlU3JjID8gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJ3cHMtY29tcG9uZW50IHdwcy1jb21wb25lbnQtY29sbGVjdGlvbi1pbWFnZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJDb2xsZWN0aW9uIEltYWdlXCJcbiAgICAgICAgY3NzPXtDb2xsZWN0aW9uSW1hZ2VXcmFwcGVyQ1NTfVxuICAgICAgPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHR5cGU9XCJjb2xsZWN0aW9uc1wiXG4gICAgICAgICAgcGF5bG9hZD17Y29sbGVjdGlvblN0YXRlLnBheWxvYWR9XG4gICAgICAgICAgbGlua1RvPXtpdGVtc1N0YXRlLnNldHRpbmdzLmxpbmtUb31cbiAgICAgICAgICB0YXJnZXQ9e2l0ZW1zU3RhdGUuc2V0dGluZ3MubGlua1RhcmdldH1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGl0ZW1Qcm9wPVwiaW1hZ2VcIlxuICAgICAgICAgICAgc3JjPXtpbWFnZVNyY31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndwcy1wcm9kdWN0LWltYWdlXCJcbiAgICAgICAgICAgIGNzcz17Q29sbGVjdGlvbkltYWdlQ1NTfVxuICAgICAgICAgICAgYWx0PXtcbiAgICAgICAgICAgICAgY29sbGVjdGlvblN0YXRlLnBheWxvYWQuaW1hZ2VcbiAgICAgICAgICAgICAgICA/IGNvbGxlY3Rpb25TdGF0ZS5wYXlsb2FkLmltYWdlLmFsdFRleHRcbiAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApIDogbnVsbCxcbiAgICBmaW5kUG9ydGFsRWxlbWVudChpdGVtc1N0YXRlLnNldHRpbmdzLmRyb3B6b25lQ29sbGVjdGlvbkltYWdlKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25JbWFnZVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function CollectionImage() {
  var _wp$element = wp.element,
      useState = __webpack_provided_wp_dot_element.useState,
      useEffect = __webpack_provided_wp_dot_element.useEffect;
  var itemsState = (0,_items_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useItemsState)();
  var collectionState = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_5__.useCollectionState)();

  var _useState = useState(function () {
    return collectionState.payload.image ? collectionState.payload.image.originalSrc : false;
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      imageSrc = _useState2[0],
      setImageSrc = _useState2[1];

  useEffect(function () {
    if (!imageSrc) {
      return;
    }

    if (collectionState.imagesSizingToggle) {
      setImageSrc((0,Common_images__WEBPACK_IMPORTED_MODULE_2__.addCustomSizingToImageUrl)({
        src: collectionState.payload.image.originalSrc,
        width: collectionState.imagesSizingWidth,
        height: collectionState.imagesSizingHeight,
        crop: collectionState.imagesSizingCrop,
        scale: collectionState.imagesSizingScale
      }));
    }
  }, []);
  var CollectionImageWrapperCSS = _ref2;
  var CollectionImageCSS = _ref;
  return (0,Hooks__WEBPACK_IMPORTED_MODULE_1__.usePortal)(imageSrc ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "wps-component wps-component-collection-image",
    "aria-label": "Collection Image",
    css: CollectionImageWrapperCSS
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(Link, {
    type: "collections",
    payload: collectionState.payload,
    linkTo: itemsState.settings.linkTo,
    target: itemsState.settings.linkTarget
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
    itemProp: "image",
    src: imageSrc,
    className: "wps-product-image",
    css: CollectionImageCSS,
    alt: collectionState.payload.image ? collectionState.payload.image.altText : "",
    loading: "lazy"
  }))) : null, (0,Utils__WEBPACK_IMPORTED_MODULE_3__.findPortalElement)(itemsState.settings.dropzoneCollectionImage));
}

/* harmony default export */ __webpack_exports__["default"] = (CollectionImage);

/***/ })

}]);
//# sourceMappingURL=CollectionImage-public.shopwp-components.js.map