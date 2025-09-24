import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  mail: string;
  password: string;

}

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private apiUrl = environment.apiUrl+'/employees';

  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployeeById(id: number): Observable<Employee>{
    const api = this.apiUrl+'/'+id;
    return this.http.get<Employee>(api);
  }
  
  addEmployee(employee: Employee): Observable<Employee>{
    const newEmployee = { ...employee, id: undefined };//permet de ne pas envoyer l'id
    return this.http.post<Employee>(this.apiUrl, newEmployee);
  }

  deleteEmployee(id: number): Observable<void>{
    const api =this.apiUrl+'/'+id;
    return this.http.delete<void>(api);
  }

  updateEmployee(employee: Employee): Observable<Employee>{
    const api = this.apiUrl+'/'+employee.id;
    return this.http.put<Employee>(api, employee);
  }  
}
