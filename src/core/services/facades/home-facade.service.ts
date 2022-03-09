import { Injectable } from '@angular/core';
import { ReportFacadeService } from './report-facade.service';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeFacadeService {
  matchesStats$ = this.reportFacadeService.matchesStats$.pipe(
    map((item) => item[0])
  );

  userStats$ = this.reportFacadeService.usersStats$.pipe(
    map((item) => item.summary)
  );

  loading$ = this.reportFacadeService.loading$;
  errorMatches$ = this.reportFacadeService.error$;
  recentReports$ = this.reportFacadeService.data$.pipe(
    map((reports) => (reports ? reports.slice(0, 10) : reports))
  );

  constructor(private reportFacadeService: ReportFacadeService) {}

  getMatchesStats() {
    this.reportFacadeService.getMatchesStats();
  }

  getReports() {
    this.reportFacadeService.get();
  }

  getUsersStats(options?: any) {
    this.reportFacadeService.getUserStats(options);
  }
}
