import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css'],
})
export class FeedbackformComponent implements OnInit {
  parseduser: any;
  feedbackForm!: FormGroup;
  value: boolean = true;
  feedbackform: any;
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiserviceService
  ) {
    this.feedbackForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      phone: [
        '',
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]*@gmail.com')],
      ],
      blockname: ['', [Validators.required]],
      category: ['', Validators.required],
      msg: ['', Validators.required],
    });
    this.feedbackform = localStorage.getItem('feedbackform');
    this.parseduser = JSON.parse(this.feedbackform);
    console.log(this.parseduser);
    var name = this.parseduser.name;
    this.feedbackForm.controls['username'].setValue(name);

    var email = this.parseduser.email;
    this.feedbackForm.controls['email'].setValue(email);
    var blockname = this.parseduser.blockname;
    this.feedbackForm.controls['phone'].setValue(blockname);
  }

  ngOnInit(): void {}

  sendFeedback(Formvalue: NgForm) {
    console.log(Formvalue);
    this.feedbackForm.reset();
    console.log('Feedback posted..!');
    window.location.reload();
    this.api.feedbackdata(Formvalue).subscribe((data) => {
      console.log(data);
    });
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}
