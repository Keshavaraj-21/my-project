import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-feedbackrece',
  templateUrl: './feedbackrece.component.html',
  styleUrls: ['./feedbackrece.component.css'],
})
export class FeedbackreceComponent implements OnInit {
  object: any = [];
  allData: any;
  constructor(private api: ApiserviceService) {
    this.getfeedback();
  }

  ngOnInit(): void {
    /* TO DO document why this method 'ngOnInit' is empty */
  }
  getfeedback() {
    this.api.getFeedback().subscribe((data) => {
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
