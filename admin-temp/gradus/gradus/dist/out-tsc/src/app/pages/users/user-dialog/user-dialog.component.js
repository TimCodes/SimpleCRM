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
var user_model_1 = require("../user.model");
var UserDialogComponent = (function () {
    function UserDialogComponent(dialogRef, user, fb) {
        this.dialogRef = dialogRef;
        this.user = user;
        this.fb = fb;
        this.passwordHide = true;
        this.form = this.fb.group({
            id: null,
            username: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])],
            password: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            profile: this.fb.group({
                name: null,
                surname: null,
                birthday: null,
                gender: null,
                image: null
            }),
            work: this.fb.group({
                company: null,
                position: null,
                salary: null
            }),
            contacts: this.fb.group({
                email: null,
                phone: null,
                address: null
            }),
            social: this.fb.group({
                facebook: null,
                twitter: null,
                google: null
            }),
            settings: this.fb.group({
                isActive: null,
                isDeleted: null,
                registrationDate: null,
                joinedDate: null
            })
        });
    }
    UserDialogComponent.prototype.ngOnInit = function () {
        if (this.user) {
            this.form.setValue(this.user);
        }
        else {
            this.user = new user_model_1.User();
            this.user.profile = new user_model_1.UserProfile();
            this.user.work = new user_model_1.UserWork();
            this.user.contacts = new user_model_1.UserContacts();
            this.user.social = new user_model_1.UserSocial();
            this.user.settings = new user_model_1.UserSettings();
        }
    };
    UserDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    return UserDialogComponent;
}());
UserDialogComponent = __decorate([
    core_1.Component({
        selector: 'app-user-dialog',
        templateUrl: './user-dialog.component.html',
        styleUrls: ['./user-dialog.component.scss']
    }),
    __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [typeof (_a = typeof material_1.MatDialogRef !== "undefined" && material_1.MatDialogRef) === "function" && _a || Object, user_model_1.User, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object])
], UserDialogComponent);
exports.UserDialogComponent = UserDialogComponent;
var _a, _b;
//# sourceMappingURL=user-dialog.component.js.map