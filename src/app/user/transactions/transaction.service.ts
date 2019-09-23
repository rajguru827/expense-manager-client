import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headers = new HttpHeaders().set('Authorization', `Berear ${localStorage.getItem('token')}`);

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
