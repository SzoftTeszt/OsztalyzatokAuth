import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent {

  constructor(private auth:AuthService){}

  googleAuth(){
    this.auth.googleAuth()
    .then(()=>console.log("Sikeres Google belépés!"))
    .catch(()=>console.log("Sikertelen GoogleAuth!"))
  }

}
