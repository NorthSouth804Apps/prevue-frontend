import { Injectable } from "@angular/core";
import { ReportFacadeService } from "./report-facade.service";

@Injectable()
export class HomeFacadeService {
  constructor(
    private reportFacadeService: ReportFacadeService
  ) {

  }
  matchesStats$ = this.reportFacadeService.matchesStats$;
  loadingMatches$ = this.reportFacadeService.loading$;
  errorMatches$ = this.reportFacadeService.error$;

  getMatches() {
    this.reportFacadeService.getMatchesStats();
  }

}
