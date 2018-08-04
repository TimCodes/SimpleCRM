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
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var shared_module_1 = require("../../shared/shared.module");
var autocomplete_component_1 = require("./autocomplete/autocomplete.component");
var checkbox_component_1 = require("./checkbox/checkbox.component");
var datepicker_component_1 = require("./datepicker/datepicker.component");
var form_field_component_1 = require("./form-field/form-field.component");
var input_component_1 = require("./input/input.component");
var radio_button_component_1 = require("./radio-button/radio-button.component");
var select_component_1 = require("./select/select.component");
var slider_component_1 = require("./slider/slider.component");
var slide_toggle_component_1 = require("./slide-toggle/slide-toggle.component");
exports.routes = [
    { path: '', redirectTo: 'autocomplete', pathMatch: 'full' },
    { path: 'autocomplete', component: autocomplete_component_1.AutocompleteComponent, data: { breadcrumb: 'Autocomplete' } },
    { path: 'checkbox', component: checkbox_component_1.CheckboxComponent, data: { breadcrumb: 'Checkbox' } },
    { path: 'datepicker', component: datepicker_component_1.DatepickerComponent, data: { breadcrumb: 'Datepicker' } },
    { path: 'form-field', component: form_field_component_1.FormFieldComponent, data: { breadcrumb: 'Form Field' } },
    { path: 'input', component: input_component_1.InputComponent, data: { breadcrumb: 'Input' } },
    { path: 'radio-button', component: radio_button_component_1.RadioButtonComponent, data: { breadcrumb: 'Radio Button' } },
    { path: 'select', component: select_component_1.SelectComponent, data: { breadcrumb: 'Select' } },
    { path: 'slider', component: slider_component_1.SliderComponent, data: { breadcrumb: 'Slider' } },
    { path: 'slide-toggle', component: slide_toggle_component_1.SlideToggleComponent, data: { breadcrumb: 'Slide Toggle' } }
];
var FormControlsModule = (function () {
    function FormControlsModule() {
    }
    return FormControlsModule;
}());
FormControlsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(exports.routes),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ngx_perfect_scrollbar_1.PerfectScrollbarModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            autocomplete_component_1.AutocompleteComponent,
            checkbox_component_1.CheckboxComponent,
            datepicker_component_1.DatepickerComponent,
            form_field_component_1.FormFieldComponent,
            input_component_1.InputComponent,
            radio_button_component_1.RadioButtonComponent,
            select_component_1.SelectComponent,
            slider_component_1.SliderComponent,
            slide_toggle_component_1.SlideToggleComponent
        ]
    })
], FormControlsModule);
exports.FormControlsModule = FormControlsModule;
//# sourceMappingURL=form-controls.module.js.map