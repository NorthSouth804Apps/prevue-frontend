import { statesActions } from '../../state/core.actions';
import { Store } from '@ngrx/store';
import { statesSelectors } from '../../state/core.selectors';
import { statesStorage } from '../../state';
import { ToastService } from '../toast.service';

export class BaseFacadeService<DataModel> {

  data$ = this.store.select(statesSelectors[this.stateName].get);
  loading$ = this.store.select(statesSelectors[this.stateName].loading);
  error$ = this.store
    .select(statesSelectors[this.stateName].error)
    .subscribe((error) => {
      if(error) {
        this.toastService.showError({ summary: 'Fail', detail: error.message, sticky: true })
      }
    });

  constructor(
    private stateName: keyof typeof statesStorage,
    private store: Store,
    private toastService: ToastService
  ) {}

  post(data: DataModel) {
    this.store.dispatch(
      statesActions[this.stateName].post.submitted({
        data,
      })
    );
  }

  get(data?: DataModel) {
    this.store.dispatch(
      statesActions[this.stateName].get.submitted({
        data,
      })
    );
  }
  put(data: DataModel) {
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
