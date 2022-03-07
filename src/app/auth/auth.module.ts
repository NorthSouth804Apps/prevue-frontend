import { NgModule } from '@angular/core';
import { AuthComponent } from './containers/auth/auth.component';
import { LoginComponent } from './screens/login/login.component';
import { ForgotPasswordComponent } from './screens/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './screens/reset-password/reset-password.component';
import { AuthRoutingModule } from './auth-routing.module';

import { SharedModule } from 'src/shared/shared.module';
import { FormsModule } from "@angular/forms";
import { AuthFacadeService } from "../../core/services/facades/auth.facade.service";
import { ToastService } from "../../core/services/toast.service";
import { MessageService } from "primeng/api";


@NgModule({
  declarations: [AuthComponent, LoginComponent, ForgotPasswordComponent, ResetPasswordComponent],
  imports: [
    SharedModule,
    FormsModule,
    AuthRoutingModule,
  ],
  exports: [
    FormsModule,
  ],
  providers: [
    AuthFacadeService,
    ToastService,
    MessageService,
  ]
})
export class AuthModule { }
