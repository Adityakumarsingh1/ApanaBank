import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emp-loan-reg',
  templateUrl: './emp-loan-reg.component.html',
  styleUrls: ['./emp-loan-reg.component.css']
})
export class EmpLoanRegComponent {
  constructor(
    private router:Router
  )
  {

  }
  loan(){
    this.router.navigate(['/employeehome/loan'])
  }
};