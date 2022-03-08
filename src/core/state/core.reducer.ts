import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from './core.state';
import { menusReducer } from './menus';
import { authReducer } from "./auth";
import { reportReducer } from "./reports";
import { hydrationMetaReducer } from "./helpers/hydration.reducer";

export const reducers: ActionReducerMap<AppState> = {
  menus: menusReducer,
  auth: authReducer,
  report: reportReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [
  hydrationMetaReducer, // storageSyncMetaReducer is needed to use persist data when needed in the state
];
