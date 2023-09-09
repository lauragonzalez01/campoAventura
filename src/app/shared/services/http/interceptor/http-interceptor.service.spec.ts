import { HttpClient, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpConstants } from '../../../constants/http-constant';
import { HttpInterceptorService } from './http-interceptor.service';
import { ContextServiceStub, getStateMock } from '../../../stubs/context.service.stub';
import { ContextService } from '../../context.service';


describe('HttpInterceptorService', () => {
  let interceptor: HttpInterceptorService;
  let context: ContextService;
  const state = getStateMock();

  beforeEach(() => {
    const routerStub = {
      navigate: () => {
      }
    };
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpInterceptorService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpInterceptorService,
          multi: true
        },
        { provide: ContextService, useClass: ContextServiceStub },
        { provide: Router, useValue: routerStub }
      ]
    });
    interceptor = TestBed.get(HttpInterceptorService);
    context = TestBed.get(ContextService);

    context.contextService = {
      sharedState: state,
      setAppState: (): Promise<any> => Promise.resolve(),
      getTokenCookie: (): Promise<any> => Promise.resolve(),
      revokeTokenCookie: (): Promise<any> => Promise.resolve(),
      goToErrorPage: (): Promise<any> => Promise.resolve(),
      goToRestrictiveListsPage: (): Promise<any> => Promise.resolve(),
      goToYoungerPage: (): Promise<any> => Promise.resolve()
    };
    environment.security = true;
  });

  it('should GET ok when request url includes https://cdn', inject(
    [HttpClient, HttpTestingController],
    (http: HttpClient, mock: HttpTestingController) => {
      http.get('https://cdn', {}).subscribe((response) => {
        expect(response).toBeTruthy();
      });
      const request = mock.expectOne('https://cdn');
      expect(request.request.method).toEqual('GET');
      request.flush({ data: 'test' });
      mock.verify();
    }
  ));

  it('should GET ok when request url includes https://scotia', inject(
    [HttpClient, HttpTestingController],
    (http: HttpClient, mock: HttpTestingController) => {
      http.get('https://scotia', {}).subscribe((response) => {
        expect(response).toBeTruthy();
      });
      const request = mock.expectOne('https://scotia');
      expect(request.request.method).toEqual('GET');
      request.flush({ data: 'test' });
      mock.verify();
    }
  ));

  it('should GET ok when isResource is false', inject(
    [HttpClient, HttpTestingController],
    (http: HttpClient, mock: HttpTestingController) => {
      http.get('/data', {}).subscribe((response) => {
        expect(response).toBeTruthy();
      });
      const request = mock.expectOne('/data');
      expect(request.request.method).toEqual('GET');
      request.flush({ data: 'test' });
      mock.verify();
    }
  ));


  it('should handleError works for UNAUTHORIZED', () => {
    const errorResponse: HttpErrorResponse = new HttpErrorResponse({ status: HttpConstants.UNAUTHORIZED });
    const windowSpy = spyOn(window, 'open');
    interceptor.handleError(errorResponse, false);
    expect(windowSpy).toHaveBeenCalledWith(context.state.paths.login, '_self');
  });
});
