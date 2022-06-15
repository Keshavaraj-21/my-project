import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css'],
})
export class ResponseComponent implements OnInit {
  object: any = [];
  allData: any;
  constructor(private api: ApiserviceService) {
    this.getresponseuser();
  }

  ngOnInit(): void {
    /* TO DO document why this method 'ngOnInit' is empty */
  }

  getresponseuser() {
    let id = localStorage.getItem('user');
    this.api.getbillofuser(id).subscribe((data) => {
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
