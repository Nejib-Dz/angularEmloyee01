import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  uploadEmpImage(id: any, file: File) {
    throw new Error('Method not implemented.');
  }
  getList() {
    throw new Error('Method not implemented.');
  }

  localUrl: string ='http://localhost:8080/api/v1/Employee'
  constructor(private http: HttpClient) { }

  ajouterEmployee(emp : Employee):Observable<Employee>{
   return this.http.post<Employee>(`${this.localUrl}/save`,emp);
  }
  listEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.localUrl}/GetAllEmp`)

  }
  deletEmployee(id:number):Observable<Employee>{
    return this.http.delete<Employee>(`${this.localUrl}/delet/${id}`)

  }

  getEmployeeBydi(id:number):Observable<Employee>{
 return this.http.get<Employee>(`${this.localUrl}/byid/${id}`)
  }
}
