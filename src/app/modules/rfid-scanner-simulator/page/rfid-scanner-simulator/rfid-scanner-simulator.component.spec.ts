import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfidScannerSimulatorComponent } from './rfid-scanner-simulator.component';

describe('RfidScannerSimulatorComponent', () => {
  let component: RfidScannerSimulatorComponent;
  let fixture: ComponentFixture<RfidScannerSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfidScannerSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfidScannerSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
