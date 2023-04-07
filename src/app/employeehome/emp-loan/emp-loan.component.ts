import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
export interface PeriodicElement {
  name: string;
  position: number;
  loan_no: number;
  loan_amount: number;
  time_period:number;
  percentage:number;
  action:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'aman', loan_no: 123,loan_amount: 70000, time_period: 120, percentage: 12 ,action:'edit'},
  {position: 2, name: 'golu',loan_no: 123,loan_amount: 70000, time_period: 120, percentage: 12 , action:'edit' },
  {position: 3, name: 'mayank',loan_no: 123,loan_amount: 70000, time_period: 120, percentage: 12,action:'edit' },
  {position: 4, name: 'alok', loan_no: 123,loan_amount: 70000, time_period: 120, percentage: 12,action:'edit'  },
];

@Component({
  selector: 'app-emp-loan',
  templateUrl: './emp-loan.component.html',
  styleUrls: ['./emp-loan.component.css']
})
export class EmpLoanComponent {
  displayedColumns: string[] = ['position', 'name', 'loan_no', 'loan_amount','time_period','percentage','action'];
dataSource = ELEMENT_DATA;


constructor(
  private router:Router
)
{

}
loanre(){
  this.router.navigate(['/employeehome/loan_reg'])
}
}


