import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';
import { PassComponent } from './pass/pass.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
  { path: 'pass', component: PassComponent },
  { path: '', redirectTo: '/pass', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, BrowserModule]
})

export class AppRoutingModule { }