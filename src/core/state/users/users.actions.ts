import { ActionsStatus, StatesActionsType } from '../helpers/base.actions';
import { createAction, props } from '@ngrx/store';

export const extraUsersActions: Partial<StatesActionsType> = {
  userDetails: {
    success: createAction(
      `[report] get user details ${ActionsStatus.SUCCESS}`,
      props<any>()
    ),
    failed: createAction(
      `[report] get user details ${ActionsStatus.FAILED}`,
      props<any>()
    ),
    submitted: createAction(
      `[report] get user details ${ActionsStatus.SUBMITTED}`,
      props<any>()
    ),
    initiated: createAction(
      `[report] get user details ${ActionsStatus.INITIAL}`,
      props<any>()
    ),
  },
};
