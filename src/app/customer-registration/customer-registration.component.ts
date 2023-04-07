import { Component } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {
  constructor(
    private router:Router
  )
  {

  }
  cust(){
    this.router.navigate(['/adminhome/customer'])
  }

};
