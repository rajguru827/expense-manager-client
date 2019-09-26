import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';

const routes: Routes = [
  {
    path: '', component: TransactionsComponent
  },
  {
    path: 'add', component: TransactionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
