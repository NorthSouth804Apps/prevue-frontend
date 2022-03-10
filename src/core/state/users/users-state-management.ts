import { Injectable } from '@angular/core';
import { BaseEffects } from '../helpers/base.effects';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import baseReducer from '../helpers/base.reducer';
import { BaseState } from '../helpers/base.state';
import { UserService } from '../../services/user.service';
import { UserMediaModel, UserModel } from '../../models';
import { catchError, map, switchMap } from 'rxjs/operators';
import { QueryParamsType } from '../../interfaces/common.interface';
import ResponseModel from '../../models/response.model';
import { of } from 'rxjs';
import { statesActions } from '../core.actions';
import { on } from '@ngrx/store';

// STATE OF MENUS
export class UserState extends BaseState<UserModel> {
  userMedias = [new UserMediaModel()];
  constructor() {
    super();
    this.data = new UserModel();
  }
}

// EFFECTS OF MENUS
@Injectable()
export class UserEffects extends BaseEffects<UserModel> {
  constructor(private actions: Actions<any>, private userService: UserService) {
    super('user', actions, userService);
  }

  getUserMedia$ = createEffect(() =>
    this.actions.pipe(
      ofType(statesActions.user.userMedias.submitted),
      switchMap(({ data }) =>
        this.userService.getUserMedias(data).pipe(
          map((response: ResponseModel<UserMediaModel[]> | any) => {
            return statesActions.user.userMedias.success(response);
          }),
          catchError((errorData: { error: ResponseModel<null> }) =>
            of(statesActions.user.userMedias.failed(errorData.error))
          )
        )
      )
    )
  );
}
// REDUCER OF MENUS
export const userReducer = baseReducer<UserState>('user', new UserState(), [
  on(statesActions.user.userMedias.success, (state, { data }) => {
    return {
      ...state,
      userMedias: data,
      loading: false,
    };
  }),
  on(statesActions.user.userMedias.failed, (state, error) => {
    return {
      ...state,
      error,
      loading: false,
    };
  }),
  on(statesActions.user.userMedias.submitted, (state, { data }) => {
    return {
      ...state,
      userMedias: data,
      loading: true,
    };
  }),
]);
