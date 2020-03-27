import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signIn(data) {
    return this.http.post<any>(environment.apiURL + 'user/login', data);
  }

  signUp(data) {
    return this.http.post<any>(environment.apiURL + 'user/signup', data);
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/sign-in');
  }

}
