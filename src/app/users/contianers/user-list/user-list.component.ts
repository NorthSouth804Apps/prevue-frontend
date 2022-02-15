import { Component, EventEmitter, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'pv-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [],
})
export class UserListComponent implements OnInit {
  display: boolean = true;
  searchValue: string = '';
  userTypes: any[] = [
    { label: 'Active Users', value: 1 },
    { label: 'Suspended Users', value: 2 },
    { label: 'Blocked Users', value: 0 },
  ];
  selectedUserType: any;
  customers: any[] = [{
    user: '1294884',
    reason: 24,
    gender: 'Male',
    showMe: 'Women',
    ageRange: '20-44',
    location: 'Brooklyn, NY',
    joined: new Date(),
    matches: 19,
  },
    {
      user: '3458494',
      reason: 25,
      gender: 'Female',
      showMe: 'Men',
      ageRange: '20-44',
      location: 'Brooklyn, NY',
      joined: new Date(),
      matches: 20,
    }];
  representatives: any[] = [];
  statuses: any[] = [];
  loading: boolean = false;

  activityValues: number[] = [0, 100];
  constructor() {}

  ngOnInit(): void {

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];
  }

  clear(table: Table) {
    table.clear();
  }
}
