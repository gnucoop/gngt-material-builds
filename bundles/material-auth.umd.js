/**
 * @license
 * Copyright (C) 2018 Gnucoop soc. coop.
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
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/common/http'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/card'), require('@angular/material/dialog'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/snack-bar'), require('@ngx-translate/core'), require('@gngt/core/auth'), require('@gngt/core/common'), require('@ngrx/store')) :
    typeof define === 'function' && define.amd ? define('@gngt/material/auth', ['exports', '@angular/common', '@angular/common/http', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/card', '@angular/material/dialog', '@angular/material/form-field', '@angular/material/input', '@angular/material/snack-bar', '@ngx-translate/core', '@gngt/core/auth', '@gngt/core/common', '@ngrx/store'], factory) :
    (global = global || self, factory((global.gngt = global.gngt || {}, global.gngt.material = global.gngt.material || {}, global.gngt.material.auth = {}), global.ng.common, global.ng.common.http, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.card, global.ng.material.dialog, global.ng.material.formField, global.ng.material.input, global.ng.material.snackBar, global.ngxt.core, global.gngt.core.auth, global.gngt.core.common, global.ngrx.store));
}(this, function (exports, common, http, core, forms, button, card, dialog, formField, input, snackBar, core$1, auth, common$1, store) { 'use strict';

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The dialog will close with true if user clicks the ok button,
     * otherwise it will close with undefined.
     */
    var LogoutConfirmDialogComponent = /** @class */ (function () {
        function LogoutConfirmDialogComponent() {
        }
        LogoutConfirmDialogComponent.decorators = [
            { type: core.Component, args: [{selector: 'gngt-logout-confirm',
                        template: "<h2 mat-dialog-title>Logout</h2><mat-dialog-content translate>Are you sure you want to logout?</mat-dialog-content><mat-dialog-actions><button mat-button [mat-dialog-close]=\"false\" translate>Cancel</button> <button mat-button [mat-dialog-close]=\"true\" translate>OK</button></mat-dialog-actions>",
                        styles: ["gngt-logout-confirm{display:block;width:100%;max-width:300px}gngt-logout-confirm mat-dialog-actions{display:flex;justify-content:flex-end}gngt-logout-confirm [mat-button]{padding:0}"],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    },] },
        ];
        return LogoutConfirmDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthUserInteractionsService = /** @class */ (function (_super) {
        __extends(AuthUserInteractionsService, _super);
        function AuthUserInteractionsService(_dialog, _snackBar) {
            var _this = _super.call(this) || this;
            _this._dialog = _dialog;
            _this._snackBar = _snackBar;
            return _this;
        }
        /**
         * @return {?}
         */
        AuthUserInteractionsService.prototype.askLogoutConfirm = /**
         * @return {?}
         */
        function () {
            return this._dialog.open(LogoutConfirmDialogComponent).afterClosed();
        };
        /**
         * @param {?} error
         * @return {?}
         */
        AuthUserInteractionsService.prototype.showLoginError = /**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            this._snackBar.open(error, undefined, { duration: 3000 });
        };
        return AuthUserInteractionsService;
    }(auth.AuthUserInteractionsService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginComponent = /** @class */ (function (_super) {
        __extends(LoginComponent, _super);
        function LoginComponent(fb, store, cdr) {
            return _super.call(this, fb, store, cdr) || this;
        }
        LoginComponent.decorators = [
            { type: core.Component, args: [{selector: 'gngt-login',
                        template: "<mat-card><h2 mat-card-title translate>Login</h2><mat-card-content><form [formGroup]=\"loginForm\" [gngtFormDisabled]=\"disabled\" class=\"login-form\" (keyup.enter)=\"login()\"><mat-form-field><input matInput [placeholder]=\"'Username'|translate\" autocomplete=\"username\" formControlName=\"username\"></mat-form-field><mat-form-field><input matInput [placeholder]=\"'Password'|translate\" type=\"password\" autocomplete=\"current-password\" formControlName=\"password\"></mat-form-field></form></mat-card-content><mat-card-actions><button mat-button translate color=\"primary\" [disabled]=\"(valid|async) === false\" (click)=\"login()\">Login</button></mat-card-actions></mat-card>",
                        styles: ["gngt-login{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center}gngt-login .mat-form-field{width:100%}gngt-login .mat-card-actions{text-align:right}"],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        inputs: [
                            'disabled'
                        ]
                    },] },
        ];
        /** @nocollapse */
        LoginComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: store.Store },
            { type: core.ChangeDetectorRef }
        ]; };
        return LoginComponent;
    }(auth.LoginComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthModule = /** @class */ (function () {
        function AuthModule() {
        }
        /**
         * @param {?} options
         * @return {?}
         */
        AuthModule.forRoot = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            return {
                ngModule: AuthModule,
                providers: [
                    {
                        provide: http.HTTP_INTERCEPTORS,
                        useClass: auth.JwtInterceptor,
                        multi: true
                    },
                    options.jwtOptionsProvider ||
                        {
                            provide: auth.JWT_OPTIONS,
                            useValue: options.jwtConfig
                        },
                    options.authOptionsProvider ||
                        {
                            provide: auth.AUTH_OPTIONS,
                            useValue: options.authConfig
                        },
                    auth.JwtHelperService
                ]
            };
        };
        AuthModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            button.MatButtonModule,
                            card.MatCardModule,
                            dialog.MatDialogModule,
                            formField.MatFormFieldModule,
                            input.MatInputModule,
                            snackBar.MatSnackBarModule,
                            core$1.TranslateModule,
                            auth.AuthModule,
                            common$1.CommonModule
                        ],
                        declarations: [
                            LoginComponent,
                            LogoutConfirmDialogComponent
                        ],
                        exports: [
                            LoginComponent
                        ],
                        entryComponents: [
                            LogoutConfirmDialogComponent
                        ],
                        providers: [
                            {
                                provide: auth.AuthUserInteractionsService,
                                useClass: AuthUserInteractionsService,
                                deps: [dialog.MatDialog, snackBar.MatSnackBar]
                            }
                        ]
                    },] },
        ];
        return AuthModule;
    }());

    exports.AuthModule = AuthModule;
    exports.LoginComponent = LoginComponent;
    exports.ɵa = LogoutConfirmDialogComponent;
    exports.ɵb = AuthUserInteractionsService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-auth.umd.js.map
