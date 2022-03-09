import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { ActivatedRoute, Router } from "@angular/router";
import { ConfirmationService, MessageService } from 'primeng/api';
import { UsersFacadeService } from "../../../../core/services/facades/users-facade.service";
import { catchError, map, switchMap } from "rxjs/operators";
import { throwError } from "rxjs";

export type DialogTypes = 'warning' | 'delete' | 'suspend' | 'block' | 'ignore';
export type IDialogOptions = {
  [N in DialogTypes]?: {
    header: string;
    message: string;
  };
};
@Component({
  selector: 'pv-users-list',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  animations: [],
})
export class UserProfileComponent implements OnInit {
  loading: boolean = false;
  user = {
    name: 'Greg',
    joined: new Date(),
    location: 'Brooklyn, NY',
    lookingFor: 'Friendship, Dating',
    gender: 'Male',
    age: 24,
    ageRange: '23-27',
    showMe: 'Women',
  };

  dialogOptions: IDialogOptions = {
    delete: {
      message: `Are you sure you want to <b>delete</b> this account? this cannot be undone.`,
      header: 'Delete Account',
    },
    warning: {
      message: `Warning sent to user.`,
      header: 'Send Warning',
    },
    suspend: {
      message: 'User has been suspended for one week and added to suspended list.',
      header: 'Suspend Account',
    },
    block: {
      message: 'User has been blocked from PreVue and added to blocked list.',
      header: 'Block Account',
    },
  };
  openedDialog?: DialogTypes;

  userData$ = this.activatedRoute.params.pipe(switchMap((params: any) => {
    return this.usersFacade.getById(params.id)
  }), catchError(error => {
    return throwError(error);
  }));

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private usersFacade: UsersFacadeService,
  ) {}

  ngOnInit(): void {
    // check is the user list doesn't exist then try to load it
    this.userData$.subscribe(user => {
      console.log('user', user);
      if(!user) {
        this.usersFacade.get();
      }
    });
  }

  clear(table: Table) {
    table.clear();
  }

  confirm(type: DialogTypes) {
    this.openedDialog = type;
    setTimeout(() => {
      const options = this.dialogOptions[type];
      this.confirmationService.confirm({
        ...options,
        accept: () => {},
        reject: (type: string) => {},
      });
    })
  }
}
