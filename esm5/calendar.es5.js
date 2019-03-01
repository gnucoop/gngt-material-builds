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
import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { __extends } from 'tslib';
import { Calendar } from '@gngt/core/calendar';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarComponent = /** @class */ (function (_super) {
    __extends(CalendarComponent, _super);
    function CalendarComponent(cdr) {
        return _super.call(this, cdr) || this;
    }
    CalendarComponent.decorators = [
        { type: Component, args: [{selector: 'gngt-calendar',
                    template: "<div class=\"gngt-calendar-header\"><button (click)=\"prevPage()\" mat-mini-fab>&#8592;</button> <button (click)=\"previousViewMode()\" mat-button class=\"gngt-calendar-header-title\">{{ viewHeader | translate }}</button> <button (click)=\"nextPage()\" mat-mini-fab>&#8594;</button></div><div class=\"gngt-calendar-row\" *ngIf=\"viewMode == 'month'\"><div *ngFor=\"let weekDay of weekDays\">{{ weekDay | translate }}</div></div><div class=\"gngt-calendar-row\" *ngFor=\"let row of calendarRows\"><button mat-raised-button [class.gngt-calendar-partial-selection]=\"entry.selected == 'partial'\" [color]=\"entry.selected != 'none' ? 'warn' : null\" (click)=\"selectEntry(entry)\" *ngFor=\"let entry of row\">{{ entry }}</button></div>",
                    styles: ["gngt-calendar{display:flex;box-sizing:border-box;width:100%;height:320px;flex-direction:column}gngt-calendar .gngt-calendar-header,gngt-calendar .gngt-calendar-row{display:flex;box-sizing:border-box;width:100%;flex-direction:row}gngt-calendar .gngt-calendar-header{height:40px}gngt-calendar .gngt-calendar-header .gngt-calendar-header-title{flex:1;margin:0 10px}gngt-calendar .gngt-calendar-row{flex:1}gngt-calendar .gngt-calendar-row button,gngt-calendar .gngt-calendar-row div{flex:1;margin:3px}gngt-calendar .gngt-calendar-row div{line-height:40px;text-align:center}gngt-calendar .gngt-calendar-row .gngt-calendar-partial-selection ::before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(255,255,255,.5)}"],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    inputs: [
                        'viewDate',
                        'disabled',
                        'dateOnlyForDay',
                        'viewMode',
                        'selectionMode',
                        'startOfWeekDay',
                        'isoMode',
                        'minDate',
                        'maxDate',
                        'selectedPeriod',
                    ],
                    outputs: [
                        'change'
                    ]
                },] },
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    return CalendarComponent;
}(Calendar));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        TranslateModule,
                        MatButtonModule,
                    ],
                    declarations: [
                        CalendarComponent,
                    ],
                    exports: [
                        CalendarComponent,
                    ],
                },] },
    ];
    return CalendarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CalendarModule, CalendarComponent as ɵa };
//# sourceMappingURL=calendar.es5.js.map
