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
var messages_service_1 = require("./messages.service");
var MessagesComponent = (function () {
    function MessagesComponent(messagesService) {
        this.messagesService = messagesService;
        this.selectedTab = 1;
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent.prototype.openMessagesMenu = function () {
        this.trigger.openMenu();
        this.selectedTab = 0;
    };
    MessagesComponent.prototype.onMouseLeave = function () {
        this.trigger.closeMenu();
    };
    MessagesComponent.prototype.stopClickPropagate = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    return MessagesComponent;
}());
__decorate([
    core_1.ViewChild(material_1.MatMenuTrigger),
    __metadata("design:type", typeof (_a = typeof material_1.MatMenuTrigger !== "undefined" && material_1.MatMenuTrigger) === "function" && _a || Object)
], MessagesComponent.prototype, "trigger", void 0);
MessagesComponent = __decorate([
    core_1.Component({
        selector: 'app-messages',
        templateUrl: './messages.component.html',
        styleUrls: ['./messages.component.scss'],
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [messages_service_1.MessagesService]
    }),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesComponent);
exports.MessagesComponent = MessagesComponent;
var _a;
//# sourceMappingURL=messages.component.js.map