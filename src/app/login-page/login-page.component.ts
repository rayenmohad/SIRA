import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { PassComponent } from '../pass/pass.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink,SignupComponent, PassComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
