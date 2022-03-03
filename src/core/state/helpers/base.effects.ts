import { entitiesActions, entitiesStorage } from "../menus";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BaseService } from "../../services/example.service";
import * as MenusActions from "../menus/menus.actions";
import { catchError, map, switchMap } from "rxjs/operators";
import { of, tap } from "rxjs";

export class BaseEffects {
  constructor(
    private entityName: keyof typeof entitiesStorage,
    private actions$: Actions<any>,
    private service: BaseService,
    private enableLog?: boolean,
  ) {
  }
  fetchData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MenusActions.appLoaded.type, entitiesActions[this.entityName].add.success),
      switchMap(() =>
        this.service.fetchData().pipe(
          map(() => {
            const menus = JSON.parse(localStorage.getItem('menus') || '[]');
            console.log('getting', menus);

            return entitiesActions[this.entityName].fetch.success({
              data: menus,
            });
          }),
          catchError((error) =>
            of(entitiesActions[this.entityName].fetch.failed({ error: error }))
          )
        )
      )
    )
  );

  addData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(entitiesActions[this.entityName].add.submitted.type),
      switchMap((action) =>
        this.service.addData().pipe(
          map(() => {
            const menus = JSON.parse(localStorage.getItem('menus') || '[]');
            console.log('menus', menus);
            localStorage.setItem(
              'menus',
              JSON.stringify([
                ...menus,
                { name: 'Option', id: new Date().getTime() },
              ])
            );
            return entitiesActions[this.entityName].add.success();
          }),
          catchError((error) =>
            of(entitiesActions[this.entityName].add.failed({ s: error }))
          )
        )
      )
    )
  );

  deleteData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(entitiesActions[this.entityName].delete.initiated.type),
      switchMap((action) =>
        this.service.deleteData(action.id).pipe(
          // tap(() => this.router.navigate(["/menu"])),
          map(() => {
            const menus = JSON.parse(localStorage.getItem('menus') || '[]').filter((item: any) => item.id !== action.id);
            localStorage.setItem(
              'menus',
              JSON.stringify([
                ...menus,
              ])
            );
            console.log('delete menus', menus);
            return entitiesActions[this.entityName].delete.success({
              data: action.id,
            });
          }),
          catchError((error) =>
            of(entitiesActions[this.entityName].delete.failed({ error: error }))
          )
        )
      )
    )
  );

  editData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(entitiesActions[this.entityName].delete.initiated.type),
      switchMap((action) =>
        this.service.editData(action.data).pipe(
          // tap(() => this.router.navigate(["/menu"])),
          map(() => {
            const menus = JSON.parse(localStorage.getItem('menus') || '[]').filter((item: any) => item.id !== action.id);
            localStorage.setItem(
              'menus',
              JSON.stringify([
                ...menus,
              ])
            );
            console.log('delete menus', menus);
            return entitiesActions[this.entityName].delete.success({
              data: action.id,
            });
          }),
          catchError((error) =>
            of(entitiesActions[this.entityName].delete.failed({ error: error }))
          )
        )
      )
    )
  );

  init$ = this.enableLog ? createEffect(
    () => this.actions$.pipe(tap((action) => console.log(action))),
    { dispatch: false }
  ) : null;
}
