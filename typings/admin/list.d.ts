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
import { AfterContentInit, ChangeDetectorRef, OnDestroy, OnInit, QueryList, TemplateRef } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { AdminListComponent as BaseAdminListComponent } from '@gngt/core/admin';
import { Model, ModelActions, ModelService, reducers as fromModel } from '@gngt/core/model';
import { ModelDataSource } from '@gngt/material/model';
import { AdminUserInteractionsService } from './admin-user-interactions';
import { AdminListCellDirective } from './list-cell';
export declare class AdminListComponent<T extends Model, S extends fromModel.State<T>, A extends ModelActions.ModelActionTypes, MS extends ModelService<T, S, A>> extends BaseAdminListComponent<T, S, A, MS> implements AfterContentInit, OnDestroy, OnInit {
    private _dataSource;
    dataSource: ModelDataSource<T, S, A, MS>;
    paginatorCmp: MatPaginator;
    sortCmp: MatSort;
    actionSel: MatSelect;
    cellTemplates: QueryList<AdminListCellDirective>;
    readonly selection: SelectionModel<T>;
    private _cellTemplatesMap;
    readonly cellTemplatesMap: {
        [column: string]: TemplateRef<any>;
    };
    constructor(cdr: ChangeDetectorRef, aui: AdminUserInteractionsService);
    ngAfterContentInit(): void;
    ngOnInit(): void;
    getSelection(): T[];
    getItems(): T[];
    clearSelection(): void;
    selectAll(): void;
    refreshList(): void;
    private _fillDataSource;
}
