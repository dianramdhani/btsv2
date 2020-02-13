import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryBaggageMonitoringComponent } from './summary-baggage-monitoring.component';

describe('SummaryBaggageMonitoringComponent', () => {
  let component: SummaryBaggageMonitoringComponent;
  let fixture: ComponentFixture<SummaryBaggageMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryBaggageMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryBaggageMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
