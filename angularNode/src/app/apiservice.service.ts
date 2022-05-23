import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

  logindata(formObject: any) {
    console.log(formObject);
    return this.http.post('http://localhost:8000/post_query/', formObject);
  }
  getdata(id: any) {
    return this.http.get(`http://localhost:8000/get_all_query/${id}`);
  }

  getData() {
    return this.http.get('http://localhost:8000/get_query/');
  }
  getAllData(id: any) {
    return this.http.get(`http://localhost:8000/get_all_query/${id}`);
  }
  deleteData(id: any, id1: any) {
    return this.http.delete(`http://localhost:8000/delete_query/${id}/${id1}`);
  }
  updateData(doc: any) {
    console.log(doc);
    return this.http.put('http://localhost:8000/update_query/', doc);
  }

  // logindata(formObject: any) {
  //   return this.http.post('http://localhost:8000/dashboard', formObject);
  // }
}
