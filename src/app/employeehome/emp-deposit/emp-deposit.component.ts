import { Component } from '@angular/core';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  amount: number;
  date: number;
  duration:number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'aman', amount: 123, date: 12-7-24, duration: 1 },
  {position: 2, name: 'golu', amount: 123, date: 12-7-24,  duration: 1 },
  {position: 3, name: 'mayank', amount: 123, date: 12-7-24,  duration: 1 },
  {position: 4, name: 'alok',  amount: 123, date: 12-7-24,  duration: 1 },
]

@Component({
  selector: 'app-emp-deposit',
  templateUrl: './emp-deposit.component.html',
  styleUrls: ['./emp-deposit.component.css']
})
export class EmpDepositComponent {
  displayedColumns: string[] = ['position', 'name','amount','duration','date','action'];
  dataSource =  ELEMENT_DATA;
constructor(
  private router:Router
)
{

}
depositre(){
  this.router.navigate(['/employeehome/deposite_reg'])
}
};


