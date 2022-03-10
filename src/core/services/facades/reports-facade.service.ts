import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacadeService } from './base-facade.service';
import { ToastService } from '../toast.service';
import { MatchStatsModel, ReportModel, UsersStatsModel } from "src/core/models";
import { statesSelectors } from '../../state/core.selectors';
import { statesActions } from '../../state/core.actions';
import { UsersFacadeService } from "./users-facade.service";
import { DialogTypes } from "../../../app/reports/contianers/report-detail/report-detail.component";

@Injectable()
export class ReportsFacadeService extends BaseFacadeService<ReportModel> {
  matchesStats$ = this.storeProvider.select<MatchStatsModel>(
    statesSelectors.report.matchesStats
  );
  usersStats$ = this.storeProvider.select<UsersStatsModel>(
    statesSelectors.report.usersStats
  );

  constructor(
    private storeProvider: Store,
    private toastServiceProvider: ToastService,
    private usersFacade: UsersFacadeService,
  ) {
    super('report', storeProvider, toastServiceProvider);
  }

  getMatchesStats(data?: any) {
    this.storeProvider.dispatch(
      statesActions.report.matchesStats.submitted({
        data,
      })
    );
  }

  getUserStats(data?: any) {
    this.storeProvider.dispatch(
      statesActions.report.usersStats.submitted({
        data,
      })
    );
  }

  changeUserStatus(id: number, status: DialogTypes) {
    this.usersFacade.put({
      userId: id,
      status: status,
      statusValue: true,
    } as any);
  }
}
