import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDueRegComponent } from './emp-due-reg.component';

describe('EmpDueRegComponent', () => {
  let component: EmpDueRegComponent;
  let fixture: ComponentFixture<EmpDueRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDueRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDueRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
