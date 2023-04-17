import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router, Routes } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  cus_form:any;
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private servi:ApiService
  )
  {

  }
  ngOnInit(): void {
    this.cus_form =this.fb.group({
      cust_name:['',Validators.required],
      cust_father_name:[''],
      cust_phoneno:['',Validators.required],
      cust_email:['',Validators.required],
      cust_village:['',Validators.required],
      post:['',Validators.required],
      district:['',Validators.required],
      state:[''],
      pin:[''],
      cust_signature:[''],
      cust_photo:[''],
      cust_document_type:[''],
      cust_documentno:['',Validators.required],
      cust_document_upload:['',Validators.required],
      cust_password:['',Validators.required],
      emp_id_fk:[''],
      admin_id_fk:['']
    })

  }

  onsubmit(){
    // console.log(this.cus_form.get('cust_name')?.value)
    // console.log(this.cus_form.get('cust_father_name')?.value)
    // console.log(this.cus_form.get('cust_phoneno')?.value)
    // console.log(this.cus_form.get('cust_email')?.value)
    // console.log(this.cus_form.get('cust_village')?.value)
    // console.log(this.cus_form.get('post')?.value)
    // console.log(this.cus_form.get('district')?.value)
    // console.log(this.cus_form.get('state')?.value)
    // console.log(this.cus_form.get('pin')?.value)
    // console.log(this.cus_form.get('cust_signature')?.value)
    // console.log(this.cus_form.get('cust_photo')?.value)
    // console.log(this.cus_form.get('cust_document_type')?.value)
    // console.log(this.cus_form.get('cust_documentno')?.value)
    // console.log(this.cus_form.get('cust_document_upload')?.value)
    // console.log(this.cus_form.get('cust_password')?.value)
    // console.log(this.cus_form.get('emp_id_fk')?.value)
    // console.log(this.cus_form.get('admin_id_fk')?.value)


    const custformdata =  new FormData()
    custformdata.append('cust_name', this.cus_form.get('cust_name')?.value)
    custformdata.append('cust_father_name', this.cus_form.get('cust_father_name')?.value)
    custformdata.append('cust_phoneno', this.cus_form.get('cust_phoneno')?.value)
    custformdata.append('cust_email', this.cus_form.get('cust_email')?.value)
    custformdata.append('cust_village', this.cus_form.get('cust_village')?.value)
    custformdata.append('post', this.cus_form.get('post')?.value)
    custformdata.append('district', this.cus_form.get('district')?.value)
    custformdata.append('state', this.cus_form.get('state')?.value)
    custformdata.append('pin', this.cus_form.get('pin')?.value)
    custformdata.append('cust_signature', this.cus_form.get('cust_signature')?.value)
    custformdata.append('cust_photo', this.cus_form.get('cust_photo')?.value)
    custformdata.append('cust_document_type', this.cus_form.get('cust_document_type')?.value)
    custformdata.append('cust_documentno', this.cus_form.get('cust_documentno')?.value)
    custformdata.append('cust_document_upload', this.cus_form.get('cust_document_upload')?.value)
    custformdata.append('cust_password', this.cus_form.get('cust_password')?.value)
    custformdata.append('emp_id_fk', this.cus_form.get('emp_id_fk')?.value)
    custformdata.append('admin_id_fk', this.cus_form.get('admin_id_fk')?.value)
    this.servi.post_customerregistration(custformdata).subscribe(
      (result:any)=>{
        console.log(result)
      }
    )
  }
  cust(){
    this.router.navigate(['/adminhome/customer'])
  }

};
