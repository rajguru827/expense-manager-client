import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AccountsComponent, AddAccountComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule
  ]
})
export class AccountsModule { }
