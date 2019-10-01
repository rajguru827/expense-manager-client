import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  getUserAccounts() {
    return this.http.get<any>('http://localhost:3000/accounts');
  }

  getAccountTypes() {
    return this.http.get<any>('http://localhost:3000/accountType');
  }

  addUserAccount(account) {
    return this.http.post<any>('http://localhost:3000/accounts', account);
  }
}
