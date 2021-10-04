import { TestBed } from '@angular/core/testing';

import { CoachfetchService } from './coachfetch.service';

describe('CoachfetchService', () => {
  let service: CoachfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoachfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
