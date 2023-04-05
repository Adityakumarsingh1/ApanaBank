import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {
 
  constructor(
    private router:Router
  )
  {

  }
  emp(){
    this.router.navigate(['/adminhome/employee'])
  }
};
