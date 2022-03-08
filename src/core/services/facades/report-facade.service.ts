import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacadeService } from "./base-facade.service";
import { ToastService } from "../toast.service";
import { MatchStatsModel, ReportModel } from "src/core/models";
import { statesSelectors } from "../../state/core.selectors";
import { statesActions } from "../../state/core.actions";

@Injectable()
export class ReportFacadeService extends BaseFacadeService<ReportModel>{

  matchesStats$ = this.storeProvider.select<MatchStatsModel[]>(statesSelectors.report.matches);

  constructor(private storeProvider: Store, private toastServiceProvider: ToastService) {
    super('report', storeProvider, toastServiceProvider);
  }

  getMatchesStats(data?: any)  {
    this.storeProvider.dispatch(
      statesActions.report.matches.submitted({
        data,
      })
    );
  }
}
