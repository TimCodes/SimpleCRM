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
var app_settings_1 = require("../../../app.settings");
var DialogComponent = (function () {
    function DialogComponent(appSettings, dialog) {
        this.appSettings = appSettings;
        this.dialog = dialog;
        this.settings = this.appSettings.settings;
    }
    DialogComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    return DialogComponent;
}());
DialogComponent = __decorate([
    core_1.Component({
        selector: 'app-dialog',
        templateUrl: './dialog.component.html'
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings, typeof (_a = typeof material_1.MatDialog !== "undefined" && material_1.MatDialog) === "function" && _a || Object])
], DialogComponent);
exports.DialogComponent = DialogComponent;
var DialogOverviewExampleDialog = (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return DialogOverviewExampleDialog;
}());
DialogOverviewExampleDialog = __decorate([
    core_1.Component({
        selector: 'dialog-overview-example-dialog',
        templateUrl: 'dialog-overview-example-dialog.html',
    }),
    __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [typeof (_b = typeof material_1.MatDialogRef !== "undefined" && material_1.MatDialogRef) === "function" && _b || Object, Object])
], DialogOverviewExampleDialog);
exports.DialogOverviewExampleDialog = DialogOverviewExampleDialog;
var _a, _b;
//# sourceMappingURL=dialog.component.js.map