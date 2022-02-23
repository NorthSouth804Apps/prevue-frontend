import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportListComponent } from "./contianers/user-list/report-list.component";
import { ReportDetailComponent } from "./contianers/report-detail/report-detail.component";

const routes: Routes = [
  {
    path: '',
    component: ReportListComponent,
  },
  {
    path: ':id',
    component: ReportDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {
}
