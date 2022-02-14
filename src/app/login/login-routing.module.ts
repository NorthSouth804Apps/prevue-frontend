import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
import { LoginComponent } from './containers/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
