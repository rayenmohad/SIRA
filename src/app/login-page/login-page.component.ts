import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { PassComponent } from '../pass/pass.component';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink,SignupComponent, PassComponent,FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';
  
  constructor(private userservice: UserService, private router: Router) {}

  submit() {
    this.userservice.login(this.email, this.password).subscribe({
      next: (user) => {
        console.log('User logged in successfully:', user);
        // After successful login, navigate to the CV page
        this.router.navigate(['/cv']);
      },
      error: (err) => {
        console.error('Login error:', err);
        alert('Invalid credentials, please try again.');
      },
    });
}
}
