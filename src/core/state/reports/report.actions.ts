import { ActionsStatus, StatesActionsType } from "../helpers/base.actions";
import { createAction, props } from '@ngrx/store';

export const extraReportActions: Partial<StatesActionsType> = {
    matches: {
      success: createAction(
        `[report] get matches ${ActionsStatus.SUCCESS}`,
        props<any>()
      ),
      failed:  createAction(
        `[report] get matches ${ActionsStatus.FAILED}`,
        props<any>()
      ),
      submitted:  createAction(
        `[report] get matches ${ActionsStatus.SUBMITTED}`,
        props<any>()
      ),
      initiated:  createAction(
        `[report] get matches ${ActionsStatus.INITIAL}`,
        props<any>()
      )
    },
};
