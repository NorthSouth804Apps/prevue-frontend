import { Injectable } from '@angular/core';
import AuthModel, { ResetPasswordModel } from "../models/auth.model";
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from "../../environments/environment";
import { AppState } from "../state";
import ResponseModel from "../models/response.model";
type AuthExtraEndpoints = 'forgotPassword' | 'resetPassword';

export type extraEndpoints = {
  [N in AuthExtraEndpoints]?: string;
};

@Injectable()
export class AuthService extends BaseService<AuthModel, extraEndpoints> {
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    super(http);
    this.entity = 'auth';
    this.endpoints = { post: 'login', forgotPassword: 'forgotPwd', resetPassword: 'resetpwd' };
  }

  public isAuthenticated(): boolean {
    const appState = JSON.parse(localStorage.getItem(environment.localStateKey) || '') as AppState;
    if(appState.auth) {
      return !this.jwtHelper.isTokenExpired(appState.auth.data as any);
    }
    return false;
  }

  public sendMailToResetPassword(data: { email: string }) {
    return this.http.post<ResponseModel<any>>(
      `${environment.api}${this.entity}/${this.endpoints.forgotPassword}`,
      data
    );
  }

  public resetPassword(data: ResetPasswordModel) {
    return this.http.post<ResponseModel<any>>(
      `${environment.api}${this.entity}/${this.endpoints.resetPassword}`,
      data
    );
  }
}
