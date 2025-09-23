import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
    {path: 'auth', component: AuthComponent},
    {path: '', component: LandingPageComponent, pathMatch: 'full'},
    {path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard]},
    {path: 'employees/add', component: AddEmployeeComponent, canActivate: [AuthGuard]},
    {path: 'employees/edit/:id', component: EditEmployeeComponent, canActivate: [AuthGuard]},
];
