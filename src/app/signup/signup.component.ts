import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private userservice: UserService) {}

  submit() {
    this.userservice.signup(this.email,this.password).subscribe({
      next: (user) => console.log('User registered successfully:', user),
      error: (err) => console.error('Signup error:', err),
    });
  }
    
  }

