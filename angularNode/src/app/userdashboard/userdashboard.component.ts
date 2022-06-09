import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
})
export class UserdashboardComponent implements OnInit {
  object: any = [];
  allData: any;
  constructor(private api: ApiserviceService) {
    this.getdetails();
  }

  ngOnInit(): void {
    /* TO DO document why this method 'ngOnInit' is empty */
  }
  getdetails() {
    this.api.getbill().subscribe((data) => {
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
}
