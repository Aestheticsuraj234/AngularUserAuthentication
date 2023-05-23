import { Component } from '@angular/core';
import { User } from '../user-login/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-authenticate',
  templateUrl: './user-authenticate.component.html',
  styleUrls: ['./user-authenticate.component.css']
})
export class UserAuthenticateComponent {
  email?: string;
  password?: string;
  loggedin?:boolean = false;

  constructor(private router:Router){}
  onLogin() {
    try {
      if (!this.email || !this.password) {
        return;
      }

      // Retrieve user data from local storage
      const existingData = localStorage.getItem('userData');
      let userData: User[] = [];

      if (existingData) {
        // If existing data exists, parse it from JSON to an array
        userData = JSON.parse(existingData);
      }

      // Find the user with matching email and password
      const user = userData.find((u) => u.email === this.email && u.password === this.password);

      if (user) {
        console.log('Login successful');
        this.loggedin = true
        this.router.navigate(['/home'])
        // Perform actions for successful login, such as navigating to the user's dashboard
      } else {
        console.log('Invalid email or password');
        
        // Perform actions for failed login, such as displaying an error message
      }
    } catch (error) {
      console.log(error);
    }
  }
}
