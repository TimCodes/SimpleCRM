"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var date_fns_1 = require("date-fns");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var schedule_dialog_component_1 = require("./schedule-dialog/schedule-dialog.component");
var app_settings_1 = require("../../app.settings");
var Subject_1 = require("rxjs/Subject");
var app_animation_1 = require("../../theme/utils/app-animation");
var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var ScheduleComponent = (function () {
    function ScheduleComponent(appSettings, dialog, snackBar) {
        var _this = this;
        this.appSettings = appSettings;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
        this.actions = [{
                label: '<i class="material-icons icon-sm white">edit</i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.openScheduleDialog(event);
                }
            }, {
                label: '<i class="material-icons icon-sm white">close</i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.snackBar.open('Event deleted successfully!', null, {
                        duration: 1500
                    });
                }
            }];
        this.events = [{
                start: date_fns_1.subDays(date_fns_1.startOfDay(new Date()), 1),
                end: date_fns_1.addDays(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions
            }, {
                start: date_fns_1.startOfDay(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            }, {
                start: date_fns_1.subDays(date_fns_1.endOfMonth(new Date()), 3),
                end: date_fns_1.addDays(date_fns_1.endOfMonth(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            }, {
                start: date_fns_1.addHours(date_fns_1.startOfDay(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }];
        this.refresh = new Subject_1.Subject();
        this.settings = this.appSettings.settings;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
    };
    ScheduleComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (date_fns_1.isSameMonth(date, this.viewDate)) {
            if ((date_fns_1.isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    ScheduleComponent.prototype.openScheduleDialog = function (event) {
        var _this = this;
        var dialogRef = this.dialog.open(schedule_dialog_component_1.ScheduleDialogComponent, {
            data: event
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (!result.isEdit) {
                    result.color = colors.blue;
                    result.actions = _this.actions;
                    _this.events.push(result);
                    _this.refresh.next();
                }
                else {
                    //implement edit here
                }
            }
        });
    };
    return ScheduleComponent;
}());
ScheduleComponent = __decorate([
    core_1.Component({
        selector: 'app-schedule',
        templateUrl: './schedule.component.html',
        animations: [app_animation_1.blockTransition],
        host: {
            '[@blockTransition]': ''
        }
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings, typeof (_a = typeof material_1.MatDialog !== "undefined" && material_1.MatDialog) === "function" && _a || Object, typeof (_b = typeof material_2.MatSnackBar !== "undefined" && material_2.MatSnackBar) === "function" && _b || Object])
], ScheduleComponent);
exports.ScheduleComponent = ScheduleComponent;
var _a, _b;
//# sourceMappingURL=schedule.component.js.map