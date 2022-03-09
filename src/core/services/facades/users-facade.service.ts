import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacadeService } from "./base-facade.service";
import { ToastService } from "../toast.service";
import { UserModel } from "../../models";

@Injectable()
export class UsersFacadeService extends BaseFacadeService<UserModel>{
  constructor(private storeProvider: Store, private toastServiceProvider: ToastService) {
    super('user', storeProvider, toastServiceProvider);
  }
}
