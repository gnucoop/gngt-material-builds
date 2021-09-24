import { DataSource } from '@angular/cdk/collections';
import { EventEmitter } from '@angular/core';
import { mergeQueryParams } from '@gngt/core/common';
import { BehaviorSubject, Subscription, combineLatest, of } from 'rxjs';
import { startWith, debounceTime, switchMap, tap, map } from 'rxjs/operators';

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
class ModelDataSource extends DataSource {
    constructor(_service, _baseParams = {}) {
        super();
        this._service = _service;
        this._baseParams = _baseParams;
        this._sort = null;
        this._filter = new BehaviorSubject('');
        this._baseQueryParams = new BehaviorSubject(null);
        this._freeTextSearchFields = new BehaviorSubject([]);
        this._filters = new BehaviorSubject({});
        this._paginator = null;
        this._data = new BehaviorSubject([]);
        this._sortParams = new BehaviorSubject(null);
        this._sortSubscription = Subscription.EMPTY;
        this._paginatorParams = new BehaviorSubject(null);
        this._paginatorSubscription = Subscription.EMPTY;
        this._dataSubscription = Subscription.EMPTY;
        this._refreshEvent = new EventEmitter();
    }
    get sort() {
        return this._sort;
    }
    set sort(sort) {
        this._sort = sort;
        this._updateSort();
    }
    get filter() {
        return this._filter.value;
    }
    set filter(filter) {
        this._filter.next(filter);
    }
    get baseQueryParams() {
        return this._baseQueryParams.value;
    }
    set baseQueryParams(params) {
        this._baseQueryParams.next(params);
    }
    get freeTextSearchFields() {
        return this._freeTextSearchFields.value;
    }
    set freeTextSearchFields(freeTextSearchFields) {
        this._freeTextSearchFields.next([...freeTextSearchFields]);
    }
    get filters() {
        return this._filters.value;
    }
    set filters(filters) {
        this._filters.next(filters);
    }
    get paginator() {
        return this._paginator;
    }
    set paginator(paginator) {
        this._paginator = paginator;
        this._updatePaginator();
    }
    get data() {
        return this._data.value;
    }
    set dataModifier(dataModifier) {
        this._dataModifier = dataModifier;
    }
    connect(_) {
        this._initData();
        return this._data;
    }
    disconnect(_) {
        this._dataSubscription.unsubscribe();
        this._sortSubscription.unsubscribe();
        this._paginatorSubscription.unsubscribe();
        this._sortParams.complete();
        this._paginatorParams.complete();
        this._filters.complete();
    }
    refresh() {
        this._refreshEvent.next();
    }
    _initData() {
        const baseStream = combineLatest(this._paginatorParams, this._sortParams, this._filter, this._freeTextSearchFields, this._filters, this._refreshEvent, this._baseQueryParams);
        const startValue = [null, null, '', [], {}, undefined, null];
        this._dataSubscription =
            baseStream
                .pipe(startWith(startValue), debounceTime(10), switchMap(p => {
                const pagination = p[0];
                const sort = p[1];
                const filter = p[2];
                const freeTextSearchFields = p[3];
                const filters = p[4];
                const freeTextSel = {};
                const filterWord = (filter || '').trim();
                const baseParams = p[6];
                if (filter != null && freeTextSearchFields != null && filterWord.length > 0 &&
                    freeTextSearchFields.length > 0) {
                    freeTextSel['$or'] = freeTextSearchFields.map(key => {
                        const keySel = {};
                        keySel[key] = { '$regex': filterWord };
                        return keySel;
                    });
                }
                const params = Object.assign(Object.assign({}, this._baseParams), { selector: Object.assign(Object.assign({}, filters), freeTextSel) });
                if (pagination != null) {
                    const pag = pagination;
                    params.limit = pag.pageSize;
                    params.start = pag.pageIndex * pag.pageSize;
                }
                if (sort != null) {
                    const so = sort;
                    const direction = so.direction === '' ? 'asc' : so.direction;
                    params.sort = { [so.active]: direction };
                }
                return this._service.query(mergeQueryParams(params, baseParams || {}));
            }), tap(o => {
                const list = o;
                const paginator = this.paginator;
                if (paginator != null) {
                    paginator.length = list && list.count ? list.count : 0;
                }
            }), map(o => {
                const list = o;
                return list && list.results ? list.results : [];
            }), switchMap(data => {
                if (this._dataModifier != null) {
                    return this._dataModifier(data);
                }
                return of(data);
            }))
                .subscribe(data => {
                this._data.next(data);
            });
        this._refreshEvent.next();
    }
    _updateSort() {
        this._sortSubscription.unsubscribe();
        this._sortSubscription =
            this._sort != null ? this._sort.sortChange.subscribe(this._sortParams) : Subscription.EMPTY;
    }
    _updatePaginator() {
        this._paginatorSubscription.unsubscribe();
        this._paginatorSubscription = this._paginator != null ?
            this._paginator.page.subscribe(this._paginatorParams) :
            Subscription.EMPTY;
    }
}

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

export { ModelDataSource };
//# sourceMappingURL=model.js.map
