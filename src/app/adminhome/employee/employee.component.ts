import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit{
  displayedColumns: string[] = ['sn', 'emp_name','emp_email	', 'phoneno','emp_img',];
  dataSource = new MatTableDataSource()
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  total_count:any;
  $img_local_url ='http://localhost/upload/';
  $img_url = this.$img_local_url +'logo.png';

  constructor(
  private router:Router,
  private servies:ApiService,

  ){}
  
  ngOnInit(): void {   
    this.servies.get_employee().subscribe(
      (res:any)=>{

        this.servies.get_employee().subscribe(
          (res:any)=>{
            this.dataSource.data = res.data
            this.total_count = res.data.length;
            console.log(res.data)
          }
        )
        this.dataSource = new MatTableDataSource();
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
      }
    )
    
  }

  
  applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
  employeere(){
  this.router.navigate(['/adminhome/employee_reg'])
  }
};

