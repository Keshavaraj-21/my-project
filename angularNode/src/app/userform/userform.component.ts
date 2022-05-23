import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  successMessage: string = '';

  signupform!: FormGroup;

  empRecord: any = {
    username: '',
    phonenumber: '',
    gmail: '',
    society: '',
    password: '',
    confirmpassword: '',
  };
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiserviceService
  ) {}

  ngOnInit(): void {
    this.signupform = this.formbuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      gmail: ['', Validators.required],
      society: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    });
  }
  // login() {
  //   this.successMessage = 'Successfully Registered...';
  //   console.log(this.signupform);
  // }

  get username() {
    return this.signupform.get('username');
  }
  get phone() {
    return this.signupform.get('phone');
  }
  get gmail() {
    return this.signupform.get('gmail');
  }
  // get society() {
  //   return this.society.get('society');
  // }
  get password() {
    return this.signupform.get('password');
  }
  get confirmpassword() {
    return this.signupform.get('confirmpassword');
  }

  login(FormValue: NgForm) {
    this.api.logindata(FormValue).subscribe(
      (data: any) => {
        console.log(alert('Data posted'));
        this.signupform.reset();
      },
      (rej) => {
        console.log('Error' + rej);
      }
    );
    console.log(FormValue);
  }
}
