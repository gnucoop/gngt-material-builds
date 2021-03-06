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
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Injectable, ChangeDetectorRef, Directive, TemplateRef, Input, ViewChild, ContentChildren, NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule as CommonModule$1 } from '@gngt/core/common';
import { AdminUserInteractionsService as AdminUserInteractionsService$1, AdminEditComponent as AdminEditComponent$1, AdminListComponent as AdminListComponent$1 } from '@gngt/core/admin';
import { SelectionModel } from '@angular/cdk/collections';
import '@gngt/material/model';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdminDeleteConfirmDialogComponent {
}
AdminDeleteConfirmDialogComponent.decorators = [
    { type: Component, args: [{selector: 'gngt-admin-delete-confirm',
                template: "<h2 mat-dialog-title>{{ 'Confirm' | translate }}</h2><mat-dialog-content>{{ 'Are you sure you want to delete?' | translate }}</mat-dialog-content><mat-dialog-actions><button mat-button mat-dialog-close>{{ 'No' | translate }}</button> <button mat-button [mat-dialog-close]=\"true\">{{ 'Yes' | translate }}</button></mat-dialog-actions>",
                styles: [""],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdminUserInteractionsService extends AdminUserInteractionsService$1 {
    /**
     * @param {?} _dialog
     */
    constructor(_dialog) {
        super();
        this._dialog = _dialog;
    }
    /**
     * @return {?}
     */
    askDeleteConfirm() {
        return this._dialog.open(AdminDeleteConfirmDialogComponent).afterClosed();
    }
}
AdminUserInteractionsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AdminUserInteractionsService.ctorParameters = () => [
    { type: MatDialog }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, S, A
 */
class AdminEditComponent extends AdminEditComponent$1 {
    /**
     * @param {?} cdr
     * @param {?} fb
     * @param {?} router
     */
    constructor(cdr, fb, router) {
        super(cdr, fb, router);
    }
}
AdminEditComponent.decorators = [
    { type: Component, args: [{selector: 'gngt-admin-edit',
                template: "<mat-card *ngIf=\"form|async as editForm\"><h2 *ngIf=\"title\" mat-card-header>{{ title }} <span *ngIf=\"editForm.value['id']\">#{{ editForm.value['id'] }}</span></h2><mat-card-content><form [formGroup]=\"editForm\" [gngtFormDisabled]=\"loading|async\"><ng-container *ngFor=\"let field of fields\"><div *ngIf=\"!field.hidden\"><ng-container [ngSwitch]=\"field.type\"><mat-form-field *ngSwitchCase=\"'input'\"><input matInput [formControlName]=\"field.name\" [type]=\"field.subtype || 'text'\" [placeholder]=\"field.label | translate\" [readonly]=\"field.readonly\"></mat-form-field><mat-form-field *ngSwitchCase=\"'textarea'\"><textarea matInput [formControlName]=\"field.name\" [placeholder]=\"field.label | translate\"></textarea></mat-form-field><div *ngSwitchCase=\"'checkbox'\"><mat-checkbox [formControlName]=\"field.name\">{{ field.label | translate }}</mat-checkbox></div><mat-radio-group *ngSwitchCase=\"'radio'\" [formControlName]=\"field.name\"><label class=\"mat-form-field-label\">{{ field.label | translate }}</label><mat-radio-button *ngFor=\"let choice of field.choices|async\" [value]=\"choice.value\">{{ choice.label | translate }}</mat-radio-button></mat-radio-group><mat-form-field *ngSwitchCase=\"'select'\"><mat-select [placeholder]=\"field.label | translate\" [formControlName]=\"field.name\"><mat-option *ngFor=\"let choice of field.choices|async\" [value]=\"choice.value\">{{ choice.label | translate }}</mat-option></mat-select></mat-form-field><mat-form-field *ngSwitchCase=\"'multipleselect'\"><mat-select [placeholder]=\"field.label | translate\" [formControlName]=\"field.name\" multiple=\"multiple\"><mat-option *ngFor=\"let choice of field.choices|async\" [value]=\"choice.value\">{{ choice.label | translate }}</mat-option></mat-select></mat-form-field><mat-form-field *ngSwitchCase=\"'autocomplete'\"><input matInput [formControlName]=\"field.name\" type=\"text\" [placeholder]=\"field.label | translate\" [readonly]=\"field.readonly\" [matAutocomplete]=\"auto\"><mat-autocomplete #auto=\"matAutocomplete\"><mat-option *ngFor=\"let option of field.choices|async\" [value]=\"option.value\">{{ option.label | translate }}</mat-option></mat-autocomplete></mat-form-field></ng-container></div></ng-container></form></mat-card-content><mat-card-actions><button *ngIf=\"!hideSaveButton\" (click)=\"save()\" [disabled]=\"!editForm.valid || (canSave === false)\" mat-raised-button color=\"primary\">{{ saveLabel | translate }}</button> <button (click)=\"goBack()\" mat-raised-button color=\"warn\">{{ cancelLabel | translate }}</button></mat-card-actions><mat-card-footer><mat-progress-bar *ngIf=\"loading|async\" mode=\"indeterminate\"></mat-progress-bar></mat-card-footer></mat-card>",
                styles: ["gngt-admin-edit{display:block}gngt-admin-edit>.mat-card>[mat-card-header]{margin:-16px -16px 32px;padding:16px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}gngt-admin-edit>.mat-card>.mat-card-actions{text-align:right}gngt-admin-edit>.mat-card mat-radio-group{display:block;position:relative;padding:.4375em 0;border-top:.84375em solid transparent}gngt-admin-edit>.mat-card mat-radio-group>label{display:block;top:-.84375em;transform:scale(.75) perspective(100px) translateZ(.001px)}gngt-admin-edit>.mat-card mat-radio-group mat-radio-button{margin-right:1em}"],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                inputs: [
                    'title',
                    'listUrl',
                    'cancelLabel',
                    'saveLabel',
                    'service',
                    'fields',
                    'processFormData',
                    'processObject',
                    'id',
                    'readonly',
                    'hideSaveButton',
                    'canSave',
                ],
                outputs: ['valueChanges$']
            },] },
];
/** @nocollapse */
AdminEditComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: FormBuilder },
    { type: Router }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdminListCellDirective {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
AdminListCellDirective.decorators = [
    { type: Directive, args: [{ selector: '[gngtAdminListCell]' },] },
];
/** @nocollapse */
AdminListCellDirective.ctorParameters = () => [
    { type: TemplateRef }
];
AdminListCellDirective.propDecorators = {
    column: [{ type: Input, args: ['gngtAdminListCell',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, S, A, MS
 */
class AdminListComponent extends AdminListComponent$1 {
    /**
     * @param {?} cdr
     * @param {?} aui
     */
    constructor(cdr, aui) {
        super(cdr, aui);
        this.selection = new SelectionModel(true, []);
        this._cellTemplatesMap = {};
    }
    /**
     * @return {?}
     */
    get dataSource() { return this._dataSource; }
    /**
     * @param {?} dataSource
     * @return {?}
     */
    set dataSource(dataSource) {
        if (dataSource !== this.dataSource) {
            this._dataSource = dataSource;
            this._fillDataSource();
        }
    }
    /**
     * @return {?}
     */
    get cellTemplatesMap() { return this._cellTemplatesMap; }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._cellTemplatesMap = this.cellTemplates.reduce((/**
         * @param {?} prev
         * @param {?} cur
         * @return {?}
         */
        (prev, cur) => {
            prev[cur.column] = cur.templateRef;
            return prev;
        }), (/** @type {?} */ ({})));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._fillDataSource();
    }
    /**
     * @return {?}
     */
    getSelection() {
        return this.selection ? this.selection.selected : [];
    }
    /**
     * @return {?}
     */
    getItems() {
        return this.dataSource ? this.dataSource.data : [];
    }
    /**
     * @return {?}
     */
    clearSelection() {
        if (this.selection == null) {
            return;
        }
        this.selection.clear();
    }
    /**
     * @return {?}
     */
    selectAll() {
        if (this.dataSource == null) {
            return;
        }
        this.dataSource.data.forEach((/**
         * @param {?} row
         * @return {?}
         */
        row => this.selection.select(row)));
    }
    /**
     * @return {?}
     */
    refreshList() {
        if (this.dataSource == null) {
            return;
        }
        this.dataSource.refresh();
    }
    /**
     * @private
     * @return {?}
     */
    _fillDataSource() {
        if (this.dataSource == null) {
            return;
        }
        this.dataSource.paginator = this.paginatorCmp;
        this.dataSource.sort = this.sortCmp;
    }
}
AdminListComponent.decorators = [
    { type: Component, args: [{selector: 'gngt-admin-list',
                template: "<mat-card><h2 mat-card-header>{{ title }}</h2><button [routerLink]=\"baseEditUrl + newItemPath\" mat-mini-fab color=\"primary\"><mat-icon>add</mat-icon></button><mat-card-content><mat-toolbar><div class=\"gngt-actions\"><mat-select #actionSel [disabled]=\"!selection.hasValue()\" [placeholder]=\"'Action' | translate\"><mat-option value=\"delete\">{{ 'Delete' | translate }}</mat-option></mat-select><span class=\"gngt-spacer\"></span> <button mat-raised-button [disabled]=\"!actionSel.value\" (click)=\"processAction(actionSel.value)\">{{ 'Apply' | translate }}</button></div><span class=\"gngt-filler\"></span><mat-paginator [pageSizeOptions]=\"[20, 50, 100]\" showFirstLastButtons></mat-paginator></mat-toolbar><table mat-table [dataSource]=\"dataSource\" matSort><ng-container matColumnDef=\"select\"><th mat-header-cell *matHeaderCellDef><mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\"></mat-checkbox></th><td class=\"gngt-select\" mat-cell *matCellDef=\"let row\"><mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\"></mat-checkbox></td></ng-container><ng-container *ngFor=\"let header of headers\" [matColumnDef]=\"header.column\"><ng-container *ngIf=\"header.sortable; else notSortable\"><th mat-header-cell *matHeaderCellDef mat-sort-header><ng-container *ngTemplateOutlet=\"cellTemplatesMap[header.label] ? cellTemplatesMap[header.label] : defaultHeaderCellTemplate; context: {$implicit: header.label | translate}\"></ng-container></th></ng-container><ng-template #notSortable><th mat-header-cell *matHeaderCellDef><ng-container *ngTemplateOutlet=\"cellTemplatesMap[header.label] ? cellTemplatesMap[header.label] : defaultHeaderCellTemplate; context: {$implicit: header.label | translate}\"></ng-container></th></ng-template><ng-template #defaultHeaderCellTemplate>{{ header.label | translate }}</ng-template><td [routerLink]=\"baseEditUrl + element.id\" mat-cell *matCellDef=\"let element\"><ng-container *ngTemplateOutlet=\"cellTemplatesMap[header.column] ? cellTemplatesMap[header.column] : defaultCellTemplate; context: {$implicit: element|gngtGetObjectProperty:header.column}\"></ng-container><ng-template #defaultCellTemplate>{{ element|gngtGetObjectProperty:header.column }}</ng-template></td></ng-container><tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr><tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr></table></mat-card-content></mat-card>",
                styles: ["gngt-admin-list{display:block}gngt-admin-list>.mat-card>[mat-card-header]{margin:-24px -24px 48px;padding:24px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}gngt-admin-list>.mat-card>[mat-card-header]+[mat-mini-fab]{position:absolute;right:24px;margin-top:-70px}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar{margin:1em 0}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-spacer{flex:0 0 .5em}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-filler{flex:1 1 auto}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .mat-paginator{background:0 0}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-actions{display:flex;align-items:center}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-actions>*{flex-shrink:0}gngt-admin-list>.mat-card>.mat-card-content table{width:100%}gngt-admin-list>.mat-card>.mat-card-content table td:not(.gngt-select){cursor:pointer}"],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
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
AdminListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AdminUserInteractionsService }
];
AdminListComponent.propDecorators = {
    dataSource: [{ type: Input }],
    paginatorCmp: [{ type: ViewChild, args: [MatPaginator, { static: true },] }],
    sortCmp: [{ type: ViewChild, args: [MatSort, { static: true },] }],
    actionSel: [{ type: ViewChild, args: ['actionSel', { static: true, read: MatSelect },] }],
    cellTemplates: [{ type: ContentChildren, args: [AdminListCellDirective,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AdminModule {
}
AdminModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    MatAutocompleteModule,
                    MatButtonModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatDialogModule,
                    MatFormFieldModule,
                    MatIconModule,
                    MatInputModule,
                    MatPaginatorModule,
                    MatProgressBarModule,
                    MatRadioModule,
                    MatSelectModule,
                    MatSortModule,
                    MatTableModule,
                    MatToolbarModule,
                    RouterModule,
                    TranslateModule,
                    CommonModule$1
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

export { AdminDeleteConfirmDialogComponent, AdminEditComponent, AdminListComponent, AdminModule, AdminUserInteractionsService, AdminListCellDirective as ɵa };
//# sourceMappingURL=admin.js.map
