import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import ResponseModel from '../models/response.model';
import { QueryParamsType } from '../interfaces/common.interface';

export type httpMethods = 'post' | 'put' | 'delete' | 'get';
export type baseEndpoints = {
  [N in httpMethods]?: string;
};

@Injectable({
  providedIn: 'root',
})
export class BaseService<DataModel> {
  public entity: string = '';
  public endpoints: baseEndpoints = {};
  constructor(private httpClient: HttpClient) {}

  post(data: DataModel): Observable<ResponseModel<DataModel | any>> {
    return this.httpClient.post<ResponseModel<DataModel | any>>(
      `${environment.api}${this.entity}/${this.endpoints.post || ''}`,
      data
    );
  }

  get(queryParams?: QueryParamsType) {
    const params = queryParams ? { ...queryParams } : ({} as any);
    if (params.type) delete params.type;

    console.log(queryParams, 'query');
    return this.httpClient.get<any>(
      `${environment.api}${this.entity}/${this.endpoints.get || ''}`,
      {
        params,
      }
    );
  }

  put(data: DataModel) {
    return this.httpClient.put(
      `${environment.api}${this.entity}/${this.endpoints.put || ''}`,
      data
    );
  }

  delete(id: string) {
    return this.httpClient.delete(
      `${environment.api}${this.entity}/${this.endpoints.put || ''}/${id}`
    );
  }
}
