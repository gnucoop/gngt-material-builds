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
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/autocomplete'), require('@angular/material/button'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/dialog'), require('@angular/material/form-field'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/toolbar'), require('@angular/router'), require('@ngx-translate/core'), require('@gngt/core/common'), require('@gngt/core/admin'), require('@angular/cdk/collections'), require('@gngt/material/model')) :
    typeof define === 'function' && define.amd ? define('@gngt/material/admin', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/autocomplete', '@angular/material/button', '@angular/material/card', '@angular/material/checkbox', '@angular/material/dialog', '@angular/material/form-field', '@angular/material/icon', '@angular/material/input', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/radio', '@angular/material/select', '@angular/material/sort', '@angular/material/table', '@angular/material/toolbar', '@angular/router', '@ngx-translate/core', '@gngt/core/common', '@gngt/core/admin', '@angular/cdk/collections', '@gngt/material/model'], factory) :
    (global = global || self, factory((global.dewco = global.dewco || {}, global.dewco.material = global.dewco.material || {}, global.dewco.material.admin = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.autocomplete, global.ng.material.button, global.ng.material.card, global.ng.material.checkbox, global.ng.material.dialog, global.ng.material.formField, global.ng.material.icon, global.ng.material.input, global.ng.material.paginator, global.ng.material.progressBar, global.ng.material.radio, global.ng.material.select, global.ng.material.sort, global.ng.material.table, global.ng.material.toolbar, global.ng.router, global.ngxt.core, global.gngt.core.common, global.gngt.core.admin, global.ng.cdk.collections));
}(this, function (exports, common, core, forms, autocomplete, button, card, checkbox, dialog, formField, icon, input, paginator, progressBar, radio, select, sort, table, toolbar, router, core$1, common$1, admin, collections) { 'use strict';

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
    var AdminDeleteConfirmDialogComponent = /** @class */ (function () {
        function AdminDeleteConfirmDialogComponent() {
        }
        AdminDeleteConfirmDialogComponent.decorators = [
            { type: core.Component, args: [{selector: 'gngt-admin-delete-confirm',
                        template: "<h2 mat-dialog-title>{{ 'Confirm' | translate }}</h2><mat-dialog-content>{{ 'Are you sure you want to delete?' | translate }}</mat-dialog-content><mat-dialog-actions><button mat-button mat-dialog-close>{{ 'No' | translate }}</button> <button mat-button [mat-dialog-close]=\"true\">{{ 'Yes' | translate }}</button></mat-dialog-actions>",
                        styles: [""],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    },] },
        ];
        return AdminDeleteConfirmDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AdminUserInteractionsService = /** @class */ (function (_super) {
        __extends(AdminUserInteractionsService, _super);
        function AdminUserInteractionsService(dialog) {
            var _this = _super.call(this) || this;
            _this.dialog = dialog;
            return _this;
        }
        /**
         * @return {?}
         */
        AdminUserInteractionsService.prototype.askDeleteConfirm = /**
         * @return {?}
         */
        function () {
            return this.dialog.open(AdminDeleteConfirmDialogComponent).afterClosed();
        };
        AdminUserInteractionsService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        AdminUserInteractionsService.ctorParameters = function () { return [
            { type: dialog.MatDialog }
        ]; };
        return AdminUserInteractionsService;
    }(admin.AdminUserInteractionsService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T, S, A1, A2, A3, A4, A5, A6, A7
     */
    var AdminEditComponent = /** @class */ (function (_super) {
        __extends(AdminEditComponent, _super);
        function AdminEditComponent(cdr, fb, router) {
            return _super.call(this, cdr, fb, router) || this;
        }
        AdminEditComponent.decorators = [
            { type: core.Component, args: [{selector: 'gngt-admin-edit',
                        template: "<mat-card *ngIf=\"form|async as editForm\"><h2 *ngIf=\"title\" mat-card-header>{{ title }} <span *ngIf=\"editForm.value['id']\">#{{ editForm.value['id'] }}</span></h2><mat-card-content><form [formGroup]=\"editForm\" [gngtFormDisabled]=\"loading|async\"><ng-container *ngFor=\"let field of fields\"><div *ngIf=\"!field.hidden\"><ng-container [ngSwitch]=\"field.type\"><mat-form-field *ngSwitchCase=\"'input'\"><input matInput [formControlName]=\"field.name\" [type]=\"field.subtype || 'text'\" [placeholder]=\"field.label | translate\" [readonly]=\"field.readonly\"></mat-form-field><mat-form-field *ngSwitchCase=\"'textarea'\"><textarea matInput [formControlName]=\"field.name\" [placeholder]=\"field.label | translate\"></textarea></mat-form-field><div *ngSwitchCase=\"'checkbox'\"><mat-checkbox [formControlName]=\"field.name\">{{ field.label | translate }}</mat-checkbox></div><mat-radio-group *ngSwitchCase=\"'radio'\" [formControlName]=\"field.name\"><label class=\"mat-form-field-label\">{{ field.label | translate }}</label><mat-radio-button *ngFor=\"let choice of field.choices|async\" [value]=\"choice.value\">{{ choice.label | translate }}</mat-radio-button></mat-radio-group><mat-form-field *ngSwitchCase=\"'select'\"><mat-select [placeholder]=\"field.label | translate\" [formControlName]=\"field.name\"><mat-option *ngFor=\"let choice of field.choices|async\" [value]=\"choice.value\">{{ choice.label | translate }}</mat-option></mat-select></mat-form-field><mat-form-field *ngSwitchCase=\"'multipleselect'\"><mat-select [placeholder]=\"field.label | translate\" [formControlName]=\"field.name\" multiple=\"multiple\"><mat-option *ngFor=\"let choice of field.choices|async\" [value]=\"choice.value\">{{ choice.label | translate }}</mat-option></mat-select></mat-form-field><mat-form-field *ngSwitchCase=\"'autocomplete'\"><input matInput [formControlName]=\"field.name\" type=\"text\" [placeholder]=\"field.label | translate\" [readonly]=\"field.readonly\" [matAutocomplete]=\"auto\"><mat-autocomplete #auto=\"matAutocomplete\"><mat-option *ngFor=\"let option of field.choices|async\" [value]=\"option.value\">{{ option.label | translate }}</mat-option></mat-autocomplete></mat-form-field></ng-container></div></ng-container></form></mat-card-content><mat-card-actions><button (click)=\"save()\" [disabled]=\"!editForm.valid\" mat-raised-button color=\"primary\">{{ saveLabel | translate }}</button> <button (click)=\"goBack()\" mat-raised-button color=\"warn\">{{ cancelLabel | translate }}</button></mat-card-actions><mat-card-footer><mat-progress-bar *ngIf=\"loading|async\" mode=\"indeterminate\"></mat-progress-bar></mat-card-footer></mat-card>",
                        styles: ["gngt-admin-edit{display:block}gngt-admin-edit>.mat-card>[mat-card-header]{margin:-16px -16px 32px;padding:16px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}gngt-admin-edit>.mat-card>.mat-card-actions{text-align:right}gngt-admin-edit>.mat-card mat-radio-group{display:block;position:relative;padding:.4375em 0;border-top:.84375em solid transparent}gngt-admin-edit>.mat-card mat-radio-group>label{display:block;top:-.84375em;transform:scale(.75) perspective(100px) translateZ(.001px)}gngt-admin-edit>.mat-card mat-radio-group mat-radio-button{margin-right:1em}"],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        inputs: [
                            'title',
                            'listUrl',
                            'cancelLabel',
                            'saveLabel',
                            'service',
                            'fields',
                            'processFormData',
                            'processObject',
                            'id'
                        ],
                        outputs: ['valueChanges$']
                    },] },
        ];
        /** @nocollapse */
        AdminEditComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: forms.FormBuilder },
            { type: router.Router }
        ]; };
        return AdminEditComponent;
    }(admin.AdminEditComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AdminListCellDirective = /** @class */ (function () {
        function AdminListCellDirective(templateRef) {
            this.templateRef = templateRef;
        }
        AdminListCellDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[gngtAdminListCell]' },] },
        ];
        /** @nocollapse */
        AdminListCellDirective.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        AdminListCellDirective.propDecorators = {
            column: [{ type: core.Input, args: ['gngtAdminListCell',] }]
        };
        return AdminListCellDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T, S, A1, A2, A3, A4, A5, A6, A7, MS
     */
    var AdminListComponent = /** @class */ (function (_super) {
        __extends(AdminListComponent, _super);
        function AdminListComponent(cdr, aui) {
            var _this = _super.call(this, cdr, aui) || this;
            _this.selection = new collections.SelectionModel(true, []);
            _this._cellTemplatesMap = {};
            return _this;
        }
        Object.defineProperty(AdminListComponent.prototype, "cellTemplatesMap", {
            get: /**
             * @return {?}
             */
            function () { return this._cellTemplatesMap; },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AdminListComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            this._cellTemplatesMap = this.cellTemplates.reduce((/**
             * @param {?} prev
             * @param {?} cur
             * @return {?}
             */
            function (prev, cur) {
                prev[cur.column] = cur.templateRef;
                return prev;
            }), (/** @type {?} */ ({})));
        };
        /**
         * @return {?}
         */
        AdminListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.dataSource.paginator = this.paginatorCmp;
            this.dataSource.sort = this.sortCmp;
        };
        /**
         * @return {?}
         */
        AdminListComponent.prototype.getSelection = /**
         * @return {?}
         */
        function () {
            return this.selection.selected;
        };
        /**
         * @return {?}
         */
        AdminListComponent.prototype.getItems = /**
         * @return {?}
         */
        function () {
            return this.dataSource.data;
        };
        /**
         * @return {?}
         */
        AdminListComponent.prototype.clearSelection = /**
         * @return {?}
         */
        function () {
            this.selection.clear();
        };
        /**
         * @return {?}
         */
        AdminListComponent.prototype.selectAll = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.dataSource.data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            function (row) { return _this.selection.select(row); }));
        };
        /**
         * @return {?}
         */
        AdminListComponent.prototype.refreshList = /**
         * @return {?}
         */
        function () {
            this.dataSource.refresh();
        };
        AdminListComponent.decorators = [
            { type: core.Component, args: [{selector: 'gngt-admin-list',
                        template: "<mat-card><h2 mat-card-header>{{ title }}</h2><button [routerLink]=\"baseEditUrl + newItemPath\" mat-mini-fab color=\"primary\"><mat-icon>add</mat-icon></button><mat-card-content><mat-toolbar><div class=\"gngt-actions\"><mat-select #actionSel [disabled]=\"!selection.hasValue()\" [placeholder]=\"'Action' | translate\"><mat-option value=\"delete\">{{ 'Delete' | translate }}</mat-option></mat-select><span class=\"gngt-spacer\"></span> <button mat-raised-button [disabled]=\"!actionSel.value\" (click)=\"processAction(actionSel.value)\">{{ 'Apply' | translate }}</button></div><span class=\"gngt-filler\"></span><mat-paginator [pageSizeOptions]=\"[20, 50, 100]\" showFirstLastButtons></mat-paginator></mat-toolbar><table mat-table [dataSource]=\"dataSource\" matSort><ng-container matColumnDef=\"select\"><th mat-header-cell *matHeaderCellDef><mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\"></mat-checkbox></th><td class=\"gngt-select\" mat-cell *matCellDef=\"let row\"><mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\"></mat-checkbox></td></ng-container><ng-container *ngFor=\"let header of headers\" [matColumnDef]=\"header.column\"><ng-container *ngIf=\"header.sortable; else notSortable\"><th mat-header-cell *matHeaderCellDef mat-sort-header><ng-container *ngTemplateOutlet=\"cellTemplatesMap[header.label] ? cellTemplatesMap[header.label] : defaultHeaderCellTemplate; context: {$implicit: header.label | translate}\"></ng-container></th></ng-container><ng-template #notSortable><th mat-header-cell *matHeaderCellDef><ng-container *ngTemplateOutlet=\"cellTemplatesMap[header.label] ? cellTemplatesMap[header.label] : defaultHeaderCellTemplate; context: {$implicit: header.label | translate}\"></ng-container></th></ng-template><ng-template #defaultHeaderCellTemplate>{{ header.label | translate }}</ng-template><td [routerLink]=\"baseEditUrl + element.id\" mat-cell *matCellDef=\"let element\"><ng-container *ngTemplateOutlet=\"cellTemplatesMap[header.column] ? cellTemplatesMap[header.column] : defaultCellTemplate; context: {$implicit: element|gngtGetObjectProperty:header.column}\"></ng-container><ng-template #defaultCellTemplate>{{ element|gngtGetObjectProperty:header.column }}</ng-template></td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table></mat-card-content></mat-card>",
                        styles: ["gngt-admin-list{display:block}gngt-admin-list>.mat-card>[mat-card-header]{margin:-24px -24px 48px;padding:24px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}gngt-admin-list>.mat-card>[mat-card-header]+[mat-mini-fab]{position:absolute;right:24px;margin-top:-70px}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar{margin:1em 0}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-spacer{flex:0 0 .5em}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-filler{flex:1 1 auto}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .mat-paginator{background:0 0}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-actions{display:flex;align-items:center}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-actions>*{flex-shrink:0}gngt-admin-list>.mat-card>.mat-card-content table{width:100%}gngt-admin-list>.mat-card>.mat-card-content table td:not(.gngt-select){cursor:pointer}"],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        inputs: [
                            'title',
                            'headers',
                            'displayedColumns',
                            'baseEditUrl',
                            'newItemPath',
                            'service'
                        ]
                    },] },
        ];
        /** @nocollapse */
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
        return AdminListComponent;
    }(admin.AdminListComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AdminModule = /** @class */ (function () {
        function AdminModule() {
        }
        AdminModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            autocomplete.MatAutocompleteModule,
                            button.MatButtonModule,
                            card.MatCardModule,
                            checkbox.MatCheckboxModule,
                            dialog.MatDialogModule,
                            formField.MatFormFieldModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            paginator.MatPaginatorModule,
                            progressBar.MatProgressBarModule,
                            radio.MatRadioModule,
                            select.MatSelectModule,
                            sort.MatSortModule,
                            table.MatTableModule,
                            toolbar.MatToolbarModule,
                            router.RouterModule,
                            core$1.TranslateModule,
                            common$1.CommonModule
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
                            AdminDeleteConfirmDialogComponent
                        ],
                        providers: [
                            AdminUserInteractionsService,
                        ]
                    },] },
        ];
        return AdminModule;
    }());

    exports.AdminEditComponent = AdminEditComponent;
    exports.AdminListComponent = AdminListComponent;
    exports.AdminModule = AdminModule;
    exports.AdminUserInteractionsService = AdminUserInteractionsService;
    exports.ɵa = AdminDeleteConfirmDialogComponent;
    exports.ɵb = AdminListCellDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-admin.umd.js.map
