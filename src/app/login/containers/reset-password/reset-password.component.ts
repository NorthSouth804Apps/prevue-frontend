import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'pv-login',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    remember: new FormControl(),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public submitForm(): void {
    this.router.navigate(['/main']);
  }

  public goToResetPassword(): void {
    this.router.navigate(['/login/forgot-password']);
  }
}
