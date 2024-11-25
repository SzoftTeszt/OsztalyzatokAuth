import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css'
})
export class SingInComponent {
  email=""
  password=""

  mailRegError=false
  mailRegText=""
  szem=false
  tomb=['password','text']

  constructor(private auth:AuthService, private router:Router){}

  visiblePassword(){
    return this.tomb[Number(this.szem)]
  }

  googleAuth(){
    this.auth.googleAuth()
    .then(()=>{
      console.log("Sikeres Google belépés!")
      this.router.navigate(['data'])
    })
    .catch(()=>console.log("Sikertelen GoogleAuth!"))
  }

  signInMailPassword(){
    this.auth.signInEmailPassword(this.email, this.password).then(
      ()=>this.router.navigate(['data'])
    ).catch(
      (error:any)=>{
          this.mailRegError=true
          this.mailRegText=error
      }
    )
  }

  isNotValidSignUp(){
      return !this.email || !this.password
    }
}
