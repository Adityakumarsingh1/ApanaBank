import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  emp_form: any;
  constructor(
     private fb: FormBuilder,
    private router:Router,
    private servi:ApiService
  )
  
  {

  }
  ngOnInit():void {
    this.emp_form = this.fb.group({
      emp_name:['', Validators.required],
      //  emp_id:[''],
       father_name:[''],
       phoneno:['',Validators.required],
       emp_email:['',Validators.required],
       village:['',Validators.required],
       post:['',Validators.required],
       district:['',Validators.required],
       state:[''],
       pin:[''],
       signature:[''],
       photo:[''],
       document_type:[''],
       documentno:['',Validators.required],
       document_upload:['',Validators.required],
       emp_password:['',Validators.required],
       admin_id_fk:['']
       

    })
  
  }

  onsubmit(){
    console.log(this.emp_form.get('emp_name')?.value)
    console.log(this.emp_form.get('father_name')?.value)
    console.log(this.emp_form.get('phoneno')?.value)
    console.log(this.emp_form.get('emp_email')?.value)
    console.log(this.emp_form.get('village')?.value)
    console.log(this.emp_form.get('post')?.value)
    console.log(this.emp_form.get('district')?.value)
    console.log(this.emp_form.get('state')?.value)
    console.log(this.emp_form.get('pin')?.value)
    console.log(this.emp_form.get('signature')?.value)
    console.log(this.emp_form.get('photo')?.value)
    console.log(this.emp_form.get('document_type')?.value)
    console.log(this.emp_form.get('documentno')?.value)
    console.log(this.emp_form.get('document_upload')?.value)
    console.log(this.emp_form.get('emp_password')?.value)
    console.log(this.emp_form.get('admin_id_fk')?.value)

  const empformdata =  new FormData()
  empformdata.append('emp_name', this.emp_form.get('emp_name')?.value)
  empformdata.append('father_name', this.emp_form.get('father_name')?.value)
  empformdata.append('phoneno', this.emp_form.get('phoneno')?.value)
  empformdata.append('emp_email', this.emp_form.get('emp_email')?.value)
  empformdata.append('village', this.emp_form.get('village')?.value)
  empformdata.append('post', this.emp_form.get('post')?.value)
  empformdata.append('district', this.emp_form.get('district')?.value)
  empformdata.append('state', this.emp_form.get('state')?.value)
  empformdata.append('pin', this.emp_form.get('pin')?.value)
  empformdata.append('signature', this.emp_form.get('signature')?.value)
  empformdata.append('photo', this.emp_form.get('photo')?.value)
  empformdata.append('document_type', this.emp_form.get('document_type')?.value)
  empformdata.append('documentno', this.emp_form.get('documentno')?.value)
  empformdata.append('document_upload', this.emp_form.get('document_upload')?.value)
  empformdata.append('emp_password', this.emp_form.get('emp_password')?.value)
  empformdata.append('admin_id_fk', this.emp_form.get('admin_id_fk')?.value)

    this.servi.post_employeeRegistration(empformdata).subscribe(
      (result:any)=>{
        console.log(result)
      }
    )
  }

  emp(){
    // this.router.navigate(['/adminhome/employee'])
  }
}
