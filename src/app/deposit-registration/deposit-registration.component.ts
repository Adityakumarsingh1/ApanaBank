import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit-registration',
  templateUrl: './deposit-registration.component.html',
  styleUrls: ['./deposit-registration.component.css']
})
export class DepositRegistrationComponent {
  constructor(
    private router:Router
  )
  {

  }
  dep(){
    this.router.navigate(['/adminhome/deposit'])
  }
}
