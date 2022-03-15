import { Injectable } from '@angular/core';
import { BaseEffects } from '../helpers/base.effects';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import baseReducer from '../helpers/base.reducer';
import { BaseState } from '../helpers/base.state';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models';
import { catchError, map, switchMap } from 'rxjs/operators';
import ResponseModel from '../../models/response.model';
import { of } from 'rxjs';
import { statesActions } from '../core.actions';
import { on } from '@ngrx/store';
import { commonReducerValidationsGenerator } from "../helpers/common-reducer-validations-generator";

// STATE OF MENUS
export class UserState extends BaseState<UserModel> {
  userDetails = new UserModel();
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

  getUserDetails$ = createEffect(() =>
    this.actions.pipe(
      ofType(statesActions.user.userDetails.submitted),
      switchMap(({ data }) =>
        this.userService.getUserDetails(data).pipe(
          map((response: ResponseModel<UserModel[]> | any) => {
            return statesActions.user.userDetails.success({
              ...response,
              data: response.data[0],
            });
          }),
          catchError((errorData: { error: ResponseModel<null> }) =>
            of(statesActions.user.userDetails.failed(errorData.error))
          )
        )
      )
    )
  );
}
// REDUCER OF MENUS
export const userReducer = baseReducer<UserState>('user', new UserState(), [
  ...commonReducerValidationsGenerator('user', 'userDetails'),
]);
