import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { BwitsTimelineComponent } from './bwits/bwits-timeline/bwits-timeline.component';
import { UserPageComponent } from './user-page/user-page.component';
import { FollowersComponent } from './followers/followers.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { CommentComponent } from './comment/comment.component';
import { AuthGuard } from './shared/services/auth-services/auth.guard';
import { AllUsersComponent } from './all-users/all-users.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: '', pathMatch: 'full',
    component: NewsFeedComponent,
    canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'profile/:id',
    component: UserPageComponent,
    children: [
      {path: 'bwits', component: BwitsTimelineComponent, outlet: 'userPage'},
      {path: 'following', component: FollowersComponent, outlet: 'userPage'},
      {path: 'followers', component: FollowersComponent, outlet: 'userPage'},
    ],
    canActivate: [AuthGuard]
  },
  {path: 'timeline',
    component: NewsFeedComponent,
    canActivate: [AuthGuard]},
    {path: 'users',
    component: AllUsersComponent,
    canActivate: [AuthGuard]},
  {path: 'bwit/comment/:id',
    component: CommentComponent,
    canActivate: [AuthGuard]},
  {path: 'profile/edit/:id',
    component: RegistrationComponent,
    canActivate: [AuthGuard]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
