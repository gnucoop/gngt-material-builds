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
import { AdminUserInteractionsService as AdminUserInteractionsService$1, AdminEditComponent as AdminEditComponent$1, AdminListComponent as AdminListComponent$1, GngtAdminModule } from '@gngt/core/admin';
import { CommonModule as CommonModule$1 } from '@gngt/core/common';
import { TranslateModule } from '@ngx-translate/core';
import { SelectionModel } from '@angular/cdk/collections';
import '@gngt/material/model';

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
class AdminDeleteConfirmDialogComponent {
}
AdminDeleteConfirmDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'gngt-admin-delete-confirm',
                template: "<h2 mat-dialog-title>{{ 'Confirm' | translate }}</h2>\n<mat-dialog-content>\n  {{ 'Are you sure you want to delete?' | translate }}\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>{{ 'No' | translate }}</button>\n  <button mat-button [mat-dialog-close]=\"true\">{{ 'Yes' | translate }}</button>\n</mat-dialog-actions>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["\n"]
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
class AdminUserInteractionsService extends AdminUserInteractionsService$1 {
    constructor(_dialog) {
        super();
        this._dialog = _dialog;
    }
    askDeleteConfirm() {
        return this._dialog.open(AdminDeleteConfirmDialogComponent).afterClosed();
    }
}
AdminUserInteractionsService.decorators = [
    { type: Injectable }
];
AdminUserInteractionsService.ctorParameters = () => [
    { type: MatDialog }
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
class AdminEditComponent extends AdminEditComponent$1 {
    constructor(cdr, fb, router) {
        super(cdr, fb, router);
    }
}
AdminEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'gngt-admin-edit',
                template: "<mat-card *ngIf=\"form|async as editForm\">\n  <div *ngIf=\"title\" mat-card-title>\n    <h2>{{ title }}</h2>\n    <span *ngIf=\"editForm!.value.id\">#{{ editForm!.value.id }}</span>\n  </div>\n  <mat-card-content>\n    <form [formGroup]=\"editForm!\" [gngtFormDisabled]=\"(loading|async) === true\">\n      <ng-content select=\"[gngtAdminEditFormHeader]\"></ng-content>\n      <ng-container *ngFor=\"let field of fields\">\n        <div *ngIf=\"!field.hidden\">\n          <ng-container [ngSwitch]=\"field.type\">\n            <mat-form-field *ngSwitchCase=\"'input'\">\n              <input matInput [formControlName]=\"field.name\" [type]=\"field.subtype || 'text'\"\n                  [placeholder]=\"field.label | translate\" [readonly]=\"field.readonly\">\n            </mat-form-field>\n            <mat-form-field *ngSwitchCase=\"'textarea'\">\n              <textarea matInput [formControlName]=\"field.name\" [placeholder]=\"field.label | translate\"></textarea>\n            </mat-form-field>\n            <div *ngSwitchCase=\"'checkbox'\">\n              <mat-checkbox [formControlName]=\"field.name\">{{ field.label | translate }}</mat-checkbox>\n            </div>\n            <mat-radio-group *ngSwitchCase=\"'radio'\" [formControlName]=\"field.name\">\n              <label class=\"mat-form-field-label\">{{ field.label | translate }}</label>\n              <mat-radio-button *ngFor=\"let choice of field.choices|gngtChoices\"\n                  [value]=\"choice.value\">{{ choice.label | translate }}</mat-radio-button>\n            </mat-radio-group>\n            <mat-form-field *ngSwitchCase=\"'select'\">\n              <mat-select [placeholder]=\"field.label | translate\" [formControlName]=\"field.name\">\n                <mat-option *ngFor=\"let choice of field.choices|gngtChoices\"\n                    [value]=\"choice.value\">{{ choice.label | translate }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <mat-form-field *ngSwitchCase=\"'multipleselect'\">\n              <mat-select [placeholder]=\"field.label | translate\" [formControlName]=\"field.name\" multiple>\n                <mat-option *ngFor=\"let choice of field.choices|gngtChoices\"\n                    [value]=\"choice.value\">{{ choice.label | translate }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <mat-form-field *ngSwitchCase=\"'autocomplete'\">\n              <input matInput [formControlName]=\"field.name\" type=\"text\"\n                  [placeholder]=\"field.label | translate\" [readonly]=\"field.readonly\"\n                  [matAutocomplete]=\"auto\">\n              <mat-autocomplete #auto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let option of field.choices|gngtChoices\"\n                    [value]=\"option.value\">{{ option.label | translate }}</mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </ng-container>\n        </div>\n      </ng-container>\n      <ng-content select=\"[gngtAdminEditFormFooter]\"></ng-content>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button *ngIf=\"!hideSaveButton\" (click)=\"save()\" [disabled]=\"(canSave === false) || !(editForm!.valid)\"\n        mat-raised-button color=\"primary\">{{ saveLabel | translate }}</button>\n    <button (click)=\"goBack()\" mat-raised-button color=\"warn\">{{ cancelLabel | translate }}</button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <mat-progress-bar *ngIf=\"loading|async\" mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card-footer>\n</mat-card>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["gngt-admin-edit{display:block}gngt-admin-edit>.mat-card>[mat-card-title]{display:flex;align-items:center}gngt-admin-edit>.mat-card>[mat-card-title]>h2{flex:1 0 auto;margin:0}gngt-admin-edit>.mat-card>.mat-card-actions{text-align:right}gngt-admin-edit>.mat-card mat-radio-group{display:block;position:relative;padding:.4375em 0;border-top:.84375em solid transparent}gngt-admin-edit>.mat-card mat-radio-group>label{display:block;top:-0.84375em;transform:scale(0.75) perspective(100px) translateZ(0.001px)}gngt-admin-edit>.mat-card mat-radio-group mat-radio-button{margin-right:1em}\n"]
            },] }
];
AdminEditComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: FormBuilder },
    { type: Router }
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
class AdminListCellDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
AdminListCellDirective.decorators = [
    { type: Directive, args: [{ selector: '[gngtAdminListCell]' },] }
];
AdminListCellDirective.ctorParameters = () => [
    { type: TemplateRef }
];
AdminListCellDirective.propDecorators = {
    column: [{ type: Input, args: ['gngtAdminListCell',] }]
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
class AdminListComponent extends AdminListComponent$1 {
    constructor(cdr, aui) {
        super(cdr, aui);
        this.selection = new SelectionModel(true, []);
        this._cellTemplatesMap = {};
    }
    get dataSource() {
        return this._dataSource;
    }
    set dataSource(dataSource) {
        if (dataSource !== this.dataSource) {
            this._dataSource = dataSource;
            this._fillDataSource();
        }
    }
    get cellTemplatesMap() {
        return this._cellTemplatesMap;
    }
    ngAfterContentInit() {
        this._cellTemplatesMap = this.cellTemplates.reduce((prev, cur) => {
            prev[cur.column] = cur.templateRef;
            return prev;
        }, {});
    }
    ngOnInit() {
        this._fillDataSource();
    }
    getSelection() {
        return this.selection ? this.selection.selected : [];
    }
    getItems() {
        return this.dataSource ? this.dataSource.data : [];
    }
    clearSelection() {
        if (this.selection == null) {
            return;
        }
        this.selection.clear();
    }
    selectAll() {
        if (this.dataSource == null) {
            return;
        }
        this.dataSource.data.forEach(row => this.selection.select(row));
    }
    refreshList() {
        if (this.dataSource == null) {
            return;
        }
        this.dataSource.refresh();
    }
    _fillDataSource() {
        if (this.dataSource == null) {
            return;
        }
        this.dataSource.paginator = this.paginatorCmp;
        this.dataSource.sort = this.sortCmp;
    }
}
AdminListComponent.decorators = [
    { type: Component, args: [{
                selector: 'gngt-admin-list',
                template: "<mat-card>\n  <div mat-card-title>\n    <h2>{{ title }}</h2>\n    <button [routerLink]=\"baseEditUrl + newItemPath\" mat-mini-fab color=\"primary\">\n      <mat-icon>add</mat-icon>\n    </button>\n  </div>\n  <mat-card-content>\n    <mat-toolbar>\n      <div class=\"gngt-actions\">\n        <mat-select #actionSel [disabled]=\"!selection.hasValue()\" [placeholder]=\"'Action' | translate\">\n          <mat-option value=\"delete\">{{ 'Delete' | translate }}</mat-option>\n        </mat-select>\n        <span class=\"gngt-spacer\"></span>\n        <button mat-raised-button [disabled]=\"!actionSel.value\"\n            (click)=\"processAction(actionSel.value)\">{{ 'Apply' | translate }}</button>\n      </div>\n      <span class=\"gngt-filler\"></span>\n      <mat-paginator [pageSizeOptions]=\"[20, 50, 100]\" showFirstLastButtons></mat-paginator>\n    </mat-toolbar>\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"select\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </th>\n        <td class=\"gngt-select\" mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </td>\n      </ng-container>\n      <ng-container *ngFor=\"let header of headers\"\n          [matColumnDef]=\"header.column\">\n          <ng-container *ngIf=\"header.sortable; else notSortable\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n              <ng-container *ngTemplateOutlet=\"cellTemplatesMap[header.label] ?\n                cellTemplatesMap[header.label] : defaultHeaderCellTemplate;\n                context: {$implicit: header.label | translate}\">\n              </ng-container>\n            </th>\n          </ng-container>\n          <ng-template #notSortable>\n            <th mat-header-cell *matHeaderCellDef>\n              <ng-container *ngTemplateOutlet=\"cellTemplatesMap[header.label] ?\n                cellTemplatesMap[header.label] : defaultHeaderCellTemplate;\n                context: {$implicit: header.label | translate}\">\n              </ng-container>\n            </th>\n          </ng-template>\n          <ng-template #defaultHeaderCellTemplate>\n            {{ header.label | translate }}\n          </ng-template>\n        <td [routerLink]=\"baseEditUrl + element.id\" mat-cell *matCellDef=\"let element\">\n          <ng-container *ngTemplateOutlet=\"cellTemplatesMap[header.column] ?\n            cellTemplatesMap[header.column] : defaultCellTemplate;\n            context: {$implicit: element|gngtGetObjectProperty:header.column, item: element}\">\n          </ng-container>\n          <ng-template #defaultCellTemplate>\n            {{ element|gngtGetObjectProperty:header.column }}\n          </ng-template>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </mat-card-content>\n</mat-card>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["gngt-admin-list{display:block}gngt-admin-list>.mat-card>[mat-card-title]{display:flex;align-items:center}gngt-admin-list>.mat-card>[mat-card-title]>h2{flex:1 0 auto;margin:0}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar{margin:1em 0}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-spacer{flex:0 0 .5em}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-filler{flex:1 1 auto}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .mat-paginator{background:transparent}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-actions{display:flex;align-items:center}gngt-admin-list>.mat-card>.mat-card-content>.mat-toolbar .gngt-actions>*{flex-shrink:0}gngt-admin-list>.mat-card>.mat-card-content table{width:100%}gngt-admin-list>.mat-card>.mat-card-content table td:not(.gngt-select){cursor:pointer}\n"]
            },] }
];
AdminListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AdminUserInteractionsService }
];
AdminListComponent.propDecorators = {
    dataSource: [{ type: Input }],
    paginatorCmp: [{ type: ViewChild, args: [MatPaginator,] }],
    sortCmp: [{ type: ViewChild, args: [MatSort,] }],
    actionSel: [{ type: ViewChild, args: ['actionSel', { read: MatSelect },] }],
    cellTemplates: [{ type: ContentChildren, args: [AdminListCellDirective,] }]
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
class AdminModule {
}
AdminModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule, GngtAdminModule, CommonModule$1, MatAutocompleteModule,
                    MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule,
                    MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule,
                    MatProgressBarModule, MatRadioModule, MatSelectModule, MatSortModule,
                    MatTableModule, MatToolbarModule, ReactiveFormsModule, RouterModule,
                    TranslateModule,
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

export { AdminDeleteConfirmDialogComponent, AdminEditComponent, AdminListCellDirective, AdminListComponent, AdminModule, AdminUserInteractionsService };
//# sourceMappingURL=admin.js.map
