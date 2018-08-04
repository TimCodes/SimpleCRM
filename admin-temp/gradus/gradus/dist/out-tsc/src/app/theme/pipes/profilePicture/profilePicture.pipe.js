"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProfilePicturePipe = (function () {
    function ProfilePicturePipe() {
    }
    ProfilePicturePipe.prototype.transform = function (input, ext) {
        if (ext === void 0) { ext = 'jpg'; }
        return '../assets/img/profile/' + input + '.' + ext;
    };
    return ProfilePicturePipe;
}());
ProfilePicturePipe = __decorate([
    core_1.Pipe({ name: 'profilePicture' })
], ProfilePicturePipe);
exports.ProfilePicturePipe = ProfilePicturePipe;
//# sourceMappingURL=profilePicture.pipe.js.map