import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      {
        path: '', loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
      },
      {
        path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(mod => mod.AccountsModule)
      },
      {
        path: 'transactions', loadChildren: () => import('./transactions/transactions.module').then(mod => mod.TransactionsModule)
      },
      {
        path: 'categories', loadChildren: () => import('./categories/categories.module').then(mod => mod.CategoriesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
