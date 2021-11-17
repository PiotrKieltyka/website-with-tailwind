import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    const url: string = state.url;
    return this.authService.isLoggedIn.pipe(
      map((isLoggedIn) => {
        if (isLoggedIn) {
          return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigateByUrl('signin');
        return false;
      }),
    );
  }
}
