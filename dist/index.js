/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\r\\n    font-family: \\\"Open Sans\\\", sans-serif;\\r\\n}\\r\\n\\r\\nhtml, body {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    border: 0;\\r\\n}\\r\\n\\r\\n.screen-wrapper {\\r\\n    position: relative;\\r\\n    height: auto;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.screen-content {\\r\\n    position: relative;\\r\\n    height: auto;\\r\\n    z-index: 1;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.screen-background {\\r\\n    overflow: hidden;\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    z-index: -1;\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/screens/screen.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/screens/screen.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/screens/screen.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/THEME.js":
/*!**********************!*\
  !*** ./src/THEME.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst THEME = {\r\n\tbackgroundColor: '#0c0c0c',\r\n\t\r\n\tfigColor1: '#1d1d1d',\r\n\t\r\n\tg0: '#0c0c0c',\r\n\tg1: '#1d1d1d',\r\n\tg2: '#2b2b2b',\r\n\t\r\n\tbrightColor1: '#c32285',\r\n\tbrightColor2: '#2d9687',\r\n\tbrightColor3: '#e9b171',\r\n\t\r\n\tmainTextColor: '#ffffff',\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (THEME);\r\n\n\n//# sourceURL=webpack:///./src/THEME.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _screens_about_AboutScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/about/AboutScreen */ \"./src/screens/about/AboutScreen.js\");\n // общие стили\r\n\r\n\r\n\r\nclass Application {\r\n\tconstructor() {\r\n\t\tnew _screens_about_AboutScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.getElementById('screen'));\r\n\t}\r\n}\r\n\r\nnew Application();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/screens/3D.js":
/*!***************************!*\
  !*** ./src/screens/3D.js ***!
  \***************************/
/*! exports provided: Object3D, Torus, Scene3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Object3D\", function() { return Object3D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Torus\", function() { return Torus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Scene3D\", function() { return Scene3D; });\nclass Vector {\r\n\tconstructor(x = 0, y = 0, z = 0) {\r\n\t\tthis.x = x;\r\n\t\tthis.y = y;\r\n\t\tthis.z = z;\r\n\t}\r\n\t\r\n\tget amplitude() {\r\n\t\treturn Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);\r\n\t}\r\n}\r\n\r\nclass Matrix {\r\n\tconstructor() {\r\n\t\tthis.a = 0;\r\n\t\tthis.b = 0;\r\n\t\tthis.c = 0;\r\n\t\t\r\n\t\tthis.d = 0;\r\n\t\tthis.e = 0;\r\n\t\tthis.f = 0;\r\n\t\t\r\n\t\tthis.g = 0;\r\n\t\tthis.h = 0;\r\n\t\tthis.i = 0;\r\n\t}\r\n\t\r\n\tcalculate(/*Vector*/angles) {\r\n\t\tlet cosX = Math.cos(angles.x);  //  в трёх измерениях матрицы поворота для осей X, Y, и Z имеют такой вид:\r\n\t\tlet sinX = Math.sin(angles.x);  //       |cosZ, -sinZ,  0|       |cosY,  0,  sinY|       |1,    0,    0  |\r\n\t\tlet cosY = Math.cos(angles.y);  //  Rz = |sinZ, cosZ,   0|, Ry = |0,     1,  0   |, Rx = |0,  cosX, -sinX|\r\n\t\tlet sinY = Math.sin(angles.y);  //       |0,     0,     1|       |-sinY, 0,  cosY|       |0,  sinX,  cosX|\r\n\t\tlet cosZ = Math.cos(angles.z);  //\r\n\t\tlet sinZ = Math.sin(angles.z);  //\r\n\t\tthis.a = cosZ * cosY;                        //  матрицу поворотов по всем осям можно получить перемножив\r\n\t\tthis.b = cosZ * sinY * sinX - sinZ * cosX;   //  отдельные матрицы     |a, b, c|\r\n\t\tthis.c = cosZ * sinY * cosX + sinZ * sinX;   //  R = Rz(Z)Ry(Y)Rx(X) = |d, e, f|\r\n\t\tthis.d = sinZ * cosY;                        //                        |g, h, i|\r\n\t\tthis.e = sinZ * sinY * sinX + cosZ * cosX;   //\r\n\t\tthis.f = sinZ * sinY * cosX - cosZ * sinX;   //\r\n\t\tthis.g = -sinY;                              //\r\n\t\tthis.h = cosY * sinX;                        //\r\n\t\tthis.i = cosY * cosX;\r\n\t}\r\n\t\r\n\tapply(/*Vector*/v, /*Vector*/vT) {\r\n\t\t// перемножение вектора и матрицы\r\n\t\tvT.x = v.x * this.a + v.y * this.b + v.z * this.c;\r\n\t\tvT.y = v.x * this.d + v.y * this.e + v.z * this.f;\r\n\t\tvT.z = v.x * this.g + v.y * this.h + v.z * this.i;\r\n\t}\r\n}\r\n\r\nclass Object3D {\r\n\tconstructor() {\r\n\t\t\r\n\t\tif (!Object3D.init) {\r\n\t\t\tObject3D.init = true;\r\n\t\t\tObject3D.matrix = new Matrix();\r\n\t\t\tObject3D.vec = new Vector();\r\n\t\t\tObject3D.a = new Vector();\r\n\t\t\tObject3D.b = new Vector();\r\n\t\t}\r\n\t\t\r\n\t\tthis.lines = [];\r\n\t\tthis.color = \"#323232\";\r\n\t\tthis.rotation = new Vector();\r\n\t\tthis.scale = 1;\r\n\t\tthis.offsetX = 0;\r\n\t\tthis.offsetY = 0;\r\n\t\t\r\n\t\tthis.minWidth = -6;\r\n\t\tthis.maxWidth = 8;\r\n\t\tthis.maxDistance = 1;\r\n\t}\r\n\t\r\n\ttick(dt) {\r\n\t}\r\n\t\r\n\tdraw() {\r\n\t}\r\n\t\r\n\tsimplePerspective(ctx, v, scale) {\r\n\t\t// маленький костыль, чтобы не писать целый фруструм :D\r\n\t\t// применение эффекта перспективной матрицы, смещение в центр и увеличение изображения\r\n\t\t// (Math.log(1 + Math.exp(v.z)) + 5) - softplus - чтобы не было резких искажений\r\n\t\tv.x = v.x * 20 * scale * (Math.log(1 + Math.exp(v.z)) + 5) + ctx.canvas.width / 2;\r\n\t\tv.y = -v.y * 20 * scale * (Math.log(1 + Math.exp(v.z)) + 5) + ctx.canvas.height / 2;\r\n\t}\r\n\t\r\n\tdrawMultiSized(ctx, x1, y1, w1, x2, y2, w2) {\r\n\t\tlet dx = (x2 - x1);\r\n\t\tlet dy = (y2 - y1);\r\n\t\tw1 = w1 > 0 ? w1 / 2 : 0;\r\n\t\tw2 = w2 > 0 ? w2 / 2 : 0;\r\n\t\t\r\n\t\tlet length = Math.sqrt(dx ** 2 + dy ** 2);\r\n\t\tif (!length) return; // exit if zero length\r\n\t\tdx /= length;\r\n\t\tdy /= length;\r\n\t\tctx.moveTo(x1 - dy * w1, y1 + dx * w1);\r\n\t\tctx.lineTo(x1 + dy * w1, y1 - dx * w1);\r\n\t\tctx.lineTo(x2 + dy * w2, y2 - dx * w2);\r\n\t\tctx.lineTo(x2 - dy * w2, y2 + dx * w2);\r\n\t}\r\n}\r\n\r\nclass Torus extends Object3D {\r\n\tconstructor(rings, ringSegments, ringSize, offset) {\r\n\t\tsuper();\r\n\t\tlet dots = [];\r\n\t\tfor (let i = 0; i < rings; i++) { // создание торуса.  положение точки зависит от положения плоскости,\r\n\t\t\tObject3D.matrix.calculate(new Vector(0, Math.PI * 2 / rings * i, 0));\r\n\t\t\tfor (let j = 0; j < ringSegments; j++) {\r\n\t\t\t\tlet angle = Math.PI * 2 / ringSegments * j;\r\n\t\t\t\tObject3D.vec.x = ringSize * Math.cos(angle) + offset;\r\n\t\t\t\tObject3D.vec.y = ringSize * Math.sin(angle);\r\n\t\t\t\tObject3D.vec.z = 0;\r\n\t\t\t\tlet v = new Vector();\r\n\t\t\t\tObject3D.matrix.apply(Object3D.vec, v);\r\n\t\t\t\tdots.push(v);\r\n\t\t\t\tthis.maxDistance = Math.max(this.maxDistance, v.amplitude);\r\n\t\t\t}\r\n\t\t\tfor (let j = dots.length - ringSegments; j < dots.length; j++) // соединить точки в одном кольце по кругу\r\n\t\t\t\tthis.lines.push([dots[j], dots[(j + 1) % ringSegments + dots.length - ringSegments]])\r\n\t\t}\r\n\t\tfor (let j = 0; j < dots.length; j++) // соединить точки на одном уровне между кольцами по кругу\r\n\t\t\tthis.lines.push([dots[j], dots[(j + ringSegments) % dots.length]]);\r\n\t}\r\n\t\r\n\ttick(dt) {\r\n\t\tthis.rotation.x = 2;\r\n\t\tthis.rotation.y += .2 * dt;\r\n\t\tthis.rotation.z = 1;\r\n\t}\r\n\t\r\n\tdraw(ctx) {\r\n\t\t\r\n\t\tObject3D.matrix.calculate(this.rotation);\r\n\t\t\r\n\t\tctx.beginPath();\r\n\t\tfor (let j = 0; j < this.lines.length; j++) {\r\n\t\t\t\r\n\t\t\tObject3D.matrix.apply(this.lines[j][0], Object3D.a);\r\n\t\t\tthis.simplePerspective(ctx, Object3D.a, this.scale);\r\n\t\t\t\r\n\t\t\tObject3D.matrix.apply(this.lines[j][1], Object3D.b);\r\n\t\t\tthis.simplePerspective(ctx, Object3D.b, this.scale);\r\n\t\t\t\r\n\t\t\tthis.drawMultiSized(ctx,\r\n\t\t\t\tObject3D.a.x + this.offsetX, Object3D.a.y + this.offsetY,\r\n\t\t\t\t(Object3D.a.z + this.maxDistance) / (this.maxDistance * 2) * (this.maxWidth - this.minWidth) + this.minWidth,\r\n\t\t\t\tObject3D.b.x + this.offsetX, Object3D.b.y + this.offsetY,\r\n\t\t\t\t(Object3D.b.z + this.maxDistance) / (this.maxDistance * 2) * (this.maxWidth - this.minWidth) + this.minWidth,\r\n\t\t\t);\r\n\t\t}\r\n\t\tctx.closePath();\r\n\t\tctx.fillStyle = this.color;\r\n\t\tctx.fill();\r\n\t}\r\n}\r\n\r\nclass Scene3D {\r\n\tconstructor(canvas, w = 100, h = 100) {\r\n\t\tthis.ctx = canvas.getContext('2d');\r\n\t\tthis.backgroundColor = '#1F1F1F';\r\n\t\tthis.setSize(w, h);\r\n\t\t\r\n\t\tthis.figures = [];\r\n\t\t\r\n\t\t// encapsulate player\r\n\t\tlet lastTime = 0;\r\n\t\tlet playing = false;\r\n\t\tlet player = () => {\r\n\t\t\tlet nowTime = Date.now();\r\n\t\t\tlet dt = (nowTime - lastTime) / 1000; // в секундах\r\n\t\t\tlastTime = nowTime;\r\n\t\t\tif (playing) {\r\n\t\t\t\tthis.draw(dt);\r\n\t\t\t\trequestAnimationFrame(player);\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\tthis.play = () => {\r\n\t\t\tif (!playing) {\r\n\t\t\t\tlastTime = Date.now();\r\n\t\t\t\tplaying = true;\r\n\t\t\t\tplayer();\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\tthis.stop = () => {\r\n\t\t\tif (playing) playing = false;\r\n\t\t}\r\n\t\t\r\n\t\tthis.togglePlaying = () => {\r\n\t\t\tif (playing) this.stop();\r\n\t\t\telse this.play();\r\n\t\t}\r\n\t\t\r\n\t\tthis.getIsPlaying = () => playing;\r\n\t}\r\n\t\r\n\tsetSize(w, h) {\r\n\t\tthis.ctx.canvas.width = w;\r\n\t\tthis.ctx.canvas.height = h;\r\n\t}\r\n\t\r\n\tdraw(dt) {\r\n\t\tthis.ctx.rect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\r\n\t\tthis.ctx.fillStyle = this.backgroundColor;\r\n\t\tthis.ctx.fill();\r\n\t\t\r\n\t\tfor (let i = 0; i < this.figures.length; i++) {\r\n\t\t\tlet /*Object3D*/fig = this.figures[i];\r\n\t\t\tfig.tick(dt);\r\n\t\t\tfig.draw(this.ctx);\r\n\t\t}\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/screens/3D.js?");

/***/ }),

/***/ "./src/screens/Screen.js":
/*!*******************************!*\
  !*** ./src/screens/Screen.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Screen; });\n/* harmony import */ var _screen_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen.css */ \"./src/screens/screen.css\");\n/* harmony import */ var _THEME__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../THEME */ \"./src/THEME.js\");\n\r\n\r\n\r\nclass Screen {\r\n\tconstructor(container) {\r\n\t\tthis.wrapper = document.createElement('div');\r\n\t\tthis.wrapper.classList.add('screen-wrapper');\r\n\t\tcontainer.appendChild(this.wrapper);\r\n\t\t\r\n\t\tthis.content = document.createElement('div');\r\n\t\tthis.content.classList.add('screen-content');\r\n\t\tthis.wrapper.appendChild(this.content);\r\n\t\t\r\n\t\tthis.background = document.createElement('div');\r\n\t\tthis.background.style.backgroundColor = _THEME__WEBPACK_IMPORTED_MODULE_1__[\"default\"].backgroundColor;\r\n\t\tthis.background.classList.add('screen-background');\r\n\t\tthis.wrapper.appendChild(this.background);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/screens/Screen.js?");

/***/ }),

/***/ "./src/screens/about/AboutScreen.js":
/*!******************************************!*\
  !*** ./src/screens/about/AboutScreen.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AboutScreen; });\n/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Screen */ \"./src/screens/Screen.js\");\n/* harmony import */ var _about_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.html */ \"./src/screens/about/about.html\");\n/* harmony import */ var _about_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _3D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../3D */ \"./src/screens/3D.js\");\n/* harmony import */ var _THEME__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../THEME */ \"./src/THEME.js\");\n\r\n\r\n\r\n\r\n\r\nclass AboutScreen extends _Screen__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor(container) {\r\n\t\tsuper(container);\r\n\t\t\r\n\t\tthis.content.innerHTML = _about_html__WEBPACK_IMPORTED_MODULE_1___default.a;\r\n\t\t\r\n\t\tthis.torusCanvas = document.createElement('canvas');\r\n\t\tthis.torusCanvas.style.right = '-200px';\r\n\t\tthis.torusCanvas.style.position = 'absolute';\r\n\t\tthis.background.appendChild(this.torusCanvas);\r\n\t\t\r\n\t\tthis.scene = new _3D__WEBPACK_IMPORTED_MODULE_2__[\"Scene3D\"](this.torusCanvas, 800, 800);\r\n\t\tthis.scene.backgroundColor = _THEME__WEBPACK_IMPORTED_MODULE_3__[\"default\"].backgroundColor;\r\n\t\t\r\n\t\tlet torus = new _3D__WEBPACK_IMPORTED_MODULE_2__[\"Torus\"](24, 16, 1, 2);\r\n\t\ttorus.color = _THEME__WEBPACK_IMPORTED_MODULE_3__[\"default\"].brightColor2;\r\n\t\t\r\n\t\tthis.scene.figures.push(torus);\r\n\t\tthis.scene.play();\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/screens/about/AboutScreen.js?");

/***/ }),

/***/ "./src/screens/about/about.html":
/*!**************************************!*\
  !*** ./src/screens/about/about.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div style=\\\"\\r\\nwidth: 100%;\\r\\nheight: 100vh;\\r\\ntext-align: center;\\r\\n\\\">\\r\\n    <div style=\\\"\\r\\n    width: 100%;\\r\\n    min-width: 1000px;\\r\\n    display: inline-block;\\r\\n    margin:  auto;\\r\\n    color: #fff;\\r\\n    font-size: 20px;\\r\\n\\\">\\r\\n        <h1>\\r\\n            Hi! My name is Maxim Batyatin aka devmule.<br>\\r\\n            I develop multiplatform applications and games!\\r\\n        </h1>\\r\\n    </div>\\r\\n</div>\\r\\n\";\n\n//# sourceURL=webpack:///./src/screens/about/about.html?");

/***/ }),

/***/ "./src/screens/screen.css":
/*!********************************!*\
  !*** ./src/screens/screen.css ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_screen_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./screen.css */ \"./node_modules/css-loader/dist/cjs.js!./src/screens/screen.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_screen_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_screen_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/screens/screen.css?");

/***/ })

/******/ });