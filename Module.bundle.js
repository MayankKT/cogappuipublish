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

eval("var api = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !./node_modules/css-loader!./App.css */ \"./node_modules/css-loader/index.js!./App.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./App.css?");

/***/ }),

/***/ "./app1.js":
/*!*****************!*\
  !*** ./app1.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\n__webpack_require__(/*! ./App.css */ \"./App.css\");\n\nvar _inputText = _interopRequireDefault(__webpack_require__(/*! ./inputText.js */ \"./inputText.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/path-browserify/index.js\");\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      showFeedBackPanel: false,\n      showIPKitPanel: false,\n      currFeedbackTitle: 'Test',\n      myInputData: '',\n      resultData: [],\n      resultIPKitData: [],\n      srNo: -1,\n      isLogin: true\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"onDataChange\",\n    value: function onDataChange(val) {// this.setState({ youLanguage: \"Refreshing..\" }, () => {\n      //   axios.get('http://localhost:5000/refresh', \"just to test\")\n      //     .then((res) => {\n      //       console.log(\"RESPONSE RECEIVED: \", res);\n      //       this.setState({ youLanguage: \"Your Language : Refreshed..\" })\n      //     })\n      //     .catch((err) => {\n      //       console.log(\"AXIOS ERROR: \", err);\n      //     })\n      // });\n    }\n  }, {\n    key: \"onDataChange1\",\n    value: function onDataChange1(val) {\n      var _this2 = this;\n\n      // axios.get('https://campuscognitiveservicedevapp.azurewebsites.net/', {\n      //   params: {\n      //     hobbies: this.state.myInputData\n      //   }\n      // }\n      // ).then((res) => {\n      //    alert(res);\n      // });\n      // return;\n      this.setState({\n        youLanguage: \"Loading..\",\n        showFeedBackPanel: false,\n        srNo: -1\n      }, function () {\n        axios.get('https://campuscognitiveservicedevapp.azurewebsites.net/SOWDocs', {\n          params: {\n            hobbies: _this2.state.myInputData\n          }\n        }).then(function (res) {\n          console.log('response', res);\n          var resultDataFound = [];\n\n          if (res && res.data && res.data.length > 0) {\n            var pdfPath = path.resolve('./pdf.png');\n            var wordPath = __dirname + 'word.jpg';\n            res.data.forEach(function (obj, index) {\n              resultDataFound.push({\n                id: obj.id,\n                Name: obj.url ? obj.url.substring(0, obj.url.lastIndexOf(\".\")) : 'NA',\n                Hobbies: obj.keydata && obj.keydata.length > 5 ? obj.keydata[0] + \", \" + obj.keydata[1] + \", \" + obj.keydata[2] + \", \" + obj.keydata[3] + \", \" + obj.keydata[4] + \", \" + obj.keydata[5] + \", \" : obj.keydata.join(', '),\n                URL: obj.url,\n                imgSrc: obj.url ? obj.url.substring(obj.url.lastIndexOf(\".\") + 1, obj.url.length) == 'pdf' ? pdfPath : wordPath : '',\n                keydata: JSON.stringify(obj.keydata)\n              });\n            });\n          }\n\n          _this2.setState({\n            resultData: resultDataFound,\n            youLanguage: \"\",\n            showFeedBackPanel: true\n          });\n        })[\"catch\"](function (err) {\n          console.log(\"AXIOS ERROR: \", err);\n        });\n      });\n    }\n  }, {\n    key: \"goToSOWClick\",\n    value: function goToSOWClick(e) {\n      this.setState({\n        showIPKitPanel: false\n      });\n    }\n  }, {\n    key: \"onRecommendedIPKitClick\",\n    value: function onRecommendedIPKitClick(val, srNo, e) {\n      var _this3 = this;\n\n      if (this.state.srNo == srNo) {\n        this.setState({\n          showIPKitPanel: true\n        });\n      } else {\n        this.setState({\n          showIPKitPanel: true,\n          resultIPKitData: [],\n          srNo: srNo\n        }, function () {\n          axios.get('https://campuscognitiveservicedevapp.azurewebsites.net/IPKitDocs', {\n            params: {\n              hobbies: val\n            }\n          }).then(function (res) {\n            console.log('response', res);\n            var resultDataFound = [];\n\n            if (res && res.data && res.data.length > 0) {\n              var pdfPath = path.resolve('./pdf.png');\n              var wordPath = __dirname + 'word.jpg';\n              res.data.forEach(function (obj, index) {\n                resultDataFound.push({\n                  id: obj.id,\n                  Name: obj.url ? obj.url.substring(0, obj.url.lastIndexOf(\".\")) : 'NA',\n                  Hobbies: obj.keydata && obj.keydata.length > 5 && false ? obj.keydata[0] + \", \" + obj.keydata[1] + \", \" + obj.keydata[2] + \", \" + obj.keydata[3] + \", \" + obj.keydata[4] + \", \" + obj.keydata[5] + \", \" : obj.keydata.join(', '),\n                  URL: obj.url,\n                  imgSrc: obj.url ? obj.url.substring(obj.url.lastIndexOf(\".\") + 1, obj.url.length) == 'pdf' ? pdfPath : wordPath : '',\n                  keydata: JSON.stringify(obj.keydata)\n                });\n              });\n            }\n\n            _this3.setState({\n              resultIPKitData: resultDataFound,\n              srNo: srNo\n            });\n          })[\"catch\"](function (err) {\n            console.log(\"AXIOS ERROR: \", err);\n          });\n        });\n      }\n    }\n  }, {\n    key: \"onInputChange\",\n    value: function onInputChange(val) {\n      this.setState({\n        myInputData: val,\n        youLanguage: ''\n      });\n    }\n  }, {\n    key: \"DownloadClick\",\n    value: function DownloadClick(e, obj) {\n      var urlPath = obj.URL;\n      axios.get('https://campuscognitiveservicedevapp.azurewebsites.net/download', {\n        params: {\n          file: urlPath\n        },\n        responseType: \"blob\"\n      }).then(function (res) {\n        var url = window.URL.createObjectURL(new Blob([res.data], {\n          type: \"application/pdf\"\n        }));\n        var link = document.createElement('a');\n        link.href = url;\n        link.setAttribute('download', urlPath);\n        document.body.appendChild(link);\n        link.click(); // //Build a URL from the file\n        // const fileURL = URL.createObjectURL(file);\n        // //Open the URL on new Window\n        // window.open(fileURL);\n      })[\"catch\"](function (err) {\n        console.log(\"AXIOS ERROR: \", err);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this4 = this;\n\n      var result = null;\n\n      if (this.state.showIPKitPanel) {\n        if (this.state.resultIPKitData && this.state.resultIPKitData.length > 0) {\n          var resultRow = this.state.resultIPKitData.map(function (obj, index) {\n            return _react[\"default\"].createElement(\"tr\", null, _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, index + 1), _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, obj.Name), _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, _react[\"default\"].createElement(_inputText[\"default\"], {\n              keydata: JSON.parse(obj.keydata)\n            })), _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, _react[\"default\"].createElement(\"a\", {\n              href: \"#\",\n              onClick: function onClick(e) {\n                return _this4.DownloadClick(e, obj);\n              }\n            }, _react[\"default\"].createElement(\"img\", {\n              src: obj.imgSrc,\n              style: {\n                width: \"18px\",\n                height: \"19px\"\n              }\n            }))));\n          });\n          result = _react[\"default\"].createElement(\"table\", null, _react[\"default\"].createElement(\"tr\", null, _react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"50px\"\n            }\n          }, \"Sr No\"), _react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"200px\"\n            }\n          }, \"Document Name\"), _react[\"default\"].createElement(\"th\", null, \"Keys\"), _react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"180px\"\n            }\n          }, \"IP Kit\")), resultRow);\n        }\n      } else if (this.state.resultData && this.state.resultData.length > 0) {\n        var _resultRow = this.state.resultData.map(function (obj, index) {\n          return _react[\"default\"].createElement(\"tr\", null, _react[\"default\"].createElement(\"td\", {\n            style: {\n              verticalAlign: \"top\"\n            }\n          }, index + 1), _react[\"default\"].createElement(\"td\", {\n            style: {\n              verticalAlign: \"top\"\n            }\n          }, obj.Name), _react[\"default\"].createElement(\"td\", {\n            style: {\n              verticalAlign: \"top\"\n            }\n          }, obj.Hobbies), _react[\"default\"].createElement(\"td\", {\n            style: {\n              verticalAlign: \"top\"\n            }\n          }, _react[\"default\"].createElement(\"a\", {\n            href: \"#\",\n            onClick: function onClick(e) {\n              return _this4.DownloadClick(e, obj);\n            }\n          }, _react[\"default\"].createElement(\"img\", {\n            src: obj.imgSrc,\n            style: {\n              width: \"18px\",\n              height: \"19px\"\n            }\n          }))), _react[\"default\"].createElement(\"td\", {\n            style: {\n              verticalAlign: \"top\"\n            }\n          }, _react[\"default\"].createElement(\"a\", {\n            href: \"#\",\n            onClick: function onClick(e) {\n              _this4.onRecommendedIPKitClick(obj.keydata, index + 1, e);\n            }\n          }, 'Click here')));\n        });\n\n        result = _react[\"default\"].createElement(\"table\", null, _react[\"default\"].createElement(\"tr\", null, _react[\"default\"].createElement(\"th\", {\n          style: {\n            width: \"50px\"\n          }\n        }, \"Sr No\"), _react[\"default\"].createElement(\"th\", {\n          style: {\n            width: \"200px\"\n          }\n        }, \"Document Name\"), _react[\"default\"].createElement(\"th\", null, \"Keys\"), _react[\"default\"].createElement(\"th\", {\n          style: {\n            width: \"50px\"\n          }\n        }, \"SOW\"), _react[\"default\"].createElement(\"th\", {\n          style: {\n            width: \"180px\"\n          }\n        }, \"Recommended IPKit\")), _resultRow);\n      }\n\n      var backImg = __dirname + 'back.png';\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, this.state.isLogin ? _react[\"default\"].createElement(_react[\"default\"].Fragment, null, this.state.showIPKitPanel ? _react[\"default\"].createElement(\"div\", null, _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"div\", {\n        style: {\n          textAlign: 'center'\n        }\n      }, _react[\"default\"].createElement(\"h1\", null, _react[\"default\"].createElement(\"img\", {\n        src: backImg,\n        alt: \"Go Back\",\n        title: \"Go Back\",\n        style: {\n          width: \"30px\",\n          height: \"30px\"\n        },\n        onClick: function onClick(e) {\n          _this4.goToSOWClick(e);\n        }\n      }), \"\\xA0\\xA0\\xA0Recommended IP Kit\", result == null ? _react[\"default\"].createElement(\"div\", null, _react[\"default\"].createElement(\"div\", null, \"Loading...\")) : null)), _react[\"default\"].createElement(\"div\", {\n        style: {\n          padding: \"15px\"\n        }\n      }, result))) : _react[\"default\"].createElement(\"div\", null, _react[\"default\"].createElement(\"div\", {\n        style: {\n          textAlign: 'center'\n        }\n      }, _react[\"default\"].createElement(\"h1\", null, \"SOW Document\")), \"\\xA0\\xA0 \", _react[\"default\"].createElement(\"input\", {\n        type: \"text\",\n        value: this.state.myInputData,\n        onChange: function onChange(e) {\n          return _this4.onInputChange(e.target.value);\n        }\n      }), \"\\xA0\\xA0\", _react[\"default\"].createElement(\"input\", {\n        type: \"button\",\n        value: \"Search\",\n        onClick: function onClick(e) {\n          return _this4.onDataChange1(e.target.val);\n        }\n      }), _react[\"default\"].createElement(\"input\", {\n        type: \"button\",\n        value: \"Refresh\",\n        onClick: function onClick(e) {\n          return _this4.onDataChange(e.target.val);\n        }\n      }), _react[\"default\"].createElement(\"br\", null), \"\\xA0\\xA0\", this.state.youLanguage, this.state.showFeedBackPanel ? _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"div\", {\n        style: {\n          padding: \"15px\"\n        }\n      }, result)) : null)) : _react[\"default\"].createElement(_react[\"default\"].Fragment, null));\n    }\n  }]);\n\n  return App;\n}(_react[\"default\"].Component);\n\nvar _default = App;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./app1.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _app = _interopRequireDefault(__webpack_require__(/*! ./app1.js */ \"./app1.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n(0, _reactDom.render)(_react[\"default\"].createElement(_app[\"default\"], null), document.getElementById('container'));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./inputText.js":
/*!**********************!*\
  !*** ./inputText.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\n__webpack_require__(/*! ./App.css */ \"./App.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar InputText =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(InputText, _React$Component);\n\n  function InputText(props) {\n    var _this;\n\n    _classCallCheck(this, InputText);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputText).call(this, props));\n    _this.state = {\n      KeyData: _this.props.keydata || '',\n      ShowMore: false,\n      Text: _this.getText(_this.props.keydata || '', true)\n    };\n    return _this;\n  }\n\n  _createClass(InputText, [{\n    key: \"getText\",\n    value: function getText(keyData, showMore) {\n      var keyDataStr = keyData && keyData.length > 5 && showMore ? keyData[0] + \", \" + keyData[1] + \", \" + keyData[2] + \", \" + keyData[3] + \", \" + keyData[4] + \", \" + keyData[5] : keyData.join(', ');\n      return keyDataStr;\n    }\n  }, {\n    key: \"onIconExpClick\",\n    value: function onIconExpClick(e) {\n      var text = this.getText(this.state.KeyData, this.state.ShowMore);\n      this.setState({\n        ShowMore: !this.state.ShowMore,\n        Text: text\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      console.log(' this.state.ShowMore', this.state.ShowMore);\n      var showMoreCnt = this.state.ShowMore ? _react[\"default\"].createElement(\"a\", {\n        href: \"#\",\n        onClick: function onClick(e) {\n          return _this2.onIconExpClick(e);\n        },\n        style: {\n          width: '100px',\n          color: 'red'\n        }\n      }, \" \", \"...Show less keys\") : _react[\"default\"].createElement(\"a\", {\n        href: \"#\",\n        onClick: function onClick(e) {\n          return _this2.onIconExpClick(e);\n        },\n        style: {\n          width: '100px',\n          color: 'red'\n        }\n      }, \" \", \"...Show more keys\");\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, this.state.Text, showMoreCnt);\n    }\n  }]);\n\n  return InputText;\n}(_react[\"default\"].Component);\n\nvar _default = InputText;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./inputText.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./App.css":
/*!*******************************************!*\
  !*** ./node_modules/css-loader!./App.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".App {\\r\\n    text-align: center;\\r\\n  }\\r\\n  \\r\\n  .App-logo {\\r\\n    height: 40vmin;\\r\\n  }\\r\\n  \\r\\n  .App-header {\\r\\n    background-color: #282c34;\\r\\n    min-height: 100vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    font-size: calc(10px + 2vmin);\\r\\n    color: white;\\r\\n  }\\r\\n  \\r\\n  .App-link {\\r\\n    color: #09d3ac;\\r\\n  }\\r\\n  \\r\\n  \\r\\n  ol li{\\r\\n    list-style:none!important;\\r\\n    }\\r\\n  \\r\\n  \\r\\n    table {\\r\\n      border-collapse: collapse;\\r\\n      width: 100%;\\r\\n    }\\r\\n    \\r\\n    th, td {\\r\\n      text-align: left;\\r\\n      padding: 8px;\\r\\n    }\\r\\n    \\r\\n    tr:nth-child(even){background-color: #f2f2f2}\\r\\n    \\r\\n    th {\\r\\n      background-color: #4CAF50;\\r\\n      color: white;\\r\\n    }\\r\\n  \\r\\n    \\r\\n  a:link {\\r\\n    text-decoration: none;\\r\\n  }\\r\\n  \\r\\n  a:visited {\\r\\n    text-decoration: none;\\r\\n  }\\r\\n  \\r\\n  a:hover {\\r\\n    text-decoration: underline;\\r\\n  }\\r\\n  \\r\\n  a:active {\\r\\n    text-decoration: underline;\\r\\n  }\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./App.css?./node_modules/css-loader");

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