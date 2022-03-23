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
  users$: any = this.usersFacade.data$;
  stopInfiniteScrollLoading?: boolean;
  usersLimit = 10;

  lastUsersIds: number[] = [];
  activityValues: number[] = [0, 100];
  constructor(private router: Router, private toastService: ToastService, private usersFacade: UsersFacadeService) {}

  ngOnInit(): void {
    this.usersFacade.get();
    this.users$.subscribe((users: UserModel[]) => {
      if(users.length === this.lastUsersIds.length) {
        this.stopInfiniteScrollLoading = true;
      } else {
        this.lastUsersIds = users.map(user => user.userId);
      }
    })
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
  onScroll($event: any) {
    console.log($event, 'scrolling');
    this.usersLimit = this.usersLimit + this.usersLimit;
    this.usersFacade.get({ limit: this.usersLimit });
  }
}
