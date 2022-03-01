import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, Observable, of, tap } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as MenusActions from './menus.actions';
import { TodoListService } from '../../services/example.service';

@Injectable()
export class MenusEffects {
  constructor(
    private actions$: Actions<any>,
    private todoService: TodoListService
  ) {}

  fetchMenus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MenusActions.appLoaded.type, MenusActions.addMenuItemSuccess.type),
      switchMap((data: any) =>
        this.todoService.loadTodos().pipe(
          map(() => {
            console.log('getting', data);
            const menus = JSON.parse(localStorage.getItem('menus') || '[]');
            return MenusActions.fetchMenuSuccess({
                menuItems: menus,
              });
            }
          ),
          catchError((error) =>
            of(MenusActions.fetchMenuFailed({ error: error }))
          )
        )
      )
    )
  );

  addMenu$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MenusActions.addMenuItemFormSubmitted.type),
      switchMap((action) =>
        this.todoService.loadTodos().pipe(
          map(() => {
            const menus = JSON.parse(localStorage.getItem('menus') || '[]');
            console.log('menus', menus);
            localStorage.setItem(
              'menus',
              JSON.stringify([...menus, { name: 'Option', id: new Date().getTime() }])
            );
            return MenusActions.addMenuItemSuccess();
          }),
          catchError((error) =>
            of(MenusActions.addMenuItemFailed({ error: error }))
          )
        )
      )
    )
  );

  init$ = createEffect(
    () => this.actions$.pipe(tap((action) => console.log(action))),
    { dispatch: false }
  );
}
