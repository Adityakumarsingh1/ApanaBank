import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-loan-reg',
  templateUrl: './cust-loan-reg.component.html',
  styleUrls: ['./cust-loan-reg.component.css']
})
export class CustLoanRegComponent {
  constructor(
    private router:Router
  )
{

}
loan(){
  this.router.navigate(['/customerhome/loan'])
}
}
