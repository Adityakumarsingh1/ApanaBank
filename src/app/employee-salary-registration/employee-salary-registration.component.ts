import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-salary-registration',
  templateUrl: './employee-salary-registration.component.html',
  styleUrls: ['./employee-salary-registration.component.css']
})
export class EmployeeSalaryRegistrationComponent {
  constructor(
    private router:Router
  )
  {

  }
  Esal(){
    this.router.navigate(['/adminhome/employee_salary'])
  }
}
