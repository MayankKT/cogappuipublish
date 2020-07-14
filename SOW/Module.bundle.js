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

/***/ "./AdalConfig.js":
/*!***********************!*\
  !*** ./AdalConfig.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.adalUserEmail = exports.adalUserAlias = exports.adalUserName = exports.withAdalLoginApi = exports.adalApiFetch = exports[\"default\"] = exports.authContext = exports.adalConfig = void 0;\n\nvar _reactAdal = __webpack_require__(/*! react-adal */ \"./node_modules/react-adal/lib/react-adal.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar adalConfig = {\n  clientId: \"e0f60ff0-327b-43e2-9055-54782bbed141\",\n  tenant: \"microsoft.onmicrosoft.com\",\n  endpoints: {\n    graphApiUri: \"https://graph.microsoft.com\",\n    IDRApiUri: \"https://idrservice-stg.azurewebsites.net\",\n    WebApiUri: \"https://campuswebapi.azurewebsites.net\",\n    TeamsApiUri: \"https://teamsforcampus.azurewebsites.net\",\n    DevOpsAPIUri: \"499b84ac-1321-427f-aa17-267ca6975798\"\n  },\n  postLogoutRedirectUri: window.location.origin,\n  cacheLocation: 'localStorage'\n};\nexports.adalConfig = adalConfig;\nvar APISource = {\n  Campus: \"https://campuswebapi\",\n  IDR: \"https://idrservice\",\n  MSGraph: \"https://graph.microsoft.com\",\n  Teams: \"https://teamsforcampus.azurewebsites.net\",\n  TeamsRoot: \"https://teamsforcampus\"\n};\nvar authContext = new _reactAdal.AuthenticationContext(adalConfig);\nexports.authContext = authContext;\n\nvar WebAPIHelper = /*#__PURE__*/function () {\n  function WebAPIHelper() {\n    _classCallCheck(this, WebAPIHelper);\n  }\n\n  _createClass(WebAPIHelper, [{\n    key: \"getResource\",\n    value: function getResource(url) {\n      var endpointsUri = \"\";\n      url = url.substr(0, 30).toLowerCase();\n      if (url.indexOf(\"https://idrservice\") > -1) endpointsUri = adalConfig.endpoints.IDRApiUri;else if (url.indexOf(\"https://graph.microsoft.com\") > -1) endpointsUri = adalConfig.endpoints.graphApiUri;else if (url.indexOf(\"https://campuswebapi\") > -1) endpointsUri = adalConfig.endpoints.WebApiUri;else if (url.indexOf(\"https://teamsforcampus\") > -1) endpointsUri = adalConfig.endpoints.TeamsApiUri;else if (url.indexOf(\"https://dev.azure.com\") > -1) endpointsUri = adalConfig.endpoints.DevOpsAPIUri;else if (url.indexOf(\"almsearch.dev.azure\") > -1) endpointsUri = adalConfig.endpoints.DevOpsAPIUri;else endpointsUri = adalConfig.endpoints.WebApiUri;\n      return endpointsUri;\n    }\n  }, {\n    key: \"getAPIBaseURL\",\n    value: function getAPIBaseURL(apiSource) {\n      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;\n      if (url.toLowerCase().indexOf(\"https://cpsui-dev.\") > -1 || url.toLowerCase().indexOf(\"/localhost:\") > -1) return apiSource + \"-dev.azurewebsites.net/api/\";else if (url.toLowerCase().indexOf(\"https://cpsui-stg.\") > -1) return apiSource + \"-stg.azurewebsites.net/api/\";else if (url.toLowerCase().indexOf(\"https://cpsui-uat.\") > -1) return apiSource + \"-uat.azurewebsites.net/api/\";else return apiSource + \".azurewebsites.net/api/\";\n    }\n  }, {\n    key: \"GetCampusADOlists\",\n    value: function GetCampusADOlists() {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        alert();\n        var authContext = new _reactAdal.AuthenticationContext(adalConfig); //it must run in iframe too for refreshToken (parsing hash and get token)\n\n        authContext.handleWindowCallback(); // Clear the resource cache on new login\n        // https://github.com/salvoravida/react-adal/issues/68\n\n        authContext.invalidateResourceTokens(); //prevent iframe double app !!!\n\n        if (window === window.parent) {\n          if (!authContext.isCallback(window.location.hash)) {\n            // adal sdk assigns clientId if loginResource is not provided\n            var resource = authContext.config.loginResource;\n            var token = authContext.getCachedToken(resource);\n            var user = authContext.getCachedUser();\n\n            if (!token || !user) {\n              authContext.login();\n            }\n          }\n        }\n\n        console.log('authContext', authContext);\n        var fullAPIUrl;\n        var options = {\n          method: \"POST\",\n          body: JSON.stringify({\n            \"searchText\": \"Test\",\n            \"$skip\": 0,\n            \"$top\": 100,\n            \"$orderBy\": null,\n            \"includeFacets\": true\n          }),\n          headers: {\n            'Content-Type': 'application/json',\n            'Access-Control-Allow-Origin': '*',\n            'Access-Control-Allow-Headers': '*',\n            'timeout': '150000'\n          }\n        };\n\n        try {\n          //fullAPIUrl =\"https://dev.azure.com/\"+ apiSource+ \"/\"+ apiRelativePath;\n          fullAPIUrl = \"https://almsearch.dev.azure.com/servicesdocs/DevOps/_apis/search/wikisearchresults?api-version=5.0-preview.1\";\n          console.log(fullAPIUrl);\n          var output = (0, _reactAdal.adalFetch)(authContext, _this.getResource(fullAPIUrl), fetch, fullAPIUrl, options).then(function (r) {\n            return r.json();\n          });\n          resolve(output);\n        } catch (error) {\n          reject(error);\n        }\n      });\n    }\n  }]);\n\n  return WebAPIHelper;\n}();\n\nexports[\"default\"] = WebAPIHelper;\n\nvar adalApiFetch = function adalApiFetch(url, options) {\n  return (0, _reactAdal.adalFetch)(authContext, adalConfig.endpoints.WebApiUri, fetch, url, options);\n};\n\nexports.adalApiFetch = adalApiFetch;\nvar withAdalLoginApi = (0, _reactAdal.withAdalLogin)(authContext, adalConfig.endpoints.WebApiUri);\nexports.withAdalLoginApi = withAdalLoginApi;\n\nvar adalUserName = function adalUserName() {\n  var cache = authContext.getCachedUser();\n  if (cache !== null || cache !== undefined) return authContext.getCachedUser().profile.name;else return '';\n};\n\nexports.adalUserName = adalUserName;\n\nvar adalUserAlias = function adalUserAlias() {\n  var cache = authContext.getCachedUser();\n  if (cache !== null || cache !== undefined) return authContext.getCachedUser().userName.split('@')[0];else return '';\n};\n\nexports.adalUserAlias = adalUserAlias;\n\nvar adalUserEmail = function adalUserEmail() {\n  var cache = authContext.getCachedUser();\n  if (cache !== null || cache !== undefined) return authContext.getCachedUser().userName;else return '';\n};\n\nexports.adalUserEmail = adalUserEmail;\n\n//# sourceURL=webpack:///./AdalConfig.js?");

/***/ }),

/***/ "./App.css":
/*!*****************!*\
  !*** ./App.css ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./App.css */ \"./node_modules/css-loader/dist/cjs.js!./App.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./App.css?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\n__webpack_require__(/*! ./App.css */ \"./App.css\");\n\nvar _AdalConfig = _interopRequireDefault(__webpack_require__(/*! ./AdalConfig.js */ \"./AdalConfig.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      showFeedBackPanel: false,\n      showIPKitPanel: false,\n      currFeedbackTitle: 'Test',\n      myInputData: '',\n      resultData: [],\n      resultIPKitData: [],\n      srNo: -1,\n      isLogin: true,\n      selectedFile: null,\n      isdocuploaded: false,\n      showRating: 0,\n      selectedIndex: -1,\n      SearchType: 'Wiki Search',\n      SearchTypeCode: 'ws',\n      currPage: 1,\n      tat: ''\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"onDataChange1\",\n    value: function onDataChange1(e, val) {\n      var _this2 = this;\n\n      e.preventDefault();\n      e.stopPropagation();\n\n      if (this.state.SearchTypeCode == 'ws') {\n        this.setState({\n          youLanguage: \"Loading..\",\n          showFeedBackPanel: false,\n          srNo: -1\n        }, function () {\n          // this.webAPI = new WebAPIHelper();\n          // this.webAPI.GetCampusADOlists().then((res) =>\n          // {\n          //https://campuscognitiveservicedevapp.azurewebsites.net\n          var start = performance.now();\n          axios.get('https://campuscognitiveservicedevapp3.azurewebsites.net/DS_SOWDocs', {\n            params: {\n              hobbies: _this2.state.myInputData\n            }\n          }).then(function (res) {\n            var end = performance.now();\n            var timeTaken = end - start;\n            var min = 0;\n            var sec = timeTaken / 1000;\n            var times = '';\n\n            if (sec > 59) {\n              min = parseInt(sec / 60);\n              sec = sec % 60;\n            }\n\n            var milsec = timeTaken % 1000;\n            times = (min < 10 ? '0' + parseInt(min) : parseInt(min)) + ' Min : ' + (sec < 10 ? '0' + parseInt(sec) : parseInt(sec)) + ' Sec : ' + (milsec < 10 ? '0' + parseInt(milsec) : parseInt(milsec)) + \" MS\";\n            var resultDataFound = [];\n            var index = 1;\n\n            if (res && res.data) {\n              var pdfPath = __dirname + 'pdf.png';\n              var wordPath = __dirname + 'word.jpg';\n              res.data.forEach(function (obj) {\n                resultDataFound.push({\n                  id: index,\n                  Project: obj.url ? obj.url.substring(0, obj.url.lastIndexOf(\".\")) : 'NA',\n                  FileName: obj.language ? obj.language : '',\n                  Data: obj.keydata,\n                  Path: obj.url ? obj.url.substring(obj.url.lastIndexOf(\".\") + 1, obj.url.length) == 'pdf' ? pdfPath : wordPath : '',\n                  Wiki: obj.url\n                });\n                index++;\n              });\n            }\n\n            _this2.setState({\n              resultData: resultDataFound,\n              youLanguage: \"\",\n              showFeedBackPanel: true,\n              tat: times\n            });\n          })[\"catch\"](function (err) {\n            console.log(\"AXIOS ERROR: \", err);\n          });\n        });\n      } else {\n        this.setState({\n          youLanguage: \"Loading..\",\n          showFeedBackPanel: false,\n          srNo: -1\n        }, function () {\n          var start = performance.now();\n          axios.get('https://campuscognitiveservicedevapp.azurewebsites.net/WikiCode', {\n            params: {\n              hobbies: _this2.state.myInputData\n            }\n          }).then(function (res) {\n            var end = performance.now();\n            var timeTaken = end - start;\n            var min = 0;\n            var sec = timeTaken / 1000;\n            var times = '';\n\n            if (sec > 59) {\n              min = parseInt(sec / 60);\n              sec = sec % 60;\n            }\n\n            var milsec = timeTaken % 1000;\n            times = (min < 10 ? '0' + parseInt(min) : parseInt(min)) + ' Min : ' + (sec < 10 ? '0' + parseInt(sec) : parseInt(sec)) + ' Sec : ' + (milsec < 10 ? '0' + parseInt(milsec) : parseInt(milsec)) + \" MS\";\n            var resultDataFound = [];\n            var index = 1;\n\n            if (res && res.data && res.data.results && res.data.results.length > 0) {\n              res.data.results.forEach(function (obj) {\n                resultDataFound.push({\n                  id: index,\n                  Project: obj.project.name,\n                  FileName: obj.fileName,\n                  Data: obj.path,\n                  Path: obj.path,\n                  Wiki: obj.path\n                });\n                index++;\n              });\n            }\n\n            _this2.setState({\n              resultData: resultDataFound,\n              youLanguage: \"\",\n              showFeedBackPanel: true,\n              tat: times\n            });\n          })[\"catch\"](function (err) {\n            console.log(\"AXIOS ERROR: \", err);\n          });\n        });\n      }\n    }\n  }, {\n    key: \"goToPage\",\n    value: function goToPage(e, pageNo) {\n      e.stopPropagation();\n      this.setState({\n        currPage: pageNo\n      });\n    }\n  }, {\n    key: \"goToPrevious\",\n    value: function goToPrevious(e) {\n      e.stopPropagation();\n      var pageNo = this.state.currPage;\n      pageNo = pageNo - 1;\n      pageNo = pageNo < 1 ? 1 : pageNo;\n      this.setState({\n        currPage: pageNo\n      });\n    }\n  }, {\n    key: \"goToNext\",\n    value: function goToNext(e) {\n      e.stopPropagation();\n      var pageNo = this.state.currPage;\n      pageNo = pageNo + 1;\n      this.setState({\n        currPage: pageNo\n      });\n    }\n  }, {\n    key: \"onInputChange\",\n    value: function onInputChange(val) {\n      this.setState({\n        myInputData: val,\n        youLanguage: '',\n        showFeedBackPanel: this.state.resultData && this.state.resultData.length > 0 ? true : false\n      });\n    }\n  }, {\n    key: \"onTypeSelect\",\n    value: function onTypeSelect(e, text, code) {\n      this.setState({\n        SearchType: text,\n        currPage: 1,\n        SearchTypeCode: code,\n        resultData: [],\n        showFeedBackPanel: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var result = null;\n      var pageNo = this.state.currPage;\n      var pageSize = 10;\n      var renderedData = this.state.resultData;\n      renderedData = renderedData.filter(function (obj) {\n        return obj.id >= pageSize * (pageNo - 1) + 1 && obj.id <= pageSize * pageNo;\n      });\n      var ratingImg = __dirname + 'rating2.png';\n\n      if (renderedData && renderedData.length > 0) {\n        if (this.state.SearchTypeCode == 'ws') {\n          var resultRow = renderedData.map(function (obj, index) {\n            return /*#__PURE__*/_react[\"default\"].createElement(\"tr\", {\n              key: obj.id\n            }, /*#__PURE__*/_react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\",\n                textAlign: \"center\"\n              }\n            }, obj.id), /*#__PURE__*/_react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, obj.Project), /*#__PURE__*/_react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, obj.FileName), /*#__PURE__*/_react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n              style: {\n                display: \"flex\",\n                justifyContent: \"space-between\"\n              }\n            }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", null, obj.Data), /*#__PURE__*/_react[\"default\"].createElement(\"img\", {\n              src: ratingImg,\n              alt: \"Show Rating\",\n              title: \"Show Rating\",\n              style: {\n                width: \"30px\",\n                height: \"30px\"\n              },\n              onClick: function onClick(e) {\n                alert('Wait...');\n              }\n            }))), /*#__PURE__*/_react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\",\n                textAlign: \"right\",\n                paddingRight: \"2px\"\n              }\n            }, /*#__PURE__*/_react[\"default\"].createElement(\"a\", {\n              href: \"#\",\n              onClick: function onClick(e) {\n                return _this3.DownloadClick(e, obj);\n              }\n            }, /*#__PURE__*/_react[\"default\"].createElement(\"img\", {\n              src: obj.Path,\n              style: {\n                width: \"28px\",\n                height: \"28px\"\n              }\n            }))));\n          });\n          result = /*#__PURE__*/_react[\"default\"].createElement(\"table\", {\n            className: \"blueTable\"\n          }, /*#__PURE__*/_react[\"default\"].createElement(\"tr\", null, /*#__PURE__*/_react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"50px\"\n            }\n          }, \"Sr No\"), /*#__PURE__*/_react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"200px\"\n            }\n          }, \"Document Name\"), /*#__PURE__*/_react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"80px\"\n            }\n          }, \"Language\"), /*#__PURE__*/_react[\"default\"].createElement(\"th\", null, \"Keys\"), /*#__PURE__*/_react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"50px\"\n            }\n          }, \"SOW\")), resultRow);\n        } else {\n          var _resultRow = renderedData.map(function (obj, index) {\n            return /*#__PURE__*/_react[\"default\"].createElement(\"tr\", {\n              key: obj.id\n            }, /*#__PURE__*/_react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\",\n                textAlign: \"center\"\n              }\n            }, obj.id), /*#__PURE__*/_react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, obj.Project), /*#__PURE__*/_react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, /*#__PURE__*/_react[\"default\"].createElement(\"a\", {\n              href: \"#\",\n              onClick: function onClick(e) {\n                window.open('https://campusvso.visualstudio.com/_git/Campus?path=' + encodeURIComponent(obj.Path));\n              }\n            }, obj.Path)));\n          });\n\n          result = /*#__PURE__*/_react[\"default\"].createElement(\"table\", {\n            className: \"blueTable\"\n          }, /*#__PURE__*/_react[\"default\"].createElement(\"tr\", null, /*#__PURE__*/_react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"50px\"\n            }\n          }, \"Sr No\"), /*#__PURE__*/_react[\"default\"].createElement(\"th\", null, \"Project\"), /*#__PURE__*/_react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"200px\"\n            }\n          }, \"Path\")), _resultRow);\n        }\n      } else {\n        result = /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n          style: {\n            textAlign: \"center\",\n            paddingTop: \"100px\"\n          }\n        }, \"Wiki search result not found for content : \", this.state.myInputData);\n      }\n\n      var backImg = __dirname + 'back.png';\n      var numUI;\n      var revenueTableDataF = this.state.resultData;\n      var curPage = this.state.currPage;\n      var j = this.state.currPage / 5;\n\n      if (parseInt(j.toString()) < this.state.currPage / 5) {\n        j++;\n      }\n\n      j = parseInt(j.toString());\n      var start = (j - 1) * 5 + 1;\n      var end = j * 5;\n      var total = revenueTableDataF ? revenueTableDataF.length : 0;\n\n      if (revenueTableDataF && revenueTableDataF.length > 0) {\n        var lastrecord = total / 10;\n        var isLastReached = false;\n\n        if (revenueTableDataF && revenueTableDataF.length > 10) {\n          var numList;\n          var array = [];\n\n          for (var s = start; s <= end; s++) {\n            if (s <= Math.ceil(lastrecord)) array.push(s);else {\n              isLastReached = true;\n            }\n          }\n\n          numList = array.map(function (obj, i) {\n            var classNames = \"\";\n            if (obj == _this3.state.currPage) classNames = \"activeN\";\n            return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n              key: i,\n              className: classNames,\n              href: \"#\",\n              onClick: function onClick(e) {\n                return _this3.goToPage(e, obj);\n              }\n            }, obj);\n          });\n          var totalend = end + 1;\n          numUI = /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n            className: \"links\",\n            style: {\n              display: \"flex\",\n              minWidth: \"210px\",\n              justifyContent: \"space-between\"\n            }\n          }, this.state.currPage == 1 ? /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n            href: \"#\",\n            style: {\n              backgroundColor: \"lightgrey\"\n            }\n          }, \"\\xAB\") : /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n            href: \"#\",\n            onClick: function onClick(e) {\n              return _this3.goToPrevious(e);\n            }\n          }, \"\\xAB\"), numList, Math.ceil(lastrecord) == this.state.currPage ? /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n            href: \"#\",\n            style: {\n              backgroundColor: \"lightgrey\"\n            }\n          }, \"\\xBB\") : /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n            href: \"#\",\n            onClick: function onClick(e) {\n              return _this3.goToNext(e);\n            }\n          }, \"\\xBB\"));\n        }\n      }\n\n      return /*#__PURE__*/_react[\"default\"].createElement(_react[\"default\"].Fragment, null, /*#__PURE__*/_react[\"default\"].createElement(\"div\", null, /*#__PURE__*/_react[\"default\"].createElement(\"div\", null, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        style: {\n          padding: \"13px\",\n          paddingLeft: \"15px\",\n          fontSize: \"25px\",\n          backgroundColor: \"#1C6EA4\",\n          color: \"white\"\n        }\n      }, \"SOW Document Keys\"), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"flex\",\n          justifyContent: \"space-between\",\n          padding: \"15px\",\n          fontWeight: \"bold\",\n          fontSize: \"20px\"\n        }\n      }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"flex\"\n        }\n      }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        style: {\n          paddingRight: \"10px\",\n          paddingTop: \"2px\",\n          fontWeight: \"normal\",\n          fontSize: \"19px\"\n        }\n      }, \"Keyword\"), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\"\n        }\n      }, /*#__PURE__*/_react[\"default\"].createElement(\"input\", {\n        type: \"text\",\n        style: {\n          padingLeft: \"2px\",\n          height: \"27px\",\n          width: \"320px\",\n          fontSize: \"15px\"\n        },\n        value: this.state.myInputData,\n        onChange: function onChange(e) {\n          return _this3.onInputChange(e.target.value);\n        }\n      })), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\",\n          paddingLeft: \"10px\"\n        }\n      }, /*#__PURE__*/_react[\"default\"].createElement(\"button\", {\n        className: \"button\",\n        onClick: function onClick(e) {\n          return _this3.onDataChange1(e, e.target.val);\n        }\n      }, \"Search\"))), numUI)), this.state.youLanguage && this.state.youLanguage.length > 0 ? /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\",\n          paddingLeft: \"15px\",\n          paddingTop: \"100px\"\n        }\n      }, this.state.youLanguage) : null, this.state.showFeedBackPanel ? /*#__PURE__*/_react[\"default\"].createElement(_react[\"default\"].Fragment, null, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        className: \"headerPanel\"\n      }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        style: {\n          minHeight: \"406px\",\n          border: \"1px solid lightgray\",\n          overflow: \"auto\"\n        }\n      }, result))) : null));\n    }\n  }]);\n\n  return App;\n}(_react[\"default\"].Component);\n\nvar _default = App;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _app = _interopRequireDefault(__webpack_require__(/*! ./app.js */ \"./app.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n(0, _reactDom.render)( /*#__PURE__*/_react[\"default\"].createElement(_app[\"default\"], null), document.getElementById('container'));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./App.css":
/*!*******************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./App.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".App {\\n    text-align: center;\\n  }\\n  \\n  .App-logo {\\n    height: 40vmin;\\n  }\\n  \\n  .App-header {\\n    background-color: #282c34;\\n    min-height: 100vh;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    font-size: calc(10px + 2vmin);\\n    color: white;\\n  }\\n  \\n  .App-link {\\n    color: #09d3ac;\\n  }\\n  \\n  \\n  ol li{\\n    list-style:none!important;\\n    }\\n  \\n  \\n    table {\\n      border-collapse: collapse;\\n      width: 100%;\\n    }\\n    \\n    th, td {\\n      text-align: left;\\n    }\\n    \\n    tr:nth-child(even){background-color: #f2f2f2}\\n    \\n    th {\\n      background-color: #1C6EA4;\\n      color: white;\\n    }\\n  \\n    \\n  a:link {\\n    text-decoration: none;\\n  }\\n  \\n  a:visited {\\n    text-decoration: none;\\n  }\\n  \\n  a:hover {\\n    text-decoration: underline;\\n  }\\n  \\n  a:active {\\n    text-decoration: underline;\\n  }\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./App.css?./node_modules/css-loader/dist/cjs.js");

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