import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'site-userinfo',
  template: `
    <section class='container w-full flex flex-col items-center justify-center' style="height: calc(100vh - 10rem)">
      <site-user-card
        class='w-11/12 md:w-5/6 lg:w-1/2 xl:w-1/3'
        [uid]='user?.uid'
        [photoURL]='user?.photoURL'
        [displayName]='user?.displayName'
        [email]='user?.email'
        [emailVerified]='user?.emailVerified'
        [phoneNumber]='user?.phoneNumber'
      ></site-user-card>
    </section>
  `,
  styles: [],
})
export class UserinfoComponent {
  user: firebase.User | undefined;

  constructor(
    private authService: AuthService,
  ) {
    this.user = this.authService.userData;
  }

}
