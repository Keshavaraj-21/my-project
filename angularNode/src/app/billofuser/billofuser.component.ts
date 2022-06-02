import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-billofuser',
  templateUrl: './billofuser.component.html',
  styleUrls: ['./billofuser.component.css'],
})
export class BillofuserComponent implements OnInit {
  billform!: FormGroup;
  value: boolean = true;
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiserviceService
  ) {}

  ngOnInit(): void {
    this.billform = this.formbuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      blockname: ['', Validators.required],
      maintainance: ['', Validators.required],
      housetax: ['', Validators.required],
      watertax: ['', Validators.required],
      parking: ['', Validators.required],
      charity: ['', Validators.required],
    });
    // console.log(this.billform);
  }
  postBill(Formvalue: NgForm) {
    console.log(Formvalue);
    alert('Your Data Posted....');
    this.billform.reset();
    console.log('data get reloaded');
    window.location.reload();
    this.api.billdata(Formvalue).subscribe((data) => {
      console.log(data);
    });
  }
}
