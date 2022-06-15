import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { ToastarserviceService } from '../toastarservice.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  alldata: any;
  value: boolean = true;
  object: any = [];
  feedForm!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiserviceService,
    private router: Router,
    private alert: ToastarserviceService
  ) {
    /* TO DO document why this constructor is empty */
  }

  ngOnInit(): void {
    this.feedForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      feedback: ['', [Validators.required]],
    });
  }
  feedFormData(Formvalue: any) {
    console.log(Formvalue);
    let userid = localStorage.getItem('user');
    console.log(userid);
    Formvalue.userid = userid;
    this.api.feed(Formvalue, '').subscribe((data) => {
      console.log(data);
    });
    this.alert.showSuccess('Response for feedback is success..!', 'Thank you');
    window.location.reload();
  }

  userid(arg: any) {
    console.log(arg.target.value);

    this.api.getuserid(arg.target.value).subscribe((data) => {
      console.log(data);
      this.alldata = data;
      this.alldata = this.alldata.docs;
      console.log(this.alldata);
      for (const i of this.alldata) {
        console.log(i._id);
        localStorage.setItem('user', i._id);
        this.object.push(i);
      }
    });
  }
}
