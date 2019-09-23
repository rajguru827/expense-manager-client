import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headers = new HttpHeaders().set('Authorization', `Berear ${localStorage.getItem('token')}`);

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  getUserAccounts() {
    return this.http.get<any>('http://localhost:3000/accounts', { headers });
  }

  getAccountTypes() {
    return this.http.get<any>('http://localhost:3000/accountType', { headers });
  }

  addUserAccount(account) {
    return this.http.post<any>('http://localhost:3000/accounts', account, { headers });
  }
}
