import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustWithdrawalRegComponent } from './cust-withdrawal-reg.component';

describe('CustWithdrawalRegComponent', () => {
  let component: CustWithdrawalRegComponent;
  let fixture: ComponentFixture<CustWithdrawalRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustWithdrawalRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustWithdrawalRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
