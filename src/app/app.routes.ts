import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';
import { PassComponent } from './pass/pass.component';
import { CvComponent } from './cv/cv.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'login-page', component: LoginPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'pass', component: PassComponent },
  { path: 'cv', component: CvComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, BrowserModule]
})

export class AppRoutingModule { }