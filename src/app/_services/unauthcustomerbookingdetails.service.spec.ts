import { TestBed } from '@angular/core/testing';

import { UnauthcustomerbookingdetailsService } from './unauthcustomerbookingdetails.service';

describe('UnauthcustomerbookingdetailsService', () => {
  let service: UnauthcustomerbookingdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnauthcustomerbookingdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
