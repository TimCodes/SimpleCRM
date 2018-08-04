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
var material_1 = require("@angular/material");
var app_settings_1 = require("../../app.settings");
var users_service_1 = require("./users.service");
var user_dialog_component_1 = require("./user-dialog/user-dialog.component");
var UsersComponent = (function () {
    function UsersComponent(appSettings, dialog, usersService) {
        this.appSettings = appSettings;
        this.dialog = dialog;
        this.usersService = usersService;
        this.settings = this.appSettings.settings;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.users = null; //for show spinner each time
        this.usersService.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    UsersComponent.prototype.addUser = function (user) {
        var _this = this;
        this.usersService.addUser(user).subscribe(function (user) { return _this.getUsers(); });
    };
    UsersComponent.prototype.updateUser = function (user) {
        var _this = this;
        this.usersService.updateUser(user).subscribe(function (user) { return _this.getUsers(); });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.usersService.deleteUser(user.id).subscribe(function (user) { return _this.getUsers(); });
    };
    UsersComponent.prototype.onPageChanged = function (event) {
        this.page = event;
        this.getUsers();
        if (this.settings.fixedHeader) {
            document.getElementById('main-content').scrollTop = 0;
        }
        else {
            document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
    };
    UsersComponent.prototype.openUserDialog = function (user) {
        var _this = this;
        var dialogRef = this.dialog.open(user_dialog_component_1.UserDialogComponent, {
            data: user
        });
        dialogRef.afterClosed().subscribe(function (user) {
            if (user) {
                (user.id) ? _this.updateUser(user) : _this.addUser(user);
            }
        });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.scss'],
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [users_service_1.UsersService]
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings, typeof (_a = typeof material_1.MatDialog !== "undefined" && material_1.MatDialog) === "function" && _a || Object, users_service_1.UsersService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
var _a;
//# sourceMappingURL=users.component.js.map