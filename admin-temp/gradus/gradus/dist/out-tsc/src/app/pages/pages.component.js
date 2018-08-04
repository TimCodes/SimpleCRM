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
var app_settings_1 = require("../app.settings");
var menu_service_1 = require("../theme/components/menu/menu.service");
var PagesComponent = (function () {
    function PagesComponent(appSettings, router, menuService) {
        this.appSettings = appSettings;
        this.router = router;
        this.menuService = menuService;
        this.menus = ['vertical', 'horizontal'];
        this.menuTypes = ['default', 'compact', 'mini'];
        this.isStickyMenu = false;
        this.lastScrollTop = 0;
        this.showBackToTop = false;
        this.toggleSearchBar = false;
        this.settings = this.appSettings.settings;
    }
    PagesComponent.prototype.ngOnInit = function () {
        if (window.innerWidth <= 768) {
            this.settings.menu = 'vertical';
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
        }
        this.menuOption = this.settings.menu;
        this.menuTypeOption = this.settings.menuType;
        this.defaultMenu = this.settings.menu;
    };
    PagesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.settings.loadingSpinner = false; }, 300);
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                if (!_this.settings.sidenavIsPinned) {
                    _this.sidenav.close();
                }
                if (window.innerWidth <= 768) {
                    _this.sidenav.close();
                }
            }
        });
        if (this.settings.menu == "vertical")
            this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
    };
    PagesComponent.prototype.chooseMenu = function () {
        this.settings.menu = this.menuOption;
        this.defaultMenu = this.menuOption;
        this.router.navigate(['/']);
    };
    PagesComponent.prototype.chooseMenuType = function () {
        this.settings.menuType = this.menuTypeOption;
    };
    PagesComponent.prototype.changeTheme = function (theme) {
        this.settings.theme = theme;
    };
    PagesComponent.prototype.toggleSidenav = function () {
        this.sidenav.toggle();
    };
    PagesComponent.prototype.onPsScrollY = function (event) {
        this.scrolledContent = event.target;
        (this.scrolledContent.scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;
        if (this.settings.menu == 'horizontal') {
            if (this.settings.fixedHeader) {
                var currentScrollTop = (this.scrolledContent.scrollTop > 56) ? this.scrolledContent.scrollTop : 0;
                (currentScrollTop > this.lastScrollTop) ? this.isStickyMenu = true : this.isStickyMenu = false;
                this.lastScrollTop = currentScrollTop;
            }
            else {
                (this.scrolledContent.scrollTop > 56) ? this.isStickyMenu = true : this.isStickyMenu = false;
            }
        }
    };
    PagesComponent.prototype.scrollToTop = function () {
        var _this = this;
        var scrollDuration = 200;
        var scrollStep = -this.scrolledContent.scrollTop / (scrollDuration / 20);
        var scrollInterval = setInterval(function () {
            if (_this.scrolledContent.scrollTop != 0) {
                _this.scrolledContent.scrollBy(0, scrollStep);
            }
            else {
                clearInterval(scrollInterval);
            }
        }, 10);
        if (window.innerWidth <= 768) {
            this.scrolledContent.scrollTop = 0;
        }
    };
    PagesComponent.prototype.onWindowResize = function () {
        if (window.innerWidth <= 768) {
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
            this.settings.menu = 'vertical';
        }
        else {
            (this.defaultMenu == 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical';
            this.settings.sidenavIsOpened = true;
            this.settings.sidenavIsPinned = true;
        }
    };
    PagesComponent.prototype.closeSubMenus = function () {
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
    return PagesComponent;
}());
__decorate([
    core_1.ViewChild('sidenav'),
    __metadata("design:type", Object)
], PagesComponent.prototype, "sidenav", void 0);
__decorate([
    core_1.HostListener('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PagesComponent.prototype, "onWindowResize", null);
PagesComponent = __decorate([
    core_1.Component({
        selector: 'app-pages',
        templateUrl: './pages.component.html',
        styleUrls: ['./pages.component.scss'],
        providers: [menu_service_1.MenuService]
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, menu_service_1.MenuService])
], PagesComponent);
exports.PagesComponent = PagesComponent;
var _a;
//# sourceMappingURL=pages.component.js.map