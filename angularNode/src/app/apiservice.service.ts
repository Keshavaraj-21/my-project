import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

  signupdata(formobject: any, blockid: any) {
    var block: any = {
      formobject: formobject,
      blockdetails: blockid,
    };
    console.log(block);
    return this.http.post('http://localhost:8000/postquery', block);
  }
  billingdata(formobject: any) {
    return this.http.post('http://localhost:8000/post_query', formobject);
  }
  billdata(formobject: any) {
    return this.http.post('http://localhost:8000/billquery', formobject);
  }
  feedbackdata(formobject: any) {
    console.log('obj');
    return this.http.post('http://localhost:8000/post__query', formobject);
  }

  getUser() {
    return this.http.get('http://localhost:8000/getUser/');
  }
  getUserId(id: any) {
    return this.http.get(`http://localhost:8000/getUserId/${id}`);
  }

  getbill() {
    return this.http.get('http://localhost:8000/getbill/');
  }

  getFeedback() {
    return this.http.get('http://localhost:8000/getFeedback/');
  }
  getblockid(id: any) {
    return this.http.get('http://localhost:8000/get_block/' + id);
  }
  getblock_id(id: any) {
    return this.http.get('http://localhost:8000/get_block_id/' + id);
  }
  getbillofuser() {
    return this.http.get('http://localhost:8000/get_billofuser/');
  }
  remove(id: any, id1: any) {
    return this.http.delete(`http://localhost:8000/delete/${id}/${id1}`);
  }

  //admin
  getadmin() {
    return this.http.get('http://localhost:8000/getadmin/');
  }
  getadminId(id: any) {
    return this.http.get(`http://localhost:8000/getadminId/${id}`);
  }
}
