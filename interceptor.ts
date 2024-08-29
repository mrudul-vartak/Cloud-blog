import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";
@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private auth:AuthService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
    const currentUser = this.auth.isLoggedIn();
     if (currentUser && (request.method=="PUT"||request.method=="DELETE"||request.method=="POST") ) {
    request = request.clone({
               
            setHeaders: {
             'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.auth.getToken()}`
            }
    
        
    });
    
  }
  return next.handle(request);
 }
}