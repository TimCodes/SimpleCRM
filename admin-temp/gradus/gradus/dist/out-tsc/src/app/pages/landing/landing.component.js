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
var app_settings_1 = require("../../app.settings");
var LandingComponent = (function () {
    function LandingComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.settings.rtl = false;
    };
    LandingComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    LandingComponent.prototype.scrollToDemos = function () {
        setTimeout(function () { window.scrollTo(0, 520); });
    };
    LandingComponent.prototype.changeLayout = function (menu, menuType, isRtl) {
        this.settings.menu = menu;
        this.settings.menuType = menuType;
        this.settings.rtl = isRtl;
        this.settings.theme = 'indigo-light';
    };
    LandingComponent.prototype.changeTheme = function (theme) {
        this.settings.theme = theme;
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    core_1.Component({
        selector: 'app-landing',
        templateUrl: './landing.component.html',
        styleUrls: ['./landing.component.scss']
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings])
], LandingComponent);
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=landing.component.js.map