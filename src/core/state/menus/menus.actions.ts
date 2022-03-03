import { ActionCreator, createAction, props } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";

export const appLoaded = createAction('[App] App Loaded');

// export const fetchMenuSuccess = createAction(
//   '[Menu API] Fetch Menu Success',
//   props<{ menuItems: any[] }>()
// );
//
// export const fetchMenuFailed = createAction(
//   '[Menu API] Fetch Menu Failed',
//   props<{ error: any }>()
// );
//
export const addMenuItemFormSubmitted = createAction(
  '[Add Menu Page] Add Menu Item Form Submitted',
  props<{ menuItem: any }>()
);
//
// export const addMenuItemFailed = createAction(
//   '[Menu Api] Add Menu Item Failed',
//   props<{ error: any }>()
// );
//
// export const addMenuItemSuccess = createAction(
//   '[Menu Api] Add Menu Item Success'
// );
//
// export const editMenuItemFormSubmitted = createAction(
//   '[Edit Menu Page] Edit Menu Item Form Submitted',
//   props<{ menuItem: any }>()
// );
//
// export const editMenuItemFailed = createAction(
//   '[Menu Api] Edit Menu Item Failed',
//   props<{ error: any }>()
// );
//
// export const editMenuItemSuccess = createAction(
//   '[Menu Api] Edit Menu Item Success',
//   props<{ menuItem: any }>()
// );
//
// export const deleteMenuItemInitiated = createAction(
//   '[Delete Menu Page] Delete Menu Initiated',
//   props<{ menuId: number }>()
// );
//
// export const deleteMenuItemFailed = createAction(
//   '[Menu Api] Delete Menu Item Failed',
//   props<{ error: any }>()
// );
//
// export const deleteMenuItemSuccess = createAction(
//   '[Menu Api] Delete Menu Item Success',
//   props<{ menuId: string }>()
// );
export type MethodTypes = 'fetch' | 'add' | 'edit' | 'delete';

const methods: MethodTypes[] = ['fetch', 'add', 'edit', 'delete'];

export class MenuModel {
  data?: any;
  name?: string;
}

export const entitiesStorage = {
  menus: MenuModel,
};

export type statusTypes = 'success' | 'initiated' | 'failed' | 'submitted';

export const entitiesActions: {
  [N in keyof typeof entitiesStorage]: {
    [P in MethodTypes]: {
      [N in statusTypes]: ActionCreator<any, ({}?: any) => any & TypedAction<any>>
    };
  };
} = {} as any;

export enum ActionsStatus {
  SUCCESS = 'Success',
  FAILED = 'Failed',
  SUBMITTED = 'Submitted',
  INITIAL = 'Initial',
}

(Object.keys(entitiesStorage) as any[]).forEach((entity: keyof typeof entitiesStorage) => {
  const entityModel = entitiesStorage[entity];
  entitiesActions[entity] = {} as any;

  methods.forEach((method: MethodTypes) => {
    entitiesActions[entity][method] = {} as any;

    entitiesActions[entity][method].success = createAction(
      `[${entity}] ${method} ${entity} ${ActionsStatus.SUCCESS}`,
      props<{ data: typeof entityModel[] }>()
    )

    entitiesActions[entity][method].failed = createAction(
      `[${entity}] ${method} ${entity} ${ActionsStatus.FAILED}`,
      props<{ error: any }>()
    );

    entitiesActions[entity][method].submitted = createAction(
      `[${entity}] ${method} ${entity} ${ActionsStatus.SUBMITTED}`,
      props<{ data: typeof entityModel }>()
    );

    entitiesActions[entity][method].initiated = createAction(
      `[${entity}] ${method} ${entity} ${ActionsStatus.INITIAL}`,
      props<{ id: number }>()
    );
  });
});

