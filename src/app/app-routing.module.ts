import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-authentication/user-login/user-login.component';
import { UserAuthenticateComponent } from './user-authentication/user-authenticate/user-authenticate.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'/',component:HomeComponent},
  {path:'signup',component:UserLoginComponent},
  {path:'login',component:UserAuthenticateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
