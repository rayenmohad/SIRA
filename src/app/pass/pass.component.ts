import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pass',
  standalone: true,
  imports: [RouterLink ,LoginPageComponent,FormsModule ],
  templateUrl: './pass.component.html',
  styleUrl: './pass.component.css'
})
export class PassComponent {
  email: string = ''; 

  constructor(private userservice: UserService) {}

  submit() {
    
    this.userservice.forgotPassword(this.email).subscribe({
      next: () => console.log('Password reset email sent.'),
      error: (err) => console.error('Password reset error:', err),
    });
  }
  }

