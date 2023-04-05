import { Component } from '@angular/core';
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
  selector: 'app-due',
  templateUrl: './due.component.html',
  styleUrls: ['./due.component.css']
})
export class DueComponent {
  displayedColumns: string[] = ['position', 'name','amount', 'due_date','action'];
  dataSource =  ELEMENT_DATA;

}
