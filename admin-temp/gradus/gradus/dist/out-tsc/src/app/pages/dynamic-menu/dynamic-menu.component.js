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
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
require("rxjs/add/operator/debounceTime");
var menu_service_1 = require("../../theme/components/menu/menu.service");
var dynamic_menu_service_1 = require("./dynamic-menu.service");
var app_settings_1 = require("../../app.settings");
var vertical_menu_component_1 = require("../../theme/components/menu/vertical-menu/vertical-menu.component");
var app_animation_1 = require("../../theme/utils/app-animation");
var DynamicMenuComponent = (function () {
    function DynamicMenuComponent(appSettings, formBuilder, snackBar, menuService, dynamicMenuService) {
        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.menuService = menuService;
        this.dynamicMenuService = dynamicMenuService;
        this.icons = ['home', 'person', 'card_travel', 'delete', 'event', 'favorite', 'help'];
        this.settings = this.appSettings.settings;
        this.menuItems = this.menuService.getVerticalMenuItems();
    }
    DynamicMenuComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            'title': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            'icon': null,
            'routerLink': ['', forms_1.Validators.required],
            'href': ['', forms_1.Validators.required],
            'target': null,
            'hasSubMenu': false,
            'parentId': 0
        });
    };
    DynamicMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.form.valueChanges.debounceTime(500).subscribe(function (menu) {
            if (menu.routerLink && menu.routerLink != '') {
                _this.form.controls['href'].setValue(null);
                _this.form.controls['href'].disable();
                _this.form.controls['href'].clearValidators();
                _this.form.controls['target'].setValue(null);
                _this.form.controls['target'].disable();
            }
            else {
                _this.form.controls['href'].enable();
                _this.form.controls['href'].setValidators([forms_1.Validators.required]);
                _this.form.controls['target'].enable();
            }
            _this.form.controls['href'].updateValueAndValidity();
            if (menu.href && menu.href != '') {
                _this.form.controls['routerLink'].setValue(null);
                _this.form.controls['routerLink'].disable();
                _this.form.controls['routerLink'].clearValidators();
                _this.form.controls['hasSubMenu'].setValue(false);
                _this.form.controls['hasSubMenu'].disable();
            }
            else {
                _this.form.controls['routerLink'].enable();
                _this.form.controls['routerLink'].setValidators([forms_1.Validators.required]);
                _this.form.controls['hasSubMenu'].enable();
            }
            _this.form.controls['routerLink'].updateValueAndValidity();
        });
    };
    DynamicMenuComponent.prototype.onSubmit = function (menu) {
        if (this.form.valid) {
            this.dynamicMenuService.addNewMenuItem(vertical_menu_component_1.VerticalMenuComponent, this.menuItems, menu);
            this.snackBar.open('New menu item added successfully!', null, {
                duration: 2000,
            });
            this.form.reset({
                hasSubMenu: false,
                parentId: 0
            });
        }
    };
    return DynamicMenuComponent;
}());
DynamicMenuComponent = __decorate([
    core_1.Component({
        selector: 'app-dynamic-menu',
        templateUrl: './dynamic-menu.component.html',
        providers: [dynamic_menu_service_1.DynamicMenuService, menu_service_1.MenuService],
        animations: [app_animation_1.listTransition],
        host: {
            '[@listTransition]': ''
        }
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings, typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof material_1.MatSnackBar !== "undefined" && material_1.MatSnackBar) === "function" && _b || Object, menu_service_1.MenuService,
        dynamic_menu_service_1.DynamicMenuService])
], DynamicMenuComponent);
exports.DynamicMenuComponent = DynamicMenuComponent;
var _a, _b;
//# sourceMappingURL=dynamic-menu.component.js.map