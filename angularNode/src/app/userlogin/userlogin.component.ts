import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent implements OnInit {
  successMessage: string = '';
  userform!: FormGroup;
  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userform = this.formbuilder.group({
      username: [
        '',
        Validators.required,
        // Validators.pattern('[A-Za-z0-9]*@gmail.com'),
      ],
      password: [
        '',
        Validators.required,
        // Validators.pattern('[A-Za-z0-9@!_]{6,}'),
      ],
    });
  }
  login() {
    this.successMessage = 'Successfully Loggined In...';
    console.log(this.userform);
    // console.log(this.successMessage);
  }
}
