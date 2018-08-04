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
var menu_service_1 = require("../menu/menu.service");
var SidenavComponent = (function () {
    function SidenavComponent(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.userImage = '../assets/img/users/user.jpg';
        this.settings = this.appSettings.settings;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        this.menuItems = this.menuService.getVerticalMenuItems();
    };
    SidenavComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector(".sidenav-menu-outer");
        if (menu) {
            for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    };
    return SidenavComponent;
}());
SidenavComponent = __decorate([
    core_1.Component({
        selector: 'app-sidenav',
        templateUrl: './sidenav.component.html',
        styleUrls: ['./sidenav.component.scss'],
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [menu_service_1.MenuService]
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings, menu_service_1.MenuService])
], SidenavComponent);
exports.SidenavComponent = SidenavComponent;
//# sourceMappingURL=sidenav.component.js.map