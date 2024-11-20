import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSub= new Subject()

  constructor(private afAuth:AngularFireAuth) { 
    
    this.afAuth.authState.subscribe(
      (user:any)=>{
        if (user) {
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

  googleAuth(){
    return this.afAuth.signInWithPopup(new GoogleAuthProvider())
    // return this.afAuth.signInWithRedirect(new GoogleAuthProvider())
  }
  signOut(){
    console.log("Kijeletkezés!")
    return this.afAuth.signOut()
  }
}
