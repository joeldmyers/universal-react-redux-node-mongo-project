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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/joelmyers/Documents/web_projects/git_repositories/package.json: Unexpected token / in JSON at position 0\n    at Object.parse (native)\n    at Object.Module._extensions..json (module.js:558:27)\n    at Module.load (module.js:458:32)\n    at tryModuleLoad (module.js:417:12)\n    at Function.Module._load (module.js:409:3)\n    at Module.require (module.js:468:17)\n    at require (internal/module.js:20:19)\n    at find (/Users/joelmyers/Documents/web_projects/git_repositories/universal-react-redux-node-mongo-project/redux-app/node_modules/babel-loader/lib/resolve-rc.js:14:49)\n    at find (/Users/joelmyers/Documents/web_projects/git_repositories/universal-react-redux-node-mongo-project/redux-app/node_modules/babel-loader/lib/resolve-rc.js:24:12)\n    at find (/Users/joelmyers/Documents/web_projects/git_repositories/universal-react-redux-node-mongo-project/redux-app/node_modules/babel-loader/lib/resolve-rc.js:24:12)\n    at find (/Users/joelmyers/Documents/web_projects/git_repositories/universal-react-redux-node-mongo-project/redux-app/node_modules/babel-loader/lib/resolve-rc.js:24:12)\n    at Object.module.exports (/Users/joelmyers/Documents/web_projects/git_repositories/universal-react-redux-node-mongo-project/redux-app/node_modules/babel-loader/lib/index.js:113:132)");

/***/ })
/******/ ]);