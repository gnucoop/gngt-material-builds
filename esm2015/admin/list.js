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
import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, QueryList, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { AdminListComponent as BaseAdminListComponent } from '@gngt/core/admin';
import { ModelDataSource } from '@gngt/material/model';
import { AdminUserInteractionsService } from './admin-user-interactions';
import { AdminListCellDirective } from './list-cell';
export class AdminListComponent extends BaseAdminListComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9hZG1pbi9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBRUgsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUdMLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDbkQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxrQkFBa0IsSUFBSSxzQkFBc0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRzlFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVyRCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFTbkQsTUFBTSxPQUFPLGtCQUcwRSxTQUNuRixzQkFBbUM7SUF3QnJDLFlBQVksR0FBc0IsRUFBRSxHQUFpQztRQUNuRSxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBUlQsY0FBUyxHQUFzQixJQUFJLGNBQWMsQ0FBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFaEUsc0JBQWlCLEdBQXlDLEVBQUUsQ0FBQztJQU9yRSxDQUFDO0lBeEJELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFDSSxVQUFVLENBQUMsVUFBd0M7UUFDckQsSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBU0QsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQU1ELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDL0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUFFLEVBQTBDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDMUIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDM0IsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDM0IsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU8sZUFBZTtRQUNyQixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO1lBQzNCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDOzs7WUFyRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGkzR0FBd0I7Z0JBRXhCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7OztZQTVCQyxpQkFBaUI7WUFtQlgsNEJBQTRCOzs7eUJBbUJqQyxLQUFLOzJCQU9MLFNBQVMsU0FBQyxZQUFZO3NCQUN0QixTQUFTLFNBQUMsT0FBTzt3QkFDakIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUM7NEJBRXhDLGVBQWUsU0FBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKEMpIEdudWNvb3Agc29jLiBjb29wLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBHbnVjb29wIEFuZ3VsYXIgVG9vbGtpdCAoZ25ndCkuXG4gKlxuICogR251Y29vcCBBbmd1bGFyIFRvb2xraXQgKGduZ3QpIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBHbnVjb29wIEFuZ3VsYXIgVG9vbGtpdCAoZ25ndCkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEdudWNvb3AgQW5ndWxhciBUb29sa2l0IChnbmd0KS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8uXG4gKlxuICovXG5cbmltcG9ydCB7U2VsZWN0aW9uTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7TWF0U2VsZWN0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7QWRtaW5MaXN0Q29tcG9uZW50IGFzIEJhc2VBZG1pbkxpc3RDb21wb25lbnR9IGZyb20gJ0Bnbmd0L2NvcmUvYWRtaW4nO1xuaW1wb3J0IHtNb2RlbH0gZnJvbSAnQGduZ3QvY29yZS9jb21tb24nO1xuaW1wb3J0IHtNb2RlbEFjdGlvblR5cGVzLCBNb2RlbFNlcnZpY2UsIFN0YXRlIGFzIE1vZGVsU3RhdGV9IGZyb20gJ0Bnbmd0L2NvcmUvbW9kZWwnO1xuaW1wb3J0IHtNb2RlbERhdGFTb3VyY2V9IGZyb20gJ0Bnbmd0L21hdGVyaWFsL21vZGVsJztcblxuaW1wb3J0IHtBZG1pblVzZXJJbnRlcmFjdGlvbnNTZXJ2aWNlfSBmcm9tICcuL2FkbWluLXVzZXItaW50ZXJhY3Rpb25zJztcbmltcG9ydCB7QWRtaW5MaXN0Q2VsbERpcmVjdGl2ZX0gZnJvbSAnLi9saXN0LWNlbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbmd0LWFkbWluLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3QuaHRtbCcsXG4gIHN0eWxlVXJsczogWydsaXN0LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQWRtaW5MaXN0Q29tcG9uZW50PFQgZXh0ZW5kcyBNb2RlbCA9IE1vZGVsLCBTIGV4dGVuZHMgTW9kZWxTdGF0ZTxUPiA9IE1vZGVsU3RhdGU8VD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBleHRlbmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2RlbEFjdGlvblR5cGVzID0gTW9kZWxBY3Rpb25UeXBlcywgTVMgZXh0ZW5kc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGVsU2VydmljZTxULCBTLCBBPiA9IE1vZGVsU2VydmljZTxULCBTLCBBPj4gZXh0ZW5kc1xuICAgIEJhc2VBZG1pbkxpc3RDb21wb25lbnQ8VCwgUywgQSwgTVM+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBPbkluaXQge1xuICBwcml2YXRlIF9kYXRhU291cmNlOiBNb2RlbERhdGFTb3VyY2U8VCwgUywgQSwgTVM+O1xuICBnZXQgZGF0YVNvdXJjZSgpOiBNb2RlbERhdGFTb3VyY2U8VCwgUywgQSwgTVM+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGF0YVNvdXJjZShkYXRhU291cmNlOiBNb2RlbERhdGFTb3VyY2U8VCwgUywgQSwgTVM+KSB7XG4gICAgaWYgKGRhdGFTb3VyY2UgIT09IHRoaXMuZGF0YVNvdXJjZSkge1xuICAgICAgdGhpcy5fZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XG4gICAgICB0aGlzLl9maWxsRGF0YVNvdXJjZSgpO1xuICAgIH1cbiAgfVxuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yQ21wOiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydENtcDogTWF0U29ydDtcbiAgQFZpZXdDaGlsZCgnYWN0aW9uU2VsJywge3JlYWQ6IE1hdFNlbGVjdH0pIGFjdGlvblNlbDogTWF0U2VsZWN0O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgQENvbnRlbnRDaGlsZHJlbihBZG1pbkxpc3RDZWxsRGlyZWN0aXZlKSBjZWxsVGVtcGxhdGVzOiBRdWVyeUxpc3Q8QWRtaW5MaXN0Q2VsbERpcmVjdGl2ZT47XG4gIHJlYWRvbmx5IHNlbGVjdGlvbjogU2VsZWN0aW9uTW9kZWw8VD4gPSBuZXcgU2VsZWN0aW9uTW9kZWw8VD4odHJ1ZSwgW10pO1xuXG4gIHByaXZhdGUgX2NlbGxUZW1wbGF0ZXNNYXA6IHtbY29sdW1uOiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+fSA9IHt9O1xuICBnZXQgY2VsbFRlbXBsYXRlc01hcCgpOiB7W2NvbHVtbjogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55Pn0ge1xuICAgIHJldHVybiB0aGlzLl9jZWxsVGVtcGxhdGVzTWFwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgYXVpOiBBZG1pblVzZXJJbnRlcmFjdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoY2RyLCBhdWkpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2NlbGxUZW1wbGF0ZXNNYXAgPSB0aGlzLmNlbGxUZW1wbGF0ZXMucmVkdWNlKChwcmV2LCBjdXIpID0+IHtcbiAgICAgIHByZXZbY3VyLmNvbHVtbl0gPSBjdXIudGVtcGxhdGVSZWY7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSBhcyB7W2NvbHVtbjogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55Pn0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fZmlsbERhdGFTb3VyY2UoKTtcbiAgfVxuXG4gIGdldFNlbGVjdGlvbigpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbiA/IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkIDogW107XG4gIH1cblxuICBnZXRJdGVtcygpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UgPyB0aGlzLmRhdGFTb3VyY2UuZGF0YSA6IFtdO1xuICB9XG5cbiAgY2xlYXJTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgfVxuXG4gIHNlbGVjdEFsbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXRhU291cmNlID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaChyb3cgPT4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0KHJvdykpO1xuICB9XG5cbiAgcmVmcmVzaExpc3QoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGF0YVNvdXJjZS5yZWZyZXNoKCk7XG4gIH1cblxuICBwcml2YXRlIF9maWxsRGF0YVNvdXJjZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXRhU291cmNlID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yQ21wO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0Q21wO1xuICB9XG59XG4iXX0=