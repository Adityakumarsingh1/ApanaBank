import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }

  post_employeeRegistration(data:any){
    return this.http.post<any>('http://localhost/api/insert_emp.php',data)
    
  }
  
}
