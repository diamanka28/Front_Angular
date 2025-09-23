import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://localhost:9000/auth';

  constructor(private http: HttpClient) { }

  login(mail: string, password: string): Observable<{token: string}>{
    return this.http.post<{token: string}>(this.api, {mail: mail, password: password});
  }

  logout(): void{
    localStorage.removeItem('token');
  } 

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  getUser():any {
    const user = localStorage.getItem('user');

    return user ? JSON.parse(user) : null;
  }

}
