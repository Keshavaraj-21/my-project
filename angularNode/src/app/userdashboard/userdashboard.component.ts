import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
})
export class UserdashboardComponent implements OnInit {
  object: any = [];
  alldata: any;
  constructor(private api: ApiserviceService) {
    this.getdetails();
  }

  ngOnInit(): void {
    /* TODO document why this method 'ngOnInit' is empty */
  }
  getdetails() {
    this.api.getbill().subscribe((data) => {
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
