import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../../services/employee.service';
import { Router } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    EmployeeComponent
  ],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private empService: EmployeeService, private router :Router) {}

  ngOnInit(): void {
    this.empService.getEmployees().subscribe({
      next: (data) => {
        console.log('Données reçues depuis l’API :', data);
        this.employees = data;
      },
      error: (err) => {
        console.error('Erreur lors du fetch :', err);
      }
    });
  }

  addEmployee(): void {
    this.router.navigate(['/employees/add']);
  }

}
  