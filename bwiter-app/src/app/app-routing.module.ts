import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { BwitsTimelineComponent } from './bwits/bwits-timeline/bwits-timeline.component';
import { UserPageComponent } from './user-page/user-page.component';
import { FollowersComponent } from './followers/followers.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: '',
  component: BwitsTimelineComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile/:id',
    component: UserPageComponent,
    children: [
      {path: 'bwits', component: BwitsTimelineComponent, outlet: 'userPage'},
      {path: 'following', component: FollowersComponent, outlet: 'userPage'},
      {path: 'followers', component: FollowersComponent, outlet: 'userPage'},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
