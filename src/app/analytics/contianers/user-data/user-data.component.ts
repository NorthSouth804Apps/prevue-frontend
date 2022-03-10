import { Component, OnInit } from '@angular/core';
import { ReportsFacadeService } from "../../../../core/services/facades/reports-facade.service";
import { map } from "rxjs/operators";

@Component({
  selector: 'pv-users-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
  animations: [],
})
export class UserDataComponent implements OnInit {
  display: boolean = true;
  userStatsSummary$ = this.reportFacade.usersStats$.pipe(map(stats => stats.summary));
  userStatsAvg$ = this.reportFacade.usersStats$.pipe(map(stats => stats.avg));
  loading$ = this.reportFacade.loading$;

  constructor(private reportFacade: ReportsFacadeService) {}

  ngOnInit(): void {
    this.reportFacade.getUserStats();
  }
}
