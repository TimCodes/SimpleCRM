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
var pagination_pipe_1 = require("./pagination/pagination.pipe");
var profilePicture_pipe_1 = require("./profilePicture/profilePicture.pipe");
var chat_person_search_pipe_1 = require("./search/chat-person-search.pipe");
var user_search_pipe_1 = require("./search/user-search.pipe");
var truncate_pipe_1 = require("./truncate/truncate.pipe");
var mail_search_pipe_1 = require("./search/mail-search.pipe");
var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            pagination_pipe_1.PaginationPipe,
            profilePicture_pipe_1.ProfilePicturePipe,
            chat_person_search_pipe_1.ChatPersonSearchPipe,
            user_search_pipe_1.UserSearchPipe,
            truncate_pipe_1.TruncatePipe,
            mail_search_pipe_1.MailSearchPipe
        ],
        exports: [
            pagination_pipe_1.PaginationPipe,
            profilePicture_pipe_1.ProfilePicturePipe,
            chat_person_search_pipe_1.ChatPersonSearchPipe,
            user_search_pipe_1.UserSearchPipe,
            truncate_pipe_1.TruncatePipe,
            mail_search_pipe_1.MailSearchPipe
        ]
    })
], PipesModule);
exports.PipesModule = PipesModule;
//# sourceMappingURL=pipes.module.js.map