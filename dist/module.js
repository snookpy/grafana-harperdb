define(["@grafana/data","@grafana/ui","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ConfigEditor.tsx":
/*!**************************!*\
  !*** ./ConfigEditor.tsx ***!
  \**************************/
/*! exports provided: ConfigEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigEditor", function() { return ConfigEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Libraries


var ConfigEditor = /** @class */ (function (_super) {
    __extends(ConfigEditor, _super);
    function ConfigEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            defaultUrl: "http://localhost:9920"
        };
        return _this;
    }
    ConfigEditor.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["DataSourceHttpSettings"], { defaultUrl: this.state.defaultUrl, onChange: this.props.onOptionsChange, dataSourceConfig: this.props.options, showAccessOptions: true })));
    };
    return ConfigEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));



/***/ }),

/***/ "./QueryEditor.tsx":
/*!*************************!*\
  !*** ./QueryEditor.tsx ***!
  \*************************/
/*! exports provided: TemplateQueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateQueryEditor", function() { return TemplateQueryEditor; });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FORMAT_OPTIONS = [
    { label: 'Time series', value: 'time_series' }
];
;
var TemplateQueryEditor = /** @class */ (function (_super) {
    __extends(TemplateQueryEditor, _super);
    function TemplateQueryEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.onRunQuery = function () {
            var query = _this.query;
            _this.props.onChange(query);
            _this.props.onRunQuery();
        };
        _this.onFormatChange = function (option) {
            _this.query.format = option.value;
            _this.setState({ formatOption: option }, _this.onRunQuery);
        };
        _this.onQueryChange = function (value) {
            _this.query.metric = value;
        };
        var query = props.query;
        _this.query = query;
        _this.state = {
            formatOption: FORMAT_OPTIONS.find(function (option) { return option.value === _this.query.format; }) || FORMAT_OPTIONS[0],
        };
        return _this;
    }
    TemplateQueryEditor.prototype.render = function () {
        var formatOption = this.state.formatOption;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "gf-form" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "gf-form-label" }, "Format"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["Select"], { allowCustomValue: true, isSearchable: false, options: FORMAT_OPTIONS, onChange: this.onFormatChange, value: formatOption }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["QueryField"], { query: "SELECT metric time", portalOrigin: "eiei", onChange: this.onQueryChange, onRunQuery: this.onRunQuery }))));
    };
    return TemplateQueryEditor;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "./datasource.ts":
/*!***********************!*\
  !*** ./datasource.ts ***!
  \***********************/
/*! exports provided: TemplateDatasource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateDatasource", function() { return TemplateDatasource; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var TemplateDatasource = /** @class */ (function (_super) {
    __extends(TemplateDatasource, _super);
    /** @ngInject */
    function TemplateDatasource(instanceSettings, backendSrv) {
        var _this = _super.call(this, instanceSettings) || this;
        _this.backendSrv = backendSrv;
        _this.type = instanceSettings.type;
        _this.url = instanceSettings.url;
        _this.backendSrv = backendSrv;
        _this.name = instanceSettings.name;
        _this.withCredentials = instanceSettings.withCredentials;
        _this.headers = { 'Content-Type': 'application/json' };
        if (typeof instanceSettings.basicAuth === 'string' && instanceSettings.basicAuth.length > 0) {
            _this.headers['Authorization'] = instanceSettings.basicAuth;
        }
        return _this;
    }
    TemplateDatasource.prototype.convertToDatapoints = function (datas) {
        return datas.reduce(function (arr, d) {
            return arr.concat([[d.metric, d.time]]);
        }, []);
    };
    TemplateDatasource.prototype.callHarperdbSQL = function (target, sql) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.doRequest({
                url: _this.url,
                method: 'POST',
                data: {
                    operation: 'sql',
                    sql: sql
                },
            }).then(function (response) {
                response.data = { target: target, datapoints: _this.convertToDatapoints(response.data) };
                res(response);
            })
                .catch(function (err) {
                console.log("error ", err);
                res(__assign({}, err, { message: err.data.message, error: err.data.error }));
            });
        });
    };
    TemplateDatasource.prototype.buildQueryPattern = function (targets) {
        return __awaiter(this, void 0, void 0, function () {
            var promiseArr, results, someItemError, responseSentBack;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promiseArr = targets.map(function (t) { return _this.callHarperdbSQL(t.refId, t.metric); });
                        return [4 /*yield*/, Promise.all(promiseArr)];
                    case 1:
                        results = _a.sent();
                        someItemError = results.find(function (r) { return r.status !== 200; });
                        if (someItemError) {
                            responseSentBack = someItemError;
                        }
                        else {
                            responseSentBack = results[0];
                        }
                        /// format grafana's responses
                        responseSentBack.data = results.filter(function (f) { return f.status === 200; }).reduce(function (arr, r) {
                            return arr.concat([r.data]);
                        }, []);
                        return [2 /*return*/, responseSentBack];
                }
            });
        });
    };
    TemplateDatasource.prototype.query = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var targets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        targets = options.targets.filter(function (t) { return !t.hide; });
                        return [4 /*yield*/, this.buildQueryPattern(options.targets)];
                    case 1:
                        _a.sent();
                        if (targets.length <= 0) {
                            return [2 /*return*/, { data: [] }];
                        }
                        return [4 /*yield*/, this.buildQueryPattern(options.targets)];
                    case 2: 
                    // return {
                    //   data: targets.map(t => ({
                    //     target: t.refId,
                    //     datapoints: [
                    //       [3.14, options.range.from.valueOf()],
                    //       [42, options.range.to.valueOf()]
                    //     ]
                    //   }))
                    // };
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TemplateDatasource.prototype.testDatasource = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.doRequest({
                        url: this.url,
                        method: 'POST',
                        data: {
                            operation: 'describe_all',
                        },
                    }).then(function (response) {
                        if (response.status === 200) {
                            return {
                                status: 'success',
                                message: 'Data source is working',
                                title: 'Success',
                            };
                        }
                        return {
                            status: 'error',
                            message: 'Data source somthing when wrong',
                            title: 'Error',
                        };
                    })];
            });
        });
    };
    TemplateDatasource.prototype.metricFindQuery = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, [
                        {
                            text: 'Metric Name',
                            value: 'metric_name'
                        }
                    ]];
            });
        });
    };
    TemplateDatasource.prototype.doRequest = function (options) {
        options.withCredentials = this.withCredentials;
        options.headers = this.headers;
        return this.backendSrv.datasourceRequest(options);
    };
    return TemplateDatasource;
}(_grafana_data__WEBPACK_IMPORTED_MODULE_0__["DataSourceApi"]));



/***/ }),

/***/ "./module.tsx":
/*!********************!*\
  !*** ./module.tsx ***!
  \********************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datasource */ "./datasource.ts");
/* harmony import */ var _QueryEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryEditor */ "./QueryEditor.tsx");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfigEditor */ "./ConfigEditor.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_3__);




var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_3__["DataSourcePlugin"](_datasource__WEBPACK_IMPORTED_MODULE_0__["TemplateDatasource"])
    .setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__["ConfigEditor"])
    .setQueryEditor(_QueryEditor__WEBPACK_IMPORTED_MODULE_1__["TemplateQueryEditor"]);


/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map