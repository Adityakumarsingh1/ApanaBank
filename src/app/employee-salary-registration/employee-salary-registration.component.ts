import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-salary-registration',
  templateUrl: './employee-salary-registration.component.html',
  styleUrls: ['./employee-salary-registration.component.css']
})
export class EmployeeSalaryRegistrationComponent implements OnInit {
  employeesalary_form:any;
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private servi:ApiService

  )
  {

  }
  ngOnInit(): void{
    this.employeesalary_form=this.fb.group({
      emp_sal_id:['',Validators.required],
      emp_name:['',Validators.required],
      emp_salary_amount:['',Validators.required],
      sal_date:['',Validators.required],
      insentive:['',Validators.required],
      emp_expence:['',Validators.required],
      admin_id_fk:['']

    })
  }
  onsubmit(){
    // console.log(this.sal_form.get('sal_name')?.value)
  const salformdata=new FormData()
  salformdata.append('emp_name',this.employeesalary_form.get('emp_name')?.value)
  salformdata.append('emp_salary_amount',this.employeesalary_form.get('emp_salary_amount')?.value)
  salformdata.append('sal_date',this.employeesalary_form.get('sal_date')?.value)
  salformdata.append('insentive',this.employeesalary_form.get('insentive')?.value)
  salformdata.append('emp_expence',this.employeesalary_form.get('emp_expence')?.value)
  salformdata.append('admin_id_fk',this.employeesalary_form.get('admin_id_fk')?.value)

  this.servi.post_employeesalaryregistration(salformdata).subscribe(
    (result:any)=>{
      console.log(result)
    }
  )
  }
  salary(){
    this.router.navigate(['/adminhome/employee_salary'])
  }
};
