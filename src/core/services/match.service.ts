import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MatchService extends BaseService<any> {
  constructor(http: HttpClient) {
    super(http);
    this.entity = 'matches';
    this.endpoints = { post: 'interaction' };
  }
}
