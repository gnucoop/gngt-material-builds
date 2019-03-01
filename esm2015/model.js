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
import { EventEmitter } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Subscription, combineLatest } from 'rxjs';
import { tap, map, startWith, debounceTime } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, S, A1, A2, A3, A4, A5, A6, A7, MS
 */
class ModelDataSource extends DataSource {
    /**
     * @param {?} _service
     * @param {?=} _baseParams
     */
    constructor(_service, _baseParams = {}) {
        super();
        this._service = _service;
        this._baseParams = _baseParams;
        this._sort = null;
        this._filter = new BehaviorSubject('');
        this._paginator = null;
        this._data = [];
        this._dataSubscription = Subscription.EMPTY;
        this._sortParams = new BehaviorSubject(null);
        this._sortSubscription = Subscription.EMPTY;
        this._paginatorParams = new BehaviorSubject(null);
        this._paginatorSubscription = Subscription.EMPTY;
        this._refreshEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get sort() { return this._sort; }
    /**
     * @param {?} sort
     * @return {?}
     */
    set sort(sort) {
        this._sort = sort;
        this._updateSort();
    }
    /**
     * @return {?}
     */
    get filter() { return this._filter.value; }
    /**
     * @param {?} filter
     * @return {?}
     */
    set filter(filter) {
        this._filter.next(filter);
    }
    /**
     * @return {?}
     */
    get paginator() { return this._paginator; }
    /**
     * @param {?} paginator
     * @return {?}
     */
    set paginator(paginator) {
        this._paginator = paginator;
        this._updatePaginator();
    }
    /**
     * @return {?}
     */
    get data() { return this._data; }
    /**
     * @param {?} _
     * @return {?}
     */
    connect(_) {
        this._initData();
        return this._service.getListObjects().pipe(tap((/**
         * @param {?} o
         * @return {?}
         */
        o => {
            /** @type {?} */
            const paginator = this.paginator;
            if (paginator != null) {
                paginator.length = o && o.count ? o.count : 0;
            }
        })), map((/**
         * @param {?} o
         * @return {?}
         */
        o => {
            this._data = o && o.results ? o.results : [];
            return this._data;
        })));
    }
    /**
     * @param {?} _
     * @return {?}
     */
    disconnect(_) {
        this._dataSubscription.unsubscribe();
        this._sortSubscription.unsubscribe();
        this._paginatorSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    refresh() {
        this._refreshEvent.next();
    }
    /**
     * @private
     * @return {?}
     */
    _initData() {
        this._dataSubscription.unsubscribe();
        this._dataSubscription = combineLatest(this._paginatorParams, this._sortParams, this._filter, this._refreshEvent).pipe(startWith([null, null, null, null]), debounceTime(10)).subscribe((/**
         * @param {?} p
         * @return {?}
         */
        p => {
            /** @type {?} */
            const pagination = p[0];
            /** @type {?} */
            const sort = p[1];
            /** @type {?} */
            const params = Object.assign({}, this._baseParams);
            if (pagination != null) {
                /** @type {?} */
                const pag = (/** @type {?} */ (pagination));
                params.limit = pag.pageSize;
                params.start = pag.pageIndex * pag.pageSize;
            }
            if (sort != null) {
                /** @type {?} */
                const so = (/** @type {?} */ (sort));
                /** @type {?} */
                const direction = so.direction === '' ? 'asc' : so.direction;
                params.sort = { [so.active]: direction };
            }
            this._service.list(params);
        }));
        this._refreshEvent.next();
    }
    /**
     * @private
     * @return {?}
     */
    _updateSort() {
        this._sortSubscription.unsubscribe();
        this._sortSubscription = this._sort != null ?
            this._sort.sortChange.subscribe(this._sortParams) :
            Subscription.EMPTY;
    }
    /**
     * @private
     * @return {?}
     */
    _updatePaginator() {
        this._paginatorSubscription.unsubscribe();
        this._paginatorSubscription = this._paginator != null ?
            this._paginator.page.subscribe(this._paginatorParams) :
            Subscription.EMPTY;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ModelDataSource };
//# sourceMappingURL=model.js.map
