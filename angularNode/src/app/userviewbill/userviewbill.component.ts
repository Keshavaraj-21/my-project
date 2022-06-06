import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    /* TODO document why this method 'ngOnInit' is empty */
  }

  getbilluser() {
    let id = localStorage.getItem('user');
    this.api.getbillofuser(id).subscribe((data) => {
      console.log(data);
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
