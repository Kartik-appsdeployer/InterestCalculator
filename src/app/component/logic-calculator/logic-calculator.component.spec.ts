import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicCalculatorComponent } from './logic-calculator.component';

describe('LogicCalculatorComponent', () => {
  let component: LogicCalculatorComponent;
  let fixture: ComponentFixture<LogicCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogicCalculatorComponent]
    });
    fixture = TestBed.createComponent(LogicCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
