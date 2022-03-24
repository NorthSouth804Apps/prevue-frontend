import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from "../../../../core/services/auth.service";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { ToastService } from "../../../../core/services/toast.service";
@Component({
  selector: 'pv-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  loading?: boolean;
  emailSent?: boolean;
  public form: FormGroup = new FormGroup({
    email: new FormControl()
  });

  constructor(private router: Router, private authService: AuthService, private toastService: ToastService) {}

  ngOnInit(): void {}

  public submitForm(): void {
    this.loading = true;
    this.authService.sendMailToResetPassword(this.form.value).pipe(catchError(({ error }) => {
      this.loading = false;
      this.toastService.showError({ summary: 'Fail', detail: error.message, sticky: true })
      return throwError(error);
    })).subscribe((response) => {
      this.loading = false;
      if(response.success) {
        this.emailSent = true;
      }
    });

  }
}
