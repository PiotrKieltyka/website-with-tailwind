import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  redirectUrl: string = '';
  public userData: firebase.User | undefined;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        sessionStorage.setItem('user', JSON.stringify(user.uid));
      } else {
        sessionStorage.setItem('user', '');
      }
    });
  }

  async updateProfile(user: firebase.User): Promise<void> {
    ((await this.angularFireAuth.currentUser) as firebase.User)
      .updateProfile({
        displayName: user.displayName,
        photoURL: user.photoURL,
      })
      .then()
      .catch((err: Error) => err.message);
  }

  signIn(email: string, password: string): Promise<void> {
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn.next(true);
        this.userData = res.user as firebase.User;
        this.router.navigateByUrl('userinfo');
      })
      .catch((err) => err.message);
  }

  signout(): void {
    this.angularFireAuth.signOut().then(() => {
      this.isLoggedIn.next(false);
      sessionStorage.removeItem('user');
      this.router.navigateByUrl('home');
    });
  }
}
