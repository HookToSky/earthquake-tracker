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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/components/infoLegend/index.sass":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/components/infoLegend/index.sass ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".info {\n  padding: 6px 8px;\n  font: 14px/16px Arial, Helvetica, sans-serif;\n  background: white;\n  background: rgba(255, 255, 255, 0.8);\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n}\n\n.info h4 {\n  margin: 0px;\n  color: black;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.legend {\n  text-align: left;\n  line-height: 18px;\n  color: #555;\n}\n\n.legend i {\n  width: 18px;\n  height: 18px;\n  float: left;\n  margin-right: 4px;\n  opacity: 0.7;\n}", "",{"version":3,"sources":["webpack://./src/components/infoLegend/index.sass"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,4CAAA;EACA,iBAAA;EACA,oCAAA;EACA,uCAAA;EACA,kBAAA;AACJ;;AACA;EACI,WAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;AAEJ;;AAAA;EACI,gBAAA;EACA,iBAAA;EACA,WAAA;AAGJ;;AADA;EACI,WAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;EACA,YAAA;AAIJ","sourcesContent":[".info \n    padding: 6px 8px\n    font: 14px/16px Arial, Helvetica, sans-serif\n    background: white\n    background: rgba(255, 255, 255, 0.8)\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2)\n    border-radius: 5px\n\n.info h4 \n    margin: 0px\n    color: black\n    font-weight: bold\n    font-size: 14px\n\n.legend \n    text-align: left\n    line-height: 18px\n    color: #555\n\n.legend i \n    width: 18px\n    height: 18px\n    float: left\n    margin-right: 4px\n    opacity: 0.7"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/components/loadingSpinner/index.module.sass":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/components/loadingSpinner/index.module.sass ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "._1cEmQJmINKAgS2NiFKQ2NW {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  z-index: 999999;\n}\n\n._1cEmQJmINKAgS2NiFKQ2NW img {\n  width: 66px;\n  height: 66px;\n  position: absolute;\n}", "",{"version":3,"sources":["webpack://./src/components/loadingSpinner/index.module.sass"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,eAAA;AACJ;;AACA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AAEJ","sourcesContent":[".loader \n    position: absolute\n    top: 40%\n    left: 50%\n    z-index: 999999\n\n.loader img \n    width: 66px\n    height: 66px\n    position: absolute"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"loader": "_1cEmQJmINKAgS2NiFKQ2NW"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/components/mapContainer/index.module.sass":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/components/mapContainer/index.module.sass ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "._2DaQCdxU95Lku8d76752cK {\n  height: 100vh;\n}", "",{"version":3,"sources":["webpack://./src/components/mapContainer/index.module.sass"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ","sourcesContent":[".map\n    height: 100vh"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"map": "_2DaQCdxU95Lku8d76752cK"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/index.sass":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/index.sass ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0px;\n}", "",{"version":3,"sources":["webpack://./src/index.sass"],"names":[],"mappings":"AAAA;EACI,WAAA;AACJ","sourcesContent":["body \n    margin: 0px"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/App/index.tsx":
/*!***************************!*\
  !*** ./src/App/index.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_mapContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/mapContainer */ "./src/components/mapContainer/index.tsx");


var App = function () { return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_mapContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0) }, void 0)); };
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/common/httpService.ts":
/*!***********************************!*\
  !*** ./src/common/httpService.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = process.env.REACT_APP_API_URL;
axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.request.use(function (config) {
    if (!config.headers.Authorization) {
        var token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = "Bearer " + token;
        }
    }
    return config;
}, function (error) { return Promise.reject(error); });
/* harmony default export */ __webpack_exports__["default"] = ({
    get: axios__WEBPACK_IMPORTED_MODULE_0___default.a.get,
    post: axios__WEBPACK_IMPORTED_MODULE_0___default.a.post,
    put: axios__WEBPACK_IMPORTED_MODULE_0___default.a.put,
    delete: axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/components/infoLegend/index.sass":
/*!**********************************************!*\
  !*** ./src/components/infoLegend/index.sass ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ref_5_2_index_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./index.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/components/infoLegend/index.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ref_5_2_index_sass__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ref_5_2_index_sass__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/infoLegend/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/infoLegend/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet */ "react-leaflet");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../marker */ "./src/components/marker/index.ts");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.sass */ "./src/components/infoLegend/index.sass");





var InfoLegend = function () {
    var map = Object(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["useLeaflet"])().map;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var legend = new leaflet__WEBPACK_IMPORTED_MODULE_1___default.a.Control({ position: 'bottomright' });
        legend.onAdd = function () {
            var div = leaflet__WEBPACK_IMPORTED_MODULE_1___default.a.DomUtil.create('div', 'info legend');
            var grades = [0, 1, 2, 3, 5, 7];
            var labels = [];
            labels.push('<h4>Magnitude Color Code</h4>');
            grades.forEach(function (from, index) {
                var to = grades[index + 1];
                labels.push("<i style=\"background:" + Object(_marker__WEBPACK_IMPORTED_MODULE_3__["markerColor"])(from + 1) + "\"></i>" + from + (to ? "&ndash;" + to : '+'));
            });
            div.innerHTML = labels.join('<br>');
            return div;
        };
        if (map)
            legend.addTo(map);
    }, [map]);
    return null;
};
/* harmony default export */ __webpack_exports__["default"] = (InfoLegend);


/***/ }),

/***/ "./src/components/loadingSpinner/index.module.sass":
/*!*********************************************************!*\
  !*** ./src/components/loadingSpinner/index.module.sass ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ref_5_2_index_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./index.module.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/components/loadingSpinner/index.module.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ref_5_2_index_module_sass__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ref_5_2_index_module_sass__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/loadingSpinner/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/loadingSpinner/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loader_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.gif */ "./src/components/loadingSpinner/loader.gif");
/* harmony import */ var _index_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.sass */ "./src/components/loadingSpinner/index.module.sass");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var LoadingSpinner = function () {
    return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", __assign({ className: _index_module_sass__WEBPACK_IMPORTED_MODULE_2__["default"].loader }, { children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", { src: _loader_gif__WEBPACK_IMPORTED_MODULE_1__["default"], alt: "loader" }, void 0) }), void 0));
};
/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);


/***/ }),

/***/ "./src/components/loadingSpinner/loader.gif":
/*!**************************************************!*\
  !*** ./src/components/loadingSpinner/loader.gif ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/gif;base64,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");

/***/ }),

/***/ "./src/components/map/customHooks.ts":
/*!*******************************************!*\
  !*** ./src/components/map/customHooks.ts ***!
  \*******************************************/
/*! exports provided: useEarthquakesFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEarthquakesFetcher", function() { return useEarthquakesFetcher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_earthquakeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/earthquakeService */ "./src/services/earthquakeService.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


function useEarthquakesFetcher() {
    var _this = this;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}), earthquakes = _a[0], setEarthquakes = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), loading = _b[0], setLoading = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), error = _c[0], setError = _c[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setLoading(true);
        setError(false);
        var fetchEarthquakes = function () { return __awaiter(_this, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Object(_services_earthquakeService__WEBPACK_IMPORTED_MODULE_1__["getEarthquakes"])()];
                    case 1:
                        data = _a.sent();
                        setEarthquakes(data);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        setError(true);
                        return [3 /*break*/, 3];
                    case 3:
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchEarthquakes();
    }, []);
    return [earthquakes, loading, error];
}


/***/ }),

/***/ "./src/components/map/helpers.ts":
/*!***************************************!*\
  !*** ./src/components/map/helpers.ts ***!
  \***************************************/
/*! exports provided: onEachFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onEachFeature", function() { return onEachFeature; });
var timeFormatter = function (time, offset) {
    var d = new Date(time);
    var utc = d.getTime() + d.getTimezoneOffset() * 60000;
    var nd = new Date(utc + 3600000 * offset);
    return nd.toLocaleString();
};
var onEachFeature = function (feature, layer) {
    var _a = feature.properties, title = _a.title, place = _a.place, time = _a.time, mag = _a.mag, sig = _a.sig, coordinates = feature.geometry.coordinates;
    var content = "\n      <h3 style=\"font-size: 1.17em; font-weight: bold\">" + title + "</h3>\n      <b>Time (GMT+2)</b>: " + timeFormatter(time, 2) + " <br>\n      <b>Place</b>: " + place + " <br>\n      <b>Lon</b>: " + coordinates[0] + " <br>\n      <b>Lat</b>: " + coordinates[1] + " <br>\n      <b>Depth</b>: " + coordinates[2] + " km <br>\n      <b>Magnitude</b>: " + mag + " Richter <br>\n      <b>Significance</b>: " + sig + " in range [0,1000] <br>\n  ";
    layer.bindPopup(content);
};


/***/ }),

/***/ "./src/components/map/index.tsx":
/*!**************************************!*\
  !*** ./src/components/map/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-leaflet */ "react-leaflet");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loadingSpinner */ "./src/components/loadingSpinner/index.tsx");
/* harmony import */ var _marker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../marker */ "./src/components/marker/index.ts");
/* harmony import */ var _customHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customHooks */ "./src/components/map/customHooks.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers */ "./src/components/map/helpers.ts");








var geojson;
var EarthquakeMap = function () {
    var _a = Object(_customHooks__WEBPACK_IMPORTED_MODULE_6__["useEarthquakesFetcher"])(), earthquakes = _a[0], loading = _a[1];
    var map = Object(react_leaflet__WEBPACK_IMPORTED_MODULE_3__["useLeaflet"])().map;
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (map && map.hasLayer(geojson))
            map.removeLayer(geojson);
        geojson = leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.geoJSON(earthquakes.features, {
            onEachFeature: _helpers__WEBPACK_IMPORTED_MODULE_7__["onEachFeature"],
            pointToLayer: function (feature, latlng) {
                var magnitude = feature.properties.mag;
                return leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.circleMarker(latlng, Object(_marker__WEBPACK_IMPORTED_MODULE_5__["geojsonMarkerOptions"])(magnitude));
            }
        });
        if (map)
            geojson.addTo(map);
    }, [earthquakes, map]);
    if (loading)
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_loadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0);
    return null;
};
/* harmony default export */ __webpack_exports__["default"] = (EarthquakeMap);


/***/ }),

/***/ "./src/components/mapContainer/index.module.sass":
/*!*******************************************************!*\
  !*** ./src/components/mapContainer/index.module.sass ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ref_5_2_index_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./index.module.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/components/mapContainer/index.module.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ref_5_2_index_module_sass__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ref_5_2_index_module_sass__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/mapContainer/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/mapContainer/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-leaflet */ "react-leaflet");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map */ "./src/components/map/index.tsx");
/* harmony import */ var _constants_tileLayerOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/tileLayerOptions */ "./src/constants/tileLayerOptions.ts");
/* harmony import */ var _index_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.sass */ "./src/components/mapContainer/index.module.sass");
/* harmony import */ var _infoLegend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../infoLegend */ "./src/components/infoLegend/index.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var MapContainer = function () {
    return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Map"], __assign({ center: [0, 0], zoom: 3, className: _index_module_sass__WEBPACK_IMPORTED_MODULE_4__["default"].map }, { children: [Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["LayersControl"], __assign({ position: "topright" }, { children: _constants_tileLayerOptions__WEBPACK_IMPORTED_MODULE_3__["tileLayerOptions"].map(function (_a) {
                    var id = _a.id, name = _a.name, attribution = _a.attribution, url = _a.url, checked = _a.checked;
                    return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["LayersControl"].BaseLayer, __assign({ name: name, checked: checked }, { children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["TileLayer"], { attribution: attribution, url: url }, void 0) }), id));
                }) }), void 0),
            Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_map__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0),
            Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_infoLegend__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0),
            Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["ScaleControl"], {}, void 0)] }), void 0));
};
/* harmony default export */ __webpack_exports__["default"] = (MapContainer);


/***/ }),

/***/ "./src/components/marker/index.ts":
/*!****************************************!*\
  !*** ./src/components/marker/index.ts ***!
  \****************************************/
/*! exports provided: markerColor, geojsonMarkerOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerColor", function() { return markerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geojsonMarkerOptions", function() { return geojsonMarkerOptions; });
/* eslint-disable no-nested-ternary */
var markerColor = function (magnitude) {
    return magnitude <= 1
        ? '#056FF7'
        : magnitude > 1 && magnitude <= 2
            ? '#7D3C98'
            : magnitude > 2 && magnitude <= 3
                ? '#00B800'
                : magnitude > 3 && magnitude <= 5
                    ? '#FFCF00'
                    : magnitude > 5 && magnitude <= 7
                        ? '#FF9000'
                        : '#FF0000';
};
var geojsonMarkerOptions = function (magnitude) {
    return {
        radius: 2.5 * magnitude,
        fillColor: markerColor(magnitude),
        color: 'grey',
        weight: 0.7,
        opacity: 1,
        fillOpacity: 0.8
    };
};


/***/ }),

/***/ "./src/constants/tileLayerOptions.ts":
/*!*******************************************!*\
  !*** ./src/constants/tileLayerOptions.ts ***!
  \*******************************************/
/*! exports provided: tileLayerOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileLayerOptions", function() { return tileLayerOptions; });
var tileLayerOptions = [
    {
        id: 1,
        name: 'GoogleStreets',
        attribution: '&copy; Google',
        url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        checked: true
    },
    {
        id: 2,
        name: 'GoogleSatellite',
        attribution: '&copy; Google',
        url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
        checked: false
    }
];


/***/ }),

/***/ "./src/index.sass":
/*!************************!*\
  !*** ./src/index.sass ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ref_5_2_index_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--5-2!./index.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/index.sass");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ref_5_2_index_sass__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ref_5_2_index_sass__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.sass */ "./src/index.sass");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App/index.tsx");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.ts");







react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.hydrate(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.StrictMode, { children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_App__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0) }, void 0), document.getElementById('root'));
_serviceWorker__WEBPACK_IMPORTED_MODULE_6__["unregister"]();


/***/ }),

/***/ "./src/serviceWorker.ts":
/*!******************************!*\
  !*** ./src/serviceWorker.ts ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
    if (false) { var publicUrl; }
}
function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then(function (registration) {
        registration.onupdatefound = function () {
            var installingWorker = registration.installing;
            if (installingWorker == null) {
                return;
            }
            installingWorker.onstatechange = function () {
                if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        // At this point, the updated precached content has been fetched,
                        // but the previous service worker will still serve the older
                        // content until all client tabs are closed.
                        console.log('New content is available and will be used when all ' +
                            'tabs for this page are closed. See https://bit.ly/CRA-PWA.');
                        // Execute callback
                        if (config && config.onUpdate) {
                            config.onUpdate(registration);
                        }
                    }
                    else {
                        // At this point, everything has been precached.
                        // It's the perfect time to display a
                        // "Content is cached for offline use." message.
                        console.log('Content is cached for offline use.');
                        // Execute callback
                        if (config && config.onSuccess) {
                            config.onSuccess(registration);
                        }
                    }
                }
            };
        };
    })
        .catch(function (error) {
        console.error('Error during service worker registration:', error);
    });
}
function checkValidServiceWorker(swUrl, config) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl)
        .then(function (response) {
        // Ensure service worker exists, and that we really are getting a JS file.
        var contentType = response.headers.get('content-type');
        if (response.status === 404 ||
            (contentType != null && contentType.indexOf('javascript') === -1)) {
            // No service worker found. Probably a different app. Reload the page.
            navigator.serviceWorker.ready.then(function (registration) {
                registration.unregister().then(function () {
                    window.location.reload();
                });
            });
        }
        else {
            // Service worker found. Proceed as normal.
            registerValidSW(swUrl, config);
        }
    })
        .catch(function () {
        console.log('No internet connection found. App is running in offline mode.');
    });
}
function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.unregister();
        });
    }
}


/***/ }),

/***/ "./src/services/earthquakeService.ts":
/*!*******************************************!*\
  !*** ./src/services/earthquakeService.ts ***!
  \*******************************************/
/*! exports provided: getEarthquakes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEarthquakes", function() { return getEarthquakes; });
/* harmony import */ var _common_httpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/httpService */ "./src/common/httpService.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var getEarthquakes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, _common_httpService__WEBPACK_IMPORTED_MODULE_0__["default"].get('/earthquakes/feed/v1.0/summary/all_day.geojson')];
            case 1:
                response = _a.sent();
                data = response.data;
                return [2 /*return*/, data];
            case 2:
                error_1 = _a.sent();
                console.log('There was an error while getting the earthquakes', error_1);
                return [2 /*return*/, false];
            case 3: return [2 /*return*/];
        }
    });
}); };


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "leaflet":
/*!**************************!*\
  !*** external "leaflet" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("leaflet");

/***/ }),

/***/ "leaflet/dist/leaflet.css":
/*!*******************************************!*\
  !*** external "leaflet/dist/leaflet.css" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("leaflet/dist/leaflet.css");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-leaflet":
/*!********************************!*\
  !*** external "react-leaflet" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-leaflet");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mb0xlZ2VuZC9pbmRleC5zYXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvYWRpbmdTcGlubmVyL2luZGV4Lm1vZHVsZS5zYXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hcENvbnRhaW5lci9pbmRleC5tb2R1bGUuc2FzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2FzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaHR0cFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mb0xlZ2VuZC9pbmRleC5zYXNzPzNhZDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5mb0xlZ2VuZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9hZGluZ1NwaW5uZXIvaW5kZXgubW9kdWxlLnNhc3M/YTUyNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2FkaW5nU3Bpbm5lci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9hZGluZ1NwaW5uZXIvbG9hZGVyLmdpZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXAvY3VzdG9tSG9va3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXBDb250YWluZXIvaW5kZXgubW9kdWxlLnNhc3M/YjczMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXBDb250YWluZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hcmtlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL3RpbGVMYXllck9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNhc3M/ZjY0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlV29ya2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9lYXJ0aHF1YWtlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxlYWZsZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxlYWZsZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7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QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c3hcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pbmZvIHtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICBmb250OiAxNHB4LzE2cHggQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaW5mbyBoNCB7XFxuICBtYXJnaW46IDBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ubGVnZW5kIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiAjNTU1O1xcbn1cXG5cXG4ubGVnZW5kIGkge1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgb3BhY2l0eTogMC43O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9pbmZvTGVnZW5kL2luZGV4LnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBSUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmluZm8gXFxuICAgIHBhZGRpbmc6IDZweCA4cHhcXG4gICAgZm9udDogMTRweC8xNnB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcXG4gICAgYmFja2dyb3VuZDogd2hpdGVcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVxcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcXG5cXG4uaW5mbyBoNCBcXG4gICAgbWFyZ2luOiAwcHhcXG4gICAgY29sb3I6IGJsYWNrXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXFxuICAgIGZvbnQtc2l6ZTogMTRweFxcblxcbi5sZWdlbmQgXFxuICAgIHRleHQtYWxpZ246IGxlZnRcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHhcXG4gICAgY29sb3I6ICM1NTVcXG5cXG4ubGVnZW5kIGkgXFxuICAgIHdpZHRoOiAxOHB4XFxuICAgIGhlaWdodDogMThweFxcbiAgICBmbG9hdDogbGVmdFxcbiAgICBtYXJnaW4tcmlnaHQ6IDRweFxcbiAgICBvcGFjaXR5OiAwLjdcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuXzFjRW1RSm1JTktBZ1MyTmlGS1EyTlcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiA5OTk5OTk7XFxufVxcblxcbi5fMWNFbVFKbUlOS0FnUzJOaUZLUTJOVyBpbWcge1xcbiAgd2lkdGg6IDY2cHg7XFxuICBoZWlnaHQ6IDY2cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2xvYWRpbmdTcGlubmVyL2luZGV4Lm1vZHVsZS5zYXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubG9hZGVyIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcXG4gICAgdG9wOiA0MCVcXG4gICAgbGVmdDogNTAlXFxuICAgIHotaW5kZXg6IDk5OTk5OVxcblxcbi5sb2FkZXIgaW1nIFxcbiAgICB3aWR0aDogNjZweFxcbiAgICBoZWlnaHQ6IDY2cHhcXG4gICAgcG9zaXRpb246IGFic29sdXRlXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibG9hZGVyXCI6IFwiXzFjRW1RSm1JTktBZ1MyTmlGS1EyTldcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuXzJEYVFDZHhVOTVMa3U4ZDc2NzUyY0sge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbWFwQ29udGFpbmVyL2luZGV4Lm1vZHVsZS5zYXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYXBcXG4gICAgaGVpZ2h0OiAxMDB2aFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1hcFwiOiBcIl8yRGFRQ2R4VTk1TGt1OGQ3Njc1MmNLXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSBcXG4gICAgbWFyZ2luOiAwcHhcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgTWFwQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvbWFwQ29udGFpbmVyJztcbnZhciBBcHAgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoX2pzeChfRnJhZ21lbnQsIHsgY2hpbGRyZW46IF9qc3goTWFwQ29udGFpbmVyLCB7fSwgdm9pZCAwKSB9LCB2b2lkIDApKTsgfTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9VUkw7XG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIGlmICghY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbikge1xuICAgICAgICB2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aFRva2VuJyk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IFwiQmVhcmVyIFwiICsgdG9rZW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbmZpZztcbn0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpOyB9KTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXQ6IGF4aW9zLmdldCxcbiAgICBwb3N0OiBheGlvcy5wb3N0LFxuICAgIHB1dDogYXhpb3MucHV0LFxuICAgIGRlbGV0ZTogYXhpb3MuZGVsZXRlXG59O1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuL2luZGV4LnNhc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0JztcbmltcG9ydCB7IHVzZUxlYWZsZXQgfSBmcm9tICdyZWFjdC1sZWFmbGV0JztcbmltcG9ydCB7IG1hcmtlckNvbG9yIH0gZnJvbSAnLi4vbWFya2VyJztcbmltcG9ydCAnLi9pbmRleC5zYXNzJztcbnZhciBJbmZvTGVnZW5kID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtYXAgPSB1c2VMZWFmbGV0KCkubWFwO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsZWdlbmQgPSBuZXcgTC5Db250cm9sKHsgcG9zaXRpb246ICdib3R0b21yaWdodCcgfSk7XG4gICAgICAgIGxlZ2VuZC5vbkFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkaXYgPSBMLkRvbVV0aWwuY3JlYXRlKCdkaXYnLCAnaW5mbyBsZWdlbmQnKTtcbiAgICAgICAgICAgIHZhciBncmFkZXMgPSBbMCwgMSwgMiwgMywgNSwgN107XG4gICAgICAgICAgICB2YXIgbGFiZWxzID0gW107XG4gICAgICAgICAgICBsYWJlbHMucHVzaCgnPGg0Pk1hZ25pdHVkZSBDb2xvciBDb2RlPC9oND4nKTtcbiAgICAgICAgICAgIGdyYWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChmcm9tLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciB0byA9IGdyYWRlc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIGxhYmVscy5wdXNoKFwiPGkgc3R5bGU9XFxcImJhY2tncm91bmQ6XCIgKyBtYXJrZXJDb2xvcihmcm9tICsgMSkgKyBcIlxcXCI+PC9pPlwiICsgZnJvbSArICh0byA/IFwiJm5kYXNoO1wiICsgdG8gOiAnKycpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGxhYmVscy5qb2luKCc8YnI+Jyk7XG4gICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICB9O1xuICAgICAgICBpZiAobWFwKVxuICAgICAgICAgICAgbGVnZW5kLmFkZFRvKG1hcCk7XG4gICAgfSwgW21hcF0pO1xuICAgIHJldHVybiBudWxsO1xufTtcbmV4cG9ydCBkZWZhdWx0IEluZm9MZWdlbmQ7XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4vaW5kZXgubW9kdWxlLnNhc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBsb2FkZXIgZnJvbSAnLi9sb2FkZXIuZ2lmJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2Fzcyc7XG52YXIgTG9hZGluZ1NwaW5uZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgY2xhc3NOYW1lOiBzdHlsZXMubG9hZGVyIH0sIHsgY2hpbGRyZW46IF9qc3goXCJpbWdcIiwgeyBzcmM6IGxvYWRlciwgYWx0OiBcImxvYWRlclwiIH0sIHZvaWQgMCkgfSksIHZvaWQgMCkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTcGlubmVyO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhRZ0JDQVBNQUFQLy8vd0FBQUV4TVRIcDZldHpjM0tDZ29QajQrQndjSE1MQ3dnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ0gvQzA1RlZGTkRRVkJGTWk0d0F3RUFBQUFoL2hwRGNtVmhkR1ZrSUhkcGRHZ2dZV3BoZUd4dllXUXVhVzVtYndBaCtRUUpDZ0FBQUN3QUFBQUFRZ0JDQUFBRS94RElTYXU5VkJ6TXUvOFZjUlRXc1ZYRllZQnNTNGtuWlpZSDRkNmdZZHB5TE1Fcm5CQXdHRmcwcEY1bGNCQllDTUVoUjNkQW9KcVZXV1pVTVJCNFVrNUtFQVVBbFJNcUdPQ0ZoanNHamJGbm5XZ2xpTHVrWFg1YjhqVVVURWtTV0JOTWMzdGZmVklFQTR4eUZBZ0NkUmlUbFd4ZkZsNk1IMHhrSVR0aGZGMWZheXh4VGFlRG81b1ViVzQ0cWFCcENKMHRCcm12cHJjNUdnS25mcVdMYjdPOXhRUUlzY1VhbU1KcHhDNHBCWXhlenhpNnc4RVNLVTNPMXk1ZXl0cy9HcXJnNGNuS3gzam1qK2dlYmV2c2FRWE44SERKeXkzSjlPQ2MrQUt5Y0NWUVdMWmZBd3FRSzVoUFhSMTd2NW9NV01oUUVZS0xGd21hUVREZ2w1T0tIUDhjUWpsR1FDSElLZnRPcWx6SnNxVkxQd0ppTm9rWjg2VWtqRGc1ZW14eUlKSE5uRGh0Q2gxS3RHakZrdDlXQWd4Wm9HTk1ueTBSRk1DNER5Sk5BU1p0aXBzNlZaa0VwMVA5cVpRM1ZaRlJPR0xQZmlpWjFtREtIQkFwd2lzWkZ0V2ttTlNVSWxYSVRpZld0ditrVGwwSWNVQlNsZ1lFazJ0cWE5UGhaMi9GeWQzVWNmSVFBd1h5K2pIUThSMCt6SFZIZFFaOEE3Um1JWndGZU43VFdNcFMxcGxKc3htTnduQVlxYzRTeDhaaGIvV1B5cU15bndMOWVNcnBRd2xmVE94UWNvMWd4N0l2T1BMTm1FSm1TYmJyWmYzYzBWbVJOVVZlSlplMEd4OUgzNXg5aDYrSFhqajM1ZGdKZllYSzhSVGQ2QjdLMXZaTy8zcUZpMk1WMGNjY2Vta2toSjh3MDFsQTRBUk5IZWdIVWdwQ0JZQlVEZ2JrSHp3UkFBQWgrUVFKQ2dBQUFDd0FBQUFBUWdCQ0FBQUUveERJU2F1OVZBak11LzhWSVJUV2NWakZZWUJzU3hGbWVWWW00ZDZnWWE1VS9PNjRvR1F3c0F3T3BONXNraXBXaUVLUFFYQkFWSnEwcFlUcW5DQjhVVTVLd0pQQVZFcUs3bUNickx2aHl4UlpvYllsWU1ENUNZeHp2bXdVUjBsYkd4TkhjR3RXZm5vRFpZZDBFeUtMR0FnQ2xBQkhoaThEbUN4amozbzFZWUIzRW04NFV4cW1BQ21FUVlnaEptaXBWR1JxQ0tFM0JnV1BhN1JCcXJlTUdHZkFRblBEeEdvbXltR3Fuc3VBdWg0Rkk3b0cwY3NBdVJZR0JnVFVyUWNhMnRzNUJBUUlyQzhhQndQczV4emc2ZUVmMWx6aThxZjA2Zm9Wdk1ydG03Zk8zZzExLytSOVN6aXdvWjU0RG9QeDBDQmdRQUdJRWVmUld5ZWh3QUNLR3YvZ1pleXdjVjNCRndnK2hoekpJVjNCYngwSVhHU0pBUnhEbWpoejZ0ekpzNE5La0JWN1NrSkF0T2k2bnlEaDhGUm5sQ2hHb1ZDalNwMGFScVk1bGpaanBsU3BOS2RSZnhROEpwM1pFMXhUanBrcUZ1aEd0ZVFpY0ZRMXhtV0VFR2ZXWFdLZnltUEs5a08yanhadkxzdFcxR0JMd0k1NEVpYXF6eG9SdlNQVnJZV1lzcThieUZXeHFjT3M1dkZBcG9LbEVFbThMOXZhMERWSG8wNkY0SFFVQTZweHJRWm9HSUJweXkxZ0V3bFZ1ZXBhZ0sxeGcvQklXcExuMXdWNkFTZnJncGN1ajVoa1BwVk9JYmkzMmxWM1YrOFU5cFZWTmNrNUJ5UGl5ZU1qaXkrU2gzQzlMNlZ5TjlxWkpFcnVxN1g0NXNlTmUwSmZuZmtwK3UxRjR4RWpLeDZ0RjAwNk5QRlMzQkN2MkFaZ1R3VHdGMVpYNFFuRlN6UVNTdkxlWE9ydEV3RUFJZmtFQ1FvQUFBQXNBQUFBQUVJQVFnQUFCUDhReUVtcnZWUUl6THYvRlNFVTFuRlloV0NBYkVzUngxYVo1VUc0T0dnSTlueStwbFZ1Q0JpUUtvT1JyMUk0REN5REo3R3pFeUNZemlWbGNEaE9FTFJwSjZXaUdHSkNTVmh5N2szYVh2R2xHZ2Z3YnBNMUFDYWJOTXR5SEdDQUVrMXhTUlJOVW13bVY0RjdCWGhiQW90N0FwSVhDSmRiTVJZR0E0NHVaR2tTSXB0VE1HNXZKcFVzVlFPWUFJWmlpaFZ0cHpoVmhBQUdDS1E1dmFRaVFWT2ZHcitQWmlZSHlMbEp1OG1NYUkvR29kRVNnN0VmS1FYSUJ0clh2cDYxRjJTZzEwUmdyQndFejdEb0xjT05INW9hM2ZCVVhLek5jMlRXK0ZpYzhPdEFRQnpBZnY4T0tnd0JibUVPQkhpU1JJSG8wQVdCRk11d1BkTmdwR0ZGQUpyL2xpM0QxS3VBdTQ4WVJCSWdNSEFQUlpTZURMU0VTYk9telpzNG9WRGFLVEZucVpWQWdVYmhTYW1WellKSUliNzB5YlNwMDZlQmtPYjgxckprbENnNWs3SWtoZUJxMFVoVGdTcGRLZUZxQVlOT1phNTgrUTBxQnBsdUF3V0RTUldZeVhjb2UwR2MrYWJyUkw3WHZpR0F5TkxEeFNqM2JBcmV5K0V1V0orTEczWkYrOFlqTlc5QWM1bTBMRVl2NEE4R1RDYUdwNWZ5a05CR1BoTlpySHBjYWpPRmk4Vm1NOWkwSzlHL0VKd1ZJOVZNN2RZYVI3UHAyRm4zTDhHY0x4UkVadEphYU12TFh3ejJORnZPUmVHNk1lbCtzYnZ2VXRLYm1RZ3ZFQ2YwdjRLMmsra1dIbnA4ZWVPK3YwZjc5UGhMZHo5MXN0czZDNXlGZkpEM0ZWSUhIbm9Xa1BWUmU3K1F0MTk2ZVNrb25nWHc0ZlFjQ25XNDFGOUYwK0VUQVFBaCtRUUpDZ0FBQUN3QUFBQUFRZ0JDQUFBRS94RElTYXU5ZEFqTXUvOFZJU0NXY0ZpRllJQnNTNGxiSmNTVVNiZzRhTXhyZmI2OG5GQlNLRmcweGhwTmdqZ01VTTloWnllNFVSQ0M2TVJVR1J4STE4TlNlc0VPZWhJcUdqQ2pVSzFwVTVLTU1TQmxWZDlMWENtSTEzUVdNR3NwY3dBRFdnQXBpVHRmZ1JJRUJZQ0hBb1lFQTJBWVdIQ0hUaFoybkN5TGdHOWtJZ2VocDRrc2RsbUFLWmxDZm9ZQWpTcENyV2R1Q0pNdUJyeEFmMUs1dlk5eHdtVEV4cDhtdDRHdG9jdE56aTBGbUpNRzBjc0F3QlVHczVwWm1OdERXQWVlR0pkWkJkcms2U1ppc1pvYUE1THVVMTduOWpwbTdmZUs1M1RoK0ZYczN6ZC8veEpPeUtiUUdBSXJpT3AxYTlnaUVyd1lDQ0pHWkVleFE4WnpJUDhQR1BwbERSR3RqajdPVlVKSTRDSEtlUWhmeXB4SnM2Yk5EeVUxMXJzNUlhVFBuQnBQMG9UbmN3elBvMGlUS2pYV01tYkRqUEs4SVNoaWttZklsVmVzbFN3d3NlWkhuMUcwc2l0WTB5TElOR1NWRW5DNmxGVlhpZ2JpNWlESjhXVzJ0V2tYVHBXWWQ5dGR2R2tqRlhscmR5MWVEbE9Mc0czNHQ5aFV3Z3dUeXZWMmQ2QmlnNGVmRGU2THF5bG5EdCtLZk82Y0dkZG1Od1JHZjVxY3hyTnAwU0hxRG1ucXpiQnFibHhKd1I3V2tsVHZ1WVFmN3lKTDhJWEwycmZUNWM3S0NVRXMyZ3QvRzV3YWF1b2E1N3ZrL1VyOUwxTFhiMTJ4Ni8wT25WeG9RQzNsY1ExeFhDOTNkMnN0T0s4dXIzeDB1OVlyaUIrZmZCbDQrU2M1MTU4TE1kdkpGMVZwYmUxSFRnUUFJZmtFQ1FvQUFBQXNBQUFBQUVJQVFnQUFCUDhReUVtcnZYUU16THYvbFRFVWxpQll4V0NBYkVzUndsYVpwVUM0T0NnS0swVy9wbDV1V0NCVkNnTEU3RVJCeEZER1lVYzBVRFlGVWNsdk1raFduRXhwQjZFUkFnd3g4L1pzdWszUWg2ejRzck55YmI0d0FLWUhJSGx6SGpBcUZFaDJBQnFGV0JSb1hvRVNCQVZtRWtoWkJBTnVHSmVIWFRLTW1Ea3BoQzhhbVVOOHBteFBPQWFpazRaelNKNFNjSUE1VktPMEJKT3NDR2FOdGtPdFpZOVRBZ2ZCVXJpOHhhckpZc09welFBSXlNeGpWYndHMHRONzJnVnhHR1NsM1ZKT0IrR2FvZ1hjNVpvRDZJN1lHcEx1VS9ESTlUcmo3ZmJVeUxsYUdQRGxEME9yZmdVVG5rR29zQVVDTnltS0VHellJaEkrSmdoRTBkTkg4UUtaWStqLzhqRWlrSkZlUnd3Z0Q0eEFPSkNod293dVQ4cWNTYk9telE1RlJ1Z3Njbk5DeXBENUlrWWMwVk1MMEpCOWlpcGR5clFwdEljOXlSeXlzQzFqRVRrelUySXhaZlZxZ1lrMnlSeE5keFVCMktXUlV0SzY1blNYMDJMYjJOb1RFVE9FMWJyTndGbGpzZTJxMjVNaVFuTFVaUFdzVEJnaHA3NlFpTGVnWHBYaTJHbHJuQU5xQ0hDejlnM3VWdTBBWllNWkRVOHpFRkt1WnRIZFNLUDcvQ2IwcjcvS0RQd0NhUnIwMTBra1diOGhrRXExNXh5UkRBL2N6SXIzSk5XWmRjQ2VZTmJVUUxseFgvQ21DZ3F1V1RPNVh4ekt2bnQ1dWVHcHJqYzV0QzBWYisvVFNKNGRlTmJzeVBYRzU0clhIbjRxeWVNUGE1K1N4cDM1MUpaVTZTYk1HWHorMllXZVRPeFo0RjRGOS9VRTRCZUtSZmZXSGdKNkVBRUFJZmtFQ1FvQUFBQXNBQUFBQUVJQVFnQUFCUDhReUVtcnZYUU16THYvbFRFZ2xtWWhnd0d1TEVXWWxiQlZnMEMwT0NpbTlEd1pNbFZ1Q0VDUUtvVlJ6Q2RCQ0FxV0FwVFkyZDBvcU9rRU5ra2VKMDRtOWZJcUNDVzdNMEJHRVFuVWJ1MzRZdkQycmhJdWdNREdCdWNkTHp4Z1NsdE1XVzBDQWw5ekJBaHFFbllUQkFWNFpBT1dCVThXZFpZcldaQldZM3cySVlweUszVlNrQ2lNT1U2dWJvTTRkUU5tYlFTUXRJK0pmMFNxdDRBY3NwNDV0Y0hDcHI1enFzWEpmTE9mQmJ3aHpzbDd1bldiRndoU2xkZFVUcWNjbE42NjRJRTFpcTVrM3RUb3c1cW41M1RkMy9BY0NBZFA5Rlh2K0p3UVdBTklFRmZCWkFJalNSSFk3eUFHU3VvRVNIRGtiV0ZEaHk4VTdkc254d0JGYnc3L08yaVVnWXhPcnBEazdxRmN5YktseTVjSUs3cURTVUhqZ1kzN3V1bWNObzNtQkFFM2dRYVY2TE9vMGFOSTRYa2NHRkpuRlVjNjJiRVVlc0NXSllwUi83bk1lRFBvRkNOR1RpYXRCWlNvZ1l0SENUQk4yc0lqV25BaTFwbzA4dmFhdnFweTBVQmx5RkpFMTVMMXdOYUY5eUtvMUltQ2pUcTVLV1lTM3hDRGgyZ0ZVT2NBcWc4RzZBSzhHM2xZMk00c2dPekwrL1F4UUFOQlNRZitkeFowbTVLaUQ3ak9iQnF4NmdzRHFsYmdNenFISTdFL2F2dSs2WXAzWTh6QUhWdHkyMEVUbzdJV1h0ejJsMXp0MVV6NzJ0eThmTTJqVnJWcTFHSzVpZVNtYXhDLzRUZ0t2L3ptY3FESEFYbUhaSDIzSjZDb09PTkxQcEcvZUFvRlpJZEVISHo0TEVXZkp3U1k1NU4zMFJWRDNJTDg3VkZNRGRPaDlCODhFUUFBSWZrRUNRb0FBQUFzQUFBQUFFSUFRZ0FBQlA4UXlFbXJ2YlFVekx2L2xWRWcxakJZeUdDQWJFc1J3MWFaNVVDNE9DaXE4MGtacGxWdUNFQ1FLcHJqaEVaSnlacFBJa1pVdUwxaVBlUkFLU0VJZkZJT1FpT1VBQXRsQU5NYy9KbTRZUXNWWHVBdHdRQVl2dGlPY3doa1RWc1pVVTV1QWxaK0JnaHBFa2t2YUIyQWlRQjFVV1pWT1dPUlAzV05PQVpmbEFCQUFwYzZtNDFqY0RpR2gzYWdxVDhFbnk0R3RLKzFMSE82Zm14ZnZic2FuTDRoSnJCaGk1bkZGVjdJSUpPZkJzRit1Q0VJcGhpQUk2UE1MaWtDMlZPYmpONjJBK0UySDlzajFPWWk2Y1FldHhyZDVoWFlwdTV5MXZmajl2NENYcGdta0JrQks2c1E5Q3ZZWWtlNkxxdEdHTmtuRUVhNGkrTE1IQnd4Z3FFSGRPbi95bkc0UlRIZ0pJOG9VNnBjeVhLbGtaY3dXNVk0Z1BHaUVZNEpaYzZneVZQQWdUMDZnd29kU3RRalNhRmpBR29rRURPb3ozaVVtTUpVV05LZnhaN2lYaDZzYXJUT1V6TmNaUzRzcW1nc1F4RktSekkxV3hEQmdaOFViMGxsSzdEVVcza0Q1NFl0QnVPdEFGWVQ5QkxGZGxmYlZqbDdXNGpzbEhFWDA4UWYzQXFBUEl0cXdGQTAwK280U0xjWVprUlNibG1lTUkyeWlEU2Y5OG9kZTFoS2daOGhubXErd0xtUlhNb0UzbzdDRFBURDBXWUhteHdBUEFFYmx3RTA1YWp6ZFpzQ2NqekpKN3pHWStBdGNlYVBLK2ltOEZiNEFTUTBLWGRvSHZodG11Nmt0NVAyMlZ2UjZDWFJKNkNmNFBPUzJ3UGlwM3lxci8xN2h2alNuVktYR25yeStWY2Vma2pOVjZBRjFnbVYyeWtLT2dJYVdSVDRGRkFFQUNINUJBa0tBQUFBTEFBQUFBQkNBRUlBQUFUL0VNaEpxNzIwRk15Ny81VlJFSlptSVlVQnJpd2xicFVaRDJwcmYyODlGVU00cExlZ2hJQTRqV0t3Q1dGUXJDQ2FRbzRCcFJzV29CTFpCREVnVVphOWFJZHdyZVlvUHhmUHpNT0tMZE5qQnJoTEFneHBDcGYreHB5M2NsbDJTMWdpWFgwU1UxVVNUNFVJWGhoa1ZYdHdnU3hFQ0l0L1FuZzBJVzAzY1prVlpKQkJYRzZkbnFHTlpnYUxOZ1lFYkQrd0xLSzJpSWtEdkxtM3JicVZ0WWh4dm05Z3hoZEVzM0RKeDdCVFRKSEF3VUpnZVJkVDFOVXJaTHlISHBpUHp0V0d2S01nc2sva3dWekRzY3pjSFZPbTh2WTQ3UGZkWG8wRThmbzJpQlFRd0d1SXVDZi9BSEx3UnBBZ3RqdnFHaW4wd0l0Z21Ya0pKMW9vcGJHang0OGcvME1DUE5oUFpJVUJBbEtxSkxqc2tjdDZJbEUyVkJuR3BNMmJPSE42bEpYUEhncVlMbVF0QStwUkpzRkhYMXI2eXdnU3pFb0JNSmJPNmptUmlNd3dyM1NHbzZwMVh0YWRsbGE4OHNkVkRJS1VxL0JKTFJzRmowbytmdGFhWEtMU1RWS3lPYyttdE9OaWFpV0E2TlJBalhYZ2dGMWRldG1TS254QXNRY0RBZzRJY0h5SE1lWEhLaFVUc0t6R3NRZ3pLb2srNW96bVFNMGdBMC9meVh4alFPRkZtdzJMaVYwUDhnRytJTGpBS256NjdPRXRBckRJckNUYUJvTENwbHlmVHBuQnRJdkl2NGtWNW91Y1F1RXZrbU5Jdm95aHdHdnNqYTBmY0ZGOUF1VEI4Z3dVZHVOZDlmWFNmSTlQdHZkUVFtVHE0NXVyQnFCbG92b0Q5YnhuM2hkM05zVm1nWUFUUkZaY1ZlaUpWNElBQzVyRW5EMFJBQUFoK1FRSkNnQUFBQ3dBQUFBQVFnQkNBQUFFL3hESVNhdTlGQ0hNdS8rVmdSQldVVmhFWVlCc1M0bGJoWnl5NnQ2Z2FGTkZQQm1tRlc0SUlKQXFoRkVOMmJOb2lCNlljSkwwU1V5MUl4VUw3VlNuQUdtR0pnSHV5aVp0OXdKVEEyYmc1aysrUGEvWkduQlMvZHhhelc1UUJnUmdFbnN2Q0lVaFNoTXpWbVdNTG51RllvSkJJU2FQT1Y5SWtVT09tSmM0Z3lOZ0JxZGRnNllGQTNZM3BJbDNIV2F1bzVPeWJDYTFRNlNLdUNtN3M0bUtxTGdYaEJZNm1vYTN4a1FwQXdQTFpWWEl6aTFBMFFXQnlYdlcxeHdpMnJHYlNiN2dWTkhrTHFmbjZHSGY3L0xoN3ZNMzFrWkd4ZmJZTTlFRDFFYU0wTWZQaTRsL3JmNmNHc2l0NEpWL1BlcXBjb2poRU1XTEdETnEzQWdsbjBjakhQOG5JQno1MFdQSWh3SUdwRlJKNXFUTGx6Qmpya0VnTGFTR2hvWUtDRGpBODBESWFDbDdxQm5RcytjQW5BV2hwVndabzZlQWJUSjFxQVJZQkNuTWVESTdEcWdIRG9oVk5rUVB0T1NISUNqWEgyRVBiTDBJUklEYmRSaks4aFR3OVYzYmxOTUFwTTFMa1lES3B4aUkxaEl4RHk2a1ZxOTQ4dTFDSU9WWkVJMFBDSGpNNnkvbGNITXZWM2JjY1NmZEY4RllpREJsbVZmbUNvSzc2QnpybC9NTm9wOHBFT0JabDBQajJHZ0IzMXRiWVNkVkNXWDVsaDJhRWdWVVdRaDRna2s5d1MyUDRqL2V5ak93Yyt4T05Uc3pPSDgrK1YwQnlYckFVK0Q1WWlkcDNkY01LSzd3L2JlRTdCUll5bkNydVFXWCtHSXJTR1lQbmNmWWVkUWQ0QVlaZVMrSXg5RnNBbGl3WDIrNGFkVFlmd1ErVnh0Ry9WMFRBUUFoK1FRSkNnQUFBQ3dBQUFBQVFnQkNBQUFFL3hESVNhdTlGQ0hNdS8rVmdSQ1daaEdJQWE0c0pXNlZHUmRxYTM5dlBTRkZXS1Mzb0lSQXFxQ0tPOWdFcGR3aGhSZ0RTamNjeFpvQXpSTkFLUFNnSFJHQm1xUDhYRHd5YndzT0hhOVVtY1J3cG5TQmJVNTVhVTNhQzA5MGdIbHpZeWQ5YzNoUmlsbHlFeUpVSzBTR0xsTmdncEdDV0NCU0k1R1dVRjFibXBFclVrUmtCcVV0VW1wZXE2WkhzSVFBZ2pSdHA1UzBMbDZNVUoyenVEL0JGNmlscXJ2Rnh6eWJoWjdKUWwyOWVwTzYwRGhlWG13V3VkYlgzRHk5eEkrVDQ4a0VBOE0zcXVhN3JkL3drczN4MFRVSDl3S0Q5RFlpWHVrU0JlNEpQQ0JnM2o0K0JkSU5TTmVraXdDQkFnNTJTSmdPVURBRUF3eEtCQ1d4bzhlUElQOUR3aHRJVW1RRmlndFRGbmhJa3FCSk15bGpmbmxKczZiTm0vUXdhano0aG9ORGlEUmxNZ3BJTWlQTkxqRVh3b0NvRDJlL2xFTzI0VnpTYnVxSExsVUppVmszNE41TWlSanp0YU1qY0VEV1BIUlMraXJCVW9CVW5pc1h2dTFLY09mR2hRVXhkTDBWd2k2WXRTTCt0U0R3MEc4UXdtWUpFU1o0bG9XQkFRSVNnMWtzb0RFcnlKSVBQNnpNeS9JalJvOGpXNlljYVMrWWxWOXJZVzdjbGJNZGdtOUJFSFliQW5KcTJRUFlQQnhnSnk4SGpFL2ljbXZhQmdGakNyWXBDSWc0UWZpajViRnhQVXo5OE1ueTNzeDNpSVlYMFBXUTR4TWV1bGhPSnZrMUE5VlBScTdnRW5rK0krUy9lYkZnV25sMkNRald6L0NJL2tDazlrdkU5eElVQVFDR2Q0QUYwTkdFM20zWG5aU1pWZnBkRXdFQUlma0VDUW9BQUFBc0FBQUFBRUlBUWdBQUJQOFF5RW1ydlpRUXpMdi9sYUZaQ0dJUmlBR3VMQ1Z1RlhxbWJRMktORldHcFdyL0FOR0o0SnZJTWdoWVJnbkV2SW9TUTdLeVF6S0QxU2JuNmRKQWo5R2VxM1RWaHJ5eG5DU0xOU0hWNWd0M0l2MHlVVXdwWElzWWxEVjVSQjBpWDJ4UmdqVURCd0pYYzBCNlVGZ0ZaUjhHQjVlUkwxcDRQQVY3SzVhWGVRYVJOYVJRZXA4c29RZWxjV09lcmkyc3NuR3B0Yk1DQjI2dkliR0pCd09sWUwwaHBTS1RHSXFYQmNWTktBWEpHQWlYaTVUT1d3alJxaFVGMVFLNDJFRUUyNGdmQk11ODRoZmtrK0VYMnUvT2hPdjFLOFQyWm9qZjB2bXowTkVrRk5CVkxaZzZmM0swUlZ0NForQTNoQjBXZWpMSGJzQkJpRjNrWWR6SXNhUEhqeXovQ0JaY0JKS0N4Sk1pQ3dvb09TSGFnQUl2WHpaalNiT216WnZpdEYza3lJa0R1V1VrUzhKa0NHVkFTZ0YrV0VLTCtkSU53WmNhTWVvWmVnam5scWhXTzVERGFtdUtxWFE4QjFqVWFNRGhnUUpjelVnUk85WURncWZYRUpZVjI4K0N0MFU3Ty82MGlNSGJKeW41S0liaG0wdEEzampvaEwweW9BdGNQUU4wMDhZUVFGbnlLcmFXZ3pSR3hRMFVuTG1LYlJDZzdKaUMwWmxBK3FDT2d0bUcwZEpHS01jRmdRNTJGS28xMEpXaVBDQURZUXpvbU1EczdTc3psY29tQmF3V20zdzE1S1NQS2E4R0lKc0NaUmRJajRjV045RDJhTnZYNlJoRkpmYXdGc2FNdEZjSTM5THc1TzNPQWxZd2VwRDlHdVVrekdORGY4VytadmdlZldlQkVuOEFHRFViUXVoY1JHQWZ4dG5EM0RvUkFBQWgrUVFKQ2dBQUFDd0FBQUFBUWdCQ0FBQUUveERJU2F1OWxCRE11LzhWY1JTV1pobUVBYTRzaFJ4SHVWVkkydDZnQWMrVFNhRTJuQkF3R0ZnRW94QlBBcFFOUGJva3BYQVFLRU1JMWEvMjlGQVBXb2tJbkZrQ3d3RGdzbnVDa1Nnd1JFWStRZEY3TlRUYjhqb3NrVVk5U3hwbUJGbDdFZ2dEYXdDQUdRZDNGeWhvaG95VE9BTlZlbjJNTFhaNkJnaGNOd1pJWkJTWmdVT0dvSlY2S3dTbWFBWUZyNTRHczZLSFE2VlZuWWhNcm14UkFyYUlvYUxHcEVpUndFeDVONW0xSjgzT1RLOTJ2MStRMXJ5NnZ3QUlwZ0xnM2RTNnloUGJBK25tZHFKQkh3YVozT1ljaHRBM0JOUDJHSmY5QUQwWUNnZ01sd1JUQXdxVUl5Z0pYd0U2QlV6QkVEQ2dHc010b2g0K05GT0FYcFdMSFA4eTFvaDNZWjlGa0dsSW9sekpzcVhMbHpna3dwZ0ljd0tDQWpoelBoU0FwQ2NNVlRCdkN0VjRzcWJSbzBpVHNoRmFrMVdIZlFONldnbWFNNStFaUZXcVVGeElNSlJPbkRONFV1U1gxRTVPTVZ5UEdsU0thRis3YnFIZW5vZ3FvS2k5ZlEvbHBvbklrK3pGVUFrVnRoUEhjOUZMd0dBNThLMTdGTzlEREJIOVBndW9NdVhqRmdTaTJ1MlNXVEt2d25weDBNSVoyaC9vZ0xRU2xxNVFhdXVXMWF4SnB2YWM0L1FVQVcrR0tHbzJHM1pFd3hsNHdzNVFaRTNxelNVOVI4ME5JSE81ZlVzVU1YODIvSUk0ZHJjakZYR1I4RWR4Z1BNWW95S0hDbWhtb00xVjkvczlpeUlhaXQ2eDErbUlYRWpyTmVLbXc1OVNNVVNSNmw1VUUxRWpNOXR4TjEwNDlSVVVsUjc3MWZGZlV3MU9FSlVGMzhFMFR6VVJKa0xiVVIzMUV3RUFPd0FBQUFBQUFBQUFBQT09XCIiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEVhcnRocXVha2VzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZWFydGhxdWFrZVNlcnZpY2UnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVhcnRocXVha2VzRmV0Y2hlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKHt9KSwgZWFydGhxdWFrZXMgPSBfYVswXSwgc2V0RWFydGhxdWFrZXMgPSBfYVsxXTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShmYWxzZSksIGxvYWRpbmcgPSBfYlswXSwgc2V0TG9hZGluZyA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKGZhbHNlKSwgZXJyb3IgPSBfY1swXSwgc2V0RXJyb3IgPSBfY1sxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBzZXRFcnJvcihmYWxzZSk7XG4gICAgICAgIHZhciBmZXRjaEVhcnRocXVha2VzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEsIGVycl8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldEVhcnRocXVha2VzKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWFydGhxdWFrZXMoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH07XG4gICAgICAgIGZldGNoRWFydGhxdWFrZXMoKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIFtlYXJ0aHF1YWtlcywgbG9hZGluZywgZXJyb3JdO1xufVxuIiwidmFyIHRpbWVGb3JtYXR0ZXIgPSBmdW5jdGlvbiAodGltZSwgb2Zmc2V0KSB7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICB2YXIgdXRjID0gZC5nZXRUaW1lKCkgKyBkLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDtcbiAgICB2YXIgbmQgPSBuZXcgRGF0ZSh1dGMgKyAzNjAwMDAwICogb2Zmc2V0KTtcbiAgICByZXR1cm4gbmQudG9Mb2NhbGVTdHJpbmcoKTtcbn07XG5leHBvcnQgdmFyIG9uRWFjaEZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZSwgbGF5ZXIpIHtcbiAgICB2YXIgX2EgPSBmZWF0dXJlLnByb3BlcnRpZXMsIHRpdGxlID0gX2EudGl0bGUsIHBsYWNlID0gX2EucGxhY2UsIHRpbWUgPSBfYS50aW1lLCBtYWcgPSBfYS5tYWcsIHNpZyA9IF9hLnNpZywgY29vcmRpbmF0ZXMgPSBmZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzO1xuICAgIHZhciBjb250ZW50ID0gXCJcXG4gICAgICA8aDMgc3R5bGU9XFxcImZvbnQtc2l6ZTogMS4xN2VtOyBmb250LXdlaWdodDogYm9sZFxcXCI+XCIgKyB0aXRsZSArIFwiPC9oMz5cXG4gICAgICA8Yj5UaW1lIChHTVQrMik8L2I+OiBcIiArIHRpbWVGb3JtYXR0ZXIodGltZSwgMikgKyBcIiA8YnI+XFxuICAgICAgPGI+UGxhY2U8L2I+OiBcIiArIHBsYWNlICsgXCIgPGJyPlxcbiAgICAgIDxiPkxvbjwvYj46IFwiICsgY29vcmRpbmF0ZXNbMF0gKyBcIiA8YnI+XFxuICAgICAgPGI+TGF0PC9iPjogXCIgKyBjb29yZGluYXRlc1sxXSArIFwiIDxicj5cXG4gICAgICA8Yj5EZXB0aDwvYj46IFwiICsgY29vcmRpbmF0ZXNbMl0gKyBcIiBrbSA8YnI+XFxuICAgICAgPGI+TWFnbml0dWRlPC9iPjogXCIgKyBtYWcgKyBcIiBSaWNodGVyIDxicj5cXG4gICAgICA8Yj5TaWduaWZpY2FuY2U8L2I+OiBcIiArIHNpZyArIFwiIGluIHJhbmdlIFswLDEwMDBdIDxicj5cXG4gIFwiO1xuICAgIGxheWVyLmJpbmRQb3B1cChjb250ZW50KTtcbn07XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEwgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgeyB1c2VMZWFmbGV0IH0gZnJvbSAncmVhY3QtbGVhZmxldCc7XG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSAnLi4vbG9hZGluZ1NwaW5uZXInO1xuaW1wb3J0IHsgZ2VvanNvbk1hcmtlck9wdGlvbnMgfSBmcm9tICcuLi9tYXJrZXInO1xuaW1wb3J0IHsgdXNlRWFydGhxdWFrZXNGZXRjaGVyIH0gZnJvbSAnLi9jdXN0b21Ib29rcyc7XG5pbXBvcnQgeyBvbkVhY2hGZWF0dXJlIH0gZnJvbSAnLi9oZWxwZXJzJztcbnZhciBnZW9qc29uO1xudmFyIEVhcnRocXVha2VNYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlRWFydGhxdWFrZXNGZXRjaGVyKCksIGVhcnRocXVha2VzID0gX2FbMF0sIGxvYWRpbmcgPSBfYVsxXTtcbiAgICB2YXIgbWFwID0gdXNlTGVhZmxldCgpLm1hcDtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobWFwICYmIG1hcC5oYXNMYXllcihnZW9qc29uKSlcbiAgICAgICAgICAgIG1hcC5yZW1vdmVMYXllcihnZW9qc29uKTtcbiAgICAgICAgZ2VvanNvbiA9IEwuZ2VvSlNPTihlYXJ0aHF1YWtlcy5mZWF0dXJlcywge1xuICAgICAgICAgICAgb25FYWNoRmVhdHVyZTogb25FYWNoRmVhdHVyZSxcbiAgICAgICAgICAgIHBvaW50VG9MYXllcjogZnVuY3Rpb24gKGZlYXR1cmUsIGxhdGxuZykge1xuICAgICAgICAgICAgICAgIHZhciBtYWduaXR1ZGUgPSBmZWF0dXJlLnByb3BlcnRpZXMubWFnO1xuICAgICAgICAgICAgICAgIHJldHVybiBMLmNpcmNsZU1hcmtlcihsYXRsbmcsIGdlb2pzb25NYXJrZXJPcHRpb25zKG1hZ25pdHVkZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1hcClcbiAgICAgICAgICAgIGdlb2pzb24uYWRkVG8obWFwKTtcbiAgICB9LCBbZWFydGhxdWFrZXMsIG1hcF0pO1xuICAgIGlmIChsb2FkaW5nKVxuICAgICAgICByZXR1cm4gX2pzeChMb2FkaW5nU3Bpbm5lciwge30sIHZvaWQgMCk7XG4gICAgcmV0dXJuIG51bGw7XG59O1xuZXhwb3J0IGRlZmF1bHQgRWFydGhxdWFrZU1hcDtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi9pbmRleC5tb2R1bGUuc2Fzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgTWFwLCBUaWxlTGF5ZXIsIExheWVyc0NvbnRyb2wsIFNjYWxlQ29udHJvbCB9IGZyb20gJ3JlYWN0LWxlYWZsZXQnO1xuaW1wb3J0IEVhcnRocXVha2VNYXAgZnJvbSAnLi4vbWFwJztcbmltcG9ydCB7IHRpbGVMYXllck9wdGlvbnMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvdGlsZUxheWVyT3B0aW9ucyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNhc3MnO1xuaW1wb3J0IEluZm9MZWdlbmQgZnJvbSAnLi4vaW5mb0xlZ2VuZCc7XG52YXIgTWFwQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoX2pzeHMoTWFwLCBfX2Fzc2lnbih7IGNlbnRlcjogWzAsIDBdLCB6b29tOiAzLCBjbGFzc05hbWU6IHN0eWxlcy5tYXAgfSwgeyBjaGlsZHJlbjogW19qc3goTGF5ZXJzQ29udHJvbCwgX19hc3NpZ24oeyBwb3NpdGlvbjogXCJ0b3ByaWdodFwiIH0sIHsgY2hpbGRyZW46IHRpbGVMYXllck9wdGlvbnMubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBfYS5pZCwgbmFtZSA9IF9hLm5hbWUsIGF0dHJpYnV0aW9uID0gX2EuYXR0cmlidXRpb24sIHVybCA9IF9hLnVybCwgY2hlY2tlZCA9IF9hLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoX2pzeChMYXllcnNDb250cm9sLkJhc2VMYXllciwgX19hc3NpZ24oeyBuYW1lOiBuYW1lLCBjaGVja2VkOiBjaGVja2VkIH0sIHsgY2hpbGRyZW46IF9qc3goVGlsZUxheWVyLCB7IGF0dHJpYnV0aW9uOiBhdHRyaWJ1dGlvbiwgdXJsOiB1cmwgfSwgdm9pZCAwKSB9KSwgaWQpKTtcbiAgICAgICAgICAgICAgICB9KSB9KSwgdm9pZCAwKSxcbiAgICAgICAgICAgIF9qc3goRWFydGhxdWFrZU1hcCwge30sIHZvaWQgMCksXG4gICAgICAgICAgICBfanN4KEluZm9MZWdlbmQsIHt9LCB2b2lkIDApLFxuICAgICAgICAgICAgX2pzeChTY2FsZUNvbnRyb2wsIHt9LCB2b2lkIDApXSB9KSwgdm9pZCAwKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFwQ29udGFpbmVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cbmV4cG9ydCB2YXIgbWFya2VyQ29sb3IgPSBmdW5jdGlvbiAobWFnbml0dWRlKSB7XG4gICAgcmV0dXJuIG1hZ25pdHVkZSA8PSAxXG4gICAgICAgID8gJyMwNTZGRjcnXG4gICAgICAgIDogbWFnbml0dWRlID4gMSAmJiBtYWduaXR1ZGUgPD0gMlxuICAgICAgICAgICAgPyAnIzdEM0M5OCdcbiAgICAgICAgICAgIDogbWFnbml0dWRlID4gMiAmJiBtYWduaXR1ZGUgPD0gM1xuICAgICAgICAgICAgICAgID8gJyMwMEI4MDAnXG4gICAgICAgICAgICAgICAgOiBtYWduaXR1ZGUgPiAzICYmIG1hZ25pdHVkZSA8PSA1XG4gICAgICAgICAgICAgICAgICAgID8gJyNGRkNGMDAnXG4gICAgICAgICAgICAgICAgICAgIDogbWFnbml0dWRlID4gNSAmJiBtYWduaXR1ZGUgPD0gN1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAnI0ZGOTAwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyNGRjAwMDAnO1xufTtcbmV4cG9ydCB2YXIgZ2VvanNvbk1hcmtlck9wdGlvbnMgPSBmdW5jdGlvbiAobWFnbml0dWRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmFkaXVzOiAyLjUgKiBtYWduaXR1ZGUsXG4gICAgICAgIGZpbGxDb2xvcjogbWFya2VyQ29sb3IobWFnbml0dWRlKSxcbiAgICAgICAgY29sb3I6ICdncmV5JyxcbiAgICAgICAgd2VpZ2h0OiAwLjcsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGZpbGxPcGFjaXR5OiAwLjhcbiAgICB9O1xufTtcbiIsImV4cG9ydCB2YXIgdGlsZUxheWVyT3B0aW9ucyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnR29vZ2xlU3RyZWV0cycsXG4gICAgICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IEdvb2dsZScsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9tdDEuZ29vZ2xlLmNvbS92dC9seXJzPW0meD17eH0meT17eX0mej17en0nLFxuICAgICAgICBjaGVja2VkOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAnR29vZ2xlU2F0ZWxsaXRlJyxcbiAgICAgICAgYXR0cmlidXRpb246ICcmY29weTsgR29vZ2xlJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL210MS5nb29nbGUuY29tL3Z0L2x5cnM9cyZ4PXt4fSZ5PXt5fSZ6PXt6fScsXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgfVxuXTtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi9pbmRleC5zYXNzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJztcbmltcG9ydCAnLi9pbmRleC5zYXNzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuaW1wb3J0ICogYXMgc2VydmljZVdvcmtlciBmcm9tICcuL3NlcnZpY2VXb3JrZXInO1xuUmVhY3RET00uaHlkcmF0ZShfanN4KFJlYWN0LlN0cmljdE1vZGUsIHsgY2hpbGRyZW46IF9qc3goQXBwLCB7fSwgdm9pZCAwKSB9LCB2b2lkIDApLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbnNlcnZpY2VXb3JrZXIudW5yZWdpc3RlcigpO1xuIiwiLy8gVGhpcyBvcHRpb25hbCBjb2RlIGlzIHVzZWQgdG8gcmVnaXN0ZXIgYSBzZXJ2aWNlIHdvcmtlci5cbi8vIHJlZ2lzdGVyKCkgaXMgbm90IGNhbGxlZCBieSBkZWZhdWx0LlxuLy8gVGhpcyBsZXRzIHRoZSBhcHAgbG9hZCBmYXN0ZXIgb24gc3Vic2VxdWVudCB2aXNpdHMgaW4gcHJvZHVjdGlvbiwgYW5kIGdpdmVzXG4vLyBpdCBvZmZsaW5lIGNhcGFiaWxpdGllcy4gSG93ZXZlciwgaXQgYWxzbyBtZWFucyB0aGF0IGRldmVsb3BlcnMgKGFuZCB1c2Vycylcbi8vIHdpbGwgb25seSBzZWUgZGVwbG95ZWQgdXBkYXRlcyBvbiBzdWJzZXF1ZW50IHZpc2l0cyB0byBhIHBhZ2UsIGFmdGVyIGFsbCB0aGVcbi8vIGV4aXN0aW5nIHRhYnMgb3BlbiBvbiB0aGUgcGFnZSBoYXZlIGJlZW4gY2xvc2VkLCBzaW5jZSBwcmV2aW91c2x5IGNhY2hlZFxuLy8gcmVzb3VyY2VzIGFyZSB1cGRhdGVkIGluIHRoZSBiYWNrZ3JvdW5kLlxuLy8gVG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgYmVuZWZpdHMgb2YgdGhpcyBtb2RlbCBhbmQgaW5zdHJ1Y3Rpb25zIG9uIGhvdyB0b1xuLy8gb3B0LWluLCByZWFkIGh0dHBzOi8vYml0Lmx5L0NSQS1QV0FcbnZhciBpc0xvY2FsaG9zdCA9IEJvb2xlYW4od2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnbG9jYWxob3N0JyB8fFxuICAgIC8vIFs6OjFdIGlzIHRoZSBJUHY2IGxvY2FsaG9zdCBhZGRyZXNzLlxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ1s6OjFdJyB8fFxuICAgIC8vIDEyNy4wLjAuMS84IGlzIGNvbnNpZGVyZWQgbG9jYWxob3N0IGZvciBJUHY0LlxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5tYXRjaCgvXjEyNyg/OlxcLig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPykpezN9JC8pKTtcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlcihjb25maWcpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIC8vIFRoZSBVUkwgY29uc3RydWN0b3IgaXMgYXZhaWxhYmxlIGluIGFsbCBicm93c2VycyB0aGF0IHN1cHBvcnQgU1cuXG4gICAgICAgIHZhciBwdWJsaWNVcmwgPSBuZXcgVVJMKHByb2Nlc3MuZW52LlBVQkxJQ19VUkwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHB1YmxpY1VybC5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgICAgICAgIC8vIE91ciBzZXJ2aWNlIHdvcmtlciB3b24ndCB3b3JrIGlmIFBVQkxJQ19VUkwgaXMgb24gYSBkaWZmZXJlbnQgb3JpZ2luXG4gICAgICAgICAgICAvLyBmcm9tIHdoYXQgb3VyIHBhZ2UgaXMgc2VydmVkIG9uLiBUaGlzIG1pZ2h0IGhhcHBlbiBpZiBhIENETiBpcyB1c2VkIHRvXG4gICAgICAgICAgICAvLyBzZXJ2ZSBhc3NldHM7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svY3JlYXRlLXJlYWN0LWFwcC9pc3N1ZXMvMjM3NFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3VXJsID0gcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3NlcnZpY2Utd29ya2VyLmpzXCI7XG4gICAgICAgICAgICBpZiAoaXNMb2NhbGhvc3QpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHJ1bm5pbmcgb24gbG9jYWxob3N0LiBMZXQncyBjaGVjayBpZiBhIHNlcnZpY2Ugd29ya2VyIHN0aWxsIGV4aXN0cyBvciBub3QuXG4gICAgICAgICAgICAgICAgY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHNvbWUgYWRkaXRpb25hbCBsb2dnaW5nIHRvIGxvY2FsaG9zdCwgcG9pbnRpbmcgZGV2ZWxvcGVycyB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBzZXJ2aWNlIHdvcmtlci9QV0EgZG9jdW1lbnRhdGlvbi5cbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgd2ViIGFwcCBpcyBiZWluZyBzZXJ2ZWQgY2FjaGUtZmlyc3QgYnkgYSBzZXJ2aWNlICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3dvcmtlci4gVG8gbGVhcm4gbW9yZSwgdmlzaXQgaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSXMgbm90IGxvY2FsaG9zdC4gSnVzdCByZWdpc3RlciBzZXJ2aWNlIHdvcmtlclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgY29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxuICAgICAgICAucmVnaXN0ZXIoc3dVcmwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgcmVnaXN0cmF0aW9uLm9udXBkYXRlZm91bmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW5zdGFsbGluZ1dvcmtlciA9IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nO1xuICAgICAgICAgICAgaWYgKGluc3RhbGxpbmdXb3JrZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluc3RhbGxpbmdXb3JrZXIub25zdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlci5zdGF0ZSA9PT0gJ2luc3RhbGxlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSB1cGRhdGVkIHByZWNhY2hlZCBjb250ZW50IGhhcyBiZWVuIGZldGNoZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBidXQgdGhlIHByZXZpb3VzIHNlcnZpY2Ugd29ya2VyIHdpbGwgc3RpbGwgc2VydmUgdGhlIG9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50IHVudGlsIGFsbCBjbGllbnQgdGFicyBhcmUgY2xvc2VkLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05ldyBjb250ZW50IGlzIGF2YWlsYWJsZSBhbmQgd2lsbCBiZSB1c2VkIHdoZW4gYWxsICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJzIGZvciB0aGlzIHBhZ2UgYXJlIGNsb3NlZC4gU2VlIGh0dHBzOi8vYml0Lmx5L0NSQS1QV0EuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5vblVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5vblVwZGF0ZShyZWdpc3RyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgZXZlcnl0aGluZyBoYXMgYmVlbiBwcmVjYWNoZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIHRoZSBwZXJmZWN0IHRpbWUgdG8gZGlzcGxheSBhXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBcIkNvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS5cIiBtZXNzYWdlLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLm9uU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5vblN1Y2Nlc3MocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uOicsIGVycm9yKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsLCBjb25maWcpIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgc2VydmljZSB3b3JrZXIgY2FuIGJlIGZvdW5kLiBJZiBpdCBjYW4ndCByZWxvYWQgdGhlIHBhZ2UuXG4gICAgZmV0Y2goc3dVcmwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAvLyBFbnN1cmUgc2VydmljZSB3b3JrZXIgZXhpc3RzLCBhbmQgdGhhdCB3ZSByZWFsbHkgYXJlIGdldHRpbmcgYSBKUyBmaWxlLlxuICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCB8fFxuICAgICAgICAgICAgKGNvbnRlbnRUeXBlICE9IG51bGwgJiYgY29udGVudFR5cGUuaW5kZXhPZignamF2YXNjcmlwdCcpID09PSAtMSkpIHtcbiAgICAgICAgICAgIC8vIE5vIHNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9iYWJseSBhIGRpZmZlcmVudCBhcHAuIFJlbG9hZCB0aGUgcGFnZS5cbiAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gU2VydmljZSB3b3JrZXIgZm91bmQuIFByb2NlZWQgYXMgbm9ybWFsLlxuICAgICAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBjb25maWcpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIGludGVybmV0IGNvbm5lY3Rpb24gZm91bmQuIEFwcCBpcyBydW5uaW5nIGluIG9mZmxpbmUgbW9kZS4nKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyKCkge1xuICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xuICAgICAgICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCBodHRwU2VydmljZSBmcm9tICcuLi9jb21tb24vaHR0cFNlcnZpY2UnO1xuZXhwb3J0IHZhciBnZXRFYXJ0aHF1YWtlcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3BvbnNlLCBkYXRhLCBlcnJvcl8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaHR0cFNlcnZpY2UuZ2V0KCcvZWFydGhxdWFrZXMvZmVlZC92MS4wL3N1bW1hcnkvYWxsX2RheS5nZW9qc29uJyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBkYXRhXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3Igd2hpbGUgZ2V0dGluZyB0aGUgZWFydGhxdWFrZXMnLCBlcnJvcl8xKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibGVhZmxldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxlYWZsZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==