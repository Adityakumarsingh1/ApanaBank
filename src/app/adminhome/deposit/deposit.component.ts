import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  displayedColumns: string[] = ['dep_id', 'dep_name','dep_amount',];
  dataSource = new MatTableDataSource()
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  total_count:any;
constructor(
  private router:Router,
  private servics: ApiService
  
)
{}
ngOnInit(): void {   
  this.servics.get_depo().subscribe(
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
depositre(){
  this.router.navigate(['/adminhome/deposite_reg'])
}
};
