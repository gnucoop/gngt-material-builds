(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/common/http'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/dialog'), require('@angular/material/form-field'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/snack-bar'), require('@gngt/core/auth'), require('@gngt/core/common'), require('@ngrx/store')) :
    typeof define === 'function' && define.amd ? define('@gngt/material/auth', ['exports', '@angular/common', '@angular/common/http', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/dialog', '@angular/material/form-field', '@angular/material/icon', '@angular/material/input', '@angular/material/snack-bar', '@gngt/core/auth', '@gngt/core/common', '@ngrx/store'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.gngt = global.gngt || {}, global.gngt.material = global.gngt.material || {}, global.gngt.material.auth = {}), global.ng.common, global.ng.common.http, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.dialog, global.ng.material.formField, global.ng.material.icon, global.ng.material.input, global.ng.material.snackBar, global.ng.core.auth, global.ng.core.common, global.ngrx.store));
}(this, (function (exports, common, http, core, forms, button, dialog, formField, icon, input, snackBar, auth, common$1, store) { 'use strict';

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
    /**
     * The dialog will close with true if user clicks the ok button,
     * otherwise it will close with undefined.
     */
    var LogoutConfirmDialogComponent = /** @class */ (function () {
        function LogoutConfirmDialogComponent() {
        }
        return LogoutConfirmDialogComponent;
    }());
    LogoutConfirmDialogComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gngt-logout-confirm',
                    template: "<h2 mat-dialog-title>Logout</h2>\n<mat-dialog-content translate>Are you sure you want to logout?</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"false\" translate>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" translate>OK</button>\n</mat-dialog-actions>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: ["gngt-logout-confirm{display:block;width:100%;max-width:300px}gngt-logout-confirm mat-dialog-actions{display:flex;justify-content:flex-end}gngt-logout-confirm [mat-button]{padding:0}\n"]
                },] }
    ];

    var AuthUserInteractionsService = /** @class */ (function (_super) {
        __extends(AuthUserInteractionsService, _super);
        function AuthUserInteractionsService(_dialog, _snackBar) {
            var _this = _super.call(this) || this;
            _this._dialog = _dialog;
            _this._snackBar = _snackBar;
            return _this;
        }
        AuthUserInteractionsService.prototype.askLogoutConfirm = function () {
            return this._dialog.open(LogoutConfirmDialogComponent).afterClosed();
        };
        AuthUserInteractionsService.prototype.showLoginError = function (error) {
            this._snackBar.open(error, undefined, { duration: 3000 });
        };
        return AuthUserInteractionsService;
    }(auth.AuthUserInteractionsService));

    var LoginComponent = /** @class */ (function (_super) {
        __extends(LoginComponent, _super);
        function LoginComponent(fb, store, cdr) {
            var _this = _super.call(this, fb, store, cdr) || this;
            _this._fieldsAppearance = 'legacy';
            return _this;
        }
        Object.defineProperty(LoginComponent.prototype, "fieldsAppearance", {
            get: function () {
                return this._fieldsAppearance;
            },
            set: function (fieldsAppearance) {
                this._fieldsAppearance = fieldsAppearance;
                this._cdr.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoginComponent.prototype, "usernamePrefixSvgIcon", {
            get: function () {
                return this._usernamePrefixSvgIcon;
            },
            set: function (usernamePrefixSvgIcon) {
                this._usernamePrefixSvgIcon = usernamePrefixSvgIcon;
                this._cdr.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoginComponent.prototype, "usernameSuffixSvgIcon", {
            get: function () {
                return this._usernameSuffixSvgIcon;
            },
            set: function (usernameSuffixSvgIcon) {
                this._usernameSuffixSvgIcon = usernameSuffixSvgIcon;
                this._cdr.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoginComponent.prototype, "passwordPrefixSvgIcon", {
            get: function () {
                return this._passwordPrefixSvgIcon;
            },
            set: function (passwordPrefixSvgIcon) {
                this._passwordPrefixSvgIcon = passwordPrefixSvgIcon;
                this._cdr.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoginComponent.prototype, "passwordSuffixSvgIcon", {
            get: function () {
                return this._passwordSuffixSvgIcon;
            },
            set: function (passwordSuffixSvgIcon) {
                this._passwordSuffixSvgIcon = passwordSuffixSvgIcon;
                this._cdr.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        return LoginComponent;
    }(auth.LoginComponent));
    LoginComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'gngt-login',
                    template: "<form\n    [formGroup]=\"loginForm\"\n    [gngtFormDisabled]=\"disabled\"\n    class=\"login-form\"\n    (keyup.enter)=\"login()\"\n>\n  <mat-form-field [appearance]=\"fieldsAppearance\">\n    <mat-label *ngIf=\"showLabels\">\n      <ng-content select=\"[gngtLoginUsername]\"></ng-content>\n    </mat-label>\n    <input\n        matInput\n        [placeholder]=\"usernamePlaceholder\"\n        autocomplete=\"username\"\n        formControlName=\"username\"\n    >\n    <mat-icon *ngIf=\"usernamePrefixSvgIcon\" matPrefix [svgIcon]=\"usernamePrefixSvgIcon\"></mat-icon>\n    <mat-icon *ngIf=\"usernameSuffixSvgIcon\" matPrefix [svgIcon]=\"usernameSuffixSvgIcon\"></mat-icon>\n  </mat-form-field>\n  <mat-form-field [appearance]=\"fieldsAppearance\">\n    <mat-label *ngIf=\"showLabels\">\n      <ng-content select=\"[gngtLoginPassword]\"></ng-content>\n    </mat-label>\n    <input\n        matInput\n        [placeholder]=\"passwordPlaceholder\"\n        type=\"password\"\n        autocomplete=\"current-password\"\n        formControlName=\"password\"\n    >\n    <mat-icon *ngIf=\"passwordPrefixSvgIcon\" matPrefix [svgIcon]=\"passwordPrefixSvgIcon\"></mat-icon>\n    <mat-icon *ngIf=\"passwordSuffixSvgIcon\" matPrefix [svgIcon]=\"passwordSuffixSvgIcon\"></mat-icon>\n  </mat-form-field>\n</form>\n<div class=\"gngt-login-actions\">\n  <button\n      mat-button\n      translate color=\"primary\"\n      [disabled]=\"(valid|async) === false\"\n      (click)=\"login()\"\n  >\n    <ng-content select=\"[gngtLoginAction]\"></ng-content>\n  </button>\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: ["gngt-login{display:flex;align-items:center;justify-content:center;flex-direction:column}gngt-login .gngt-login-actions{padding-top:1em;text-align:right}\n"]
                },] }
    ];
    LoginComponent.ctorParameters = function () { return [
        { type: forms.FormBuilder },
        { type: store.Store },
        { type: core.ChangeDetectorRef }
    ]; };
    LoginComponent.propDecorators = {
        fieldsAppearance: [{ type: core.Input }],
        usernamePrefixSvgIcon: [{ type: core.Input }],
        usernameSuffixSvgIcon: [{ type: core.Input }],
        passwordPrefixSvgIcon: [{ type: core.Input }],
        passwordSuffixSvgIcon: [{ type: core.Input }]
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
    var AuthModule = /** @class */ (function () {
        function AuthModule() {
        }
        AuthModule.forRoot = function (options) {
            return {
                ngModule: AuthModule,
                providers: [
                    auth.JwtHelperService,
                    options.authOptionsProvider || { provide: auth.AUTH_OPTIONS, useValue: options.authConfig },
                    options.jwtOptionsProvider || { provide: auth.JWT_OPTIONS, useValue: options.jwtConfig },
                    { provide: http.HTTP_INTERCEPTORS, useClass: auth.JwtInterceptor, multi: true },
                ]
            };
        };
        return AuthModule;
    }());
    AuthModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        auth.AuthModule,
                        common$1.CommonModule,
                        button.MatButtonModule,
                        dialog.MatDialogModule,
                        formField.MatFormFieldModule,
                        icon.MatIconModule,
                        input.MatInputModule,
                        snackBar.MatSnackBarModule,
                        forms.ReactiveFormsModule,
                    ],
                    declarations: [
                        LoginComponent,
                        LogoutConfirmDialogComponent,
                    ],
                    exports: [
                        LoginComponent,
                    ],
                    entryComponents: [
                        LogoutConfirmDialogComponent,
                    ],
                    providers: [{
                            provide: auth.AuthUserInteractionsService,
                            useClass: AuthUserInteractionsService,
                            deps: [dialog.MatDialog, snackBar.MatSnackBar]
                        }]
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

    exports.AuthModule = AuthModule;
    exports.LoginComponent = LoginComponent;
    exports.ɵgc_gngt_src_material_auth_auth_a = LogoutConfirmDialogComponent;
    exports.ɵgc_gngt_src_material_auth_auth_b = AuthUserInteractionsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-auth.umd.js.map
