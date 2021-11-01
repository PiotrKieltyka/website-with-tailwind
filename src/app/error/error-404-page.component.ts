import { Component } from '@angular/core';

@Component({
  selector: 'site-error-404-page',
  template: `
    <section class='container'>
      <div class='h-screen w-full flex flex-col justify-center items-center text-center'>
        <h1 class='text-6xl font-extrabold'>Oops!</h1>
        <h2 class='text-3xl pt-4'>Are You lost?</h2>
        <p class='my-12 w-2/3 sm:w-1/2 text-base text-gray-600'>404 - Page not found</p>
        <button routerLink='/home' class='uppercase'>
          <span>Go to homepage</span>
        </button>
      </div>
    </section>
  `,
  styles: []
})
export class Error404PageComponent {}
