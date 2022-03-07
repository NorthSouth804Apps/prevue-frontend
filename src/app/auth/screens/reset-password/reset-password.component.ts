import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'pv-auth',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    newPassword: new FormControl(),
    confirmPassword: new FormControl(),
  });


  constructor(private router: Router) {}

  ngOnInit(): void {}

  public submitForm(): void {
    this.router.navigate(['/main']);
  }

  public goToResetPassword(): void {
    this.router.navigate(['/auth/forgot-password']);
  }
}
