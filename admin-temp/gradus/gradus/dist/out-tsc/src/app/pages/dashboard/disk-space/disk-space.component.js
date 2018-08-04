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
var DiskSpaceComponent = (function () {
    function DiskSpaceComponent() {
        this.showLegend = false;
        this.gradient = true;
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B']
        };
        this.showLabels = true;
        this.explodeSlices = true;
        this.doughnut = false;
        this.previousWidthOfResizedDiv = 0;
    }
    DiskSpaceComponent.prototype.ngOnInit = function () {
        this.data = dashboard_data_1.disk_space;
    };
    DiskSpaceComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    DiskSpaceComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
            setTimeout(function () { return _this.data = dashboard_data_1.disk_space.slice(); });
        }
        this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
    };
    return DiskSpaceComponent;
}());
__decorate([
    core_1.ViewChild('resizedDiv'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], DiskSpaceComponent.prototype, "resizedDiv", void 0);
DiskSpaceComponent = __decorate([
    core_1.Component({
        selector: 'app-disk-space',
        templateUrl: './disk-space.component.html'
    }),
    __metadata("design:paramtypes", [])
], DiskSpaceComponent);
exports.DiskSpaceComponent = DiskSpaceComponent;
var _a;
//# sourceMappingURL=disk-space.component.js.map