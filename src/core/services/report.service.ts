import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { IUserMessagesParams, ReportModel } from '../models';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ReportService extends BaseService<ReportModel> {
  constructor(private http: HttpClient) {
    super(http);
    this.entity = 'report';
  }

  override put(data: ReportModel | any) {
    return this.http.put(
      `${environment.api}${this.entity}/${data.userReportId}/status`,
      { status: data.status }
    );
  }

  getMatchesStats(params?: any) {
    return this.http.get<any>(
      `${environment.api}${this.entity}/matchstats?showDetails=1`,
      { params }
    );
  }

  getUserStats(params?: any) {
    return this.http.get<any>(
      `${environment.api}${this.entity}/userStats?showDetails=1`,
      { params }
    );
  }

  getUserMessages(params: IUserMessagesParams = {} as any) {
    return this.http.get<any>(
      `${environment.api}${this.entity}/userMessages?userId=4&recipientUserId=1`
      // { params: { ...params } }
    );
  }
}
