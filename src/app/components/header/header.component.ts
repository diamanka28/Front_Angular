import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Employee } from '../../services/employee.service';
import { UserPanelComponent } from '../user-panel/user-panel.component';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    UserPanelComponent,
    CommonModule,
    UpperCasePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  private showPanel: boolean = false;

  togglePanel(): void{
    this.showPanel = !this.showPanel;
    console.log('Panel toggled:', this.showPanel);
  }
  constructor(private authService: AuthService) { }

  isLoggedIn(): boolean{
    return this.authService.isLoggedIn();
  }

  logout(): void{
    this.authService.logout();
    console.log('Logged out');
  }

  getShowPanel(): boolean{
    return this.showPanel;
  }
  
  getUser(): any {
    return {'firstName':this.authService.getUser()["firstName"], 'lastName':this.authService.getUser()["lastName"]};
  } 
}
