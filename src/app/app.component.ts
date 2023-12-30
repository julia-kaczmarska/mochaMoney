import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { loginFormComponent } from './logIn/login-form.component';
import { RouterModule } from '@angular/router';
import { BudgetComponent } from './budget/budget.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, loginFormComponent, BudgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mochaMoney';
}
