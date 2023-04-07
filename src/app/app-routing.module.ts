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
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { EmpDashboardComponent } from './employeehome/emp-dashboard/emp-dashboard.component';
import { EmpCustomerComponent } from './employeehome/emp-customer/emp-customer.component';
import { EmpLoanComponent } from './employeehome/emp-loan/emp-loan.component';
import { EmpCreditScoreComponent } from './employeehome/emp-credit-score/emp-credit-score.component';
import { EmpDueComponent } from './employeehome/emp-due/emp-due.component';
import { EmpDepositComponent } from './employeehome/emp-deposit/emp-deposit.component';
import { EmpWithdrawalComponent } from './employeehome/emp-withdrawal/emp-withdrawal.component';
import { CustDashboardComponent } from './customerhome/cust-dashboard/cust-dashboard.component';
import { EmpCustomerRegComponent } from './employeree-reg/emp-customer-reg/emp-customer-reg.component';
import { EmpLoanRegComponent } from './employeree-reg/emp-loan-reg/emp-loan-reg.component';
import { EmpCreditScoreRegComponent } from './employeree-reg/emp-credit-score-reg/emp-credit-score-reg.component';
import { EmpDepositRegComponent } from './employeree-reg/emp-deposit-reg/emp-deposit-reg.component';
import { EmpWithdrawalRegComponent } from './employeree-reg/emp-withdrawal-reg/emp-withdrawal-reg.component';
import { EmpDueRegComponent } from './employeree-reg/emp-due-reg/emp-due-reg.component';
import { CustLoanComponent } from './customerhome/cust-loan/cust-loan.component';
import { CustDueComponent } from './customerhome/cust-due/cust-due.component';
import { CustDepositComponent } from './customerhome/cust-deposit/cust-deposit.component';
import { CustWithdrawalComponent } from './customerhome/cust-withdrawal/cust-withdrawal.component';
import { CustLoanRegComponent } from './customer-reg/cust-loan-reg/cust-loan-reg.component';
import { CustDueRegComponent } from './customer-reg/cust-due-reg/cust-due-reg.component';

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
  {path:'employeehome',
            component:EmployeehomeComponent,
        children:[
    {path:'',component:EmpDashboardComponent},
    {path:'dashboard',component:EmpDashboardComponent},
    {path:'customer',component:EmpCustomerComponent},
    {path:'loan',component:EmpLoanComponent},
    {path:'credit-score',component:EmpCreditScoreComponent},
    {path:'due',component:EmpDueComponent},
    {path:'deposit',component:EmpDepositComponent},
    {path:'withdrawal',component:EmpWithdrawalComponent},
    {path:'customer_reg',component:EmpCustomerRegComponent},
    {path:'loan_reg',component:EmpLoanRegComponent},
    {path:'creditsc_reg',component:EmpCreditScoreRegComponent},
    {path:'due_reg',component:EmpDueRegComponent},
    {path:'deposite_reg',component:EmpDepositRegComponent},
    {path:'withdrawal_reg',component:EmpWithdrawalRegComponent},
    {path:'customer',component:EmpCustomerComponent},
    {path:'loan',component:EmpLoanComponent},
    {path:'creditsc',component:EmpCreditScoreComponent},
    {path:'due',component:EmpDueComponent},
    {path:'deposit',component:EmpDepositComponent},
    {path:'withdrawal',component:EmpWithdrawalComponent},
    
   ]
  },
  {path:'customerhome',
           component:CustomerhomeComponent,
       children:[
    {path:'',component:CustDashboardComponent},
    {path:'dashboard',component:CustDashboardComponent},
    {path:'loan',component:CustLoanComponent},
    {path:'due',component:CustDueComponent},
    {path:'deposit',component:CustDepositComponent},
    {path:'withdrawal',component:CustWithdrawalComponent},
    {path:'loan_reg',component:CustLoanRegComponent},
    {path:'due_reg',component:CustDueRegComponent},
   ]       
   },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
