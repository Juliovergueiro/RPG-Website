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

/***/ "./script/domListeners.js":
/*!********************************!*\
  !*** ./script/domListeners.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   choosingSkills: () => (/* binding */ choosingSkills)\n/* harmony export */ });\nconst { Oie, choiceBtn, choiceBar, choiceSkill, skill, playerBar, attackSkills, reactSkills, specialSkills, supportSkills, enhancementSkills, movementSkills, tacticalSkills, maneuverSkills, actingBtn, playerSpot } = __webpack_require__(/*! ./selectors */ \"./script/selectors.js\")\r\n\r\nfunction choosingSkills() {\r\n\r\nchoiceSkill.forEach(choice => {\r\n\r\nchoice.addEventListener('click', (event) => {\r\n\r\nskill.forEach(eachSkill => {\r\n\r\nconsole.log(eachSkill)\r\n\r\neachSkill.classList.add('hidden')\r\n\r\nif(event.target.textContent.includes(\"Action\")){\r\n\r\nattackSkills.forEach(attacks => {\r\n\r\nattacks.classList.remove('hidden')\r\n})\r\n\r\n}\r\n\r\n})\r\n\r\n})\r\n\r\n})\r\n\r\n}\n\n//# sourceURL=webpack://jujutsu-site/./script/domListeners.js?");

/***/ }),

/***/ "./script/gameSetup.js":
/*!*****************************!*\
  !*** ./script/gameSetup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTiles: () => (/* binding */ createTiles),\n/* harmony export */   populatePlayerSpots: () => (/* binding */ populatePlayerSpots)\n/* harmony export */ });\nfunction createTiles() {\r\n    const map = document.querySelector('.map');\r\n\r\n    for (let tiles = 0; tiles < 120; tiles++) {\r\n        const tile = document.createElement('div');\r\n        tile.classList.add('tile');\r\n        map.appendChild(tile);\r\n    }\r\n}\r\n\r\nfunction populatePlayerSpots() {\r\n    const playerSpot = document.querySelectorAll('.player-spot');\r\n\r\n    playerSpot.forEach(pSpot => {\r\n        pSpot.innerHTML = `\r\n            <div class=\"col-2 player-avatar\">\r\n                <div class=\"avatarp1\"></div>\r\n            </div>\r\n            <div class=\"col-2 flex-fill player-bar\">\r\n                <div class=\"player-info\">Gojo Kazuki, Lv. 17</div>\r\n                <div class=\"hp-spot\">\r\n                    <div class=\"hp-info\">100</div>\r\n                    <div class=\"hp-container\">\r\n                        <div class=\"hp-bar\"></div>\r\n                        <div class=\"hp-grey\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"mp-spot\">\r\n                    <div class=\"mp-info\">100</div>\r\n                    <div class=\"mp-container\">\r\n                        <div class=\"mp-bar\"></div>\r\n                        <div class=\"mp-grey\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ap-spot\">\r\n                    <div class=\"ap-info\">5</div>\r\n                    <div class=\"ap-container\">\r\n                        <div class=\"ap-bar\"></div>\r\n                        <div class=\"ap-grey\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        `;\r\n    });\r\n}\n\n//# sourceURL=webpack://jujutsu-site/./script/gameSetup.js?");

/***/ }),

/***/ "./script/index.js":
/*!*************************!*\
  !*** ./script/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameSetup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameSetup.js */ \"./script/gameSetup.js\");\n/* harmony import */ var _domListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domListeners.js */ \"./script/domListeners.js\");\n// Audio\r\n\r\n//const audio1 = new Audio()\r\n\r\n//audio1.src = \"./sound/click.wav\"\r\n\r\n// Manipulação dos Ataques\r\n\r\nconst { Oie, choiceBtn, choiceBar, choiceSkill, skill, playerBar, attackSkills, reactSkills, specialSkills, supportSkills, enhancementSkills, movementSkills, tacticalSkills, maneuverSkills, actingBtn, playerSpot } = __webpack_require__(/*! ./selectors */ \"./script/selectors.js\")\r\n\r\n;\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    (0,_gameSetup_js__WEBPACK_IMPORTED_MODULE_0__.createTiles)();\r\n    (0,_gameSetup_js__WEBPACK_IMPORTED_MODULE_0__.populatePlayerSpots)();\r\n    (0,_domListeners_js__WEBPACK_IMPORTED_MODULE_1__.choosingSkills)();\r\n});\n\n//# sourceURL=webpack://jujutsu-site/./script/index.js?");

/***/ }),

/***/ "./script/selectors.js":
/*!*****************************!*\
  !*** ./script/selectors.js ***!
  \*****************************/
/***/ ((module) => {

eval("const choiceBtn = document.getElementById('choice-btn')\r\nconst choiceBar = document.querySelector('.choice-bar')\r\nconst choiceSkill = document.querySelectorAll('.skill-choice')\r\nconst skill = document.querySelectorAll('.action')\r\nconst playerBar = document.querySelectorAll('.player-bar')\r\nconst attackSkills = document.querySelectorAll('.attack')\r\nconst reactSkills = document.querySelectorAll('.reaction')\r\nconst specialSkills = document.querySelectorAll('.attack')\r\nconst supportSkills = document.querySelectorAll('.attack')\r\nconst enhancementSkills = document.querySelectorAll('.attack')\r\nconst movementSkills = document.querySelectorAll('.attack')\r\nconst tacticalSkills = document.querySelectorAll('.attack')\r\nconst maneuverSkills = document.querySelectorAll('.attack')\r\nconst actingBtn = document.getElementById('acting')\r\nconst playerSpot = document.querySelectorAll('.player-spot')\r\nconst actionContainer = document.querySelectorAll('.action-container')\r\n\r\nlet Oie = \"oie\"\r\n\r\nmodule.exports = { Oie, choiceBtn, choiceBar, choiceSkill, skill, playerBar, attackSkills, reactSkills, specialSkills, supportSkills, enhancementSkills, movementSkills, tacticalSkills, maneuverSkills, actingBtn, playerSpot }\n\n//# sourceURL=webpack://jujutsu-site/./script/selectors.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./script/index.js");
/******/ 	
/******/ })()
;