import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import { ToastService } from '../../../../core/services/toast.service';
import { UsersFacadeService } from "../../../../core/services/facades/users-facade.service";
import { UserModel } from "../../../../core/models";
import { StatusTypes } from "../../../../core/interfaces/common.interface";


@Component({
  selector: 'pv-users-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [],
})
export class UserListComponent implements OnInit {
  display: boolean = true;
  searchValue: string = '';
  userTypes: { label: string, status: StatusTypes }[] = [
    { label: 'All Users', status: 'all' },
    { label: 'Active Users', status: 'active' },
    { label: 'Suspended Users', status: 'suspended' },
    { label: 'Blocked Users', status: 'blocked' },
  ];

  selectedUserType: any;
  representatives: any[] = [];
  loading$ = this.usersFacade.loading$;
  users$ = this.usersFacade.data$;

  activityValues: number[] = [0, 100];
  constructor(private router: Router, private toastService: ToastService, private usersFacade: UsersFacadeService) {}

  ngOnInit(): void {
    this.usersFacade.get();
  }

  onChangeUserStatus({  value: { status } }: { value: { status: string } }) {
    this.usersFacade.get({ status });
  }

  goToUserProfile(customer: UserModel) {
    this.router.navigate(['users', customer.userId]);
  }

  clear(table: Table) {
    table.clear();
  }
}
