import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-billofuser',
  templateUrl: './billofuser.component.html',
  styleUrls: ['./billofuser.component.css'],
})
export class BillofuserComponent implements OnInit {
  billform!: FormGroup;
  value: boolean = true;
  object: any = [];
  alldata: any;
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiserviceService
  ) {}

  ngOnInit(): void {
    this.billform = this.formbuilder.group({
      username: ['', [Validators.required]],
      phone: [
        '',
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]*@gmail.com')],
      ],
      blockname: ['', Validators.required],
      maintainance: ['', Validators.required],
      housetax: ['', Validators.required],
      watertax: ['', Validators.required],
      parking: ['', Validators.required],
      charity: ['', Validators.required],
    });
  }
  postBill(Formvalue: any) {
    console.log(Formvalue);
    let userid = localStorage.getItem('user');
    console.log(userid);
    Formvalue.userid = userid;
    alert('Your Data Posted....');

    this.api.billdata(Formvalue, '').subscribe((data) => {
      console.log(data);
    });
  }

  userid(arg: any) {
    console.log(arg.target.value);
    this.api.getuserid(arg.target.value).subscribe((data) => {
      console.log(data);
      alert('Data is fetching');
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
