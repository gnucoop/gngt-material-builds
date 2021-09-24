(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/autocomplete'), require('@angular/material/button'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/dialog'), require('@angular/material/form-field'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/toolbar'), require('@angular/router'), require('@gngt/core/admin'), require('@gngt/core/common'), require('@ngx-translate/core'), require('@angular/cdk/collections')) :
    typeof define === 'function' && define.amd ? define('@gngt/material/admin', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/autocomplete', '@angular/material/button', '@angular/material/card', '@angular/material/checkbox', '@angular/material/dialog', '@angular/material/form-field', '@angular/material/icon', '@angular/material/input', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/radio', '@angular/material/select', '@angular/material/sort', '@angular/material/table', '@angular/material/toolbar', '@angular/router', '@gngt/core/admin', '@gngt/core/common', '@ngx-translate/core', '@angular/cdk/collections'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.gngt = global.gngt || {}, global.gngt.material = global.gngt.material || {}, global.gngt.material.admin = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.autocomplete, global.ng.material.button, global.ng.material.card, global.ng.material.checkbox, global.ng.material.dialog, global.ng.material.formField, global.ng.material.icon, global.ng.material.input, global.ng.material.paginator, global.ng.material.progressBar, global.ng.material.radio, global.ng.material.select, global.ng.material.sort, global.ng.material.table, global.ng.material.toolbar, global.ng.router, global.ng.core.admin, global.ng.core.common, global.ngx.translate.core, global.ng.cdk.collections));
}(this, (function (exports, common, core, forms, autocomplete, button, card, checkbox, dialog, formField, icon, input, paginator, progressBar, radio, select, sort, table, toolbar, router, admin, common$1, core$1, collections) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
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
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
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
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    /**
     * @license
     * Copyright (C) Gnucoop soc. coop.
     *
     * This file is part of the Gnucoop Angular Toolkit (gngt).
     *
     * Gnucoop Angular Toolkit (gngt) is free software: you can redistribute it and/or modify
     * it under the terms of the GNU General Public License as published by
     * the Free Software Foundation, either version 3 of the License, or
     * (at your option) any later version.
     *
     * Gnucoop Angular Toolkit (gngt) is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     * GNU General Public License for more details.
     *
     * You should have received a copy of the GNU General Public License
     * along with Gnucoop Angular Toolkit (gngt).  If not, see http://www.gnu.org/licenses/.
     *
     */
    var AdminDeleteConfirmDialogComponent = /** @class */ (function () {
        function AdminDeleteConfirmDialogComponent() {
        }
        return AdminDeleteConfirmDialogComponent;
    }());
    AdminDeleteConfirmDialogComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gngt-admin-delete-confirm',
                    template: "<h2 mat-dialog-title>{{ 'Confirm' | translate }}</h2>\n<mat-dialog-content>\n  {{ 'Are you sure you want to delete?' | translate }}\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>{{ 'No' | translate }}</button>\n  <button mat-button [mat-dialog-close]=\"true\">{{ 'Yes' | translate }}</button>\n</mat-dialog-actions>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: ["\n"]
                },] }
    ];

    var AdminUserInteractionsService = /** @class */ (function (_super) {
        __extends(AdminUserInteractionsService, _super);
        function AdminUserInteractionsService(_dialog) {
            var _this = _super.call(this) || this;
            _this._dialog = _dialog;
            return _this;
        }
        AdminUserInteractionsService.prototype.askDeleteConfirm = function () {
            return this._dialog.open(AdminDeleteConfirmDialogComponent).afterClosed();
        };
        return AdminUserInteractionsService;
    }(admin.AdminUserInteractionsService));
    AdminUserInteractionsService.decorators = [
        { type: core.Injectable }
    ];
    AdminUserInteractionsService.ctorParameters = function () { return [
        { type: dialog.MatDialog }
    ]; };

    var AdminEditComponent = /** @class */ (function (_super) {
        __extends(AdminEditComponent, _super);
        function AdminEditComponent(cdr, fb, router) {
            return _super.call(this, cdr, fb, router) || this;
        }
        return AdminEditComponent;
    }(admin.AdminEditComponent));
    AdminEditComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gngt-admin-edit',
                    template: "<mat-card *ngIf=\"form|async as editForm\">\n  <div *ngIf=\"title\" mat-card-title>\n    <h2>{{ title }}</h2>\n    <span *ngIf=\"editForm!.value.id\">#{{ editForm!.value.id }}</span>\n  </div>\n  <mat-card-content>\n    <form [formGroup]=\"editForm!\" [gngtFormDisabled]=\"(loading|async) === true\">\n      <ng-content select=\"[gngtAdminEditFormHeader]\"></ng-content>\n      <ng-container *ngFor=\"let field of fields\">\n        <div *ngIf=\"!field.hidden\">\n          <ng-container [ngSwitch]=\"field.type\">\n            <mat-form-field *ngSwitchCase=\"'input'\">\n              <input matInput [formControlName]=\"field.name\" [type]=\"field.subtype || 'text'\"\n                  [placeholder]=\"field.label | translate\" [readonly]=\"field.readonly\">\n            </mat-form-field>\n            <mat-form-field *ngSwitchCase=\"'textarea'\">\n              <textarea matInput [formControlName]=\"field.name\" [placeholder]=\"field.label | translate\"></textarea>\n            </mat-form-field>\n            <div *ngSwitchCase=\"'checkbox'\">\n              <mat-checkbox [formControlName]=\"field.name\">{{ field.label | translate }}</mat-checkbox>\n            </div>\n            <mat-radio-group *ngSwitchCase=\"'radio'\" [formControlName]=\"field.name\">\n              <label class=\"mat-form-field-label\">{{ field.label | translate }}</label>\n              <mat-radio-button *ngFor=\"let choice of field.choices|gngtChoices\"\n                  [value]=\"choice.value\">{{ choice.label | translate }}</mat-radio-button>\n            </mat-radio-group>\n            <mat-form-field *ngSwitchCase=\"'select'\">\n              <mat-select [placeholder]=\"field.label | translate\" [formControlName]=\"field.name\">\n                <mat-option *ngFor=\"let choice of field.choices|gngtChoices\"\n                    [value]=\"choice.value\">{{ choice.label | translate }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <mat-form-field *ngSwitchCase=\"'multipleselect'\">\n              <mat-select [placeholder]=\"field.label | translate\" [formControlName]=\"field.name\" multiple>\n                <mat-option *ngFor=\"let choice of field.choices|gngtChoices\"\n                    [value]=\"choice.value\">{{ choice.label | translate }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <mat-form-field *ngSwitchCase=\"'autocomplete'\">\n              <input matInput [formControlName]=\"field.name\" type=\"text\"\n                  [placeholder]=\"field.label | translate\" [readonly]=\"field.readonly\"\n                  [matAutocomplete]=\"auto\">\n              <mat-autocomplete #auto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let option of field.choices|gngtChoices\"\n                    [value]=\"option.value\">{{ option.label | translate }}</mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </ng-container>\n        </div>\n      </ng-container>\n      <ng-content select=\"[gngtAdminEditFormFooter]\"></ng-content>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button *ngIf=\"!hideSaveButton\" (click)=\"save()\" [disabled]=\"(canSave === false) || !(editForm!.valid)\"\n        mat-raised-button color=\"primary\">{{ saveLabel | translate }}</button>\n    <button (click)=\"goBack()\" mat-raised-button color=\"warn\">{{ cancelLabel | translate }}</button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <mat-progress-bar *ngIf=\"loading|async\" mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card-footer>\n</mat-card>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: ["gngt-admin-edit{display:block}gngt-admin-edit>.mat-card>[mat-card-title]{display:flex;align-items:center}gngt-admin-edit>.mat-card>[mat-card-title]>h2{flex:1 0 auto;margin:0}gngt-admin-edit>.mat-card>.mat-card-actions{text-align:right}gngt-admin-edit>.mat-card mat-radio-group{display:block;position:relative;padding:.4375em 0;border-top:.84375em solid transparent}gngt-admin-edit>.mat-card mat-radio-group>label{display:block;top:-0.84375em;transform:scale(0.75) perspective(100px) translateZ(0.001px)}gngt-admin-edit>.mat-card mat-radio-group mat-radio-button{margin-right:1em}\n"]
                },] }
    ];
    AdminEditComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: forms.FormBuilder },
        { type: router.Router }
    ]; };

    /**
     * @license
     * Copyright (C) Gnucoop soc. coop.
     *
     * This file is part of the Gnucoop Angular Toolkit (gngt).
     *
     * Gnucoop Angular Toolkit (gngt) is free software: you can redistribute it and/or modify
     * it under the terms of the GNU General Public License as published by
     * the Free Software Foundation, either version 3 of the License, or
     * (at your option) any later version.
     *
     * Gnucoop Angular Toolkit (gngt) is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     * GNU General Public License for more details.
     *
     * You should have received a copy of the GNU General Public License
     * along with Gnucoop Angular Toolkit (gngt).  If not, see http://www.gnu.org/licenses/.
     *
     */
    var AdminListCellDirective = /** @class */ (function () {
        function AdminListCellDirective(templateRef) {
            this.templateRef = templateRef;
        }
        return AdminListCellDirective;
    }());
    AdminListCellDirective.decorators = [
        { type: core.Directive, args: [{ selector: '[gngtAdminListCell]' },] }
    ];
    AdminListCellDirective.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };
    AdminListCellDirective.propDecorators = {
        column: [{ type: core.Input, args: ['gngtAdminListCell',] }]
    };

    var AdminListComponent = /** @class */ (function (_super) {
        __extends(AdminListComponent, _super);
        function AdminListComponent(cdr, aui) {
            var _this = _super.call(this, cdr, aui) || this;
            _this.selection = new collections.SelectionModel(true, []);
            _this._cellTemplatesMap = {};
            return _this;
        }
        Object.defineProperty(AdminListComponent.prototype, "dataSource", {
            get: function () {
                return this._dataSource;
            },
            set: function (dataSource) {
                if (dataSource !== this.dataSource) {
                    this._dataSource = dataSource;
                    this._fillDataSource();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AdminListComponent.prototype, "cellTemplatesMap", {
            get: function () {
                return this._cellTemplatesMap;
            },
            enumerable: false,
            configurable: true
        });
        AdminListComponent.prototype.ngAfterContentInit = function () {
            this._cellTemplatesMap = this.cellTemplates.reduce(function (prev, cur) {
                prev[cur.column] = cur.templateRef;
                return prev;
            }, {});
        };
        AdminListComponent.prototype.ngOnInit = function () {
            this._fillDataSource();
        };
        AdminListComponent.prototype.getSelection = function () {
            return this.selection ? this.selection.selected : [];
        };
        AdminListComponent.prototype.getItems = function () {
            return this.dataSource ? this.dataSource.data : [];
        };
        AdminListComponent.prototype.clearSelection = function () {
            if (this.selection == null) {
                return;
            }
            this.selection.clear();
        };
        AdminListComponent.prototype.selectAll = function () {
            var _this = this;
            if (this.dataSource == null) {
                return;
            }
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
        };
        AdminListComponent.prototype.refreshList = function () {
            if (this.dataSource == null) {
                return;
            }
            this.dataSource.refresh();
        };
        AdminListComponent.prototype._fillDataSource = function () {
            if (this.dataSource == null) {
                return;
            }
            this.dataSource.paginator = this.paginatorCmp;
            this.dataSource.sort = this.sortCmp;
        };
        return AdminListComponent;
    }(admin.AdminListComponent));
    AdminListComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gngt-admin-list',
                    template: "<mat-card>\n  <div mat-card-title>\n    <h2>{{ title }}</h2>\n    <button [routerLink]=\"baseEditUrl + newItemPath\" mat-mini-fab color=\"primary\">\n      <mat-icon>add</mat-icon>\n    </button>\n  </div>\n  <mat-card-content>\n    <mat-toolbar>\n      <div class=\"gngt-actions\">\n        <mat-select #actionSel [disabled]=\"!selection.hasValue()\" [placeholder]=\"'Action' | translate\">\n          <mat-option value=\"delete\">{{ 'Delete' | translate }}</mat-option>\n        </mat-select>\n        <span class=\"gngt-spacer\"></span>\n        <button mat-raised-button [disabled]=\"!actionSel.value\"\n            (click)=\"processAction(actionSel.value)\">{{ 'Apply' | translate }}</button>\n      </div>\n      <span class=\"gngt-filler\"></span>\n      <mat-paginator [pageSizeOptions]=\"[20, 50, 100]\" showFirstLastButtons></mat-paginator>\n    </mat-toolbar>\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"select\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </th>\n        <td class=\"gngt-select\" mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </td>\n      </ng-container>\n      <ng-container *ngFor=\"let header of headers\"\n          [matColumnDef]=\"header.column\">\n          <ng-container *ngIf=\"header.sortable; else notSortable\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n              <ng-container *ngTemplateOutlet=\"cellTemplatesMap[header.label] ?\n                cellTemplatesMap[header.label] : defaultHeaderCellTemplate;\n                context: {$implicit: header.label | translate}\">\n              </ng-container>\n            </th>\n          </ng-container>\n          <ng-template #notSortable>\n            <th mat-header-cell *matHeaderCellDef>\n              <ng-container *ngTemplateOutlet=\"cellTemplatesMap[header.label] ?\n                cellTemplatesMap[header.label] : defaultHeaderCellTemplate;\n                context: {$implicit: header.label | translate}\">\n              </ng-container>\n            </th>\n          </ng-template>\n          <ng-template #defaultHeaderCellTemplate>\n            {{ header.label | translate }}\n          </ng-template>\n        <td [routerLink]=\"baseEditUrl + element.id\" mat-cell *matCellDef=\"let element\">\n          <ng-container *ngTemplateOutlet=\"cellTemplatesMap[header.column] ?\n            cellTemplatesMap[header.column] : defaultCellTemplate;\n            context: {$implicit: element|gngtGetObjectProperty:header.column, item: element}\">\n          </ng-container>\n          <ng-template #defaultCellTemplate>\n            {{ element|gngtGetObjectProperty:header.column }}\n          </ng-template>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </mat-card-content>\n</mat-card>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: ["gngt-admin-list{display:block}gngt-admin-list>.mat-card>[mat-card-title]{display:flex;align-items:center}gngt-admin-list>.mat-card>[mat-card-title]>h2{flex:1 0 auto;margin:0}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar{margin:1em 0}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-spacer{flex:0 0 .5em}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-filler{flex:1 1 auto}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .mat-paginator{background:transparent}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-actions{display:flex;align-items:center}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-actions>*{flex-shrink:0}gngt-admin-list>.mat-card>.mat-card-content table{width:100%}gngt-admin-list>.mat-card>.mat-card-content table td:not(.gngt-select){cursor:pointer}\n"]
                },] }
    ];
    AdminListComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: AdminUserInteractionsService }
    ]; };
    AdminListComponent.propDecorators = {
        dataSource: [{ type: core.Input }],
        paginatorCmp: [{ type: core.ViewChild, args: [paginator.MatPaginator,] }],
        sortCmp: [{ type: core.ViewChild, args: [sort.MatSort,] }],
        actionSel: [{ type: core.ViewChild, args: ['actionSel', { read: select.MatSelect },] }],
        cellTemplates: [{ type: core.ContentChildren, args: [AdminListCellDirective,] }]
    };

    /**
     * @license
     * Copyright (C) Gnucoop soc. coop.
     *
     * This file is part of the Gnucoop Angular Toolkit (gngt).
     *
     * Gnucoop Angular Toolkit (gngt) is free software: you can redistribute it and/or modify
     * it under the terms of the GNU General Public License as published by
     * the Free Software Foundation, either version 3 of the License, or
     * (at your option) any later version.
     *
     * Gnucoop Angular Toolkit (gngt) is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     * GNU General Public License for more details.
     *
     * You should have received a copy of the GNU General Public License
     * along with Gnucoop Angular Toolkit (gngt).  If not, see http://www.gnu.org/licenses/.
     *
     */
    var AdminModule = /** @class */ (function () {
        function AdminModule() {
        }
        return AdminModule;
    }());
    AdminModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule, admin.GngtAdminModule, common$1.CommonModule, autocomplete.MatAutocompleteModule,
                        button.MatButtonModule, card.MatCardModule, checkbox.MatCheckboxModule, dialog.MatDialogModule,
                        formField.MatFormFieldModule, icon.MatIconModule, input.MatInputModule, paginator.MatPaginatorModule,
                        progressBar.MatProgressBarModule, radio.MatRadioModule, select.MatSelectModule, sort.MatSortModule,
                        table.MatTableModule, toolbar.MatToolbarModule, forms.ReactiveFormsModule, router.RouterModule,
                        core$1.TranslateModule,
                    ],
                    declarations: [
                        AdminDeleteConfirmDialogComponent,
                        AdminEditComponent,
                        AdminListCellDirective,
                        AdminListComponent,
                    ],
                    exports: [
                        AdminEditComponent,
                        AdminListCellDirective,
                        AdminListComponent,
                    ],
                    entryComponents: [
                        AdminDeleteConfirmDialogComponent,
                    ],
                    providers: [
                        AdminUserInteractionsService,
                    ]
                },] }
    ];

    /**
     * @license
     * Copyright (C) Gnucoop soc. coop.
     *
     * This file is part of the Gnucoop Angular Toolkit (gngt).
     *
     * Gnucoop Angular Toolkit (gngt) is free software: you can redistribute it and/or modify
     * it under the terms of the GNU General Public License as published by
     * the Free Software Foundation, either version 3 of the License, or
     * (at your option) any later version.
     *
     * Gnucoop Angular Toolkit (gngt) is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     * GNU General Public License for more details.
     *
     * You should have received a copy of the GNU General Public License
     * along with Gnucoop Angular Toolkit (gngt).  If not, see http://www.gnu.org/licenses/.
     *
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AdminDeleteConfirmDialogComponent = AdminDeleteConfirmDialogComponent;
    exports.AdminEditComponent = AdminEditComponent;
    exports.AdminListCellDirective = AdminListCellDirective;
    exports.AdminListComponent = AdminListComponent;
    exports.AdminModule = AdminModule;
    exports.AdminUserInteractionsService = AdminUserInteractionsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-admin.umd.js.map
