import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pv-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: []
})
export class DashboardComponent implements OnInit {
  display: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}
