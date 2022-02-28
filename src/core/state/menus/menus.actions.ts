import { createAction, props } from "@ngrx/store";

export const appLoaded = createAction("[App] App Loaded");

export const fetchMenuSuccess = createAction(
  "[Menu API] Fetch Menu Success",
  props<{ menuItems: any[] }>()
);

export const fetchMenuFailed = createAction(
  "[Menu API] Fetch Menu Failed",
  props<{ error: any }>()
);

export const addMenuItemFormSubmitted = createAction(
  "[Add Menu Page] Add Menu Item Form Submitted",
  props<{ menuItem: any }>()
);

export const addMenuItemFailed = createAction(
  "[Menu Api] Add Menu Item Failed",
  props<{error: any}>(),
);

export const addMenuItemSuccess = createAction(
  "[Menu Api] Add Menu Item Success",
  props<{menuItem: any}>(),
);

export const editMenuItemFormSubmitted = createAction(
  "[Edit Menu Page] Edit Menu Item Form Submitted",
  props<{ menuItem: any }>()
);

export const editMenuItemFailed = createAction(
  "[Menu Api] Edit Menu Item Failed",
  props<{error: any}>(),
);

export const editMenuItemSuccess = createAction(
  "[Menu Api] Edit Menu Item Success",
  props<{ menuItem: any}>(),
)

export const deleteMenuItemInitiated = createAction(
  "[Delete Menu Page] Delete Menu Initiated",
  props<{ menuId: string }>(),
)

export const deleteMenuItemFailed = createAction(
  "[Menu Api] Delete Menu Item Failed",
  props<{error: any}>(),
);

export const deleteMenuItemSuccess = createAction(
  "[Menu Api] Delete Menu Item Success",
  props<{menuId: string}>(),
)
