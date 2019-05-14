import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { BwitsTimelineComponent } from './bwits/bwits-timeline/bwits-timeline.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: '',
  component: BwitsTimelineComponent},
  {path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
