import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { routeConfig } from './app/app.routes'; // Załóżmy, że to twoja konfiguracja tras


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig)
  ]
}).catch(err => console.error(err));
