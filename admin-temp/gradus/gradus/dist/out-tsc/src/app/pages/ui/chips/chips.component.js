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
var keycodes_1 = require("@angular/cdk/keycodes");
var app_settings_1 = require("../../../app.settings");
var COMMA = 188;
var ChipsComponent = (function () {
    function ChipsComponent(appSettings) {
        this.appSettings = appSettings;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [keycodes_1.ENTER, COMMA];
        this.fruits = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' }
        ];
        this.settings = this.appSettings.settings;
    }
    ChipsComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        if (input) {
            input.value = '';
        }
    };
    ChipsComponent.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    return ChipsComponent;
}());
ChipsComponent = __decorate([
    core_1.Component({
        selector: 'app-chips',
        templateUrl: './chips.component.html',
        styleUrls: ['./chips.component.scss']
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings])
], ChipsComponent);
exports.ChipsComponent = ChipsComponent;
//# sourceMappingURL=chips.component.js.map