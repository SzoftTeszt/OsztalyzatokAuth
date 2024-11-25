import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSub= new Subject()

  constructor(private afAuth:AngularFireAuth, private router:Router) { 

    this.afAuth.authState.subscribe(
      (user:any)=>{
        if (user) {
         
          // user._delegate.accessToken
          this.userSub.next(user._delegate)
          console.log(user._delegate)
          
        }
        else{
          this.userSub.next(null)
        }
      }
    )

  }

  getLoggedUser(){
    return this.userSub
  }

  signUpEmailPassword(email:string, pass:string){
    return this.afAuth.createUserWithEmailAndPassword(email, pass)
  }

  async signInEmailPassword(email:string, pass:string){
    await this.afAuth.signInWithEmailAndPassword(email, pass)
    .then((u:any)=>{
      console.log("Belép",u.user._delegate.emailVerified)
      if (!u.user._delegate.emailVerified) {
        this.signOut()
        return new Promise((resolve, reject)=>{
          throw new Error("Email not verified!")
        })
      }
        else {
          return new Promise((resolve, reject)=>{
            resolve("Ok")
          })
        }
      })}
      
      
  
  sendVerificationEmail(){
    return this.afAuth.currentUser.then(
      (user)=>user?.sendEmailVerification()
    )
  }

  googleAuth(){
    return this.afAuth.signInWithPopup(new GoogleAuthProvider())
    // return this.afAuth.signInWithRedirect(new GoogleAuthProvider())
  }

  forgotPassword(email:string){
    return this.afAuth.sendPasswordResetEmail(email)
  }


  signOut(){
    // console.log("Kijeletkezés!")
    this.afAuth.signOut().then(
      ()=>this.router.navigate(['signin'])
    )
  }
}
