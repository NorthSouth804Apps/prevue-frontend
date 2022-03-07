import { Injectable } from "@angular/core";
import { BaseEffects } from "../helpers/base.effects";
import { Actions } from "@ngrx/effects";
import { BaseService } from "../../services/base.service";
import baseReducer from "../helpers/base.reducer";
import { BaseState } from "../helpers/base.state";
import { MenuModel } from "../../models";
import { AuthService } from "../../services/auth.service";
import AuthModel from "../../models/auth.model";

// STATE OF MENUS
export class MenusState extends BaseState<MenuModel> {
  constructor() {
    super();
    this.data = new MenuModel()
  }
}

// EFFECTS OF MENUS
@Injectable()
export class MenusEffects extends BaseEffects<MenuModel> {
  constructor(
    private actions: Actions<any>,
    private menuService: BaseService<MenuModel>
  ) {
    super('menus', actions, menuService, true)
  }
}

// REDUCER OF MENUS
export const menusReducer = baseReducer<MenusState>('menus', new MenusState())

