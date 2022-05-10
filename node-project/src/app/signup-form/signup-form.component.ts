import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { rangeValidator, emailMatchValidator } from '../my-validator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  signupFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signupFormGroup = this.fb.group({
      firstName: ['', Validators.required, Validators.minLength(3)],
      lastName: [''],
      emailGroup: this.fb.group(
        {
          email: ['', Validators.required, Validators.email],
          confirmEmail: ['', Validators.required, Validators.email],
        },
        { validators: emailMatchValidator }
      ),
      mobile: [''],
      sendNotification: ['email'],
      range: ['', rangeValidator(10, 20)],
    });
  }

  ngOnInit(): void {}

  get firstName() {
    return this.signupFormGroup.get('firstName')!;
  }
  get email() {
    return this.signupFormGroup.get('email')!;
  }
  get range() {
    return this.signupFormGroup.get('range')!;
  }
  get emailGroup() {
    return this.signupFormGroup.get('emailGroup')!;
  }
  get mobile() {
    return this.signupFormGroup.get('mobile')!;
  }
  loadEmployee() {
    let data = {
      firstName: 'Keshavaraj',
      lastName: 'M',
    };
    this.signupFormGroup.patchValue(data);
  }
  doNotification(msgtype: any) {
    if (msgtype == 'sms') {
      let mobileControl = this.signupFormGroup.get('mobile');
      mobileControl?.setValidators([
        Validators.required,
        rangeValidator(6000000000, 9999999999),
      ]);
      mobileControl?.updateValueAndValidity();
    }
  }
}
