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
var http_1 = require("@angular/common/http");
var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
        this.url = "api/users";
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get(this.url);
    };
    UsersService.prototype.addUser = function (user) {
        return this.http.post(this.url, user);
    };
    UsersService.prototype.updateUser = function (user) {
        return this.http.put(this.url, user);
    };
    UsersService.prototype.deleteUser = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], UsersService);
exports.UsersService = UsersService;
var _a;
//# sourceMappingURL=users.service.js.map