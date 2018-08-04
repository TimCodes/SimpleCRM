"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu = (function () {
    function Menu(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.icon = icon;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
    return Menu;
}());
exports.Menu = Menu;
//# sourceMappingURL=menu.model.js.map