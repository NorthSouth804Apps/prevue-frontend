import { Injectable } from "@angular/core";
import { BaseEffects } from "../helpers/base.effects";
import { Actions } from "@ngrx/effects";
import baseReducer from "../helpers/base.reducer";
import { BaseState } from "../helpers/base.state";
import { UserService } from "../../services/user.service";
import { UserModel } from "../../models";

// STATE OF MENUS
export class UserState extends BaseState<UserModel> {
  constructor() {
    super();
    this.data = new UserModel()
  }
}

// EFFECTS OF MENUS
@Injectable()
export class UserEffects extends BaseEffects<UserModel> {
  constructor(
    private actions: Actions<any>,
    private userService: UserService,
  ) {
    super('user', actions, userService)
  }
}

// REDUCER OF MENUS
export const userReducer = baseReducer<UserState>('user', new UserState())

