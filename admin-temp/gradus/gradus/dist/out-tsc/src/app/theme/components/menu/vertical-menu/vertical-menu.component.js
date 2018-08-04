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
var router_1 = require("@angular/router");
var app_settings_1 = require("../../../../app.settings");
var menu_service_1 = require("../menu.service");
var VerticalMenuComponent = (function () {
    function VerticalMenuComponent(appSettings, menuService, router) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    VerticalMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentMenu = this.menuItems.filter(function (item) { return item.parentId == _this.menuParentId; });
    };
    VerticalMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                if (_this.settings.fixedHeader) {
                    var mainContent = document.getElementById('main-content');
                    if (mainContent) {
                        mainContent.scrollTop = 0;
                    }
                }
                else {
                    document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
                }
            }
        });
    };
    VerticalMenuComponent.prototype.onClick = function (menuId) {
        this.menuService.toggleMenuItem(menuId);
        this.menuService.closeOtherSubMenus(this.menuItems, menuId);
    };
    return VerticalMenuComponent;
}());
__decorate([
    core_1.Input('menuItems'),
    __metadata("design:type", Object)
], VerticalMenuComponent.prototype, "menuItems", void 0);
__decorate([
    core_1.Input('menuParentId'),
    __metadata("design:type", Object)
], VerticalMenuComponent.prototype, "menuParentId", void 0);
VerticalMenuComponent = __decorate([
    core_1.Component({
        selector: 'app-vertical-menu',
        templateUrl: './vertical-menu.component.html',
        styleUrls: ['./vertical-menu.component.scss'],
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [menu_service_1.MenuService]
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings, menu_service_1.MenuService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], VerticalMenuComponent);
exports.VerticalMenuComponent = VerticalMenuComponent;
var _a;
//# sourceMappingURL=vertical-menu.component.js.map