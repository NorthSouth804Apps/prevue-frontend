import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: []
})
export class HomeComponent implements OnInit {
  display: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}
