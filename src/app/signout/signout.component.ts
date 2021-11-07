import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'site-signout',
  template: '',
  styles: [],
})
export class SignoutComponent {
  constructor(private authService: AuthService) {
    this.authService.signout();
  }
}
