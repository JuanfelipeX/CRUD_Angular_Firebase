import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'list', loadChildren: () => import('./pages/employees/list/list.module').then(m => m.ListModule) }, { path: 'new', loadChildren: () => import('./pages/employees/new/new.module').then(m => m.NewModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
