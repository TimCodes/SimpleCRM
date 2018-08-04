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
var app_settings_1 = require("../../../app.settings");
var DatepickerComponent = (function () {
    function DatepickerComponent(appSettings) {
        this.appSettings = appSettings;
        //Datepicker start date
        this.startDate = new Date(1990, 0, 1);
        //Datepicker with min & max validation
        this.minDate = new Date(2010, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
        //Datepicker with filter validation
        this.myFilter = function (d) {
            var day = d.getDay();
            return day !== 0 && day !== 6;
        };
        //Datepicker input and change events
        this.events = [];
        this.settings = this.appSettings.settings;
    }
    DatepickerComponent.prototype.addEvent = function (type, event) {
        this.events.push(type + ": " + event.value);
    };
    return DatepickerComponent;
}());
DatepickerComponent = __decorate([
    core_1.Component({
        selector: 'app-datepicker',
        templateUrl: './datepicker.component.html',
        styleUrls: ['./datepicker.component.scss']
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings])
], DatepickerComponent);
exports.DatepickerComponent = DatepickerComponent;
//# sourceMappingURL=datepicker.component.js.map