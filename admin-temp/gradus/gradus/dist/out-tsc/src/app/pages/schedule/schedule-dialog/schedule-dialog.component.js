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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var ScheduleDialogComponent = (function () {
    function ScheduleDialogComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            'title': ['', forms_1.Validators.required],
            'start': ['', forms_1.Validators.required],
            'end': '',
            'isEdit': false
        });
    }
    ScheduleDialogComponent.prototype.ngOnInit = function () {
        if (this.data) {
            this.form.patchValue({
                'title': this.data.title,
                'start': this.data.start,
                'end': this.data.end,
                'isEdit': true
            });
        }
    };
    ScheduleDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    return ScheduleDialogComponent;
}());
ScheduleDialogComponent = __decorate([
    core_1.Component({
        selector: 'app-schedule-dialog',
        templateUrl: './schedule-dialog.component.html'
    }),
    __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [typeof (_a = typeof material_1.MatDialogRef !== "undefined" && material_1.MatDialogRef) === "function" && _a || Object, Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object])
], ScheduleDialogComponent);
exports.ScheduleDialogComponent = ScheduleDialogComponent;
var _a, _b;
//# sourceMappingURL=schedule-dialog.component.js.map