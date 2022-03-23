import { AuthState } from "./auth/auth-state-management";
import { ReportState } from "./reports/reports-state-management";
import { UserState } from "./users/users-state-management";
import { MatchState } from "./match/match-state-management";

// general state here we can put non-crud states
interface State {

}

// here we are going to store all states based in the crud-state automation
export var statesStorage = {
  auth:  {} as AuthState,
  report:  {} as ReportState,
  user:  {} as UserState,
  match:  {} as MatchState,
};

// state of the application is the sum of all crud state plus the general state
export type AppState = State & typeof statesStorage;

