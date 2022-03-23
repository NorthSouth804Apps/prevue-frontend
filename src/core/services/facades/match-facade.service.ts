import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacadeService } from "./base-facade.service";
import { ToastService } from "../toast.service";

@Injectable()
export class MatchFacadeService extends BaseFacadeService<any>{
  constructor(private storeProvider: Store, private toastServiceProvider: ToastService) {
    super('match', storeProvider, toastServiceProvider);
  }
}
