import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacadeService } from './base-facade.service';
import { ToastService } from '../toast.service';
import { MatchStatsModel, ReportModel, UserMediaModel, UsersStatsModel } from "src/core/models";
import { statesSelectors } from '../../state/core.selectors';
import { statesActions } from '../../state/core.actions';
import { UsersFacadeService } from "./users-facade.service";
import { StatusValuesType } from "../../interfaces/common.interface";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class ReportsFacadeService extends BaseFacadeService<ReportModel> {
  matchesStats$ = this.storeProvider.select<MatchStatsModel>(
    statesSelectors.report.matchesStats
  );
  usersStats$ = this.storeProvider.select<UsersStatsModel>(
    statesSelectors.report.usersStats
  );

  statusLoading$ = this.usersFacade.loading$;


  userMedia$ = this.usersFacade.userMedias$.pipe<UserMediaModel[]>(map(medias => {
    return medias
  }))

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

  changeUserStatus(id: number, status: StatusValuesType) {
    this.usersFacade.put({
      userId: id,
      status: status,
      statusValue: true,
    } as any);
  }

  getUserDetails(userId: number) {
    this.usersFacade.getUserDetails(userId);
  }
}
