import { Action, createReducer, on } from "@ngrx/store";
import * as MenusActions from "./menus.actions";
import { initialMenuState, IMenusState } from "./menus.state";
const menusReducer = createReducer(
  initialMenuState,
  on(MenusActions.fetchMenuSuccess, (state, { menuItems }) => ({
    ...state,
    menuItems: menuItems,
  })),

);

export function reducer(state: IMenusState | undefined, action: Action) {
  return menusReducer(state, action);
}
