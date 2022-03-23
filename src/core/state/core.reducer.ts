import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from './core.state';
import { authReducer } from "./auth/auth-state-management";
import { reportReducer } from "./reports/reports-state-management";
import { hydrationMetaReducer } from "./helpers/hydration.reducer";
import { userReducer } from "./users/users-state-management";
import { matchReducer } from "./match/match-state-management";

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  report: reportReducer,
  user: userReducer,
  match: matchReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [
  hydrationMetaReducer, // storageSyncMetaReducer is needed to use persist data when needed in the state
];
