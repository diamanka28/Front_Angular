import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  standalone : true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee = { id: 0, firstName: '', lastName: '', mail: '', password: '' };
  constructor(
    private empService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.empService.getEmployeeById(id).subscribe({
        next: (data) => {
          this.employee = data;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération de l\'employé :', err);
          alert('Erreur lors de la récupération de l\'employé.');
        }
      });
    }
  }
  onSubmit(): void {
    this.empService.updateEmployee(this.employee).subscribe({
      next: () => {
        alert('Employé mis à jour avec succès ✅');
        this.router.navigate(['/employees']);
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour :', err);
        alert('⚠️ Impossible de mettre à jour cet employé');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/employees']);
  }
}
