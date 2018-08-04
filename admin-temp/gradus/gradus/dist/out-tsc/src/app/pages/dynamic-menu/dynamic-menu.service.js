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
var menu_model_1 = require("../../theme/components/menu/menu.model");
var DynamicMenuService = (function () {
    function DynamicMenuService(componentFactoryResolver, applicationRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
    }
    DynamicMenuService.prototype.addNewMenuItem = function (component, menuItems, menuItem) {
        var lastId = menuItems[menuItems.length - 1].id;
        var newMenuItem = new menu_model_1.Menu(lastId + 1, menuItem['title'], menuItem['routerLink'], menuItem['href'], menuItem['icon'], menuItem['target'], menuItem['hasSubMenu'], parseInt(menuItem['parentId']));
        menuItems.push(newMenuItem);
        var item = menuItems.filter(function (item) { return item.id == newMenuItem.parentId; })[0];
        if (item)
            item.hasSubMenu = true;
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        this.applicationRef.attachView(componentRef.hostView);
        var instance = componentRef.instance;
        instance.menuItems = menuItems;
        instance.menuParentId = 0;
        var elem = componentRef.hostView.rootNodes[0];
        var sidenav = document.getElementById('sidenav-menu-outer');
        sidenav.replaceChild(elem, sidenav.children[0]);
    };
    return DynamicMenuService;
}());
DynamicMenuService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ComponentFactoryResolver !== "undefined" && core_1.ComponentFactoryResolver) === "function" && _a || Object, typeof (_b = typeof core_1.ApplicationRef !== "undefined" && core_1.ApplicationRef) === "function" && _b || Object, typeof (_c = typeof core_1.Injector !== "undefined" && core_1.Injector) === "function" && _c || Object])
], DynamicMenuService);
exports.DynamicMenuService = DynamicMenuService;
var _a, _b, _c;
//# sourceMappingURL=dynamic-menu.service.js.map