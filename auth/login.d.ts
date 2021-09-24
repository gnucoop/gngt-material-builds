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
import { BooleanInput } from '@angular/cdk/coercion';
import { ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { LoginComponent as CoreLoginComponent, State as AuthState } from '@gngt/core/auth';
import { Store } from '@ngrx/store';
export declare class LoginComponent extends CoreLoginComponent {
    private _fieldsAppearance;
    get fieldsAppearance(): MatFormFieldAppearance;
    set fieldsAppearance(fieldsAppearance: MatFormFieldAppearance);
    private _usernamePrefixSvgIcon;
    get usernamePrefixSvgIcon(): string;
    set usernamePrefixSvgIcon(usernamePrefixSvgIcon: string);
    private _usernameSuffixSvgIcon;
    get usernameSuffixSvgIcon(): string;
    set usernameSuffixSvgIcon(usernameSuffixSvgIcon: string);
    private _passwordPrefixSvgIcon;
    get passwordPrefixSvgIcon(): string;
    set passwordPrefixSvgIcon(passwordPrefixSvgIcon: string);
    private _passwordSuffixSvgIcon;
    get passwordSuffixSvgIcon(): string;
    set passwordSuffixSvgIcon(passwordSuffixSvgIcon: string);
    constructor(fb: FormBuilder, store: Store<AuthState>, cdr: ChangeDetectorRef);
    static ngAcceptInputType_showLabels: BooleanInput;
}
