(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/apuestas/apuestas.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/apuestas/apuestas.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark bg-dark mb-4\">\n    <a class=\"navbar-brand\" href=\"\">Chupos App</a>\n</nav>\n\n<div class=\"container\">\n    <main role=\"main\" class=\"container\">\n        <div class=\"jumbotron\">\n            <h1>Generar apuesta</h1>\n            <form [formGroup]=\"apuestaForm\" (ngSubmit)=\"onSubmit()\"\n                oninput='up2.setCustomValidity(up2.value != up.value ? \"Passwords do not match.\" : \"\")'>\n                <div class=\"form-row\">\n                    <div class=\"col-md-4 mb-3\">\n                        <label for=\"actor1\">Persona 1*</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"actor1\" id=\"actor1\"\n                            placeholder=\"Nombre persona 1\" required>\n                        <div class=\"valid-feedback\">\n                            Looks good!\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 mb-3\">\n                        <label for=\"ganaActor1\">Persona 1 gana: </label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"ganaActor1\" id=\"ganaActor1\"\n                            placeholder=\"Persona 1 gana\">\n                        <div class=\"valid-feedback\">\n                            Looks good!\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-row\">\n                    <div class=\"col-md-4 mb-3\">\n                        <label for=\"actor2\">Persona 2*</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"actor2\" id=\"actor2\"\n                            placeholder=\"Nombre persona 2\" required>\n                        <div class=\"valid-feedback\">\n                            Looks good!\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 mb-3\">\n                        <label for=\"ganaActor2\">Persona 2 gana: </label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"ganaActor2\" id=\"ganaActor2\"\n                            placeholder=\"Persona 2 gana\">\n                        <div class=\"valid-feedback\">\n                            Looks good!\n                        </div>\n                    </div>\n                </div>\n                <label for=\"descripción\">Descripción* </label>\n                <textarea class=\"form-control\" formControlName=\"descripcion\" id=\"descripción\"\n                    placeholder=\"Descripción de la apuesta\" required></textarea>\n                <br>\n                <div class=\"form-row\">\n                    <div class=\"col-md-4\">\n                        <label>Fecha final*</label>\n                        <input type=\"date\" name=\"bday\" max=\"3000-12-31\" min=\"1000-01-01\" class=\"form-control\"\n                            formControlName=\"fechaFin\">\n                    </div>\n                </div>\n                <br>\n                <div class=\"form-row\">\n                    <div class=\"col-md-4\">\n                        <label for=\"pass\">Contraseña para cerrar o borrar*</label>\n                        <input type=\"password\" class=\"form-control\" formControlName=\"pass\" id=\"pass\"\n                            placeholder=\"Password\" name=\"up\" required>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <label for=\"pass2\">Confirmar contraseña* </label>\n                        <input type=\"password\" class=\"form-control\" formControlName=\"pass2\" id=\"pass2\"\n                            placeholder=\"Password\" name=\"up2\" required>\n                    </div>\n                </div>\n                <br>\n\n                <div *ngIf=\"!esValido()\" class=\"alert alert-danger\">\n\n                    Tienes que rellenar los campos con el asterisco.\n\n                </div>\n                <div *ngIf=\"esValido() && !contrasenasIguales()\" class=\"alert alert-danger\">\n\n                    La pass no es la misma.\n\n                </div>\n\n                <button class=\"btn btn-primary\" [disabled]=\"!esValido() || !contrasenasIguales()\" type=\"submit\">Crear</button>\n            </form>\n\n\n        </div>\n    </main>\n\n\n    <h1>Apuestas abiertas</h1>\n    <div class=\"table-responsive\">\n        <table class=\"table \">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <th scope=\"col\">Participante 1</th>\n                    <th scope=\"col\">Participante 2</th>\n                    <th scope=\"col\">Descripción</th>\n                    <th scope=\"col\">Fecha fin</th>\n                    <th scope=\"col\">Cerrar</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let ap of apuestasAbiertas; let i=index\">\n                    <td>{{ap.actor1}}</td>\n                    <td>{{ap.actor2}}</td>\n                    <td>{{ap.descripcion}}</td>\n                    <td>{{ap.fechaFin | date:fullDate}}</td>\n                    <td>\n                        <div class=\"dropdown\">\n                            <button class=\"btn btn-danger dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                Cerrar\n                            </button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n\n                                <input type=\"password\" [(ngModel)]=\"ap.passCerrar\" placeholder=\"Password\">\n                                <div class=\"dropdown-divider\"></div>\n                                <input type=\"text\" placeholder=\"Ganador\" [(ngModel)]=\"ap.ganadaPor\">\n                                <div class=\"dropdown-divider\"></div>\n                                <button class=\"btn btn-danger\" type=\"button\" (click)=\"cerrar(i)\"\n                                    id=\"buttonCerrar\">Cerrar</button>\n\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n\n\n\n\n\n    <h1>Apuestas cerradas</h1>\n    <div class=\"table-responsive\">\n        <table class=\"table \">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <th scope=\"col\">Participante 1</th>\n                    <th scope=\"col\">Participante 2</th>\n                    <th scope=\"col\">Descripción</th>\n                    <th scope=\"col\">Ganador</th>\n                    <th scope=\"col\">Fecha fin</th>\n                    <th scope=\"col\">Pagado?</th>\n                    <th scope=\"col\">Contraseña para pagar</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let ap of apuestasCerradas; let u=index\">\n                    <td>{{ap.actor1}}</td>\n                    <td>{{ap.actor2}}</td>\n                    <td>{{ap.descripcion}}</td>\n                    <td>{{ap.ganadoPor}}</td>\n                    <td>{{ap.fechaFin | date:fullDate}}</td>\n                    <td><button [disabled]=\"ap.pagada\" (click)=\"pagar(u)\" class=\"btn btn-success\">Pagar</button></td>\n                    <td>\n                        <div *ngIf=\"!ap.pagada; else pagadito\">\n                            <input type=\"password\" [(ngModel)]=\"ap.passPagar\" class=\"form-control\" id=\"passPagar\"\n                                placeholder=\"Password\">\n                        </div>\n                        <ng-template #pagadito>\n                            Pagaditaaaa\n                        </ng-template>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'chupos-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_apuestas_apuestas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/apuestas/apuestas.component */ "./src/app/components/apuestas/apuestas.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










const routes = [
    { path: '', pathMatch: 'full', component: _components_apuestas_apuestas_component__WEBPACK_IMPORTED_MODULE_6__["ApuestasComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_apuestas_apuestas_component__WEBPACK_IMPORTED_MODULE_6__["ApuestasComponent"]
        ],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ],
        providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/apuestas/apuestas.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/apuestas/apuestas.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXB1ZXN0YXMvYXB1ZXN0YXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/apuestas/apuestas.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/apuestas/apuestas.component.ts ***!
  \***********************************************************/
/*! exports provided: ApuestasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApuestasComponent", function() { return ApuestasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");




let ApuestasComponent = class ApuestasComponent {
    constructor(fb, apiService) {
        this.fb = fb;
        this.apiService = apiService;
    }
    ngOnInit() {
        this.mainForm();
        this.apiService.getApuestasActivas().subscribe((res) => {
            this.apuestasAbiertas = res;
        }, (error) => {
            console.log(error);
        });
        this.apiService.getApuestasFinalizadas().subscribe((res) => {
            this.apuestasCerradas = res;
        }, (error) => {
            console.log(error);
        });
    }
    cerrar(i) {
        if (this.apuestasAbiertas[i].passCerrar === this.apuestasAbiertas[i].pass) {
            this.apuestasAbiertas[i].fin = true;
            this.apiService.updateApuesta(this.apuestasAbiertas[i]._id, this.apuestasAbiertas[i]).subscribe((res) => {
                this.apuestasAbiertas = res;
                this.ngOnInit();
            }, (error) => {
                console.log(error);
            });
        }
        else {
            alert("Contraseña mal.");
        }
    }
    pagar(i) {
        if (this.apuestasCerradas[i].passPagar === this.apuestasCerradas[i].pass) {
            this.apuestasCerradas[i].pagada = true;
            this.apiService.updateApuesta(this.apuestasCerradas[i]._id, this.apuestasCerradas[i]).subscribe((res) => {
                this.ngOnInit();
            }, (error) => {
                console.log(error);
            });
        }
    }
    mainForm() {
        this.apuestaForm = this.fb.group({
            actor1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ganaActor1: [''],
            actor2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ganaActor2: [''],
            descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fechaFin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pass2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    esValido() {
        return !this.apuestaForm.controls.actor1.invalid &&
            !this.apuestaForm.controls.actor2.invalid &&
            !this.apuestaForm.controls.descripcion.invalid &&
            !this.apuestaForm.controls.fechaFin.invalid &&
            !this.apuestaForm.controls.pass.invalid &&
            !this.apuestaForm.controls.pass2.invalid;
    }
    contrasenasIguales() {
        return this.apuestaForm.controls.pass.value === this.apuestaForm.controls.pass2.value;
    }
    onSubmit() {
        if (!this.apuestaForm.valid) {
            return false;
        }
        else if (this.apuestaForm.value.pass != this.apuestaForm.value.pass2) {
            alert("Contraseñas iguales!!!!");
        }
        else {
            this.apiService.createApuesta(this.apuestaForm.value).subscribe((res) => {
                this.ngOnInit();
            }, (error) => {
                console.log(error);
            });
        }
    }
};
ApuestasComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ApuestasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apuestas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./apuestas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/apuestas/apuestas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./apuestas.component.css */ "./src/app/components/apuestas/apuestas.component.css")).default]
    })
], ApuestasComponent);



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.baseUri = 'http://chupos-app.herokuapp.com/api';
        //baseUri:string = 'http://localhost:4000/api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Create
    createApuesta(data) {
        let url = `${this.baseUri}/create`;
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Get all Apuestas
    getApuestas() {
        return this.http.get(`${this.baseUri}`);
    }
    // Get all Apuestas activas
    getApuestasActivas() {
        return this.http.get(`${this.baseUri}/noFinalizadas`);
    }
    // Get all Apuestas finalizadas
    getApuestasFinalizadas() {
        return this.http.get(`${this.baseUri}/finalizadas`);
    }
    // Get Apuesta
    getApuesta(id) {
        let url = `${this.baseUri}/read/${id}`;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Update Apuesta
    updateApuesta(id, data) {
        let url = `${this.baseUri}/update/${id}`;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Delete Apuesta
    deleteApuesta(id) {
        let url = `${this.baseUri}/delete/${id}`;
        return this.http.delete(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Error handling 
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/usuario/pruebas/Chupos-App/chupos-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map