import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthFacadeService } from '../../../../core/services/facades/auth.facade.service';
import { ToastService } from '../../../../core/services/toast.service';
import { Store } from '@ngrx/store';
import AuthModel from '../../../../core/models/auth.model';

@Component({
  selector: 'pv-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    remember: new FormControl(),
  });

  constructor(
    private router: Router,
    public authFacade: AuthFacadeService,
    private toastService: ToastService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.authFacade.data$.subscribe((data: string | AuthModel) => {
      console.log('data quth', data);
      if(typeof data === 'string') {
        this.router.navigate(['home']);
      }
    });

    this.authFacade.loading$.subscribe(item => {
      console.log('loading', item)
    })
  }

  public submitForm(): void {
    const { email, password } = this.form.value;
    this.authFacade.login({ email, password });
  }

  public goToResetPassword(): void {
    this.router.navigate(['/login/forgot-password']);
  }
}
