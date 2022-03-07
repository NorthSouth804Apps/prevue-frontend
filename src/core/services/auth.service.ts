import { Injectable } from '@angular/core';
import AuthModel from '../models/auth.model';
import { BaseService } from './base.service';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService extends BaseService<AuthModel> {
  constructor(http: HttpClient) {
    super(http);
    this.entity = 'auth';
    this.endpoints = { post: 'login' };
  }
}
