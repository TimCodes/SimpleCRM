"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var ngx_pagination_1 = require("ngx-pagination");
var shared_module_1 = require("../../shared/shared.module");
var pipes_module_1 = require("../../theme/pipes/pipes.module");
var users_component_1 = require("./users.component");
var users_data_1 = require("./users.data");
var user_dialog_component_1 = require("./user-dialog/user-dialog.component");
exports.routes = [
    { path: '', component: users_component_1.UsersComponent, pathMatch: 'full' }
];
var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpClientModule,
            router_1.RouterModule.forChild(exports.routes),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(users_data_1.UsersData, { delay: 500 }),
            ngx_pagination_1.NgxPaginationModule,
            shared_module_1.SharedModule,
            pipes_module_1.PipesModule
        ],
        declarations: [
            users_component_1.UsersComponent,
            user_dialog_component_1.UserDialogComponent
        ],
        entryComponents: [
            user_dialog_component_1.UserDialogComponent
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map