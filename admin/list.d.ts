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
import { AfterContentInit, ChangeDetectorRef, OnDestroy, OnInit, QueryList, TemplateRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { AdminListComponent as BaseAdminListComponent } from '@gngt/core/admin';
import { Model } from '@gngt/core/common';
import { ModelActionTypes, ModelService, State as ModelState } from '@gngt/core/model';
import { ModelDataSource } from '@gngt/material/model';
import { AdminUserInteractionsService } from './admin-user-interactions';
import { AdminListCellDirective } from './list-cell';
export declare class AdminListComponent<T extends Model = Model, S extends ModelState<T> = ModelState<T>, A extends ModelActionTypes = ModelActionTypes, MS extends ModelService<T, S, A> = ModelService<T, S, A>> extends BaseAdminListComponent<T, S, A, MS> implements AfterContentInit, OnDestroy, OnInit {
    private _dataSource;
    get dataSource(): ModelDataSource<T, S, A, MS>;
    set dataSource(dataSource: ModelDataSource<T, S, A, MS>);
    paginatorCmp: MatPaginator;
    sortCmp: MatSort;
    actionSel: MatSelect;
    cellTemplates: QueryList<AdminListCellDirective>;
    readonly selection: SelectionModel<T>;
    private _cellTemplatesMap;
    get cellTemplatesMap(): {
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
