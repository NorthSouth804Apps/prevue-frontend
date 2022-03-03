import { ActionCreator, createAction, props } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { modelsStorage } from "../../models";

export enum ActionsStatus {
  SUCCESS = 'Success',
  FAILED = 'Failed',
  SUBMITTED = 'Submitted',
  INITIAL = 'Initial',
}

export type MethodTypes = 'fetch' | 'add' | 'edit' | 'delete';
export type statusTypes = 'success' | 'initiated' | 'failed' | 'submitted';

export class MenuModel {
  data?: any;
  name?: string;
}

const methods: MethodTypes[] = ['fetch', 'add', 'edit', 'delete'];

const modelsActions: {
  [N in keyof typeof modelsStorage]: {
    [P in MethodTypes]: {
      [N in statusTypes]: ActionCreator<any, ({}?: any) => any & TypedAction<any>>
    };
  };
} = {} as any;

export const getModelsActions = () => {
  if(JSON.stringify(modelsActions) !== "{}") {
    return modelsActions;
  }

  (Object.keys(modelsStorage) as any[]).forEach((entity: keyof typeof modelsStorage) => {
    const entityModel = modelsStorage[entity];
    modelsActions[entity] = {} as any;

    methods.forEach((method: MethodTypes) => {
      modelsActions[entity][method] = {} as any;

      modelsActions[entity][method].success = createAction(
        `[${entity}] ${method} ${entity} ${ActionsStatus.SUCCESS}`,
        props<{ data: typeof entityModel[] }>()
      )

      modelsActions[entity][method].failed = createAction(
        `[${entity}] ${method} ${entity} ${ActionsStatus.FAILED}`,
        props<{ error: any }>()
      );

      modelsActions[entity][method].submitted = createAction(
        `[${entity}] ${method} ${entity} ${ActionsStatus.SUBMITTED}`,
        props<{ data: typeof entityModel }>()
      );

      modelsActions[entity][method].initiated = createAction(
        `[${entity}] ${method} ${entity} ${ActionsStatus.INITIAL}`,
        props<{ id: number }>()
      );
    });
  });

  return modelsActions;
}

