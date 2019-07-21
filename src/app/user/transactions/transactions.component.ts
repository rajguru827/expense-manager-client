import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions: [];

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionService.getUserTransactions().subscribe(data => {
      console.log(data);
      this.transactions = data.transactions;
    });
  }
}
