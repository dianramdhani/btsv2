import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceBaggageTrackingComponent } from './advance-baggage-tracking.component';

describe('AdvanceBaggageTrackingComponent', () => {
  let component: AdvanceBaggageTrackingComponent;
  let fixture: ComponentFixture<AdvanceBaggageTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceBaggageTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceBaggageTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
