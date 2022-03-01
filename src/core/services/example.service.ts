import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(
    public http: HttpClient,
  ) {
  }


  public loadTodos(parameter?: any): Observable<any> {
    console.log(parameter, 'param');
    return this.http.get('environment.api',
      {
        headers: {
          // Authorization: localStorage.getItem('token'),
        }
      });
  }
}
