import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-pass',
  standalone: true,
  imports: [RouterLink ,LoginPageComponent],
  templateUrl: './pass.component.html',
  styleUrl: './pass.component.css'
})
export class PassComponent {

}
