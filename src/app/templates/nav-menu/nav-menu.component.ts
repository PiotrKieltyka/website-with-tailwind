import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavMenuInterface } from '../../models/NavMenu.interface';
import { NavMenuModel } from '../../models/NavMenu.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'site-nav-menu',
  template: `
    <nav class="flex flex-row items-center justify-between space-x-1">
      <ng-container *ngFor="let navItem of navigation; let i = index">
        <a
          class="px-1 md:px-4 lg:px-8 py-2 font-light text-sm cursor-pointer hover:bg-white hover:shadow hover:shadow-blue-200 rounded-xl transition-colors"
          *ngIf="
            navItem.protected === false ||
            (navItem.protected && isLoggedIn$ | async)
          "
          routerLink="{{ navItem.route }}"
          [routerLinkActive]="i === 0 ? 'active-blue' : 'active-indigo'"
          ><i class="{{ navItem.icon }} mr-2 hidden lg:inline"></i>
          {{ navItem.text }}
        </a>
      </ng-container>
    </nav>
  `,
  styles: [
    `
      .active-blue {
        @apply bg-white;
        @apply shadow-inner;
        @apply shadow-blue-300;
      }
      .active-indigo {
        @apply bg-white;
        @apply shadow-inner;
        @apply shadow-indigo-300;
      }
    `,
  ],
})
export class NavMenuComponent {
  isLoggedIn$: Observable<boolean>;
  navigation: Array<NavMenuInterface> = NavMenuModel;

  constructor(public authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
}
