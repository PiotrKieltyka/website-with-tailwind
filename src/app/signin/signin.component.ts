import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'site-login',
  templateUrl: 'signin.component.html',
  styles: [],
})
export class SigninComponent {
  loginForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, public authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
