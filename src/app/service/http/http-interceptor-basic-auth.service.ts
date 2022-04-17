import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root',
})
//We are implementing a build in interface call httpInterceptor. This allows us to intercept requests before being sent.
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  constructor(private basicAuthenticationService: BasicAuthenticationService) {}

  //We are overriding the intercept method in the httpinterceptor interface. Here we can carry out actions on the request as it is intercepted
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // let username = 'user';
    // let password = 'password';
    let basicAuthHeaderString =
      this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();
    // 'Basic ' + window.btoa(username + ':' + password); //window.btoa encrypts the spring in the base 64

    if (basicAuthHeaderString && username) {
      //We cant edit the original request therefore we create a new request by cloning the old one and adding a new param to it header
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString,
        },
      });
    }
    return next.handle(req); //Here we send the new request ||This allows the rest of the request process to carry out as it was going to
  }
}

/*NOTE---
To use this interceptor with every request we have to add it to the provider array as an object with a few configuration parameters and that is it all requests will be intercepted */
