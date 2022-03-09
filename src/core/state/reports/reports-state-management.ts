import { Injectable } from '@angular/core';
import { BaseEffects } from '../helpers/base.effects';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import baseReducer from '../helpers/base.reducer';
import { BaseState } from '../helpers/base.state';
import { ReportService } from '../../services/report.service';
import { MatchStatsModel, ReportModel, UsersStatsModel } from "../../models";
import { catchError, map, switchMap } from 'rxjs/operators';
import ResponseModel from '../../models/response.model';
import { of } from 'rxjs';
import { on } from '@ngrx/store';
import { statesActions } from "../core.actions";

// STATE OF MENUS
export class ReportState extends BaseState<ReportModel> {
  matchesStats = new MatchStatsModel();
  usersStats = new UsersStatsModel();
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

  getMatchesStats$ = createEffect(() =>
    this.actionsProvider$.pipe(
      ofType(statesActions.report.matchesStats.submitted),
      switchMap((options) =>
        this.reportService.getMatchesStats(options).pipe(
          map((response: ResponseModel<MatchStatsModel> | any) => {
            return statesActions.report.matchesStats.success(response);
          }),
          catchError((errorData: { error: ResponseModel<null> }) =>
            of(statesActions.report.matchesStats.failed(errorData.error))
          )
        )
      )
    )
  );

  getUserStats$ = createEffect(() =>
    this.actionsProvider$.pipe(
      ofType(statesActions.report.usersStats.submitted),
      switchMap((options) =>
        this.reportService.getUserStats(options).pipe(
          map((response: ResponseModel<MatchStatsModel> | any) => {
            return statesActions.report.usersStats.success(response);
          }),
          catchError((errorData: { error: ResponseModel<null> }) =>
            of(statesActions.report.usersStats.failed(errorData.error))
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
    on(statesActions.report.matchesStats.success, (state, { data }) => {
      return {
        ...state,
        matchesStats: data,
        loading: false,
      };
    }),
    on(statesActions.report.matchesStats.failed,  (state, error) => {
      return {
        ...state,
        error,
        loading: false,
      };
    }),
    on(statesActions.report.matchesStats.submitted,  (state, { data }) => {
      return {
        ...state,
        matchesStats: data,
        loading: true,
      };
    }),
    on(statesActions.report.usersStats.success, (state, { data }) => {
      console.log('state users', data)
      return {
        ...state,
        usersStats: data,
        loading: false,
      };
    }),
    on(statesActions.report.usersStats.failed,  (state, error) => {
      return {
        ...state,
        error,
        loading: false,
      };
    }),
    on(statesActions.report.usersStats.submitted,  (state, { data }) => {
      return {
        ...state,
        usersStats: data,
        loading: true,
      };
    }),
  ]
);
