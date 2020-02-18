/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"Module": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./App.css":
/*!*****************!*\
  !*** ./App.css ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./App.css */ \"./node_modules/css-loader/dist/cjs.js!./App.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./App.css?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\n__webpack_require__(/*! ./App.css */ \"./App.css\");\n\nvar _homepage = _interopRequireDefault(__webpack_require__(/*! ./homepage.js */ \"./homepage.js\"));\n\nvar _selectclass = _interopRequireDefault(__webpack_require__(/*! ./selectclass.js */ \"./selectclass.js\"));\n\nvar _login = _interopRequireDefault(__webpack_require__(/*! ./login.js */ \"./login.js\"));\n\nvar _papersetting = _interopRequireDefault(__webpack_require__(/*! ./papersetting.js */ \"./papersetting.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/path-browserify/index.js\");\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      isLogin: false,\n      selectedClass: null,\n      homePageAction: '0'\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"onLoginClick\",\n    value: function onLoginClick(isLogin) {\n      this.setState({\n        isLogin: isLogin\n      });\n    }\n  }, {\n    key: \"onHomePageAction\",\n    value: function onHomePageAction(val) {\n      this.setState({\n        homePageAction: val\n      });\n    }\n  }, {\n    key: \"onSelClassAction\",\n    value: function onSelClassAction(obj) {\n      this.setState({\n        selectedClass: obj\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, this.state.isLogin ? _react[\"default\"].createElement(_react[\"default\"].Fragment, null, this.state.homePageAction == 'p' ? this.state.selectedClass == null ? _react[\"default\"].createElement(_selectclass[\"default\"], {\n        onSelClassAction: function onSelClassAction(obj) {\n          return _this2.onSelClassAction(obj);\n        }\n      }) : _react[\"default\"].createElement(_papersetting[\"default\"], {\n        onBackClick: function onBackClick(obj) {\n          return _this2.onSelClassAction(obj);\n        },\n        selectedClass: this.state.selectedClass\n      }) : _react[\"default\"].createElement(_homepage[\"default\"], {\n        onHomePageAction: function onHomePageAction(val) {\n          return _this2.onHomePageAction(val);\n        }\n      })) : _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(_login[\"default\"], {\n        onLogin: function onLogin(isLogin) {\n          return _this2.onLoginClick(isLogin);\n        }\n      })));\n    }\n  }]);\n\n  return App;\n}(_react[\"default\"].Component);\n\nvar _default = App;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./homepage.js":
/*!*********************!*\
  !*** ./homepage.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar HomePage =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(HomePage, _React$Component);\n\n  function HomePage(props) {\n    var _this;\n\n    _classCallCheck(this, HomePage);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(HomePage).call(this, props));\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(HomePage, [{\n    key: \"onHomePageAction\",\n    value: function onHomePageAction(e, val) {\n      e.preventDefault();\n\n      if (val == 'c') {\n        alert('Class Management is commig soon.');\n      } else {\n        this.props.onHomePageAction(val);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"div\", {\n        className: \"login-page\"\n      }, _react[\"default\"].createElement(\"div\", {\n        style: {\n          minWidth: \"350px\"\n        },\n        className: \"form\"\n      }, _react[\"default\"].createElement(\"div\", {\n        className: \"login-form\",\n        style: {\n          paddingTop: \"45px\"\n        }\n      }, _react[\"default\"].createElement(\"button\", {\n        onClick: function onClick(e) {\n          return _this2.onHomePageAction(e, 'p');\n        }\n      }, \"Paper Setting\")), _react[\"default\"].createElement(\"div\", {\n        style: {\n          paddingTop: \"50px\"\n        },\n        className: \"login-form\"\n      }, _react[\"default\"].createElement(\"button\", {\n        onClick: function onClick(e) {\n          return _this2.onHomePageAction(e, 'c');\n        }\n      }, \"Class Management\")))));\n    }\n  }]);\n\n  return HomePage;\n}(_react[\"default\"].Component);\n\nvar _default = HomePage;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./homepage.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _app = _interopRequireDefault(__webpack_require__(/*! ./app.js */ \"./app.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n(0, _reactDom.render)(_react[\"default\"].createElement(_app[\"default\"], null), document.getElementById('container'));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./login.js":
/*!******************!*\
  !*** ./login.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Login =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Login, _React$Component);\n\n  function Login(props) {\n    var _this;\n\n    _classCallCheck(this, Login);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));\n    _this.state = {\n      userName: '',\n      passWord: '',\n      isInvalid: false\n    };\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: \"onLoginClick\",\n    value: function onLoginClick(e) {\n      var _this2 = this;\n\n      e.preventDefault();\n\n      if (this.state.userName == 'a@123' && this.state.passWord == 'a@123') {\n        console.log('true');\n        this.setState({\n          isInvalid: false\n        }, function () {\n          _this2.props.onLogin(!_this2.state.isInvalid);\n        });\n      } else {\n        console.log('false');\n        this.setState({\n          isInvalid: true\n        });\n      }\n    }\n  }, {\n    key: \"userNameChange\",\n    value: function userNameChange(value) {\n      this.setState({\n        userName: value,\n        isInvalid: false\n      });\n    }\n  }, {\n    key: \"passwordChange\",\n    value: function passwordChange(value) {\n      this.setState({\n        passWord: value,\n        isInvalid: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      console.log('render');\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"div\", {\n        className: \"login-page\"\n      }, _react[\"default\"].createElement(\"div\", {\n        className: \"form\"\n      }, _react[\"default\"].createElement(\"div\", {\n        className: \"login-form\",\n        style: {\n          paddingTop: \"45px\"\n        }\n      }, _react[\"default\"].createElement(\"input\", {\n        type: \"text\",\n        placeholder: \"username\",\n        value: this.state.userName,\n        onChange: function onChange(e) {\n          return _this3.userNameChange(e.target.value);\n        }\n      }), _react[\"default\"].createElement(\"input\", {\n        type: \"password\",\n        placeholder: \"password\",\n        value: this.state.passWord,\n        onChange: function onChange(e) {\n          return _this3.passwordChange(e.target.value);\n        }\n      }), _react[\"default\"].createElement(\"button\", {\n        onClick: function onClick(e) {\n          return _this3.onLoginClick(e);\n        }\n      }, \"login\"), this.state.isInvalid ? _react[\"default\"].createElement(\"p\", {\n        className: \"message\",\n        style: {\n          color: \"red\"\n        }\n      }, \"Invalid credential...\") : null))));\n    }\n  }]);\n\n  return Login;\n}(_react[\"default\"].Component);\n\nvar _default = Login;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./login.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./App.css":
/*!*******************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./App.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".App {\\r\\n    text-align: center;\\r\\n  }\\r\\n  \\r\\n  .App-logo {\\r\\n    height: 40vmin;\\r\\n  }\\r\\n  \\r\\n  .App-header {\\r\\n    background-color: #282c34;\\r\\n    min-height: 100vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    font-size: calc(10px + 2vmin);\\r\\n    color: white;\\r\\n  }\\r\\n  \\r\\n  .App-link {\\r\\n    color: #09d3ac;\\r\\n  }\\r\\n  \\r\\n  \\r\\n  ol li{\\r\\n    list-style:none!important;\\r\\n    }\\r\\n  \\r\\n  \\r\\n    table {\\r\\n      border-collapse: collapse;\\r\\n      width: 100%;\\r\\n    }\\r\\n    \\r\\n    th, td {\\r\\n      text-align: left;\\r\\n      padding: 8px;\\r\\n    }\\r\\n    \\r\\n    tr:nth-child(even){background-color: #f2f2f2}\\r\\n    \\r\\n    th {\\r\\n      background-color: #4CAF50;\\r\\n      color: white;\\r\\n    }\\r\\n  \\r\\n    \\r\\n  a:link {\\r\\n    text-decoration: none;\\r\\n  }\\r\\n  \\r\\n  a:visited {\\r\\n    text-decoration: none;\\r\\n  }\\r\\n  \\r\\n  a:hover {\\r\\n    text-decoration: underline;\\r\\n  }\\r\\n  \\r\\n  a:active {\\r\\n    text-decoration: underline;\\r\\n  }\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./App.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./papersetting.js":
/*!*************************!*\
  !*** ./papersetting.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar PaperSetting =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(PaperSetting, _React$Component);\n\n  function PaperSetting(props) {\n    var _this;\n\n    _classCallCheck(this, PaperSetting);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PaperSetting).call(this, props));\n    _this.state = {\n      selectedClass: _this.props.selectedClass || null\n    };\n    return _this;\n  }\n\n  _createClass(PaperSetting, [{\n    key: \"onBackClick\",\n    value: function onBackClick(e) {\n      e.preventDefault();\n      this.props.onBackClick(null);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var obj = this.state.selectedClass;\n      var backImg = \"../Publish/back.png\";\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"div\", {\n        style: {\n          paddingTop: \"20px\"\n        },\n        className: \"login-page\"\n      }, _react[\"default\"].createElement(\"div\", {\n        style: {\n          minWidth: \"100%\",\n          minHeight: \"100%\",\n          paddingTop: \"20px\"\n        },\n        className: \"form\"\n      }, _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"flex\"\n        }\n      }, _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\",\n          paddingTop: \"2px\",\n          paddingRight: \"5px\"\n        }\n      }, _react[\"default\"].createElement(\"img\", {\n        alt: \"go back\",\n        title: \"go back\",\n        src: backImg,\n        style: {\n          width: \"30px\",\n          height: \"30px\"\n        },\n        onClick: function onClick(e) {\n          return _this2.onBackClick(e);\n        }\n      })), _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\",\n          paddingTop: \"4px\",\n          paddingRight: \"2px\"\n        }\n      }, _react[\"default\"].createElement(\"span\", {\n        style: {\n          fontWeight: \"bold\"\n        }\n      }, \" \", obj.code, obj.isSup == '1' ? _react[\"default\"].createElement(\"sup\", null, \"th\") : null, \" \", obj.text))), _react[\"default\"].createElement(\"div\", {\n        style: {\n          paddingTop: \"20px\",\n          flexDirection: \"column\",\n          display: \"flex\",\n          height: \"100%\",\n          width: \"100%\",\n          justifyContent: \"space-between\"\n        }\n      }, _react[\"default\"].createElement(\"div\", {\n        style: {\n          paddingTop: \"20px\",\n          display: \"flex\",\n          height: \"100%\",\n          width: \"100%\",\n          justifyContent: \"space-between\"\n        }\n      }, _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"flex\",\n          justifyContent: \"space-between\",\n          width: \"75%\"\n        }\n      }, \"Chapterwise\", _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\",\n          paddingTop: \"7px\"\n        }\n      }, _react[\"default\"].createElement(\"input\", {\n        style: {\n          width: \"15px\"\n        },\n        type: \"radio\",\n        id: \"male\",\n        name: \"gender\",\n        value: \"male\"\n      })), \"Boardwise\", _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\",\n          paddingTop: \"7px\"\n        }\n      }, _react[\"default\"].createElement(\"input\", {\n        style: {\n          width: \"15px\"\n        },\n        type: \"radio\",\n        id: \"female\",\n        name: \"gender\",\n        value: \"female\"\n      })))), _react[\"default\"].createElement(\"div\", {\n        style: {\n          paddingTop: \"20px\",\n          display: \"flex\",\n          height: \"100%\",\n          width: \"100%\",\n          justifyContent: \"space-between\"\n        }\n      }, _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"flex\",\n          justifyContent: \"space-between\",\n          width: \"75%\"\n        }\n      }, \"Chapterwise\", _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\",\n          paddingTop: \"7px\"\n        }\n      }, _react[\"default\"].createElement(\"input\", {\n        style: {\n          width: \"15px\"\n        },\n        type: \"radio\",\n        id: \"male\",\n        name: \"gender\",\n        value: \"male\"\n      })), \"Boardwise\", _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\",\n          paddingTop: \"7px\"\n        }\n      }, _react[\"default\"].createElement(\"input\", {\n        style: {\n          width: \"15px\"\n        },\n        type: \"radio\",\n        id: \"female\",\n        name: \"gender\",\n        value: \"female\"\n      })))), _react[\"default\"].createElement(\"div\", {\n        style: {\n          paddingTop: \"20px\",\n          display: \"flex\",\n          height: \"100%\",\n          width: \"100%\",\n          justifyContent: \"space-between\"\n        }\n      }, _react[\"default\"].createElement(\"div\", null, \"9\"), _react[\"default\"].createElement(\"div\", null, \"10\"), _react[\"default\"].createElement(\"div\", null, \"11\"), _react[\"default\"].createElement(\"div\", null, \"12\"))))));\n    }\n  }]);\n\n  return PaperSetting;\n}(_react[\"default\"].Component);\n\nvar _default = PaperSetting;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./papersetting.js?");

/***/ }),

/***/ "./selectclass.js":
/*!************************!*\
  !*** ./selectclass.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar SelectClass =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(SelectClass, _React$Component);\n\n  function SelectClass(props) {\n    var _this;\n\n    _classCallCheck(this, SelectClass);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectClass).call(this, props));\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(SelectClass, [{\n    key: \"onHomePageAction\",\n    value: function onHomePageAction(e, obj) {\n      e.preventDefault();\n      console.log('obj :', obj);\n      this.props.onSelClassAction(obj);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var classDetails = [{\n        code: '8',\n        type: 'School Section',\n        text: 'English Medium',\n        isSup: '1'\n      }, {\n        code: '9',\n        type: 'School Section',\n        text: 'English Medium',\n        isSup: '1'\n      }, {\n        code: '10',\n        type: 'School Section',\n        text: 'English Medium',\n        isSup: '1'\n      }, {\n        code: '11',\n        type: 'College Section',\n        text: 'English Medium (Science)',\n        isSup: '1'\n      }, {\n        code: '12',\n        type: 'College Section',\n        text: 'English Medium (Science)',\n        isSup: '1'\n      }, {\n        code: '11',\n        type: 'College Section',\n        text: 'English Medium (Commerce)',\n        isSup: '1'\n      }, {\n        code: '12',\n        type: 'College Section',\n        text: 'English Medium (Commerce)',\n        isSup: '1'\n      }, {\n        code: 'JEE Mains',\n        type: 'JEE Mains',\n        text: '',\n        isSup: '0'\n      }, {\n        code: 'NEET',\n        type: 'NEET',\n        text: '',\n        isSup: '0'\n      }];\n      var schoolSection = null;\n      schoolSection = classDetails.map(function (obj, index) {\n        return _react[\"default\"].createElement(\"div\", {\n          className: \"login-form\",\n          style: {\n            paddingTop: \"50px\"\n          }\n        }, _react[\"default\"].createElement(\"button\", {\n          onClick: function onClick(e) {\n            return _this2.onHomePageAction(e, obj);\n          }\n        }, obj.code, obj.isSup == '1' ? _react[\"default\"].createElement(\"sup\", null, \"th\") : null, \" \", obj.text));\n      });\n      console.log('schoolSection', schoolSection);\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"div\", {\n        style: {\n          paddingTop: \"20px\"\n        },\n        className: \"login-page\"\n      }, _react[\"default\"].createElement(\"div\", {\n        style: {\n          minWidth: \"350px\"\n        },\n        className: \"form\"\n      }, schoolSection)));\n    }\n  }]);\n\n  return SelectClass;\n}(_react[\"default\"].Component);\n\nvar _default = SelectClass;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./selectclass.js?");

/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi babel-polyfill ./index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"./node_modules/babel-polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./index.js?");

/***/ })

/******/ });