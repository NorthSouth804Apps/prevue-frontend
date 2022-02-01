import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pv-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: []
})
export class UserListComponent implements OnInit {
  display: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}
