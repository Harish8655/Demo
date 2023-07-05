import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 // LoginModels:LoginModel=new LoginModel();
  /**
   *
   * */


  constructor(private route:Router) {

  }

  Login( username:string, passwod:string)
    {
      alert(username);
      if(username!='' && passwod!='' )
      {
       // navigateByUrl
       this.route.navigate(['UserDetails']);
       
         
      }
      
     
    }
    
}
