import { TestBed } from '@angular/core/testing';

import { AuthcustomerbookingdetailsService } from './authcustomerbookingdetails.service';

describe('AuthcustomerbookingdetailsService', () => {
  let service: AuthcustomerbookingdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthcustomerbookingdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
