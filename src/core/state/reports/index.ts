import { Injectable } from '@angular/core';
import { BaseEffects } from '../helpers/base.effects';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import baseReducer from '../helpers/base.reducer';
import { BaseState } from '../helpers/base.state';
import { ReportService } from '../../services/report.service';
import { MatchStatsModel, ReportModel } from '../../models';
import { catchError, map, switchMap } from 'rxjs/operators';
import ResponseModel from '../../models/response.model';
import { of } from 'rxjs';
import { on } from '@ngrx/store';
import { statesActions } from "../core.actions";

// STATE OF MENUS
export class ReportState extends BaseState<ReportModel> {
  matchStats = new MatchStatsModel();
  constructor() {
    super();
    this.data = new ReportModel();
  }
}

// EFFECTS OF MENUS
@Injectable()
export class ReportEffects extends BaseEffects<ReportModel> {
  constructor(
    private actionsProvider$: Actions<any>,
    private reportService: ReportService
  ) {
    super('report', actionsProvider$, reportService);
  }

  getMatches$ = createEffect(() =>
    this.actionsProvider$.pipe(
      ofType(statesActions.report['matches'].submitted),
      switchMap(() =>
        this.reportService.getMatchesReport().pipe(
          map((response: ResponseModel<MatchStatsModel> | any) => {
            return statesActions.report['matches'].success(response);
          }),
          catchError((errorData: { error: ResponseModel<null> }) =>
            of(statesActions.report['matches'].failed(errorData.error))
          )
        )
      )
    )
  );
}

// REDUCER OF MENUS
export const reportReducer = baseReducer<ReportState>(
  'report',
  new ReportState(),
  [
    on(statesActions.report.matches.success, (state, { data }) => {
      return {
        ...state,
        matchStats: data,
        loading: false,
      };
    }),
    on(statesActions.report.matches.failed,  (state, error) => {
      return {
        ...state,
        error,
        loading: false,
      };
    }),
    on(statesActions.report.matches.submitted,  (state, { data }) => {
      return {
        ...state,
        matchStats: data,
        loading: true,
      };
    }),
  ]
);
