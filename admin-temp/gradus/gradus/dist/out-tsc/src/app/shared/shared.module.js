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
var flex_layout_1 = require("@angular/flex-layout");
var material_1 = require("@angular/material");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            flex_layout_1.FlexLayoutModule,
            material_1.MatAutocompleteModule,
            material_1.MatButtonModule,
            material_1.MatButtonToggleModule,
            material_1.MatCardModule,
            material_1.MatCheckboxModule,
            material_1.MatChipsModule,
            material_1.MatDatepickerModule,
            material_1.MatDialogModule,
            material_1.MatExpansionModule,
            material_1.MatGridListModule,
            material_1.MatIconModule,
            material_1.MatInputModule,
            material_1.MatListModule,
            material_1.MatMenuModule,
            material_1.MatNativeDateModule,
            material_1.MatPaginatorModule,
            material_1.MatProgressBarModule,
            material_1.MatProgressSpinnerModule,
            material_1.MatRadioModule,
            material_1.MatRippleModule,
            material_1.MatSelectModule,
            material_1.MatSidenavModule,
            material_1.MatSliderModule,
            material_1.MatSlideToggleModule,
            material_1.MatSnackBarModule,
            material_1.MatSortModule,
            material_1.MatTableModule,
            material_1.MatTabsModule,
            material_1.MatToolbarModule,
            material_1.MatTooltipModule,
            material_1.MatStepperModule
        ],
        exports: [
            flex_layout_1.FlexLayoutModule,
            material_1.MatAutocompleteModule,
            material_1.MatButtonModule,
            material_1.MatButtonToggleModule,
            material_1.MatCardModule,
            material_1.MatCheckboxModule,
            material_1.MatChipsModule,
            material_1.MatDatepickerModule,
            material_1.MatDialogModule,
            material_1.MatExpansionModule,
            material_1.MatGridListModule,
            material_1.MatIconModule,
            material_1.MatInputModule,
            material_1.MatListModule,
            material_1.MatMenuModule,
            material_1.MatNativeDateModule,
            material_1.MatPaginatorModule,
            material_1.MatProgressBarModule,
            material_1.MatProgressSpinnerModule,
            material_1.MatRadioModule,
            material_1.MatRippleModule,
            material_1.MatSelectModule,
            material_1.MatSidenavModule,
            material_1.MatSliderModule,
            material_1.MatSlideToggleModule,
            material_1.MatSnackBarModule,
            material_1.MatSortModule,
            material_1.MatTableModule,
            material_1.MatTabsModule,
            material_1.MatToolbarModule,
            material_1.MatTooltipModule,
            material_1.MatStepperModule
        ],
        declarations: []
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map