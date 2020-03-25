import { TestBed } from '@angular/core/testing';

import { BerearTokenInterceptor } from './berear-token.interceptor';

describe('BerearTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BerearTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BerearTokenInterceptor = TestBed.inject(BerearTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
