import { Component } from '@angular/core';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  amount: number;
  date: number;
  
  

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'aman', amount: 123, date: 12-7-24,    },
  {position: 2, name: 'golu', amount: 123, date: 12-7-24,    },
  {position: 3, name: 'mayank', amount: 123, date: 12-7-24,  },
  {position: 4, name: 'alok',  amount: 123, date: 12-7-24,   },
]


@Component({
  selector: 'app-cust-due',
  templateUrl: './cust-due.component.html',
  styleUrls: ['./cust-due.component.css']
})
export class CustDueComponent {
  displayedColumns: string[] = ['position', 'name','amount', 'due_date','action'];
  dataSource =  ELEMENT_DATA;
constructor(
  private router:Router
)
{

}
duere(){
  this.router.navigate(['/customerhome/due_reg'])
}
};

