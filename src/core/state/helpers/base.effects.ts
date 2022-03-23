import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BaseService } from '../../services/base.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of, tap, throwError } from 'rxjs';
import { getStatesActions } from './base.actions';
import { statesStorage } from '../core.state';
import ResponseModel from '../../models/response.model';
import { QueryParamsType } from '../../interfaces/common.interface';

const statesActions = getStatesActions();

export class BaseEffects<DataModel> {
  constructor(
    private entityName: keyof typeof statesStorage,
    private actions$: Actions<any>,
    private service: BaseService<DataModel>,
    private enableLog?: boolean
  ) {}

  put$ = createEffect(() =>
    this.actions$.pipe(
      ofType(statesActions[this.entityName].put.submitted.type),
      switchMap((action) =>
        this.service.put(action.data).pipe(
          map((response: ResponseModel<DataModel>) => {
            action.callBack && action.callBack();
            return statesActions[this.entityName].put.success(response);
          }),
          catchError((errorData: { error: ResponseModel<null> }) =>
            of(statesActions[this.entityName].put.failed(errorData.error))
          )
        )
      )
    )
  );

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(statesActions[this.entityName].get.submitted),
      switchMap((queryParams?: QueryParamsType) =>
        this.service.get(queryParams).pipe(
          map((response: ResponseModel<DataModel> | any) => {
            return statesActions[this.entityName].get.success(response);
          }),
          catchError((errorData: { error: ResponseModel<null> }) =>
            of(statesActions[this.entityName].get.failed(errorData.error))
          )
        )
      )
    )
  );

  post$ = createEffect(() =>
    this.actions$.pipe(
      ofType(statesActions[this.entityName].post.submitted.type),
      switchMap((action) =>
        this.service.post(action.data).pipe(
          map((response: ResponseModel<DataModel>) => {
            return statesActions[this.entityName].post.success(response);
          }),
          catchError((errorData: { error: ResponseModel<null> }) => {
            return of(
              statesActions[this.entityName].post.failed(errorData.error)
            );
          })
        )
      )
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(statesActions[this.entityName].delete.submitted.type),
      switchMap((action) =>
        this.service.delete(action.id).pipe(
          map((response: ResponseModel<DataModel>) => {
            return statesActions[this.entityName].delete.success(response);
          }),
          catchError((errorData: { error: ResponseModel<null> }) =>
            of(statesActions[this.entityName].delete.failed(errorData.error))
          )
        )
      )
    )
  );

  init$ = this.enableLog
    ? createEffect(
        () =>
          this.actions$.pipe(
            ofType(...this.getAllTypes()),
            tap((action) => console.log(action))
          ),
        { dispatch: false }
      )
    : null;

  /* get all */
  getAllTypes(): string[] {
    let allTypes: string[] = [];
    Object.keys(statesActions[this.entityName]).forEach((method: any) => {
      allTypes = allTypes.concat(allTypes, [
        (statesActions[this.entityName] as any)[method].success.type,
        (statesActions[this.entityName] as any)[method].submitted.type,
        (statesActions[this.entityName] as any)[method].failed.type,
        (statesActions[this.entityName] as any)[method].initiated.type,
      ]);
    });

    return allTypes;
  }
}
