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
      name: ['', Validators.required],
      email: ['', Validators.required],
      blockname: ['', Validators.required],
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
  // console.log(this.feedbackForm);

  sendFeedback(Formvalue: NgForm) {
    console.log(Formvalue);
    // alert('Your feedback Posted..!');
    this.feedbackForm.reset();
    console.log('Feedback posted..!');
    window.location.reload();
    this.api.feedbackdata(Formvalue).subscribe((data) => {
      console.log(data);
      // console.log(this.feedbackForm.value);
    });
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}
