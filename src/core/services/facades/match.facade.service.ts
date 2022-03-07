import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseFacadeService } from "./base.facade.service";
import { ToastService } from "../toast.service";
import { MatchModel } from 'src/core/models';

@Injectable()
export class MatchFacadeService extends BaseFacadeService<MatchModel>{
  constructor(private storeProvider: Store, private toastServiceProvider: ToastService) {
    super('match', storeProvider, toastServiceProvider);
  }
}
