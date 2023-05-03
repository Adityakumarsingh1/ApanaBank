import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent  implements OnInit{
  displayedColumns: string[] = ['loan_id','loan_no',  'loan_date','loan_installment'];
  dataSource = new MatTableDataSource()
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  total_count:any;

  constructor(
    private router:Router,
    private servie:ApiService
  )
  {}

  ngOnInit(): void {
    this.servie.get_loan().subscribe(
      (res:any)=>{
        console.log(res)
        this.dataSource.data=res.data
        this.total_count = res.data.length;
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
  
  loanre(){
    this.router.navigate(['/adminhome/loan_reg'])
  }
}


