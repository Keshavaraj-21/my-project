import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent implements OnInit {
  userform!: FormGroup;
  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userform = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
