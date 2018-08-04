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
var forms_1 = require("@angular/forms");
var startWith_1 = require("rxjs/operators/startWith");
var map_1 = require("rxjs/operators/map");
var app_settings_1 = require("../../../app.settings");
var AutocompleteComponent = (function () {
    function AutocompleteComponent(appSettings) {
        this.appSettings = appSettings;
        this.myControl = new forms_1.FormControl();
        this.options = [
            'One',
            'Two',
            'Three'
        ];
        this.filteredControl = new forms_1.FormControl();
        this.settings = this.appSettings.settings;
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.filteredControl.valueChanges
            .pipe(startWith_1.startWith(''), map_1.map(function (val) { return _this.filter(val); }));
    };
    AutocompleteComponent.prototype.filter = function (val) {
        return this.options.filter(function (option) { return option.toLowerCase().indexOf(val.toLowerCase()) === 0; });
    };
    return AutocompleteComponent;
}());
AutocompleteComponent = __decorate([
    core_1.Component({
        selector: 'app-autocomplete',
        templateUrl: './autocomplete.component.html'
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings])
], AutocompleteComponent);
exports.AutocompleteComponent = AutocompleteComponent;
//# sourceMappingURL=autocomplete.component.js.map