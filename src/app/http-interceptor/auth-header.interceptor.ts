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
  
    if(localStorage.getItem('sessionToken')){

     const authReq = request.clone({
        setHeaders: {Authorization : localStorage.getItem('sessionToken')}
     })
     return next.handle(authReq)
     }
    
    return next.handle(request);
  }
}
