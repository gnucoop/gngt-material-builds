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
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/collections'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@gngt/material/model', ['exports', '@angular/core', '@angular/cdk/collections', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.dewco = global.dewco || {}, global.dewco.material = global.dewco.material || {}, global.dewco.material.model = {}), global.ng.core, global.ng.cdk.collections, global.rxjs, global.rxjs.operators));
}(this, function (exports, core, collections, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T, S, A, MS
     */
    var   /**
     * @template T, S, A, MS
     */
    ModelDataSource = /** @class */ (function (_super) {
        __extends(ModelDataSource, _super);
        function ModelDataSource(_service, _baseParams) {
            if (_baseParams === void 0) { _baseParams = {}; }
            var _this = _super.call(this) || this;
            _this._service = _service;
            _this._baseParams = _baseParams;
            _this._sort = null;
            _this._filter = new rxjs.BehaviorSubject('');
            _this._filters = new rxjs.BehaviorSubject({});
            _this._paginator = null;
            _this._data = new rxjs.BehaviorSubject([]);
            _this._sortParams = new rxjs.BehaviorSubject(null);
            _this._sortSubscription = rxjs.Subscription.EMPTY;
            _this._paginatorParams = new rxjs.BehaviorSubject(null);
            _this._paginatorSubscription = rxjs.Subscription.EMPTY;
            _this._dataSubscription = rxjs.Subscription.EMPTY;
            _this._refreshEvent = new core.EventEmitter();
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
        Object.defineProperty(ModelDataSource.prototype, "filters", {
            get: /**
             * @return {?}
             */
            function () {
                return this._filters.value;
            },
            set: /**
             * @param {?} filters
             * @return {?}
             */
            function (filters) {
                this._filters.next(filters);
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
            function () { return this._data.value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModelDataSource.prototype, "dataModifier", {
            set: /**
             * @param {?} dataModifier
             * @return {?}
             */
            function (dataModifier) {
                this._dataModifier = dataModifier;
            },
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
            this._initData();
            return this._data.asObservable();
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
            this._sortParams.complete();
            this._paginatorParams.complete();
            this._filters.complete();
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
            this._dataSubscription = rxjs.combineLatest(this._paginatorParams, this._sortParams, this._filter, this._filters, this._refreshEvent).pipe(operators.startWith([null, null, null, null]), operators.debounceTime(10), operators.switchMap((/**
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
                var filters = p[3];
                /** @type {?} */
                var params = __assign({}, _this._baseParams, { selector: __assign({}, filters) });
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
                return _this._service.query(params);
            })), operators.tap((/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                /** @type {?} */
                var paginator = _this.paginator;
                if (paginator != null) {
                    paginator.length = o && o.count ? o.count : 0;
                }
            })), operators.map((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return o && o.results ? o.results : []; })), operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (_this._dataModifier != null) {
                    return _this._dataModifier(data);
                }
                return rxjs.of(data);
            }))).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this._data.next(data);
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
                rxjs.Subscription.EMPTY;
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
                rxjs.Subscription.EMPTY;
        };
        return ModelDataSource;
    }(collections.DataSource));

    exports.ModelDataSource = ModelDataSource;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-model.umd.js.map
