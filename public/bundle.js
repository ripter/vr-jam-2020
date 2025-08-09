/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/animate-slug.js":
/*!****************************************!*\
  !*** ./src/components/animate-slug.js ***!
  \****************************************/
/***/ (() => {

eval("{AFRAME.registerComponent('animate-slug', {\n  schema: {},\n\n  init() {\n    // Listen for object3D being set, like when the model is loaded.\n    this.el.addEventListener('object3dset', this);\n  },\n\n  // setup the bones and animations\n  setupAnimation() {\n    const mesh = this.el.getObject3D('mesh');\n    if (!mesh) return;\n    this.system.addSlug(mesh);\n  },\n\n  update() {\n  },\n\n  play() {\n  },\n\n  pause() {\n  },\n\n  /**\n   * Called when a listening event is observed.\n   * @param  {Event} event the event that has been fired and needs to be processed.\n   * @return {undefined}\n   */\n  handleEvent(event) {\n    if (event.type !== 'object3dset') { return; }\n    this.setupAnimation();\n  },\n});\n\n\n//# sourceURL=webpack://demo-characters/./src/components/animate-slug.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shaders_gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shaders/gradient */ \"./src/shaders/gradient/index.js\");\n/* harmony import */ var _systems_pull_locomotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./systems/pull-locomotion */ \"./src/systems/pull-locomotion.js\");\n/* harmony import */ var _systems_pull_locomotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_systems_pull_locomotion__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _systems_animate_slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./systems/animate-slug */ \"./src/systems/animate-slug.js\");\n/* harmony import */ var _systems_animate_slug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_systems_animate_slug__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_animate_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/animate-slug */ \"./src/components/animate-slug.js\");\n/* harmony import */ var _components_animate_slug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_animate_slug__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n/* Performance Goals:\n  72 FPS for Oculus Quest (required by Oculus)\n  50-100 draw calls per frame\n  50,000-100,000 triangles or vertices per frame\n  https://developer.oculus.com/documentation/unity/unity-perf/?locale=en_US\n*/\n\n\n//# sourceURL=webpack://demo-characters/./src/index.js?\n}");

/***/ }),

/***/ "./src/shaders/gradient/fragment-gradient-simple.glsl":
/*!************************************************************!*\
  !*** ./src/shaders/gradient/fragment-gradient-simple.glsl ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"uniform vec3 bottomColor;\\nuniform vec3 topColor;\\nvarying vec3 vWorldPosition;\\n\\n/*\\n * Simple gradient between two values.\\n*/\\nvoid main() {\\n  float minHeight = -1.0;\\n  float maxHeight = 1.0;\\n  float height = normalize( vWorldPosition ).y;\\n  float alpha = (height - minHeight) / (maxHeight - minHeight);\\n  vec3 color = vec3(0.0);\\n\\n  color = mix(bottomColor, topColor, alpha);\\n  gl_FragColor = vec4(color, 1.0);\\n}\\n\");\n\n//# sourceURL=webpack://demo-characters/./src/shaders/gradient/fragment-gradient-simple.glsl?\n}");

/***/ }),

/***/ "./src/shaders/gradient/index.js":
/*!***************************************!*\
  !*** ./src/shaders/gradient/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertex.glsl */ \"./src/shaders/gradient/vertex.glsl\");\n/* harmony import */ var _fragment_gradient_simple_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fragment-gradient-simple.glsl */ \"./src/shaders/gradient/fragment-gradient-simple.glsl\");\n\n\n\n\nAFRAME.registerShader('gradient-simple', {\n  schema: {\n    topColor: { type: 'color', default: '#red', is: 'uniform' },\n    bottomColor: { type: 'color', default: '#blue', is: 'uniform' },\n  },\n  vertexShader: _vertex_glsl__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  fragmentShader: _fragment_gradient_simple_glsl__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n});\n\n\n//# sourceURL=webpack://demo-characters/./src/shaders/gradient/index.js?\n}");

/***/ }),

/***/ "./src/shaders/gradient/vertex.glsl":
/*!******************************************!*\
  !*** ./src/shaders/gradient/vertex.glsl ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"varying vec3 vWorldPosition;\\n\\nvoid main() {\\n\\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\\n\\tvWorldPosition = worldPosition.xyz;\\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );\\n}\\n\");\n\n//# sourceURL=webpack://demo-characters/./src/shaders/gradient/vertex.glsl?\n}");

/***/ }),

/***/ "./src/systems/animate-slug.js":
/*!*************************************!*\
  !*** ./src/systems/animate-slug.js ***!
  \*************************************/
/***/ (() => {

eval("{\nAFRAME.registerSystem('animate-slug', {\n  schema: {\n    hand: { type: 'selector', default: '#rightHand' },\n  },\n\n  init() {\n    this.slugMesh = null;\n    this.headBone = null;\n    this.handPosition = new THREE.Vector3();\n    this.bonePosition = new THREE.Vector3();\n\n    this.elLog = document.querySelector('#log');\n  },\n\n  update() {\n\n  },\n\n  tick() {\n    const { handPosition, bonePosition } = this;\n    const hand = this.data.hand.object3D;\n    const slug = this.slugMesh;\n    if (!hand || !slug) return;\n\n    // get the head bone\n    const headBone = slug.getObjectByName('HeadBone');\n\n    // Rotate the head to match the hand\n    headBone.setRotationFromEuler(hand.rotation);\n\n    hand.getWorldPosition(handPosition);\n    headBone.getWorldPosition(bonePosition);\n\n    headBone.position.x = hand.position.x;\n    headBone.position.z = -hand.position.z;\n  },\n\n  // animate-slug component registers it's self when the model has loaded.\n  addSlug(mesh) {\n    this.slugMesh = mesh;\n    this.headBone = mesh.getObjectByName('HeadBone');\n  },\n});\n\n\n//# sourceURL=webpack://demo-characters/./src/systems/animate-slug.js?\n}");

/***/ }),

/***/ "./src/systems/pull-locomotion.js":
/*!****************************************!*\
  !*** ./src/systems/pull-locomotion.js ***!
  \****************************************/
/***/ (() => {

eval("{AFRAME.registerSystem('pull-locomotion', {\n  schema: {\n    hand: { type: 'selector', default: '#rightHand' },\n    motor: { type: 'selector', default: '#player' },\n    camera: { type: 'selector', default: '#camera' },\n  },\n\n  init() {\n    this.isGripped = false;\n    this.isMoving = false;\n\n    this.gripStartPosition = new THREE.Vector3();\n    this.motorStartPosition = new THREE.Vector3();\n    this.handPosition = new THREE.Vector3();\n    this.cameraPosition = new THREE.Vector3();\n  },\n\n  tick() {\n    const hand = this.data.hand.object3D;\n    const motor = this.data.motor.object3D;\n    const camera = this.data.camera.object3D;\n\n    hand.getWorldPosition(this.handPosition);\n    camera.getWorldPosition(this.cameraPosition);\n\n    //\n    // When the player first grips, setup for movement.\n    // When the player ungrips, stop movement.\n    if (this.isGripped && !this.isMoving) {\n      this.isMoving = true;\n\n      this.gripStartPosition.copy(this.handPosition);\n      // this.motorStartPosition.copy(this.motorPosition);\n      this.motorStartPosition.copy(this.cameraPosition);\n\n      this.gripStartPosition.y = this.motorStartPosition.y;\n    } else if (!this.isGripped && this.isMoving) {\n      this.isMoving = false;\n    }\n\n    //\n    // Move the motor!\n    if (this.isGripped && this.isMoving) {\n      // ignore the y-axis when calculating alpha\n      this.handPosition.y = this.gripStartPosition.y;\n      const alpha = this.handPosition.distanceTo(this.gripStartPosition);\n\n      // Move the motor to the start position by alpha\n      motor.position.lerpVectors(this.motorStartPosition, this.gripStartPosition, alpha);\n    }\n  },\n\n  update() {\n    const { hand } = this.data;\n\n    // Listen to the hand's events\n    ['gripdown', 'gripup'].forEach((eventName) => hand.addEventListener(eventName, this));\n  },\n\n  /**\n   * DOM Event handler.\n   * Called when a listening event is observed.\n   * @param  {Event} event the event that has been fired and needs to be processed.\n   * @return {undefined}\n   */\n  handleEvent(event) {\n    switch (event.type) {\n      case 'gripup':\n        this.isGripped = false;\n        break;\n      case 'gripdown':\n        this.isGripped = true;\n        this.isMoving = false;\n        break;\n      default:\n        // ignore\n    }\n  },\n});\n\n\n//# sourceURL=webpack://demo-characters/./src/systems/pull-locomotion.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;