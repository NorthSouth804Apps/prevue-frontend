import { getStatesActions, AppStateActionsType } from "./helpers/base.actions";
import { extraReportActions } from "./reports/report.actions";
import { extraUsersActions } from "./users/users.actions";

const statesActionsProvider = getStatesActions();

export const statesActions: AppStateActionsType = {
  ...statesActionsProvider,
  report: {
    ...statesActionsProvider.report,
    ...extraReportActions,
  },
  user: {
    ...statesActionsProvider.user,
    ...extraUsersActions,
  }
};
