import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent {
  displayedColumns: string[] = ['with_id', 'with_name','with_amount', ];
  dataSource =  new MatTableDataSource()
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  total_count:any;
constructor(
  private router:Router,
  private ser:ApiService
)
{
}
ngOnInit(): void {   
  this.ser.get_with().subscribe(
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
 
withdrawalre(){
  this.router.navigate(['/adminhome/withdrawal_reg'])
}
};
