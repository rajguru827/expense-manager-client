import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signIn(data) {
    return this.http.post<any>('http://localhost:3000/user/login', data);
  }

  signUp(data) {
    return this.http.post<any>('http://localhost:3000/user/signup', data);
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/sign-in');
  }

}
