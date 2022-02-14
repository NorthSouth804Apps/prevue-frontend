import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { TwoFactorAuthComponent } from './containers/two-factor-auth/two-factor-auth.component';
import { LoginComponent } from './containers/login/login.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'two-factor-auth', component: TwoFactorAuthComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule
],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
