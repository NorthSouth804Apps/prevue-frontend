import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ReportState } from "./index";
import { extraSelectorTypes, StateSelectorsType } from "../helpers/base.selectors";

const featureSelector = createFeatureSelector<ReportState>('report');

export const reportExtraSelectors: extraSelectorTypes = {
  matches: createSelector(
    featureSelector,
    (state: ReportState) => state.matchStats,
  )
}
