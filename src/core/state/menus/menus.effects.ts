import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { BaseService } from "../../services/example.service";
import { BaseEffects } from "../helpers/base.effects";

@Injectable()
export class MenusEffects extends BaseEffects {
  constructor(
    private actions: Actions<any>,
    private menuService: BaseService
  ) {
    super('menus', actions, menuService, true)
  }
}



