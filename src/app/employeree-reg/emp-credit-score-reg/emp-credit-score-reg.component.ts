import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-credit-score-reg',
  templateUrl: './emp-credit-score-reg.component.html',
  styleUrls: ['./emp-credit-score-reg.component.css']
})
export class EmpCreditScoreRegComponent {
    constructor(
      private router:Router
    )
    {

    }
    cred(){
      this.router.navigate(['/employeehome/creditsc'])
    }
};
