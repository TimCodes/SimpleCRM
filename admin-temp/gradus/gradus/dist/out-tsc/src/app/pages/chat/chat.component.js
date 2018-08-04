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
var app_settings_1 = require("../../app.settings");
var chat_model_1 = require("./chat.model");
var chat_service_1 = require("./chat.service");
var ChatComponent = (function () {
    function ChatComponent(appSettings, chatService) {
        this.appSettings = appSettings;
        this.chatService = chatService;
        this.userImage = 'assets/img/users/user.jpg';
        this.sidenavOpen = true;
        this.settings = this.appSettings.settings;
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.chats = this.chatService.getChats();
        if (window.innerWidth <= 768) {
            this.sidenavOpen = false;
        }
    };
    ChatComponent.prototype.onWindowResize = function () {
        (window.innerWidth <= 768) ? this.sidenavOpen = false : this.sidenavOpen = true;
    };
    ChatComponent.prototype.getChat = function (obj) {
        if (this.talks) {
            this.talks.length = 2;
        }
        this.talks = this.chatService.getTalk();
        this.talks.push(obj);
        this.currentChat = obj;
        this.talks.forEach(function (talk) {
            if (!talk.my) {
                talk.image = obj.image;
            }
        });
        if (window.innerWidth <= 768) {
            this.sidenav.close();
        }
    };
    ChatComponent.prototype.sendMessage = function ($event) {
        if (($event.which === 1 || $event.which === 13) && this.newMessage.trim() != '') {
            if (this.talks) {
                this.talks.push(new chat_model_1.Chat('assets/img/users/user.jpg', 'Emilio Verdines', 'online', this.newMessage, new Date(), true));
                this.newMessage = '';
                var chatContainer_1 = document.querySelector('.chat-content');
                if (chatContainer_1) {
                    setTimeout(function () {
                        var nodes = chatContainer_1.querySelectorAll('.mat-list-item');
                        var newChatTextHeight = nodes[nodes.length - 1];
                        chatContainer_1.scrollTop = chatContainer_1.scrollHeight + newChatTextHeight.clientHeight;
                    });
                }
            }
        }
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        if (this.talks)
            this.talks.length = 2;
    };
    return ChatComponent;
}());
__decorate([
    core_1.ViewChild('sidenav'),
    __metadata("design:type", Object)
], ChatComponent.prototype, "sidenav", void 0);
__decorate([
    core_1.HostListener('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatComponent.prototype, "onWindowResize", null);
ChatComponent = __decorate([
    core_1.Component({
        selector: 'app-chat',
        templateUrl: './chat.component.html',
        styleUrls: ['./chat.component.scss'],
        providers: [chat_service_1.ChatService]
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings, chat_service_1.ChatService])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map