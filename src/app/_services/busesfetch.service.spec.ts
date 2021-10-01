import { TestBed } from '@angular/core/testing';

import { BusesfetchService } from './busesfetch.service';

describe('BusesfetchService', () => {
  let service: BusesfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusesfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
