import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from "@angular/common/http";
import { UserModel } from "../models";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<UserModel> {
  constructor(http: HttpClient) {
    super(http);
    this.entity = 'user';
    this.endpoints = { get: 'profile' };
  }
}
