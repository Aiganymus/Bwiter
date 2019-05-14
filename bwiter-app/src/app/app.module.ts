import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru-KZ';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BwitsModule } from './bwits/bwits.module';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './shared/services/auth-services/auth.interceptor';
<<<<<<< HEAD
import { KakakhaComponent } from './kakakha/kakakha.component';
import { HodorComponent } from './hodor/hodor.component';
=======
>>>>>>> 2b5a9dd9647b68923c380a64857ae7c106af0223

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
<<<<<<< HEAD
    LoginComponent,
    HodorComponent
=======
    LoginComponent
>>>>>>> 2b5a9dd9647b68923c380a64857ae7c106af0223
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
