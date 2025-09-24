import { Component, Input, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { Route, Router } from '@angular/router';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone : true,
  imports: [
    UpperCasePipe,
    TitleCasePipe,
    LowerCasePipe
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent{

  @Input() employee!: Employee;

  constructor(private empService: EmployeeService, private route: Router) { }

  editEmployee(): void {
    this.route.navigate(['/employees/edit', this.employee.id]);
  }

  deleteEmployee(id?: number): void {
    if (id && confirm('Voulez-vous vraiment supprimer cet employé ?')) {
      this.empService.deleteEmployee(id).subscribe({
        next: () => {
          alert('Employé supprimé avec succès !');
          this.route.navigate(['/employees']);
        },
        error: (err) => {
          console.error('Erreur lors de la suppression :', err);
          alert('Erreur lors de la suppression de l\'employé.');
        }
      });
    }
  }
}
