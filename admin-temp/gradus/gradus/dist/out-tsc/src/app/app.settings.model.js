"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Settings = (function () {
    function Settings(name, loadingSpinner, fixedHeader, sidenavIsOpened, sidenavIsPinned, sidenavUserBlock, menu, menuType, theme, rtl) {
        this.name = name;
        this.loadingSpinner = loadingSpinner;
        this.fixedHeader = fixedHeader;
        this.sidenavIsOpened = sidenavIsOpened;
        this.sidenavIsPinned = sidenavIsPinned;
        this.sidenavUserBlock = sidenavUserBlock;
        this.menu = menu;
        this.menuType = menuType;
        this.theme = theme;
        this.rtl = rtl;
    }
    return Settings;
}());
exports.Settings = Settings;
//# sourceMappingURL=app.settings.model.js.map