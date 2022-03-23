import { ActionCreator, on } from "@ngrx/store";
import { statesActions } from '../core.actions';
import { MethodTypes } from './base.actions';
import { ReducerTypes } from "@ngrx/store/src/reducer_creator";

export const commonReducerValidationsGenerator = (
  actionParent: keyof typeof statesActions,
  parentProperty: MethodTypes
): ReducerTypes<any, ActionCreator[]>[] => {
  return [
    on(statesActions[actionParent][parentProperty].success, (state, { data }) => {
      console.log('success', data);
      return {
        ...state,
        [parentProperty]: data,
        loading: false,
      };
    }),
    on(statesActions[actionParent][parentProperty].failed, (state, error) => {
      return {
        ...state,
        error,
        loading: false,
      };
    }),
    on(statesActions[actionParent][parentProperty].submitted, (state, { data }) => {
      return {
        ...state,
        loading: true,
      };
    }),
  ];
};
