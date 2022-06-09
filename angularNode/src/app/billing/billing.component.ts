import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
})
export class BillingComponent implements OnInit {
  billingForm!: FormGroup;
  value: boolean = true;
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiserviceService
  ) {}

  ngOnInit(): void {
    this.billingForm = this.formbuilder.group({
      block: ['', Validators.required],
      maintainance: ['', Validators.required],
      housetax: ['', Validators.required],
      watertax: ['', Validators.required],
      parking: ['', Validators.required],
      charity: ['', Validators.required],
    });
    console.log(this.billingForm);
  }
  post(Formvalue: NgForm) {
    console.log(Formvalue);

    this.billingForm.reset();
    console.log('data get reloaded');
    window.location.reload();

    this.api.billingdata(Formvalue).subscribe((data) => {
      console.log(data);
    });
  }
}
