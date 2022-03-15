import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { ReportsFacadeService } from "../../../../core/services/facades/reports-facade.service";
import { ReportModel } from "../../../../core/models";
import { StatusValues, StatusValuesType } from "../../../../core/interfaces/common.interface";

@Component({
  selector: 'pv-reports-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss'],
  animations: [],
})
export class ReportListComponent implements OnInit {
  display: boolean = true;
  searchValue: string = '';

  reports: any[] = [
    {
      date: new Date(),
      user: 12123545,
      reportType: 'Spam',
      reports: 0,
      offenses: 0,
    },
    {
      date: new Date(),
      user: 4343434,
      reportType: 'Inappropriate Content',
      reports: 0,
      offenses: 0,
    },
  ];
  reportType = 'SPAM';

  loading: boolean = false;
  dialogOptions: any = {
    IGNORE: (reportType: string) => ({
      message: `Are you sure you want to <b>ignore</b> this <br> report for <b>${reportType}</b>?`,
      header: 'Ignore Report',
    }),
    WARNING: (reportType: string) => ({
      message: `Are you sure you want to <b>send a warning</b><br>for <b>${reportType}</b>?`,
      header: 'Send Warning',
    }),
    SUSPENDED: (reportType: string) => ({
      message: `Are you sure you want to <b>suspend</b><br>this account for <b>${reportType}</b>?`,
      header: 'Suspend Account',
    }),
    BLOCKED: (reportType: string) => ({
      message: `Are you sure you want to <b>block</b><br>this account for <b>${reportType}</b>?`,
      header: 'Block Account',
    }),
  };
  reports$: any = this.reportFacade.data$;
  loading$ = this.reportFacade.loading$;
  status = StatusValues;

  constructor(private router: Router, private confirmationService: ConfirmationService, private reportFacade: ReportsFacadeService) {}

  ngOnInit(): void {
    this.reportFacade.get();
  }

  confirm(type: StatusValuesType, report: ReportModel) {
    this.reportType = report.reportType
    const loadSubs = this.loading$.subscribe(loading => {
      setTimeout(() => {
        if (!loading) {
          const options = this.dialogOptions[type](report.reportType);
          this.confirmationService.confirm({
            ...options,
            accept: () => {
              loadSubs.unsubscribe();
              this.reportFacade.changeUserStatus(report.reportedUserId, type);
            },
            reject: (type: string) => {
              loadSubs.unsubscribe();
            },
          });
        }
      })
    });
  }

  goToUserProfile(report: ReportModel) {
    this.router.navigate(['users', report.reportedUserId])
  }

  goToReportDetail(report: any) {
    this.router.navigate(['reported', report.userReportId])
  }

  clear(table: Table) {
    table.clear();
  }
}
