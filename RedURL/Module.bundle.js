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
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\n__webpack_require__(/*! ./App.css */ \"./App.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      showFeedBackPanel: false,\n      showIPKitPanel: false,\n      currFeedbackTitle: 'Test',\n      myInputData: '',\n      resultData: [],\n      resultIPKitData: [],\n      srNo: -1,\n      isLogin: true,\n      selectedFile: null,\n      isdocuploaded: false,\n      showRating: 0,\n      selectedIndex: -1,\n      SearchType: 'Wiki Search',\n      SearchTypeCode: 'ws',\n      currPage: 1,\n      tat: ''\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"onDataChange1\",\n    value: function onDataChange1(e, val) {\n      var _this2 = this;\n\n      e.preventDefault();\n      e.stopPropagation();\n\n      if (!this.state.myInputData || this.state.myInputData.length == 0) {\n        alert(\"Serach content can't be blank\");\n      } else {\n        if (this.state.SearchTypeCode == 'ws') {\n          this.setState({\n            youLanguage: \"Loading..\",\n            showFeedBackPanel: false,\n            srNo: -1\n          }, function () {\n            //https://campuscognitiveservicedevapp.azurewebsites.net\n            var start = performance.now();\n            axios.get('https://campuscognitiveservicedevapp.azurewebsites.net/Wiki', {\n              params: {\n                hobbies: _this2.state.myInputData\n              }\n            }).then(function (res) {\n              var end = performance.now();\n              var timeTaken = end - start;\n              var min = 0;\n              var sec = timeTaken / 1000;\n              var times = '';\n\n              if (sec > 59) {\n                min = parseInt(sec / 60);\n                sec = sec % 60;\n              }\n\n              var milsec = timeTaken % 1000;\n              times = (min < 10 ? '0' + parseInt(min) : parseInt(min)) + ' Min : ' + (sec < 10 ? '0' + parseInt(sec) : parseInt(sec)) + ' Sec : ' + (milsec < 10 ? '0' + parseInt(milsec) : parseInt(milsec)) + \" MS\";\n              var resultDataFound = [];\n              var index = 1;\n\n              if (res && res.data && res.data.results && res.data.results.length > 0) {\n                res.data.results.forEach(function (obj) {\n                  var p = 'notfound';\n                  if (obj.path && obj.path.length > 0) p = obj.path.replace(\".md\", \"\");\n                  obj.hits.forEach(function (m) {\n                    if (m && m.fieldReferenceName && m.fieldReferenceName == 'content') {\n                      var myData = '<div style=\"display:flex;flex-direction:column\">';\n                      m.highlights.forEach(function (s) {\n                        var innerDiv = '<div style=\"padding-bottom:6px\">';\n                        var s1 = s.split(\"<highlighthit>\").join(\"<div style='display: inline;font-size: 17px;color: red'>\"); //let s1 = s.replace(\"<highlighthit>\", \"<div style='display: inline;background-color: yellow;font-size: 17px;color: green;padding-left: 4;padding-right: 4;}'>\");\n\n                        var s2 = s1.split(\"</highlighthit>\").join(\"</div>\"); //let s2 = s1.replace(\"</highlighthit>\", \"</div>\");\n\n                        innerDiv += s2 + \"</div>\";\n                        myData += innerDiv;\n                      });\n                      myData += '</div>';\n                      resultDataFound.push({\n                        id: index,\n                        Project: obj.project.name,\n                        FileName: obj.fileName,\n                        Data: {\n                          __html: myData\n                        },\n                        Path: 'https://dev.azure.com/servicesdocs/' + obj.project.name + '/_wiki/wikis/' + obj.wiki.name + '?pagePath=' + encodeURIComponent(p.replace(\"-\", \" \")),\n                        Wiki: obj.wiki.name\n                      });\n                      index++;\n                    }\n                  });\n                });\n              }\n\n              _this2.setState({\n                resultData: resultDataFound,\n                youLanguage: \"\",\n                showFeedBackPanel: true,\n                tat: times\n              });\n            })[\"catch\"](function (err) {\n              console.log(\"AXIOS ERROR: \", err);\n            });\n          });\n        } else {\n          this.setState({\n            youLanguage: \"Loading..\",\n            showFeedBackPanel: false,\n            srNo: -1\n          }, function () {\n            var start = performance.now();\n            axios.get('https://campuscognitiveservicedevapp.azurewebsites.net/WikiCode', {\n              params: {\n                hobbies: _this2.state.myInputData\n              }\n            }).then(function (res) {\n              var end = performance.now();\n              var timeTaken = end - start;\n              var min = 0;\n              var sec = timeTaken / 1000;\n              var times = '';\n\n              if (sec > 59) {\n                min = parseInt(sec / 60);\n                sec = sec % 60;\n              }\n\n              var milsec = timeTaken % 1000;\n              times = (min < 10 ? '0' + parseInt(min) : parseInt(min)) + ' Min : ' + (sec < 10 ? '0' + parseInt(sec) : parseInt(sec)) + ' Sec : ' + (milsec < 10 ? '0' + parseInt(milsec) : parseInt(milsec)) + \" MS\";\n              var resultDataFound = [];\n              var index = 1;\n\n              if (res && res.data && res.data.results && res.data.results.length > 0) {\n                res.data.results.forEach(function (obj) {\n                  resultDataFound.push({\n                    id: index,\n                    Project: obj.project.name,\n                    FileName: obj.fileName,\n                    Data: obj.path,\n                    Path: obj.path,\n                    Wiki: obj.path\n                  });\n                  index++;\n                });\n              }\n\n              _this2.setState({\n                resultData: resultDataFound,\n                youLanguage: \"\",\n                showFeedBackPanel: true,\n                tat: times\n              });\n            })[\"catch\"](function (err) {\n              console.log(\"AXIOS ERROR: \", err);\n            });\n          });\n        }\n      }\n    }\n  }, {\n    key: \"goToPage\",\n    value: function goToPage(e, pageNo) {\n      e.stopPropagation();\n      this.setState({\n        currPage: pageNo\n      });\n    }\n  }, {\n    key: \"goToPrevious\",\n    value: function goToPrevious(e) {\n      e.stopPropagation();\n      var pageNo = this.state.currPage;\n      pageNo = pageNo - 1;\n      pageNo = pageNo < 1 ? 1 : pageNo;\n      this.setState({\n        currPage: pageNo\n      });\n    }\n  }, {\n    key: \"goToNext\",\n    value: function goToNext(e) {\n      e.stopPropagation();\n      var pageNo = this.state.currPage;\n      pageNo = pageNo + 1;\n      this.setState({\n        currPage: pageNo\n      });\n    }\n  }, {\n    key: \"onInputChange\",\n    value: function onInputChange(val) {\n      this.setState({\n        myInputData: val,\n        youLanguage: '',\n        showFeedBackPanel: this.state.resultData && this.state.resultData.length > 0 ? true : false\n      });\n    }\n  }, {\n    key: \"onTypeSelect\",\n    value: function onTypeSelect(e, text, code) {\n      this.setState({\n        SearchType: text,\n        currPage: 1,\n        SearchTypeCode: code,\n        resultData: [],\n        showFeedBackPanel: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var result = null;\n      var pageNo = this.state.currPage;\n      var pageSize = 10;\n      var renderedData = this.state.resultData;\n      renderedData = renderedData.filter(function (obj) {\n        return obj.id >= pageSize * (pageNo - 1) + 1 && obj.id <= pageSize * pageNo;\n      });\n\n      if (renderedData && renderedData.length > 0) {\n        if (this.state.SearchTypeCode == 'ws') {\n          var resultRow = renderedData.map(function (obj, index) {\n            return _react[\"default\"].createElement(\"tr\", {\n              key: obj.id\n            }, _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, obj.id), _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, obj.Project), _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, obj.FileName), _this3.state.SearchTypeCode == 'ws' ? _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, _react[\"default\"].createElement(\"div\", {\n              dangerouslySetInnerHTML: obj.Data\n            })) : _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, obj.Data), _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, _react[\"default\"].createElement(\"a\", {\n              href: \"#\",\n              onClick: function onClick(e) {\n                window.open(obj.Path);\n              }\n            }, 'Click here')));\n          });\n          result = _react[\"default\"].createElement(\"table\", {\n            className: \"blueTable\"\n          }, _react[\"default\"].createElement(\"tr\", null, _react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"50px\"\n            }\n          }, \"Sr No\"), _react[\"default\"].createElement(\"th\", null, \"Project\"), _react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"200px\"\n            }\n          }, \"File Name\"), _react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"200px\"\n            }\n          }, \"Content\"), _react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"180px\"\n            }\n          }, \"Navigate\")), resultRow);\n        } else {\n          var _resultRow = renderedData.map(function (obj, index) {\n            return _react[\"default\"].createElement(\"tr\", {\n              key: obj.id\n            }, _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, obj.id), _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, obj.Project), _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, _react[\"default\"].createElement(\"a\", {\n              href: \"#\",\n              onClick: function onClick(e) {\n                window.open('https://campusvso.visualstudio.com/_git/Campus?path=' + encodeURIComponent(obj.Path));\n              }\n            }, obj.Path)));\n          });\n\n          result = _react[\"default\"].createElement(\"table\", {\n            className: \"blueTable\"\n          }, _react[\"default\"].createElement(\"tr\", null, _react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"50px\"\n            }\n          }, \"Sr No\"), _react[\"default\"].createElement(\"th\", null, \"Project\"), _react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"200px\"\n            }\n          }, \"Path\")), _resultRow);\n        }\n      } else {\n        result = _react[\"default\"].createElement(\"div\", {\n          style: {\n            textAlign: \"center\",\n            paddingTop: \"100px\"\n          }\n        }, \"Wiki search result not found for content : \", this.state.myInputData);\n      }\n\n      var backImg = __dirname + 'back.png';\n      var numUI;\n      var revenueTableDataF = this.state.resultData;\n      var curPage = this.state.currPage;\n      var j = this.state.currPage / 5;\n\n      if (parseInt(j.toString()) < this.state.currPage / 5) {\n        j++;\n      }\n\n      j = parseInt(j.toString());\n      var start = (j - 1) * 5 + 1;\n      var end = j * 5;\n      var total = revenueTableDataF ? revenueTableDataF.length : 0;\n\n      if (revenueTableDataF && revenueTableDataF.length > 0) {\n        var lastrecord = total / 10;\n        var isLastReached = false;\n\n        if (revenueTableDataF && revenueTableDataF.length > 10) {\n          var numList;\n          var array = [];\n\n          for (var s = start; s <= end; s++) {\n            if (s <= Math.ceil(lastrecord)) array.push(s);else {\n              isLastReached = true;\n            }\n          }\n\n          numList = array.map(function (obj, i) {\n            var classNames = \"\";\n            if (obj == _this3.state.currPage) classNames = \"activeN\";\n            return _react[\"default\"].createElement(\"div\", {\n              key: i,\n              className: classNames,\n              href: \"#\",\n              onClick: function onClick(e) {\n                return _this3.goToPage(e, obj);\n              }\n            }, obj);\n          });\n          var totalend = end + 1;\n          numUI = _react[\"default\"].createElement(\"div\", {\n            className: \"links\",\n            style: {\n              display: \"flex\",\n              minWidth: \"210px\",\n              justifyContent: \"space-between\"\n            }\n          }, this.state.currPage == 1 ? _react[\"default\"].createElement(\"div\", {\n            href: \"#\",\n            style: {\n              backgroundColor: \"lightgrey\"\n            }\n          }, \"\\xAB\") : _react[\"default\"].createElement(\"div\", {\n            href: \"#\",\n            onClick: function onClick(e) {\n              return _this3.goToPrevious(e);\n            }\n          }, \"\\xAB\"), numList, Math.ceil(lastrecord) == this.state.currPage ? _react[\"default\"].createElement(\"div\", {\n            href: \"#\",\n            style: {\n              backgroundColor: \"lightgrey\"\n            }\n          }, \"\\xBB\") : _react[\"default\"].createElement(\"div\", {\n            href: \"#\",\n            onClick: function onClick(e) {\n              return _this3.goToNext(e);\n            }\n          }, \"\\xBB\"));\n        }\n      }\n\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"div\", null, _react[\"default\"].createElement(\"div\", null, _react[\"default\"].createElement(\"div\", {\n        style: {\n          padding: \"5px\",\n          paddingLeft: \"15px\",\n          fontSize: \"25px\",\n          backgroundColor: \"#1C6EA4\",\n          color: \"white\"\n        }\n      }, \"Azure DevOps Search\"), _react[\"default\"].createElement(\"div\", {\n        style: {\n          paddingLeft: \"15px\",\n          paddingTop: \"25px\",\n          display: \"flex\"\n        }\n      }, _react[\"default\"].createElement(\"div\", {\n        style: {\n          padding: \"5px\"\n        }\n      }, \"Type\"), _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\",\n          width: \"127\"\n        },\n        className: \"dropdown\"\n      }, _react[\"default\"].createElement(\"button\", {\n        className: \"dropbtn\"\n      }, this.state.SearchType), _react[\"default\"].createElement(\"div\", {\n        className: \"dropdown-content\"\n      }, _react[\"default\"].createElement(\"div\", {\n        href: \"#\",\n        onClick: function onClick(e) {\n          return _this3.onTypeSelect(e, 'Wiki Search', 'ws');\n        }\n      }, \"Wiki Search\"), _react[\"default\"].createElement(\"div\", {\n        href: \"#\",\n        onClick: function onClick(e) {\n          return _this3.onTypeSelect(e, 'Code Search', 'cs');\n        }\n      }, \"Code Search\"))), _react[\"default\"].createElement(\"div\", {\n        style: {\n          padding: \"5px\"\n        }\n      }, \"Search Text\"), _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\"\n        }\n      }, _react[\"default\"].createElement(\"input\", {\n        type: \"text\",\n        style: {\n          padingLeft: \"2px\",\n          height: \"27px\",\n          width: \"270px\",\n          fontSize: \"15px\"\n        },\n        value: this.state.myInputData,\n        onChange: function onChange(e) {\n          return _this3.onInputChange(e.target.value);\n        }\n      })), _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\",\n          paddingLeft: \"10px\"\n        }\n      }, _react[\"default\"].createElement(\"button\", {\n        className: \"button\",\n        onClick: function onClick(e) {\n          return _this3.onDataChange1(e, e.target.val);\n        }\n      }, \"Search\"))), _react[\"default\"].createElement(\"br\", null)), this.state.youLanguage && this.state.youLanguage.length > 0 ? _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\",\n          paddingLeft: \"15px\",\n          paddingTop: \"100px\"\n        }\n      }, this.state.youLanguage) : null, this.state.showFeedBackPanel ? _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"flex\",\n          justifyContent: \"space-between\",\n          padding: \"15px\",\n          fontWeight: \"bold\",\n          fontSize: \"20px\"\n        }\n      }, _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\",\n          fontSize: \"14px\",\n          fontWeight: \"normal\",\n          paddingTop: \"4px\"\n        }\n      }, _react[\"default\"].createElement(\"span\", {\n        style: {\n          fontSize: \"18px\",\n          fontWeight: \"bold\",\n          color: \"blue\"\n        }\n      }, \"No of Records :\"), this.state.resultData ? \" \" + this.state.resultData.length : '', _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\",\n          paddingLeft: \"15px\"\n        }\n      }, true ? _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"span\", {\n        style: {\n          fontSize: \"18px\",\n          fontWeight: \"bold\",\n          color: \"blue\"\n        }\n      }, \"TAT :\"), _react[\"default\"].createElement(\"span\", null, \" \", this.state.tat)) : undefined)), numUI), \" \", _react[\"default\"].createElement(\"div\", {\n        className: \"headerPanel\"\n      }, _react[\"default\"].createElement(\"div\", {\n        style: {\n          minHeight: \"406px\",\n          border: \"1px solid lightgray\",\n          overflow: \"auto\"\n        }\n      }, result))) : null));\n    }\n  }]);\n\n  return App;\n}(_react[\"default\"].Component);\n\nvar _default = App;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./app.js?");

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

/***/ "./node_modules/css-loader/dist/cjs.js!./App.css":
/*!*******************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./App.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".App {\\r\\n    text-align: center;\\r\\n  }\\r\\n  \\r\\n  .App-logo {\\r\\n    height: 40vmin;\\r\\n  }\\r\\n  \\r\\n  .App-header {\\r\\n    background-color: #282c34;\\r\\n    min-height: 100vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    font-size: calc(10px + 2vmin);\\r\\n    color: white;\\r\\n  }\\r\\n  \\r\\n  .App-link {\\r\\n    color: #09d3ac;\\r\\n  }\\r\\n  \\r\\n  \\r\\n  ol li{\\r\\n    list-style:none!important;\\r\\n    }\\r\\n  \\r\\n  \\r\\n    table {\\r\\n      border-collapse: collapse;\\r\\n      width: 100%;\\r\\n    }\\r\\n    \\r\\n    th, td {\\r\\n      text-align: left;\\r\\n    }\\r\\n    \\r\\n    tr:nth-child(even){background-color: #f2f2f2}\\r\\n    \\r\\n    th {\\r\\n      background-color: #1C6EA4;\\r\\n      color: white;\\r\\n    }\\r\\n  \\r\\n    \\r\\n  a:link {\\r\\n    text-decoration: none;\\r\\n  }\\r\\n  \\r\\n  a:visited {\\r\\n    text-decoration: none;\\r\\n  }\\r\\n  \\r\\n  a:hover {\\r\\n    text-decoration: underline;\\r\\n  }\\r\\n  \\r\\n  a:active {\\r\\n    text-decoration: underline;\\r\\n  }\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./App.css?./node_modules/css-loader/dist/cjs.js");

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