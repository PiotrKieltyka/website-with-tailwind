import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import firebase from 'firebase/compat';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'site-user-card',
  templateUrl: './user-card.component.html',
  styles: [],
})
export class UserCardComponent {
  @Input() uid?: null | string = '';
  @Input() displayName?: null | string = '';
  @Input() photoURL?: null | string = '';
  @Input() email?: null | string = '';
  @Input() emailVerified?: null | boolean = false;
  @Input() phoneNumber?: null | string = '';

  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
  ) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserProfileDialog, {
      width: '350px',
      data: {
        uid: this.uid,
        displayName: this.displayName,
        photoURL: this.photoURL,
        email: this.email,
        emailVerified: this.emailVerified,
        phoneNumber: this.phoneNumber,
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.updateProfile(result);
      }
    });
  }

}

@Component({
  selector: 'site-userinfo-dialog',
  template: `
    <div class='container h-full w-full text-center'>
      <h2 class='text-sm font-light mb-4'>User Profile Editor</h2>
      <div class='w-full flex flex-col items-center'>
        <img class='rounded-full w-32 h-32' [src]='data.photoURL' alt='User Profile Picture'>
        <div class='mt-4 space-y-2 flex flex-col items-center'>
          <label class="text-xs font-light text-gray-500" for='displayName'>Display Name</label>
          <input class='focus:outline-none ring-white focus:ring-2 focus:ring-gray-700 p-2 rounded-xl bg-gray-100 border-none font-light text-gray-600' [(ngModel)]='data.displayName' #displayName>
          <label class="text-xs font-light text-gray-500" for='email'>E-Mail</label>
          <input class='focus:outline-none ring-white focus:ring-2 focus:ring-gray-700 p-2 rounded-xl bg-gray-100 border-none font-light text-gray-600' [(ngModel)]='data.email' #email>
          <label class="text-xs font-light text-gray-500" for='phoneNumber'>Phone Number</label>
          <input class='focus:outline-none ring-white focus:ring-2 focus:ring-gray-700 p-2 rounded-xl bg-gray-100 border-none font-light text-gray-600' [(ngModel)]='data.phoneNumber' #phoneNumber>
          <label class="text-xs font-light text-gray-500" for='photoUrl'>Profile Photo URL</label>
          <input class='focus:outline-none ring-white focus:ring-2 focus:ring-gray-700 p-2 rounded-xl bg-gray-100 border-none font-light text-gray-600' [(ngModel)]='data.photoURL' #photoURL>
        </div>
        <div class='w-full flex flex-row justify-evenly text-xs font-light mt-8'>
          <button class='text-green-400 p-2' (click)='onNoClick()'>dismiss</button>
          <button class='text-red-400 p-2' [mat-dialog-close]='data'>save</button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class UserProfileDialog {
  constructor(
    public dialogRef: MatDialogRef<UserProfileDialog>,
    @Inject(MAT_DIALOG_DATA) public data: firebase.User,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
