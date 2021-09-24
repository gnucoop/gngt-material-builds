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
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Model, ModelListParams, ModelQueryParams } from '@gngt/core/common';
import { ModelActionTypes, ModelService, State as ModelState } from '@gngt/core/model';
import { Observable } from 'rxjs';
import { ModelDataSourceFilters } from './model-data-source-filters';
export declare class ModelDataSource<T extends Model, S extends ModelState<T> = ModelState<T>, A extends ModelActionTypes = ModelActionTypes, MS extends ModelService<T, S, A> = ModelService<T, S, A>> extends DataSource<T> {
    private _service;
    private _baseParams;
    constructor(_service: MS, _baseParams?: ModelListParams);
    get sort(): MatSort | null;
    set sort(sort: MatSort | null);
    private _sort;
    get filter(): string;
    set filter(filter: string);
    private _filter;
    get baseQueryParams(): Partial<ModelQueryParams> | null;
    set baseQueryParams(params: Partial<ModelQueryParams | null>);
    private _baseQueryParams;
    private _freeTextSearchFields;
    get freeTextSearchFields(): string[];
    set freeTextSearchFields(freeTextSearchFields: string[]);
    get filters(): ModelDataSourceFilters;
    set filters(filters: ModelDataSourceFilters);
    private _filters;
    get paginator(): MatPaginator | null;
    set paginator(paginator: MatPaginator | null);
    private _paginator;
    private _data;
    get data(): T[];
    private _dataModifier;
    set dataModifier(dataModifier: (data: T[]) => Observable<T[]>);
    private _sortParams;
    private _sortSubscription;
    private _paginatorParams;
    private _paginatorSubscription;
    private _dataSubscription;
    private _refreshEvent;
    connect(_: CollectionViewer): Observable<T[]>;
    disconnect(_: CollectionViewer): void;
    refresh(): void;
    private _initData;
    private _updateSort;
    private _updatePaginator;
}
