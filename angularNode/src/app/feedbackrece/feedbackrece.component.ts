import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-feedbackrece',
  templateUrl: './feedbackrece.component.html',
  styleUrls: ['./feedbackrece.component.css'],
})
export class FeedbackreceComponent implements OnInit {
  object: any = [];
  alldata: any;
  constructor(private api: ApiserviceService) {
    this.getfeedback();
  }

  ngOnInit(): void {
    /* TO DO document why this method 'ngOnInit' is empty */
  }
  getfeedback() {
    this.api.getFeedback().subscribe((data) => {
      console.log(data);
      alert('Data was fetching....');
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
