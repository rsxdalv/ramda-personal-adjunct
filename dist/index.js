(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var R = __webpack_require__(0);
var text_commands_1 = __webpack_require__(2);
exports.sortLines = text_commands_1.sortLines;
var prototyping_1 = __webpack_require__(3);
exports.taggedLog = prototyping_1.taggedLog;
var functions_1 = __webpack_require__(4);
exports.applicative = functions_1.applicative;
var actions_helper_1 = __webpack_require__(5);
exports.actionsFromObj = actions_helper_1.actionsFromObj;
var filter_object_1 = __webpack_require__(6);
exports.filterObject = filter_object_1.filterObject;
exports.filterObjectByKeys = filter_object_1.filterObjectByKeys;
/**
 * Composition of map and pick
 * Pluck multiple variables, same as picking from each member
 */
exports.pluckMany = R.pipe(R.pick, R.map);
/**
 * Log and return value
 * Less prone to @@transducer/step errors
 */
exports.log = function (x) { return (console.log(x), x); };
/**
 * Add virtual properties to a collection
 * @param spec Spec for virtual properties
 */
exports.virtual = function (spec) { return R.converge(R.merge, [R.identity, R.applySpec(spec)]); };
/**
 * Boolean map
 * @param yes
 * @param no
 */
exports.boolean = function (yes, no) { return function (x) { return x ? yes : no; }; };
/**
 * Indexed map
 */
exports.mapIndexed = R.addIndex(R.map);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var R = __webpack_require__(0);
/**
 * Sorts lines by a parsed regexp
 * @param matcher
 * @param parser
 */
exports.sortLines = function (matcher, parser) {
    if (parser === void 0) { parser = R.identity; }
    return R.pipe(R.split("\n"), R.sortBy(R.pipe(R.match(matcher), parser)));
};
exports.sortLinesTest = function () {
    var d = "{ id: 0, image: spruces, answer: 8 },\n{ id: 1, image: maples, answer: 0 },\n{ id: 2, image: pine, answer: 9 },\n{ id: 3, image: oak, answer: 1 },\n{ id: 4, image: birch, answer: 3 },\n{ id: 5, image: spruce, answer: 4 },\n{ id: 6, image: maple, answer: 6 },\n{ id: 7, image: birches, answer: 2 },\n{ id: 8, image: oaks, answer: 5 },\n{ id: 9, image: pines, answer: 7 },";
    R.pipe(exports.sortLines(/answer: (\d+)/), R.tap(console.log))(d);
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Log and return value
 * Less prone to @@transducer/step errors
 */
exports.taggedLog = function (y) { return function (x) { return (console.log(y, x), x); }; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var R = __webpack_require__(0);
/**
 * Applies a list of functions in order over an input
 */
exports.applicative = R.apply(R.pipe);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var R = __webpack_require__(0);
exports.actionsFromObj = R.compose(R.apply(R.zipObj), R.repeat(R.__, 2), R.keys);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var R = __webpack_require__(0);
exports.filterObject = function (pred) { return R.pipe(R.toPairs, R.filter(pred), R.fromPairs); };
exports.filterObjectByKeys = function (pred) {
    return exports.filterObject(R.pipe(R.head, pred));
};


/***/ })
/******/ ])));