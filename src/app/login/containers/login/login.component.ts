import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { fadeAnimation } from '../../../shared/animations';
// import { AuthFacade } from 'src/app/store/auth/auth-facade.service';

@Component({
  selector: 'ts-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    fadeAnimation,
  ]
})
export class LoginComponent implements OnInit, AfterContentInit {
  public form: FormGroup = new FormGroup({});

  public loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  // constructor(private authFacade: AuthFacade, private router: Router) { }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // this.loading$ = this.authFacade.getLoading();
  }

  ngAfterContentInit(): void {
    this.loadingSubject.next(false);
  }

  public submitForm(): void {
    this.router.navigate(['/login/two-factor-auth']);

    // this.authFacade.logIn(this.loginForm.email, this.loginForm.password);
  }

  public goToResetPassword(): void {
    this.router.navigate(['/login/forgot-password']);
  }
}
