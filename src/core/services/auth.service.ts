import { Injectable } from '@angular/core';
import AuthModel from '../models/auth.model';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from "../../environments/environment";
import { AppState } from "../state";

@Injectable()
export class AuthService extends BaseService<AuthModel> {
  constructor(http: HttpClient, private jwtHelper: JwtHelperService) {
    super(http);
    this.entity = 'auth';
    this.endpoints = { post: 'login' };
  }

  public isAuthenticated(): boolean {
    const appState = JSON.parse(localStorage.getItem(environment.localStateKey) || '') as AppState;
    if(appState.auth) {
      return !this.jwtHelper.isTokenExpired(appState.auth.data as any);
    }
    return false;
  }
}
