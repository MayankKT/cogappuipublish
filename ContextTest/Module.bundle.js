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

/***/ "./TelemetryService.js":
/*!*****************************!*\
  !*** ./TelemetryService.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getAppInsights = exports.ai = void 0;\n\nvar _applicationinsightsWeb = __webpack_require__(/*! @microsoft/applicationinsights-web */ \"./node_modules/@microsoft/applicationinsights-web/dist-esm/applicationinsights-web.js\");\n\nvar _applicationinsightsReactJs = __webpack_require__(/*! @microsoft/applicationinsights-react-js */ \"./node_modules/@microsoft/applicationinsights-react-js/dist-esm/applicationinsights-react-js.js\");\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar reactPlugin = null;\nvar appInsights = null;\n/**\r\n * Create the App Insights Telemetry Service\r\n * @return {{reactPlugin: ReactPlugin, appInsights: Object, initialize: Function}} - Object\r\n */\n\nvar createTelemetryService = function createTelemetryService() {\n  /**\r\n   * Initialize the Application Insights class\r\n   * @param {string} instrumentationKey - Application Insights Instrumentation Key\r\n   * @param {Object} browserHistory - client's browser history, supplied by the withRouter HOC\r\n   * @return {void}\r\n   */\n  var initialize = function initialize(instrumentationKey, browserHistory) {\n    alert('jsx n');\n\n    if (!browserHistory) {\n      throw new Error('Could not initialize Telemetry Service');\n    }\n\n    if (!instrumentationKey) {\n      throw new Error('Instrumentation key not provided in ./src/telemetry-provider.jsx');\n    }\n\n    reactPlugin = new _applicationinsightsReactJs.ReactPlugin();\n    appInsights = new _applicationinsightsWeb.ApplicationInsights({\n      config: {\n        instrumentationKey: instrumentationKey,\n        maxBatchInterval: 0,\n        disableFetchTracking: false,\n        extensions: [reactPlugin],\n        extensionConfig: _defineProperty({}, reactPlugin.identifier, {\n          history: browserHistory\n        })\n      }\n    });\n    appInsights.loadAppInsights();\n  };\n\n  return {\n    reactPlugin: reactPlugin,\n    appInsights: appInsights,\n    initialize: initialize\n  };\n};\n\nvar ai = createTelemetryService();\nexports.ai = ai;\n\nvar getAppInsights = function getAppInsights() {\n  return appInsights;\n};\n\nexports.getAppInsights = getAppInsights;\n\n//# sourceURL=webpack:///./TelemetryService.js?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\nvar _TelemetryService = __webpack_require__(/*! ./TelemetryService */ \"./TelemetryService.js\");\n\nvar _telemetryProvider = _interopRequireDefault(__webpack_require__(/*! ./telemetry-provider */ \"./telemetry-provider.jsx\"));\n\nvar microsoftTeams = _interopRequireWildcard(__webpack_require__(/*! @microsoft/teams-js */ \"./node_modules/@microsoft/teams-js/dist/MicrosoftTeams.min.js\"));\n\nvar _reactAdal = __webpack_require__(/*! react-adal */ \"./node_modules/react-adal/lib/react-adal.js\");\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar adalConfig = {\n  clientId: \"e0f60ff0-327b-43e2-9055-54782bbed141\",\n  tenant: \"microsoft.onmicrosoft.com\",\n  endpoints: {\n    graphApiUri: \"https://graph.microsoft.com\",\n    IDRApiUri: \"https://idrservice-stg.azurewebsites.net\",\n    WebApiUri: \"https://campuswebapi.azurewebsites.net\",\n    TeamsApiUri: \"https://teamsforcampus.azurewebsites.net\",\n    DevOpsAPIUri: \"499b84ac-1321-427f-aa17-267ca6975798\"\n  },\n  postLogoutRedirectUri: window.location.origin,\n  cacheLocation: 'localStorage'\n};\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"qs\", function (a) {\n      if (a == \"\") return {};\n      var b = {};\n\n      for (var i = 0; i < a.length; ++i) {\n        var p = a[i].split('=', 2);\n        if (p.length == 1) b[p[0]] = \"\";else b[p[0]] = decodeURIComponent(p[1].replace(/\\+/g, \" \"));\n      }\n\n      return b;\n    }(window.location.search.substr(1).split('&')));\n\n    _this.state = {\n      appInsights: null\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (window.performance && window.performance.navigation.type == window.performance.navigation.TYPE_BACK_FORWARD) {\n        window.history.back();\n      } else {\n        var url = this.qs[\"url\"];\n\n        if (url) {\n          console.log('start : ');\n          var authContext = new _reactAdal.AuthenticationContext(adalConfig);\n          var a = authContext.getCachedUser();\n          console.log('Cached User : ', a);\n          console.log('Test');\n          console.log(' Test  123', microsoftTeams); //microsoftTeams.authentication.authenticate();\n          //microsoftTeams.initialize();\n          // console.log('initialize');\n          //microsoftTeams.getContext((context)=>{alert(context);console.log('Context : ',context)})\n          // let a = this.state.appInsights.trackEvent({ name: 'Website Hits',url:url })\n          // alert(a);\n          // window.location.replace(url);\n        }\n      }\n    }\n  }, {\n    key: \"trackException\",\n    value: function trackException() {//appInsights.trackException({ error: new Error('some error'), severityLevel: SeverityLevel.Error });\n    }\n  }, {\n    key: \"trackTrace\",\n    value: function trackTrace() {// appInsights.trackTrace({ message: 'some trace', severityLevel: SeverityLevel.Information });\n    }\n  }, {\n    key: \"trackEvent\",\n    value: function trackEvent() {//appInsights.trackEvent({ name: 'some test event' });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(_reactRouterDom.BrowserRouter, null, _react[\"default\"].createElement(_telemetryProvider[\"default\"], {\n        instrumentationKey: \"8d188f25-4d90-421a-ab66-217f77e754ce\",\n        after: function after() {\n          _this2.state.appInsights = (0, _TelemetryService.getAppInsights)();\n        }\n      }, _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"flex\",\n          position: \"absolute\",\n          top: \"45%\",\n          left: \"45%\"\n        }\n      }, _react[\"default\"].createElement(\"div\", {\n        className: \"loader\"\n      }), _react[\"default\"].createElement(\"div\", {\n        style: {\n          padding: \"3px\",\n          paddingLeft: \"5px\",\n          fontSize: \"20px\",\n          fontFamily: \"arial\"\n        }\n      }, \"Loading...\")))));\n    }\n  }]);\n\n  return App;\n}(_react[\"default\"].Component);\n\nvar _default = App;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./app.js?");

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

/***/ "./telemetry-provider.jsx":
/*!********************************!*\
  !*** ./telemetry-provider.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _applicationinsightsReactJs = __webpack_require__(/*! @microsoft/applicationinsights-react-js */ \"./node_modules/@microsoft/applicationinsights-react-js/dist-esm/applicationinsights-react-js.js\");\n\nvar _TelemetryService = __webpack_require__(/*! ./TelemetryService */ \"./TelemetryService.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\r\n * This Component provides telemetry with Azure App Insights\r\n *\r\n * NOTE: the package '@microsoft/applicationinsights-react-js' has a HOC withAITracking that requires this to be a Class Component rather than a Functional Component\r\n */\nvar TelemetryProvider =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(TelemetryProvider, _Component);\n\n  function TelemetryProvider() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, TelemetryProvider);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TelemetryProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      initialized: false\n    });\n\n    return _this;\n  }\n\n  _createClass(TelemetryProvider, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      alert('jsx');\n      var history = this.props.history;\n      var initialized = this.state.initialized;\n      var AppInsightsInstrumentationKey = this.props.instrumentationKey; // PUT YOUR KEY HERE\n\n      if (!Boolean(initialized) && Boolean(AppInsightsInstrumentationKey) && Boolean(history)) {\n        _TelemetryService.ai.initialize(AppInsightsInstrumentationKey, history);\n\n        this.setState({\n          initialized: true\n        });\n      }\n\n      this.props.after();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var children = this.props.children;\n      return _react[\"default\"].createElement(_react.Fragment, null, children);\n    }\n  }]);\n\n  return TelemetryProvider;\n}(_react.Component);\n\nvar _default = (0, _reactRouterDom.withRouter)((0, _applicationinsightsReactJs.withAITracking)(_TelemetryService.ai.reactPlugin, TelemetryProvider));\n\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./telemetry-provider.jsx?");

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