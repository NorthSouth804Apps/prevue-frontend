import { Injectable } from '@angular/core';
import AuthModel from '../../models/auth.model';
import { Store } from '@ngrx/store';
import { BaseFacadeService } from "./base-facade.service";
import { ToastService } from "../toast.service";
import { statesActions } from "../../state/core.actions";

@Injectable()
export class AuthFacadeService extends BaseFacadeService<AuthModel>{
  constructor(private storeProvider: Store, private toastServiceProvider: ToastService) {
    super('auth', storeProvider, toastServiceProvider);
  }

  login(auth: AuthModel) {
    this.storeProvider.dispatch(
      statesActions.auth.post.submitted({
        data: { ...new AuthModel(), ...auth },
      })
    );
  }
}
