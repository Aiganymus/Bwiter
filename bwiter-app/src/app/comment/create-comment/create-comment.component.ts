import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user-services/user.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})

export class CreateCommentComponent implements OnInit {
  @Input() bwitId: string;
  submitted = false;
  user: User;
  body = '';
  picture = '';
  preivew = '';
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .then(res => {
        this.user = res;
      });
  }
  submit() {
    if (!this.body || this.body.length > 20) {
      this.submitted = true;
      return;
    }
  }

}
