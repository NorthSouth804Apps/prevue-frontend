import { ActionsStatus, StatesActionsType } from '../helpers/base.actions';
import { createAction, props } from '@ngrx/store';

export const extraUsersActions: Partial<StatesActionsType> = {
  userDetails: {
    success: createAction(
      `[user] get user details ${ActionsStatus.SUCCESS}`,
      props<any>()
    ),
    failed: createAction(
      `[user] get user details ${ActionsStatus.FAILED}`,
      props<any>()
    ),
    submitted: createAction(
      `[user] get user details ${ActionsStatus.SUBMITTED}`,
      props<any>()
    ),
    initiated: createAction(
      `[user] get user details ${ActionsStatus.INITIAL}`,
      props<any>()
    ),
  },
};
