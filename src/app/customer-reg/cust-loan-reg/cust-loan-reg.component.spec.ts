import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustLoanRegComponent } from './cust-loan-reg.component';

describe('CustLoanRegComponent', () => {
  let component: CustLoanRegComponent;
  let fixture: ComponentFixture<CustLoanRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustLoanRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustLoanRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
