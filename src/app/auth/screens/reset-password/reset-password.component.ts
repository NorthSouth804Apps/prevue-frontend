import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'pv-auth',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  loading?: boolean;

  public form: FormGroup = new FormGroup({
    newPassword: new FormControl(),
    passwordConfirmation: new FormControl(),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  public submitForm(): void {
    this.loading = true;
    const token = this.activatedRoute.snapshot.queryParams['token'];
    const subscription = this.authService
      .resetPassword({ ...this.form.value, token })
      .pipe(
        catchError(({ error }) => {
          this.loading = false;
          this.toastService.showError({
            summary: 'Fail',
            detail: error.message,
            sticky: true,
          });
          subscription.unsubscribe();
          return throwError(error);
        })
      )
      .subscribe((response) => {
        this.loading = false;
        if (response.success) {
          subscription.unsubscribe();
          this.router.navigate(['/main']);
        }
      });
  }

  public goToResetPassword(): void {
    this.router.navigate(['/auth/forgot-password']);
  }
}
