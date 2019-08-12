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
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { AuthUserInteractionsService as AuthUserInteractionsService$1, LoginComponent as LoginComponent$1, JwtInterceptor, JWT_OPTIONS, AUTH_OPTIONS, JwtHelperService, AuthModule as AuthModule$1 } from '@gngt/core/auth';
import { CommonModule as CommonModule$1 } from '@gngt/core/common';
import { __extends } from 'tslib';
import { Store } from '@ngrx/store';

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
        { type: Component, args: [{selector: 'gngt-logout-confirm',
                    template: "<h2 mat-dialog-title>Logout</h2><mat-dialog-content translate>Are you sure you want to logout?</mat-dialog-content><mat-dialog-actions><button mat-button [mat-dialog-close]=\"false\" translate>Cancel</button> <button mat-button [mat-dialog-close]=\"true\" translate>OK</button></mat-dialog-actions>",
                    styles: ["gngt-logout-confirm{display:block;width:100%;max-width:300px}gngt-logout-confirm mat-dialog-actions{display:flex;justify-content:flex-end}gngt-logout-confirm [mat-button]{padding:0}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
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
}(AuthUserInteractionsService$1));

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
        { type: Component, args: [{selector: 'gngt-login',
                    template: "<mat-card><h2 mat-card-title translate>Login</h2><mat-card-content><form [formGroup]=\"loginForm\" [gngtFormDisabled]=\"disabled\" class=\"login-form\" (keyup.enter)=\"login()\"><mat-form-field><input matInput [placeholder]=\"'Username'|translate\" autocomplete=\"username\" formControlName=\"username\"></mat-form-field><mat-form-field><input matInput [placeholder]=\"'Password'|translate\" type=\"password\" autocomplete=\"current-password\" formControlName=\"password\"></mat-form-field></form></mat-card-content><mat-card-actions><button mat-button translate color=\"primary\" [disabled]=\"(valid|async) === false\" (click)=\"login()\">Login</button></mat-card-actions></mat-card>",
                    styles: ["gngt-login{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center}gngt-login .mat-form-field{width:100%}gngt-login .mat-card-actions{text-align:right}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    inputs: [
                        'disabled'
                    ]
                },] },
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: Store },
        { type: ChangeDetectorRef }
    ]; };
    return LoginComponent;
}(LoginComponent$1));

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
                    provide: HTTP_INTERCEPTORS,
                    useClass: JwtInterceptor,
                    multi: true
                },
                options.jwtOptionsProvider ||
                    {
                        provide: JWT_OPTIONS,
                        useValue: options.jwtConfig
                    },
                options.authOptionsProvider ||
                    {
                        provide: AUTH_OPTIONS,
                        useValue: options.authConfig
                    },
                JwtHelperService
            ]
        };
    };
    AuthModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatButtonModule,
                        MatCardModule,
                        MatDialogModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSnackBarModule,
                        TranslateModule,
                        AuthModule$1,
                        CommonModule$1
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
                            provide: AuthUserInteractionsService$1,
                            useClass: AuthUserInteractionsService,
                            deps: [MatDialog, MatSnackBar]
                        }
                    ]
                },] },
    ];
    return AuthModule;
}());

export { AuthModule, LoginComponent, LogoutConfirmDialogComponent as ɵa, AuthUserInteractionsService as ɵb };
//# sourceMappingURL=auth.es5.js.map
