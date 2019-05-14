import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru-KZ';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { FollowerComponent } from './followers/follower/follower.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { BwitsModule } from './bwits/bwits.module';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FollowersComponent } from './followers/followers.component';
import { AuthInterceptor } from './shared/services/auth-services/auth.interceptor';
import { UserPageComponent } from './user-page/user-page.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { HodorComponent } from './hodor/hodor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    FollowerComponent,
    ProfilecardComponent,
    RegistrationComponent,
    LoginComponent,
    FollowersComponent,
    UserPageComponent,
    NewsFeedComponent,
    NavbarComponent,
    LoginComponent,
    HodorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BwitsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

registerLocaleData(localeRu);
