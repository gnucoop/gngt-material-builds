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
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define('@gngt/material', ['exports', '@angular/core'], factory) :
	(global = global || self, factory((global.dewco = global.dewco || {}, global.dewco.material = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

	/**
	 * @fileoverview added by tsickle
	 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */
	/**
	 * Current version of Gngt.
	 * @type {?}
	 */
	var VERSION = new core.Version('7.0.0-beta.1-e6f1ae7');

	exports.VERSION = VERSION;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material.umd.js.map
