import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from './core.state';
import { menusReducer } from './menus';
import { authReducer } from "./auth/auth-state-management";
import { reportReducer } from "./reports/reports-state-management";
import { hydrationMetaReducer } from "./helpers/hydration.reducer";
import { userReducer } from "./users/users-state-management";

export const reducers: ActionReducerMap<AppState> = {
  menus: menusReducer,
  auth: authReducer,
  report: reportReducer,
  user: userReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [
  hydrationMetaReducer, // storageSyncMetaReducer is needed to use persist data when needed in the state
];
