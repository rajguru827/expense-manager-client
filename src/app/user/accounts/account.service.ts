import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  getUserAccounts() {
    return this.http.get<any>(environment.apiURL + 'accounts');
  }

  getAccountTypes() {
    return this.http.get<any>(environment.apiURL + 'accountType');
  }

  addUserAccount(account) {
    return this.http.post<any>(environment.apiURL + 'accounts', account);
  }
}
