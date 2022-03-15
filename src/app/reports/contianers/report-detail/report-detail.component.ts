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
import { ReportModel } from '../../../../core/models';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'pv-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss'],
  animations: [],
})
export class ReportDetailComponent implements OnInit, OnDestroy {
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
    WARNING: {
      message: `Warning sent to user.`,
      header: 'Send Warning',
    },
    SUSPENDED: {
      message:
        'User has been suspended for one week and added to suspended list.',
      header: 'Suspend Account',
    },
    BLOCKED: {
      message: 'User has been blocked from PreVue and added to blocked list.',
      header: 'Block Account',
    },
  };
  openedDialog?: StatusValuesType;
  report$ = this.activatedRoute.params.pipe<ReportModel>(
    switchMap((params) => {
      return this.reportFacade.getByProperty(params['id'], 'userReportId');
    })
  );

  reportModel: ReportModel = {} as any;
  loading$ = this.reportFacade.loading$;
  statusLoading$ = this.reportFacade.statusLoading$;
  statusMessage$ = this.reportFacade.statusMessage$;
  reportSubscription = new Subscription();
  userMedia = this.reportFacade.userMedia$;
  status = StatusValues;
  messageSubscription = new Subscription();

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private reportFacade: ReportsFacadeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reportFacade.get();
    this.reportSubscription = this.report$.subscribe((report) => {
      this.reportModel = report;
      // search for user details to get usermedia
      this.reportFacade.getUserDetails(report.reportedUserId);
      this.reportFacade.getUserMessages({
        userId: report.reportedUserId,
        recipientUserId: report.reportedByUserId,
      });
    });
  }

  clear(table: Table) {
    table.clear();
  }

  async confirm(type: StatusValuesType) {
    this.openedDialog = type;
    if (type !== 'DELETED') {
      this.reportFacade.changeUserStatus(this.reportModel.userReportId, type);
    }

    this.messageSubscription = this.statusMessage$.subscribe((message) => {
      setTimeout(() => {
        if (message === 'success') {
          const options = this.dialogOptions[type];
          this.confirmationService.confirm({
            ...options,
            accept: () => {
              this.messageSubscription.unsubscribe();
              this.reportFacade.changeUserStatus(
                this.reportModel.userReportId,
                type
              );
            },
            reject: (type: string) => {
              this.messageSubscription.unsubscribe();
            },
          });
        }
      });
    });
  }

  ngOnDestroy() {
    this.reportSubscription.unsubscribe();
    this.messageSubscription.unsubscribe();
  }
}
