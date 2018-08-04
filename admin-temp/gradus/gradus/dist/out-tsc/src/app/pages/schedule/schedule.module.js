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
var forms_1 = require("@angular/forms");
var angular_calendar_1 = require("angular-calendar");
var shared_module_1 = require("../../shared/shared.module");
var schedule_component_1 = require("./schedule.component");
var schedule_dialog_component_1 = require("./schedule-dialog/schedule-dialog.component");
exports.routes = [
    { path: '', component: schedule_component_1.ScheduleComponent, pathMatch: 'full' }
];
var ScheduleModule = (function () {
    function ScheduleModule() {
    }
    return ScheduleModule;
}());
ScheduleModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(exports.routes),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            angular_calendar_1.CalendarModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            schedule_component_1.ScheduleComponent,
            schedule_dialog_component_1.ScheduleDialogComponent
        ],
        entryComponents: [
            schedule_dialog_component_1.ScheduleDialogComponent
        ]
    })
], ScheduleModule);
exports.ScheduleModule = ScheduleModule;
//# sourceMappingURL=schedule.module.js.map