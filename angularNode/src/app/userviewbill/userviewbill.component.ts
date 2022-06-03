import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-userviewbill',
  templateUrl: './userviewbill.component.html',
  styleUrls: ['./userviewbill.component.css'],
})
export class UserviewbillComponent implements OnInit {
  object: any = [];
  alldata: any;
  constructor(private api: ApiserviceService) {}

  ngOnInit(): void {}

  getbilluser() {
    let id = localStorage.getItem('user');
    this.api.getbillofuser(id).subscribe((data) => {
      console.log(data);
      // alert('Data was fetching....');
      this.alldata = data;
      this.alldata = this.alldata.docs;
      console.log(this.alldata);
      for (const i of this.alldata) {
        console.log(i);
        this.object.push(i);
      }
    });
  }
}
