import { Component, OnInit, Input } from '@angular/core';
import { Bwit } from 'src/app/shared/models/bwit';
import { BwitService } from 'src/app/shared/services/bwit-services/bwit.service';
import { Comment } from 'src/app/shared/models/comment';
import { CommentService } from 'src/app/shared/services/comment-services/comment.service';
import { UserService } from 'src/app/shared/services/user-services/user.service';

@Component({
  selector: 'app-comment-entity',
  templateUrl: './comment-entity.component.html',
  styleUrls: ['./comment-entity.component.scss']
})
export class CommentEntityComponent implements OnInit {
  @Input() comment: Comment;
  myComment = false;

  constructor(private bwitService: BwitService,
              private commentService: CommentService,
              private userService: UserService) { }

  ngOnInit() {
    this.userService.getCurrentUser()
        .then(res => {
          this.myComment = res.id === this.comment.author.id;
        });
  }
}
