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
var router_1 = require("@angular/router");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var shared_module_1 = require("../../shared/shared.module");
var basic_component_1 = require("./basic/basic.component");
var paging_component_1 = require("./paging/paging.component");
var sorting_component_1 = require("./sorting/sorting.component");
var filtering_component_1 = require("./filtering/filtering.component");
var ngx_table_component_1 = require("./ngx-table/ngx-table.component");
var tables_service_1 = require("./tables.service");
exports.routes = [
    { path: '', redirectTo: 'basic', pathMatch: 'full' },
    { path: 'basic', component: basic_component_1.BasicComponent, data: { breadcrumb: 'Basic table' } },
    { path: 'paging', component: paging_component_1.PagingComponent, data: { breadcrumb: 'Paging table' } },
    { path: 'sorting', component: sorting_component_1.SortingComponent, data: { breadcrumb: 'Sorting table' } },
    { path: 'filtering', component: filtering_component_1.FilteringComponent, data: { breadcrumb: 'Filtering table' } },
    { path: 'ngx-table', component: ngx_table_component_1.NgxTableComponent, data: { breadcrumb: 'Ngx datatable' } },
];
var TablesModule = (function () {
    function TablesModule() {
    }
    return TablesModule;
}());
TablesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(exports.routes),
            ngx_datatable_1.NgxDatatableModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            basic_component_1.BasicComponent,
            paging_component_1.PagingComponent,
            sorting_component_1.SortingComponent,
            filtering_component_1.FilteringComponent,
            ngx_table_component_1.NgxTableComponent
        ],
        providers: [
            tables_service_1.TablesService
        ]
    })
], TablesModule);
exports.TablesModule = TablesModule;
//# sourceMappingURL=tables.module.js.map