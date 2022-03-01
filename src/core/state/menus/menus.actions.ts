import { ActionCreator, createAction, props } from "@ngrx/store";
import { parseToCamelCase } from '../../../utils/textUtils';

export const appLoaded = createAction('[App] App Loaded');

export const fetchMenuSuccess = createAction(
  '[Menu API] Fetch Menu Success',
  props<{ menuItems: any[] }>()
);

export const fetchMenuFailed = createAction(
  '[Menu API] Fetch Menu Failed',
  props<{ error: any }>()
);

export const addMenuItemFormSubmitted = createAction(
  '[Add Menu Page] Add Menu Item Form Submitted',
  props<{ menuItem: any }>()
);

export const addMenuItemFailed = createAction(
  '[Menu Api] Add Menu Item Failed',
  props<{ error: any }>()
);

export const addMenuItemSuccess = createAction(
  '[Menu Api] Add Menu Item Success'
);

export const editMenuItemFormSubmitted = createAction(
  '[Edit Menu Page] Edit Menu Item Form Submitted',
  props<{ menuItem: any }>()
);

export const editMenuItemFailed = createAction(
  '[Menu Api] Edit Menu Item Failed',
  props<{ error: any }>()
);

export const editMenuItemSuccess = createAction(
  '[Menu Api] Edit Menu Item Success',
  props<{ menuItem: any }>()
);

export const deleteMenuItemInitiated = createAction(
  '[Delete Menu Page] Delete Menu Initiated',
  props<{ menuId: number }>()
);

export const deleteMenuItemFailed = createAction(
  '[Menu Api] Delete Menu Item Failed',
  props<{ error: any }>()
);

export const deleteMenuItemSuccess = createAction(
  '[Menu Api] Delete Menu Item Success',
  props<{ menuId: string }>()
);

const actionTypes = ['fetch', 'add', 'edit', 'delete'];

class MenuModel {
  name?: string;
}

const entities = {
  menu: MenuModel,
};

type statusTypes = 'success' | 'initial' | 'failed' | 'submitted';

const entitiesActions: {
  [N in keyof typeof entities]: {
    [P in statusTypes]: ActionCreator<any>;
  };
} = {};

export enum ActionsStatus {
  SUCCESS = 'Success',
  FAILED = 'Failed',
  SUBMITTED = 'Submitted',
  INITIAL = 'Initial',
}
(Object.keys(entities) as any[]).forEach((entity: keyof typeof entities) => {
  actionTypes.forEach((method: string) => {
    const successActionName = parseToCamelCase(
      `${method}${entity}${ActionsStatus.SUCCESS}`
    );
    const failedActionName = parseToCamelCase(
      `${method}${entity}${ActionsStatus.FAILED}`
    );
    const submittedActionName = parseToCamelCase(
      `${method}${entity}${ActionsStatus.SUBMITTED}`
    );
    const initialActionName = parseToCamelCase(
      `${method}${entity}${ActionsStatus.INITIAL}`
    );
    const value = entities[entity];

    entitiesActions[entity].success = createAction(
      `[${entity}] ${method} ${entity} ${ActionsStatus.SUCCESS}`,
      props<{ data: typeof value[] }>()
    );
  });
});

entitiesActions.menu.success()
