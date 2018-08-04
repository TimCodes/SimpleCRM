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
var material_1 = require("@angular/material");
var app_settings_1 = require("../../app.settings");
var mailbox_service_1 = require("./mailbox.service");
var MailboxComponent = (function () {
    function MailboxComponent(appSettings, formBuilder, snackBar, mailboxService) {
        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.mailboxService = mailboxService;
        this.sidenavOpen = true;
        this.type = 'all';
        this.settings = this.appSettings.settings;
    }
    MailboxComponent.prototype.ngOnInit = function () {
        this.getMails();
        if (window.innerWidth <= 992) {
            this.sidenavOpen = false;
        }
        this.form = this.formBuilder.group({
            'to': ['', forms_1.Validators.required],
            'cc': null,
            'subject': null,
            'message': null
        });
    };
    MailboxComponent.prototype.onWindowResize = function () {
        (window.innerWidth <= 992) ? this.sidenavOpen = false : this.sidenavOpen = true;
    };
    MailboxComponent.prototype.getMails = function () {
        switch (this.type) {
            case 'all':
                this.mails = this.mailboxService.getAllMails();
                break;
            case 'starred':
                this.mails = this.mailboxService.getStarredMails();
                break;
            case 'sent':
                this.mails = this.mailboxService.getSentMails();
                break;
            case 'drafts':
                this.mails = this.mailboxService.getDraftMails();
                break;
            case 'trash':
                this.mails = this.mailboxService.getTrashMails();
                break;
            default:
                this.mails = this.mailboxService.getDraftMails();
        }
    };
    MailboxComponent.prototype.viewDetail = function (mail) {
        this.mail = this.mailboxService.getMail(mail.id);
        this.mails.forEach(function (m) { return m.selected = false; });
        this.mail.selected = true;
        this.mail.unread = false;
        this.newMail = false;
        if (window.innerWidth <= 992) {
            this.sidenav.close();
        }
    };
    MailboxComponent.prototype.compose = function () {
        this.mail = null;
        this.newMail = true;
    };
    MailboxComponent.prototype.setAsRead = function () {
        this.mail.unread = false;
    };
    MailboxComponent.prototype.setAsUnRead = function () {
        this.mail.unread = true;
    };
    MailboxComponent.prototype.delete = function () {
        this.mail.trash = true;
        this.mail.sent = false;
        this.mail.draft = false;
        this.mail.starred = false;
        this.getMails();
        this.mail = null;
    };
    MailboxComponent.prototype.changeStarStatus = function () {
        this.mail.starred = !this.mail.starred;
        this.getMails();
    };
    MailboxComponent.prototype.restore = function () {
        this.mail.trash = false;
        this.type = 'all';
        this.getMails();
        this.mail = null;
    };
    MailboxComponent.prototype.onSubmit = function (mail) {
        console.log(mail);
        if (this.form.valid) {
            this.snackBar.open('Mail sent to ' + mail.to + ' successfully!', null, {
                duration: 2000,
            });
            this.form.reset();
        }
    };
    return MailboxComponent;
}());
__decorate([
    core_1.ViewChild('sidenav'),
    __metadata("design:type", Object)
], MailboxComponent.prototype, "sidenav", void 0);
__decorate([
    core_1.HostListener('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MailboxComponent.prototype, "onWindowResize", null);
MailboxComponent = __decorate([
    core_1.Component({
        selector: 'app-mailbox',
        templateUrl: './mailbox.component.html',
        styleUrls: ['./mailbox.component.scss'],
        providers: [mailbox_service_1.MailboxService]
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings, typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof material_1.MatSnackBar !== "undefined" && material_1.MatSnackBar) === "function" && _b || Object, mailbox_service_1.MailboxService])
], MailboxComponent);
exports.MailboxComponent = MailboxComponent;
var _a, _b;
//# sourceMappingURL=mailbox.component.js.map