import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'site-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss'],
})
export class UserinfoComponent {
  user: firebase.User | undefined;

  constructor(
    private authService: AuthService,
  ) {
    this.user = this.authService.userData;
  }

}
