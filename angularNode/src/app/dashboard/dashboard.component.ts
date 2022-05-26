import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  object: any = [];
  alldata: any;

  constructor(private api: ApiserviceService) {}

  ngOnInit(): void {}

  getuser() {
    this.api.getUser().subscribe((data) => {
      console.log(data);
      alert('Data was fetching....');
      this.alldata = data;
      this.alldata = this.alldata.rows;
      console.log(this.alldata);
      for (const i in this.alldata) {
        if (Object.prototype.hasOwnProperty.call(this.alldata, i)) {
          const elt = this.alldata[i];
          console.log(elt.id);
          this.api.getUserId(elt.id).subscribe((res) => {
            console.log(res);
            this.object.push(res);
          });
        }
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
