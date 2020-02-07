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
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\n__webpack_require__(/*! ./App.css */ \"./App.css\");\n\nvar _inputText = _interopRequireDefault(__webpack_require__(/*! ./inputText.js */ \"./inputText.js\"));\n\nvar _login = _interopRequireDefault(__webpack_require__(/*! ./login.js */ \"./login.js\"));\n\nvar _uploaddoc = _interopRequireDefault(__webpack_require__(/*! ./uploaddoc.js */ \"./uploaddoc.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/path-browserify/index.js\");\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"onChangeHandler\", function (event) {\n      _this.setState({\n        selectedFile: event.target.files[0],\n        loaded: 0\n      }, function () {\n        console.log('File : ', _this.state.selectedFile);\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onClickHandler\", function () {\n      if (_this.state.selectedFile == null) {\n        alert('pls select file to upload.');\n      } else {\n        var data = new FormData();\n        data.append('file', _this.state.selectedFile);\n        axios.post(\"http://localhost:5000/uploadipkit?filetype=\" + _this.state.selectedFile.name, data, {// uploadsow receive two    parameter endpoint url ,form data\n        }).then(function (res) {\n          // then print response status\n          console.log(res.statusText);\n        });\n      }\n    });\n\n    _this.state = {\n      showFeedBackPanel: false,\n      showIPKitPanel: false,\n      currFeedbackTitle: 'Test',\n      myInputData: '',\n      resultData: [],\n      resultIPKitData: [],\n      srNo: -1,\n      isLogin: false,\n      selectedFile: null,\n      isdocuploaded: false\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"isUploaded\",\n    value: function isUploaded(val) {\n      this.setState({\n        isdocuploaded: false,\n        showFeedBackPanel: false\n      });\n    }\n  }, {\n    key: \"onDataChange\",\n    value: function onDataChange(val) {\n      this.setState({\n        isdocuploaded: true\n      }); // this.setState({ youLanguage: \"Refreshing..\" }, () => {\n      //   axios.get('http://localhost:5000/refresh', \"just to test\")\n      //     .then((res) => {\n      //       console.log(\"RESPONSE RECEIVED: \", res);\n      //       this.setState({ youLanguage: \"Your Language : Refreshed..\" })\n      //     })\n      //     .catch((err) => {\n      //       console.log(\"AXIOS ERROR: \", err);\n      //     })\n      // });\n    }\n  }, {\n    key: \"onDataChange1\",\n    value: function onDataChange1(val) {\n      var _this2 = this;\n\n      // axios.get('https://campuscognitiveservicedevapp.azurewebsites.net/', {\n      //   params: {\n      //     hobbies: this.state.myInputData\n      //   }\n      // }\n      // ).then((res) => {\n      //    alert(res);\n      // });\n      // return;\n      this.setState({\n        youLanguage: \"Loading..\",\n        showFeedBackPanel: false,\n        srNo: -1\n      }, function () {\n        axios.get('https://campuscognitiveservicedevapp3.azurewebsites.net/SOWDocs', {\n          params: {\n            hobbies: _this2.state.myInputData\n          }\n        }).then(function (res) {\n          console.log('response', res);\n          var resultDataFound = [];\n\n          if (res && res.data && res.data.length > 0) {\n            var pdfPath = path.resolve('./pdf.png');\n            var wordPath = __dirname + 'word.jpg';\n            res.data.forEach(function (obj, index) {\n              console.log(resultDataFound.find(function (o) {\n                console.log('T : ', o.URL, '\\n', obj.url);\n                o.URL == obj.url;\n              }));\n              if (resultDataFound.length == 0 || resultDataFound.find(function (o) {\n                return o.URL == obj.url;\n              }) == undefined) resultDataFound.push({\n                id: obj.id,\n                Name: obj.url ? obj.url.substring(0, obj.url.lastIndexOf(\".\")) : 'NA',\n                Hobbies: obj.keydata && obj.keydata.length > 5 ? obj.keydata[0] + \", \" + obj.keydata[1] + \", \" + obj.keydata[2] + \", \" + obj.keydata[3] + \", \" + obj.keydata[4] + \", \" + obj.keydata[5] + \", \" : obj.keydata.join(', '),\n                URL: obj.url,\n                imgSrc: obj.url ? obj.url.substring(obj.url.lastIndexOf(\".\") + 1, obj.url.length) == 'pdf' ? pdfPath : wordPath : '',\n                keydata: JSON.stringify(obj.keydata)\n              });\n            });\n          }\n\n          _this2.setState({\n            resultData: resultDataFound,\n            youLanguage: \"\",\n            showFeedBackPanel: true\n          });\n        })[\"catch\"](function (err) {\n          console.log(\"AXIOS ERROR: \", err);\n        });\n      });\n    }\n  }, {\n    key: \"goToSOWClick\",\n    value: function goToSOWClick(e) {\n      this.setState({\n        showIPKitPanel: false\n      });\n    }\n  }, {\n    key: \"onRecommendedIPKitClick\",\n    value: function onRecommendedIPKitClick(val, srNo, e) {\n      var _this3 = this;\n\n      if (this.state.srNo == srNo) {\n        this.setState({\n          showIPKitPanel: true\n        });\n      } else {\n        this.setState({\n          showIPKitPanel: true,\n          resultIPKitData: [],\n          srNo: srNo\n        }, function () {\n          axios.get('https://campuscognitiveservicedevapp3.azurewebsites.net/IPKitDocs', {\n            params: {\n              hobbies: val\n            }\n          }).then(function (res) {\n            console.log('response', res);\n            var resultDataFound = [];\n\n            if (res && res.data && res.data.length > 0) {\n              var pdfPath = path.resolve('./pdf.png');\n              var wordPath = __dirname + 'word.jpg';\n              res.data.forEach(function (obj, index) {\n                resultDataFound.push({\n                  id: obj.id,\n                  Name: obj.url ? obj.url.substring(0, obj.url.lastIndexOf(\".\")) : 'NA',\n                  Hobbies: obj.keydata && obj.keydata.length > 5 && false ? obj.keydata[0] + \", \" + obj.keydata[1] + \", \" + obj.keydata[2] + \", \" + obj.keydata[3] + \", \" + obj.keydata[4] + \", \" + obj.keydata[5] + \", \" : obj.keydata.join(', '),\n                  URL: obj.url,\n                  imgSrc: obj.url ? obj.url.substring(obj.url.lastIndexOf(\".\") + 1, obj.url.length) == 'pdf' ? pdfPath : wordPath : '',\n                  keydata: JSON.stringify(obj.keydata)\n                });\n              });\n            }\n\n            _this3.setState({\n              resultIPKitData: resultDataFound,\n              srNo: srNo\n            });\n          })[\"catch\"](function (err) {\n            console.log(\"AXIOS ERROR: \", err);\n          });\n        });\n      }\n    }\n  }, {\n    key: \"onInputChange\",\n    value: function onInputChange(val) {\n      this.setState({\n        myInputData: val,\n        youLanguage: ''\n      });\n    }\n  }, {\n    key: \"DownloadClick\",\n    value: function DownloadClick(e, obj) {\n      var urlPath = obj.URL;\n      axios.get('https://campuscognitiveservicedevapp.azurewebsites.net/download', {\n        params: {\n          file: urlPath\n        },\n        responseType: \"blob\"\n      }).then(function (res) {\n        var url = window.URL.createObjectURL(new Blob([res.data], {\n          type: \"application/pdf\"\n        }));\n        var link = document.createElement('a');\n        link.href = url;\n        link.setAttribute('download', urlPath);\n        document.body.appendChild(link);\n        link.click(); // //Build a URL from the file\n        // const fileURL = URL.createObjectURL(file);\n        // //Open the URL on new Window\n        // window.open(fileURL);\n      })[\"catch\"](function (err) {\n        console.log(\"AXIOS ERROR: \", err);\n      });\n    }\n  }, {\n    key: \"onLoginClick\",\n    value: function onLoginClick(isLogin) {\n      // alert(isLogin);\n      this.setState({\n        isLogin: isLogin\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this4 = this;\n\n      var result = null;\n\n      if (this.state.showIPKitPanel) {\n        if (this.state.resultIPKitData && this.state.resultIPKitData.length > 0) {\n          var resultRow = this.state.resultIPKitData.map(function (obj, index) {\n            return _react[\"default\"].createElement(\"tr\", null, _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, index + 1), _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, obj.Name), _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, _react[\"default\"].createElement(_inputText[\"default\"], {\n              keydata: JSON.parse(obj.keydata)\n            })), _react[\"default\"].createElement(\"td\", {\n              style: {\n                verticalAlign: \"top\"\n              }\n            }, _react[\"default\"].createElement(\"a\", {\n              href: \"#\",\n              onClick: function onClick(e) {\n                return _this4.DownloadClick(e, obj);\n              }\n            }, _react[\"default\"].createElement(\"img\", {\n              src: obj.imgSrc,\n              style: {\n                width: \"18px\",\n                height: \"19px\"\n              }\n            }))));\n          });\n          result = _react[\"default\"].createElement(\"table\", null, _react[\"default\"].createElement(\"tr\", null, _react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"50px\"\n            }\n          }, \"Sr No\"), _react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"200px\"\n            }\n          }, \"Document Name\"), _react[\"default\"].createElement(\"th\", null, \"Keys\"), _react[\"default\"].createElement(\"th\", {\n            style: {\n              width: \"180px\"\n            }\n          }, \"IP Kit\")), resultRow);\n        }\n      } else if (this.state.resultData && this.state.resultData.length > 0) {\n        var _resultRow = this.state.resultData.map(function (obj, index) {\n          return _react[\"default\"].createElement(\"tr\", null, _react[\"default\"].createElement(\"td\", {\n            style: {\n              verticalAlign: \"top\"\n            }\n          }, index + 1), _react[\"default\"].createElement(\"td\", {\n            style: {\n              verticalAlign: \"top\"\n            }\n          }, obj.Name), _react[\"default\"].createElement(\"td\", {\n            style: {\n              verticalAlign: \"top\"\n            }\n          }, obj.Hobbies), _react[\"default\"].createElement(\"td\", {\n            style: {\n              verticalAlign: \"top\"\n            }\n          }, _react[\"default\"].createElement(\"a\", {\n            href: \"#\",\n            onClick: function onClick(e) {\n              return _this4.DownloadClick(e, obj);\n            }\n          }, _react[\"default\"].createElement(\"img\", {\n            src: obj.imgSrc,\n            style: {\n              width: \"18px\",\n              height: \"19px\"\n            }\n          }))), _react[\"default\"].createElement(\"td\", {\n            style: {\n              verticalAlign: \"top\"\n            }\n          }, _react[\"default\"].createElement(\"a\", {\n            href: \"#\",\n            onClick: function onClick(e) {\n              _this4.onRecommendedIPKitClick(obj.keydata, index + 1, e);\n            }\n          }, 'Click here')));\n        });\n\n        result = _react[\"default\"].createElement(\"table\", null, _react[\"default\"].createElement(\"tr\", null, _react[\"default\"].createElement(\"th\", {\n          style: {\n            width: \"50px\"\n          }\n        }, \"Sr No\"), _react[\"default\"].createElement(\"th\", {\n          style: {\n            width: \"200px\"\n          }\n        }, \"Document Name\"), _react[\"default\"].createElement(\"th\", null, \"Keys\"), _react[\"default\"].createElement(\"th\", {\n          style: {\n            width: \"50px\"\n          }\n        }, \"SOW\"), _react[\"default\"].createElement(\"th\", {\n          style: {\n            width: \"180px\"\n          }\n        }, \"Recommended IPKit\")), _resultRow);\n      }\n\n      var backImg = __dirname + 'back.png';\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, this.state.isLogin ? _react[\"default\"].createElement(_react[\"default\"].Fragment, null, !this.state.isdocuploaded ? _react[\"default\"].createElement(_react[\"default\"].Fragment, null, this.state.showIPKitPanel ? _react[\"default\"].createElement(\"div\", null, _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"div\", {\n        style: {\n          textAlign: 'center'\n        }\n      }, _react[\"default\"].createElement(\"h1\", null, _react[\"default\"].createElement(\"img\", {\n        src: backImg,\n        alt: \"Go Back\",\n        title: \"Go Back\",\n        style: {\n          width: \"30px\",\n          height: \"30px\"\n        },\n        onClick: function onClick(e) {\n          _this4.goToSOWClick(e);\n        }\n      }), _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: 'inline',\n          paddingLeft: \"20px\"\n        }\n      }, \"Recommended IP Kit\"), result == null ? _react[\"default\"].createElement(\"div\", null, _react[\"default\"].createElement(\"div\", null, \"Loading...\")) : null)), _react[\"default\"].createElement(\"div\", {\n        style: {\n          padding: \"15px\"\n        }\n      }, result))) : _react[\"default\"].createElement(\"div\", null, _react[\"default\"].createElement(\"div\", {\n        style: {\n          textAlign: 'center'\n        }\n      }, _react[\"default\"].createElement(\"h1\", null, \"SOW Document\")), _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\",\n          paddingLeft: \"10px\"\n        }\n      }, _react[\"default\"].createElement(\"input\", {\n        type: \"text\",\n        value: this.state.myInputData,\n        onChange: function onChange(e) {\n          return _this4.onInputChange(e.target.value);\n        }\n      })), _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\",\n          paddingLeft: \"10px\"\n        }\n      }, _react[\"default\"].createElement(\"input\", {\n        type: \"button\",\n        value: \"Search\",\n        onClick: function onClick(e) {\n          return _this4.onDataChange1(e.target.val);\n        }\n      })), _react[\"default\"].createElement(\"input\", {\n        type: \"button\",\n        value: \"Upload Docs\",\n        onClick: function onClick(e) {\n          return _this4.onDataChange(e.target.val);\n        }\n      }), _react[\"default\"].createElement(\"br\", null), _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"inline\",\n          paddingLeft: \"10px\"\n        }\n      }, this.state.youLanguage), this.state.showFeedBackPanel ? _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"div\", {\n        style: {\n          padding: \"15px\"\n        }\n      }, result)) : null)) : _react[\"default\"].createElement(_uploaddoc[\"default\"], {\n        isUploaded: function isUploaded(uploadStatus) {\n          return _this4.isUploaded(uploadStatus);\n        }\n      })) : _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(_login[\"default\"], {\n        onLogin: function onLogin(isLogin) {\n          return _this4.onLoginClick(isLogin);\n        }\n      })));\n    }\n  }]);\n\n  return App;\n}(_react[\"default\"].Component);\n\nvar _default = App;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./app1.js?");

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

/***/ "./login.js":
/*!******************!*\
  !*** ./login.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Login =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Login, _React$Component);\n\n  function Login(props) {\n    var _this;\n\n    _classCallCheck(this, Login);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));\n    _this.state = {\n      userName: '',\n      passWord: '',\n      isInvalid: false\n    };\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: \"onLoginClick\",\n    value: function onLoginClick(e) {\n      var _this2 = this;\n\n      e.preventDefault();\n\n      if (this.state.userName == 'admin' && this.state.passWord == 'admin') {\n        console.log('true');\n        this.setState({\n          isInvalid: false\n        }, function () {\n          _this2.props.onLogin(!_this2.state.isInvalid);\n        });\n      } else {\n        console.log('false');\n        this.setState({\n          isInvalid: true\n        });\n      }\n    }\n  }, {\n    key: \"userNameChange\",\n    value: function userNameChange(value) {\n      this.setState({\n        userName: value,\n        isInvalid: false\n      });\n    }\n  }, {\n    key: \"passwordChange\",\n    value: function passwordChange(value) {\n      this.setState({\n        passWord: value,\n        isInvalid: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      console.log('render');\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"div\", {\n        className: \"login-page\"\n      }, _react[\"default\"].createElement(\"div\", {\n        className: \"form\"\n      }, _react[\"default\"].createElement(\"div\", {\n        className: \"login-form\"\n      }, _react[\"default\"].createElement(\"input\", {\n        type: \"text\",\n        placeholder: \"username\",\n        value: this.state.userName,\n        onChange: function onChange(e) {\n          return _this3.userNameChange(e.target.value);\n        }\n      }), _react[\"default\"].createElement(\"input\", {\n        type: \"password\",\n        placeholder: \"password\",\n        value: this.state.passWord,\n        onChange: function onChange(e) {\n          return _this3.passwordChange(e.target.value);\n        }\n      }), _react[\"default\"].createElement(\"button\", {\n        onClick: function onClick(e) {\n          return _this3.onLoginClick(e);\n        }\n      }, \"login\"), this.state.isInvalid ? _react[\"default\"].createElement(\"p\", {\n        className: \"message\",\n        style: {\n          color: \"red\"\n        }\n      }, \"Invalid credential...\") : null))));\n    }\n  }]);\n\n  return Login;\n}(_react[\"default\"].Component);\n\nvar _default = Login;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./login.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./App.css":
/*!*******************************************!*\
  !*** ./node_modules/css-loader!./App.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".App {\\r\\n    text-align: center;\\r\\n  }\\r\\n  \\r\\n  .App-logo {\\r\\n    height: 40vmin;\\r\\n  }\\r\\n  \\r\\n  .App-header {\\r\\n    background-color: #282c34;\\r\\n    min-height: 100vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    font-size: calc(10px + 2vmin);\\r\\n    color: white;\\r\\n  }\\r\\n  \\r\\n  .App-link {\\r\\n    color: #09d3ac;\\r\\n  }\\r\\n  \\r\\n  \\r\\n  ol li{\\r\\n    list-style:none!important;\\r\\n    }\\r\\n  \\r\\n  \\r\\n    table {\\r\\n      border-collapse: collapse;\\r\\n      width: 100%;\\r\\n    }\\r\\n    \\r\\n    th, td {\\r\\n      text-align: left;\\r\\n      padding: 8px;\\r\\n    }\\r\\n    \\r\\n    tr:nth-child(even){background-color: #f2f2f2}\\r\\n    \\r\\n    th {\\r\\n      background-color: #4CAF50;\\r\\n      color: white;\\r\\n    }\\r\\n  \\r\\n    \\r\\n  a:link {\\r\\n    text-decoration: none;\\r\\n  }\\r\\n  \\r\\n  a:visited {\\r\\n    text-decoration: none;\\r\\n  }\\r\\n  \\r\\n  a:hover {\\r\\n    text-decoration: underline;\\r\\n  }\\r\\n  \\r\\n  a:active {\\r\\n    text-decoration: underline;\\r\\n  }\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./App.css?./node_modules/css-loader");

/***/ }),

/***/ "./uploaddoc.js":
/*!**********************!*\
  !*** ./uploaddoc.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/path-browserify/index.js\");\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar UploadDoc =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(UploadDoc, _React$Component);\n\n  function UploadDoc(props) {\n    var _this;\n\n    _classCallCheck(this, UploadDoc);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(UploadDoc).call(this, props));\n    _this.state = {\n      document: 'sow',\n      docName: '',\n      isuploaded: false,\n      selectedFile: null,\n      loaded: 1\n    };\n    return _this;\n  }\n\n  _createClass(UploadDoc, [{\n    key: \"onDocChange\",\n    value: function onDocChange(event, value) {\n      this.setState({\n        document: event.target.value\n      });\n    }\n  }, {\n    key: \"onChangeHandler\",\n    value: function onChangeHandler(e) {\n      e.preventDefault();\n      this.setState({\n        selectedFile: event.target.files[0],\n        loaded: 0,\n        uploadstats: false\n      });\n    }\n  }, {\n    key: \"onClickHandler\",\n    value: function onClickHandler(e) {\n      var _this2 = this;\n\n      e.preventDefault();\n\n      if (this.state.selectedFile == null) {\n        alert('pls select file to upload.');\n      } else {\n        this.setState({\n          uploadstats: true\n        }, function () {\n          var data = new FormData();\n          data.append('file', _this2.state.selectedFile);\n\n          try {\n            if (_this2.state.document == 'sow') {\n              axios.post(\"https://campuscognitiveservicedevapp3.azurewebsites.net/uploadsow?filetype=\" + _this2.state.selectedFile.name, data, {}).then(function (res) {\n                // then print response status\n                alert('uploaded successfully...');\n\n                _this2.props.isUploaded(true);\n              });\n            } else {\n              axios.post(\"https://campuscognitiveservicedevapp3.azurewebsites.net/uploadipkit?filetype=\" + _this2.state.selectedFile.name, data, {}).then(function (res) {\n                // then print response status\n                alert('uploaded successfully...');\n\n                _this2.props.isUploaded(true);\n              });\n            }\n          } catch (ex) {\n            console.log('Error', ex);\n            alert('error on uploading document');\n          }\n        });\n      }\n    }\n  }, {\n    key: \"goToSOWClick\",\n    value: function goToSOWClick(e) {\n      this.props.isUploaded(true);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var backImg = __dirname + 'back.png';\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"div\", {\n        className: \"login-page\"\n      }, _react[\"default\"].createElement(\"div\", {\n        className: \"form\"\n      }, _react[\"default\"].createElement(\"div\", {\n        style: {\n          paddingTop: \"3px\"\n        }\n      }, _react[\"default\"].createElement(\"img\", {\n        src: \"/back.png\",\n        alt: \"Go Back\",\n        title: \"Go Back\",\n        style: {\n          width: \"30px\",\n          height: \"30px\"\n        },\n        onClick: function onClick(e) {\n          return _this3.goToSOWClick(e);\n        }\n      }), _react[\"default\"].createElement(\"div\", {\n        style: {\n          fontSize: \"20px\",\n          display: \"inline\",\n          paddingLeft: \"20px\",\n          fontWeight: \"bold\"\n        }\n      }, \"Document to upload\")), _react[\"default\"].createElement(\"div\", {\n        className: \"login-form\"\n      }, _react[\"default\"].createElement(\"div\", {\n        style: {\n          padding: \"15px\",\n          paddingLeft: \"0px\"\n        }\n      }, _react[\"default\"].createElement(\"select\", {\n        style: {\n          width: \"270px\"\n        },\n        value: this.state.document,\n        onChange: function onChange(e) {\n          return _this3.onDocChange(e, 'sow');\n        }\n      }, _react[\"default\"].createElement(\"option\", {\n        value: \"sow\"\n      }, \"SOW\"), _react[\"default\"].createElement(\"option\", {\n        value: \"ipkit\"\n      }, \"IP Kit\"))), _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"none\"\n        }\n      }, \"SOW : \", _react[\"default\"].createElement(\"input\", {\n        type: \"radio\",\n        name: \"doc\",\n        value: \"sow\",\n        onClick: function onClick(e) {\n          return _this3.onDocChange(e, 'sow');\n        },\n        checked: this.state.document == 'sow'\n      })), _react[\"default\"].createElement(\"div\", {\n        style: {\n          display: \"none\"\n        }\n      }, \"IP Kit :\", _react[\"default\"].createElement(\"input\", {\n        type: \"radio\",\n        name: \"doc\",\n        value: \"ipkit\",\n        onChange: function onChange(e) {\n          return _this3.onDocChange(e, 'ipkit');\n        },\n        checked: this.state.document == 'ipkit'\n      })), _react[\"default\"].createElement(\"input\", {\n        type: \"file\",\n        name: \"file\",\n        onChange: function onChange(e) {\n          return _this3.onChangeHandler(e);\n        }\n      }), this.state.uploadstats ? _react[\"default\"].createElement(\"p\", {\n        className: \"message\",\n        style: {\n          color: \"red\"\n        }\n      }, \"Uploading please wait...\") : null, _react[\"default\"].createElement(\"button\", {\n        onClick: function onClick(e) {\n          return _this3.onClickHandler(e);\n        }\n      }, \"Upload\")))));\n    }\n  }]);\n\n  return UploadDoc;\n}(_react[\"default\"].Component);\n\nvar _default = UploadDoc;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./uploaddoc.js?");

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