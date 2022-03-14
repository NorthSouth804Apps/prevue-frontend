import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacadeService } from './base-facade.service';
import { ToastService } from '../toast.service';
import { UserModel } from '../../models';
import { statesActions } from '../../state/core.actions';
import { statesSelectors } from '../../state/core.selectors';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersFacadeService extends BaseFacadeService<UserModel> {

  userDetails$ = this.storeProvider
    .select<UserModel>(statesSelectors.user.userDetails);

  userMedias$ = this.storeProvider
    .select<UserModel>(statesSelectors.user.userDetails).pipe(map((detail) => detail.photos || []));

  constructor(
    private storeProvider: Store,
    private toastServiceProvider: ToastService
  ) {
    super('user', storeProvider, toastServiceProvider);
  }

  getUserDetails(userId: number) {
    return this.storeProvider.dispatch(
      statesActions.user.userDetails.submitted({ data: userId })
    );
  }
}
