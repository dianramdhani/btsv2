import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggageTrackingPassengerComponent } from './baggage-tracking-passenger.component';

describe('BaggageTrackingPassengerComponent', () => {
  let component: BaggageTrackingPassengerComponent;
  let fixture: ComponentFixture<BaggageTrackingPassengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaggageTrackingPassengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaggageTrackingPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
