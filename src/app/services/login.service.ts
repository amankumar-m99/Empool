import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl ="http://localhost:8080";
  employeesUrl = this.baseurl + "/employees";
  employeeUrl = this.baseurl + "/employee";

  constructor(private _httpClient:HttpClient) { }

  getEmployees():Observable<Employee[]>{
    return this._httpClient.get<Employee[]>(this.employeesUrl).pipe(catchError(this.handleError));
  }
  getEmployee():Observable<Employee>{
    return this._httpClient.get<Employee>(this.employeeUrl).pipe(catchError(this.handleError));
  }

  postEmployee(employee:Employee):Observable<Employee>{
    console.log('posting', employee);
    console.log(this.employeeUrl);
    return this._httpClient.post<Employee>(this.employeeUrl, employee).pipe(catchError(this.handleError));
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
