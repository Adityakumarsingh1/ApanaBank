import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost/api/login.php';

  constructor(
    private http:HttpClient
  ) { }

  check_admin_login(data:any){
    return this.http.post('this.baseurl +this.check_admin_login.php',data)
  }

  post_employeeRegistration(data:any){
    return this.http.post<any>('http://localhost/api/employe_form_insert.php',data)
  }
  get_employee(){
    return this.http.get('http://localhost/api/emp_view.php')
  }
  get_single_employe(eid:any){
    return this.http.get(this.baseUrl+'http://localhost/api/emp_view.php')
  }
  post_customerregistration(data:any){
    return this.http.post<any>('http://localhost/api/insert_cust.php',data)
  }
  get_cust(){
    return this.http.get<any>('http://localhost/api/custmer_view.php')
  }
  get_single_customt( cid:any){
    return this.http.get(this.baseUrl+'http://localhost/api/custmer_view.php')
  }
 
  
  post_LoanRegistration(data:any){
      return this.http.post<any>('http://localhost/api/insert_loan.php',data)
  }
  get_loan(){
    return this.http.get<any>('http://localhost/api/veiw%20loan.php')
  }
  post_creditscoreRegistation(data:any){
    return this.http.post<any>('http://localhost/api/insert_cred_score.php',data)
  }
  get_credi(){
    return this.http.get<any>('http://localhost/api/view_credit.php')
  }
  post_DueRegistration(data:any){
    return this.http.get<any>('http://localhost/api/insert_due.php',data)
  }
  post_employeesalaryregistration(data:any){
    return this.http.get<any>('http://localhost/api/insert%20emp_salary.php',data)
  }
  get_due(){
    return this.http.get<any>('http://localhost/api/view_due.php',)
  }
  get_sali(){
    return this.http.get<any>('http://localhost/api/employeesalary_veiw.php')
  }
  get_depo(){
    return this.http.get<any>('http://localhost/api/view_deposit.php')
  }
  get_with(){
    return this.http.get<any>('http://localhost/api/view_withdrawal.php')
  }
  post_DepositRegistration(data:any){
    return this.http.post<any>('http://localhost/api/insert%20deposit.php',data)
  }
  post_WithdrawalRegistration(data:any){
    return this.http.get<any>('http://localhost/api/insert_withdrawal.php',data)
  }
  do_login(data:any){
    console.log(data)
    return this.http.post('http://localhost/api/login.php',data);
  }
}
