import { Component } from '@angular/core';
import { horizontalSlideAnimation } from '../../../shared/animations';

@Component({
  selector: 'ts-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    horizontalSlideAnimation,
  ]
})
export class AuthComponent { }
