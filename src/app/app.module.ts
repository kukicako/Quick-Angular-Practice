import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent} from './nav/nav.component';
import { FriendsComponent } from './friends/friends.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FriendsComponent,
  ],
  imports: [
    BrowserModule,
    //import http after browsermodule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
