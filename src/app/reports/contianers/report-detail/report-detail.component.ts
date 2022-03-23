import { Component, OnDestroy, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ReportsFacadeService } from '../../../../core/services/facades/reports-facade.service';
import {
  IDialogOptions,
  StatusValues,
  StatusValuesType,
} from 'src/core/interfaces/common.interface';
import { ReportModel, UserModel } from '../../../../core/models';
import { Subscription, switchMap } from 'rxjs';
import { MatchFacadeService } from '../../../../core/services/facades/match-facade.service';

@Component({
  selector: 'pv-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss'],
  animations: [],
})
export class ReportDetailComponent implements OnInit, OnDestroy {
  loading: boolean = false;

  dialogOptions: IDialogOptions = {
    WARNING: {
      message: `Warning sent to user.`,
      header: 'Send Warning',
    },
    SUSPENDED: (status) => ({
      message: `User has been <b>${status ? '' : 'un' }suspended</b> ${status ? 'for one week' : ''} and ${status ? 'added to' : 'removed from'} suspended list.`,
      header: 'Suspend Account',
    }),
    BLOCKED: (status) => ({
      message: `User has been <b>${status ? '' : 'un' }blocked</b> from PreVue and  ${status ? 'added to' : 'removed from'} to blocked list.`,
      header: 'Block Account',
    }),
  };
  openedDialog?: StatusValuesType;
  report$ = this.activatedRoute.params.pipe<ReportModel>(
    switchMap((params) => {
      return this.reportFacade.getByProperty(params['id'], 'userReportId');
    })
  );
  reportModel: ReportModel = new ReportModel();
  loading$ = this.reportFacade.loading$;
  statusLoading$ = this.reportFacade.statusLoading$;
  statusMessage$ = this.reportFacade.statusMessage$;
  usersMessages$ = this.reportFacade.usersMessages$;
  reportSubscription = new Subscription();
  userDetailsSubs = new Subscription();
  matchMessageSubs = new Subscription();
  userMedia = this.reportFacade.userMedia$;
  status = StatusValues;
  messageSubscription = new Subscription();
  user = new UserModel();
  userDetails$ = this.reportFacade.userDetails$;

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private reportFacade: ReportsFacadeService,
    private activatedRoute: ActivatedRoute,
    private matchFacade: MatchFacadeService
  ) {}

  ngOnInit(): void {
    this.reportFacade.get();
    this.reportSubscription = this.report$.subscribe((report) => {
      this.reportModel = report || this.reportModel;
      // search for user details to get usermedia
      this.reportFacade.getUserDetails(report.reportedUserId);
      this.reportFacade.getUserMessages({
        userId: report.reportedUserId,
        recipientUserId: report.reportedByUserId,
      });
    });

    this.userDetailsSubs = this.userDetails$.subscribe(
      (user) => (this.user = user)
    );
  }

  getUserDetails() {
    this.reportFacade.getUserDetails(this.reportModel.reportedUserId);
  }

  clear(table: Table) {
    table.clear();
  }

  changeUserStatus(type: StatusValuesType) {
    const callBack = () => {
      this.getUserDetails();
    };

    if (type === 'WARNING') {
      return this.matchFacade.post(
        {
          recipientUserId: this.reportModel.reportedUserId,
          type: 5,
        },
        callBack
      );
    }

    let statusValue = true;
    if (type === 'BLOCKED') {
      statusValue = !this.user.isBlocked;
    } else if (type === 'SUSPENDED') {
      statusValue = !this.user.isSuspended;
    }

    this.reportFacade.changeUserStatus(
      this.reportModel.userReportId,
      type,
      statusValue,
      callBack
    );
  }

  async confirm(type: StatusValuesType) {
    this.openedDialog = type;
    if (type !== 'DELETED') {
      this.changeUserStatus(type);
    }

    const openDialog = (message: string) => {
      setTimeout(() => {
        if (message === 'success') {
          let statusValue = true;
          if (type === 'BLOCKED') {
            statusValue = !this.user.isBlocked;
          } else if (type === 'SUSPENDED') {
            statusValue = !this.user.isSuspended;
          }

          // const options = this.dialogOptions[type];
          const options =
            type === 'SUSPENDED' || type === 'BLOCKED'
              ? (this.dialogOptions[type] as any)(statusValue)
              : this.dialogOptions[type];

          this.confirmationService.confirm({
            ...options,
            accept: () => {
              this.messageSubscription.unsubscribe();
              this.matchMessageSubs.unsubscribe();
              this.changeUserStatus(type);
            },
            reject: (type: string) => {
              this.messageSubscription.unsubscribe();
              this.matchMessageSubs.unsubscribe();
            },
          });
        }
      });
    };

    this.messageSubscription = this.statusMessage$.subscribe((message) => {
      openDialog(message);
    });

    this.matchMessageSubs = this.matchFacade.message$.subscribe((message) => {
      openDialog(message);
    });
  }

  ngOnDestroy() {
    this.reportSubscription.unsubscribe();
    this.messageSubscription.unsubscribe();
    this.userDetailsSubs.unsubscribe();
    this.matchMessageSubs.unsubscribe();
  }
}
