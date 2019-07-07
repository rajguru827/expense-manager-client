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
    const  headers = new  HttpHeaders().set("Authorization", "Berear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhai5ndXJ1ODI3QGdtYWlsLmNvbSIsInVzZXJJZCI6IjVjZWE2Nzc5NWNmZDJiMGI3MGQ4YjBlMiIsImlhdCI6MTU2MjQ4Mzk0MCwiZXhwIjoxNTYyNDg3NTQwfQ.RyiFn5-z04paUDfmVjmgD8akAPPdJJe7byfwCbzASkc");

    return this.http.get<any>('http://localhost:3000/accounts', {headers})
  }
}
