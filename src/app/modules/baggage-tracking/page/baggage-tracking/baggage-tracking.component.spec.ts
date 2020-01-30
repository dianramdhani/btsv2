import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggageTrackingComponent } from './baggage-tracking.component';

describe('BaggageTrackingComponent', () => {
  let component: BaggageTrackingComponent;
  let fixture: ComponentFixture<BaggageTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaggageTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaggageTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
