import { environment } from 'src/environments/environment';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContextService } from '../../context.service';
import { HttpConstants } from '../../../constants/http-constant';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(public context: ContextService) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (environment.security) {
      const isResource = request.url.includes('https://cdn') || request.url.includes('https://scotia');
      if (!isResource) {
        request = request.clone({
          withCredentials: true,
          headers: new HttpHeaders({
            [HttpConstants.headers.autorizationToken]: 'Bearer  ' + this.context.state.jump.token.access_token,
            [HttpConstants.headers.jumpTkn]: 'Bearer  ' + this.context.state.jump.token.access_token
          })
        });
      }
      return next.handle(request).pipe(
        catchError((error) => this.handleError(error, isResource))
      );
    } else {
      return next.handle(request);
    }
  }

  public handleError = (error: any, isResource: boolean) => {
    if (!isResource) {
      switch (error.status) {
        case HttpConstants.UNAUTHORIZED: {
          window.open(this.context.state.paths.login, '_self');
          break;
        }
        default: {
          this.context.goToErrorPage('cuentas');
          break;
        }
      }
      return throwError(error);
    }
  }
}

