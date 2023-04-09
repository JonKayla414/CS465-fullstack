import { TestBed } from '@angular/core/testing';

import { TripCardngService } from './trip-cardng.service';

describe('TripCardngService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripCardngService = TestBed.get(TripCardngService);
    expect(service).toBeTruthy();
  });
});
