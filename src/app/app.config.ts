import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC1xFNFhcPSsloS6xvzYr3xzQDELmnV6PA",
  authDomain: "cvgenerator-data.firebaseapp.com",
  projectId: "cvgenerator-data",
  storageBucket: "cvgenerator-data.firebasestorage.app",
  messagingSenderId: "558380545338",
  appId: "1:558380545338:web:f2c783f318a1f0e8740c03",
  measurementId: "G-Y832XB8HZ4"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ]
};