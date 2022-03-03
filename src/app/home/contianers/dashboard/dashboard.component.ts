import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  entitiesActions, entitiesSelectors,
  selectMenusItem,
  selectMenusItems
} from "../../../../core/state/menus";
import { BehaviorSubject } from "rxjs";
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'pv-home-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [],
})
export class DashboardComponent implements OnInit {
  display: boolean = true;
  dataList = [
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Inappropriate Content',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
  ];
  menuId$ = new BehaviorSubject<number>(0);
  listColumns: any[] = ['name', 'reason'];
  $menuItems = this.store.select(entitiesSelectors.menus.all);
  menuItem$ = this.menuId$.pipe(
    switchMap((id) => {
      console.log(id, 'white-offer');
      return this.store.select(entitiesSelectors.menus.one({ id }));
    })
  );

  constructor(private store: Store) {}

  onAddMenu() {
    this.store.dispatch(
      entitiesActions.menus.add.submitted({ data: [{ name: 'First Option' }] })
    );
  }

  ngOnInit(): void {
    this.$menuItems.subscribe(async (items: any) => {
      console.log(items, 'items');
    });
  }

  selectCard(item: any) {
    console.log('clicked', item);
    this.menuId$.next(item.id)
  }

  deleteCard() {
    this.store.dispatch(entitiesActions.menus.delete.initiated({ id: this.menuId$.getValue() || 0 }))
  }

  setColor(index: number): any {
    if ((index / 2).toString().includes('.')) {
      return 'blue-2';
    } else {
      return 'rose';
    }
  }
}
