import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { IMenusState } from './menus.state';
import { entitiesStorage } from './menus.actions';

export const selectMenus = createFeatureSelector<IMenusState>('menus');

export const selectMenusItems = createSelector(
  selectMenus,
  (state: IMenusState) => state.data
);

export const selectMenusItem = (props: { id: number }) =>
  createSelector(selectMenusItems, (menuItems: any[]) =>
    menuItems.find((item) => {
      return item.id.toString() === props.id.toString();
    })
  );

export const entitiesSelectors: {
  [N in keyof typeof entitiesStorage]: {
    all: MemoizedSelector<any, any>;
    one: (props: { id: number }) => MemoizedSelector<any, any>;
  };
} = {} as any;

(Object.keys(entitiesStorage) as any[]).forEach(
  (entity: keyof typeof entitiesStorage) => {
    const entityModel = entitiesStorage[entity];
    const featureSelector = createFeatureSelector<typeof entityModel>(entity);
    // setting the entity object
    entitiesSelectors[entity] = {} as any;
    entitiesSelectors[entity].all = createSelector(
      featureSelector,
      (state: typeof entityModel) => (state as any).data
    );

    entitiesSelectors[entity].one = (props) =>
      createSelector(entitiesSelectors[entity].all, (data: any[]) =>
        data.find((item) => {
          return item.id.toString() === props.id.toString();
        })
      );
  }
);
