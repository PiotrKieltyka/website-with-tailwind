import { Component, Input } from '@angular/core';

@Component({
  selector: 'site-user-card',
  templateUrl: './user-card.component.html',
  styles: []
})
export class UserCardComponent {
  @Input() uid?: null | string = '';
  @Input() displayName?: null | string = '';
  @Input() photoURL?: null | string = '';
  @Input() email?: null | string = '';
  @Input() emailVerified?: null | boolean = false;
  @Input() phoneNumber?: null | string = '';
}
