import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transactions/transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // todo need to figure out correct way of using chart.js
  income: number;
  expense: number;
  goal: number;

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.transactionService.getUserTransactions().subscribe(data => {
      this.income = data.transactions.filter(trans => {
        if (trans.credit) {
          return trans;
        }
      }).reduce((accumulator, currentValue) => {
        return accumulator + currentValue.credit;
      }, 0);

      this.expense = data.transactions.filter(trans => {
        if (trans.debit) {
          return trans;
        }
      }).reduce((accumulator, currentValue) => {
        return accumulator + currentValue.debit;
      }, 0);

      this.goal = this.income - this.expense;

    });
  }

}
