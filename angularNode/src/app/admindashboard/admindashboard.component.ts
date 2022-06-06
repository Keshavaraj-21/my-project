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

  constructor(private api: ApiserviceService) {}

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

  getblockuserA() {
    var id = 'A';
    this.api.getblockid(id).subscribe((data) => {
      console.log(data);
      alert('id fetching...');
      this.alldatass = data;
      this.alldatass = this.alldatass.docs;
      console.log(this.alldatass);
      for (const i of this.alldatass) {
        console.log(i);
        this.objectss.push(i);
      }
    });
  }

  getblockuserB() {
    var id = 'B';

    this.api.getblockid(id).subscribe((data) => {
      console.log(data);
      alert('id fetching...');

      this.alldatass = data;
      this.alldatass = this.alldatass.docs;
      console.log(this.alldatass);
      for (const i of this.alldatass) {
        console.log(i);
        this.objectss.push(i);
      }
    });
  }

  getblockuserC() {
    var id = 'C';
    this.api.getblockid(id).subscribe((data) => {
      console.log(data);
      alert('id fetching...');
      this.alldatass = data;
      this.alldatass = this.alldatass.docs;
      console.log(this.alldatass);
      for (const i of this.alldatass) {
        console.log(i);
        this.objectss.push(i);
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
