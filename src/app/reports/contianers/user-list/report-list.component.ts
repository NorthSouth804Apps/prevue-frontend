import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'pv-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss'],
  animations: [],
})
export class ReportListComponent implements OnInit {
  display: boolean = true;
  searchValue: string = '';

  customers: any[] = [
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

  constructor() {}

  ngOnInit(): void {}

  clear(table: Table) {
    table.clear();
  }
}
