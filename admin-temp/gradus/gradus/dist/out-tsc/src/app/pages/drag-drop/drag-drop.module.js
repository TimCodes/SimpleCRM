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
var ng2_dragula_1 = require("ng2-dragula");
var shared_module_1 = require("../../shared/shared.module");
var drag_drop_component_1 = require("./drag-drop.component");
exports.routes = [
    { path: '', component: drag_drop_component_1.DragDropComponent, pathMatch: 'full' }
];
var DragDropModule = (function () {
    function DragDropModule() {
    }
    return DragDropModule;
}());
DragDropModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(exports.routes),
            ng2_dragula_1.DragulaModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            drag_drop_component_1.DragDropComponent
        ]
    })
], DragDropModule);
exports.DragDropModule = DragDropModule;
//# sourceMappingURL=drag-drop.module.js.map