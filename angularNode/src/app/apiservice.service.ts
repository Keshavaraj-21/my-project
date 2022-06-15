import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

  signupdata(formobject: any, blockid: any) {
    let block: any = {
      formobject: formobject,
      blockdetails: blockid,
    };
    console.log(block);
    return this.http.post('http://localhost:8000/userData', block);
  }
  billingdata(formobject: any) {
    return this.http.post('http://localhost:8000/billingData', formobject);
  }
  billdata(formobject: any, userid: any) {
    let user: any = {
      formobject: formobject,
      useriddetails: userid,
    };
    console.log(user);
    return this.http.post('http://localhost:8000/billidQuery', formobject);
  }
  feedbackdata(formobject: any) {
    console.log('obj');
    return this.http.post('http://localhost:8000/postFeedback', formobject);
  }

  feed(formobject: any, userid: any) {
    let user: any = {
      formobject: formobject,
      useriddetails: userid,
    };
    console.log(user);
    return this.http.post('http://localhost:8000/postFeedResponse', formobject);
  }

  getUser() {
    return this.http.get('http://localhost:8000/getUserdetails/');
  }
  getUserId(id: any) {
    return this.http.get(`http://localhost:8000/getUserId/${id}`);
  }

  getbill() {
    return this.http.get('http://localhost:8000/getBill/');
  }

  getuserid(id: any) {
    return this.http.get('http://localhost:8000/get_User_Id/' + id);
  }

  getfeedbackrecieveid(id: any) {
    return this.http.get('http://localhost:8000/get_feedbackReceive_Id/' + id);
  }

  getFeedback() {
    return this.http.get('http://localhost:8000/getFeedback/');
  }
  getblockid(id: any) {
    return this.http.get('http://localhost:8000/get_Block/' + id);
  }
  getblock_id(id: any) {
    return this.http.get('http://localhost:8000/get_Block_Id/' + id);
  }
  getbillofuser(id: any) {
    return this.http.get(`http://localhost:8000/get_billOfUser/${id}`);
  }

  getfeedbackofuser(id: any) {
    return this.http.get(
      `http://localhost:8000/get_recievefeedBackOfUser/${id}`
    );
  }

  getbilluserid(id: any) {
    return this.http.get('http://localhost:8000/get_BillUser_Id/' + id);
  }

  remove(id: any, id1: any) {
    return this.http.delete(`http://localhost:8000/delete/${id}/${id1}`);
  }

  //admin
  getadmin() {
    return this.http.get('http://localhost:8000/getAdmin/');
  }
  getadminId(id: any) {
    return this.http.get(`http://localhost:8000/getAdminId/${id}`);
  }
}
