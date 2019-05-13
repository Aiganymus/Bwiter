import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth-services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;

  form: FormGroup;
  loading = false;

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
    this.createForm();
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

    console.log(this.form.get('username').value);
    console.log(this.form.get('nickname').value);
    console.log(this.form.get('password').value);
    console.log(this.form.get('profile_pic').value);
    console.log(this.form.get('status').value);

    input.append('username', this.form.get('username').value);
    input.append('nickname', this.form.get('nickname').value);
    input.append('profile_pic', this.form.get('profile_pic').value);
    input.append('status', this.form.get('status').value);
    input.append('password', this.form.get('password').value);
    this.loading = true;

    this.authService.register(input)
        .then(
          res => {
            console.log(res);
            this.loading = false;
            this.router.navigateByUrl('login');
          },
          err => {
            console.error(err);
            this.loading = false;
          }
        );
  }

}
