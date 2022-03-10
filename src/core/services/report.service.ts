import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from "@angular/common/http";
import { ReportModel } from "../models";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class ReportService extends BaseService<ReportModel> {
  constructor(private http: HttpClient) {
    super(http);
    this.entity = 'report';
  }

  getMatchesStats(options?: any) {
    return this.http.get<any>(
      `${environment.api}${this.entity}/matchstats?showDetails=1`,
      options
    );
  }

  getUserStats(options?: any) {
    return this.http.get<any>(
      `${environment.api}${this.entity}/userStats?showDetails=1`,
      options
    );
  }
}
