import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','var','abstract','int'];;
  dataSource = new MatTableDataSource();
}
