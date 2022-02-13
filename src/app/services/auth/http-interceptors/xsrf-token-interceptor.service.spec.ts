import { TestBed } from '@angular/core/testing';

import { XsrfTokenInterceptorService } from './xsrf-token-interceptor.service';

describe('XsrfTokenInterceptorService', () => {
  let service: XsrfTokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XsrfTokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
