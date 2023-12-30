import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'login-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './login-form.component.html',
  // styleUrl: './login-form.component.css'
})
export class loginFormComponent {
  title = 'mochaMoney';
}

