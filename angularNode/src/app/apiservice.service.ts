import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

  //  getconnecting()
  //  {
  //     return this.http.get('http://localhost:8000/senddata');
  //  }

  signupdata(formobject: any) {
    return this.http.post('http://localhost:8000/postquery', formobject);
  }
  getUser() {
    return this.http.get('http://localhost:8000/getUser/');
  }
  getUserId(id: any) {
    return this.http.get(`http://localhost:8000/getUserId/${id}`);
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
