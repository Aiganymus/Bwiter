import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Person {
  joined_at: Date;
  username: string;
  nickname: string;
  profile_pic: string;
  status: string;
  token: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',

  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  DJANGO_SERVER = 'http://127.0.0.1:8000';

  form: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      username: [''],
      nickname: [''],
      profile_pic: [''],
      status: [''],
      password: ['']
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('profile_pic').setValue(file);
    }
  }

  onSubmit() {
    let input = new FormData();

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
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)

    this.http.post<Person>('http://127.0.0.1:8000/api/users/', input).subscribe(
      res => {
        console.log(res);
        this.loading = false;
        this.router.navigateByUrl('login');
        this.form.get('username').setValue(null);
        this.form.get('password').setValue(null);
        this.form.get('nickname').setValue(null);
        this.form.get('status').setValue(null);
        this.form.get('profile_pic').setValue(null);
        this.fileInput.nativeElement.value = '';
      },
      err => {
        console.log(err);
        this.loading = false;
      }
    );
    // setTimeout(() => {
    //   // FormData cannot be inspected (see "Key difference"), hence no need to log it here
    //   alert('done!');
    //   this.loading = false;
    // }, 1000);
  }

  //   }
}
