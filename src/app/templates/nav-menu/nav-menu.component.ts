import { Component } from '@angular/core';

@Component({
  selector: 'site-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  navMenu: Array<{text: string; route: string; icon: string}> = [
    {text: 'Home', route: 'home', icon: 'fas fa-home'},
    {text: 'Blog', route: 'blog', icon: 'far fa-sticky-note'},
    {text: 'Whoami', route: 'whoami', icon: 'fas fa-id-card'}
  ];

}
