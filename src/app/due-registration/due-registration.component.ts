import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-due-registration',
  templateUrl: './due-registration.component.html',
  styleUrls: ['./due-registration.component.css']
})
export class DueRegistrationComponent implements OnInit {
  due_form:any;
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private servi:ApiService
  )
  {

  }
  ngOnInit(): void {
    this.due_form =this.fb.group({
      due_id:[''],
      due_name:['',Validators.required],
      due_date:['',Validators.required],
      due_amount:['',Validators.required],
      cust_id_fk:[''],
      emp_id_fk:[''],
      admin_id_fk:['']
    })
  }
  onsubmit(){
    const dueformdata =new FormData()
    dueformdata.append('due_name',this.due_form.get('due_name')?.value)
    dueformdata.append('due_date',this.due_form.get('due_date')?.value)
    dueformdata.append('due_amount',this.due_form.get('due_amount')?.value)
    dueformdata.append('cust_id_fk',this.due_form.get('cust_id_fk')?.value)
    dueformdata.append('emp_id_fk',this.due_form.get('emp_id_fk')?.value)
    dueformdata.append('admin_id_fk',this.due_form.get('admin_id_fk')?.value)
    
    this.servi.post_DueRegistration(dueformdata).subscribe(
     (result:any)=>{
      console.log(result)

      }
    )

  }
  due(){
    this.router.navigate(['/adminhome/due'])
  }
}
