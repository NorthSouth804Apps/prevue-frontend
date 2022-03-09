import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ReportState } from "./reports-state-management";
import { extraSelectorTypes, StateSelectorsType } from "../helpers/base.selectors";
import { MatchStatsModel, UsersStatsModel } from "../../models";

const featureSelector = createFeatureSelector<ReportState>('report');

export const reportExtraSelectors: extraSelectorTypes = {
  matchesStats: createSelector(
    featureSelector,
    (state: ReportState) => state.matchesStats || [new MatchStatsModel()],
  ),
  usersStats: createSelector(
    featureSelector,
    (state: ReportState) => {
      console.log(state, 'klk state');
      return state.usersStats || new UsersStatsModel();
    },
  )
}
