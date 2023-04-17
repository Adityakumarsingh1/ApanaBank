import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-loan-registration',
  templateUrl: './loan-registration.component.html',
  styleUrls: ['./loan-registration.component.css']
})
export class LoanRegistrationComponent implements OnInit {
  loan_form:any;
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private servi:ApiService
  )
  {

  }
ngOnInit(): void {
  this.loan_form=this.fb.group({
    loan_name:['',Validators.required],
    loan_per:['',Validators.required],
    loan_no:['',Validators.required],
    loan_duration:['',Validators.required],
    loan_date:['',Validators.required],
    loan_intrest:['',Validators.required],
    loan_installment:['',Validators.required],
    cust_id_fk:[''],
    emp_id_fk:[''],
    admin_id_fk:['']

  })
}
onsubmit(){
  // console.log(this.loan_form.get('loan_name')?.value)

  const loanformdata=new FormData()
  loanformdata.append('loan_name',this.loan_form.get('loan_name')?.value)
  loanformdata.append('loan_per',this.loan_form.get('loan_per')?.value)
  loanformdata.append('loan_no',this.loan_form.get('loan_no')?.value)
  loanformdata.append('loan_duration',this.loan_form.get('loan_duration')?.value)
  loanformdata.append('loan_date',this.loan_form.get('loan_date')?.value)
  loanformdata.append('loan_intrest',this.loan_form.get('loan_intrest')?.value)
  loanformdata.append('loan_installment',this.loan_form.get('loan_installment')?.value)
  loanformdata.append('cust_id_fk',this.loan_form.get('cust_id_fk')?.value)
  loanformdata.append('emp_id_fk',this.loan_form.get('emp_id_fk')?.value)
  loanformdata.append('admin_id_fk',this.loan_form.get('admin_id_fk')?.value)


  this.servi.post_LoanRegistration(loanformdata).subscribe(
   ( result:any)=>{
    console.log(result)
   }
  )
    
  }
  loan(){
    this.router.navigate(['/adminhome/loan'])
  

 
}
};
