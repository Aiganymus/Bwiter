import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user-services/user.service';
import { User } from '../shared/models/user'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;

  form: FormGroup;
  loading = false;
  user: User;
  userId: string;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.userId = param.get('id');
      if (this.userId) {
        this.user = this.userService.getCurrentUser();
        this.form = new FormGroup({
          username: new FormControl(this.user.username, Validators.required),
          nickname: new FormControl(this.user.nickname, Validators.required),
          profile_pic: new FormControl(this.user.profile_pic, Validators.required),
          status: new FormControl(this.user.status, Validators.required),
          password: new FormControl(this.user.password, Validators.required),
        });
      } else {
        this.createForm();
      }
    });

  }

  createForm() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      nickname: new FormControl('', Validators.required),
      profile_pic: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('profile_pic').setValue(file);
    }
  }

  onSubmit() {
    const input = new FormData();

    input.append('username', this.form.get('username').value);
    input.append('nickname', this.form.get('nickname').value);
    input.append('profile_pic', this.form.get('profile_pic').value);
    input.append('status', this.form.get('status').value);
    input.append('password', this.form.get('password').value);
    this.loading = true;

    if (this.userId) {
      this.userService.updateUser(input)
          .then(
            res => {
              console.log(res);
              this.router.navigate(['/profile', this.userId, {outlets: {userPage: 'bwits'}}]);
            },
            err => {
              console.error(err);
            });
    } else {
      this.userService.createUser(input)
          .then(
            res => {
              console.log(res);
              this.router.navigateByUrl('login');
            },
            err => {
              console.error(err);
            }
          );
    }
  }

  delete() {
    this.userService.deleteUser()
        .then(
          res => {
            this.userService.destroyCurrentUser();
            this.router.navigateByUrl('registration');
          },
          err => {
            console.error(err);
          }
        )
  }

}
