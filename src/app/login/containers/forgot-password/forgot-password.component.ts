import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'pv-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
    public form: FormGroup = new FormGroup({});

  public loading$: Observable<boolean> = new Observable<boolean>();

  // constructor(private authFacade: AuthFacade, private router: Router) { }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // this.loading$ = this.authFacade.getLoading();
  }

  public submitForm(): void {
      console.log('submit');
      this.router.navigate(['/login']);

    // this.authFacade.resetPassword(this.resetPasswordForm.email);
  }
}
