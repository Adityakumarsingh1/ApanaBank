import { Component } from '@angular/core';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  amount: number;
  date: number;
  insentive:number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'aman', amount: 123, date: 12-7-24, insentive: 700 },
  {position: 2, name: 'golu', amount: 123, date: 12-7-24, insentive: 700 },
  {position: 3, name: 'mayank', amount: 123, date: 12-7-24, insentive: 700 },
  {position: 4, name: 'alok',  amount: 123, date: 12-7-24, insentive: 700 },
]

@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.css']
})
export class EmployeeSalaryComponent {
  displayedColumns: string[] = ['position', 'name','amount','insentive','date','action'];
  dataSource =  ELEMENT_DATA;
 constructor(
  private router:Router
 )
 {

 }
 empsalre(){
  this.router.navigate(['/adminhome/employeesal_reg'])
 }
};

