import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ToastarserviceService } from '../toastarservice.service';

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
    private api: ApiserviceService,
    private alert: ToastarserviceService
  ) {}

  ngOnInit(): void {
    this.feedbackForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]*@gmail.com')],
      ],
      blockname: ['', [Validators.required]],
      category: ['', Validators.required],
      msg: ['', Validators.required],
    });
  }

  sendFeedback(Formvalue: NgForm) {
    console.log(Formvalue);
    console.log('Feedback posted..!');
    this.api.feedbackdata(Formvalue).subscribe((data) => {
      console.log(data);
    });
    this.alert.showSuccess('Bill posted successfully', '');
    window.location.reload();
  }
}
