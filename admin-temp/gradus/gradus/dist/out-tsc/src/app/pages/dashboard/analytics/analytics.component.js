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
var dashboard_data_1 = require("../dashboard.data");
var AnalyticsComponent = (function () {
    function AnalyticsComponent() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = false;
        this.xAxisLabel = 'Year';
        this.showYAxisLabel = false;
        this.yAxisLabel = 'Profit';
        this.colorScheme = {
            domain: ['#283593', '#039BE5', '#FF5252']
        };
        this.autoScale = true;
        this.roundDomains = true;
        this.previousWidthOfResizedDiv = 0;
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
        this.analytics = dashboard_data_1.analytics;
    };
    AnalyticsComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    AnalyticsComponent.prototype.ngAfterViewChecked = function () {
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            this.analytics = dashboard_data_1.analytics.slice();
        }
        this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    };
    return AnalyticsComponent;
}());
__decorate([
    core_1.ViewChild('resizedDiv'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], AnalyticsComponent.prototype, "resizedDiv", void 0);
AnalyticsComponent = __decorate([
    core_1.Component({
        selector: 'app-analytics',
        templateUrl: './analytics.component.html'
    }),
    __metadata("design:paramtypes", [])
], AnalyticsComponent);
exports.AnalyticsComponent = AnalyticsComponent;
var _a;
//# sourceMappingURL=analytics.component.js.map