import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const  headers = new  HttpHeaders().set("Authorization", "Berear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhai5ndXJ1ODI3QGdtYWlsLmNvbSIsInVzZXJJZCI6IjVjZWE2Nzc5NWNmZDJiMGI3MGQ4YjBlMiIsImlhdCI6MTU2MzA5MTI1OCwiZXhwIjoxNTYzMDk0ODU4fQ.Cd-5CDsZeUw8uaDgsmDxlZvigdIe4rhZwVfkQ-XCXVs");

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }
  
  getUserAccounts() {
    return this.http.get<any>('http://localhost:3000/accounts', {headers})
  }

  getAccountTypes() {
    return this.http.get<any>('http://localhost:3000/accountType', {headers})
  }

  addUserAccount(account) {
    return this.http.post<any>('http://localhost:3000/accounts', account, {headers});
  }
}
