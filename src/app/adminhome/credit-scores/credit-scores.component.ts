import { Component } from '@angular/core';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  amount: number;
  offer: number;
  time_period:number;
  action:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'aman', amount: 123, offer: 12 , time_period: 120, action:'edit'   },
  {position: 2, name: 'golu', amount: 123, offer: 12 , time_period: 120,  action:'edit'    },
  {position: 3, name: 'mayank', amount: 123, offer: 12 , time_period: 120,  action:'edit'  },
  {position: 4, name: 'alok',  amount: 123, offer: 12 , time_period: 120,   action:'edit'  },
]
@Component({
  selector: 'app-credit-scores',
  templateUrl: './credit-scores.component.html',
  styleUrls: ['./credit-scores.component.css']
})
export class CreditScoresComponent {
  displayedColumns: string[] = ['position', 'name', 'amount', 'offer','time_period','action'];
  dataSource = ELEMENT_DATA;

  constructor(
    private router:Router
  )
  {

  }
  creditre(){
    this.router.navigate(['/adminhome/creditsc_reg'])
  }
};
