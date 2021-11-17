import { NavMenuInterface } from './NavMenu.interface';

export const NavMenuModel: Array<NavMenuInterface> = [
  { text: 'Home', route: 'home', icon: 'fas fa-home', protected: false },
  {
    text: 'Profile',
    route: 'userinfo',
    icon: 'fas fa-id-badge',
    protected: true,
  },
  { text: 'Blog', route: 'blog', icon: 'far fa-sticky-note', protected: false },
  { text: 'Whoami', route: 'whoami', icon: 'fas fa-id-card', protected: false },
  {
    text: 'Sign Out',
    route: 'signout',
    icon: 'fas fa-sign-out-alt',
    protected: true,
  },
];
