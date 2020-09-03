import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("in interceptor")

    const authReq = request.clone({
        setHeaders: {Authorization : localStorage.getItem('sessionToken')}
    })
    console.log(authReq)
    return next.handle(authReq);
  }
}
