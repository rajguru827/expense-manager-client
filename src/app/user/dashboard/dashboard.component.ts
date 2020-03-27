import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartData } from 'chart.js';
import { Label } from 'ng2-charts';
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

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          drawBorder: false,
          display: false
        },
        ticks: {
          display: false
        }
      }],
      yAxes: [{
        display: false,
        gridLines: {
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true
        }
      }]
    },
    tooltips: {
      enabled: false
    }
  };

  public barChartType: ChartType = 'bar';
  public barChartLabels: Label[] = ['Income', 'Expense'];
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

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

      this.barChartData = [
        {
          label: 'Income vs Expense',
          data: [this.income, this.expense],
          backgroundColor: [
            'rgb(40, 167, 69)',
            'rgb(220, 53, 69)'
          ],
          hoverBackgroundColor: [
            'rgb(40, 167, 69, 0.8)',
            'rgb(220, 53, 69, 0.8)'
          ],
          borderWidth: 0
        }
      ];
    });
  }

}
