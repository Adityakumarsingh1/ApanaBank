import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdrawal-registration',
  templateUrl: './withdrawal-registration.component.html',
  styleUrls: ['./withdrawal-registration.component.css']
})
export class WithdrawalRegistrationComponent {
  constructor(
    private  router:Router
  )
  {

  }
  with(){
    this.router.navigate(['/adminhome/withdrawal'])
  }
}
