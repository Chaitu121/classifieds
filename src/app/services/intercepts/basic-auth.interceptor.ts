import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,HttpErrorResponse  } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';

import { RootserviceService } from './../../rootservice.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: RootserviceService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if availablethis.authService.currentUserValue
        const currentUser = this.authenticationService.currentUserValue;
        console.log(currentUser.authenticate)
        if ( currentUser.authenticate!= 'authenticate') {
            alert(currentUser.authenticate)
            console.log(currentUser.authenticate)
            request = request.clone({
                setHeaders: { 
                    Authorization: `Basic ${currentUser.authenticate}`
                }
            });
        }

        if(!window.navigator.onLine){ 
            const error = {
             status: 0,
                  error: {
               description: 'Check Connectivity!'
                  },
                 statusText: 'Check Connectivity!'
                };
                alert('Please Check Your Internet Connectivity')
                return throwError(new HttpErrorResponse(error)); 
           }
        return next.handle(request);
    }
}