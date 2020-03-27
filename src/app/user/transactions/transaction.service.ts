import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private http: HttpClient
  ) { }

  getUserTransactions() {
    return this.http.get<any>(environment.apiURL + 'transactions');
  }

  addTransaction(transaction) {
    return this.http.post<any>(environment.apiURL + 'transactions', transaction);
  }
}
