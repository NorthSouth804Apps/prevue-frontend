import { NgModule } from '@angular/core';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './containers/login/login.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { TwoFactorAuthComponent } from './containers/two-factor-auth/two-factor-auth.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
// import { LoginStoreModule } from '../store/login/login-store.module';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AuthComponent, LoginComponent, ForgotPasswordComponent, TwoFactorAuthComponent],
  imports: [
    SharedModule,
    LoginRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }
