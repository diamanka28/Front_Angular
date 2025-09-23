import { Component } from '@angular/core';
import { Employee } from '../../services/employee.service';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {

  employee : Employee = {
    id : 0,
    firstName: '',
    lastName: '',
    mail: '',
    password: ''
  };

  constructor(private empService: EmployeeService, private router: Router) { }

  onSubmit(): void {
    this.empService.addEmployee(this.employee).subscribe(() => {
      alert('Employé ajouté avec succès !');
      this.router.navigate(['/employees']);
    });
  }

  navigateToList(): void {
    this.router.navigate(['/employees']);
  }
}
