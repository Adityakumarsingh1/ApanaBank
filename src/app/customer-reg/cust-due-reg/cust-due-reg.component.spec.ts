import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustDueRegComponent } from './cust-due-reg.component';

describe('CustDueRegComponent', () => {
  let component: CustDueRegComponent;
  let fixture: ComponentFixture<CustDueRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustDueRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustDueRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
