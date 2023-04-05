import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-score-registration',
  templateUrl: './credit-score-registration.component.html',
  styleUrls: ['./credit-score-registration.component.css']
})
export class CreditScoreRegistrationComponent {
  constructor(
    private router:Router
  )
  {

  }
  cred(){
    this.router.navigate(['/adminhome/credit_score'])
  }
}
