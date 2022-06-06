import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent implements OnInit {
  alldata: any;
  flag = 0;
  object: any = [];
  userform!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiserviceService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userform = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9@!_]{6,}')],
      ],
    });

    this.api.getUser().subscribe((data) => {
      console.log(data);
      console.log('Data was fetching');
      this.alldata = data;
      this.alldata = this.alldata.docs;
      console.log(this.alldata);
      for (const i of this.alldata) {
        this.object.push(i);
        console.log('Fetched successfuly');
      }
    });
  }

  userFormData(formvalue: any) {
    console.log(formvalue);
    for (const i of this.object) {
      if (
        i.username == formvalue.username &&
        i.password == formvalue.password
      ) {
        var id = i._id;
        console.log(id);
        localStorage.setItem('user', i._id);
        this.flag = 1;
      }
    }

    if (this.flag == 1) {
      this.toastr.success('Login success');
      this.router.navigate(['/userdashboard']);
    } else {
      this.toastr.error('invalid user');
      location.reload();
    }
  }
}
