import { ActionsStatus, StatesActionsType } from '../helpers/base.actions';
import { createAction, props } from '@ngrx/store';

export const extraReportActions: Partial<StatesActionsType> = {
  matchesStats: {
    success: createAction(
      `[report] get matches stats ${ActionsStatus.SUCCESS}`,
      props<any>()
    ),
    failed: createAction(
      `[report] get matches stats ${ActionsStatus.FAILED}`,
      props<any>()
    ),
    submitted: createAction(
      `[report] get matches stats ${ActionsStatus.SUBMITTED}`,
      props<any>()
    ),
    initiated: createAction(
      `[report] get matches stats ${ActionsStatus.INITIAL}`,
      props<any>()
    ),
  },

  usersStats: {
    success: createAction(
      `[report] get users stats ${ActionsStatus.SUCCESS}`,
      props<any>()
    ),
    failed: createAction(
      `[report] get users stats ${ActionsStatus.FAILED}`,
      props<any>()
    ),
    submitted: createAction(
      `[report] get users stats ${ActionsStatus.SUBMITTED}`,
      props<any>()
    ),
    initiated: createAction(
      `[report] get users stats ${ActionsStatus.INITIAL}`,
      props<any>()
    ),
  },
};
