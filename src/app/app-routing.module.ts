import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CreditScoresComponent } from './adminhome/credit-scores/credit-scores.component';
import { CustomerComponent } from './adminhome/customer/customer.component';
import { DashboardComponent } from './adminhome/dashboard/dashboard.component';
import { DepositComponent } from './adminhome/deposit/deposit.component';
import { DueComponent } from './adminhome/due/due.component';
import { EmployeeSalaryComponent } from './adminhome/employee-salary/employee-salary.component';
import { EmployeeComponent } from './adminhome/employee/employee.component';
import { LoanComponent } from './adminhome/loan/loan.component';
import { WithdrawalComponent } from './adminhome/withdrawal/withdrawal.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { ForgetComponent } from './forget/forget.component';

const routes: Routes = [
  {path:'',component:AdminLoginComponent},
  {path:'admin_login',component:AdminLoginComponent},

  {path:'employee_login',component:EmployeeLoginComponent},
  {path:'customer_login',component:CustomerLoginComponent},
  {path:'forget',component:ForgetComponent},
  {path:'adminhome',
       component:AdminhomeComponent,
     children:[
    {path:'',component:DashboardComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'customer',component:CustomerComponent},
    {path:'loan',component:LoanComponent},
    {path:'credit-score',component:CreditScoresComponent},
    {path:'due',component:DueComponent},
    {path:'employee-salary',component:EmployeeSalaryComponent},
    {path:'deposit',component:DepositComponent},
    {path:'withdrawal',component:WithdrawalComponent},
   ]
  },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
