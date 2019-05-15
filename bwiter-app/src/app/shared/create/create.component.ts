import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user-services/user.service';
import { Bwit } from '../models/bwit';
import { BwitService } from '../services/bwit-services/bwit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Output() newBwit = new EventEmitter();
  submitted = false;
  user: User;
  body = '';
  picture = '';
  preivew = '';

  constructor(private userService: UserService,
              private bwitService: BwitService, private router:Router) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.picture = file;
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.preivew = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  submit() {
    const input = new FormData();

    input.append('body', this.body);
    input.append('picture', this.picture);

    if (!this.body || this.body.length > 20) {
      this.submitted = true;
      return;
    }
    const bwit: Bwit = {
      body: this.body,
      picture: this.picture,
    };
    this.bwitService.createBwit(input)
        .then(res => {
          this.body = '';
          this.preivew = '';
          this.picture = '';
          this.newBwit.emit(res);
        });
    this.router.navigateByUrl('');
  }

}
