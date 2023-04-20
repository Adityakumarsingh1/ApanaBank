import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  states: string[] = [
    'Bihar',
    'Jharkhand',
  ]
  district: string[] =[
    'Vaishali',
    'Samastipur',
    'Begusarai',
    'Muzaffarpur',
    'Patna',
    'Darbhanga',
    'chapara'
  ]
  hide=true;
  
  eid:number=0;
  employee_registration: any;
  img_local_url ='http://localhost/upload/';
  img_url:any = this.img_local_url+'logo.png';
  selected_img:any;
  add_emp!:FormGroup;
 

  constructor(
     private fb: FormBuilder,
    private router:Router,
    private api:ApiService,
    private url : ActivatedRoute
  ){}
  
 
  ngOnInit():void {
    this.eid = this.url.snapshot.params['id'];
    if (this.eid) {
      this.api.get_single_employe(this.eid).subscribe(
        (res: any) => {
          this.add_emp.patchValue(res.data);
          this.img_url =(res.data['emp_img'])? this.img_local_url+res.data['emp_img']:this.img_local_url+'logo.png';
          console.log(res.data)
        }
      )
    }
    this.add_emp = this.fb.group({
      emp_name:['', Validators.required],
       emp_id:[''],
       father_name:[''],
       phoneno:['',Validators.required],
       emp_email:['',Validators.required],
       village:['',Validators.required],
       post:['',Validators.required],
       district:['',Validators.required],
       state:[''],
       pin:[''],
       signature:[''],
       emp_img:[''],
       document_type:[''],
       documentno:['',Validators.required],
       document_upload:['',Validators.required],
       emp_password:['',Validators.required],
       admin_id_fk:[1]
    })
  
  }

  onsubmit(){
    const empformdata =  new FormData();
  empformdata.append('emp_name', this.add_emp.get('emp_name')?.value)
  empformdata.append('father_name', this.add_emp.get('father_name')?.value)
  empformdata.append('phoneno', this.add_emp.get('phoneno')?.value)
  empformdata.append('emp_email', this.add_emp.get('emp_email')?.value)
  empformdata.append('village', this.add_emp.get('village')?.value)
  empformdata.append('post', this.add_emp.get('post')?.value)
  empformdata.append('district', this.add_emp.get('district')?.value)
  empformdata.append('state', this.add_emp.get('state')?.value)
  empformdata.append('pin', this.add_emp.get('pin')?.value)
  empformdata.append('signature', this.add_emp.get('signature')?.value)
  empformdata.append('document_type', this.add_emp.get('document_type')?.value)
  empformdata.append('documentno', this.add_emp.get('documentno')?.value)
  empformdata.append('document_upload', this.add_emp.get('document_upload')?.value)
  empformdata.append('emp_password', this.add_emp.get('emp_password')?.value)
  empformdata.append('admin_id_fk', this.add_emp.get('admin_id_fk')?.value)
  empformdata.append('emp_img', this.selected_img)

    this.api.post_employeeRegistration(empformdata).subscribe(
      (result:any)=>{
        console.log(result)
      }
    )
  }
  onImgChng(file:any){
    if(file[0].length===0){
     return
    }
    this.selected_img = file[0];
     let reader = new FileReader();
     reader.onload = () =>{
       this.img_url = reader.result;
     }
     reader.readAsDataURL(file[0]);
   }
  emp(){
    this.router.navigate(['/adminhome/employee'])
  }
  }
