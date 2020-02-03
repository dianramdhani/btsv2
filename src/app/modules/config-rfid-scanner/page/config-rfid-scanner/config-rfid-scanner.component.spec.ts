import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigRfidScannerComponent } from './config-rfid-scanner.component';

describe('ConfigRfidScannerComponent', () => {
  let component: ConfigRfidScannerComponent;
  let fixture: ComponentFixture<ConfigRfidScannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigRfidScannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigRfidScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
