import { ActionsStatus, StatesActionsType } from '../helpers/base.actions';
import { createAction, props } from '@ngrx/store';

export const extraUsersActions: Partial<StatesActionsType> = {
  userMedias: {
    success: createAction(
      `[report] get user media ${ActionsStatus.SUCCESS}`,
      props<any>()
    ),
    failed: createAction(
      `[report] get user media ${ActionsStatus.FAILED}`,
      props<any>()
    ),
    submitted: createAction(
      `[report] get user media ${ActionsStatus.SUBMITTED}`,
      props<any>()
    ),
    initiated: createAction(
      `[report] get user media ${ActionsStatus.INITIAL}`,
      props<any>()
    ),
  },

};
