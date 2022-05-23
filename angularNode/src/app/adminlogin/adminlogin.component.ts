import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent implements OnInit {
  successMessage: string = '';
  adminform!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiserviceService,
    private router: Router
  ) {
    this.adminform = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // this.adminform = this.formbuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
  }

  // alogin() {
  //   this.successMessage = 'Successfully Loggined In...';
  // }

  alogin(FormValue: any) {
    console.log(FormValue.username);
    this.api.getdata(FormValue.username).subscribe((data: any) => {
      console.log(data);
      if (
        data.id == FormValue.username &&
        data.password == FormValue.password
      ) {
        this.router.navigate(['dashboard']);
        alert('Verified');
      } else {
        alert('err');
      }
    });
    console.log(FormValue);
  }

  get username() {
    return this.adminform.get('username');
  }
  get password() {
    return this.adminform.get('password');
  }
}
