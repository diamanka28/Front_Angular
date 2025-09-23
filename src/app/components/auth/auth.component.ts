import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  mail: string = '';
  password: string = '';

  constructor(private authService: AuthService, private route: Router) { }

  onSubmit(): void {
    console.log('Form submitted with', this.mail, this.password);
    this.authService.login(this.mail, this.password).subscribe({
      next: (response: any) => {
        console.log('Login successful', response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.route.navigate(['']);
      },
      error: (err) => {
        alert('Échec de la connexion. Vérifiez vos identifiants.');
        console.error('Login failed', err);
      }
    });
  }

  retour(): void{ 
    this.route.navigate(['']);  
    console.log('Retour to home');
  }
  logout(): void{
    this.authService.logout();
    console.log('Logged out');
  } 
}
