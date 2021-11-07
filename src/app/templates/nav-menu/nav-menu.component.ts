import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavMenuInterface } from '../../models/NavMenu.interface';
import { NavMenuModel } from '../../models/NavMenu.model';

@Component({
  selector: 'site-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent {
  isLoggedIn: boolean = false;
  navigation: Array<NavMenuInterface> = NavMenuModel;

  constructor(public authService: AuthService) {
    this.authService.isLoggedIn.subscribe(
      (value: boolean) => (this.isLoggedIn = value),
    );
  }
}
