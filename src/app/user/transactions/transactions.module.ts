import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TransactionsComponent, TransactionFormComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    ReactiveFormsModule
  ]
})
export class TransactionsModule { }
