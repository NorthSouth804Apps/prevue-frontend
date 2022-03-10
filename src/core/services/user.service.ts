import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from "@angular/common/http";
import { UserModel } from "../models";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<UserModel> {
  constructor(private http: HttpClient) {
    super(http);
    this.entity = 'user';
    this.endpoints = { get: 'profile', put: 'profile/status' };
  }

  getUserMedias(userId: number) {
    return this.http.get<any>(
      `${environment.api}${this.entity}/${this.endpoints.get || ''}/${userId}/media`
    );
  }
}
