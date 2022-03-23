import { NgModule } from '@angular/core';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportListComponent } from "./contianers/user-list/report-list.component";
import { SharedModule } from "../../shared/shared.module";
import { TableModule } from "primeng/table";
import { ReportDetailComponent } from "./contianers/report-detail/report-detail.component";
import { MatchFacadeService } from "../../core/services/facades/match-facade.service";


@NgModule({
  declarations: [ReportListComponent, ReportDetailComponent],
  imports: [
    ReportsRoutingModule,
    SharedModule,
    TableModule,
  ],
  providers: [MatchFacadeService]
})
export class ReportsModule {
}

