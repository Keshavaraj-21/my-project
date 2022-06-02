import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ToastarserviceService } from '../toastarservice.service';

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
    private alert: ToastarserviceService
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
    // alert('Your Data Posted....');
    // this.registerform.reset();
    console.log('data get reloaded');
    // window.location.reload();
    let blockid = localStorage.getItem('block');
    console.log(blockid);
    this.api.signupdata(Formvalue, blockid).subscribe((data) => {
      console.log(data);
    });
    this.alert.showSuccess('Registration in success..!', 'ok..');
  }

  blocknameChange(arg: any) {
    console.log(arg.target.value);
    this.api.getblock_id(arg.target.value).subscribe((data) => {
      console.log(data);
      // alert('id fetching...');
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
