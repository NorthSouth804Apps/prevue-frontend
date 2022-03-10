import { Component, OnInit } from '@angular/core';
import { ReportsFacadeService } from "../../../../core/services/facades/reports-facade.service";
import { map } from "rxjs/operators";

@Component({
  selector: 'pv-match-data',
  templateUrl: './match-data.component.html',
  styleUrls: ['./match-data.component.scss'],
  animations: [],
})
export class MatchDataComponent implements OnInit {
  display: boolean = true;
  loading$ = this.reportFacade.loading$;
  matchesStatsSummary$ = this.reportFacade.matchesStats$.pipe(
    map((item) => item.summary)
  );

  matchesStatsAvg$ = this.reportFacade.matchesStats$.pipe(
    map((item) => item.avg)
  );

  constructor(private reportFacade: ReportsFacadeService) {}

  ngOnInit(): void {
    this.reportFacade.getMatchesStats();
  }
}
