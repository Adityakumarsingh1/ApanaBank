import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-loan-registration',
  templateUrl: './loan-registration.component.html',
  styleUrls: ['./loan-registration.component.css']
})
export class LoanRegistrationComponent implements OnInit {
  customer:any
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
    loan_id:[''],
    cust_name:['',Validators.required],
    loan_amount:['',Validators.required],
    loan_no:['',Validators.required],
    loan_duration:['',Validators.required],
    loan_date:['',Validators.required],
    loan_intrest:['',Validators.required],
    loan_installment:['',Validators.required],
    total_amount:['',Validators.required],
    cust_id_fk:[''],
    // emp_id_fk:[''],
    admin_id_fk:['']

  })


  this.servi.get_cust().subscribe(
    (res:any)=>{
      this.customer = res.data
    }
  )
}
onsubmit(){
  console.log(this.loan_form.value)
alert('okk')
  const loanformdata=new FormData()
 
  loanformdata.append('cust_name',this.loan_form.get('cust_name')?.value)
  loanformdata.append('loan_amount',this.loan_form.get('loan_amount')?.value)
  loanformdata.append('loan_no',this.loan_form.get('loan_no')?.value)
  loanformdata.append('loan_duration',this.loan_form.get('loan_duration')?.value)
  loanformdata.append('loan_date',this.loan_form.get('loan_date')?.value)
  loanformdata.append('loan_intrest',this.loan_form.get('loan_intrest')?.value)
  loanformdata.append('loan_installment',this.loan_form.get('loan_installment')?.value)
  loanformdata.append('total_amount',this.loan_form.get('total_amount')?.value)
  loanformdata.append('cust_id_fk',this.loan_form.get('cust_id_fk')?.value)
  // loanformdata.append('emp_id_fk',this.loan_form.get('emp_id_fk')?.value)
  loanformdata.append('admin_id_fk','1')
  this.servi.post_LoanRegistration(loanformdata).subscribe(
   ( result:any)=>{
   }
  )  
  }
  genLoneNo(){
    this.servi.get_loan().subscribe(
      (res:any)=>{
        console.log(res)
        if(res.success == 1){
          const loneno = res.data.length + 1
          this.loan_form.get('loan_no').setValue("1098100088"+ loneno)
        }else{
          this.loan_form.get('loan_no').setValue("1098100088"+ 1)
        } 
      }
    )
  }
  onDurationCalc(event:any){
    this.loan_form.get('loan_installment').setValue(((this.loan_form.get('loan_amount')?.value) / event).toFixed(2))
  }
  loan(){
    this.router.navigate(['/adminhome/loan'])
   
}
};
