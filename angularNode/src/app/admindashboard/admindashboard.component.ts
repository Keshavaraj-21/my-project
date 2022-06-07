import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

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

  constructor(
    private api: ApiserviceService,
    private route: Router,
    private authserve: AuthserviceService
  ) {
    this.getuser();
  }

  ngOnInit(): void {
    /* TO DO document why this method 'ngOnInit' is empty */
  }

  logout() {
    this.authserve.logout();
    this.route.navigate(['admin']);
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
    this.api.remove(data._id, data1._rev).subscribe((_res) => {
      alert('Your Data has been deleted from the database.');
      location.reload();
    });
  }
}
