import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacadeService } from './base-facade.service';
import { ToastService } from '../toast.service';
import { UserMediaModel, UserModel } from "../../models";
import { statesActions } from "../../state/core.actions";
import { statesSelectors } from "../../state/core.selectors";

@Injectable()
export class UsersFacadeService extends BaseFacadeService<UserModel> {
  userMedias$ = this.storeProvider.select<UserMediaModel[]>(statesSelectors.user.userMedias);

  constructor(
    private storeProvider: Store,
    private toastServiceProvider: ToastService
  ) {
    super('user', storeProvider, toastServiceProvider);
  }

  getUserMedias(userId: number) {
    return this.storeProvider.dispatch(statesActions.user.userMedias.submitted({ data: userId }));
  }
}
