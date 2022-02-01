import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'pv-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: []
})
export class UserListComponent implements OnInit {
  display: boolean = true;
  searchValue: string ='';
  userTypes: any[] =  [
    {label: 'Active Users', value: 1},
    {label: 'Suspended Users', value: 2},
    {label: 'Blocked Users', value: 0},
  ];
  selectedUserType: any;

  constructor() {
  }

  ngOnInit(): void {
  }
}
