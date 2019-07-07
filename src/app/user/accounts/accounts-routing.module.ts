import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { AddAccountComponent } from './add-account/add-account.component';

const routes: Routes = [
  {
    path: '', component: AccountsComponent
  },
  {
    path: 'add', component: AddAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
