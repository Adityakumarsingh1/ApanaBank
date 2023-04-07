import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-deposit-reg',
  templateUrl: './emp-deposit-reg.component.html',
  styleUrls: ['./emp-deposit-reg.component.css']
})
export class EmpDepositRegComponent {
  constructor(
    private router:Router
  )
  {

  }
  dep(){
    this.router.navigate(['/adminhome/deposit'])
  }
}
