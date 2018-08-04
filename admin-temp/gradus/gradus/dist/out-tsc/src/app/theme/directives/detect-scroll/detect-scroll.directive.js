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
var DetectScrollDirective = (function () {
    function DetectScrollDirective() {
        this.onScroll = new core_1.EventEmitter();
    }
    DetectScrollDirective.prototype.elementScrolled = function (event) {
        var scrollTop = event.target.scrollTop;
        var emitValue = { originalEvent: event, isWindowEvent: false, scrollTop: scrollTop };
        this.onScroll.emit(emitValue);
    };
    DetectScrollDirective.prototype.windowScrolled = function (event) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var emitValue = { originalEvent: event, isWindowEvent: true, scrollTop: scrollTop };
        this.onScroll.emit(emitValue);
    };
    return DetectScrollDirective;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DetectScrollDirective.prototype, "onScroll", void 0);
__decorate([
    core_1.HostListener('scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DetectScrollDirective.prototype, "elementScrolled", null);
__decorate([
    core_1.HostListener('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DetectScrollDirective.prototype, "windowScrolled", null);
DetectScrollDirective = __decorate([
    core_1.Directive({
        selector: '[detectScroll]'
    })
], DetectScrollDirective);
exports.DetectScrollDirective = DetectScrollDirective;
//# sourceMappingURL=detect-scroll.directive.js.map