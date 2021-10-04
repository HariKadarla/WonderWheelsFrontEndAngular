import { TestBed } from '@angular/core/testing';

import { AuthcustomercoachbookingfetchService } from './authcustomercoachbookingfetch.service';

describe('AuthcustomercoachbookingfetchService', () => {
  let service: AuthcustomercoachbookingfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthcustomercoachbookingfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
