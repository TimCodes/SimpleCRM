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
var charts_data_1 = require("../charts.data");
var app_settings_1 = require("../../../app.settings");
var PieComponent = (function () {
    function PieComponent(appSettings) {
        this.appSettings = appSettings;
        this.showLegend = true;
        this.gradient = true;
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.settings = this.appSettings.settings;
        Object.assign(this, { single: charts_data_1.single, multi: charts_data_1.multi });
    }
    PieComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    return PieComponent;
}());
PieComponent = __decorate([
    core_1.Component({
        selector: 'app-pie',
        templateUrl: './pie.component.html'
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings])
], PieComponent);
exports.PieComponent = PieComponent;
//# sourceMappingURL=pie.component.js.map