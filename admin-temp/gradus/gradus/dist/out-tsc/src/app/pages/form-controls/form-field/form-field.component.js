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
var app_settings_1 = require("../../../app.settings");
var FormFieldComponent = (function () {
    function FormFieldComponent(appSettings, formBuilder) {
        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this.email = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
        this.hide = true;
        this.settings = this.appSettings.settings;
    }
    FormFieldComponent.prototype.ngOnInit = function () {
        this.options = this.formBuilder.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
        this.themingForm = this.formBuilder.group({
            'color': 'primary',
            'fontSize': [16, forms_1.Validators.min(10)],
        });
    };
    FormFieldComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    FormFieldComponent.prototype.getFontSize = function () {
        return Math.max(10, this.themingForm.value.fontSize);
    };
    return FormFieldComponent;
}());
FormFieldComponent = __decorate([
    core_1.Component({
        selector: 'app-form-field',
        templateUrl: './form-field.component.html'
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings, typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object])
], FormFieldComponent);
exports.FormFieldComponent = FormFieldComponent;
var _a;
//# sourceMappingURL=form-field.component.js.map