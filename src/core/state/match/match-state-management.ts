import { Injectable } from "@angular/core";
import { BaseEffects } from "../helpers/base.effects";
import { Actions } from "@ngrx/effects";
import baseReducer from "../helpers/base.reducer";
import { BaseState } from "../helpers/base.state";
import { MatchService } from "../../services/match.service";

// STATE OF MENUS
export class MatchState extends BaseState<any> {
  constructor() {
    super();
  }
}

// EFFECTS OF MENUS
@Injectable()
export class MatchEffects extends BaseEffects<any> {
  constructor(
    private actions: Actions<any>,
    private matchService: MatchService,
  ) {
    super('match', actions, matchService)
  }
}

// REDUCER OF MENUS
export const matchReducer = baseReducer<MatchState>('match', new MatchState())

