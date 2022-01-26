import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './containers/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', pathMatch: 'full'},
      // {
      //   path: 'dashboard',
      //   loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
      //   data: {animation: 'Dashboard'}
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {
}
