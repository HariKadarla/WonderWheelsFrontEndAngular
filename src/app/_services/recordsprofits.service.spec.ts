import { TestBed } from '@angular/core/testing';

import { RecordsprofitsService } from './recordsprofits.service';

describe('RecordsprofitsService', () => {
  let service: RecordsprofitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordsprofitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
