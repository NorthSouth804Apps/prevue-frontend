import { Action, ActionCreator, createReducer, on } from '@ngrx/store';
import { BaseState } from './base.state';
import { getStatesActions } from './base.actions';
import { ReducerTypes } from '@ngrx/store/src/reducer_creator';
import { statesStorage } from '../core.state';

const statesActions = getStatesActions();

function baseReducer<T extends BaseState<any>>(
  stateName: keyof typeof statesStorage,
  initialState: T,
  extraOns: ReducerTypes<T, ActionCreator[]>[] = []
) {
  return (state: T | undefined, action: Action) =>
    createReducer(
      initialState,
      on(
        ...[
          statesActions[stateName].post.success,
          statesActions[stateName].get.success,
          statesActions[stateName].delete.success,
          statesActions[stateName].put.success,
        ],
        (state, { data }) => {
          console.log('get data reducer', data);
          return {
            ...state,
            data,
            loading: false,
          };
        }
      ),
      on(
        ...[
          statesActions[stateName].post.failed,
          statesActions[stateName].get.failed,
          statesActions[stateName].delete.failed,
          statesActions[stateName].put.failed,
        ],
        (state, error) => {
          return {
            ...state,
            error,
            loading: false,
          };
        }
      ),
      on(
        ...[
          statesActions[stateName].post.submitted,
          statesActions[stateName].get.submitted,
          statesActions[stateName].delete.submitted,
          statesActions[stateName].put.submitted,
        ],
        (state, { data }) => {
          return {
            ...state,
            data,
            loading: true,
          };
        }
      ),
      ...extraOns
    )(state, action);
}

export default baseReducer;
