import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  emp_form: any;
  service: any;
  constructor(
     private fb: FormBuilder,
    private router:Router
  )
  
  {

  }
  ngOnInit():void {
    this.emp_form = this.fb.group({
      name:['', Validators.required],
      //  emp_id:[''],
       father_name:[''],
       phoneno:['',Validators.required],
       Email:['',Validators.required],
       village:['',Validators.required],
       post:['',Validators.required],
       District:['',Validators.required],
       state:[''],
       pin:[''],
       signature:[''],
       photo:[''],
       Documenttype:[''],
       documentno:['',Validators.required],
       documentupload:['',Validators.required],
       password:['',Validators.required],
       admin_id_fk:['']
       

    })
  
  }

  onsubmit(){
   this.service.post_employeeRegistration(this.emp_form.value).subscribe(
    (res:any)=>{
      if(res.success){
        console.log(res.message);
      }
      console.log(res)
    }
   )
  }

  emp(){
    this.router.navigate(['/adminhome/employee'])
  }
}
