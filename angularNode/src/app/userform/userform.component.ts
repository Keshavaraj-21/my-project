import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  registerform!: FormGroup;
  value: boolean = true;

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiserviceService
  ) {}

  ngOnInit(): void {
    this.registerform = this.formbuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      blockname: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    });
    // console.log(this.registerform);
  }
  register(Formvalue: NgForm) {
    console.log(Formvalue);
    alert('Your Data Posted....');
    this.registerform.reset();
    console.log('data get reloaded');
    window.location.reload();
    this.api.signupdata(Formvalue).subscribe((data) => {
      console.log(data);
    });
  }
}
