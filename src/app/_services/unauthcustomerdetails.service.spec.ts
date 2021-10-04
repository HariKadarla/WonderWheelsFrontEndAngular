import { TestBed } from '@angular/core/testing';

import { UnauthcustomerdetailsService } from './unauthcustomerdetails.service';

describe('UnauthcustomerdetailsService', () => {
  let service: UnauthcustomerdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnauthcustomerdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
