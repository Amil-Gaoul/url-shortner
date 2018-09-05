import { trigger, state, style, transition, animate } from '@angular/animations';

export const FlyInOutAnimation = [
    trigger('flyInOut', [
        state('in', style({
            transform: 'translateX(0)'
        })),
        transition(':enter', [
            style({
                transform: 'translateX(100%)'
            }),
            animate(300)
        ]),
        transition(':leave', [
            animate(300, style({
                transform: 'translateX(100%)'
            }))
        ])
    ])
];
