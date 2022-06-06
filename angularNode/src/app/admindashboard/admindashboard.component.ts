import { Component, OnInit } from '@angular/core';

import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
})
export class AdmindashboardComponent implements OnInit {
  object: any = [];
  alldata: any;
  objectss: any = [];
  alldatass: any;

  constructor(private api: ApiserviceService) {
    this.getuser();
  }

  ngOnInit(): void {
    /* TODO document why this method 'ngOnInit' is empty */
  }

  getuser() {
    this.api.getUser().subscribe((data) => {
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

  deluser(data: any, data1: any) {
    this.api.remove(data._id, data1._rev).subscribe((res) => {
      alert('Your Data has been deleted from the database.');
      location.reload();
    });
  }
}
