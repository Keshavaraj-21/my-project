import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ToastarserviceService } from '../toastarservice.service';

@Component({
  selector: 'app-billofuser',
  templateUrl: './billofuser.component.html',
  styleUrls: ['./billofuser.component.css'],
})
export class BillofuserComponent implements OnInit {
  billForm!: FormGroup;
  value: boolean = true;
  object: any = [];
  alldata: any;
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiserviceService,
    private alert: ToastarserviceService
  ) {
    /* TO DO document why this constructor is empty */
  }

  ngOnInit(): void {
    this.billForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      blockname: ['', [Validators.required]],
      maintainance: ['', [Validators.required]],
      housetax: ['', [Validators.required]],
      watertax: ['', [Validators.required]],
      parking: ['', [Validators.required]],
      charity: ['', [Validators.required]],
    });
  }
  postBill(Formvalue: any) {
    console.log(Formvalue);
    let userid = localStorage.getItem('user');
    console.log(userid);
    Formvalue.userid = userid;
    this.api.billdata(Formvalue, '').subscribe((data) => {
      console.log(data);
    });
    this.alert.showSuccess('Bill posted successfully..!', '');
    window.location.reload();
  }

  userid(arg: any) {
    console.log(arg.target.value);
    this.api.getuserid(arg.target.value).subscribe((data) => {
      console.log(data);
      this.alldata = data;
      this.alldata = this.alldata.docs;
      console.log(this.alldata);
      for (const i of this.alldata) {
        console.log(i._id);
        localStorage.setItem('user', i._id);
        this.object.push(i);
      }
    });
  }
}
