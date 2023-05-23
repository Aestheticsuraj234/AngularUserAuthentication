import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { UserAuthenticateComponent } from './user-authenticate/user-authenticate.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    UserAuthenticateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  exports:[
    UserLoginComponent,
    UserAuthenticateComponent

  ]
})
export class UserAuthenticationModule { }
