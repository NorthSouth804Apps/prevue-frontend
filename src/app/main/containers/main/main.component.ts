import { Component, OnInit } from '@angular/core';
import { Location  } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'pv-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent  {
  constructor(
    public location: Location,
    public router: Router,
  ) {
  }
}
