import { Component, EventEmitter, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import { ToastService } from '../../../../core/services/toast.service';
import { UsersFacadeService } from "../../../../core/services/facades/users-facade.service";
import { UserModel } from "../../../../core/models";

@Component({
  selector: 'pv-users-list',
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
  customers: any[] = [
    {
      user: '1294884',
      reason: 24,
      gender: 'Male',
      showMe: 'Women',
      ageRange: '20-44',
      location: 'Brooklyn, NY',
      joined: new Date(),
      matches: 19,
      age: 25,
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
      age: 23,
    },
  ];
  representatives: any[] = [];
  statuses: any[] = [];
  loading$ = this.usersFacade.loading$;
  users$ = this.usersFacade.data$;

  activityValues: number[] = [0, 100];
  constructor(private router: Router, private toastService: ToastService, private usersFacade: UsersFacadeService) {}

  ngOnInit(): void {
    this.usersFacade.get();
    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];
  }

  goToUserProfile(customer: UserModel) {
    this.router.navigate(['users', customer.userId]);
  }

  clear(table: Table) {
    table.clear();
  }
}
