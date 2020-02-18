import {Injector, Injectable} from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()

export class MockHttpCalIInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const cloneReq = request.clone({
        //     params: request.params.set( 'auth-token',
        //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9'),
        //     headers: request.headers.set('Content-Type', 'application/json').set('name', 'uma508').set('greetings', 'helloToGetCall')
        // });
        return next.handle(request);
    }
}
