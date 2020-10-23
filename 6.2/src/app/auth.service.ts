import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  get isLoggedIn() {
    let token = localStorage.getItem('token');

    return token !== null;
  }


  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:3000/login', {username, password})
      .pipe(tap(res => {
        if (res.token) {
          localStorage.setItem('token', res.token)
        }
      }));
  }
}
