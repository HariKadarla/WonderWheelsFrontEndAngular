import { TestBed } from '@angular/core/testing';

import { AuthCustomerDetailsService } from './auth-customer-details.service';

describe('AuthCustomerDetailsService', () => {
  let service: AuthCustomerDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthCustomerDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
