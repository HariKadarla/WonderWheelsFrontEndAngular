import { TestBed } from '@angular/core/testing';

import { AuthcustomerbookingfetchService } from './authcustomerbookingfetch.service';

describe('AuthcustomerbookingfetchService', () => {
  let service: AuthcustomerbookingfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthcustomerbookingfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
