import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  
  district: string[] =[
    'Vaishali',
    'Samastipur',
    'Begusarai',
    'Muzaffarpur',
    'Patna',
    'Darbhanga',
    'chapara'
  ]
  states: string[] = [
    'Bihar',
    'Jharkhand',
  ]
  cust_document_type: string[] = [
    'Addhar',
    'PAN',
    'Driving licence',
    'Voter'
    
  ]
  cid:number=0;
 customer_registration: any;
  img_local_url ='http://localhost/upload/';
  img_url:any = this.img_local_url+'logo.png';
  selected_img:any;
  add_cid!:FormGroup;
  api: any;


  constructor(
    private router:Router,
    private fb:FormBuilder,
    private servi:ApiService,
    private url:ActivatedRoute
  )
  {}
  ngOnInit():void {
    this.cid = this.url.snapshot.params['id'];
    if (this.cid) {
      this.api.get_single_custom(this.cid).subscribe(
        (res: any) => {
          this.add_cid.patchValue(res.data);
          this.img_url =(res.data['cus_img'])? this.img_local_url+res.data['cus_img']:this.img_local_url+'logo.png';
          console.log(res.data)
        }
      )
    }
    this.add_cid = this.fb.group({
  // this.ngOnInit(): void {
    // this.cus_form =this.fb.group({
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
      const custformdata =  new FormData()
    custformdata.append('cust_name', this.add_cid.get('cust_name')?.value)
    custformdata.append('cust_father_name', this.add_cid.get('cust_father_name')?.value)
    custformdata.append('cust_phoneno', this.add_cid.get('cust_phoneno')?.value)
    custformdata.append('cust_email', this.add_cid.get('cust_email')?.value)
    custformdata.append('cust_village', this.add_cid.get('cust_village')?.value)
    custformdata.append('post', this.add_cid.get('post')?.value)
    custformdata.append('district', this.add_cid.get('district')?.value)
    custformdata.append('state', this.add_cid.get('state')?.value)
    custformdata.append('pin', this.add_cid.get('pin')?.value)
    custformdata.append('cust_signature', this.add_cid.get('cust_signature')?.value)
    custformdata.append('cust_photo', this.add_cid.get('cust_photo')?.value)
    custformdata.append('cust_document_type', this.add_cid.get('cust_document_type')?.value)
    custformdata.append('cust_documentno', this.add_cid.get('cust_documentno')?.value)
    custformdata.append('cust_document_upload', this.add_cid.get('cust_document_upload')?.value)
    custformdata.append('cust_password', this.add_cid.get('cust_password')?.value)
    custformdata.append('emp_id_fk', this.add_cid.get('emp_id_fk')?.value)
    custformdata.append('admin_id_fk', this.add_cid.get('admin_id_fk')?.value)
    this.api.post_customerregistration(custformdata).subscribe(
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
  cust(){
    this.router.navigate(['/adminhome/customer'])
  }

}
