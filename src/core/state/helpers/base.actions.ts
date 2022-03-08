import { ActionCreator, createAction, props } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { statesStorage } from "../core.state";
import ResponseModel from "../../models/response.model";

// here we are going to put the extra methods whiches have their own actions
export type ExtraMethodTypes = 'matches';

export enum ActionsStatus {
  SUCCESS = 'Success',
  FAILED = 'Failed',
  SUBMITTED = 'Submitted',
  INITIAL = 'Initial',
}

export type MethodTypes = 'get' | 'post' | 'put' | 'delete' | ExtraMethodTypes;
export type statusTypes = 'success' | 'initiated' | 'failed' | 'submitted';

const methods: MethodTypes[] = ['get', 'post', 'put', 'delete'];

export type StatesActionsType = {
  [P in MethodTypes]: {
    [N in statusTypes]: ActionCreator<any, (data: ResponseModel<any>) => any & TypedAction<any>>
  };
};

export type AppStateActionsType = {
  [N in keyof typeof statesStorage]: StatesActionsType
};

const statesActions: AppStateActionsType  = {} as any;

export const getStatesActions = (): AppStateActionsType => {
  if(JSON.stringify(statesActions) !== "{}") {
    return statesActions;
  }

  (Object.keys(statesStorage) as any[]).forEach((entity: keyof typeof statesStorage) => {
    const entityModel = statesStorage[entity];
    statesActions[entity] = {} as any;

    methods.forEach((method: MethodTypes) => {
      statesActions[entity][method] = {} as any;

      statesActions[entity][method].success = createAction(
        `[${entity}] ${method} ${entity} ${ActionsStatus.SUCCESS}`,
        props<any>()
      )

      statesActions[entity][method].failed = createAction(
        `[${entity}] ${method} ${entity} ${ActionsStatus.FAILED}`,
        props<any>()
      );

      statesActions[entity][method].submitted = createAction(
        `[${entity}] ${method} ${entity} ${ActionsStatus.SUBMITTED}`,
        props<any>()
      );

      statesActions[entity][method].initiated = createAction(
        `[${entity}] ${method} ${entity} ${ActionsStatus.INITIAL}`,
        props<any>()
      );
    });
  });

  return statesActions;
}

