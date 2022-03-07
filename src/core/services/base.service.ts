import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import ResponseModel from "../models/response.model";

export type httpMethods = 'post' | 'put' | 'delete' | 'get';
export type baseEndpoints = {
  [N in httpMethods]?: string;
};

@Injectable({
  providedIn: "root"
})
export class BaseService<T> {
  public entity: string = '';
  public endpoints: baseEndpoints = {};
  constructor(private httpClient: HttpClient) {
  }

  post(data: T): Observable<ResponseModel<T | any>> {
      return this.httpClient.post<ResponseModel<T | any>>(`${environment.api}${this.entity}/${this.endpoints.post || ''}`, data);
  }

  get(options?: any) {
      return this.httpClient.get<any>(
        `${environment.api}${this.entity}/${this.endpoints.get || ''}`,
        options
      );
  }

  put(data: any) {
    return this.httpClient.put(`${environment.api}${this.entity}/${this.endpoints.put || ''}`, data);
  }

  delete(id: string) {
    return this.httpClient.delete(`${environment.api}${this.entity}/${this.endpoints.put || ''}/${id}`);
  }
}
