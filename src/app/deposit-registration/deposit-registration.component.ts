import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-deposit-registration',
  templateUrl: './deposit-registration.component.html',
  styleUrls: ['./deposit-registration.component.css']
})
export class DepositRegistrationComponent implements OnInit {
  dep_form:any;
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private servi:ApiService
  )
  {

  }
  ngOnInit(): void {
    this.dep_form=this.fb.group({
      dep_name:['',Validators.required],
      dep_date:['',Validators.required],
      dep_amount:['',Validators.required],
      emp_id_fk:[''],
      admin_id_fk:['']
    })
  }
  onsubmit(){
    const depformdata=new FormData()
    depformdata.append('dep_name',this.dep_form.get('dep_name')?.value)
    depformdata.append('dep_date',this.dep_form.get('dep_date')?.value)
    depformdata.append('dep_amount',this.dep_form.get('dep_amount')?.value)
    depformdata.append('emp_id_fk',this.dep_form.get('emp_id_fk')?.value)
    depformdata.append('admin_id_fk',this.dep_form.get('admin_id_fk')?.value)
    this.servi.post_DepositRegistration(depformdata).subscribe(
      (result:any)=>{
        console.log(result)
      }
    )

  }
  dep(){
    this.router.navigate(['/adminhome/deposit'])
  }
}
