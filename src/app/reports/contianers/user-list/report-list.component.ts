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

  customers: any[] = [{
    report: '1294884',
    reason: 24,
    gender: 'Male',
    showMe: 'Women',
    ageRange: '20-44',
    location: 'Brooklyn, NY',
    joined: new Date(),
    matches: 19,
  },
    {
      report: '3458494',
      reason: 25,
      gender: 'Female',
      showMe: 'Men',
      ageRange: '20-44',
      location: 'Brooklyn, NY',
      joined: new Date(),
      matches: 20,
    }];
  representatives: any[] = [];
  statuses: any[] = [];
  loading: boolean = false;

  activityValues: number[] = [0, 100];
  constructor() {}

  ngOnInit(): void {

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];
  }

  clear(table: Table) {
    table.clear();
  }
}
