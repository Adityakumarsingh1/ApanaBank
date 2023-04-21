import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-withdrawal-registration',
  templateUrl: './withdrawal-registration.component.html',
  styleUrls: ['./withdrawal-registration.component.css']
})
export class WithdrawalRegistrationComponent implements OnInit {
  with_form:any;
  constructor(
    private  router:Router,
    private fb:FormBuilder,
    private service:ApiService
  )
  {

  }
  ngOnInit(): void {
    this.with_form=this.fb.group({
      with_name:['',Validators.required],
      with_date	:['',Validators.required],
      with_amount:['',Validators.required],
      emp_id_fk:['',Validators.required],
      admin_id_fk:['']
    })
  }
  onsubmit(){
    const withformdata = new FormData()
    withformdata.append('with_name',this.with_form.get('with_name')?.value)
    withformdata.append('with_date',this.with_form.get('with_date')?.value)
    withformdata.append('with_amount',this.with_form.get('with_amount')?.value)
    withformdata.append('emp_id_fk',this.with_form.get('emp_id_fk')?.value)
    withformdata.append('admin_id_fk',this.with_form.get('admin_id_fk')?.value)
    this.service.post_WithdrawalRegistration(withformdata).subscribe(
      (result:any)=>{
        console.log(result)
      }
    )
    
    
  }
  with(){
    this.router.navigate(['/adminhome/withdrawal'])
  }
}
