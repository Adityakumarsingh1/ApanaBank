import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDepositRegComponent } from './emp-deposit-reg.component';

describe('EmpDepositRegComponent', () => {
  let component: EmpDepositRegComponent;
  let fixture: ComponentFixture<EmpDepositRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDepositRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDepositRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
