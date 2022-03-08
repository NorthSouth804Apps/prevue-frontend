import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

/* AuthInterceptor, extends from HttpInterceptor to intercept each request to add on it the token stored in the localStorage
* */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  /* intercept, intercepts each request
  * @return: request with the token added in headers
  * */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const localState = JSON.parse(localStorage.getItem(environment.localStateKey) || '{}');
    const token = localState.auth ? localState.auth.data : null;
    if (!token) {
      return next.handle(req);
    }

    const headers = req.clone({
      headers: req.headers.set('authorization', `Bearer ${token}`),
    });

    return next.handle(headers);
  }
}
