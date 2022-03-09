import { Injectable } from "@angular/core";
import { BaseEffects } from "../helpers/base.effects";
import { Actions } from "@ngrx/effects";
import baseReducer from "../helpers/base.reducer";
import { BaseState } from "../helpers/base.state";
import { AuthService } from "../../services/auth.service";
import AuthModel from "../../models/auth.model";

// STATE OF MENUS
export class AuthState extends BaseState<AuthModel> {
  constructor() {
    super();
    this.data = new AuthModel()
  }
}

// EFFECTS OF MENUS
@Injectable()
export class AuthEffects extends BaseEffects<AuthModel> {
  constructor(
    private actions: Actions<any>,
    private authService: AuthService,
  ) {
    super('auth', actions, authService)
  }
}

// REDUCER OF MENUS
export const authReducer = baseReducer<AuthState>('auth', new AuthState())

