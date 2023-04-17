import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
export interface PeriodicElement {
}

const ELEMENT_DATA: PeriodicElement[] = [
]

@Component({
  selector: 'app-due',
  templateUrl: './due.component.html',
  styleUrls: ['./due.component.css']
})
export class DueComponent implements OnInit {
  displayedColumns: string[] = ['due_id', 'due_name','due_amount', 'due_date',];
  dataSource = new MatTableDataSource()
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  total_count:any;
constructor(
  private router:Router,
  private servis :ApiService
)
{}
ngOnInit(): void {   
  this.servis.get_due().subscribe(
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
duere(){
  this.router.navigate(['/adminhome/due_reg'])
}
};
