import { getStatesSelectors, StateSelectorsType } from "./helpers/base.selectors";
import { reportExtraSelectors } from "./reports/report.selectors";

const statesSelectorsProvider = getStatesSelectors();

export const statesSelectors: StateSelectorsType = {
  ...statesSelectorsProvider,
  report: {
    ...statesSelectorsProvider.report,
    ...reportExtraSelectors
  }
};
