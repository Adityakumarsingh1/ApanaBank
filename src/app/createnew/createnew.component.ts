import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createnew',
  templateUrl: './createnew.component.html',
  styleUrls: ['./createnew.component.css']
})
export class CreatenewComponent {
constructor(
  private router:Router
){
  
  
}
  
onsubmit(){
  alert('okk')
  this.router.navigate(['/admin_login'])
}
oncancle(){
  // alert('no')
  this.router.navigate(['/admin_login'])
}

}
