import { Component } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  model?: User;
  submited?:boolean = false
  constructor(private router: Router) {}

  onSubmit() {
    try {
      if(!this.name|| !this.email||!this.password){
        return 
      }
      else{
      this.id = Math.floor(Math.random() * 10000 * 12);
    this.model = new User(this.id, this.name!, this.email!, this.password!);

    // Retrieve existing user data from local storage
    const existingData = localStorage.getItem('userData');
    let userData: User[] = [];

    if (existingData) {
      // If existing data exists, parse it from JSON to an array
      userData = JSON.parse(existingData);
    }

    // Add the new user data to the array
    userData.push(this.model);

    // Store the updated user data back in the local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    console.log(userData);
    this.submited = true;
    if (this.submited) {
      this.router.navigate(['/login']);
    }
    
  }
    } catch (error) {
      console.log(error)
      this.submited=false
    }
    
  }
}
