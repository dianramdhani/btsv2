import { TestBed } from '@angular/core/testing';

import { BaggageTrackerService } from './baggage-tracker.service';

describe('BaggageTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaggageTrackerService = TestBed.get(BaggageTrackerService);
    expect(service).toBeTruthy();
  });
});
