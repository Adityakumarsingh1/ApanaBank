import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerRegistrationComponent } from 'src/app/customer-registration/customer-registration.component';
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
  selector: 'app-emp-customer',
  templateUrl: './emp-customer.component.html',
  styleUrls: ['./emp-customer.component.css']
})
export class EmpCustomerComponent {
  displayedColumns: string[] = ['position', 'name','email_id', 'document','action'];
  dataSource =  ELEMENT_DATA;

constructor(
  private router:Router
  )
{

}
customerre(){
  this.router.navigate(['/employeehome/customer_reg'])
}
};


