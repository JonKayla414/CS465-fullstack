import { TestBed } from '@angular/core/testing';

import { EditTripService } from './edit-trip.service';

describe('EditTripService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditTripService = TestBed.get(EditTripService);
    expect(service).toBeTruthy();
  });
});
