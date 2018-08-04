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
var shared_module_1 = require("../../shared/shared.module");
var buttons_component_1 = require("./buttons/buttons.component");
var cards_component_1 = require("./cards/cards.component");
var lists_component_1 = require("./lists/lists.component");
var grids_component_1 = require("./grids/grids.component");
var tabs_component_1 = require("./tabs/tabs.component");
var expansion_panel_component_1 = require("./expansion-panel/expansion-panel.component");
var chips_component_1 = require("./chips/chips.component");
var progress_component_1 = require("./progress/progress.component");
var tooltip_component_1 = require("./tooltip/tooltip.component");
var dialog_component_1 = require("./dialog/dialog.component");
var snack_bar_component_1 = require("./snack-bar/snack-bar.component");
exports.routes = [
    { path: '', redirectTo: 'buttons', pathMatch: 'full' },
    { path: 'buttons', component: buttons_component_1.ButtonsComponent, data: { breadcrumb: 'Buttons' } },
    { path: 'cards', component: cards_component_1.CardsComponent, data: { breadcrumb: 'Cards' } },
    { path: 'lists', component: lists_component_1.ListsComponent, data: { breadcrumb: 'Lists' } },
    { path: 'grids', component: grids_component_1.GridsComponent, data: { breadcrumb: 'Grids' } },
    { path: 'tabs', component: tabs_component_1.TabsComponent, data: { breadcrumb: 'Tabs' } },
    { path: 'expansion-panel', component: expansion_panel_component_1.ExpansionPanelComponent, data: { breadcrumb: 'Expansion Panel' } },
    { path: 'chips', component: chips_component_1.ChipsComponent, data: { breadcrumb: 'Chips' } },
    { path: 'progress', component: progress_component_1.ProgressComponent, data: { breadcrumb: 'Progress' } },
    { path: 'dialog', component: dialog_component_1.DialogComponent, data: { breadcrumb: 'Dialog' } },
    { path: 'tooltip', component: tooltip_component_1.TooltipComponent, data: { breadcrumb: 'Tooltip' } },
    { path: 'snack-bar', component: snack_bar_component_1.SnackBarComponent, data: { breadcrumb: 'Snackbar' } }
];
var UiModule = (function () {
    function UiModule() {
    }
    return UiModule;
}());
UiModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(exports.routes),
            forms_1.FormsModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            buttons_component_1.ButtonsComponent,
            cards_component_1.CardsComponent,
            lists_component_1.ListsComponent,
            grids_component_1.GridsComponent,
            tabs_component_1.TabsComponent,
            expansion_panel_component_1.ExpansionPanelComponent,
            chips_component_1.ChipsComponent,
            progress_component_1.ProgressComponent,
            tooltip_component_1.TooltipComponent,
            dialog_component_1.DialogComponent,
            dialog_component_1.DialogOverviewExampleDialog,
            snack_bar_component_1.SnackBarComponent
        ],
        entryComponents: [
            dialog_component_1.DialogOverviewExampleDialog
        ]
    })
], UiModule);
exports.UiModule = UiModule;
//# sourceMappingURL=ui.module.js.map