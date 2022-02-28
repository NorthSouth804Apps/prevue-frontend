import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { addMenuItemFormSubmitted, selectMenusItems } from "../../../../core/state/menus";

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
  listColumns: any[] = ['name', 'reason'];
  $menuItems = this.store.select(selectMenusItems);
  constructor(private store: Store) {}

  onAddMenu() {
    this.store.dispatch(addMenuItemFormSubmitted({ menuItem: [{ name: 'First Option' }]}))

  }
  ngOnInit(): void {
    console.log(this.$menuItems, 'whats up');
  }
}
