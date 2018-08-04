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
var FullScreenComponent = (function () {
    function FullScreenComponent() {
        this.toggle = false;
    }
    FullScreenComponent.prototype.requestFullscreen = function (elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    FullScreenComponent.prototype.exitFullscreen = function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    FullScreenComponent.prototype.getFullscreen = function () {
        if (this.expand) {
            this.requestFullscreen(document.documentElement);
        }
        if (this.compress) {
            this.exitFullscreen();
        }
    };
    FullScreenComponent.prototype.onFullScreenChange = function () {
        var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement;
        if (fullscreenElement != null) {
            this.toggle = true;
        }
        else {
            this.toggle = false;
        }
    };
    return FullScreenComponent;
}());
__decorate([
    core_1.ViewChild('expand'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], FullScreenComponent.prototype, "expand", void 0);
__decorate([
    core_1.ViewChild('compress'),
    __metadata("design:type", typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object)
], FullScreenComponent.prototype, "compress", void 0);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FullScreenComponent.prototype, "getFullscreen", null);
__decorate([
    core_1.HostListener('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FullScreenComponent.prototype, "onFullScreenChange", null);
FullScreenComponent = __decorate([
    core_1.Component({
        selector: 'app-fullscreen',
        encapsulation: core_1.ViewEncapsulation.None,
        template: "\n    <button mat-icon-button class=\"full-screen\">\n        <mat-icon *ngIf=\"!toggle\" #expand>fullscreen</mat-icon>\n        <mat-icon *ngIf=\"toggle\" #compress>fullscreen_exit</mat-icon>\n    </button> \n  "
    })
], FullScreenComponent);
exports.FullScreenComponent = FullScreenComponent;
var _a, _b;
//# sourceMappingURL=fullscreen.component.js.map