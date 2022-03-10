import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { statesStorage } from '../core.state';

export type extraSelectors = 'matchesStats' | 'usersStats' | 'userMedias';

export type extraSelectorTypes = {
  [N in extraSelectors]: MemoizedSelector<any, any>;
}

export type StateSelectorsType =  {
  [N in keyof typeof statesStorage]: {
    get: MemoizedSelector<any, any>;
    error: MemoizedSelector<any, any>;
    loading: MemoizedSelector<any, any>;
    getById: (props: { id: number }) => MemoizedSelector<any, any>;
  } & extraSelectorTypes;
};

const statesSelectors: StateSelectorsType = {} as any;

export const getStatesSelectors = () => {
  if (JSON.stringify(statesSelectors) !== '{}') {
    return statesSelectors;
  }

  (Object.keys(statesStorage) as any[]).forEach(
    (entity: keyof typeof statesStorage) => {
      const entityModel = statesStorage[entity];
      const featureSelector = createFeatureSelector<typeof entityModel>(entity);
      // setting the entity object
      statesSelectors[entity] = {} as any;
      statesSelectors[entity].get = createSelector(
        featureSelector,
        (state: typeof entityModel) => {
          console.log('data get', state)
          return state.data;
        }
      );

      statesSelectors[entity].getById = (props) =>
        createSelector(
          statesSelectors[entity].get,
          (data: any[]) => {
            return data && Array.isArray(data) &&
            data.find((item) => {
              return item.userId.toString() === props.id.toString();
            });
          }
        );

      statesSelectors[entity].error = createSelector(
        featureSelector,
        (state: typeof entityModel) => state.error
      );

      statesSelectors[entity].loading = createSelector(
        featureSelector,
        (state: typeof entityModel) => state.loading
      );
    }
  );
  return statesSelectors;
};
