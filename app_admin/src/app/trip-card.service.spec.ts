import { TestBed } from '@angular/core/testing';

import { TripCardService } from './trip-card.service';

describe('TripCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripCardService = TestBed.get(TripCardService);
    expect(service).toBeTruthy();
  });
});
