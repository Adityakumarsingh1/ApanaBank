import { HttpClientJsonpModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
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
  {position: 4, name: 'alok', email_id: 'alok@123', address:'hajipur', document: 'addhar'},
 
];

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  displayedColumns: string[] = ['position', 'name', 'email_id', 'address','document','action'];
  dataSource = ELEMENT_DATA;
}
