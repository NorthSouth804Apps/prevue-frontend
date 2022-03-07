import { Injectable } from "@angular/core";
import { MatchFacadeService } from "./match.facade.service";

@Injectable()
export class HomeFacadeService {
  constructor(private matchFacadeService: MatchFacadeService) {

  }
  matches$ = this.matchFacadeService.data$;
  loadingMatches$ = this.matchFacadeService.loading$;
  errorMatches$ = this.matchFacadeService.error$;

  getMatches() {
    this.matchFacadeService.get();
  }

}
