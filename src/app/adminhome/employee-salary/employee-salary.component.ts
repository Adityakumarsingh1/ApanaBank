import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';




@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.css']
})
export class EmployeeSalaryComponent implements OnInit{
  displayedColumns: string[] = ['emp_sal_id', 'emp_name','emp_salary_amount','insentive',];
  dataSource = new  MatTableDataSource()
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  total_count:any;
 constructor(
  private router:Router,
  private servis:ApiService
 )
 {}
 ngOnInit(): void {   
  this.servis.get_sali().subscribe(
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
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
 empsalre(){
  this.router.navigate(['/adminhome/employeesal_reg'])
 }
};

