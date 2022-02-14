import { NgModule } from '@angular/core';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './containers/login/login.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
import { LoginRoutingModule } from './login-routing.module';

import { SharedModule } from 'src/shared/shared.module';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [AuthComponent, LoginComponent, ForgotPasswordComponent, ResetPasswordComponent],
  imports: [
    SharedModule,
    FormsModule,
    LoginRoutingModule,
  ],
  exports: [
    FormsModule,
  ]
})
export class LoginModule { }
