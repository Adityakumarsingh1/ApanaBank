import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-credit-score-registration',
  templateUrl: './credit-score-registration.component.html',
  styleUrls: ['./credit-score-registration.component.css']
})
export class CreditScoreRegistrationComponent implements OnInit {
  cred_form!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private serve:ApiService
  )
  {

  }
  ngOnInit(): void {
    this.cred_form =this.fb.group({
      // cred_id:[''],
      cred_score:['',Validators.required],
      cred_offer:[''],
      cred_amount:['',Validators.required],
      cred_lenth_history:[''],
      emp_id_fk:[''],
      admin_id_fk:['0']
    })
  }
  onsubmit(){
    const credformdata =new FormData()
    // credformdata.append('cred_id',this.cred_form.get('cred_id')?.value)
    credformdata.append('cred_score',this.cred_form.get('cred_score')?.value)
    credformdata.append('cred_offer',this.cred_form.get('cred_offer')?.value)
    credformdata.append('cred_amount',this.cred_form.get('cred_amount')?.value)
    credformdata.append('cred_lenth_history',this.cred_form.get('cred_lenth_history')?.value)
    credformdata.append('emp_id_fk',this.cred_form.get('emp_id_fk')?.value)
    credformdata.append('admin_id_fk',this.cred_form.get('admin_id_fk')?.value)
    this.serve.post_creditscoreRegistation(credformdata).subscribe(
      (result:any)=>{
        console.log(result)
      }
    )

  }

  cred(){
    this.router.navigate(['/adminhome/credit_score'])
  }
}
