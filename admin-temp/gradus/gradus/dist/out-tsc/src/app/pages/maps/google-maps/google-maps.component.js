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
var GoogleMapsComponent = (function () {
    function GoogleMapsComponent(appSettings) {
        this.appSettings = appSettings;
        this.lat = 45.421530;
        this.lng = -75.697193;
        this.zoom = 7;
        this.settings = this.appSettings.settings;
    }
    return GoogleMapsComponent;
}());
GoogleMapsComponent = __decorate([
    core_1.Component({
        selector: 'app-google-maps',
        templateUrl: './google-maps.component.html'
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings])
], GoogleMapsComponent);
exports.GoogleMapsComponent = GoogleMapsComponent;
//# sourceMappingURL=google-maps.component.js.map