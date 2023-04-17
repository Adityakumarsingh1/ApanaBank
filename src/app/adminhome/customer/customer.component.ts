import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  implements OnInit{
  displayedColumns: string[] = ['cust_id', 'name','cust_email', 'cust_phoneno',];
  dataSource =  new MatTableDataSource()
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  total_count:any;


constructor(
  private router:Router,
  private servie:ApiService
  )
{

}
  ngOnInit(): void {
    this.servie.get_cust().subscribe(
      (res:any)=>{

        this.servie.get_cust().subscribe(
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
customerre(){
  this.router.navigate(['/adminhome/customer_reg'])
}

};

