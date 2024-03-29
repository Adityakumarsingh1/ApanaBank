import { Component, createComponent, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatDialog } from '@angular/material/dialog';
import { CreatenewComponent } from '../createnew/createnew.component';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  hide = true
  admin_login!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private router:Router,
    private dailog:MatDialog,
  ){}

  ngOnInit(): void {
    this.admin_login = this.fb.group({
      uid:['',Validators.required],
      pwd:['',Validators.required]
    })
  }

  ontologin(): void {
  this.api.do_login(this.admin_login.value).subscribe(
    (res:any)=>{
      localStorage.setItem('token',JSON.stringify(res.data))
      if(res.data){
        console.log(res.data)
        this.router.navigate(['/adminhome']);
      }
        
      }
    )
  }
  createa(){
    this.dailog.open(CreatenewComponent )
  }
 
  
}