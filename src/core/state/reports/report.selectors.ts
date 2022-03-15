import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ReportState } from "./reports-state-management";
import { extraSelectorTypes } from "../helpers/base.selectors";
import { MatchStatsModel, UsersStatsModel } from "../../models";

const featureSelector = createFeatureSelector<ReportState>('report');

export const reportExtraSelectors: Partial<extraSelectorTypes> = {
  matchesStats: createSelector(
    featureSelector,
    (state: ReportState) => state.matchesStats || new MatchStatsModel(),
  ),
  usersStats: createSelector(
    featureSelector,
    (state: ReportState) => {
      return state.usersStats || new UsersStatsModel();
    },
  ),
  userMessages: createSelector(
    featureSelector,
    (state: ReportState) => {
      return state.userMessages || [];
    },
  )
}
