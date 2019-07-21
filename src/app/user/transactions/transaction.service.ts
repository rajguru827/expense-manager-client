import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headers = new HttpHeaders().set('Authorization', 'Berear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhai5ndXJ1ODI3QGdtYWlsLmNvbSIsInVzZXJJZCI6IjVjZWE2Nzc5NWNmZDJiMGI3MGQ4YjBlMiIsImlhdCI6MTU2MzcwMzM4NywiZXhwIjoxNTYzNzA2OTg3fQ.7AMj4bqW_zvJwhQPByIjBSlrTjpL0kUXbYft7d1ihiY');

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private http: HttpClient
  ) { }

  getUserTransactions() {
    return this.http.get<any>('http://localhost:3000/transactions', { headers });
  }
}
