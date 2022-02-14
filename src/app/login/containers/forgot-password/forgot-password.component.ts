import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'pv-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
    public form: FormGroup = new FormGroup({});

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public submitForm(): void {
      console.log('submit');
      this.router.navigate(['/login/reset-password']);

  }
}
