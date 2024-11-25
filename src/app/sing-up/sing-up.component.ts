import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent {
  email=""
  password=""
  confirmPassword=""
  mailRegError=false
  mailRegText=""

  constructor(private auth:AuthService, private router:Router){}

  googleAuth(){
    this.auth.googleAuth()
    .then(()=>{
      console.log("Sikeres Google belépés!")
      this.router.navigate(['data'])
    })
    .catch(()=>console.log("Sikertelen GoogleAuth!"))
  }

  signUpMailPassword(){
    this.auth.signUpEmailPassword(this.email, this.password)
    .then(()=> this.auth.sendVerificationEmail())
    .then( ()=> this.auth.signOut() )
    .then( () =>this.router.navigate(['signin']))
    // .then(
    //   ()=>this.router.navigate(['data']))
    .catch(
      (error)=>{
          this.mailRegError=true
          this.mailRegText=error
      }
    )
  }

  isNotValidSignUp(){
      return !this.email || !this.password || !this.confirmPassword || (this.password!==this.confirmPassword)
  }
}
