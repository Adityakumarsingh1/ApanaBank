import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustDepositRegComponent } from './cust-deposit-reg.component';

describe('CustDepositRegComponent', () => {
  let component: CustDepositRegComponent;
  let fixture: ComponentFixture<CustDepositRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustDepositRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustDepositRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
