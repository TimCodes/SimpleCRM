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
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var app_settings_1 = require("../../../app.settings");
var NgxTableComponent = (function () {
    function NgxTableComponent(appSettings) {
        var _this = this;
        this.appSettings = appSettings;
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.selected = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];
        this.settings = this.appSettings.settings;
        this.fetch(function (data) {
            _this.temp = data.slice();
            _this.rows = data;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
    }
    NgxTableComponent.prototype.fetch = function (data) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/company.json');
        req.onload = function () {
            data(JSON.parse(req.response));
        };
        req.send();
    };
    NgxTableComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows = temp;
        this.table.offset = 0;
    };
    NgxTableComponent.prototype.updateValue = function (event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = this.rows.slice();
    };
    NgxTableComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log('Select Event', selected, this.selected);
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    NgxTableComponent.prototype.onActivate = function (event) {
        console.log('Activate Event', event);
    };
    return NgxTableComponent;
}());
__decorate([
    core_1.ViewChild(ngx_datatable_1.DatatableComponent),
    __metadata("design:type", typeof (_a = typeof ngx_datatable_1.DatatableComponent !== "undefined" && ngx_datatable_1.DatatableComponent) === "function" && _a || Object)
], NgxTableComponent.prototype, "table", void 0);
NgxTableComponent = __decorate([
    core_1.Component({
        selector: 'app-ngx-table',
        templateUrl: './ngx-table.component.html'
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings])
], NgxTableComponent);
exports.NgxTableComponent = NgxTableComponent;
var _a;
//# sourceMappingURL=ngx-table.component.js.map