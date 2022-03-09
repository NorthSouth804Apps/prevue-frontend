import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pv-users-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
  animations: [],
})
export class UserDataComponent implements OnInit {
  display: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
