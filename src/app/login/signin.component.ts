import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'site-login',
  template: `
    <div class="container text-center" style="height: calc(100vh - 10rem)">
      <form
        class="flex flex-col items-center justify-center h-full space-y-4"
        [formGroup]="loginForm"
      >
        <input
          class="p-2 text-sm font-light rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-700"
          placeholder="root"
          type="text"
          formControlName="email"
          autocomplete="off"
        />
        <input
          class="p-2 text-sm font-light rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-700"
          placeholder="passwd"
          type="password"
          formControlName="password"
          autocomplete="off"
        />
        <button
          class="px-4 py-2 rounded-lg bg-white shadow-inner active:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          (click)="
            authService.signIn(
              loginForm.get('email')?.value,
              loginForm.get('password')?.value
            )
          "
          [disabled]="loginForm.invalid"
        >
          Submit
        </button>
      </form>
    </div>
  `,
  styles: [],
})
export class SigninComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
