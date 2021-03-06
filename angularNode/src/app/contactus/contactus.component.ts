import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  contactForm!: FormGroup;
  value: boolean = true;
  constructor(private api: DashboardService, private fb: FormBuilder) {
    /* TO DO document why this constructor is empty */
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  send(Formvalue: NgForm) {
    console.log('hi');
    console.log(Formvalue);
    this.api.contact(Formvalue).subscribe((_data) => {
      console.log(Formvalue);
    });
  }
}
