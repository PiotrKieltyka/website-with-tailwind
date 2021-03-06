import {
  animate,
  animateChild,
  animation,
  group,
  query,
  style,
  transition,
  trigger,
  keyframes,
} from '@angular/animations';

export const transAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}',
  }),
  animate('{{ time }}'),
]);

const moveToRight = [
  style({ position: 'relative' }),
  query(
    ':enter, :leave',
    [
      style({
        position: 'absolute',
        top: -1,
        left: -1,
        width: '99%',
      }),
    ],
    { optional: true },
  ),
  query(':enter', [style({ left: '99%' })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('299ms ease-out', style({ left: '-100%' }))]),
    query(':enter', [animate('299ms ease-out', style({ left: '0%' }))]),
  ]),
  query(':enter', animateChild()),
];

const moveToLeft = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: -1,
      left: -1,
      width: '99%',
    }),
  ]),
  query(':enter', [style({ left: '-101%' })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('299ms ease-out', style({ left: '100%' }))]),
    query(':enter', [animate('299ms ease-out', style({ left: '0%' }))]),
  ]),
  query(':enter', animateChild()),
];

const moveDown = [
  query(
    ':enter, :leave',
    style({
      backfaceVisibility: 'hidden',
      overflow: 'hidden',
      position: 'fixed',
      transformStyle: 'preserve-3d',
      width: '100%',
    }),
    { optional: true },
  ),
  group([
    query(
      ':enter',
      [
        style({ 'z-index': 9999 }),
        animate(
          '1s 0s ease',
          keyframes([
            style({
              transform: 'translateY(-100%)',
              offset: 0,
              'z-index': '9999',
            }),
            style({ transform: 'translateY(0)', offset: 1 }),
          ]),
        ),
      ],
      { optional: true },
    ),
    query(
      ':leave',
      [
        animate(
          '.8s 0s ease-in-out',
          keyframes([
            style({ transform: 'translateY(0%)', offset: 0 }),
            style({ transform: 'translateY(100%)', opacity: '0', offset: 1 }),
          ]),
        ),
      ],
      { optional: true },
    ),
  ]),
];

export const slideInAnimation = trigger('routeAnimations', [
  transition('HomeComp => UserComp', moveToRight),
  transition('HomeComp => BlogComp', moveToRight),
  transition('HomeComp => WhoamiComp', moveToRight),
  transition('UserComp => BlogComp', moveToRight),
  transition('UserComp => WhoamiComp', moveToRight),
  transition('UserComp => HomeComp', moveToLeft),
  transition('BlogComp => WhoamiComp', moveToRight),
  transition('BlogComp => UserComp', moveToLeft),
  transition('BlogComp => HomeComp', moveToLeft),
  transition('WhoamiComp => BlogComp', moveToLeft),
  transition('WhoamiComp => UserComp', moveToLeft),
  transition('WhoamiComp => HomeComp', moveToLeft),
  transition('HomeComp => SignInComp', moveDown),
  transition('WhoamiComp => SignInComp', moveDown),
]);
