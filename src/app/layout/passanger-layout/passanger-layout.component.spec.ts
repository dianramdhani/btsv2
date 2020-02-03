import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerLayoutComponent } from './passanger-layout.component';

describe('PassangerLayoutComponent', () => {
  let component: PassangerLayoutComponent;
  let fixture: ComponentFixture<PassangerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassangerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassangerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
