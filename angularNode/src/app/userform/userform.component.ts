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
  registerform!: FormGroup;
  value: boolean = true;
  objectss: any = [];
  alldataas: any;

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiserviceService,
    private alert: ToastarserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerform = this.formbuilder.group({
      username: ['', [Validators.required]],
      phone: [
        '',
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]*@gmail.com')],
      ],
      blockname: ['', [Validators.required]],
      password: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9@!_]{6,}')],
      ],
      confirmpassword: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9@!_]{6,}')],
      ],
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
    this.router.navigate(['/user']);
  }

  blocknameChange(arg: any) {
    console.log(arg.target.value);
    this.api.getblock_id(arg.target.value).subscribe((data) => {
      console.log(data);
      this.alldataas = data;
      this.alldataas = this.alldataas.docs;
      console.log(this.alldataas);

      for (const i of this.alldataas) {
        console.log(i._id);
        localStorage.setItem('block', i._id);
        this.objectss.push(i);
      }
    });
  }
}
