import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emp-customer-reg',
  templateUrl: './emp-customer-reg.component.html',
  styleUrls: ['./emp-customer-reg.component.css']
})
export class EmpCustomerRegComponent {
  constructor(
    private router:Router
  )
  {

  }
  cust(){
    this.router.navigate(['/employeehome/customer'])
  }

}
