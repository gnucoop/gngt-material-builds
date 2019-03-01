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
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { Model, ModelActions, ModelListParams, ModelService, reducers as fromModel } from '@gngt/core/model';
export declare class ModelDataSource<T extends Model, S extends fromModel.State<T>, A1 extends ModelActions.ModelGetAction, A2 extends ModelActions.ModelListAction, A3 extends ModelActions.ModelCreateAction<T>, A4 extends ModelActions.ModelUpdateAction<T>, A5 extends ModelActions.ModelPatchAction<T>, A6 extends ModelActions.ModelDeleteAction<T>, A7 extends ModelActions.ModelDeleteAllAction<T>, MS extends ModelService<T, S, A1, A2, A3, A4, A5, A6, A7>> extends DataSource<T> {
    private _service;
    private _baseParams;
    constructor(_service: MS, _baseParams?: ModelListParams);
    sort: MatSort | null;
    private _sort;
    filter: string;
    private _filter;
    paginator: MatPaginator | null;
    private _paginator;
    private _data;
    readonly data: T[];
    private _dataSubscription;
    private _sortParams;
    private _sortSubscription;
    private _paginatorParams;
    private _paginatorSubscription;
    private _refreshEvent;
    connect(_: CollectionViewer): Observable<T[]>;
    disconnect(_: CollectionViewer): void;
    refresh(): void;
    private _initData;
    private _updateSort;
    private _updatePaginator;
}
