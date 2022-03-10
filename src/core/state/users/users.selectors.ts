import { createFeatureSelector, createSelector } from "@ngrx/store";
import { extraSelectorTypes } from "../helpers/base.selectors";
import { UserMediaModel } from "../../models";
import { UserState } from "./users-state-management";

const featureSelector = createFeatureSelector<UserState>('user');

export const userExtraSelectors: Partial<extraSelectorTypes> = {
  userMedias: createSelector(
    featureSelector,
    (state: UserState) => state.userMedias || [new UserMediaModel()],
  ),
}
