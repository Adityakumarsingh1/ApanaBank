import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpWithdrawalRegComponent } from './emp-withdrawal-reg.component';

describe('EmpWithdrawalRegComponent', () => {
  let component: EmpWithdrawalRegComponent;
  let fixture: ComponentFixture<EmpWithdrawalRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpWithdrawalRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpWithdrawalRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
