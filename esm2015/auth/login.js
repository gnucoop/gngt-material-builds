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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginComponent as CoreLoginComponent } from '@gngt/core/auth';
import { Store } from '@ngrx/store';
export class LoginComponent extends CoreLoginComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvYXV0aC9sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUdILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUMsY0FBYyxJQUFJLGtCQUFrQixFQUFxQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pGLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFTbEMsTUFBTSxPQUFPLGNBQWUsU0FBUSxrQkFBa0I7SUFtRHBELFlBQVksRUFBZSxFQUFFLEtBQXVCLEVBQUUsR0FBc0I7UUFDMUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFuRGhCLHNCQUFpQixHQUEyQixRQUFRLENBQUM7SUFvRDdELENBQUM7SUFuREQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQ0ksZ0JBQWdCLENBQUMsZ0JBQXdDO1FBQzNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFHRCxJQUFJLHFCQUFxQjtRQUN2QixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFDSSxxQkFBcUIsQ0FBQyxxQkFBNkI7UUFDckQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHFCQUFxQixDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUdELElBQUkscUJBQXFCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDLENBQUM7SUFDRCxJQUNJLHFCQUFxQixDQUFDLHFCQUE2QjtRQUNyRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcscUJBQXFCLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBR0QsSUFBSSxxQkFBcUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQztJQUNELElBQ0kscUJBQXFCLENBQUMscUJBQTZCO1FBQ3JELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxxQkFBcUIsQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFHRCxJQUFJLHFCQUFxQjtRQUN2QixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsSUFDSSxxQkFBcUIsQ0FBQyxxQkFBNkI7UUFDckQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHFCQUFxQixDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsc2lEQUF5QjtnQkFFekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7O1lBWE8sV0FBVztZQUdYLEtBQUs7WUFSWCxpQkFBaUI7OzsrQkFzQmhCLEtBQUs7b0NBVUwsS0FBSztvQ0FVTCxLQUFLO29DQVVMLEtBQUs7b0NBVUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoQykgR251Y29vcCBzb2MuIGNvb3AuXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEdudWNvb3AgQW5ndWxhciBUb29sa2l0IChnbmd0KS5cbiAqXG4gKiBHbnVjb29wIEFuZ3VsYXIgVG9vbGtpdCAoZ25ndCkgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEdudWNvb3AgQW5ndWxhciBUb29sa2l0IChnbmd0KSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggR251Y29vcCBBbmd1bGFyIFRvb2xraXQgKGduZ3QpLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLy5cbiAqXG4gKi9cblxuaW1wb3J0IHtCb29sZWFuSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRBcHBlYXJhbmNlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TG9naW5Db21wb25lbnQgYXMgQ29yZUxvZ2luQ29tcG9uZW50LCBTdGF0ZSBhcyBBdXRoU3RhdGV9IGZyb20gJ0Bnbmd0L2NvcmUvYXV0aCc7XG5pbXBvcnQge1N0b3JlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2duZ3QtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJ2xvZ2luLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbG9naW4uY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBleHRlbmRzIENvcmVMb2dpbkNvbXBvbmVudCB7XG4gIHByaXZhdGUgX2ZpZWxkc0FwcGVhcmFuY2U6IE1hdEZvcm1GaWVsZEFwcGVhcmFuY2UgPSAnbGVnYWN5JztcbiAgZ2V0IGZpZWxkc0FwcGVhcmFuY2UoKTogTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkc0FwcGVhcmFuY2U7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGZpZWxkc0FwcGVhcmFuY2UoZmllbGRzQXBwZWFyYW5jZTogTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZSkge1xuICAgIHRoaXMuX2ZpZWxkc0FwcGVhcmFuY2UgPSBmaWVsZHNBcHBlYXJhbmNlO1xuICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VzZXJuYW1lUHJlZml4U3ZnSWNvbjogc3RyaW5nO1xuICBnZXQgdXNlcm5hbWVQcmVmaXhTdmdJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lUHJlZml4U3ZnSWNvbjtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdXNlcm5hbWVQcmVmaXhTdmdJY29uKHVzZXJuYW1lUHJlZml4U3ZnSWNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlcm5hbWVQcmVmaXhTdmdJY29uID0gdXNlcm5hbWVQcmVmaXhTdmdJY29uO1xuICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VzZXJuYW1lU3VmZml4U3ZnSWNvbjogc3RyaW5nO1xuICBnZXQgdXNlcm5hbWVTdWZmaXhTdmdJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lU3VmZml4U3ZnSWNvbjtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdXNlcm5hbWVTdWZmaXhTdmdJY29uKHVzZXJuYW1lU3VmZml4U3ZnSWNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlcm5hbWVTdWZmaXhTdmdJY29uID0gdXNlcm5hbWVTdWZmaXhTdmdJY29uO1xuICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Bhc3N3b3JkUHJlZml4U3ZnSWNvbjogc3RyaW5nO1xuICBnZXQgcGFzc3dvcmRQcmVmaXhTdmdJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Bhc3N3b3JkUHJlZml4U3ZnSWNvbjtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgcGFzc3dvcmRQcmVmaXhTdmdJY29uKHBhc3N3b3JkUHJlZml4U3ZnSWNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFzc3dvcmRQcmVmaXhTdmdJY29uID0gcGFzc3dvcmRQcmVmaXhTdmdJY29uO1xuICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Bhc3N3b3JkU3VmZml4U3ZnSWNvbjogc3RyaW5nO1xuICBnZXQgcGFzc3dvcmRTdWZmaXhTdmdJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Bhc3N3b3JkU3VmZml4U3ZnSWNvbjtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgcGFzc3dvcmRTdWZmaXhTdmdJY29uKHBhc3N3b3JkU3VmZml4U3ZnSWNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFzc3dvcmRTdWZmaXhTdmdJY29uID0gcGFzc3dvcmRTdWZmaXhTdmdJY29uO1xuICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlciwgc3RvcmU6IFN0b3JlPEF1dGhTdGF0ZT4sIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihmYiwgc3RvcmUsIGNkcik7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2hvd0xhYmVsczogQm9vbGVhbklucHV0O1xufVxuIl19