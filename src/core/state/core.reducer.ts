import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "./core.state";
import * as MenusReducer from "./menus/menus.reducer";

export const reducers: ActionReducerMap<AppState> = {
  menus: MenusReducer.reducer,
}

export const metaReducers: MetaReducer<AppState>[] = [];
