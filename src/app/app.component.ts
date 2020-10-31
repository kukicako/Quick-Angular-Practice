import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div>
    <p-nav></p-nav>
    <p-friends></p-friends>
  </div>
  `
})
export class AppComponent {
  title: string = 'Hello';
}
