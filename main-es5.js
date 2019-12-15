var __generator = (this && this.__generator) || function (thisArg, body) {
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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-horizontal-stepper>\n  <mat-step>\n    <ng-template matStepLabel>Setup conditions</ng-template>\n    <app-conditions class=\"fillPage\"></app-conditions>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Import emails</ng-template>\n    <app-email class=\"fillPage\"></app-email>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Parse data</ng-template>\n    <app-export class=\"fillPage\"></app-export>\n  </mat-step>\n  \n</mat-horizontal-stepper>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/conditions/conditions.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conditions/conditions.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"startupPage\" class=\"gridContainer\">\n    <div class=\"leftSide\" >\n        <h2>Load From File</h2>\n        <button mat-raised-button class=\"alignCenter\" color=\"warn\" (click)=\"fileInput.click()\">\n            <span>Load File</span>\n            <input #fileInput type=\"file\" (change)=\"startup($event.target.files)\" accept=\".json\" style=\"display:none;\" />\n        </button>\n    </div>\n    <div class=\"rightSide\">\n        <h2>Start From Scratch</h2>\n        <button class=\"alignCenter\" mat-raised-button (click)=\"startup()\" color=\"primary\">Start</button>\n    </div>\n</section>\n\n<section *ngIf=\"!startupPage\" class=\"gridContainer\">\n    <div class=\"leftSide listContainer\">\n        <cdk-virtual-scroll-viewport itemSize=\"10\" class=\"scrollContainer\">\n            <mat-card *cdkVirtualFor=\"let condition of conditions\" (click)=\"selectedCondition = condition\" [style.background] = \"(condition == selectedCondition)? '#6f6062' : '' \">\n                <mat-card-header>\n                    <mat-card-title>{{condition.name}}</mat-card-title>\n                    <mat-card-subtitle>{{condition.expression}}</mat-card-subtitle>\n                </mat-card-header>\n                <mat-card-actions>\n                    <button mat-button color=\"warn\" (click)=\"deleteSelectedCondition(condition)\">X</button>\n                </mat-card-actions>\n            </mat-card>\n        </cdk-virtual-scroll-viewport>\n        <div class=\"listFooter\">\n            <button mat-raised-button color=\"warn\" (click)=\"startupPage = true; selectedCondition = null;\">Import</button>\n            <button mat-raised-button color=\"primary\" (click)=\"exportConditions()\">Export</button>\n            <button mat-raised-button color=\"accent\" (click)=\"createNewCondition()\">+ New</button>\n        </div>\n    </div>\n    <div class=\"rightSide details\" *ngIf = \"selectedCondition != null\">\n        <mat-form-field class=\"fillLine\">\n            <input matInput placeholder=\"Name\" [(ngModel)]=\"selectedCondition.name\">\n        </mat-form-field>\n        <mat-checkbox class=\"fillLine\" [(ngModel)]=\"selectedCondition.isManual\">Manual Property</mat-checkbox>\n        <div *ngIf=\"selectedCondition.isManual\">\n            <mat-form-field class=\"fillLine\">\n                <input matInput placeholder=\"Default Value\" \n                    [(ngModel)]=\"selectedCondition.expression\" \n                    (blur)=\"updateCurrentConditionExpression()\"\n                    (keyup.enter)=\"updateCurrentConditionExpression()\">\n            </mat-form-field>\n        </div>\n        <div *ngIf=\"!selectedCondition.isManual\">\n            <mat-form-field class=\"fillLine\">\n                <input matInput placeholder=\"Expression\" \n                    [(ngModel)]=\"selectedCondition.expression\" \n                    (blur)=\"updateCurrentConditionExpression()\"\n                    (keyup.enter)=\"updateCurrentConditionExpression()\">\n            </mat-form-field>\n            <h4>Target data:</h4>\n            <mat-checkbox [(ngModel)]=\"selectedCondition.targetAttachements\">Attachements</mat-checkbox>\n            <mat-checkbox [(ngModel)]=\"selectedCondition.targetAttachmentSize\">Attachement Size</mat-checkbox>\n            <mat-checkbox [(ngModel)]=\"selectedCondition.targetAttachementCount\">Attachement Count</mat-checkbox>\n            <mat-checkbox [(ngModel)]=\"selectedCondition.targetHTMLBody\">HTML Body</mat-checkbox>\n            <mat-checkbox [(ngModel)]=\"selectedCondition.targetHTMLSize\">HTML Size</mat-checkbox>\n            <mat-checkbox [(ngModel)]=\"selectedCondition.targetPlainBody\">Plain Body</mat-checkbox>\n            <mat-checkbox [(ngModel)]=\"selectedCondition.targetPlainSize\">Plain Size</mat-checkbox>\n            <mat-checkbox [(ngModel)]=\"selectedCondition.targetSubject\">Subject</mat-checkbox>\n            <mat-checkbox [(ngModel)]=\"selectedCondition.targetSender\">Sender</mat-checkbox>\n        </div>\n        <div>\n            <h4>Format:</h4>\n            <mat-checkbox [(ngModel)]=\"selectedCondition.isNominal\">Nominal Value</mat-checkbox>\n            <mat-checkbox [(ngModel)]=\"selectedCondition.isMath\">Math Value</mat-checkbox>\n            <mat-checkbox [(ngModel)]=\"selectedCondition.isBool\">Bool Value</mat-checkbox>\n            <br>\n            <mat-checkbox [(ngModel)]=\"selectedCondition.zeroToUndefined\">Turn zero to undefined</mat-checkbox>\n            \n        </div>\n    </div>\n</section>\n\n<section *ngIf=\"pageIsLoading\" class=\"loadingElement\" >\n    <div class=\"loadingContent\">\n        <mat-progress-spinner color=\"primary\" mode=\"indeterminate\"></mat-progress-spinner>\n        <h2>Loading...</h2>\n    </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/email/email.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/email/email.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"startupPage\" class=\"gridContainer\">\n    <div class=\"leftSide\" >\n        <h2>Load From File</h2>\n        <button mat-raised-button class=\"alignCenter\" color=\"warn\" (click)=\"fileInput.click()\">\n            <span>Load File</span>\n            <input #fileInput type=\"file\" (change)=\"startup($event.target.files)\" accept=\".json\" style=\"display:none;\" />\n        </button>\n    </div>\n    <div class=\"rightSide\">\n        <h2>Load From Gmail API</h2>\n        <button class=\"alignCenter\" mat-raised-button (click)=\"startup()\" color=\"primary\">Gmail</button>\n    </div>\n</section>\n\n<section *ngIf=\"!startupPage\" class=\"gridContainer\">\n    <div class=\"leftSide listContainer\">\n        <cdk-virtual-scroll-viewport itemSize=\"10\" class=\"scrollContainer\">\n            <mat-card *cdkVirtualFor=\"let email of emails\"  [style.background] = \"(email == selectedEmail)? '#6f6062' : '' \">\n                <div (click)=\"selectedEmail = email\">\n                    <mat-card-header>\n                        <mat-card-title>{{email.subject}}</mat-card-title>\n                        <mat-card-subtitle>Id: {{email.id}};    Date: {{email.internalDate | date:'yyyy-MM-dd, HH:mm'}}</mat-card-subtitle>\n                    </mat-card-header>\n                    <mat-card-content>\n                        <p>{{email.snippet}}</p>\n                    </mat-card-content>\n                </div>\n                <mat-card-actions>\n                    <button mat-button color=\"warn\" (click)=\"deleteSelectedEmail(email)\">X</button>\n                </mat-card-actions>\n            </mat-card>\n        </cdk-virtual-scroll-viewport>\n        <div class=\"listFooter\">\n            <button mat-raised-button color=\"warn\" (click)=\"startupPage = true; selectedEmail = null;\">Import</button>\n            <button mat-raised-button color=\"primary\" (click)=\"exportEmails()\">Export</button>\n        </div>\n    </div>\n    <div class=\"rightSide details\" *ngIf = \"selectedEmail != null\">\n        <h3>{{selectedEmail.subject}}</h3>\n        <div class=\"detailsList\">\n            <h5>Id: </h5> \n            <p>{{selectedEmail.id}}</p>\n            <h4>Sender: </h4> \n            <p>{{selectedEmail.sender}}</p>\n            <h4>Target: </h4> \n            <p>{{selectedEmail.target}}</p>\n            <h4>Date: </h4> \n            <p>{{selectedEmail.internalDate | date:'yyyy-MM-dd, HH:mm'}}</p>\n            <h4>Snippet: </h4> \n            <p>{{selectedEmail.snippet}}</p>\n            <h4>Labels: </h4> \n            <div>\n                <!-- <p *ngFor=\"let label of selectedEmail.labels\">{{label}};</p> -->\n                <p>{{selectedEmail.labels}}</p>\n            </div>\n            <h4>Attachements: </h4> \n            <div>\n                <p *ngFor=\"let attachment of selectedEmail.attachments\">{{attachment.name}};</p>\n            </div>\n            \n            \n        </div>\n    </div>\n</section>\n\n<section *ngIf=\"pageIsLoading\" class=\"loadingElement\" >\n    <div class=\"loadingContent\">\n        <mat-progress-spinner color=\"primary\" mode=\"indeterminate\"></mat-progress-spinner>\n        <h2>Loading...</h2>\n    </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/export/export.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/export/export.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"gridContainer\">\n    <div class=\"leftSide listContainer\">\n        <cdk-virtual-scroll-viewport itemSize=\"10\" class=\"scrollContainer\">\n            <mat-card *cdkVirtualFor=\"let dat of parsed\"  [style.background] = \"(dat == selectedData)? '#6f6062' : '' \">\n                <div (click)=\"selectedData = dat\">\n                    <mat-card-header>\n                        <mat-card-title>{{dat.emailID}}</mat-card-title>\n                        <mat-card-subtitle>{{dat.emailSubject}}</mat-card-subtitle>\n                    </mat-card-header>\n                </div>\n                <mat-card-actions>\n                    <button mat-button color=\"warn\" (click)=\"deleteSelectedData(data)\">X</button>\n                </mat-card-actions>\n            </mat-card>\n        </cdk-virtual-scroll-viewport>\n        <div class=\"listFooter\">\n            <button mat-raised-button color = \"warn\" (click)=\"fileInput.click()\">\n                <span>Load Parsed Data</span>\n                <input #fileInput type=\"file\" (change)=\"loadData($event.target.files)\" style=\"display:none;\" accept=\".json\" />\n            </button>\n            <button mat-raised-button color=\"warn\" (click)=\"parseData()\">Parse Data</button>        \n            <button mat-raised-button color=\"accent\" (click)=\"saveData()\">Save .json</button>\n            <button mat-raised-button color=\"primary\" (click)=\"exportData()\">Export .arff</button>\n        </div>\n    </div>\n    <div class=\"rightSide details\" *ngIf = \"selectedData != null\">\n        <h3>{{selectedData.emailSubject}}</h3>\n        <h5>Id: {{selectedData.emailID}}</h5>\n        <cdk-virtual-scroll-viewport itemSize=\"10\" class=\"scrollContainer\">\n            <div *ngFor=\"let attrib of selectedData.attributes \" class=\"detailsList\">\n                <h5>{{attrib.name}}({{attrib.isNominal? 'Nominal' : 'Numeric'}}):</h5>\n                <p *ngIf=\"!attrib.isManual\">{{attrib.value}}</p>\n                <mat-form-field *ngIf=\"attrib.isManual\">\n                    <input matInput placeholder=\"Manual Value\" [(ngModel)]=\"attrib.value\">\n                </mat-form-field>\n            </div>    \n        </cdk-virtual-scroll-viewport>\n    </div>\n</section>\n\n<section *ngIf=\"pageIsLoading\" class=\"loadingElement\" >\n    <div class=\"loadingContent\">\n        <mat-progress-spinner color=\"primary\" mode=\"indeterminate\"></mat-progress-spinner>\n        <h2>Loading...</h2>\n    </div>\n</section>\n\n        ");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'MailParser';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email/email.component */ "./src/app/email/email.component.ts");
            /* harmony import */ var _export_export_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./export/export.component */ "./src/app/export/export.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _conditions_conditions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./conditions/conditions.component */ "./src/app/conditions/conditions.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
            // Material components
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _email_email_component__WEBPACK_IMPORTED_MODULE_5__["EmailComponent"],
                        _export_export_component__WEBPACK_IMPORTED_MODULE_6__["ExportComponent"],
                        _conditions_conditions_component__WEBPACK_IMPORTED_MODULE_8__["ConditionsComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/conditions/conditions.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/conditions/conditions.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".alignCenter {\n  margin: auto 25%;\n  width: 50%;\n  align-self: center;\n}\n\n.mat-card {\n  margin: 10px;\n  padding: 10px 10px 5px 5px;\n  background-color: #505050;\n  display: grid;\n  grid-template-columns: 90% 10%;\n  grid-template-rows: -webkit-max-content;\n  grid-template-rows: max-content;\n}\n\n.mat-card .mat-card-actions {\n  padding: 0;\n}\n\n.mat-card .mat-card-actions button {\n  height: 90%;\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n\n.mat-button {\n  min-width: 30px;\n  width: -webkit-fill-available;\n  width: -moz-available;\n  width: stretch;\n  margin: 5px;\n}\n\n.listFooter {\n  grid-template-columns: 33% 33% 33%;\n}\n\n.details {\n  padding: 10px;\n  margin: 10px;\n}\n\n.details * {\n  color: mintcream;\n}\n\n.details h4 {\n  margin: 10px 5px 5px 2px;\n}\n\n.details .mat-checkbox {\n  margin: 2px 10px 2px 2px;\n}\n\n.fillLine {\n  width: -webkit-fill-available;\n  width: -moz-available;\n  width: stretch;\n}\n\n.mat-checkbox-layout {\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZGl0aW9ucy9EOlxcRGV2XFxNYWlsUGFyc2VyL3NyY1xcYXBwXFxjb25kaXRpb25zXFxjb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb25kaXRpb25zL2NvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUFBLCtCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxVQUFBO0FDQ1I7O0FEQVE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0VaOztBREdBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFBQSxjQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksa0NBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUk7RUFDSSxnQkFBQTtBQ0FSOztBREdJO0VBQ0ksd0JBQUE7QUNEUjs7QURJSTtFQUNJLHdCQUFBO0FDRlI7O0FETUE7RUFDSSw2QkFBQTtFQUFBLHFCQUFBO0VBQUEsY0FBQTtBQ0hKOztBRE1BO0VBQ0ksb0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2NvbmRpdGlvbnMvY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGlnbkNlbnRlcntcclxuICAgIG1hcmdpbjogYXV0byAyNSUgO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1jYXJke1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDVweCA1cHggO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJSAxMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50O1xyXG5cclxuICAgIC5tYXQtY2FyZC1hY3Rpb25ze1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICB9ICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9ue1xyXG4gICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgd2lkdGg6IHN0cmV0Y2g7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmxpc3RGb290ZXJ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAzMyUgMzMlO1xyXG59XHJcblxyXG4uZGV0YWlsc3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBcclxuICAgICp7XHJcbiAgICAgICAgY29sb3I6IG1pbnRjcmVhbTtcclxuICAgIH1cclxuXHJcbiAgICBoNHtcclxuICAgICAgICBtYXJnaW46IDEwcHggNXB4IDVweCAycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1jaGVja2JveHtcclxuICAgICAgICBtYXJnaW46IDJweCAxMHB4IDJweCAycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWxsTGluZXtcclxuICAgIHdpZHRoOiBzdHJldGNoO1xyXG59XHJcblxyXG4ubWF0LWNoZWNrYm94LWxheW91dHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcbiIsIi5hbGlnbkNlbnRlciB7XG4gIG1hcmdpbjogYXV0byAyNSU7XG4gIHdpZHRoOiA1MCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm1hdC1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCUgMTAlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50O1xufVxuLm1hdC1jYXJkIC5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgcGFkZGluZzogMDtcbn1cbi5tYXQtY2FyZCAubWF0LWNhcmQtYWN0aW9ucyBidXR0b24ge1xuICBoZWlnaHQ6IDkwJTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLm1hdC1idXR0b24ge1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIHdpZHRoOiBzdHJldGNoO1xuICBtYXJnaW46IDVweDtcbn1cblxuLmxpc3RGb290ZXIge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAzMyUgMzMlO1xufVxuXG4uZGV0YWlscyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5kZXRhaWxzICoge1xuICBjb2xvcjogbWludGNyZWFtO1xufVxuLmRldGFpbHMgaDQge1xuICBtYXJnaW46IDEwcHggNXB4IDVweCAycHg7XG59XG4uZGV0YWlscyAubWF0LWNoZWNrYm94IHtcbiAgbWFyZ2luOiAycHggMTBweCAycHggMnB4O1xufVxuXG4uZmlsbExpbmUge1xuICB3aWR0aDogc3RyZXRjaDtcbn1cblxuLm1hdC1jaGVja2JveC1sYXlvdXQge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/conditions/conditions.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/conditions/conditions.component.ts ***!
          \****************************************************/
        /*! exports provided: ConditionsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionsComponent", function () { return ConditionsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_dataClasses_condition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/dataClasses/condition */ "./src/dataClasses/condition.ts");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
            var ConditionsComponent = /** @class */ (function () {
                function ConditionsComponent() {
                    this.startupPage = true;
                    this.selectedCondition = null;
                }
                ConditionsComponent.prototype.startup = function (file) {
                    var _this = this;
                    if (file === void 0) { file = null; }
                    if (!this.startupPage)
                        return;
                    this.pageIsLoading = true;
                    if (file != null) {
                        var fr_1 = new FileReader();
                        fr_1.onload =
                            function () {
                                if (_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].loadConditionsData(fr_1.result)) {
                                    _this.conditions = _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].conditionsData;
                                    _this.startupPage = false;
                                }
                                _this.pageIsLoading = false;
                            };
                        fr_1.readAsText(file[0], 'utf-8');
                    }
                    else {
                        _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].conditionsData = [];
                        this.conditions = _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].conditionsData;
                        //this.testConditions();
                        this.pageIsLoading = false;
                        this.startupPage = false;
                    }
                };
                ConditionsComponent.prototype.createNewCondition = function () {
                    this.selectedCondition = new src_dataClasses_condition__WEBPACK_IMPORTED_MODULE_2__["Condition"]();
                    this.selectedCondition.name = Date.now().toString();
                    this.selectedCondition.expression = "-";
                    this.conditions = this.conditions.concat([this.selectedCondition]);
                    _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].conditionsData = this.conditions;
                };
                ConditionsComponent.prototype.deleteSelectedCondition = function (c) {
                    if (this.selectedCondition == c)
                        this.selectedCondition = null;
                    this.conditions.splice(this.conditions.indexOf(c), 1);
                    // Doing this so list updates due to virtual scroll bug
                    this.conditions = this.conditions.slice();
                    _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].conditionsData = this.conditions;
                };
                ConditionsComponent.prototype.exportConditions = function () {
                    _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].saveConditionsData();
                };
                ConditionsComponent.prototype.updateCurrentConditionExpression = function () {
                    src_dataClasses_condition__WEBPACK_IMPORTED_MODULE_2__["Condition"].setExpression(this.selectedCondition, this.selectedCondition.expression);
                };
                ConditionsComponent.prototype.ngOnInit = function () { };
                return ConditionsComponent;
            }());
            ConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-conditions',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./conditions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/conditions/conditions.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./conditions.component.scss */ "./src/app/conditions/conditions.component.scss")).default]
                })
            ], ConditionsComponent);
            /***/ 
        }),
        /***/ "./src/app/email/email.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/email/email.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".alignCenter {\n  margin: auto 25%;\n  width: 50%;\n  align-self: center;\n}\n\n.mat-card {\n  margin: 10px;\n  padding: 10px 10px 5px 5px;\n  background-color: #5F5F5F;\n  display: grid;\n  grid-template-columns: 90% 10%;\n  grid-template-rows: -webkit-max-content;\n  grid-template-rows: max-content;\n}\n\n.mat-card .mat-card-actions {\n  padding: 0;\n}\n\n.mat-card .mat-card-actions button {\n  height: 90%;\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n\n.listFooter {\n  grid-template-columns: 50% 50%;\n}\n\n.details {\n  padding: 10px;\n  margin: 10px;\n}\n\n.details * {\n  color: mintcream;\n}\n\n.details h4 {\n  margin: 10px 5px 5px 2px;\n}\n\n.details .mat-checkbox {\n  margin: 2px 10px 2px 2px;\n}\n\n.detailsList {\n  margin: 10px;\n  padding: 10px 10px 5px 5px;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: -webkit-max-content;\n  grid-template-rows: max-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwvRDpcXERldlxcTWFpbFBhcnNlci9zcmNcXGFwcFxcZW1haWxcXGVtYWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbWFpbC9lbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQUEsK0JBQUE7QUNDSjs7QURDSTtFQUNJLFVBQUE7QUNDUjs7QURBUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRVo7O0FER0E7RUFDSSw4QkFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNBSjs7QURFSTtFQUNJLGdCQUFBO0FDQVI7O0FER0k7RUFDSSx3QkFBQTtBQ0RSOztBRElJO0VBQ0ksd0JBQUE7QUNGUjs7QURNQTtFQUNJLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQUEsK0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsL2VtYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWduQ2VudGVye1xyXG4gICAgbWFyZ2luOiBhdXRvIDI1JSA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWNhcmR7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4IDVweCA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUY1RjVGO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlIDEwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQ7XHJcblxyXG4gICAgLm1hdC1jYXJkLWFjdGlvbnN7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH0gICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLmxpc3RGb290ZXJ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbn1cclxuXHJcbi5kZXRhaWxze1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIFxyXG4gICAgKntcclxuICAgICAgICBjb2xvcjogbWludGNyZWFtO1xyXG4gICAgfVxyXG5cclxuICAgIGg0e1xyXG4gICAgICAgIG1hcmdpbjogMTBweCA1cHggNXB4IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWNoZWNrYm94e1xyXG4gICAgICAgIG1hcmdpbjogMnB4IDEwcHggMnB4IDJweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRldGFpbHNMaXN0e1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDVweCA1cHggO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQ7XHJcbn0iLCIuYWxpZ25DZW50ZXIge1xuICBtYXJnaW46IGF1dG8gMjUlO1xuICB3aWR0aDogNTAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5tYXQtY2FyZCB7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweCAxMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1RjVGNUY7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlIDEwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudDtcbn1cbi5tYXQtY2FyZCAubWF0LWNhcmQtYWN0aW9ucyB7XG4gIHBhZGRpbmc6IDA7XG59XG4ubWF0LWNhcmQgLm1hdC1jYXJkLWFjdGlvbnMgYnV0dG9uIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5saXN0Rm9vdGVyIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xufVxuXG4uZGV0YWlscyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5kZXRhaWxzICoge1xuICBjb2xvcjogbWludGNyZWFtO1xufVxuLmRldGFpbHMgaDQge1xuICBtYXJnaW46IDEwcHggNXB4IDVweCAycHg7XG59XG4uZGV0YWlscyAubWF0LWNoZWNrYm94IHtcbiAgbWFyZ2luOiAycHggMTBweCAycHggMnB4O1xufVxuXG4uZGV0YWlsc0xpc3Qge1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweCA1cHggNXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/email/email.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/email/email.component.ts ***!
          \******************************************/
        /*! exports provided: EmailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function () { return EmailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
            var EmailComponent = /** @class */ (function () {
                function EmailComponent(dataService) {
                    this.dataService = dataService;
                    this.startupPage = true;
                    this.selectedEmail = null;
                }
                EmailComponent.prototype.ngOnInit = function () {
                };
                EmailComponent.prototype.startup = function (file) {
                    var _this = this;
                    if (file === void 0) { file = null; }
                    if (!this.startupPage)
                        return;
                    this.pageIsLoading = true;
                    if (file != null) {
                        var fr_2 = new FileReader();
                        fr_2.onload =
                            function () {
                                if (_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"].loadEmailData(fr_2.result)) {
                                    _this.emails = _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"].emailData;
                                    _this.startupPage = false;
                                }
                                _this.pageIsLoading = false;
                            };
                        fr_2.readAsText(file[0], 'utf-8');
                    }
                    else {
                        _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"].emailData = [];
                        _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"].importEmailData()
                            .then(function (emails) {
                            _this.emails = _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"].emailData;
                            _this.pageIsLoading = false;
                            _this.startupPage = false;
                            //console.log(emails);
                        });
                    }
                };
                EmailComponent.prototype.exportEmails = function () {
                    _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"].saveEmailData();
                };
                EmailComponent.prototype.deleteSelectedEmail = function (email) {
                    if (this.selectedEmail == email)
                        this.selectedEmail = null;
                    this.emails.splice(this.emails.indexOf(email), 1);
                    // Doing this so list updates due to virtual scroll bug
                    this.emails = this.emails.slice();
                    _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"].emailData = this.emails;
                };
                return EmailComponent;
            }());
            EmailComponent.ctorParameters = function () { return [
                { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
            EmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-email',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./email.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/email/email.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./email.component.scss */ "./src/app/email/email.component.scss")).default]
                })
            ], EmailComponent);
            /***/ 
        }),
        /***/ "./src/app/export/export.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/export/export.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".alignCenter {\n  margin: auto 25%;\n  width: 50%;\n  align-self: center;\n}\n\n.scrollContainer {\n  height: 86%;\n}\n\n.gridContainer {\n  grid-template-columns: 60% 40%;\n}\n\n.mat-card {\n  margin: 10px;\n  padding: 10px 10px 5px 5px;\n  background-color: #5F5F5F;\n  display: grid;\n  grid-template-columns: 90% 10%;\n  grid-template-rows: -webkit-max-content;\n  grid-template-rows: max-content;\n}\n\n.mat-card .mat-card-actions {\n  padding: 0;\n}\n\n.mat-card .mat-card-actions button {\n  height: 90%;\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n\n.listFooter {\n  grid-template-columns: 50% 50%;\n}\n\n.details {\n  padding: 10px;\n  margin: 10px;\n}\n\n.details * {\n  color: mintcream;\n}\n\n.details h4 {\n  margin: 10px 5px 5px 2px;\n}\n\n.details .mat-checkbox {\n  margin: 2px 10px 2px 2px;\n}\n\n.detailsList {\n  margin: 10px;\n  display: grid;\n  grid-template-columns: 40% 60%;\n  grid-template-rows: -webkit-max-content;\n  grid-template-rows: max-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwb3J0L0Q6XFxEZXZcXE1haWxQYXJzZXIvc3JjXFxhcHBcXGV4cG9ydFxcZXhwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leHBvcnQvZXhwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQUEsK0JBQUE7QUNDSjs7QURDSTtFQUNJLFVBQUE7QUNDUjs7QURBUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRVo7O0FER0E7RUFDSSw4QkFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNBSjs7QURFSTtFQUNJLGdCQUFBO0FDQVI7O0FER0k7RUFDSSx3QkFBQTtBQ0RSOztBRElJO0VBQ0ksd0JBQUE7QUNGUjs7QURNQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUFBLCtCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9leHBvcnQvZXhwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWduQ2VudGVye1xyXG4gICAgbWFyZ2luOiBhdXRvIDI1JSA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uc2Nyb2xsQ29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiA4NiU7XHJcbn1cclxuXHJcbi5ncmlkQ29udGFpbmVye1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgNDAlO1xyXG59XHJcblxyXG4ubWF0LWNhcmR7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4IDVweCA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUY1RjVGO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlIDEwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQ7XHJcblxyXG4gICAgLm1hdC1jYXJkLWFjdGlvbnN7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH0gICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLmxpc3RGb290ZXJ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbn1cclxuXHJcbi5kZXRhaWxze1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIFxyXG4gICAgKntcclxuICAgICAgICBjb2xvcjogbWludGNyZWFtO1xyXG4gICAgfVxyXG5cclxuICAgIGg0e1xyXG4gICAgICAgIG1hcmdpbjogMTBweCA1cHggNXB4IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWNoZWNrYm94e1xyXG4gICAgICAgIG1hcmdpbjogMnB4IDEwcHggMnB4IDJweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRldGFpbHNMaXN0e1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDYwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQ7XHJcbn0iLCIuYWxpZ25DZW50ZXIge1xuICBtYXJnaW46IGF1dG8gMjUlO1xuICB3aWR0aDogNTAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5zY3JvbGxDb250YWluZXIge1xuICBoZWlnaHQ6IDg2JTtcbn1cblxuLmdyaWRDb250YWluZXIge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSA0MCU7XG59XG5cbi5tYXQtY2FyZCB7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweCAxMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1RjVGNUY7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlIDEwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudDtcbn1cbi5tYXQtY2FyZCAubWF0LWNhcmQtYWN0aW9ucyB7XG4gIHBhZGRpbmc6IDA7XG59XG4ubWF0LWNhcmQgLm1hdC1jYXJkLWFjdGlvbnMgYnV0dG9uIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5saXN0Rm9vdGVyIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xufVxuXG4uZGV0YWlscyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5kZXRhaWxzICoge1xuICBjb2xvcjogbWludGNyZWFtO1xufVxuLmRldGFpbHMgaDQge1xuICBtYXJnaW46IDEwcHggNXB4IDVweCAycHg7XG59XG4uZGV0YWlscyAubWF0LWNoZWNrYm94IHtcbiAgbWFyZ2luOiAycHggMTBweCAycHggMnB4O1xufVxuXG4uZGV0YWlsc0xpc3Qge1xuICBtYXJnaW46IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDYwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/export/export.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/export/export.component.ts ***!
          \********************************************/
        /*! exports provided: ExportComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportComponent", function () { return ExportComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_dataClasses_parsedData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/dataClasses/parsedData */ "./src/dataClasses/parsedData.ts");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            var ExportComponent = /** @class */ (function () {
                function ExportComponent(dataService, snackBar) {
                    this.dataService = dataService;
                    this.snackBar = snackBar;
                    this.parsed = [];
                }
                ExportComponent.prototype.ngOnInit = function () {
                };
                ExportComponent.prototype.deleteSelectedData = function (data) {
                    if (this.selectedData == data)
                        this.selectedData = null;
                    this.parsed.splice(this.parsed.indexOf(data), 1);
                    // Doing this so list updates due to virtual scroll bug
                    this.parsed = this.parsed.slice();
                    _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].parsedData = this.parsed;
                };
                ExportComponent.prototype.parseData = function () {
                    if (_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].conditionsData.length < 1) {
                        this.snackBar.open("Missing conditions data to parse");
                        return;
                    }
                    if (_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].emailData.length < 1) {
                        this.snackBar.open("Missing email data to parse");
                    }
                    this.pageIsLoading = true;
                    _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].parsedData = src_dataClasses_parsedData__WEBPACK_IMPORTED_MODULE_2__["ParsedData"].buildParsedData(_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].emailData, _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].conditionsData);
                    this.parsed = _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].parsedData;
                    this.pageIsLoading = false;
                    this.selectedData = null;
                };
                ExportComponent.prototype.exportData = function () {
                    this.pageIsLoading = true;
                    _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].exportParsedData();
                    this.pageIsLoading = false;
                };
                ExportComponent.prototype.saveData = function () {
                    _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].saveParsedData();
                };
                ExportComponent.prototype.loadData = function (file) {
                    var _this = this;
                    if (file === void 0) { file = null; }
                    this.pageIsLoading = true;
                    var fr = new FileReader();
                    fr.onload =
                        function () {
                            if (_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].loadParsedData(fr.result)) {
                                _this.parsed = _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].parsedData;
                            }
                            _this.pageIsLoading = false;
                        };
                    fr.readAsText(file[0], 'utf-8');
                };
                return ExportComponent;
            }());
            ExportComponent.ctorParameters = function () { return [
                { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
            ]; };
            ExportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-export',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./export.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/export/export.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./export.component.scss */ "./src/app/export/export.component.scss")).default]
                })
            ], ExportComponent);
            /***/ 
        }),
        /***/ "./src/app/services/data.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/data.service.ts ***!
          \******************************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_dataClasses_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/dataClasses/email */ "./src/dataClasses/email.ts");
            /* harmony import */ var src_dataClasses_condition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/dataClasses/condition */ "./src/dataClasses/condition.ts");
            /* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
            /* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email.service */ "./src/app/services/email.service.ts");
            var DataService_1;
            var DataService = DataService_1 = /** @class */ (function () {
                function DataService() {
                    if (DataService_1.emailService == null) {
                        DataService_1.emailService = new _email_service__WEBPACK_IMPORTED_MODULE_5__["EmailService"];
                    }
                }
                DataService.fillEmailData = function (messages) {
                    this.emailData = [];
                    for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                        var m = messages_1[_i];
                        this.emailData.push(src_dataClasses_email__WEBPACK_IMPORTED_MODULE_2__["Email"].parseMessage(m));
                    }
                    return this.emailData;
                };
                DataService.importEmailData = function () {
                    var _this = this;
                    return this.emailService.getMessagesAsync()
                        .then(function (messages) {
                        return _this.fillEmailData(messages);
                    });
                };
                DataService.loadEmailData = function (data) {
                    try {
                        this.emailData = JSON.parse(data);
                    }
                    catch (err) {
                        console.error(err);
                        return false;
                    }
                    return true;
                };
                DataService.saveEmailData = function (data) {
                    if (data === void 0) { data = this.emailData; }
                    var s = JSON.stringify(data, null, 2);
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(new Blob([s], { type: "text/plain;charset=utf-8" }), 'EmailData.json');
                    return s;
                };
                DataService.saveConditionsData = function (data) {
                    if (data === void 0) { data = this.conditionsData; }
                    var s = JSON.stringify(data, null, 2);
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(new Blob([s], { type: "text/plain;charset=utf-8" }), 'ConditionsData.json');
                    return s;
                };
                DataService.loadConditionsData = function (data) {
                    try {
                        this.conditionsData = JSON.parse(data);
                        this.conditionsData.forEach(function (condition) {
                            //console.log(condition);
                            src_dataClasses_condition__WEBPACK_IMPORTED_MODULE_3__["Condition"].setExpression(condition, condition.expression);
                        });
                    }
                    catch (err) {
                        console.error(err);
                        return false;
                    }
                    return true;
                };
                DataService.saveParsedData = function (data) {
                    if (data === void 0) { data = this.parsedData; }
                    var s = JSON.stringify(data, null, 2);
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(new Blob([s], { type: "text/plain;charset=utf-8" }), 'ParsedData.json');
                    return s;
                };
                DataService.exportParsedData = function (data) {
                    if (data === void 0) { data = this.parsedData; }
                    if (data.length < 1) {
                        return "";
                    }
                    var s = "@relation ParsedEmailData\n\n";
                    var attributes = [];
                    attributes.push({ name: "Id", isNominal: true, values: [] });
                    console.log(data);
                    //  Building attribute definitions
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var d = data_1[_i];
                        attributes[0].values.push(d.emailID);
                        var _loop_1 = function (a) {
                            // Create new attribute if it doesn't exist
                            if (!attributes.find(function (t) { return t.name == a.name; })) {
                                attributes.push({ name: a.name, isNominal: a.isNominal, values: [] });
                            }
                            // If attribute is nominal and it's value does not yet exist in the list, we add it
                            if (a.isNominal && !attributes.find(function (t) { return t.name == a.name; }).values.includes(a.value.toString())) {
                                attributes.find(function (t) { return t.name == a.name; }).values.push(a.value.toString());
                            }
                        };
                        for (var _a = 0, _b = d.attributes; _a < _b.length; _a++) {
                            var a = _b[_a];
                            _loop_1(a);
                        }
                    }
                    console.log(attributes);
                    var _loop_2 = function (a) {
                        console.log(a);
                        s += "@attribute '" + a.name + "' ";
                        if (a.isNominal) {
                            s += "{";
                            a.values.forEach(function (v, i) {
                                s += v;
                                if (i < a.values.length - 1)
                                    s += ",";
                            });
                            s += "}";
                        }
                        else {
                            s += "numeric";
                        }
                        s += "\n";
                    };
                    // Converting attribute definitions to string
                    for (var _c = 0, attributes_1 = attributes; _c < attributes_1.length; _c++) {
                        var a = attributes_1[_c];
                        _loop_2(a);
                    }
                    // Generating data
                    s += "\n@data\n";
                    var _loop_3 = function (d) {
                        attributes.forEach(function (a, i) {
                            if (a.name == "Id") {
                                s += d.emailID;
                                return;
                            }
                            s += ',';
                            var target = d.attributes.find(function (atr) { return atr.name == a.name; });
                            if (!target)
                                s += '?';
                            else
                                s += target.value;
                        });
                        s += "\n";
                    };
                    for (var _d = 0, data_2 = data; _d < data_2.length; _d++) {
                        var d = data_2[_d];
                        _loop_3(d);
                    }
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(new Blob([s], { type: "text/plain;charset=utf-8" }), 'ExportedParsedData.arff');
                    return s;
                };
                DataService.loadParsedData = function (data) {
                    try {
                        this.parsedData = JSON.parse(data);
                    }
                    catch (err) {
                        console.error(err);
                        return false;
                    }
                    return true;
                };
                return DataService;
            }());
            DataService.conditionsData = [];
            DataService.emailData = [];
            DataService.parsedData = [];
            DataService.emailService = null;
            DataService = DataService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/services/email.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/email.service.ts ***!
          \*******************************************/
        /*! exports provided: EmailService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function () { return EmailService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /// <reference path="../../../node_modules/@types/gapi/index.d.ts" />
            /// <reference path="../../../node_modules/@types/gapi.auth2/index.d.ts"/>
            /// <reference path="../../../node_modules/@types/gapi.client/index.d.ts"/>
            /// <reference path="../../../node_modules/@types/gapi.client.gmail/index.d.ts"/>
            //declare var gapi: any;
            // If modifying these scopes, delete token.json.
            var SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';
            var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
            //Will need to hide these before pushing
            var API_KEY = "AIzaSyBqGq0TdG38CZ6mgCr4o-X5wOnwWAqMe5k";
            var CLIENT_ID = "950001773289-65v5h9s3ao8gcinc24f35oasqdp4ipca.apps.googleusercontent.com";
            var EmailService = /** @class */ (function () {
                function EmailService() {
                    this.libsLoaded = false;
                    this.loadLibs();
                }
                EmailService.prototype.loadLibs = function () {
                    var _this = this;
                    gapi.load("client:auth2", {
                        timeout: 5000,
                        onerror: function (error) { console.log(error); },
                        ontimeout: function () { console.log("Timeout while loading libs."); },
                        callback: function () {
                            console.log("Success: loaded client:auth2 libs.");
                            gapi.client.load("gmail", "v1", function () {
                                console.log("Loaded gmail interface (v1).");
                                _this.libsLoaded = true;
                            });
                        }
                    });
                };
                EmailService.prototype.initClient = function () {
                    return gapi.client.init({
                        apiKey: API_KEY,
                        clientId: CLIENT_ID,
                        discoveryDocs: DISCOVERY_DOCS,
                        scope: SCOPES
                    }).then(function () {
                        console.log("Client initialized");
                    }, function (error) {
                        console.log(error);
                    });
                };
                EmailService.prototype.signIn = function () {
                    return gapi.auth2.getAuthInstance().signIn();
                };
                EmailService.prototype.signOut = function () {
                    return gapi.auth2.getAuthInstance().signOut();
                };
                //Sadly max results only returns max 500 items per query, even if value is set higher
                EmailService.prototype.getMessageList = function (pageToken, maxMessages, incJunk) {
                    if (pageToken === void 0) { pageToken = ''; }
                    if (maxMessages === void 0) { maxMessages = 500; }
                    if (incJunk === void 0) { incJunk = true; }
                    //@ts-ignore
                    return gapi.client.gmail.users.messages.list({
                        'userId': 'me',
                        'includeSpamTrash': incJunk,
                        'maxResults': maxMessages,
                        'pageToken': pageToken
                    });
                };
                EmailService.prototype.getMessage = function (messageId) {
                    //@ts-ignore
                    return gapi.client.gmail.users.messages.get({
                        'userId': 'me',
                        'id': messageId
                    });
                };
                EmailService.prototype.getMessagesAsync = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var messages, messageList;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    messages = [];
                                    messageList = [];
                                    return [4 /*yield*/, this.initClient()
                                            .then(function () { return _this.signIn(); })
                                            .then(function () {
                                            // Seing as max results for list is 500 members have to do it in 2 parts
                                            // Getting part 1
                                            return _this.getMessageList();
                                        })
                                            .then(function (res) {
                                            // Concat part 1 | Get part 2
                                            messageList = messageList.concat(res.result.messages);
                                            return _this.getMessageList(res.result.nextPageToken);
                                        })
                                            .then(function (res) {
                                            // Concat part 2
                                            messageList = messageList.concat(res.result.messages);
                                        })
                                            .then(function () {
                                            // Now we have to get the actual messages one my one using get
                                            // So I create a bunch of promises so they can be processed individualy
                                            var promises = [];
                                            for (var _i = 0, messageList_1 = messageList; _i < messageList_1.length; _i++) {
                                                var m = messageList_1[_i];
                                                promises.push(_this.getMessage(m.id));
                                            }
                                            return Promise.all(promises);
                                        })
                                            .then(function (res) {
                                            // Now that we have the actual email, we just push the contents to the final array
                                            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                                                var m = res_1[_i];
                                                messages.push(m.result);
                                            }
                                        })
                                            .then(function () { return _this.signOut(); })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, messages];
                            }
                        });
                    });
                };
                return EmailService;
            }());
            EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], EmailService);
            /***/ 
        }),
        /***/ "./src/dataClasses/condition.ts": 
        /*!**************************************!*\
          !*** ./src/dataClasses/condition.ts ***!
          \**************************************/
        /*! exports provided: Condition */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Condition", function () { return Condition; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/main/esm/index.js");
            var Condition = /** @class */ (function () {
                function Condition() {
                    this.targetAttachements = false;
                    this.targetHTMLBody = false;
                    this.targetPlainBody = false;
                    this.targetSubject = false;
                    this.targetSender = false;
                    this.targetPlainSize = false;
                    this.targetHTMLSize = false;
                    this.targetAttachementSize = false;
                    this.targetAttachementCount = false;
                    this.isManual = false; // If is manual the value for this field should be entered by user
                    this.isNominal = false; // If is nominal will try to produce nominal value
                    this.isMath = false; // If math is true runs result through math parser
                    this.isBool = false; // If bool is true interprets the result as true if math and >0 or if not math and non empty result
                    this.zeroToUndefined = false;
                    // These two values will be serialized, but their value in storage doesn't matter as once the data is loaded
                    // they are racalculated due to the fact that RegExp objects aren't stringified. Just don't have time to 
                    // write a separate data object for serialization.
                    this.parsedExpression = "";
                    this.regExpressions = [];
                }
                Condition.parseEmail = function (con, target) {
                    var targetText;
                    var result = "";
                    if (con.isManual)
                        return;
                    else
                        targetText = Condition.getTargetedText(con, target);
                    result = Condition.parseText(con, targetText);
                    try {
                        if (con.isBool)
                            if (con.isMath)
                                result = Object(mathjs__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(result) > 0 ? '1' : '0';
                            else
                                return (result.length > 0) ? '1' : '0';
                        if (con.isMath)
                            result = Object(mathjs__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(result).toString();
                    }
                    catch (error) {
                        console.log(error);
                        return 0;
                    }
                    if (con.zeroToUndefined && (result == '0' || result == ''))
                        result = '?';
                    return result;
                };
                Condition.getTargetedText = function (con, target) {
                    var targetText = "";
                    if (con.targetSubject)
                        targetText += target.subject;
                    if (con.targetAttachements)
                        target.attachements.forEach(function (element) {
                            targetText += element.name;
                        });
                    if (con.targetHTMLBody)
                        targetText += target.contentHTML;
                    if (con.targetPlainBody)
                        targetText += target.contentPlain;
                    if (con.targetSender)
                        targetText += target.sender;
                    if (con.targetAttachementCount)
                        targetText += target.attachements.length;
                    if (con.targetAttachementSize) {
                        var size_1 = 0;
                        target.attachements.forEach(function (element) {
                            size_1 += element.size;
                        });
                        targetText += size_1;
                    }
                    if (con.targetHTMLSize)
                        targetText += target.contentHTMLSize;
                    if (con.targetPlainSize)
                        targetText += target.contentPlainSize;
                    return targetText;
                };
                Condition.parseText = function (con, text) {
                    var result = con.parsedExpression;
                    for (var i = 0; i < con.regExpressions.length; i++) {
                        // console.log(result.match( '#'+i+' '));
                        var matches = text.match(con.regExpressions[i]);
                        result = result.replace('#' + i + ' ', matches == null ? '0' : matches.length.toString());
                    }
                    return result;
                };
                Condition.setExpression = function (con, expr) {
                    con.expression = expr;
                    con.regExpressions = [];
                    con.parsedExpression = "";
                    var regExStarted = false;
                    var currentRegExFragment = "";
                    for (var _i = 0, expr_1 = expr; _i < expr_1.length; _i++) {
                        var char = expr_1[_i];
                        if (char == '#') {
                            if (!regExStarted)
                                regExStarted = true;
                            else {
                                try {
                                    con.regExpressions.push(new RegExp(currentRegExFragment, 'g'));
                                    con.parsedExpression += '#' + (con.regExpressions.length - 1) + ' ';
                                }
                                catch (error) {
                                    console.log(error);
                                }
                                currentRegExFragment = "";
                                regExStarted = false;
                            }
                        }
                        else {
                            if (!regExStarted)
                                con.parsedExpression += char;
                            else
                                currentRegExFragment += char;
                        }
                    }
                };
                return Condition;
            }());
            /***/ 
        }),
        /***/ "./src/dataClasses/email.ts": 
        /*!**********************************!*\
          !*** ./src/dataClasses/email.ts ***!
          \**********************************/
        /*! exports provided: Email, Attachment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function () { return Email; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attachment", function () { return Attachment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var base64url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base64url */ "./node_modules/base64url/index.js");
            /* harmony import */ var base64url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(base64url__WEBPACK_IMPORTED_MODULE_1__);
            // This produces some issues due to Buffer not existing in browser vs Node.js
            // Fixed (jankily) in polyfills.ts
            var Email = /** @class */ (function () {
                function Email() {
                    // Header
                    this.labels = [];
                    // Attachements
                    this.attachements = [];
                }
                // 
                Email.parseMessage = function (message) {
                    var email = new Email();
                    email.id = message.id;
                    email.labels = message.labelIds;
                    email.internalDate = message.internalDate;
                    // Parese headers
                    for (var _i = 0, _a = message.payload.headers; _i < _a.length; _i++) {
                        var head = _a[_i];
                        if (head.name == "From")
                            email.sender = head.value;
                        else if (head.name == "To")
                            email.target = head.value;
                        else if (head.name == "Subject")
                            email.subject = head.value;
                    }
                    email.snippet = message.snippet;
                    if (message.payload.mimeType == "multipart/alternative")
                        for (var _b = 0, _c = message.payload.parts; _b < _c.length; _b++) {
                            var part = _c[_b];
                            if (part.mimeType == "text/plain") {
                                email.contentPlainSize = part.body.size;
                                email.contentPlain = base64url__WEBPACK_IMPORTED_MODULE_1___default.a.decode(part.body.data);
                            }
                            else if (part.mimeType == "text/html") {
                                email.contentHTMLSize = part.body.size;
                                email.contentHTML = base64url__WEBPACK_IMPORTED_MODULE_1___default.a.decode(part.body.data);
                            }
                            else {
                                email.attachements.push({ id: part.partId, name: part.filename, size: part.body.size, type: part.mimeType });
                            }
                        }
                    else if (message.payload.mimeType == "text/plain") {
                        email.contentPlainSize = message.payload.body.size;
                        email.contentPlain = base64url__WEBPACK_IMPORTED_MODULE_1___default.a.decode(message.payload.body.data);
                    }
                    else if (message.payload.mimeType == "text/html") {
                        email.contentHTMLSize = message.payload.body.size;
                        email.contentHTML = base64url__WEBPACK_IMPORTED_MODULE_1___default.a.decode(message.payload.body.data);
                    }
                    else
                        console.warn("Unknown mimeType in message: " + message.id + "; Message type: " + message.payload.mimeType);
                    return email;
                };
                return Email;
            }());
            var Attachment = /** @class */ (function () {
                function Attachment() {
                }
                return Attachment;
            }());
            /***/ 
        }),
        /***/ "./src/dataClasses/parsedData.ts": 
        /*!***************************************!*\
          !*** ./src/dataClasses/parsedData.ts ***!
          \***************************************/
        /*! exports provided: ParsedData */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParsedData", function () { return ParsedData; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _condition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./condition */ "./src/dataClasses/condition.ts");
            var ParsedData = /** @class */ (function () {
                function ParsedData() {
                }
                ParsedData.buildParsedData = function (emails, conditions) {
                    var result = [];
                    for (var _i = 0, emails_1 = emails; _i < emails_1.length; _i++) {
                        var e = emails_1[_i];
                        var temp = new ParsedData();
                        temp.emailID = e.id;
                        temp.emailSubject = e.subject;
                        temp.attributes = [];
                        for (var _a = 0, conditions_1 = conditions; _a < conditions_1.length; _a++) {
                            var c = conditions_1[_a];
                            temp.attributes.push({
                                name: c.name,
                                value: (c.isManual ? c.expression : _condition__WEBPACK_IMPORTED_MODULE_1__["Condition"].parseEmail(c, e)),
                                isManual: c.isManual,
                                isNominal: c.isNominal
                            });
                        }
                        result.push(temp);
                    }
                    return result;
                };
                return ParsedData;
            }());
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\Dev\MailParser\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map