import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

export type DialogTypes = 'warning' | 'delete' | 'suspend' | 'block' | 'ignore';
export type IDialogOptions = {
  [N in DialogTypes]?: {
    header: string;
    message: string;
  };
};
@Component({
  selector: 'pv-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss'],
  animations: [],
})
export class ReportDetailComponent implements OnInit {
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
      message: `Are you sure you want to <b>delete</b> this account? <br /> this cannot be undone.`,
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

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {}

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
