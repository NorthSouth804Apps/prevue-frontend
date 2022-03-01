import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addMenuItemFormSubmitted,
  selectMenusItem,
  selectMenusItems,
} from '../../../../core/state/menus';
import { Observable, Subject } from "rxjs";
import { map, switchMap } from 'rxjs/operators';

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
  menuId$ = new Subject<number>();
  listColumns: any[] = ['name', 'reason'];
  $menuItems = this.store.select(selectMenusItems);
  menuItem$ = this.menuId$.pipe(
    switchMap((id) => {
      console.log(id, 'white-offer');
      return this.store.select(selectMenusItem({ id }));
    })
  );

  constructor(private store: Store) {}

  onAddMenu() {
    this.store.dispatch(
      addMenuItemFormSubmitted({ menuItem: [{ name: 'First Option' }] })
    );
  }

  ngOnInit(): void {
    this.$menuItems.subscribe((items: any) => {
      console.log(items, 'items');
    });
  }

  selectCard(item: any){
    console.log('clicked', item);
    this.menuId$.next(item.id)
  }

  setColor(index: number): any {
    if ((index / 2).toString().includes('.')) {
      return 'blue-2';
    } else {
      return 'rose';
    }
  }
}
