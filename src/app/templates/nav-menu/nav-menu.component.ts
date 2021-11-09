import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavMenuInterface } from '../../models/NavMenu.interface';
import { NavMenuModel } from '../../models/NavMenu.model';

@Component({
  selector: 'site-nav-menu',
  template: `
    <nav class='flex flex-row items-center justify-between'>
      <ng-container *ngFor='let navItem of navigation'>
        <a class='px-1 md:px-8 font-light text-sm cursor-pointer hover:bg-gray-200 rounded-xl px-4 py-2'
           *ngIf='(navItem.protected === false) || (navItem.protected && isLoggedIn)'
           routerLink='{{navItem.route}}' routerLinkActive='active'
        ><i class='{{navItem.icon}} mr-2 hidden sm:inline'></i>
          {{navItem.text}}
        </a>
      </ng-container>
    </nav>
  `,
  styles: [`
    .active {
      @apply border-b-2 rounded-b-none;
    }
  `]
})
export class NavMenuComponent implements OnDestroy {
  isLoggedIn: boolean = false;
  navigation: Array<NavMenuInterface> = NavMenuModel;

  constructor(public authService: AuthService) {
    this.authService.isLoggedIn.subscribe(
      (value: boolean) => (this.isLoggedIn = value),
    );
  }

  ngOnDestroy() {
    this.authService.isLoggedIn.unsubscribe();
  }
}
