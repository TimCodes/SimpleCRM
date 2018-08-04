"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var overlay_1 = require("@angular/cdk/overlay");
var custom_overlay_container_1 = require("./theme/utils/custom-overlay-container");
var core_2 = require("@agm/core");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var ngx_perfect_scrollbar_2 = require("ngx-perfect-scrollbar");
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
    suppressScrollX: true
};
var angular_calendar_1 = require("angular-calendar");
var shared_module_1 = require("./shared/shared.module");
var pipes_module_1 = require("./theme/pipes/pipes.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var pages_component_1 = require("./pages/pages.component");
var blank_component_1 = require("./pages/blank/blank.component");
var search_component_1 = require("./pages/search/search.component");
var not_found_component_1 = require("./pages/errors/not-found/not-found.component");
var error_component_1 = require("./pages/errors/error/error.component");
var app_settings_1 = require("./app.settings");
var sidenav_component_1 = require("./theme/components/sidenav/sidenav.component");
var vertical_menu_component_1 = require("./theme/components/menu/vertical-menu/vertical-menu.component");
var horizontal_menu_component_1 = require("./theme/components/menu/horizontal-menu/horizontal-menu.component");
var breadcrumb_component_1 = require("./theme/components/breadcrumb/breadcrumb.component");
var flags_menu_component_1 = require("./theme/components/flags-menu/flags-menu.component");
var fullscreen_component_1 = require("./theme/components/fullscreen/fullscreen.component");
var applications_component_1 = require("./theme/components/applications/applications.component");
var messages_component_1 = require("./theme/components/messages/messages.component");
var user_menu_component_1 = require("./theme/components/user-menu/user-menu.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
            }),
            ngx_perfect_scrollbar_1.PerfectScrollbarModule,
            angular_calendar_1.CalendarModule.forRoot(),
            shared_module_1.SharedModule,
            pipes_module_1.PipesModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            pages_component_1.PagesComponent,
            blank_component_1.BlankComponent,
            search_component_1.SearchComponent,
            not_found_component_1.NotFoundComponent,
            error_component_1.ErrorComponent,
            sidenav_component_1.SidenavComponent,
            vertical_menu_component_1.VerticalMenuComponent,
            horizontal_menu_component_1.HorizontalMenuComponent,
            breadcrumb_component_1.BreadcrumbComponent,
            flags_menu_component_1.FlagsMenuComponent,
            fullscreen_component_1.FullScreenComponent,
            applications_component_1.ApplicationsComponent,
            messages_component_1.MessagesComponent,
            user_menu_component_1.UserMenuComponent
        ],
        entryComponents: [
            vertical_menu_component_1.VerticalMenuComponent
        ],
        providers: [
            app_settings_1.AppSettings,
            { provide: ngx_perfect_scrollbar_2.PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
            { provide: overlay_1.OverlayContainer, useClass: custom_overlay_container_1.CustomOverlayContainer }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map