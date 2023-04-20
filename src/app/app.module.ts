import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { ForgetComponent } from './forget/forget.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CreateComponent } from './create/create.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { DashboardComponent } from './adminhome/dashboard/dashboard.component';
import { EmployeeComponent } from './adminhome/employee/employee.component';
import { CustomerComponent } from './adminhome/customer/customer.component';
import { LoanComponent } from './adminhome/loan/loan.component';
import { CreditScoresComponent } from './adminhome/credit-scores/credit-scores.component';
import { DueComponent } from './adminhome/due/due.component';
import { EmployeeSalaryComponent } from './adminhome/employee-salary/employee-salary.component';
import { DepositComponent } from './adminhome/deposit/deposit.component';
import { WithdrawalComponent } from './adminhome/withdrawal/withdrawal.component';
import {MatTableModule} from '@angular/material/table';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { LoanRegistrationComponent } from './loan-registration/loan-registration.component';
import { CreditScoreRegistrationComponent } from './credit-score-registration/credit-score-registration.component';
import { DueRegistrationComponent } from './due-registration/due-registration.component';
import { EmployeeSalaryRegistrationComponent } from './employee-salary-registration/employee-salary-registration.component';
import { DepositRegistrationComponent } from './deposit-registration/deposit-registration.component';
import { WithdrawalRegistrationComponent } from './withdrawal-registration/withdrawal-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { MatCardModule} from '@angular/material/card';
import { EmpDashboardComponent } from './employeehome/emp-dashboard/emp-dashboard.component';
import { EmpCustomerComponent } from './employeehome/emp-customer/emp-customer.component';
import { EmpLoanComponent } from './employeehome/emp-loan/emp-loan.component';
import { EmpCreditScoreComponent } from './employeehome/emp-credit-score/emp-credit-score.component';
import { EmpDueComponent } from './employeehome/emp-due/emp-due.component';
import { EmpDepositComponent } from './employeehome/emp-deposit/emp-deposit.component';
import { EmpWithdrawalComponent } from './employeehome/emp-withdrawal/emp-withdrawal.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { CustDashboardComponent } from './customerhome/cust-dashboard/cust-dashboard.component';
import { CustLoanComponent } from './customerhome/cust-loan/cust-loan.component';
import { CustDueComponent } from './customerhome/cust-due/cust-due.component';
import { CustDepositComponent } from './customerhome/cust-deposit/cust-deposit.component';
import { CustWithdrawalComponent } from './customerhome/cust-withdrawal/cust-withdrawal.component';
import { EmpCustomerRegComponent } from './employeree-reg/emp-customer-reg/emp-customer-reg.component';
import { EmpCreditScoreRegComponent } from './employeree-reg/emp-credit-score-reg/emp-credit-score-reg.component';
import { EmpDepositRegComponent } from './employeree-reg/emp-deposit-reg/emp-deposit-reg.component';
import { EmpDueRegComponent } from './employeree-reg/emp-due-reg/emp-due-reg.component';
import { EmpLoanRegComponent } from './employeree-reg/emp-loan-reg/emp-loan-reg.component';
import { EmpWithdrawalRegComponent } from './employeree-reg/emp-withdrawal-reg/emp-withdrawal-reg.component';
import { CustLoanRegComponent } from './customer-reg/cust-loan-reg/cust-loan-reg.component';
import { CustDueRegComponent } from './customer-reg/cust-due-reg/cust-due-reg.component';
import { CustDepositRegComponent } from './customer-reg/cust-deposit-reg/cust-deposit-reg.component';
import { CustWithdrawalRegComponent } from './customer-reg/cust-withdrawal-reg/cust-withdrawal-reg.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    ForgetComponent,
    EmployeeLoginComponent,
    CustomerLoginComponent,
    CreateComponent,
    AdminhomeComponent,
    DashboardComponent,
    EmployeeComponent,
    CustomerComponent,
    LoanComponent,
    CreditScoresComponent,
    DueComponent,
    EmployeeSalaryComponent,
    DepositComponent,
    WithdrawalComponent,
    AdminLoginComponent,
    CustomerRegistrationComponent,
    EmployeeRegistrationComponent,
    LoanRegistrationComponent,
    CreditScoreRegistrationComponent,
    DueRegistrationComponent,
    EmployeeSalaryRegistrationComponent,
    DepositRegistrationComponent,
    WithdrawalRegistrationComponent,
    EmployeehomeComponent,
    EmpDashboardComponent,
    EmpCustomerComponent,
    EmpLoanComponent,
    EmpCreditScoreComponent,
    EmpDueComponent,
    EmpDepositComponent,
    EmpWithdrawalComponent,
    CustomerhomeComponent,
    CustDashboardComponent,
    CustLoanComponent,
    CustDueComponent,
    CustDepositComponent,
    CustWithdrawalComponent,
    EmpCustomerRegComponent,
    EmpCreditScoreRegComponent,
    EmpDepositRegComponent,
    EmpDueRegComponent,
    EmpLoanRegComponent,
    EmpWithdrawalRegComponent,
    CustLoanRegComponent,
    CustDueRegComponent,
    CustDepositRegComponent,
    CustWithdrawalRegComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
