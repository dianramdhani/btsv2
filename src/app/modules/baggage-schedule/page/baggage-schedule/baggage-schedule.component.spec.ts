import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggageScheduleComponent } from './baggage-schedule.component';

describe('BaggageScheduleComponent', () => {
  let component: BaggageScheduleComponent;
  let fixture: ComponentFixture<BaggageScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaggageScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaggageScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
