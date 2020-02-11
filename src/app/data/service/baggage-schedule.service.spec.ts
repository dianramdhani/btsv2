import { TestBed } from '@angular/core/testing';

import { BaggageScheduleService } from './baggage-schedule.service';

describe('BaggageScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaggageScheduleService = TestBed.get(BaggageScheduleService);
    expect(service).toBeTruthy();
  });
});
