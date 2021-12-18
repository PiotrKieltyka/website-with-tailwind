import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'site-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent {
  constructor(
    public route: ActivatedRoute,
  ) {
  }
}
