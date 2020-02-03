import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggageTrackingCpComponent } from './baggage-tracking-cp.component';

describe('BaggageTrackingCpComponent', () => {
  let component: BaggageTrackingCpComponent;
  let fixture: ComponentFixture<BaggageTrackingCpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaggageTrackingCpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaggageTrackingCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
