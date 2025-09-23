import { CommonModule } from '@angular/common';
import { Component , EventEmitter, Input, Output} from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.scss'
})
export class UserPanelComponent {

  @Input() user : {firstName: string, lastName: string} | null = null;
  @Output() close = new EventEmitter<void>();
  
  constructor(private authService: AuthService) { }

  logout(): void{
    this.authService.logout();
    console.log('Logged out');
    this.onClose();
  }
  
  onClose(): void{
    this.close.emit();
  } 

}
