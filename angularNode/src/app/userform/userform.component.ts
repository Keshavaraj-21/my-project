import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ToastarserviceService } from '../toastarservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  registerForm!: FormGroup;
  value: boolean = true;
  objectss: any = [];
  allDataas: any;

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiserviceService,
    private alert: ToastarserviceService,
    private router: Router
  ) {
    /* TO DO document why this constructor is empty */
  }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      blockname: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    });
  }
  register(Formvalue: NgForm) {
    console.log(Formvalue);

    let blockid = localStorage.getItem('block');
    console.log(blockid);
    this.api.signupdata(Formvalue, blockid).subscribe((data) => {
      console.log(data);
    });
    this.alert.showSuccess('Registration is success..!', 'Thank you');
    window.location.reload();
  }

  blocknameChange(arg: any) {
    console.log(arg.target.value);
    this.api.getblock_id(arg.target.value).subscribe((data) => {
      console.log(data);
      this.allDataas = data;
      this.allDataas = this.allDataas.docs;
      console.log(this.allDataas);

      for (const i of this.allDataas) {
        console.log(i._id);
        localStorage.setItem('block', i._id);
        this.objectss.push(i);
      }
    });
  }
}
