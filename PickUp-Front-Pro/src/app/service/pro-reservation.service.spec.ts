import { TestBed } from '@angular/core/testing';

import { ProReservationService } from './pro-reservation.service';

describe('ProReservationService', () => {
  let service: ProReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
