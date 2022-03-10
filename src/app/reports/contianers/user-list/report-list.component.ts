import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Router } from "@angular/router";
import { DialogTypes, IDialogOptions } from "../../../users/contianers/user-profile/user-profile.component";
import { ConfirmationService } from "primeng/api";
import { ReportsFacadeService } from "../../../../core/services/facades/reports-facade.service";
import { ReportModel } from "../../../../core/models";
import { StatusValues } from "../../../../core/interfaces/common.interface";

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
  loading: boolean = false;
  dialogOptions: IDialogOptions = {
    ignore: {
      message: `Are you sure you want to <b>ignore</b> this <br> report for <b>spam content</b>?`,
      header: 'Ignore Report',
    },
    WARNING: {
      message: `Are you sure you want to <b>send a warning</b><br>for <b>spam content</b>?`,
      header: 'Send Warning',
    },
    SUSPENDED: {
      message: `Are you sure you want to <b>suspend</b><br>this account for <b>spam content</b>?`,
      header: 'Suspend Account',
    },
    BLOCKED: {
      message: `Are you sure you want to <b>block</b><br>this account for <b>inappropriate content</b>?`,
      header: 'Block Account',
    },
  };
  reports$ = this.reportFacade.data$;
  status = StatusValues;

  constructor(private router: Router, private confirmationService: ConfirmationService, private reportFacade: ReportsFacadeService) {}

  ngOnInit(): void {
    this.reportFacade.get();
  }

  confirm(type: DialogTypes) {
    setTimeout(() => {
      const options = this.dialogOptions[type];
      this.confirmationService.confirm({
        ...options,
        accept: () => {},
        reject: (type: string) => {},
      });
    })
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
