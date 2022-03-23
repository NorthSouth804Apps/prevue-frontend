import { createFeatureSelector, createSelector } from "@ngrx/store";
import { extraSelectorTypes } from "../helpers/base.selectors";
import { UserState } from "./users-state-management";
import { UserModel } from "../../models";

const featureSelector = createFeatureSelector<UserState>('user');

export const userExtraSelectors: Partial<extraSelectorTypes> = {
  userDetails: createSelector(
    featureSelector,
    (state: UserState) => state.userDetails || new UserModel(),
  ),
}
