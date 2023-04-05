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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
