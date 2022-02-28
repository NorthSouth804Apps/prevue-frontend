import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMenusState } from './menus.state';

export const selectMenus = createFeatureSelector<IMenusState>('menus');

export const selectMenusItems = createSelector(
  selectMenus,
  (state: IMenusState) => state.menuItems
);

export const selectMenusItem = (props: { id: string }) => createSelector(
  selectMenusItems,
  (menuItems: any[]) => menuItems.find(item => item.id === props.id)
);
