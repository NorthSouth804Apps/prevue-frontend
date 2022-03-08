import { Injectable } from '@angular/core';
import { ReportFacadeService } from './report-facade.service';
import { map } from 'rxjs/operators';
import { MatchStatsModel } from "../../models";

@Injectable()
export class HomeFacadeService {
  constructor(private reportFacadeService: ReportFacadeService) {}
  matchesStats$ = this.reportFacadeService.matchesStats$.pipe(
    map((item) => item ? item[0] : {} as MatchStatsModel)
  );
  loading$ = this.reportFacadeService.loading$;
  errorMatches$ = this.reportFacadeService.error$;

  getMatches() {
    this.reportFacadeService.getMatchesStats();
  }
}
