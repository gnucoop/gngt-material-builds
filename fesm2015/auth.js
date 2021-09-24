import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Input, NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { AuthUserInteractionsService as AuthUserInteractionsService$1, LoginComponent as LoginComponent$1, JwtHelperService, AUTH_OPTIONS, JWT_OPTIONS, JwtInterceptor, AuthModule as AuthModule$1 } from '@gngt/core/auth';
import { CommonModule as CommonModule$1 } from '@gngt/core/common';
import { Store } from '@ngrx/store';

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
class LogoutConfirmDialogComponent {
}
LogoutConfirmDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'gngt-logout-confirm',
                template: "<h2 mat-dialog-title>Logout</h2>\n<mat-dialog-content translate>Are you sure you want to logout?</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"false\" translate>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" translate>OK</button>\n</mat-dialog-actions>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["gngt-logout-confirm{display:block;width:100%;max-width:300px}gngt-logout-confirm mat-dialog-actions{display:flex;justify-content:flex-end}gngt-logout-confirm [mat-button]{padding:0}\n"]
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
class AuthUserInteractionsService extends AuthUserInteractionsService$1 {
    constructor(_dialog, _snackBar) {
        super();
        this._dialog = _dialog;
        this._snackBar = _snackBar;
    }
    askLogoutConfirm() {
        return this._dialog.open(LogoutConfirmDialogComponent).afterClosed();
    }
    showLoginError(error) {
        this._snackBar.open(error, undefined, { duration: 3000 });
    }
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
class LoginComponent extends LoginComponent$1 {
    constructor(fb, store, cdr) {
        super(fb, store, cdr);
        this._fieldsAppearance = 'legacy';
    }
    get fieldsAppearance() {
        return this._fieldsAppearance;
    }
    set fieldsAppearance(fieldsAppearance) {
        this._fieldsAppearance = fieldsAppearance;
        this._cdr.markForCheck();
    }
    get usernamePrefixSvgIcon() {
        return this._usernamePrefixSvgIcon;
    }
    set usernamePrefixSvgIcon(usernamePrefixSvgIcon) {
        this._usernamePrefixSvgIcon = usernamePrefixSvgIcon;
        this._cdr.markForCheck();
    }
    get usernameSuffixSvgIcon() {
        return this._usernameSuffixSvgIcon;
    }
    set usernameSuffixSvgIcon(usernameSuffixSvgIcon) {
        this._usernameSuffixSvgIcon = usernameSuffixSvgIcon;
        this._cdr.markForCheck();
    }
    get passwordPrefixSvgIcon() {
        return this._passwordPrefixSvgIcon;
    }
    set passwordPrefixSvgIcon(passwordPrefixSvgIcon) {
        this._passwordPrefixSvgIcon = passwordPrefixSvgIcon;
        this._cdr.markForCheck();
    }
    get passwordSuffixSvgIcon() {
        return this._passwordSuffixSvgIcon;
    }
    set passwordSuffixSvgIcon(passwordSuffixSvgIcon) {
        this._passwordSuffixSvgIcon = passwordSuffixSvgIcon;
        this._cdr.markForCheck();
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'gngt-login',
                template: "<form\n    [formGroup]=\"loginForm\"\n    [gngtFormDisabled]=\"disabled\"\n    class=\"login-form\"\n    (keyup.enter)=\"login()\"\n>\n  <mat-form-field [appearance]=\"fieldsAppearance\">\n    <mat-label *ngIf=\"showLabels\">\n      <ng-content select=\"[gngtLoginUsername]\"></ng-content>\n    </mat-label>\n    <input\n        matInput\n        [placeholder]=\"usernamePlaceholder\"\n        autocomplete=\"username\"\n        formControlName=\"username\"\n    >\n    <mat-icon *ngIf=\"usernamePrefixSvgIcon\" matPrefix [svgIcon]=\"usernamePrefixSvgIcon\"></mat-icon>\n    <mat-icon *ngIf=\"usernameSuffixSvgIcon\" matPrefix [svgIcon]=\"usernameSuffixSvgIcon\"></mat-icon>\n  </mat-form-field>\n  <mat-form-field [appearance]=\"fieldsAppearance\">\n    <mat-label *ngIf=\"showLabels\">\n      <ng-content select=\"[gngtLoginPassword]\"></ng-content>\n    </mat-label>\n    <input\n        matInput\n        [placeholder]=\"passwordPlaceholder\"\n        type=\"password\"\n        autocomplete=\"current-password\"\n        formControlName=\"password\"\n    >\n    <mat-icon *ngIf=\"passwordPrefixSvgIcon\" matPrefix [svgIcon]=\"passwordPrefixSvgIcon\"></mat-icon>\n    <mat-icon *ngIf=\"passwordSuffixSvgIcon\" matPrefix [svgIcon]=\"passwordSuffixSvgIcon\"></mat-icon>\n  </mat-form-field>\n</form>\n<div class=\"gngt-login-actions\">\n  <button\n      mat-button\n      translate color=\"primary\"\n      [disabled]=\"(valid|async) === false\"\n      (click)=\"login()\"\n  >\n    <ng-content select=\"[gngtLoginAction]\"></ng-content>\n  </button>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["gngt-login{display:flex;align-items:center;justify-content:center;flex-direction:column}gngt-login .gngt-login-actions{padding-top:1em;text-align:right}\n"]
            },] }
];
LoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: Store },
    { type: ChangeDetectorRef }
];
LoginComponent.propDecorators = {
    fieldsAppearance: [{ type: Input }],
    usernamePrefixSvgIcon: [{ type: Input }],
    usernameSuffixSvgIcon: [{ type: Input }],
    passwordPrefixSvgIcon: [{ type: Input }],
    passwordSuffixSvgIcon: [{ type: Input }]
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
class AuthModule {
    static forRoot(options) {
        return {
            ngModule: AuthModule,
            providers: [
                JwtHelperService,
                options.authOptionsProvider || { provide: AUTH_OPTIONS, useValue: options.authConfig },
                options.jwtOptionsProvider || { provide: JWT_OPTIONS, useValue: options.jwtConfig },
                { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
            ]
        };
    }
}
AuthModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    AuthModule$1,
                    CommonModule$1,
                    MatButtonModule,
                    MatDialogModule,
                    MatFormFieldModule,
                    MatIconModule,
                    MatInputModule,
                    MatSnackBarModule,
                    ReactiveFormsModule,
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
                        provide: AuthUserInteractionsService$1,
                        useClass: AuthUserInteractionsService,
                        deps: [MatDialog, MatSnackBar]
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

export { AuthModule, LoginComponent, LogoutConfirmDialogComponent as ɵgc_gngt_src_material_auth_auth_a, AuthUserInteractionsService as ɵgc_gngt_src_material_auth_auth_b };
//# sourceMappingURL=auth.js.map
