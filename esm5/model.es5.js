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
import { __extends, __assign } from 'tslib';
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
var  /**
 * @template T, S, A1, A2, A3, A4, A5, A6, A7, MS
 */
ModelDataSource = /** @class */ (function (_super) {
    __extends(ModelDataSource, _super);
    function ModelDataSource(_service, _baseParams) {
        if (_baseParams === void 0) { _baseParams = {}; }
        var _this = _super.call(this) || this;
        _this._service = _service;
        _this._baseParams = _baseParams;
        _this._sort = null;
        _this._filter = new BehaviorSubject('');
        _this._paginator = null;
        _this._data = [];
        _this._dataSubscription = Subscription.EMPTY;
        _this._sortParams = new BehaviorSubject(null);
        _this._sortSubscription = Subscription.EMPTY;
        _this._paginatorParams = new BehaviorSubject(null);
        _this._paginatorSubscription = Subscription.EMPTY;
        _this._refreshEvent = new EventEmitter();
        return _this;
    }
    Object.defineProperty(ModelDataSource.prototype, "sort", {
        get: /**
         * @return {?}
         */
        function () { return this._sort; },
        set: /**
         * @param {?} sort
         * @return {?}
         */
        function (sort) {
            this._sort = sort;
            this._updateSort();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelDataSource.prototype, "filter", {
        get: /**
         * @return {?}
         */
        function () { return this._filter.value; },
        set: /**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            this._filter.next(filter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelDataSource.prototype, "paginator", {
        get: /**
         * @return {?}
         */
        function () { return this._paginator; },
        set: /**
         * @param {?} paginator
         * @return {?}
         */
        function (paginator) {
            this._paginator = paginator;
            this._updatePaginator();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelDataSource.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () { return this._data; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} _
     * @return {?}
     */
    ModelDataSource.prototype.connect = /**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        var _this = this;
        this._initData();
        return this._service.getListObjects().pipe(tap((/**
         * @param {?} o
         * @return {?}
         */
        function (o) {
            /** @type {?} */
            var paginator = _this.paginator;
            if (paginator != null) {
                paginator.length = o && o.count ? o.count : 0;
            }
        })), map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) {
            _this._data = o && o.results ? o.results : [];
            return _this._data;
        })));
    };
    /**
     * @param {?} _
     * @return {?}
     */
    ModelDataSource.prototype.disconnect = /**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        this._dataSubscription.unsubscribe();
        this._sortSubscription.unsubscribe();
        this._paginatorSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    ModelDataSource.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this._refreshEvent.next();
    };
    /**
     * @private
     * @return {?}
     */
    ModelDataSource.prototype._initData = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._dataSubscription.unsubscribe();
        this._dataSubscription = combineLatest(this._paginatorParams, this._sortParams, this._filter, this._refreshEvent).pipe(startWith([null, null, null, null]), debounceTime(10)).subscribe((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            var _a;
            /** @type {?} */
            var pagination = p[0];
            /** @type {?} */
            var sort = p[1];
            /** @type {?} */
            var params = __assign({}, _this._baseParams);
            if (pagination != null) {
                /** @type {?} */
                var pag = (/** @type {?} */ (pagination));
                params.limit = pag.pageSize;
                params.start = pag.pageIndex * pag.pageSize;
            }
            if (sort != null) {
                /** @type {?} */
                var so = (/** @type {?} */ (sort));
                /** @type {?} */
                var direction = so.direction === '' ? 'asc' : so.direction;
                params.sort = (_a = {}, _a[so.active] = direction, _a);
            }
            _this._service.list(params);
        }));
        this._refreshEvent.next();
    };
    /**
     * @private
     * @return {?}
     */
    ModelDataSource.prototype._updateSort = /**
     * @private
     * @return {?}
     */
    function () {
        this._sortSubscription.unsubscribe();
        this._sortSubscription = this._sort != null ?
            this._sort.sortChange.subscribe(this._sortParams) :
            Subscription.EMPTY;
    };
    /**
     * @private
     * @return {?}
     */
    ModelDataSource.prototype._updatePaginator = /**
     * @private
     * @return {?}
     */
    function () {
        this._paginatorSubscription.unsubscribe();
        this._paginatorSubscription = this._paginator != null ?
            this._paginator.page.subscribe(this._paginatorParams) :
            Subscription.EMPTY;
    };
    return ModelDataSource;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ModelDataSource };
//# sourceMappingURL=model.es5.js.map
