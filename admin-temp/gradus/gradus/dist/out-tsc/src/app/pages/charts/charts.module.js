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
var ngx_charts_1 = require("@swimlane/ngx-charts");
var shared_module_1 = require("../../shared/shared.module");
var bar_component_1 = require("./bar/bar.component");
var bubble_component_1 = require("./bubble/bubble.component");
var line_component_1 = require("./line/line.component");
var pie_component_1 = require("./pie/pie.component");
exports.routes = [
    { path: '', redirectTo: 'bar', pathMatch: 'full' },
    { path: 'bar', component: bar_component_1.BarComponent, data: { breadcrumb: 'Bar Charts' } },
    { path: 'pie', component: pie_component_1.PieComponent, data: { breadcrumb: 'Pie Charts' } },
    { path: 'line', component: line_component_1.LineComponent, data: { breadcrumb: 'Line Charts' } },
    { path: 'bubble', component: bubble_component_1.BubbleComponent, data: { breadcrumb: 'Bubble Charts' } }
];
var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(exports.routes),
            ngx_charts_1.NgxChartsModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            bar_component_1.BarComponent,
            bubble_component_1.BubbleComponent,
            line_component_1.LineComponent,
            pie_component_1.PieComponent
        ]
    })
], ChartsModule);
exports.ChartsModule = ChartsModule;
//# sourceMappingURL=charts.module.js.map