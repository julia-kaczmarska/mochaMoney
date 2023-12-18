import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './loginForm.component.html',
  // styleUrl: './loginForm.component.css'
})
export class AppComponent {
  title = 'mochaMoney';
}

