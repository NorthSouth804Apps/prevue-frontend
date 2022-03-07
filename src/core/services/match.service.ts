import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from "@angular/common/http";
import { MatchModel } from '../models';

@Injectable()
export class MatchService extends BaseService<MatchModel> {
  constructor(http: HttpClient) {
    super(http);
    this.entity = 'matches';
    this.endpoints = { };
  }
}
