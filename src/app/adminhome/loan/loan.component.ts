import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  loan_no: number;
  loan_amount: number;
  time_period:number;
  percentage:number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'aman', loan_no: 123,loan_amount: 70000, time_period: 120, percentage: 12 , },
  {position: 2, name: 'golu',loan_no: 123,loan_amount: 70000, time_period: 120, percentage: 12 ,  },
  {position: 3, name: 'mayank',loan_no: 123,loan_amount: 70000, time_period: 120, percentage: 12, },
  {position: 4, name: 'alok', loan_no: 123,loan_amount: 70000, time_period: 120, percentage: 12,  },
];

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent {

}

