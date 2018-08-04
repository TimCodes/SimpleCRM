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
var app_settings_1 = require("../../../app.settings");
require("leaflet-map");
require("style-loader!leaflet/dist/leaflet.css");
var LeafletMapsComponent = (function () {
    function LeafletMapsComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    LeafletMapsComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            var el = document.getElementById("leaflet-map");
            L.Icon.Default.imagePath = 'assets/img/vendor/leaflet';
            var map = L.map(el).setView([51.505, -0.09], 13);
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            L.marker([51.5, -0.09]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
        });
    };
    return LeafletMapsComponent;
}());
LeafletMapsComponent = __decorate([
    core_1.Component({
        selector: 'app-leaflet-maps',
        templateUrl: './leaflet-maps.component.html'
    }),
    __metadata("design:paramtypes", [app_settings_1.AppSettings])
], LeafletMapsComponent);
exports.LeafletMapsComponent = LeafletMapsComponent;
//# sourceMappingURL=leaflet-maps.component.js.map