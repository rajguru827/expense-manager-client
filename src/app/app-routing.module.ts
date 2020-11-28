import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: '**', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
