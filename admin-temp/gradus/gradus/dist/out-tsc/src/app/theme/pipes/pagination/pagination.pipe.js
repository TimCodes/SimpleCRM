"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PaginationPipe = (function () {
    function PaginationPipe() {
    }
    PaginationPipe.prototype.transform = function (data, args) {
        if (!args) {
            args = {
                pageIndex: 0,
                pageSize: 6,
                length: data.length
            };
        }
        return this.paginate(data, args.pageSize, args.pageIndex);
    };
    PaginationPipe.prototype.paginate = function (array, page_size, page_number) {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    };
    return PaginationPipe;
}());
PaginationPipe = __decorate([
    core_1.Pipe({
        name: 'pagination'
    })
], PaginationPipe);
exports.PaginationPipe = PaginationPipe;
//# sourceMappingURL=pagination.pipe.js.map