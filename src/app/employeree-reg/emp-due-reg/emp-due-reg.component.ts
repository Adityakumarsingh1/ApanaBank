import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-due-reg',
  templateUrl: './emp-due-reg.component.html',
  styleUrls: ['./emp-due-reg.component.css']
})
export class EmpDueRegComponent {
  constructor(
    private router:Router
  )
  {

  }
  due(){
    this.router.navigate(['/employeehome/due'])
  }
  }

