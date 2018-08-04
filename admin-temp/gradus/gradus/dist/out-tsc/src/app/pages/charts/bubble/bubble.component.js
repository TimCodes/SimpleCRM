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
var BubbleComponent = (function () {
    function BubbleComponent(appSettings) {
        this.appSettings = appSettings;
        this.legendTitle = 'Legend';
        this.showLegend = true;
        this.tooltipDisabled = false;
        this.showGridLines = true;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.schemeType = 'ordinal';
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Census Date';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Life expectancy [years]';
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.autoScale = true;
        this.settings = this.appSettings.settings;
        Object.assign(this, { bubble: charts_data_1.bubble });
    }
    BubbleComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    return BubbleComponent;
}());
BubbleComponent = __decorate([
    core_1.Component({
        selector: 'app-bubble',
        templateUrl: './bubble.component.html'
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings])
], BubbleComponent);
exports.BubbleComponent = BubbleComponent;
//# sourceMappingURL=bubble.component.js.map