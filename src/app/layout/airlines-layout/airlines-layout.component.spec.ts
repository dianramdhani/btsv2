import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinesLayoutComponent } from './airlines-layout.component';

describe('AirlinesLayoutComponent', () => {
  let component: AirlinesLayoutComponent;
  let fixture: ComponentFixture<AirlinesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlinesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
