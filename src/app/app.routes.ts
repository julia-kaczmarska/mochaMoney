import { Routes } from '@angular/router';
import { loginFormComponent } from './logIn/login-form.component';
import { BudgetComponent } from './budget/budget.component';

export const routeConfig: Routes = [
{
    path: 'login',
    component: loginFormComponent,
    title: 'Login Page'
  },
  {
    path: 'budget/:user_id',
    component: BudgetComponent,
    title: "User's budget"
  }
];
