import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-due-registration',
  templateUrl: './due-registration.component.html',
  styleUrls: ['./due-registration.component.css']
})
export class DueRegistrationComponent {
  constructor(
    private router:Router
  )
  {

  }
  due(){
    this.router.navigate(['/adminhome/due'])
  }
}
