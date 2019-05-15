import { Component, OnInit, Input } from '@angular/core';
import { Bwit } from 'src/app/shared/models/bwit';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user-services/user.service';
import { BwitService } from 'src/app/shared/services/bwit-services/bwit.service';

@Component({
  selector: 'app-bwit',
  templateUrl: './bwit.component.html',
  styleUrls: ['./bwit.component.scss']
})
export class BwitComponent implements OnInit {
  @Input() bwit: Bwit;
  user: User;

  constructor(private userService: UserService,
              private bwitService: BwitService) { }

  ngOnInit() {
    this.userService.getCurrentUser()
        .then(res => {
          this.user = res;
        });
  }

  pressLike(e) {
    e.target.style.color = 'pink';
    e.target.parentElement.style.color = 'pink';
  }

  delete() {
    this.bwitService.deleteBwit(this.bwit.id)
        .then(res => {
          console.log(res);
          window.location.reload();
        });
  }
}
