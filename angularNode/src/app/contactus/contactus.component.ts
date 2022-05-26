import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  contactform!: FormGroup;
  value: boolean = true;
  constructor(private api: DashboardService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactform = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  send(Formvalue: NgForm) {
    console.log('hi');
    console.log(Formvalue);
    this.api.contact(Formvalue).subscribe((data) => {
      console.log(Formvalue);
    });
  }
}
