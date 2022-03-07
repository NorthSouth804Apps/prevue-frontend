import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './containers/auth/auth.component';
import { ForgotPasswordComponent } from './screens/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './screens/reset-password/reset-password.component';
import { LoginComponent } from './screens/login/login.component';

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
export class AuthRoutingModule {}
