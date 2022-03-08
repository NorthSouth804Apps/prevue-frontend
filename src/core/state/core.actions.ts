import { getStatesActions, AppStateActionsType } from "./helpers/base.actions";
import { extraReportActions } from "./reports/report.actions";

const statesActionsProvider = getStatesActions();

export const statesActions: AppStateActionsType = {
  ...statesActionsProvider,
  report: {
    ...statesActionsProvider.report,
    ...extraReportActions,
  }
};
