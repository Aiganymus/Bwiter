import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { BwitsTimelineComponent } from './bwits/bwits-timeline/bwits-timeline.component';
import { UserPageComponent } from './user-page/user-page.component';
import { FollowersComponent } from './followers/followers.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { CommentComponent } from './comment/comment.component';
import { CommentEntityComponent } from './comment/comment-entity/comment-entity.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: '', pathMatch: 'full', component: NewsFeedComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile/:id',
    component: UserPageComponent,
    children: [
      {path: 'bwits', component: BwitsTimelineComponent, outlet: 'userPage'},
      {path: 'following', component: FollowersComponent, outlet: 'userPage'},
      {path: 'followers', component: FollowersComponent, outlet: 'userPage'},
    ]
  },
  {path: 'timeline', component: NewsFeedComponent},
  {path: 'bwit/:id/comment', component: CommentComponent},
  {path: 'comment', component: CommentEntityComponent},
  {path: 'profile/edit/:id', component: RegistrationComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
