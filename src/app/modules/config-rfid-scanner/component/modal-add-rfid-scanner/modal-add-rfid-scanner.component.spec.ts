import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddRfidScannerComponent } from './modal-add-rfid-scanner.component';

describe('ModalAddRfidScannerComponent', () => {
  let component: ModalAddRfidScannerComponent;
  let fixture: ComponentFixture<ModalAddRfidScannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddRfidScannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddRfidScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
