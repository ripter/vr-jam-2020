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

/***/ "./src/components/locomotion-motor.js":
/*!********************************************!*\
  !*** ./src/components/locomotion-motor.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("AFRAME.registerComponent('locomotion-motor', {\n  schema: {}, // System schema. Parses into `this.data`.\n\n  init() {\n    // Called on scene initialization.\n    // console.log('motor init', this);\n  },\n\n  tick() {\n\n  },\n\n  play() {\n\n  },\n\n  pause() {\n\n  },\n});\n\n\n//# sourceURL=webpack:///./src/components/locomotion-motor.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _systems_pull_locomotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./systems/pull-locomotion */ \"./src/systems/pull-locomotion.js\");\n/* harmony import */ var _systems_pull_locomotion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_systems_pull_locomotion__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_locomotion_motor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/locomotion-motor */ \"./src/components/locomotion-motor.js\");\n/* harmony import */ var _components_locomotion_motor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_locomotion_motor__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/systems/pull-locomotion.js":
/*!****************************************!*\
  !*** ./src/systems/pull-locomotion.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("AFRAME.registerSystem('pull-locomotion', {\n  schema: {\n    hand: { type: 'selector', default: '#rightHand' },\n    motor: { type: 'selector', default: '#player' },\n    camera: { type: 'selector', default: '#camera' },\n  },\n\n  init() {\n    this.isGripped = false;\n    this.isMoving = false;\n\n    this.gripStartPosition = new THREE.Vector3();\n    this.motorStartPosition = new THREE.Vector3();\n    this.motorPosition = new THREE.Vector3();\n    this.handPosition = new THREE.Vector3();\n    this.handDelta = new THREE.Vector3();\n    this.currentPosition = new THREE.Vector3();\n    // this.cameraPosition = new THREE.Vector3();\n    // this.distanceToMove = 0;\n  },\n\n  tick() {\n    // const elLog = document.querySelector('#log');\n    const hand = this.data.hand.object3D;\n    const motor = this.data.motor.object3D;\n    // const camera = this.data.camera.object3D;\n\n    motor.getWorldPosition(this.motorPosition);\n    hand.getWorldPosition(this.handPosition);\n    // camera.getWorldPosition(this.cameraPosition);\n\n    //\n    // When the player first grips, setup for movement.\n    // When the player ungrips, stop movement.\n    if (this.isGripped && !this.isMoving) {\n      this.isMoving = true;\n\n      this.gripStartPosition.copy(this.handPosition);\n      this.motorStartPosition.copy(this.motorPosition);\n\n      this.gripStartPosition.y = this.motorStartPosition.y;\n    } else if (!this.isGripped && this.isMoving) {\n      this.isMoving = false;\n    }\n\n    //\n    // Move the motor!\n    if (this.isGripped && this.isMoving) {\n      // ignore the y-axis,\n      this.handPosition.y = this.gripStartPosition.y;\n      const alpha = this.handPosition.distanceTo(this.gripStartPosition);\n\n      // Move the motor to the start position by alpha\n      motor.position.lerpVectors(this.motorStartPosition, this.gripStartPosition, alpha);\n    }\n  },\n\n  update() {\n    const { hand } = this.data;\n\n    // Listen to the hand's events\n    ['gripdown', 'gripup'].forEach((eventName) => hand.addEventListener(eventName, this));\n  },\n\n  /**\n   * DOM Event handler.\n   * Called when a listening event is observed.\n   * @param  {Event} event the event that has been fired and needs to be processed.\n   * @return {undefined}\n   */\n  handleEvent(event) {\n    switch (event.type) {\n      case 'gripup':\n        this.isGripped = false;\n        break;\n      case 'gripdown':\n        this.isGripped = true;\n        this.isMoving = false;\n        break;\n      default:\n        // ignore\n    }\n  },\n});\n\n\n//# sourceURL=webpack:///./src/systems/pull-locomotion.js?");

/***/ })

/******/ });