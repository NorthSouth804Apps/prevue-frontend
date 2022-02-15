import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pv-home-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [],
})
export class DashboardComponent implements OnInit {
  display: boolean = true;
  dataList = [
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Inappropriate Content',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
  ];
  listColumns: any[] = ['name', 'reason'];
  constructor() {}

  ngOnInit(): void {}
}
