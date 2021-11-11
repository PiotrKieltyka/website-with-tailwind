import { Component } from '@angular/core';
import { slideInAnimation } from './route-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  // animations: [slideInAnimation],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Piotr Kieltyka website with TailwindCSS';

  constructor() {
    console.log(
      '%c%s',
      'color: #939393; background: transparent; font-size: 24pt; background-clip: text; text-shadow: 0px 1px 3px rgba(243,243,243,.5);',
      'Hello stranger! Are you lost?',
    );
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
