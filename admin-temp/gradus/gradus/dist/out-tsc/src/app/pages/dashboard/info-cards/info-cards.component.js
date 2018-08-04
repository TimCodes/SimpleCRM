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
var dashboard_data_1 = require("../dashboard.data");
var InfoCardsComponent = (function () {
    function InfoCardsComponent(appSettings) {
        this.appSettings = appSettings;
        this.colorScheme = {
            domain: ['#999']
        };
        this.autoScale = true;
        this.previousWidthOfResizedDiv = 0;
        this.settings = this.appSettings.settings;
    }
    InfoCardsComponent.prototype.ngOnInit = function () {
        this.orders = dashboard_data_1.orders;
        this.products = dashboard_data_1.products;
        this.customers = dashboard_data_1.customers;
        this.refunds = dashboard_data_1.refunds;
        this.orders = this.addRandomValue('orders');
        this.customers = this.addRandomValue('customers');
    };
    InfoCardsComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    InfoCardsComponent.prototype.addRandomValue = function (param) {
        switch (param) {
            case 'orders':
                for (var i = 1; i < 30; i++) {
                    this.orders[0].series.push({ "name": 1980 + i, "value": Math.ceil(Math.random() * 1000000) });
                }
                return this.orders;
            case 'customers':
                for (var i = 1; i < 15; i++) {
                    this.customers[0].series.push({ "name": 2000 + i, "value": Math.ceil(Math.random() * 1000000) });
                }
                return this.customers;
            default:
                return this.orders;
        }
    };
    InfoCardsComponent.prototype.ngOnDestroy = function () {
        this.orders[0].series.length = 0;
        this.customers[0].series.length = 0;
    };
    InfoCardsComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            setTimeout(function () { return _this.orders = dashboard_data_1.orders.slice(); });
            setTimeout(function () { return _this.products = dashboard_data_1.products.slice(); });
            setTimeout(function () { return _this.customers = dashboard_data_1.customers.slice(); });
            setTimeout(function () { return _this.refunds = dashboard_data_1.refunds.slice(); });
        }
        this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    };
    return InfoCardsComponent;
}());
__decorate([
    core_1.ViewChild('resizedDiv'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], InfoCardsComponent.prototype, "resizedDiv", void 0);
InfoCardsComponent = __decorate([
    core_1.Component({
        selector: 'app-info-cards',
        templateUrl: './info-cards.component.html',
        styleUrls: ['./info-cards.component.scss']
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings])
], InfoCardsComponent);
exports.InfoCardsComponent = InfoCardsComponent;
var _a;
//# sourceMappingURL=info-cards.component.js.map