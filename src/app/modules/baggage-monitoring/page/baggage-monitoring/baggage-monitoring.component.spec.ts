import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggageMonitoringComponent } from './baggage-monitoring.component';

describe('BaggageMonitoringComponent', () => {
  let component: BaggageMonitoringComponent;
  let fixture: ComponentFixture<BaggageMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaggageMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaggageMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
