import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users:any
  constructor(private auth:AuthService){
    this.auth.getUsers().subscribe(
      (users)=>this.users=users
    )
  }

  addAdmin(uid:any){
    this.auth.setClaims(uid)
  }

  getCleims(uid:any){
    this.auth.getClaims(uid)
  }
}
