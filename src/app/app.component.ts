import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // template:`
  // <div>
  //   <p-nav></p-nav>
  //   <div class="here">
  //     <h1>Hear ye, hear ye the time has come to meet your makers</h1>
  //     <a [routerLink]="['/friends']">click here to find out!</a>
  //   </div>
  // </div>
  // <div class="container">
  //   <router-outlet></router-outlet>
  // </div>
  // `
})
export class AppComponent {
  title: string = 'Hello';
}
