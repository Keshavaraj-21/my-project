import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent implements OnInit {
  object: any = [];
  allData: any;
  flag = 0;
  adminform!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiserviceService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.adminform = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9@!_]{6,}')],
      ],
    });
    this.api.getadmin().subscribe((data) => {
      console.log(data);
      this.allData = data;
      this.allData = this.allData.docs;
      console.log(this.allData);
      for (const i of this.allData) {
        console.log(i);
        this.object.push(i);
      }
    });
  }

  adminFormsData(formvalue: any) {
    for (const i of this.object) {
      if (
        i.username == formvalue.username &&
        i.password == formvalue.password
      ) {
        this.flag = 1;
      }
    }
    if (this.flag == 1) {
      this.toastr.success('Login success');
      this.router.navigate(['/admindashboard']);
    } else {
      this.toastr.error('Invalid user');
      location.reload();
    }
  }
}
