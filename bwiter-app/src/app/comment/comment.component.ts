import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../shared/services/comment-services/comment.service';
import { BwitService } from '../shared/services/bwit-services/bwit.service';
import { Bwit } from '../shared/models/bwit';
import { Comment } from '../shared/models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  bwitId: string;
  bwit: Bwit;
  comments: Comment[];

  constructor(private commentService: CommentService,
              private bwitService: BwitService,
              private route: ActivatedRoute,
              private router: Router) { }

    ngOnInit() {
      this.route.paramMap.subscribe(param => {
        this.bwitId = param.get('id');
        if (this.bwitId) {
          this.bwitService.getBwit(this.bwitId)
              .subscribe(res => {
                this.bwit = res;
                console.log(this.bwit);
                // this.commentService.getComments(this.bwitId)
                //     .then(
                //       results => {
                //         this.comments = results;
                //       },
                //       err => {
                //         console.error(err);
                //       }
                //     );
                this.comments = this.commentService.getComments(this.bwitId);
                console.log(this.comments);
              });
        }
      });
    }

  }
