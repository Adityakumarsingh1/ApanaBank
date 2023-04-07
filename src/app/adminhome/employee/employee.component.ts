import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
export interface PeriodicElement {
  name: string;
  position: number;
  email_id: string;
  document: string;
  address:string;
  
}


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name','email_id', 'document','action'];
  dataSource = new MatTableDataSource();
  constructor(
    private router:Router,
    private servies:ApiService
  )
  {
    
  }
  ngOnInit(): void {
this.servies.get_employee().subscribe(
  (res:any)=>{
    console.log(res)
    this.dataSource = res.data
  }
)
  }
  employeere(){
    this.router.navigate(['/adminhome/employee_reg'])
  }
};

