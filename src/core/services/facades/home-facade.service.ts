import { Injectable } from '@angular/core';
import { ReportFacadeService } from './report-facade.service';
import { map, switchMap } from "rxjs/operators";
import { MatchStatsModel, ReportModel } from "../../models";

@Injectable()
export class HomeFacadeService {
  constructor(private reportFacadeService: ReportFacadeService) {}
  matchesStats$ = this.reportFacadeService.matchesStats$.pipe(
    map((item) => (item ? item[0] : ({} as MatchStatsModel)))
  );
  loading$ = this.reportFacadeService.loading$;
  errorMatches$ = this.reportFacadeService.error$;
  recentReports$ = this.reportFacadeService.data$;

  getMatches() {
    this.reportFacadeService.getMatchesStats();
  }

  getReports() {
    this.reportFacadeService.get();
  }
}
