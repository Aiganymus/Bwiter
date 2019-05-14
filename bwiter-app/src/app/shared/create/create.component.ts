import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user-services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  submitted = false;
  user: User;
  body = '';
  picture = '';
  preivew = '';

  constructor(private userService: UserService) { }

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
    if (!this.body || this.body.length > 20) {
      this.submitted = true;
      return;
    }
  }

}
