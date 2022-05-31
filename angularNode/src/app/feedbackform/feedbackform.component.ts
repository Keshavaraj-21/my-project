import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css'],
})
export class FeedbackformComponent implements OnInit {
  feedbackForm!: FormGroup;
  value: boolean = true;
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiserviceService
  ) {}

  ngOnInit(): void {
    this.feedbackForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      blockname: ['', Validators.required],
      category: ['', Validators.required],
      msg: ['', Validators.required],
    });
    console.log(this.feedbackForm);
  }

  sendFeedback(Formvalue: NgForm) {
    console.log(Formvalue);
    alert('Your feedback Posted..!');
    this.feedbackForm.reset();
    console.log('Feedback posted..!');
    window.location.reload();
    this.api.feedbackdata(Formvalue).subscribe((data) => {
      console.log(data);
      // console.log(this.feedbackForm.value);
    });
  }
}
