"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.blockTransition = animations_1.trigger('blockTransition', [
    animations_1.transition(':enter', [
        animations_1.query('.block', animations_1.style({ opacity: 0 }), { optional: true }),
        animations_1.query('.block', animations_1.stagger(150, [
            animations_1.style({ transform: 'translateY(100px)' }),
            animations_1.animate('1s cubic-bezier(.75,-0.48,.26,1.52)', animations_1.style({ transform: 'translateY(0px)', opacity: 1 })),
        ]), { optional: true }),
    ]),
    animations_1.transition(':leave', [
        animations_1.query('.block', animations_1.stagger(100, [
            animations_1.style({ transform: 'translateY(0px)', opacity: 1 }),
            animations_1.animate('1s cubic-bezier(.75,-0.48,.26,1.52)', animations_1.style({ transform: 'translateY(100px)', opacity: 0 })),
        ]), { optional: true }),
    ])
]);
exports.listTransition = animations_1.trigger('listTransition', [
    animations_1.transition(':enter', [
        animations_1.query('.list', animations_1.style({ opacity: 0 }), { optional: true }),
        animations_1.query('.list', animations_1.stagger('300ms', [
            animations_1.animate('1s ease-in', animations_1.keyframes([
                animations_1.style({
                    opacity: 0, transform: 'translateY(-75px)', offset: 0
                }),
                animations_1.style({
                    opacity: .5, transform: 'translateY(35px)', offset: 0.3
                }),
                animations_1.style({
                    opacity: 1, transform: 'translateY(0)', offset: 1
                })
            ]))
        ]), { optional: true })
    ]),
    animations_1.transition(':leave', [
        animations_1.query('.list', animations_1.stagger('300ms', [
            animations_1.animate('1s ease-in', animations_1.keyframes([
                animations_1.style({
                    opacity: 1, transform: 'translateY(0)', offset: 0
                }),
                animations_1.style({
                    opacity: .5, transform: 'translateY(35px)', offset: 0.3
                }),
                animations_1.style({
                    opacity: 0, transform: 'translateY(-75px)', offset: 1
                })
            ]))
        ]), { optional: true })
    ])
]);
//# sourceMappingURL=app-animation.js.map