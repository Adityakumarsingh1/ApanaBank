import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-withdrawal-reg',
  templateUrl: './emp-withdrawal-reg.component.html',
  styleUrls: ['./emp-withdrawal-reg.component.css']
})
export class EmpWithdrawalRegComponent {
  constructor(
    private router:Router
  )
  {

  }
  with(){
    this.router.navigate(['/employeehome/withdrawal'])
  }

};
