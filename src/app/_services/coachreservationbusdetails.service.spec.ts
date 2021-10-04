import { TestBed } from '@angular/core/testing';

import { CoachreservationbusdetailsService } from './coachreservationbusdetails.service';

describe('CoachreservationbusdetailsService', () => {
  let service: CoachreservationbusdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoachreservationbusdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
