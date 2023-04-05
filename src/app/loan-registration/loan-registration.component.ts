import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-registration',
  templateUrl: './loan-registration.component.html',
  styleUrls: ['./loan-registration.component.css']
})
export class LoanRegistrationComponent {
  constructor(
    private router:Router
  )
  {

  }
  loan(){
    this.router.navigate(['/adminhome/loan'])
  }
};
