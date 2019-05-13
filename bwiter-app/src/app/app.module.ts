import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru-KZ';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { FollowerComponent } from './follower/follower.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { BwitsModule } from './bwits/bwits.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    FollowerComponent,
    ProfilecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BwitsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeRu);
