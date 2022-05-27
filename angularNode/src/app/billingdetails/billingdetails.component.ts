import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-billingdetails',
  templateUrl: './billingdetails.component.html',
  styleUrls: ['./billingdetails.component.css'],
})
export class BillingdetailsComponent implements OnInit {
  object: any = [];
  alldata: any;
  constructor(private api: ApiserviceService) {}

  ngOnInit(): void {}
  getdetails() {
    this.api.getbill().subscribe((data) => {
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
}

// function getdetails() {
//   throw new Error('Function not implemented.');
// }
