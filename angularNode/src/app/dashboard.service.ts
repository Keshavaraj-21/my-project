import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  contact(formobject: any) {
    console.log('hello');

    return this.http.post('http://localhost:8000/mail/', formobject);
  }

  getuser() {
    return this.http.get('http://localhost:8000/get_user/');
  }
  checkuserlogin(email: any, password: any) {
    return this.http.get<any>(
      'http://localhost:8000/getdata/' + email,
      password
    );
  }
}
