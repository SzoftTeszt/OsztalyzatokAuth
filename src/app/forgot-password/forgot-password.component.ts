import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  email=""
  mailRegError=false
  mailRegText=""
  emailSent=false

  constructor(private auth:AuthService){}

  forgotPassword(){
    this.auth.forgotPassword(this.email).then(
      ()=>this.emailSent=true
    )
    
    .catch(
      (error)=>{
        this.mailRegError=true
        this.mailRegText=error
      }
    )
  }

}
