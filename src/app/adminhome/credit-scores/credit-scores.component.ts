import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-credit-scores',
  templateUrl: './credit-scores.component.html',
  styleUrls: ['./credit-scores.component.css']
})
export class CreditScoresComponent implements OnInit{
  displayedColumns: string[] = ['cred_id', 'cred_score', 'cred_amount', 'cred_lenth_history',];
  dataSource = new MatTableDataSource()
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  total_count:any;
  constructor(
    private router:Router,
    private ser : ApiService,
    
  ){}
  ngOnInit(): void {   
    this.ser.get_credi().subscribe(
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
  creditre(){
    this.router.navigate(['/adminhome/creditsc_reg'])
  }
};
