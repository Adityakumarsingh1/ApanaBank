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
import { CreditScoreRegistrationComponent } from './credit-score-registration/credit-score-registration.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { DepositRegistrationComponent } from './deposit-registration/deposit-registration.component';
import { DueRegistrationComponent } from './due-registration/due-registration.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeSalaryRegistrationComponent } from './employee-salary-registration/employee-salary-registration.component';
import { ForgetComponent } from './forget/forget.component';
import { LoanRegistrationComponent } from './loan-registration/loan-registration.component';
import { WithdrawalRegistrationComponent } from './withdrawal-registration/withdrawal-registration.component';

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
    {path: 'employee_reg',component:EmployeeRegistrationComponent},
    {path:'customer_reg',component:CustomerRegistrationComponent},
    {path:'loan_reg',component:LoanRegistrationComponent},
    {path:'creditsc_reg',component:CreditScoreRegistrationComponent},
    {path:'due_reg',component:DueRegistrationComponent},
    {path:'employeesal_reg',component:EmployeeSalaryRegistrationComponent},
    {path:'deposite_reg',component:DepositRegistrationComponent},
    {path:'withdrawal_reg',component:WithdrawalRegistrationComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'customer',component:CustomerComponent},
    {path:'loan',component:LoanComponent},
    {path:'credit_score',component:CreditScoresComponent},
    {path:'due',component:DueComponent},
    {path:'employee_salary',component:EmployeeSalaryComponent},
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
