"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_settings_model_1 = require("./app.settings.model");
var AppSettings = (function () {
    function AppSettings() {
        this.settings = new app_settings_model_1.Settings('Gradus', //theme name
        true, //loadingSpinner
        true, //fixedHeader
        true, //sidenavIsOpened
        true, //sidenavIsPinned  
        true, //sidenavUserBlock 
        'vertical', //horizontal , vertical
        'default', //default, compact, mini
        'indigo-light', //indigo-light, teal-light, red-light, blue-dark, green-dark, pink-dark
        false // true = rtl, false = ltr
        );
    }
    return AppSettings;
}());
AppSettings = __decorate([
    core_1.Injectable()
], AppSettings);
exports.AppSettings = AppSettings;
//# sourceMappingURL=app.settings.js.map