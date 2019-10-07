import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private http: HttpClient
  ) { }

  getUserTransactions() {
    return this.http.get<any>('http://localhost:3000/transactions');
  }

  addTransaction(transaction) {
    return this.http.post<any>('http://localhost:3000/transactions', transaction);
  }
}
