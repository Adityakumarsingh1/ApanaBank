import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  email_id: string;
  document: string;
  address:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'aman', email_id: 'aman@123', address:'hajipur', document: 'addhar'},
  {position: 2, name: 'golu', email_id: 'golu@123', address:'hajipur', document: 'addhar'},
  {position: 3, name: 'mayank', email_id: 'mayank@123', address:'hajipur', document:'addhar'},
  {position: 4, name: 'alok', email_id: 'alok@123', address:'hajipur',document: 'addhar'},
 
];

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  displayedColumns: string[] = ['position', 'name', 'email_id', 'address','document','action'];
  dataSource = ELEMENT_DATA;

}
