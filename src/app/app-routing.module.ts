import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"data" ,component:DataComponent},
  {path:"signin" ,component:SingInComponent},
  {path:"signup" ,component:SingUpComponent},
  {path:"forgotpassword" ,component:ForgotPasswordComponent},
  {path:"users" ,component:UsersComponent},
  {path:"" ,redirectTo:"data", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
