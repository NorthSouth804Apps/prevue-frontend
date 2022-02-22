import { NgModule } from '@angular/core';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportListComponent } from "./contianers/user-list/report-list.component";
import { SharedModule } from "../../shared/shared.module";
import { TableModule } from "primeng/table";


@NgModule({
  declarations: [ReportListComponent],
  imports: [
    ReportsRoutingModule,
    SharedModule,
    TableModule,
  ],
  providers: []
})
export class ReportsModule {
}

