import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-due-reg',
  templateUrl: './cust-due-reg.component.html',
  styleUrls: ['./cust-due-reg.component.css']
})
export class CustDueRegComponent {
  constructor(
    private router:Router
  )
  {

  }
 due(){
  this.router.navigate(['/customerhome/due'])
 }
}
