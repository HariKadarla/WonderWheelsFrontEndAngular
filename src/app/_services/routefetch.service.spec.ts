import { TestBed } from '@angular/core/testing';

import { RoutefetchService } from './routefetch.service';

describe('RoutefetchService', () => {
  let service: RoutefetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutefetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
