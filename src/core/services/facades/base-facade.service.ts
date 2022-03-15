import { statesActions } from '../../state/core.actions';
import { Store } from '@ngrx/store';
import { statesSelectors } from '../../state/core.selectors';
import { statesStorage } from '../../state';
import { ToastService } from '../toast.service';
import { Observable } from "rxjs";
import { QueryParamsType } from "../../interfaces/common.interface";
import ResponseModel from "../../models/response.model";

export class BaseFacadeService<DataModel> {
  data$ = this.store.select(statesSelectors[this.stateName].get);
  message$ = this.store.select<string>(statesSelectors[this.stateName].message);
  loading$ = this.store.select(statesSelectors[this.stateName].loading);
  error$ = this.store
    .select<ResponseModel<null>>(statesSelectors[this.stateName].error);

  constructor(
    private stateName: keyof typeof statesStorage,
    private store: Store,
    private toastService: ToastService
  ) {
    this.error$.subscribe((error) => {
      if(error) {
        this.toastService.showError({ summary: 'Fail', detail: error.message, sticky: true })
      }
    })
  }

  post(data: DataModel) {
    this.store.dispatch(
      statesActions[this.stateName].post.submitted({
        data,
      })
    );
  }

  getByProperty(value: number, property: keyof DataModel | string = 'userId'): Observable<DataModel> {
    return this.store.select(statesSelectors[this.stateName].getByPropertyValue({ value, property }))
  }

  get(options?: QueryParamsType) {
    this.store.dispatch(
      statesActions[this.stateName].get.submitted(options)
    );
  }

  put(data: DataModel) {
    console.log('updating', data, statesActions[this.stateName].put.submitted.type)
    this.store.dispatch(
      statesActions[this.stateName].put.submitted({
        data,
      })
    );
  }

  delete(data: DataModel) {
    this.store.dispatch(
      statesActions[this.stateName].delete.submitted({
        data,
      })
    );
  }
}
