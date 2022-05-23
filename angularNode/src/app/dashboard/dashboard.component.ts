import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  form!: FormGroup;
  store: any = [];
  exchange!: any;

  alluser!: any;
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiserviceService
  ) {
    this.getuser();
  }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      gmail: ['', Validators.required],
      society: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      _id: [''],
      _rev: [''],
    });
  }

  adduser(FormValue: NgForm) {
    console.log(FormValue);
    this.api.logindata(FormValue).subscribe(
      (res: any) => {
        // console.log("hello"+res);
        console.log('Your data was posted successfully!');
        // this.signupform.reset();
      },
      (rej: any) => {
        console.log('opps! Can not post data' + rej);
      }
    );
    console.log(FormValue);
  }
  getuser() {
    this.api.getData().subscribe(
      (res) => {
        console.log(res);
        console.log('response is comming');
        this.alluser = res;
        // this.alluser = this.alluser.data;
        this.alluser = this.alluser.rows;
        console.log(this.alluser);
        for (const key in this.alluser) {
          if (Object.prototype.hasOwnProperty.call(this.alluser, key)) {
            const element = this.alluser[key];
            console.log(element.id);
            this.api.getAllData(element.id).subscribe(
              (res) => {
                console.log('get all user details', res);
                this.exchange = res;
                // this.exchange = this.exchange.data;
                this.store.push(this.exchange);
                console.log('data is came');
              },
              (rej) => {
                console.log('error' + rej);
              }
            );
          }
        }
      },
      (rej) => {
        console.log('opps! Somthing went wrong' + rej);
      }
    );
  }

  delete(data: any, data1: any) {
    // console.log("delete called"+data._id);
    // console.log("delete called"+data1._rev);
    this.api.deleteData(data._id, data1._rev).subscribe(
      (res) => {
        // console.log("delete response get");
        // console.log(res);
        console.log('your data has deleted, please refresh the page');
      },
      (rej) => {
        console.log('oops can not delete' + rej);
      }
    );
  }

  onEdit(row: any) {
    this.form.controls['name'].setValue(row.name);
    this.form.controls['username'].setValue(row.username);
    this.form.controls['age'].setValue(row.age);
    this.form.controls['date'].setValue(row.date);
    this.form.controls['_id'].setValue(row._id);
    this.form.controls['_rev'].setValue(row._rev);
  }

  update(formvalue: NgForm) {
    console.log(formvalue);
    this.api.updateData(formvalue).subscribe(
      (res) => {
        // console.log("update success");
        // console.log(res);
        console.log('Your data was updated successfully!');
      },
      (rej) => {
        console.log('can not update.....' + rej);
      }
    );
  }
}
