import { MenusState } from "./menus";
import { AuthState } from "./auth";
import { ReportState } from "./reports";

// general state here we can put non-crud states
interface State {

}

// here we are going to store all states based in the crud-state automation
export var statesStorage = {
  menus:  {} as MenusState,
  auth:  {} as AuthState,
  report:  {} as ReportState,
};

// state of the application is the sum of all crud state plus the general state
export type AppState = State & typeof statesStorage;

