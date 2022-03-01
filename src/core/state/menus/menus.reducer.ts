import { Action, createReducer, on } from "@ngrx/store";
import * as MenusActions from "./menus.actions";
import { initialMenuState, IMenusState } from "./menus.state";
const menusReducer = createReducer(
  initialMenuState,
  on(MenusActions.fetchMenuSuccess, (state, { menuItems }) => ({
    ...state,
    menuItems: menuItems,
  })),
  on(MenusActions.deleteMenuItemSuccess, (state, { menuId }) => {
    const menuItemIndex = state.menuItems.findIndex(
      (item) => item.id === menuId
    );
    const updatedMenuItems = [...state.menuItems];
    updatedMenuItems.splice(menuItemIndex, 1);
    return {
      ...state,
      menuItems: updatedMenuItems,
    };
  })

);

export function reducer(state: IMenusState | undefined, action: Action) {
  return menusReducer(state, action);
}
