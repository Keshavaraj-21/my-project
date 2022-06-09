import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-billingdetails',
  templateUrl: './billingdetails.component.html',
  styleUrls: ['./billingdetails.component.css'],
})
export class BillingdetailsComponent implements OnInit {
  object: any = [];
  allData: any;
  constructor(private api: ApiserviceService) {}

  ngOnInit(): void {
    /* TO DO document why this method 'ngOnInit' is empty */
  }
  getdetails() {
    this.api.getbill().subscribe((data) => {
      console.log(data);
      alert('Data was fetching....');
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
