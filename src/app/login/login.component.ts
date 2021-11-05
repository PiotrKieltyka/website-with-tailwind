import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'site-login',
  template: `
    <form [formGroup]='loginForm' autocomplete='off'>
      <input type='text' formControlName='email' />
      <input type='password' formControlName='password' />
      <button (click)='authService.signIn(loginForm.get("email")?.value, loginForm.get("password")?.value)'
      >Submit</button>
    </form>
  `,
  styles: [],
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
