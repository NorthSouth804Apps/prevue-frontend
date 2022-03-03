import { Action, createReducer, on } from "@ngrx/store";
import * as MenusActions from "./menus.actions";
import { initialMenuState, IMenusState } from "./menus.state";
import { entitiesActions } from "./menus.actions";
const menusReducer = createReducer(
  initialMenuState,
  on(entitiesActions.menus.fetch.success, (state, { data }) => {
    console.log(data, 'reducer');
    return ({
      ...state,
      data: data
    })

  }),
  on(entitiesActions.menus.delete.success, (state, { id }) => {
    const menuItemIndex = state.data.findIndex(
      (item) => item.id === id
    );
    const updatedMenuItems = [...state.data];
    updatedMenuItems.splice(menuItemIndex, 1);
    return {
      ...state,
      data: updatedMenuItems,
    };
  })

);

export function reducer(state: IMenusState | undefined, action: Action) {
  return menusReducer(state, action);
}
